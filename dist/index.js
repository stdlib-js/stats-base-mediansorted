"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=s(function(C,c){
var x=require('@stdlib/math-base-special-floor/dist');function b(e,r,a,u){var n,t,i,o;return n=r.data,t=r.accessors[0],e<=0?NaN:(i=e/2,o=x(i),i===o?(t(n,u+o*a)+t(n,u+(o-1)*a))/2:t(n,u+o*a))}c.exports=b
});var v=s(function(D,q){
var g=require('@stdlib/math-base-special-floor/dist'),j=require('@stdlib/array-base-arraylike2object/dist'),k=d();function O(e,r,a,u){var n,t,i;return e<=0?NaN:(i=j(r),i.accessorProtocol?k(e,i,a,u):(n=e/2,t=g(n),n===t?(r[u+t*a]+r[u+(t-1)*a])/2:r[u+t*a]))}q.exports=O
});var l=s(function(E,m){
var P=require('@stdlib/strided-base-stride2offset/dist'),R=v();function h(e,r,a){return R(e,r,a,P(e,a))}m.exports=h
});var f=s(function(F,y){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=l(),z=v();w(p,"ndarray",z);y.exports=p
});var A=f();module.exports=A;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
