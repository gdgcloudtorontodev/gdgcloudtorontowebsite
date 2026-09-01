export interface RegistrationFormData {
  fullName: string;
  email: string;
  organization: string;
  role: string;
  interests: string[];
  trackPreference: string;
  dietaryOrAccessibility?: string;
}

export interface RegistrationResult {
  success: boolean;
  ticketNumber?: string;
  qrCodeUrl?: string;
  message: string;
}

export async function submitRegistration(data: RegistrationFormData): Promise<RegistrationResult> {
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (!data.fullName || !data.email) {
    return {
      success: false,
      message: 'Full name and valid email are required to claim your DevFest 2026 pass.',
    };
  }

  const randomDigits = Math.floor(10000 + Math.random() * 90000);
  const ticketNumber = `DF26-${randomDigits}`;

  return {
    success: true,
    ticketNumber,
    message: `Congratulations ${data.fullName}! Your DevFest 2026 Developer Pass has been generated. Confirmation ticket ${ticketNumber} has been recorded.`,
  };
}
