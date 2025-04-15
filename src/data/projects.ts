
import { Github, FileText } from "lucide-react";

export interface Project {
  id: number | string;
  title: string;
  description: string;
  problem?: string;
  approach?: string[];
  technologies: string[];
  challenges?: string;
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
    technologies: ["Tableau", "Data Visualization", "HR Analytics", "Dashboard Design"],
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
    ],
    sections: {
      userStory: {
        title: "User Story - HR Dashboard",
        items: ["As an HR manager, I want a comprehensive dashboard to analyze human resources data, providing both summary views for high-level insights and detailed employee records for in-depth analysis"]
      },
      summaryView: {
        title: "Summary View",
        items: ["The summary view should be divided into three main sections: Overview, Demographics, and Income Analysis"]
      },
      overview: {
        title: "Overview",
        items: [
          "Display the total number of hired employees, active employees, and terminated employees.",
          "Visualize the total number of hired and terminated employees over the years.",
          "Present a breakdown of total employees by department and job titles.",
          "Compare total employees between headquarters (HQ) and branches (New York is the HQ)",
          "Show the distribution of employees by city and state."
        ]
      },
      demographics: {
        title: "Demographics",
        items: [
          "Present the gender ratio in the company.",
          "Visualize the distribution of employees across age groups and education levels.",
          "Show the total number of employees within each age group.",
          "Show the total number of employees within each education level.",
          "Present the correlation between employees's educational backgrounds and their performance ratings."
        ]
      },
      income: {
        title: "Income",
        items: [
          "Compare salaries across different education levels for both genders to identify any discrepancies or patterns.",
          "Present how the age correlate with the salary for employees in each department."
        ]
      },
      employeeRecords: {
        title: "Employee Records View",
        items: [
          "Provide a comprehensive list of all employees with necessary information such as name, department, position, gender, age, education, and salary.",
          "Users should be able to filter the list based on any of the available columns."
        ]
      }
    }
  },
  "3": {
    id: 3,
    title: "Netflix Analytics Dashboard",
    description: "End-to-end project for building a Netflix analytics dashboard in Power BI for analyzing ratings and the number of votes, segmented by countries, genres, and titles.",
    technologies: ["Power BI", "Data Analysis", "Dashboard Design", "Data Visualization"],
    images: [
      "/lovable-uploads/6c442f92-fc76-4004-bfdb-9dba484ce65d.png",
      "/lovable-uploads/c425daca-03be-4c30-866c-16dd54fded7c.png"
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
    ],
    sections: {
      userStory: {
        title: "User Story",
        items: ["As a data analyst, I want a comprehensive dashboard to analyze Netflix data, providing both summary views for high-level insights and detailed content records for in-depth analysis."]
      },
      summaryView: {
        title: "Summary View",
        items: ["The summary view should be divided into three main sections: Overview, Content Demographics, and Performance Analysis."]
      },
      overview: {
        title: "Overview",
        items: [
          "Display the total number of movies and TV shows.",
          "Visualize the total number of movies and TV shows added over the years.",
          "Present a breakdown of total content by genre and type (movie or TV show).",
          "Compare total content between different regions (e.g., North America, Europe, Asia).",
          "Show the distribution of content by country and language."
        ]
      },
      contentDemographics: {
        title: "Content Demographics",
        items: [
          "Present the ratio of movies to TV shows.",
          "Visualize the distribution of content across different genres and ratings.",
          "Show the total number of content within each genre.",
          "Show the total number of content within each rating category.",
          "Present the correlation between content ratings and their viewer engagement metrics."
        ]
      },
      performanceAnalysis: {
        title: "Performance Analysis",
        items: [
          "Compare viewer engagement across different genres for both movies and TV shows to identify any discrepancies or patterns.",
          "Present how the content ratings correlate with viewer engagement for content in each genre."
        ]
      },
      contentRecords: {
        title: "Content Records View",
        items: [
          "Provide a comprehensive list of all content with necessary information such as title, type (movie or TV show), genre, rating, release year, duration, and viewer engagement metrics.",
          "Users should be able to filter the list based on any of the available columns."
        ]
      },
      additionalFeatures: {
        title: "Additional Features",
        items: [
          "Interactive Filters: Allow users to filter data by year, genre, type, region, and rating.",
          "Dynamic Visuals: Use dynamic and interactive visuals to present data, including bar charts, line charts, pie charts, and maps.",
          "Drill-Down Capabilities: Enable users to drill down into specific data points for more detailed analysis.",
          "Export Options: Allow users to export data and visuals for reporting purposes."
        ]
      },
      considerations: {
        title: "Considerations",
        items: [
          "Data Source: Ensure the data is clean and well-organized, including all necessary fields such as title, type, genre, rating, release year, duration, and viewer engagement metrics.",
          "Data Modeling: Create a robust data model that supports efficient querying and analysis.",
          "User Experience: Design the dashboard with a user-friendly interface that is intuitive and easy to navigate."
        ]
      }
    }
  }
};
