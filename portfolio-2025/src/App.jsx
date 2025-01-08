import React from 'react'
import Header from './components/Header'
import LiftedText from './components/LiftedText'
import AboutMe from './components/AboutMe'
import SocialLinks from './components/SocialLinks'
import ProjectShowcase from './components/ProjectShowcase'
import JobExperiences from './components/JobExperiences'
import SkillList from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className='min-h-screen md:px-20 bg-gray-900 text-violet-200 font-nunito'>
      <Header />
      <main className='p-4'>
        <AboutMe />
        <SkillList />
        <JobExperiences />
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
        <Contact />
      </main>
      <SocialLinks />
    </div>
  )
}

export default App
