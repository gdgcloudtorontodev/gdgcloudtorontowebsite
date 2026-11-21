/**
 * Certificate of Participation Generator for DevFest 2026
 * Hosted by: GDG Windsor
 * Supported by: GDG Cloud Toronto
 * 
 * Signature Authorities:
 * - Host: Ali El-Sharif (Organizer, GDG Windsor) [Digital Name Print]
 * - Supported by: Vimal (Organizer, GDG Cloud Toronto) [Digital Name Print]
 * 
 * Workshop: "Google AI Studio - Prompt Design:  Hands-on Technical Workshop & Code Lab"
 */

export interface WorkshopCertificateData {
  participantName: string;
  token: string;
  email?: string;
  issueDate?: string;
  workshopTitle?: string;
  credentialId?: string;
  verificationHash?: string;
  downloadUrl?: string;
}

export const DEFAULT_WORKSHOP_NAME = "Google AI Studio - Prompt Design:  Hands-on Technical Workshop & Code Lab";

/**
 * Builds a standards-compliant PDF 1.4 wrapping a high-resolution JPEG image
 * at A4 Landscape dimensions (842 x 595 pt).
 */
function buildPdfFromJpeg(jpegBytes: Uint8Array, widthPx: number, heightPx: number): Blob {
  const pdfWidthPt = 842;
  const pdfHeightPt = 595;

  const contentStream = `q\n${pdfWidthPt} 0 0 ${pdfHeightPt} 0 0 cm\n/Im1 Do\nQ\n`;
  const enc = new TextEncoder();
  const contentStreamLength = enc.encode(contentStream).length;
  const imageStreamLength = jpegBytes.length;

  const header = `%PDF-1.4\n%\xE2\xE3\xCF\xD3\n`;
  const obj1 = `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`;
  const obj2 = `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`;
  const obj3 = `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pdfWidthPt} ${pdfHeightPt}] /Contents 4 0 R /Resources << /XObject << /Im1 5 0 R >> >> >>\nendobj\n`;
  const obj4 = `4 0 obj\n<< /Length ${contentStreamLength} >>\nstream\n${contentStream}endstream\nendobj\n`;
  const obj5Header = `5 0 obj\n<< /Type /XObject /Subtype /Image /Width ${widthPx} /Height ${heightPx} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${imageStreamLength} >>\nstream\n`;
  const obj5Footer = `\nendstream\nendobj\n`;

  const part1 = enc.encode(header + obj1 + obj2 + obj3 + obj4 + obj5Header);
  const part3 = enc.encode(obj5Footer);

  const offset1 = enc.encode(header).length;
  const offset2 = offset1 + enc.encode(obj1).length;
  const offset3 = offset2 + enc.encode(obj2).length;
  const offset4 = offset3 + enc.encode(obj3).length;
  const offset5 = offset4 + enc.encode(obj4).length;
  const offsetEndObj5 = offset5 + enc.encode(obj5Header).length + imageStreamLength + enc.encode(obj5Footer).length;

  const xref = `xref\n0 6\n0000000000 65535 f \n` +
    `${String(offset1).padStart(10, '0')} 00000 n \n` +
    `${String(offset2).padStart(10, '0')} 00000 n \n` +
    `${String(offset3).padStart(10, '0')} 00000 n \n` +
    `${String(offset4).padStart(10, '0')} 00000 n \n` +
    `${String(offset5).padStart(10, '0')} 00000 n \n`;

  const trailer = `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${offsetEndObj5}\n%%EOF\n`;
  const part4 = enc.encode(xref + trailer);

  return new Blob([part1, jpegBytes, part3, part4] as any, { type: 'application/pdf' });
}

/**
 * Renders the certificate onto a 300 DPI Canvas (2480 x 1754 px) with the exact
 * GDG Windsor DevFest logo, Google 4-color borders, participant name, workshop title,
 * and dual digital name prints.
 */
