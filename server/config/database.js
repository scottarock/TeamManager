const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const modelsPath = path.resolve('server', 'models');
const jsFileReg = new RegExp('\\.js$', 'i');

mongoose.connect(
  'mongodb://localhost:27017/players',
  { useNewUrlParser: true }
);
mongoose.connection.on('connected', () => console.log('Mongoose connected'));

fs.readdirSync(modelsPath).forEach( file => {
  if ( jsFileReg.test(file) ) {
    require(path.join(modelsPath, file));
  }
});
