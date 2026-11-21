export type CertificateCategory = 'CONFERENCE' | 'WORKSHOP' | 'VOLUNTEER';

export interface VerifiedCertificate {
  participantName: string;
  email: string;
  ticketNumber: string;
  eventbriteOrderNumber: string;
  eventbriteEventId: string;
  credentialId: string;
  event: string;
  chapter: string;
  issueDate: string;
  venue: string;
  tracks: string[];
  workshopsCompleted: string[];
  verificationHash: string;
  qrPayload: string;
  status: 'VERIFIED' | 'INVALID' | 'EXPIRED';
  verificationSource: 'EVENTBRITE_API' | 'EVENTBRITE_REGISTRY' | 'LOCAL_REGISTRY' | 'VOLUNTEER_REGISTRY' | 'WORKSHOP_REGISTRY';
  recipientType?: CertificateCategory;
  selectedWorkshop?: string;
  volunteerRole?: string;
  hoursContributed?: number;
  volunteerBadge?: string;
}

export interface VerificationResponse {
  success: boolean;
  message: string;
  data?: VerifiedCertificate;
}

// DevFest 2026 Official Eventbrite Event ID
export const DEVFEST_2026_EVENTBRITE_ID = '2004248355785';

/**
 * Validates participant email & Eventbrite Order Number via secure API endpoint.
 * 
 * Flow:
 * 1. Calls serverless `/api/verify-ticket` (Netlify Function / local server).
 * 2. Backend queries the Eventbrite REST API v3 using the organizer's private API token.
 * 3. Rejects invalid orders, mismatched emails, or canceled/refunded tickets.
 */
export async function verifyCertificate(
  email: string,
  eventbriteOrderNumber: string,
  category: CertificateCategory = 'CONFERENCE',
  selectedWorkshop?: string
): Promise<VerificationResponse> {
  const cleanEmail = email.trim().toLowerCase();
  const cleanOrder = eventbriteOrderNumber.trim().replace(/^EB-/i, '').replace(/[^a-zA-Z0-9_-]/g, '');

  if (!cleanEmail || !cleanOrder) {
    return {
      success: false,
      message: 'Both registered email and Eventbrite Order # / Ticket ID are required.',
    };
  }

  // Basic email pattern check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cleanEmail)) {
    return {
      success: false,
      message: 'Please provide a valid registered email address.',
    };
  }

  try {
    const res = await fetch('/api/verify-ticket', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: cleanEmail,
        orderNumber: cleanOrder,
        category,
        selectedWorkshop,
      }),
    });

    if (res.ok) {
      const result = await res.json();
      return result;
    } else {
      const errorData = await res.json().catch(() => null);
      return {
        success: false,
        message: errorData?.message || `Verification failed (HTTP ${res.status}). Please check your order details.`,
      };
    }
  } catch {
    return {
      success: false,
      message: 'Unable to reach the ticket verification service. Please check your internet connection and try again.',
    };
  }
}

export const verifyConferenceCertificate = (email: string, orderNumber: string) =>
  verifyCertificate(email, orderNumber, 'CONFERENCE');

/**
 * Validates attendee credentials & generates an official Hands-on Workshop Certificate.
 */
export async function verifyWorkshopCertificate(
  email: string,
  orderNumber: string,
  workshopTitle: string
): Promise<VerificationResponse> {
  return verifyCertificate(email, orderNumber, 'WORKSHOP', workshopTitle);
}

/**
 * Validates volunteer credentials with the official hashed crew passphrase via the secure API endpoint.
 * Date-locked to event day December 11, 2026.
 */
export async function verifyVolunteerCertificate(
  volunteerName: string,
  passphrase: string,
  volunteerRole?: string,
  volunteerEmail?: string
): Promise<VerificationResponse> {
  const cleanName = volunteerName.trim();
  const cleanPassphrase = passphrase.trim();

  if (!cleanName) {
    return {
      success: false,
      message: 'Please enter your Full Name as it should appear on your Volunteer Certificate.',
    };
  }

  if (!cleanPassphrase) {
    return {
      success: false,
      message: 'Please enter the official Volunteer Crew Passphrase.',
    };
  }

  try {
    const res = await fetch('/api/verify-ticket', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        category: 'VOLUNTEER',
        volunteerName: cleanName,
        volunteerPassphrase: cleanPassphrase,
        volunteerRole,
        volunteerEmail: volunteerEmail?.trim(),
      }),
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      const errorData = await res.json().catch(() => null);
      return {
        success: false,
        message: errorData?.message || `Volunteer verification failed (HTTP ${res.status}).`,
      };
    }
  } catch {
    return {
      success: false,
      message: 'Unable to reach the ticket verification service. Please check your internet connection and try again.',
    };
  }
}
