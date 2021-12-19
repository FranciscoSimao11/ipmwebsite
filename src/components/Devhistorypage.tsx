import React from "react";
import "../styles/Devhistorypage.css";
import StageComponent from "./StageComponent";

function Devhistorypage() {
  return (
    <div className="main-container">
      <p className="introduction-dev">
        Here you'll find out more about the stages of our development!
      </p>
      <div className="flex-wrapper">
        <StageComponent
          number={1}
          link="https://drive.google.com/file/d/19Ri4yWsT8wsuWtCI1sUQA4DB1vFy2ZFA/view?usp=sharing"
        />
        <StageComponent
          number={2}
          link="https://drive.google.com/file/d/1kpA8NGDBXHiLRlFsnyD3f2w2QLa0qIp_/view?usp=sharing"
        />
      </div>
      <div className="flex-wrapper">
        <StageComponent
          number={3}
          link="https://drive.google.com/file/d/1CYrb__q9BAufbjSDy0uTzsDPjIOD9rXj/view?usp=sharing"
        />
        <StageComponent
          number={4}
          link="https://drive.google.com/file/d/1zyLxa2QcC077YPxQpUEY5O1yYAMhml1J/view?usp=sharing"
        />
      </div>
      <div className="flex-wrapper">
        <StageComponent
          number={5}
          link="https://drive.google.com/file/d/1zyLxa2QcC077YPxQpUEY5O1yYAMhml1J/view?usp=sharing"
        />
        <StageComponent
          number={6}
          link="https://drive.google.com/file/d/1JCP3sBZ004Jw0x5-G1-u_EOL_iWZ-tKh/view?usp=sharing"
        />
      </div>
    </div>
  );
}

export default Devhistorypage;
