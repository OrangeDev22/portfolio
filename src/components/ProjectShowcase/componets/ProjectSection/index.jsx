import ProjectButtons from "../ProjectButtons";

const ProjectSection = ({ project }) => {
  return (
    <div className="w-full md:w-1/2 space-y-4">
      <h2 className="text-2xl font-semibold">{project.title}</h2>
      <p className="text-gray-400">{project.description}</p>
      <div>
        <strong className="text-white">Skills:</strong>{" "}
        <span className="text-violet-200">{project.skills.join(", ")}.</span>
      </div>
      <ProjectButtons demoUrl={project.demoUrl} githubUrl={project.githubUrl} />
    </div>
  );
};

export default ProjectSection;
