import { motion } from 'motion/react'

const HeaderItem = ({ hrfe, text }) => {
  return (
    <>
      <motion.a
        hrfe={hrfe}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {text}
      </motion.a>
    </>
  )
}

export default HeaderItem
