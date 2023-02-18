import './navbar.css';

const Navbar = () => {
  return (
    <div className="navigation">
        <div className="logo">
            Doggo
        </div>
        <div className="left-side">
            <div>home</div>
            <div>About</div>
            <div>Ways To Help</div>
        </div>
        <div className="right-side">
            <div>Success Stories</div>
            <div>Contact Us</div>
            <div><a>Sign In</a></div>
            <div><a>Join Us</a></div>
        </div>
    </div>
  );
}

export default Navbar;
