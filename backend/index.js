const images = require('./routes/images') 
const express = require('express'),
								multer = require('multer'),
								mongoose = require('mongoose'),
								uuidv4 = require('uuid/v4'),;
const app = express();
const DIR = './publicImages/';

app.get('/', (req, res) => res.send('Upload Images API is running !'))
app.listen(3000, () => console.log('Server ready'))
app.use('/api/images', images)



    // router = express.Router();



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

// User model
let User = require('../models/User');

router.post('/user-profile', upload.single('profileImg'), (req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        profileImg: url + '/public/' + req.file.filename
    });
    user.save().then(result => {
        res.status(201).json({
            message: "User registered successfully!",
            userCreated: {
                _id: result._id,
                profileImg: result.profileImg
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})

router.get("/", (req, res, next) => {
    User.find().then(data => {
        res.status(200).json({
            message: "User list retrieved successfully!",
            users: data
        });
    });
});

module.exports = router;
