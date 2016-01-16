var express = require('express'),
    pizzapi = require('pizzapi'),
    router = express.Router();

    router.route('/:id')
      .get(function(req,res){
        var myStore = new pizzapi.Store();
        myStore.ID 
      })


module.exports = router;
