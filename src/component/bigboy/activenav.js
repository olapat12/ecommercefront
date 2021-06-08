import React,{useEffect, useState} from 'react'
import Navv from './nav'
import Usernav from './usernav'

const Mynav = ({cart})=>{

    const [id, setId] = useState('')

    useEffect(()=>{

        if(localStorage.getItem('id') === null || localStorage.getItem('id') === undefined){
            setId(1)
        }

    })

    return(
        <>
        {id === 1 ? <Navv/> : <Usernav cart={cart} />}
        </>
    )
}
export default Mynav;