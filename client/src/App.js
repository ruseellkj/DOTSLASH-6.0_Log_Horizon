import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './header/navbar';
import Footer from './footer/footer';
import Home from './homepage/home';
function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactIs />} /> */}
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
