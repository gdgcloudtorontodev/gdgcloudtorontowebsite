import { VerifiedCertificate } from './certificateService';

/**
 * Escapes characters for PDF literal strings: (, ), \
 */
function escapePdfText(text: string): string {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');
}

/**
 * Generates an authentic, high-resolution vector PDF 1.4 certificate document.
 * Returns a Blob with MIME type `application/pdf`.
 */
export function generateCertificatePdfBlob(cert: VerifiedCertificate): Blob {
  // A4 Landscape: 842 pt wide x 595 pt high
  const width = 842;
  const height = 595;

  const safeName = escapePdfText(cert.participantName);
  const safeEmail = escapePdfText(cert.email);
  const safeOrder = escapePdfText(cert.eventbriteOrderNumber || cert.ticketNumber);
  const safeCredId = escapePdfText(cert.credentialId);
  const safeEvent = escapePdfText(cert.event);
  const safeDate = escapePdfText(cert.issueDate);
  const safeVenue = escapePdfText(cert.venue || 'Toronto Pavilion, Toronto, Canada');
  const safeHash = escapePdfText(cert.verificationHash.slice(0, 32));
  const isVolunteer = cert.recipientType === 'VOLUNTEER';
  const isWorkshop = cert.recipientType === 'WORKSHOP';

  let certHeader = 'CERTIFICATE OF CONFERENCE PARTICIPATION';
  let statement = 'has actively attended and participated in premier keynote sessions, technical talks, and developer tracks at';
  let badgeLabel = '[VERIFIED CONFERENCE PARTICIPANT VIA EVENTBRITE INTEGRATION]';
  let roleOrOrderLine = `Attendee Email: ${safeEmail}    |    Eventbrite Order #: ${safeOrder}`;

  if (isVolunteer) {
    certHeader = 'CERTIFICATE OF VOLUNTEER EXCELLENCE & LEADERSHIP';
    statement = 'in recognition of exceptional volunteer leadership, community dedication, and selfless service at';
    badgeLabel = '[OFFICIAL GDG CLOUD TORONTO VOLUNTEER LEADERSHIP CREDENTIAL]';
    roleOrOrderLine = `Volunteer Role: ${escapePdfText(cert.volunteerRole || 'DevFest Crew')}   |   Badge: ${escapePdfText(cert.volunteerBadge || 'Volunteer Champion')}   |   Hours: ${cert.hoursContributed || 35}+`;
  } else if (isWorkshop) {
    certHeader = 'CERTIFICATE OF HANDS-ON WORKSHOP EXCELLENCE';
    statement = 'has successfully completed intensive hands-on technical workshop code labs and architectural implementations at';
    badgeLabel = '[VERIFIED HANDS-ON WORKSHOP PRACTITIONER CREDENTIAL]';
    const workshopTitle = escapePdfText(cert.selectedWorkshop || cert.workshopsCompleted?.[0] || 'AI & Cloud Hands-on Lab');
    roleOrOrderLine = `Completed Lab: ${workshopTitle}    |    Order #: ${safeOrder}`;
  }

  // Stream content using standard PDF drawing commands
  let stream = '';

  // Background Fill (Soft warm white)
  stream += `0.985 0.988 0.992 rg 0 0 ${width} ${height} re f\n`;

  // Outer Google Brand Color Borders
  // Blue top border
  stream += `0.259 0.522 0.957 rg 20 ${height - 28} ${width - 40} 8 re f\n`;
  // Red right border
  stream += `0.918 0.263 0.208 rg ${width - 28} 20 8 ${height - 40} re f\n`;
  // Green bottom border
  stream += `0.204 0.659 0.325 rg 20 20 ${width - 40} 8 re f\n`;
  // Yellow left border
  stream += `0.984 0.737 0.016 rg 20 20 8 ${height - 40} re f\n`;

  // Inner Elegant Border
  stream += `0.85 0.88 0.92 RG 1.5 w 38 38 ${width - 76} ${height - 76} re S\n`;
  stream += `0.7 0.75 0.82 RG 0.75 w 44 44 ${width - 88} ${height - 88} re S\n`;

  // Header Dots (Google 4-Color Motif)
  const dotY = height - 70;
  stream += `0.259 0.522 0.957 rg 398 ${dotY} 7 7 re f\n`;
  stream += `0.918 0.263 0.208 rg 410 ${dotY} 7 7 re f\n`;
  stream += `0.984 0.737 0.016 rg 422 ${dotY} 7 7 re f\n`;
  stream += `0.204 0.659 0.325 rg 434 ${dotY} 7 7 re f\n`;

  // Header Title
  stream += `BT\n`;
  stream += `/F1 14 Tf 0.12 0.13 0.15 rg\n`;
  stream += `320 ${height - 95} Td (GOOGLE DEVELOPER GROUP CLOUD TORONTO) Tj\n`;
  stream += `ET\n`;

  // Certificate Subtitle
  stream += `BT\n`;
  stream += `/F1 ${isVolunteer ? '18' : '22'} Tf 0.10 0.35 0.85 rg\n`;
  const subApproxOffset = isVolunteer ? 165 : 225;
  stream += `${subApproxOffset} ${height - 128} Td (${certHeader}) Tj\n`;
  stream += `ET\n`;

  // Divider Line
  stream += `0.26 0.52 0.96 RG 2 w 340 ${height - 142} m 502 ${height - 142} l S\n`;

  // "This is to certify that"
  stream += `BT\n`;
  stream += `/F2 12 Tf 0.40 0.43 0.48 rg\n`;
  stream += `372 ${height - 170} Td (This is proudly presented to) Tj\n`;
  stream += `ET\n`;

  // Participant Name
  stream += `BT\n`;
  stream += `/F1 28 Tf 0.08 0.09 0.11 rg\n`;
  // Approximate centering for name
  const nameApproxOffset = Math.max(200, 421 - (safeName.length * 7.5));
  stream += `${nameApproxOffset.toFixed(0)} ${height - 215} Td (${safeName}) Tj\n`;
  stream += `ET\n`;

  // Name Underline
  stream += `0.80 0.82 0.85 RG 1 w 220 ${height - 225} m 622 ${height - 225} l S\n`;

  // Participation statement
  stream += `BT\n`;
  stream += `/F2 11 Tf 0.28 0.30 0.34 rg\n`;
  const stmtOffset = isVolunteer ? 170 : 210;
  stream += `${stmtOffset} ${height - 250} Td (${statement}) Tj\n`;
  stream += `ET\n`;

  // Event Name
  stream += `BT\n`;
  stream += `/F1 15 Tf 0.12 0.13 0.15 rg\n`;
  stream += `265 ${height - 275} Td (${safeEvent}) Tj\n`;
  stream += `ET\n`;

  // Date and Venue
  stream += `BT\n`;
  stream += `/F2 10.5 Tf 0.40 0.43 0.48 rg\n`;
  stream += `275 ${height - 296} Td (Held on ${safeDate} at ${safeVenue}) Tj\n`;
  stream += `ET\n`;

  // Eventbrite / Volunteer Verification Badge Box
  const badgeY = height - 395;
  stream += `0.94 0.96 0.99 rg 120 ${badgeY} 602 82 re f\n`;
  stream += `0.80 0.88 0.98 RG 1 w 120 ${badgeY} 602 82 re S\n`;

  // Verification Details Text inside Box
  stream += `BT\n`;
  stream += `/F1 9.5 Tf 0.06 0.40 0.20 rg\n`;
  stream += `140 ${badgeY + 62} Td (${badgeLabel}) Tj\n`;
  stream += `ET\n`;

  stream += `BT\n`;
  stream += `/F2 9.5 Tf 0.25 0.28 0.32 rg\n`;
  stream += `140 ${badgeY + 44} Td (${roleOrOrderLine}) Tj\n`;
  stream += `140 ${badgeY + 28} Td (Credential Identifier: ${safeCredId}    |    Eventbrite Event ID: 2004248355785) Tj\n`;
  stream += `140 ${badgeY + 12} Td (Cryptographic Verification Hash: sha256:${safeHash}...) Tj\n`;
  stream += `ET\n`;

  // Signatures Area
  const sigY = 95;

  // Signature 1: Lead Organizer
  stream += `0.4 0.4 0.4 RG 1 w 140 ${sigY + 25} m 310 ${sigY + 25} l S\n`;
  stream += `BT\n`;
  stream += `/F1 10.5 Tf 0.12 0.13 0.15 rg\n`;
  stream += `175 ${sigY + 10} Td (Ramkumar Arun) Tj\n`;
  stream += `/F2 8.5 Tf 0.45 0.48 0.52 rg\n`;
  stream += `150 ${sigY - 4} Td (Organizer, GDG Cloud Toronto) Tj\n`;
  stream += `ET\n`;

  // Center Seal Text
  stream += `BT\n`;
  stream += `/F1 9 Tf 0.26 0.52 0.96 rg\n`;
  stream += `388 ${sigY + 16} Td (OFFICIAL CHAPTER) Tj\n`;
  stream += `/F2 8 Tf 0.40 0.43 0.48 rg\n`;
  stream += `378 ${sigY + 2} Td (Google Developer Groups) Tj\n`;
  stream += `/F2 7.5 Tf 0.50 0.53 0.58 rg\n`;
  stream += `392 ${sigY - 10} Td (Toronto, Canada) Tj\n`;
  stream += `ET\n`;

  // Signature 2: Chapter Coordinator
  stream += `0.4 0.4 0.4 RG 1 w 532 ${sigY + 25} m 702 ${sigY + 25} l S\n`;
  stream += `BT\n`;
  stream += `/F1 10.5 Tf 0.12 0.13 0.15 rg\n`;
  stream += `585 ${sigY + 10} Td (Vimal) Tj\n`;
  stream += `/F2 8.5 Tf 0.45 0.48 0.52 rg\n`;
  stream += `548 ${sigY - 4} Td (Co-organizer, GDG Cloud Toronto) Tj\n`;
  stream += `ET\n`;

  // Footer Disclaimer
  stream += `BT\n`;
  stream += `/F2 7.5 Tf 0.55 0.58 0.62 rg\n`;
  stream += `170 52 Td (GDG Cloud Toronto is an independent Google Developer Group chapter. Verification portal: gdgcloudtoronto.com) Tj\n`;
  stream += `ET\n`;

  // Assemble full PDF structure
  const streamLength = stream.length;

  const pdfParts = [
    `%PDF-1.4\n`,
    `%âãÏÓ\n`,
    `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`,
    `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`,
    `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${width} ${height}] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n`,
    `4 0 obj\n<< /Length ${streamLength} >>\nstream\n${stream}\nendstream\nendobj\n`,
    `5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>\nendobj\n`,
    `6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>\nendobj\n`,
  ];

  // Calculate xref table offsets
  let offset = 0;
  const offsets: number[] = [0];

  for (let i = 0; i < pdfParts.length; i++) {
    offset += pdfParts[i].length;
    offsets.push(offset);
  }

  const xrefOffset = offset;
  let xref = `xref\n0 7\n0000000000 65535 f \n`;
  for (let i = 0; i < 6; i++) {
    const padOffset = String(offsets[i]).padStart(10, '0');
    xref += `${padOffset} 00000 n \n`;
  }

  const trailer = `trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  const fullPdfString = pdfParts.join('') + xref + trailer;

  return new Blob([fullPdfString], { type: 'application/pdf' });
}

/**
 * Triggers an immediate browser download of the certificate as a .pdf file.
 */
export function downloadCertificatePdf(cert: VerifiedCertificate): void {
  const blob = generateCertificatePdfBlob(cert);
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  const cleanOrder = (cert.eventbriteOrderNumber || cert.ticketNumber || 'DevFest2026').replace(/[^a-zA-Z0-9_-]/g, '_');
  link.href = url;
  link.download = `DevFest2026-Certificate-${cleanOrder}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/**
 * Opens an elegant A4 landscape print dialog specifically formatted for PDF printing.
 */
export function printCertificate(cert: VerifiedCertificate): void {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    // Fallback to direct file download if popups are blocked
    downloadCertificatePdf(cert);
    return;
  }

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>DevFest 2026 Certificate - ${cert.participantName}</title>
  <style>
    @page {
      size: A4 landscape;
      margin: 0;
    }
    body {
      margin: 0;
      padding: 0;
      background: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .cert-container {
      width: 297mm;
      height: 210mm;
      box-sizing: border-box;
      padding: 12mm;
      position: relative;
      background: #FAFBFD;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .border-top { position: absolute; top: 0; left: 0; right: 0; height: 5mm; background: #4285F4; }
    .border-right { position: absolute; top: 0; bottom: 0; right: 0; width: 5mm; background: #EA4335; }
    .border-bottom { position: absolute; bottom: 0; left: 0; right: 0; height: 5mm; background: #34A853; }
    .border-left { position: absolute; top: 0; bottom: 0; left: 0; width: 5mm; background: #FBBC04; }
    .inner-border {
      border: 2px solid #E2E8F0;
      border-radius: 12px;
      padding: 10mm;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      background: #FFFFFF;
    }
    .header-dots {
      display: flex;
      justify-content: center;
      gap: 6px;
      margin-bottom: 4mm;
    }
    .dot { width: 8px; height: 8px; border-radius: 50%; }
    .dot-blue { background: #4285F4; }
    .dot-red { background: #EA4335; }
    .dot-yellow { background: #FBBC04; }
    .dot-green { background: #34A853; }
    .title-sub { font-size: 11pt; font-weight: 700; color: #1E293B; letter-spacing: 2px; }
    .title-main { font-size: 20pt; font-weight: 800; color: #1A73E8; margin: 2mm 0; }
    .divider { width: 60mm; height: 3px; background: #4285F4; margin: 2mm auto 4mm auto; }
    .presented-to { font-size: 10pt; color: #64748B; font-style: italic; }
    .name { font-size: 28pt; font-weight: 800; color: #0F172A; margin: 3mm 0; }
    .statement { font-size: 11pt; color: #334155; max-width: 180mm; margin: 0 auto; line-height: 1.4; }
    .event-title { font-size: 14pt; font-weight: 700; color: #0F172A; margin: 2mm 0; }
    .event-meta { font-size: 10pt; color: #64748B; }
    .verification-box {
      background: #F1F5F9;
      border: 1px solid #CBD5E1;
      border-radius: 8px;
      padding: 3mm 5mm;
      margin: 4mm auto;
      max-width: 200mm;
      text-align: left;
      font-family: monospace;
      font-size: 8.5pt;
      color: #334155;
    }
    .ver-badge { font-weight: 700; color: #059669; }
    .signatures {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 0 15mm;
      margin-top: 4mm;
    }
    .sig-col { text-align: center; }
    .sig-line { width: 45mm; border-top: 1px solid #94A3B8; margin-bottom: 2mm; }
    .sig-name { font-size: 9.5pt; font-weight: 700; color: #0F172A; }
    .sig-role { font-size: 7.5pt; color: #64748B; }
    .disclaimer { font-size: 7pt; color: #94A3B8; margin-top: 3mm; }
  </style>
</head>
<body>
  <div class="cert-container">
    <div class="border-top"></div>
    <div class="border-right"></div>
    <div class="border-bottom"></div>
    <div class="border-left"></div>
    <div class="inner-border">
      <div>
        <div class="header-dots">
          <div class="dot dot-blue"></div>
          <div class="dot dot-red"></div>
          <div class="dot dot-yellow"></div>
          <div class="dot dot-green"></div>
        </div>
        <div class="title-sub">GOOGLE DEVELOPER GROUP CLOUD TORONTO</div>
        <div class="title-main">${
          cert.recipientType === 'VOLUNTEER' 
            ? 'CERTIFICATE OF VOLUNTEER EXCELLENCE & LEADERSHIP' 
            : cert.recipientType === 'WORKSHOP'
              ? 'CERTIFICATE OF HANDS-ON WORKSHOP EXCELLENCE'
              : 'CERTIFICATE OF CONFERENCE PARTICIPATION'
        }</div>
        <div class="divider"></div>
        <div class="presented-to">This is proudly presented to</div>
        <div class="name">${cert.participantName}</div>
        <div class="statement">
          ${cert.recipientType === 'VOLUNTEER' 
            ? 'in recognition of exceptional volunteer leadership, selfless dedication, and outstanding community service at' 
            : cert.recipientType === 'WORKSHOP'
              ? 'has successfully completed intensive hands-on technical workshop code labs and architectural implementations at'
              : 'has actively attended and participated in premier keynote sessions, technical talks, and developer tracks at'}
        </div>
        <div class="event-title">${cert.event}</div>
        <div class="event-meta">Held on ${cert.issueDate} at ${cert.venue || 'Toronto Pavilion, Toronto, Canada'}</div>
      </div>

      <div class="verification-box">
        <div class="ver-badge">${
          cert.recipientType === 'VOLUNTEER' 
            ? '[OFFICIAL GDG CLOUD TORONTO VOLUNTEER LEADERSHIP CREDENTIAL]' 
            : cert.recipientType === 'WORKSHOP'
              ? '[VERIFIED HANDS-ON WORKSHOP PRACTITIONER CREDENTIAL]'
              : '[VERIFIED CONFERENCE PARTICIPANT VIA EVENTBRITE INTEGRATION]'
        }</div>
        <div>${cert.recipientType === 'VOLUNTEER' 
          ? `Volunteer Role: <strong>${cert.volunteerRole || 'Community Operations & DevFest Crew'}</strong> &nbsp;|&nbsp; Badge: <strong>${cert.volunteerBadge || 'Volunteer Champion'}</strong> &nbsp;|&nbsp; Hours: <strong>${cert.hoursContributed || 35}+</strong>` 
          : cert.recipientType === 'WORKSHOP'
            ? `Completed Lab: <strong>${cert.selectedWorkshop || cert.workshopsCompleted?.[0] || 'Hands-on Technical Code Lab'}</strong> &nbsp;|&nbsp; Attendee: <strong>${cert.email}</strong> &nbsp;|&nbsp; Order #: <strong>${cert.eventbriteOrderNumber || cert.ticketNumber}</strong>`
            : `Attendee Email: <strong>${cert.email}</strong> &nbsp;|&nbsp; Eventbrite Order #: <strong>${cert.eventbriteOrderNumber || cert.ticketNumber}</strong>`}</div>
        <div>Credential Identifier: <strong>${cert.credentialId}</strong> &nbsp;|&nbsp; Eventbrite Event: <strong>2004248355785</strong></div>
        <div>Provenance Hash: <code>${cert.verificationHash}</code></div>
      </div>

      <div>
        <div class="signatures">
          <div class="sig-col">
            <div class="sig-line"></div>
            <div class="sig-name">Ramkumar Arun</div>
            <div class="sig-role">Organizer, GDG Cloud Toronto</div>
          </div>
          <div class="sig-col">
            <div style="font-weight: 700; color: #1A73E8; font-size: 9pt;">GDG CLOUD TORONTO</div>
            <div style="font-size: 7.5pt; color: #64748B;">Official Developer Group</div>
          </div>
          <div class="sig-col">
            <div class="sig-line"></div>
            <div class="sig-name">Vimal</div>
            <div class="sig-role">Co-organizer, GDG Cloud Toronto</div>
          </div>
        </div>
        <div class="disclaimer">
          GDG Cloud Toronto is an official, independent Google Developer Group. Verify authenticity at gdgcloudtoronto.com/certificate
        </div>
      </div>
    </div>
  </div>
  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 500);
    };
  </script>
</body>
</html>`;

  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
}
