var express = require('express'),
    pizzapi = require('pizzapi'),
    router = express.Router();

    router.route('/:id')
      .get(function(req,res){
        var myStore = new pizzapi.Store();
        myStore.ID = req.params.id;
        myStore.getInfo(
          function(storeData){
            res.send(storeData);
          }
        )
      })


module.exports = router;
