import React from 'react'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import { BsFillBagFill } from "react-icons/bs";
import { BiRun, BiHelpCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import logo from '../images/logo.png'
import { Tooltip } from '@material-ui/core';
import './big.css'

const Navv = ()=>{

    return(
        <>
    
        <Navbar bg="white" expand="lg" fixed="top">
         <a href='/'><img alt='' src={logo} style={{width: 150, height: 50, cursor: 'pointer'}}  /></a> 
             {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="mr-auto">
              <ul className='ul'>
                   <li><a href='/'>Home</a></li>
                   <li><a href='/register'>Sign In</a></li>
                   <li><a href='/trackorder'>Track Order</a></li>
               </ul>
            </Nav>
       </Navbar.Collapse>
      </Navbar>
       
        </> 
    )
}

export default Navv;