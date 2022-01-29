import project1img from "../../assets/images/date-night-in-a-box.png";
import project2img from "../../assets/images/Screenshot.png";
import project3img from "../../assets/images/QuestionScreen.png"
import React from "react";
const styles = {
  width: {
    minWidth: "5rem",
    maxWidth: "30rem",
  },
  background: {
    backgroundColor: "darkBlue",
  },
};
export default function Work() {
  return (
    <div class="container d-flex align items-stretch flex-lg-wrap justify-content-center m-5 p-5">
      {/* <div class="card img-fluid" style={styles.width}>
        <img
          class="card-img-top"
          src=""
          alt="Card image"
          style={styles.width}
        />
        <div class="card-img-overlay">
          <h4 class="card-title lable" style={styles.background}>
            <a
              href="https://hrmanagement0.herokuapp.com/login"
              target="_blank"
              rel="nonreferrer"
            />
            <img src={github} />
            <img alt="Git Hub Icon Hover" className="git_link hover" src={githubHover}
            />
          </h4>
        </div>
      </div> */}
      <div class="card img-fluid m-2" style={styles.width}>
        <img
          class="card-img-top"
          src={project1img}
          alt="Card image"
          style={styles.width}
        />
        <div class="card-body">
          <h5 class="card-title">Date Night In a Box</h5>
          <p class="card-text">A quick easy way to plan a night out</p>
          <div class="justify-content-center">
            <a
              href="https://smilinirish.github.io/date-inght-in-a-box/"
              target="_blank"
              class="btn btn-primary m-1"
              style={styles.width}
            >
              live page
            </a>
            <a
              href="https://github.com/Smilinirish/date-inght-in-a-box"
              target="_blank"
              class="btn btn-primary m-1"
              style={styles.width}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div class="card img-fluid m-2" style={styles.width}>
        <img
          class="card-img-top"
          src={project2img}
          alt="Card image"
          style={styles.width}
        />
        <div class="card-body">
          <h5 class="card-title">Password Generator</h5>
          <p class="card-text">A quick and simple password Generator</p>
          <div class="justify-content-center">
            <a
              href="https://smilinirish.github.io/password-gen/"
              target="_blank"
              class="btn btn-primary m-1"
              style={styles.width}
            >
              live page
            </a>
            <a
              href="https://github.com/Smilinirish/password-gen"
              target="_blank"
              class="btn btn-primary m-1"
              style={styles.width}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div class="card img-fluid m-2" style={styles.width}>
        <img
          class="card-img-top"
          src={project3img}
          alt="Card image"
          style={styles.width}
        />
        <div class="card-body">
          <h5 class="card-title">Code Quiz</h5>
          <p class="card-text">a fun interactive code quiz</p>
          <div class="justify-content-center">
            <a
              href="https://smilinirish.github.io/code-quiz/"
              target="_blank"
              class="btn btn-primary m-1"
              style={styles.width}
            >
              live page
            </a>
            <a
              href="https://github.com/Smilinirish/code-quiz"
              target="_blank"
              class="btn btn-primary m-1"
              style={styles.width}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
