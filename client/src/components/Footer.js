import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
// import { fas } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  library.add(fab);
  // function scrollToTop() {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  return (
    <div class="footer-basic">
      <footer>
        <div class="social">
          <a href="#">
            <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon="fa-brands fa-square-twitter" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
          </a>
        </div>
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="#">Home</a>
          </li>
          <li class="list-inline-item">
            <a href="#">About</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Ways to Help</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Adoptions</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Blogs</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Contact</a>
          </li>
        </ul>
        <p class="copyright">PawTopia © 2023</p>
      </footer>
    </div>
  );
};

export default Footer;
