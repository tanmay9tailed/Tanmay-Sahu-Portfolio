import React from "react";
import { ReactTyped } from "react-typed";

const Type = () => (
  <div id="type" className="flex gap-2 text-white absolute bottom-52 left-28 text-6xl font-rubikIso select-none">
    <p>I'M </p>
    <ReactTyped strings={[" TANMAY SAHU", " DEVELOPER", " CODER"]} typeSpeed={90} backSpeed={80} loop />
  </div>
);

export default Type;
