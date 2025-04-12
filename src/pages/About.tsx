
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="section-container">
        <h1 className="text-4xl font-bold mb-8 text-white">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-portfolio-orange">My Journey into Data</h2>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo vel nisl faucibus ultricies. 
                Praesent et risus luctus, efficitur nibh in, facilisis lorem. Nulla facilisi. Donec tincidunt, 
                nunc eget aliquam aliquam, nunc nisl ultricies nisl, vitae ultricies nunc nisl eget nisl.
              </p>
              
              <h2 className="text-2xl font-semibold text-portfolio-orange mt-8">My Approach to Data Problems</h2>
              <p className="text-gray-300">
                Suspendisse potenti. Cras efficitur, nunc eget aliquam aliquam, nunc nisl ultricies nisl, 
                vitae ultricies nunc nisl eget nisl. Sed vitae justo vel nisl faucibus ultricies. Praesent et risus luctus, 
                efficitur nibh in, facilisis lorem. Nulla facilisi.
              </p>
              
              <h2 className="text-2xl font-semibold text-portfolio-orange mt-8">What Motivates Me</h2>
              <p className="text-gray-300">
                Nulla facilisi. Donec tincidunt, nunc eget aliquam aliquam, nunc nisl ultricies nisl, 
                vitae ultricies nunc nisl eget nisl. Sed vitae justo vel nisl faucibus ultricies. 
                Praesent et risus luctus, efficitur nibh in, facilisis lorem.
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
              <div className="aspect-[3/4] bg-gray-700 flex items-center justify-center text-gray-500">
                Your Photo
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">Your Name</h3>
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
