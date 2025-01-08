import { motion } from 'motion/react'
import Socials from '../Socials'
import { resumeUrl } from '../../utils'

const AboutMe = () => {
  return (
    <div
      className='flex flex-col mx-auto items-center justify-center my-32 text-center gap-8'
      id='about'
    >
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

      <Socials />

      <a href={resumeUrl} target='_blank'>
        <motion.button
          className='px-6 py-3 bg-violet-400 text-white text-lg font-medium rounded-lg shadow-lg transition-transform duration-300'
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.05 }}
        >
          Get my resume
        </motion.button>
      </a>
    </div>
  )
}

export default AboutMe
