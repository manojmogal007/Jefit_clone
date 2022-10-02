import {Routes,Route,Router} from 'react-router-dom'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import Coach from '../Pages/Coach'

export default function AllRoutes(){
    
    return(
       
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/coach" element={<Coach/>}></Route>
        </Routes>
       
    )
}