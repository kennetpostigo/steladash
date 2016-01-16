var express = require('express'),
    pizzapi = require('pizzapi'),
    db = require('../data/customerList'),
    router = express.Router();

  router.route('/updateCustomer')
    .put(function(req,res){
        console.log("updateCustomer", JSON.stringify(req.body.customer));
      var customer = req.body.customer;
      var customerObj = db.customerList[customer.id];

      customerObj.id = customer.id;
      customerObj.address = customer.address;
      customerObj.firstName = customer.firstName;
      customerObj.lastName = customer.lastName;
      customerObj.phone = customer.phone;
      customerObj.email = customer.email;

      // console.log(db.customerList[customer.id]);
      res.send("success");
    })

module.exports = router;
