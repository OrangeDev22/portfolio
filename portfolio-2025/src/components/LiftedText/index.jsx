import React from 'react'
import { motion } from 'motion/react'

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Stagger lifting effect for each word
    },
  },
}

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
    textShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    textShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

const LiftedText = () => {
  const text = 'Lifted from the ground with Motion'

  return (
    <motion.div
      className='flex flex-wrap justify-center items-center min-h-screen bg-gray-900 text-white text-center px-4'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
    >
      {text.split(' ').map((word, index) => (
        <motion.span
          key={index}
          className='inline-block mx-2 text-4xl font-bold'
          variants={wordVariants}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default LiftedText
