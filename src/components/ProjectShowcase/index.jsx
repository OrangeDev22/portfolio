import React from "react";
import PropTypes from "prop-types";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "motion/react";
import { projects } from "../../utils";
import AnimatedTitle from "../AnimatedTitle";
import Container from "../Container";
import AnimatedWrapper from "../AnimatedWrapper";

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
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-w-[800px] max-h-[500px] rounded-md object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="text-gray-400">{project.description}</p>
              <div>
                <strong className="text-white">Skills:</strong>{" "}
                <span className="text-violet-200">
                  {project.skills.join(", ")}.
                </span>
              </div>
              <div className="flex gap-4">
                {project.demoUrl && (
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-white bg-violet-400 rounded-md transition"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.1, ease: "easeOut" }}
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </motion.a>
                )}
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-white bg-[#212830] rounded-md transition"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                >
                  <FaGithub />
                  GitHub Code
                </motion.a>
              </div>
            </div>
          </AnimatedWrapper>
        ))}
      </div>
    </Container>
  );
};

export default ProjectShowcase;
