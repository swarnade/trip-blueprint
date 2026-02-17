import React, { useEffect } from 'react'
import axios from 'axios'
export default function dashboard() {
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response=await axios.get("http://localhost:3000/profile/dashboard",{
          withCredentials:true
        })
        console.log(response.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchData()
  },[])
  return (
    <div>dashboard</div>
  )
}
