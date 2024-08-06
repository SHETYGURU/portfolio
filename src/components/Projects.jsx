import React from "react";
import project from "./data/projects.json";
import "./css/Projects.css";


const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id="projects">
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {project.map((data) => (
            <div key={data.key} className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4">
              <div
                className="card bg-dark text-light"
                style={{
                  width: "18rem",
                  border: "1px solid lightblue",
                  boxShadow: "5px 5px 10px 10px rgba(255, 255, 255, 0.0)", // Updated shadow color
                }}
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className="img d-flex justify-content-center align-content-center p-3">
                  <img
                    src={data.imageSrc}
                    className="card-img-top"
                    alt={data.title}
                    style={{
                      width: "250px",
                      height: "200px",
                      border: "none", // Removed image border   
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  {data.demo && (
                    <a href={data.demo} className="btn btn-primary mx-3">
                      Demo
                    </a>
                  )}
                  {data.source && (
                    <a href={data.source} className="btn btn-warning">
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
