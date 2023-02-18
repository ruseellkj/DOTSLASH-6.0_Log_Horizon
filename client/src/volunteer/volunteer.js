import './volunteer.css';
import map from '../assets/map.png'
const Volunteer = () => {
  return (
    <div className="volunteer">
        <div className="volunteer-landing">
            <div className="map">
                <img src={map}/>
            </div>
            <div className="volunteer-text">
                #<br/>BECOME A <br/> VOLUNTEER
            </div>
            <p className="volunteer-sub-text">Help make their world a better place, one paw at time</p>
        </div>
        <div className="volunteer-form-title">
            Volunteer With Us
        </div>
        <div className="volunteer-form-text">
            We’re excited to have you join us and help 
            create lasting impact<br/>
            For any queries, concerns & comments
            email us on - vinubillurushu@gmail.com<br/>
            Do fill the form and we will get back to you shortly
        </div>
        <div className="login-container">
        <div class="login-box">
            <p>Login</p>
            <form>
                <div class="user-box">
                    <input required="" name="" type="text"/>
                    <label>Name</label>
                </div>
                <div class="user-box">
                    <input required="" name="" type="text"/>
                    <label>Email id</label>
                </div>
                <div class="user-box">
                    <input required="" name="" type="text"/>
                    <label>Phone Number</label>
                </div>
                <div class="user-box">
                    <input required="" name="" type="text"/>
                    <label>Location</label>
                </div>
                <div class="user-box">
                    <input required="" name="" type="text"/>
                    <label>Hours Per Week</label>
                </div>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
            </form>
        <p>Don't have an account? <a href="" class="a2">Sign up!</a></p>
        </div>
        </div>
    </div>
  );
}

export default Volunteer;
