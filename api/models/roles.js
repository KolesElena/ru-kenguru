const mongoose = require('mongoose');

const rolesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  deleteProfile: {
    type: Boolean,
    required: false
  },
});

module.exports = mongoose.model('Roles', rolesSchema);
