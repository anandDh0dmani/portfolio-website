
// import { IoLogoLinkedin, IoLogoInstagram, IoLogoFacebook } from "react-icons/io";
import {FaLinkedinIn, FaGit} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Styles/Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <Link to={'https://www.linkedin.com/in/anand-dhodmani-715618237/'} target={'_blank'} ><FaLinkedinIn /></Link>
                <Link to={'https://github.com/anandDh0dmani'} target={'_blank'} ><FaGit /></Link> 
            </div>
            <p>
            Copyright {new Date().getFullYear()}.Anand Dhodmani. All Rights Reserved.
            </p>
        </div>
    )
}
export default Footer