<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Kolmogorov-Smirnov Goodness-of-Fit Test

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> One-sample Kolmogorov-Smirnov goodness-of-fit test.



<section class="usage">

## Usage

```javascript
import kstest from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-kstest@esm/index.mjs';
```

#### kstest( x, y\[, ...params]\[, opts] )

For a numeric [array][mdn-array] or [typed array][mdn-typed-array]
`x`, a Kolmogorov-Smirnov goodness-of-fit is computed for the null hypothesis that the values of `x` come from the distribution specified by `y`. `y` can be either a [string][mdn-string] with the name of the distribution to test against, or a [function][mdn-function]. In the latter case, `y` is expected to be the cumulative distribution function (CDF) of the distribution to test against, with its first parameter being the value at which to evaluate the CDF and the remaining parameters constituting the parameters of the distribution. The parameters of the distribution are passed as additional arguments after `y` from `kstest` to the chosen CDF. The function returns an object holding the calculated test statistic `statistic` and the `pValue` of the test.

```javascript
var factory = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform' ).factory;
var runif;
var out;
var x;
var i;

runif = factory( 0.0, 1.0, {
    'seed': 8798
});

x = new Array( 100 );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = runif();
}
out = kstest( x, 'uniform', 0.0, 1.0 );
// returns { 'pValue': ~0.703, 'statistic': ~0.069, ... }
```

The returned object comes with a `.print()` method which when invoked will print a formatted output of the hypothesis test results. `print` accepts a `digits` option that controls the number of decimal digits displayed for the outputs and a `decision` option, which when set to `false` will hide the test decision.

<!-- run-disable -->

```javascript
console.log( out.print() );
/* e.g., =>
    Kolmogorov-Smirnov goodness-of-fit test.

    Null hypothesis: the CDF of `x` is equal equal to the reference CDF.

        pValue: 0.7039
        statistic: 0.0689

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

The function accepts the following `options`:

-   **alpha**: `number` in the interval `[0,1]` giving the significance level of the hypothesis test. Default: `0.05`.
-   **alternative**: Either `two-sided`, `less` or `greater`. Indicates whether the alternative hypothesis is that the true distribution of `x` is not equal to the reference distribution specified by `y` (`two-sided`), whether it is `less` than the reference distribution or `greater` than the reference distribution. Default: `two-sided`.
-   **sorted**: `boolean` indicating if the `x` [array][mdn-array] is in sorted order (ascending). Default: `false`.

By default, the test is carried out at a significance level of `0.05`. To choose a custom significance level, set the `alpha` option.

<!-- run-disable -->

```javascript
out = kstest( x, 'uniform', 0.0, 1.0, {
    'alpha': 0.1
});
console.log( out.print() );
/* e.g., =>
    Kolmogorov-Smirnov goodness-of-fit test.

    Null hypothesis: the CDF of `x` is equal equal to the reference CDF.

        pValue: 0.7039
        statistic: 0.0689

    Test Decision: Fail to reject null in favor of alternative at 10% significance level
*/
```

By default, the function tests the null hypothesis that the true distribution of `x` and the reference distribution `y` are equal to each other against the alternative that they are not equal. To carry out a one-sided hypothesis test, set the `alternative` option to either `less` or `greater`.

```javascript
var factory = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform' ).factory;
var runif;
var out;
var x;
var i;

runif = factory( 0.0, 1.0, {
    'seed': 8798
});

x = new Array( 100 );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = runif();
}

out = kstest( x, 'uniform', 0.0, 1.0, {
    'alternative': 'less'
});
// returns { 'pValue': ~0.358, 'statistic': ~0.07, ... }

out = kstest( x, 'uniform', 0.0, 1.0, {
    'alternative': 'greater'
});
// returns { 'pValue': ~0.907, 'statistic': ~0.02, ... }
```

To perform the Kolmogorov-Smirnov test, the data has to be sorted in ascending order. If the data in `x` are already sorted, set the `sorted` option to `true` to speed up computation.

```javascript
x = [ 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9 ];

out = kstest( x, 'uniform', 0.0, 1.0, {
    'sorted': true
});
// returns { 'pValue': ~1, 'statistic': 0.1, ... }
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import kstest from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-kstest@esm/index.mjs';
var factory = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-normal' ).factory;

var rnorm;
var table;
var out;
var i;
var x;

rnorm = factory({
    'seed': 4839
});

// Values drawn from a Normal(3,1) distribution
x = new Array( 100 );
for ( i = 0; i < 100; i++ ) {
    x[ i ] = rnorm( 3.0, 1.0 );
}

// Test against N(0,1)
out = kstest( x, 'normal', 0.0, 1.0 );
table = out.print();
/* e.g., returns
    Kolmogorov-Smirnov goodness-of-fit test.

    Null hypothesis: the CDF of `x` is equal to the reference CDF.

        statistic: 0.847
        pValue: 0

    Test Decision: Reject null in favor of alternative at 5% significance level
*/

// Test against N(3,1)
out = kstest( x, 'normal', 3.0, 1.0 );
table = out.print();
/* e.g., returns
    Kolmogorov-Smirnov goodness-of-fit test.

    Null hypothesis: the CDF of `x` is equal to the reference CDF.

        statistic: 0.0733
        pValue: 0.6282

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-kstest.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-kstest

[test-image]: https://github.com/stdlib-js/stats-kstest/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-kstest/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-kstest/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-kstest?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-kstest.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-kstest/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-kstest/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-kstest/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-kstest/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-kstest/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-kstest/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

[mdn-string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

</section>

<!-- /.links -->
