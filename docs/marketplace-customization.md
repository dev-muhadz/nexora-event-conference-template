# NEXORA — Marketplace Customization & Handoff Guide

This guide is for buyers and developers customizing NEXORA for a real event, conference, summit, workshop, or community experience.

NEXORA is a frontend template. The included event content, links, names, pricing, venue details, and newsletter behavior are demonstration content and must be replaced before production.

---

## 1. Quick Start

NEXORA is a static HTML/CSS/JavaScript template.

### Files you will work with most

| File | Purpose |
| --- | --- |
| `index.html` | Page content, event information, sections, ticket cards, speakers, and footer |
| `css/styles.css` | Visual design, layout, responsive behavior, and theme variables |
| `js/app.js` | Countdown, agenda tabs, speaker modal, mobile navigation, and newsletter demo |
| `favicon.svg` | Browser favicon |
| `robots.txt` | Search crawler rules |
| `sitemap.xml` | Search-engine sitemap |
| `404.html` | Branded missing-page fallback |

No package installation or build process is required.

---

## 2. Buyer Customization Map

### Branding

Replace:

- NEXORA name
- Logo/brand mark
- Event title
- Event tagline
- Footer branding

Primary branding colors are controlled from the `:root` variables in `css/styles.css`.

### Event details

Update:

- Event date
- Event start time
- Event timezone
- City
- Country/state
- Venue name
- Venue address
- Travel information

The countdown date lives in `js/app.js`.

### Speakers

Update the speaker cards in `index.html`.

For each speaker:

1. Give the card a unique `data-speaker` value.
2. Add the same key to the speaker data object in `js/app.js`.
3. Replace the name, role, and biography.
4. Replace placeholder visuals with properly licensed images if desired.

### Agenda

The agenda is split into day tabs.

For each day:

- Update the tab label and date.
- Keep the tab ID and panel ID relationship correct.
- Add, remove, or edit session articles.
- Update time, category, title, description, room, and speaker initials.

Do not remove the ARIA relationships unless you are replacing the tab system with another accessible implementation.

### Tickets

Update the three ticket cards with your actual:

- Pass names
- Prices
- Benefits
- Availability
- Checkout URLs

The current links are demo anchors and do not process payments.

---

## 3. Forms and Backend Integrations

The newsletter form is intentionally frontend-only.

The current JavaScript prevents a real submission and shows a local confirmation state.

For production:

1. Connect the form to your chosen email/newsletter backend.
2. Add the correct endpoint or integration.
3. Add appropriate consent/privacy language.
4. Test validation and success/error states.
5. Remove the demo-only submission behavior when the real integration is ready.

The template does not include a backend, database, authentication, payment processing, or email service.

---

## 4. Maps and Venue

The venue map is a visual placeholder.

For production, replace it with:

- A real map embed,
- A linked map destination,
- Or another location component.

Also replace the demo airport, hotel, street, and venue information.

Do not present placeholder travel information as real event information.

---

## 5. SEO and Deployment

Before publishing a customized version:

- Update the page title.
- Update the meta description.
- Update the canonical URL.
- Update `og:url`.
- Update Open Graph title/description if the event branding changes.
- Update Twitter metadata if needed.
- Update `robots.txt`.
- Update `sitemap.xml`.
- Keep the favicon or replace it with your own.
- Confirm the final deployed URL.
- Test the `404.html` page.

If the site moves away from the included GitHub Pages URL, every URL-specific SEO value should be checked again.

---

## 6. Demo Content Replacement Checklist

Search the project before launch and replace every demonstration value that should not appear in the real product.

### Event

- [ ] Event name
- [ ] Event dates
- [ ] Event timezone
- [ ] City
- [ ] Venue
- [ ] Address
- [ ] Travel information
- [ ] Event description

### People

- [ ] Speaker names
- [ ] Speaker roles
- [ ] Speaker companies
- [ ] Speaker biographies
- [ ] Speaker images
- [ ] Speaker profile links

### Business information

- [ ] Sponsor names
- [ ] Sponsor logos
- [ ] Attendee statistics
- [ ] Country counts
- [ ] Session counts
- [ ] Ticket prices
- [ ] Ticket availability
- [ ] Checkout links
- [ ] Contact information

### Website behavior

- [ ] Newsletter endpoint
- [ ] Ticket destinations
- [ ] Directions destination
- [ ] Speaker links
- [ ] Footer legal links
- [ ] Privacy policy
- [ ] Terms
- [ ] Code of conduct

---

## 7. Images and Assets

NEXORA's speaker visuals use CSS-based placeholders.

If you add real images:

