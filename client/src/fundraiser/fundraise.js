import "./fundraise.css";
import Accordion from "../components/Accordion";
const Fundraise = () => {
  return (
    <div className="fundraise-container">
        <div className="fundraise-pic">
            <div className="fundraise-text-container">
                <div className="fundraise-pic-about">Fundraise
                </div>
                <div className="fundraise-pic-title">
                    FUNDRAISE FOR THE BETTERMENT OF STRAY ANIMALS
                </div>
                <div className="fundraise-pic-text">
                Whether you’d like to help us with a social media campaign or an event, 
                we greatly appreciate your fundraising support. 
                Helping us to operate and expand our shelter, 
                as well as funding our outreach, education and abuse prevention operations.
                </div>
            </div>
        </div>
        {/* <div style={{width:"100%",height:"1vw",backgroundColor:"#cf711f"}}></div> */}

        <div className="fundraise-lots-text">
            <div className="fundraise-lots-heading">IDEAS TO RAISE FUNDS:</div>
            <br/><br/>
            <Accordion/>
        </div>
    </div>
  );
};

export default Fundraise;
