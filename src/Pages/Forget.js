import { TextField } from '@mui/material'
import React from 'react'

export default function Forget() {
  return (
    <div className='forget'>
        <h1>***</h1>
        <h1 className='forget-h'>Request Reset Password</h1>
        <p className='forget-p'>Please enter your email below to receive an email to reset your password. Your account email must be confirmed.</p>
        <TextField style={{width:"300px"}} variant='outlined' placeholder='Email'/> <button className='forget-b'>SUBMIT</button>
    </div>
  )
}
