import { Grid } from '@mui/material'
import React from 'react'
import { modalOpen } from "../redux/Action";
import BasicModal from '../Components/Modal';
import { useDispatch } from 'react-redux';
import {Button} from '@mui/material';
import './footer.css'
import { Link } from 'react-router-dom';
function Footer() {
    const dispatch = useDispatch();
    const handleOpen = () => {
        dispatch(modalOpen({ modal: true, selected: "" }))
    }
    return (
        <Grid className='b-color'>
            <Grid>
                <div >
                    <img className='f-img' src='./Images/insta.png' alt=' ' />
                    <img className='f-img' src='./Images/instagrmpic2.png' alt='' />
                    <img className='f-img' src='./Images/instagrmpic3.png' alt='' />
                    <img className='f-img' src='./Images/instagrmpic4.png' alt='' />
                    <img className='f-img' src='./Images/instagrmpic5.png' alt='' />
                </div>
            </Grid>
            <div className='f-text-color'>
                <div>
                    <h4>DESTINATIONS</h4>
                    <p>Barbados</p>
                    <p>St. Martin</p>
                    <p>St. Barts</p>
                </div>
                <div>
                    <h4>ABOUT</h4>
                  <Link to="/Team"> <p className='white'>Our team</p></Link>  
                </div>
                <div>
                    <h4>CONTACT</h4>
                    <BasicModal/>
                    <Button variant='contained'style={{backgroundColor:"transparent",boxShadow:"none"}} onClick={handleOpen}><b>contact</b></Button>
                </div>
                <div>
                    <div className='div-flex'>
                        <h4>NEWSLETTER</h4>
                        <img className='fb-icon' src='./Images/fb.svg' alt='' />
                        <img className='f-icon' src='./Images/insta.svg' alt='' />
                        <img className='f-icon' src='./Images/linkedin.svg' alt='' />
                    </div>
                    <input className='email-input' placeholder='Enter your email' />  <button className='f-button'><b>Sign Up</b></button>
                </div>
            </div>
            <hr></hr>
            <div className='hr-color'>
                <p>© 2023 Apptunix · Privacy · Terms<span className='span'>$ USD</span></p>
            </div>
        </Grid>
    )
}

export default Footer;