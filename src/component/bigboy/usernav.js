import React,{useState,useEffect} from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import { BsFillBagFill } from "react-icons/bs";
import { BiRun } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import logo from '../images/big.jpg'
import { Tooltip } from '@material-ui/core';
import './big.css'
import { useHistory } from "react-router";

const Navs = ({cart})=>{

    const history = useHistory();
    const [username, setUsername] = useState('')

    useEffect(()=>{
        setUsername(localStorage.getItem('username'))
    }, [])

    const onCart = ()=>{
        history.push('/cart')
    }

    const signOut = ()=>{
        localStorage.removeItem('id')
        localStorage.removeItem('username')
        localStorage.removeItem('email')
        history.push('/register')
    }

    const checkOut = ()=>{
        history.push('/checkout')
    }

    return(
        <>
    
        <Navbar bg="white" expand="lg" fixed="top">
         <a href='/'><img alt='' src={logo} style={{width: '100%', height: '100%', marginTop: -10, cursor: 'pointer'}}  /></a> 
             {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="mr-auto">
              <ul className='ul' style={{marginTop: 10}}>
                   <li><a href='/'>Home</a></li>
                   <li><a href='/trackorder'>Track Order</a></li>
               </ul>
            </Nav><br/>
          <div className='uzi'>
          <Tooltip title='Cartlist' placement='top'>
           <li className='point' onClick={()=> onCart()}><BsFillBagFill color='gray' size={23} />{cart > 0 ? <span className='paint'>{cart}</span> : null} </li>
          </Tooltip> 
         <Tooltip title='Checkout' placement='top'>
             <li className='point'><BiRun color='gray' size={23} onClick={checkOut} /></li>
         </Tooltip> 
         <Tooltip title='Signout' placement='top'>
             <li className='point'><CgProfile color='gray' size={23} onClick={signOut} /> </li>
         </Tooltip>
         <span style={{color: 'gray', fontSize: 14, marginLeft: 10}}>welcome back, {username}</span>
        </div>
       </Navbar.Collapse>
      </Navbar>
       
        </> 
    )
}

export default Navs;