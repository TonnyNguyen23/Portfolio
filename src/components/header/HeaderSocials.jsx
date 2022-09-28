import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.facebook.com/xuantung23/"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook />
      </a>
      <a
        href="https://github.com/TonnyNguyen23"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.facebook.com/xuantung23/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
  );
};

export default HeaderSocials;
