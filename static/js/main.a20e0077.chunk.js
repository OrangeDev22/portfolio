(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var i=a(9),s=a(3),n=a(1),c=a(0),r=Object(n.createContext)(),l=function(e){var t=e.children,a=Object(n.useState)("light"),i=Object(s.a)(a,2),l=i[0],o=i[1];Object(n.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(c.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o=a.p+"static/media/todolist1.0af184c1.png",d=(a.p,a.p+"static/media/maze1.de3e44d9.jpg"),p=a.p+"static/media/weather1.8c64eec7.jpg",h=a.p+"static/media/cropper1.a95ab944.png",j=a.p+"static/media/simplechat1.1825e1e8.jpg",u=a.p+"static/media/chat1.b3b96119.jpg",b=(a.p,a.p+"static/media/calendar1.349443cf.png"),m=a.p+"static/media/mest.9534f70b.png",g="/",f="Gabriel Zuniga | Web Developer",O="Gabriel Zuniga",v="Web Developer",x="I am a passionate web developer dedicated to building efficient and scalable web applications. I enjoy taking on new challenges and continuously improving my skills. My focus is on creating user-friendly interfaces and optimizing the development process using modern technologies.",k="https://drive.google.com/file/d/1e_sTpiEkJTWjMIAyRe5fBlmd_TiqMV0T/view?usp=sharing",S={linkedin:"https://www.linkedin.com/in/gabriel-zuniga-83a8391a1/",github:"https://github.com/OrangeDev22"},w=[{name:"MEST Movie Search",description:"A movie directory built with Next.js and Nest.js, featuring user authentication via Auth0. Users can search for movies using GraphQL and create a personal list of favorite movies.",stack:["Next.js","React","TypeScript","Tailwind CSS","Zustand","Zod","PostgreSQL","Context API","Nest.js","Auth0"],sourceCode:"https://github.com/OrangeDev22/mest-movie-library",livePreview:"https://mest.netlify.app/",image:m},{name:"Todo List",description:"Task management app inspired by Trello, with user authentication and a drag-and-drop dashboard for organizing tasks across multiple boards. Data is securely stored in a SQL database.",stack:["React","TypeScript","Node.Js","PostgreSQL","ExpressJs","Nest.js","Redux","Motion","Tailwind CSS","React Beautiful DnD"],sourceCode:"https://github.com/OrangeDev22/todo-list",livePreview:"https://todo-list-orange.netlify.app/",image:o},{name:"Maze Game Search",description:"A game directory app using Material-UI and the RAWG Video Games Database API. Search for games and explore their availability across platforms.",stack:["React","JavaScript","RAW API","Material-UI","Context API"],sourceCode:"https://github.com/OrangeDev22/maze-search-game-app",livePreview:"https://wonderful-torvalds-6068b1.netlify.app/",image:d},{name:"Image Cropper",description:"A web app built with React, TypeScript, and Tailwind CSS that lets you upload and crop images to your desired dimensions.",stack:["TypeScript","React","Tailwind CSS"],sourceCode:"https://github.com/OrangeDev22/image-cropper",livePreview:"https://sage-tanuki-f64d81.netlify.app/",image:h},{name:"React Calendar",description:"A calendar component that allows you to select dates and view a list of meetings scheduled for those dates. Built with TypeScript and Tailwind CSS.",stack:["TypeScript","React","Tailwind CSS"],sourceCode:"https://github.com/OrangeDev22/react-calendar",livePreview:"https://reliable-daffodil-7aac49.netlify.app/",image:b},{name:"Weather Report",description:"A weather app built with the OpenWeather API that provides current weather and forecasts based on your location. View hourly and daily weather reports.",stack:["React","CSS","OpenWeather API","JavaScript"],sourceCode:"https://github.com/OrangeDev22/weather-report",livePreview:"https://happy-edison-f4c7d9.netlify.app/",image:p},{name:"Simple Group Chat",description:"A simple group chat app built with Bootstrap and Socket.IO. Users can add contacts and create chat rooms for one-on-one or group conversations.",stack:["React","Bootstrap","Socket.IO","Node.js"],sourceCode:"https://github.com/OrangeDev22/simple-group-chat",livePreview:"https://simple-group-chat.netlify.app/",image:j},{name:"Complex Group Chat",description:"A more feature-rich group chat app that allows users to create accounts, send friend requests, block users, and more. Built with Material-UI, PostgreSQL, and Socket.IO.",stack:["React","Bootstrap","Socket.IO","Node.js"],sourceCode:"https://github.com/OrangeDev22/project-group-chat-app",livePreview:"https://complex-group-chat-app.netlify.app/",image:u}],N=["React","Node.js","JavaScript","TypeScript","Hasura","GraphQL","PostgreSQL","SASS","Tailwind CSS","Nest.js","Socket.IO","Redux","Zustand","Material-UI","Bootstrap","Auth0","Express.js","HTML","CSS","Visual Studio Code","Git","Java","SQL","MySQL","Cypress","Stripe","Playwright","Firebase"],y=a(16),_=a.n(y),C=a(14),T=a.n(C),I=a(18),P=a.n(I),A=a(17),R=a.n(A),D=(a(28),function(){var e=Object(n.useContext)(r),t=Object(s.a)(e,1)[0],a=t.themeName,i=t.toggleTheme,l=Object(n.useState)(!1),o=Object(s.a)(l,2),d=o[0],p=o[1],h=function(){return p(!d)};return Object(c.jsxs)("nav",{className:"center nav",children:[Object(c.jsxs)("ul",{style:{display:d?"flex":null},className:"nav__list",children:[w.length?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#projects",onClick:h,className:"link link--nav",children:"Projects"})}):null,N.length?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#skills",onClick:h,className:"link link--nav",children:"Skills"})}):null]}),Object(c.jsx)("button",{type:"button",onClick:i,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===a?Object(c.jsx)(T.a,{}):Object(c.jsx)(_.a,{})}),Object(c.jsx)("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:d?Object(c.jsx)(R.a,{}):Object(c.jsx)(P.a,{})})]})}),L=(a(32),function(){var e=g,t=f;return Object(c.jsxs)("header",{className:"header center",children:[Object(c.jsx)("h3",{children:e?Object(c.jsx)("a",{href:e,className:"link",children:t}):t}),Object(c.jsx)(D,{})]})}),M=a(11),E=a.n(M),G=a(19),z=a.n(G),B=(a(33),function(){var e=O,t=v,a=x,i=k,s=S;return Object(c.jsxs)("div",{className:"about center",children:[e&&Object(c.jsxs)("h1",{children:["Hi, I am ",Object(c.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(c.jsxs)("h2",{className:"about__role",children:["I am a ",t,"."]}),Object(c.jsx)("p",{className:"about__desc",children:a&&a}),Object(c.jsxs)("div",{className:"about__contact center",children:[i&&Object(c.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:Object(c.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(c.jsxs)(c.Fragment,{children:[s.github&&Object(c.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(E.a,{})}),s.linkedin&&Object(c.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(z.a,{})})]})]})]})}),J=a(7),Q=a.n(J),W=a(20),U=a.n(W),Z=(a(35),function(e){var t=e.project;return Object(c.jsxs)("div",{className:"project",children:[Object(c.jsx)("h3",{children:t.name}),t.image&&Object(c.jsx)("div",{className:"project-image",style:{backgroundImage:"url(".concat(t.image,")")}}),Object(c.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(c.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(c.jsx)("li",{className:"project__stack-item",children:e},Q()())}))}),t.sourceCode&&Object(c.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(E.a,{})}),t.livePreview&&Object(c.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(U.a,{})})]})}),F=(a(36),function(){return w.length?Object(c.jsxs)("section",{id:"projects",className:"section projects",children:[Object(c.jsx)("h2",{className:"section__title",children:"Projects"}),Object(c.jsx)("div",{className:"projects__grid",children:w.map((function(e){return Object(c.jsx)(Z,{project:e},Q()())}))})]}):null}),V=(a(37),function(){return N.length?Object(c.jsxs)("section",{className:"section skills",id:"skills",children:[Object(c.jsx)("h2",{className:"section__title",children:"Skills"}),Object(c.jsx)("ul",{className:"skills__list",children:N.map((function(e){return Object(c.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},Q()())}))})]}):null}),H=a(21),q=a.n(H),Y=(a(38),function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){var e=function(){return window.pageYOffset>500?i(!0):i(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),a?Object(c.jsx)("div",{className:"scroll-top",children:Object(c.jsx)("a",{href:"#top",children:Object(c.jsx)(q.a,{fontSize:"large"})})}):null}),K=(a(39),function(){return Object(c.jsxs)("footer",{className:"footer",children:[Object(c.jsx)("h4",{className:"link footer__link",children:"Let's Talk"}),Object(c.jsxs)("div",{className:"link footer__link",children:["Feel Free to contact via this email"," ",Object(c.jsx)("span",{style:{fontWeight:"bold"},children:"gabrielzunigakz@gmail.com"})," You can also find me in:"]})]})}),X=(a(40),function(){var e=Object(n.useContext)(r),t=Object(s.a)(e,1)[0].themeName;return Object(c.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(c.jsx)(L,{}),Object(c.jsxs)("main",{children:[Object(c.jsx)(B,{}),Object(c.jsx)(V,{}),Object(c.jsx)(F,{})]}),Object(c.jsx)(Y,{}),Object(c.jsx)(K,{})]})});a(41);Object(i.render)(Object(c.jsx)(l,{children:Object(c.jsx)(X,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.a20e0077.chunk.js.map