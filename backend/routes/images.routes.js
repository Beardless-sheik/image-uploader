const express = require('express');
const router = express.Router();
const imageModel = require('../models/image.schema.js');
const dateUtility = require('../utils/dateTimeUtility.js');

// define the get images route
router.post('/', async(req, res) => {
  const localDateUtil = new dateUtility.localDate();
  const newImage = new imageModel({
    cloudinaryURL: req.body.imageUrl,
    dateUploaded: localDateUtil.getCurrentDate(),
  })
  try {
    const result = await newImage.save()
    console.log(result);
    res.status(201).json({createdData: result});
  }
  catch(error) {
    console.log(error);
    res.status(500).json({ 
      message: 'Saving image failed!',
      error: error,
    });
  }
})

// define the post images route
router.get('/', async (req, res) => {
  try {
    const result = await imageModel.find({});;
    res.status(200).json({data: result});
  } catch (error) {
    console.log(error);
    res.status(500).json({ 
			message: 'Getting all images failed! See error in response',
			error: error,
		});
  }
})

module.exports = router