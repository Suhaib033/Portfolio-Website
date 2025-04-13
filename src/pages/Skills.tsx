import React from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import OrangeHue from "../components/OrangeHue";
import {
  Database,
  BarChart2,
  GitBranch,
  Code,
  Cloud,
  Wrench,
  Brain,
  Users
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "SQL", "C", "C++"]
  },
  {
    title: "Frameworks & Libraries",
    icon: GitBranch,
    skills: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "Microsoft SQL Server", "MongoDB", "PostgreSQL"]
  },
  {
    title: "Data Visualization",
    icon: BarChart2,
    skills: ["Tableau", "Power BI", "Matplotlib", "Excel"]
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS", "Microsoft Azure", "GCP", "Snowflake"]
  },
  {
    title: "Development Tools",
    icon: Wrench,
    skills: ["Jupyter Notebook", "PyCharm", "Visual Studio Code", "Git & GitHub"]
  },
  {
    title: "Soft Skills",
    icon: Brain,
    skills: ["Rapport Building", "Stakeholder Management", "Project Management", "Problem Solving"]
  },
  {
    title: "Leadership",
    icon: Users,
    skills: ["Team Leadership", "Communication", "Collaboration", "Mentoring"]
  }
];

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

const Skills = () => {
  return (
    <div className="min-h-screen pt-24 relative">
      <OrangeHue />
      <AnimatedBackground />
      
      <section className="section-container">
        <h1 className="text-4xl font-bold mb-8 text-white">Technical Skills</h1>
        <p className="text-gray-300 mb-12 max-w-3xl">
          Here's an overview of my technical skill set. I'm constantly learning and expanding my knowledge in data analysis and engineering.
        </p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-portfolio-darkGray/30 rounded-xl p-6 backdrop-blur-sm border border-white/5 hover:border-portfolio-orange/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,121,63,0.15)]"
              variants={item}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="gradient-icon w-12 h-12">
                  <category.icon size={24} />
                </div>
                <h2 className="text-2xl font-semibold text-white">{category.title}</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-portfolio-darkBrown/20 p-3 rounded-lg text-center hover:bg-portfolio-darkBrown/40 transition-colors duration-300"
                  >
                    <span className="text-gray-200">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;
