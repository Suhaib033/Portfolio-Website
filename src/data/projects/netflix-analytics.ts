
import { Github, FileText } from "lucide-react";
import { Project } from "../types";

export const netflixAnalytics: Project = {
  id: 3,
  title: "Netflix Analytics Dashboard",
  description: "End-to-end project for building a Netflix analytics dashboard in Power BI for analyzing ratings and the number of votes, segmented by countries, genres, and titles.",
  technologies: ["Power BI", "Data Analysis", "Dashboard Design", "Data Visualization"],
  images: [
    "/lovable-uploads/6c442f92-fc76-4004-bfdb-9dba484ce65d.png",
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
};
