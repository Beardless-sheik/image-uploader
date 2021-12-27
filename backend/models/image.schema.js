const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
	cloudinaryURL: String,
	dateUploaded: String,
});

module.exports = new mongoose.model('Image', imageSchema);