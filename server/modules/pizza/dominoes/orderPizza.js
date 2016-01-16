var express = require( 'express' ),
	pizzapi = require( 'pizzapi' ),
	router = express.Router();

  // Testing
  var util = require('util');

router.route( '/order' )
	.post( function ( req, res ) {
		console.log("order pizza")
		var customerOrder = req.body.order;

		var order = new pizzapi.Order( {
			customer: customerOrder.customer,
			storeID: customerOrder.storeID,
			deliveryMethod: customerOrder.deliveryMethod
		} )

		var orderItems = customerOrder.Items;
		orderItems.map( function ( item ) {
			order.addItem(
				new pizzapi.Item( {
					code: item.code,
					options: item.options,
					quantity: item.quantity
				} )
			)
		} );
    // console.log(order);

		// order.validate(
		// 	function ( result ) {
		// 		console.log( "We did it!" );
    //       console.log(util.inspect(result,false,null));
		// 	}
		// );
    //
    order.price(
      function(result) {
          console.log("Price!")
            console.log(util.inspect(result,false,null));
      }
    );


    res.send(order);
	} );


module.exports = router;
