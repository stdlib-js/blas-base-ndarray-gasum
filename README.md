<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# gasum

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the sum of absolute values for all elements in a one-dimensional ndarray.

<section class="intro">

The [_L1_ norm][l1norm] is defined as

<!-- <equation class="equation" label="eq:l1norm" align="center" raw="\|\mathbf{x}\|_1 = \sum_{i=0}^{n-1} \vert x_i \vert" alt="L1 norm definition."> -->

```math
\|\mathbf{x}\|_1 = \sum_{i=0}^{n-1} \vert x_i \vert
```

<!-- <div class="equation" align="center" data-raw-text="\|\mathbf{x}\|_1 = \sum_{i=0}^{n-1} \vert x_i \vert" data-equation="eq:l1norm">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@30de397fadee10fa175a8332ae1447737f201818/lib/node_modules/@stdlib/blas/base/gasum/docs/img/equation_l1norm.svg" alt="L1 norm definition.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
gasum = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-ndarray-gasum@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var gasum = require( 'path/to/vendor/umd/blas-base-ndarray-gasum/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-ndarray-gasum@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.gasum;
})();
</script>
```

#### gasum( arrays )

Computes the sum of absolute values for all elements in a one-dimensional ndarray.

```javascript
var vector = require( '@stdlib/ndarray-vector-ctor' );

var x = vector( [ 1.0, -2.0, 3.0, -4.0, 5.0 ], 'generic' );

var y = gasum( [ x ] );
// returns 15.0
```

The function has the following parameters:

-   **arrays**: array-like object containing a one-dimensional input ndarray.

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-ndarray-gasum@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var opts = {
    'dtype': 'generic'
};

var x = discreteUniform( [ 10 ], -500, 500, opts );
console.log( ndarray2array( x ) );

var out = gasum( [ x ] );
console.log( out );

})();
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

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-ndarray-gasum.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-ndarray-gasum

[test-image]: https://github.com/stdlib-js/blas-base-ndarray-gasum/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-base-ndarray-gasum/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-ndarray-gasum/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-ndarray-gasum?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-ndarray-gasum.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-ndarray-gasum/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-ndarray-gasum/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-ndarray-gasum/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-ndarray-gasum/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-ndarray-gasum/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-ndarray-gasum/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-ndarray-gasum/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-ndarray-gasum/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-ndarray-gasum/main/LICENSE

[l1norm]: https://en.wikipedia.org/wiki/Norm_%28mathematics%29

</section>

<!-- /.links -->
