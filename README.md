# Threadloop — Clothing Rental Webapp

A basic React webapp for a clothing rental service. Browse clothing items, add them to your cart, and check out to rent them.

This project is built with [React](https://react.dev) and [Vite](https://vitejs.dev) (a fast development server and build tool).

---

## 1. Setting up React locally (first-time setup)

If you've never run a React project on your computer before, follow these steps first.

### Step 1: Install Node.js

React projects run on **Node.js**, a JavaScript runtime. It also comes with **npm** (Node Package Manager), which installs the project's dependencies.

1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS** (Long Term Support) version for your operating system
3. Run the installer and follow the prompts (the default options are fine)

### Step 2: Verify the installation

Open a terminal (macOS: **Terminal** app, Windows: **Command Prompt** or **PowerShell**) and run:

```bash
node --version
npm --version
```

You should see version numbers printed for both (e.g. `v20.11.0` and `10.2.4`). If you see "command not found", restart your terminal (or your computer) and try again.

### Step 3 (optional): Install a code editor

We recommend [Visual Studio Code](https://code.visualstudio.com) — it's free and works great with React.

---

## 2. Running this project

Once Node.js is installed:

### Step 1: Open a terminal in the project folder

```bash
cd path/to/clothing-rental
```

### Step 2: Install dependencies

This downloads React, Vite, and everything else the project needs into a `node_modules` folder. You only need to do this once (or whenever `package.json` changes).

```bash
npm install
```

### Step 3: Start the development server

```bash
npm run dev
```

Vite will print a local address, usually:

```
  Local:   http://localhost:5173/
```

Open that address in your browser. The site auto-reloads whenever you save a file — try editing something in `src/` and watch it update.

To stop the server, press `Ctrl + C` in the terminal.

### Step 4 (when you're ready to deploy): Build for production

```bash
npm run build
```

This creates an optimized `dist/` folder you can host on any static web host.

---

## 3. Project structure

```
clothing-rental/
├── index.html                  # Page shell that loads the React app
├── package.json                # Project metadata + dependencies + scripts
├── vite.config.js              # Vite configuration
└── src/
    ├── main.jsx                # Entry point — mounts <App /> into the page
    ├── App.jsx                 # Root component — holds cart state
    ├── index.css               # Global styles
    ├── data/
    │   └── clothingItems.js    # The clothing catalog (name, price, image)
    └── components/
        ├── Header.jsx          # Top bar with logo + cart button
        ├── ClothingCard.jsx    # One clothing item: image, name, price, Add to cart
        └── Cart.jsx            # Slide-out cart panel with rental summary
```

---

## 4. How it works (quick tour)

- **`src/data/clothingItems.js`** — the catalog. Add, remove, or edit items here; the grid updates automatically. Swap the placeholder `image` URLs for your real product photos.
- **`src/components/ClothingCard.jsx`** — renders a single item with its image, name, rental price, and an **Add to cart** button.
- **`src/App.jsx`** — keeps the cart in React state (`useState`) and passes an `addToCart` function down to each card.
- **`src/components/Cart.jsx`** — shows what's in the cart with a total. The **Check out** button is a stub — this is where you'd integrate a payment provider (e.g. Stripe) later.

---

## 5. Common issues

| Problem | Fix |
|---|---|
| `npm: command not found` | Node.js isn't installed or the terminal needs restarting |
| `npm install` fails with permission errors | Don't use `sudo`; reinstall Node via the official installer or [nvm](https://github.com/nvm-sh/nvm) |
| Port 5173 already in use | Vite will offer another port automatically, or stop the other process |
| Blank page in browser | Check the terminal and browser console (F12) for errors |
