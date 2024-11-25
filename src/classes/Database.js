const mongoose = require('mongoose');
require('dotenv').config(); // Ensure .env is loaded

class Database {
  constructor() {
    this.uri = process.env.MONGO_URI; // Mongo URI from .env file
  }

  async connect() {
    try {
      await mongoose.connect(this.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB successfully!');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
      process.exit(1); // Exit the process if MongoDB connection fails
    }
  }
}

module.exports = Database;
