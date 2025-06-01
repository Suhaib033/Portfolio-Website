
import { useParams, Link } from "react-router-dom";
import { ExternalLink, Github, FileText, Database, Image } from "lucide-react";
import OrangeHue from "../components/OrangeHue";

// Project data
const projects = {
  "2": {
    id: 2,
    title: "Tableau HR Dashboard",
    description: "A comprehensive dashboard to analyze human resources data, providing both summary views for high-level insights and detailed employee records for in-depth analysis",
    technologies: ["Tableau", "Data Analysis", "HR Analytics", "Dashboard Design"],
    problem: "Organizations need better ways to visualize and analyze their HR data to make informed decisions about workforce management.",
    approach: [
      "Created interactive visualizations for HR metrics",
      "Implemented drill-down capabilities for detailed analysis",
      "Designed intuitive dashboard layout for easy navigation",
      "Added filtering capabilities for dynamic data exploration"
    ],
    overview: `
      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">User Story - HR Dashboard</h3>
      <p class="text-gray-300 mb-6">As an HR manager, I want a comprehensive dashboard to analyze human resources data, providing both summary views for high-level insights and detailed employee records for in-depth analysis</p>

      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Summary View</h3>
      <p class="text-gray-300 mb-4">The summary view is divided into three main sections: Overview, Demographics, and Income Analysis</p>

      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Overview</h3>
      <p class="text-gray-300 mb-2">The Overview section provides a snapshot of the overall HR metrics, including:</p>
      <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4 mb-6">
        <li>Display the total number of hired employees, active employees, and terminated employees.</li>
        <li>Visualize the total number of hired and terminated employees over the years.</li>
        <li>Present a breakdown of total employees by department and job titles.</li>
        <li>Compare total employees between headquarters (HQ) and branches (New York is the HQ)</li>
        <li>Show the distribution of employees by city and state.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Demographics</h3>
      <p class="text-gray-300 mb-2">The Demographics section offers insights into the composition of the workforce, including:</p>
      <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4 mb-6">
        <li>Present the gender ratio in the company.</li>
        <li>Visualize the distribution of employees across age groups and education levels.</li>
        <li>Show the total number of employees within each age group.</li>
        <li>Show the total number of employees within each education level.</li>
        <li>Present the correlation between employees's educational backgrounds and their performance ratings.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Income</h3>
      <p class="text-gray-300 mb-2">The income analysis section focuses on salary-related metrics, including:</p>
      <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4 mb-6">
        <li>Compare salaries across different education levels for both genders to identify any discrepancies or patterns.</li>
        <li>Present how the age correlate with the salary for employees in each department.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Employee Records View</h3>
      <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4 mb-6">
        <li>Provide a comprehensive list of all employees with necessary information such as name, department, position, gender, age, education, and salary.</li>
        <li>Users should be able to filter the list based on any of the available columns.</li>
      </ul>
    `,
    images: [
      "/lovable-uploads/ed838dc6-c4fd-4387-a8d1-c9702064f6b1.png",
      "/lovable-uploads/da80f89c-9673-4ebf-b79f-fb878b0f9559.png"
    ],
    files: [
      {
        name: "View Code on GitHub",
        url: "https://github.com/Suhaib033/HR-Dashboard",
        icon: Github
      },
      {
        name: "View Project Documentation",
        url: "https://github.com/Suhaib033/HR-Dashboard/tree/main/docs",
        icon: FileText
      }
    ]
  },
  "3": {
    id: 3,
    title: "Netflix Analytics Dashboard",
    description: "End-to-end project for building a Netflix analytics dashboard in Power BI for analyzing ratings and the number of votes, segmented by countries, genres, and titles.",
    technologies: ["Power BI", "Data Analysis", "Dashboard Design"],
    overview: `
      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">User Story</h3>
      <p class="text-gray-300 mb-6">As a data analyst, I want a comprehensive dashboard to analyze Netflix data, providing both summary views for high-level insights and detailed content records for in-depth analysis.</p>

      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Summary View</h3>
      <p class="text-gray-300 mb-4">The summary view should be divided into three main sections: Overview, Content Demographics, and Performance Analysis.</p>

      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Overview</h3>
      <p class="text-gray-300 mb-2">The Overview section should provide a snapshot of the overall Netflix metrics, including:</p>
      <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4 mb-6">
        <li>Display the total number of movies and TV shows.</li>
        <li>Visualize the total number of movies and TV shows added over the years.</li>
        <li>Present a breakdown of total content by genre and type (movie or TV show).</li>
        <li>Compare total content between different regions (e.g., North America, Europe, Asia).</li>
        <li>Show the distribution of content by country and language.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Content Demographics</h3>
      <p class="text-gray-300 mb-2">The Content Demographics section should offer insights into the composition of the Netflix library, including:</p>
      <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4 mb-6">
        <li>Present the ratio of movies to TV shows.</li>
        <li>Visualize the distribution of content across different genres and ratings.</li>
        <li>Show the total number of content within each genre.</li>
        <li>Show the total number of content within each rating category.</li>
        <li>Present the correlation between content ratings and their viewer engagement metrics.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Performance Analysis</h3>
      <p class="text-gray-300 mb-2">The Performance Analysis section should focus on viewer-related metrics, including:</p>
      <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4 mb-6">
        <li>Compare viewer engagement across different genres for both movies and TV shows to identify any discrepancies or patterns.</li>
        <li>Present how the content ratings correlate with viewer engagement for content in each genre.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Content Records View</h3>
      <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4 mb-6">
        <li>Provide a comprehensive list of all content with necessary information such as title, type (movie or TV show), genre, rating, release year, duration, and viewer engagement metrics.</li>
        <li>Users should be able to filter the list based on any of the available columns.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Additional Features</h3>
      <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4 mb-6">
        <li>Interactive Filters: Allow users to filter data by year, genre, type, region, and rating.</li>
        <li>Dynamic Visuals: Use dynamic and interactive visuals to present data, including bar charts, line charts, pie charts, and maps.</li>
        <li>Drill-Down Capabilities: Enable users to drill down into specific data points for more detailed analysis.</li>
        <li>Export Options: Allow users to export data and visuals for reporting purposes.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Considerations</h3>
      <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4 mb-6">
        <li>Data Source: Ensure the data is clean and well-organized, including all necessary fields such as title, type, genre, rating, release year, duration, and viewer engagement metrics.</li>
        <li>Data Modeling: Create a robust data model that supports efficient querying and analysis.</li>
        <li>User Experience: Design the dashboard with a user-friendly interface that is intuitive and easy to navigate.</li>
      </ul>
    `,
    images: [
      "/lovable-uploads/ba44f2ef-27a1-415b-88c7-48face69a92c.png"
    ],
    files: [
      {
        name: "View Code on GitHub",
        url: "https://github.com/Suhaib033/Netflix-Analytics",
        icon: Github
      },
      {
        name: "View Documentation",
        url: "https://github.com/Suhaib033/Netflix-Analytics/tree/main/docs",
        icon: FileText
      }
    ]
  },
  "1": {
    id: 1,
    title: "SQL Data Warehouse",
    description: "Designed a comprehensive data warehousing and analytics solution that consolidates sales data, enabling analytical reporting and informed decision-making.",
    technologies: ["SQL", "SQL Server", "Data Modeling", "ETL", "Analytics"],
    images: [
      "/lovable-uploads/7e93b902-696a-4fd4-8824-9239a2e099a9.png",
      "/lovable-uploads/3afdbe22-27e7-4bff-999b-bce26ddbdc17.png",
      "/lovable-uploads/e8a52e8c-9010-4596-ab1c-4dd87e5c2257.png",
      "/lovable-uploads/fcd77f52-3c15-472b-97b8-86a9f44a69fe.png"
    ],
    files: [
      {
        name: "View Code on GitHub",
        url: "https://github.com/Suhaib033/SQL-Data-Warehouse",
        icon: Github
      },
      {
        name: "View Documentation",
        url: "https://github.com/Suhaib033/SQL-Data-Warehouse/tree/main/docs",
        icon: FileText
      }
    ],
    problem: "Organizations struggle with siloed data across multiple systems, making it difficult to generate comprehensive reports and gain insights for decision-making.",
    approach: [
      "Analyzed existing data sources and business requirements",
      "Designed a dimensional data model for analytical reporting",
      "Implemented ETL processes to extract, transform, and load data",
      "Created views and stored procedures for common reporting needs",
      "Deployed and tested the solution with stakeholders"
    ],
    overview: `
      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Data Warehouse Overview</h3>
      <p class="text-gray-300 mb-6">This project implements a comprehensive data warehousing solution that consolidates sales and inventory data from multiple source systems into a unified analytical platform.</p>

      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Key Features</h3>
      <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4 mb-6">
        <li>Star schema design with fact and dimension tables for optimal query performance</li>
        <li>Automated ETL processes for daily data refresh</li>
        <li>Historical data tracking with slowly changing dimensions</li>
        <li>Optimized for both detailed and aggregated reporting needs</li>
        <li>Integrated data quality checks and error handling</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Technical Implementation</h3>
      <p class="text-gray-300 mb-6">The solution was implemented using SQL Server and related technologies, with careful attention to performance optimization and data integrity.</p>
    `
  },
  "4": {
    id: 4,
    title: "Netflix Content Analytics using Dataiku and ML",
    description: "Explores the power of Dataiku and Machine Learning to transform Netflix content analysis by processing over 7,000 movies and TV series to develop predictive models for viewing trends.",
    technologies: ["Dataiku", "Machine Learning", "Random Forest", "Ridge Regression", "Data Analysis"],
    images: [
      "/lovable-uploads/db513a16-ef19-4a24-a5c3-451a7e52b7ca.png",
      "/lovable-uploads/26ce519d-594b-49b0-9744-02c2a74886b8.png",
      "/lovable-uploads/371cf14b-bb6a-429c-b9a6-7cebe0acc582.png",
      "/lovable-uploads/81596bf6-5723-432b-976f-481e49ae232e.png",
      "/lovable-uploads/99118335-d9e5-46c4-a236-916eded8a4b0.png",
      "/lovable-uploads/5d104f56-884a-46b0-a00a-cd9b72f9a700.png"
    ],
    overview: `
      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Description</h3>
      <p class="text-gray-300 mb-6">This project explores the power of Dataiku and Machine Learning to transform Netflix content analysis. By processing a rich dataset of over 7,000 movies and TV series, I developed predictive models that can anticipate viewing trends and content popularity. This work showcases how AI-driven insights can optimize content acquisition, personalize recommendations, and ultimately drive business growth in the competitive streaming landscape.</p>

      <h3 class="text-xl font-semibold mb-3 text-portfolio-orange">Project Brief: Predictive Content Analysis for Netflix - Initial Model Assessment</h3>
      <p class="text-gray-300 mb-4">Objective: To identify key drivers of content performance on the Netflix platform by developing and evaluating machine learning models within the Dataiku environment. This initial phase focuses on comparing two foundational regression models using a dataset of over 7,000 titles and 16 features.</p>

      <h4 class="text-lg font-semibold mb-2 text-portfolio-orange">Phase 1: Baseline Model Performance (Session 1)</h4>
      <p class="text-gray-300 mb-4">The initial rapid prototyping session aimed to establish baseline performance and identify promising model architectures. We evaluated two distinct models: Random Forest and Ridge (L2) Regression, focusing on their ability to predict a target metric (presumably content success/rating) as measured by the R2 Score.</p>
      
      <p class="text-gray-300 mb-2"><strong>Observation 1.1:</strong> The Random Forest model demonstrated superior learning capability during this initial training run, achieving a higher R2 Score trajectory compared to Ridge Regression.</p>
      <p class="text-gray-300 mb-6"><strong>Observation 1.2:</strong> Both models showed rapid convergence, indicating efficient learning within the sub-30-second training window allocated for this session.</p>

      <h4 class="text-lg font-semibold mb-2 text-portfolio-orange">Phase 2: Detailed Model Evaluation & Feature Importance</h4>
      <p class="text-gray-300 mb-4">Following the initial session, a more comprehensive training and evaluation were conducted for each model.</p>

      <h5 class="text-md font-semibold mb-2 text-portfolio-orange">A. Random Forest Model Analysis:</h5>
      <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4 mb-4">
        <li><strong>Performance Metric:</strong> The Random Forest model achieved a final R2 Score of 0.477, indicating its capacity to explain approximately 47.7% of the variance in the target variable. This establishes it as the leading performer in this initial comparison.</li>
        <li><strong>Model Configuration:</strong> The optimized model utilized 100 trees with a maximum depth of 14.</li>
        <li><strong>Key Feature Insights:</strong>
          <ul class="list-disc list-inside text-gray-300 space-y-1 pl-4 mt-2">
            <li><em>listing_type:</em> Emerged as the most influential feature, suggesting that the fundamental format of the content (e.g., movie, TV series, original) is a primary determinant of the predicted outcome.</li>
            <li><em>numVotes:</em> Ranked as the second most important feature, highlighting the strong correlation between existing user engagement/popularity and the target metric.</li>
            <li><em>genre:</em> Also demonstrated significant predictive power.</li>
          </ul>
        </li>
        <li><strong>Training Efficiency:</strong> The model was trained on a dataset of 4,082 rows and tested on 968 rows, with a total training time of approximately 26 seconds.</li>
      </ul>

      <h5 class="text-md font-semibold mb-2 text-portfolio-orange">B. Ridge (L2) Regression Model Analysis:</h5>
      <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4 mb-4">
        <li><strong>Performance Metric:</strong> The Ridge Regression model yielded an R2 Score of 0.414, explaining 41.4% of the target variable's variance.</li>
        <li><strong>Model Configuration:</strong> Key hyperparameters included an Alpha of 3.0.</li>
        <li><strong>Key Feature Insights:</strong>
          <ul class="list-disc list-inside text-gray-300 space-y-1 pl-4 mt-2">
            <li><em>genre:</em> Identified as the most dominant predictor for this model, emphasizing the strong influence of content categorization.</li>
            <li><em>type:</em> (Presumably related to listing_type) also showed high importance.</li>
            <li><em>listing_type:</em> Remained a significant feature, though with a different ranking compared to the Random Forest model.</li>
          </ul>
        </li>
        <li><strong>Training Efficiency:</strong> Similar to Random Forest, training was conducted on 4,082 rows, tested on 968, with a training time of approximately 24 seconds.</li>
      </ul>

      <h4 class="text-lg font-semibold mb-2 text-portfolio-orange">Progressive Insights & Next Steps:</h4>
      <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4 mb-4">
        <li><strong>Model Efficacy:</strong> The Random Forest model currently exhibits superior predictive accuracy (R2 Score of 0.477) compared to Ridge Regression (0.414) for this specific prediction task.</li>
        <li><strong>Dominant Predictors Identified:</strong> Across both models, listing_type, genre, and numVotes consistently appear as highly influential features. This strongly suggests that the content's format, category, and existing popularity are critical drivers of its performance.</li>
        <li><strong>Divergent Feature Prioritization:</strong> The differing top-ranked features between the two models (listing_type for Random Forest vs. genre for Ridge Regression) warrant further investigation. This could indicate that different model architectures capture distinct aspects of feature influence or that feature interactions are being modeled differently.</li>
      </ul>

      <h4 class="text-lg font-semibold mb-2 text-portfolio-orange">Path Forward:</h4>
      <ul class="list-disc list-inside text-gray-300 space-y-2 pl-4 mb-6">
        <li><strong>Deep Dive into Random Forest:</strong> Further hyperparameter tuning and exploration of feature interactions within the Random Forest model are recommended to potentially enhance its performance.</li>
        <li><strong>Feature Engineering:</strong> Based on the identified key predictors, consider creating interaction terms (e.g., listing_type * genre) or more granular categorical features to capture nuanced relationships.</li>
        <li><strong>Model Exploration:</strong> While Random Forest leads, exploring other ensemble methods or gradient boosting models could yield further improvements.</li>
        <li><strong>Business Contextualization:</strong> Correlate these model-driven insights with domain knowledge from content strategy teams to validate findings and generate actionable recommendations.</li>
      </ul>
    `,
    files: [
      {
        name: "View Code on GitHub",
        url: "https://github.com/Suhaib033/Netflix-ML-Analytics",
        icon: Github
      },
      {
        name: "View Documentation",
        url: "https://github.com/Suhaib033/Netflix-ML-Analytics/tree/main/docs",
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

// ProjectDetail component structure and JSX
const ProjectDetail = () => {
  const { id } = useParams();
  
  // Get the project data based on the ID, or use the default if not found
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
          
          {/* Project images carousel/gallery */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images && project.images.map((image, index) => (
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
          
          {/* Special custom overview section for projects with overview */}
          {project.overview && (
            <div className="mb-10" dangerouslySetInnerHTML={{ __html: project.overview }}></div>
          )}
          
          {/* Standard detailed sections */}
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
                    {project.approach && project.approach.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-portfolio-orange">Tools & Technologies Used</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
                    {project.technologies && project.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </section>
                
                {project.challenges && (
                  <section>
                    <h2 className="text-2xl font-semibold mb-4 text-portfolio-orange">Challenges & Solutions</h2>
                    <p className="text-gray-300">{project.challenges}</p>
                  </section>
                )}
                
                {project.results && (
                  <section>
                    <h2 className="text-2xl font-semibold mb-4 text-portfolio-orange">Results & Key Findings</h2>
                    <p className="text-gray-300">{project.results}</p>
                  </section>
                )}
              </>
            )}
            
            {/* Project Files Section */}
            <section className="bg-portfolio-dark/50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-portfolio-orange">Project Files</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.files && project.files.map((file, index) => (
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
