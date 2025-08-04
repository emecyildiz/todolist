const express = require('express');
const app = express();
const PORT = 8000;

// Middleware
app.use(express.json()); // JSON verisini okuyabilmek için
