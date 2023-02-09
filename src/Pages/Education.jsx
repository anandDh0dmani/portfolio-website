import { VerticalTimeline } from "react-vertical-timeline-component"
import {EducationList} from '../Helpers/EductionList'
import EductionItem from "../Components/EducationItem"
import "react-vertical-timeline-component/style.min.css"
function Educations() {
    return (
        <div className="exprience">
            <VerticalTimeline lineColor="#3e497a">
                {EducationList.map((myEducation) =>{
                    return <EductionItem certification={myEducation.certification} description={myEducation.description} logo={myEducation.logo} year={myEducation.year} />
                })} 
            </VerticalTimeline>           
        </div>
    )
}
export default Educations