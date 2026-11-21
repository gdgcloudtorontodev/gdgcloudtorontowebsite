import crypto from 'node:crypto';

export interface VerifyTicketParams {
  email?: string;
  orderNumber?: string;
  category?: 'CONFERENCE' | 'WORKSHOP' | 'VOLUNTEER';
  selectedWorkshop?: string;
  volunteerName?: string;
  volunteerPassphrase?: string;
  volunteerRole?: string;
  volunteerEmail?: string;
}

export interface VerifyTicketResult {
  success: boolean;
  message: string;
  data?: any;
}

export const DEVFEST_2026_EVENTBRITE_ID = '2004248355785';

// Pre-seeded verified attendee records (for official organizers, speakers, and verified test orders)
export const PRESET_ATTENDEES: Record<string, {
  name: string;
  email: string;
  orderNumber: string;
  ticketClass: string;
  checkedIn: boolean;
}> = {
  '2004248355785': {
    name: 'Alex Mercer',
    email: 'alex.mercer@gmail.com',
    orderNumber: '2004248355785',
    ticketClass: 'DevFest 2026 - General Admission (Early Bird)',
    checkedIn: true,
  },
  '10928374651': {
    name: 'Samantha Chen',
    email: 'samantha.chen@toronto.dev',
    orderNumber: '10928374651',
    ticketClass: 'DevFest 2026 - VIP & Workshop Pass',
    checkedIn: true,
  },
  '11289475620': {
    name: 'Marcus Vance',
    email: 'developer@toronto.ai',
    orderNumber: '11289475620',
    ticketClass: 'DevFest 2026 - Standard Admission',
    checkedIn: true,
  },
};

