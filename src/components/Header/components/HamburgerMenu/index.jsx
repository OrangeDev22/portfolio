import React, { useState } from "react";
import { motion } from "motion/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { headerItems } from "../../../../utils";
import HeaderItem from "../HeaderItem";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative block md:hidden">
      <button
        onClick={toggleMenu}
        className="z-50 p-2 text-white rounded-md focus:outline-none"
      >
        {isOpen ? (
          <XMarkIcon className="w-8 h-8" />
        ) : (
          <Bars3Icon className="w-8 h-8" />
        )}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-gray-900 text-white"
        >
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 text-white focus:outline-none"
          >
            <XMarkIcon className="w-8 h-8" />
          </button>

          <div
            className="space-y-6 text-center flex flex-col"
            onClick={toggleMenu}
          >
            {headerItems.map(({ text, url }) => (
              <HeaderItem href={url} text={text} />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HamburgerMenu;
