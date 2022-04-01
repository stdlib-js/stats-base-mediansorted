// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";var t=e;var n=e;var a=function(r,e,n){var a,s,i;return r<=0?NaN:(a=n<0?(1-r)*n:0,(s=r/2)===(i=t(s))?(e[a+i*n]+e[a+(i-1)*n])/2:e[a+i*n])};r(a,"ndarray",(function(r,e,t,a){var s,i;return r<=0?NaN:(s=r/2)===(i=n(s))?(e[a+i*t]+e[a+(i-1)*t])/2:e[a+i*t]}));var s=a;export{s as default};
//# sourceMappingURL=index.mjs.map
