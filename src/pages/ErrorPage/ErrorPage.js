import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <Link style={{textDecoration:'none', fontSize:'25px', color:'#3e497a'}} to='/'>Home</Link>
    </div>
  )
}

export default ErrorPage