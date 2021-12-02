import './sidebar.css'
function Sidebar() {
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
        <li className="sidebarListItem">JavaScript</li>
        <li className="sidebarListItem">Java</li>
        <li className="sidebarListItem">HTML</li>
        <li className="sidebarListItem">CSS</li>
        <li className="sidebarListItem">Angular</li>
        <li className="sidebarListItem">React</li>
        <li className="sidebarListItem">Vue</li>
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
