import React from "react";
import "./HeroBlog.css";
import { Link } from "react-router-dom";

const HeroBlog = () => {
  return (
    <div class="hero-main">
      <div class="hero-items">
        <h2>
          {" "}
          Sharing tales of hope and love from the streets
          <br />
        </h2>
        <p>
          Inspiring stories of rescued stray animals. <br /> By sharing
          heartwarming tales of hope and love, <br />
          the blog aims to inspire others to take action and make a difference
          <br />
        </p>
        <div class="butto">
          <button id="full">
            <a href="/createpost">Create Post</a>
          </button>

          <button id="outline">
            <a href="/contact">Read more</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBlog;
