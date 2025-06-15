# 🧠 Zhians Mood Logging API

This is a simple REST API microservice built for logging user mood data, food intake, cravings, and notes. Built for a backend internship task at **Zhians**.

---

## 🚀 Tech Stack

- **Node.js + Express**
- **TypeScript**
- **PostgreSQL** (hosted on [Neon](https://neon.tech))
- **Prisma ORM**
- **Deployed on Vercel**

---

## 📦 Features

- Log a user's mood, food, cravings, and notes
- Edit existing logs
- Retrieve logs by user
- Delete logs

---

## 📁 Folder Structure

```
├── src/
│   ├── server.ts           # Express server
│   └── routes/
│       └── logRoutes.ts    # API routes for mood logging
├── prisma/
│   └── schema.prisma       # Prisma DB schema
├── dist/                   # Compiled JS output (after build)
├── tsconfig.json
├── package.json
└── vercel.json             # For deployment config
```

---

## 🔧 Local Setup

1. **Clone the repo**
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Configure environment**
   - Create `.env`:
     ```env
     DATABASE_URL="your_neon_db_url"
     PORT=3000
     ```

4. **Run Prisma**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. **Build and run**
   ```bash
   npm run build
   npm start
   ```

---

## 🌐 Deployed URL

```bash
https://zhians-mood-api.vercel.app
```

---

## 🔁 Postman Commands

### ➕ Create a new log
**POST** `/api/log-entry`  
```json
{
  "userId": "hirendra123",
  "mood": "happy",
  "food": "poha",
  "cravings": ["coffee", "sweets"],
  "notes": "Good morning!"
}
```

---

### 📥 Get all logs for a user
**GET** `/api/log-entry/:userId`  
Example:
```
GET /api/log-entry/hirendra123
```

---

### ✏️ Update a log
**PUT** `/api/log-entry/:id`  
```json
{
  "mood": "sad",
  "food": "nothing",
  "cravings": [],
  "notes": "Rough day."
}
```

---

### ❌ Delete a log
**DELETE** `/api/log-entry/:id`

---

## 🔐 Environment Variables

| Variable       | Purpose                         |
|----------------|---------------------------------|
| `DATABASE_URL` | PostgreSQL connection string    |
| `PORT`         | Server port (default: 3000)     |

---

## 🧪 Testing Tips

- Use **Postman** or **Thunder Client** (VSCode) to test all `/api/...` routes.
- Confirm Vercel routes start with `/api/` (as per `vercel.json`).
- Always build before deploying:
  ```bash
  npm run build
  ```

---

## 📣 Author

- **Hirendra** – Full-stack & Web3 Developer
