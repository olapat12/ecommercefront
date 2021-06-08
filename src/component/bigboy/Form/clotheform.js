import React,{useState, useEffect} from 'react'
import Navv from '../nav';
import './form.css'
import Footer from '../footer'
import Button from 'reactstrap-button-loader';
import axios from 'axios'
import { baseUrl } from '../../const';


const images = []
const ClotheForm = ()=>{

    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [size, setSize] = useState('')
    const [conPassword, setConPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState([])

    const changeImage = (e)=>{

        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function (){

            images.push(reader.result)
            setImage(images)
        }

        reader.onerror = function (error) {
            console.log('Error: ', error);
          } 
    }


    const saveUser = ()=>{
        
        setLoading(true)

        let data = {
            name: name,
            description: desc,
            category: category,
            pictures: image,
            price: price,
            size: size
        }
           axios.post(`${baseUrl}product/save`, data)
          .then(res => {
               console.log(res.data)
               setLoading(false)
          })
          .catch(err => {console.log(err); setLoading(false)} );
    }

    return(
        <>
        <Navv />
          <div className='body'><br/><br/><br/>
          <form method="post">
         <h2>Sign Up</h2>

         <p>
            <input id="Email" placeholder="name" type="text" onChange={(e)=> {setName(e.target.value)}} />
        </p>
        <p>
            <input id="Email" placeholder="description" type="text" onChange={(e)=> {setDesc(e.target.value)}} />
        </p>

        <p>
            <input id="password" placeholder="Price" type="text" onChange={(e)=> {setPrice(e.target.value)}} />
        </p>
        <p>
           <select onChange={(e)=>{
               setCategory(e.target.value)
           }}>
               <option> category </option>
               <option value='shoe'>Shoe</option>
               <option value='t-shirt'>T-shirt</option>
               <option value='shirt'>Shirt</option>
               <option value='pant'>Pant</option>
               <option value='hoodie'>Hoodie</option>
               <option value='jean'>Jean</option>
               <option value='jogger'>Jogger</option>
               <option value='sneaker'>Sneaker</option>
               <option value='slide'>Slide</option>
               <option value='short'>Short</option>
               <option value='top and bottom'>Top and Bottom</option>
           </select>
        </p>

         <p>
            <input id="Email" placeholder="size" type="text" onChange={(e)=> {setSize(e.target.value)}} />
        </p>
        <p><input type="file" multiple onChange={changeImage} /></p>
        {/* <p style={{color: colorr, fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>{error}</p> */}
        <p>
            <Button className='submit' onClick={saveUser} loading={loading} >Save</Button>
            
        </p>
    </form>
    </div>
    <Footer/>
    </>
    )
}

export default ClotheForm;