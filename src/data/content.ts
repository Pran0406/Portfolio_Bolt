import { Database, BrainCircuit, BarChart3, Table2, Terminal, LineChart, Workflow, GitBranch, Calculator, Bot } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Skill = {
  name: string;
  icon: LucideIcon;
  level: string;
  color: string;
};

export const skills: Skill[] = [
  { name: 'SQL', icon: Database, level: 'Expert', color: 'text-aqua-400' },
  { name: 'Python', icon: Terminal, level: 'Expert', color: 'text-nebula-300' },
  { name: 'Power BI', icon: BarChart3, level: 'Advanced', color: 'text-magenta-400' },
  { name: 'Excel', icon: Table2, level: 'Expert', color: 'text-nebula-400' },
  { name: 'Machine Learning', icon: BrainCircuit, level: 'Advanced', color: 'text-aqua-300' },
  { name: 'Data Viz', icon: LineChart, level: 'Advanced', color: 'text-nebula-300' },
  { name: 'ETL Pipelines', icon: Workflow, level: 'Advanced', color: 'text-aqua-400' },
  { name: 'Git', icon: GitBranch, level: 'Proficient', color: 'text-magenta-400' },
  { name: 'Statistics', icon: Calculator, level: 'Advanced', color: 'text-aqua-300' },
  { name: 'Automation (n8n)', icon: Bot, level: 'Advanced', color: 'text-nebula-300' },
];

export type ProjectCategory = 'Python' | 'Machine Learning' | 'SQL' | 'Power BI' | 'Automation' | 'Excel';

export type Project = {
  title: string;
  slug: string;
  category: ProjectCategory;
  description: string;
  tagline: string;
  impact: string;
  tools: string[];
  challenge: string;
  approach: string;
  results: string;
  insights: string[];
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
  accent: string;
};

const accentMap: Record<ProjectCategory, string> = {
  Python: 'from-nebula-500/30 to-aqua-500/20',
  'Machine Learning': 'from-magenta-500/25 to-nebula-500/20',
  SQL: 'from-aqua-500/25 to-nebula-500/20',
  'Power BI': 'from-nebula-500/25 to-magenta-500/20',
  Automation: 'from-nebula-500/25 to-aqua-500/25',
  Excel: 'from-aqua-500/20 to-magenta-500/20',
};

