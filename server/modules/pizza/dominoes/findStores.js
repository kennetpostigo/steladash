var express = require('express'),
    router = express.Router(),
    pizzapi = require('pizzapi');

router.post('/findNearbyStores', function(req,res){
  console.log(req.body);
  pizzapi.Util.findNearbyStores(
    '4000 Central Florida Blvd, Orlando, FL 32816',
    'Delivery',
    function(storeData){
      res.send(storeData);
    }
  );
})


module.exports = router;
