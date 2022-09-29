import {Routes,Route} from 'react-router-dom'
import Signup from '../Pages/Signup'

export default function AllRoutes(){

    return(
        <Routes>
            <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
    )
}