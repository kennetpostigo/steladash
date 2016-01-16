var express = require( 'express' ),
	bodyParser = require( 'body-parser' ),
	methodOverride = require( 'method-override' ),
	app = express();

var server = require( 'http' ).Server( app );

// parses application json data
app.use( bodyParser.json() )

// parse application x-www-form-urlencoded
app.use( bodyParser.urlencoded( {
	extended: true
} ) );

// override the x-http-method header in the request
app.use( methodOverride( 'x-HTTP-Method-Override' ) );

// dominoes routes
var findNearbyStores = require('./server/modules/pizza/dominoes/findStores');

app.use('/dominoes', findNearbyStores);

// Main route
var mainRoute = require( './server/routes/mainRoute' );
app.use('/', mainRoute);

app.use( function ( err, req, res, next ) {
	console.error( err.stack );
	res.status( 500 )
	res.send( {
		message: err.message,
		error: err
	} )
} )

// Server Config
var port = process.env.PORT || 6200;
server.listen( port );

// Outputs the port
console.log( 'This server is running live at http://localhost:' + port );
// expose the application

module.exports = app;