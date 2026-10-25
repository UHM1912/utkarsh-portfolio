export type ExperienceEntry = {
  period: string;
  title: string;
  organization: string;
  location: string;
  detail: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    period: "JAN 2026 - JUN 2026",
    title: "Data Science Intern",
    organization: "DataNeurus Pvt. Ltd.",
    location: "Bengaluru",
    detail: "Worked across machine learning, deep learning, computer vision, NLP, generative AI, RAG pipelines, and AI-agent workflows.",
    highlights: [
      "Built AI-agent workflows using LangChain and LangGraph, with tracing, logging, and performance optimization.",
      "Worked across ML, deep learning, computer vision, NLP, generative AI, and RAG pipelines; contributed visualization ideas to the product roadmap.",
      "Presented an internal knowledge session on data pipelines and Apache Airflow to the data science team.",
    ],
  },
];
