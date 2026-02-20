# Ecommerce Backend

Production-style Node.js ecommerce backend using Express + Sequelize with layered architecture.

## Features

- JWT authentication (access + refresh token)
- Separate token generation/verification helpers
- Password hashing with bcrypt
- Role-based authorization (`user`, `seller`, `admin`)
- Product management for sellers
- Cart and order APIs for users
- Order management for sellers
- Nodemailer integration for welcome/order emails
- Validation middleware using express-validator
- Background job scaffold using node-cron

## Project Structure

```txt
server/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── helpers/auth/
│   ├── jobs/
│   ├── middlewares/
│   ├── models/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── validators/
│   ├── app.js
│   └── server.js
├── migrations/
├── seeders/
├── tests/
└── .env
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Configure `.env`:

```env
DB_NAME=your_db
DB_HOST=your_host
DB_PORT=5432
DB_USER=your_user
DB_PASSWORD=your_password
DB_DIALECT=postgres
DB_SSL=true

PORT=5000
NODE_ENV=development

JWT_ACCESS_SECRET=change_this_access_secret
JWT_REFRESH_SECRET=change_this_refresh_secret
JWT_ACCESS_EXPIRES_IN=1d
JWT_REFRESH_EXPIRES_IN=7d

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
EMAIL_FROM=no-reply@ecommerce.local
```

3. Start server:

```bash
npm run dev
```

## API Base URL

`/api`

## Main Endpoints

### Auth

- `POST /api/auth/register`
- `POST /api/auth/login`

### User

- `GET /api/users/me`
- `PATCH /api/users/me`

### Products

- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products` (seller/admin)
- `PATCH /api/products/:id` (seller/admin)
- `DELETE /api/products/:id` (seller/admin)

### Orders & Cart

- `POST /api/orders/cart`
- `GET /api/orders/cart`
- `DELETE /api/orders/cart/:productId`
- `POST /api/orders`
- `GET /api/orders/my-orders`
- `GET /api/orders/seller-orders` (seller/admin)
- `PATCH /api/orders/:id/status` (seller/admin)

## Notes

- The app currently uses `sequelize.sync()` on startup for quick development.
- For production, prefer migrations in the `migrations/` folder.
