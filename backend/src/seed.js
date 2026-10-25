/**
 * seed.js
 * Clears the users collection and inserts a set of hardcoded profiles.
 * Run with: npm run seed
 */

require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/user.model');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/user_profiles';

const SEED_USERS = [
  {
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    bio: 'Full-stack developer with a passion for open-source software and clean code. Loves hiking on weekends.',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Bob Martinez',
    email: 'bob.martinez@example.com',
    bio: 'Backend engineer specialising in distributed systems and cloud infrastructure. Coffee enthusiast.',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: 'Carol Lee',
    email: 'carol.lee@example.com',
    bio: 'UX designer turned frontend developer. Obsessed with accessibility and pixel-perfect interfaces.',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
  },
  {
    name: 'David Kim',
    email: 'david.kim@example.com',
    bio: 'DevOps advocate and Kubernetes enthusiast. Believes everything should be automated.',
    avatarUrl: 'https://i.pravatar.cc/150?img=7',
  },
  {
    name: 'Eva Nguyen',
    email: 'eva.nguyen@example.com',
    bio: 'Data scientist with an eye for storytelling. Turns raw data into actionable insights.',
    avatarUrl: 'https://i.pravatar.cc/150?img=9',
  },
  {
    name: 'Frank Osei',
    email: 'frank.osei@example.com',
    bio: 'Mobile developer (iOS & Android). Enjoys game development as a side hobby.',
    avatarUrl: 'https://i.pravatar.cc/150?img=11',
  },
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`✅  Connected to MongoDB at ${MONGO_URI}`);

    await User.deleteMany({});
    console.log('🗑️   Cleared existing user documents.');

    const inserted = await User.insertMany(SEED_USERS);
    console.log(`🌱  Inserted ${inserted.length} user profiles.`);

    inserted.forEach((u) => console.log(`   • ${u.name} <${u.email}>`));
  } catch (err) {
    console.error('❌  Seed error:', err.message);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('🔌  Disconnected from MongoDB.');
  }
}

seed();
