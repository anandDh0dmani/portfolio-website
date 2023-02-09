
import { Link } from "react-router-dom";

function NavItem({toProp, nameProp}){
    return (
        <button><Link to={`/${toProp}`}>{nameProp}</Link></button>
    
    )
}
export default NavItem