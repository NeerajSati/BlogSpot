import { useState, useEffect ,useRef } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";
function Navbar() {
  const origin = "https://nodeblogspot.herokuapp.com/images/";

  const {user,dispatch} = useContext(Context);

  const handleLogout =() =>{
      dispatch({type:"LOGOUT"})
  }

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
  const ref = useRef();
  useEffect(() => {
    const checkOutside = e =>{
      if(shouldOpenNavbar && ref.current && !ref.current.contains(e.target)){
        setShouldOpenNavbar(false);
      }
    }
    document.addEventListener("mousedown", checkOutside);
    return () => {
      document.removeEventListener("mousedown", checkOutside);
    };
  }, [shouldOpenNavbar]);
  const getNavJSX=()=>{
      return (
        <div className="navCenter" style={
            { 
                display: (window.innerWidth > 768) || (shouldOpenNavbar||isLargeScreen ) ?"flex":"none",

            }
        }>
        <ul className="navList">
          <li className="navListItem" onClick={() => {
            setShouldOpenNavbar(!shouldOpenNavbar);
          }}>
            <Link to="." className="link">
              Home
            </Link>
          </li>
          <li className="navListItem" onClick={() => {
            setShouldOpenNavbar(!shouldOpenNavbar);
          }}>
            <Link to="about" className="link">
              About
            </Link>
          </li>
          <li className="navListItem" onClick={() => {
            setShouldOpenNavbar(!shouldOpenNavbar);
          }}>
            <Link to={user ? "write" : "register"} className="link">
              Create
            </Link>
          </li>
          <li className="navListItem" onClick={() => {
            setShouldOpenNavbar(!shouldOpenNavbar);
          }}>
            <Link to={user ? "settings" : "register"} className="link">
              Settings
            </Link>
          </li>
          {user? (
            <li className="navListItem" onClick={handleLogout}>
            <Link to="login" className="link">
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

  return (
    <div className= "Nav"  ref={ref}>
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
          Node BlogSpot
        </p>
      </div>
     {
         getNavJSX()
     }
      <div className="navRight">
        {user ? (
          <img className="userImg" src={( origin + user.profilePic)} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.pinimg.com/600x315/4b/74/cf/4b74cfb5f9ba362728b5ebfa6920b0f5.jpg"}} alt="user_Image" />
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
