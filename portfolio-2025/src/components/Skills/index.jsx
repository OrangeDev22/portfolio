import React from 'react'
import SkillCard from '../SkillCard'
import Container from '../Container'
import { motion } from 'motion/react'
import AnimatedTitle from '../AnimatedTitle'

const SkillList = () => {
  const skills = ['React', 'Next.js', 'GraphQL', 'TailwindCSS']

  return (
    <Container>
      <AnimatedTitle>Skills</AnimatedTitle>
      <div className='flex flex-wrap gap-4'>
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </Container>
  )
}

export default SkillList
