import { Navigate } from "react-router-dom"
import { useCookies } from 'react-cookie';

const Privateroutes=({children})=> {
    const [cookies] = useCookies(['verificationToken']);
    const isAuth=(cookies.verificationToken) 
    if(!isAuth){
            alert("You Are Not Login Please Login Frist")
        return <>
            <Navigate to="/"/>
        </> 
        
    }
    return  children

}

export default Privateroutes