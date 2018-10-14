const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 2
  },
  position: String,
  status: Object,
});

module.exports = mongoose.model('Player', playerSchema);
