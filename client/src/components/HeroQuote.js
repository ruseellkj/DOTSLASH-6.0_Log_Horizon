import React from "react";
import "./HeroQuote.css";

const HeroQuote = () => {
  return (
    <header class="mobile_hide">
      <div class="container">
        <div class="row">
          <div class="col-xs-8">
            <div class="mobile_hide">
              <h3 class="quote">
                "Until one has loved an animal, a part of one's soul remains
                unawakened."
              </h3>

              <h3 class="name">— Anatole France. </h3>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroQuote;
