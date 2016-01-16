"use strict";

var Spooky = require( 'spooky' ),
	config = require( '../../config' ),
	util = require( 'util' );

var orderPizza = function ( customer ) {
	// initialize spooky

	var breakAddress = customer.address.split( ',' );

	var cust = {
		custAddress: breakAddress[ 0 ],
		custCity: breakAddress[ 1 ],
		custState: breakAddress[ 2 ].toUpperCase(),
		custZip: breakAddress[ 3 ]
	};

	console.log( cust );

	var spookyBrowser = new Spooky( config.Spooky, function ( err ) {
		if ( err ) {
			var errorStatement = new Error( "Cannot initialize Spooky: " +
				error.message );
			console.log( errorStatement.message );
			throw errorStatement;
		}

		spookyBrowser.start( config.links.dominoes );

		spookyBrowser.then( function () {
			var url = this.evaluate( function () {
				return window.location.href;
			} )
			this.echo( "CHECKKKK----" + url );
		} );

		spookyBrowser.wait( 5000 );

		spookyBrowser.thenClick( 'a.qa-Cl_order.c-site-nav-main-link-0' );

		spookyBrowser.wait( 3000 );

		spookyBrowser.then( function () {
			var url = this.evaluate( function () {
				return window.location.href;
			} )
			this.echo( "CHECKKKK----" + url );
		} );

		spookyBrowser.thenClick( 'span.form__input--icon.Delivery.js-delivery.c-delivery' );

		spookyBrowser.wait( 3000 );

		spookyBrowser.then( [ {
			address: cust.custAddress,
			city: cust.custCity,
			state: cust.custState,
			zip: cust.custZip,
			util: util
        }, function () {
			var addressType = this.evaluate( function () {
				return $( 'select#Address_Type_Select' ).val();
			} );

			if ( addressType === "House" ) {
				this.fill( 'form.js-locationsSearchPageForm', {
					'Street': address,
					'City': city,
					'Postal_Code': zip
				} );
				this.evaluate( function () {
					return $( '#Region' ).val( "FL" );
				} )
				this.wait( 2000 );
				var formVals = this.evaluate( function () {
					var formVals = {};
					formVals.street = $( '#Street' ).val();
					formVals.city = $( '#City' ).val();
					formVals.state = $( '#Region option:selected' ).text();
					formVals.zip = $( '#Postal_Code' ).val();

					return formVals;
				} )

				this.echo( formVals.street );
				this.echo( formVals.city );
				this.echo( formVals.state );
				this.echo( formVals.zip );


			} else {
				this.echo( "ERROR--- house isnt an option" );
			}
    } ] );

		// spookyBrowser.then(function(){
		//     this.evaluate(function(){
		//       return $('form .btn.btn--large.js-search-cta.c-locationsearch-search-cta').click();
		//     })
		// });
		spookyBrowser.waitForSelector( "form .btn.btn--large.js-search-cta.c-locationsearch-search-cta",
			function success() {
				this.click( "form .btn.btn--large.js-search-cta.c-locationsearch-search-cta" );
        this.echo("BUTTON HAS BEEN CLICKED")
			},
			function fail() {
				this.echo("Fail At BUTTON CLICK ")
			} );
		// spookyBrowser.thenClick( 'form .btn.btn--large.js-search-cta.c-locationsearch-search-cta' );

		spookyBrowser.wait( 2000 );

		spookyBrowser.then( function () {
			this.echo( "REACHED" );
			var error = this.evaluate( function () {
				return $( '#locationsSearchPage label.error' ).length;
			} );
			if ( error > 0 ) {
				this.echo( "ERROR" );
				this.exit();
			}
			this.echo( error );
		} );

		spookyBrowser.wait( 15000 );

		spookyBrowser.then( function () {
			var url = this.evaluate( function () {
				return window.location.href;
			} )
			this.echo( "CHECKKKK----" + url );
		} );

		spookyBrowser.then( function () {
			var storeClosed = this.evaluate( function () {
				return $( '#xdomain-d0caa1a2' ).length;
			} );

			if ( storeClosed === 1 ) {
				this.echo( 'STORE IS CLOSED' );
				this.exit();
			}
		} );

		spookyBrowser.then( function () {
			var url = this.evaluate( function () {
				return window.location.href;
			} )
			this.echo( "CHECKKKK----" + url );
		} );

    spookyBrowser.run();

	} );

	spookyBrowser.on( 'error', function ( err ) {
		console.log( err );
	} );
	// Uncomment this block to see all of the things Casper has to say.
	// There are a lot.
	// He has opinions.
	spookyBrowser.on( 'console', function ( line ) {
		console.log( line );
	} );

};

module.exports = orderPizza;
