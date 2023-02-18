import React, { useState, useEffect } from "react";
import "./Contact.css";

function Contact({ isAuth }) {
  return (
    <div class="contact-form">
      <div class="first-container">
        <div class="info-container">
          <div>
            <img class="icon" />
            <h3>Address</h3>
            <p>Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
          </div>
          <div>
            {" "}
            <img class="icon" />
            <h3>Lets Talk</h3>
            <p>+1 800 1236879</p>
          </div>
          <div>
            <img class="icon" />
            <h3>General Support</h3>
            <p>contact@example.com</p>
          </div>
        </div>
      </div>
      <div class="second-container">
        <h2>Send Us A Message</h2>
        <form>
          <div class="form-group">
            <label for="name-input">Tell us your name*</label>
            <input
              id="name-input"
              type="text"
              placeholder="First name"
              required="required"
            />
            <input type="text" placeholder="Last name" required="required" />
          </div>
          <div class="form-group">
            <label for="email-input">Enter your email*</label>
            <input
              id="email-input"
              type="text"
              placeholder="Eg. example@email.com"
              required="required"
            />
          </div>
          <div class="form-group">
            <label for="phone-input">Enter phone number*</label>
            <input
              id="phone-input"
              type="text"
              placeholder="Eg. +1 800 000000"
              required="required"
            />
          </div>
          <div class="form-group">
            <label for="message-textarea">Message</label>
            <textarea
              id="message-textarea"
              placeholder="Write us a message"
            ></textarea>
          </div>
          <button>Send message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
