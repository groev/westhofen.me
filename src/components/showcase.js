import React from "react";
import Project from "./project";
import Projects from "../data/showcase";

export default function Showcase() {
  return (
    <div id="showcase">
      <h2>Showcase</h2>
      <p>My personal Projects</p>
      <div className="grid">
        {Projects.map(project => {
          return <Project data={project} />;
        })}
      </div>
    </div>
  );
}
