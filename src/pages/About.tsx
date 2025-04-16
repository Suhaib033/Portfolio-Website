
import { Link } from "react-router-dom";
import AnimatedBackground from "../components/AnimatedBackground";
import OrangeHue from "../components/OrangeHue";

const About = () => {
  return (
    <div className="min-h-screen pt-24 relative">
      <OrangeHue />
      <AnimatedBackground />
      
      <section className="section-container">
        <h1 className="text-4xl font-bold mb-8 text-white">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-portfolio-orange">My Journey into Data</h2>
              <p className="text-gray-300">
                My path into data started with a strong curiosity about how technology shapes our world. 
                Exploring programming and cloud platforms naturally led me to the fascinating field of data. 
                I became captivated by both the analytical side – extracting meaning – and the engineering side – 
                building robust systems to handle information flow. Through online courses, personal projects like 
                [mention one briefly if applicable], and dedicated self-study, I've built a solid foundation and 
                am now excited to transition this passion into a professional data role.
              </p>
              
              <h2 className="text-2xl font-semibold text-portfolio-orange mt-8">My Approach to Data Problems</h2>
              <p className="text-gray-300">
                I approach data problems methodically. I believe in first thoroughly understanding the context and 
                the questions being asked. My process emphasizes careful data cleaning and validation, ensuring a 
                reliable foundation before analysis or pipeline development. I'm detail-oriented and committed to 
                delivering accurate, well-documented work, whether it's uncovering insights or building efficient 
                data structures.
              </p>
              
              <h2 className="text-2xl font-semibold text-portfolio-orange mt-8">What Motivates Me</h2>
              <p className="text-gray-300">
                I'm motivated by the constant learning and intellectual challenge inherent in the data field. 
                I enjoy the process of exploring complex datasets, discovering hidden patterns, and mastering 
                new tools and technologies. The pursuit of understanding and the elegance of a well-crafted 
                solution are what keep me engaged and excited about this work.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Link 
                  to="/skills" 
                  className="bg-portfolio-brown text-white px-4 py-2 rounded-lg transition-all duration-200 hover:bg-portfolio-orange transform hover:scale-95"
                >
                  View My Skills
                </Link>
                <Link 
                  to="/resume" 
                  className="bg-transparent border border-portfolio-brown text-white px-4 py-2 rounded-lg transition-all duration-200 hover:bg-portfolio-brown"
                >
                  See My Resume
                </Link>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-gray-800 rounded-xl overflow-hidden">
              <div className="aspect-[3/4] bg-gray-700">
                <img 
                  src="/lovable-uploads/ff076a1d-5c1b-40cd-90c8-ea644af124cb.png"
                  alt="Ahmed Salahuddin Suhaib"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">Ahmed Salahuddin Suhaib</h3>
                <p className="text-gray-400">Aspiring Data Analyst & Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