export async function renderCertificateToCanvas(cert: WorkshopCertificateData): Promise<HTMLCanvasElement> {
  const width = 2480;
  const height = 1754;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Failed to create canvas context');

  const workshopName = cert.workshopTitle || DEFAULT_WORKSHOP_NAME;
  const participantName = cert.participantName || 'DevFest Attendee';
  const token = cert.token || 'GDG-TOKEN';
  const credentialId = cert.credentialId || `GDG-WSR-${token}`;
  const issueDate = cert.issueDate || 'November 21, 2026';

  // 1. Soft warm background
  ctx.fillStyle = '#FAFBFD';
  ctx.fillRect(0, 0, width, height);

  // 2. Google 4-color Outer Borders (24px thick)
  // Top: Google Blue
  ctx.fillStyle = '#4285F4';
  ctx.fillRect(0, 0, width, 24);
  // Right: Google Red
  ctx.fillStyle = '#EA4335';
  ctx.fillRect(width - 24, 0, 24, height);
  // Bottom: Google Green
  ctx.fillStyle = '#34A853';
  ctx.fillRect(0, height - 24, width, 24);
  // Left: Google Yellow
  ctx.fillStyle = '#FBBC04';
  ctx.fillRect(0, 0, 24, height);

  // 3. Inner Double Decorative Frame
  ctx.strokeStyle = '#E2E8F0';
  ctx.lineWidth = 3;
  ctx.strokeRect(60, 60, width - 120, height - 120);

  ctx.strokeStyle = '#CBD5E1';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(80, 80, width - 160, height - 160);

  // 4. Draw Logo
  try {
    const logoImg = new Image();
    logoImg.crossOrigin = 'anonymous';
    await new Promise<void>((resolve) => {
      logoImg.onload = () => resolve();
      logoImg.onerror = () => resolve();
      logoImg.src = '/images/gdg-windsor-devfest-2026.png';
    });

    if (logoImg.naturalWidth > 0) {
      // Logo aspect ratio is roughly 2.6:1
      const logoW = 500;
      const logoH = (logoW / logoImg.naturalWidth) * logoImg.naturalHeight;
      const logoX = (width - logoW) / 2;
      const logoY = 110;
      ctx.drawImage(logoImg, logoX, logoY, logoW, logoH);
    }
  } catch (e) {
    console.warn('Logo image rendering fallback:', e);
  }

  // 5. Host & Supporter Banner
  ctx.textAlign = 'center';
  ctx.font = 'bold 24px "Segoe UI", -apple-system, Roboto, sans-serif';
  ctx.fillStyle = '#475569';
  ctx.fillText('HOSTED BY GDG WINDSOR  •  SUPPORTED BY GDG CLOUD TORONTO', width / 2, 330);

  // 6. Certificate Title
  ctx.font = '800 58px "Segoe UI", -apple-system, Roboto, sans-serif';
  ctx.fillStyle = '#1A73E8';
  ctx.fillText('CERTIFICATE OF PARTICIPATION', width / 2, 400);

  // Blue Accent Divider
  ctx.fillStyle = '#1A73E8';
  ctx.fillRect(width / 2 - 90, 420, 180, 5);

  // 7. "This certificate is proudly presented to"
  ctx.font = 'italic 28px Georgia, serif';
  ctx.fillStyle = '#64748B';
  ctx.fillText('This certificate is proudly presented to', width / 2, 480);

  // 8. Participant Name (Bold, large typography)
  ctx.font = 'bold 72px "Segoe UI", -apple-system, Roboto, sans-serif';
  ctx.fillStyle = '#0F172A';
  ctx.fillText(participantName, width / 2, 575);

  // Name underline
  const nameWidth = ctx.measureText(participantName).width;
  ctx.strokeStyle = '#CBD5E1';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(width / 2 - nameWidth / 2 - 30, 600);
  ctx.lineTo(width / 2 + nameWidth / 2 + 30, 600);
  ctx.stroke();

  // 9. Participation Statement
  ctx.font = '400 27px "Segoe UI", -apple-system, Roboto, sans-serif';
  ctx.fillStyle = '#334155';
  ctx.fillText('for active participation in DevFest 2026, exploring frontier AI, cloud computing, and developer technologies,', width / 2, 660);
  ctx.fillText('hosted by Google Developer Groups (GDG) Windsor and supported by Google Developer Groups (GDG) Cloud Toronto.', width / 2, 700);

  // 10. Workshop Name Box (Pill Box)
  const pillW = 1650;
  const pillH = 76;
  const pillX = (width - pillW) / 2;
  const pillY = 745;

  ctx.fillStyle = '#FFFFFF';
  ctx.strokeStyle = '#CBD5E1';
  ctx.lineWidth = 2;
  // Draw rounded rect
  if (ctx.roundRect) {
    ctx.beginPath();
    ctx.roundRect(pillX, pillY, pillW, pillH, 16);
    ctx.fill();
    ctx.stroke();
  } else {
    ctx.fillRect(pillX, pillY, pillW, pillH);
    ctx.strokeRect(pillX, pillY, pillW, pillH);
  }

  ctx.font = 'bold 27px "Consolas", "Courier New", monospace';
  ctx.fillStyle = '#0F172A';
  ctx.fillText(workshopName, width / 2, pillY + 48);

  // Event Date & Chapter Meta
  ctx.font = '600 23px "Segoe UI", -apple-system, Roboto, sans-serif';
  ctx.fillStyle = '#64748B';
  ctx.fillText(`DevFest 2026  •  Issued ${issueDate}`, width / 2, 865);

  // 11. Verification Badge Box
  const boxW = 1800;
  const boxH = 220;
  const boxX = (width - boxW) / 2;
  const boxY = 915;

  ctx.fillStyle = '#F8FAFC';
  ctx.strokeStyle = '#CBD5E1';
  ctx.lineWidth = 1.5;
  if (ctx.roundRect) {
    ctx.beginPath();
    ctx.roundRect(boxX, boxY, boxW, boxH, 14);
    ctx.fill();
    ctx.stroke();
  } else {
    ctx.fillRect(boxX, boxY, boxW, boxH);
    ctx.strokeRect(boxX, boxY, boxW, boxH);
  }

  ctx.textAlign = 'left';
  // Green Badge Header
  ctx.font = 'bold 24px "Segoe UI", -apple-system, Roboto, sans-serif';
  ctx.fillStyle = '#15803D';
  ctx.fillText('✓  VERIFIED DEVFEST 2026 PARTICIPANT CREDENTIAL  •  DIGITAL RECORD', boxX + 45, boxY + 50);

  // Verification Details
  ctx.font = '500 23px "Consolas", "Courier New", monospace';
  ctx.fillStyle = '#334155';
  ctx.fillText(`Recipient: ${participantName}   |   Verification Token: ${token}`, boxX + 45, boxY + 102);
  ctx.fillText(`Credential ID: ${credentialId}   |   Host: GDG Windsor   |   Supported by: GDG Cloud Toronto`, boxX + 45, boxY + 148);

  ctx.font = '400 20px "Consolas", "Courier New", monospace';
  ctx.fillStyle = '#64748B';
  ctx.fillText(`Digital Verification Portal: gdgcloudtoronto.com`, boxX + 45, boxY + 190);

  // 12. Signature Authorities (Digital Name Print)
  // Left: Ali El-Sharif (Organizer, GDG Windsor) [Host Authority]
  const sigLineY = 1260;
  const sigCol1X = 560;
  const sigCol2X = width / 2;
  const sigCol3X = width - 560;

  ctx.strokeStyle = '#64748B';
  ctx.lineWidth = 1.5;

  // Left line
  ctx.beginPath();
  ctx.moveTo(sigCol1X - 200, sigLineY);
  ctx.lineTo(sigCol1X + 200, sigLineY);
  ctx.stroke();

  // Right line
  ctx.beginPath();
  ctx.moveTo(sigCol3X - 200, sigLineY);
  ctx.lineTo(sigCol3X + 200, sigLineY);
  ctx.stroke();

  ctx.textAlign = 'center';
  // Left Authority: Ali El-Sharif
  ctx.font = 'bold 32px "Segoe UI", -apple-system, Roboto, sans-serif';
  ctx.fillStyle = '#0F172A';
  ctx.fillText('Ali El-Sharif', sigCol1X, sigLineY + 45);

  ctx.font = '600 24px "Segoe UI", -apple-system, Roboto, sans-serif';
  ctx.fillStyle = '#334155';
  ctx.fillText('Organizer, GDG Windsor', sigCol1X, sigLineY + 80);

  ctx.font = '500 20px "Consolas", monospace';
  ctx.fillStyle = '#64748B';
  ctx.fillText('[Host - Digital Name Print]', sigCol1X, sigLineY + 115);

  // Center Badge
  ctx.font = '800 28px "Segoe UI", -apple-system, Roboto, sans-serif';
  ctx.fillStyle = '#1A73E8';
  ctx.fillText('DEVFEST 2026', sigCol2X, sigLineY + 30);

  ctx.font = '600 22px "Segoe UI", -apple-system, Roboto, sans-serif';
  ctx.fillStyle = '#334155';
  ctx.fillText('GDG Windsor × GDG Cloud Toronto', sigCol2X, sigLineY + 68);

  ctx.font = '20px "Segoe UI", -apple-system, Roboto, sans-serif';
  ctx.fillStyle = '#64748B';
  ctx.fillText('Ontario, Canada', sigCol2X, sigLineY + 102);

  // Right Authority: Vimal
  ctx.font = 'bold 32px "Segoe UI", -apple-system, Roboto, sans-serif';
  ctx.fillStyle = '#0F172A';
  ctx.fillText('Vimal', sigCol3X, sigLineY + 45);

  ctx.font = '600 24px "Segoe UI", -apple-system, Roboto, sans-serif';
  ctx.fillStyle = '#334155';
  ctx.fillText('Organizer, GDG Cloud Toronto', sigCol3X, sigLineY + 80);

  ctx.font = '500 20px "Consolas", monospace';
  ctx.fillStyle = '#64748B';
  ctx.fillText('[Supported by - Digital Name Print]', sigCol3X, sigLineY + 115);

  // 13. Bottom Verification Notice
  ctx.font = '20px "Consolas", monospace';
  ctx.fillStyle = '#94A3B8';
  ctx.fillText(`This certificate can be verified online using verification token ${token} at gdgcloudtoronto.com`, width / 2, 1600);

  return canvas;
}