export const projects: Project[] = [
  {
    title: 'Delhi NCR Sales Performance Analysis',
    slug: 'delhi-ncr-sales-performance-analysis',
    category: 'Excel',
    description: 'Analyzed Delhi NCR sales data to evaluate sales performance across regions, categories, customers, products, and order status.',
    tagline: 'EXCEL',
    impact: 'Regional & Sales Performance',
    tools: ['Excel', 'Pivot Tables', 'Charts', 'Data Analysis'],
    challenge: 'The dataset contained a large number of sales transactions across multiple regions, categories, customers, and order statuses, making it difficult to quickly identify performance patterns.',
    approach: 'Cleaned and structured the data in Excel, created Pivot Tables and calculated metrics, analyzed sales and profit performance, and built visual dashboards for regional, product, category, and monthly analysis.',
    results: 'Identified sales patterns, high-performing regions and products, and differences in order outcomes to support better sales monitoring.',
    insights: [
      'Compared sales performance across Delhi NCR regions.',
      'Identified top-performing products and customers.',
      'Analyzed sales and profit patterns.',
      'Examined Delivered, Returned, and Cancelled orders.',
      'Studied monthly sales trends.',
    ],
    liveUrl: '',
    githubUrl: '',
    imageUrl: '',
    accent: accentMap.Excel,
  },
  {
    title: 'E-commerce Sales Analysis Dashboard',
    slug: 'ecommerce-sales-analysis-dashboard',
    category: 'Power BI',
    description: 'Built an interactive Power BI dashboard to analyze e-commerce sales, customers, products, categories, profit, and order performance.',
    tagline: 'POWER BI',
    impact: 'Interactive Sales Dashboard',
    tools: ['Power BI', 'DAX', 'Data Modeling'],
    challenge: 'Raw e-commerce transaction data made it difficult to understand overall business performance and identify important trends.',
    approach: 'Cleaned and modeled the dataset, created DAX measures, designed KPI cards and interactive visualizations, and added filters for deeper analysis.',
    results: 'Created a centralized dashboard for monitoring sales, profit, customer, product, category, and order performance.',
    insights: [
      'Monitored total sales and profit.',
      'Compared performance by category and region.',
      'Identified top customers and products.',
      'Analyzed order status distribution.',
      'Examined monthly sales trends.',
    ],
    liveUrl: '',
    githubUrl: '',
    imageUrl: '',
    accent: accentMap['Power BI'],
  },
  {
    title: 'Hospital Data Analysis',
    slug: 'hospital-data-analysis',
    category: 'Power BI',
    description: 'Analyzed hospital data and created an interactive Power BI dashboard to monitor healthcare-related KPIs and operational patterns.',
    tagline: 'POWER BI',
    impact: 'Healthcare KPI Dashboard',
    tools: ['Power BI', 'DAX', 'Data Visualization'],
    challenge: 'Hospital records contained multiple dimensions that were difficult to interpret efficiently from raw data.',
    approach: 'Prepared the dataset, created calculated measures, designed KPI cards and charts, and developed an interactive dashboard.',
    results: 'Converted hospital data into an interactive reporting dashboard to make operational information easier to monitor and analyze.',
    insights: [
      'Analyzed key hospital performance indicators.',
      'Compared trends across relevant patient and operational dimensions.',
      'Identified patterns in the available hospital data.',
      'Designed an interactive reporting experience for easier decision-making.',
    ],
    liveUrl: '',
    githubUrl: '',
    imageUrl: '',
    accent: accentMap['Power BI'],
  },
  {
    title: 'Spotify Stream Analysis',
    slug: 'spotify-stream-analysis',
    category: 'Power BI',
    description: 'Built a Power BI dashboard to analyze Spotify streaming behavior, artists, tracks, albums, and listening trends.',
    tagline: 'POWER BI',
    impact: 'Streaming Trends',
    tools: ['Power BI', 'DAX', 'Data Visualization'],
    challenge: 'Large numbers of streaming records made it difficult to identify popular content and listening patterns.',
    approach: 'Cleaned and structured the streaming data, created calculated measures, and designed interactive visualizations to explore artists, tracks, albums, and trends.',
    results: 'Transformed streaming data into an interactive dashboard for understanding listening behavior and content performance.',
    insights: [
      'Identified highly streamed artists and tracks.',
      'Compared album and artist performance.',
      'Analyzed listening trends.',
      'Explored user streaming behavior.',
      'Created interactive filters for deeper exploration.',
    ],
    liveUrl: '',
    githubUrl: '',
    imageUrl: '',
    accent: accentMap['Power BI'],
  },
  {
    title: 'Coffee Shop Sales Analysis',
    slug: 'coffee-shop-sales-analysis',
    category: 'Python',
    description: 'Performed exploratory data analysis on coffee shop sales data using Python to understand product performance, sales trends, and customer purchasing patterns.',
    tagline: 'PYTHON',
    impact: 'Sales EDA',
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    challenge: 'Raw transaction-level sales data required cleaning and exploration before meaningful business patterns could be identified.',
    approach: 'Loaded and cleaned the dataset using Pandas, performed exploratory analysis, calculated descriptive statistics, and created visualizations.',
    results: 'Used exploratory analysis to uncover sales patterns and identify products and periods contributing to business performance.',
    insights: [
      'Analyzed sales trends over time.',
      'Compared product performance.',
      'Examined transaction patterns.',
      'Identified frequently purchased products.',
      'Used visual EDA to communicate findings.',
    ],
    liveUrl: '',
    githubUrl: '',
    imageUrl: '',
    accent: accentMap.Python,
  },
  {
    title: 'FNP Sales Analysis',
    slug: 'fnp-sales-analysis',
    category: 'Excel',
    description: 'Analyzed FNP sales data using Excel to understand revenue patterns, product performance, customer behavior, and sales trends.',
    tagline: 'EXCEL',
    impact: 'Sales & Customer Insights',
    tools: ['Excel', 'Pivot Tables', 'Charts'],
    challenge: 'The raw sales dataset contained multiple dimensions that needed to be analyzed together to understand business performance.',
    approach: 'Cleaned and organized the dataset, used Pivot Tables and charts, and analyzed sales across relevant business dimensions.',
    results: 'Converted sales transactions into structured insights for understanding product, customer, and sales performance.',
    insights: [
      'Compared sales performance across products.',
      'Analyzed customer-related sales patterns.',
      'Examined sales trends.',
      'Identified important product and category patterns.',
      'Created Excel-based reporting visuals.',
    ],
    liveUrl: '',
    githubUrl: '',
    imageUrl: '',
    accent: accentMap.Excel,
  },
  {
    title: 'Customer Churn Analysis',
    slug: 'customer-churn-analysis',
    category: 'Python',
    description: 'Performed customer churn analysis to identify patterns associated with customers leaving a service.',
    tagline: 'PYTHON',
    impact: 'Customer Retention',
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    challenge: 'Customer churn is difficult to address without understanding which customer characteristics and behaviors are associated with leaving.',
    approach: 'Cleaned the customer dataset, performed exploratory data analysis, compared churned and retained customers, and visualized important patterns.',
    results: 'Used customer data to identify churn patterns and understand characteristics associated with customer attrition.',
    insights: [
      'Compared churned and retained customer groups.',
      'Analyzed demographic and behavioral patterns.',
      'Examined relationships between customer attributes and churn.',
      'Identified factors that can be useful for retention analysis.',
    ],
    liveUrl: '',
    githubUrl: '',
    imageUrl: '',
    accent: accentMap.Python,
  },
  {
    title: 'Inventory Management Automation System',
    slug: 'inventory-management-automation-system',
    category: 'Automation',
    description: 'Built an inventory management automation system using Google Sheets and Apps Script to simplify inventory tracking and automated reporting.',
    tagline: 'AUTOMATION',
    impact: 'Inventory Automation',
    tools: ['Google Sheets', 'Google Apps Script', 'Automation'],
    challenge: 'Manual inventory tracking and report preparation can be repetitive and prone to human error.',
    approach: 'Designed a Google Sheets-based inventory workflow and used Apps Script to automate inventory-related operations and report generation.',
    results: 'Reduced repetitive manual inventory-management work by automating tracking and report-generation workflows.',
    insights: [
      'Automated repetitive inventory tasks.',
      'Centralized inventory information.',
      'Generated reports through automation.',
      'Improved consistency in inventory tracking.',
      'Reduced dependency on repetitive manual reporting.',
    ],
    liveUrl: '',
    githubUrl: '',
    imageUrl: '',
    accent: accentMap.Automation,
  },
  {
    title: 'Financial Statistical Analysis',
    slug: 'financial-statistical-analysis',
    category: 'Excel',
    description: 'Performed statistical analysis on financial data using Excel to understand distributions, relationships, trends, and key statistical measures.',
    tagline: 'EXCEL',
    impact: 'Financial Statistics',
    tools: ['Excel', 'Statistical Functions', 'Charts'],
    challenge: 'Financial datasets require statistical analysis to understand central tendency, variation, and relationships within the data.',
    approach: 'Used Excel statistical functions, calculated descriptive statistics, analyzed relationships between variables, and created supporting visualizations.',
    results: 'Applied statistical techniques to transform financial data into interpretable analytical insights.',
    insights: [
      'Evaluated central tendency and variability.',
      'Compared financial variables.',
      'Examined trends and relationships.',
      'Used statistical measures to support interpretation.',
      'Presented findings through Excel visualizations.',
    ],
    liveUrl: '',
    githubUrl: '',
    imageUrl: '',
    accent: accentMap.Excel,
  },
  {
    title: 'Airlines / Aviation Data Analysis',
    slug: 'airlines-aviation-data-analysis',
    category: 'Excel',
    description: 'Analyzed airline and aviation-related data using Excel to explore operational patterns, performance, and important business metrics.',
    tagline: 'EXCEL',
    impact: 'Aviation Analytics',
    tools: ['Excel', 'Pivot Tables', 'Charts'],
    challenge: 'Aviation datasets contain multiple operational dimensions that require structured analysis to identify meaningful patterns.',
    approach: 'Cleaned and analyzed the aviation dataset using Excel, created Pivot Tables, calculated key metrics, and developed visualizations.',
    results: 'Compared aviation-related performance metrics and identified important trends within the dataset using structured Excel analysis.',
    insights: [
      'Compared aviation-related performance metrics.',
      'Identified important trends within the dataset.',
      'Used Pivot Tables to explore multiple dimensions.',
      'Created visual reporting for easier interpretation.',
    ],
    liveUrl: '',
    githubUrl: '',
    imageUrl: '',
    accent: accentMap.Excel,
  },
  {
    title: 'EDA Analysis Project',
    slug: 'eda-analysis-project',
    category: 'Python',
    description: 'Performed an end-to-end Exploratory Data Analysis project using Python to clean, investigate, visualize, and interpret a structured dataset.',
    tagline: 'PYTHON',
    impact: 'Exploratory Data Analysis',
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    challenge: 'Raw datasets often contain missing values, duplicates, inconsistent data types, and patterns that are not immediately visible.',
    approach: 'Performed data inspection, missing-value analysis, duplicate detection, data type handling, statistical exploration, and visualization.',
    results: 'Converted raw data into analysis-ready information through systematic cleaning, exploration, and visualization.',
    insights: [
      'Identified missing and inconsistent data.',
      'Investigated distributions and outliers.',
      'Explored relationships between variables.',
      'Used visualizations to communicate patterns.',
      'Converted raw data into analysis-ready information.',
    ],
    liveUrl: '',
    githubUrl: '',
    imageUrl: '',
    accent: accentMap.Python,
  },
  {
    title: 'Attendance Tracker & Report Generation',
    slug: 'attendance-tracker-report-generation',
    category: 'Excel',
    description: 'Created an Excel-based attendance tracking system with automated reporting and structured attendance summaries.',
    tagline: 'EXCEL',
    impact: 'Automated Reporting',
    tools: ['Excel', 'Formulas', 'Pivot Tables', 'Reporting'],
    challenge: 'Maintaining attendance records manually can make reporting and monitoring time-consuming.',
    approach: 'Designed an Excel tracking system using formulas and structured reporting techniques to record attendance and generate summaries.',
    results: 'Simplified attendance tracking and transformed attendance records into structured reports.',
    insights: [
      'Centralized attendance records.',
      'Automated attendance calculations.',
      'Generated summary reports.',
      'Made attendance monitoring easier.',
      'Reduced repetitive manual calculations.',
    ],
    liveUrl: '',
    githubUrl: '',
    imageUrl: '',
    accent: accentMap.Excel,
  },
  {
    title: 'Insurance Plan Prediction',
    slug: 'insurance-plan-prediction',
    category: 'Machine Learning',
    description: 'Developed a machine learning project during my internship at UV Technocrats to analyze insurance-related data and predict insurance plan outcomes.',
    tagline: 'MACHINE LEARNING',
    impact: 'Insurance Analytics',
    tools: ['Python', 'Pandas', 'Scikit-learn', 'Machine Learning'],
    challenge: 'Insurance datasets contain multiple customer attributes that can influence insurance-related outcomes.',
    approach: 'Prepared the dataset, performed exploratory analysis and preprocessing, trained machine learning models, and evaluated the results.',
    results: 'Explored relationships between customer characteristics and insurance outcomes using machine learning for prediction.',
    insights: [
      'Explored relationships between customer characteristics and insurance outcomes.',
      'Applied data preprocessing techniques.',
      'Used machine learning for prediction.',
      'Evaluated model performance.',
    ],
    liveUrl: '',
    githubUrl: '',
    imageUrl: '',
    accent: accentMap['Machine Learning'],
  },
  {
    title: 'House Price Prediction',
    slug: 'house-price-prediction',
    category: 'Machine Learning',
    description: 'Developed a machine learning model to predict house prices based on relevant property characteristics.',
    tagline: 'MACHINE LEARNING',
    impact: 'Price Prediction',
    tools: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    challenge: 'Property prices depend on multiple characteristics, making manual estimation difficult.',
    approach: 'Cleaned and prepared housing data, performed exploratory analysis, selected relevant features, trained regression models, and evaluated predictions.',
    results: 'Analyzed relationships between property features and prices through regression-based machine learning.',
    insights: [
      'Analyzed relationships between property features and prices.',
      'Performed feature preparation.',
      'Applied regression-based machine learning.',
      'Evaluated model prediction performance.',
    ],
    liveUrl: '',
    githubUrl: '',
    imageUrl: '',
    accent: accentMap['Machine Learning'],
  },
  {
    title: 'Diet Plan Prediction',
    slug: 'diet-plan-prediction',
    category: 'Machine Learning',
    description: 'Built a machine learning project to predict suitable diet-plan recommendations based on input characteristics.',
    tagline: 'MACHINE LEARNING',
    impact: 'Predictive Analytics',
    tools: ['Python', 'Pandas', 'Scikit-learn', 'Machine Learning'],
    challenge: 'Creating a suitable diet recommendation requires considering multiple input characteristics.',
    approach: 'Prepared the dataset, performed preprocessing and exploratory analysis, trained machine learning models, and evaluated the prediction results.',
    results: 'Applied machine learning to a recommendation-oriented problem and explored relationships between input characteristics and predicted outcomes.',
    insights: [
      'Applied machine learning to a recommendation-oriented problem.',
      'Performed data preprocessing.',
      'Compared model performance.',
      'Explored relationships between input characteristics and predicted outcomes.',
    ],
    liveUrl: '',
    githubUrl: '',
    imageUrl: '',
    accent: accentMap['Machine Learning'],
  },
  {
    title: 'Yogi Baba — Final Year BE Project',
    slug: 'yogi-baba-final-year-project',
    category: 'Machine Learning',
    description: 'Developed Yogi Baba, a community-focused yoga application featuring live yoga pose detection and correction, diet planning, and yoga webinars.',
    tagline: 'MACHINE LEARNING',
    impact: 'Computer Vision + ML',
    tools: ['Python', 'MediaPipe', 'Computer Vision', 'Flutter', 'Machine Learning'],
    challenge: 'Yoga practitioners may struggle to determine whether their posture is correct without a trainer or real-time feedback.',
    approach: 'Developed a yoga-focused application combining computer vision and pose detection to identify yoga poses and provide posture-related feedback. The application also included diet-plan prediction, yoga webinars, and community features.',
    results: 'Implemented live yoga pose detection with real-time posture feedback, combining fitness, diet, learning, and community functionality.',
    insights: [
      'Implemented live yoga pose detection.',
      'Used pose landmarks for posture analysis.',
      'Provided real-time pose correction concepts.',
      'Combined fitness, diet, learning, and community functionality.',
      'Demonstrated practical application of computer vision and machine learning.',
    ],
    liveUrl: '',
    githubUrl: '',
    imageUrl: '',
    accent: accentMap['Machine Learning'],
  },
];

