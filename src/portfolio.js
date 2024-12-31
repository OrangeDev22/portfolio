import todolist1 from './images/todolist1.png'
import todolist2 from './images/todolist2.png'
import maze1 from './images/maze1.jpg'
import weather1 from './images/weather1.jpg'
import cropper1 from './images/cropper1.png'
import simplechat1 from './images/simplechat1.jpg'
import chat1 from './images/chat1.jpg'
import profile1 from './images/profile1.png'
import calendar1 from './images/calendar1.png'
import mest from './images/mest.png'

const header = {
  homepage: '/',
  title: 'Gabriel Zuniga | Web Developer',
}

const about = {
  name: 'Gabriel Zuniga',
  role: 'Web Developer',
  description: `I am a passionate web developer dedicated to building efficient and scalable web applications. I enjoy taking on new challenges and continuously improving my skills. My focus is on creating user-friendly interfaces and optimizing the development process using modern technologies.`,
  resume:
    'https://drive.google.com/file/d/1e_sTpiEkJTWjMIAyRe5fBlmd_TiqMV0T/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/gabriel-zuniga-83a8391a1/',
    github: 'https://github.com/OrangeDev22',
  },
}

const projects = [
  {
    name: 'MEST Movie Search',
    description: `A movie directory built with Next.js and Nest.js, featuring user authentication via Auth0. Users can search for movies using GraphQL and create a personal list of favorite movies.`,
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Zustand',
      'Zod',
      'PostgreSQL',
      'Nest.js',
      'Auth0',
    ],
    sourceCode: 'https://github.com/OrangeDev22/mest-movie-library',
    livePreview: 'https://mest.netlify.app/',
    image: mest,
  },
  {
    name: 'Todo List',
    description:
      'Task management app inspired by Trello, with user authentication and a drag-and-drop dashboard for organizing tasks across three lists. Data is securely stored in a SQL database.',
    stack: [
      'React',
      'TypeScript',
      'Next.js',
      'Nest.js',
      'Context API',
      'Tailwind CSS',
      'React Beautiful DnD',
      'PostgreSQL',
    ],
    sourceCode: 'https://github.com/OrangeDev22/todo-list',
    livePreview: 'https://todo-list-orange.netlify.app/',
    image: todolist1,
    image2: todolist2,
  },
  {
    name: 'Maze Game Search',
    description:
      'A game directory app using Material-UI and the RAWG Video Games Database API. Search for games and explore their availability across platforms.',
    stack: ['React', 'JavaScript', 'RAW API', 'Material-UI', 'Context API'],
    sourceCode: 'https://github.com/OrangeDev22/maze-search-game-app',
    livePreview: 'https://wonderful-torvalds-6068b1.netlify.app/',
    image: maze1,
  },
  {
    name: 'Image Cropper',
    description:
      'A web app built with React, TypeScript, and Tailwind CSS that lets you upload and crop images to your desired dimensions.',
    stack: ['TypeScript', 'React', 'Tailwind CSS'],
    sourceCode: 'https://github.com/OrangeDev22/image-cropper',
    livePreview: 'https://sage-tanuki-f64d81.netlify.app/',
    image: cropper1,
  },
  {
    name: 'React Calendar',
    description: `A calendar component that allows you to select dates and view a list of meetings scheduled for those dates. Built with TypeScript and Tailwind CSS.`,
    stack: ['TypeScript', 'React', 'Tailwind CSS'],
    sourceCode: 'https://github.com/OrangeDev22/react-calendar',
    livePreview: 'https://reliable-daffodil-7aac49.netlify.app/',
    image: calendar1,
  },
  {
    name: 'Weather Report',
    description:
      'A weather app built with the OpenWeather API that provides current weather and forecasts based on your location. View hourly and daily weather reports.',
    stack: ['React', 'CSS', 'OpenWeather API', 'JavaScript'],
    sourceCode: 'https://github.com/OrangeDev22/weather-report',
    livePreview: 'https://happy-edison-f4c7d9.netlify.app/',
    image: weather1,
  },
  {
    name: 'Simple Group Chat',
    description:
      'A simple group chat app built with Bootstrap and Socket.IO. Users can add contacts and create chat rooms for one-on-one or group conversations.',
    stack: ['React', 'Bootstrap', 'Socket.IO', 'Node.js'],
    sourceCode: 'https://github.com/OrangeDev22/simple-group-chat',
    livePreview: 'https://simple-group-chat.netlify.app/',
    image: simplechat1,
  },
  {
    name: 'Complex Group Chat',
    description:
      'A more feature-rich group chat app that allows users to create accounts, send friend requests, block users, and more. Built with Material-UI, PostgreSQL, and Socket.IO.',
    stack: ['React', 'Bootstrap', 'Socket.IO', 'Node.js'],
    sourceCode: 'https://github.com/OrangeDev22/project-group-chat-app',
    livePreview: 'https://complex-group-chat-app.netlify.app/',
    image: chat1,
  },
]

const skills = [
  'React',
  'Node.js',
  'JavaScript',
  'TypeScript',
  'Hasura',
  'GraphQL',
  'PostgreSQL',
  'SASS',
  'Tailwind CSS',
  'Nest.js',
  'Socket.IO',
  'Redux',
  'Zustand',
  'Material-UI',
  'Bootstrap',
  'Auth0',
  'Express.js',
  'HTML',
  'CSS',
  'Visual Studio Code',
  'Git',
  'Java',
  'SQL',
  'MySQL',
  'Cypress',
  'Stripe',
  'Playwright',
  'Firebase',
]

export { header, about, projects, skills }
