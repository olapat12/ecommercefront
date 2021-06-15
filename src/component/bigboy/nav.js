import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import logo from '../images/big.jpg'
import './big.css'

const Navv = ()=>{

    return(
        <>
    
        <Navbar bg="white" expand="lg" fixed="top">
         <a href='/'><img alt='' src={logo} style={{width: '100%', height: '100%', marginTop: -10}}  /></a> 
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="mr-auto">
              <ul className='ul' style={{marginTop: 10}}>
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