export type Cert = {
  title: string;
  issuer: string;
  url: string;
};

export const certifications: Cert[] = [
  { title: 'Power BI Data Analyst Associate', issuer: 'Microsoft', url: 'https://learn.microsoft.com/en-us/users/PranavTryambake-7005/credentials/BFD61E90FBFAA9B4' },
  { title: 'Data Analytics Essentials', issuer: 'Cisco', url: 'https://www.credly.com/badges/adb1c45f-0b42-4064-9f45-fa5316cf1142/public_url' },
  { title: 'AI Skills Fest 2026', issuer: 'Microsoft', url: 'https://www.credly.com/badges/859ce48b-d9d3-4122-bacc-07777a11c76a/public_url' },
  { title: 'Data Analysis Internship', issuer: 'UV Technocrats', url: 'https://drive.google.com/file/d/1jx7whfa7-4E2jyL74d0zHgPKmTCOxdoP/view?usp=sharing' },
];

export type EduItem = {
  title: string;
  org: string;
  period: string;
  desc: string;
};

export const education: EduItem[] = [
  {
    title: 'B.E. Computer Science & Engineering',
    org: 'Sinhgad Institute of Technology, Lonavala — SPPU',
    period: '2021 – 2025',
    desc: 'Foundation in algorithms, systems, and data structures.',
  },
  {
    title: 'Data Analytics & Machine Learning Internship',
    org: 'UV Technocrats',
    period: 'Jul 2023 – Feb 2024',
    desc: 'Hands-on training in analytics workflows and ML modelling.',
  },
  {
    title: 'Associate Trainee',
    org: 'Suma Soft Pvt. Ltd.',
    period: 'Jul 2025 – Sep 2026',
    desc: 'Production analytics, reporting automation, and stakeholder work.',
  },
  {
    title: "Master's in Data Science",
    org: 'Zeal College of Engineering & Research, Pune — SPPU',
    period: '2026 – 2028',
    desc: 'Pursuing advanced statistics, ML, and decision science.',
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: '16', label: 'Projects completed' },
  { value: '6', label: 'Tools mastered' },
  { value: '4', label: 'Certifications' },
  { value: '3', label: 'Domains explored' },
];
