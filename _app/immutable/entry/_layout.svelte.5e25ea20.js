import{S as n1,i as i1,s as e1,k as E,q as Y,a as D,l as M,m as b,r as K,h as d,c as N,n as f,b as k,C as p,D as G,E as f1,F as R1,e as C1,G as x,H as $,I as r1,g as I,v as V1,f as P1,d as B,y as c1,z as u1,A as h1,B as _1,J as L1,K as Y1,L as K1,M as I1,N as B1,O as G1,P as T1,Q as F1,R as q1}from"../chunks/index.05a2c346.js";function E1(l,e,t){const a=l.slice();return a[1]=e[t],a}function M1(l){let e,t=l[1][1]+"",a;return{c(){e=E("a"),a=Y(t),this.h()},l(r){e=M(r,"A",{href:!0});var s=b(e);a=K(s,t),s.forEach(d),this.h()},h(){f(e,"href",l[1][0])},m(r,s){k(r,e,s),p(e,a)},p:G,d(r){r&&d(e)}}}function X1(l){let e,t,a,r,s,n=l[0],i=[];for(let h=0;h<n.length;h+=1)i[h]=M1(E1(l,n,h));return{c(){e=E("header"),t=E("a"),a=Y("Home"),r=D(),s=E("nav");for(let h=0;h<i.length;h+=1)i[h].c();this.h()},l(h){e=M(h,"HEADER",{class:!0});var v=b(e);t=M(v,"A",{href:!0});var _=b(t);a=K(_,"Home"),_.forEach(d),r=N(v),s=M(v,"NAV",{class:!0});var u=b(s);for(let c=0;c<i.length;c+=1)i[c].l(u);u.forEach(d),v.forEach(d),this.h()},h(){f(t,"href","/"),f(s,"class","svelte-1uq4pm7"),f(e,"class","svelte-1uq4pm7")},m(h,v){k(h,e,v),p(e,t),p(t,a),p(e,r),p(e,s);for(let _=0;_<i.length;_+=1)i[_]&&i[_].m(s,null)},p(h,[v]){if(v&1){n=h[0];let _;for(_=0;_<n.length;_+=1){const u=E1(h,n,_);i[_]?i[_].p(u,v):(i[_]=M1(u),i[_].c(),i[_].m(s,null))}for(;_<i.length;_+=1)i[_].d(1);i.length=n.length}},i:G,o:G,d(h){h&&d(e),f1(i,h)}}}function j1(l){return[[["/writing","Writing"],["/about","About"]]]}class J1 extends n1{constructor(e){super(),i1(this,e,j1,X1,e1,{})}}function z1(l,{delay:e=0,duration:t=400,easing:a=R1}={}){const r=+getComputedStyle(l).opacity;return{delay:e,duration:t,easing:a,css:s=>`opacity: ${s*r}`}}const s1=parseFloat;function m1(l,e=";"){let t;if(Array.isArray(l))t=l.filter(a=>a);else{t=[];for(const a in l)l[a]&&t.push(`${a}:${l[a]}`)}return t.join(e)}function Q1(l,e,t,a){let r,s;const n="1em";let i,h,v,_="-.125em";const u="visible";return a&&(v="center",s="1.25em"),t&&(r=t),e&&(e=="lg"?(h="1.33333em",i=".75em",_="-.225em"):e=="xs"?h=".75em":e=="sm"?h=".875em":h=e.replace("x","em")),m1([m1({float:r,width:s,height:n,"line-height":i,"font-size":h,"text-align":v,"vertical-align":_,"transform-origin":"center",overflow:u}),l])}function W1(l,e,t,a,r,s=1,n="",i=""){let h=1,v=1;return r&&(r=="horizontal"?h=-1:r=="vertical"?v=-1:h=v=-1),m1([`translate(${s1(e)*s}${n},${s1(t)*s}${n})`,`scale(${h*s1(l)},${v*s1(l)})`,a&&`rotate(${a}${i})`]," ")}function A1(l){let e,t,a,r,s,n,i,h;function v(c,o){return typeof c[10][4]=="string"?U1:Z1}let _=v(l),u=_(l);return{c(){e=x("svg"),t=x("g"),a=x("g"),u.c(),this.h()},l(c){e=$(c,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var o=b(e);t=$(o,"g",{transform:!0,"transform-origin":!0});var w=b(t);a=$(w,"g",{transform:!0});var H=b(a);u.l(H),H.forEach(d),w.forEach(d),o.forEach(d),this.h()},h(){f(a,"transform",l[12]),f(t,"transform",r="translate("+l[10][0]/2+" "+l[10][1]/2+")"),f(t,"transform-origin",s=l[10][0]/4+" 0"),f(e,"id",n=l[1]||void 0),f(e,"class",i="svelte-fa "+l[0]+" svelte-1w3t65e"),f(e,"style",l[11]),f(e,"viewBox",h="0 0 "+l[10][0]+" "+l[10][1]),f(e,"aria-hidden","true"),f(e,"role","img"),f(e,"xmlns","http://www.w3.org/2000/svg"),r1(e,"pulse",l[4]),r1(e,"spin",l[3])},m(c,o){k(c,e,o),p(e,t),p(t,a),u.m(a,null)},p(c,o){_===(_=v(c))&&u?u.p(c,o):(u.d(1),u=_(c),u&&(u.c(),u.m(a,null))),o&4096&&f(a,"transform",c[12]),o&1024&&r!==(r="translate("+c[10][0]/2+" "+c[10][1]/2+")")&&f(t,"transform",r),o&1024&&s!==(s=c[10][0]/4+" 0")&&f(t,"transform-origin",s),o&2&&n!==(n=c[1]||void 0)&&f(e,"id",n),o&1&&i!==(i="svelte-fa "+c[0]+" svelte-1w3t65e")&&f(e,"class",i),o&2048&&f(e,"style",c[11]),o&1024&&h!==(h="0 0 "+c[10][0]+" "+c[10][1])&&f(e,"viewBox",h),o&17&&r1(e,"pulse",c[4]),o&9&&r1(e,"spin",c[3])},d(c){c&&d(e),u.d()}}}function Z1(l){let e,t,a,r,s,n,i,h,v,_;return{c(){e=x("path"),n=x("path"),this.h()},l(u){e=$(u,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),b(e).forEach(d),n=$(u,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),b(n).forEach(d),this.h()},h(){f(e,"d",t=l[10][4][0]),f(e,"fill",a=l[6]||l[2]||"currentColor"),f(e,"fill-opacity",r=l[9]!=!1?l[7]:l[8]),f(e,"transform",s="translate("+l[10][0]/-2+" "+l[10][1]/-2+")"),f(n,"d",i=l[10][4][1]),f(n,"fill",h=l[5]||l[2]||"currentColor"),f(n,"fill-opacity",v=l[9]!=!1?l[8]:l[7]),f(n,"transform",_="translate("+l[10][0]/-2+" "+l[10][1]/-2+")")},m(u,c){k(u,e,c),k(u,n,c)},p(u,c){c&1024&&t!==(t=u[10][4][0])&&f(e,"d",t),c&68&&a!==(a=u[6]||u[2]||"currentColor")&&f(e,"fill",a),c&896&&r!==(r=u[9]!=!1?u[7]:u[8])&&f(e,"fill-opacity",r),c&1024&&s!==(s="translate("+u[10][0]/-2+" "+u[10][1]/-2+")")&&f(e,"transform",s),c&1024&&i!==(i=u[10][4][1])&&f(n,"d",i),c&36&&h!==(h=u[5]||u[2]||"currentColor")&&f(n,"fill",h),c&896&&v!==(v=u[9]!=!1?u[8]:u[7])&&f(n,"fill-opacity",v),c&1024&&_!==(_="translate("+u[10][0]/-2+" "+u[10][1]/-2+")")&&f(n,"transform",_)},d(u){u&&d(e),u&&d(n)}}}function U1(l){let e,t,a,r;return{c(){e=x("path"),this.h()},l(s){e=$(s,"path",{d:!0,fill:!0,transform:!0}),b(e).forEach(d),this.h()},h(){f(e,"d",t=l[10][4]),f(e,"fill",a=l[2]||l[5]||"currentColor"),f(e,"transform",r="translate("+l[10][0]/-2+" "+l[10][1]/-2+")")},m(s,n){k(s,e,n)},p(s,n){n&1024&&t!==(t=s[10][4])&&f(e,"d",t),n&36&&a!==(a=s[2]||s[5]||"currentColor")&&f(e,"fill",a),n&1024&&r!==(r="translate("+s[10][0]/-2+" "+s[10][1]/-2+")")&&f(e,"transform",r)},d(s){s&&d(e)}}}function x1(l){let e,t=l[10][4]&&A1(l);return{c(){t&&t.c(),e=C1()},l(a){t&&t.l(a),e=C1()},m(a,r){t&&t.m(a,r),k(a,e,r)},p(a,[r]){a[10][4]?t?t.p(a,r):(t=A1(a),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:G,o:G,d(a){t&&t.d(a),a&&d(e)}}}function $1(l,e,t){let{class:a=""}=e,{id:r=""}=e,{style:s=""}=e,{icon:n}=e,{size:i=""}=e,{color:h=""}=e,{fw:v=!1}=e,{pull:_=""}=e,{scale:u=1}=e,{translateX:c=0}=e,{translateY:o=0}=e,{rotate:w=""}=e,{flip:H=!1}=e,{spin:R=!1}=e,{pulse:q=!1}=e,{primaryColor:O=""}=e,{secondaryColor:X=""}=e,{primaryOpacity:j=1}=e,{secondaryOpacity:V=.4}=e,{swapOpacity:L=!1}=e,J,Q,P;return l.$$set=g=>{"class"in g&&t(0,a=g.class),"id"in g&&t(1,r=g.id),"style"in g&&t(13,s=g.style),"icon"in g&&t(14,n=g.icon),"size"in g&&t(15,i=g.size),"color"in g&&t(2,h=g.color),"fw"in g&&t(16,v=g.fw),"pull"in g&&t(17,_=g.pull),"scale"in g&&t(18,u=g.scale),"translateX"in g&&t(19,c=g.translateX),"translateY"in g&&t(20,o=g.translateY),"rotate"in g&&t(21,w=g.rotate),"flip"in g&&t(22,H=g.flip),"spin"in g&&t(3,R=g.spin),"pulse"in g&&t(4,q=g.pulse),"primaryColor"in g&&t(5,O=g.primaryColor),"secondaryColor"in g&&t(6,X=g.secondaryColor),"primaryOpacity"in g&&t(7,j=g.primaryOpacity),"secondaryOpacity"in g&&t(8,V=g.secondaryOpacity),"swapOpacity"in g&&t(9,L=g.swapOpacity)},l.$$.update=()=>{l.$$.dirty&16384&&t(10,J=n&&n.icon||[0,0,"",[],""]),l.$$.dirty&237568&&t(11,Q=Q1(s,i,_,v)),l.$$.dirty&8126464&&t(12,P=W1(u,c,o,w,H,512))},[a,r,h,R,q,O,X,j,V,L,J,Q,P,s,n,i,v,_,u,c,o,w,H]}class ee extends n1{constructor(e){super(),i1(this,e,$1,x1,e1,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}var te={prefix:"fas",iconName:"microphone",icon:[384,512,[],"f130","M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"]},le={prefix:"fas",iconName:"newspaper",icon:[512,512,[128240],"f1ea","M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"]},ae={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},re={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},se={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},ne={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},ie={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},oe={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};function k1(l,e,t){const a=l.slice();return a[2]=e[t],a}function H1(l,e,t){const a=l.slice();return a[5]=e[t],a}function D1(l){let e,t=l[5][1]+"",a;return{c(){e=E("a"),a=Y(t),this.h()},l(r){e=M(r,"A",{href:!0});var s=b(e);a=K(s,t),s.forEach(d),this.h()},h(){f(e,"href",l[5][0])},m(r,s){k(r,e,s),p(e,a)},p:G,d(r){r&&d(e)}}}function N1(l){let e,t,a;return t=new ee({props:{icon:l[2][1]}}),{c(){e=E("a"),c1(t.$$.fragment),this.h()},l(r){e=M(r,"A",{href:!0});var s=b(e);u1(t.$$.fragment,s),s.forEach(d),this.h()},h(){f(e,"href",l[2][0])},m(r,s){k(r,e,s),h1(t,e,null),a=!0},p:G,i(r){a||(I(t.$$.fragment,r),a=!0)},o(r){B(t.$$.fragment,r),a=!1},d(r){r&&d(e),_1(t)}}}function fe(l){let e,t,a,r,s,n,i,h,v,_,u,c,o,w,H,R,q,O,X,j,V,L,J,Q,P,g,W,o1,t1,Z=l[0],A=[];for(let y=0;y<Z.length;y+=1)A[y]=D1(H1(l,Z,y));let T=l[1],C=[];for(let y=0;y<T.length;y+=1)C[y]=N1(k1(l,T,y));const S1=y=>B(C[y],1,1,()=>{C[y]=null});return{c(){e=E("footer"),t=E("div"),a=E("div"),r=E("h4"),s=Y("Check Out"),n=D(),i=E("nav");for(let y=0;y<A.length;y+=1)A[y].c();h=D(),v=E("div"),_=E("h4"),u=Y("Get Newsletter"),c=D(),o=E("form"),w=E("input"),H=D(),R=E("br"),q=D(),O=E("button"),X=Y("Coming Soon..."),j=D(),V=E("div"),L=E("h4"),J=Y("Connect With Me"),Q=D(),P=E("nav");for(let y=0;y<C.length;y+=1)C[y].c();g=D(),W=E("h4"),o1=Y("© 2023 Kwat Medetgul-Ernar, All Rights Reserved."),this.h()},l(y){e=M(y,"FOOTER",{class:!0});var z=b(e);t=M(z,"DIV",{class:!0});var m=b(t);a=M(m,"DIV",{});var S=b(a);r=M(S,"H4",{class:!0});var d1=b(r);s=K(d1,"Check Out"),d1.forEach(d),n=N(S),i=M(S,"NAV",{class:!0});var g1=b(i);for(let F=0;F<A.length;F+=1)A[F].l(g1);g1.forEach(d),S.forEach(d),h=N(m),v=M(m,"DIV",{});var l1=b(v);_=M(l1,"H4",{class:!0});var v1=b(_);u=K(v1,"Get Newsletter"),v1.forEach(d),c=N(l1),o=M(l1,"FORM",{});var U=b(o);w=M(U,"INPUT",{type:!0,placeholder:!0,class:!0}),H=N(U),R=M(U,"BR",{}),q=N(U),O=M(U,"BUTTON",{type:!0,class:!0});var p1=b(O);X=K(p1,"Coming Soon..."),p1.forEach(d),U.forEach(d),l1.forEach(d),j=N(m),V=M(m,"DIV",{});var a1=b(V);L=M(a1,"H4",{class:!0});var y1=b(L);J=K(y1,"Connect With Me"),y1.forEach(d),Q=N(a1),P=M(a1,"NAV",{class:!0});var w1=b(P);for(let F=0;F<C.length;F+=1)C[F].l(w1);w1.forEach(d),a1.forEach(d),m.forEach(d),g=N(z),W=M(z,"H4",{class:!0});var b1=b(W);o1=K(b1,"© 2023 Kwat Medetgul-Ernar, All Rights Reserved."),b1.forEach(d),z.forEach(d),this.h()},h(){f(r,"class","svelte-14ppe27"),f(i,"class","svelte-14ppe27"),f(_,"class","svelte-14ppe27"),f(w,"type","email"),w.required=!0,f(w,"placeholder","Your Email Address"),f(w,"class","svelte-14ppe27"),f(O,"type","submit"),f(O,"class","svelte-14ppe27"),f(L,"class","svelte-14ppe27"),f(P,"class","svelte-14ppe27"),f(t,"class","fo1 svelte-14ppe27"),f(W,"class","fo2 svelte-14ppe27"),f(e,"class","svelte-14ppe27")},m(y,z){k(y,e,z),p(e,t),p(t,a),p(a,r),p(r,s),p(a,n),p(a,i);for(let m=0;m<A.length;m+=1)A[m]&&A[m].m(i,null);p(t,h),p(t,v),p(v,_),p(_,u),p(v,c),p(v,o),p(o,w),p(o,H),p(o,R),p(o,q),p(o,O),p(O,X),p(t,j),p(t,V),p(V,L),p(L,J),p(V,Q),p(V,P);for(let m=0;m<C.length;m+=1)C[m]&&C[m].m(P,null);p(e,g),p(e,W),p(W,o1),t1=!0},p(y,[z]){if(z&1){Z=y[0];let m;for(m=0;m<Z.length;m+=1){const S=H1(y,Z,m);A[m]?A[m].p(S,z):(A[m]=D1(S),A[m].c(),A[m].m(i,null))}for(;m<A.length;m+=1)A[m].d(1);A.length=Z.length}if(z&2){T=y[1];let m;for(m=0;m<T.length;m+=1){const S=k1(y,T,m);C[m]?(C[m].p(S,z),I(C[m],1)):(C[m]=N1(S),C[m].c(),I(C[m],1),C[m].m(P,null))}for(V1(),m=T.length;m<C.length;m+=1)S1(m);P1()}},i(y){if(!t1){for(let z=0;z<T.length;z+=1)I(C[z]);t1=!0}},o(y){C=C.filter(Boolean);for(let z=0;z<C.length;z+=1)B(C[z]);t1=!1},d(y){y&&d(e),f1(A,y),f1(C,y)}}}function ce(l){return[[["https://gsea-msigdb.org/gsea/index.jsp","Gene-Set Enrichment Analysis"],["https://guardiome.com","Guardiome"],["https://immunogram.io","Immunogram"],["https://amazon.com/s?i=stripbooks&rh=p_27%3AKwat+Medetgul-Ernar&s=relevancerank&text=Kwat+Medetgul-Ernar&ref=dp_byline_sr_book_2","Tiny Beasts"],["https://mountjiujitsu.com","Mount Jiu-Jitsu"]],[["https://github.com/KwatMDPhD",ne],["https://scholar.google.com/citations?user=PAM4lScAAAAJ&hl=en",le],["https://podcast.KwatMDPhD.com",te],["https://youtube.com/@KwatMDPhD?sub_confirmation=1",ie],["https://twitter.com/KwatMDPhD",oe],["https://instagram.com/KwatMDPhD",se],["https://discord.gg/tKh7fguMrD",re],["https://stanford.zoom.us/my/KwatMDPhD",ae]]]}class ue extends n1{constructor(e){super(),i1(this,e,ce,fe,e1,{})}}function O1(l){let e,t,a,r;const s=l[2].default,n=K1(s,l,l[1],null);return{c(){e=E("main"),n&&n.c(),this.h()},l(i){e=M(i,"MAIN",{class:!0});var h=b(e);n&&n.l(h),h.forEach(d),this.h()},h(){f(e,"class","svelte-r1datx")},m(i,h){k(i,e,h),n&&n.m(e,null),r=!0},p(i,h){n&&n.p&&(!r||h&2)&&I1(n,s,i,i[1],r?G1(s,i[1],h,null):B1(i[1]),null)},i(i){r||(I(n,i),T1(()=>{r&&(a&&a.end(1),t=F1(e,z1,{duration:100,delay:100}),t.start())}),r=!0)},o(i){B(n,i),t&&t.invalidate(),a=q1(e,z1,{duration:100}),r=!1},d(i){i&&d(e),n&&n.d(i),i&&a&&a.end()}}}function he(l){let e,t,a,r,s,n,i,h=l[0].pa,v,_,u;n=new J1({});let c=O1(l);return _=new ue({}),{c(){e=E("script"),a=E("script"),r=Y(`window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-8RQLPYYMCH");`),s=D(),c1(n.$$.fragment),i=D(),c.c(),v=D(),c1(_.$$.fragment),this.h()},l(o){const w=L1("svelte-buxz8l",document.head);e=M(w,"SCRIPT",{src:!0});var H=b(e);H.forEach(d),a=M(w,"SCRIPT",{});var R=b(a);r=K(R,`window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-8RQLPYYMCH");`),R.forEach(d),w.forEach(d),s=N(o),u1(n.$$.fragment,o),i=N(o),c.l(o),v=N(o),u1(_.$$.fragment,o),this.h()},h(){e.async=!0,Y1(e.src,t="https://googletagmanager.com/gtag/js?id=G-8RQLPYYMCH")||f(e,"src",t)},m(o,w){p(document.head,e),p(document.head,a),p(a,r),k(o,s,w),h1(n,o,w),k(o,i,w),c.m(o,w),k(o,v,w),h1(_,o,w),u=!0},p(o,[w]){w&1&&e1(h,h=o[0].pa)?(V1(),B(c,1,1,G),P1(),c=O1(o),c.c(),I(c,1),c.m(v.parentNode,v)):c.p(o,w)},i(o){u||(I(n.$$.fragment,o),I(c),I(_.$$.fragment,o),u=!0)},o(o){B(n.$$.fragment,o),B(c),B(_.$$.fragment,o),u=!1},d(o){d(e),d(a),o&&d(s),_1(n,o),o&&d(i),c.d(o),o&&d(v),_1(_,o)}}}function _e(l,e,t){let{$$slots:a={},$$scope:r}=e,{data:s}=e;return l.$$set=n=>{"data"in n&&t(0,s=n.data),"$$scope"in n&&t(1,r=n.$$scope)},[s,r,a]}class de extends n1{constructor(e){super(),i1(this,e,_e,he,e1,{data:0})}}export{de as default};
