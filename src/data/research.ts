export type ResearchEntry = {
  number: string;
  title: string;
  marker: string;
  description: string;
  metrics: string[];
  notes: string;
};

export const research: ResearchEntry[] = [
  {
    number: "01",
    title: "Mars Terrain Classification",
    marker: "IEEE MISSF 2026",
    description: "CNN-based Mars terrain classification research.",
    metrics: ["6,691 images", "24 classes", "77.47% EfficientNet-B3 accuracy"],
    notes: "CNN architectures were evaluated for image-based Mars terrain recognition. The reported figures are retained from the existing research record.",
  },
  {
    number: "02",
    title: "Quantization for Energy-Efficient AI",
    marker: "Conference - Selected",
    description: "INT8 quantization-aware training on ResNet18.",
    metrics: ["88.97% accuracy", "57.9% lower energy use", "2.6x smaller carbon footprint"],
    notes: "The study explored INT8 quantization on ResNet18 as a way to reduce inference energy use. Figures are retained from the existing research record.",
  },
];
