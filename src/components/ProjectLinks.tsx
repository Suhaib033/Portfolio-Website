
import { ExternalLink } from "lucide-react";

interface ProjectLinksProps {
  files: Array<{
    name: string;
    url: string;
    icon: any;
  }>;
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ files }) => {
  return (
    <section className="bg-portfolio-dark/50 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-portfolio-orange">Project Files</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {files.map((file, index) => (
          <a 
            key={index} 
            href={file.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-portfolio-darkBrown/30 text-white hover:bg-portfolio-darkBrown transition-colors"
          >
            <file.icon className="text-portfolio-orange" size={20} />
            <span>{file.name}</span>
            <ExternalLink size={16} className="ml-auto" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectLinks;

