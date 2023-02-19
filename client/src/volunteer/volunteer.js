import './volunteer.css';
const Volunteer = () => {
  return (
    <div className="volunteer">
        <div className="volunteer-landing">
            <div className="volunteer-container">
                <div className="volunteer-text">
                    BECOME A <br/> VOLUNTEER
                </div>

                <div className="volunteer-sub-text">Help make their world a better place, one paw at time</div>
            </div>
        </div>
        {/* <div style={{width:"100%",height:"1vw",backgroundColor:"#cf711f"}}></div> */}
        <div className="volunteer-note">
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
        </div>
        <div className="volunteer-form">
        <div class="new-container">
  <form>
    <div class="new-row">
      <h4>Account</h4>
      <div class="input-group input-group-icon">
        <input type="text" placeholder="Full Name"/>
        
      </div>
      <div class="input-group input-group-icon">
        <input type="email" placeholder="Email Adress"/>
        
      </div>
      <div class="input-group input-group-icon">
        <input type="number" placeholder="Phone Number"/>

      </div>
    </div>
    <div class="new-row">
      <div class="col-half">
        <h4>Date of Birth</h4>
        <div class="input-group">
          <div class="col-third">
            <input type="text" placeholder="DD"/>
          </div>
          <div class="col-third">
            <input type="text" placeholder="MM"/>
          </div>
          <div class="col-third">
            <input type="text" placeholder="YYYY"/>
          </div>
        </div>
      </div>
      <div class="col-half">
        <h4>Gender</h4>
        <div class="input-group">
          <input id="gender-male" type="radio" name="gender" value="male"/>
          <label for="gender-male">Male</label>
          <input id="gender-female" type="radio" name="gender" value="female"/>
          <label for="gender-female">Female</label>
        </div>
      </div>
    </div>
    <div class="new-row">
      <h4>Terms and Conditions</h4>
      <div class="input-group">
        <input id="terms" type="checkbox"/>
        <label for="terms">I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label>
      </div>
    </div>
    <button type="submit" className="opening-buttons">
        <span>Start Volunteering</span>
    </button>
  </form>
</div>
        </div>
    </div>
  );
}

export default Volunteer;
