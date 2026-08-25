# Portfolio

A clean, professional personal portfolio website built with vanilla HTML, CSS, and JavaScript.

Designed for a B.Tech Computer Science Engineering student building a foundation in cybersecurity and software engineering.

## Technologies

- **HTML5** — Semantic, accessible markup
- **CSS3** — Custom properties, responsive grid layouts, modern features
- **JavaScript** — Vanilla JS, no frameworks or dependencies

## Project Structure

```
portfolio/
├── index.html          # Main HTML file with all sections
├── style.css           # All styles (dark premium theme)
├── script.js           # Navigation, animations, interactions
├── README.md           # This file
└── assets/
    ├── images/         # Favicon, profile images, etc.
    │   └── favicon.png
    └── resume/
        └── resume.pdf  # Your resume file
```

## Running Locally

1. Clone or download this project
2. Open `index.html` in any modern browser

No build tools, server, or dependencies required.

## Deploying to GitHub Pages

1. Push this project to a GitHub repository
2. Go to **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose `main` branch and `/ (root)` folder
5. Click **Save**
6. Your site will be available at `https://yourusername.github.io/repo-name/`

## Customization

### Change Your Name and Links

Open `index.html` and search/replace the following placeholders:

| Placeholder | Replace With |
|---|---|
| `[Your Name]` | Your actual name |
| `[yourusername]` | Your GitHub username |
| `your.email@example.com` | Your email address |

### Add Your Resume

1. Place your PDF at `assets/resume/resume.pdf`
2. The resume button already points to this path

### Add a Favicon

1. Create a 32x32 or 64x64 PNG image
2. Save it as `assets/images/favicon.png`

### Add a Profile Image (Optional)

1. Place your image in `assets/images/`
2. Add an `<img>` tag in the hero section if desired

### Add Projects

Each project card follows this pattern:

```html
<article class="project-card">
    <div class="project-header">
        <span class="project-icon">📁</span>
        <div class="project-links">
            <a href="https://github.com/you/project" class="project-link" target="_blank" rel="noopener noreferrer">
                <!-- GitHub icon SVG -->
            </a>
        </div>
    </div>
    <h3 class="project-title">Project Name</h3>
    <p class="project-description">Short description of the project.</p>
    <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">Linux</span>
    </div>
</article>
```

Copy the block and replace the content with your project details.

### Add Skills

In the skills section, find the relevant `<ul>` list and add:

```html
<li class="skill-item">New Skill</li>
```

### Add Learning Areas

Copy an existing lab card and update the content:

```html
<div class="lab-card">
    <h3 class="lab-title">New Area</h3>
    <p class="lab-description">Description of what you're learning.</p>
    <span class="lab-status">In Progress</span>
</div>
```

### Add Certifications

When you earn certifications, replace the placeholder with cards:

```html
<div class="cert-card">
    <h3 class="cert-title">Certification Name</h3>
    <p class="cert-issuer">Issuing Organization</p>
    <p class="cert-date">Month Year</p>
    <a href="credential-url" class="cert-link" target="_blank" rel="noopener noreferrer">View Credential</a>
</div>
```

### Update Social Links

Search for the contact section and update:
- Email address
- GitHub profile URL
- LinkedIn profile URL

## Design Decisions

- **No frameworks**: Keeps the project simple, lightweight, and easy to maintain
- **CSS Custom Properties**: Makes it easy to change colors, spacing, and fonts from one place
- **Vanilla JavaScript**: No build step required; straightforward to understand and modify
- **Semantic HTML**: Good for accessibility and SEO
- **Responsive-first**: Works on all screen sizes without JavaScript layout tricks

## Browser Support

Works in all modern browsers:
- Chrome / Edge (latest)
- Firefox (latest)
- Safari (latest)