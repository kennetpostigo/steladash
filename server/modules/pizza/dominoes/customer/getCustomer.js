var express = require('express'),
    db = require('../data/customerList'),
    orderPizza = require('../../../../scrapers/dominoes');
    router = express.Router();

router.route('/getCustomer/:id')
  .get(function(req,res){

      console.log("getCustomer");
    var cusID = req.params.id;

    orderPizza(db.customerList[cusID]);

    res.send({
      customer: db.customerList[cusID]
    })
  })

module.exports = router;
