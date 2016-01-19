
var express = require( 'express' ),
	dominos = require( 'dominos' ),
	db = require( '../data/customerList' ),
	util = require( 'util' ),
	router = express.Router();

var setProperties = function ( obj, property ) {
	if ( obj.property === 'undefined' ) {
		obj.property = 0;
	}
}

router.route( '/updateCustomer' )
	.put( function ( req, res ) {

		console.log( "updateCustomer" );
		var customer = req.body.customer;
		var customerObj = {};

		customerObj.orderDetails = {};
		customerObj.customer = db.customerList[ customer.id ];

		customerObj.customer.id = customer.id;
		customerObj.customer.address = customer.address;
		customerObj.customer.firstName = customer.firstName;
		customerObj.customer.lastName = customer.lastName;
		customerObj.customer.phone = customer.phone;
		customerObj.customer.email = customer.email;




		dominos.Util.findNearbyStores(
			customerObj.customer.address,
			'Delivery',
			function ( storeData ) {
				customerObj.storeData = storeData.result.Stores[ 0 ];
				var storeID = customerObj.storeData.StoreID;

				// gets the store items
				var myStore = new dominos.Store( storeID );
				myStore.ID = storeID;
				myStore.getFriendlyNames(
					function ( storeData ) {
						customerObj.Items = [];


						if ( customer.orderDetails.pepperoni !== "undefined" ) {
							customerObj.orderDetails.pepperoni = customerObj.orderDetails.pepperoni;
							var pos = storeData.result.map( function ( object, index ) {
								for ( var prop in object ) {
									if ( object.hasOwnProperty( prop ) ) {
										if ( prop.indexOf( "Pepperoni" ) > 0 ) {
											return index;
										} else {
											return -1;
										}
									}
								}
							} );

							var temp = [];
							for ( var i = 0; i < pos.length; i++ ) {
								if ( pos[ i ] > 0 ) {
									temp.push( pos[ i ] );
									break;
								}
							}
							customerObj.Items.push(
								storeData.result[ temp[ 0 ] ]
							)
						} else {
							customerObj.orderDetails.pepperoni = 0;
						}

						if ( customer.orderDetails.hotWings !== "undefined" ) {
							customerObj.orderDetails.hotWings = customerObj.orderDetails.hotWings;
							var pos = storeData.result.map( function ( object, index ) {
								for ( var prop in object ) {
									if ( object.hasOwnProperty( prop ) ) {
										if ( prop.indexOf( "HotWings" ) > 0 ) {

											return index;
										} else {
											return -1;
										}
									}
								}
							} );
							var temp = [];
							for ( var i = 0; i < pos.length; i++ ) {
								if ( pos[ i ] > 0 ) {
									temp.push( pos[ i ] );
									break;
								}
							}
							customerObj.Items.push(
								storeData.result[ temp[ 0 ] ]
							)
						} else {
							customerObj.orderDetails.hotWings = 0;
						}

						if ( customer.orderDetails.breadSticks !== "undefined" ) {
							customerObj.orderDetails.breadSticks = customerObj.orderDetails.breadSticks;
							var pos = storeData.result.map( function ( object, index ) {
								for ( var prop in object ) {
									if ( object.hasOwnProperty( prop ) ) {
										if ( prop.indexOf( "BreadSticks" ) > 0 ) {
											return index;
										} else {
											return -1;
										}
									}
								}
							} );
							var temp = [];
							for ( var i = 0; i < pos.length; i++ ) {
								if ( pos[ i ] > 0 ) {
									temp.push( pos[ i ] );
									break;
								}
							}
							customerObj.Items.push(
								storeData.result[ temp[ 0 ] ]
							)
						} else {
							customerObj.orderDetails.breadSticks = 0;
						}

						var order = new dominos.Order( {
							customer: customerObj.customer,
							storeID: customerObj.storeData.StoreID,
							deliveryMethod: 'Delivery'
						} );

						customerObj.Items.map( function ( object ) {
							for ( var prop in object ) {
								if ( object.hasOwnProperty( prop ) ) {
									order.addItem(
										new dominos.Item( {
											code: object[ prop ].Code,
											options: {},
											quantity: 1
										} )
									)
								}
							}
						} )

						var cardNumber = '4100123422343234'; // Valid but fake credit card
						var cardInfo = new order.PaymentObject();
						cardInfo.Amount = order.Amounts.Customer;
						cardInfo.Number = cardNumber;
						cardInfo.CardType = order.validateCC( cardNumber );
						cardInfo.Expiration = '0115'; //  01/15 just the numbers "01/15".replace(/\D/g,'');
						cardInfo.SecurityCode = '777';
						cardInfo.PostalCode = '90210'; // Billing Zipcode


						order.Payments.push( cardInfo );
            var dash = dash_button('54:1e:56:e5:64:90');
            dash.on("detected", function (){
              console.log("Dash Button Found");

              order.validate(
                function ( result ) {
                  console.log( "Order is Validated" );
                  console.log( util.inspect(result,false,null) );
                }
              );
              order.price(
                function ( result ) {
                  console.log( "Order is Priced" );
                  console.log( util.inspect(result,false,null) );
                }
              );

              order.place(
                function ( result ) {
                  console.log("Bought")
                  console.log(util.inspect(result.result.Order,false,null));

                }
              );

            });

            res.send(customerObj);
					}
				)

			}
		);

	} );

module.exports = router;
