# Harsh Kumar Yadav — High-Performance Developer Portfolio

A premium, production-grade developer portfolio built with a focus on high-end aesthetics, "Apple-smooth" scrolling, and interactive 3D elements. Designed for a SaaS-level experience with architectural typography and sophisticated animations.

## ✨ Key Features

- 🍏 **Apple-Smooth Scrolling**: Integrated with **Lenis** for inertial, high-performance scrolling across all browsers.
- 🍱 **Bento-Grid Projects**: A modular, editorial-style projects section featuring featured hero cards and interactive hover states.
- 🕸️ **3D Neural Mesh**: Interactive background using **React Three Fiber** and **Three.js** that responds to mouse movement.
- 🖼️ **Dynamic About Section**: Features a morphing blob-style portrait container with robust state-managed image fallbacks.
- ⚡ **Performance Optimized**: Optimized GPU rendering by reducing high-cost `backdrop-filter` usage and locking pixel ratios for consistent 60FPS.
- 🎨 **Premium UI/UX**: Custom design system using **Cabinet Grotesk** (Display) and **DM Mono** (Technical) typography.
- 📱 **Fully Responsive**: Architected for desktop, tablet, and mobile with seamless layout transitions.

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18 + Vite |
| **Styling** | Tailwind CSS + Custom Vanilla CSS |
| **3D Engine** | Three.js + @react-three/fiber |
| **Animations** | Framer Motion |
| **Smooth Scroll** | Lenis (Inertial Scrolling) |
| **Typography** | Cabinet Grotesk · DM Mono · Inter |
| **Deployment** | Vercel / Netlify Ready |

## 📂 Project Structure

```text
src/
├── components/
│   ├── Projects.jsx      ← Premium Bento-Grid layout
│   ├── Footer.jsx        ← Reference-accurate premium sign-off
│   ├── Hero.jsx          ← High-impact landing with smooth reveals
│   ├── NeuralMesh.jsx    ← Interactive 3D particle background
│   └── TerminalBoot.jsx  ← Immersive system-boot loading sequence
├── sections/
│   ├── About.jsx         ← Storytelling + Portrait Blob
│   ├── Contact.jsx       ← Premium SaaS-style communication form
│   └── Experience.jsx    ← Professional technical timeline
├── data/
│   └── portfolioData.js  ← Central source of truth for all content
└── App.jsx               ← Global orchestration & Scroll Management
```

## 🚀 Quick Start

1. **Clone & Install**
   ```bash
   git clone https://github.com/Harsh-Yadav029/Personal-Portfolio.git
   cd Personal-Portfolio
   npm install
   ```

2. **Run Development**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 🎨 Customization

The entire portfolio is **data-driven**. To update your personal information, projects, or experience, simply edit:
👉 `src/data/portfolioData.js`

No need to touch the complex animation or 3D logic.

## 📈 Performance Notes

- **Scroll Performance**: Ensure `Lenis` is initialized in `App.jsx` for the signature smoothness.
- **3D Optimization**: The background scene is set to `pixelRatio: 1.0` to prevent overdraw on 4K/Retina displays.
- **CSS Tips**: Use `opacity` and `transform` for animations. Avoid animating `blur` or `filter` on high-frequency scroll events.

---

Built with ❤️ by [Harsh Kumar Yadav](https://github.com/Harsh-Yadav029)
