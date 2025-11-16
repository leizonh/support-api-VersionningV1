require('dotenv').config();
const express = require('express');
const { connectDatabase } = require('./config/database');
const requestTypes = require('./routes/requestTypes');

const app = express();
app.use(express.json());
app.get('/health', (_req, res) => res.status(200).json({ status: 'ok' }));
app.use('/api/request-types', requestTypes);

module.exports = app;

if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/support_api';
  connectDatabase(URI)
    .then(() => {
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => {
      console.error('Failed to connect to DB:', err);
      process.exit(1);
    });
}
