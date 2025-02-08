# 🚀 Fast Secure Task Tracker - Frontend (Vue.js)

A responsive, user-friendly frontend for managing tasks, built with **Vue.js** and connected to a **Nest.js backend** with **MongoDB Atlas**. This application allows users to register, log in securely using JWT, and manage their tasks with ease.

---

## 🚀 **Deployed Frontend URL**

🌐 **[Live Demo on Netlify](https://secure-task-tracker.netlify.app)**  

You can access the application and manage your tasks through this link.

---

## 📚 Table of Contents
- [Project Overview](#-project-overview)
- [Tech Stack](#%EF%B8%8F-tech-stack)
- [Getting Started](#-getting-started)
- [Run the Frontend Locally](#-run-the-frontend-locally)
- [Application Structure](#%EF%B8%8F-application-structure)
- [Deployment](#-deployment-netlify)
- [API Integration](#-api-integration)
- [License](#-license)

---

## 📋 Project Overview

The **Fast Secure Task Tracker (Frontend)** allows users to:
- **Register and Login** securely using JWT authentication.
- **Create, View, and Manage Tasks** seamlessly.
- **Logout** securely to clear session tokens.

This app interacts with the **NestJS backend** via RESTful APIs.

---

## 🛠️ Tech Stack

- **Framework:** [Vue.js 3](https://vuejs.org/)
- **State Management:** [Vuex](https://vuex.vuejs.org/)
- **Routing:** [Vue Router](https://router.vuejs.org/)
- **HTTP Requests:** [Axios](https://axios-http.com/)
- **Deployment:** [Netlify](https://www.netlify.com/)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Biswatosh01/secure_task_tracker_frontend.git
cd secure_task_tracker_frontend/frontend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory:

```ini
VUE_APP_API_URL=https://your-backend.onrender.com/api
```

## 💻 Run the Frontend Locally

### 🏃‍♂️ Development Mode

```bash
npm run serve
```
* **App URL:** `http://localhost:8080`

### 🚀 Production Build

```bash
npm run build
```

## ⚙️ Application Structure

```
frontend/
├── src/
│   ├── main.js           # Entry point of the application
│   ├── App.vue           # Root component
│   ├── router/           # Vue Router setup
│   │   └── index.js
│   ├── store/            # Vuex store for state management
│   │   └── index.js
│   └── views/            # Core views (components)
│       ├── Login.vue
│       ├── Signup.vue
│       ├── TaskList.vue
│       └── TaskForm.vue
├── public/
├── package.json
└── README.md
```

## 🌍 Deployment (Netlify)

### 1️⃣ Push Code to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2️⃣ Deploy on Netlify
1. Go to Netlify.
2. Click **"Add New Site" → Import from GitHub**.
3. Select your repository and configure the following:
   * **Build Command:** `npm run build`
   * **Publish Directory:** `dist`
4. Add environment variables (`VUE_APP_API_URL`).
5. Click **Deploy** 🚀

## 📡 API Integration
* **Base URL:** `${VUE_APP_API_URL}` (configured in `.env`)
* **Authorization:** JWT Token stored in `localStorage`.

Example API Request (Axios):

```javascript
const token = localStorage.getItem('token');
axios.get(`${process.env.VUE_APP_API_URL}/tasks`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
});
```

## 🔐 Key Features
* ✅ User Authentication (Signup/Login)
* ✅ Task Management (Add, View, and Delete Tasks)
* ✅ Secure API Integration with JWT Authentication
* ✅ Responsive UI Design

## 📜 License
This project is licensed under the **MIT License**.
