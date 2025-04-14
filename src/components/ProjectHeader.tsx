
import { Link } from "react-router-dom";

interface ProjectHeaderProps {
  title: string;
  description: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ title, description }) => {
  return (
    <div>
      <div className="mb-8">
        <Link 
          to="/projects" 
          className="text-portfolio-orange hover:underline flex items-center gap-2"
        >
          &larr; Back to Projects
        </Link>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">{title}</h1>
      <p className="text-gray-300 text-lg mb-8">{description}</p>
    </div>
  );
};

export default ProjectHeader;

