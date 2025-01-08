import { motion } from "motion/react";

const ProjectImage = ({ image, title }) => {
  return (
    <div className="w-full md:w-1/2">
      <motion.img
        src={image}
        alt={title}
        className="w-full h-auto max-w-[800px] max-h-[500px] rounded-md object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </div>
  );
};

export default ProjectImage;
