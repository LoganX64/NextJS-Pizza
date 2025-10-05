# 🍕 Next.js Pizza Ordering App

A modern pizza ordering web application built with **Next.js**, **TypeScript**, and **Tailwind CSS**, featuring customizable pizzas, extra toppings, and a smooth user interface.

---

## 🚀 Features

- Browse pizza and beverages
- Select pizza size and crust
- Add extra toppings
- Add items to cart (UI simulation)
- Responsive design for desktop and mobile
- Modern UI components using **ShadCN/UI** and Radix UI

---

## 🛠 Tech Stack

| Layer            | Technology                        |
| ---------------- | --------------------------------- |
| Frontend         | Next.js 15 (App Router)           |
| UI               | Tailwind CSS, ShadCN/UI, Radix UI |
| Language         | TypeScript                        |
| Image Handling   | Next.js Image component           |
| Icons            | Lucide React                      |
| State Management | React Hooks                       |
| Routing          | Next.js App Router (`useRouter`)  |

---

## 📦 Dependencies

### Main dependencies

- `next` 15.0.3
- `react` 19.0.0-rc
- `react-dom` 19.0.0-rc
- `clsx`, `class-variance-authority`
- `@radix-ui/*` (dialog, label, radio-group, select, slot, tabs)
- `lucide-react`
- `tailwind-merge`, `tailwindcss-animate`

### Dev dependencies

- `typescript` 5
- `eslint`, `eslint-config-next`
- `@types/node`, `@types/react`, `@types/react-dom`
- `postcss`, `tailwindcss`

---

## 📂 Project Structure

```
/components     # Reusable UI components (ProductCard, ToppingCard, etc.)
/pages          # App pages (Home, product selection, etc.)
/public         # Images and assets (pizza, toppings, icons)
/styles         # Global CSS or Tailwind configuration
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/<USERNAME>/<REPO>.git
cd <REPO>
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🖼 Screens & Components

- **Home Page**: Hero section with “Get your pizza now” call-to-action
- **Product Tabs**: Browse Pizza or Beverages
- **ProductCard**: Select pizza, choose size, crust, and extra toppings
- **ToppingsList**: Add/remove extra toppings
- **Dialog**: Smooth modal for customizing pizza before adding to cart

---

## 💡 Notes

- This app currently simulates cart actions in the UI; backend integration (orders, payments) can be added.
- Images are served from `/public` folder.
- State management is handled locally with React hooks.

---

## 📄 License

MIT License

---

## 👨‍💻 Author

**Jitin K**  
[GitHub](https://github.com/Loganx64) •
