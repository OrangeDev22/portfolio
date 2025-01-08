import React from 'react'
import { motion } from 'motion/react'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className='text-white py-4 text-center'
    >
      <div className='container mx-auto'>
        <p className='mb-2'>
          Coded in <span className='text-violet-300'>Visual Studio Code</span>{' '}
          by yours trully using:
          <span className='font-semibold'>
            {' '}
            <span className='text-violet-300'>React, Motion</span> and{' '}
            <span className='text-violet-300'>TailwindCSS</span>
          </span>
        </p>
      </div>
    </motion.footer>
  )
}

export default Footer
