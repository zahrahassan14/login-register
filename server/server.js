require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const cors = require('cors');
const cron = require('node-cron');
const updatePasswords = require('./middleware/passwordUpdater');
updatePasswords(); 


const app = express();
app.use(cors());

// Connect to the database
connectDB();

app.use(express.json());
app.use('/api/auth', authRoutes);

// Schedule the password update function to run daily at midnight
cron.schedule('0 0 * * *', () => {
    console.log('Running password update task');
    updatePasswords();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
