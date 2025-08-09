# Agilitas Lotto Website

Welcome to **Agilitas Lotto** — a vibrant, interactive web platform showcasing the next era of lotto with engaging sections like “Join the Movement,” “Events,” and more, all designed with smooth polygon-shaped card animations, glowing borders, and responsive layouts.

<img width="1913" height="856" alt="image" src="https://github.com/user-attachments/assets/6a22992a-461d-468f-b039-92324c3330ed" />

## Table of Contents

* [About](#about)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
* [Project Structure](#project-structure)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)

---

## About

Agilitas Lotto is an interactive, visually rich React/Next.js web application built with modern UI/UX principles. It features polygonal cards with dynamic hover effects, glowing borders, and responsive design tailored for both desktop and mobile users. This project focuses on delivering a unique brand experience with engaging animations and smooth performance.

---

## Features

* **Polygonal Cards** with hover animations and glowing borders
* Responsive design supporting mobile and desktop
* Dynamic “Join the Movement” and “Events” sections with smooth entrance and hover effects
* Use of Framer Motion for declarative animation control
* Image optimization with Next.js `Image` component
* Custom clipping paths to create distinctive card shapes
* Accessibility considerations with proper alt texts and focusable elements

---

## Tech Stack

- **Framework:** ![Next.js](https://img.shields.io/badge/Next.js-black?style=flat&logo=next.js)
- **Styling:** ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-blue?style=flat&logo=tailwind-css)
- **Animations:** ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-pink?style=flat&logo=framer)
- **Image Handling:** Next.js `Image` component
- **Language:** ![TypeScript](https://img.shields.io/badge/TypeScript-skyblue?style=flat&logo=typescript)
- **Build & Bundler:** ![Vercel](https://img.shields.io/badge/Vercel-black?style=flat&logo=vercel)

---

## Getting Started

### Prerequisites

* Node.js (>=16.x recommended)
* npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/agilitas-lotto.git
   cd agilitas-lotto
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to see the app in your browser.

---

## Project Structure

```markdown
/.next                  # Next.js build output
/app                    # Main app directory
  favicon.ico           # Favicon file
  globals.css           # Global CSS styles
  layout.tsx            # Layout component for the app
  page.tsx              # Main entry page

/components             # Components folder
  /sections             # Section components
    Events.tsx
    Footer.tsx
    Hero.tsx
    JoinMovement.tsx
    LottoScroll.tsx
    Tradition.tsx
  /ui                   # UI components
    Navbar.tsx

/lib                    # Utility libraries
  utils.ts              # Utility functions

/node_modules           # Node dependencies
/public                 # Public assets
```

---

## Usage

* Customize the cards data inside the components to add/update images, titles, and links.
* Adjust animation settings in the components with Framer Motion for timing and easing changes.
* Modify Tailwind classes to tweak layout and responsiveness.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

Please ensure your code follows the project’s formatting and style guidelines.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
