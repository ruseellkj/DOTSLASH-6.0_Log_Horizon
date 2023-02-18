import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navigation">
      <div className="logo">Doggo</div>
      <div className="left-side">
        <Link to="/"> Home </Link>
        <div>About</div>
        <div>Ways To Help</div>
      </div>
      <div className="right-side">
        <div>Success Stories</div>
        <div>Contact Us</div>
        <div>
          {!isAuth ? (
            <Link to="/login"> Login </Link>
          ) : (
            <>
              <Link to="/createpost"> Create Post </Link>
              <button onClick={signUserOut}> Log Out</button>
            </>
          )}
        </div>
        <div>
          <a>Join Us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
