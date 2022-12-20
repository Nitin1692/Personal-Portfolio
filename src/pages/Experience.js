import React from 'react'
import "react-vertical-timeline-component/style.min.css";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";


function Experience() {
  return (
<div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          
        >   
          <h3 className="vertical-timeline-element-title">
            Stepping Stone School, Rishra
          </h3>
          <p> 10th</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          
        >   
          <h3 className="vertical-timeline-element-title">
            Holy Home, Shrirampur 
          </h3>
          <p> 12th</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
        
        >
          <h3 className="vertical-timeline-element-title">
            University of Engineering & Management, Kolkata
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> BCA</p>
        </VerticalTimelineElement>
      
      </VerticalTimeline>
    </div>
  )
}

export default Experience
