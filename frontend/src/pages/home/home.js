"use client"
import React, { useState } from 'react';
import axios from "axios"

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const createUser = (username, password) => {
    axios.post('http://localhost:8080/user', {
      username: username,
      password: password
    })
  }

  return (
    <div>
      <div className='container'>
        <div className='login'>
          <div className='inputs'>
            <div>This is front-end</div>
            <div className='loginButton' onClick={() => createUser(username, password)}>Sign up</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
