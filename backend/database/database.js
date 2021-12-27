const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const mongoURI = process.env.MONGODB_URI;  
const mongoConnectionOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}

const connectToDatabase = async() => {
	try {
		await mongoose.connect(mongoURI, mongoConnectionOptions)
	} catch (error) {
		console.log(error);
	}
}
module.exports = {
	connectToDatabase
};