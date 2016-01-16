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

// Setting the static files locations
app.use( express.static( __dirname + '/' ) );

// dominoes routes
var findNearbyStores = require('./server/modules/pizza/dominoes/findStores'),
		getStoreInfo = require('./server/modules/pizza/dominoes/getStoreInfo'),
		getMenu = require('./server/modules/pizza/dominoes/getMenu'),
		orderPizza = require('./server/modules/pizza/dominoes/orderPizza'),
		createCustomer = require('./server/modules/pizza/dominoes/customer/createCustomer'),
		getCustomer = require('./server/modules/pizza/dominoes/customer/getCustomer'),
		updateCustomer = require('./server/modules/pizza/dominoes/customer/updateCustomer');


app.use('/dominoes', findNearbyStores );
app.use('/dominoes', getStoreInfo);
app.use('/dominoes', createCustomer );
app.use('/dominoes', getMenu);
app.use('/dominoes', orderPizza);
app.use('/dominoes', getCustomer);
app.use('/dominoes', updateCustomer);

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
