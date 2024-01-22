import{aD as x}from"./arco-7fdff3a5.js";function D(l){if(l.length>=255)throw new TypeError("Alphabet too long");for(var A=new Uint8Array(256),p=0;p<A.length;p++)A[p]=255;for(var b=0;b<l.length;b++){var s=l.charAt(b),U=s.charCodeAt(0);if(A[U]!==255)throw new TypeError(s+" is ambiguous");A[U]=b}var g=l.length,y=l.charAt(0),z=Math.log(g)/Math.log(256),m=Math.log(256)/Math.log(g);function C(r){if(r instanceof Uint8Array||(ArrayBuffer.isView(r)?r=new Uint8Array(r.buffer,r.byteOffset,r.byteLength):Array.isArray(r)&&(r=Uint8Array.from(r))),!(r instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(r.length===0)return"";for(var e=0,w=0,t=0,o=r.length;t!==o&&r[t]===0;)t++,e++;for(var f=(o-t)*m+1>>>0,n=new Uint8Array(f);t!==o;){for(var h=r[t],v=0,a=f-1;(h!==0||v<w)&&a!==-1;a--,v++)h+=256*n[a]>>>0,n[a]=h%g>>>0,h=h/g>>>0;if(h!==0)throw new Error("Non-zero carry");w=v,t++}for(var i=f-w;i!==f&&n[i]===0;)i++;for(var d=y.repeat(e);i<f;++i)d+=l.charAt(n[i]);return d}function E(r){if(typeof r!="string")throw new TypeError("Expected String");if(r.length===0)return new Uint8Array;for(var e=0,w=0,t=0;r[e]===y;)w++,e++;for(var o=(r.length-e)*z+1>>>0,f=new Uint8Array(o);r[e];){var n=A[r.charCodeAt(e)];if(n===255)return;for(var h=0,v=o-1;(n!==0||h<t)&&v!==-1;v--,h++)n+=g*f[v]>>>0,f[v]=n%256>>>0,n=n/256>>>0;if(n!==0)throw new Error("Non-zero carry");t=h,e++}for(var a=o-t;a!==o&&f[a]===0;)a++;for(var i=new Uint8Array(w+(o-a)),d=w;a!==o;)i[d++]=f[a++];return i}function M(r){var e=E(r);if(e)return e;throw new Error("Non-base"+g+" character")}return{encode:C,decodeUnsafe:E,decode:M}}var F=D;const N=F,R="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";var S=N(R);const T=x(S);export{S as a,T as b};
