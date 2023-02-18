import './card.css';
import doggo from '../assets/dog.png';
import doggo_2 from '../assets/doggo_pic.png';
import firstaid from '../assets/first-aid-kit.png';
import lovepng from '../assets/love.png';
import netpng from '../assets/net.png';
import salarypng from '../assets/salary.png';
const Card = () => {
  return (
    <div className="wrapper">
    <div className="outer">
      <div className="card card-1">
        <div className="content">
          <div className="img"><img src={doggo} alt=""/></div>
          <div className="details">
            <span className="name">850+</span>
            <p className="details-name-text">Saved Animals</p>
          </div>
        </div>
        {/* <!-- <a href="#">Follow</a> --> */}
      </div>
      <div class="card card0" >
        <div class="content">
          <div class="img"><img src={firstaid} alt=""/></div>
          <div class="details">
            <span class="name">700+</span>
            <p className="details-name-text">Animals spayed & neutered</p>
          </div>
        </div>
        {/* <!-- <a href="#">Follow</a> --> */}
      </div>
      <div className="card card1" >
        <div className="content">
          <div className="img"><img src={lovepng} alt=""/></div>
          <div className="details">
            <span className="name">75</span>
            <p className="details-name-text">dogs adopted, 310 released</p>
          </div>
        </div>
         {/* <a href="#">Follow</a>  */}
      </div>
      {/* <!-- <div class="card" style="--delay:2;">
        <div class="content">
          <div class="img"><img src="#" alt=""/></div>
          <div class="details">
            <span class="name">Justin Chung</span>
            <p>Backend Developer</p>
          </div>
        </div>
        <a href="#">Follow</a>
      </div> --> */}
      <div className="card card2">
        <div className="content">
          <div className="img"><img src={netpng} alt=""/></div>
          <div className="details">
            <span className="name">98</span>
            <p className="details-name-text">Animal abusers counseled</p>
          </div>
        </div>
         {/* <a href="#">Follow</a>  */}
      </div>
      <div className="card card2" >
        <div className="content">
          <div className="img"><img src={salarypng} alt=""/></div>
          <div className="details">
            <span className="name">Rs 1.8L</span>
            <p className="details-name-text">of funding granted to 11 local shelters</p>
          </div>
        </div>
         {/* <a href="#">Follow</a> */}
      </div>
    </div>
  </div>
  );
}

export default Card;
