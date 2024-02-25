// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@v0.2.1-esm/index.mjs";import t,{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import{primitives as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number-array@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-max@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-binomcoefln@v0.2.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.1-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.2.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.1-esm/index.mjs";import{isPrimitive as b}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-cdf@v0.2.1-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-beta-cdf@v0.2.0-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-betaprime-cdf@v0.2.0-esm/index.mjs";import L from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cauchy-cdf@v0.2.0-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chi-cdf@v0.2.0-esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chisquare-cdf@v0.2.0-esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-cdf@v0.2.0-esm/index.mjs";import q from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-erlang-cdf@v0.2.0-esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-exponential-cdf@v0.2.0-esm/index.mjs";import P from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-cdf@v0.2.0-esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet-cdf@v0.2.0-esm/index.mjs";import D from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gamma-cdf@v0.2.0-esm/index.mjs";import F from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-cdf@v0.2.0-esm/index.mjs";import C from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-invgamma-cdf@v0.2.0-esm/index.mjs";import K from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-cdf@v0.2.1-esm/index.mjs";import R from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace-cdf@v0.2.0-esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-cdf@v0.2.0-esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-cdf@v0.2.0-esm/index.mjs";import W from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-lognormal-cdf@v0.2.0-esm/index.mjs";import z from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-normal-cdf@v0.2.0-esm/index.mjs";import B from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1-cdf@esm/index.mjs";import G from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-rayleigh-cdf@esm/index.mjs";import H from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-t-cdf@esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-cdf@v0.2.1-esm/index.mjs";import J from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-uniform-cdf@esm/index.mjs";import M from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-cdf@esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.1-esm/index.mjs";import Q from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-roundn@v0.2.1-esm/index.mjs";function U(s,t){return s-t}function X(s,t){var e,i,r;for(e=t.length,i=new Array(e),r=0;r<e;r++)i[r]=s-t[r];return i}var Y={};function Z(s){var t,e,i;if(e=4,t=!0,arguments.length>0){if(!g(s))throw new TypeError(a("1Ld3L",s));if(u(s,"digits")){if(!O(s.digits))throw new TypeError(a("1Ld3P","digits",s.digits));e=s.digits}if(u(s,"decision")){if(!b(s.decision))throw new TypeError(a("1Ld2o","decision",s.decision));t=s.decision}}switch(i="",i+=this.method,i+="\n\n",i+="Null hypothesis: the CDF of `x` is ",this.alternative){case"less":i+="greater than or equal to ";break;case"greater":i+="less than or equal to ";break;default:i+="equal to "}return i+="the reference CDF",i+="\n\n",i+="    pValue: "+Q(this.pValue,-e)+"\n",i+="    statistic: "+Q(this.statistic,-e),i+="\n\n",t&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+100*this.alpha+"% significance level":i+="Fail to reject null in favor of alternative at "+100*this.alpha+"% significance level",i+="\n"),i}Y.arcsine=x,Y.beta=w,Y.betaprime=y,Y.cauchy=L,Y.chi=E,Y.chisquare=T,Y.cosine=k,Y.erlang=q,Y.exponential=V,Y.f=P,Y.frechet=A,Y.gamma=D,Y.gumbel=F,Y.invgamma=C,Y.kumaraswamy=K,Y.laplace=R,Y.levy=S,Y.logistic=N,Y.lognormal=W,Y.normal=z,Y["pareto-type1"]=B,Y.rayleigh=G,Y.t=H,Y.triangular=I,Y.uniform=J,Y.weibull=M;var $=Array.prototype.slice;function _(){var x,w,y,L,E,T,k,q,V,P,A,D,F,C,K,R,S;if(S=arguments[1],!i(R=arguments[0])&&!s(R))throw new TypeError(a("1Ld9s",R));if(!d(S)&&!n(S))throw new TypeError(a("1Ld9t",S));for(n(S)&&(S=function(s){var t=Y[s];if(void 0===t)throw new Error(a("1Ld9K",s));return t}(S)),x=S.length-1,K=R.length,w=new Array(x),C=0;C<x;C++){if(!t(F=arguments[A=C+2])||m(F))throw new TypeError(a("1Ld9u",F));w[C]=arguments[A]}if(E={},arguments.length>2+x&&(P=function(s,t){return g(t)?u(t,"alpha")&&(s.alpha=t.alpha,!e(s.alpha)||m(s.alpha))?new TypeError(a("1Ld8P","alpha",s.alpha)):u(t,"alternative")&&(s.alternative=t.alternative,!n(s.alternative))?new TypeError(a("1Ld2W","alternative",s.alternative)):u(t,"sorted")&&(s.sorted=t.sorted,!b(s.sorted))?new TypeError(a("1Ld2o","sorted",s.sorted)):null:new TypeError(a("1Ld2V",t))}(E,arguments[2+x]),P))throw P;if(R=$.call(R),(L=void 0===E.alpha?.05:E.alpha)<0||L>1)throw new RangeError(a("1Ld8V","alpha",L));for(!0!==E.sorted&&R.sort(U),y=[null].concat(w),C=0;C<K;C++)y[0]=R[C],q=S.apply(null,y),R[C]=q-C/K;switch(V=E.alternative||"two-sided"){case"two-sided":k=o(K,[o(K,R,1),o(K,X(1/K,R),1)],1);break;case"greater":k=o(K,X(1/K,R),1);break;case"less":k=o(K,R,1);break;default:throw new Error(a("1Ld4S","alternative",["two-sided","less","greater"].join('", "'),V))}return T="two-sided"===V?1-function(s,t){var e,i,r,d,n,a,m,o,l,j;if((j=s*s*t)>7.24||j>3.76&&t>99)return 1-2*p(-(2.000071+.331/f(t)+1.409/t)*j);for(i=(o=h(t*s)+1)-t*s,r=new v((l=2*o-1)*l),d=new v(l*l),a=0;a<l;a++)for(m=0;m<l;m++)r[a*l+m]=a-m+1<0?0:1;for(a=0;a<l;a++)r[a*l]-=c(i,a+1),r[(l-1)*l+a]-=c(i,l-a);for(r[(l-1)*l]+=2*i-1>0?c(2*i-1,l):0,a=0;a<l;a++)for(m=0;m<l;m++)if(a-m+1>0)for(n=1;n<=a-m+1;n++)r[a*l+m]/=n;for(function s(t,i,r){var n,a,m;if(1!==r){if(s(t,i,h(r/2)),a=b(d,d),n=2*e,r%2==0){for(m=0;m<l*l;m++)d[m]=a[m];e=n}else d=b(t,a),e=i+n;if(d[h(l/2)*l+h(l/2)]>1e140){for(m=0;m<l*l;m++)d[m]*=1e-140;e+=140}}else for(m=0;m<l*l;m++)d[m]=t[m],e=i}(r,0,t),j=d[(o-1)*l+o-1],a=1;a<=t;a++)(j=j*a/t)<1e-140&&(j*=1e140,e-=140);return j*c(10,e);function b(s,t){var e,i,r,d,n;for(n=new v(l*l),e=0;e<l;e++)for(i=0;i<l;i++)for(d=0,r=0;r<l;r++)d+=s[e*l+r]*t[r*l+i],n[e*l+i]=d;return n}}(k,K):1-function(s,t){var e,i,r,d;if(s<=0)return 0;if(s>=1)return 1;for(e=h(t*(1-s))+1,i=0,d=0;d<e;d++)r=l(t,d),r+=(t-d)*j(1-s-d/t),r+=(d-1)*j(s+d/t),i+=p(r);return 1-s*i}(k,K),r(D={},"rejected",T<=L),r(D,"alpha",L),r(D,"pValue",T),r(D,"statistic",k),r(D,"method","Kolmogorov-Smirnov goodness-of-fit test"),r(D,"print",Z),r(D,"alternative",V),D}export{_ as default};
//# sourceMappingURL=index.mjs.map
