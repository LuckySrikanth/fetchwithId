import {Switch} from "react-dom"
import CharcterIdPage from './assets/CharcterIdPage'
import { Route, Routes } from 'react-router-dom'
import Character from "./assets/Character"
// import QueryId from "./query/QueryId"




const App = () => {
  return (
    <>
    <Routes>
    <Route exact path = "/" element = {<Character />}/>
    <Route exact path = "/:id" element = {<CharcterIdPage />} />
    </Routes>
    </>
  )
}


export default App