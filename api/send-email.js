// Vercel Serverless Function.
// Runs on Vercel's servers, never in the visitor's browser, so the Resend
// API key stays private. Deployed automatically because it lives in /api.
//
// SETUP (one-time):
// 1. In the Vercel dashboard: Project -> Settings -> Environment Variables
//    Add: RESEND_API_KEY = <your real Resend API key>
//    Do NOT put the key in this file or anywhere in the GitHub repo.
// 2. In Resend: verify a domain you own (e.g. redstoneguesthouse.co.uk) under
//    Domains, then update FROM_ADDRESS below to an address on that domain,
//    e.g. "The Redstone <bookings@redstoneguesthouse.co.uk>".
//    Until a domain is verified, Resend only allows sending from
//    "onboarding@resend.dev", which is what this file uses by default so it
//    works immediately. Emails will still arrive at TO_ADDRESS either way.
// 3. Push to GitHub. Vercel redeploys automatically, and the form will send.

const FROM_ADDRESS = 'The Redstone Website <onboarding@resend.dev>';
const TO_ADDRESS = 'redstoneblkp@gmail.com';

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [TO_ADDRESS],
        reply_to: email,
        subject: `New enquiry from ${name} - redstoneguesthouse.co.uk`,
        text:
          `New contact form submission from redstoneguesthouse.co.uk\n\n` +
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Phone: ${phone || 'Not provided'}\n\n` +
          `Message:\n${message}`,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      console.error('Resend API error:', errText);
      return res.status(502).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Server error sending contact email:', err);
    return res.status(500).json({ error: 'Server error' });
  }
};