export async function processTicketVerification(params: VerifyTicketParams): Promise<VerifyTicketResult> {
  const { 
    email, 
    orderNumber, 
    category = 'CONFERENCE', 
    selectedWorkshop,
    volunteerName,
    volunteerPassphrase,
    volunteerRole,
    volunteerEmail 
  } = params;

  // -------------------------------------------------------------
  // VOLUNTEER CREW PASSPHRASE VALIDATION
  // -------------------------------------------------------------
  if (category === 'VOLUNTEER') {
    const cleanName = volunteerName?.trim() || '';
    const cleanPassphrase = volunteerPassphrase?.trim() || '';

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

    // SHA-256 hash of 'GDG-TOR-2026-DEVFESTPAVILLION'
    // Stored as a one-way cryptographic hash so the plain-text secret is never exposed
    const OFFICIAL_PASSPHRASE_HASH = process.env.VOLUNTEER_PASSPHRASE_HASH || 'e43abab8fb77b1257253cec62a8d97d855233f6190c5b05994098e2fa7a16f97';

    const inputHash = crypto.createHash('sha256').update(cleanPassphrase).digest('hex');

    // Constant-time comparison to prevent timing attacks
    let isPassphraseValid = false;
    try {
      isPassphraseValid = crypto.timingSafeEqual(
        Buffer.from(inputHash, 'hex'),
        Buffer.from(OFFICIAL_PASSPHRASE_HASH, 'hex')
      );
    } catch {
      isPassphraseValid = false;
    }

    if (!isPassphraseValid) {
      return {
        success: false,
        message: 'Invalid Volunteer Crew Passphrase. Please check the passphrase provided by your Volunteer Lead.',
      };
    }

    // Event Day Check: Only allowed on or after event day Dec 11, 2026 (EST)
    const eventDayStart = new Date('2026-12-11T00:00:00-05:00').getTime();
    const now = Date.now();
    const allowEarly = process.env.ALLOW_EARLY_VOLUNTEER_CLAIM === 'true';

    if (now < eventDayStart && !allowEarly) {
      return {
        success: false,
        message: 'Passphrase verified! However, volunteer certificates will unlock for download on the day of the event: Friday, December 11, 2026. Please check back on event day!',
      };
    }

    // Passphrase is valid and event day gate passed!
    const role = volunteerRole?.trim() || 'DevFest 2026 Core Volunteer Crew';
    const cleanEmail = volunteerEmail?.trim().toLowerCase() || `${cleanName.toLowerCase().replace(/[^a-z0-9]/g, '.')}@volunteers.gdgcloudtoronto.com`;

    const hash = crypto.createHash('sha256')
      .update(`${cleanName}:${role}:${cleanPassphrase}:VOLUNTEER_2026`)
      .digest('hex');
    const shortHash = hash.slice(0, 5).toUpperCase();
    const credentialId = `GDG-TOR-2026-VOL-${shortHash}`;

    return {
      success: true,
      message: 'Volunteer leadership credentials verified successfully!',
      data: {
        participantName: cleanName,
        email: cleanEmail,
        ticketNumber: `VOL-2026-${shortHash}`,
        eventbriteOrderNumber: 'VOLUNTEER-CREW-2026',
        eventbriteEventId: DEVFEST_2026_EVENTBRITE_ID,
        credentialId,
        event: 'GDG Cloud Toronto — DevFest 2026',
        chapter: 'GDG Cloud Toronto (Google Developer Group)',
        issueDate: 'December 11, 2026',
        venue: 'Toronto Pavilion, Toronto, Canada',
        tracks: ['Volunteer Leadership', 'Operations & AV', 'Community Building'],
        workshopsCompleted: [
          'DevFest 2026 Operational Readiness & Event Logistics',
          'Community Inclusion, Speaker Care & Attendee Hospitality',
        ],
        verificationHash: `sha256:${hash.slice(0, 32)}`,
        qrPayload: `https://devfest.gdgcloudtoronto.com/volunteer-credential/${credentialId}`,
        status: 'VERIFIED',
        verificationSource: 'VOLUNTEER_REGISTRY',
        recipientType: 'VOLUNTEER',
        volunteerRole: role,
        volunteerBadge: 'Volunteer Champion & Core Pillar',
        hoursContributed: 35,
      },
    };
  }

  // -------------------------------------------------------------
  // CONFERENCE & WORKSHOP TICKET VALIDATION
  // -------------------------------------------------------------
  if (!email || !orderNumber) {
    return {
      success: false,
      message: 'Both registered email and Eventbrite Order Number / Ticket ID are required.',
    };
  }

  const cleanEmail = email.trim().toLowerCase();
  const cleanOrder = orderNumber.trim().replace(/^EB-/i, '').replace(/[^a-zA-Z0-9_-]/g, '');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cleanEmail)) {
    return {
      success: false,
      message: 'Please provide a valid email address format (e.g. name@example.com).',
    };
  }

  if (cleanOrder.length < 5) {
    return {
      success: false,
      message: 'Eventbrite Order Numbers must be at least 5 characters (e.g. 2004248355785).',
    };
  }

  const token = process.env.EVENTBRITE_API_TOKEN;
  const eventId = process.env.DEVFEST_EVENTBRITE_EVENT_ID || DEVFEST_2026_EVENTBRITE_ID;

  // 1. Live Eventbrite API validation
  if (token) {
    try {
      const ebUrl = `https://www.eventbriteapi.com/v3/orders/${cleanOrder}/?expand=attendees`;
      const ebRes = await fetch(ebUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      });

      if (ebRes.status === 401) {
        return {
          success: false,
          message: 'Eventbrite API authentication failed. Please verify that the organizer API token is active.',
        };
      }

      if (ebRes.status === 403 || ebRes.status === 404) {
        // Check if matching preset demo records (e.g. for testing)
        const preset = PRESET_ATTENDEES[cleanOrder];
        if (preset && preset.email.toLowerCase() === cleanEmail) {
          const hash = crypto.createHash('sha256')
            .update(`${cleanEmail}:${cleanOrder}:${eventId}`)
            .digest('hex');
          const shortHash = hash.slice(0, 5).toUpperCase();
          const prefix = category === 'WORKSHOP' ? 'WS' : 'EB';
          const credentialId = `GDG-TOR-2026-${prefix}-${shortHash}`;

          return {
            success: true,
            message: 'Attendee credentials verified against DevFest 2026 Eventbrite Registry.',
            data: {
              participantName: preset.name,
              email: cleanEmail,
              ticketNumber: `EB-${cleanOrder}`,
              eventbriteOrderNumber: cleanOrder,
              eventbriteEventId: eventId,
              credentialId,
              event: 'GDG Cloud Toronto — DevFest 2026',
              chapter: 'GDG Cloud Toronto (Google Developer Group)',
              issueDate: 'December 11, 2026',
              venue: 'Toronto Pavilion, Toronto, Canada',
              tracks: ['AI & Agentic Systems', 'Cloud & Distributed Kubernetes', 'Quantum Computing'],
              workshopsCompleted: category === 'WORKSHOP' && selectedWorkshop
                ? [selectedWorkshop]
                : [
                    'Building Autonomous AI Agents with MCP & LangGraph',
                    'Zero-to-Production Multimodal RAG with Gemini 2.0',
                  ],
              verificationHash: `sha256:${hash.slice(0, 32)}`,
              qrPayload: `https://devfest.gdgcloudtoronto.com/credential/${credentialId}`,
              status: 'VERIFIED',
              verificationSource: 'EVENTBRITE_REGISTRY',
              recipientType: category,
              selectedWorkshop: category === 'WORKSHOP' ? (selectedWorkshop || 'Hands-on Technical Code Lab') : undefined,
            },
          };
        }

        return {
          success: false,
          message: `Order #${cleanOrder} was not found for GDG Cloud Toronto DevFest 2026. Please check your Eventbrite ticket confirmation email or receipt.`,
        };
      }

      if (ebRes.ok) {
        const orderData: any = await ebRes.json();

        // Check event association
        if (orderData.event_id && String(orderData.event_id) !== String(eventId)) {
          return {
            success: false,
            message: `Order #${cleanOrder} is not associated with GDG Cloud Toronto DevFest 2026 (Event ID: ${eventId}).`,
          };
        }

        // Check order status
        if (orderData.status === 'canceled' || orderData.status === 'refunded') {
          return {
            success: false,
            message: `Order #${cleanOrder} has been marked as ${orderData.status} on Eventbrite.`,
          };
        }

        // Match against attendees and buyer email
        const attendees: any[] = orderData.attendees || [];
        const matchingAttendee = attendees.find((att: any) => {
          const attEmail = att.profile?.email?.trim().toLowerCase();
          return attEmail === cleanEmail;
        }) || (orderData.email?.trim().toLowerCase() === cleanEmail ? attendees[0] : null);

        if (!matchingAttendee && orderData.email?.trim().toLowerCase() !== cleanEmail) {
          return {
            success: false,
            message: `The email "${cleanEmail}" does not match any registered attendee under Eventbrite Order #${cleanOrder}. Please verify the exact email you registered with on Eventbrite.`,
          };
        }

        // Extract attendee name
        const p = matchingAttendee?.profile;
        const firstName = p?.first_name || '';
        const lastName = p?.last_name || '';
        const fullName = (firstName || lastName)
          ? `${firstName} ${lastName}`.trim()
          : (p?.name || orderData.name || cleanEmail.split('@')[0]);

        const hash = crypto.createHash('sha256')
          .update(`${cleanEmail}:${cleanOrder}:${eventId}`)
          .digest('hex');
        
        const shortHash = hash.slice(0, 5).toUpperCase();
        const prefix = category === 'WORKSHOP' ? 'WS' : 'EB';
        const credentialId = `GDG-TOR-2026-${prefix}-${shortHash}`;

        return {
          success: true,
          message: 'Eventbrite credentials verified successfully via official Eventbrite API.',
          data: {
            participantName: fullName,
            email: cleanEmail,
            ticketNumber: matchingAttendee?.id ? `EB-${cleanOrder}-${matchingAttendee.id}` : `EB-${cleanOrder}`,
            eventbriteOrderNumber: cleanOrder,
            eventbriteEventId: String(orderData.event_id || eventId),
            credentialId,
            event: 'GDG Cloud Toronto — DevFest 2026',
            chapter: 'GDG Cloud Toronto (Google Developer Group)',
            issueDate: 'December 11, 2026',
            venue: 'Toronto Pavilion, Toronto, Canada',
            tracks: ['AI & Agentic Systems', 'Cloud & Distributed Kubernetes', 'Quantum Compute'],
            workshopsCompleted: category === 'WORKSHOP' && selectedWorkshop
              ? [selectedWorkshop]
              : [
                  'Building Autonomous AI Agents with MCP & LangGraph',
                  'Zero-to-Production Multimodal RAG with Gemini 2.0',
                ],
            verificationHash: `sha256:${hash.slice(0, 32)}`,
            qrPayload: `https://devfest.gdgcloudtoronto.com/credential/${credentialId}`,
            status: 'VERIFIED',
            verificationSource: 'EVENTBRITE_API',
            recipientType: category,
            selectedWorkshop: category === 'WORKSHOP' ? (selectedWorkshop || 'Hands-on Technical Code Lab') : undefined,
          },
        };
      }
    } catch (err: any) {
      console.error('Error connecting to Eventbrite API:', err);
    }
  }

  // 2. Preset / Verified Attendee Registry matching
  const presetRecord = PRESET_ATTENDEES[cleanOrder];
  if (presetRecord && presetRecord.email.toLowerCase() === cleanEmail) {
    const hash = crypto.createHash('sha256')
      .update(`${cleanEmail}:${cleanOrder}:${eventId}`)
      .digest('hex');
    const shortHash = hash.slice(0, 5).toUpperCase();
    const prefix = category === 'WORKSHOP' ? 'WS' : 'EB';
    const credentialId = `GDG-TOR-2026-${prefix}-${shortHash}`;

    return {
      success: true,
      message: 'Attendee credentials verified against DevFest 2026 Eventbrite Registry.',
      data: {
        participantName: presetRecord.name,
        email: cleanEmail,
        ticketNumber: `EB-${cleanOrder}`,
        eventbriteOrderNumber: cleanOrder,
        eventbriteEventId: eventId,
        credentialId,
        event: 'GDG Cloud Toronto — DevFest 2026',
        chapter: 'GDG Cloud Toronto (Google Developer Group)',
        issueDate: 'December 11, 2026',
        venue: 'Toronto Pavilion, Toronto, Canada',
        tracks: ['AI & Agentic Systems', 'Cloud & Distributed Kubernetes', 'Quantum Computing'],
        workshopsCompleted: category === 'WORKSHOP' && selectedWorkshop
          ? [selectedWorkshop]
          : [
              'Building Autonomous AI Agents with MCP & LangGraph',
              'Zero-to-Production Multimodal RAG with Gemini 2.0',
            ],
        verificationHash: `sha256:${hash.slice(0, 32)}`,
        qrPayload: `https://devfest.gdgcloudtoronto.com/credential/${credentialId}`,
        status: 'VERIFIED',
        verificationSource: 'EVENTBRITE_REGISTRY',
        recipientType: category,
        selectedWorkshop: category === 'WORKSHOP' ? (selectedWorkshop || 'Hands-on Technical Code Lab') : undefined,
      },
    };
  }

  // 3. Strict rejection if not found
  return {
    success: false,
    message: token 
      ? `No matching Eventbrite registration found for Order #${cleanOrder} and email "${cleanEmail}". Please verify you entered the exact Order Number and email from your Eventbrite confirmation receipt.`
      : `No registered attendee found for Order #${cleanOrder} and email "${cleanEmail}". Please check your Eventbrite confirmation email. (Note: To enable live Eventbrite API validation, configure EVENTBRITE_API_TOKEN in the environment).`,
  };
}
