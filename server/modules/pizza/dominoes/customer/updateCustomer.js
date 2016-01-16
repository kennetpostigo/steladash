var express = require('express'),
    pizzapi = require('pizzapi'),
    db = require('../data/customerList'),
    router = express.Router();

  router.route('/updateCustomer')
    .put(function(req,res){

        console.log("updateCustomer");
      var customer = req.body.customer;
      var customerObj = db.customerList[customer.id];

      customerObj.id = customer.id;
      customerObj.address = customer.address;
      customerObj.firstName = customer.firstName;
      customerObj.lastName = customer.lastName;
      customerObj.phone = customer.phone;
      customerObj.email = customer.email;
      customerObj.orderDetails = customer.orderDetails;

      pizzapi.Util.findNearbyStores(
  			customerObj.address,
  			'Delivery',
  			function ( storeData ) {
          customerObj.storeData = storeData.result.Stores[0];
          var storeID = customerObj.storeData.StoreID;

          // gets the store items
          var myStore = new pizzapi.Store( storeID);
      		myStore.ID = storeID;
      		myStore.getFriendlyNames(
      			function ( storeData ) {
              customerObj.Items = storeData.result;

      				res.send( customerObj );
      			}
      		)

  			}
  		);

    })

module.exports = router;
