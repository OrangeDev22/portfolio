import React from "react";
import Container from "../Container";
import { motion } from "motion/react";
import AnimatedTitle from "../AnimatedTitle";
import {
  fullStackSkills,
  miscellaneousSkills,
  stylingSkills,
} from "../../utils";
import SkillList from "../SkillList";
import AnimatedWrapper from "../AnimatedWrapper";

const Skills = () => {
  return (
    <Container id="skills">
      <AnimatedTitle>Skills</AnimatedTitle>
      <AnimatedWrapper className="space-y-12 max-w-5xl transition-colors duration-300">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Full-Stack:</h2>
          <SkillList skills={fullStackSkills} name="full-stack" />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Styling:</h2>
          <SkillList skills={stylingSkills} name="full-stack" />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Miscellaneous:</h2>
          <SkillList skills={miscellaneousSkills} name="full-stack" />
        </div>
      </AnimatedWrapper>
    </Container>
  );
};

export default Skills;
