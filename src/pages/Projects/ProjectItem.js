import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProjectItem({img, name, id}) {
    const navigate = useNavigate()
  return (
    <div 
        className='projectItem'
        onClick={()=>
            navigate("/project/" + id)
        }
    >
        <div style={{backgroundImage:`url(${img})`}} className='bgImage'/>
        <h1>{name}</h1>
    </div>
  )
}

export default ProjectItem