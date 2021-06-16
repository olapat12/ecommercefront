import React from 'react'
import './big.css'
import sneaker from '../images/jordan1lowmilitary.jpg'
import hoodie from '../images/114.jpg'
import shirt from '../images/2.jpg'
import slide from '../images/nike23.jpg'

const Featured = ()=>{

    return(
        <div id='featured'>
            <section>
                <h2>Our Featured</h2><br/>
                <p className='here' style={{fontWeight: 'bold', textDecoration: 'underline', fontsize: 23, color: 'rgb(82, 80, 80)'}}>Here you check out our new products with fair price. ?</p>

                <div className='mywrap'>
                    <div className='product'>
                        <img src={sneaker} alt='sneaker'  className='sneak' />
                        <h5 className='p-name'>Nike Sneaker</h5>
                    <h6 className='p-price'>$90.00 <br/>
                    <button className='buy-btn'>Buy now</button>
                    </h6>
                    </div>
                  
                    <div className='product'>
                        <img src={hoodie} alt='hoodie'  className='sneak' />
                        <h5 className='p-name'>Stripe Hoodie</h5>
                    <h6 className='p-price'>$70.00 <br/>
                    <button className='buy-btn'>Buy now</button>
                    </h6>
                    </div>

                    <div className='product'>
                        <img src={shirt} alt='hoodie'  className='sneak' />
                        <h5 className='p-name'>Designer Shirt</h5>
                    <h6 className='p-price'>$70.00 <br/>
                    <button className='buy-btn'>Buy now</button>
                    </h6>
                    </div>

                    <div className='product'>
                        <img src={slide} alt='hoodie'  className='sneak' />
                        <h5 className='p-name'>Slide</h5>
                    <h6 className='p-price'>$70.00 <br/>
                    <button className='buy-btn'>Buy now</button>
                    </h6>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Featured;