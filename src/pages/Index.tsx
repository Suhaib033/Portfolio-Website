
import { Link } from "react-router-dom";
import { 
  Database, 
  BarChart2, 
  GitBranch, 
  BrainCircuit,
  Code,
  LineChart 
} from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Tech stack items with icons
const techStack = [
  { name: "Python", icon: "/icons/python.svg" },
  { name: "Pandas", icon: "/icons/pandas.svg" },
  { name: "NumPy", icon: "/icons/numpy.svg" },
  { name: "Scikit-Learn", icon: "/icons/scikit-learn.svg" },
  { name: "Matplotlib", icon: "/icons/matplotlib.svg" },
  { name: "Power BI", icon: "/icons/power-bi.svg" },
  { name: "Tableau", icon: "/icons/tableau.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "Microsoft SQL Server", icon: "/icons/sql-server.svg" },
  { name: "Microsoft Azure", icon: "/icons/azure.svg" },
  { name: "AWS", icon: "/icons/aws.svg" }
];

const competencies = [
  {
    title: "Data Management",
    icon: Database,
    description: "Expert in SQL, database design, and data modeling for effective storage and retrieval."
  },
  {
    title: "Data Visualization",
    icon: BarChart2,
    description: "Creating insightful visualizations with Python, Tableau, and Power BI."
  },
  {
    title: "Data Engineering",
    icon: GitBranch,
    description: "Building robust ETL pipelines and data integration solutions."
  },
  {
    title: "Machine Learning",
    icon: BrainCircuit,
    description: "Implementing predictive models and algorithms to extract valuable insights."
  },
  {
    title: "Programming",
    icon: Code,
    description: "Proficient in Python, SQL, and other languages to manipulate and analyze data."
  },
  {
    title: "Statistical Analysis",
    icon: LineChart,
    description: "Applying statistical methods to validate hypotheses and draw conclusions."
  }
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Create data particles for the animated background
const DataParticles = () => {
  const particles = [];
  const numParticles = 15;
  
  for (let i = 0; i < numParticles; i++) {
    const size = Math.random() * 5 + 2;
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = Math.random() * 10 + 15;
    
    particles.push(
      <div 
        key={`particle-${i}`}
        className="data-particle"
        style={{
          left: `${xPos}%`,
          top: `${yPos}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`
        }}
      />
    );
  }
  
  // Add some data lines
  for (let i = 0; i < 10; i++) {
    const width = Math.random() * 80 + 20;
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = Math.random() * 10 + 20;
    const rotation = Math.random() * 360;
    
    particles.push(
      <div 
        key={`line-${i}`}
        className="data-line"
        style={{
          left: `${xPos}%`,
          top: `${yPos}%`,
          width: `${width}px`,
          transform: `rotate(${rotation}deg)`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`
        }}
      />
    );
  }
  
  // Add some squares
  for (let i = 0; i < 8; i++) {
    const size = Math.random() * 15 + 5;
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = Math.random() * 10 + 25;
    
    particles.push(
      <div 
        key={`square-${i}`}
        className="data-square"
        style={{
          left: `${xPos}%`,
          top: `${yPos}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`
        }}
      />
    );
  }
  
  // Add some triangles
  for (let i = 0; i < 8; i++) {
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = Math.random() * 10 + 18;
    
    particles.push(
      <div 
        key={`triangle-${i}`}
        className="data-triangle"
        style={{
          left: `${xPos}%`,
          top: `${yPos}%`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`
        }}
      />
    );
  }
  
  return particles;
};

const Index = () => {
  return (
    <div className="min-h-screen pt-24 relative">
      {/* Orange triangle at the top */}
      <div className="orange-triangle"></div>
      
      {/* Animated background */}
      <div className="animated-background">
        {DataParticles()}
      </div>
      
      {/* Hero Section */}
      <section className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div 
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-gradient">Suhaib Ahmed</span>
              <div className="flex flex-wrap gap-2 text-portfolio-orange mt-2 text-xl md:text-2xl">
                <span>Strategic Thinker.</span>
                <span className="hidden sm:inline">|</span>
                <span>Calm in the Crunch.</span>
                <span className="hidden sm:inline">|</span>
                <span>Dedicated to the Details.</span>
              </div>
            </h1>
            
            <p className="text-lg text-gray-300">
              Always up for a good challenge & a better conversation.
            </p>
            
            <p className="text-lg text-gray-300">
              Data detective by trade, caffeine-powered problem solver by choice. I turn messy spreadsheets into sleek dashboards, unanswered questions into actionable insights, and coffee into Python scripts.
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
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-portfolio-orange/30 to-portfolio-darkBrown/50 border-4 border-portfolio-orange overflow-hidden">
              {/* Placeholder for profile image */}
              <div className="w-full h-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center text-gray-300">
                Your Photo
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Skills Carousel Section */}
      <section className="py-16 overflow-hidden bg-gradient-to-b from-portfolio-darkGray/0 to-portfolio-darkGray/30 relative z-10">
        <div className="section-container">
          <motion.h2 
            className="text-2xl font-bold text-center mb-8 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            My Tech Stack
          </motion.h2>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {techStack.map((tech, index) => (
                <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/5">
                  <Card className="bg-portfolio-darkGray/30 border-white/5 hover:border-portfolio-orange/20 transition-all duration-300">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="w-12 h-12 mb-4 flex items-center justify-center bg-portfolio-darkGray/50 rounded-full overflow-hidden">
                        <img 
                          src={tech.icon} 
                          alt={tech.name} 
                          className="w-6 h-6 object-contain"
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder.svg";
                          }}
                        />
                      </div>
                      <p className="text-gray-200 text-center text-sm">{tech.name}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static translate-y-0 left-0 mr-2" />
              <CarouselNext className="relative static translate-y-0 right-0" />
            </div>
          </Carousel>
        </div>
      </section>
      
      {/* Core Competencies Section - Animated Cards */}
      <section className="py-16 bg-portfolio-darkGray/30 relative z-10">
        <div className="section-container">
          <motion.h2 
            className="text-2xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Core Competencies
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {competencies.map((competency, index) => (
              <motion.div 
                key={index} 
                className="bg-portfolio-darkGray/50 rounded-xl p-6 backdrop-blur-sm border border-white/5 hover:border-portfolio-orange/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,121,63,0.15)] transform hover:-translate-y-2"
                variants={item}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon mb-6">
                    <competency.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{competency.title}</h3>
                  <p className="text-gray-400">
                    {competency.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
