import { GitHub, LinkedIn } from '@mui/icons-material'
import { Grid, Link, ListItem } from '@mui/material'
import React from 'react'
import './Home.css'
import { useEffect } from 'react'
import Typed from 'typed.js';
import { useRef } from 'react'
import jsGif from '../../img/JS.gif'
import htmlGif from '../../img/html.gif'
import cssPng from '../../img/css.png'
import reactGif from '../../img/react2.gif'
import reduxPng from '../../img/redux.png'
import gitPng from '../../img/github2.gif'
import typescript from '../../img/typescript.png'
import nodejs from '../../img/nodejs.png'

function Home() {
    const el = useRef(null);
    let data=[
        {
            name:'Javascript',
            img:jsGif
        },
        {
            name:'HTML',
            img:htmlGif
        },
        {
            name:'CSS',
            img:cssPng
        },
        {
            name:'REACT',
            img:reactGif
        },
        {
            name:'Redux/Toolkit',
            img:reduxPng
        },
        {
            name:'Typescript',
            img:typescript
        },
        {
            name:'NodeJS',
            img:nodejs
        },
        {
            name:'Git Github',
            img:gitPng
        },
     
    ]
    useEffect(()=>{
        const typed = new Typed(el.current, {
            strings: ['FRONT END Developer','Skills: React','FrontEnd developer','Skills: NodeJS','Skills: HTML', "Skills: CSS"],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            smartBackspace: true,
            loop: true,
            showCursor:false
        })
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
    },[])
  return (
    <div className='home'>
        <div className='about'> 
            <h2>Karen Tsaturyan</h2>
                <h3 ref ={el}>|</h3>
            <div className='prompt'>
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
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {data.map((el, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <ListItem>
                                <img src={el.img} alt="my-gif" style={{width:'35px', height:'35px',}}/> 
                                    <span
                                        className="text-center"
                                    >
                                        {el.name}
                                    </span>
                            </ListItem>
                        </Grid>
                    ))}
                    </Grid>
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