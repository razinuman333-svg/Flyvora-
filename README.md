# ✈️ Flyvora – Modern Travel Agency Web Application

**Flyvora** is a modern, full-stack travel agency web application designed to give users a seamless vacation planning and booking experience. From curated holiday packages across global destinations to team introductions and dynamic theme toggling, Flyvora makes travel planning effortless, visual, and engaging.



---

## 🌐 Live Demo

- **Live URL:** [flyvora.netlify.app](https://flyvora.netlify.app)

---

## ✨ Features

- **Hero & Landing Section:** Clean, modern headline design welcoming users to explore travel destinations.
- **Curated Travel Packages:** Interactive package cards displaying destinations (Italy, Dubai, Switzerland, Manali, Norway, Thailand, Bali, Australia) along with dynamic pricing in INR.
- **Dark / Light Mode Toggle:** Smooth theme switcher using modern CSS and React state management.
- **Meet Our Team:** Dedicated showcase section highlighting travel experts and guides.
- **Interactive Toast Notifications:** Real-time feedback and alerts integrated via `react-toastify`.
- **Animated UI Components:** Smooth visual animations powered by `framer-motion`.
- **Newsletter Subscription:** Integrated subscription form in the footer section.
- **Firebase Authentication & Backend:** Built-in backend integration for secure user login and data persistence.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)
- **Backend / Authentication:** [Firebase v12](https://firebase.google.com/)
- **Hosting:** [Netlify](https://www.netlify.com/)

---

Flyvora/
├── public/              # Static assets (images, icons)
├── src/
│   ├── assets/          # Project visual assets
│   ├── components/      # Reusable UI components (ThemeToggleBtn, etc.)
│   ├── pages/           # Page routes (Home, Packages, About, etc.)
│   ├── firebase.js      # Firebase setup & configuration
│   ├── App.jsx          # Root component & router
│   └── main.jsx         # App entry point
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
