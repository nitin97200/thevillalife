import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField } from '@material-ui/core';
import { useState } from 'react';
import { Button } from '@mui/material';
import GLogin from './loginGoogle';
import { Link } from 'react-router-dom';
import SelectAutoWidth from '../features/Dropsign';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >

            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };




    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [passward, setPassward] = useState("")
    const [data, setData] = useState("")

    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
        if (regEx.test(email)) {
            setMessage("")
        } else if (!regEx.test(email) && email === "") {
            setMessage("Please Enter Valid Email.");
        } else {
            console.log("gh")
        }
    };
    const passValidation = () => {
        const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/g
        if (regEx.test(passward)) {
            setData("")
        } else if (!regEx.test(passward) && email !== "") {
            setData("Please Enter Valid Password.");
        } else {
            setData("");
        }

    };

    const formValidation = () => {
        const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/g
        if (email === "" || passward === "") {
            alert("~Please Fill All Fields~");

        } else if (regEx.test(passward)) {
            console.log("")

        } else if (!regEx.test(passward) && email !== "") {
            alert("password field properly")
        } else {
            console.log("")
        }
    }
    const formValidation1 = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
        if (regEx.test(email)) {
            console.log(".")
        } else if (!regEx.test(email) && email !== "") {
            alert("email field properly")
        } else {
            console.log("first")
        }
    }
    const handlChange1 = (e) => {
        setEmail(e.target.value);
        emailValidation();
    };
    const valueChange = (e) => {
        setPassward(e.target.value);
        passValidation();
    }


    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="LOGIN" {...a11yProps(0)} />
                    <Tab label="SIGN UP" {...a11yProps(1)} />

                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <TextField type="text" variant="outlined" className='modal-form' label='Email' value={email} onChange={handlChange1} />
                <p style={{ color: "red" }}>{message}</p><br />
                <TextField type="text" variant="outlined" className='modal-form' label='Password' value={passward} onChange={valueChange} />
                <p style={{ color: "red" }}>{data}</p><br />
                <Button onClick={event => {
                    passValidation();
                    formValidation();
                    formValidation1();
                    event.preventDefault();
                }}
                    className='login-button' style={{ color: "white", backgroundColor: "black" }}>Login</Button><br />
               <Link to='/Forget'> <button className='login-button1'> FORGET YOUR PASSWORD ?</button></Link>
                <hr></hr>
                <GLogin />
      
            </TabPanel>
            <TabPanel value={value} index={1}>
            <h1 className='tabs-h'>Signup</h1>
                <SelectAutoWidth/>
            </TabPanel>
               
        </Box>
    );
}