import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blogs from "./pages/Blogs";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import Home from "./homepage/home";
import Footer from "./components/Footer";
import CreateAdoption from "./pages/CreateAdoption";
import Adoptions from "./pages/Adoptions";
import Volunteer from "./volunteer/volunteer";
import logo from './assets/logo.png';
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav>
        <div>
          <ul>
            <li>
              <Link to="/"><img style={{height:"200px",border:"2px solid black",clipPath:"circle(30%)",marginLeft:"-60px"}} src={logo}/></Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="#">Ways to Help</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/adoptions"> Adoptions </Link>
            </li>
            <li>
              <Link to="/blogs"> Blogs </Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              {!isAuth ? (
                <Link to="/login"> Login </Link>
              ) : (
                <>
                  {/* <Link to="/createpost"> Create Post </Link>
                  <Link to="/createadoption"> Create Adoption </Link> */}
                  <button className="button" onClick={signUserOut}>
                    {" "}
                    Log Out
                  </button>
                </>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/adoptions" element={<Adoptions isAuth={isAuth} />} />
        <Route
          path="/createadoption"
          element={<CreateAdoption isAuth={isAuth} />}
        />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
