import { Dispatch, SetStateAction, createContext, useState } from "react";

type MoveContextprops = {
    firstSelection: boolean,
    setFirstSelection: Dispatch<SetStateAction<boolean>>
    fromSquare: string,
    setFromSquare: Dispatch<SetStateAction<string>>
    toSquare: string,
    setToSquare: Dispatch<SetStateAction<string>>
}

export const MoveContext = createContext<MoveContextprops>({
    firstSelection: false,
    setFirstSelection: () => { },
    fromSquare: "",
    setFromSquare: () => { } ,
    toSquare: "",
    setToSquare: () => { }
})


type MoveProviderProps = {
    children: React.ReactNode
}

export function MoveProvider({children}: MoveProviderProps){

    const [firstSelection, setFirstSelection] = useState<boolean>(false)
    const [fromSquare, setFromSquare] = useState<string>("")
    const [toSquare, setToSquare] = useState<string>("")

    return (
            <MoveContext.Provider 
            value={{
                firstSelection,
                setFirstSelection,
                fromSquare,
                setFromSquare,
                toSquare,
                setToSquare}}>
                {children}
            </MoveContext.Provider>
        )
}