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
        <span className="aboutTitle">Languages I use</span>
        <ul className="aboutList">
        <li className="sidebarListItem">JavaScript</li>
        <li className="sidebarListItem">C++</li>
        <li className="sidebarListItem">HTML</li>
        <li className="sidebarListItem">CSS</li>
        <li className="sidebarListItem">Node</li>
        <li className="sidebarListItem">React JS</li>
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

