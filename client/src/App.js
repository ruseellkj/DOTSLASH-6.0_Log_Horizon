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
import logo from "./assets/logo.png";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import Aboutus from "./aboutus/aboutus";
import Thankyou from "./pages/Thankyou";
import Fundraise from "./fundraiser/fundraise";
function App() {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    useEffect(() => {
        document.title = "PawTopia";
    }, []);
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
                            <Link to="/">
                                <img
                                    style={{
                                        height: "200px",
                                        border: "2px solid black",
                                        clipPath: "circle(30%)",
                                        marginLeft: "-60px",
                                    }}
                                    src={logo}
                                />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <div className="dropdown">
                                <button class="dropbtn">Ways To Help</button>
                                <div class="dropdown-content">
                                    <a href="https://buy.stripe.com/test_8wMaFE4Rt0Vw50s7st">Donate</a>
                                    <a href="/volunteer">Volunteer</a>
                                    <a href="/fundraise">Fundraiser</a>
                                </div>
                            </div>
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
                <Route path="/contact" element={<Contact />} />
                <Route path="/fundraise" element={<Fundraise />} />
                <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
                <Route path="/adoptions" element={<Adoptions isAuth={isAuth} />} />
                <Route path="/about" element={<Aboutus />} />
                <Route path="/thankyou" element={<Thankyou />} />
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
