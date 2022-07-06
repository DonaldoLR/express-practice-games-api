const express = require('express');
const router = express.Router();

const {
	createGame,
	getGames,
	getGame,
} = require('../controllers/gameController');

router.post('/', createGame);
router.get('/', getGames);
router.get('/:id', getGame);
module.exports = router;
