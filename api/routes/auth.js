const express = require('express');
const router = express.Router();
const Profile = require('../models/profiles');
const Roles = require('../models/roles');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const password = require('./password');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function(req, file, cb) {
    cb(null, new Date.toISOString() + file.originalname);
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

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'elena.travelport@gmail.com',
    pass: password,
  }
});

// Creating one
router.post('/sign-up', upload.single('profilePhoto'), async (req, res) => {
  const userRole = await Roles.findOne({name: 'User'});
  console.log('hello');
  const profile = new Profile({
    name: req.body.name,
    surname: req.body.surname,
    userType: req.body.userType,
    address: req.body.address,
    email: req.body.email,
    password: req.body.password,
    photo: req.file.path,
    role: userRole._id
  });
  try {
    const newProfile = await profile.save();
    const token = jwt.sign(
      { email: newProfile.email, _id: newProfile._id },
      '12345',
    );
    const verificationToken = jwt.sign(
      { email: newProfile.email, _id: newProfile._id },
      '12345',
    );
    const message = {
      from: 'elena.travelport@gmail.com',
      to: 'helena_uni@live.ru',
      subject: 'Confirm Email',
      text: 'Please confirm your email',
      html: `<p>Please confirm your email by this link: <a href=http://localhost:3001/verify-code/code/${verificationToken}>Confirm your email</a></p>`
    };
    
    transporter.sendMail(message, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
    });
    res.status(201).json({...newProfile, token});
  }
  catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({message: 'Bad request'});
  }
  try {
    const profile = await Profile.findOne({
      email: req.body.email,
      password: req.body.password
    });
    if (profile) {
      const token = jwt.sign(
        { email: profile.email, _id: profile._id },
        '12345',
      );
      return res.status(200).json({token, verified: profile.verified });
    }
    else {
      return res.status(401).json({message: 'Not authorized'});
    }
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Login
router.post('/silent-login', (req, res) => {
  try {
    jwt.verify(req.body.token, '12345', async (error, decoded) => {
      console.log(error);
      const profile = await Profile.findOne({
        _id: decoded._id,
      });
      if (!error) {
        return res.status(200).json({ email: profile.email, _id: profile._id, verified: profile.verified });
      }
      return res.status(401).json({message: 'Not authorized'});
    });
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/verify-code/:code', (req, res) => {
  const code = req.params.code;
  jwt.verify(code, '12345', async (error, decoded) => {
    try {
      if (!error) {
        await Profile.findOneAndUpdate({
          _id: decoded._id,
        }, { verified: true });
        return res.status(200).json({message: 'Verified'});
      }
      return res.status(401).json({message: 'Error on verifying the code'});
    } catch (err) {
      res.status(500).json({ message: err.message });
    }  
  });
});

module.exports = router;
