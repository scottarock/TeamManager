const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Name is required to add a player'],
    minlength: [2, 'Player name should be at least 2 characters long']
  },
  position: String,
  status: Object,
});

module.exports = mongoose.model('Player', playerSchema);
