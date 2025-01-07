import { motion } from 'motion/react'

const AnimatedTitle = ({ children }) => {
  return (
    <motion.h2
      className='text-4xl font-bold text-violet-400'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.h2>
  )
}

export default AnimatedTitle
