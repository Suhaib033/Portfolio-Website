
import { Github, FileText } from "lucide-react";
import { Project } from "../types";

export const tableauHrDashboard: Project = {
  id: 2,
  title: "Tableau HR Dashboard",
  description: "A comprehensive dashboard to analyze human resources data, providing both summary views for high-level insights and detailed employee records for in-depth analysis",
  technologies: ["Tableau", "Data Visualization", "HR Analytics", "Dashboard Design"],
  images: [
    "/lovable-uploads/481792a5-eac3-4231-8d11-f3e87ca49529.png"
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
};
