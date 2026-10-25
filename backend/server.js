require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const usersRouter = require('./src/routes/users.routes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/user_profiles';

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors({ origin: 'http://localhost:4200' })); // allow Angular dev server
app.use(express.json());

// ── Routes ────────────────────────────────────────────────────────────────────
app.get('/', (req, res) => res.json({ message: 'User Profile Viewer API is running.' }));
app.use('/api/users', usersRouter);

// ── 404 handler ───────────────────────────────────────────────────────────────
app.use((req, res) => res.status(404).json({ success: false, message: 'Route not found.' }));

// ── Global error handler ──────────────────────────────────────────────────────
app.use((err, req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal server error.' });
});

// ── Database + Server startup ─────────────────────────────────────────────────
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(`✅  MongoDB connected: ${MONGO_URI}`);
    app.listen(PORT, () => console.log(`🚀  API server listening on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('❌  MongoDB connection failed:', err.message);
    process.exit(1);
  });
