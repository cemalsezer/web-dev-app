# User CRUD App

A simple React + TypeScript application that demonstrates full CRUD functionality for users using data fetched from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/).

---

## 🚀 Features

- 🔗 Routing with React Router (`/`, `/users`, `/posts`)
- 📄 Fetching Users and Posts from external API
- ✍️ Add / Edit / Delete Users (Local state)
- 📦 Type-safe data with TypeScript interfaces
- ✅ ESLint integrated with clean project structure

---

## 🛠️ Tech Stack

- React
- TypeScript
- Vite
- React Router DOM
- ESLint (Flat config)

---

## 📂 Project Structure

```
frontend/
├── components/
├── pages/
├── services/
├── types/
├── App.tsx
└── ...
```

---

## 🧪 Getting Started

### 1. Install dependencies:

```bash
npm install
```

### 2. Start the development server:

```bash
npm run dev
```

### 3. Open in browser:

```
http://localhost:5173
```

---

## 🧭 Available Routes

- `/` → Homepage
- `/users` → View, add, edit, and delete users
- `/posts` → View posts (read-only)

---

## 🔗 Live Demo

_(Optional)_ Add your deployed Vercel or Netlify link here.

---

## 📌 Notes

- This app uses **local state only** for CRUD operations.
- No backend or database is connected yet.
- Backend integration is planned for Phase 2 using NestJS.

---