const mongoose = require('mongoose');

const profilesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
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
