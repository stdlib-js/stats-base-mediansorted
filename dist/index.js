"use strict";var i=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var s=i(function(g,o){
var d=require('@stdlib/math-base-special-floor/dist');function l(t,r,a){var n,u,e;return t<=0?NaN:(a<0?n=(1-t)*a:n=0,u=t/2,e=d(u),u===e?(r[n+e*a]+r[n+(e-1)*a])/2:r[n+e*a])}o.exports=l
});var f=i(function(h,v){
var p=require('@stdlib/math-base-special-floor/dist');function y(t,r,a,n){var u,e;return t<=0?NaN:(u=t/2,e=p(u),u===e?(r[n+e*a]+r[n+(e-1)*a])/2:r[n+e*a])}v.exports=y
});var q=i(function(j,m){
var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=s(),O=f();N(c,"ndarray",O);m.exports=c
});var R=q();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
