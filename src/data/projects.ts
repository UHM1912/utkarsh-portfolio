export type Project = {
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  details: string[];
  demoUrl: string | null;
  repositoryUrl: string | null;
  screenshot: string | null;
  screenshotAlt: string;
};

// Keep featured work data-driven so more projects can be added without
// changing the showcase layout.
export const projects: Project[] = [
  {
    number: "01",
    category: "GENERATIVE AI / ANALYTICS",
    title: "Solvique",
    subtitle: "AI-Powered Analytics Platform",
    description: "An AI-powered analytics platform that lets users query structured data using natural language, run machine learning workflows, and generate useful analytical insights and reports.",
    technologies: ["Python", "FastAPI", "Angular", "LangChain", "LangGraph", "BigQuery", "Gemini"],
    details: ["Natural-language data querying with SQL generation and execution", "Machine learning workflows, RAG, and AI-agent orchestration", "Interactive visualizations and report generation", "Google BigQuery integration"],
    demoUrl: "https://solvique-frontend-65499697760.asia-south1.run.app/",
    repositoryUrl: "https://github.com/UHM1912/solvique-ai-platform",
    screenshot: "/Solvique_app.png",
    screenshotAlt: "Solvique analytics application showing its natural-language analysis workspace and insights preview",
  },
  {
    number: "02",
    category: "MACHINE LEARNING / FINTECH",
    title: "Bankruptcy Risk Prediction",
    subtitle: "Machine Learning Web Application",
    description: "An end-to-end machine learning application that evaluates bankruptcy risk using 95 financial ratios, with an interactive interface for exploring predictions.",
    technologies: ["Python", "FastAPI", "scikit-learn", "XGBoost", "CatBoost", "Docker"],
    details: ["Risk prediction from 95 financial ratios", "Interactive prediction interface and model-serving backend", "Containerized application deployment"],
    demoUrl: "https://bankruptcy-app-615656949760.us-central1.run.app/",
    repositoryUrl: "https://github.com/UHM1912/Bankruptcy_prediction",
    screenshot: "/Bankruptcy_app.png",
    screenshotAlt: "Bankruptcy Risk Prediction interface showing its financial risk analysis dashboard and model summary",
  },
];
