import React from "react";
import PropTypes from "prop-types";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "motion/react";
import Container from "../Container";
import AnimatedTitle from "../AnimatedTitle";
import { experiences } from "../../utils";

const JobExperiences = () => {
  return (
    <Container id="experience">
      <AnimatedTitle>Experience</AnimatedTitle>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="flex items-start space-x-4 hover:bg-slate-800 transition-colors duration-300 p-4 rounded-md hover:shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="max-w-5xl">
              <div className="w-full flex flex-col md:flex-row items-center gap-2 mb-4 text-lg font-semibold">
                <div className="flex gap-2 items-center">
                  <span className="text-2xl">{experience.title}</span>
                  {experience.companyUrl && (
                    <a
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
                <div className="md:ml-auto text-right text-gray-500 font-medium">
                  {experience.date}
                </div>
              </div>
              <div className="mt-1 text-gray-400">{experience.description}</div>
              <div className="mt-2  text-gray-400 text-lg">
                <strong>Made with:</strong>{" "}
                <span className="text-violet-200">
                  {experience.skills.join(", ")}.
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};
export default JobExperiences;
