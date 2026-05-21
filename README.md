# React Chat Interface: Manual State & UI Architecture

**A Zero-Dependency, Hand-Coded Frontend Engineering Exercise**

This project is a custom chat interface built from scratch in React. It was developed strictly without AI code generation or external UI component libraries (no Material UI, no Tailwind blocks). 

The primary objective of this repository is to demonstrate a raw understanding of React component lifecycles, deterministic state management, and optimized CSS rendering.

## 🛠 Technical Infrastructure

| Domain | Implementation |
| :--- | :--- |
| **Core Framework** | React (Functional Components & Hooks) |
| **State Management** | Manual array and input buffer handling |
| **Styling** | Vanilla CSS3 (Custom properties, composite layers) |
| **Architecture** | Component-driven, zero-dependency UI |

## ⚙️ Core Engineering Focus

### 1. Deterministic State Handling
The chat flow relies on strict, immutable state updates. Message payloads (user and bot) are structured dynamically, ensuring that the rendering cycle only updates the necessary DOM nodes when a new message is pushed to the stack.

### 2. High-Performance CSS Transitions
Smooth transitions are notoriously easy to break if you animate the wrong properties. The glowing borders, layout shifts, and message entrances in this UI are optimized by animating only composite properties (`transform` and `opacity`). 

By avoiding layout-thrashing properties like `margin` or `height` during animations, the UI maintains a strict rendering budget:
$$\text{Frame Render Time} \leq 16.67\text{ms}$$
This guarantees a locked $60\text{fps}$ visual transition across devices.

### 3. Glassmorphism & Visual Hierarchy
Implemented complex CSS layering, utilizing nested box-shadows, background blurs, and strict contrast ratios to separate the chat canvas from the viewport background, maintaining legibility in a dark-mode environment.

## 🚀 Execution & Local Deployment

No bloated environment setups. Just standard Node execution.

```bash
# Clone the repository
git clone [https://github.com/mhlohh/](https://github.com/mhlohh/)[YOUR-REPO-NAME].git

# Navigate to directory
cd [YOUR-REPO-NAME]

# Install core dependencies (React)
npm install

# Initialize local development server
npm start


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