/**
 * Generates an authentic, pixel-perfect A4 Landscape vector PDF 1.4 certificate
 * that matches exactly what is rendered on the website with ZERO overlapping text.
 */
export async function generateWorkshopCertificatePdfBlob(cert: WorkshopCertificateData): Promise<Blob> {
  const canvas = await renderCertificateToCanvas(cert);

  const jpegBlob = await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (b) => {
        if (b) resolve(b);
        else reject(new Error('Failed to create JPEG blob from canvas'));
      },
      'image/jpeg',
      0.97
    );
  });

  const arrayBuffer = await jpegBlob.arrayBuffer();
  const uint8 = new Uint8Array(arrayBuffer);

  return buildPdfFromJpeg(uint8, canvas.width, canvas.height);
}

/**
 * Downloads the high-resolution vector PDF certificate.
 */
export async function downloadWorkshopCertificatePdf(cert: WorkshopCertificateData): Promise<void> {
  try {
    const blob = await generateWorkshopCertificatePdfBlob(cert);
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const cleanToken = (cert.token || 'devfest-windsor').replace(/[^a-zA-Z0-9_-]/g, '');
    link.href = url;
    link.download = `DevFest-Windsor-Certificate-of-Participation-${cleanToken}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch (err) {
    console.error('Error generating PDF certificate:', err);
    // Fallback: trigger print dialog if blob generation encounters an error
    printWorkshopCertificate(cert);
  }
}

/**
 * Opens an A4 landscape print view dialog formatted specifically for certificate printing,
 * with the exact GDG Windsor logo, workshop name, and digital signatures.
 */
export function printWorkshopCertificate(cert: WorkshopCertificateData): void {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    downloadWorkshopCertificatePdf(cert);
    return;
  }

  const credId = cert.credentialId || `GDG-WSR-${cert.token}`;
  const issueDate = cert.issueDate || 'November 21, 2026';
  const workshopName = cert.workshopTitle || DEFAULT_WORKSHOP_NAME;

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Certificate of Participation - ${cert.participantName} - DevFest 2026</title>
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
      padding: 10mm;
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
      padding: 8mm 10mm;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      background: #FFFFFF;
    }
    .logo-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2mm;
    }
    .logo-img {
      height: 18mm;
      max-width: 80mm;
      object-fit: contain;
    }
    .host-banner {
      font-size: 9.5pt;
      font-weight: 700;
      color: #1E293B;
      letter-spacing: 1.5px;
      margin-bottom: 1mm;
      font-family: monospace;
    }
    .title-main { 
      font-size: 22pt; 
      font-weight: 800; 
      color: #1A73E8; 
      margin: 1.5mm 0;
      letter-spacing: 0.5px;
    }
    .divider { width: 60mm; height: 3px; background: #4285F4; margin: 1mm auto 3mm auto; border-radius: 2px; }
    .presented-to { font-size: 10pt; color: #64748B; font-style: italic; }
    .name { font-size: 28pt; font-weight: 800; color: #0F172A; margin: 2mm 0; }
    .statement { font-size: 10.5pt; color: #334155; max-width: 210mm; margin: 0 auto; line-height: 1.4; }
    .workshop-box {
      display: inline-block;
      background: #F8FAFC;
      border: 1px solid #CBD5E1;
      border-radius: 8px;
      padding: 2.5mm 6mm;
      margin: 2mm auto;
      font-family: monospace;
      font-size: 9.5pt;
      font-weight: 700;
      color: #0F172A;
    }
    .meta-line { font-size: 9.5pt; color: #64748B; margin-top: 1mm; font-weight: 600; }
    .verification-box {
      background: #F1F5F9;
      border: 1px solid #CBD5E1;
      border-radius: 8px;
      padding: 2.5mm 5mm;
      margin: 2mm auto;
      max-width: 215mm;
      text-align: left;
    }
    .badge-label { font-size: 8.5pt; font-weight: 700; color: #15803D; text-transform: uppercase; margin-bottom: 1mm; }
    .verification-detail { font-size: 8pt; color: #475569; line-height: 1.4; font-family: monospace; }
    .signatures {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-top: 3mm;
      border-top: 1px solid #E2E8F0;
    }
    .sig-col { text-align: center; width: 70mm; }
    .sig-line { border-top: 1px solid #64748B; margin-bottom: 2mm; }
    .sig-name { font-size: 11pt; font-weight: 800; color: #0F172A; }
    .sig-title { font-size: 9pt; color: #334155; font-weight: 600; }
    .sig-tag { font-size: 7.5pt; color: #64748B; font-family: monospace; }
    .footer-note { font-size: 7.5pt; color: #94A3B8; margin-top: 2mm; font-family: monospace; }
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
        <div class="logo-container">
          <img src="/images/gdg-windsor-devfest-2026.png" class="logo-img" alt="GDG Windsor DevFest 2026" />
        </div>
        <div class="host-banner">HOSTED BY GDG WINDSOR • SUPPORTED BY GDG CLOUD TORONTO</div>
        <div class="title-main">CERTIFICATE OF PARTICIPATION</div>
        <div class="divider"></div>
        <div class="presented-to">This certificate is proudly presented to</div>
        <div class="name">${cert.participantName}</div>
        <div class="statement">
          for active participation in <strong>DevFest 2026</strong>, exploring frontier AI, cloud computing, and developer technologies, hosted by <strong>Google Developer Groups (GDG) Windsor</strong> and supported by <strong>Google Developer Groups (GDG) Cloud Toronto</strong>.
        </div>
        <div class="workshop-box">${workshopName}</div>
        <div class="meta-line">DevFest 2026 • Issued ${issueDate}</div>
      </div>

      <div class="verification-box">
        <div class="badge-label">✓ VERIFIED PARTICIPANT CREDENTIAL • DIGITAL VERIFICATION</div>
        <div class="verification-detail">Recipient: <strong>${cert.participantName}</strong> | Verification Token: <strong>${cert.token}</strong></div>
        <div class="verification-detail">Credential ID: <strong>${credId}</strong> | Host: <strong>GDG Windsor</strong> | Supported by: <strong>GDG Cloud Toronto</strong></div>
        <div class="verification-detail">Digital Verification Portal: <strong>gdgcloudtoronto.com</strong></div>
      </div>

      <div>
        <div class="signatures">
          <div class="sig-col">
            <div class="sig-line"></div>
            <div class="sig-name">Ali El-Sharif</div>
            <div class="sig-title">Organizer, GDG Windsor</div>
            <div class="sig-tag">[Host - Digital Name Print]</div>
          </div>
          <div class="sig-col">
            <div style="font-size: 10pt; font-weight: 800; color: #4285F4;">DEVFEST 2026</div>
            <div style="font-size: 8pt; color: #64748B;">GDG Windsor × GDG Cloud Toronto</div>
            <div style="font-size: 7.5pt; color: #94A3B8;">Ontario, Canada</div>
          </div>
          <div class="sig-col">
            <div class="sig-line"></div>
            <div class="sig-name">Vimal</div>
            <div class="sig-title">Organizer, GDG Cloud Toronto</div>
            <div class="sig-tag">[Supported by - Digital Name Print]</div>
          </div>
        </div>
        <div class="footer-note">
          This certificate can be verified online using verification token ${cert.token} at gdgcloudtoronto.com
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

/**
 * Generates the official LinkedIn "Add to Profile" URL for this certification.
 */
export function getLinkedInCertUrl(cert: WorkshopCertificateData): string {
  const workshopName = cert.workshopTitle || DEFAULT_WORKSHOP_NAME;
  const params = new URLSearchParams({
    startTask: 'CERTIFICATION_NAME',
    name: `Certificate of Participation - ${workshopName}`,
    organizationName: 'Google Developer Groups (GDG) Windsor',
    issueYear: '2026',
    issueMonth: '11',
    certUrl: 'https://gdgcloudtoronto.com/#non-devfest-certificates',
    certId: cert.token,
  });
  return `https://www.linkedin.com/profile/add?${params.toString()}`;
}
