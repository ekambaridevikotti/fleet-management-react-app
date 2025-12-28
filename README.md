# Mini Fleet Management App (React)

A mini fleet management application built using **React** that demonstrates
authentication, protected routing, CRUD operations, and basic performance
optimization using React hooks.

The application focuses on **core React concepts and logic**, with minimal UI
and no external state management libraries.

---

## 🚀 Features

- Authentication with fixed admin credentials
- Protected routes using React Router
- Admin dashboard with fleet management
- Add, update, delete, and manage vehicle availability
- Performance optimization using `React.memo` and `useCallback`
- Clean component-based architecture

---

## 🔐 Authentication Details

Use the following credentials to log in:

- **Email:** `admin@gmail.com`
- **Password:** `admin1234`

Unauthenticated users cannot access the admin dashboard.

---

## 🛣️ Routes

| Route   | Access Type | Description          |
|--------|------------|----------------------|
| /login | Public     | Login page           |
| /admin | Protected  | Admin dashboard      |

---

## 🧩 Application Structure

src/

├── components/

│ ├── ProtectedRoute.js

│ ├── FleetCard.js

│ ├── Navbar.js

│ └── Sidebar.js

├── pages/

│ ├── Login.js

│ └── Admin.js

├── App.js

└── index.js

---

## 🧠 React Concepts Used

- `useState` – form handling, authentication state, fleet data
- `useEffect` – focusing input on page load
- `useRef` – email input focus
- `useCallback` – optimized handler functions
- `React.memo` – prevents unnecessary re-renders
- React Router – routing and navigation
- Protected Routes – access control logic

---

## ⚙️ Fleet Management Functionality

### Add Fleet
- Vehicle Registration Number
- Category (Auto / Car / Truck / Bus)
- Driver Name
- Availability Status
- Validates required fields
- Clears form after submission

### Update Driver
- Uses `prompt()`
- Prevents empty or invalid input

### Change Availability
- Toggles between Available and Unavailable
- Updates UI instantly

### Delete Fleet
- Requires confirmation using `confirm()`
- Deletes only after confirmation

---

## ⚡ Performance Optimization

To avoid unnecessary re-renders:
- FleetCard component is extracted and wrapped with `React.memo`
- Action handlers are memoized using `useCallback`

Only the affected fleet card re-renders on updates.

---

## 🧪 Running the Project Locally

To run this project on your system:

1. Download or clone the repository from GitHub.

2. Navigate to the project folder:
   ```bash
   cd fleet-management-react-app
   
### Install dependencies:
  npm install
  
### Start the development server:
  npm start

### Open in browser:
  http://localhost:3000/login

## 📌 Notes
UI is intentionally minimal

No external state management libraries are used

Focus is on React fundamentals and correctness

## 👩‍💻 Author
Ekambari Devi Kotti

### GitHub: https://github.com/ekambaridevikotti

