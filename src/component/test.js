import React, {useEffect, useState} from 'react'
// import useStyles from './styles'
import Body from './bigboy/body'
import Footer from './bigboy/footer'
import axios from 'axios'
import { baseUrl } from './const'
import Mynav from './bigboy/activenav'

const Test = ()=>{

    const [productss, setProducts] = useState([])
    const [cart, setCart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(12)

  useEffect(()=>{

    getCartList();
    getList();

}, [])

const add = ()=>{
    setCart(cart+1)
}

const getList = ()=>{

    axios.get(`${baseUrl}product/list`)
    .then(res =>{
        // setProducts(res.data.filter(e => e.category !== 'sneaker' && e.name !== '' ))
        setProducts(res.data)
    })
    .catch(err => console.log(err))
}

const getCartList = ()=>{

    axios.get(`${baseUrl}cart/cartlist/${localStorage.getItem('id')}`)
    .then(res => setCart(res.data.length))
    .catch(err => console.log(err))
}

const paginate = (pageNumber) =>{
    // this.setState({currentPage: pageNumber})
    setCurrentPage(pageNumber)
}

    return(
        <>
         <Mynav cart={cart} />
          <Body product={productss} currentPage={currentPage} total={productss.length} postPerPage={postPerPage} paginate={paginate} cartMe={add} />
        
        {/* <main className={classes.content}> */}
        {/* <main>
            <div className={classes.toolbar} />
           <Grid container justify='center' spacing={4} >
                      {products && products.map(product =>(
                          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                               <Card className={classes.root}>
                               {product.pictures.map(image =>(
                         <CardMedia style={{width: '85%', height: 350}} image={tempRef(image)} title={product.name} />
                    ))}
              <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h5'>
                        {product.price}
                    </Typography>
                </div>
                <Typography color='black' variant='body1'>
                        {product.category}
                    </Typography>
                    <Typography color='black' variant='body1'>
                       Size: {product.size}
                    </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label='Add to Cart' onClick={()=> handleToCart(product.id) }>
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
                          </Grid>   
                      ))}
           </Grid>
       </main> */}
       <Footer />
       </> 
    )
}
export default Test

