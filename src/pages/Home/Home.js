import { GitHub, LinkedIn } from '@mui/icons-material'
import { Link } from '@mui/material'
import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <div className='about'> 
            <h2>Hi, My Name is Karen</h2>
            <div className='prompt'>
                <p>A software developer with a passion for learning and creating</p>
                <Link href="https://www.linkedin.com/in/karenTsaturyan/" target="_blank">
                    <LinkedIn/>
                </Link>
                <Link href="https://github.com/KarenTsaturyan" target="_blank">
                    <GitHub/>
                </Link>
            </div>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>FrontEnd</h2>
                    <span>
                        JavaScript, HTML/CSS, React/Redux, Git Github
                    </span>
                </li>
                <li className='item'>
                    <h2>Languages</h2>
                    <span>
                        <b>English</b> | Fluent written and oral communication
                        <br/>
                        <b>Russian</b> | Fluent written and oral communication
                        <br/>
                        <b>Armenian</b> | Native
                    </span>
                </li>
            </ol>

        </div>
    </div>
  )
}

export default Home