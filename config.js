"use strict";

module.exports = {
  Spooky: {
    child: {
      transport: 'http'
    },
    casper: {
      userAgent: "Mozilla/5.0 (X11; Linux x86_64) " +
			"AppleWebKit/537.36 (KHTML, like Gecko) " +
			"Chrome/43.0.2357.125 Safari/537.36",
      XSSAuditingEnabled: true,
			loadImages: false,
			loadPlugins: false,
			clientScripts: ["node_modules/jquery/dist/jquery.min.js"],
      logLevel: 'info'
    }
  },
  links: {
    dominoes: 'https://www.dominos.com/en/'
  }
};
