"use client"
import { useState } from 'react';
import axios from "axios"
import { useRouter } from "next/router"

const Login = () => {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('test')
  const createUser = (username, password) => {
    axios.post('http://localhost:8080/', {
      username: username,
      password: password
    })
  }
  const changeRoute = () => {
    router.push('/signup')
  }
  return (
    <div>
      <div className='container'>
        <div className='login'>
          <div className='inputs'>
            <div>This is front-end</div>
            <input className='email' placeholder='Email or phone number' onChange={(e) => setUsername(e.target.value)}></input>
            <input className='pass' placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)}></input>
            <div className='loginButton' onClick={() => createUser(username, password)}>Login</div>
            <div className='loginButton' onClick={() => changeRoute()}>Sign up</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login

