(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{d1f8:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[n("div",{staticClass:"text-h5 grey q-mt-sm"},[e._v(e._s(e.$t("Keep it secret")))]),n("q-card",{staticClass:"mnemonic__card"},[n("q-card-section",[n("div",{staticClass:"text-h6 "},[e._v(e._s(e.mnemonic))])]),n("q-separator"),n("q-card-actions",{attrs:{vertical:""}},[n("q-btn",{attrs:{flat:""},on:{click:e.copyMnemonic}},[e._v(e._s(e.$t("Copy phrase")))])],1)],1),n("p",[e._v(e._s(e.$t("Save seed phrase text")))])],1)},c=[],a=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),o=n.n(a),s=n("2f62"),i=n("cdde");function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={name:"Setting_Private",data:function(){return{}},computed:d({},Object(s["c"])({address:function(e){return e.wallet.address},mnemonic:function(e){return e.wallet.mnemonic}})),methods:{copyMnemonic:function(){var e=this;Object(i["a"])(this.mnemonic).then((function(){e.$q.notify({message:e.$t("Seed phrase copied"),color:"purple",position:"bottom"})})).catch((function(){}))}},created:function(){}},f=u,l=n("2877"),b=n("eebe"),m=n.n(b),O=n("9989"),v=n("9c40"),h=n("f09f"),y=n("a370"),j=n("eb85"),w=n("4b7e"),g=Object(l["a"])(f,r,c,!1,null,null,null);t["default"]=g.exports;m()(g,"components",{QPage:O["a"],QBtn:v["a"],QCard:h["a"],QCardSection:y["a"],QSeparator:j["a"],QCardActions:w["a"]})}}]);