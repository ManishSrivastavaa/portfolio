# Manish Mohan Srivastava — Portfolio

A polished, responsive portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Designed for professional leadership profiles with deep-navy aesthetics, animated counters, and a vertical career timeline.

- **Live Site:** [https://anshm.github.io/portfolio/](https://anshm.github.io/portfolio/)
- **Technology Stack:** React 19, Vite, Tailwind CSS v4, Framer Motion, Radix UI.

## 🚀 Getting Started

### Prerequisites
- **Node.js LTS** (v20+)
- **npm** (v10+)

### Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173/](http://localhost:5173/) in your browser.

> [!NOTE]
> The dev server runs at the root path `/`. Asset paths are automatically handled by Vite. For testing the production subpath `/portfolio/`, see the **Production Preview** section below.

## 📦 Production & Deployment

### Build for Production
```bash
npm run build
```
This generates a `dist/` folder with all assets optimized and prefixes all paths with `/portfolio/`.

### Local Production Preview (Subpath Testing)
To verify that the site works correctly under the `/portfolio/` subpath before deploying:
```bash
npm run serve:preview
```
Then open [http://localhost:5173/portfolio/](http://localhost:5173/portfolio/).

### GitHub Pages Deployment
This repository is configured with a **GitHub Action** that automatically deploys to the `gh-pages` branch on every push to `main`.

1. Push your changes to the `main` branch.
2. Go to **Settings > Pages** in your GitHub repository.
3. Ensure "Build and deployment" is set to **GitHub Actions**.

## 📨 Contact Form Configuration

The contact form supports **Formspree** (default), **EmailJS**, or a direct **mailto** fallback.

### 1. Formspree Setup (Recommended)
1. Create a new form at [Formspree.io](https://formspree.io/).
2. Copy your **Form ID** or **Endpoint URL** (e.g., `https://formspree.io/f/xyza123`).
3. **Locally:** Create a `.env.local` file and add:
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
   ```
4. **On GitHub:** Go to **Settings > Secrets and variables > Actions** and add `VITE_FORMSPREE_ENDPOINT` as a Repository Secret.

### 2. EmailJS Alternative
If you prefer EmailJS, set the following environment variables:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

### 3. Fallback Mode
If no environment variables are set, the form will display a clear "Send Direct Email" button that opens the user's default mail client.

## 📝 Updating Content

All text and metrics are stored in `src/data/content.json`. 

1. Edit `src/data/content.json`.
2. Run the validation script to ensure the structure is correct:
   ```bash
   npm run validate
   ```
3. Commit and push.

## 🛠️ Project Structure
- `src/components/`: Modular React components.
- `src/data/content.json`: Single source of truth for all text.
- `src/styles/index.css`: Tailwind directives and global styles.
- `scripts/`: Utility scripts for previewing and validation.
- `.github/workflows/`: CI/CD deployment logic.

---
Built with ☕ and code for Manish Mohan Srivastava.
