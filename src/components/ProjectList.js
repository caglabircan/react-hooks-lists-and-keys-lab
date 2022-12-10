import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projectElements = projects.map( (item) => {
    return (
      <div key={item.id}>
          <h1>{item.name}</h1>
          <h2>{item.about}</h2>
          <ProjectItem technologies={item.technologies} />
      </div>
    )
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectElements}</div>
    </div>
  );
}

export default ProjectList;
