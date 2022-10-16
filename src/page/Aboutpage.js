import React from 'react'
import { useNavigate } from 'react-router-dom'

const Aboutpage = () => {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate('/')
    }
  return (
    <div>
        <h1>aboutpage</h1>
        <button onClick={goToHome}>go to home</button>
    </div>
  )
}

export default Aboutpage