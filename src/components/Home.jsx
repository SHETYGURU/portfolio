import React, { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";
import "./css/Home.css"; // Import the CSS file

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "FullStack Developer",
        "UI/UX designer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1>
            <span>Hi</span><br />
            <span>My Name is Gururaj</span><br />
            <span>A </span>
            <span ref={typedRef}></span>
          </h1>
          <div className="button-group">
            <a
              href="mailto:shettygururaj279@gmail.com?subject=Hiring"
              className="btn btn-outline-primary my-3"
            >
              Hire Me
            </a>
            <a
               href={pdf}
               target="_blank"
               rel="noopener noreferrer"
              className="btn btn-outline-warning my-3"
            >
             My CV
            </a>
          </div>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
