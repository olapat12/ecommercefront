import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { baseUrl } from '../const';

const Viewitem = ({id})=>{

    const [item, setItem] = useState({})
    const [pic,setPic] = useState('')

    useEffect(()=>{

        axios.get(`${baseUrl}product/findone/${id}`)
        .then(res =>{
            setItem(res.data)
            setPic(res.data.picture1)
        })
        .catch(err => console.log(err))
    }, [])

    const onView1 = ()=>{

        setPic(`${item.picture1}`)
    }

    const onView2 = ()=>{

        setPic(`${item.picture2}`)
    }
  
    return(
        <div className='backk' style={{backgroundColor: 'white'}}>
            <nav className='views'>
                <h3>{item.name}</h3> 
            </nav>

            <div className='details'>
                <nav className='details-1'>
                   <img src={`${baseUrl}${pic}`} alt='' className='inn' />
                   <div className='img-arr'>
                       <img src={`${baseUrl}${item.picture1}`} className='imm' onMouseEnter={()=>onView1()}  />
                       <img src={`${baseUrl}${item.picture2}`} className='imm' onMouseEnter={()=>onView2()}  />
                   </div>
                </nav>

                <nav className='details-2'>
                    <h6>Size: <span>{item.size}</span> </h6>
                    <h6>Price: <span>#{item.price}</span> </h6>
                    <h6 style={{marginTop: 30}}>Description:</h6>
                    <div className='descc'>
                        <p>{item.description} </p>
                    </div>
                    <button className='buy-btn'>Add To Cart</button>
                    
                </nav>
            </div>
        </div>
    )
}

export default Viewitem;