import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react'
import "../style/experience.css"
import Skripsify from "../Assets/img/Skripsify.svg";

export default function Experience() {
  return (
    <section>
        <div className='experience'>
            <h1>My Experince</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et excepturi, culpa adipisci sapiente reiciendis nemo numquam enim omnis, sit fuga sequi doloremque nam. Repellat ullam ea non cumque. Mollitia, necessitatibus</p>
        </div>
<VerticalTimeline>
    {/* Experience */}
  <VerticalTimelineElement
  className="vertical-timeline-element"
  contentStyle={{ background: 'tomato', color: '#fff' }}
  contentArrowStyle={{ borderRight: '10px solid  tomato' }}
  date="Juni 2023 - September 2023" iconStyle={{ background: 'white', color: '#fff' }}
  icon={<img src={Skripsify} alt='Skripsify' width='75%'></img>}>
    
    <h3 className="vertical-timeline-element-title">Video Editor</h3>
    <h4 className="vertical-timeline-element-subtitle">Bandung, Jawa Barat</h4>
    <p>
      Becoming a Video Editor and promoting Skripsify, an application for mentoring in 
      thesis writing with professional supervisors, developed to compete in the 
      Bandung Techno Park (BTP) competition.
    </p>

  </VerticalTimelineElement>

  
  <VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
  date="2011 - present">
    
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>

  </VerticalTimelineElement>
  
  <VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
  date="2011 - present">
    
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>

  </VerticalTimelineElement>


  <VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
  date="2011 - present">
    
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>

  </VerticalTimelineElement>
</VerticalTimeline>
</section>
  )
}
