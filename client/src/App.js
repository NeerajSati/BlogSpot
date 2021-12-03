import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import About from "./pages/about/About";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  
  const {user} = useContext(Context);
  return (
    <>
    <Router>
    <NavBar/>
      <Routes>
      <Route exact path="/" element={<Home />} >
    </Route> 
      <Route path="/register" element={user ? <Home /> : <Register/> }>
      </Route>  
      <Route path="/login" element={user ? <Home/> : <Login/>}>
      </Route>  
      <Route path="/write" element={user ? <Write/> : <Home/>}>
      </Route>  
      <Route path="/settings" element={user ? <Setting/> : <Home/>}>
      </Route>  
      <Route path="/post/:postid" element ={<Single/>}>
      </Route>  
      <Route path="/about" element ={<About/>}>
      </Route>  
      </Routes>
    </Router>
    </>
  );
}

export default App;
