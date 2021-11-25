const images = require('./routes/images') 
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Upload Images API is running !'))
app.listen(3000, () => console.log('Server ready'))
app.use('/api/images', images)

