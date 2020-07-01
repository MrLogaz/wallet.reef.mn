(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{d953:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-page",{attrs:{padding:""}},[t.jwt?r("q-card",{attrs:{flat:"",bordered:""}},[r("q-card-section",[r("div",{staticClass:"row items-center no-wrap"},[t.user?r("div",{staticClass:"col"},[r("div",{staticClass:"text-h5"},[t._v(t._s(t.user.username))]),r("div",{staticClass:"text-caption"},[t._v(t._s(t.user.email))])]):r("div",{staticClass:"col"},[r("div",{staticClass:"text-h5"},[t._v("???")])]),r("div",{staticClass:"col-auto"},[r("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"more_vert"}},[r("q-menu",{attrs:{cover:"","auto-close":""}},[r("q-list",[r("q-item",{attrs:{clickable:""},on:{click:t.logout}},[r("q-item-section",[t._v(t._s(t.$t("Logout")))])],1)],1)],1)],1)],1)])])],1):r("Auth")],1)},c=[],o=(r("d93a"),r("0012"),r("5b54"),r("2bf3"),r("b7dd"),r("ef92"),r("9289")),a=r.n(o),s=r("52b5"),i=r.n(s),l=(r("c1c3"),r("549c")),u=r.n(l),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._e(),r("q-card",{staticClass:"q-mb-lg q-mt-lg q-pa-md",attrs:{flat:"",bordered:""}},[r("form",{staticClass:"q-gutter-md",on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.login(e)}}},[r("div",{staticClass:"text-h5 text-center"},[t._v(t._s(t.$t("Sign In")))]),r("q-input",{attrs:{outlined:"",clearable:"","bg-color":"white",label:"Username or email"},model:{value:t.identifier,callback:function(e){t.identifier=e},expression:"identifier"}}),r("q-input",{attrs:{type:"password",outlined:"",clearable:"","bg-color":"white",label:t.$t("Password")},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),r("div",[r("q-btn",{staticClass:"full-width",attrs:{type:"submit",color:"teal",size:"16px"}},[t._v("\n          "+t._s(t.$t("Login"))+"\n        ")])],1),t.error?r("div",{staticClass:"text-red-10 text-subtitle1"},[t._v("\n        "+t._s(t.error)+"\n      ")]):t._e()],1)]),r("div",{staticClass:"row justify-center"},[r("div",{staticClass:"col-8"},[r("q-btn",{staticClass:"bg-light-blue-14 text-white full-width q-mt-lg",attrs:{to:"/profile/reg",flat:"",size:"16px"}},[t._v("\n        "+t._s(t.$t("Create account"))+"\n      ")])],1)])],1)},d=[],f=r("94ea"),b=r("1779");function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){a()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var m={name:"Profile",data:function(){return{identifier:null,password:null,error:null}},created:function(){},mounted:function(){},methods:{authGoogle:function(){var t=this;return u()(i.a.mark((function e(){var r;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("/connect/google/callback"),e.prev=1,e.next=4,t.$axios.get(t.backendApi+"/connect/google");case 4:r=e.sent,console.log(r),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error("REGISTRATION",Object(b["a"])(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},authVk:function(){var t=this;return u()(i.a.mark((function e(){var r;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("/connect/vk/callback"),e.prev=1,e.next=4,t.$axios.get(t.backendApi+"/connect/vk");case 4:r=e.sent,console.log(r),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error("REGISTRATION",Object(b["a"])(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},login:function(){var t=this;return u()(i.a.mark((function e(){var r,n;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.post(t.backendApi+"/auth/local",{identifier:t.identifier,password:t.password});case 3:r=e.sent,n=r.data,n.jwt&&(t.$store.commit("LOGIN_USER_DATA",n),t.$store.dispatch("SYNC_USER_CONTACTS"),t.$q.notify({message:t.$t("Transaction successful"),type:"positive",position:"bottom"})),console.log(n),e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),t.error=Object(b["a"])(e.t0),console.error("REGISTRATION",Object(b["a"])(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},computed:w({},Object(f["c"])({backendApi:function(t){return t.user.backendApi}}))},O=m,g=r("a6c2"),h=r("63c1"),j=r.n(h),y=r("ef9c"),_=r("5ce7"),x=r("a3be"),k=r("19dc"),C=Object(g["a"])(O,p,d,!1,null,null,null),P=C.exports;function q(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?q(Object(r),!0).forEach((function(e){a()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}j()(C,"components",{QBtn:y["a"],QCard:_["a"],QInput:x["a"],QIcon:k["a"]});var $={name:"Profile",components:{Auth:P},data:function(){return{}},created:function(){},mounted:function(){},methods:{sync:function(){var t=this;return u()(i.a.mark((function e(){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.dispatch("SYNC_USER_CONTACTS");case 1:case"end":return e.stop()}}),e)})))()},logout:function(){this.$store.commit("LOGOUT_JWT")}},computed:S({},Object(f["c"])({jwt:function(t){return t.user.jwt},user:function(t){return t.user.user},contacts:function(t){return t.contacts.contacts}})),watch:{jwt:function(t){console.log(t)}}},A=$,T=r("505d"),E=r("7006"),I=r("6496"),Q=r("692f"),D=r("e0e9"),R=r("6c44"),N=Object(g["a"])(A,n,c,!1,null,null,null);e["default"]=N.exports;j()(N,"components",{QPage:T["a"],QCard:_["a"],QCardSection:E["a"],QBtn:y["a"],QMenu:I["a"],QList:Q["a"],QItem:D["a"],QItemSection:R["a"]})}}]);