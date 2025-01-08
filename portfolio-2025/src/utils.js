import todolist1 from './images/todolist1.png'
import maze1 from './images/maze1.jpg'
import weather1 from './images/weather1.jpg'
import cropper1 from './images/cropper1.png'
import simplechat1 from './images/simplechat1.jpg'
import chat1 from './images/chat1.jpg'
import calendar1 from './images/calendar1.png'
import chess from './images/chess.png'
import mest from './images/mest.png'

export const resumeUrl =
  'https://drive.google.com/file/d/1YBFsK2zfbR-0kveg8BfINW6NaF4A7GSh/view?usp=sharing'

export const socials = {
  github: 'https://github.com/OrangeDev22',
  linkedin: 'https://www.linkedin.com/in/orangedev/',
  email: 'gabrielzunigakz@gmail.com',
}

export const headerItems = [
  { text: 'About', url: '/#about' },
  { text: 'Skills', url: '/#skills' },
  { text: 'Experience', url: '/#experience' },
  { text: 'Projects', url: '/#projects' },
  { text: 'Resume', url: resumeUrl, target: '_blank' },
]

export const fullStackSkills = [
  'React',
  'NodeJs',
  'JavaScript',
  'TypeScript',
  'Hasura',
  'GraphQL',
  'PostgreSQL',
  'NestJs',
  'Socket.IO',
  'Redux',
  'Zustand',
  'ExpressJs',
  'Git',
  'SQL',
  'MySQL',
  'Stripe',
  'Firebase',
  'JQuery',
]

export const stylingSkills = [
  'SASS',
  'Tailwind CSS',
  'Material-UI',
  'Bootstrap',
  'CSS',
  'HTML',
  'CSS Module',
  'Styled-Components',
]

export const miscellaneousSkills = [
  'Visual Studio Code',
  'Java',
  'Cypress',
  'Playwright',
  'Reat Testing Library',
  'REST APIs',
  'Auth0',
]

export const experiences = [
  {
    date: 'Feb 2023 - Dec 2024',
    title: 'Full Stack Developer - Trades.org',
    companyUrl: 'https://www.trades.org',
    description: `Collaborated with cross-functional teams to migrate micro frontend structures to Next.js, improving performance, scalability, and maintainability.
Led unit and component testing integration, boosting code coverage and reliability.
Resolved performance bottlenecks, improving page load times by 10% and reducing error rates.
Designed and integrated backend services with NestJS and GraphQL for efficient data handling.
Enhanced codebase scalability and stability, improving uptime by 20% and optimizing development processes.`,
    skills: [
      'React',
      'NextJs',
      'NestJs',
      'Javascript',
      'Typescript',
      'Graphql',
      'TailwindCSS',
      'Cypress',
      'Playwright',
      'Jest',
      'PostgresSQL',
      'i18',
    ],
  },
  {
    date: 'Feb 2023 - Dec 2024',
    title: 'Full Stack Developer - Influexer',
    companyUrl: 'https://influexer.com/',
    description: `Developed a React application from scratch, converting Figma designs into scalable, reusable components for a seamless UX.
Architected the database with PostgreSQL and Hasura, implementing GraphQL APIs for efficient client-server communication.
Migrated the app to Next.js, utilizing SSR and SSG to enhance performance, SEO, and load times.
Optimized performance, refactored code, and streamlined workflows for a maintainable codebase.
Delivered the product ahead of schedule, exceeding client expectations with an early release.`,
    skills: [
      'React',
      'NextJs',
      'NodeJs',
      'ExpressJs',
      'Javascript',
      'Typescript',
      'Graphql',
      'TailwindCSS',
      'Sass',
      'Cypress',
      'Jest',
      'PostgresSQL',
    ],
  },
  {
    date: 'Dec 2020 - Jan 2021',
    title: 'Front End Developer - Frisson Factory',
    companyUrl: 'https://robocomposer.com/',
    description: `Led bug identification and resolution to ensure smooth functionality and a positive user experience.
Refactored code to improve readability, maintainability, and performance.
Implemented new features and enhanced existing functionalities to meet business goals.
Collaborated with cross-functional teams to deliver high-quality solutions on time.`,
    skills: ['React', 'HTML5', 'JavaSCript', 'CSS'],
  },
]

