import React from "react";
import "../styles/StageComponent.css";

function Stage(props: { link: string; number: number }) {
  return (
    <div className="stage">
      <div className="title">
        <p> Development Stage {props.number} - Report: </p>
      </div>
      <div className="url">
        <a href={props.link} target="_blank">
          {" "}
          Click here For Stage {props.number}
        </a>
      </div>
    </div>
  );
}

export default Stage;
