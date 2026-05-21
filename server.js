const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const { handleSetupWizard } = require('./pages/api/setup-wizard');

const app = express();

app.use(cors());
app.use(express.json());

// API endpoints
app.post('/api/setup-wizard', handleSetupWizard);

// Routes (BEFORE static files)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'landing.html'));
});

app.get('/wizard', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/health', (req, res) => {
  res.json({ status: 'Server is running!' });
});

// Serve static files (AFTER routes)
app.use(express.static('.'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:3000`);
  console.log(`📱 Landing page at http://localhost:3000`);
  console.log(`📱 Wizard at http://localhost:3000/wizard`);
});