# Frontend API Reference

This document describes the API methods available in `src/config/api/api.js`.

## Notes

- All methods return `response.data`.
- Authenticated routes require a valid token handled by `axiosInstance`.
- This is only a reference document; no UI integration is included here.

## `authApi`

- `login(email, password)` → `POST /auth/login`
- `register(username, email, password, role)` → `POST /auth/register`
- `verify(email)` → `POST /auth/verify`
- `verifyAccount(token)` → `GET /auth/verify-account?token=...`
- `updateProfile(profileData)` → `PATCH /users/me`
- `getProfile()` → `GET /users/me`
- `deleteProfile()` → `DELETE /users/me`

Example payload (`register`):

```json
{
  "username": "john",
  "email": "john@example.com",
  "password": "123456",
  "role": "customer"
}
```

## `userApi`

- `getMe()` → `GET /users/me`
- `updateMe(profileData)` → `PATCH /users/me`
- `deleteMe()` → `DELETE /users/me`

Example payload (`updateMe`):

```json
{
  "username": "new-name",
  "role": "seller"
}
```

## `categoryApi`

- `createCategory(name, description, icon)` → `POST /categories/create`
- `getCategories()` → `GET /categories`
- `getCategoryById(categoryId)` → `GET /categories/:id`
- `updateCategory(categoryId, name, description, icon)` → `PUT /categories/:id`
- `deleteCategory(categoryId)` → `DELETE /categories/:id`

Example payload (`createCategory`):

```json
{
  "name": "Electronics",
  "description": "Electronic devices",
  "icon": "https://example.com/icon.png"
}
```

## `productApi`

- `createProduct(name, productCategory, productImage, description, brand, costPrice, sellingPrice, comparePrice, stock)` → `POST /products/create`
- `getProducts()` → `GET /products`
- `getProductById(productId)` → `GET /products/:id`
- `getProductsByCategory(categoryId)` → `GET /products/get-product-by-category?category=...`
- `updateProduct(productId, name, productCategory, productImage, description, brand, costPrice, sellingPrice, comparePrice, stock)` → `PUT /products/:id`
- `deleteProduct(productId)` → `DELETE /products/:id`

Example payload (`createProduct`):

```json
{
  "name": "Wireless Mouse",
  "productCategory": "category-uuid",
  "productImage": ["https://example.com/mouse-1.png"],
  "description": {
    "summary": "Ergonomic mouse"
  },
  "brand": "Logi",
  "costPrice": 10.5,
  "sellingPrice": 15.99,
  "comparePrice": 19.99,
  "stock": 100
}
```

## `cartApi`

- `createCart(productId, quantity)` → `POST /cart/create`
- `getCart()` → `GET /cart`
- `updateCartItem(productId, quantity)` → `PUT /cart/update`
- `removeCartItem(productId)` → `DELETE /cart/delete` (body: `{ productId }`)

Example payload (`createCart`):

```json
{
  "productId": "product-uuid",
  "quantity": 2
}
```

## `orderApi`

- `createOrder(orderItems, shippingAddress, paymentMethod)` → `POST /orders/create`
- `getAllOrders()` → `GET /orders`
- `getMyOrders()` → `GET /orders/user-orders`
- `getOrderById(orderId)` → `GET /orders/:id`
- `updateOrderStatus(orderId, status)` → `PUT /orders/:id/status`
- `deleteOrder(orderId)` → `DELETE /orders/:id`

Example payload (`createOrder`):

```json
{
  "orderItems": [
    {
      "productId": "product-uuid",
      "quantity": 2
    }
  ],
  "shippingAddress": {
    "fullName": "John Doe",
    "phone": "9800000000",
    "address": "Kathmandu"
  },
  "paymentMethod": "cash_on_delivery"
}
```

Example payload (`updateOrderStatus`):

```json
{
  "status": "shipped"
}
```
