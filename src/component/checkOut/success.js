import React, { useEffect, useState } from 'react';
import Mynav from '../bigboy/activenav';
import '../bigboy/big.css'


const Success = ()=>{

    const [error, setError] = useState('')

    useEffect(()=>{
       setError(localStorage.getItem('order')) 
    }, [])

    return(
        <>
        <Mynav />
        <div className='badd'><br/>
            <h4 className='trac'>Thank you for shooping with us!!!</h4><br/>
            <nav className='track'><br/>
            <p>Order successfully placed, your order # is <span style={{fontWeight: 'bold'}}>{error}</span></p>
            </nav><br/>
        </div>
        </>
    )
}

export default Success;