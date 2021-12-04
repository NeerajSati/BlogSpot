import './about.css'
import pic from '../../img/Aboutme.jpg'
import { useEffect,useState } from 'react';
import {axiosInstance} from '../../config';
import { Link } from 'react-router-dom';

export default function About() {
    const [cats,setCats] = useState([]);
    useEffect(()=>{
        const getCats = async()=>{
            const res = await axiosInstance.get('/categories')
            setCats(res.data);
        }
        getCats();
    },[])
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
        {cats.map((c)=>(
            <Link className="link" to={`/?cat=${c.name}`}>
            <li className="sidebarListItem">{c.name}</li>
            </Link>
            
        ))}
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

