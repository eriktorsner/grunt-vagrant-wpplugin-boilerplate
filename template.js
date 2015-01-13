/**
 * grunt-vagrant-wpplugin-boilerplate
 * https://github.com/eriktorsner/grunt-vagrant-wpplugin-boilerplate
 *
 * Copyright (c) 2015 Erik Torsner, Torgesta Technology AB
 * Licensed under the MIT License
 */

'use strict';

// Basic template description
exports.description = 'A Vagrant setup suitable for Wordpress plugin development. ';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'Based on work done for vvv (varying vagrants)';

// Template-specific notes to be displayed after the question prompts.
exports.after = 'Vagrant config is created. Run vagrant up and enjoy!';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template
exports.template = function( grunt, init, done ) {
	init.process( {}, [
		// Prompt for these values.
		init.prompt( 'hostname', 'myplugin' ),
		init.prompt( 'dnsname', 'www.myplugin.local' ),
		init.prompt( 'ipnumber', '192.168.50.12' ),
	], function( err, props ) {
        	props.safe_hostname = props.hostname.replace(/[\W_]+/g, '_');

		// Files to copy and process
		var files = init.filesToCopy( props );

		console.log( files );
		
		// Actually copy and process files
		init.copyAndProcess( files, props);

		// Done!
		done();
	});
};
