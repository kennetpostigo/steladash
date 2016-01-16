var express = require( 'express' ),
    dominos = require( 'dominos' ),
	  router = express.Router();


router.route( '/findNearbyStores' )
	.post( function ( req, res ) {
		console.log("findNearbyStores");
		dominos.Util.findNearbyStores(
			'4000 Central Florida Blvd, Orlando, FL 32816',
			'Delivery',
			function ( storeData ) {
				res.send( storeData );
			}
		);
	} )


module.exports = router;
