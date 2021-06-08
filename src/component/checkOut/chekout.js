import React, { useEffect, useState } from 'react';
import Mynav from '../bigboy/activenav';
import Footer from '../bigboy/footer';
import './checkout.css'
import axios from 'axios'
import { baseUrl, nodeUrl } from '../const';
import Nigeria from '../address'
import Button from 'reactstrap-button-loader';
import { useHistory } from "react-router";

let mycity =[];
const Chekout = ()=>{

    const history = useHistory();
    const [cart, setCart] = useState(0);
    const [cartlist, setCartlist] = useState([]);
    const [total, setTotal] = useState(0);
    const [free, setFree] = useState(2500);
    const [alltotal, setAlltotal] =  useState(0)
    const [addres, setAddres] = useState('')
    const [phone, setPhone] = useState('');
    const [myList, setMyList] = useState([]);
    const [myname, setMyname] = useState([]);
    const [cities, setCities] = useState([]);
    const [states, setStates] = useState([])
    const [state, setState] = useState('')
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false)

    let price = (i) => (i).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')

    useEffect(()=>{

        Nigeria.map(list =>{
            setMyList(list)
           let {name, cities} = list
            myname.push(name)
           cities.map((item)=>{
            mycity.push(item)
          })
          })
          setCities(mycity)
          setMyList(Nigeria)
          setStates(myname) 
        getCartList()
    }, [])

    const handleChange = (e) =>{
     
        setState(e.target.value)
        setCities(myList.find(city => city.name === e.target.value).cities)
       
    }

    const cityChange = (e)=>{
        setCity(e.target.value)
    }

    const getCartList = ()=>{
        let tota = 0;
        axios.get(`${baseUrl}cart/cartlist/${localStorage.getItem('id')}`)
        .then(res => {
            setCartlist(res.data)
            setCart(res.data.length)
            res.data.forEach(item =>{
                tota = item.price + tota;    
            })
            setTotal(tota)
            setAlltotal(tota+free)
        })
        .catch(err => console.log(err))
    }

    const onOrder = (e)=>{

        e.preventDefault();
        setLoading(true)
        let arr = [];
        
        cartlist.map(item =>{
            arr.push({
                price : item.price,
                size : item.size,
                productname : item.productname,
                pictures: item.pictures,
                productid: item.id
            })
        })

        let status;

        let data = {
            name: localStorage.getItem('email'),
            deliveryaddress: addres,
            phone: phone,
            states: state,
            city: city,
            totalprice: alltotal,
            orderr: arr
        }
        let oderid = ''

        axios.post(`${baseUrl}order/save`, data)
        .then(res => {
            status = res.status;
            oderid = res.data.orderid
            
        })
        .then(()=>{
            if(status === 200){
                setCart(0)
                sendEmail(oderid)
                cartlist.forEach(item =>{
                    updateCart(item.id)
                })
                setLoading(false)
                localStorage.setItem('order', oderid)  
                history.push('/success') 
            }

            console.log('error')
        })
        .catch(err => console.log(err))
    }

    const sendEmail = (e)=>{

        let data = {
            email: localStorage.getItem('email'),
            username: localStorage.getItem('username'),
            orderid: e
        }
        axios.post(`${nodeUrl}send`, data )
        .then(res => {
            console.log(res.status)
            // setLoading(false)
        } )
        .catch(err => console.log(err))
    }

    const updateCart = (idd)=>{

        let data = {
            username: 'hello',
            password: 'world'
        }
        axios.put(`${baseUrl}cart/update/${parseInt(idd)}`, data)
        .then(res => console.log(res.status))
        .catch(err => console.log(err))
    }

    return(
        <>
        <Mynav cart={cart} />
        {cart < 1 ? <h4 style={{textAlign: 'center', color: 'gray', marginTop: 150}}>Oops, Your cartlist is empty</h4> :
            <>
            <div className="card">
    <div className="card-top border-bottom text-center"> <a href="#"> Back to shop</a> <span id="logo">BBBootstrap.com</span> </div>
    <div className="card-body">
        <div className="row upper"> <span>Delivery Address</span> </div>
        <div className="row">
            <div className="col-md-7">
                <div className="left border">
                    <div className='cheat'>
                    <div className='ben'>
                            <p style={{ color: 'gray'}}>Phone number :</p>
                            <input className='inv' placeholder='Phone number' value={phone} onChange={(e)=>{
                                setPhone(e.target.value)
                            }} />
                        </div>

                        <div className='ben'>
                            <p style={{ color: 'gray'}}>Address :</p>
                            <input className='inv' placeholder='Address' value={addres} onChange={(e)=>{
                                setAddres(e.target.value)
                            }} />
                        </div>

                        <div className='ben'>
                            <p style={{marginRight: 15, color: 'gray'}}>State :</p>
                            <select className='inss' onChange={handleChange} value={state} >
                                {myname && myname.map((e,i)=>(
                                    <option key={i} value={e}> {e}</option>
                                ))}
                            </select>
                        </div>

                        <div className='ben'>
                            <p style={{marginRight: 15, color: 'gray'}}>City :</p>
                            <select className='inss' onChange={cityChange} value={city} >
                                {cities && cities.map((e,i)=>(
                                    <option key={i} value={e}> {e}</option>
                                ))}
                            </select>
                        </div><br/><br/>

                         <p style={{marginLeft: 15, color: 'gray'}}>Mailing Address: <span style={{marginLeft: 15}}>{addres} {state} {city} </span> </p>           
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <div className="right border">
                    <div className="header">Order Summary</div>
                    <p>{cart} items</p>
                    <div className="row item">
                        {cartlist && cartlist.map(e =>(
                            <>
                            <div className="col-4 align-self-center"><img className="img-fluid" src={e.pictures} alt='img' style={{marginBottom: 15}} /></div>
                            <div className="col-8">
                            <div className="row"><b>#{price(e.price)}</b></div>
                            <div className="row text-muted">{e.productname}</div>
                            <div className="row">Size: {e.size}</div>
                        </div>
                            </>
                        ))}
                      
                    </div>
                    <hr/>
                    <div className="row lower">
                        <div className="col text-left">Subtotal</div>
                        <div className="col text-right"># {price(total)}</div>
                    </div>
                    <div className="row lower">
                        <div className="col text-left">Delivery</div>
                        <div className="col text-right"># {price(free)}</div>
                    </div>
                    <div className="row lower">
                        <div className="col text-left"><b>Total to pay</b></div>
                        <div className="col text-right"><b># {price(alltotal)}</b></div>
                    </div>
                    <div className="row lower">
                    </div> <Button loading={loading} style={{width: 200, marginLeft: '18%'}} onClick={onOrder}>Place Order</Button>
                </div>
            </div>
        </div>
    </div>
    <div> </div>
    </div>
        <Footer/>
            </>
         }
        
        </>
    )
}

export default Chekout;