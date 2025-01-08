import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { socials } from '../../utils'

const SocialLinks = () => {
  return (
    <div className='fixed hidden sm:flex sm:flex-col sm:left-4 sm:bottom-4 sm:translate-y-0 bottom-4 w-full sm:w-auto justify-center sm:justify-start gap-4'>
      <a
        href={socials.linkedin}
        target='_blank'
        rel='noopener noreferrer'
        className='p-3 rounded-full transition-transform transform hover:scale-110 hover:text-violet-400'
        aria-label='LinkedIn'
      >
        <FaLinkedin className='h-8 w-8' />
      </a>

      <a
        href={socials.github}
        target='_blank'
        rel='noopener noreferrer'
        className='p-3 rounded-full transition-transform transform hover:scale-110 hover:text-violet-400'
        aria-label='GitHub'
      >
        <FaGithub className='h-8 w-8' />
      </a>

      <a
        href={`mailto:${socials.email}`}
        className='p-3 rounded-full transition-transform transform hover:scale-110 hover:text-violet-400'
        aria-label='Email'
      >
        <EnvelopeIcon className='h-8 w-8' />
      </a>
    </div>
  )
}

export default SocialLinks
