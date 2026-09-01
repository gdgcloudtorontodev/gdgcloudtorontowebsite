import { Panel } from '../types';

export const PANELS: Panel[] = [
  {
    id: 'panel-agentic-future',
    title: 'The Agentic Paradigm: From Chatbots to Autonomous Enterprise Collaborators',
    theme: 'AI Agents & Autonomous Systems',
    description: 'An unscripted debate among top AI researchers, open source builders, and infrastructure architects on how agentic systems will reshape the software engineering lifecycle and corporate decision making.',
    timeSlot: '02:00 PM – 03:00 PM',
    room: 'Grand Ballroom A (Main Stage)',
    moderator: {
      name: 'Samuel Adebayo',
      role: 'Google Developer Expert & Community Lead',
      organization: 'GDG Toronto',
    },
    panelists: [
      {
        name: 'Dr. Elena Vance',
        role: 'Principal AI Scientist',
        organization: 'Google DeepMind',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
        stance: 'Test-time reasoning and test-driven verification are the prerequisite for reliable real-world agents.',
      },
      {
        name: 'Aisha Al-Mansoor',
        role: 'Lead Agentic Architect',
        organization: 'Open Autonomous Systems Lab',
        photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
        stance: 'Open protocols like MCP eliminate siloed APIs, allowing agents to execute cross-functional workflows safely.',
      },
      {
        name: 'Marcus Chen',
        role: 'Staff Solutions Architect',
        organization: 'Google Cloud Platform',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
        stance: 'Agent governance, audit logging, and blast radius isolation on Kubernetes will decide enterprise adoption.',
      },
      {
        name: 'Priya Sharma',
        role: 'VP AI Infrastructure',
        organization: 'NextGen Silicon',
        photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80',
        stance: 'High inference latency is the limiting factor for cyclic multi-step agents — hardware co-design is key.',
      },
    ],
    keyQuestions: [
      'Will code-writing agents eliminate entry-level engineering jobs or elevate engineers to system architects?',
      'How do we handle state consistency when multi-agent graphs encounter divergent tool outputs?',
      'What are the security implications of autonomous agents with file system and cloud provisioning access?',
      'When will agents reliably self-debug complex distributed microservice failures in production?',
    ],
  },
  {
    id: 'panel-quantum-cloud',
    title: 'Quantum Advantage & Cloud Acceleration: What Is Real in 2026?',
    theme: 'Quantum Computing & High-Performance Hardware',
    description: 'Separating scientific reality from industry hype. How hybrid quantum-classical algorithms and specialized accelerators (TPUs, NPUs) are accelerating chemistry, cryptography, and combinatorial optimization.',
    timeSlot: '03:45 PM – 04:45 PM',
    room: 'Hall C1 (Frontier Pavilion)',
    moderator: {
      name: 'Dr. Julian Trent',
      role: 'Director of Quantum Software',
      organization: 'Toronto Quantum Computing Initiative',
    },
    panelists: [
      {
        name: 'Dr. Elena Vance',
        role: 'Principal AI Scientist',
        organization: 'Google DeepMind',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
        stance: 'Quantum machine learning will unlock simulation for molecular biology and room-temperature superconductors.',
      },
      {
        name: 'Priya Sharma',
        role: 'VP AI Infrastructure',
        organization: 'NextGen Silicon',
        photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80',
        stance: 'Photonic interconnects and optical computing will bridge the transition before full fault-tolerant quantum.',
      },
      {
        name: 'Marcus Chen',
        role: 'Staff Solutions Architect',
        organization: 'Google Cloud Platform',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
        stance: 'Post-quantum cryptography migration across enterprise Kubernetes clusters is an urgent today priority.',
      },
    ],
    keyQuestions: [
      'How far are we from error-corrected logical qubits running Shor’s algorithm?',
      'How do developers begin writing hybrid quantum algorithms today using cloud quantum virtual machines?',
      'What are the most promising near-term industrial use cases: logistics optimization or material science?',
    ],
  },
];
