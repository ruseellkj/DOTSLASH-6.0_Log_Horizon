import React from "react";
import "./thankyou.css";
import check from "../assets/check.png";
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <div class="t-wrapper">
      <div class="t-img-area">
        <div class="t-inner-area">
          <img src={check} alt="#" />
        </div>
      </div>
      <div class="t-icon arrow">
        <i class="fas fa-arrow-left"></i>
      </div>
      <div class="t-icon dots">
        <i class="fas fa-ellipsis-v"></i>
      </div>
      <div class="t-name">Thank you for your donation</div>
      <div class="t-about">
        Your money will go towards the welfare of abandoned pets and stray
        animals
      </div>
      <div class="t-txt">
        Each donation counts! and we are very grateful for this
      </div>
      <div class="t-buttons">
        <button>
          <Link to="http://localhost:3000/"> Back to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Thankyou;
