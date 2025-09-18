# Fasting Tracker – Frontend (React + Vite)

##  Overview
This is the **frontend** of the **Fasting Tracker** project.  
Built with **React (Vite)**, it connects to the backend API (Express + MongoDB) to provide a smooth user interface for tracking fasting sessions, goals, and statistics.

---

##  Features
- **Authentication** (Signup, Login, Protected Routes with JWT)  
-  **Fasting Sessions** (start, stop, view history)  
-  **Goals Management** (set weekly/monthly fasting targets)  
-  **Stats Dashboard** (track progress over time)  
-  **TanStack Query** for API data fetching and caching  
-  Clean UI with responsive design  

---

##  Tech Stack
- **React 18** + **Vite**
- **React Router v6**
- **TanStack Query**
- **Axios**
- **Context API** for Auth state
- **TailwindCSS** 

---

##  Project Structure
```bash
src/
 ├─ api/            # axios instance, token handling
 ├─ auth/           # AuthContext, useAuth hook
 ├─ components/     # Reusable UI components
 ├─ features/       # Fasts, Goals, Stats modules
 ├─ pages/          # Login, Signup, Dashboard, Sessions
 ├─ App.jsx         # Routes setup
 └─ main.jsx        # React root
