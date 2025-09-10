# Full Stack Blog Management App

A simple full-stack blog management app built with:

- **Frontend:** React + Vite + TypeScript   
- **Backend:** NestJS 

## 🌐 Live Links

- **Frontend (Vercel):** [web-dev-app-xi.vercel.app](https://web-dev-app-xi.vercel.app)
- **Backend (Render):** [web-dev-backend-ak62.onrender.com](https://web-dev-backend-ak62.onrender.com)

---

## 🚀 Features

### 🔹 Posts
- View all posts
- Add a new post
- Edit an existing post
- Delete a post

### 🔹 Users
- View all users
- Add a new user
- Edit an existing user
- Delete a user

---

## 📁 Folder Structure

```
client/           # React frontend
├── src/
│   ├── components/
│   │   ├── PostList.tsx
│   │   ├── UserList.tsx
│   │   ├── Navbar.tsx
│   ├── pages
│   │   ├── AddPost.tsx
│   │   ├── EditPost.tsx
│   │   ├── Homepage.tsx
│   └── App.tsx
│   ├── services
│   │   ├── api.ts

server/           # NestJS backend
├── src/
│   ├── app.controller.ts
│   ├── app.service.ts
│   ├── post/
│   └── user/
│   └── main.ts
```

---

## ⚙️ Installation & Development

### Backend (NestJS)

```bash
cd server
npm install
npm run start:dev
```

### Frontend (React)

```bash
cd client
npm install
npm run dev
```

---

## 🛠️ Environment Setup

### Frontend `.env` file

Create a `.env` file inside the `client` folder:

```env
VITE_API_BASE_URL=https://web-dev-backend-ak62.onrender.com
```


