import '../Styles/Home.css'
import Skills from "./Skills";

function Home() {
    return (
        <div className="home">
            <div className="about">
                {/* <img src={logo} alt="hero" /> */}
                <h2>HI! I'm ANAND DHODMANI</h2>
                <div className="prompt">
                    <p>A Full Stack JavaScript Developer with passion for learining and create</p>
                    {/* <IoLogoFacebook />
                    <IoLogoInstagram />
                    <IoLogoLinkedin /> */}
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <Skills />
                </ol>
            </div>
        </div>
    )
}

export default Home