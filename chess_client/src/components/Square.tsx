import { Dispatch, SetStateAction, useContext } from "react"
import parse from 'html-react-parser'
import DOMPurify from "dompurify"
import { MoveContext } from "../context/MoveProvider"
import useApi from "../hooks/useApi"
import toast from "react-hot-toast"

type SquareProps = {
    name : string,
    color : string,
    svg : string | Node,
    setSquarePieces : Dispatch<SetStateAction<{ [key : string]: string | undefined}>>

}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Square = ({name, color, svg, setSquarePieces}: SquareProps) => {

    const {
        firstSelection,
        setFirstSelection,
        fromSquare,
        setFromSquare,
        toSquare,
        setToSquare
    } = useContext(MoveContext)


    const {makeMove} = useApi();

    const handleClick = async () => {
        if (!firstSelection) {
            setFirstSelection(true)
            setFromSquare(name)
    }else{
        setFirstSelection(false)
        setToSquare(name)
        if (toSquare === name && name.length > 0 && name !== fromSquare) {
            const [ status, data ] = await makeMove(fromSquare + name); 
            if(status === 200){
                if(!data.error){
                    if(data.legal_moves && data.legal_moves?.length === 0){
                        toast.success('Game Over!')
                    }setSquarePieces(prev => ({
                        ...prev,
                        [fromSquare]: '',
                        [name]: prev[fromSquare],
                    }))
                }else{
                    toast.error(data.error)
                }
            }else{
                toast.error('Ah error ocurred',)
            }
    }
    }}

    return (
    <>
        <div className="container" style={
            {
                backgroundColor: firstSelection && fromSquare === name ? '#2DC337' : color,
            }
        } onClick={handleClick}
        >
            <div className="name">
                {name}
            </div>
            {parse(DOMPurify.sanitize(svg))}
        </div>
    </>
)
}

export default Square