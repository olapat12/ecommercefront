import React, {useEffect, useState} from 'react'
import './big.css'
import nike from '../images/nikelogo.jpg'
import adidas from '../images/adidaslogo.jpg'
import lacoste from '../images/lacoste.png'
import newbalance from '../images/newbalance.jpg'
import Featured from './featured'
import puma from '../images/pumaa.png'
import Pagination from 'react-js-pagination'
import { baseUrl } from '../const'
import axios from 'axios'
import useStyles from './styles'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Tooltip } from '@material-ui/core';
import  {CardMedia, Grid, Typography,CardContent, Card} from '@material-ui/core'
import { useHistory } from "react-router";

const Body = ({product, cartMe, currentPage, postPerPage,paginate, total, mycart})=>{

    let price = (i) => (i).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    const classes = useStyles()
    const history = useHistory();

    const view = (idd)=>{

        history.push(`/view/${idd}`)
    }

    const onAddtoCart = (pid)=>{

        let status;
        let data = {
            productid: pid
        }

        axios.post(`${baseUrl}cart/add/${localStorage.getItem('id')}`,data)
        .then(res => {
            status = res.status;
        })
        .then(()=>{
            if(status === 200){
                cartMe();
            }
        })
        .catch(err => history.push('/register'))

    }

        const indexoflastPost = currentPage * postPerPage;
        const indexoffirstPost = indexoflastPost - postPerPage;
        product = product.slice(indexoffirstPost, indexoflastPost);

    return(
            <>
             <div className='hero-wrapper'>
             <div className='hero-section' >
            <h1 style={{textAlign: 'center'}}>Clothing made for you</h1>
            <p style={{textAlign: 'center'}}>Find the perfect outfit.</p>
        </div>

        <section  className='contain'>
                <img className='logoss' src={nike} alt='nike' />
                <img className='logoss'  src={adidas} alt='adidas' />
                <img className='logoss'  src={lacoste} alt='lacoste' />
                <img className='logoss'  src={newbalance} alt='new balance' />
                <img className='logoss'  src={puma} alt='puma' />
        </section>
        <Featured />
        </div>

        <main>
            <div className='arrival-selection'>
               <div className='wrapper'>
               <div className='section-header'>
                    <h2><span className='text-main'>Ne</span>w Arrivals</h2>
        <main>
            <div className={classes.toolbar} />
           <Grid container justify='center' spacing={4} >
                      {product && product.map(product =>{
                          
                          let added = mycart.includes(product._id) ? <Typography variant='body1' style={{fontWeight: 'bolder', color: 'red', marginBottom: 5}}>
                           Added
                       </Typography>: <AiOutlineShoppingCart color='gray' size={26} />
                          return(
                            <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
                            <Card className={classes.root}>
                      <CardMedia style={{width: '99%', height: 330, cursor: 'pointer'}} image={`${baseUrl}${product.picture1}`} title={product.name} onClick={()=>view(product._id)} />
                 
           <CardContent>
             <div className={classes.cardContent}>
                 <Typography variant='body1' style={{fontWeight: 'bold', color: 'black'}} gutterBottom>
                     {product.name}
                 </Typography>
                 <Typography variant='body2'>
                    #{price(product.price)}
                 </Typography>
             </div>
             <Typography variant='body2'>
                     {product.category}
                 </Typography>
                 <Typography  variant='body2'>
                    Size: {product.size}
                 </Typography>
         </CardContent>
         
         <Tooltip title='add to bag' placement='top' onClick={()=> onAddtoCart(product._id)}>
         <p style={{float: 'right', cursor: 'pointer', marginRight: 15, marginBottom: 15}}>
          {added}
         </p>
         </Tooltip>
     </Card>
      </Grid> 
                          )
                      })}
           </Grid>
       </main>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 40}}>
                    <Pagination
              itemClass="page-item"
              linkClass="page-link"
              activePage={currentPage}
              itemsCountPerPage={postPerPage}
              totalItemsCount={total}
              pageRangeDisplayed={2}
              onChange={paginate}
              prevPageText="Prev"
              firstPageText="First"
              lastPageText="Last"
              nextPageText="Next"
            />
                    </div>
                </div>
               </div>
            </div>
        </main> 
      
        </>
    )
}

export default Body;