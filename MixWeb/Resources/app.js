!function o(f,u,s){function a(r,t){if(!u[r]){if(!f[r]){var e="function"==typeof require&&require;if(!t&&e)return e(r,!0);if(h)return h(r,!0);var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var i=u[r]={exports:{}};f[r][0].call(i.exports,function(t){return a(f[r][1][t]||t)},i,i.exports,o,f,u,s)}return u[r].exports}for(var h="function"==typeof require&&require,t=0;t<s.length;t++)a(s[t]);return a}({1:[function(t,r,e){"use strict";e.byteLength=function(t){var r=l(t),e=r[0],n=r[1];return 3*(e+n)/4-n},e.toByteArray=function(t){for(var r,e=l(t),n=e[0],i=e[1],o=new p((a=n,h=i,3*(a+h)/4-h)),f=0,u=0<i?n-4:n,s=0;s<u;s+=4)r=c[t.charCodeAt(s)]<<18|c[t.charCodeAt(s+1)]<<12|c[t.charCodeAt(s+2)]<<6|c[t.charCodeAt(s+3)],o[f++]=r>>16&255,o[f++]=r>>8&255,o[f++]=255&r;var a,h;2===i&&(r=c[t.charCodeAt(s)]<<2|c[t.charCodeAt(s+1)]>>4,o[f++]=255&r);1===i&&(r=c[t.charCodeAt(s)]<<10|c[t.charCodeAt(s+1)]<<4|c[t.charCodeAt(s+2)]>>2,o[f++]=r>>8&255,o[f++]=255&r);return o},e.fromByteArray=function(t){for(var r,e=t.length,n=e%3,i=[],o=0,f=e-n;o<f;o+=16383)i.push(s(t,o,f<o+16383?f:o+16383));1===n?(r=t[e-1],i.push(u[r>>2]+u[r<<4&63]+"==")):2===n&&(r=(t[e-2]<<8)+t[e-1],i.push(u[r>>10]+u[r>>4&63]+u[r<<2&63]+"="));return i.join("")};for(var u=[],c=[],p="undefined"!=typeof Uint8Array?Uint8Array:Array,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=0,o=n.length;i<o;++i)u[i]=n[i],c[n.charCodeAt(i)]=i;function l(t){var r=t.length;if(0<r%4)throw new Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");return-1===e&&(e=r),[e,e===r?0:4-e%4]}function s(t,r,e){for(var n,i,o=[],f=r;f<e;f+=3)n=(t[f]<<16&16711680)+(t[f+1]<<8&65280)+(255&t[f+2]),o.push(u[(i=n)>>18&63]+u[i>>12&63]+u[i>>6&63]+u[63&i]);return o.join("")}c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63},{}],2:[function(t,r,e){"use strict";var n=t("base64-js"),o=t("ieee754");e.Buffer=c,e.SlowBuffer=function(t){+t!=t&&(t=0);return c.alloc(+t)},e.INSPECT_MAX_BYTES=50;var i=2147483647;function f(t){if(i<t)throw new RangeError('The value "'+t+'" is invalid for option "size"');var r=new Uint8Array(t);return r.__proto__=c.prototype,r}function c(t,r,e){if("number"!=typeof t)return u(t,r,e);if("string"==typeof r)throw new TypeError('The "string" argument must be of type string. Received type number');return a(t)}function u(t,r,e){if("string"==typeof t)return function(t,r){"string"==typeof r&&""!==r||(r="utf8");if(!c.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var e=0|l(t,r),n=f(e),i=n.write(t,r);i!==e&&(n=n.slice(0,i));return n}(t,r);if(ArrayBuffer.isView(t))return h(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(N(t,ArrayBuffer)||t&&N(t.buffer,ArrayBuffer))return function(t,r,e){if(r<0||t.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<r+(e||0))throw new RangeError('"length" is outside of buffer bounds');var n;n=void 0===r&&void 0===e?new Uint8Array(t):void 0===e?new Uint8Array(t,r):new Uint8Array(t,r,e);return n.__proto__=c.prototype,n}(t,r,e);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return c.from(n,r,e);var i=function(t){if(c.isBuffer(t)){var r=0|p(t.length),e=f(r);return 0===e.length||t.copy(e,0,0,r),e}if(void 0!==t.length)return"number"!=typeof t.length||P(t.length)?f(0):h(t);if("Buffer"===t.type&&Array.isArray(t.data))return h(t.data)}(t);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return c.from(t[Symbol.toPrimitive]("string"),r,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function s(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function a(t){return s(t),f(t<0?0:0|p(t))}function h(t){for(var r=t.length<0?0:0|p(t.length),e=f(r),n=0;n<r;n+=1)e[n]=255&t[n];return e}function p(t){if(i<=t)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return 0|t}function l(t,r){if(c.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||N(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var e=t.length,n=2<arguments.length&&!0===arguments[2];if(!n&&0===e)return 0;for(var i=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return M(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return O(t).length;default:if(i)return n?-1:M(t).length;r=(""+r).toLowerCase(),i=!0}}function y(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function g(t,r,e,n,i){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):2147483647<e?e=2147483647:e<-2147483648&&(e=-2147483648),P(e=+e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof r&&(r=c.from(r,n)),c.isBuffer(r))return 0===r.length?-1:w(t,r,e,n,i);if("number"==typeof r)return r&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):w(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function w(t,r,e,n,i){var o,f=1,u=t.length,s=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;u/=f=2,s/=2,e/=2}function a(t,r){return 1===f?t[r]:t.readUInt16BE(r*f)}if(i){var h=-1;for(o=e;o<u;o++)if(a(t,o)===a(r,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===s)return h*f}else-1!==h&&(o-=o-h),h=-1}else for(u<e+s&&(e=u-s),o=e;0<=o;o--){for(var c=!0,p=0;p<s;p++)if(a(t,o+p)!==a(r,p)){c=!1;break}if(c)return o}return-1}function d(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?i<(n=Number(n))&&(n=i):n=i;var o=r.length;o/2<n&&(n=o/2);for(var f=0;f<n;++f){var u=parseInt(r.substr(2*f,2),16);if(P(u))return f;t[e+f]=u}return f}function v(t,r,e,n){return k(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function b(t,r,e){return 0===r&&e===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(r,e))}function m(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o,f,u,s,a=t[i],h=null,c=239<a?4:223<a?3:191<a?2:1;if(i+c<=e)switch(c){case 1:a<128&&(h=a);break;case 2:128==(192&(o=t[i+1]))&&127<(s=(31&a)<<6|63&o)&&(h=s);break;case 3:o=t[i+1],f=t[i+2],128==(192&o)&&128==(192&f)&&2047<(s=(15&a)<<12|(63&o)<<6|63&f)&&(s<55296||57343<s)&&(h=s);break;case 4:o=t[i+1],f=t[i+2],u=t[i+3],128==(192&o)&&128==(192&f)&&128==(192&u)&&65535<(s=(15&a)<<18|(63&o)<<12|(63&f)<<6|63&u)&&s<1114112&&(h=s)}null===h?(h=65533,c=1):65535<h&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),i+=c}return function(t){var r=t.length;if(r<=E)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=E));return e}(n)}e.kMaxLength=i,(c.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()}catch(t){return!1}}())||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.buffer}}),Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.byteOffset}}),"undefined"!=typeof Symbol&&null!=Symbol.species&&c[Symbol.species]===c&&Object.defineProperty(c,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}),c.poolSize=8192,c.from=function(t,r,e){return u(t,r,e)},c.prototype.__proto__=Uint8Array.prototype,c.__proto__=Uint8Array,c.alloc=function(t,r,e){return i=r,o=e,s(n=t),n<=0?f(n):void 0!==i?"string"==typeof o?f(n).fill(i,o):f(n).fill(i):f(n);var n,i,o},c.allocUnsafe=function(t){return a(t)},c.allocUnsafeSlow=function(t){return a(t)},c.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==c.prototype},c.compare=function(t,r){if(N(t,Uint8Array)&&(t=c.from(t,t.offset,t.byteLength)),N(r,Uint8Array)&&(r=c.from(r,r.offset,r.byteLength)),!c.isBuffer(t)||!c.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},c.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(t,r){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return c.alloc(0);var e;if(void 0===r)for(e=r=0;e<t.length;++e)r+=t[e].length;var n=c.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var o=t[e];if(N(o,Uint8Array)&&(o=c.from(o)),!c.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},c.byteLength=l,c.prototype._isBuffer=!0,c.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)y(this,r,r+1);return this},c.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)y(this,r,r+3),y(this,r+1,r+2);return this},c.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)y(this,r,r+7),y(this,r+1,r+6),y(this,r+2,r+5),y(this,r+3,r+4);return this},c.prototype.toLocaleString=c.prototype.toString=function(){var t=this.length;return 0===t?"":0===arguments.length?m(this,0,t):function(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return _(this,r,e);case"utf8":case"utf-8":return m(this,r,e);case"ascii":return B(this,r,e);case"latin1":case"binary":return A(this,r,e);case"base64":return b(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return U(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}.apply(this,arguments)},c.prototype.equals=function(t){if(!c.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===c.compare(this,t)},c.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},c.prototype.compare=function(t,r,e,n,i){if(N(t,Uint8Array)&&(t=c.from(t,t.offset,t.byteLength)),!c.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(i<=n&&e<=r)return 0;if(i<=n)return-1;if(e<=r)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),f=(e>>>=0)-(r>>>=0),u=Math.min(o,f),s=this.slice(n,i),a=t.slice(r,e),h=0;h<u;++h)if(s[h]!==a[h]){o=s[h],f=a[h];break}return o<f?-1:f<o?1:0},c.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},c.prototype.indexOf=function(t,r,e){return g(this,t,r,e,!0)},c.prototype.lastIndexOf=function(t,r,e){return g(this,t,r,e,!1)},c.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r>>>=0,isFinite(e)?(e>>>=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||i<e)&&(e=i),0<t.length&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o,f,u,s,a,h,c,p,l,y=!1;;)switch(n){case"hex":return d(this,t,r,e);case"utf8":case"utf-8":return p=r,l=e,k(M(t,(c=this).length-p),c,p,l);case"ascii":return v(this,t,r,e);case"latin1":case"binary":return v(this,t,r,e);case"base64":return s=this,a=r,h=e,k(O(t),s,a,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return f=r,u=e,k(function(t,r){for(var e,n,i,o=[],f=0;f<t.length&&!((r-=2)<0);++f)e=t.charCodeAt(f),n=e>>8,i=e%256,o.push(i),o.push(n);return o}(t,(o=this).length-f),o,f,u);default:if(y)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),y=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var E=4096;function B(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function A(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function _(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||n<e)&&(e=n);for(var i="",o=r;o<e;++o)i+=R(t[o]);return i}function U(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function I(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(e<t+r)throw new RangeError("Trying to access beyond buffer length")}function T(t,r,e,n,i,o){if(!c.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(i<r||r<o)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function C(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function L(t,r,e,n,i){return r=+r,e>>>=0,i||C(t,0,e,4),o.write(t,r,e,n,23,4),e+4}function S(t,r,e,n,i){return r=+r,e>>>=0,i||C(t,0,e,8),o.write(t,r,e,n,52,8),e+8}c.prototype.slice=function(t,r){var e=this.length;(t=~~t)<0?(t+=e)<0&&(t=0):e<t&&(t=e),(r=void 0===r?e:~~r)<0?(r+=e)<0&&(r=0):e<r&&(r=e),r<t&&(r=t);var n=this.subarray(t,r);return n.__proto__=c.prototype,n},c.prototype.readUIntLE=function(t,r,e){t>>>=0,r>>>=0,e||I(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},c.prototype.readUIntBE=function(t,r,e){t>>>=0,r>>>=0,e||I(t,r,this.length);for(var n=this[t+--r],i=1;0<r&&(i*=256);)n+=this[t+--r]*i;return n},c.prototype.readUInt8=function(t,r){return t>>>=0,r||I(t,1,this.length),this[t]},c.prototype.readUInt16LE=function(t,r){return t>>>=0,r||I(t,2,this.length),this[t]|this[t+1]<<8},c.prototype.readUInt16BE=function(t,r){return t>>>=0,r||I(t,2,this.length),this[t]<<8|this[t+1]},c.prototype.readUInt32LE=function(t,r){return t>>>=0,r||I(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},c.prototype.readUInt32BE=function(t,r){return t>>>=0,r||I(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},c.prototype.readIntLE=function(t,r,e){t>>>=0,r>>>=0,e||I(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return(i*=128)<=n&&(n-=Math.pow(2,8*r)),n},c.prototype.readIntBE=function(t,r,e){t>>>=0,r>>>=0,e||I(t,r,this.length);for(var n=r,i=1,o=this[t+--n];0<n&&(i*=256);)o+=this[t+--n]*i;return(i*=128)<=o&&(o-=Math.pow(2,8*r)),o},c.prototype.readInt8=function(t,r){return t>>>=0,r||I(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},c.prototype.readInt16LE=function(t,r){t>>>=0,r||I(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},c.prototype.readInt16BE=function(t,r){t>>>=0,r||I(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},c.prototype.readInt32LE=function(t,r){return t>>>=0,r||I(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},c.prototype.readInt32BE=function(t,r){return t>>>=0,r||I(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},c.prototype.readFloatLE=function(t,r){return t>>>=0,r||I(t,4,this.length),o.read(this,t,!0,23,4)},c.prototype.readFloatBE=function(t,r){return t>>>=0,r||I(t,4,this.length),o.read(this,t,!1,23,4)},c.prototype.readDoubleLE=function(t,r){return t>>>=0,r||I(t,8,this.length),o.read(this,t,!0,52,8)},c.prototype.readDoubleBE=function(t,r){return t>>>=0,r||I(t,8,this.length),o.read(this,t,!1,52,8)},c.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r>>>=0,e>>>=0,n)||T(this,t,r,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},c.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r>>>=0,e>>>=0,n)||T(this,t,r,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[r+i]=255&t;0<=--i&&(o*=256);)this[r+i]=t/o&255;return r+e},c.prototype.writeUInt8=function(t,r,e){return t=+t,r>>>=0,e||T(this,t,r,1,255,0),this[r]=255&t,r+1},c.prototype.writeUInt16LE=function(t,r,e){return t=+t,r>>>=0,e||T(this,t,r,2,65535,0),this[r]=255&t,this[r+1]=t>>>8,r+2},c.prototype.writeUInt16BE=function(t,r,e){return t=+t,r>>>=0,e||T(this,t,r,2,65535,0),this[r]=t>>>8,this[r+1]=255&t,r+2},c.prototype.writeUInt32LE=function(t,r,e){return t=+t,r>>>=0,e||T(this,t,r,4,4294967295,0),this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t,r+4},c.prototype.writeUInt32BE=function(t,r,e){return t=+t,r>>>=0,e||T(this,t,r,4,4294967295,0),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},c.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r>>>=0,!n){var i=Math.pow(2,8*e-1);T(this,t,r,e,i-1,-i)}var o=0,f=1,u=0;for(this[r]=255&t;++o<e&&(f*=256);)t<0&&0===u&&0!==this[r+o-1]&&(u=1),this[r+o]=(t/f>>0)-u&255;return r+e},c.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r>>>=0,!n){var i=Math.pow(2,8*e-1);T(this,t,r,e,i-1,-i)}var o=e-1,f=1,u=0;for(this[r+o]=255&t;0<=--o&&(f*=256);)t<0&&0===u&&0!==this[r+o+1]&&(u=1),this[r+o]=(t/f>>0)-u&255;return r+e},c.prototype.writeInt8=function(t,r,e){return t=+t,r>>>=0,e||T(this,t,r,1,127,-128),t<0&&(t=255+t+1),this[r]=255&t,r+1},c.prototype.writeInt16LE=function(t,r,e){return t=+t,r>>>=0,e||T(this,t,r,2,32767,-32768),this[r]=255&t,this[r+1]=t>>>8,r+2},c.prototype.writeInt16BE=function(t,r,e){return t=+t,r>>>=0,e||T(this,t,r,2,32767,-32768),this[r]=t>>>8,this[r+1]=255&t,r+2},c.prototype.writeInt32LE=function(t,r,e){return t=+t,r>>>=0,e||T(this,t,r,4,2147483647,-2147483648),this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24,r+4},c.prototype.writeInt32BE=function(t,r,e){return t=+t,r>>>=0,e||T(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},c.prototype.writeFloatLE=function(t,r,e){return L(this,t,r,!0,e)},c.prototype.writeFloatBE=function(t,r,e){return L(this,t,r,!1,e)},c.prototype.writeDoubleLE=function(t,r,e){return S(this,t,r,!0,e)},c.prototype.writeDoubleBE=function(t,r,e){return S(this,t,r,!1,e)},c.prototype.copy=function(t,r,e,n){if(!c.isBuffer(t))throw new TypeError("argument should be a Buffer");if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),0<n&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i=n-e;if(this===t&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(r,e,n);else if(this===t&&e<r&&r<n)for(var o=i-1;0<=o;--o)t[o+r]=this[o+e];else Uint8Array.prototype.set.call(t,this.subarray(e,n),r);return i},c.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!c.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===t.length){var i=t.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(t=i)}}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var o;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(o=r;o<e;++o)this[o]=t;else{var f=c.isBuffer(t)?t:c.from(t,n),u=f.length;if(0===u)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<e-r;++o)this[o+r]=f[o%u]}return this};var x=/[^+/0-9A-Za-z-_]/g;function R(t){return t<16?"0"+t.toString(16):t.toString(16)}function M(t,r){var e;r=r||1/0;for(var n=t.length,i=null,o=[],f=0;f<n;++f){if(55295<(e=t.charCodeAt(f))&&e<57344){if(!i){if(56319<e){-1<(r-=3)&&o.push(239,191,189);continue}if(f+1===n){-1<(r-=3)&&o.push(239,191,189);continue}i=e;continue}if(e<56320){-1<(r-=3)&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&-1<(r-=3)&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function O(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(x,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function k(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function N(t,r){return t instanceof r||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===r.name}function P(t){return t!=t}},{"base64-js":1,ieee754:3}],3:[function(t,r,e){e.read=function(t,r,e,n,i){var o,f,u=8*i-n-1,s=(1<<u)-1,a=s>>1,h=-7,c=e?i-1:0,p=e?-1:1,l=t[r+c];for(c+=p,o=l&(1<<-h)-1,l>>=-h,h+=u;0<h;o=256*o+t[r+c],c+=p,h-=8);for(f=o&(1<<-h)-1,o>>=-h,h+=n;0<h;f=256*f+t[r+c],c+=p,h-=8);if(0===o)o=1-a;else{if(o===s)return f?NaN:1/0*(l?-1:1);f+=Math.pow(2,n),o-=a}return(l?-1:1)*f*Math.pow(2,o-n)},e.write=function(t,r,e,n,i,o){var f,u,s,a=8*o-i-1,h=(1<<a)-1,c=h>>1,p=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,l=n?0:o-1,y=n?1:-1,g=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,f=h):(f=Math.floor(Math.log(r)/Math.LN2),r*(s=Math.pow(2,-f))<1&&(f--,s*=2),2<=(r+=1<=f+c?p/s:p*Math.pow(2,1-c))*s&&(f++,s/=2),h<=f+c?(u=0,f=h):1<=f+c?(u=(r*s-1)*Math.pow(2,i),f+=c):(u=r*Math.pow(2,c-1)*Math.pow(2,i),f=0));8<=i;t[e+l]=255&u,l+=y,u/=256,i-=8);for(f=f<<i|u,a+=i;0<a;t[e+l]=255&f,l+=y,f/=256,a-=8);t[e+l-y]|=128*g}},{}],4:[function(t,r,e){var n=function(t){var e=t;this._params={};var n=function(t){if(window.WebViewJavascriptBridge)return t(window.WebViewJavascriptBridge);if(document.addEventListener("WebViewJavascriptBridgeReady",function(){t(window.WebViewJavascriptBridge)}),setTimeout(function(){window.WebViewJavascriptBridge||t()},100),window.WVJBCallbacks)return window.WVJBCallbacks.push(t);window.WVJBCallbacks=[t];var r=document.createElement("iframe");r.style.display="none",r.src="https://__bridge_loaded__",document.documentElement.appendChild(r),setTimeout(function(){document.documentElement.removeChild(r)},0)};this.n=function(t){return e=t,this},this.p=function(t){for(var r in t)this._params[r]=t[r];return this},this.c=function(r){n(function(t){t?t.callHandler(e,this._params,r):"function"==typeof r&&r()}.bind(this))},this.r=function(r,e){n(function(t){t&&t.registerHandler(r,e)})}};n.prototype.viewIndex=function(t){return 0<=t&&Object.assign(this._params,this._params,{useIndex:!0,index:t}),this},window.$b=function(t){return new n(t)},window.$br=function(t,r){return(new n).r(t,r)}},{}],5:[function(t,r,e){window.Buffer=t("buffer").Buffer,t("./_bridge")},{"./_bridge":4,buffer:2}]},{},[5]);
