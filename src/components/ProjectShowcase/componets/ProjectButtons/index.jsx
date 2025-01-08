import { motion } from "motion/react";

const ProjectButtons = ({ demoUrl, githubUrl }) => {
  return (
    <div className="flex gap-4">
      {project.demoUrl && (
        <motion.a
          href={demoUrl}
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
        href={githubUrl}
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
  );
};

export default ProjectButtons;
