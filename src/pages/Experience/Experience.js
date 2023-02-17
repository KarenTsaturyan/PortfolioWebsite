import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School'
import JavascriptIcon from '@mui/icons-material/Javascript';
import './Experience.css'

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='March 2018 - July 2021'
          iconStyle={{background:"#3e497a", color: "#fff"}}
          icon={<SchoolIcon/>}
        >
          <h3 className='vertical-timeline-element-title'>
            Polytechnic College of the University, State Engineering University of Armenia (SEUA), Yerevan, Armenia
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='Sep 2021 - Present'
          iconStyle={{background:"#3e497a", color: "#fff"}}
          icon={<SchoolIcon/>}
        >
          <h3 className='vertical-timeline-element-title'>
            National Polytechnic University of Armenia, State Engineering University of Armenia (SEUA), Yerevan, Armenia
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='Sep 2020 - 2022'
          iconStyle={{background:"#d5e830", color: "#fff"}}
          icon={<JavascriptIcon/>}
        >
          <h3 className='vertical-timeline-element-title'>
            Learned HTML CSS and JavaScript
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='Sep 2022 - 2023'
          iconStyle={{background:"#4cb5fb", color: "#fff"}}
          icon={<JavascriptIcon/>}
        >
          <h3 className='vertical-timeline-element-title'>
            I have studied React/Redux, completed several projects, and continue to improve my skills. 
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience