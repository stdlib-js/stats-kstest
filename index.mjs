// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@esm/index.mjs";import t,{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import{primitives as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number-array@v0.0.8-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-max@v0.0.9-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-binomcoefln@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import{isPrimitive as v}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-cdf@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-beta-cdf@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-betaprime-cdf@esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cauchy-cdf@esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chi-cdf@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chisquare-cdf@esm/index.mjs";import q from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-cdf@esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-erlang-cdf@esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-exponential-cdf@esm/index.mjs";import D from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-cdf@esm/index.mjs";import F from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet-cdf@esm/index.mjs";import C from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gamma-cdf@esm/index.mjs";import P from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-cdf@esm/index.mjs";import R from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-invgamma-cdf@esm/index.mjs";import K from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-cdf@esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace-cdf@esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-cdf@esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-cdf@esm/index.mjs";import U from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-lognormal-cdf@esm/index.mjs";import W from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-normal-cdf@esm/index.mjs";import X from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1-cdf@esm/index.mjs";import z from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-rayleigh-cdf@esm/index.mjs";import B from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-t-cdf@esm/index.mjs";import G from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-cdf@esm/index.mjs";import H from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-uniform-cdf@esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-cdf@esm/index.mjs";import J from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import L from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-roundn@esm/index.mjs";function M(s,t){var e,i,r,n;if(s<=0)return 0;if(s>=1)return 1;for(e=h(t*(1-s))+1,i=0,n=0;n<e;n++)r=l(t,n),r+=(t-n)*p(1-s-n/t),r+=(n-1)*p(s+n/t),i+=f(r);return 1-s*i}function Q(s,t){var e,i,r,n,d,a,o,m,l,p;if((p=s*s*t)>7.24||p>3.76&&t>99)return 1-2*f(-(2.000071+.331/j(t)+1.409/t)*p);for(i=(m=h(t*s)+1)-t*s,r=new b((l=2*m-1)*l),n=new b(l*l),a=0;a<l;a++)for(o=0;o<l;o++)r[a*l+o]=a-o+1<0?0:1;for(a=0;a<l;a++)r[a*l]-=c(i,a+1),r[(l-1)*l+a]-=c(i,l-a);for(r[(l-1)*l]+=2*i-1>0?c(2*i-1,l):0,a=0;a<l;a++)for(o=0;o<l;o++)if(a-o+1>0)for(d=1;d<=a-o+1;d++)r[a*l+o]/=d;for(0,function s(t,i,r){var d,a,o;if(1===r){for(o=0;o<l*l;o++)n[o]=t[o],e=i;return}if(s(t,i,h(r/2)),a=v(n,n),d=2*e,r%2==0){for(o=0;o<l*l;o++)n[o]=a[o];e=d}else n=v(t,a),e=i+d;if(n[h(l/2)*l+h(l/2)]>1e140){for(o=0;o<l*l;o++)n[o]*=1e-140;e+=140}}(r,0,t),p=n[(m-1)*l+m-1],a=1;a<=t;a++)(p=p*a/t)<1e-140&&(p*=1e140,e-=140);return p*=c(10,e);function v(s,t){var e,i,r,n,d;for(d=new b(l*l),e=0;e<l;e++)for(i=0;i<l;i++)for(n=0,r=0;r<l;r++)n+=s[e*l+r]*t[r*l+i],d[e*l+i]=n;return d}}function Y(s,t){return s-t}function Z(s,t){var e,i,r;for(e=t.length,i=new Array(e),r=0;r<e;r++)i[r]=s-t[r];return i}function $(s,t){return g(t)?u(t,"alpha")&&(s.alpha=t.alpha,!e(s.alpha)||o(s.alpha))?new TypeError(a("0fi8h","alpha",s.alpha)):u(t,"alternative")&&(s.alternative=t.alternative,!d(s.alternative))?new TypeError(a("0fi2i","alternative",s.alternative)):u(t,"sorted")&&(s.sorted=t.sorted,!v(s.sorted))?new TypeError(a("0fi30","sorted",s.sorted)):null:new TypeError(a("0fi2h",t))}var _={};function ss(s){var t=_[s];if(void 0===t)throw new Error(a("0fi9v",s));return t}function ts(s){var t,e,i;if(e=4,t=!0,arguments.length>0){if(!g(s))throw new TypeError(a("0fi3X",s));if(u(s,"digits")){if(!J(s.digits))throw new TypeError(a("0fi3b","digits",s.digits));e=s.digits}if(u(s,"decision")){if(!v(s.decision))throw new TypeError(a("0fi30","decision",s.decision));t=s.decision}}switch(i="",i+=this.method,i+="\n\n",i+="Null hypothesis: the CDF of `x` is ",this.alternative){case"less":i+="greater than or equal to ";break;case"greater":i+="less than or equal to ";break;default:i+="equal to "}return i+="the reference CDF",i+="\n\n",i+="    pValue: "+L(this.pValue,-e)+"\n",i+="    statistic: "+L(this.statistic,-e),i+="\n\n",t&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+100*this.alpha+"% significance level":i+="Fail to reject null in favor of alternative at "+100*this.alpha+"% significance level",i+="\n"),i}_.arcsine=x,_.beta=w,_.betaprime=y,_.cauchy=E,_.chi=T,_.chisquare=k,_.cosine=q,_.erlang=A,_.exponential=V,_.f=D,_.frechet=F,_.gamma=C,_.gumbel=P,_.invgamma=R,_.kumaraswamy=K,_.laplace=N,_.levy=O,_.logistic=S,_.lognormal=U,_.normal=W,_["pareto-type1"]=X,_.rayleigh=z,_.t=B,_.triangular=G,_.uniform=H,_.weibull=I;var es=Array.prototype.slice;function is(){var e,l,h,f,p,j,c,b,v,g,u,x,w,y,E,T,k;if(k=arguments[1],!i(T=arguments[0])&&!s(T))throw new TypeError(a("0fiAU",T));if(!n(k)&&!d(k))throw new TypeError(a("0fiAV",k));for(d(k)&&(k=ss(k)),e=k.length-1,E=T.length,l=new Array(e),y=0;y<e;y++){if(!t(w=arguments[u=y+2])||o(w))throw new TypeError(a("0fiAW",w));l[y]=arguments[u]}if(p={},arguments.length>2+e&&(g=$(p,arguments[2+e])))throw g;if(T=es.call(T),(f=void 0===p.alpha?.05:p.alpha)<0||f>1)throw new RangeError(a("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",f));for(!0!==p.sorted&&T.sort(Y),h=[null].concat(l),y=0;y<E;y++)h[0]=T[y],b=k.apply(null,h),T[y]=b-y/E;switch(v=p.alternative||"two-sided"){case"two-sided":c=m(E,[m(E,T,1),m(E,Z(1/E,T),1)],1);break;case"greater":c=m(E,Z(1/E,T),1);break;case"less":c=m(E,T,1);break;default:throw new Error(a("0fi3t","alternative",["two-sided","less","greater"].join('", "'),v))}return j="two-sided"===v?1-Q(c,E):1-M(c,E),r(x={},"rejected",j<=f),r(x,"alpha",f),r(x,"pValue",j),r(x,"statistic",c),r(x,"method","Kolmogorov-Smirnov goodness-of-fit test"),r(x,"print",ts),r(x,"alternative",v),x}export{is as default};
//# sourceMappingURL=index.mjs.map
