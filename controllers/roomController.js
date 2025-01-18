const Room = require('../models/Room');
const Player = require('../models/Player');

exports.createRoom = async (req, res) => {
    const { name, maxPlayers } = req.body;
    const code = Math.random().toString(36).substring(2, 6).toUpperCase();

    const room = new Room({ code, maxPlayers });
    const player = new Player({ name, room: room._id });

    await room.save();
    await player.save();

    res.status(201).json({ code, playerId: player._id });
};

exports.joinRoom = async (req, res) => {
    const { name, code } = req.body;

    const room = await Room.findOne({ code });
    if (!room || room.players.length >= room.maxPlayers) {
        return res.status(400).json({ error: 'Room is full or does not exist' });
    }

    const player = new Player({ name, room: room._id });
    await player.save();

    room.players.push(player._id);
    await room.save();

    res.status(200).json({ playerId: player._id });
};