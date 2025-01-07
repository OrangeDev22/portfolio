import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <div className='fixed flex sm:flex-col sm:right-4 sm:top-1/2 sm:-translate-y-1/2 bottom-4 w-full sm:w-auto justify-center sm:justify-start gap-4'>
      {/* LinkedIn Icon */}
      <a
        href='https://www.linkedin.com/in/your-profile'
        target='_blank'
        rel='noopener noreferrer'
        className='bg-violet-500 hover:bg-violet-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110'
        aria-label='LinkedIn'
      >
        <FaLinkedin className='h-6 w-6' />
      </a>

      {/* GitHub Icon */}
      <a
        href='https://github.com/your-profile'
        target='_blank'
        rel='noopener noreferrer'
        className='bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110'
        aria-label='GitHub'
      >
        <FaGithub className='h-6 w-6' />
      </a>

      {/* Email Icon */}
      <a
        href='mailto:your-email@example.com'
        className='bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110'
        aria-label='Email'
      >
        <EnvelopeIcon className='h-6 w-6' />
      </a>
    </div>
  )
}

export default SocialLinks
