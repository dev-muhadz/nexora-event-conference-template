# NEXORA — Event & Conference Landing Page

A modern, high-converting conference/event landing page template built with semantic HTML5, CSS3 and Vanilla JavaScript. No UI frameworks or JavaScript libraries are required.

## Structure
```text
nexora-event-conference-template/
├── index.html
├── css/styles.css
├── js/app.js
├── assets/
└── README.md
```

## Features
- Event hero with date/location badges and countdown
- Sponsor and event metrics
- Three-day interactive agenda
- Speaker grid with biography modal
- Virtual, Standard and VIP ticket tiers
- Venue/map placeholder and travel information
- Mobile navigation
- Newsletter interaction
- Responsive 320px-to-desktop layout
- CSS custom properties for rebranding

## Set the countdown
Open `js/app.js` and edit:
```js
const target = new Date("2027-10-14T09:00:00-05:00").getTime();
```
Use an ISO date with timezone, for example:
`2028-05-20T10:00:00+01:00`.

## Customize colors
Open `css/styles.css` and edit:
```css
:root{
  --ink:#11110f;
  --paper:#f0eee7;
  --acid:#d6ff38;
  --orange:#ff6b35;
  --violet:#6d58ff;
}
```
These variables control the primary event palette.

## Customize the schedule
Schedule tabs use matching `data-day` and `data-panel` values:
```html
<button data-day="4">DAY 04</button>
<div class="schedule" data-panel="4">...</div>
```
Copy an existing session article to add more sessions. Change the time, category, title, description and room.

## Add speakers
Add a `.speaker` button with a unique `data-speaker` value, then add the matching speaker object in `js/app.js`. The modal will populate automatically.

## Update tickets
Edit the three `.tickets article` blocks in `index.html` to change prices, names and feature lists.

## Production notes
The map is a visual placeholder. Replace it with a real map provider/embed. Speaker imagery is represented by lightweight CSS placeholders; use properly licensed photography for production. Event details, sponsor names, speaker bios and pricing are demo content and should be replaced.

## Marketplace tips
Show the countdown, schedule tabs, speaker modal and responsive mobile view in marketplace screenshots. Emphasize the zero-framework architecture and easy CSS-variable rebranding.
