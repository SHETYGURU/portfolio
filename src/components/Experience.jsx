import React, { useState } from "react";
import experience from "./data/experience.json";
import "./css/Experience.css";

const Experience = () => {
  const [activeId, setActiveId] = useState(null);

  const handleMouseEnter = (id) => {
    setActiveId(id);
  };

  const handleMouseLeave = () => {
    setActiveId(null);
  };

  return (
    <div className="container ex" id="experience">
      <h1>EXPERIENCE</h1>
      {experience.slice(0, 1).map((data) => (
        <div
          key={data.id}
          className="ex-items text-center my-5"
          data-aos="zoom-in"
          data-aos-duration="1000"
          onMouseEnter={() => handleMouseEnter(data.id)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="left">
            <img src={`/assets/${data.imageSrc}`} alt="" />
          </div>
          <div className="right">
            <h2>{data.role}</h2>
            <h4>
              <span style={{ color: "yellowgreen" }}>
                {data.startDate} - {data.endDate}{" "}
              </span>{" "}
              <span style={{ color: "yellow" }}>{data.location}</span>
            </h4>
            <h5 style={{ color: "yellow" }}>{data.experiences[0]}</h5>
            <h5 style={{ color: "yellow" }}>{data.experiences[1]}</h5>
            {activeId === data.id && data.additionalInfo && (
              <div className="tooltip">
                <p>{data.additionalInfo}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
