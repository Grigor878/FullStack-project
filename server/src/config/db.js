require('dotenv').config();

const mongoose = require('mongoose');

const url = process.env.MONGODB_URI || '';

async function connectToMongo() {
  try {
    await mongoose.connect(url);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

module.exports = {
  connectToMongo
};