export const projects = [
  {
    title: 'MEST Movie Search',
    description: `A movie directory built with Next.js and Nest.js, featuring user authentication via Auth0. Users can search for movies using GraphQL and create a personal list of favorite movies.`,
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Zustand',
      'Zod',
      'PostgreSQL',
      'Context API',
      'Nest.js',
      'Auth0',
    ],
    githubUrl: 'https://github.com/OrangeDev22/mest-movie-library',
    demoUrl: 'https://mest.netlify.app/',
    image: mest,
  },
  {
    title: 'Todo List',
    description:
      'Task management app inspired by Trello, with user authentication and a drag-and-drop dashboard for organizing tasks across multiple boards. Data is securely stored in a SQL database.',
    skills: [
      'React',
      'TypeScript',
      'Node.Js',
      'PostgreSQL',
      'ExpressJs',
      'Nest.js',
      'Redux',
      'Motion',
      'Tailwind CSS',
      'React Beautiful DnD',
    ],
    githubUrl: 'https://github.com/OrangeDev22/todo-list',
    demoUrl: 'https://todo-list-orange.netlify.app/',
    image: todolist1,
  },
  {
    title: 'Maze Game Search',
    description:
      'A game directory app using Material-UI and the RAWG Video Games Database API. Search for games and explore their availability across platforms.',
    skills: ['React', 'JavaScript', 'RAW API', 'Material-UI', 'Context API'],
    githubUrl: 'https://github.com/OrangeDev22/maze-search-game-app',
    demoUrl: 'https://wonderful-torvalds-6068b1.netlify.app/',
    image: maze1,
  },
  {
    title: 'Image Cropper',
    description:
      'A web app built with React, TypeScript, and Tailwind CSS that lets you upload and crop images to your desired dimensions.',
    skills: ['TypeScript', 'React', 'Tailwind CSS'],
    githubUrl: 'https://github.com/OrangeDev22/image-cropper',
    demoUrl: 'https://sage-tanuki-f64d81.netlify.app/',
    image: cropper1,
  },
  {
    title: 'React Calendar',
    description: `A calendar component that allows you to select dates and view a list of meetings scheduled for those dates. Built with TypeScript and Tailwind CSS.`,
    skills: ['TypeScript', 'React', 'Tailwind CSS'],
    githubUrl: 'https://github.com/OrangeDev22/react-calendar',
    demoUrl: 'https://reliable-daffodil-7aac49.netlify.app/',
    image: calendar1,
  },
  {
    title: 'Weather Report',
    description:
      'A weather app built with the OpenWeather API that provides current weather and forecasts based on your location. View hourly and daily weather reports.',
    skills: ['React', 'CSS', 'OpenWeather API', 'JavaScript'],
    githubUrl: 'https://github.com/OrangeDev22/weather-report',
    demoUrl: 'https://happy-edison-f4c7d9.netlify.app/',
    image: weather1,
  },
  {
    title: 'Simple Group Chat',
    description:
      'A simple group chat app built with Bootstrap and Socket.IO. Users can add contacts and create chat rooms for one-on-one or group conversations.',
    skills: ['React', 'Bootstrap', 'Socket.IO', 'Node.js'],
    githubUrl: 'https://github.com/OrangeDev22/simple-group-chat',
    demoUrl: 'https://simple-group-chat.netlify.app/',
    image: simplechat1,
  },
  {
    title: 'Complex Group Chat',
    description:
      'A more feature-rich group chat app that allows users to create accounts, send friend requests, block users, and more. Built with Material-UI, PostgreSQL, and Socket.IO.',
    skills: ['React', 'Bootstrap', 'Socket.IO', 'Node.js'],
    githubUrl: 'https://github.com/OrangeDev22/project-group-chat-app',
    image: chat1,
  },
  {
    title: 'Vanilla JavaScript Chess',
    description: `A simple chess game made using Vanilla JavaScript. It supports all chess moves and can be played by two people.`,
    skills: ['JavaScript', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/OrangeDev22/js-chess-game',
    demoUrl: 'https://simple-chess-game.netlify.app/',
    image: chess,
  },
]
