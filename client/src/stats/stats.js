import './stats.css';
import Landing from '../landingscreen/landing';
import stat1 from '../assets/Ellipse2.png';
import stat2 from '../assets/Ellipse3.png';
import stat3 from '../assets/Ellipse4.png';
import stat4 from '../assets/Ellipse5.png';
const Stats = () => {
  return (
    <div className="big-container">
        <h1 className="do-you-know">Do You Know ?</h1><br/>
        <div className="stat-image-list">
            <div className="stat-image">
                <div><img src={stat1}/>
                <div className="stat-text">People think stray dogs should 
                    be removed </div>
                </div>
            </div>
            <div className="stat-image"><img style={{width:"223px",height:"208px"}} src={stat2}/><div className="stat-text">People think stray dogs should 
                    be removed </div></div>
            <div className="stat-image"><img style={{width:"223px",height:"208px"}} src={stat3}/><div className="stat-text">People think stray dogs should 
                    be removed </div></div>
            <div className="stat-image"><img style={{width:"223px",height:"208px"}} src={stat4}/><div className="stat-text">People think stray dogs should 
                    be removed </div>   </div>
        </div>
        <div className="big-picture">
                <div className="big-picture-text">
                    Care They Need, Love They Deserve
                </div>
        </div>
    </div>
  );
}

export default Stats;
