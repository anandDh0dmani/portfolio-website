

import "../Styles/SkillItem.css"

function SkillItem({title, skil}){
    return (
        <li className="item">
            <h2>{title}</h2>
            <span>{skil}</span>
        </li>
    )
}

export default SkillItem