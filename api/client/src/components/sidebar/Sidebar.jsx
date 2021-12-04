import {axiosInstance} from '../../config';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'
function Sidebar() {
    const [cats,setCats] = useState([]);
    useEffect(()=>{
        const getCats = async()=>{
            const res = await axiosInstance.get('/categories')
            setCats(res.data);
        }
        getCats();
    },[])
    return (
        <div class="sidebar">
        <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT THIS SITE
        </span>
        <i class="fas fa-book-reader"></i>
        <p>
        This is a blog website where anyone interest can upload a story/blog with a picture. 
        User can Write blog, Edit blog, register, login, as well as edit his account.
        </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
        {cats.map((c)=>(
            <Link className="link" to={`/?cat=${c.name}`}>
            <li className="sidebarListItem">{c.name}</li>
            </Link>
            
        ))}
        </ul>       
        </div> 
        <div className="sidebarItem">
        <span className="sidebarTitle ">Connect with Me</span>
        <div className="sidebarSocial"> 
        <a className="sidebarIconAnc" href="https://www.linkedin.com/in/neeraj-sati/"><i className = "aboutIcon fab fa-linkedin"/></a>
        <a className="sidebarIconAnc" href="https://www.instagram.com/neerajsati17"> <i className = "aboutIcon fab fa-instagram-square"/></a>
        <a className="sidebarIconAnc" href="https://github.com/NeerajSati"><i className = "aboutIcon fab fa-github-square"/></a>
         </div>
         </div>   
        </div>
    )
}

export default Sidebar
