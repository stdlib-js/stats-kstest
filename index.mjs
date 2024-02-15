// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@v0.2.0-esm/index.mjs";import t,{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import{primitives as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number-array@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.0-esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@v0.2.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-max@v0.2.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-binomcoefln@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.1.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.0-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.2.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.0-esm/index.mjs";import{isPrimitive as b}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.0-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.0-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-cdf@v0.2.0-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-beta-cdf@v0.1.0-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-betaprime-cdf@v0.1.0-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cauchy-cdf@v0.2.0-esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chi-cdf@v0.1.0-esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chisquare-cdf@v0.1.0-esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-cdf@v0.1.0-esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-erlang-cdf@v0.1.0-esm/index.mjs";import q from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-exponential-cdf@v0.2.0-esm/index.mjs";import F from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-cdf@v0.1.0-esm/index.mjs";import D from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet-cdf@v0.2.0-esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gamma-cdf@v0.1.0-esm/index.mjs";import C from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-cdf@v0.2.0-esm/index.mjs";import P from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-invgamma-cdf@v0.1.0-esm/index.mjs";import R from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-cdf@v0.2.0-esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace-cdf@v0.2.0-esm/index.mjs";import z from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-cdf@v0.2.0-esm/index.mjs";import K from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-cdf@v0.2.0-esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-lognormal-cdf@v0.2.0-esm/index.mjs";import U from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-normal-cdf@v0.2.0-esm/index.mjs";import B from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1-cdf@v0.2.0-esm/index.mjs";import G from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-rayleigh-cdf@v0.2.0-esm/index.mjs";import H from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-t-cdf@v0.1.0-esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-cdf@v0.2.0-esm/index.mjs";import J from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-uniform-cdf@v0.2.0-esm/index.mjs";import L from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-cdf@v0.2.0-esm/index.mjs";import M from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.0-esm/index.mjs";import Q from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-roundn@v0.2.0-esm/index.mjs";function W(s,t){var e,i,r,n;if(s<=0)return 0;if(s>=1)return 1;for(e=p(t*(1-s))+1,i=0,n=0;n<e;n++)r=l(t,n),r+=(t-n)*j(1-s-n/t),r+=(n-1)*j(s+n/t),i+=h(r);return 1-s*i}function X(s,t){var e,i,r,n,a,d,o,m,l,j;if((j=s*s*t)>7.24||j>3.76&&t>99)return 1-2*h(-(2.000071+.331/f(t)+1.409/t)*j);for(i=(m=p(t*s)+1)-t*s,r=new c((l=2*m-1)*l),n=new c(l*l),d=0;d<l;d++)for(o=0;o<l;o++)r[d*l+o]=d-o+1<0?0:1;for(d=0;d<l;d++)r[d*l]-=v(i,d+1),r[(l-1)*l+d]-=v(i,l-d);for(r[(l-1)*l]+=2*i-1>0?v(2*i-1,l):0,d=0;d<l;d++)for(o=0;o<l;o++)if(d-o+1>0)for(a=1;a<=d-o+1;a++)r[d*l+o]/=a;for(0,function s(t,i,r){var a,d,o;if(1===r){for(o=0;o<l*l;o++)n[o]=t[o],e=i;return}if(s(t,i,p(r/2)),d=b(n,n),a=2*e,r%2==0){for(o=0;o<l*l;o++)n[o]=d[o];e=a}else n=b(t,d),e=i+a;if(n[p(l/2)*l+p(l/2)]>1e140){for(o=0;o<l*l;o++)n[o]*=1e-140;e+=140}}(r,0,t),j=n[(m-1)*l+m-1],d=1;d<=t;d++)(j=j*d/t)<1e-140&&(j*=1e140,e-=140);return j*=v(10,e);function b(s,t){var e,i,r,n,a;for(a=new c(l*l),e=0;e<l;e++)for(i=0;i<l;i++)for(n=0,r=0;r<l;r++)n+=s[e*l+r]*t[r*l+i],a[e*l+i]=n;return a}}function Y(s,t){return s-t}function Z(s,t){var e,i,r;for(e=t.length,i=new Array(e),r=0;r<e;r++)i[r]=s-t[r];return i}function $(s,t){return g(t)?u(t,"alpha")&&(s.alpha=t.alpha,!e(s.alpha)||o(s.alpha))?new TypeError(d("invalid option. `%s` option must be a number. Option: `%s`.","alpha",s.alpha)):u(t,"alternative")&&(s.alternative=t.alternative,!a(s.alternative))?new TypeError(d("invalid option. `%s` option must be a string. Option: `%s`.","alternative",s.alternative)):u(t,"sorted")&&(s.sorted=t.sorted,!b(s.sorted))?new TypeError(d("invalid option. `%s` option must be a boolean. Option: `%s`.","sorted",s.sorted)):null:new TypeError(d("invalid argument. Options argument must be an object. Value: `%s`.",t))}var _={};function ss(s){var t=_[s];if(void 0===t)throw new Error(d("invalid argument. Unsupported/unrecognized distribution name. Value: `%s`.",s));return t}function ts(s){var t,e,i;if(e=4,t=!0,arguments.length>0){if(!g(s))throw new TypeError(d("invalid argument. First argument must be an object. Value: `%s`.",s));if(u(s,"digits")){if(!M(s.digits))throw new TypeError(d("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",s.digits));e=s.digits}if(u(s,"decision")){if(!b(s.decision))throw new TypeError(d("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",s.decision));t=s.decision}}switch(i="",i+=this.method,i+="\n\n",i+="Null hypothesis: the CDF of `x` is ",this.alternative){case"less":i+="greater than or equal to ";break;case"greater":i+="less than or equal to ";break;default:i+="equal to "}return i+="the reference CDF",i+="\n\n",i+="    pValue: "+Q(this.pValue,-e)+"\n",i+="    statistic: "+Q(this.statistic,-e),i+="\n\n",t&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+100*this.alpha+"% significance level":i+="Fail to reject null in favor of alternative at "+100*this.alpha+"% significance level",i+="\n"),i}_.arcsine=x,_.beta=w,_.betaprime=y,_.cauchy=E,_.chi=T,_.chisquare=V,_.cosine=k,_.erlang=O,_.exponential=q,_.f=F,_.frechet=D,_.gamma=A,_.gumbel=C,_.invgamma=P,_.kumaraswamy=R,_.laplace=S,_.levy=z,_.logistic=K,_.lognormal=N,_.normal=U,_["pareto-type1"]=B,_.rayleigh=G,_.t=H,_.triangular=I,_.uniform=J,_.weibull=L;var es=Array.prototype.slice;function is(){var e,l,p,h,j,f,v,c,b,g,u,x,w,y,E,T,V;if(V=arguments[1],!i(T=arguments[0])&&!s(T))throw new TypeError(d("invalid argument. First argument must be a typed array or number array. Value: `%s`.",T));if(!n(V)&&!a(V))throw new TypeError(d("invalid argument. Second argument must be either a CDF function or a string. Value: `%s`.",V));for(a(V)&&(V=ss(V)),e=V.length-1,E=T.length,l=new Array(e),y=0;y<e;y++){if(!t(w=arguments[u=y+2])||o(w))throw new TypeError(d("invalid argument. Distribution parameter must be a number. Value: `%s`.",w));l[y]=arguments[u]}if(j={},arguments.length>2+e&&(g=$(j,arguments[2+e])))throw g;if(T=es.call(T),(h=void 0===j.alpha?.05:j.alpha)<0||h>1)throw new RangeError(d("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",h));for(!0!==j.sorted&&T.sort(Y),p=[null].concat(l),y=0;y<E;y++)p[0]=T[y],c=V.apply(null,p),T[y]=c-y/E;switch(b=j.alternative||"two-sided"){case"two-sided":v=m(E,[m(E,T,1),m(E,Z(1/E,T),1)],1);break;case"greater":v=m(E,Z(1/E,T),1);break;case"less":v=m(E,T,1);break;default:throw new Error(d('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"alternative",["two-sided","less","greater"].join('", "'),b))}return f="two-sided"===b?1-X(v,E):1-W(v,E),r(x={},"rejected",f<=h),r(x,"alpha",h),r(x,"pValue",f),r(x,"statistic",v),r(x,"method","Kolmogorov-Smirnov goodness-of-fit test"),r(x,"print",ts),r(x,"alternative",b),x}export{is as default};
//# sourceMappingURL=index.mjs.map
