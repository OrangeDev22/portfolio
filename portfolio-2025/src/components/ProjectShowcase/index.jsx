import React from 'react'
import PropTypes from 'prop-types'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'motion/react'
import { projects } from '../../utils'

const ProjectShowcase = () => {
  return (
    <div className='space-y-8'>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-6 p-4 rounded-md transition-colors duration-300 ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          } hover:bg-slate-800 hover:shadow-md`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Image Section */}
          <div className='w-full md:w-1/2'>
            <motion.img
              src={project.image}
              alt={project.title}
              className='w-full h-auto max-w-[800px] max-h-[500px] rounded-md object-cover'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>

          {/* Content Section */}
          <div className='w-full md:w-1/2 space-y-4'>
            <h2 className='text-2xl font-semibold'>{project.title}</h2>
            <p className='text-gray-400'>{project.description}</p>
            <div>
              <strong className='text-white'>Skills:</strong>{' '}
              <span className='text-violet-200'>
                {project.skills.join(', ')}.
              </span>
            </div>
            <div className='flex gap-4'>
              {project.demoUrl && (
                <motion.a
                  href={project.demoUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 px-4 py-2 text-white bg-violet-400 hover:bg-blue-700 rounded-md transition'
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <FaExternalLinkAlt />
                  Demo
                </motion.a>
              )}
              <motion.a
                href={project.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 px-4 py-2 text-white bg-gray-800 hover:bg-gray-900 rounded-md transition'
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <FaGithub />
                GitHub Code
              </motion.a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default ProjectShowcase
