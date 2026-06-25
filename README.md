# Dr. Sandeep — Personal Portfolio Website

A production-ready, fully responsive personal academic portfolio for **Dr. Sandeep**, Mechanical Engineer & Postdoctoral Researcher at TIET–University of Queensland.

## 🚀 Tech Stack

- **Pure HTML5 / CSS3 / Vanilla JS** — zero dependencies, zero build step
- **Google Fonts** — Inter (loaded from CDN)
- **IntersectionObserver API** — smooth scroll-triggered animations
- **CSS Custom Properties** — easy theming

## 📁 Project Structure

```
dr-sandeep-portfolio/
├── index.html          # Main page (all sections)
├── css/
│   └── style.css       # Complete stylesheet
├── js/
│   └── main.js         # Navigation, animations, accordion, form
└── README.md
```

## 🌐 Deployment

### Vercel (recommended)
1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Upload this folder or link your GitHub repo
3. Framework Preset: **Other**
4. Click **Deploy** — done!

### Netlify
1. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Deploy manually**
2. Drag and drop this entire folder
3. Your site is live instantly

### GitHub Pages
1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Source: **Deploy from a branch → main → / (root)**
4. Visit `https://<username>.github.io/<repo-name>`

## ✏️ Customisation

### Update Social Profile Links
In `index.html`, search for `social-link` and replace the `href` values:
```html
<a href="https://scholar.google.com/citations?user=YOUR_ID" ...>
<a href="https://orcid.org/YOUR-ORCID-ID" ...>
<a href="https://www.researchgate.net/profile/YOUR-PROFILE" ...>
<a href="https://www.linkedin.com/in/YOUR-USERNAME" ...>
```

### Change Colour Palette
Edit the CSS variables in `css/style.css`:
```css
:root {
  --navy:  #0A1628;   /* Dark background */
  --teal:  #0EA5A0;   /* Primary accent */
  --teal-2:#14B8B3;   /* Secondary accent */
}
```

### Add a Real Profile Photo
Replace the hero stats card with an `<img>` tag in the `.hero-visual` div:
```html
<img src="images/sandeep-profile.jpg" alt="Dr. Sandeep" class="hero-photo"/>
```

### Wire Up the Contact Form
The form is UI-only by default. To make it functional, add a service like [Formspree](https://formspree.io):
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- existing form fields -->
</form>
```
Or use [EmailJS](https://emailjs.com) — update `handleSend()` in `js/main.js`.

## 📋 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Name, title, tagline, CTA buttons, social links, research overview card |
| **Projects** | Interactive accordion — 3 active + past academic projects |
| **Publications** | All 4 SCI papers with DOI links + under-review paper |
| **Skills** | 4-category grid — Simulation, Programming/AI, Data Analysis, Research Domains |
| **Education** | Vertical timeline (5 levels) + experience roles + achievements |
| **Contact** | Contact details + working form UI |

## 🔧 Performance Notes

- No JavaScript frameworks — loads in < 100ms
- All animations respect `prefers-reduced-motion`
- Fully keyboard accessible
- Mobile-first responsive down to 360px

---

Built for Dr. Sandeep · TIET–University of Queensland · Patiala, Punjab, India
