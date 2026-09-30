# Rahul Verma: Engineering Portfolio

Source code for my personal engineering portfolio. It is built with [Astro](https://astro.build) and published for free by GitHub Pages.

- **Live site:** https://rahulverma13.github.io (custom domain coming soon)
- **Every push to `main` republishes the site automatically** in about 1–2 minutes.

You never need to touch the code to change content. Everything you'd want to edit lives in plain text files, listed below.

---

## Where things live

| What you want to change | File to edit |
|---|---|
| Name, tagline, typing-animation words, email, LinkedIn, GitHub | `src/data/site.json` |
| About section: bio, stat boxes, skills, coursework | `src/content/about.md` |
| A project page (text, facts, images, video) | `src/content/projects/<project>/index.mdx` |
| A project's images | `src/content/projects/<project>/images/` |
| Resume PDF | `public/resume.pdf` (remove your phone number first) |
| Posters and other downloadable PDFs | `public/files/` |
| Colors and fonts | the top of `src/styles/global.css` (the `:root` block) |

---

## Preview the site on your computer

You only need to do the first step once.

1. Install [Node.js](https://nodejs.org) (the "LTS" version). Then open Terminal in this folder and run:
   ```
   npm install
   ```
2. Start the preview:
   ```
   npm run dev
   ```
3. Open **http://localhost:4321** in your browser. The page refreshes by itself whenever you save a file.
4. Press `Ctrl + C` in Terminal to stop.

---

## Edit a project

Open `src/content/projects/<project>/index.mdx`. It has two parts:

**1. The settings block at the top** (between the two `---` lines). This controls the project card on the home page and the header of the project page:

```yaml
title: Swomni
subtitle: Coaxial swerve-omni drive with a CVT effect
order: 1                      # position on the home page (1 = first)
status: published             # change to "draft" to hide the project
summary: One or two sentences for the card.
roleBadge: Solo project       # short label on the card
roleDetail: A sentence or two about exactly what you did.
domains: [Mechanical, Electrical, Software]
tags: [Kinematics, CAD]
highlights:                   # up to 3 big numbers on the home page card
  - { value: "1.63×", label: "top speed vs. motor limit" }
facts:                        # the Role / Timeline / Team / Tools strip (leave one out to hide it)
  role: "..."
  timeline: "2024 – 2025"
  team: "Solo"
  tools: "..."
hero: ./images/hero.png       # big image at the top of the page
heroAlt: Describe the image for screen readers
heroStyle: plate              # plate = light drafting background (for CAD renders)
                              # photo = image fills the frame (for photos)
                              # dark / glow = dark backgrounds
links:
  - { label: Research poster (PDF), href: /files/poster.pdf, kind: PDF }
```

Text in YAML that contains a colon (`:`) must be wrapped in quotes.

**2. The write-up below it.** Normal text, with `##` for section headings (each `##` heading automatically shows up in the page's side menu). You can drop in these building blocks anywhere:

```mdx
<Figure src="swomni/pod-cad.png" variant="plate" alt="What the image shows" caption="Caption under the image" />

<Grid cols={2}>
  <Figure ... />
  <Figure ... />
</Grid>

<Video id="MwDviS-xaNA" title="Demo" vertical />          <!-- YouTube ID; vertical for Shorts; start={13} end={48} to trim -->

<Stats items={[{ value: "4×", label: "stiffer than slides" }]} />

<Callout title="Key idea">Some highlighted text.</Callout>

<Tex block expr="V = \frac{\omega r}{\cos\theta}" />          <!-- math formulas (LaTeX) -->

<PowerPath paths={[{ name: "Drive", steps: ["Motor", "Belt", "Wheel"] }]} />

<Poster src="swomni/poster.jpg" pdf="/files/poster.pdf" title="Poster title" alt="..." />
```

Image paths in `Figure` are written as `<project folder>/<file name>`.

---

## Add a new project

1. Copy an existing folder in `src/content/projects/` (for example `swomni`) and rename the copy, e.g. `pcb-motor-driver`. The folder name becomes the web address: `/projects/pcb-motor-driver/`.
2. Delete the old images inside `images/` and add your new ones. Big phone photos are fine; the site shrinks and converts them to fast WebP files automatically.
3. Edit `index.mdx`: update the settings block and replace the write-up. Set `order` to where it should appear.
4. Preview it (`npm run dev`), then publish.

The project automatically appears on the home page, in the rotating carousel, and in the "Next project" links.

---

## Publish changes

In Terminal, in this folder:

```
git add -A
git commit -m "Describe what you changed"
git push
```

Or just ask Claude Code to "commit and push my changes". GitHub rebuilds and republishes the site within a couple of minutes. You can watch progress in the **Actions** tab of the GitHub repo.

---

## One-time setup: turn on GitHub Pages

1. Go to the repo on GitHub → **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Go to the **Actions** tab. If the first "Deploy to GitHub Pages" run failed because Pages was off, click it and choose **Re-run all jobs**.
4. The site will be live at https://rahulverma13.github.io.

---

## Connect a custom domain (e.g. rahulverma.live)

Check the [GitHub Student Developer Pack](https://education.github.com/pack) first; it has included a free domain in the past.

1. **At your domain registrar** (where you bought the domain), open the DNS settings and add these records. Delete any existing "parking" A records first.

   | Type | Host / Name | Value |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | AAAA | `@` | `2606:50c0:8000::153` |
   | AAAA | `@` | `2606:50c0:8001::153` |
   | AAAA | `@` | `2606:50c0:8002::153` |
   | AAAA | `@` | `2606:50c0:8003::153` |
   | CNAME | `www` | `rahulverma13.github.io` |

   These are GitHub's published addresses. Double-check them against [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) when you set it up.

2. **In this project**, change the site address in these places, then publish:
   - `astro.config.mjs`: `const SITE_URL = 'https://rahulverma.live';`
   - `public/robots.txt`: the `Sitemap:` line
   - Also create a file `public/CNAME` containing just `rahulverma.live`

3. **On GitHub:** repo **Settings → Pages → Custom domain**, type `rahulverma.live`, click **Save**. DNS can take from a few minutes up to a day to update.
4. Once the DNS check passes, tick **Enforce HTTPS**.

---

## Tech notes

- Static site, no server or database. Astro builds plain HTML/CSS into `dist/`.
- Images are optimized at build time with `sharp` (WebP, several sizes, lazy-loaded).
- Math is rendered at build time with KaTeX; charts and diagrams are inline SVG.
- JavaScript is limited to small enhancements: typing animations, the carousel, scroll-reveal, the CVT slider, chart tooltips and the image lightbox. Everything respects "reduce motion" settings.
- Deployment: `.github/workflows/deploy.yml` (official `withastro/action`).
