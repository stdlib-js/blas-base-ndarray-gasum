"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var i=u(function(c,t){
var s=require('@stdlib/ndarray-base-numel-dimension/dist'),n=require('@stdlib/ndarray-base-stride/dist'),v=require('@stdlib/ndarray-base-offset/dist'),q=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/blas-base-gasum/dist').ndarray;function g(e){var r=e[0];return d(s(r,0),q(r),n(r,0),v(r))}t.exports=g
});var m=i();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
