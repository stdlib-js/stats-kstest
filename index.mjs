// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@esm/index.mjs";import e,{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import{primitives as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number-array@v0.0.8-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-max@v0.0.9-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-binomcoefln@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import{isPrimitive as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-roundn@esm/index.mjs";function q(s,e){var t,i,r,a;if(s<=0)return 0;if(s>=1)return 1;for(t=m(e*(1-s))+1,i=0,a=0;a<t;a++)r=f(e,a),r+=(e-a)*h(1-s-a/e),r+=(a-1)*h(s+a/e),i+=c(r);return 1-s*i}function x(s,e){var t,i,r,a,n,d,o,l,f,h;if((h=s*s*e)>7.24||h>3.76&&e>99)return 1-2*c(-(2.000071+.331/p(e)+1.409/e)*h);for(i=(l=m(e*s)+1)-e*s,r=new u((f=2*l-1)*f),a=new u(f*f),d=0;d<f;d++)for(o=0;o<f;o++)r[d*f+o]=d-o+1<0?0:1;for(d=0;d<f;d++)r[d*f]-=b(i,d+1),r[(f-1)*f+d]-=b(i,f-d);for(r[(f-1)*f]+=2*i-1>0?b(2*i-1,f):0,d=0;d<f;d++)for(o=0;o<f;o++)if(d-o+1>0)for(n=1;n<=d-o+1;n++)r[d*f+o]/=n;for(0,function s(e,i,r){var n,d,o;if(1===r){for(o=0;o<f*f;o++)a[o]=e[o],t=i;return}if(s(e,i,m(r/2)),d=j(a,a),n=2*t,r%2==0){for(o=0;o<f*f;o++)a[o]=d[o];t=n}else a=j(e,d),t=i+n;if(a[m(f/2)*f+m(f/2)]>1e140){for(o=0;o<f*f;o++)a[o]*=1e-140;t+=140}}(r,0,e),h=a[(l-1)*f+l-1],d=1;d<=e;d++)(h=h*d/e)<1e-140&&(h*=1e140,t-=140);return h*=b(10,t);function j(s,e){var t,i,r,a,n;for(n=new u(f*f),t=0;t<f;t++)for(i=0;i<f;i++)for(a=0,r=0;r<f;r++)a+=s[t*f+r]*e[r*f+i],n[t*f+i]=a;return n}}function E(s,e){return s-e}function T(s,e){var t,i,r;for(t=e.length,i=new Array(t),r=0;r<t;r++)i[r]=s-e[r];return i}function k(s,e){return v(e)?g(e,"alpha")&&(s.alpha=e.alpha,!t(s.alpha)||o(s.alpha))?new TypeError(d("0fi8h","alpha",s.alpha)):g(e,"alternative")&&(s.alternative=e.alternative,!n(s.alternative))?new TypeError(d("0fi2i","alternative",s.alternative)):g(e,"sorted")&&(s.sorted=e.sorted,!j(s.sorted))?new TypeError(d("0fi30","sorted",s.sorted)):null:new TypeError(d("0fi2h",e))}var A={};function V(s){var e=A[s];if(void 0===e)throw new Error(d("0fi9v",s));return e}function D(s){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!v(s))throw new TypeError(d("0fi3X",s));if(g(s,"digits")){if(!w(s.digits))throw new TypeError(d("0fi3b","digits",s.digits));t=s.digits}if(g(s,"decision")){if(!j(s.decision))throw new TypeError(d("0fi30","decision",s.decision));e=s.decision}}switch(i="",i+=this.method,i+="\n\n",i+="Null hypothesis: the CDF of `x` is ",this.alternative){case"two-sided":default:i+="equal to ";break;case"less":i+="greater than or equal to ";break;case"greater":i+="less than or equal to "}return i+="the reference CDF",i+="\n\n",i+="    pValue: "+y(this.pValue,-t)+"\n",i+="    statistic: "+y(this.statistic,-t),i+="\n\n",e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+100*this.alpha+"% significance level":i+="Fail to reject null in favor of alternative at "+100*this.alpha+"% significance level",i+="\n"),i}A.arcsine=require("@stdlib/stats-base-dists-arcsine-cdf"),A.beta=require("@stdlib/stats-base-dists-beta-cdf"),A.betaprime=require("@stdlib/stats-base-dists-betaprime-cdf"),A.cauchy=require("@stdlib/stats-base-dists-cauchy-cdf"),A.chi=require("@stdlib/stats-base-dists-chi-cdf"),A.chisquare=require("@stdlib/stats-base-dists-chisquare-cdf"),A.cosine=require("@stdlib/stats-base-dists-cosine-cdf"),A.erlang=require("@stdlib/stats-base-dists-erlang-cdf"),A.exponential=require("@stdlib/stats-base-dists-exponential-cdf"),A.f=require("@stdlib/stats-base-dists-f-cdf"),A.frechet=require("@stdlib/stats-base-dists-frechet-cdf"),A.gamma=require("@stdlib/stats-base-dists-gamma-cdf"),A.gumbel=require("@stdlib/stats-base-dists-gumbel-cdf"),A.invgamma=require("@stdlib/stats-base-dists-invgamma-cdf"),A.kumaraswamy=require("@stdlib/stats-base-dists-kumaraswamy-cdf"),A.laplace=require("@stdlib/stats-base-dists-laplace-cdf"),A.levy=require("@stdlib/stats-base-dists-levy-cdf"),A.logistic=require("@stdlib/stats-base-dists-logistic-cdf"),A.lognormal=require("@stdlib/stats-base-dists-lognormal-cdf"),A.normal=require("@stdlib/stats-base-dists-normal-cdf"),A["pareto-type1"]=require("@stdlib/stats-base-dists-pareto-type1-cdf"),A.rayleigh=require("@stdlib/stats-base-dists-rayleigh-cdf"),A.t=require("@stdlib/stats-base-dists-t-cdf"),A.triangular=require("@stdlib/stats-base-dists-triangular-cdf"),A.uniform=require("@stdlib/stats-base-dists-uniform-cdf"),A.weibull=require("@stdlib/stats-base-dists-weibull-cdf");var F=Array.prototype.slice;function C(){var t,f,m,c,h,p,b,u,j,v,g,w,y,A,C,P,R;if(R=arguments[1],!i(P=arguments[0])&&!s(P))throw new TypeError(d("0fiAU",P));if(!a(R)&&!n(R))throw new TypeError(d("0fiAV",R));for(n(R)&&(R=V(R)),t=R.length-1,C=P.length,f=new Array(t),A=0;A<t;A++){if(!e(y=arguments[g=A+2])||o(y))throw new TypeError(d("0fiAW",y));f[A]=arguments[g]}if(h={},arguments.length>2+t&&(v=k(h,arguments[2+t])))throw v;if(P=F.call(P),(c=void 0===h.alpha?.05:h.alpha)<0||c>1)throw new RangeError(d("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",c));for(!0!==h.sorted&&P.sort(E),m=[null].concat(f),A=0;A<C;A++)m[0]=P[A],u=R.apply(null,m),P[A]=u-A/C;switch(j=h.alternative||"two-sided"){case"two-sided":b=l(C,[l(C,P,1),l(C,T(1/C,P),1)],1);break;case"greater":b=l(C,T(1/C,P),1);break;case"less":b=l(C,P,1);break;default:throw new Error(d("0fi3t","alternative",["two-sided","less","greater"].join('", "'),j))}return p="two-sided"===j?1-x(b,C):1-q(b,C),r(w={},"rejected",p<=c),r(w,"alpha",c),r(w,"pValue",p),r(w,"statistic",b),r(w,"method","Kolmogorov-Smirnov goodness-of-fit test"),r(w,"print",D),r(w,"alternative",j),w}export{C as default};
//# sourceMappingURL=index.mjs.map