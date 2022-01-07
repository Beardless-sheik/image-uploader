const images = require('./routes/images.routes');
require('dotenv').config(); 
const express = require('express'),
      multer = require('multer'),
	  mongoose = require('mongoose'),
	  uuidv4 = require('uuid');
		database = require('./database/database.js');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

database.connectToDatabase();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/', (req, res) => res.send('Upload Images API is running !'))
app.listen(3000, () => console.log('Server ready'))
app.use('/api/images', images)