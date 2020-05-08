(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"192d":function(e,t,n){"use strict";var r=n("72c8"),s=n.n(r);s.a},"72c8":function(e,t,n){},d2ae:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[e.isRegistered?e.requests&&e.requests.length?n("q-list",[n("q-item-label",{attrs:{header:""}},[e._v("Request")]),e._l(e.requests,(function(t){return n("q-item",{key:t.id},["payment"===t.action?n("payment",{attrs:{item:t}}):e._e(),"login"===t.action?n("login",{attrs:{item:t}}):e._e()],1)}))],2):n("q-item-label",{attrs:{header:""}},[e._v(e._s(e.$t("No requests")))]):n("q-card",[n("q-card-section",{staticClass:"bg-purple text-white"},[n("div",{staticClass:"text-h6"},[e._v(e._s(e.$t("You are not registered in the Authenticator")))]),n("div",[e._v(e._s(e.$t("Authenticator Registration text")))])]),n("q-card-actions",{attrs:{align:"around"}},[n("q-btn",{attrs:{disabled:e.balancesJSON["BIP"]<=e.signFee,flat:""},on:{click:e.registerAddress}},[e._v(e._s(e.$t("Sign in")))])],1)],1)],1)},s=[],a=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),i=n.n(a),o=n("2f62"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-card",{staticClass:"payment"},[n("q-card-section",{staticClass:"bg-accent text-white"},[e._v("\n    From: "),n("span",{staticClass:"text-subtitle2"},[e._v(e._s(e.item.url))])]),n("q-separator"),n("q-card-section",{staticClass:"bg-accent text-white"},[n("div",{domProps:{innerHTML:e._s(e.humanFriendly(e.item.requests[0]))}}),n("div",[e._v("\n      "+e._s(e.timerSeconds)+"\n    ")])]),e.item.requests[0].message&&e.item.requests[0].message.length?n("q-separator",{attrs:{inset:""}}):e._e(),e.item.requests[0].message&&e.item.requests[0].message.length?n("q-card-section",[n("q-item-label",{attrs:{caption:""}},[e._v("Message")]),n("div",{staticClass:"text-subtitle2"},[e._v(e._s(e.item.requests[0].message))])],1):e._e(),n("q-separator",{attrs:{inset:""}}),n("q-card-actions",{attrs:{align:"around"}},[n("q-btn",{attrs:{flat:"",color:"red"},on:{click:e.reject}},[e._v("Cancel")]),n("q-btn",{attrs:{"full-width":"",flat:"",color:"primary"},on:{click:e.resolve}},[e._v("Apply")])],1)],1)},l=[],u=(n("551c"),n("ed08"));function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={name:"Payment",props:["item","index"],data:function(){return{timerSeconds:0,loaded:!1,intervalID:null}},methods:{humanFriendly:function(e){var t="";switch(e.txAction){case"SendTxParams":t+="Send ",t+="<b>"+Object(u["c"])(e.amount,5),t+=" "+e.coinSymbol+"</b>",t+=" to the address <br><b>"+e.address+"</b>";break}return t},countdown:function(){var e=this,t=new Date,n=new Date(this.item.date),r=t.getTime()-n.getTime(),s=Math.abs(60-r/1e3);this.timerSeconds=parseInt(s%60,10);var a,i=s;this.intervalID=setInterval((function(){a=parseInt(i%60,10),a=a<10?"0"+a:a,e.timerSeconds=a,--i<0&&(clearInterval(e.intervalID),e.$q.notify({message:"Request timeout",icon:"access_time"}),e.$store.commit("REMOVE_REQUEST",e.item.id))}),1e3)},delay:function(e){return new Promise((function(t,n){setTimeout(t,e)}))},resolve:function(){var e=this,t=[];this.item.requests.length,this.$store.dispatch("SENDER",this.item.requests[0]).then((function(n){return t.push(n),1===e.item.requests.length?new Promise((function(e){return e()})):2===e.item.requests.length?e.delay(6500).then((function(){return e.sendTransaction(e.item.requests[1])})):void 0})).then((function(n){2===e.item.requests.length&&n&&t.push(n),e.item.requests.length,clearInterval(e.intervalID);var r={id:e.nonce,from:"wallet",to:e.item.id,action:"payment",response:t};e.$q.notify({message:"Request resolved",color:"teal",icon:"done"}),e.$store.dispatch("RESPONSE",r)})).catch((function(t){e.$q.notify({message:t,color:"negative",icon:"report_problem"})}))},reject:function(){this.$q.notify({message:"Request rejected",icon:"close"}),clearInterval(this.intervalID);var e={id:this.nonce,from:"wallet",to:this.item.id,action:"payment",response:["reject"]};this.$store.dispatch("RESPONSE",e)}},computed:m({},Object(o["c"])({nonce:function(e){return e.wallet.nonce},address:function(e){return e.wallet.address},private:function(e){return e.wallet.private},minterGate:function(e){return e.wallet.minterGate},wsPayment:function(e){return e.payments.wsPayment}})),created:function(){this.countdown()},mounted:function(){}},f=p,b=(n("192d"),n("2877")),h=n("eebe"),v=n.n(h),g=n("f09f"),O=n("a370"),q=n("eb85"),y=n("0170"),w=n("4b7e"),j=n("9c40"),_=Object(b["a"])(f,c,l,!1,null,null,null),S=_.exports;v()(_,"components",{QCard:g["a"],QCardSection:O["a"],QSeparator:q["a"],QItemLabel:y["a"],QCardActions:w["a"],QBtn:j["a"]});var P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-card",{staticClass:"login"},[n("q-card-section",{staticClass:"bg-secondary text-white"},[n("span",{staticClass:"text-subtitle2"},[e._v("Login")]),n("br"),n("span",{staticClass:"text-h6"},[e._v(e._s(e.item.requests[0]))])]),n("q-card-section",{staticClass:"bg-secondary text-white"},[n("br"),e._v("Request available "+e._s(e.timerSeconds)+" sec\n  ")]),n("q-separator",{attrs:{inset:""}}),n("q-card-actions",{attrs:{align:"around"}},[n("q-btn",{attrs:{flat:"",color:"red"},on:{click:e.reject}},[e._v("Cancel")]),n("q-btn",{attrs:{flat:"",color:"deep-orange"},on:{click:e.block}},[e._v("Block")]),n("q-btn",{attrs:{"full-width":"",flat:"",color:"primary"},on:{click:e.resolve}},[e._v("Apply")])],1)],1)},E=[],D=n("58a4"),I=n.n(D);I.a.util=n("427a");var R=function(){return I.a.util.encodeBase64(I.a.randomBytes(I.a.secretbox.nonceLength))};function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q={name:"Login",props:["item","index"],data:function(){return{timerSeconds:0,loaded:!1,intervalID:null}},created:function(){this.countdown()},methods:{countdown:function(){var e=this,t=new Date,n=new Date(this.item.created),r=t.getTime()-n.getTime(),s=Math.abs(60-r/1e3);this.timerSeconds=parseInt(s%60,10);var a,i=s;this.intervalID=setInterval((function(){a=parseInt(i%60,10),a=a<10?"0"+a:a,e.timerSeconds=a,--i<0&&(clearInterval(e.intervalID),e.$q.notify({message:"Request timeout",icon:"access_time"}),e.$store.commit("REMOVE_REQUEST",e.item.id))}),1e3)},delay:function(e){return new Promise((function(t,n){setTimeout(t,e)}))},reject:function(){clearInterval(this.intervalID);var e={id:this.nonce,from:"wallet",to:this.item.id,action:"login",response:["reject"]};this.$q.notify({message:"Access to requests is canceled",icon:"close"}),this.$store.dispatch("RESPONSE",e)},block:function(){this.$q.notify({message:"Domen blocked",icon:"block"}),clearInterval(this.intervalID),this.$store.dispatch("RESPONSE",{_id:this.nonce,from:"wallet",to:this.item.id,action:"login",response:["blocked"]})},resolve:function(){var e=R();clearInterval(this.intervalID),this.$store.commit("SAVE_AUTH",{domen:this.item.requests[0],nonce:e}),this.$q.notify({message:"Access to requests is allow",color:"teal",icon:"done"}),this.$store.dispatch("RESPONSE",{_id:this.nonce,from:"wallet",to:this.item.id,action:"login",response:[e]})}},computed:C({},Object(o["c"])({nonce:function(e){return e.wallet.nonce},address:function(e){return e.wallet.address},private:function(e){return e.wallet.private},minterGate:function(e){return e.wallet.minterGate},wsPayment:function(e){return e.payments.wsPayment}}))},x=Q,k=Object(b["a"])(x,P,E,!1,null,null,null),A=k.exports;v()(k,"components",{QCard:g["a"],QCardSection:O["a"],QSeparator:q["a"],QCardActions:w["a"],QBtn:j["a"]});var T=n("158a"),L=n("6ff6");function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M={name:"Requests",components:{Payment:S,Login:A},data:function(){return{}},computed:B({},Object(o["c"])({address:function(e){return e.wallet.address},requests:function(e){return e.request.requests},login:function(e){return e.request.login},balances:function(e){return e.api.balances},balancesJSON:function(e){return e.api.balancesJSON},wsStatus:function(e){return e.request.wsStatus}}),{},Object(o["b"])(["isLogin","isRegistered"])),methods:{registerAddress:function(){this.$store.dispatch("REGISTER_ADDRESS")},clearAll:function(){this.$store.commit("CLEAR_ALL_REQUESTS")},signFee:function(){return Object(T["e"])(L["b"],{payload:"MX4qptIH0mXijR8XlroE56txuOeyig=="})}},created:function(){}},F=M,G=n("9989"),J=n("1c1c"),U=n("66e5"),H=Object(b["a"])(F,r,s,!1,null,null,null);t["default"]=H.exports;v()(H,"components",{QPage:G["a"],QCard:g["a"],QCardSection:O["a"],QCardActions:w["a"],QBtn:j["a"],QList:J["a"],QItemLabel:y["a"],QItem:U["a"]})}}]);