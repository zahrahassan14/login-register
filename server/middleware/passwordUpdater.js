// // passwordUpdater.js

const bcrypt = require('bcryptjs');
const User = require('../models/User');

const updatePasswords = async () => {
    try {
        const users = await User.find({});
        const today = new Date();
        const formattedDate = `${(today.getMonth() + 1).toString().padStart(2, '0')}${today.getDate().toString().padStart(2, '0')}${today.getFullYear()}`;

        for (let user of users) {
            const combinedPassword = `${user.basePassword}${formattedDate}`;
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(combinedPassword, salt);
            await user.save();
        }
        console.log('Passwords updated for all users');
    } catch (err) {
        console.error('Error updating passwords:', err.message);
    }
};

module.exports = updatePasswords;
