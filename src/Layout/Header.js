import React, { useState } from 'react'
import './header.css'
import Example from '../features/Dates'
import CustomizedMenus from '../features/Destination'
import { modalOpen } from "../redux/Action";
import { useDispatch } from 'react-redux';
import BasicModal from '../Components/Modal'
import { Link } from 'react-router-dom'
import { Button, Menu, MenuItem } from '@mui/material'
import CustomizedMenus2 from '../features/Destination2'
import Login from '../Components/Login'
import Who from '../features/Who';
import Sign from '../Components/Sign';

function Header() {

  const [navbar, setNavbar] = useState(false)

  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(modalOpen({ modal: true, selected: "" }))
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const setOpen = () => setAnchorEl(false)

  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setShow(true);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
    setShow1(true);
  };
  const handleClos = () => setShow(false);
  (window).scroll(function () {
    if ((document).scrollTop() > 50) {
      ('nav').addClass('transparent');
    } else {
      ('nav').removeClass('transparent');
    }
  });
  const handleClos1 = () => setShow1(false);
  (window).scroll(function () {
    if ((document).scrollTop() > 50) {
      ('nav').addClass('transparent');
    } else {
      ('nav').removeClass('transparent');
    }
  });

  const changeBackground = () => {
    if (window.scrollY >= 6) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={navbar ? "header-container active" : "header-container"}>
      <div className='h-flex' >
        <Link to="/"><img className='h-logo' src='./Images/logoA.svg' alt='' /></Link>
      </div>
      <div className='search-bar'>
        <CustomizedMenus2 />
        <Example />
        <Who />
      </div>
      <CustomizedMenus />
      <BasicModal />
      <div>
        <button className='modal-button' onClick={handleOpen}><b>CONTACT</b></button>
      </div>
      <Link to="/Wait"><p className='wait-css'>WAITLIST</p></Link>
      <Button
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="sign-in"
      >
        Sign in
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={setOpen}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} className="header-item">Login</MenuItem>
        <MenuItem onClick={handleClose1} className="header-item">Sign up</MenuItem>
      </Menu>
      <Login show={show} close={handleClos} />
      <Sign show1={show1} close1={handleClos1} />

    </nav>
  )
}

export default Header;