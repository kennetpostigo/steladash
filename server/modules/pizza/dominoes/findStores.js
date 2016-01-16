var express = require( 'express' ),
    pizzapi = require( 'pizzapi' ),
	  router = express.Router();


router.route( '/findNearbyStores' )
	.post( function ( req, res ) {
		console.log( req.body );
		pizzapi.Util.findNearbyStores(
			'4000 Central Florida Blvd, Orlando, FL 32816',
			'Delivery',
			function ( storeData ) {
				res.send( storeData );
			}
		);
	} )


module.exports = router;
