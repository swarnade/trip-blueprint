import React from 'react'
import { GoogleLogin } from "@react-oauth/google";

export default function Login() {
    const onSuccess=(credentialResponse)=>{
        alert("Sucuess")
    }
    const onFailure=()=>{
        alert("Failed")
    }
  return (
    <>
    <GoogleLogin
      onSuccess={onSuccess}
      onError={onFailure}
    />
    </>
  )
}
