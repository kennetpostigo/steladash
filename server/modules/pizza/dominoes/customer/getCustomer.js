var express = require('express'),
    db = require('../data/customerList'),
    router = express.Router();

router.route('/getCustomer/:id')
  .get(function(req,res){
    var cusID = req.params.id;
    res.send({
      customer: db.customerList[cusID]
    })
  })

module.exports = router;
