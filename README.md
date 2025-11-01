# E-Commerce API (Node.js + Express)

Backend for an e-commerce system covering auth (JWT), products, categories, coupons, cart, orders, and reviews.

## ✨ Features
- Auth (register/login, JWT, roles)
- Products, Categories, Subcategories
- Coupons & Discount logic
- Cart & Orders (with final price, totals)
- Image upload (multer) + validation
- Pagination, filtering, sorting
- Centralized error handling & request validation
- Basic security setup (Helmet, CORS)

## 🧱 Tech Stack
Node.js, Express.js, MongoDB (Mongoose), JWT, Multer, Joi/Zod, Winston/Morgan

## ⚙️ Local Setup
```bash
git clone https://github.com/Saqer-shehadeh/E-Commerce.git
cd E-Commerce
npm install
cp .env.example .env   # ثم عدّل القيم
npm run dev            # تشغيل بصلاحيات التطوير
