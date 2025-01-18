const express = require('express');
const http = require('http');
const cors = require('cors');
const connectDB = require('./config/db');
const roomRoutes = require('./routes/roomRoutes');
const gameRoutes = require('./routes/gameRoutes');
const { init, getIO } = require('./utils/socketUtils');

const app = express();
const server = http.createServer(app);

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/room', roomRoutes);
app.use('/api/game', gameRoutes);

// Initialize Socket.IO
init(server);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});