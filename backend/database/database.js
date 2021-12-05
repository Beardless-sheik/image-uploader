const mongoose = require('mongoose');

const connectToDatabase = async() => {
	try {
		await mongoose.connect('mongodb://localhost:27017/test');
	} catch (error) {
		console.log(error);
	}
}
module.exports = {
	connectToDatabase
};