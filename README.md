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
```

## 🔧 Environment (.env)

Create a `.env` file in the **project root directory** and add the following variables:

```env
PORT=3000

# Database Configuration (MySQL)
DB_HOST=localhost
DB_NAME=ecommerce
DB_USER=root
DB_PASS=
DB_DIALECT=mysql

# JWT Configuration
JWT_SECRET=your_jwt_secret_key

# Email Configuration 
EMAIL=example@gmail.com
EMAIL_PASS=your_email_password
```

## Postman collection:
  https://documenter.getpostman.com/view/44403146/2sB3Wk14R9


## 📸 Screenshots :
<img width="1540" height="695" alt="{37473E7E-0F22-4C1B-92E2-228A063BF597}" src="https://github.com/user-attachments/assets/a5c0b55d-a307-448e-b28b-0dce94663c2f" />
<img width="1519" height="680" alt="{ADAAAD41-D63E-4B51-A4CB-60EEFAD79EA0}" src="https://github.com/user-attachments/assets/e95fd620-e285-44a0-97b3-cce398a38a4a" />
