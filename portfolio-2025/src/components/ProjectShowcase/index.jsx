import { motion } from 'motion/react'
import Container from '../Container'
import AnimatedTitle from '../AnimatedTitle'

const ProjectShowcase = ({ projects }) => {
  return (
    <Container>
      <AnimatedTitle>Projects</AnimatedTitle>

      <div className='flex flex-col gap-8 w-full'>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className='relative w-full hover:bg-slate-800 hover:shadow-md  transition-colors rounded-md'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div
              className={`flex flex-col sm:flex-row ${
                index % 2 === 0 ? '' : 'sm:flex-row-reverse'
              } gap-8`}
            >
              <div className='w-full sm:w-1/2 h-auto flex justify-center'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-[500px] h-[300px] sm:w-full sm:h-auto max-h-[500px] object-cover transition-transform duration-300 transform hover:scale-110'
                />
              </div>

              <div className='flex flex-col justify-center items-center w-full sm:w-1/2'>
                <h3 className='text-2xl font-bold text-violet-500 mb-2'>
                  {project.title}
                </h3>

                <div className='flex flex-wrap justify-center sm:justify-start gap-2 mb-4'>
                  <span className='font-semibold'>Built with:</span>
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className='px-2 py-1 bg-violet-600 text-white text-sm rounded-lg'
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <p className='text-lg text-violet-200 mb-4 text-center sm:text-left'>
                  {project.description}
                </p>

                <div className='flex gap-4'>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-4 py-2 bg-violet-500 text-white rounded-lg shadow hover:bg-violet-600 transition-colors'
                  >
                    View Demo
                  </a>
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-4 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 transition-colors'
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  )
}

export default ProjectShowcase
