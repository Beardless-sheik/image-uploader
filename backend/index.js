const images = require('./routes/images') 
const express = require('express'),
      multer = require('multer'),
	  mongoose = require('mongoose'),
	  uuidv4 = require('uuid');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.get('/', (req, res) => res.send('Upload Images API is running !'))
app.listen(3000, () => console.log('Server ready'))
app.use('/api/images', images)
