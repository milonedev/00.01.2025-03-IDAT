const express = require('express');
const cors = require('cors');
const router = require('./routes/index.js'); // Import the router from index.js
const sequelize = require('./config/db.js');

const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors());

app.use('/api', router)

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server on http://localhost:${port}`);
    });
}).catch((error) => {
    console.error('Error synchronizing database:', error);
});