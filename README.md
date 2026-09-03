# The Redstone Guest House website

Plain HTML, CSS and vanilla JavaScript. No build step, no framework, no Node
dependency. Open any .html file directly in a browser, or drop the whole
folder onto any static host (GitHub Pages, Fasthosts, Netlify, etc).

## Structure

```
redstone/
├── index.html        Home (hero slideshow, features, testimonials)
├── about.html         About Us
├── rooms.html          Rooms & Suites (3 room cards, amenities)
├── gallery.html          Gallery (filterable photo grid with lightbox)
├── contact.html            Contact (form, transport info)
├── terms.html                Terms & Conditions (accordion)
├── privacy.html                 Privacy Policy (accordion)
├── css/style.css                  All site styles. CSS variables at the top.
├── js/main.js                      All site behaviour: nav, mobile menu,
│                                    hero slideshow, reveal-on-scroll,
│                                    accordions, gallery, contact form
│                                    validation.
├── js/gallery-data.js               The 52-photo gallery index. Add or
│                                     remove entries here to update the
│                                     gallery.
└── assets/
    ├── fonts/    GeistSans, GeistMono, Playfair Display (self-hosted)
    └── images/   Site photography, including images/gallery/ (thumb and
                  full-size pairs)
```

## Editing content

Each page's copy lives directly in its own .html file as plain text. No
templating, no build step. The nav and footer are duplicated across all 7
pages on purpose, to keep things simple. If you rename a page or change a
link, update it in all 7.

## Contact form (Resend, via Vercel)

The form in contact.html sends to a serverless function at api/send-email.js,
which emails redstoneblkp@gmail.com through Resend. To activate it:

1. In the Vercel dashboard: Project > Settings > Environment Variables.
   Add a variable named RESEND_API_KEY set to your real Resend API key.
   Do this in the Vercel dashboard only. Never put the key in any file in
   this repo, it would be visible to anyone who views the GitHub repo or
   the page source.
2. Push this project to GitHub as normal. Vercel auto-detects any file
   under /api as a serverless function, no extra config needed.
3. In Resend, verify a domain you own (e.g. redstoneguesthouse.co.uk) under
   Domains. Once verified, open api/send-email.js and change FROM_ADDRESS
   to an address on that domain, e.g.
   "The Redstone <bookings@redstoneguesthouse.co.uk>".
   Until a domain is verified, Resend only allows sending from
   onboarding@resend.dev, which is what the file uses by default so the
   form works immediately after step 1, before any domain is set up.
4. Redeploy (pushing to GitHub triggers this automatically on Vercel).
   Submit the contact form to confirm an email arrives.

## Favicon

assets/images/favicon.ico, favicon-32.png and apple-touch-icon.png were
generated from a crop of the guest house's own front entrance photo
(the orange sandstone bay window), referenced from every page's <head>.

## Known substitutions

Nine photos on the live site are hosted on Vercel's storage and could not be
downloaded during this rebuild due to a network restriction. Local
equivalents from your own photo library were used in their place everywhere
except the About page's "Four in a Bed" trophy photo, where a placeholder
stand-in was used since no local equivalent exists. Swap in the real photo
when you have it, saved at assets/images/about-feature.jpg.
