const router = require('express').Router();
const path = require('path');

router.use('*', function(request, response) {
  response.sendFile(path.resolve('dist', 'team-manager-app', 'index.html'))
});

module.exports = router;
