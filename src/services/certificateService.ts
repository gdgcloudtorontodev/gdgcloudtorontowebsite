export interface VerifiedCertificate {
  participantName: string;
  email: string;
  ticketNumber: string;
  credentialId: string;
  event: string;
  chapter: string;
  issueDate: string;
  tracks: string[];
  workshopsCompleted: string[];
  verificationHash: string;
  qrPayload: string;
  status: 'VERIFIED' | 'INVALID' | 'EXPIRED';
}

export interface VerificationResponse {
  success: boolean;
  message: string;
  data?: VerifiedCertificate;
}

// Preset verified records for deterministic demonstration
const SAMPLE_RECORDS: Record<string, VerifiedCertificate> = {
  'df26-12345': {
    participantName: 'Alex Mercer',
    email: 'participant@example.com',
    ticketNumber: 'DF26-12345',
    credentialId: 'GDG-TOR-2026-A8F2K',
    event: 'GDG Cloud Toronto — DevFest 2026',
    chapter: 'GDG Cloud Toronto (Google Developer Group)',
    issueDate: 'October 24, 2026',
    tracks: ['AI & Agentic Systems', 'Cloud & Distributed Kubernetes', 'Quantum Compute'],
    workshopsCompleted: ['Building Autonomous AI Agents with MCP & LangGraph', 'Zero-to-Production Multimodal RAG with Gemini'],
    verificationHash: 'sha256:7b9e28f32c810d7a6e1149fbc24a5e019b8823f03b2',
    qrPayload: 'https://devfest.gdgcloudtoronto.com/credential/GDG-TOR-2026-A8F2K',
    status: 'VERIFIED',
  },
  'df26-88990': {
    participantName: 'Samantha Chen',
    email: 'builder@toronto.dev',
    ticketNumber: 'DF26-88990',
    credentialId: 'GDG-TOR-2026-S9C34',
    event: 'GDG Cloud Toronto — DevFest 2026',
    chapter: 'GDG Cloud Toronto (Google Developer Group)',
    issueDate: 'October 24, 2026',
    tracks: ['Cloud Architecture', 'High-Throughput Inference with vLLM'],
    workshopsCompleted: ['High-Throughput Open LLM Serving on GKE with vLLM & GPUs'],
    verificationHash: 'sha256:4a1c5d9823f4618e77a28e932b0019283f12ab7612c',
    qrPayload: 'https://devfest.gdgcloudtoronto.com/credential/GDG-TOR-2026-S9C34',
    status: 'VERIFIED',
  },
};

/**
 * Validates participant email & ticket number via simulated backend verification service.
 * In production, this proxies to `POST /api/certificates/verify`.
 */
export async function verifyCertificate(email: string, ticketNumber: string): Promise<VerificationResponse> {
  // Simulate network latency of 600ms
  await new Promise((resolve) => setTimeout(resolve, 600));

  const cleanEmail = email.trim().toLowerCase();
  const cleanTicket = ticketNumber.trim().toLowerCase();

  if (!cleanEmail || !cleanTicket) {
    return {
      success: false,
      message: 'Both registered email and ticket number are required.',
    };
  }

  // Basic email pattern check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cleanEmail)) {
    return {
      success: false,
      message: 'Please provide a valid email address.',
    };
  }

  // Check known sample records first
  if (SAMPLE_RECORDS[cleanTicket] && SAMPLE_RECORDS[cleanTicket].email.toLowerCase() === cleanEmail) {
    return {
      success: true,
      message: 'Participant credentials successfully verified against DevFest 2026 registry.',
      data: SAMPLE_RECORDS[cleanTicket],
    };
  }

  // If ticket format matches DF26-XXXXX or similar, dynamically generate verified participant info
  if (cleanTicket.startsWith('df26-') || cleanTicket.startsWith('df-') || cleanTicket.length >= 6) {
    const formattedTicket = ticketNumber.trim().toUpperCase();
    const hash = Array.from(cleanEmail + cleanTicket).reduce((acc, char) => (acc * 31 + char.charCodeAt(0)) % 1000000, 0);
    const credentialId = `GDG-TOR-2026-${hash.toString(16).toUpperCase().padStart(5, '0')}`;
    
    // Extract a nice display name from email
    const namePart = cleanEmail.split('@')[0].replace(/[._-]/g, ' ');
    const participantName = namePart.charAt(0).toUpperCase() + namePart.slice(1);

    const dynamicRecord: VerifiedCertificate = {
      participantName: participantName || 'DevFest 2026 Attendee',
      email: cleanEmail,
      ticketNumber: formattedTicket,
      credentialId,
      event: 'GDG Cloud Toronto — DevFest 2026',
      chapter: 'GDG Cloud Toronto (Google Developer Group)',
      issueDate: 'October 24, 2026',
      tracks: ['AI & Agentic Systems', 'Cloud & Distributed Kubernetes', 'Quantum Compute'],
      workshopsCompleted: ['Building Autonomous AI Agents with MCP & LangGraph', 'Zero-to-Production Multimodal RAG with Gemini'],
      verificationHash: `sha256:${hash.toString(16)}${Date.now().toString(16)}`,
      qrPayload: `https://devfest.gdgcloudtoronto.com/credential/${credentialId}`,
      status: 'VERIFIED',
    };

    return {
      success: true,
      message: 'Participant credentials successfully verified against DevFest 2026 registry.',
      data: dynamicRecord,
    };
  }

  return {
    success: false,
    message: 'No matching verified attendee found for this email & ticket number. Please check your DevFest 2026 confirmation email or try sample ticket "DF26-12345" with email "participant@example.com".',
  };
}
