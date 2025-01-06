import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    {project.image && (
      <div
        className='project-image'
        style={{
          backgroundImage: `url(${project.image})`,
        }}
      />
    )}

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    <div
      style={{
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'auto',
      }}
    >
      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='btn btn--plain'
          target='_blank'
          rel='noreferrer'
        >
          Github
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label='live preview'
          className='btn btn--plain'
          target='_blank'
          rel='noreferrer'
        >
          Demo
        </a>
      )}
    </div>
  </div>
)

export default ProjectContainer
