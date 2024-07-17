import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Spinner from "../components/Spinner";

function Protected({children}) {
    const navigation=useNavigate()
    const [isSucces,setSucces]=useState(false)
    
    const url=import.meta.env.VITE_IS_PROD==="false"?import.meta.env.VITE_URL_SERVER_LOCAL:import.meta.env.VITE_URL_SERVER_PRODUCTION

    useEffect(function(){
        async function isVerifed(){
           try {
            const data=await axios.get(`${url}/protect`,{
                withCredentials:true
            })
            
            if(data.data.status==="succes")setSucces(true)
           } catch (error) {
            setSucces(false)
            navigation('/login')
           }
        }
        isVerifed()
    },[])

    return isSucces?children:<Spinner/>
}

export default Protected
