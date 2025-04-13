import React from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import OrangeHue from "../components/OrangeHue";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Sales Dashboard Analysis",
    description: "Created an interactive dashboard to analyze sales trends and customer behavior for an e-commerce platform.",
    technologies: ["Python", "Pandas", "Tableau", "SQL"],
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "ETL Pipeline for Customer Data",
    description: "Designed and implemented a robust ETL pipeline to process and transform customer data from multiple sources.",
    technologies: ["Python", "Apache Airflow", "PostgreSQL", "dbt"],
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Predictive Analysis of Market Trends",
    description: "Used machine learning models to predict market trends based on historical data and external economic factors.",
    technologies: ["Python", "Scikit-learn", "Matplotlib", "Pandas"],
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Customer Segmentation Analysis",
    description: "Segmented customers based on purchasing behaviors to improve targeted marketing campaigns.",
    technologies: ["R", "ggplot2", "K-means Clustering", "Power BI"],
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Data Quality Monitoring System",
    description: "Built an automated system to monitor and report on data quality issues across enterprise databases.",
    technologies: ["Python", "SQL", "Great Expectations", "Docker"],
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Financial Data Analysis Dashboard",
    description: "Developed a comprehensive dashboard for financial analysis with drill-down capabilities and anomaly detection.",
    technologies: ["Power BI", "DAX", "SQL", "Excel"],
    image: "/placeholder.svg"
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
