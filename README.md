# 📚 Novara - Ebook Sharing Platform

![Next.js](https://img.shields.io/badge/Frontend-Next.js-black)
![Express.js](https://img.shields.io/badge/Backend-Express.js-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![Stripe](https://img.shields.io/badge/Payment-Stripe-purple)

## 🌐 Live Website

🔗 https://novara-client.vercel.app


## 📖 Project Overview

Novara is a full-stack ebook sharing platform that connects readers, writers, and administrators in one digital ecosystem.

Readers can explore ebooks, search, filter, purchase, bookmark, and manage their digital library. Writers can upload, manage, and track their ebook sales. Admins can manage users, ebooks, transactions, and platform analytics.

This project demonstrates real-world full-stack development concepts including authentication, role-based authorization, CRUD operations, payment integration, image upload, pagination, filtering, and analytics dashboard.


---

# ✨ Key Features


## 🔐 Authentication

- Email & Password Authentication
- Google Login
- JWT Authentication
- Secure session handling
- Role based access system

Roles:

- Reader
- Writer
- Admin


---

# 🏠 Home Page

Features:

- Modern hero section
- Featured ebooks
- Top writers section
- Ebook genres showcase
- Responsive design
- Smooth animations


---

# 📚 Browse Ebook Page

Users can browse ebooks without login.

Features:

### Search

- Search by ebook title
- Search by writer name


### Filtering

- Filter by genre
- Filter by price range
- Filter by availability


### Sorting

- Newest ebooks
- Price low to high
- Price high to low


### Pagination

- Page navigation
- Previous / Next button
- Backend pagination


---

# 📖 Ebook Details Page

Displays:

- Ebook cover
- Title
- Writer information
- Description
- Genre
- Price
- Upload date
- Availability status


Actions:

- Purchase ebook
- Bookmark ebook
- View writer profile


Payment Process:

1. User selects ebook
2. Stripe checkout opens
3. Payment completed
4. Purchase record saved
5. User gets ebook access


---

# 👨‍💻 Writer Dashboard

Route:

```
/dashboard/writer
```


Features:

- Writer profile
- Add ebook
- Edit ebook
- Delete ebook
- Publish/unpublish ebook
- Manage uploaded books
- Sales history
- Statistics


---

# 👤 Reader Dashboard

Route:

```
/dashboard/user
```


Features:

- User profile
- Purchase history
- Purchased ebooks
- Bookmark collection


---

# 🛡️ Admin Dashboard

Route:

```
/dashboard/admin
```


Features:


### Manage Users

- View users
- Change roles
- Delete users


### Manage Ebooks

- View all ebooks
- Publish/unpublish
- Delete ebooks


### Manage Transactions

- View payments
- Track revenue


### Analytics

- Total users
- Total writers
- Total ebooks sold
- Total revenue
- Sales charts
- Genre charts


---

# 💳 Payment System

Payment integration:

**Stripe**

Features:

- Secure checkout
- Payment verification
- Transaction history
- Purchase management


---

# 🖼️ Image Upload

Service:

**ImgBB API**

Used for:

- Ebook cover images
- Profile images


---

# ⚡ UI Features

- Fully responsive
- Mobile friendly
- Modern UI design
- Loading spinner
- Skeleton loader
- Error handling
- Custom 404 page
- Toast notifications
- Smooth animations


---

# 🛠️ Technologies Used


## Frontend

- Next.js
- React
- Tailwind CSS
- Hero UI
- Framer Motion
- Lucide React


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

# 📦 Packages


Frontend:

```bash
next
react
tailwindcss
framer-motion
@heroui/react
lucide-react
jsonwebtoken
```


Backend:

```bash
express
mongodb
cors
dotenv
jsonwebtoken
stripe
```


---

# 🔐 Environment Variables


Frontend:

```env
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_IMGBB_KEY=
```


Backend:

```env
MONGODB_URI=
JWT_SECRET=
STRIPE_SECRET_KEY=
CLIENT_URL=
```


---

# 🚀 Installation


## Frontend Setup

```bash
git clone client-repository-url

cd client

npm install

npm run dev
```


## Backend Setup

```bash
git clone server-repository-url

cd server

npm install

npm start
```


---

# 🔑 Admin Login


Email:

```
admin@fable.com
```


Password:

```
Admin@123
```


---

# 📂 Folder Structure


Frontend:

```
src
│
├── app
├── components
├── lib
├── hooks
└── utils
```


Backend:

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
- Personalized recommendations


---

# 👨‍💻 Developer

Developed as a full-stack ebook sharing platform using modern web technologies.