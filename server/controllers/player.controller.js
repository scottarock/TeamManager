const Player = require('mongoose').model('Player');

module.exports = {

  index: function(request, response) {
    Player.find({})
      .then( players => response.json(players) )
      .catch(console.log);
  },

  create: function(request, response) {
    Player.create(request.body)
      .then( player => response.json(player) )
      .catch(console.log);
  },

  destroy: function(request, response) {
    console.log(request.url);
    Player.findByIdAndRemove(request.params.playerId)
      .then( player => response.json(player) )
      .catch(console.log);
  },

  update: function(request, response) {
    Player.findByIdAndUpdate(
      request.params.playerId,
      { $set: request.body },
      { new: true }
    )
      .then( player => response.json(player) )
      .catch(console.log);
  }

}
