const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allow frontend to connect
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files (Images etc) - we can keep serving public assets if needed
app.use(express.static(path.join(__dirname, 'public')));

// Rutas API
const apiRouter = require('./routes/index');
app.use('/api', apiRouter);

// Database Connection Check (Optional, but good for logs)
const db = require('./models');
db.sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

app.listen(port, () => {
    console.log(`API Server running on http://localhost:${port}`);
});
