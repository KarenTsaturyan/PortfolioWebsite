import { GitHub } from '@mui/icons-material'
import WebIcon from '@mui/icons-material/Web';
import { Link } from '@mui/material'
import React from 'react'
import {useParams} from 'react-router-dom'
import { ProjectList } from '../../info/ProjectList'

import './ProjectPage.css'

function ProjectPage() {
    const {id} = useParams()
    const project = ProjectList[id]
    return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.img} alt='projctImg' />
        <p>
            <b>Skills:</b> {project.skills}
        </p>
        <div className='project-links'>
                <Link href={`https://github.com/KarenTsaturyan/${project.git}`} title="Github Code" target="_blank">
                <p>Github Code</p>
                    <GitHub />
                </Link>
                <Link href={`https://karentsaturyan.github.io/${project.gitPages}`} title="Github Pages" target="_blank">
                <p>Github Pages</p>
                    <WebIcon />
                </Link>
        </div>
    </div>
  )
}

export default ProjectPage