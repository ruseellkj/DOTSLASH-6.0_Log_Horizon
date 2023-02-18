import React from "react";
import "./HeroBlog.css";

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
          <button id="full" onclick="window.location.href = '#';">
            Create a Blog Post
          </button>

          <button
            id="outline"
            onclick="window.location.href = 'https://example.com';"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBlog;
