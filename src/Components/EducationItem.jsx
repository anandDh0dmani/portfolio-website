import {  VerticalTimelineElement } from "react-vertical-timeline-component"


function EductionItem({certification, description, year, logo}){
    return(
        // <div>
            <VerticalTimelineElement 
            className="vertical-timeline-element--education"
            date={year}
            iconStyle={{background:"#3e497a", color:"#fff"}}
            icon={logo}>
                <h3 className="vertical-timeline-element-title">{description}</h3>
                <p>{certification}</p>
            </VerticalTimelineElement>

        // </div>
    )

}
export default EductionItem