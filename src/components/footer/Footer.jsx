import React from "react";
import "./footer.css";

import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">
        Tonny
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <BsFacebook />
        </a>
        <a href="https://instagram.com">
          <RiInstagramFill />
        </a>
        <a href="https://tiktok.com">
          <SiTiktok />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Tonny Tutorials. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
