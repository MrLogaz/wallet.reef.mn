(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{3066:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",[n("q-tabs",{staticClass:"bg-teal text-white shadow-2",attrs:{"inline-label":"","active-color":"white","indicator-color":"white"},model:{value:t.authTab,callback:function(e){t.authTab=e},expression:"authTab"}},[n("q-tab",{attrs:{name:"authorized",icon:"accessibility_new",label:"Authorized"}}),n("q-tab",{attrs:{name:"blocked",icon:"error",label:"Blocked"}})],1),n("q-tab-panels",{attrs:{animated:""},model:{value:t.authTab,callback:function(e){t.authTab=e},expression:"authTab"}},[n("q-tab-panel",{attrs:{name:"authorized"}},[Object.keys(t.getAuthorized).length?n("q-list",t._l(t.getAuthorized,(function(t){return n("auth-domen",{key:t.name,attrs:{item:t}})})),1):n("q-item-label",{attrs:{caption:""}},[t._v("No authorized")])],1),n("q-tab-panel",{attrs:{name:"blocked"}},[Object.keys(t.getBlocked).length?n("q-list",t._l(t.getBlocked,(function(t){return n("auth-domen",{key:t.name,attrs:{item:t}})})),1):n("q-item-label",{attrs:{caption:""}},[t._v("No blocked")])],1)],1)],1)},r=[],o=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),c=n.n(o),i=n("2f62"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-item",[n("q-item-section",[n("q-item-label",{attrs:{lines:"1"}},[n("img",{staticClass:"favicon-site",attrs:{src:"https://www.google.com/s2/favicons?domain="+t.item.name}}),t._v("\n       \n      "),n("span",{staticClass:"text-weight-medium"},[t._v(t._s(t.item.name))])])],1),n("q-item-section",{attrs:{side:""}},[n("div",{staticClass:"text-grey-8"},[n("q-btn",{attrs:{icon:"delete"},on:{click:t.remove}},[t._v("Remove")])],1)])],1)},l=[];n("7f7f");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){c()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m={name:"Login",props:["item","name"],data:function(){return{}},methods:{remove:function(){var t={id:this.nonce,from:"wallet",to:"server",action:"remove-auth",requests:[this.item.name]};this.$store.dispatch("REQUESTS",t),this.$q.notify({message:"Access to requests is closed",icon:"tag_faces",color:"teal"})}},computed:b({},Object(i["c"])({nonce:function(t){return t.wallet.nonce}})),created:function(){},mounted:function(){}},d=m,f=(n("6bc9"),n("2877")),p=n("eebe"),h=n.n(p),O=n("66e5"),g=n("4074"),v=n("0170"),j=n("9c40"),w=Object(f["a"])(d,s,l,!1,null,null,null),y=w.exports;function q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?q(Object(n),!0).forEach((function(e){c()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}h()(w,"components",{QItem:O["a"],QItemSection:g["a"],QItemLabel:v["a"],QBtn:j["a"]});var k={name:"Authenticator",components:{AuthDomen:y},data:function(){return{authTab:"authorized"}},computed:P({},Object(i["c"])({authDB:function(t){return t.auth.authDB}}),{},Object(i["b"])(["getAuthorized","getBlocked"])),methods:{registerAddress:function(){this.$store.dispatch("REGISTER_ADDRESS")},getAddress:function(){this.$store.dispatch("GET_ADDRESS")}},created:function(){}},_=k,D=n("9989"),T=n("429bb"),E=n("7460"),Q=n("adad"),S=n("823b"),A=n("1c1c"),z=Object(f["a"])(_,a,r,!1,null,null,null);e["default"]=z.exports;h()(z,"components",{QPage:D["a"],QTabs:T["a"],QTab:E["a"],QTabPanels:Q["a"],QTabPanel:S["a"],QList:A["a"],QItemLabel:v["a"]})},"6bc9":function(t,e,n){"use strict";var a=n("d0f0"),r=n.n(a);r.a},d0f0:function(t,e,n){}}]);