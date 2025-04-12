
import { useParams, Link } from "react-router-dom";
import { ExternalLink, Github, FileText, Database, Image } from "lucide-react";

// Sample project data for the template
const sampleProject = {
  id: 1,
  title: "Sales Dashboard Analysis",
  description: "Created an interactive dashboard to analyze sales trends and customer behavior for an e-commerce platform.",
  problem: "The client needed a way to visualize sales data across multiple dimensions to identify trends and opportunities for growth.",
  approach: [
    "Conducted stakeholder interviews to understand key business questions",
    "Cleaned and transformed raw sales data from multiple sources",
    "Designed dashboard mockups for stakeholder approval",
    "Built interactive visualizations with drill-down capabilities",
    "Implemented automated data refresh processes"
  ],
  technologies: [
    "Python (Pandas, NumPy) for data processing",
    "Tableau for visualization and dashboard creation",
    "SQL for data extraction",
    "Git for version control"
  ],
  challenges: "One of the main challenges was integrating data from multiple sources with inconsistent formatting. I resolved this by creating a data transformation pipeline that standardized formats and merged data sources.",
  results: "The dashboard revealed that 60% of sales came from returning customers, and that product bundles outperformed individual products by 35%. This led to a strategic shift in marketing focus that increased overall revenue by 22% in the following quarter.",
  images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  files: [
    {
      name: "View Code on GitHub",
      url: "https://github.com/",
      icon: Github
    },
    {
      name: "Download Full Analysis Report (PDF)",
      url: "/path-to-sample-file.pdf",
      icon: FileText
    },
    {
      name: "View Presentation Slides",
      url: "/path-to-sample-slides.pdf",
      icon: FileText
    },
    {
      name: "Explore Data Dictionary (CSV)",
      url: "/path-to-sample-data.csv",
      icon: Database
    },
    {
      name: "See Dashboard Screenshots",
      url: "/gallery",
      icon: Image
    }
  ]
};

const ProjectDetail = () => {
  const { id } = useParams();
  
  // In a real application, you would fetch the specific project data based on the ID
  // For now, we'll use our sample project
  const project = sampleProject;
  
  return (
    <div className="min-h-screen pt-24">
      <div className="section-container">
        <div className="mb-8">
          <Link 
            to="/projects" 
            className="text-portfolio-orange hover:underline flex items-center gap-2"
          >
            &larr; Back to Projects
          </Link>
        </div>
        
        <div className="bg-portfolio-darkGray/30 rounded-xl p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">{project.title}</h1>
          
          <p className="text-gray-300 text-lg mb-8">{project.description}</p>
          
          {/* Project images carousel/gallery */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.images.map((image, index) => (
                <div 
                  key={index} 
                  className="aspect-video bg-gray-700 rounded-lg overflow-hidden"
                >
                  <img 
                    src={image} 
                    alt={`Project visual ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Detailed sections */}
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-portfolio-orange">Problem Statement</h2>
              <p className="text-gray-300">{project.problem}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-portfolio-orange">My Process / Approach</h2>
              <ol className="list-decimal list-inside text-gray-300 space-y-2 pl-4">
                {project.approach.map((step, index) => (
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
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-portfolio-orange">Results & Key Findings</h2>
              <p className="text-gray-300">{project.results}</p>
            </section>
            
            {/* Project Files Section */}
            <section className="bg-portfolio-dark/50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-portfolio-orange">Project Files</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.files.map((file, index) => (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
