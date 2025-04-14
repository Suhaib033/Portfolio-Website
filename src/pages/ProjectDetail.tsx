
import { useParams } from "react-router-dom";
import OrangeHue from "../components/OrangeHue";
import ProjectHeader from "../components/ProjectHeader";
import ProjectGallery from "../components/ProjectGallery";
import ProjectContent from "../components/ProjectContent";
import ProjectLinks from "../components/ProjectLinks";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects[id || ""] || projects["default"];
  
  return (
    <div className="min-h-screen pt-24 relative">
      <OrangeHue />
      
      <div className="section-container">
        <ProjectHeader 
          title={project.title} 
          description={project.description}
        />
        
        <div className="bg-portfolio-darkGray/30 rounded-xl p-8">
          <ProjectGallery images={project.images} />
          <ProjectContent project={project} />
          <ProjectLinks files={project.files} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

