import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <body>
      <section class="section-hero">
        <div class="hero">
          <div class="hero-text-box">
            <h1 class="heading-primary">
              A hopeful future for a stray animal.
            </h1>
            <p class="hero-description">
              By adopting a stray pet, you not only provide them with a loving
              home but also help to reduce the number of homeless animals in
              your community.
            </p>
            <a href="#" class="btn btn--fill margin-right-btn">
              Create Adoption Post
            </a>
            <a href="#" class="btn btn--outline margin-right-btn">
              Learn more &darr;
            </a>
          </div>
          <div class="hero-img-box">
            <img
              src="https://imageio.forbes.com/specials-images/dam/imageserve/1068867780/960x0.jpg?format=jpg&width=960"
              class="hero-img"
            />
          </div>
          <div class="delivered-meals">
            <div class="delivered-imgs">
              <img
                src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-1.jpg"
                alt="Customer photo"
              />
              <img
                src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-2.jpg"
                alt="Customer photo"
              />
              <img
                src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-3.jpg"
                alt="Customer photo"
              />
              <img
                src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-4.jpg"
                alt="Customer photo"
              />
              <img
                src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-5.jpg"
                alt="Customer photo"
              />
              <img
                src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-6.jpg"
                alt="Customer photo"
              />
            </div>
            <p class="delivered-text">
              <span>25,000+</span> strays saved last year!
            </p>
          </div>
        </div>
      </section>
    </body>
  );
};

export default HeroSection;
