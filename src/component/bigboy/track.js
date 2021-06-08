import React, {useEffect, useState} from 'react'
import './big.css'
import Button from 'reactstrap-button-loader';
import axios from 'axios';
import { baseUrl } from '../const';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Mynav from './activenav';

const TrackOrder = ()=>{

    const [loading, setLoading] = useState(false)
    const [orderid, setOrderid] = useState('')
    const [error, setError] = useState('')
    const [order, setOrder] = useState({})
    const [step, setStep] = useState(1);
    const [open, setOpen] = useState(false);
    const [cart, setCart] = useState(0);

    let price = (i) => (i).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')

    useEffect(()=>{
        getCartList()
    })

    const getCartList = ()=>{
        
        axios.get(`${baseUrl}cart/cartlist/${localStorage.getItem('id')}`)
        .then(res => {
            setCart(res.data.length)
        })
        .catch(err => console.log(err))
    }

    const onSearch = ()=>{

        if(orderid.trim() === ' '){
            return
        }
        setLoading(true)
        axios.get(`${baseUrl}order/find/${orderid}`)
        .then(res =>{
            console.log(res.data)
            setError('')
            setOrder(res.data)
            setLoading(false)
            setStep(2)
            setOpen(true)
        })
        .catch(() => {
            setError('No record can be found for the order # provided, please re-enter the order #')
            setLoading(false)
        })
    }

    const App = () => {
        
      
        // const onOpenModal = () => setOpen(true);
        const onCloseModal = () => setOpen(false);
      
        return (
          <div>
            {/* <button onClick={onOpenModal}>Open modal</button> */}
            <Modal open={open} onClose={onCloseModal} center>
              <h2>{orderid}</h2>
               <div className="col-md-5" style={{marginLeft: 'auto', marginRight: 'auto'}}>
                <div className="right border">
                    <div className="header" style={{textAlign: 'center'}}>Order Summary</div>
                    <hr/>
                    <p style={{textAlign: 'center'}}>{order.orderr.length} items</p>
                    <div className="row item">
                        {order && order.orderr.map(e =>(
                            <>
                            <div className="col-4 align-self-center"><img className="img-fluid" src={e.pictures} /></div>
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
                        <div className="col text-right"># {price(order.totalprice)}</div>
                    </div>
                </div>
            </div>
            </Modal>
          </div>
        );
      };

    return(
        <>
        <Mynav cart={cart} />
        <div className='badd'><br/>
            <h4 className='trac'>Track Order</h4><br/>
            <nav className='track'><br/>
            <p className='err'>{error}</p>
                <input className='inputt' placeholder='Enter Order ID' onChange={(e)=>{
                    setOrderid(e.target.value)
                }} />
                <p className='ruless'></p>
                <p className='yours'>Your tracking number can be found in your email address</p>
            </nav><br/>
            <Button className='loads' style={{width: 200}} loading={loading} onClick={onSearch} >Track</Button><br/>
        </div>
        {step !== 1 ? <App/> : null}
        
        
        </>
    )
}

export default TrackOrder;