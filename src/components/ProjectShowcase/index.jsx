import React from "react";
import { projects } from "../../utils";
import AnimatedTitle from "../AnimatedTitle";
import Container from "../Container";
import AnimatedWrapper from "../AnimatedWrapper";
import ProjectImage from "./componets/ProjectImage";
import ProjectSection from "./componets/ProjectSection";

const ProjectShowcase = () => {
  return (
    <Container id="projects">
      <AnimatedTitle>Projects</AnimatedTitle>{" "}
      <div className="max-w-5xl flex flex-col gap-10">
        {projects.map((project, index) => (
          <AnimatedWrapper
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 p-4 rounded-md transition-colors duration-300 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } hover:bg-slate-800 hover:shadow-md`}
          >
            <ProjectImage image={project.image} title={project.title} />

            <ProjectSection project={project} />
          </AnimatedWrapper>
        ))}
      </div>
    </Container>
  );
};

export default ProjectShowcase;
