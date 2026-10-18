# Manohar L U · Portfolio

A static portfolio site in plain HTML, CSS and JavaScript (ES modules). No framework, no build step, no runtime dependencies.

## Structure

```
index.html          Page markup. Section headings and the project dialog live here.
css/style.css       All styling: tokens, layout, components, motion, dark mode, reduced motion.
js/data.js          All text and links. Edit this file to change content.
js/main.js          Entry point: renders the page and starts each feature.
js/render.js        Builds the sections from data.js.
js/nav.js           Sticky header, mobile menu, current-section marker.
js/reveal.js        Scroll reveals and the hero entrance.
js/projects.js      Project details dialog (native <dialog>).
js/contact.js       Contact form: validation, send, and the email fallback.
assets/             profile-photo.webp (used), profile-photo.jpg (original, unused),
                    resume.pdf, favicon.svg
```

## Editing content

Open `js/data.js`.

- Text that starts with `TODO` is highlighted on the page. Replace the text and the highlight goes away.
- A link set to `null` is not shown, so there are no empty buttons.
- `projects[n].liveUrl` and `githubUrl` add the Live demo and GitHub buttons when filled in.
- `projects[n].image` takes a screenshot path (for example `assets/projects/emotion.webp`). Without one, the card shows the project's pipeline instead.

## Contact form

The form has no backend yet, so it does not claim to send anything.

- **Without an endpoint** (the default): submitting opens the visitor's email app with the message filled in, addressed to you.
- **With an endpoint**: set `formEndpoint` in `js/data.js` to a Formspree form URL, or a Cloudflare Worker that accepts a JSON POST with `name`, `email` and `message`. The form then sends the message in place.

## Running locally

Modules need a web server, so do not open `index.html` straight from disk:

```
python -m http.server 8080
```

Then open http://localhost:8080.

## Deploying

Any static host works. For Cloudflare Pages: connect the repository, leave the build command empty, and set the output directory to `/`.

## Before publishing

- Replace the `TODO` items in `js/data.js`.
- Add project links and screenshots where you have them.
- Set `formEndpoint`, or keep the email fallback.
- Run Lighthouse and check the layout at phone, tablet and desktop widths.
