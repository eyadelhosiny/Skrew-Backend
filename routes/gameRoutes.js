const express = require('express');
const gameController = require('../controllers/gameController');

const router = express.Router();

router.post('/update-state', gameController.updateGameState);

module.exports = router;