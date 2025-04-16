import React from "react";
import { Link } from "react-router-dom";
import AnimatedBackground from "../components/AnimatedBackground";
import OrangeHue from "../components/OrangeHue";

// Sample project data
const projects = [
  {
    id: 2,
    title: "Tableau HR Dashboard",
    description: "A comprehensive dashboard to analyze human resources data, providing both summary views for high-level insights and detailed employee records for in-depth analysis",
    technologies: ["Tableau", "Data Analysis", "HR Analytics", "Dashboard Design"],
    image: "/lovable-uploads/0f44b46e-3500-44c3-8221-25e565bfb550.png"
  },
  {
    id: 1,
    title: "SQL Data Warehouse",
    description: "Designed a comprehensive data warehousing and analytics solution that consolidates sales data, enabling analytical reporting and informed decision-making.",
    technologies: ["SQL", "SQL Server", "Data Modeling", "ETL", "Analytics"],
    image: "/lovable-uploads/f70cbb10-7fd9-4ce3-b8db-0bd09654a412.png"
  },
  {
    id: 3,
    title: "Netflix Analytics Dashboard",
    description: "End-to-end project for building a Netflix analytics dashboard in Power BI for analyzing ratings and the number of votes, segmented by countries, genres, and titles.",
    technologies: ["Power BI", "Data Analysis", "Dashboard Design"],
    image: "/lovable-uploads/0a41b7bd-6642-44cc-945e-da3f0ac2f746.png"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 relative">
      <OrangeHue />
      <AnimatedBackground />
      
      <section className="section-container">
        <h1 className="text-4xl font-bold mb-8 text-white">My Projects</h1>
        <p className="text-gray-300 mb-12 max-w-3xl">
          Below is a showcase of my data projects. Each project demonstrates different aspects of data analysis,
          visualization, and engineering. Click on any project to view more details.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="aspect-video bg-gray-700 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-portfolio-darkBrown/70 text-white px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Link 
                  to={`/projects/${project.id}`} 
                  className="project-link mt-2"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
