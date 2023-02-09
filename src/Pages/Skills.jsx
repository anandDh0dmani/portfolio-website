import SkillItem from "../Components/SkillItem";
import { SkillsList } from "../Helpers/SkillsList";

function Skills(){
    return (
        <div className="skills">
            {/* <h1>Skills</h1> */}
            {/* <ui className="item"> */}
                {SkillsList.map((mySkill) => {
                    return <SkillItem title={mySkill.name} skil={mySkill.skill}/>
                })}
            {/* </li> */}
        </div>
    )
}

export default Skills