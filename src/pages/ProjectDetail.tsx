import { useParams, Link } from "react-router-dom";
import { ExternalLink, Github, FileText, Database, Image } from "lucide-react";
import OrangeHue from "../components/OrangeHue";

// Project data - moved to the top of the file to fix reference errors
const projects = {
  "1": {
    id: 1,
    title: "SQL Data Warehouse",
    description: "Designed a comprehensive data warehousing and analytics solution that consolidates sales data, enabling analytical reporting and informed decision-making.",
    problem: "Organizations often struggle with siloed data across different systems (ERP, CRM), making it difficult to gain holistic insights for decision-making.",
    approach: [
      "Designed a modern data warehouse using Medallion Architecture (Bronze, Silver, Gold layers)",
      "Extracted data from ERP and CRM systems provided as CSV files",
      "Implemented data cleansing and quality checks before integration",
      "Developed a star schema optimized for analytical queries",
      "Created SQL-based analytics for customer behavior, product performance, and sales trends"
    ],
    technologies: [
      "SQL Server for data warehouse implementation",
      "T-SQL for data transformation and analytics",
      "Star schema modeling for analytical queries",
      "ETL processes for data integration",
      "SQL-based reporting for business insights"
    ],
    challenges: "Key challenges included resolving data quality issues across source systems, designing an efficient schema that balanced performance with flexibility, and creating analytics that delivered actionable insights from the combined dataset.",
    results: "The implemented data warehouse successfully consolidated disparate data sources, enabling comprehensive analysis of customer behavior, product performance, and sales trends. The project delivered a foundation for data-driven decision making through unified, reliable data access.",
    images: [
      "/lovable-uploads/a41d2378-c208-4500-acf2-dc5f7e786dda.png", 
      "/lovable-uploads/5d811d5a-fc99-4f2e-88f4-c25ccf1d7ddc.png", 
      "/lovable-uploads/7f72696d-34de-4f36-ba36-d2ebe02ef3b1.png",
      "/lovable-uploads/06edcf2a-c6fd-4113-bac0-11b17612793f.png"
    ],
    files: [
      {
        name: "View Code on GitHub",
        url: "https://github.com/Suhaib033/SQL-Data-Warehouse",
        icon: Github
      },
      {
        name: "Project Documentation",
        url: "https://github.com/Suhaib033/SQL-Data-Warehouse/tree/main/docs",
        icon: FileText
      }
    ],
    overview: `
      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Project Overview</h3>
      <p class="text-gray-300 mb-4">This project involves:</p>
      <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4 mb-6">
        <li>Data Architecture: Designing a Modern Data Warehouse Using Medallion Architecture Bronze, Silver, and Gold layers.</li>
        <li>ETL Pipelines: Extracting, transforming, and loading data from source systems into the warehouse.</li>
        <li>Data Modeling: Developing fact and dimension tables optimized for analytical queries.</li>
        <li>Analytics & Reporting: Creating SQL-based reports and dashboards for actionable insights.</li>
      </ul>
      
      <p class="text-gray-300 mb-4">This repository is an excellent resource for professionals and students looking to showcase expertise in:</p>
      <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4 mb-6">
        <li>SQL Development</li>
        <li>Data Architect</li>
        <li>Data Engineering</li>
        <li>ETL Pipeline Developer</li>
        <li>Data Modeling</li>
        <li>Data Analytics</li>
      </ul>
      
      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Project Requirements</h3>
      <h4 class="text-lg font-medium mb-2 text-white">Building the Data Warehouse (Data Engineering)</h4>
      <p class="text-gray-300 font-medium mb-2">Objective</p>
      <p class="text-gray-300 mb-4">Develop a modern data warehouse using SQL Server to consolidate sales data, enabling analytical reporting and informed decision-making.</p>
      
      <p class="text-gray-300 font-medium mb-2">Specifications</p>
      <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4 mb-6">
        <li>Data Sources: Import data from two source systems (ERP and CRM) provided as CSV files.</li>
        <li>Data Quality: Cleanse and resolve data quality issues prior to analysis.</li>
        <li>Integration: Combine both sources into a single, user-friendly data model designed for analytical queries.</li>
        <li>Scope: Focus on the latest dataset only; historization of data is not required.</li>
        <li>Documentation: Provide clear documentation of the data model to support both business stakeholders and analytics teams.</li>
      </ul>
      
      <h4 class="text-lg font-medium mb-2 text-white">BI: Analytics & Reporting (Data Analysis)</h4>
      <p class="text-gray-300 font-medium mb-2">Objective</p>
      <p class="text-gray-300 mb-4">Develop SQL-based analytics to deliver detailed insights into:</p>
      <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4 mb-6">
        <li>Customer Behavior</li>
        <li>Product Performance</li>
        <li>Sales Trends</li>
      </ul>
      <p class="text-gray-300 mb-6">These insights empower stakeholders with key business metrics, enabling strategic decision-making.</p>
      
      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Data Architecture</h3>
      <p class="text-gray-300 mb-4">The data architecture for this project follows Medallion Architecture Bronze, Silver, and Gold layers:</p>
      <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4 mb-6">
        <li>Bronze Layer: Stores raw data as-is from the source systems. Data is ingested from CSV Files into SQL Server Database.</li>
        <li>Silver Layer: This layer includes data cleansing, standardization, and normalization processes to prepare data for analysis.</li>
        <li>Gold Layer: Houses business-ready data modeled into a star schema required for reporting and analytics.</li>
      </ul>
    `
  },
  "2": {
    id: 2,
    title: "Tableau HR Dashboard",
    description: "A comprehensive dashboard to analyze human resources data, providing both summary views for high-level insights and detailed employee records for in-depth analysis",
    userStory: "As an HR manager, I want a comprehensive dashboard to analyze human resources data, providing both summary views for high-level insights and detailed employee records for in-depth analysis",
    sections: {
      overview: {
        title: "Overview Features",
        items: [
          "Total number of hired employees, active employees, and terminated employees",
          "Visualization of hired and terminated employees over years",
          "Breakdown of total employees by department and job titles",
          "Comparison of employees between HQ and branches (New York is HQ)",
          "Distribution of employees by city and state"
        ]
      },
      demographics: {
        title: "Demographics Analysis",
        items: [
          "Gender ratio visualization",
          "Distribution across age groups and education levels",
          "Total employees by age group",
          "Total employees by education level",
          "Correlation between educational backgrounds and performance ratings"
        ]
      },
      income: {
        title: "Income Analysis",
        items: [
          "Compare salaries across different education levels by gender",
          "Age-salary correlation by department"
        ]
      },
      employeeRecords: {
        title: "Employee Records View",
        items: [
          "Comprehensive employee list with detailed information",
          "Filterable columns for customized views"
        ]
      }
    },
    technologies: ["Tableau", "Data Visualization", "HR Analytics", "Dashboard Design"],
    challenges: "The main challenge was designing an intuitive interface that could present complex HR data in an easily digestible format while maintaining the ability to drill down into specific details when needed.",
    results: "The dashboard successfully provides HR managers with both high-level insights and detailed employee information, enabling data-driven decision-making for workforce management.",
    overview: `
      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">User Story</h3>
      <p class="text-gray-300 mb-6">As an HR manager, I want a comprehensive dashboard to analyze human resources data, providing both summary views for high-level insights and detailed employee records for in-depth analysis.</p>

      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Overview</h3>
      <p class="text-gray-300 mb-4">The dashboard is divided into three main sections:</p>
      <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4 mb-6">
        <li>Overview metrics and visualizations</li>
        <li>Demographics analysis</li>
        <li>Income analysis</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Features & Functionality</h3>
      <div class="mb-6">
        <h4 class="text-lg font-medium mb-2 text-white">Overview Features</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4">
          <li>Display the total number of hired employees, active employees, and terminated employees.</li>
          <li>Visualize the total number of hired and terminated employees over the years.</li>
          <li>Present a breakdown of total employees by department and job titles.</li>
          <li>Compare total employees between headquarters (HQ) and branches (New York is HQ)</li>
          <li>Show the distribution of employees by city and state.</li>
        </ul>
      </div>
      <div class="mb-6">
        <h4 class="text-lg font-medium mb-2 text-white">Demographics Analysis</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4">
          <li>Present the gender ratio in the company.</li>
          <li>Visualize the distribution of employees across age groups and education levels.</li>
          <li>Show the total number of employees within each age group.</li>
          <li>Show the total number of employees within each education level.</li>
          <li>Present the correlation between employees's educational backgrounds and their performance ratings.</li>
        </ul>
      </div>
      <div class="mb-6">
        <h4 class="text-lg font-medium mb-2 text-white">Income Analysis</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4">
          <li>Compare salaries across different education levels for both genders to identify any discrepancies or patterns.</li>
          <li>Present how the age correlate with the salary for employees in each department.</li>
        </ul>
      </div>
      <div class="mb-6">
        <h4 class="text-lg font-medium mb-2 text-white">Employee Records View</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4">
          <li>Provide a comprehensive list of all employees with necessary information such as name, department, position, gender, age, education, and salary.</li>
          <li>Users should be able to filter the list based on any of the available columns.</li>
        </ul>
      </div>
    `,
    images: [
      "/lovable-uploads/481792a5-eac3-4231-8d11-f3e87ca49529.png",
      "/lovable-uploads/bacdff3b-7f39-43d9-9ddc-8278e37536c8.png"
    ],
    files: [
      {
        name: "View Code on GitHub",
        url: "https://github.com/Suhaib033/HR-Dashboard",
        icon: Github
      },
      {
        name: "Project Documentation",
        url: "https://github.com/Suhaib033/HR-Dashboard/tree/main/docs",
        icon: FileText
      }
    ]
  },
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
          
          {project.overview && (
            <div className="mb-10" dangerouslySetInnerHTML={{ __html: project.overview }}></div>
          )}
          
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
