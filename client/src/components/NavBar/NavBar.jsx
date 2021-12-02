import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import user from "../../img/user.png";
import "./navbar.css";
function Navbar() {
  const [shouldOpenNavbar, setShouldOpenNavbar] = useState(false);
  const [isLargeScreen,setIsLargeScreen]=useState(false);
  const [navBar, setnavBar] = useState(false);
  const handleResize = (e) => {
    if(window.innerWidth<768){
        setIsLargeScreen(false)
    }else{
        setIsLargeScreen(true);
    }
  };
  const getNavJSX=()=>{
      return (
        <div className="navCenter" style={
            { 
                display: (window.innerWidth > 768) || (shouldOpenNavbar||isLargeScreen ) ?"flex":"none",

            }
        }>
        <ul className="navList">
          <li className="navListItem">
            <Link to="." className="link">
              Home
            </Link>
          </li>
          <li className="navListItem">
            <Link to="about" className="link">
              About
            </Link>
          </li>
          <li className="navListItem">
            <Link to={User ? "write" : "register"} className="link">
              Create
            </Link>
          </li>
          <li className="navListItem">
            <Link to={User ? "settings" : "register"} className="link">
              Settings
            </Link>
          </li>
          {User? (
            <li className="navListItem">
            <Link to="register" className="link">
              Logout
            </Link>
            </li>
          ) : ""}
          
        </ul>
      </div>
      )
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);
  const updateLogo = () => {
    if (window.scrollY >= 100) {
      setnavBar(true);
    } else {
      setnavBar(false);
    }
  };
  window.addEventListener("scroll", updateLogo);

  const User = true;
  return (
    <div className= "Nav">
      <div className="navLeft">
      <Link to="." className="link">
        <i className={
            navBar
              ? "logo logoShift fas fa-book-reader"
              : "logo fas fa-book-reader"
          }
        ></i>
      </Link>
        <p className={navBar ? "logoText logoTextHide" : "logoText"}>
          {" "}
          Node Blogger
        </p>
      </div>
     {
         getNavJSX()
     }
      <div className="navRight">
        {User ? (
          <img className="userImg" src={user} alt="User_Image" />
        ) : (
          <ul className="navList">
            <li className="navListItem">
              <Link to="login" className="link">
                Login
              </Link>
            </li>
            <li className="navListItem">
              <Link to="register" className="link">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className=" searchIcon fas fa-search"></i>
        <div
          onClick={() => {
            setShouldOpenNavbar(!shouldOpenNavbar);
          }}
        >
          <i className={ shouldOpenNavbar ? " burger hamIcon hamIconRotate fas fa-bars":"burger hamIcon fas fa-bars"}></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
