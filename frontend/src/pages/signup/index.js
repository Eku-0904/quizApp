// "use client"
// import React, { useState } from 'react';
// import axios from "axios"

// const signup = () => {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')

//   const createUser = (username, password) => {
//     axios.post('http://localhost:8080/user', {
//       username: username,
//       password: password
//     })
//   }

//   return (
//     <div>
//       <div className='container'>
//         <div className='login'>
//           <div className='inputs'>
//             <div>This is front-end</div>
//             <input className='email' placeholder='Email or phone number' onChange={(e) => setUsername(e.target.value)}></input>
//             <input className='pass' placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)}></input>
//             <div className='loginButton' onClick={() => createUser(username, password)}>Sign up</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default signup


"use client"
import React, { useState } from 'react';
import axios from "axios"

const signup = () => {
  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState('')

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const [required, setRequired] = useState('')

  const createUser = (username, password) => {
    axios.post('http://localhost:8080/user', {
      username: username,
      password: password,
      email
    })
  }
  const handleChangeUserName = (event) => {
    const name1 = event.target.value
    if (name1.length <= 4) {
      setUsernameError("must be more than 4 characters")
    } else {
      setUsernameError("")
    }
    setUsername(event.target.value)
  }

  const handleChangeEmail = (event) => {
    const email1 = event.target.value
    if (!email1.includes("@")) {
      setEmailError("must be include /@/")
    } else {
      setEmailError("")
    }
    setEmail(event.target.value)
  }

  const handleChangePassword = (event) => {
    const pass1 = event.target.value
    setPassword(event.target.value)
    if (pass1.length < 8) {
      setPasswordError("at least 8")
    } else {
      setPasswordError("")
    }
    setPassword(event.target.value)
  }
  const handleSignup = () => {
    if (username === "" || email === "" || password === "") {
      setRequired('Please enter all inputs')
    }
    createUser(username, password, email)
  }



  return (
    <div>
      <div className='container'>
        <div className='login'>
          <div className='inputs'>
            <div>This is front-end</div>

            <input
              className='email'
              placeholder='Email or phone number'
              onChange={handleChangeEmail}

            ></input>
            <div style={{ color: "red" }}>{emailError}</div>
            <input
              className='email'
              placeholder='username'
              // onChange={(e) => setUsername(e.target.value)}
              value={username}
              onChange={handleChangeUserName}
            ></input>
            <div style={{ color: "red" }}>{usernameError}</div>
            <input
              className='email'
              placeholder='Password'
              type='password'
              onChange={handleChangePassword}
            ></input>
            <div style={{ color: "red" }}>{passwordError}</div>
            {/* <div className='loginButton' onClick={() => createUser(username, password)}>Sign up</div> */}
            <div className='loginButton' onClick={handleSignup}>Sign up</div>
            <div style={{ color: "red" }}>{required}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default signup

// import React, { useState } from 'react';
// import axios from 'axios';

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [usernameError, setUsernameError] = useState('');

//   const handleChangeUserName = (event) => {
//     setUsername(event.target.value);
//   };

//   const handleChangeEmail = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleSignup = () => {
//     if (username === '') {
//       setUsernameError('Enter your username');
//     } else if (username.length <= 4) {
//       setUsernameError('Must be more than 4 characters');
//     } else {
//       setUsernameError('');
//     }

//     if (email.includes('@')) {
//       setUsernameError('');
//     } else {
//       setUsernameError('Use @ in your email');
//     }

//     // Only proceed with signup if there are no errors
//     if (!usernameError) {
//       createUser(username, password);
//     }
//   };

//   const createUser = (username, password) => {
//     axios.post('http://localhost:8080/user', {
//       username: username,
//       password: password,
//     })
//     .then(response => {
//       console.log('User created successfully:', response.data);
//       // You might want to handle the success scenario, e.g., redirect to login page
//     })
//     .catch(error => {
//       console.error('Error creating user:', error);
//       // Handle error, e.g., show an error message to the user
//     });
//   };

//   return (
//     <div>
//       <div className='container'>
//         <div className='login'>
//           <div className='inputs'>
//             <div>This is front-end</div>
//             <div style={{ color: 'red' }}>{usernameError}</div>
//             <input
//               className='email'
//               placeholder='Email or phone number'
//               onChange={handleChangeEmail}
//               value={email}
//             ></input>
//             <input
//               className='email'
//               placeholder='Username'
//               value={username}
//               onChange={handleChangeUserName}
//             ></input>
//             <input
//               className='email'
//               placeholder='Password'
//               type='password'
//               onChange={(e) => setPassword(e.target.value)}
//             ></input>
//             <div className='loginButton' onClick={handleSignup}>
//               Sign up
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
