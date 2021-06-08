import React, {useState} from 'react'
import './big.css'
import nike from '../images/nikelogo.jpg'
import adidas from '../images/adidaslogo.jpg'
import lacoste from '../images/lacoste.png'
import newbalance from '../images/newbalance.jpg'
import Featured from './featured'
import puma from '../images/pumaa.png'
import Pagination from 'react-js-pagination'
import Viewitem from './viewItem'
import { baseUrl } from '../const'
import axios from 'axios'



const Body = ({product, cartMe, currentPage, postPerPage,paginate, total})=>{

    const [step, setStep] = useState(1)
    const [id, setId] = useState()
    let price = (i) => (i).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')

    const view = (idd)=>{

        setId(idd)
        setStep(2)
    }

    const onAddtoCart = (image,pid)=>{

        let status;
        let data = {
            userid: localStorage.getItem('id'),
            pictures: image,
            productid: pid
        }

        axios.post(`${baseUrl}cart/save`,data)
        .then(res => {
            status = res.status;
        })
        .then(()=>{
            if(status === 200){
                cartMe();
            }
        })
        .catch(err => console.log(err))

    }

        const indexoflastPost = currentPage * postPerPage;
        const indexoffirstPost = indexoflastPost - postPerPage;
        product = product.slice(indexoffirstPost, indexoflastPost);

    return(
        <>
         {step == 1 ? 
            <>
             <div className='hero-wrapper'>
             <div className='hero-section' >
            <h1>Clothing made for you</h1>
            <p>Find the perfect outfit.</p>
        </div>

        <section  className='contain'>
                <img className='logoss' src={nike} alt='nike' />
                <img className='logoss'  src={adidas} alt='adidas' />
                <img className='logoss'  src={lacoste} alt='lacoste' />
                <img className='logoss'  src={newbalance} alt='new balance' />
                <img className='logoss'  src={puma} alt='puma' />
        </section>


        <Featured />
        <div className='hero-search'>
            <div className='wrapper'>
                <div className='search-grid'>
                    <div>
                        <select name='' className='form-control'>
                            <option>-- Category --</option>
                        </select>
                    </div>
                    <div>
                        <select name='' className='form-control'>
                            <option>-- Select --</option>
                        </select>
                    </div>
                    <div>
                        <select name='' className='form-control'>
                            <option>category</option>
                        </select>
                    </div>

                </div>
            </div>
        </div>
        </div>

        <main>
            <div className='arrival-selection'>
               <div className='wrapper'>
               <div className='section-header'>
                    <h2><span className='text-main'>Ne</span>w Arrivals</h2>
                    <div className='mywrap'>
                        {product && product.map(e => {

                            return(
                             <div className='product' key={e.id} >
                                <img src={e.pictures[0]} alt='image' onClick={()=> view(e.id)} className='sneak'  />
                                <h5 className='p-name'>{e.name} </h5>
                                <h6>Size: {e.size}</h6>
                                <h6 className='p-price'>#{price(e.price)} <br/>
                                <button className='buy-btn' onClick={()=> onAddtoCart(e.pictures[0],e.id)}>Add to Cart</button>
                                </h6>
                            </div>
                            )
                        })}
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                    <Pagination
              itemClass="page-item"
              linkClass="page-link"
              activePage={currentPage}
              itemsCountPerPage={postPerPage}
              totalItemsCount={total}
              pageRangeDisplayed={3}
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
      
            </> : <Viewitem id={id} />
        }
        </>
    )
}

export default Body;