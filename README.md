# MindManthan Software Solutions Pvt. Ltd.

A professional IT service platform offering web development, mobile app development, and digital marketing solutions. This repository contains the codebase for our full-stack software solution built with **React**, **Node.js**, **Express.js**, and **MongoDB**.

## 🌐 Live Demo
🚀 Coming Soon – Production deployment under `www.mindmanthansoftware.com`

---

## 📌 Features

- 🔐 JWT-based Login and Route Protection
- 🖥️ Responsive Frontend (React + Tailwind CSS)
- 🌐 Dynamic Service Pages
- 📊 MongoDB Integration for User and Service Data
- 🚪 Logout with Token Expiry and Verification
- ✨ Animated UI with Professional Design

---

## 🛠️ Tech Stack

| Area         | Technology           |
|--------------|----------------------|
| Frontend     | React.js, Tailwind CSS, React Router |
| Backend      | Node.js, Express.js |
| Database     | MongoDB, Mongoose |
| Auth         | JWT (JSON Web Token) |
| Dev Tools    | VSCode, Git, Postman |

---

## ⚙️ Project Structure

```
mindmanthan/
├── client/               # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── main.jsx
│   └── package.json
├── server/               # Node + Express backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── index.js
│   └── .env
├── .gitignore
└── README.md
```

---

## 🔧 Instructions to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mindmanthan.git
cd mindmanthan
```

---

### 2. Setup Backend (Node + Express + MongoDB)

```bash
cd server
npm install
```

#### ➕ Create `.env` File in `server/` with:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/mindmanthan
JWT_SECRET= Ask the main author for the key
```

#### ▶️ Start Backend Server

```bash
npm run dev
# or
node index.js
```

---

### 3. Setup Frontend (React App)

```bash
cd ../client
npm install
npm run dev
```

Access the frontend at: [http://localhost:5173](http://localhost:5173)

---

## 🧪 API Endpoints

| Method | Endpoint        | Description                  |
|--------|------------------|------------------------------|
| POST   | `/api/auth/login` | User login with JWT          |
| POST   | `/api/auth/register` | Register new user         |
| GET    | `/api/protected` | Protected route (JWT required) |
| POST   | `/api/logout`    | Invalidate token (optional)  |

---

## 📷 Screenshots

> Add screenshots or screen recordings here
![image](https://github.com/user-attachments/assets/80da03e7-d274-45c8-a1af-1f8d81b03cf9)
> ![image](https://github.com/user-attachments/assets/5c2d8830-7db3-4a47-b746-bfe838cc3f25)
>  ![image](https://github.com/user-attachments/assets/ac408584-1912-4d28-9f3d-66942bfeef4f)
![image](https://github.com/user-attachments/assets/c58d3180-538d-40bc-a78f-0afcba3b812c)



---

## 📩 Contact

**MindManthan Software Solutions Pvt. Ltd.**  
📧 Email: mindmanthansoftware@gmail.com  
📞 Phone: +91 9277267732 | +91 7011502461  
🌐 Website: [mindmanthansoftware.com](http://mindmanthansoftware.com)

---

## 🤝 License

This project is licensed under the MIT License – feel free to use and contribute.
