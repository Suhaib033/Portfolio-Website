
import { Link } from "react-router-dom";
import { Database, BarChart2, GitBranch } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-container">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-white">Your Name</span>
              <span className="block text-portfolio-orange mt-2">
                Aspiring Data Analyst & Engineer
              </span>
            </h1>
            
            <p className="text-lg text-gray-300">
              Passionate about uncovering insights from data and building efficient data pipelines. 
              Seeking opportunities in data visualization and ETL development.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/projects" 
                className="project-link"
              >
                View My Projects
              </Link>
              <Link 
                to="/skills" 
                className="bg-transparent border border-portfolio-brown text-white px-4 py-2 rounded-lg transition-all duration-200 hover:bg-portfolio-brown"
              >
                See My Skills
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gray-800 border-4 border-portfolio-orange overflow-hidden">
              {/* Placeholder for profile image */}
              <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-500">
                Your Photo
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Skills Section */}
      <section className="section-container bg-portfolio-darkGray/30 py-16">
        <h2 className="text-2xl font-bold text-center mb-12 text-white">Core Competencies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="gradient-icon mb-4">
              <Database size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Data Management</h3>
            <p className="text-gray-400">
              Expert in SQL, database design, and data modeling for effective storage and retrieval.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="gradient-icon mb-4">
              <BarChart2 size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Data Visualization</h3>
            <p className="text-gray-400">
              Creating insightful visualizations with Python, Tableau, and Power BI.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="gradient-icon mb-4">
              <GitBranch size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Data Engineering</h3>
            <p className="text-gray-400">
              Building robust ETL pipelines and data integration solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
