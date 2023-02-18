import "./home.css";
import Landing from "../landingscreen/landing";
import Stats from "../stats/stats";
import Card from "../card/card";
// import Slider from '../slider/slider';
import Cardtwo from "../card2/cardtwo";
const Home = () => {
  return (
    <div className="homepage">
      <Landing />
      <Stats />
      <Card />
      <Cardtwo />
      {/* <Slider/> */}
    </div>
  );
};

export default Home;
