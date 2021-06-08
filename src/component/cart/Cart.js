import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {baseUrl} from '../const'
import useStyles from './styles'
import  {CardMedia, Grid, Typography, Button, CardActions, CardContent,IconButton, Container} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from "@material-ui/core/Tooltip";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useHistory } from "react-router";
import Mynav from '../bigboy/activenav'
import Footer from '../bigboy/footer'


const Cart = ()=>{

  const classes = useStyles()
  const history = useHistory();
  let tempRef = (base64Stringuri) => `${base64Stringuri}`;

  let price = (i) => (i).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')

  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState(0);

  useEffect(()=>{

    getCartList();
 
  }, [])

  const getCartList = ()=>{
    //setTotal(0)
    let tota = 0;
    axios.get(`${baseUrl}cart/cartlist/${localStorage.getItem('id')}`)
    .then(res => {
        setCartList(res.data)
        setCart(res.data.length)
        res.data.forEach(item =>{
            tota = item.price + tota;    
        })
        setTotal(tota)
    })
    .catch(err => console.log(err))
}


  const submit = (id,price) => {

    confirmAlert({
      title: 'Delete',
      message: 'Are you sure you want to remove this item from cartlist ?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => remove(id,price)
        },
        {
          label: 'Keep',
          onClick: () => console.log('Click No')
        }
      ]
    })
  };

  const  remove = (id, price) =>{

    let status;
    axios.delete(`${baseUrl}cart/remove/${id}`)
    .then(res =>{
     status = res.status
    })
    .then(()=>{
      if(status === 200){
        setCart(cart-1)
        setTotal(total-price)
        setCartList(cartList.filter(e => e.id !== id))
      }
    })
    .catch(err => console.log(err))
    // setTotal(t => t - price) 

  }

  return(
        <>
        <Mynav cart={cart} />
        <Container>
        <div className={classes.toolBar} />
           <h2 className={classes.title}>Your shopping cartlist</h2><br/>
            {cart < 1 ? <h4 style={{textAlign: 'center', color: 'gray'}}>Oops, Your cartlist is empty</h4>
            :
            <div>
                <Grid container spacing={3}>
           {cartList && cartList.map(item =>(
                 <Grid item xs={12} sm={4} key={item.id}>
                        <CardMedia style={{width: 300, height: 320}} image={tempRef(item.pictures)} alt={item.name} />
                       <CardContent className={classes.cardContent}>
                           <Typography variant='body1'>{item.productname} </Typography>
                           <Typography variant='body1'>size: {item.size} </Typography>
                           <Typography variant='body'>Price: #{price(item.price)} </Typography>
                       </CardContent>  
                       <CardActions disableSpacing className={classes.cardActions}>
                         <Tooltip title='remove from cartlist' placement='top'
                         classes={{
                           tooltip: classes.customTooltip,
                           arrow: classes.customArrow
                         }}
                         arrow
                         >
                        <IconButton aria-label='remove from cartlist' role='alert' onClick={()=>submit(item.id, item.price)} >
                     <DeleteIcon color='secondary' fontSize='large' />
                      </IconButton>
                      </Tooltip>
                     </CardActions>     
                   </Grid>
           ))}
           
       </Grid>
       <div className={classes.cardDetails}>
         <Typography variant='h5'>
             Subtotal: #{price(total)}
       </Typography>
        <div >
          <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary' onClick={()=> {

          }}>
            Empty Cart
        </Button>
          <span style={{marginLeft: 15}}></span>
        <Button className={classes.checkoutButton} size='large'
        onClick={()=>{
          history.push('/checkout')
        }}
         type='button' variant='contained' color='primary'>
                Checkout
        </Button>
       </div>
        </div>
        <Footer />
            </div>
          }
       </Container>
      
       </>
  )

}

export default Cart;