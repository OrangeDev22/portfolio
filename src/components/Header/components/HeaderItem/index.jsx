import { motion } from "motion/react";

const HeaderItem = ({ href, text, target }) => {
  return (
    <>
      <motion.a
        href={
          // condition only due to the way gh pages handles the url
          process.env.NODE_ENV === "development"
            ? href
            : text !== "Resume"
            ? `/portfolio${href}`
            : href
        }
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer"
        target={target || ""}
      >
        {text}
      </motion.a>
    </>
  );
};

export default HeaderItem;
