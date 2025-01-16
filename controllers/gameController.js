const Room = require('../models/Room');

exports.updateGameState = async (req, res) => {
    const { code, gameState } = req.body;

    const room = await Room.findOne({ code });
    if (!room) {
        return res.status(404).json({ error: 'Room not found' });
    }

    room.gameState = { ...room.gameState, ...gameState };
    await room.save();

    res.status(200).json({ message: 'Game state updated' });
};