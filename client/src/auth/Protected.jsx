import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Spinner from "../components/Spinner";

function Protected({children}) {
    const navigation=useNavigate()
    const [isSucces,setSucces]=useState(false)
    

    useEffect(function(){
        async function isVerifed(){
           try {
            const data=await axios.get('http://localhost:3000/api-invoice/v1/protect',{
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
