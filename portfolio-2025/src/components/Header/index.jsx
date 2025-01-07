import { motion } from 'framer-motion'
import ThemeToggle from '../ThemeToggle'

const Header = () => {
  return (
    <header className='flex items-center p-4 relative max-w-5xl mx-auto'>
      <motion.h3
        className='text-2xl'
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        Gabriel Zuniga
      </motion.h3>
      <div className='flex gap-4 items-center text-lg ml-auto relative'>
        <motion.div
          className='flex gap-4 items-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
        >
          <motion.a
            href='/#'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            About
          </motion.a>
          <motion.a
            href='/#'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Skills
          </motion.a>
          <motion.a
            href='/#'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Experience
          </motion.a>
          <motion.a
            href='/#'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
          </motion.a>
          <motion.a
            href='/#'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
          className='flex justify-center'
        >
          <ThemeToggle />
        </motion.div>
      </div>
    </header>
  )
}

export default Header
