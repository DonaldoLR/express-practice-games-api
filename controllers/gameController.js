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

// UPDATE

// DELETE

module.exports = {
	createGame,
	getGames,
};
