# Bayjid — Premium AI Automation Portfolio

A responsive portfolio template built with HTML, CSS, and vanilla JavaScript. The visual direction uses a premium purple–blue gradient, animated AI orb, neon accents, glassmorphism cards, and motion that respects reduced-motion preferences.

## Included files
- `index.html` — public portfolio website and content
- `style.css` — theme, responsive layout, glass effects, orb and reveal animations
- `script.js` — mobile menu, active-section navigation, reveal animations, email form demo, and contact links
- `admin.html` — local-only admin dashboard demonstration

## Run locally
1. Extract the ZIP.
2. Open the folder in VS Code.
3. Open `index.html` in a browser, or use the **Live Server** extension.
4. Open `admin.html` to explore the dashboard demo. Demo password: `portfolio123`.

## Personalize before publishing
Edit the `SETTINGS` object near the top of `script.js`:

```js
const SETTINGS = {
  email: "your-real-email@example.com",
  whatsapp: "8801XXXXXXXXX" // country code + number, digits only
};
```

Then update your name, bio, services, and project examples in `index.html`. The project cards are illustrative demo concepts; replace them with your own work before sharing publicly. The current email and WhatsApp values are placeholders.

## Contact form
The form opens the visitor's configured email application with the form content pre-filled. It does **not** send or store messages automatically. To receive submissions online, connect a trusted form service or build a backend endpoint.

## Admin dashboard demo — security warning
`admin.html` is a front-end demo only. Its password is visible in the source and any saved demo data is stored in that browser's localStorage. It is not secure authentication and does not update the public portfolio automatically. Do not use it to protect real customer or business data. A production dashboard requires server-side authentication, protected API routes, and a database.

## Hosting
The static site can be hosted on GitHub Pages or another static hosting provider. Static hosting does not provide a secure backend for the admin dashboard or contact form.
