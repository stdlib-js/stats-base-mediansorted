// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.2-esm/index.mjs";function n(r,n,t){var s,a,d;return r<=0?NaN:(s=t<0?(1-r)*t:0,(a=r/2)===(d=e(a))?(n[s+d*t]+n[s+(d-1)*t])/2:n[s+d*t])}r(n,"ndarray",(function(r,n,t,s){var a,d;return r<=0?NaN:(a=r/2)===(d=e(a))?(n[s+d*t]+n[s+(d-1)*t])/2:n[s+d*t]}));const{ndarray:t}=n;export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
