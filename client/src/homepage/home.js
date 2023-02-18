import './home.css';
import Landing from '../landingscreen/landing';
import Stats from '../stats/stats';
const Home = () => {
  return (
    <div className="homepage">
      <Landing/>
      <Stats/>
    </div>
  );
}

export default Home;
