
import { FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackground from "../components/AnimatedBackground";
import OrangeHue from "../components/OrangeHue";

const Resume = () => {
  return (
    <div className="min-h-screen pt-24 relative">
      <OrangeHue />
      <AnimatedBackground />
      
      <section className="section-container">
        <h1 className="text-4xl font-bold mb-8 text-white">My Resume</h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-portfolio-darkGray/30 rounded-xl p-8 text-center mb-8">
            <FileText size={64} className="mx-auto text-portfolio-orange mb-4" />
            
            <p className="text-gray-300 mb-6">
              You can download my full, up-to-date resume for your review below.
            </p>
            
            <a 
              href="/path-to-your-resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-portfolio-brown text-white px-6 py-3 rounded-lg transition-all duration-200 hover:bg-portfolio-orange transform hover:scale-95"
            >
              <Download size={20} />
              Download Resume (PDF)
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400">
              Looking for more information about my experience and skills?
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Link 
                to="/about" 
                className="text-portfolio-orange hover:underline"
              >
                Read more about me
              </Link>
              <Link 
                to="/projects" 
                className="text-portfolio-orange hover:underline"
              >
                View my projects
              </Link>
              <Link 
                to="/contact" 
                className="text-portfolio-orange hover:underline"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
