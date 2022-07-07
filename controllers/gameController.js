const Game = require('../models/gameModel');
const mongoose = require('mongoose');

// CREATE
const createGame = async (req, res) => {
	const { title, release_year } = req.body;

	const newGame = await Game.create({ title, release_year });

	if (!newGame) {
		return res.status(500).json({ error: 'Unable to create game' });
	}

	res.status(201).json({ message: 'Game created!', newGame });
};

// GET ALL
const getGames = async (req, res) => {
	const allGames = await Game.find({}).sort({ createdAt: -1 });
	res.status(200).json(allGames);
};
// GET ONE
const getGame = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'Game ID not valid' });
	}

	const singleGame = await Game.findById(id);

	if (!singleGame) {
		return res.status(404).json({ error: 'Game not found' });
	}

	res.status(200).json(singleGame);
};
// UPDATE
const updateGame = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'Game ID not valid' });
	}

	const updatedGame = await Game.findByIdAndUpdate(id, {
		...req.body,
	});

	if (!updatedGame) {
		return res.status(500).json({ error: 'Unable to update game' });
	}

	res.status(200).json({ message: 'Game updated', updatedGame });
};
// DELETE
const deleteGame = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'Game ID not valid' });
	}

	const deletedGame = await Game.findByIdAndDelete(id);

	if (!deletedGame) {
		return res.status(500).json({ error: 'Unable to delete game' });
	}

	res.status(200).json({ message: 'Game deleted', deletedGame });
};
module.exports = {
	createGame,
	getGames,
	getGame,
	updateGame,
	deleteGame,
};
