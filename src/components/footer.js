import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import "../components/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="first-container con">
          <h3 className="">Customer Service</h3>
          <ul>
            <li>About & Contact</li>
            <li>Customer Service</li>
            <li>Terms & Conditions</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="con customer">
          <h3 className="">Customer Service</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            beatae at, tenetur adipisci rem ea! Commodi a
          </p>
          <input className="" placeholder="Enter your email"></input>
        </div>
        <div className="socials">
          <h3 className="connect">Connect</h3>
          <button className="social ">
            <FaFacebook />
          </button>
          <button className="social">
            <FaInstagram />
          </button>
          <button className="social">
            <AiFillTwitterCircle />
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
