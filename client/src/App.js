import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blogs from "./pages/Blogs";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import Home from "./homepage/home";
import Footer from "./footer/footer";
import CreateAdoption from "./pages/CreateAdoption";
import Adoptions from "./pages/Adoptions";

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
            <li>Logo</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>About</li>
            <li>Ways to Help</li>
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
            <li>Contact Us</li>
            <li>
              {!isAuth ? (
                <Link to="/login"> Login </Link>
              ) : (
                <>
                  <Link to="/createpost"> Create Post </Link>
                  <Link to="/createadoption"> Create Adoption </Link>
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
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
