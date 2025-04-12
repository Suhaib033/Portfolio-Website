
import {
  Database,
  BarChart2,
  GitBranch,
  Code,
  Cloud,
  Tool
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "R", level: 75 },
      { name: "JavaScript", level: 60 }
    ]
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 70 },
      { name: "SQL Server", level: 75 }
    ]
  },
  {
    title: "Data Visualization",
    icon: BarChart2,
    skills: [
      { name: "Tableau", level: 90 },
      { name: "Power BI", level: 85 },
      { name: "Matplotlib", level: 75 },
      { name: "D3.js", level: 65 }
    ]
  },
  {
    title: "ETL / Data Warehousing",
    icon: GitBranch,
    skills: [
      { name: "Apache Airflow", level: 80 },
      { name: "dbt", level: 75 },
      { name: "Data Modeling", level: 85 },
      { name: "ETL Pipelines", level: 80 }
    ]
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: [
      { name: "AWS (S3, Redshift)", level: 75 },
      { name: "Azure (Blob, Data Factory)", level: 70 },
      { name: "GCP (BigQuery)", level: 65 },
      { name: "Snowflake", level: 60 }
    ]
  },
  {
    title: "Other Tools",
    icon: Tool,
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Jupyter Notebooks", level: 90 },
      { name: "Excel", level: 95 }
    ]
  }
];

const Skills = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="section-container">
        <h1 className="text-4xl font-bold mb-8 text-white">Technical Skills</h1>
        <p className="text-gray-300 mb-12 max-w-3xl">
          Here's an overview of my technical skill set. I'm constantly learning and expanding my knowledge in data analysis and engineering.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-portfolio-darkGray/30 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="gradient-icon w-12 h-12">
                  <category.icon size={24} />
                </div>
                <h2 className="text-2xl font-semibold text-white">{category.title}</h2>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-portfolio-orange to-portfolio-brown h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
