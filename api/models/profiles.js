const mongoose = require('mongoose');

const profilesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: false
  },
  userType: {
    type: String,
    required: false
  },
  role: {
    type: mongoose.Types.ObjectId, 
    ref: 'Role',
    required: false
  },
  address: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: false
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  verified: {
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = mongoose.model('Profiles', profilesSchema);
