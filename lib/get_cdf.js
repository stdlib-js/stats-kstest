/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var format = require( '@stdlib/error-tools-fmtprodmsg' );
var CDF = require( './cdf.js' );


// MAIN //

/**
* Returns the cumulative distribution function (CDF) corresponding to a provided distribution name.
*
* @private
* @param {string} name - distribution name
* @throws {Error} unsupported/unrecognized distribution name
* @returns {Function} cumulative distribution function (CDF)
*/
function getCDF( name ) {
	var cdf = CDF[ name ];
	if ( cdf === void 0 ) {
		throw new Error( format( '0fi9v', name ) );
	}
	return cdf;
}


// EXPORTS //

module.exports = getCDF;