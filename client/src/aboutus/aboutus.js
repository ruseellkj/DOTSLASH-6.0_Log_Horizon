import "./aboutus.css";
const Aboutus = () => {
  return (
    <div className="aboutus-container">
        <div className="aboutus-pic">
            <div className="aboutus-text-container">
                <div className="aboutus-pic-about">About Us
                </div>
                <div className="aboutus-pic-title">
                    Helping stray animals through the power of pawtopia.
                </div>
                <div className="aboutus-pic-text">
                     As of today, our organsiation has accumulated over 3000 volunteers and has helped over a 25,000 stray animals and has made a differecnce in their life
                </div>
            </div>
        </div>
        <div className="aboutus-stuff">
            <div className="our-stuff">
                <div className="our-mission">
                    <div className="aboutus-our-heading">Our Mission</div>
                    <div className="aboutus-our-text">Our Mission is to provide a safe haven for stray animals, giving them the love, care and support they need to thrive. We will work tirelessly to rescue and rehome as 
                    many as psosible, while also advocating for their welfare and promoting responsible pet ownership. Our ultimate goal is to create a world where all animals are valued and respected, and where we can make a positive difference in their lives</div>
                </div>
                <div className="our-vision">
                <div className="aboutus-our-heading">Our Vision</div>
                    <div className="aboutus-our-text">
                        Our vision is to create a world where every stray animal is values, respected, nd given the chance to
                        live a happy, healthy life. We aim to rescue and rehome as many as possible, while advocating for animal welfare and inspiring others
                        to take action in their own communities. Our values are based on compassion, respect and responsibility
                    </div>
                </div>
                <div className="future-scope">
                <div className="aboutus-our-heading">Future Scope</div>
                    <div className="aboutus-our-text">In the future, we would like to include
  social media authentication like Facebook, Twitter, Google etc. We also want to implement
  auto detecting users location for displaying pets in that location and    
 to search pet according to the location. We also plan to train stray animals as guard dogs and care givers so that they can also be helpful to people and hence people will be more encouraged to adopt them</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Aboutus;
