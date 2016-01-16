var express = require( 'express' ),
	pizzapi = require( 'pizzapi' ),
	router = express.Router();

router.route( '/:id' )
	.get( function ( req, res ) {

			console.log("GetStoreInfo");
    // The docs need to be updated The id field needs to be set beforehand
		var myStore = new pizzapi.Store(req.params.id);
    myStore.ID = req.params.id;
		myStore.getInfo(
			function ( storeData ) {
				res.send( storeData );
			}
		)
	} )


module.exports = router;
