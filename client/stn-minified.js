var d,l=this;function aa(a,b){var c=a.split("."),e=l;c[0]in e||!e.execScript||e.execScript("var "+c[0]);for(var f;c.length&&(f=c.shift());)c.length||void 0===b?e=e[f]?e[f]:e[f]={}:e[f]=b}function ba(a){a=a.split(".");for(var b=l,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function m(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function n(a){return"array"==m(a)}function ca(a){var b=m(a);return"array"==b||"object"==b&&"number"==typeof a.length}function s(a){return"string"==typeof a}function t(a){return"number"==typeof a}function da(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var ea="closure_uid_"+(1E9*Math.random()>>>0),fa=0;
function u(a,b){function c(){}c.prototype=b.prototype;a.Xb=b.prototype;a.prototype=new c;a.cc=function(a,c,g){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};var ga;function ha(a){if(!ia.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ja,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ka,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(la,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ma,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(na,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(oa,"&#0;"));return a}var ja=/&/g,ka=/</g,la=/>/g,ma=/"/g,na=/'/g,oa=/\x00/g,ia=/[\x00&<>"']/;function pa(a,b){return a<b?-1:a>b?1:0};var v=Array.prototype,qa=v.indexOf?function(a,b,c){return v.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(s(a))return s(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ra=v.forEach?function(a,b,c){v.forEach.call(a,b,c)}:function(a,b,c){for(var e=a.length,f=s(a)?a.split(""):a,g=0;g<e;g++)g in f&&b.call(c,f[g],g,a)},sa=v.filter?function(a,b,c){return v.filter.call(a,b,c)}:function(a,b,c){for(var e=a.length,f=[],g=0,h=s(a)?
a.split(""):a,k=0;k<e;k++)if(k in h){var q=h[k];b.call(c,q,k,a)&&(f[g++]=q)}return f};function x(a,b){return 0<=qa(a,b)}function ta(a,b){var c=qa(a,b),e;(e=0<=c)&&v.splice.call(a,c,1);return e}function ua(a){var b=a.length;if(0<b){for(var c=Array(b),e=0;e<b;e++)c[e]=a[e];return c}return[]}function va(a,b,c){return 2>=arguments.length?v.slice.call(a,b):v.slice.call(a,b,c)};function y(a){a=a.className;return s(a)&&a.match(/\S+/g)||[]}function wa(a,b){var c=y(a),e=va(arguments,1),f=c.length+e.length;xa(c,e);a.className=c.join(" ");return c.length==f}function ya(a,b){var c=y(a),c=za(c,va(arguments,1));a.className=c.join(" ")}function xa(a,b){for(var c=0;c<b.length;c++)x(a,b[c])||a.push(b[c])}function za(a,b){return sa(a,function(a){return!x(b,a)})}
function Aa(a,b,c){var e=y(a);s(b)?ta(e,b):n(b)&&(e=za(e,b));s(c)&&!x(e,c)?e.push(c):n(c)&&xa(e,c);a.className=e.join(" ")};function Ba(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Ca(a){var b=[],c=0,e;for(e in a)b[c++]=e;return b}function Da(a){for(var b in a)return!1;return!0}var Ea="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fa(a,b){for(var c,e,f=1;f<arguments.length;f++){e=arguments[f];for(c in e)a[c]=e[c];for(var g=0;g<Ea.length;g++)c=Ea[g],Object.prototype.hasOwnProperty.call(e,c)&&(a[c]=e[c])}};var z;a:{var Ga=l.navigator;if(Ga){var Ha=Ga.userAgent;if(Ha){z=Ha;break a}}z=""}function A(a){return-1!=z.indexOf(a)};var Ia,Ja,Ka=A("Opera")||A("OPR"),B=A("Trident")||A("MSIE"),C=A("Gecko")&&-1==z.toLowerCase().indexOf("webkit")&&!(A("Trident")||A("MSIE")),D=-1!=z.toLowerCase().indexOf("webkit"),La,Ma=l.navigator||null;La=Ma&&Ma.platform||"";Ia=-1!=La.indexOf("Mac");Ja=-1!=La.indexOf("Win");var Na=-1!=La.indexOf("Linux");function Oa(){var a=l.document;return a?a.documentMode:void 0}
var Pa=function(){var a="",b;if(Ka&&l.opera)return a=l.opera.version,"function"==m(a)?a():a;C?b=/rv\:([^\);]+)(\)|;)/:B?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:D&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(z))?a[1]:"");return B&&(b=Oa(),b>parseFloat(a))?String(b):a}(),Qa={};
function E(a){var b;if(!(b=Qa[a])){b=0;for(var c=String(Pa).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(c.length,e.length),g=0;0==b&&g<f;g++){var h=c[g]||"",k=e[g]||"",q=RegExp("(\\d*)(\\D*)","g"),w=RegExp("(\\d*)(\\D*)","g");do{var r=q.exec(h)||["","",""],p=w.exec(k)||["","",""];if(0==r[0].length&&0==p[0].length)break;b=pa(0==r[1].length?0:parseInt(r[1],10),0==p[1].length?0:parseInt(p[1],10))||pa(0==r[2].length,0==p[2].length)||
pa(r[2],p[2])}while(0==b)}b=Qa[a]=0<=b}return b}var Ra=l.document,Sa=Ra&&B?Oa()||("CSS1Compat"==Ra.compatMode?parseInt(Pa,10):5):void 0;function Ta(a,b){this.width=a;this.height=b}Ta.prototype.toString=function(){return"("+this.width+" x "+this.height+")"};Ta.prototype.scale=function(a,b){var c=t(b)?b:a;this.width*=a;this.height*=c;return this};var Ua=!B||B&&9<=Sa,Va=!C&&!B||B&&B&&9<=Sa||C&&E("1.9.1");B&&E("9");function Wa(a,b){return s(b)?a.getElementById(b):b}function Xa(a,b){Ba(b,function(b,e){"style"==e?a.style.cssText=b:"class"==e?a.className=b:"for"==e?a.htmlFor=b:e in Ya?a.setAttribute(Ya[e],b):0==e.lastIndexOf("aria-",0)||0==e.lastIndexOf("data-",0)?a.setAttribute(e,b):a[e]=b})}var Ya={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Za(a){a=a.document;a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new Ta(a.clientWidth,a.clientHeight)}function $a(a,b,c,e){function f(c){c&&b.appendChild(s(c)?a.createTextNode(c):c)}for(;e<c.length;e++){var g=c[e];if(!ca(g)||da(g)&&0<g.nodeType)f(g);else{var h;a:{if(g&&"number"==typeof g.length){if(da(g)){h="function"==typeof g.item||"string"==typeof g.item;break a}if("function"==m(g)){h="function"==typeof g.item;break a}}h=!1}ra(h?ua(g):g,f)}}}
function F(a,b){$a(ab(a),a,arguments,1)}function G(a){return Va&&void 0!=a.children?a.children:sa(a.childNodes,function(a){return 1==a.nodeType})}function H(a){if(void 0!=a.firstElementChild)a=a.firstElementChild;else for(a=a.firstChild;a&&1!=a.nodeType;)a=a.nextSibling;return a}function ab(a){return 9==a.nodeType?a:a.ownerDocument||a.document}function bb(a){this.za=a||l.document||document}d=bb.prototype;d.m=function(a){return Wa(this.za,a)};d.Ka=Xa;
d.Gb=function(a,b,c){var e=this.za,f=arguments,g=f[0],h=f[1];if(!Ua&&h&&(h.name||h.type)){g=["<",g];h.name&&g.push(' name="',ha(h.name),'"');if(h.type){g.push(' type="',ha(h.type),'"');var k={};Fa(k,h);delete k.type;h=k}g.push(">");g=g.join("")}g=e.createElement(g);h&&(s(h)?g.className=h:n(h)?wa.apply(null,[g].concat(h)):Xa(g,h));2<f.length&&$a(e,g,f,2);return g};d.createElement=function(a){return this.za.createElement(a)};d.createTextNode=function(a){return this.za.createTextNode(String(a))};
d.appendChild=function(a,b){a.appendChild(b)};I.$=function(){};I.$.bb={fb:"svg",bc:"vml",Yb:"canvas"};function I(){}aa("xrx",I);var J="closure_listenable_"+(1E6*Math.random()|0),cb=0;function db(a,b,c,e,f){this.ba=a;this.Ga=null;this.src=b;this.type=c;this.ya=!!e;this.Ca=f;this.key=++cb;this.la=this.xa=!1}function eb(a){a.la=!0;a.ba=null;a.Ga=null;a.src=null;a.Ca=null};function K(a){this.src=a;this.I={};this.La=0}K.prototype.add=function(a,b,c,e,f){var g=a.toString();a=this.I[g];a||(a=this.I[g]=[],this.La++);var h=fb(a,b,e,f);-1<h?(b=a[h],c||(b.xa=!1)):(b=new db(b,this.src,g,!!e,f),b.xa=c,a.push(b));return b};K.prototype.remove=function(a,b,c,e){a=a.toString();if(!(a in this.I))return!1;var f=this.I[a];b=fb(f,b,c,e);return-1<b?(eb(f[b]),v.splice.call(f,b,1),0==f.length&&(delete this.I[a],this.La--),!0):!1};
function gb(a,b){var c=b.type;c in a.I&&ta(a.I[c],b)&&(eb(b),0==a.I[c].length&&(delete a.I[c],a.La--))}K.prototype.qa=function(a,b,c,e){a=this.I[a.toString()];var f=-1;a&&(f=fb(a,b,c,e));return-1<f?a[f]:null};function fb(a,b,c,e){for(var f=0;f<a.length;++f){var g=a[f];if(!g.la&&g.ba==b&&g.ya==!!c&&g.Ca==e)return f}return-1};var hb=!B||B&&9<=Sa,ib=B&&!E("9");!D||E("528");C&&E("1.9b")||B&&E("8")||Ka&&E("9.5")||D&&E("528");C&&!E("8")||B&&E("9");function L(){0!=jb&&(this[ea]||(this[ea]=++fa))}var jb=0;L.prototype.kb=!1;function M(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.ka=!1;this.yb=!0}M.prototype.preventDefault=function(){this.defaultPrevented=!0;this.yb=!1};function kb(a){kb[" "](a);return a}kb[" "]=function(){};function N(a,b){M.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.Ua=this.state=null;if(a){var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;if(e){if(C){var f;a:{try{kb(e.nodeName);f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?
e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;this.offsetX=D||void 0!==a.offsetX?a.offsetX:a.layerX;this.offsetY=D||void 0!==a.offsetY?a.offsetY:a.layerY;this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.state=a.state;this.Ua=a;a.defaultPrevented&&this.preventDefault()}}u(N,M);N.prototype.preventDefault=function(){N.Xb.preventDefault.call(this);var a=this.Ua;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ib)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var lb="closure_lm_"+(1E6*Math.random()|0),mb={},nb=0;function O(a,b,c,e,f){if(n(b)){for(var g=0;g<b.length;g++)O(a,b[g],c,e,f);return null}c=ob(c);if(a&&a[J])a=a.Ya(b,c,e,f);else{if(!b)throw Error("Invalid event type");var g=!!e,h=P(a);h||(a[lb]=h=new K(a));c=h.add(b,c,!1,e,f);c.Ga||(e=pb(),c.Ga=e,e.src=a,e.ba=c,a.addEventListener?a.addEventListener(b.toString(),e,g):a.attachEvent(qb(b.toString()),e),nb++);a=c}return a}
function pb(){var a=rb,b=hb?function(c){return a.call(b.src,b.ba,c)}:function(c){c=a.call(b.src,b.ba,c);if(!c)return c};return b}function sb(a,b,c,e,f){if(n(b))for(var g=0;g<b.length;g++)sb(a,b[g],c,e,f);else c=ob(c),a&&a[J]?a.Ma(b,c,e,f):a&&(a=P(a))&&(b=a.qa(b,c,!!e,f))&&tb(b)}
function tb(a){if(!t(a)&&a&&!a.la){var b=a.src;if(b&&b[J])gb(b.ia,a);else{var c=a.type,e=a.Ga;b.removeEventListener?b.removeEventListener(c,e,a.ya):b.detachEvent&&b.detachEvent(qb(c),e);nb--;(c=P(b))?(gb(c,a),0==c.La&&(c.src=null,b[lb]=null)):eb(a)}}}function qb(a){return a in mb?mb[a]:mb[a]="on"+a}function ub(a,b,c,e){var f=1;if(a=P(a))if(b=a.I[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var g=b[a];g&&g.ya==c&&!g.la&&(f&=!1!==vb(g,e))}return Boolean(f)}
function vb(a,b){var c=a.ba,e=a.Ca||a.src;a.xa&&tb(a);return c.call(e,b)}
function rb(a,b){if(a.la)return!0;if(!hb){var c=b||ba("window.event"),e=new N(c,this),f=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var g=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(h){g=!0}if(g||void 0==c.returnValue)c.returnValue=!0}c=[];for(g=e.currentTarget;g;g=g.parentNode)c.push(g);for(var g=a.type,k=c.length-1;!e.ka&&0<=k;k--)e.currentTarget=c[k],f&=ub(c[k],g,!0,e);for(k=0;!e.ka&&k<c.length;k++)e.currentTarget=c[k],f&=ub(c[k],g,!1,e)}return f}return vb(a,new N(b,this))}
function P(a){a=a[lb];return a instanceof K?a:null}var wb="__closure_events_fn_"+(1E9*Math.random()>>>0);function ob(a){return"function"==m(a)?a:a[wb]||(a[wb]=function(b){return a.handleEvent(b)})};I.b=function(){};function Q(a,b,c,e,f,g){if(6==arguments.length)this.setTransform(a,b,c,e,f,g);else{if(0!=arguments.length)throw Error("Insufficient matrix parameters");this.p=this.t=1;this.s=this.q=this.B=this.C=0}}d=Q.prototype;d.setTransform=function(a,b,c,e,f,g){if(!(t(a)&&t(b)&&t(c)&&t(e)&&t(f)&&t(g)))throw Error("Invalid transform parameters");this.p=a;this.s=b;this.q=c;this.t=e;this.B=f;this.C=g;return this};d.scale=function(a,b){this.p*=a;this.s*=a;this.q*=b;this.t*=b;return this};
d.translate=function(a,b){this.B+=a*this.p+b*this.q;this.C+=a*this.s+b*this.t;return this};d.rotate=function(a,b,c){var e=new Q,f=Math.cos(a);a=Math.sin(a);b=e.setTransform(f,a,-a,f,b-b*f+c*a,c-b*a-c*f);return xb(this,b)};d.toString=function(){return"matrix("+[this.p,this.s,this.q,this.t,this.B,this.C].join()+")"};function xb(a,b){var c=a.p,e=a.q;a.p=b.p*c+b.s*e;a.q=b.q*c+b.t*e;a.B+=b.B*c+b.C*e;c=a.s;e=a.t;a.s=b.p*c+b.s*e;a.t=b.q*c+b.t*e;a.C+=b.B*c+b.C*e;return a}
d.transform=function(a,b,c,e,f){var g=b;for(b+=2*f;g<b;){f=a[g++];var h=a[g++];c[e++]=f*this.p+h*this.q+this.B;c[e++]=f*this.s+h*this.t+this.C}};function R(a){var b=a.p*a.t-a.q*a.s;return new Q(a.t/b,-a.s/b,-a.q/b,a.p/b,(a.q*a.C-a.t*a.B)/b,(a.s*a.B-a.p*a.C)/b)}d.nb=function(a){return this==a?!0:a?this.p==a.p&&this.q==a.q&&this.B==a.B&&this.s==a.s&&this.t==a.t&&this.C==a.C:!1};I.a=function(){};I.a.Qa={svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink"};I.a.gb=function(a,b){for(var c=0,e=a.length;c<e;c++)a[c][0]+=b};I.a.hb=function(a,b){for(var c=0,e=a.length;c<e;c++)a[c][1]+=b};I.a.pa=function(a){for(var b,c,e={x:a[0][0],y:a[0][1],da:a[0][0],ea:a[0][1],width:0,height:0},f=1,g=a.length;f<g;f++)b=a[f][0],c=a[f][1],b<e.x&&(e.x=b),c<e.y&&(e.y=c),b>e.da&&(e.da=b),c>e.ea&&(e.ea=c);e.width=e.da-e.x;e.height=e.ea-e.y;return e};
I.a.ra=function(a){for(var b=[],c,e=0,f=a.getAttribute("points").split(/\s|\,/),g=0,h=f.length;g<h;g++)0===e&&(c=[]),a=f[g],""!==a&&(c[e]=parseInt(a),1===e&&b.push(c),0===e?e=1:e=0);return b};I.a.Wb=function(a,b){for(var c="",e=0,f=b.length;e<f;e++)c+=b[e][0].toString()+","+b[e][1].toString()+" ";a.setAttribute("points",c)};I.a.Ib="(matrix)\\(\\s*([+-]?[\\d\\.]+)\\s*(?:[\\s,]\\s*([+-]?[\\d\\.]+)\\s*(?:[\\s,]\\s*([+-]?[\\d\\.]+)\\s*(?:[\\s,]\\s*([+-]?[\\d\\.]+)\\s*[\\s,]\\s*([+-]?[\\d\\.]+)\\s*[\\s,]\\s*([+-]?[\\d\\.]+)\\s*)?)?)?\\)";
I.a.Jb=new RegExp(I.a.Ib);I.a.Hb=function(a){var b;if(a=I.a.Jb.exec(a))b=Array(6),b[0]=parseFloat(a[2]),b[1]=parseFloat(a[3]),b[2]=parseFloat(a[4]),b[3]=parseFloat(a[5]),b[4]=parseFloat(a[6]),b[5]=parseFloat(a[7]);return b};I.a.pb=function(a){a=a.getAttribute("transform");return(a=I.a.Hb(a))?new Q(a[0],a[1],a[2],a[3],a[4],a[5]):new Q};I.a.J=function(a,b){a.setAttribute("transform","matrix("+b.p+","+b.s+","+b.q+","+b.t+","+b.B+","+b.C+")")};I.svg=I.a;I.a.e=function(){};I.a.e.P=function(a,b,c){var e=[a.clientX,a.clientY];R(b.j.K).transform(e,0,yb(b),0,1);b.state="drag";b.N.element=a.target;a=c.Z(a.target);b.N.coords=a};
I.a.e.Q=function(a,b,c){var e=[a.clientX,a.clientY];a=b.N.element;var f=b.N.coords,g=yb(b),h=b.j.na,k=0,q=0,w=0,r=0,k=Array(2),p=Array(f.length);R(b.j.K).transform(e,0,k,0,1);b=0;for(e=f.length;b<e;b++)p[b]=Array(2),p[b][0]=-g[0]+k[0]+f[b][0],p[b][1]=-g[1]+k[1]+f[b][1];f=I.a.pa(p);k=f.x-h.x;w=h.da-f.da;q=f.y-h.y;r=h.ea-f.ea;0>k&&I.a.gb(p,-k);0>w&&I.a.gb(p,w);0>q&&I.a.hb(p,-q);0>r&&I.a.hb(p,r);c.X(a,p);return p};
I.a.e.rb=function(a,b){var c,e=a.getAttribute("class");e&&(c=e.split(/\s+/));return c?x(c,b):!1};I.a.e.R=function(a,b){b.state="none"};I.a.e.Ta=function(a){return document.createElementNS(I.a.Qa.svg,a)};I.a.e.Ka=function(a,b){for(var c in b){var e=b[c],f=c.indexOf(":");-1===f?a.setAttribute(c,e):a.setAttributeNS(I.a.Qa[c.substring(0,f)],c,e)}};I.a.e.F=function(a,b){a.setAttribute("height",b)};I.a.e.G=function(a,b){a.setAttribute("width",b)};I.a.e.Ia=function(a,b){a.setAttribute("fill",b)};
I.a.e.create=function(a,b){var c=I.a.e.Ta(a.tagName);b&&I.a.e.Ka(c,b);return c};I.a.Y=function(){};I.a.Y.tagName="circle";I.a.Y.Sb=function(){};I.a.Y.create=function(a){return I.a.e.create(I.a.Y,a)};I.shape={};I.shape.l=function(){};I.shape.l.Mb=function(a){return parseInt(a.getAttribute("cx"))};I.shape.l.Nb=function(a){return parseInt(a.getAttribute("cy"))};I.shape.l.Z=function(a){return[[I.shape.l.Mb(a),I.shape.l.Nb(a)]]};I.shape.l.X=function(a,b){a.setAttribute("cx",b[0][0]);a.setAttribute("cy",b[0][1])};I.shape.l.P=function(a,b){b.A.M.U();I.a.e.P(a,b,I.shape.l)};
I.shape.l.Q=function(a,b){if("none"!==(b.state?b.state:"none")){var c,e=b.N.element,f=b.A,g=G(f.n),h;c=g||G(f.n);for(var k=0;k<c.length&&(h=k,c[k]!==e);k++);e=h;h=b.ua.shape.Lb;I.a.e.Q(a,b,I.shape.l);c=f.f.o;for(var f=g||G(f.n),g=f.length,k=Array(g),q,w,r=0;r<g;r++)q=Array(2),w=c.l.Z(f[r]),q[0]=w[0][0],q[1]=w[0][1],k[r]=q;c=k;h&&(c=h(c,e));b.W.update(c);b.A.update(c,e)}};I.shape.l.R=function(a,b){b.W.M.U();I.a.e.R(a,b,I.shape.l)};
I.shape.l.create=function(a){return I.a.Y.create({cx:a[0],cy:a[1],r:"2",style:"fill:white;"})};I.shape.VertexDragger=I.shape.l;I.a.u=function(){};I.a.u.tagName="g";I.a.u.Ra=function(a,b){F(a,b)};I.a.u.create=function(){return I.a.e.create(I.a.u)};I.shape.i=function(){};I.shape.i.Fa=function(a,b){return a&&I.a.e.rb(a,b.className)};I.shape.i.P=function(a,b,c){"modify"===b.S&&I.shape.i.Fa(a.target,c)&&(b.ua.shape=c,b.ua.element=a.target,I.a.e.P(a,b,c),b.A.U(c.Sa(a.target)))};I.shape.i.Q=function(a,b,c){"modify"===b.S&&"drag"===(b.state?b.state:"none")&&I.shape.i.Fa(b.N.element,c)&&(a=I.a.e.Q(a,b,c))&&b.A.update(a)};I.shape.i.R=function(a,b,c){"modify"===b.S&&I.shape.i.Fa(b.N.element,c)&&I.a.e.R(a,b,c)};
I.shape.i.aa=function(a,b,c){"delete"===b.S&&I.shape.i.Fa(a.target,c)&&(a=a.target)&&I.a.e.rb(a,"xrx-shape")&&(b.A.U(c.Sa(a)),window.confirm("Delete forever?")&&(a&&a.parentNode&&a.parentNode.removeChild(a),S(b.A)))};I.shape.i.create=function(a,b,c){c=c||{};a=I.a.e.Ta(a);c["class"]="xrx-shape "+b;I.a.e.Ka(a,c);return a};I.$.ab=function(){};I.$.ab.nb=function(a,b){return a[0]===b[0]&&a[1]===b[1]};I.shape.g=function(){};I.shape.g.className="xrx-shape-polygon";I.shape.g.Z=function(a){return I.a.ra(a)};I.shape.g.X=function(a,b){I.a.Wb(a,b)};I.shape.g.pa=function(a){a=I.shape.g.Z(a);return I.a.pa(a)};I.shape.g.Sb=function(){};I.shape.g.P=function(a,b){I.shape.i.P(a,b,I.shape.g)};I.shape.g.Q=function(a,b){I.shape.i.Q(a,b,I.shape.g)};I.shape.g.R=function(a,b){I.shape.i.R(a,b,I.shape.g)};I.shape.g.aa=function(a,b){I.shape.i.aa(a,b,I.shape.g)};
I.shape.g.Sa=function(a,b){return I.shape.cb.create(a,b)};I.shape.g.create=function(a){return I.shape.i.create("polygon",I.shape.g.className,a)};I.shape.cb=function(){};I.shape.cb.create=function(a){for(var b=I.a.ra(a),c=I.a.u.create(),e=0,f=b.length;e<f;e++)a=I.shape.l.create(b[e]),F(c,a);return c};I.shape.fa=function(){};I.shape.fa.Wa=function(a){return 0===a.length};I.shape.fa.Xa=function(a){return"xrx-shape-endpoint"===a.getAttribute("class")};
I.shape.fa.qb=function(a,b){var c=[a.clientX,a.clientY],e=Array(2);R(b.j.K).transform(c,0,e,0,1);var c=b.L,f=G(c.n);if(I.shape.fa.Xa(a.target)){var g=I.a.ra(f[0]),e=I.shape.g.create();I.shape.g.X(e,g);F(b.W.n,e);S(c)}else I.shape.fa.Wa(f)?(g=I.shape.i.create("polyline","xrx-shape-polyline",{points:e}),F(c.n,g),e=I.a.Y.create({cx:e[0],cy:e[1],r:"4",style:"fill:white;stroke:black;stroke-width:1","class":"xrx-shape-endpoint"}),F(c.n,e)):(g=I.a.ra(f[0]),I.$.ab.nb(g[g.length-1],e)||(g=g.concat([e]),I.shape.g.X(f[0],
g)))};I.shape.PolygonCreate=I.shape.fa;I.shape.d=function(){};I.shape.d.className="xrx-shape-rect";I.shape.d.Z=I.shape.g.Z;I.shape.d.X=I.shape.g.X;I.shape.d.pa=I.shape.g.pa;I.shape.d.P=function(a,b){I.shape.i.P(a,b,I.shape.d)};I.shape.d.Q=function(a,b){I.shape.i.Q(a,b,I.shape.d)};I.shape.d.R=function(a,b){I.shape.i.R(a,b,I.shape.d)};I.shape.d.aa=function(a,b){I.shape.i.aa(a,b,I.shape.d)};I.shape.d.Sa=function(a,b){return I.shape.eb.create(a,b)};
I.shape.d.Lb=function(a,b){var c=a[b][0],e=a[b][1];0===b?(a[1][1]=e,a[3][0]=c):1===b?(a[0][1]=e,a[2][0]=c):2===b?(a[1][0]=c,a[3][1]=e):(a[0][0]=c,a[2][1]=e);return a};I.shape.d.create=function(a){return I.shape.i.create("polygon",I.shape.d.className,a)};I.shape.eb=function(){};I.shape.eb.create=function(a){for(var b=I.a.u.create(),c=I.shape.d.Z(a),e=0,f=c.length;e<f;e++)a=I.shape.l.create([c[e][0],c[e][1]]),F(b,a);return b};I.shape.ga=function(){};I.shape.ga.Wa=function(a){return 0===a.length};
I.shape.ga.Xa=function(a){return!I.shape.ga.Wa(a)};I.shape.ga.qb=function(a,b){var c=[a.clientX,a.clientY],e=Array(2);R(b.j.K).transform(c,0,e,0,1);var c=b.L,f=G(c.n);I.shape.ga.Xa(f)?(f=I.a.ra(f[0]),f.push(e[0],f[0][1]),f.push(e),f.push(f[0][0],e[1]),f=I.shape.d.create({points:f}),F(b.W.n,f),S(c)):(f=I.shape.d.create({points:e}),F(c.n,f),e=I.a.Y.create({cx:e[0],cy:e[1],r:"4",style:"fill:white;stroke:black;stroke-width:1","class":"xrx-shape-endpoint"}),F(c.n,e))};I.shape.RectCreate=I.shape.ga;I.shape.$b=function(){};I.b.h=function(){};I.b.h.Cb=function(a){a.J(a.j.K.scale(1.05,1.05))};I.b.h.Db=function(a){a.J(a.j.K.scale(.95,.95))};I.b.h.Ja=function(a){a.S="pan";a.sa.M.U();S(a.A);S(a.L)};I.b.h.Ub=function(a,b){!1===a?I.b.h.Ja(b):(b.S="delete",b.W.M.U(),S(b.A),S(b.L))};I.b.h.Vb=function(a,b){!1===a?I.b.h.Ja(b):(b.S="modify",b.W.M.U(),S(b.A),S(b.L))};I.b.h.Ab=function(a,b,c){!1===a?I.b.h.Ja(b):(b.L.M.U(),S(b.A),S(b.L),b.jb.shape=I.shape[c],b.mb&&tb(b.mb),b.mb=O(b.L.m(),"click",function(a){b.jb.shape.qb(a,b)}))};
I.b.h.Tb=function(a){a.J(a.j.K.rotate(-90*Math.PI/180,a.j.oa[0],a.j.oa[1]))};I.b.h.zb=function(a){a.J(a.j.K.rotate(90*Math.PI/180,a.j.oa[0],a.j.oa[1]))};I.b.ac={};function zb(a,b){this.c=a;this.f=b;this.ha()}zb.prototype.aa=function(a){var b,c,e=0;c=G(this.c);b=I.b.k.className;if(x(y(a.target.parentNode),b)){for(var f=0,g=c.length;f<g;f++)b=H(c[f]),b!==a.target&&I.b.k.va(b,!1);(c=x(y(a.target),"xrx-ui-state-selected"))?I.b.k.va(a.target,!1):(I.b.k.va(a.target),e+=1);0===e&&I.b.k.va(H(H(this.c)))}};
zb.prototype.ha=function(){function a(a,b,e){O(a,"click",function(a){x(y(a.target),"xrx-ui-state-selected")?b(!0,c.f,e):b(!1,c.f,e)})}function b(a,b){O(a,"click",function(){b(c.f)})}var c=this;O(this.c,"click",function(a){c.aa(a)},!0);var e=I.b.k.create("./res/openhand.png","Zoom, Pan or Rotate the Canvas.");b(e,I.b.h.Ja);var f=I.b.D.create("./res/zoomIn.png","Zoom In.");b(f,I.b.h.Cb);var g=I.b.D.create("./res/zoomOut.png","Zoom Out.");b(g,I.b.h.Db);var h=I.b.D.create("./res/rotateLeft.png","Rotate Left.");
b(h,I.b.h.Tb);var k=I.b.D.create("./res/rotateRight.png","Rotate Right.");b(k,I.b.h.zb);var q=I.b.k.create("./res/shapeRect.png","Draw a Rect.");a(q,I.b.h.Ab,"RectCreate");var w=I.b.k.create("./res/shapePolygon.png","Draw a Polygon.");a(w,I.b.h.Ab,"PolygonCreate");var r=I.b.k.create("./res/move.png","Move or Modify a Shape.");a(r,I.b.h.Vb);var p=I.b.k.create("./res/delete.png","Delete a Shape.");a(p,I.b.h.Ub);F(this.c,e);F(this.c,f);F(this.c,g);F(this.c,h);F(this.c,k);F(this.c,q);F(this.c,w);F(this.c,
r);F(this.c,p);I.b.k.va(H(H(this.c)));return this.c};I.b.D=function(){};I.b.D.className="xrx-canvas-toolbar-button";I.b.D.Ba=function(a){Aa(a.target,"xrx-ui-state-mouseout","xrx-ui-state-mouseover")};I.b.D.Aa=function(a){Aa(a.target,"xrx-ui-state-mouseover","xrx-ui-state-mouseout")};
I.b.D.create=function(a,b){var c=document.createElement("span");c.className=I.b.D.className;var e=document.createElement("img");e.setAttribute("src",a);e.setAttribute("title",b);e.className="xrx-ui-state-mouseout";F(c,e);O(c,"mouseover",function(a){I.b.D.Ba(a)});O(c,"mouseout",function(a){I.b.D.Aa(a)});return c};I.b.k=function(){};I.b.k.className="xrx-canvas-toolbar-toggle";I.b.k.va=function(a,b){!1===b?ya(a,"xrx-ui-state-selected"):wa(a,"xrx-ui-state-selected")};I.b.k.Ba=I.b.D.Ba;I.b.k.Aa=I.b.D.Aa;
I.b.k.create=function(a,b){var c=document.createElement("span");c.className=I.b.k.className;var e=document.createElement("img");e.setAttribute("src",a);e.setAttribute("title",b);e.className="xrx-ui-state-mouseout";F(c,e);O(c,"mouseover",function(a){I.b.k.Ba(a)});O(c,"mouseout",function(a){I.b.k.Aa(a)});return c};function T(a){L.call(this);this.ta=a;this.sb={}}u(T,L);var Ab=[];T.prototype.Ya=function(a,b,c,e){n(b)||(b&&(Ab[0]=b.toString()),b=Ab);for(var f=0;f<b.length;f++){var g=O(a,b[f],c||this.handleEvent,e||!1,this.ta||this);if(!g)break;this.sb[g.key]=g}return this};
T.prototype.Ma=function(a,b,c,e,f){if(n(b))for(var g=0;g<b.length;g++)this.Ma(a,b[g],c,e,f);else c=c||this.handleEvent,f=f||this.ta||this,c=ob(c),e=!!e,b=a&&a[J]?a.qa(b,c,e,f):a?(a=P(a))?a.qa(b,c,e,f):null:null,b&&(tb(b),delete this.sb[b.key]);return this};T.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function U(){L.call(this);this.ia=new K(this);this.Eb=this}u(U,L);U.prototype[J]=!0;d=U.prototype;d.wb=null;d.addEventListener=function(a,b,c,e){O(this,a,b,c,e)};d.removeEventListener=function(a,b,c,e){sb(this,a,b,c,e)};
d.dispatchEvent=function(a){var b,c=this.wb;if(c)for(b=[];c;c=c.wb)b.push(c);var c=this.Eb,e=a.type||a;if(s(a))a=new M(a,c);else if(a instanceof M)a.target=a.target||c;else{var f=a;a=new M(e,c);Fa(a,f)}var f=!0,g;if(b)for(var h=b.length-1;!a.ka&&0<=h;h--)g=a.currentTarget=b[h],f=Bb(g,e,!0,a)&&f;a.ka||(g=a.currentTarget=c,f=Bb(g,e,!0,a)&&f,a.ka||(f=Bb(g,e,!1,a)&&f));if(b)for(h=0;!a.ka&&h<b.length;h++)g=a.currentTarget=b[h],f=Bb(g,e,!1,a)&&f;return f};
d.Ya=function(a,b,c,e){return this.ia.add(String(a),b,!1,c,e)};d.Ma=function(a,b,c,e){return this.ia.remove(String(a),b,c,e)};function Bb(a,b,c,e){b=a.ia.I[String(b)];if(!b)return!0;b=b.concat();for(var f=!0,g=0;g<b.length;++g){var h=b[g];if(h&&!h.la&&h.ya==c){var k=h.ba,q=h.Ca||h.src;h.xa&&gb(a.ia,h);f=!1!==k.call(q,e)&&f}}return f&&!1!=e.yb}d.qa=function(a,b,c,e){return this.ia.qa(String(a),b,c,e)};function Cb(a){U.call(this);this.Ea={};this.Da={};this.ta=new T(this);this.xb=a}u(Cb,U);var Db=[B&&!E("11")?"readystatechange":"load","abort","error"];function Eb(a,b){var c=s(b)?b:b.src;c&&(a.Ea._dummy={src:c,ib:null})}Cb.prototype.start=function(){var a=this.Ea;ra(Ca(a),function(b){var c=a[b];if(c&&(delete a[b],!this.kb)){var e;this.xb?(e=this.xb,e=(e?new bb(ab(e)):ga||(ga=new bb)).Gb("img")):e=new Image;c.ib&&(e.crossOrigin=c.ib);this.ta.Ya(e,Db,this.vb);this.Da[b]=e;e.id=b;e.src=c.src}},this)};
Cb.prototype.vb=function(a){var b=a.currentTarget;if(b){if("readystatechange"==a.type)if("complete"==b.readyState)a.type="load";else return;"undefined"==typeof b.naturalWidth&&("load"==a.type?(b.naturalWidth=b.width,b.naturalHeight=b.height):(b.naturalWidth=0,b.naturalHeight=0));this.dispatchEvent({type:a.type,target:b});!this.kb&&(a=b.id,delete this.Ea[a],b=this.Da[a])&&(delete this.Da[a],this.ta.Ma(b,Db,this.vb),Da(this.Da)&&Da(this.Ea)&&this.dispatchEvent("complete"))}};I.b.T=function(){};I.b.T.Ob=function(a,b){I.b.h.zb(b)};I.b.T.P=function(a,b){if("pan"===b.S){var c=[a.clientX,a.clientY],e=new Q;b.wa||(b.wa=Array(2));R(e).transform(c,0,b.wa,0,1);b.state="drag"}};I.b.T.Q=function(a,b){if("pan"===b.S&&"drag"===b.state){var c=Array(2),e=[a.clientX,a.clientY],f=new Q;R(f).transform(e,0,c,0,1);b.j.K=xb(f.translate(c[0]-b.wa[0],c[1]-b.wa[1]),b.j.K);b.J(b.j.K);b.wa=c}};I.b.T.R=function(a,b){"pan"===b.S&&(b.state="none")};I.b.T.Pb=function(a,b){0>a.Kb?I.b.h.Cb(b):I.b.h.Db(b)};I.canvas=function(){};I.canvas=I.canvas;I.canvas.e=function(a){this.f=a;this.V=a.O.getContext("2d")};I.canvas.v=function(a,b){I.canvas.e.call(this,a);this.w=b;this.ma=this.ja=0};u(I.canvas.v,I.canvas.e);I.canvas.v.F=function(a,b){this.ja=b};I.canvas.v.G=function(a,b){this.ma=b};I.canvas.v.prototype.lb=function(){this.V.drawImage(this.w,0,0,this.ma,this.ja)};I.canvas.v.create=function(a,b){return new I.canvas.v(a,b)};I.a.H=function(){};I.a.H.tagName="svg";I.a.H.F=I.a.e.F;I.a.H.G=I.a.e.G;I.a.H.create=function(){return I.a.e.create(I.a.H)};I.canvas.d=function(a){I.canvas.e.call(this,a);this.ja=this.ma=this.Pa=this.Oa=0;this.ob={color:"black"}};u(I.canvas.d,I.canvas.e);I.canvas.d.F=function(a,b){a.ja=b};I.canvas.d.G=function(a,b){a.ma=b};I.canvas.d.Ia=function(a,b){a.ob.color=b};I.canvas.d.prototype.lb=function(){this.V.beginPath();this.V.moveTo(this.Oa,this.Pa);this.V.lineTo(this.Oa,this.Pa+this.ja);this.V.lineTo(this.Oa+this.ma,this.Pa+this.ja);this.V.lineTo(this.Oa+this.ma,this.Pa);this.V.fillStyle=this.ob.color;this.V.fill();this.V.closePath()};
I.canvas.d.create=function(a){return new I.canvas.d(a)};I.a.d=function(){};I.a.d.tagName="rect";I.a.d.F=I.a.e.F;I.a.d.G=I.a.e.G;I.a.d.Ia=I.a.e.Ia;I.a.d.create=function(){return I.a.e.create(I.a.d)};I.a.v=function(){};I.a.v.tagName="image";I.a.v.F=I.a.e.F;I.a.v.G=I.a.e.G;I.a.v.create=function(a,b){var c=I.a.e.create(I.a.v);c.setAttributeNS(I.a.Qa.xlink,"xlink:href",b.src);return c};I.canvas.H=function(){};I.canvas.H.F=function(a,b){a.setAttribute("height",b)};I.canvas.H.G=function(a,b){a.setAttribute("width",b)};I.canvas.H.create=function(){return document.createElement("canvas")};I.canvas.u=function(){this.Fb=[]};I.canvas.u.Ra=function(a,b){a.Fb.push(b);b.lb()};I.canvas.u.create=function(){return new I.canvas.u};I.$.Zb=function(){};function V(a){this.f=a;this.ha()}V.prototype.m=function(){return this.c};V.prototype.U=function(){var a;a=this.f;a=[a.sa,a.W,a.A,a.L];for(var b=0,c=a.length;b<c;b++){var e=a[b].M;e.c.setAttribute("width","0px");e.c.setAttribute("height","0px")}this.c.setAttribute("width","100%");this.c.setAttribute("height","100%")};V.prototype.ha=function(){var a=this.f.o,b=a.e.Ta("rect");a.e.Ka(b,{width:"0px",height:"0px",style:"fill-opacity:0.0","class":"xrx-canvas-shield"});this.c=b};function Fb(a,b){U.call(this);var c=this.c=a;if(c=da(c)&&1==c.nodeType?this.c:this.c?this.c.body:null){var e=ab(c);e.defaultView&&e.defaultView.getComputedStyle&&(c=e.defaultView.getComputedStyle(c,null))&&(c.direction||c.getPropertyValue("direction"))}O(this.c,C?"DOMMouseScroll":"mousewheel",this,b)}u(Fb,U);
Fb.prototype.handleEvent=function(a){var b=0,c=0,e=0;a=a.Ua;if("mousewheel"==a.type){c=1;if(B||D&&(Ja||E("532.0")))c=40;e=Gb(-a.wheelDelta,c);void 0!==a.wheelDeltaX?(b=Gb(-a.wheelDeltaX,c),c=Gb(-a.wheelDeltaY,c)):c=e}else e=a.detail,100<e?e=3:-100>e&&(e=-3),void 0!==a.axis&&a.axis===a.HORIZONTAL_AXIS?b=e:c=e;if(t(this.tb)){var f=this.tb;Math.min(Math.max(b,-this.tb),f)}t(this.ub)&&(b=this.ub,c=Math.min(Math.max(c,-this.ub),b));e=new Hb(e,a,0,c);this.dispatchEvent(e)};
function Gb(a,b){return D&&(Ia||Na)&&0!=a%b?a:a/b}function Hb(a,b,c,e){N.call(this,b);this.type="mousewheel";this.detail=a;this.Kb=e}u(Hb,N);function W(a){this.f=a;this.c;this.n;this.M;this.ha();this.Ha()}W.prototype.m=function(){return this.c};function S(a){a=a.n;for(var b;b=a.firstChild;)a.removeChild(b)}W.prototype.handleEvent=function(a,b){a.preventDefault();b(a,this.f)};function X(a,b,c){O(b,["mousedown","touchstart"],function(b){a.handleEvent(b,c.P)});O(b,["mousemove","touchmove"],function(b){a.handleEvent(b,c.Q)});O(b,["mouseup","touchend"],function(b){a.handleEvent(b,c.R)})}
function Ib(a,b){var c=I.b.T,e=new Fb(b);O(e,"mousewheel",function(b){a.handleEvent(b,c.Pb)})}function Jb(a,b){var c=I.b.T;O(b,["dblclick"],function(b){a.handleEvent(b,c.Ob)})}function Kb(a,b,c){O(b,["click"],function(b){a.handleEvent(b,c.aa)})}W.prototype.ha=function(){var a=this.f.o;this.c=a.u.create();this.n=a.u.create();this.M=new V(this.f);F(this.c,this.M.m());F(this.c,this.n);return this.c};function Y(a){W.call(this,a);this.ca;this.w}u(Y,W);Y.prototype.J=function(a){this.f.o.J(this.w,a)};Y.prototype.Va=function(a,b){var c=this.f.o;c.d.G(this.ca,a);c.d.F(this.ca,b)};
Y.prototype.ha=function(){var a=this.f.o,b=this.f.w;this.c=a.u.create();this.ca=a.d.create(this.f);a.d.G(this.ca,this.f.m().offsetWidth);a.d.F(this.ca,this.f.m().offsetHeight);a.d.Ia(this.ca,"black");a.u.Ra(this.c,this.ca);this.w=a.v.create(this.f,b);a.v.G(this.w,b.naturalWidth);a.v.F(this.w,b.naturalHeight);a.u.Ra(this.c,this.w);this.M=new V(this.f);F(this.c,this.M.m())};Y.prototype.Ha=function(){Ib(this,this.c);X(this,this.c,I.b.T);Jb(this,this.c)};function Z(a){W.call(this,a)}u(Z,W);Z.prototype.U=function(a){var b=this.n,c=b.parentNode;c&&c.replaceChild(a,b);this.n=a};Z.prototype.update=function(a,b){for(var c=this.f.o,e=G(this.n),f=0,g=e.length;f<g;f++)f!=b&&c.l.X(e[f],[a[f]])};Z.prototype.Ha=function(){var a=this.f.o;Ib(this,this.c);X(this,this.c,a.l);Jb(this,this.c)};function Lb(a){W.call(this,a)}u(Lb,W);Lb.prototype.Ha=function(){Ib(this,this.c);Jb(this,this.c)};function $(a){U.call(this);this.Na=a||window;O(this.Na,"resize",this.Qb,!1,this);this.$a=Za(this.Na||window)}u($,U);$.prototype.Na=null;$.prototype.$a=null;$.prototype.Qb=function(){var a=Za(this.Na||window),b=this.$a;a==b||a&&b&&a.width==b.width&&a.height==b.height||(this.$a=a,this.dispatchEvent("resize"))};function Mb(a){W.call(this,a)}u(Mb,W);Mb.prototype.update=function(a){this.f.ua.shape.X(this.f.ua.element,a)};Mb.prototype.Ha=function(){var a=this.f.o;Ib(this,this.c);X(this,this.c,I.b.T);X(this,this.c,a.d);X(this,this.c,a.g);Jb(this,this.c);Kb(this,this.c,a.d);Kb(this,this.c,a.g)};function Nb(a,b){this.o=ba("xrx."+(b||I.$.bb.fb));this.c=a;this.state="none";this.S="pan";this.ua={shape:null,element:null};this.N={element:null,Za:null,coords:null};this.jb={shape:null};this.j={oa:null,K:new Q,na:{x:0,y:0,da:0,ea:0,width:0,height:0}};Ob(this)}function yb(a){a.N.Za||(a.N.Za=Array(2));return a.N.Za}Nb.prototype.m=function(){return this.c};Nb.prototype.pb=function(){return this.o.pb(this.dc())};
Nb.prototype.J=function(a){this.sa.J(a);this.o.J(this.W.m(),a);this.o.J(this.A.m(),a);this.o.J(this.L.m(),a)};Nb.prototype.Va=function(){var a=this.m().offsetWidth,b=this.m().offsetHeight;this.O.setAttribute("width",a);this.O.setAttribute("height",b);this.sa.Va(size,a,b)};function Pb(a){var b=new $;O(b,"resize",function(){a.Va()},!1,a);a.O=a.o.H.create();a.o.H.F(a.O,a.m().offsetHeight);a.o.H.G(a.O,a.m().offsetWidth);F(a.c,a.O)}
function Ob(a){var b=new Cb,c=document.createElement("img");c.id="_dummy";c.src="../data/SachsenspiegelHeidelberg/Bilder-34553-28167-1600.jpg";O(b,"load",function(b){a.w=b.target;Pb(a);a.sa=new Y(a);F(a.O,a.sa.m());a.W=new Mb(a);F(a.O,a.W.m());a.A=new Z(a);F(a.O,a.A.m());a.L=new Lb(a);F(a.O,a.L.m());a.j.oa=[a.w.naturalWidth/2,a.w.naturalHeight/2];a.j.na.da=a.w.naturalWidth;a.j.na.ea=a.w.naturalHeight;a.j.na.width=a.w.naturalWidth;a.j.na.height=a.w.naturalHeight});Eb(b,c);b.start()};I.Bb={};I.Bb.Rb=function(){var a=Wa(document,"toolbarSVG"),b=new Nb(Wa(document,"canvasSVG"),I.$.bb.fb);new zb(a,b);return!0};aa("xrx.stn.install",I.Bb.Rb);
