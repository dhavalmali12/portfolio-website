# Dhaval Mali Premium Developer Portfolio

A modern React.js portfolio website for a fresher / internship seeker focused on Python, Django, frontend learning, SQL, and GitHub.

## Tech Stack

- React.js
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- Swiper.js
- React Icons
- Typewriter Effect

## Installation Commands

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal, usually:

```bash
http://localhost:5173
```

## Build for Production

```bash
npm run build
npm run preview
```

## Folder Structure

```txt
dhaval-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── components/
    │   ├── AnimatedCard.jsx
    │   ├── Footer.jsx
    │   ├── Navbar.jsx
    │   ├── PageWrapper.jsx
    │   ├── ProjectSlider.jsx
    │   ├── SectionTitle.jsx
    │   └── SkillsTabs.jsx
    ├── data/
    │   └── portfolioData.js
    └── pages/
        ├── About.jsx
        ├── Contact.jsx
        ├── Home.jsx
        ├── Projects.jsx
        ├── Resume.jsx
        ├── Services.jsx
        └── Skills.jsx
```

## Where to Edit Your Details

Edit this file:

```txt
src/data/portfolioData.js
```

Change:

- Name: `profile.name`
- Email: `profile.email`
- Phone: `profile.phone`
- GitHub: `profile.github`
- LinkedIn: `profile.linkedin`
- Instagram: `profile.instagram`
- Skills: `skills`
- Projects: `projects`
- Services: `services`
- Resume highlights: `resumeHighlights`

## Where to Add Photo

Create a `public` folder in the project root and add your image:

```txt
public/profile.jpg
```

Then update the hero image area in:

```txt
src/pages/Home.jsx
```

Currently it shows a DM placeholder so the project works even without a photo.

## Where to Add Resume PDF

Create:

```txt
public/Dhaval-Mali-Resume.pdf
```

The Resume page already points to this path using `profile.resume`.

## Project Links

In `src/data/portfolioData.js`, replace every `github: '#'` and `live: '#'` with your real links.
