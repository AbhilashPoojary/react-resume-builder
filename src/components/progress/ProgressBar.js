import React from "react";
import "./progressbar.css";

export default function ProgressBar({ titles, page }) {
  const barData = titles?.map((item, index) => {
    return (
      <div className={"step" + (index <= page ? " active" : "")} key={index}>
        <p className={index <= page ? "active" : ""}></p>
        <div className={"bullet" + (index <= page ? " active" : "")}>
          <span className={index <= page ? "active" : ""}>{index + 1}</span>
        </div>
        <div
          className={"check fas fa-check" + (index <= page ? " active" : "")}
        ></div>
      </div>
    );
  });
  return <div className='progress-bar-custom'>{barData}</div>;
}
