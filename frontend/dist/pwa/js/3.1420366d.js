(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"4c18":function(t,e,n){},5:function(t,e){},bf1d:function(t,e,n){"use strict";var r=n("4c18"),s=n.n(r);s.a},f6fd:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{attrs:{padding:""}},[t.isRegistered?t.requests&&t.requests.length?n("q-list",[n("q-item-label",{attrs:{header:""}},[t._v("Request")]),t._l(t.requests,(function(e){return n("q-item",{key:e.id},["payment"===e.action?n("payment",{attrs:{item:e}}):t._e(),"login"===e.action?n("login",{attrs:{item:e}}):t._e()],1)}))],2):n("q-item-label",{attrs:{header:""}},[t._v(t._s(t.$t("No requests")))]):n("q-card",[n("q-card-section",{staticClass:"bg-purple text-white"},[n("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("You are not registered in the Authenticator")))]),n("div",[t._v(t._s(t.$t("Authenticator Registration text")))])]),n("q-card-actions",{attrs:{align:"around"}},[n("q-btn",{attrs:{disabled:t.balancesJSON["BIP"]<=t.signFee,flat:""},on:{click:t.registerAddress}},[t._v(t._s(t.$t("Sign in")))])],1)],1)],1)},s=[],i=(n("d93a"),n("0012"),n("5b54"),n("2bf3"),n("b7dd"),n("ef92"),n("9289")),a=n.n(i),o=n("94ea"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-card",{staticClass:"payment"},[n("q-card-section",{staticClass:"bg-accent text-white"},[t._v("\n    From: "),n("span",{staticClass:"text-subtitle2"},[t._v(t._s(t.item.url))])]),n("q-separator"),n("q-card-section",{staticClass:"bg-accent text-white"},[n("div",{domProps:{innerHTML:t._s(t.humanFriendly(t.item.requests[0]))}}),n("div",[t._v("\n      "+t._s(t.timerSeconds)+"\n    ")])]),t.item.requests[0].message&&t.item.requests[0].message.length?n("q-separator",{attrs:{inset:""}}):t._e(),t.item.requests[0].message&&t.item.requests[0].message.length?n("q-card-section",[n("q-item-label",{attrs:{caption:""}},[t._v("Message")]),n("div",{staticClass:"text-subtitle2"},[t._v(t._s(t.item.requests[0].message))])],1):t._e(),n("q-separator",{attrs:{inset:""}}),n("q-card-actions",{attrs:{align:"around"}},[n("q-btn",{attrs:{flat:"",color:"red"},on:{click:t.reject}},[t._v("Cancel")]),n("q-btn",{attrs:{"full-width":"",flat:"",color:"primary"},on:{click:t.resolve}},[t._v("Apply")])],1)],1)},l=[],u=(n("0dbc"),n("422d"));function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={name:"Payment",props:["item","index"],data:function(){return{timerSeconds:0,loaded:!1,intervalID:null}},methods:{humanFriendly:function(t){var e="";switch(t.txAction){case"SendTxParams":e+="Send ",e+="<b>"+Object(u["c"])(t.amount,5),e+=" "+t.coinSymbol+"</b>",e+=" to the address <br><b>"+t.address+"</b>";break}return e},countdown:function(){var t=this,e=new Date,n=new Date(this.item.date),r=e.getTime()-n.getTime(),s=Math.abs(60-r/1e3);this.timerSeconds=parseInt(s%60,10);var i,a=s;this.intervalID=setInterval((function(){i=parseInt(a%60,10),i=i<10?"0"+i:i,t.timerSeconds=i,--a<0&&(clearInterval(t.intervalID),t.$q.notify({message:"Request timeout",icon:"access_time"}),t.$store.commit("REMOVE_REQUEST",t.item.id))}),1e3)},delay:function(t){return new Promise((function(e,n){setTimeout(e,t)}))},resolve:function(){var t=this,e=[];this.item.requests.length,this.$store.dispatch("SENDER",this.item.requests[0]).then((function(n){return e.push(n),1===t.item.requests.length?new Promise((function(t){return t()})):2===t.item.requests.length?t.delay(6500).then((function(){return t.sendTransaction(t.item.requests[1])})):void 0})).then((function(n){2===t.item.requests.length&&n&&e.push(n),t.item.requests.length,clearInterval(t.intervalID);var r={id:t.nonce,from:"wallet",to:t.item.id,action:"payment",response:e};t.$q.notify({message:"Request resolved",color:"teal",icon:"done"}),t.$store.dispatch("RESPONSE",r)})).catch((function(e){t.$q.notify({message:e,color:"negative",icon:"report_problem"})}))},reject:function(){this.$q.notify({message:"Request rejected",icon:"close"}),clearInterval(this.intervalID);var t={id:this.nonce,from:"wallet",to:this.item.id,action:"payment",response:["reject"]};this.$store.dispatch("RESPONSE",t)}},computed:m({},Object(o["c"])({nonce:function(t){return t.wallet.nonce},address:function(t){return t.wallet.address},private:function(t){return t.wallet.private},minterGate:function(t){return t.wallet.minterGate},wsPayment:function(t){return t.payments.wsPayment}})),created:function(){this.countdown()},mounted:function(){}},p=f,b=(n("bf1d"),n("a6c2")),h=n("63c1"),v=n.n(h),g=n("5ce7"),O=n("7006"),q=n("3f5f"),y=n("dc7c"),w=n("84df"),j=n("ef9c"),_=Object(b["a"])(p,c,l,!1,null,null,null),S=_.exports;v()(_,"components",{QCard:g["a"],QCardSection:O["a"],QSeparator:q["a"],QItemLabel:y["a"],QCardActions:w["a"],QBtn:j["a"]});var P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-card",{staticClass:"login"},[n("q-card-section",{staticClass:"bg-secondary text-white"},[n("span",{staticClass:"text-subtitle2"},[t._v("Login")]),n("br"),n("span",{staticClass:"text-h6"},[t._v(t._s(t.item.requests[0]))])]),n("q-card-section",{staticClass:"bg-secondary text-white"},[n("br"),t._v("Request available "+t._s(t.timerSeconds)+" sec\n  ")]),n("q-separator",{attrs:{inset:""}}),n("q-card-actions",{attrs:{align:"around"}},[n("q-btn",{attrs:{flat:"",color:"red"},on:{click:t.reject}},[t._v("Cancel")]),n("q-btn",{attrs:{flat:"",color:"deep-orange"},on:{click:t.block}},[t._v("Block")]),n("q-btn",{attrs:{"full-width":"",flat:"",color:"primary"},on:{click:t.resolve}},[t._v("Apply")])],1)],1)},E=[],D=n("b61d"),I=n.n(D);I.a.util=n("6d42");var R=function(){return I.a.util.encodeBase64(I.a.randomBytes(I.a.secretbox.nonceLength))};function $(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?$(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Q={name:"Login",props:["item","index"],data:function(){return{timerSeconds:0,loaded:!1,intervalID:null}},created:function(){this.countdown()},methods:{countdown:function(){var t=this,e=new Date,n=new Date(this.item.created),r=e.getTime()-n.getTime(),s=Math.abs(60-r/1e3);this.timerSeconds=parseInt(s%60,10);var i,a=s;this.intervalID=setInterval((function(){i=parseInt(a%60,10),i=i<10?"0"+i:i,t.timerSeconds=i,--a<0&&(clearInterval(t.intervalID),t.$q.notify({message:"Request timeout",icon:"access_time"}),t.$store.commit("REMOVE_REQUEST",t.item.id))}),1e3)},delay:function(t){return new Promise((function(e,n){setTimeout(e,t)}))},reject:function(){clearInterval(this.intervalID);var t={id:this.nonce,from:"wallet",to:this.item.id,action:"login",response:["reject"]};this.$q.notify({message:"Access to requests is canceled",icon:"close"}),this.$store.dispatch("RESPONSE",t)},block:function(){this.$q.notify({message:"Domen blocked",icon:"block"}),clearInterval(this.intervalID),this.$store.dispatch("RESPONSE",{_id:this.nonce,from:"wallet",to:this.item.id,action:"login",response:["blocked"]})},resolve:function(){var t=R();clearInterval(this.intervalID),this.$store.commit("SAVE_AUTH",{domen:this.item.requests[0],nonce:t}),this.$q.notify({message:"Access to requests is allow",color:"teal",icon:"done"}),this.$store.dispatch("RESPONSE",{_id:this.nonce,from:"wallet",to:this.item.id,action:"login",response:[t]})}},computed:C({},Object(o["c"])({nonce:function(t){return t.wallet.nonce},address:function(t){return t.wallet.address},private:function(t){return t.wallet.private},minterGate:function(t){return t.wallet.minterGate},wsPayment:function(t){return t.payments.wsPayment}}))},x=Q,k=Object(b["a"])(x,P,E,!1,null,null,null),A=k.exports;v()(k,"components",{QCard:g["a"],QCardSection:O["a"],QSeparator:q["a"],QCardActions:w["a"],QBtn:j["a"]});var T=n("dc0b"),L=n("4bde");function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var M={name:"Requests",components:{Payment:S,Login:A},data:function(){return{}},computed:B({},Object(o["c"])({address:function(t){return t.wallet.address},requests:function(t){return t.request.requests},login:function(t){return t.request.login},balances:function(t){return t.api.balances},balancesJSON:function(t){return t.api.balancesJSON},wsStatus:function(t){return t.request.wsStatus}}),{},Object(o["b"])(["isLogin","isRegistered"])),methods:{registerAddress:function(){this.$store.dispatch("REGISTER_ADDRESS")},clearAll:function(){this.$store.commit("CLEAR_ALL_REQUESTS")},signFee:function(){return Object(T["e"])(L["b"],{payload:"MX4qptIH0mXijR8XlroE56txuOeyig=="})}},created:function(){}},F=M,G=n("505d"),J=n("692f"),U=n("e0e9"),H=Object(b["a"])(F,r,s,!1,null,null,null);e["default"]=H.exports;v()(H,"components",{QPage:G["a"],QCard:g["a"],QCardSection:O["a"],QCardActions:w["a"],QBtn:j["a"],QList:J["a"],QItemLabel:y["a"],QItem:U["a"]})}}]);