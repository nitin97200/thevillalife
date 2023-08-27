import { TextField } from '@material-ui/core'
import React, { useState } from 'react'
import BasicSelect from './Select'
import PhoneInputGfg from './Phone'
import { Button } from '@material-ui/core';

export default function Form() {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setlname] = useState("")
    const [msg, setmsg] = useState("")

    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
        if (regEx.test(email)) {
            setMessage("")
        } else if (!regEx.test(email) && email !== "") {
            setMessage("Please Enter Valid Email.");
        } else {
            setMessage("");
        }
    };
    const handlChange = (e) => {
        setEmail(e.target.value);
        emailValidation();
    };
    const formValidation = () => {
        if (email === "" || fname === "" || lname === "" || msg === "") {
            alert("~Please Fill All Fields~");
        } else if (email === email || fname === fname || lname === lname || msg === msg) {
            alert("sucess")
        }
    }
    const namesValidation = (e) => {
        setFname(e.target.value)

    }
    const namesValidation2 = (e) => {
        setlname(e.target.value)

    }
    const namesValidation3 = (e) => {
        setmsg(e.target.value)

    }
    //


    return (
        <div>

            <form className='form-clr'>
                <div>
                    <h1>
                        Contact the Villa Life
                    </h1>
                </div>
                <div className='f-pad'>
                    <TextField className='form-text' required placeholder="First Name" variant="outlined" value={fname} onChange={namesValidation} /> <span><TextField className='form-text' placeholder="Last Name" required variant="outlined" value={lname} onChange={namesValidation2} /></span>
                </div>
                <div >
                    <TextField type="text" required className='form-email' placeholder=" Email Address" variant="outlined" value={email} onChange={handlChange}></TextField><br />
                </div>
                <p className='f-pad2'>{message} </p>
                <div className='f-pad'>

                    <PhoneInputGfg />
                    <div>
                        <BasicSelect />
                    </div>
                </div>
                <div className='f-pad' >
                    <TextField
                        id="outlined-multiline-static"
                        placeholder="Message"
                        multiline
                        variant='outlined'
                        rows={4}
                        value={msg}
                        required
                        onChange={namesValidation3}
                        style={{ width: "800px" }}

                    />
                </div>
                <div>
                    <Button  onClick={event => {
                        emailValidation();
                        formValidation();
                        event.preventDefault();
                    }}
                    style={{backgroundColor:"black",color:"white",width:"100px"}}>Submit</Button>
                </div>
            </form>
        </div>
    )
}
