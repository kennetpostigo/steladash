var express = require( 'express' ),
	dominos = require( 'dominos' ),
	router = express.Router();

router.route( '/getMenu/:id' )
	.get( function ( req, res ) {

			console.log("getMenu");
		var storeID = req.params.id;
    // The docs need to be updated The id field needs to be set beforehand
		var myStore = new dominos.Store( storeID);
		myStore.ID = storeID;
		myStore.getFriendlyNames(
			function ( storeData ) {
				res.send( storeData );
			}
		)
	} )


module.exports = router;
