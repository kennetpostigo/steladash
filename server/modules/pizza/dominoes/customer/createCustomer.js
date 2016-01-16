var express = require('express'),
    pizzapi = require('pizzapi'),
    db = require('../data/customerList'),
    router = express.Router();

  router.route('/addCustomer')
    .post(function(req,res){
      console.log(req.body);
      var customer = req.body.customer;

      db.customerList.push({
        id: db.customerList.length,
        address: customer.address,
        firstName: customer.firstName,
        lastName: customer.lastName,
        phone: customer.phone,
        email: customer.email
      });
      res.send("success");
    })

module.exports = router;
