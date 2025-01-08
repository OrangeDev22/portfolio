import React from 'react'
import { motion } from 'motion/react'

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className='bg-violet-400 text-violet-100 p-2 rounded-lg shadow-lg flex items-center justify-center cursor-pointer'
    >
      <span className='font-medium'>{skill}</span>
    </motion.div>
  )
}

export default SkillCard
