import React from "react";
import { AiFillGithub, AiFillLinkedin, aistake } from "react-icons/ai";
import { Link } from "react-router-dom";
// import {AiFillLinkedin}

function Footer() {
  return (
    <div className="max-w-7xl mx-auto my-3 flex justify-center gap-4">
      <div className="">
        <a href="https://twitter.com" target="_blank">
          <AiFillGithub fill="#fff" className="w-8 h-8" />
        </a>
      </div>
      <div className="">
        <a href="https://linkedin.com" target="_blank">
          <AiFillLinkedin fill="#fff" className="w-8 h-8" />
        </a>
      </div>
      <div className="">
        <a href="https://stackoverflow.com/" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="w-8 h-8"
          >
            <path
              d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"
              fill="#fff"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Footer;
