import React from "react";
import PropTypes from "prop-types";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "motion/react";
import Container from "../Container";
import AnimatedTitle from "../AnimatedTitle";
import { experiences } from "../../utils";
import AnimatedWrapper from "../AnimatedWrapper";
import ExperienceHeader from "./components/ExperienceHeader";
import ExperienceContent from "./components/ExperienceContent";

const JobExperiences = () => {
  return (
    <Container id="experience">
      <AnimatedTitle>Experience</AnimatedTitle>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <AnimatedWrapper
            key={index}
            className="flex items-start space-x-4 hover:bg-slate-800 transition-colors duration-300 p-4 rounded-md hover:shadow-md"
          >
            <div className="max-w-5xl">
              <ExperienceHeader
                companyUrl={experience.companyUrl}
                date={experience.date}
                title={experience.title}
              />
              <ExperienceContent
                description={experience.description}
                skills={experience.skills}
              />
            </div>
          </AnimatedWrapper>
        ))}
      </div>
    </Container>
  );
};
export default JobExperiences;
