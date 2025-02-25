import React from "react";
import { motion } from "motion/react";
import AnimatedTitle from "../AnimatedTitle";
import Container from "../Container";
import AnimatedWrapper from "../AnimatedWrapper";

const Contact = () => {
  return (
    <Container id="contact">
      <AnimatedTitle>Contact</AnimatedTitle>
      <AnimatedWrapper className="flex items-center justify-center px-6">
        <div className="text-center max-w-lg w-full">
          <p className="text-lg text-violet-200 mb-6">
            Want to contact with me?
          </p>
          <p className="text-base text-gray-400 mb-6">
            Staying in touch is essential to build great opportunities. Feel
            free to reach out via email or phone. Let's connect!
          </p>
          <div className="space-y-4">
            <p className="text-lg font-medium text-gray-700">
              <span className="text-gray-400">Email:</span>{" "}
              <a
                href="mailto:gabrielzunigakz@gmail.com"
                className="text-blue-500 hover:underline"
              >
                gabrielzunigakz@gmail.com
              </a>
            </p>
            <p className="text-lg font-medium text-gray-400">
              Phone:{" "}
              <a
                href="tel:+50498842641"
                className="text-blue-500 hover:underline"
              >
                +504 9884 2641
              </a>
            </p>
          </div>
        </div>
      </AnimatedWrapper>
    </Container>
  );
};

export default Contact;
