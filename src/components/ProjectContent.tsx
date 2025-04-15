import { Project } from "../data/types";

interface ProjectContentProps {
  project: Project;
}

const ProjectContent: React.FC<ProjectContentProps> = ({ project }) => {
  if (project.overview) {
    return (
      <div className="mb-10" dangerouslySetInnerHTML={{ __html: project.overview }}></div>
    );
  }

  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-portfolio-orange">Problem Statement</h2>
        <p className="text-gray-300">{project.problem}</p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-portfolio-orange">My Process / Approach</h2>
        <ol className="list-decimal list-inside text-gray-300 space-y-2 pl-4">
          {project.approach?.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-portfolio-orange">Tools & Technologies Used</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-portfolio-orange">Challenges & Solutions</h2>
        <p className="text-gray-300">{project.challenges}</p>
      </section>
      
      {project.results && (
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-portfolio-orange">Results & Key Findings</h2>
          <p className="text-gray-300">{project.results}</p>
        </section>
      )}
    </div>
  );
};

export default ProjectContent;
