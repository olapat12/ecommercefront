import React,{useState,useEffect} from 'react'
import shirt from '../images/2.jpg'
import {Product } from './json'
import axios from 'axios'
import { baseUrl } from '../const';

let items;
const Viewitem = ({id})=>{

    const [item, setItem] = useState({})
    const [pic,setPic] = useState('')
    const [image, setImage] = useState([])

    useEffect(()=>{

        axios.get(`${baseUrl}product/item/${id}`)
        .then(res =>{
            setItem(res.data)
            setPic(res.data.pictures[0])
            setImage(res.data.pictures)
        })
        .catch(err => console.log(err))
        // items = Product.filter(e => e.id === id)
        // items = items[0]
        // setItem(items)
        // setImage(items.pictures)
        // console.log(items.pictures[0]) 
        // setPic(items.pictures[0])
    }, [])

    const onView = (e)=>{

        setPic(e)
    }
    
    const onOut = ()=>{
        setPic(item.pictures[0])
    }

    return(
        <div className='backk'>
            <nav className='views'>
                <h3>{item.name}</h3> 
            </nav>

            <div className='details'>
                <nav className='details-1'>
                   <img src={pic} alt='' className='inn' />
                   <div className='img-arr'>
                       {image && image.map((e,i)=> <img src={e} alt='' onMouseEnter={()=>onView(e)} onMouseLeave={()=> onOut()} className='imm' key={i} />)}
                   </div>
                </nav>

                <nav className='details-2'>
                    <h6>Size: <span>{item.size}</span> </h6>
                    <h6>Price: <span>#{item.price}</span> </h6>
                    <h6 style={{marginTop: 30}}>Description:</h6>
                    <div className='descc'>
                        <p>{item.description} </p>
                    </div>

                    {/* <h6 className='featt'>Features:</h6>
                    <ul>
                        <li>Black and white</li>
                        <li>leather</li>
                        <li>Low</li>
                    </ul><br/> */}
                    <button className='buy-btn'>Add To Cart</button>
                    
                </nav>
            </div>
        </div>
    )
}

export default Viewitem;