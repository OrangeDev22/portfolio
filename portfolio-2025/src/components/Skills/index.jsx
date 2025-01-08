import React from 'react'
import Container from '../Container'
import { motion } from 'motion/react'
import AnimatedTitle from '../AnimatedTitle'
import {
  fullStackSkills,
  miscellaneousSkills,
  stylingSkills,
} from '../../utils'
import SkillList from '../SkillList'

const Skills = () => {
  return (
    <Container id='skills'>
      <AnimatedTitle>Skills</AnimatedTitle>
      <motion.div
        className='space-y-12 max-w-5xl transition-colors duration-300'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className='space-y-4'>
          <h2 className='text-2xl font-bold'>Full-Stak:</h2>
          <SkillList skills={fullStackSkills} name='full-stack' />
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-bold'>Styling:</h2>
          <SkillList skills={stylingSkills} name='full-stack' />
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-bold'>Miscellaneous:</h2>
          <SkillList skills={miscellaneousSkills} name='full-stack' />
        </div>
      </motion.div>
    </Container>
  )
}

export default Skills
