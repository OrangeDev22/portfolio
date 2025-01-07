import React from 'react'
import Header from './components/Header'
import LiftedText from './components/LiftedText'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div className='min-h-screen bg-white dark:bg-gray-900 text-black dark:text-violet-200 dark:text-white font-nunito'>
      <Header />
      <main className='p-4'>
        <AboutMe />
      </main>
    </div>
  )
}

export default App
