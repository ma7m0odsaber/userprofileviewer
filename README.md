# Simple User Profile Viewer

A basic **MEAN stack** web application that displays a list of hardcoded user profiles (name, email, short bio) stored in MongoDB and served via an Express.js REST API, consumed by an Angular frontend.

## Tech Stack

| Layer    | Technology        |
|----------|-------------------|
| Database | MongoDB 8.x       |
| Backend  | Node.js + Express |
| Frontend | Angular 17        |

## Project Structure

```
Simple User Profile Viewer/
├── backend/          # Express.js API server
│   ├── src/
│   │   ├── models/   # Mongoose schemas
│   │   ├── routes/   # API route handlers
│   │   └── seed.js   # DB seeder (hardcoded profiles)
│   ├── server.js
│   └── package.json
└── frontend/         # Angular application
    ├── src/
    │   └── app/
    │       ├── models/
    │       ├── services/
    │       └── components/
    └── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB 6+ (running locally on port 27017)
- Angular CLI 17+

### 1. Start MongoDB

Make sure your MongoDB service is running:

```bash
# Windows (run as Administrator if needed)
net start MongoDB
```

### 2. Backend Setup

```bash
cd backend
npm install
npm run seed   # seeds the DB with hardcoded profiles
npm start      # starts API on http://localhost:3000
```

### 3. Frontend Setup

```bash
cd frontend
npm install
ng serve       # starts Angular dev server on http://localhost:4200
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

## API Endpoints

| Method | Endpoint       | Description           |
|--------|----------------|-----------------------|
| GET    | `/api/users`   | Returns all profiles  |
| GET    | `/api/users/:id` | Returns single profile |

## License

MIT
