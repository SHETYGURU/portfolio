import React from "react";
import { FaInstagram,FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./css/Contact.css"

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/gururaj_shetty/" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://wa.me/8296302504" target="_blank" rel="noopener noreferrer" className="items">
        <FaWhatsapp className="icons" />
      </a>
          <a href="https://www.facebook.com/share/yKXHcLHwzniAT6j8/?mibextid=qi2Omg" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/gururaj-shetty-03723922a/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          
          <a href="https://github.com/SHETYGURU" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:shettygururaj279@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
