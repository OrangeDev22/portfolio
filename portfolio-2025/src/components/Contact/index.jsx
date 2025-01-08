import React from 'react'
import { motion } from 'motion/react'
import AnimatedTitle from '../AnimatedTitle'
import Container from '../Container'

const Contact = () => {
  return (
    <Container>
      <AnimatedTitle>Contact</AnimatedTitle>
      <motion.section
        id='contact'
        className='flex items-center justify-center px-6'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className='text-center max-w-lg w-full'>
          <p className='text-lg text-gray-600 mb-6'>Want to contact with me?</p>
          <p className='text-base text-gray-500 mb-6'>
            Staying in touch is essential to build great opportunities. Feel
            free to reach out via email or phone. Let's connect!
          </p>
          <div className='space-y-4'>
            <p className='text-lg font-medium text-gray-700'>
              Email:{' '}
              <a
                href='mailto:your-email@example.com'
                className='text-blue-500 hover:underline'
              >
                your-email@example.com
              </a>
            </p>
            <p className='text-lg font-medium text-gray-700'>
              Phone:{' '}
              <a
                href='tel:+1234567890'
                className='text-blue-500 hover:underline'
              >
                +1 234 567 890
              </a>
            </p>
          </div>
        </div>
      </motion.section>
    </Container>
  )
}

export default Contact
