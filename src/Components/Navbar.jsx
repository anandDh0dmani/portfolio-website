import {useLocation } from "react-router-dom"
import React from 'react'
import { Link } from "react-router-dom";
import {ImMenu } from 'react-icons/im'
import NavItem from "./NavItem";

function Navbar() { 
    const [expandNav, setExpandnav] = React.useState(false)

    const location = useLocation();

    React.useEffect( () =>{
        setExpandnav(false)
    }, [location])
    return (
        <div className="navbar" id={expandNav? "open" : "close"} >
            <div className="toggleButton">
                <button onClick={() => {setExpandnav ((prev) => !prev)}}>
                    <ImMenu />
                </button>
            </div>
            <div className="links">
                <NavItem toProp={''} nameProp={'Home'}/>
                <NavItem toProp={'projects'} nameProp={'Projects'}/>
                <NavItem toProp={'qualifications'} nameProp={'Qualifications'}/>
                {/* <button><NavItem nameProp={'Resume'} /></button> */}
                <button><Link to='https://drive.google.com/file/d/1vkEUqb7Bd4h2FPRJGmZeKqN7i7KT1k_O/view?usp=sharing' target={'_blank'} download>Resume</Link></button>
            </div>
        </div>

    )
}

export default Navbar