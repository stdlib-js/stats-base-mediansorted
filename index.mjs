// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";function t(e,t,n){var s,a,i;return e<=0?NaN:(s=n<0?(1-e)*n:0,(a=e/2)===(i=r(a))?(t[s+i*n]+t[s+(i-1)*n])/2:t[s+i*n])}e(t,"ndarray",(function(e,t,n,s){var a,i;return e<=0?NaN:(a=e/2)===(i=r(a))?(t[s+i*n]+t[s+(i-1)*n])/2:t[s+i*n]}));export{t as default};
//# sourceMappingURL=index.mjs.map
