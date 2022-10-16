import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
    const navigate = useNavigate()
    const goProductPage = () => {
        navigate('/produsts?p=pants')
    }
  
    return (
    <div>
        <h1>HOMEPAGE</h1>
        <Link to="/Aboutpage">about</Link>
        <button onClick={goProductPage}>go to product</button>
    </div>
  )
}

export default Homepage