- Use images you have permission to use.
- Keep image quality appropriate for the final design.
- Optimize large files before deployment.
- Use meaningful alt text when an image communicates information.
- Use an empty alt attribute for purely decorative images.

Do not ship copyrighted stock or third-party images without the required license.

---

## 8. Accessibility Handoff

The template includes accessibility foundations, but accessibility is not automatically complete for every customization.

After editing:

- Test keyboard-only navigation.
- Confirm visible focus states.
- Test the skip link.
- Test all agenda tabs with keyboard controls.
- Test opening and closing speaker dialogs.
- Test Escape-key behavior.
- Confirm focus returns to the triggering speaker card.
- Test the mobile navigation with keyboard controls.
- Check heading order.
- Check link/button labels.
- Check color contrast after changing theme colors.
- Test form validation.
- Test the site with a screen reader if available.

Do not assume that changing colors, copy, images, or interactive components leaves accessibility unchanged.

---

## 9. Responsive Handoff

The template is designed for mobile-first use and includes responsive breakpoints.

Test at least:

- 320px
- 360px
- 390px
- 430px
- Tablet width
- Laptop width
- Large desktop width

Pay special attention to:

- Header/navigation
- Hero text
- Countdown
- Metrics
- Agenda rows
- Speaker cards
- Ticket cards
- Modal layout
- Venue section
- Footer form

The goal is to preserve the existing visual system while ensuring customized content does not create overflow or broken layouts.

---

## 10. Production Integrations

NEXORA can be connected to real services, but those integrations are outside the included frontend template.

Possible integration points include:

- Ticketing/checkout
- Newsletter/email collection
- Map/location services
- Speaker profile pages
- Analytics
- Contact forms
- Event registration
- CMS or API-backed content

Any integration should be added carefully so it does not break the existing responsive and accessible interaction patterns.

---

## 11. Licensing and Commercial Use

Before selling or redistributing a customized NEXORA implementation, confirm the applicable license and usage terms.

A commercial handoff should clearly define:

- Buyer usage rights
- Project count limits, if any
- Redistribution rules
- Resale rules
- Attribution requirements
- Support scope
- Third-party asset licenses
- Third-party font licenses
- Any external service terms

This repository does not grant ownership of third-party services or assets.

---

## 12. Recommended Buyer Handoff

A clean handoff should contain:

1. Customized branding.
2. Real event information.
3. Real speaker information.
4. Real ticket destinations.
5. Real venue/map destination.
6. Working newsletter integration, if required.
7. Updated SEO URLs.
8. Updated legal links.
9. Licensed imagery.
10. Final responsive and accessibility testing.

---

## 13. Final Production QA

Before calling the project ready:

### Functionality

- [ ] Navigation works.
- [ ] Mobile menu works.
- [ ] Agenda tabs work with mouse and keyboard.
- [ ] Speaker modal opens and closes correctly.
- [ ] Escape closes open overlays.
- [ ] Ticket links reach the intended destination.
- [ ] Directions link reaches the intended destination.
- [ ] Newsletter integration works.
- [ ] All page anchors work.
- [ ] 404 page is reachable.

### Content

- [ ] No demo names remain.
- [ ] No demo prices remain.
- [ ] No demo sponsor claims remain.
- [ ] No placeholder event information remains.
- [ ] No accidental template branding remains.

### SEO

- [ ] Title is final.
- [ ] Description is final.
- [ ] Canonical URL is final.
- [ ] Open Graph URL is final.
- [ ] Sitemap URL is final.
- [ ] Robots file points to the correct sitemap.

### Responsive

- [ ] 320px checked.
- [ ] Mobile checked.
- [ ] Tablet checked.
- [ ] Desktop checked.
- [ ] Large desktop checked.
- [ ] No unwanted horizontal scrolling.

### Accessibility

- [ ] Keyboard navigation checked.
- [ ] Focus behavior checked.
- [ ] Modal behavior checked.
- [ ] Contrast checked.
- [ ] Form labels checked.
- [ ] Headings checked.

---

## 14. What This Template Includes

NEXORA includes the frontend presentation layer and its core interactions.

It does not include:

- Payment processing
- Real ticket inventory
- User accounts
- Backend APIs
- Database
- Email delivery service
- CMS
- Authentication
- Production analytics configuration
- Real map provider integration

Those systems can be integrated by the buyer or developer during customization.

---

## 15. Final Handoff Principle

Treat the included content as a demonstration of the design, not as production event data.

The buyer should be able to replace the content, connect real services, update branding, deploy the site, and understand exactly which parts still require customization before launch.
