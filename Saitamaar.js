/*
 *  # Saitamaar.otf
 *
 *  - AA 表示用フォント Saitamaar を AA っぽい要素に適用するスクリプト
 *  - (c) YAMASINA Keage - http://keage.sakura.ne.jp
 *  - Licensed under the MIT license. - http://www.opensource.org/licenses/mit-license.php
 *
 *  - 2015-08-09T00:40:00Z
 *
 */

(function(){function l(c,b){var d=c.createDocumentFragment(),a=c.createElement("meta"),e=c.createElement("link"),g="",f=c.URL;-1===navigator.platform.indexOf("iPad")&&(a.name="viewport",a.content="width=930,maximum-scale=10,minimum-scale=0.25,user-scalable=yes",d.appendChild(a));if(-1!==f.indexOf("ex14.vip2ch.com/i/responce.html"))g=".restxt{font:normal 16px/18px Stmr,sans-serif !important;word-break:break-all;display:block;overflow-x:auto;white-space:nowrap;margin-left:10px;}";else if(-1!==f.indexOf("jbbs.livedoor.jp/bbs/lite/read.cgi/")||-1!==f.indexOf("www38.atpages.jp/hugesrkn/"))g="@media only screen and (max-device-width:480px){.message,dd{font-size:24px;}}";e.rel="stylesheet";e.setAttribute("href","data:text/css,@font-face{font-family:'Stmr';src:url('http://keage.sakura.ne.jp/fonts/Saitamaar.eot');src:local('Saitamaar'),url('http://keage.sakura.ne.jp/fonts/Saitamaar.eot?#iefix') format('embedded-opentype'),url('http://keage.sakura.ne.jp/fonts/Saitamaar.woff2') format('woff2'),url('http://keage.sakura.ne.jp/fonts/Saitamaar.woff') format('woff'),url('http://keage.sakura.ne.jp/fonts/Saitamaar.ttf') format('truetype');font-weight:normal;}"+b+"{font-family:Stmr !important;}"+b+" b,"+b+" strong{font-family:sans-serif;}"+g);d.appendChild(e);c.getElementsByTagName("head")[0].appendChild(d)}function r(c,b,d,a){var e,g=c.childNodes,f,p,q,l=c.className,h=c.style,t=h.getPropertyValue("white-space"),u=h.getPropertyValue("display"),v={BR:1,IMG:1,STYLE:1,SCRIPT:1,HR:1,NOSCRIPT:1,PRE:2},x=c.innerHTML;replaceCharInTag=[/(<[^>]*?)&#x2006;&#x2009;([^>]*?>)/,/(<[^>]*?)&#59045;([^>]*?>)/];var m=RegExp,w=[9,768,769,770,771,772,776,779,783,792,809,827,861,862,863,1155,1156,1158],n,k;e=navigator.userAgent;n=w.map(function(a){return RegExp(String.fromCharCode(a),"g")});k=[8203,59768,59769,59770,59771,59772,59776,59779,59783,59792,59809,59827,59861,59862,59863,60155,60156,60158].map(function(a){return String.fromCharCode(a)});-1!==e.search(/Android [23].*Safari/)&&(n.push(/ +/g,/-/g),k.push("&#x2006;&#x2009;","&#59045;"));for(e=g.length;e--;)if(f=g[e],q=f.nodeType,p=f.tagName,1===q&&1!==v[p])2===v[p]&&(a=!0),d=r(f,b,d,a);else if(3===q&&(null===u||"none"!==u.toLowerCase())&&-1!==f.nodeValue.search(b)){h.cssText="font:normal 16px/18px Stmr,sans-serif !important;word-break:break-all;display:block;overflow-x:auto;overflow-y:hidden;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-moz-text-size-adjust:none;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;text-size-adjust:100%;color:"+h.color;h.whiteSpace=null===t?!0!==a&&"PRE"!==c.tagName&&"TEXTAREA"!==c.tagName?"nowrap":"pre":"pre"!==t.toLowerCase()?"nowrap":"pre";if(-1===l.search("aaExist")){c.className+=" aaExist";d=!0;a=x.toString();for(b=n.length;b--;)-1!==a.indexOf(String.fromCharCode(w[b]))&&(a=a.replace(n[b],k[b]));if("&#59045;"===k[k.length-1]){for(;-1!==a.search(replaceCharInTag[0]);)a=a.replace(replaceCharInTag[0],m.$1+" "+m.$2);for(;-1!==a.search(replaceCharInTag[1]);)a=a.replace(replaceCharInTag[1],m.$1+"-"+m.$2)}c.innerHTML=a}break}return d}(function(){var c,b=document,d=b.getElementsByTagName("iframe"),a;for(c=d.length;c--;)a=d[c],-1!==a.src.indexOf("http://www.youtube.com/embed/")&&(a.width=a.height);"jbbs.shitaraba.net"===b.domain&&-1!==b.URL.indexOf("/read.cgi/")&&(-1!==b.URL.indexOf("/lite/read.cgi/")?b.getElementsByClassName("thread")[0].innerHTML=b.getElementsByClassName("thread")[0].innerHTML.replace(/&amp;#/g,"&#"):b.getElementById("thread-body").innerHTML=b.getElementById("thread-body").innerHTML.replace(/&amp;#/g,"&#"));c=!1;d=b.getElementsByTagName("body")[0];a=/[\u25a0\u25a1\u3000\u4e09\u572d\uff89\uffe3\u250f\u2533\u254b\u2501\u253b\u2513\u250c\u252c\u253c\u2500\u2534\u2510(:i)]{6} ?|['";\:\u2588\u2583,\^]{4}|[\uff3f\u30ee\uff40\u00b4\uff3c]{1}/;-1!==b.URL.indexOf("ex14.vip2ch.com/i/responce.html")?l(b,".restxt"):(c=r(d,a,c,!1),!1!==c&&l(b,".aaExist"))})()})();
