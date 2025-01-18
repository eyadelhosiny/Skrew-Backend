const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://eyadelhosiny8:nKMJXNvs18a6LrD3@imgn.6gdrymo.mongodb.net/Skrew?retryWrites=true&w=majority&appName=IMGN', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;