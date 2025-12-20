# 🚀 Portfolio

Welcome to my personal portfolio project!  
Here I showcase modern frontend practices and demonstrate my approach to architecture, build configuration, and animations.

---

## 🛠️ Tech Stack

- **React** — with _lazy components_ for optimized loading
- **TypeScript** — strong typing and reliable code
- **Webpack** — custom build and flexible configuration
- **SCSS Modules** — modular styles and CSS isolation
- **SWC (.swcrc)** — fast transpilation setup
- **React Transition Group** — smooth animations and transitions
- **PostCSS** — modern CSS processing

---

## 🌐 Demo

📍 Check out the live project here:  
👉 [Portfolio Demo](https://igorpanasik.github.io/portfolio/)

---

## ✨ Features

- ⚡ Fast build and optimization with Webpack + SWC
- 🎨 Clean, modular styling with SCSS Modules
- 🔄 Smooth component transitions and animations
- 🧩 Lazy‑loading for improved performance
- 📦 CI/CD deployment to GitHub Pages

---

## Email Sending Setup with GitHub Actions
The project configured to send emails by securely managing environment keys through GitHub Actions.
A dedicated workflow file was created to generate the .env file during the CI/CD process. 
This workflow automatically injects the required service keys (stored as GitHub Actions secrets) into the environment at build time.

## How it works
- The sensitive keys are stored in GitHub Actions Secrets within the repository settings.

- During the workflow run, GitHub Actions creates a temporary .env file and writes those secrets into it.

- The application then reads these values at runtime, enabling secure email sending without exposing the keys in the repository.

- Once the workflow finishes, the .env file exists only in the runner environment and is not committed to the repo.

## 📬 Contact

If you enjoyed the project or have ideas for improvement, feel free to reach out:

- ✉️ Email: _[panasik.igor.com@gmail.com]_
- 💼 LinkedIn: _[www.linkedin.com/in/igor-panasik-351174252]_
- 🐙 GitHub: [@igorpanasik](https://github.com/igorpanasik)

---
