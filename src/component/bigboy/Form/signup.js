import React, {useState} from 'react'
import './form.css'
import Footer from '../footer'
import Button from 'reactstrap-button-loader';
import Signin from './signin';
import axios from 'axios'
import { baseUrl, nodeUrl } from '../../const';
import { useHistory } from "react-router";
import RegisterNav from '../registernav';

const TrackOrder = ()=>{

    const [loading, setLoading] = useState(false)
    const history = useHistory();

    const [step, setStep] = useState(1)

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [colorr, setColorr] = useState('')
    const [conPassword, setConPassword] = useState('')

    const onSignin = ()=>{
        setError('')
        setStep(2)
    }

    const register = ()=>{
        setError('')
        setStep(1)
    }

    const saveUser = ()=>{
        
        setLoading(true)

        if(email.trim() === ''  || username.trim() === '' || password.trim() === ''){

            setError('Make sure you fill all the fields')
            setColorr('red')
            setLoading(false)
            return
        }

        if(password.trim() !== conPassword.trim()){
            setError('Passwords do not match')
            setColorr('red')
            setLoading(false)
            return
        }

        let data = {
            email: email,
            username: username,
            password: password
        }
           axios.post(`${baseUrl}user/save`, data)
          .then(res => {
            //   console.log(res)
            if(res.status === 201){
                setError(res.data)
                setColorr('red')
                setLoading(false)
            }
            else if(res.status === 200){
                setError('Account successfuly created!!!')
                setColorr('green')
                sendEmail()
                //console.log(res.data)
                localStorage.setItem('id', res.data.id)
                localStorage.setItem('username', res.data.username)
                localStorage.setItem('email', res.data.email)
                setTimeout(() => {
                    setError('') 
                }, 2500);
                setLoading(false)
               history.push('/')
            }
          })
          .catch(err => {console.log(err); setLoading(false)} );
    }

    const sendEmail = ()=>{

        let data = {
            email: email,
            username: username
        }
        axios.post(`${nodeUrl}register`, data)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    const paswordCheck = ()=>{

        if(password.trim() !== conPassword){
            setError('Passwords do not match')
            setColorr('red')
        }
    }

    return(
        <>
        <RegisterNav />
          {step === 1 ?
            <div className='body'><br/><br/><br/>
            <form method="post">
           <h2>Register</h2><br/>
            
            <div className='form12'>
           <p style={{marginLeft: 15, width: 90}}>Username:</p>
           <input placeholder="Username" className='form11' type="text" onChange={(e)=> {setUsername(e.target.value)}} />
          </div>

          <div className='form12'>
          <p style={{marginLeft: 15, width: 90}}>Email:</p>
          <input placeholder="Email" className='form11' type="text" onChange={(e)=> {setEmail(e.target.value)}} />
          </div>

          <div className='form12'>
          <p style={{marginLeft: 15, width: 90}}>Password:</p>
          <input placeholder="Password" className='form11' type="password" onChange={(e)=> {setPassword(e.target.value)}} />
          </div>

          <div className='form12'>
          <p style={{marginLeft: 15, width: 90}}>Confirm Password:</p>
          <input placeholder="Confirm password" className='form11' type="password" onMouseLeave={paswordCheck} onChange={(e)=>{setConPassword(e.target.value)}} /><br/>
          </div>
          
          <span style={{color: colorr, fontSize: 16,  marginLeft: '23%'}}>{error}</span>
          <p>
              <Button className='submit' onClick={saveUser} style={{width: 200, marginLeft: '22%' }} loading={loading}>Create My Account</Button>
              {/* <input type="submit" value="Create My Account" id="submit" /> */}
          </p>
  
          <p className='alll'>Already own an account? <a className='sing' onClick={onSignin} >Sign in here</a></p>
      </form><br/><br/>
      </div> : <Signin signup={register} />
        }
        <Footer/>
        </>
    )
}

export default TrackOrder;