var express = require('express'),
  path = require('path'),
  router = express.Router();

// handles all of angular js routes
router.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/../../index.html'));
});
module.exports = router;
