import React from 'react'
import Header from './components/Header'
import LiftedText from './components/LiftedText'
import AboutMe from './components/AboutMe'
import SocialLinks from './components/SocialLinks'
import ProjectShowcase from './components/ProjectShowcase'

function App() {
  return (
    <div className='min-h-screen md:px-20 bg-white dark:bg-gray-900 text-black dark:text-violet-200 dark:text-white font-nunito'>
      <Header />
      <main className='p-4'>
        <AboutMe />
        <ProjectShowcase
          projects={[
            {
              title: 'Project 1',
              description: 'A description of Project 1',
              image: 'https://via.placeholder.com/300',
              link: 'https://example.com/project1',
              skills: ['React', 'Tailwind CSS', 'Framer Motion'],
            },
            {
              title: 'Project 2',
              description: 'A description of Project 2',
              image: 'https://via.placeholder.com/300',
              link: 'https://example.com/project2',
              skills: ['Next.js', 'TypeScript', 'GraphQL'],
            },
          ]}
        />
      </main>
      <SocialLinks />
    </div>
  )
}

export default App
