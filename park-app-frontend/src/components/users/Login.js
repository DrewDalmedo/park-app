import React from 'react'
import { useState } from 'react'



const Login = () => {
  const [username, setUsername] = useState("") 
  const [password, setPassword] = useState("")

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(username)
    console.log(password)
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <p>username</p>
        <input type="text" onChange={handleUsernameChange} />
        <p>password</p>
        <input type="password" onChange={handlePasswordChange} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login;