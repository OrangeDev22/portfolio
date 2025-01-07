import { motion } from 'motion/react'

const AboutMe = () => {
  return (
    <div className='flex flex-col mx-auto items-center justify-center my-32 text-center gap-8'>
      {/* Animated Title */}
      <motion.div
        className='text-5xl text-violet-200 max-w-xl'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span>Hello, I'm</span>{' '}
        <motion.span
          className='text-violet-400'
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Gabriel
        </motion.span>
        .<br /> I'm a Software Developer.
      </motion.div>

      {/* Animated Description */}
      <motion.div
        className='text-xl max-w-3xl'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        I’m a passionate software developer based in Honduras, dedicated to
        creating efficient and scalable web applications. Continuously driven by
        curiosity, I’m always learning new skills and embracing exciting
        challenges to grow both personally and professionally.
      </motion.div>

      {/* Styled and Animated Button */}
      <motion.button
        className='px-6 py-3 bg-violet-400 text-white text-lg font-medium rounded-lg shadow-lg transition-transform duration-300'
        initial={{ scale: 1, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
        whileHover={{
          scale: 1.1,
          backgroundColor: '#7c3aed',
          boxShadow: '0 8px 24px rgba(124, 58, 237, 0.4)',
        }}
        whileTap={{ scale: 0.95 }}
        animate={{ scale: 1, backgroundColor: '#8b5cf6' }}
      >
        Get my resume
      </motion.button>
    </div>
  )
}

export default AboutMe
