import React, {useState} from 'react'
import './form.css'
import Footer from '../footer'
import Button from 'reactstrap-button-loader';
import { baseUrl } from '../../const';
import axios from 'axios'
import { useHistory } from "react-router";
import RegisterNav from '../registernav';

const Signin = ({signup})=>{

    const history = useHistory();
    const [loading, setLoading] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [colorr, setColorr] = useState('') 

    const saveUser = async ()=>{
        
        setLoading(true)

        if( username.trim() === '' || password.trim() === ''){

            setError('Make sure you fill all the fields')
            setColorr('red')
            setLoading(false)
            return
        }

        let data = {
            email: username,
            password: password
        }
           axios.post(`${baseUrl}user/login`, data)
          .then(res => {
               console.log(res.status)
            if(res.status > 200){
                setError('Invalid credentials, please try again')
                setColorr('red')
                setLoading(false)
            }
            else{
               localStorage.setItem('id', res.data.user.id)
               localStorage.setItem('username', res.data.user.username)
               setLoading(false)
               history.push('/')
            }
          })
          .then(data => console.log(data))
          .catch(err => {console.log(err); setLoading(false)} );
    }


    return(
        <>
        <RegisterNav />
        <div className='body'><br/><br/><br/>
      	<form>
         <h2>Sign In</h2><br/>

         <div className='form12'>
         <p style={{marginLeft: 15}}>Username:</p>
         <input id="Email" className='form11' placeholder="Username or email" type="text" onChange={(e)=>{
                setUsername(e.target.value)
            }} />
        </div>
		
        <div className='form12'>
		<p style={{marginLeft: 15}}>Password:</p>
        <input className='form11' placeholder="Password" type="password" onChange={(e)=>{
                setPassword(e.target.value)
            }} />
        </div>
        <span style={{color: colorr, fontSize: 16,  marginLeft: '20%'}}>{error}</span>
		<p>
        <Button className='submit' onClick={saveUser} style={{width: 200, marginLeft: '22%' }} loading={loading}>Login</Button>
		</p>

        <p className='alll'>Don't have an account? <a className='sing' onClick={signup}>Sign up here</a></p>
	</form><br/><br/>
    </div>
      
        </>
    )
}

export default Signin;