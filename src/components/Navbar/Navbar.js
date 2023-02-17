import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import Reorder from '@mui/icons-material/Reorder'

function Navbar() {
    const[expandNavbar, setExpandNavbar ] = useState(false)
    
    const location = useLocation()

    useEffect(()=>{
        setExpandNavbar(false)//close navbar evey time loc chnages
    }, [location])
  
return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button onClick={()=>{
                setExpandNavbar((prev)=>!prev)
                }}
                ><Reorder />
            </button>
        </div>
        <div className='links'>
            <Link to="/">Portfolio</Link>{/* Home */}
            <Link to="/projects">Projcets</Link>
            <Link to="/experience">Experience</Link>
        </div>
    </div>
  )
}

export default Navbar