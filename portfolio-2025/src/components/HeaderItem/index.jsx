import { motion } from 'motion/react'

const HeaderItem = ({ href, text, target }) => {
  return (
    <>
      <motion.a
        href={href}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className='cursor-pointer'
        target={target || ''}
      >
        {text}
      </motion.a>
    </>
  )
}

export default HeaderItem
