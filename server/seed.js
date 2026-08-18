import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Coffee from './models/Coffee.js';
import { defaultCoffees } from './controllers/coffeeController.js';

dotenv.config();

const seedDatabase = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/brewed';
    console.log(`[Seed] Connecting to MongoDB: ${mongoUri}...`);
    
    await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 5000 });
    console.log('[Seed] Database connected!');

    await Coffee.deleteMany({});
    console.log('[Seed] Cleared existing coffee records.');

    // Prepare seeds without preset string IDs for Mongoose
    const seedData = defaultCoffees.map(({ _id, ...item }) => item);
    const createdCoffees = await Coffee.insertMany(seedData);
    
    console.log(`[Seed] Successfully seeded ${createdCoffees.length} coffee products:`);
    createdCoffees.forEach(c => console.log(` - ${c.name} (${c.origin}, ${c.roast} Roast)`));

    process.exit(0);
  } catch (error) {
    console.error(`[Seed Error] Seeding failed: ${error.message}`);
    process.exit(1);
  }
};

seedDatabase();
