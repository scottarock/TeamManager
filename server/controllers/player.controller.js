const Player = require('mongoose').model('Player');

module.exports = {

  index: function(request, response) {
    // find all the players and return them
    Player.find({})
      .then( players => response.json(players) )
      .catch(console.log);
  },

  create: function(request, response) {
    // create a new player using the data in request.body
    Player.create(request.body)
      .then( player => response.json(player) )
      .catch( error => {
        //assuming validation errors from mongoose
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        response
          .status(500)
          .json(errors);
      });
  },

  destroy: function(request, response) {
    // delete a player using the playerId passed in the route URL
    Player.findByIdAndRemove(request.params.playerId)
      .then( player => response.json(player) )
      .catch(console.log);
  },

  update: function(request, response) {
    // update a player using the data in request.body
    // and the playerId passed in the route URL
    Player.findByIdAndUpdate(
      request.params.playerId,
      { $set: request.body },
      { new: true }
    )
      .then( player => response.json(player) )
      .catch( error => {
        //assuming validation errors from mongoose
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        response
          .status(500)
          .json(errors);
      });
  }

}
