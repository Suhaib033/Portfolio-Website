import { Github, FileText, Database } from "lucide-react";

export interface Project {
  id: number | string;
  title: string;
  description: string;
  problem?: string;
  approach?: string[];
  technologies: string[];
  challenges: string;
  results?: string;
  images: string[];
  files: {
    name: string;
    url: string;
    icon: any;
  }[];
  overview?: string;
  sections?: {
    [key: string]: {
      title: string;
      items: string[];
    };
  };
  userStory?: string;
}

export const projects: { [key: string]: Project } = {
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
  "3": {
    id: 3,
    title: "Netflix Analytics Dashboard",
    description: "End-to-end project for building a Netflix analytics dashboard in Power BI for analyzing ratings and the number of votes, segmented by countries, genres, and titles.",
    userStory: "As a data analyst, I want a comprehensive dashboard to analyze Netflix data, providing both summary views for high-level insights and detailed content records for in-depth analysis.",
    sections: {
      overview: {
        title: "Overview Features",
        items: [
          "Total number of movies and TV shows metrics",
          "Content additions over time visualization",
          "Genre and type breakdown analysis",
          "Regional content distribution comparison",
          "Country and language distribution metrics"
        ]
      },
      demographics: {
        title: "Content Demographics",
        items: [
          "Movie to TV show ratio analysis",
          "Genre and ratings distribution",
          "Content volume by genre",
          "Rating category analysis",
          "Viewer engagement correlation with ratings"
        ]
      },
      performance: {
        title: "Performance Analysis",
        items: [
          "Genre-specific viewer engagement patterns",
          "Rating correlation with viewer engagement",
          "Content performance by genre"
        ]
      },
      records: {
        title: "Content Records Features",
        items: [
          "Comprehensive content listing",
          "Multi-column filtering capabilities",
          "Detailed metadata display",
          "Interactive data exploration"
        ]
      },
      additional: {
        title: "Additional Features",
        items: [
          "Interactive data filters",
          "Dynamic visualization components",
          "Drill-down analysis capabilities",
          "Data and visual export options"
        ]
      }
    },
    technologies: ["Power BI", "Data Analysis", "Dashboard Design", "Data Visualization"],
    challenges: "The main challenge was designing an intuitive interface that could present complex Netflix content data in an easily digestible format while maintaining the ability to drill down into specific metrics when needed.",
    results: "The dashboard successfully provides analysts with both high-level insights and detailed content information, enabling data-driven decision-making for content strategy.",
    images: [
      "/lovable-uploads/83a7d5d6-67a9-4b45-bc49-e07573f2387f.png",
      "/lovable-uploads/9cd31741-345a-4c31-bddb-b482161a03da.png"
    ],
    files: [
      {
        name: "View Code on GitHub",
        url: "https://github.com/Suhaib033/Netflix-Analytics",
        icon: Github
      },
      {
        name: "Project Documentation",
        url: "https://github.com/Suhaib033/Netflix-Analytics/tree/main/docs",
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
