require('dotenv').config();  // Load environment variables from .env file
const Database = require('./classes/Database');  // MongoDB connection
const Server = require('./classes/Server');      // Server initialization

async function startApp() {
  const database = new Database();
  await database.connect();  // Connect to MongoDB

  const server = new Server();
  server.initialize();       // Initialize the server (Express + Socket.io)
}

startApp();  // Start the application
