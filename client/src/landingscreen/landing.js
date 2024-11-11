import "./landing.css";
import doggo from "../assets/doggopic2.png";

const Landing = () => {
    return (
        <div className="opening-screen">
            <img className="doggo-pic" src={doggo} />
            <div className="opening-title">
                Take your first
                <br /> step towards
                <br /> helping
            </div>

            <div className="opening-text">
                Helping stray dogs can be a rewarding and impactful way to contribute to
                your community.
            </div>
            <div className="two-buttons">
                <button className="opening-buttons">
                    <span>
                        <a href="https://buy.stripe.com/test_8wMaFE4Rt0Vw50s7st">
                            Start Donating
                        </a>
                    </span>
                </button>
                <a href="/volunteer" className="opening-buttons">
                    <span>Be A Volunteer</span>
                </a>
            </div>
        </div>
    );
};

export default Landing;
