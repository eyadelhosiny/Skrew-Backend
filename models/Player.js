const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
    actionCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Player', playerSchema);