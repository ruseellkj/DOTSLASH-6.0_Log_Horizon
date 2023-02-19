import "./cardtwo.css";
const Cardtwo = () => {
  return (
    <div class="container-x">
      <div class="box-x">
        <h3>DONATE</h3>
        <p>
          Every dollar makes a difference in the lives of these animals. SAFI
          offers many ways to donate.
        </p>
        <a href="https://buy.stripe.com/test_8wMaFE4Rt0Vw50s7st">
          <button>learn more</button>
        </a>
        <span class="count">1</span>
      </div>
      <div class="box-x">
        <h3>VOLUNTEER</h3>
        <p>
          Find volunteer opportunities in various states of India! and spread
          the NGO.
        </p>
        <a href="/volunteer">
          <button>learn more</button>
        </a>
        <span class="count">2</span>
      </div>
      <div class="box-x">
        <h3>ADOPT</h3>
        <p>
          Everyone deserves a home. See how you can help our shelter animals
          find forever families.
        </p>
        <a href="/adopt">
          <button>learn more</button>
        </a>
        <span class="count">3</span>
      </div>
      <div class="box-x">
        <h3>FUNDRAISE</h3>
        <p>
          Start your own social media fundraising campaign, and help raise funds
          for India’s shelters.
        </p>
        <a href="/fundraise">
          <button>learn more</button>
        </a>
        <span class="count">4</span>
      </div>
    </div>
  );
};

export default Cardtwo;
