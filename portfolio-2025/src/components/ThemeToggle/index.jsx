import React, { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{
        scale: 1.2,
        rotate: 180,
        transition: { type: 'spring', stiffness: 300 },
      }}
      initial={{ scale: 1 }}
      animate={{ scale: 1.2 }}
      exit={{ scale: 1 }}
      className='focus:outline-none'
    >
      {theme === 'light' ? <MoonIcon width={24} /> : <SunIcon width={24} />}
    </motion.button>
  )
}

export default ThemeToggle
