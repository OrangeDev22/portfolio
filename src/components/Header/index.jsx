import { motion } from 'motion/react'
import HamburgerMenu from '../HamburgerMenu'
import { headerItems } from '../../utils'
import HeaderItem from '../HeaderItem'

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
          className='md:flex md:gap-4 items-center hidden md:block'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
        >
          {headerItems.map(({ text, url, target }) => (
            <HeaderItem href={url} text={text} target={target} />
          ))}
        </motion.div>

        <HamburgerMenu />
      </div>
    </header>
  )
}

export default Header
