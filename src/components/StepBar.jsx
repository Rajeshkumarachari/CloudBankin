import React from "react";
import { stepData } from "./Constants";

export default function StepBar() {
  return (
    <div className="step-parent">
      <ul className="parent-ul">
        {stepData.map((step) => (
          <li className="list">
            <p className="number">{step.id} </p>
            <p className="name"> {step.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
