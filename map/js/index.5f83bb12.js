(function(t){function e(e){for(var r,c,s=e[0],i=e[1],l=e[2],u=0,d=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={index:0},o=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d0c76d2":"31800390","chunk-2d207917":"f8dcece8","chunk-2d21b2c8":"250f2f5e","chunk-2d21dc72":"4fd01e80","chunk-2d22564f":"97c02c5d","chunk-2d225804":"3a39a9e5"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=c(t);var l=new Error;o=function(e){i.onerror=i.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="https://preview.sledilnik.org/map/",s.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var p=l;o.push([0,"chunk-vendors","chunk-common"]),n()})({0:function(t,e,n){t.exports=n("b635")},"0a64":function(t,e,n){},"55b1":function(t,e,n){},"573d":function(t,e,n){},"8af2":function(t,e,n){"use strict";var r=n("573d"),a=n.n(r);a.a},"8e1f":function(t,e,n){},"91bd":function(t,e,n){t.exports=n.p+"img/covid-animation-1.34203208.svg"},b635:function(t,e,n){"use strict";n.r(e);n("aef6"),n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("8c4f"),o=n("f13c"),c=n.n(o),s=n("3dfd"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"custom-container"},[n("div",{staticClass:"static-page-wrapper"},[n("span",{domProps:{innerHTML:t._s(t.staticContent)}})])])},l=[],u={name:"StaticPage",props:{name:String,content:Promise},data:function(){return{staticContent:""}},mounted:function(){var t=this;this.content.then((function(e){t.staticContent=e.default,t.$forceUpdate()}))}},p=u,d=(n("8af2"),n("2877")),f=Object(d["a"])(p,i,l,!1,null,null,null),h=f.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"mt-3 stats-page"},[n("div",{staticClass:"cards-wrapper latest-data-boxes"},[n("Info-card",{attrs:{title:"Potrjeno okuženi",field:"tests.positive.todate"}}),n("Info-card",{attrs:{title:"Hospitalizirani",field:"state.in_hospital"}}),n("Info-card",{attrs:{title:"V intenzivni enoti",field:"state.icu"}}),n("Info-card",{attrs:{title:"Umrli",field:"state.deceased.todate"}}),n("Info-card",{attrs:{title:"Ozdraveli",field:"state.recovered.todate","good-direction":"up"}})],1),n("b-row",{attrs:{cols:"12"}},[n("b-col",[n("div",{staticClass:"visualizations",attrs:{id:"visualizations"}})])],1),n("loader",{directives:[{name:"show",rawName:"v-show",value:!t.loaded,expression:"!loaded"}]})],1)},m=[],v=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),O=n("2f62"),g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("div",{staticClass:"loader-container"},[r("img",{staticClass:"logo-part1",attrs:{src:n("91bd"),alt:"logo"}}),r("img",{staticClass:"logo-part2",attrs:{src:n("c262"),alt:"logo"}})])])}],j={name:"Loader"},w=j,P=(n("fcdd"),Object(d["a"])(w,g,y,!1,null,null,null)),k=P.exports,C=n("3299"),S=n("10e9");function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){Object(v["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var D={name:"StatsPage",components:{InfoCard:C["a"],Loader:k},props:{name:String,content:Promise},data:function(){return{loaded:!1}},computed:x({},Object(O["c"])("stats",{cardsLoaded:"loaded"})),mounted:function(){var t=this;this.$nextTick((function(){Object(S["a"])("visualizations")}));var e=setInterval((function(){var n=document.querySelector(".chart-display-property-selector");n&&(t.loaded=!0,clearInterval(e))}),80)}},E=D,I=(n("c505"),Object(d["a"])(E,b,m,!1,null,"61e3f4ac",null)),N=I.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"mt-3 stats-page"},[n("b-row",{attrs:{cols:"12"}},[n("b-col",[n("chart",{attrs:{title:"Stanje bolnisnicnih postelj",dataseries:t.occipiedBedDataseries}})],1)],1),n("b-row",{attrs:{cols:"12"}},[n("b-col",[n("chart",{attrs:{title:"Stanje intenzivnih enot",dataseries:t.occipiedIcuDataseries}})],1)],1),n("b-row",{attrs:{cols:"12"}},[n("b-col",[n("chart",{attrs:{title:"Kapacitete",dataseries:t.capsDataseries,type:"column"}})],1)],1)],1)},$=[],L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("highcharts",{attrs:{options:t.chartOptions}})},M=[],T=(n("7f7f"),n("ea7f")),K=n.n(T);function U(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Z(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?U(Object(n),!0).forEach((function(e){Object(v["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var A={name:"Chart",props:{title:String,dataseries:Array,type:{default:"line",type:String},highchartOptions:Object},data:function(){return{}},computed:Z({},Object(O["b"])("hospitals",{data:"data",getSeries:"getSeries",hospitalName:"hospitalName"}),{chartOptions:function(){var t=this.generateSeries(this.dataseries),e={chart:{type:this.type},title:{text:this.title},xAxis:{type:"datetime",labels:{formatter:function(){return K.a.dateFormat("%a %d %b",this.value)}}},series:t};return Object.assign({},this.highchartOptions,e)}}),methods:{seriesKey:function(t,e){return""!=t?"hospital.".concat(t,".").concat(e):"hospital.".concat(e)},generateSeries:function(t){var e=this;return t.map((function(t){return{name:t.name,data:e.getSeries(t.key)}}))}}},q=A,B=Object(d["a"])(q,L,M,!1,null,"3ab7001c",null),R=B.exports;function H(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?H(Object(n),!0).forEach((function(e){Object(v["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var X={name:"AdvancedStatsPage",components:{Chart:R},data:function(){return{hospitals:["","ukclj","ukcmb","ukg","bse","bto","sbbr","sbce","sbiz","sbje","sbms","sbng","sbnm","sbpt","sbsg","sbtr"]}},computed:J({},Object(O["b"])("hospitals",{hospitalName:"hospitalName"}),{occipiedBedDataseries:function(){var t=this;return this.hospitals.map((function(e){var n=t.hospitalName(e);return{name:n?"Zasedene postelje (".concat(n,")"):"Zasedene postelje",key:t.seriesKey("hospital",e,"bed.occupied")}}))},occipiedIcuDataseries:function(){var t=this;return this.hospitals.map((function(e){var n=t.hospitalName(e);return{name:n?"Zasedene ICU enote (".concat(n,")"):"Zasedene ICU enote",key:t.seriesKey("hospital",e,"icu.occupied")}}))},capsDataseries:function(){var t=this;return this.hospitals.map((function(e){var n=t.hospitalName(e);return{name:n?"Zmogljivost ICU enot (".concat(n,")"):"Zmogljivost ICU enot",key:t.seriesKey("hospital",e,"icu.total")}}))}}),methods:{seriesKey:function(t,e,n){return""!=e?"".concat(t,".").concat(e,".").concat(n):"".concat(t,".").concat(n)}}},F=X,V=Object(d["a"])(F,z,$,!1,null,"b9bd672c",null),W=V.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"h-100 mt-3",attrs:{fluid:""}},[n("b-row",{staticClass:"h-100",attrs:{cols:"12"}},[n("b-col",[n("h2",{staticClass:"text-center"},[t._v("Potrjeno okuženi po občinah")]),n("iframe",{attrs:{src:"https://covid19.alpaka.si/zemljevid/embedded.html",scrolling:"auto",width:"100%",height:"2000px",frameborder:"0"}})])],1)],1)},Q=[],Y={name:"MapPage"},tt=Y,et=(n("e388"),Object(d["a"])(tt,G,Q,!1,null,"c9abf46a",null)),nt=et.exports,rt=n("5489"),at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"h-100 mt-3",attrs:{fluid:""}},[n("b-row",{staticClass:"h-100"},[n("b-col",[n("iframe",{staticStyle:{width:"100%",height:"90%"},attrs:{headers:"false”",src:"https://docs.google.com/spreadsheets/d/e/2PACX-1vRNMoa1LR27hrziuNRnIi7_KC5w3c1IJUzESPvqSZXFCOHLE6VP7nTy5lXiC0sbj0eagkv9cM_fDBRj/pubhtml?widget=true&"}})])],1)],1)},ot=[],ct={name:"DataPage"},st=ct,it=Object(d["a"])(st,at,ot,!1,null,"468f8acf",null),lt=it.exports,ut=n("c0d6");n("56d7"),n("8e1f");r["default"].use(c.a);var pt=[{path:"*",redirect:"/stats"},{path:"/about",component:h,props:{name:"about",content:n.e("chunk-2d225804").then(n.t.bind(null,"e553",7))}},{path:"/stats",component:N},{path:"/advancedstats",component:W},{path:"/data",component:lt},{path:"/map",component:nt},{path:"/tables",component:rt["a"]},{path:"/links",component:h,props:{name:"links",content:n.e("chunk-2d207917").then(n.t.bind(null,"a0a3",7))}},{path:"/team",component:h,props:{name:"team",content:n.e("chunk-2d0c76d2").then(n.t.bind(null,"5122",7))}},{path:"/sources",component:h,props:{name:"sources",content:n.e("chunk-2d21dc72").then(n.t.bind(null,"d36c",7))}},{path:"/models",component:h,props:{name:"sources",content:n.e("chunk-2d22564f").then(n.t.bind(null,"e3e0",7))}},{path:"/datasources",component:h,props:{name:"datasources",content:n.e("chunk-2d21b2c8").then(n.t.bind(null,"bf3a",7))}}],dt=new a["a"]({routes:pt,scrollBehavior:function(t){if(!t.hash)return{x:0,y:0};var e=document.querySelector(t.hash);if(e){var n=60;return"SECTION"===e.tagName&&t.hash.endsWith("-chart")&&(n=90),{selector:t.hash,offset:{x:0,y:n}}}}});new r["default"]({render:function(t){return t(s["a"])},router:dt,store:ut["a"]}).$mount("#app")},c262:function(t,e,n){t.exports=n.p+"img/covid-animation-2.e2c49229.svg"},c35a:function(t,e,n){},c505:function(t,e,n){"use strict";var r=n("0a64"),a=n.n(r);a.a},e388:function(t,e,n){"use strict";var r=n("c35a"),a=n.n(r);a.a},fcdd:function(t,e,n){"use strict";var r=n("55b1"),a=n.n(r);a.a}});
//# sourceMappingURL=index.5f83bb12.js.map