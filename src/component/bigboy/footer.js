import React from 'react'
import logo from '../images/logo.png'
import { FaInstagramSquare, FaTwitterSquare, FaFacebookF } from "react-icons/fa";


const Footer = ()=>{

    return(
        <>
        <footer className='mt-5 py-5' style={{backgroundColor: 'black', height: 'auto'}}>
            <div className='row container mx-auto pt-5'>
                <div className='footer-one col-lg-3 col-md-6 col-12'>
                    <img src={logo} alt='logo' style={{width: 150, height: 50}} />
                    <p style={{color: 'white'}}>Shop your best products here.</p>
                </div>

                <div className='footer-one col-lg-3 col-md-6 col-12'>
                    <h5 className='pb-2' style={{color: 'white'}}>Featured</h5>
                    <ul className='text-uppercase list-unstyled'>
                        <li style={{color: 'rgb(115, 115, 117)'}}>Men</li>
                        <li style={{color: 'rgb(115, 115, 117)'}}>Women</li>
                        <li style={{color: 'rgb(115, 115, 117)'}}>Sneakers</li>
                        <li style={{color: 'rgb(115, 115, 117)'}}>Shirts</li>
                        <li style={{color: 'rgb(115, 115, 117)'}}>Shoe</li>
                    </ul>
                </div>

                <div className='footer-one col-lg-3 col-md-6 col-12'>
                    <h5 className='pb-2' style={{color: 'white'}}>Contact Us</h5>
                   <div>
                       <h6 className='text-uppercase' style={{color: 'rgb(115, 115, 117)'}}>Address</h6>
                       <p style={{color: 'rgb(115, 115, 117)'}}>116, Allen road, Ikeja, Lagos</p>
                   </div>

                   <div>
                       <h6 className='text-uppercase' style={{color: 'rgb(115, 115, 117)'}}>Contact</h6>
                       <p style={{color: 'rgb(115, 115, 117)'}}>08084158414</p>
                   </div>

                   <div>
                       <h6 className='text-uppercase' style={{color: 'rgb(115, 115, 117)'}}>Email</h6>
                       <p style={{color: 'rgb(115, 115, 117)'}}>bigboyapparel@gmail.com</p>
                   </div>
                </div>

                <div className='footer-one col-lg-3 col-md-6 col-12'>
                    <h5 className='pb-2' style={{color: 'white'}}>Social Media</h5>
                    <ul className='text-uppercase list-unstyled'>
                        <li><FaInstagramSquare color='rgb(115, 115, 117)' size={23} /> <span style={{color: 'rgb(115, 115, 117)'}}>@bigboyapparel</span></li>
                        <li><FaTwitterSquare color='rgb(115, 115, 117)' size={23} /> <span style={{color: 'rgb(115, 115, 117)'}}>@bigboyapparel</span></li>
                        <li><FaFacebookF color='rgb(115, 115, 117)' size={23} /> <span style={{color: 'rgb(115, 115, 117)'}}>bigboyapparel</span></li>
                        
                    </ul>
                </div>
            </div>

            <div className='copyright mt-5'>
                <div className='row container mx-autp'>

                    <div className='col-lg-3 col-md-6 col-12'>
                        <img />
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;