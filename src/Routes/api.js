// src/routes/api.js
const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// Example GET route
router.get('/example', apiController.exampleFunction);

module.exports = router;
