import { useParams, Link } from "react-router-dom";
import { ExternalLink, Github, FileText } from "lucide-react";
import OrangeHue from "../components/OrangeHue";

// Project data
const projects = {
  "2": {
    id: 2,
    title: "Tableau HR Dashboard",
    description: "A comprehensive dashboard to analyze human resources data, providing both summary views for high-level insights and detailed employee records for in-depth analysis",
    technologies: ["Tableau", "Data Analysis", "HR Analytics", "Dashboard Design"],
    problem: "Organizations need better ways to visualize and analyze their HR data to make informed decisions about workforce management.",
    approach: [
      "Created interactive visualizations for HR metrics",
      "Implemented drill-down capabilities for detailed analysis",
      "Designed intuitive dashboard layout for easy navigation",
      "Added filtering capabilities for dynamic data exploration"
    ],
    overview: `
      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">User Story - HR Dashboard</h3>
      <p class="text-gray-300 mb-6">As an HR manager, I want a comprehensive dashboard to analyze human resources data, providing both summary views for high-level insights and detailed employee records for in-depth analysis</p>

      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Summary View</h3>
      <p class="text-gray-300 mb-4">The summary view is divided into three main sections: Overview, Demographics, and Income Analysis</p>

      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Overview</h3>
      <p class="text-gray-300 mb-2">The Overview section provides a snapshot of the overall HR metrics, including:</p>
      <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4 mb-6">
        <li>Display the total number of hired employees, active employees, and terminated employees.</li>
        <li>Visualize the total number of hired and terminated employees over the years.</li>
        <li>Present a breakdown of total employees by department and job titles.</li>
        <li>Compare total employees between headquarters (HQ) and branches (New York is the HQ)</li>
        <li>Show the distribution of employees by city and state.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Demographics</h3>
      <p class="text-gray-300 mb-2">The Demographics section offers insights into the composition of the workforce, including:</p>
      <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4 mb-6">
        <li>Present the gender ratio in the company.</li>
        <li>Visualize the distribution of employees across age groups and education levels.</li>
        <li>Show the total number of employees within each age group.</li>
        <li>Show the total number of employees within each education level.</li>
        <li>Present the correlation between employees's educational backgrounds and their performance ratings.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Income</h3>
      <p class="text-gray-300 mb-2">The income analysis section focuses on salary-related metrics, including:</p>
      <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4 mb-6">
        <li>Compare salaries across different education levels for both genders to identify any discrepancies or patterns.</li>
        <li>Present how the age correlate with the salary for employees in each department.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Employee Records View</h3>
      <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4 mb-6">
        <li>Provide a comprehensive list of all employees with necessary information such as name, department, position, gender, age, education, and salary.</li>
        <li>Users should be able to filter the list based on any of the available columns.</li>
      </ul>
    `,
    images: [
      "/lovable-uploads/ed838dc6-c4fd-4387-a8d1-c9702064f6b1.png",
      "/lovable-uploads/da80f89c-9673-4ebf-b79f-fb878b0f9559.png"
    ],
    files: [
      {
        name: "View Code on GitHub",
        url: "https://github.com/Suhaib033/HR-Dashboard",
        icon: Github
      },
      {
        name: "View Project Documentation",
        url: "https://github.com/Suhaib033/HR-Dashboard/tree/main/docs",
        icon: FileText
      }
    ]
  },
  // Keep the existing sample project as a fallback for other IDs
  "default": {
    id: "default",
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
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Get the project data based on the ID, or use the default if not found
  const project = projects[id || ""] || projects["default"];
  
  return (
    <div className="min-h-screen pt-24 relative">
      <OrangeHue />
      
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          
          {/* Special custom overview section for SQL Data Warehouse */}
          {project.overview && (
            <div className="mb-10" dangerouslySetInnerHTML={{ __html: project.overview }}></div>
          )}
          
          {/* Standard detailed sections */}
          <div className="space-y-10">
            {!project.overview && (
              <>
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
              </>
            )}
            
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
