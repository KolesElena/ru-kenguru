const express = require('express');
const router = express.Router();
const Profile = require('../models/profiles');
const Roles = require('../models/roles');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().getTime() + '_' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('This type of photo is not supported'), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter
});

var cors = require('cors');

// Getting all
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting one
router.get('/:id', getProfile, (req, res) => {
  res.json(res.profile);
});
// Creating one
router.post('/', async (req, res) => {
  const userRole = Roles.findOne({name: 'User'});
  const profile = new Profile({
    name: req.body.name,
    surname: req.body.surname,
    userType: req.body.userType,
    address: req.body.address,
    email: req.body.email,
    password: req.body.password,
    role: userRole._id
  });
  try {
    const newProfile = await profile.save();
    res.status(201).json(newProfile);
  }
  catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// Updating one
router.patch('/:id', getProfile, async (req, res) => {
  if (req.body.name != null) {
    res.profile.name = req.body.name;
  }
  if (req.body.surname != null) {
    res.profile.surname = req.body.surname;
  }
  if (req.body.address != null) {
    res.profile.address = req.body.address;
  }
  try {
    const updatedProfile = await res.profile.save();
    res.json(updatedProfile);
  } catch(err) {
    res.status(400).json({ message: err.message });
  }
});
// Deleting one
router.delete('/:id', getProfile, async (req, res) => {
  try {
    await res.profile.remove();
    res.json({ message: 'Deleted profile'});
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/current', getProfile2, async (req, res) => {
  try {
    res.json(res.profile);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/photo', upload.single('photo'), getProfile2, async (req, res) => {
  console.log(req.file);
  console.log(res.profile);
  if (req.file != null) {
    res.profile.photo = req.file.path;
  }
  try {
    const updatedProfile = await res.profile.save();
    res.json(updatedProfile);
  } catch(err) {
    res.status(400).json({ message: err.message });
  }
});

async function getProfile(req, res, next) {
  let profile; 
  try {
    profile = await Profile.findById(req.params.id);
    if (profile == null) {
      return res.status(404).json({ message: 'Can not find profile'});
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.profile = profile;
  next();
}

async function getProfile2(req, res, next) {
  const token = req.headers.authorization;
  console.log(req.headers);
  try {
    jwt.verify(token, '12345', async (error, decoded) => {
      
      const profile = await Profile.findOne({
        _id: decoded._id,
      });
      if (!error) {
        res.profile = profile;
        return next();
      }
      return res.status(401).json({message: 'Not authorized'});
    });
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = router;
