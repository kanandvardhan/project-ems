import React from "react";
import "./SocialSticky.css";

const SocialSticky = () => {
  return (
    <div className="sticky-icon">
      <a href="https://www.instagram.com/?hl=en" className="Instagram">
        <i className="fab fa-instagram"></i> Instagram
      </a>
      <a href="https://www.facebook.com/" className="Facebook">
        <i className="fab fa-facebook-f"> </i> Facebook
      </a>
      <a
        href="https://aboutme.google.com/u/0/?referer=gplus"
        className="Google"
      >
        <i className="fab fa-google-plus-g"> </i> Google
      </a>
      <a href="https://www.youtube.com/" className="Youtube">
        <i className="fab fa-youtube"></i> Youtube
      </a>
      <a href="https://twitter.com/login" className="Twitter">
        <i className="fab fa-twitter"> </i> Twitter
      </a>
    </div>
  );
};

export default SocialSticky;
