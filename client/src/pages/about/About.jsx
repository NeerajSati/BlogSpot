import './about.css'
import pic from '../../img/Aboutme.jpg'

export default function About() {
    return (
        <div className="about">
        <div className="aboutItem">
        <span className="aboutTitle">ABOUT ME
        </span>
        <img src={pic} alt="UserImage"></img>
        <p>
        Hi!, I am Neeraj Sati. I am currently In my third year in GGSIPU, Delhi.
        I have created this blog website where anyone interested can upload a story/blog with a picture.
        </p>
        </div>
        <div className="aboutItem">
        <span className="aboutTitle">Languages I know</span>
        <ul className="aboutList">
        <li className="aboutListItem">JavaScript</li>
        <li className="aboutListItem">C++</li>
        <li className="aboutListItem">HTML</li>
        <li className="aboutListItem">CSS</li>
        <li className="aboutListItem">Node</li>
        <li className="aboutListItem">React JS</li>
        </ul>       
        </div> 
        <div className="aboutItem">
        <span className="aboutTitle ">Connect with Me</span>
        <div className="aboutSocial"> 
        <a className="aboutIconAnc" href="https://www.linkedin.com/in/neeraj-sati/"><i className = "aboutIcon fab fa-linkedin"/></a>
        <a className="aboutIconAnc" href="https://www.instagram.com/neerajsati17"> <i className = "aboutIcon fab fa-instagram-square"/></a>
        <a className="aboutIconAnc" href="https://github.com/NeerajSati"><i className = "aboutIcon fab fa-github-square"/></a>
         </div>
         </div>   
        </div>
    )
}

