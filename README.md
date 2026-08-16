# chat-app

This is a full-stack chat application built with the MERN stack and Socket.io.

[frontend repo](https://github.com/AlirezaHassaniEghtedar/chat-app)
<br>
[backend repo](https://github.com/AlirezaHassaniEghtedar/api-chat-app)

<br><br>

## Screenshots

**login page**
<br>
![login page](/public/screenshots/login-page.jpg)

<br>
<br>

**signup page**
<br>
![signup page](/public/screenshots/signup-page.jpg)

<br>
<br>

**Profile page**
<br>
![profile page](/public/screenshots/profile-page.jpg)

<br>
<br>

**settings / themes**
<br>
![theme customizing](/public/screenshots/theme-customizing.jpg)

<br>
<br>

**real time chat**
<br>
![real time chat](/public/screenshots/real-time-chat.jpg)

<br>
<br>

<br><br>

## Features

- Signup / login / logout with JWT stored in an HTTP-only cookie
- Real-time messaging with Socket.io
- Online/offline user status
- Send text messages and images (images are uploaded to Cloudinary)
- Upload and delete profile picture
- 30+ UI themes (DaisyUI) with persisted selection
- Protected routes and API endpoints

## Tech Stack

**Frontend**

- React 19 + Vite
- Zustand for state management
- Tailwind CSS + DaisyUI
- React Router
- Socket.io-client
- Axios

<br><br>

**Backend**

- Node.js + Express 5
- MongoDB + Mongoose
- Socket.io
- JWT for authentication
- Cloudinary for image storage
- bcryptjs for password hashing

<br><br>

## Getting Started

### Prerequisites

- Node.js
- A MongoDB database (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- A [Cloudinary](https://cloudinary.com/) account (free tier works fine)

### 1. Clone the backend repo and setup

```bash
git clone https://github.com/AlirezaHassaniEghtedar/api-chat-app.git
cd api-chat-app
npm install
```

Create a `.env` file in the `backend` folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
CLIENT_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Run the server :

```bash
npm run dev
```

### 2. Clone the frontend repo and setup

```bash
git clone https://github.com/AlirezaHassaniEghtedar/chat-app.git
cd chat-app
npm install
```

Run the app :

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Optional: seed the database with demo users

in the backend :

```bash
npm run seed
```

This creates a set of demo users .

## Notes

This project is currently run locally and not deployed. The screenshots above show the app running on localhost.
