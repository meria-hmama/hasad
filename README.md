# Hasad

Hasad is a landing page I designed for an idea I care about: giving women who produce
olive oil, essential oils and textiles in rural Tunisia a direct line to the people who
buy their work, with no middlemen, and a clear story behind every batch.

It's a concept project I built for practice, so the producers and batches you see are
made up. I made it during my Frontend Web Development internship at Zenvio Solutions,
as my first project with React, Next.js and Tailwind CSS.

**See it live:** _(link coming after deployment)_

## Why this idea?

Reading about the challenges rural women producers face, three things kept coming up:
they sell through intermediaries, buyers can't see where products come from, and prices
aren't always fair. Hasad is my attempt to picture a simple tool that tackles those three
things, and the landing page is where that idea starts.

## What's on the page

- A hero section with the main message and a sample batch card that shows what
  traceability could look like
- Three features: direct sales, batch traceability and fair prices
- A "How it works" section with three steps
- A navbar that turns into a menu button on phones

## How I built it

I split the page into small components instead of one long file, so each piece is easy to
read and reuse:

```
src/
  app/
    page.js          The home page, put together from the components
    layout.js        Page frame and metadata
    globals.css      Tailwind setup
  components/
    Navbar.js        Navbar with a mobile menu (uses React state)
    Hero.js          Headline, buttons and the sample batch card
    Features.js      The features section
    FeatureCard.js   One reusable card, takes a number, title and text
    HowItWorks.js    The three steps, drawn from a list with .map()
    Footer.js        Footer with the concept disclaimer
```

## Design choices

- **Calm colors:** deep green and warm neutrals, to suggest farmland and keep the page
  easy on the eyes.
- **Mobile first:** I designed the phone layout first. Sections use one column on small
  screens and switch to multiple columns from 768px up.
- **One visual rhythm:** the same spacing, rounded corners and font sizes everywhere, so
  the page feels consistent instead of crowded.
- **No photos:** I built the visuals with CSS only, which keeps the page light and fast.

## What I learned

How components and props work, how Tailwind's responsive classes make a layout adapt, and
how small things like a mobile menu change how usable a site feels on a phone.

## Run it on your computer

```
npm install
npm run dev
```

Then open http://localhost:3000.
