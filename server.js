const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const { handleSetupWizard } = require('./pages/api/setup-wizard');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// API endpoints
app.post('/api/setup-wizard', handleSetupWizard);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/health', (req, res) => {
  res.json({ status: 'Server is running!' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
  console.log(`📱 Open http://localhost:3000 in your browser`);
});