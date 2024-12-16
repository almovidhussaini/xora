import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { IoMdBriefcase } from "react-icons/io";
import 'react-vertical-timeline-component/style.min.css';
import Card from "../card/Card";

const Roadmap = () => {
  const roadmapData = [
    { month: "January", title: "Brief", description: "Lorem ipsum dolor sit amet consectetur. Etiam mattis erat vitae non semper eget." },
    { month: "February", title: "Research", description: "Lorem ipsum dolor sit amet consectetur. Etiam mattis erat vitae non semper eget." },
    { month: "March", title: "Discover", description: "Lorem ipsum dolor sit amet consectetur. Etiam mattis erat vitae non semper eget." },
    { month: "April", title: "Design", description: "Lorem ipsum dolor sit amet consectetur. Etiam mattis erat vitae non semper eget." },
    { month: "May", title: "Testing", description: "Lorem ipsum dolor sit amet consectetur. Etiam mattis erat vitae non semper eget." },
  ];

  return (
    <div style={{  backgroundColor: "#080B2A"}} id="roadmap">
      <h1 className="text-center p-5 " style={{color:'white'}}>Roadmap</h1>
      <VerticalTimeline>

        { roadmapData.map((data, index) =>(
       
  <VerticalTimelineElement
    className="vertical-timeline-element--work border-but"
    contentStyle={{ background: 'transparent', color: '#fff'}}
   
    date={data.month}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdBriefcase />}
  >
    <Card> 
 
    <h3 className="vertical-timeline-element-title">{data.title}</h3>
    
    <p>
      {data.description}
    </p>
    </Card>
  </VerticalTimelineElement>

  ))
     }
  </VerticalTimeline>
    </div>
    
  );
};

export default Roadmap;
