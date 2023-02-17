import React from 'react'
import './Footer.css'
import { Link } from '@mui/material'
import { LinkedIn, GitHub } from '@mui/icons-material'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
        <Link href="https://www.linkedin.com/in/karenTsaturyan/" target="_blank">
          <LinkedIn/>
        </Link>
        <Link href="https://github.com/KarenTsaturyan" target="_blank">
          <GitHub/>
        </Link>
        </div>
        <p>&copy; 2023 </p>
    </div>
  )
}

export default Footer