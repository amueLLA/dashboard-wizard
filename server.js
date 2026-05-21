const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const { handleSetupWizard } = require('./pages/api/setup-wizard');

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from root directory
app.use(express.static('.'));

// API endpoint
app.post('/api/setup-wizard', handleSetupWizard);

// Serve index.html for root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running!' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
  console.log(`📱 Open http://localhost:3000 in your browser`);
});