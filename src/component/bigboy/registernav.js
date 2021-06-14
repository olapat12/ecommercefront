import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import logo from '../images/logo.png'
import './big.css'

const RegisterNav = ()=>{

    return(
        <>
    
        <Navbar bg="white" expand="lg" fixed="top">
         <a href='/'><img alt='' src={logo} style={{width: 150, height: 50, cursor: 'pointer'}}  /></a> 
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
       </Navbar.Collapse>
      </Navbar>
       
        </> 
    )
}

export default RegisterNav;