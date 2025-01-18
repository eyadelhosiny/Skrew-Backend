const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
    maxPlayers: { type: Number, default: 4 },
    gameState: {
        shuffledCards: [Number],
        clickedCardIndex: { type: Number, default: -1 },
        secondaryDeckClicked: { type: Boolean, default: false },
        saidSkrew: { type: Boolean, default: false },
    },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Room', roomSchema);