import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import SocialLinksBar from "./components/SocialLinksBar";
import ProjectShowcase from "./components/ProjectShowcase";
import JobExperiences from "./components/JobExperiences";
import SkillList from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen md:px-20 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950 text-violet-200 font-nunito scroll-smooth">
      <Header />
      <main className="p-4">
        <AboutMe />
        <SkillList />
        <JobExperiences />
        <ProjectShowcase
          projects={[
            {
              title: "Project 1",
              description: "A description of Project 1",
              image: "https://via.placeholder.com/300",
              link: "https://example.com/project1",
              skills: ["React", "Tailwind CSS", "Framer Motion"],
            },
            {
              title: "Project 2",
              description: "A description of Project 2",
              image: "https://via.placeholder.com/300",
              link: "https://example.com/project2",
              skills: ["Next.js", "TypeScript", "GraphQL"],
            },
          ]}
        />
        <Contact />
      </main>
      <Footer />
      <SocialLinksBar />
    </div>
  );
}

export default App;
