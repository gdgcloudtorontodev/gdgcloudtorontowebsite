export interface ResourceItem {
  id: string;
  title: string;
  category: 'Code Lab' | 'Slide Deck' | 'GitHub Repository' | 'Technical Article' | 'Video Recording';
  track: 'AI & Agents' | 'Cloud & Kubernetes' | 'Quantum & Compute' | 'Infrastructure';
  author: string;
  description: string;
  link: string;
  icon: string;
}

export const DEVELOPER_RESOURCES: ResourceItem[] = [
  {
    id: 'res-1',
    title: 'Model Context Protocol (MCP) TypeScript Quickstart',
    category: 'GitHub Repository',
    track: 'AI & Agents',
    author: 'GDG Cloud Toronto Lab',
    description: 'Production-ready starter template for building and testing custom MCP tools with SQLite and REST backends.',
    link: 'https://github.com/gdg-cloud-toronto/mcp-typescript-quickstart',
    icon: 'GitBranch',
  },
  {
    id: 'res-2',
    title: 'Architecting 100k-Pod GKE Clusters for Real-Time AI',
    category: 'Slide Deck',
    track: 'Cloud & Kubernetes',
    author: 'Marcus Chen',
    description: 'Complete slide deck from Marcus Chen’s deep dive on multi-region Kubernetes node autoscaling.',
    link: '#slides',
    icon: 'Presentation',
  },
  {
    id: 'res-3',
    title: 'Google Cirq Quantum Circuits Interactive Codelab',
    category: 'Code Lab',
    track: 'Quantum & Compute',
    author: 'Dr. Julian Trent',
    description: 'Colab notebook walking through Bell states, superpositions, and variational quantum eigensolvers.',
    link: 'https://colab.research.google.com/',
    icon: 'Terminal',
  },
  {
    id: 'res-4',
    title: 'Serving Gemma 2 at Scale with vLLM on NVIDIA L4',
    category: 'Technical Article',
    track: 'Infrastructure',
    author: 'Priya Sharma & Cloud SRE Team',
    description: 'Benchmark comparisons of continuous batching, memory fragmentation, and latency metrics on GCP.',
    link: '#article',
    icon: 'FileText',
  },
  {
    id: 'res-5',
    title: 'Multimodal RAG with Gemini 1.5 Pro & ScaNN Indexing',
    category: 'GitHub Repository',
    track: 'AI & Agents',
    author: 'Dr. Elena Vance',
    description: 'End-to-end repository featuring video chunking, multimodal vector storage, and grounded chat UI.',
    link: 'https://github.com/gdg-cloud-toronto/gemini-multimodal-rag',
    icon: 'Code',
  },
];
