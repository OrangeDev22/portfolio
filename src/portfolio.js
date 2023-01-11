import todolist1 from './images/todolist1.png'
import todolist2 from './images/todolist2.png'
import maze1 from './images/maze1.jpg'
import weather1 from './images/weather1.jpg'
import cropper1 from './images/cropper1.png'
import simplechat1 from './images/simplechat1.jpg'
import chat1 from './images/chat1.jpg'
import profile1 from './images/profile1.png'
import calendar1 from './images/calendar1.png'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'JS',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Gabriel Zuniga',
  role: 'Web Developer',
  description: `I'm a web developer highly passionate about coding and embracing new
    challenges. Always looking forward to improving as a professional as well as
    learning and sharing new technologies.
    `,
  resume:
    'https://drive.google.com/file/d/1_hMi_jIzaCuqR39YAv1WwC11r4qVbiq0/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/gabriel-zuniga-83a8391a1/',
    github: 'https://github.com/OrangeDev22',
  },
}

const projects = [
  {
    name: 'Todo List',
    description:
      'A video games directory. Created using materialUI, and RAWG Video Games Database API. You can search any game you want and see where is available.',
    stack: [
      'React',
      'Typescript',
      'NextJS',
      'Context API',
      'Tailwind',
      'react-beautiful-dnd',
      'PostgreSQL',
    ],
    sourceCode: 'https://github.com/OrangeDev22/todo-list',
    livePreview: 'https://todo-list-orange.netlify.app/',
    image: todolist1,
    image2: todolist2,
  },
  {
    name: 'MAZE GAME SEARCH',
    description:
      'A video games directory. Created using materialUI, and RAWG Video Games Database API. You can search any game you want and see where is available.',
    stack: [
      'React',
      'Javascript',
      'React',
      'RAW API',
      'Material-UI',
      'Context API',
    ],
    sourceCode: 'https://github.com/OrangeDev22/maze-search-game-app',
    livePreview: 'https://wonderful-torvalds-6068b1.netlify.app/',
    image: maze1,
  },
  {
    name: 'IMAGE CROPPER',
    description:
      'Web app created using react-cropper, typescript, and tailwind. Select any image on your device to crop it to however you want it',
    stack: ['TypeScript', 'React', 'Tailwind'],
    sourceCode: 'https://github.com/OrangeDev22/image-cropper',
    livePreview: 'https://sage-tanuki-f64d81.netlify.app/',
    image: cropper1,
  },
  {
    name: 'React Calendar',
    description: `A calendar component where you can choose any date that has one or more meetings and renders a list based on that date. Built using typescript and tailwind`,
    stack: ['TypeScript', 'React', 'Tailwind'],
    sourceCode: 'https://github.com/OrangeDev22/react-calendar',
    livePreview: 'https://reliable-daffodil-7aac49.netlify.app/',
    image: calendar1,
  },
  {
    name: 'PROFILE GENERATOR',
    description:
      'Profile markup generator built with react typescript and tailwind.Write down any data you want to generate a profile markup and create dummy posts.',
    stack: ['Typescript', 'React', 'Context API', 'Tailwind'],
    livePreview: 'https://profile-markup-generator.netlify.app/',
    image: profile1,
  },
  {
    name: 'WEATHER REPORT',
    description:
      'Weather application built with open weather API. Asks you for your current location and gives you a weather forecast. You can see the daily and hourly forecast',
    stack: ['React', 'Css', 'OW API', 'Javascript'],
    sourceCode: 'https://github.com/OrangeDev22/weather-report',
    livePreview: 'https://happy-edison-f4c7d9.netlify.app/',
    image: weather1,
  },
  {
    name: 'SIMPLE GROUP CHAT',
    description:
      'Simple live group chat created with bootstrap and using SocketIo. You can add contacts based on their user id and create chat rooms with one or more friends.',
    stack: ['React', 'Bootstrap', 'Socket.IO', 'NodeJs'],
    sourceCode: 'https://github.com/OrangeDev22/simple-group-chat',
    livePreview: 'https://simple-group-chat.netlify.app/',
    image: simplechat1,
  },
  {
    name: 'COMPLEX GROUP CHAT',
    description:
      'A more complex group chat application. You can create your account with email, add, block, and send friend requests. Built using MaterialUi, Postgresql, and SoketIo.',
    stack: ['React', 'Bootstrap', 'Socket.IO', 'NodeJs'],
    livePreview: 'https://github.com/OrangeDev22/project-group-chat-app',
    image: chat1,
  },
]

const skills = [
  'React',
  'NodeJs',
  'Javascript',
  'TypeSCript',
  'Hasura',
  'Graphql',
  'Postgresql',
  'SASS',
  'Tailwind',
  'NestJS',
  'Socket.IO',
  'Redux',
  'MaterialUi',
  'Bootstrap',
  'Html',
  'CSS',
  'Visual Studio Code',
  'Git',
  'Java',
  'SQL',
  'MYSQL',
  'Firebase',
]

export { header, about, projects, skills }
