# NEXORA — Event & Conference Landing Page

> A premium, responsive event and conference landing page template built with semantic HTML5, modern CSS3, and Vanilla JavaScript.

NEXORA is a zero-framework conference/event template designed for conferences, summits, creative events, tech gatherings, workshops, and other high-impact event websites.

**Live demo:** https://dev-muhadz.github.io/nexora-event-conference-template/

---

## Features

- Responsive event hero with countdown
- Three-day interactive agenda
- Keyboard-accessible schedule tabs
- Speaker grid with accessible biography modal
- Virtual, Standard, and VIP ticket sections
- Venue and travel section with map placeholder
- Mobile navigation with keyboard/Escape/outside-click handling
- Newsletter demo interaction
- Responsive layout from 320px to large desktop displays
- CSS custom properties for fast rebranding
- Semantic HTML structure
- Skip link and accessible interactive controls
- SEO-ready title, description, canonical URL, Open Graph, Twitter metadata, favicon, and theme color
- GitHub Pages deployment foundation with robots.txt, sitemap.xml, and branded 404.html
- No Bootstrap, Tailwind, or JavaScript framework required

---

## Tech Stack

- **HTML5** — semantic page structure and content
- **CSS3** — layout, responsive design, custom properties, and visual system
- **Vanilla JavaScript (ES6+)** — countdown, tabs, speaker modal, navigation, and newsletter demo
- **Google Fonts** — Manrope and DM Mono

No build step or package manager is required.

---

## Project Structure

    nexora-event-conference-template/
    ├── index.html
    ├── 404.html
    ├── robots.txt
    ├── sitemap.xml
    ├── favicon.svg
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── app.js
    ├── assets/
    │   └── README.txt
    └── README.md

---

## Getting Started

NEXORA is a static website, so you can run it without installing dependencies.

### Option 1 — Open directly

Open index.html in a modern browser.

### Option 2 — Use a local development server

Serve the project directory with any simple static-file server and open the local address in your browser.

There is no npm install, build command, or framework setup required.

---

## Customization

### 1. Rebrand the colors

Open css/styles.css and edit the variables near the top:

    :root {
      --ink: #11110f;
      --paper: #f0eee7;
      --muted: #77766f;
      --line: #d5d2c8;
      --acid: #d6ff38;
      --orange: #ff6b35;
      --violet: #6d58ff;
    }

These variables control the main visual palette.

### 2. Change the event name and content

Most visible event copy lives in index.html. Update:

- Event name
- Date and location
- Hero copy
- Event statistics
- Sponsor names
- Agenda sessions
- Speaker names and roles
- Ticket names and prices
- Venue information
- Footer text

### 3. Change the countdown

Open js/app.js and update:

    const target = new Date("2027-10-14T09:00:00-05:00").getTime();

Use an ISO date with the correct timezone for the real event.

Example:

    const target = new Date("2028-05-20T10:00:00+01:00").getTime();

### 4. Customize the schedule

The schedule uses matching data-day and data-panel values.

    <button
      data-day="4"
      role="tab"
      aria-controls="day-4-panel">
      DAY 04
    </button>

    <div
      id="day-4-panel"
      class="schedule"
      role="tabpanel"
      data-panel="4">
      ...
    </div>

Copy an existing session block to add more sessions, then update the time, category, title, description, and room.

### 5. Add speakers

Speaker cards use a unique data-speaker value:

    <button type="button" data-speaker="new-speaker">
      ...
    </button>

Add the matching speaker object in js/app.js:

    newSpeaker: [
      "Speaker Name",
      "Role, Company",
      "Short speaker biography."
    ]

The existing modal will populate the speaker information automatically.

### 6. Update tickets

Edit the ticket cards in index.html to change:

- Pass names
- Prices
- Features
- Checkout labels
- Links

**Important:** the current ticket links are demo anchors. Replace them with your real checkout/payment destination before production use.

