<div align="center">



# Ecommerce Demo Platform

### _Full-Stack E-commerce App with Next.js + Express + PostgreSQL_

[![Version](https://img.shields.io/badge/version-v1.0-blue.svg)](#)
[![License](https://img.shields.io/badge/license-Private-red.svg)](#license)
[![Node.js](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen.svg)](https://nodejs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black.svg)](https://nextjs.org/)

[Client Setup](./client/README.md) • [Server Setup](./server/README.md) • [API Reference](./client/src/config/api/api-usage.md)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Scripts](#scripts)
- [License](#license)

---

## Overview

**Ecommerce Demo** is a full-stack e-commerce project with separate frontend and backend applications:

- **Frontend**: Next.js app (`client`) with reusable UI components and API layer.
- **Backend**: Express API server (`server`) with Sequelize + PostgreSQL.

It includes authentication, user profile management, category/product management, cart operations, and order workflows.

---

## Features

### Authentication & Users

- User registration and login
- Email verification flow
- Profile get/update/delete (`/users/me`)
- Role-based authorization (`customer`, `seller`)

### Catalog

- Category CRUD
- Product CRUD
- Product listing and product-by-category filtering

### Shopping & Orders

- Cart create/read/update/delete item
- Order creation from cart-style items
- User order history
- Seller-only order management (list, status update, delete)

### Developer-Friendly Architecture

- Clear separation: routes → controllers → services → repositories
- Sequelize models and migrations support
- Centralized API helper in frontend (`src/config/api/api.js`)

---

## Tech Stack

### Frontend (client)

```json
{
  "framework": "Next.js 16.1.6",
  "ui": "React 19.2.3 + Tailwind CSS 4",
  "http": "Axios 1.13.5",
  "components": "Shadcn-based UI patterns"
}
```

### Backend (server)

```json
{
  "runtime": "Node.js 20+",
  "framework": "Express 4.16.1",
  "database": "PostgreSQL + Sequelize 6.37.7",
  "auth": "JWT + bcryptjs",
  "email": "Nodemailer",
  "validation": "express-validator"
}
```

---

## Installation

### Prerequisites

- **Node.js** >= 20
- **npm** >= 10
- **PostgreSQL** >= 14

### 1) Clone Repository

```bash
git clone https://github.com/prabinshrestha17/ecommerce-demo.git
cd ecommerce-demo
```

### 2) Install Dependencies

```bash
cd client && npm install
cd ../server && npm install
```

### 3) Configure Environment

Create these files:

- `server/.env`
- `client/.env.local`

See [Environment Variables](#environment-variables) section below.

### 4) Run Development Servers

#### Terminal 1 (Backend)

```bash
cd server
npm run dev
```

Backend runs at: `http://localhost:5000`

#### Terminal 2 (Frontend)

```bash
cd client
npm run dev
```

Frontend runs at: `http://localhost:3000`

---

## Project Structure

```text
ecommerce-demo/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── config/
│   │   │   └── api/
│   │   │       ├── axios.js
│   │   │       ├── api.js
│   │   │       └── api-usage.md
│   │   └── lib/
│   └── package.json
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── repositories/
│   │   ├── routes/
│   │   ├── services/
│   │   └── validators/
│   └── package.json
└── README.md
```

---

## Environment Variables

### Server (`server/.env`)

```env
NODE_ENV=development
PORT=5000
APP_URL=http://localhost:5000

DB_NAME=ecommerce_db
DB_USER=postgres
DB_PASSWORD=your-db-password
DB_HOST=localhost
DB_PORT=5432
DB_DIALECT=postgres
DB_SSL=false

JWT_ACCESS_SECRET=your-access-secret
JWT_REFRESH_SECRET=your-refresh-secret
JWT_VERIFICATION_SECRET=your-verification-secret
JWT_ACCESS_EXPIRES_IN=1d
JWT_REFRESH_EXPIRES_IN=7d
JWT_VERIFICATION_EXPIRES_IN=1d

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EMAIL_FROM=no-reply@ecommerce.local
```

### Client (`client/.env.local`)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

## API Documentation

Base URL: `http://localhost:5000/api`

### Auth

```http
POST /auth/register
POST /auth/verify
GET  /auth/verify-account?token=...
POST /auth/login
```

### Users

```http
GET    /users/me
PATCH  /users/me
DELETE /users/me
```

### Categories

```http
POST   /categories/create
GET    /categories
GET    /categories/:id
PUT    /categories/:id
DELETE /categories/:id
```

### Products

```http
POST   /products/create
GET    /products
GET    /products/:id
GET    /products/get-product-by-category?category=:categoryId
PUT    /products/:id
DELETE /products/:id
```

### Cart

```http
POST   /cart/create
GET    /cart
PUT    /cart/update
DELETE /cart/delete
```

### Orders

```http
POST   /orders/create
GET    /orders
GET    /orders/user-orders
GET    /orders/:id
PUT    /orders/:id/status
DELETE /orders/:id
```

For frontend method usage, see:

- [client/src/config/api/api-usage.md](./client/src/config/api/api-usage.md)

---

## Scripts

### Client

```bash
cd client
npm run dev
npm run build
npm run start
```

### Server

```bash
cd server
npm run dev
npm run start
npm run migrate
npm run migrate:undo
```

---

## License

This project is **private** and proprietary.

---

<div align="center">

Built using Next.js, Express, and PostgreSQL.

</div>
