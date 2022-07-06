const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema(
	{
		title: {
			type: string,
			required: true,
		},
		release_year: {
			type: number,
			required: false,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Game', gameSchema);
