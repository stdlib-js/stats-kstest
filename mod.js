// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,u=n.__defineSetter__,f=n.__lookupGetter__,a=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var c,s,l,v;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((s="value"in e)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=c):r[t]=e.value),l="get"in e,v="set"in e,s&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,t,e.get),v&&u&&u.call(r,t,e.set),r};var c=t;function s(r,t,e){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function l(r){return"number"==typeof r}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var y=Object.prototype.hasOwnProperty;function p(r,t){return null!=r&&y.call(r,t)}var h="function"==typeof Symbol?Symbol.toStringTag:"";var w=b()?function(r){var t,e,n;if(null==r)return d.call(r);e=r[h],t=p(r,h);try{r[h]=void 0}catch(t){return d.call(r)}return n=d.call(r),t?r[h]=e:delete r[h],n}:function(r){return d.call(r)},g=Number,m=g.prototype.toString;var j=b();function N(r){return"object"==typeof r&&(r instanceof g||(j?function(r){try{return m.call(r),!0}catch(r){return!1}}(r):"[object Number]"===w(r)))}function A(r){return l(r)||N(r)}s(A,"isPrimitive",l),s(A,"isObject",N);var O=Number.POSITIVE_INFINITY,_=g.NEGATIVE_INFINITY,E=Math.floor;function q(r){return E(r)===r}function T(r){return r<O&&r>_&&q(r)}function U(r){return l(r)&&T(r)}function P(r){return N(r)&&T(r.valueOf())}function S(r){return U(r)||P(r)}function F(r){return U(r)&&r>=0}function I(r){return P(r)&&r.valueOf()>=0}function k(r){return F(r)||I(r)}s(S,"isPrimitive",U),s(S,"isObject",P),s(k,"isPrimitive",F),s(k,"isObject",I);function V(r){return null!==r&&"object"==typeof r&&F(r.length)&&r.length<=9007199254740991&&"number"==typeof r.BYTES_PER_ELEMENT&&"number"==typeof r.byteOffset&&"number"==typeof r.byteLength}function x(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&q(r.length)&&r.length>=0&&r.length<=4294967295}(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}var L=x(A.isPrimitive),M=x(A.isObject),B=x(A);function G(r,t,e){c(r,t,{configurable:!1,enumerable:!0,writable:!1,value:e})}s(B,"primitives",L),s(B,"objects",M);var H=/./;function C(r){return"boolean"==typeof r}var R=Boolean.prototype.toString;var W=b();function D(r){return"object"==typeof r&&(r instanceof Boolean||(W?function(r){try{return R.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===w(r)))}function Y(r){return C(r)||D(r)}function X(){return new Function("return this;")()}s(Y,"isPrimitive",C),s(Y,"isObject",D);var K="object"==typeof self?self:null,z="object"==typeof window?window:null,J="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Q="object"==typeof J?J:null;var Z=function(r){if(arguments.length){if(!C(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return X()}if(K)return K;if(z)return z;if(Q)return Q;throw new Error("unexpected error. Unable to resolve global object.")}(),$=Z.document&&Z.document.childNodes,rr=Int8Array;function tr(){return/^\s*function\s*([^(]*)/i}var er=/^\s*function\s*([^(]*)/i;s(tr,"REGEXP",er);var nr=Array.isArray?Array.isArray:function(r){return"[object Array]"===w(r)};function ir(r){return null!==r&&"object"==typeof r}function or(r){var t,e,n,i;if(("Object"===(e=w(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=er.exec(n.toString()))return t[1]}return ir(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}s(ir,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!nr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(ir));var ur="function"==typeof H||"object"==typeof rr||"function"==typeof $?function(r){return or(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?or(r).toLowerCase():t};function fr(r){return"function"===ur(r)}function ar(r){return"string"==typeof r}var cr=String.prototype.valueOf;var sr=b();function lr(r){return"object"==typeof r&&(r instanceof String||(sr?function(r){try{return cr.call(r),!0}catch(r){return!1}}(r):"[object String]"===w(r)))}function vr(r){return ar(r)||lr(r)}function br(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}function dr(r){return r!=r}function yr(r){return l(r)&&dr(r)}function pr(r){return N(r)&&dr(r.valueOf())}function hr(r){return yr(r)||pr(r)}function wr(r){return 0===r&&1/r===O}function gr(r,t,e){var n,i,o,u;if(r<=0)return NaN;if(1===r||0===e)return t[0];for(n=t[i=e<0?(1-r)*e:0],u=1;u<r;u++){if(dr(o=t[i+=e]))return o;(o>n||o===n&&wr(o))&&(n=o)}return n}function mr(r){return r===O||r===_}function jr(r){return Math.abs(r)}s(vr,"isPrimitive",ar),s(vr,"isObject",lr),s(hr,"isPrimitive",yr),s(hr,"isObject",pr),s(gr,"ndarray",(function(r,t,e,n){var i,o,u,f;if(r<=0)return NaN;if(1===r||0===e)return t[n];for(i=t[o=n],f=1;f<r;f++){if(dr(u=t[o+=e]))return u;(u>i||u===i&&wr(u))&&(i=u)}return i}));var Nr="function"==typeof Uint32Array;var Ar="function"==typeof Uint32Array?Uint32Array:null;var Or,_r="function"==typeof Uint32Array?Uint32Array:void 0;Or=function(){var r,t,e;if("function"!=typeof Ar)return!1;try{t=new Ar(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Nr&&e instanceof Uint32Array||"[object Uint32Array]"===w(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Er=Or,qr="function"==typeof Float64Array;var Tr="function"==typeof Float64Array?Float64Array:null;var Ur,Pr="function"==typeof Float64Array?Float64Array:void 0;Ur=function(){var r,t,e;if("function"!=typeof Tr)return!1;try{t=new Tr([1,3.14,-3.14,NaN]),e=t,r=(qr&&e instanceof Float64Array||"[object Float64Array]"===w(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Pr:function(){throw new Error("not implemented")};var Sr=Ur,Fr="function"==typeof Uint8Array;var Ir="function"==typeof Uint8Array?Uint8Array:null;var kr,Vr="function"==typeof Uint8Array?Uint8Array:void 0;kr=function(){var r,t,e;if("function"!=typeof Ir)return!1;try{t=new Ir(t=[1,3.14,-3.14,256,257]),e=t,r=(Fr&&e instanceof Uint8Array||"[object Uint8Array]"===w(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Vr:function(){throw new Error("not implemented")};var xr=kr,Lr="function"==typeof Uint16Array;var Mr="function"==typeof Uint16Array?Uint16Array:null;var Br,Gr="function"==typeof Uint16Array?Uint16Array:void 0;Br=function(){var r,t,e;if("function"!=typeof Mr)return!1;try{t=new Mr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Lr&&e instanceof Uint16Array||"[object Uint16Array]"===w(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var Hr,Cr={uint16:Br,uint8:xr};(Hr=new Cr.uint16(1))[0]=4660;var Rr=52===new Cr.uint8(Hr.buffer)[0],Wr=!0===Rr?1:0,Dr=new Sr(1),Yr=new Er(Dr.buffer);function Xr(r){return Dr[0]=r,Yr[Wr]}var Kr=!0===Rr?1:0,zr=new Sr(1),Jr=new Er(zr.buffer);function Qr(r,t){return zr[0]=r,Jr[Kr]=t>>>0,zr[0]}var Zr=.6931471803691238,$r=1.9082149292705877e-10;function rt(r){var t,e,n,i,o,u,f,a,c,s,l,v;return 0===r?_:dr(r)||r<0?NaN:(o=0,(e=Xr(r))<1048576&&(o-=54,e=Xr(r*=0x40000000000000)),e>=2146435072?r+r:(o+=(e>>20)-1023|0,o+=(a=(e&=1048575)+614244&1048576|0)>>20|0,f=(r=Qr(r,e|1072693248^a))-1,(1048575&2+e)<3?0===f?0===o?0:o*Zr+o*$r:(u=f*f*(.5-.3333333333333333*f),0===o?f-u:o*Zr-(u-o*$r-f)):(a=e-398458|0,c=440401-e|0,i=(l=(v=(s=f/(2+f))*s)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),n=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),u=n+i,(a|=c)>0?(t=.5*f*f,0===o?f-(t-s*(t+u)):o*Zr-(t-(s*(t+u)+o*$r)-f)):0===o?f-s*(f-u):o*Zr-(s*(f-u)-o*$r-f))))}var tt=Math.ceil;function et(r){return r<0?tt(r):E(r)}function nt(r,t){var e,n,i,o;return i=(o=r*r)*o,n=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),n+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(i=1-(e=.5*o))+(1-i-e+(o*n-r*t))}var it=-.16666666666666632;function ot(r,t){var e,n,i;return e=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),n=i*r,0===t?r+n*(it+i*e):r-(i*(.5*t-n*e)-t-n*it)}var ut,ft,at=!0===Rr?0:1,ct=new Sr(1),st=new Er(ct.buffer);!0===Rr?(ut=1,ft=0):(ut=0,ft=1);var lt={HIGH:ut,LOW:ft},vt=new Sr(1),bt=new Er(vt.buffer),dt=lt.HIGH,yt=lt.LOW;function pt(r,t){return bt[dt]=r,bt[yt]=t,vt[0]}var ht,wt;!0===Rr?(ht=1,wt=0):(ht=0,wt=1);var gt={HIGH:ht,LOW:wt},mt=new Sr(1),jt=new Er(mt.buffer),Nt=gt.HIGH,At=gt.LOW;function Ot(r,t){return mt[0]=t,r[0]=jt[Nt],r[1]=jt[At],r}function _t(r,t){return 1===arguments.length?Ot([0,0],r):Ot(r,t)}var Et=[0,0];function qt(r,t){var e,n;return _t(Et,r),e=Et[0],e&=2147483647,n=Xr(t),pt(e|=n&=2147483648,Et[1])}function Tt(r,t,e,n){return dr(r)||mr(r)?(t[n]=r,t[n+e]=0,t):0!==r&&jr(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}s((function(r){return Tt(r,[0,0],1,0)}),"assign",Tt);var Ut=[0,0],Pt=[0,0];function St(r,t){var e,n;return 0===t||0===r||dr(r)||mr(r)?r:(Tt(r,Ut,1,0),t+=Ut[1],t+=function(r){var t=Xr(r);return(t=(2146435072&t)>>>20)-1023|0}(r=Ut[0]),t<-1074?qt(0,r):t>1023?r<0?_:O:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,_t(Pt,r),e=Pt[0],e&=2148532223,n*pt(e|=t+1023<<20,Pt[1])))}function Ft(r){return function(r,t){var e,n;for(e=[],n=0;n<t;n++)e.push(r);return e}(0,r)}var It=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],kt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Vt=5.960464477539063e-8,xt=Ft(20),Lt=Ft(20),Mt=Ft(20),Bt=Ft(20);function Gt(r,t,e,n,i,o,u,f,a){var c,s,l,v,b,d,y,p,h;for(v=o,h=n[e],p=e,b=0;p>0;b++)s=Vt*h|0,Bt[b]=h-16777216*s|0,h=n[p-1]+s,p-=1;if(h=St(h,i),h-=8*E(.125*h),h-=y=0|h,l=0,i>0?(y+=b=Bt[e-1]>>24-i,Bt[e-1]-=b<<24-i,l=Bt[e-1]>>23-i):0===i?l=Bt[e-1]>>23:h>=.5&&(l=2),l>0){for(y+=1,c=0,b=0;b<e;b++)p=Bt[b],0===c?0!==p&&(c=1,Bt[b]=16777216-p):Bt[b]=16777215-p;if(i>0)switch(i){case 1:Bt[e-1]&=8388607;break;case 2:Bt[e-1]&=4194303}2===l&&(h=1-h,0!==c&&(h-=St(1,i)))}if(0===h){for(p=0,b=e-1;b>=o;b--)p|=Bt[b];if(0===p){for(d=1;0===Bt[o-d];d++);for(b=e+1;b<=e+d;b++){for(a[f+b]=It[u+b],s=0,p=0;p<=f;p++)s+=r[p]*a[f+(b-p)];n[b]=s}return Gt(r,t,e+=d,n,i,o,u,f,a)}}if(0===h)for(e-=1,i-=24;0===Bt[e];)e-=1,i-=24;else(h=St(h,-i))>=16777216?(s=Vt*h|0,Bt[e]=h-16777216*s|0,i+=24,Bt[e+=1]=s):Bt[e]=0|h;for(s=St(1,i),b=e;b>=0;b--)n[b]=s*Bt[b],s*=Vt;for(b=e;b>=0;b--){for(s=0,d=0;d<=v&&d<=e-b;d++)s+=kt[d]*n[b+d];Mt[e-b]=s}for(s=0,b=e;b>=0;b--)s+=Mt[b];for(t[0]=0===l?s:-s,s=Mt[0]-s,b=1;b<=e;b++)s+=Mt[b];return t[1]=0===l?s:-s,7&y}function Ht(r,t,e,n){var i,o,u,f,a,c,s;for(4,(o=(e-3)/24|0)<0&&(o=0),f=e-24*(o+1),c=o-(u=n-1),s=u+4,a=0;a<=s;a++)xt[a]=c<0?0:It[c],c+=1;for(a=0;a<=4;a++){for(i=0,c=0;c<=u;c++)i+=r[c]*xt[u+(a-c)];Lt[a]=i}return 4,Gt(r,t,4,Lt,f,4,o,u,xt)}var Ct=Math.round;function Rt(r,t,e){var n,i,o,u,f;return o=r-1.5707963267341256*(n=Ct(.6366197723675814*r)),u=6077100506506192e-26*n,f=t>>20|0,e[0]=o-u,f-(Xr(e[0])>>20&2047)>16&&(u=20222662487959506e-37*n-((i=o)-(o=i-(u=6077100506303966e-26*n))-u),e[0]=o-u,f-(Xr(e[0])>>20&2047)>49&&(u=84784276603689e-45*n-((i=o)-(o=i-(u=20222662487111665e-37*n))-u),e[0]=o-u)),e[1]=o-e[0]-u,n}var Wt=1.5707963267341256,Dt=6077100506506192e-26,Yt=2*Dt,Xt=4*Dt,Kt=[0,0,0],zt=[0,0];function Jt(r,t){var e,n,i,o,u,f,a;if((i=2147483647&Xr(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?Rt(r,i,t):i<=1073928572?r>0?(a=r-Wt,t[0]=a-Dt,t[1]=a-t[0]-Dt,1):(a=r+Wt,t[0]=a+Dt,t[1]=a-t[0]+Dt,-1):r>0?(a=r-2*Wt,t[0]=a-Yt,t[1]=a-t[0]-Yt,2):(a=r+2*Wt,t[0]=a+Yt,t[1]=a-t[0]+Yt,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?Rt(r,i,t):r>0?(a=r-3*Wt,t[0]=a-1.8231301519518578e-10,t[1]=a-t[0]-1.8231301519518578e-10,3):(a=r+3*Wt,t[0]=a+1.8231301519518578e-10,t[1]=a-t[0]+1.8231301519518578e-10,-3):1075388923===i?Rt(r,i,t):r>0?(a=r-4*Wt,t[0]=a-Xt,t[1]=a-t[0]-Xt,4):(a=r+4*Wt,t[0]=a+Xt,t[1]=a-t[0]+Xt,-4);if(i<1094263291)return Rt(r,i,t);if(i>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(e=function(r){return ct[0]=r,st[at]}(r),a=pt(i-((n=(i>>20)-1046)<<20|0),e),u=0;u<2;u++)Kt[u]=0|a,a=16777216*(a-Kt[u]);for(Kt[2]=a,o=3;0===Kt[o-1];)o-=1;return f=Ht(Kt,zt,n,o),r<0?(t[0]=-zt[0],t[1]=-zt[1],-f):(t[0]=zt[0],t[1]=zt[1],f)}var Qt=[0,0];function Zt(r){var t;if(t=Xr(r),(t&=2147483647)<=1072243195)return t<1044381696?1:nt(r,0);if(t>=2146435072)return NaN;switch(3&Jt(r,Qt)){case 0:return nt(Qt[0],Qt[1]);case 1:return-ot(Qt[0],Qt[1]);case 2:return-nt(Qt[0],Qt[1]);default:return ot(Qt[0],Qt[1])}}var $t=[0,0];function re(r){var t;if(t=Xr(r),(t&=2147483647)<=1072243195)return t<1045430272?r:ot(r,0);if(t>=2146435072)return NaN;switch(3&Jt(r,$t)){case 0:return ot($t[0],$t[1]);case 1:return nt($t[0],$t[1]);case 2:return-ot($t[0],$t[1]);default:return-nt($t[0],$t[1])}}var te=3.141592653589793;var ee=1.4616321449683622,ne=1.4616321449683622;function ie(r){var t,e,n,i,o,u,f,a,c,s,l,v,b;if(dr(r)||mr(r))return r;if(0===r)return O;if(r<0?(t=!0,r=-r):t=!1,r<8470329472543003e-37)return-rt(r);if(t){if(r>=4503599627370496)return O;if(c=function(r){var t,e;return dr(r)||mr(r)?NaN:0===(t=jr(e=r%2))||1===t?qt(0,e):t<.25?re(te*e):t<.75?qt(Zt(te*(t=.5-t)),e):t<1.25?(e=qt(1,e)-e,re(te*e)):t<1.75?-qt(Zt(te*(t-=1.5)),e):(e-=qt(2,e),re(te*e))}(r),0===c)return O;e=rt(te/jr(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(b=-rt(r),r>=ee-1+.27?(l=1-r,n=0):r>=ee-1-.27?(l=r-(ne-1),n=1):(l=r,n=2)):(b=0,r>=ee+.27?(l=2-r,n=0):r>=ee-.27?(l=r-ne,n=1):(l=r-1,n=2)),n){case 0:u=.07721566490153287+(v=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(v),o=v*(.3224670334241136+v*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(v)),b+=(f=l*u+o)-.5*l;break;case 1:u=.48383612272381005+(s=(v=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),o=s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s)-.1475877229945939,i=.06462494023913339+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),b+=-.12148629053584961+(f=v*u-(-3638676997039505e-33-s*(o+l*i)));break;case 2:u=l*(l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)-.07721566490153287),o=1+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),b+=-.5*l+u/o}else if(r<8)switch(f=(l=r-(n=et(r)))*(l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)-.07721566490153287),a=1+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),b=.5*l+f/a,v=1,n){case 7:v*=l+6;case 6:v*=l+5;case 5:v*=l+4;case 4:v*=l+3;case 3:b+=rt(v*=l+2)}else r<0x400000000000000?(c=rt(r),s=.4189385332046727+(v=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=v*v),b=(r-.5)*(c-1)+s):b=r*(rt(r)-1);return t&&(b=e-b),b}var oe=.6931471803691238,ue=1.9082149292705877e-10;function fe(r){var t,e,n,i,o,u,f,a,c,s;if(r<-1||dr(r))return NaN;if(-1===r)return _;if(r===O)return r;if(0===r)return r;if(s=1,(n=r<0?-r:r)<.41421356237309503){if(n<1.862645149230957e-9)return n<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,e=1)}return 0!==s&&(n<9007199254740992?(o=(s=((e=Xr(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),o/=c):(s=((e=Xr(c=r))>>20)-1023,o=0),(e&=1048575)<434334?c=Qr(c,1072693248|e):(s+=1,c=Qr(c,1071644672|e),e=1048576-e>>2),i=c-1),t=.5*i*i,0===e?0===i?s*oe+(o+=s*ue):s*oe-((a=t*(1-.6666666666666666*i))-(s*ue+o)-i):(a=(f=(u=i/(2+i))*u)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===s?i-(t-u*(t+a)):s*oe-(t-(u*(t+a)+(s*ue+o))-i))}function ae(r){return 0===r&&1/r===_}function ce(r){return q(r/2)}function se(r){return ce(r>0?r-1:r+1)}var le=Math.sqrt,ve=!0===Rr?0:1,be=new Sr(1),de=new Er(be.buffer);function ye(r,t){return be[0]=r,de[ve]=t>>>0,be[0]}function pe(r){return 0|r}var he=[1,1.5],we=[0,.5849624872207642],ge=[0,1.350039202129749e-8];var me=1e300,je=1e-300,Ne=[0,0],Ae=[0,0];function Oe(r,t){var e,n,i,o,u,f,a,c,s,l,v,b,d,y;if(dr(r)||dr(t))return NaN;if(_t(Ne,t),u=Ne[0],0===Ne[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return le(r);if(-.5===t)return 1/le(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(mr(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:jr(r)<1==(t===O)?0:O}(r,t)}if(_t(Ne,r),o=Ne[0],0===Ne[1]){if(0===o)return function(r,t){return t===_?O:t===O?0:t>0?se(t)?r:0:se(t)?qt(O,r):O}(r,t);if(1===r)return 1;if(-1===r&&se(t))return-1;if(mr(r))return r===_?Oe(-0,-t):t<0?0:O}if(r<0&&!1===q(t))return(r-r)/(r-r);if(i=jr(r),e=2147483647&o|0,n=2147483647&u|0,a=u>>>31|0,f=(f=o>>>31|0)&&se(t)?-1:1,n>1105199104){if(n>1139802112)return function(r,t){return(2147483647&Xr(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(e<1072693247)return 1===a?f*me*me:f*je*je;if(e>1072693248)return 0===a?f*me*me:f*je*je;v=function(r,t){var e,n,i,o,u,f;return e=(u=1.9259629911266175e-8*(i=t-1)-i*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((n=ye(n=(o=1.4426950216293335*i)+u,0))-o),r[0]=n,r[1]=e,r}(Ae,i)}else v=function(r,t,e){var n,i,o,u,f,a,c,s,l,v,b,d,y,p,h,w,g,m,j,N,A;return m=0,e<1048576&&(m-=53,e=Xr(t*=9007199254740992)),m+=(e>>20)-1023|0,e=1072693248|(j=1048575&e|0),j<=235662?N=0:j<767610?N=1:(N=0,m+=1,e-=1048576),u=ye(i=(w=(t=Qr(t,e))-(c=he[N]))*(g=1/(t+c)),0),n=524288+(e>>1|536870912),a=Qr(0,n+=N<<18),h=(o=i*i)*o*(0===(A=o)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),a=ye(a=3+(o=u*u)+(h+=(f=g*(w-u*a-u*(t-(a-c))))*(u+i)),0),y=(b=-7.028461650952758e-9*(l=ye(l=(w=u*a)+(g=f*a+(h-(a-3-o))*i),0))+.9617966939259756*(g-(l-w))+ge[N])-((d=ye(d=(v=.9617967009544373*l)+b+(s=we[N])+(p=m),0))-p-s-v),r[0]=d,r[1]=y,r}(Ae,i,e);if(l=(t-(c=ye(t,0)))*v[0]+t*v[1],s=c*v[0],_t(Ne,b=l+s),d=pe(Ne[0]),y=pe(Ne[1]),d>=1083179008){if(0!=(d-1083179008|y))return f*me*me;if(l+8008566259537294e-32>b-s)return f*me*me}else if((2147483647&d)>=1083231232){if(0!=(d-3230714880|y))return f*je*je;if(l<=b-s)return f*je*je}return b=function(r,t,e){var n,i,o,u,f,a,c,s,l,v,b;return v=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(n=((s=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-v>>>0,r<0&&(s=-s),t-=o=Qr(0,n)),r=pe(r=Xr(c=1-((c=(u=.6931471824645996*(o=ye(o=e+t,0)))+(f=.6931471805599453*(e-(o-t))+-1.904654299957768e-9*o))*(i=c-(o=c*c)*(0===(b=o)?.16666666666666602:.16666666666666602+b*(b*(6613756321437934e-20+b*(4.1381367970572385e-8*b-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((a=f-(c-u))+c*a)-c))),(r+=s<<20>>>0)>>20<=0?St(c,s):Qr(c,r)}(d,s,l),f*b}function _e(r){var t;return dr(r)||r===O?r:r===_?0:r>709.782712893384?O:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,e){var n,i,o,u;return St(1-(t-(n=r-t)*(o=n-(i=n*n)*(0===(u=i)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),e)}(r-.6931471803691238*(t=et(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function Ee(r){var t,e,n;return t=1+(t=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(t),e=_e(r),2.5066282746310007*(e=r>143.01608?(n=Oe(r,.5*r-.25))*(n/e):Oe(r,r-.5)/e)*t}function qe(r,t){return t/((1+.5772156649015329*r)*r)}function Te(r){var t,e,n,i;if(q(r)&&r<0||r===_||dr(r))return NaN;if(0===r)return ae(r)?_:O;if(r>171.61447887182297)return O;if(r<-170.5674972726612)return 0;if((e=jr(r))>33)return r>=0?Ee(r):(t=0==(1&(n=E(e)))?-1:1,(i=e-n)>.5&&(i=e-(n+=1)),i=e*re(te*i),t*te/(jr(i)*Ee(e)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return qe(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return qe(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var t,e;return 0===r?1:((r<0?-r:r)<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),e=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(t=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),e=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),t/e)}(r-=2)}var Ue=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],Pe=Ue.length;function Se(r){return r<10?NaN:r>=3745194030963158e291?0:r<94906265.62425156?function(r){var t,e,n,i,o;if(r<-1.1||r>1.1)return NaN;for(n=0,i=0,t=2*r,o=0;o<Pe;o++)e=n,i=t*(n=i)-e+Ue[o];return.5*(i-e)}(2*Oe(10/r,2)-1)/r:1/(12*r)}function Fe(r,t){var e,n,i;return n=function(r,t){var e,n,i,o;if(2===(e=arguments.length))return dr(r)||dr(t)?NaN:r===_||t===_?_:r===t&&0===r?ae(r)?r:t:r<t?r:t;for(n=O,o=0;o<e;o++){if(dr(i=arguments[o])||i===_)return i;(i<n||i===n&&0===i&&ae(i))&&(n=i)}return n}(r,t),i=function(r,t){var e,n,i,o;if(2===(e=arguments.length))return dr(r)||dr(t)?NaN:r===O||t===O?O:r===t&&0===r?wr(r)?r:t:r>t?r:t;for(n=_,o=0;o<e;o++){if(dr(i=arguments[o])||i===O)return i;(i>n||i===n&&0===i&&wr(i))&&(n=i)}return n}(r,t),n<0?NaN:0===n?O:i===O?_:n>=10?(e=Se(n)+Se(i)-Se(n+i),-.5*rt(i)+.9189385332046728+e+(n-.5)*rt(n/(n+i))+i*fe(-n/(n+i))):i>=10?(e=Se(i)-Se(n+i),ie(n)+e+n-n*rt(n+i)+(i-.5)*fe(-n/(n+i))):rt(Te(n)*(Te(i)/Te(n+i)))}function Ie(r,t){return dr(r)||dr(t)?NaN:q(r)&&q(t)?r<0?Ie(-r+t-1,t):t<0?_:0===t?0:1===t?rt(jr(r)):r<t?_:r-t<2?Ie(r,r-t):-rt(r+1)-Fe(r-t+1,t+1):NaN}function ke(r,t){var e,n,i,o;if(r<=0)return 0;if(r>=1)return 1;for(e=E(t*(1-r))+1,n=0,o=0;o<e;o++)i=Ie(t,o),i+=(t-o)*rt(1-r-o/t),n+=_e(i+=(o-1)*rt(r+o/t));return 1-r*n}function Ve(r,t){var e,n,i,o,u,f,a,c,s,l;if((l=r*r*t)>7.24||l>3.76&&t>99)return 1-2*_e(-(2.000071+.331/le(t)+1.409/t)*l);for(n=(c=E(t*r)+1)-t*r,i=new Sr((s=2*c-1)*s),o=new Sr(s*s),f=0;f<s;f++)for(a=0;a<s;a++)i[f*s+a]=f-a+1<0?0:1;for(f=0;f<s;f++)i[f*s]-=Oe(n,f+1),i[(s-1)*s+f]-=Oe(n,s-f);for(i[(s-1)*s]+=2*n-1>0?Oe(2*n-1,s):0,f=0;f<s;f++)for(a=0;a<s;a++)if(f-a+1>0)for(u=1;u<=f-a+1;u++)i[f*s+a]/=u;for(0,function r(t,n,i){var u,f,a;if(1===i){for(a=0;a<s*s;a++)o[a]=t[a],e=n;return}if(r(t,n,E(i/2)),f=v(o,o),u=2*e,i%2==0){for(a=0;a<s*s;a++)o[a]=f[a];e=u}else o=v(t,f),e=n+u;if(o[E(s/2)*s+E(s/2)]>1e140){for(a=0;a<s*s;a++)o[a]*=1e-140;e+=140}}(i,0,t),l=o[(c-1)*s+c-1],f=1;f<=t;f++)(l=l*f/t)<1e-140&&(l*=1e140,e-=140);return l*=Oe(10,e);function v(r,t){var e,n,i,o,u;for(u=new Sr(s*s),e=0;e<s;e++)for(n=0;n<s;n++)for(o=0,i=0;i<s;i++)o+=r[e*s+i]*t[i*s+n],u[e*s+n]=o;return u}}function xe(r,t){return r-t}function Le(r,t){var e,n,i;for(e=t.length,n=new Array(e),i=0;i<e;i++)n[i]=r-t[i];return n}var Me,Be=Object.getPrototypeOf;Me=fr(Object.getPrototypeOf)?Be:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===w(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ge=Me;var He=Object.prototype;function Ce(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!nr(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),Ge(r))}(r),!t||!p(r,"constructor")&&p(t,"constructor")&&fr(t.constructor)&&"[object Function]"===w(t.constructor)&&p(t,"isPrototypeOf")&&fr(t.isPrototypeOf)&&(t===He||function(r){var t;for(t in r)if(!p(r,t))return!1;return!0}(r)))}function Re(r,t){return Ce(t)?p(t,"alpha")&&(r.alpha=t.alpha,!l(r.alpha)||hr(r.alpha))?new TypeError(br("0fi8h","alpha",r.alpha)):p(t,"alternative")&&(r.alternative=t.alternative,!ar(r.alternative))?new TypeError(br("0fi2i","alternative",r.alternative)):p(t,"sorted")&&(r.sorted=t.sorted,!C(r.sorted))?new TypeError(br("0fi30","sorted",r.sorted)):null:new TypeError(br("0fi2h",t))}var We={};function De(r){var t=We[r];if(void 0===t)throw new Error(br("0fi9v",r));return t}function Ye(r){return U(r)&&r>0}function Xe(r){return P(r)&&r.valueOf()>0}function Ke(r){return Ye(r)||Xe(r)}We.arcsine=require("@stdlib/stats-base-dists-arcsine-cdf"),We.beta=require("@stdlib/stats-base-dists-beta-cdf"),We.betaprime=require("@stdlib/stats-base-dists-betaprime-cdf"),We.cauchy=require("@stdlib/stats-base-dists-cauchy-cdf"),We.chi=require("@stdlib/stats-base-dists-chi-cdf"),We.chisquare=require("@stdlib/stats-base-dists-chisquare-cdf"),We.cosine=require("@stdlib/stats-base-dists-cosine-cdf"),We.erlang=require("@stdlib/stats-base-dists-erlang-cdf"),We.exponential=require("@stdlib/stats-base-dists-exponential-cdf"),We.f=require("@stdlib/stats-base-dists-f-cdf"),We.frechet=require("@stdlib/stats-base-dists-frechet-cdf"),We.gamma=require("@stdlib/stats-base-dists-gamma-cdf"),We.gumbel=require("@stdlib/stats-base-dists-gumbel-cdf"),We.invgamma=require("@stdlib/stats-base-dists-invgamma-cdf"),We.kumaraswamy=require("@stdlib/stats-base-dists-kumaraswamy-cdf"),We.laplace=require("@stdlib/stats-base-dists-laplace-cdf"),We.levy=require("@stdlib/stats-base-dists-levy-cdf"),We.logistic=require("@stdlib/stats-base-dists-logistic-cdf"),We.lognormal=require("@stdlib/stats-base-dists-lognormal-cdf"),We.normal=require("@stdlib/stats-base-dists-normal-cdf"),We["pareto-type1"]=require("@stdlib/stats-base-dists-pareto-type1-cdf"),We.rayleigh=require("@stdlib/stats-base-dists-rayleigh-cdf"),We.t=require("@stdlib/stats-base-dists-t-cdf"),We.triangular=require("@stdlib/stats-base-dists-triangular-cdf"),We.uniform=require("@stdlib/stats-base-dists-uniform-cdf"),We.weibull=require("@stdlib/stats-base-dists-weibull-cdf"),s(Ke,"isPrimitive",Ye),s(Ke,"isObject",Xe);var ze=1e308;function Je(r,t){var e,n;return dr(r)||dr(t)||mr(t)?NaN:mr(r)||0===r||t<-324||jr(r)>9007199254740992&&t<=0?r:t>308?0*r:t<-308?(e=Oe(10,-(t+308)),mr(n=r*ze*e)?r:Ct(n)/ze/e):mr(n=r*(e=Oe(10,-t)))?r:Ct(n)/e}function Qe(r){var t,e,n;if(e=4,t=!0,arguments.length>0){if(!Ce(r))throw new TypeError(br("0fi3X",r));if(p(r,"digits")){if(!Ke(r.digits))throw new TypeError(br("0fi3b","digits",r.digits));e=r.digits}if(p(r,"decision")){if(!C(r.decision))throw new TypeError(br("0fi30","decision",r.decision));t=r.decision}}switch(n="",n+=this.method,n+="\n\n",n+="Null hypothesis: the CDF of `x` is ",this.alternative){case"less":n+="greater than or equal to ";break;case"greater":n+="less than or equal to ";break;default:n+="equal to "}return n+="the reference CDF",n+="\n\n",n+="    pValue: "+Je(this.pValue,-e)+"\n",n+="    statistic: "+Je(this.statistic,-e),n+="\n\n",t&&(n+="Test Decision: ",this.rejected?n+="Reject null in favor of alternative at "+100*this.alpha+"% significance level":n+="Fail to reject null in favor of alternative at "+100*this.alpha+"% significance level",n+="\n"),n}var Ze=Array.prototype.slice;function $e(){var r,t,e,n,i,o,u,f,a,c,s,l,v,b,d,y,p;if(p=arguments[1],!L(y=arguments[0])&&!V(y))throw new TypeError(br("0fiAU",y));if(!fr(p)&&!ar(p))throw new TypeError(br("0fiAV",p));for(ar(p)&&(p=De(p)),r=p.length-1,d=y.length,t=new Array(r),b=0;b<r;b++){if(!A(v=arguments[s=b+2])||hr(v))throw new TypeError(br("0fiAW",v));t[b]=arguments[s]}if(i={},arguments.length>2+r&&(c=Re(i,arguments[2+r])))throw c;if(y=Ze.call(y),(n=void 0===i.alpha?.05:i.alpha)<0||n>1)throw new RangeError(br("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",n));for(!0!==i.sorted&&y.sort(xe),e=[null].concat(t),b=0;b<d;b++)e[0]=y[b],f=p.apply(null,e),y[b]=f-b/d;switch(a=i.alternative||"two-sided"){case"two-sided":u=gr(d,[gr(d,y,1),gr(d,Le(1/d,y),1)],1);break;case"greater":u=gr(d,Le(1/d,y),1);break;case"less":u=gr(d,y,1);break;default:throw new Error(br("0fi3t","alternative",["two-sided","less","greater"].join('", "'),a))}return G(l={},"rejected",(o="two-sided"===a?1-Ve(u,d):1-ke(u,d))<=n),G(l,"alpha",n),G(l,"pValue",o),G(l,"statistic",u),G(l,"method","Kolmogorov-Smirnov goodness-of-fit test"),G(l,"print",Qe),G(l,"alternative",a),l}export{$e as default};
//# sourceMappingURL=mod.js.map