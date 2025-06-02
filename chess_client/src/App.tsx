// import Square from "./components/Square"
import { Toaster } from "react-hot-toast"
import Board from "./components/Board"
import { MoveProvider } from "./context/MoveProvider"
import './index.css'

function App() {


  return (
    <>
    <MoveProvider>
      <h1>Web Chess</h1>
      <Board />
      <Toaster
      position="bottom-right"
      reverseOrder={false}
      />
    </MoveProvider>
    </>
  )
}

export default App
