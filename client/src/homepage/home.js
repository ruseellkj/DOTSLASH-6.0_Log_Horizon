import './home.css';
import Landing from '../landingscreen/landing';
import Stats from '../stats/stats';
import Card from '../card/card';
const Home = () => {
  return (
    <div className="homepage">
      <Landing/>
      <Stats/>
      <Card/>
    </div>
  );
}

export default Home;
