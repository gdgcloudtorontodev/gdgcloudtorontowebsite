import { processTicketVerification } from '../../server/verifyTicket';

export const handler = async (event: any) => {
  // Only accept POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
        'Allow': 'POST',
      },
      body: JSON.stringify({
        success: false,
        message: 'Method Not Allowed. Only POST requests are supported.',
      }),
    };
  }

  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const result = await processTicketVerification(body);

    const statusCode = result.success ? 200 : 400;

    return {
      statusCode,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
      body: JSON.stringify(result),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: false,
        message: 'Server error processing ticket verification. Please try again later.',
      }),
    };
  }
};
