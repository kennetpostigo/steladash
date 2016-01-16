"use strict";

var Spooky = require( 'spooky' ),
	config = require( '../../config' );

var orderPizza = function ( customer ) {
	// initialize spooky

	var spookyBrowser = new Spooky( config.Spooky, function ( err ) {
		if ( err ) {
			var errorStatement = new Error( "Cannot initialize Spooky: " +
				error.message );
			console.log( errorStatement.message );
			throw errorStatement;
		}
		spookyBrowser.start( config.links.dominoes );

		spookyBrowser
			.then( function () {
				var url = this.evaluate( function () {
					return window.location.href;
				} )
				this.echo("CHECKKKK----"+ url );
			} );

		spookyBrowser.thenClick('a.qa-Cl_order.c-site-nav-main-link-0');

		spookyBrowser.wait(3000);

		spookyBrowser.then(function(){
		  var url = this.evaluate(function(){
		    return window.location.href;
		  })
		  this.echo("CHECKKKK----"+  url);
		});

		spookyBrowser.thenClick('span.form__input--icon.Delivery.js-delivery.c-delivery');

    spookyBrowser.wait(2000);

		spookyBrowser.run();
		// console.log( spookyBrowser );
	} );

	spookyBrowser.on( 'error', function ( err ) {
		console.log( err );
	} );
	// Uncomment this block to see all of the things Casper has to say.
	// There are a lot.
	// He has opinions.
	spookyBrowser.on( 'console', function ( line ) {
		console.log( line );
	}  );

};

module.exports = orderPizza;
