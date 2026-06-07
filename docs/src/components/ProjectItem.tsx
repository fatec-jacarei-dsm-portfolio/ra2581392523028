import type { Project } from '../types';

interface Props {
  project: Project;
}

export default function ProjectItem({ project }: Props) {
  const showLink = project.link && project.link.url !== '#';

  return (
    <div className="project-item">
      <div className="project-header">
        <div>
          <span className="project-name">{project.name}</span>
          <p className="project-semester">{project.semester}</p>
        </div>
        {showLink && (
          <a
            href={project.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <ArrowIcon />
            {project.link.label}
          </a>
        )}
      </div>

      <p className="project-label">Descrição</p>
      <p
        className="project-description"
        dangerouslySetInnerHTML={{ __html: project.description }}
      />

      <p className="project-label">Contribuição pessoal</p>
      <p
        className="project-description"
        dangerouslySetInnerHTML={{ __html: project.contribution }}
      />

      {project.repositoryNote && (
        <p className="project-repository-note">{project.repositoryNote}</p>
      )}

      <div className="tech-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tech-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}
