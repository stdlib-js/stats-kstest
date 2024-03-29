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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var arcsine = require( '@stdlib/stats-base-dists-arcsine-cdf' );
var beta = require( '@stdlib/stats-base-dists-beta-cdf' );
var betaprime = require( '@stdlib/stats-base-dists-betaprime-cdf' );
var cauchy = require( '@stdlib/stats-base-dists-cauchy-cdf' );
var chi = require( '@stdlib/stats-base-dists-chi-cdf' );
var chisquare = require( '@stdlib/stats-base-dists-chisquare-cdf' );
var cosine = require( '@stdlib/stats-base-dists-cosine-cdf' );
var erlang = require( '@stdlib/stats-base-dists-erlang-cdf' );
var exponential = require( '@stdlib/stats-base-dists-exponential-cdf' );
var f = require( '@stdlib/stats-base-dists-f-cdf' );
var frechet = require( '@stdlib/stats-base-dists-frechet-cdf' );
var gamma = require( '@stdlib/stats-base-dists-gamma-cdf' );
var gumbel = require( '@stdlib/stats-base-dists-gumbel-cdf' );
var invgamma = require( '@stdlib/stats-base-dists-invgamma-cdf' );
var kumaraswamy = require( '@stdlib/stats-base-dists-kumaraswamy-cdf' );
var laplace = require( '@stdlib/stats-base-dists-laplace-cdf' );
var levy = require( '@stdlib/stats-base-dists-levy-cdf' );
var logistic = require( '@stdlib/stats-base-dists-logistic-cdf' );
var lognormal = require( '@stdlib/stats-base-dists-lognormal-cdf' );
var normal = require( '@stdlib/stats-base-dists-normal-cdf' );
var pareto1 = require( '@stdlib/stats-base-dists-pareto-type1-cdf' );
var rayleigh = require( '@stdlib/stats-base-dists-rayleigh-cdf' );
var t = require( '@stdlib/stats-base-dists-t-cdf' );
var triangular = require( '@stdlib/stats-base-dists-triangular-cdf' );
var uniform = require( '@stdlib/stats-base-dists-uniform-cdf' );
var weibull = require( '@stdlib/stats-base-dists-weibull-cdf' );


// MAIN //

var CDF = {};

CDF[ 'arcsine' ] = arcsine;
CDF[ 'beta' ] = beta;
CDF[ 'betaprime' ] = betaprime;
CDF[ 'cauchy' ] = cauchy;
CDF[ 'chi' ] = chi;
CDF[ 'chisquare' ] = chisquare;
CDF[ 'cosine' ] = cosine;
CDF[ 'erlang' ] = erlang;
CDF[ 'exponential' ] = exponential;
CDF[ 'f' ] = f;
CDF[ 'frechet' ] = frechet;
CDF[ 'gamma' ] = gamma;
CDF[ 'gumbel' ] = gumbel;
CDF[ 'invgamma' ] = invgamma;
CDF[ 'kumaraswamy' ] = kumaraswamy;
CDF[ 'laplace' ] = laplace;
CDF[ 'levy' ] = levy;
CDF[ 'logistic' ] = logistic;
CDF[ 'lognormal' ] = lognormal;
CDF[ 'normal' ] = normal;
CDF[ 'pareto-type1' ] = pareto1;
CDF[ 'rayleigh' ] = rayleigh;
CDF[ 't' ] = t;
CDF[ 'triangular' ] = triangular;
CDF[ 'uniform' ] = uniform;
CDF[ 'weibull' ] = weibull;


// EXPORTS //

module.exports = CDF;
