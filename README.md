# 📚 Novara - Ebook Sharing Platform

![Next.js](https://img.shields.io/badge/Frontend-Next.js-black)
![Express.js](https://img.shields.io/badge/Backend-Express.js-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![Stripe](https://img.shields.io/badge/Payment-Stripe-purple)

A modern full-stack ebook platform where readers can discover, purchase, and manage ebooks while writers can publish and track their content through dedicated dashboards.

🌐 Live Demo: https://novara-client.vercel.app


---

## ✨ Features

### 🔐 Authentication & Authorization
- Email/password authentication
- Google OAuth login
- JWT based authentication
- Secure session handling
- Role-based access control

Roles:
- Reader
- Writer
- Admin


### 📚 Ebook Management

Readers can:

- Browse ebooks
- Search by title and writer
- Filter by genre, price, and availability
- Sort ebooks
- View ebook details
- Bookmark books
- Purchase ebooks
- Manage purchased library


Writers can:

- Add ebooks
- Upload cover images
- Edit and delete ebooks
- Publish/unpublish books
- View sales history
- Track performance


Admins can:

- Manage users
- Manage all ebooks
- Monitor transactions
- View platform analytics


---

## 💳 Payment Integration

Integrated with **Stripe Checkout**

Payment flow:

```
Select Ebook
      ↓
Stripe Checkout
      ↓
Payment Verification
      ↓
Purchase Saved
      ↓
User Gets Access
```


---

## 📊 Dashboard System

### Writer Dashboard

```
/dashboard/writer
```

Includes:

- Profile management
- Ebook management
- Sales tracking
- Statistics


### Reader Dashboard

```
/dashboard/reader
```

Includes:

- Purchased ebooks
- Bookmark collection
- Purchase history
- Profile


### Admin Dashboard

```
/dashboard/admin
```

Includes:

- User management
- Ebook control
- Revenue tracking
- Analytics charts


---

## 🖼️ Image Upload

Service:

**ImgBB API**

Used for:

- Ebook covers
- User profile images


---

## ⚡ UI Highlights

- Fully responsive design
- Modern dashboard UI
- Mobile friendly navigation
- Loading states
- Skeleton loaders
- Toast notifications
- Error handling
- Smooth animations


---

# 🛠️ Tech Stack


## Frontend

- Next.js
- React
- Tailwind CSS
- Hero UI
- Framer Motion


## Backend

- Node.js
- Express.js


## Database

- MongoDB


## Authentication

- JWT
- Google OAuth


## Payment

- Stripe


## Deployment

- Vercel


---

# 📦 Installation


## Frontend

```bash
git clone client-repository-url

cd client

npm install

npm run dev
```


## Backend

```bash
git clone server-repository-url

cd server

npm install

npm start
```


---

# 🔐 Environment Variables


### Frontend

```env
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_IMGBB_KEY=
```


### Backend

```env
MONGODB_URI=
JWT_SECRET=
STRIPE_SECRET_KEY=
CLIENT_URL=
```


---

# 📂 Project Structure


Frontend

```
src
│
├── app
├── components
├── lib
├── hooks
└── utils
```


Backend

```
server
│
├── routes
├── middleware
├── database
└── index.js
```


---

# 🚀 Future Improvements

- Wishlist system
- Email notifications
- Dark mode
- AI based recommendations


---

# 👨‍💻 Developer

Developed as a full-stack ebook marketplace platform using modern web technologies.