### 7. Update venue information

Replace the demo venue address and travel notes in index.html.

The map is intentionally a visual placeholder. Connect it to your chosen map provider or embed when deploying a real event.

---

## JavaScript

The main interactions are contained in js/app.js:

- Countdown timer
- Agenda tabs
- Keyboard navigation for tabs
- Speaker data and modal
- Modal focus management and focus trapping
- Escape/outside-click dismissal
- Mobile navigation
- Mobile navigation focus handling
- Body scroll locking
- Demo newsletter confirmation

The code is intentionally framework-free and organized into small functions so individual features can be customized without introducing a build system.

---

## Accessibility

NEXORA includes several accessibility foundations:

- Skip-to-content link
- Semantic headings and landmarks
- Labels for interactive controls
- ARIA tab/list relationships for the schedule
- Keyboard support for schedule tabs
- aria-hidden state for the speaker modal
- Modal focus management and focus trapping
- Escape-key dismissal
- Focus restoration after closing the modal
- Mobile navigation Escape handling
- Visible keyboard focus styles where supported by the browser

Accessibility should still be tested against the final customized content, links, colors, and real-world usage before production.

---

## SEO and Deployment

The template includes:

- Descriptive page title
- Meta description
- Robots directive
- Canonical URL
- Open Graph metadata
- Twitter card metadata
- Theme color
- SVG favicon
- robots.txt
- sitemap.xml
- Branded 404.html

If you deploy somewhere other than the included GitHub Pages URL, update the canonical and og:url values in index.html, and update sitemap.xml and robots.txt to match the final public URL.

For GitHub Pages, make sure the repository is configured to publish the intended main branch/source. GitHub recommends a README as the primary place to explain what a repository does, how to get started, and how to use it. GitHub's repository README guidance

---

## Production Handoff Checklist

Before launching a customized NEXORA site:

- [ ] Replace all demo event details
- [ ] Replace demo speaker names, roles, and biographies
- [ ] Replace sponsor names/logos
- [ ] Replace ticket prices and features
- [ ] Connect every ticket CTA to a real destination
- [ ] Replace the map placeholder
- [ ] Replace demo directions/travel information
- [ ] Replace speaker/profile links
- [ ] Connect the newsletter form to a real service/backend
- [ ] Add properly licensed speaker/event imagery if needed
- [ ] Update canonical URL
- [ ] Update og:url
- [ ] Update sitemap.xml
- [ ] Update robots.txt
- [ ] Test all navigation and interactive controls
- [ ] Test keyboard navigation
- [ ] Test mobile layouts
- [ ] Test the final deployment URL
- [ ] Run a final accessibility and SEO check

---

## Browser Support

NEXORA is intended for current versions of modern browsers that support standard HTML5, CSS3, and modern JavaScript.

Always test the final customized version on the browsers and devices your audience uses.

---

## License & Usage

This repository contains a frontend template prepared for customization and presentation.

Before distributing, reselling, or using the template in a commercial marketplace, make sure your final license and usage terms clearly state:

- What buyers are allowed to use
- Whether multiple projects are allowed
- Whether redistribution of the original source is allowed
- Whether resale as an unchanged template is allowed
- Whether attribution is required
- What support is included

Use a dedicated license file once the final commercial licensing terms for the collection have been decided.

---

## Support

For repository-specific support, open an issue in the GitHub repository.

For customization work, use the comments in index.html, css/styles.css, and js/app.js as the primary map of where the template's main systems live.

---

## Marketplace Notes

For the buyer-facing customization workflow, demo-content replacement checklist, production handoff guidance, and marketplace preparation notes, see:

- [Marketplace Customization & Handoff Guide](docs/marketplace-customization.md)

Documentation is intentionally structured for quick scanning so buyers can find setup and customization steps without reading the entire file. This follows GitHub's documentation guidance around clear structure, meaningful headings, plain language, and scannability. GitHub's documentation best practices
