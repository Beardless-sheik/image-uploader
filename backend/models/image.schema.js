const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
	cloudinaryURL: String,
	dateUploaded: Date,
});

module.exports = new mongoose.model('Image', imageSchema);