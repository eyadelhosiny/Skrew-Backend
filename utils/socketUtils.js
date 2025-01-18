const socketIO = require('socket.io');

let io;

exports.init = (server) => {
    io = socketIO(server);

    io.on('connection', (socket) => {
        console.log('A user connected');

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });

        socket.on('card-clicked', (data) => {
            io.to(data.roomCode).emit('card-clicked', data);
        });

        socket.on('shuffle-cards', (data) => {
            io.to(data.roomCode).emit('shuffle-cards', data);
        });

        socket.on('say-skrew', (data) => {
            io.to(data.roomCode).emit('say-skrew', data);
        });
    });
};

exports.getIO = () => io;