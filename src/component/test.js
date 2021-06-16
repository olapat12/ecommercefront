import React, {useEffect, useState} from 'react'
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
    const [mycart, setMycart] = useState([])

  useEffect(()=>{

    getCartList();
    getList();
    console.log(localStorage.getItem('id'))

},[])

const add = ()=>{
    setCart(cart+1)
    getCartList()
}

const getList = ()=>{

    axios.get(`${baseUrl}product/list`)
    .then(res => setProducts(res.data))
    .catch(err => console.log(err))
}

const getCartList = ()=>{
    let arr = []
    axios.get(`${baseUrl}cart/cartlist/${localStorage.getItem('id')}`)
    .then(res => {
        res.data.map(i => arr.push(i._id))
        setMycart(arr)
        setCart(res.data.length)
    })
    .catch(err => console.log(err))
}

const paginate = (pageNumber) =>{
    setCurrentPage(pageNumber)
}

    return(
        <>
         <Mynav cart={cart} />
          <Body product={productss} mycart={mycart} currentPage={currentPage} total={productss.length} postPerPage={postPerPage} paginate={paginate} cartMe={add} />
       <Footer />
       </> 
    )
}
export default Test

