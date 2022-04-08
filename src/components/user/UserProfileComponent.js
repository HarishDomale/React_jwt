import React, { useEffect,useState } from 'react'
import { Link,useParams } from 'react-router-dom';
import BenificiaryService from '../../services/BenificiaryService'
import authService from '../../services/auth.service';
const UserProfileComponent = () => {

//     const {id}=useParams()
//    const[user,setUser]=useState([])

//    useEffect(() => {
//         getUser();
//    }, [])
   
//    const getUser=()=>{
//     authService.getCurrentUser().then((response)=>{
//         setUser(response.data)
//     }).catch(error=>{
//         console.log(error)
//     })
//    }

   return(
       <div>
           heloo
       </div>
   )
}

export default UserProfileComponent