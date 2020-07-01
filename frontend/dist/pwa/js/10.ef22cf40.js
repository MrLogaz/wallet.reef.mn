(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"01be":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{attrs:{padding:""}},[e.wallets?r("div",[r("div",{staticClass:"row justify-between"},[r("q-item-label",{staticClass:"col",attrs:{header:""}},[e._v(e._s(e.$t("Wallets")))]),r("div",{staticClass:"col q-pa-md text-right text-caption"},[e._v(e._s(e.prettyNumber(e.totalWalletsBip,2))+" BIP")])],1),r("q-card",[r("q-list",{staticClass:"q-mb-md",attrs:{separator:""}},e._l(e.walletsSelect,(function(e,t){return r("WalletItem",{key:t,attrs:{wallet:e}})})),1)],1)],1):e._e(),e.observer&&e.observer.length?r("div",[r("div",{staticClass:"row justify-between"},[r("q-item-label",{staticClass:"col",attrs:{header:""}},[e._v(e._s(e.$t("Observers")))]),r("div",{staticClass:"col q-pa-md text-right text-caption"},[e._v(e._s(e.prettyNumber(e.totalObserversBip,2))+" BIP")])],1),r("q-card",[r("q-list",{staticClass:"q-mb-md",attrs:{separator:""}},e._l(e.observerSelect,(function(e,t){return r("WalletItem",{key:t,attrs:{wallet:e,type:"observer"}})})),1)],1)],1):e._e(),r("q-item-label",{attrs:{header:""}},[e._v(e._s(e.$t("Services")))]),r("div",{staticClass:"row q-mb-lg"},[r("div",{staticClass:"col-md-6 col-xs-6 q-pa-xs"},[r("AddWallet")],1),r("div",{staticClass:"col-md-6 col-xs-6 q-pa-xs"},[r("AddObserver")],1),r("div",{staticClass:"col-md-6 col-xs-6 q-pa-xs"},[r("q-btn",{staticClass:"bg-light-blue-14 text-white full-width q-pb-xs",attrs:{push:"",stack:"",to:"/contacts"}},[r("q-icon",{staticClass:"text-white",attrs:{name:"supervisor_account",size:"1.4rem"}}),r("div",{staticClass:"text-width-medium",staticStyle:{"font-size":"0.6rem"}},[e._v(e._s(e.$t("Contacts")))])],1)],1)])],1)},n=[],a=(r("d93a"),r("0012"),r("5b54"),r("2bf3"),r("b7dd"),r("ef92"),r("9289")),l=r.n(a),i=r("94ea"),o=r("422d"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("q-btn",{staticClass:"bg-light-blue-14 text-white full-width q-pt-xs q-pl-none q-pr-none q-pb-xs",attrs:{push:"",stack:""},on:{click:function(t){e.newWalletDialog=!0}}},[r("q-icon",{staticClass:"text-white",attrs:{name:"add_box",size:"1.4rem"}}),r("div",{staticClass:"text-width-medium",staticStyle:{"font-size":"0.6rem"}},[e._v(e._s(e.$t("Add wallet")))])],1),r("q-dialog",{attrs:{"transition-show":"scale","transition-hide":"scale"},model:{value:e.newWalletDialog,callback:function(t){e.newWalletDialog=t},expression:"newWalletDialog"}},[r("q-card",{staticClass:"dialog-min300"},[r("form",{attrs:{autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false"},on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.saveNewWallet(t)}}},[r("q-card-section",{staticClass:"q-gutter-md"},[r("div",{staticClass:"text-h6"},[e._v(e._s(e.$t("Add wallet")))]),r("q-input",{attrs:{outlined:"",clearable:"",spellcheck:"false",label:e.$t("Title"),hint:e.$t("Optional")},model:{value:e.newTitle,callback:function(t){e.newTitle=t},expression:"newTitle"}}),r("q-input",{attrs:{outlined:"",clearable:"",spellcheck:"false",autogrow:"",label:e.$t("Mnemonic"),error:e.newMnemonicIsError,"error-message":e.newMnemonicErrorMsg},scopedSlots:e._u([{key:"after",fn:function(){return[r("q-btn",{style:e.generateWalletLoading?"cursor-pointer: none;":"",attrs:{flat:"",stack:"",round:"","no-caps":"",icon:"cached",disabled:e.generateWalletLoading,loading:e.generateWalletLoading},on:{click:e.generateWallet},scopedSlots:e._u([{key:"loading",fn:function(){return[r("q-spinner-gears")]},proxy:!0}])})]},proxy:!0}]),model:{value:e.newMnemonic,callback:function(t){e.newMnemonic=t},expression:"newMnemonic"}}),r("div",[r("q-btn",{staticClass:"full-width",attrs:{type:"submit",label:e.$t("Add wallet"),color:"primary",disabled:!e.newMnemonic||!e.newMnemonic.length}})],1)],1)],1)])],1)],1)},d=[],u=r("83f1");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w={name:"AddWallet",data:function(){return{newWalletDialog:!1,newTitle:null,newMnemonic:null,newMnemonicIsError:null,newMnemonicErrorMsg:null,generateWalletLoading:!1}},methods:{generateWallet:function(){var e=this;this.generateWalletLoading=!0,setTimeout((function(){e.newMnemonic=Object(u["a"])()._mnemonic}),200)},saveNewWallet:function(){if(Object(u["b"])(this.newMnemonic)){var e=Object(u["c"])(this.newMnemonic),t={address:e.getAddressString(),privateKey:e.getPrivateKeyString(),mnemonic:e.getMnemonic()},r=this.findWallet(t.address);if(r&&r.address)this.newMnemonicIsError=!0,this.newMnemonicErrorMsg=this.$t("This wallet already exists");else{var s=this.findProfile(t.address);t.title=this.newTitle||(s?s.title:"")||(this.walletsSelect.length?this.walletsSelect.length+1+" wallet":"Main wallet"),t.icon=s?s.icon:"",this.newWalletDialog=!1,this.$store.commit("SAVE_WALLET",t),this.$store.dispatch("FETCH_BALANCE"),this.$store.dispatch("FETCH_DELEGATION"),this.$router.push({path:"/wallet"})}}else this.newMnemonicIsError=!0,this.newMnemonicErrorMsg="Invalid mnemonic"}},computed:b({},Object(i["c"])({address:function(e){return e.wallet.address}}),{},Object(i["b"])(["walletsSelect","findWallet","findProfile"])),watch:{newWalletDialog:function(){this.newMnemonic=null,this.newTitle=null},newMnemonic:function(e){var t=this;setTimeout((function(){t.newMnemonicIsError=!1,t.generateWalletLoading=!1}),200)}}},f=w,m=r("a6c2"),h=r("63c1"),v=r.n(h),g=r("ef9c"),O=r("19dc"),y=r("ec6d"),_=r("5ce7"),j=r("7006"),q=r("a3be"),x=r("918c"),A=Object(m["a"])(f,c,d,!1,null,null,null),C=A.exports;v()(A,"components",{QBtn:g["a"],QIcon:O["a"],QDialog:y["a"],QCard:_["a"],QCardSection:j["a"],QInput:q["a"],QSpinnerGears:x["a"]});var E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("q-btn",{staticClass:"bg-light-blue-14 text-white full-width q-pt-xs q-pl-none q-pr-none q-pb-xs",attrs:{push:"",stack:""},on:{click:function(t){e.newWalletDialog=!0}}},[r("q-icon",{staticClass:"text-white",attrs:{name:"visibility",size:"1.4rem"}}),r("div",{staticClass:"text-width-medium",staticStyle:{"font-size":"0.6rem"}},[e._v(e._s(e.$t("Add observer")))])],1),r("q-dialog",{attrs:{"transition-show":"scale","transition-hide":"scale"},model:{value:e.newWalletDialog,callback:function(t){e.newWalletDialog=t},expression:"newWalletDialog"}},[r("q-card",{staticClass:"dialog-min300"},[r("form",{attrs:{autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false"},on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.saveNewObserver(t)}}},[r("q-card-section",{staticClass:"q-gutter-md"},[r("div",{staticClass:"text-h6"},[e._v(e._s(e.$t("Add observer")))]),r("q-input",{attrs:{outlined:"",clearable:"",spellcheck:"false",label:e.$t("Title"),hint:e.$t("Optional")},model:{value:e.newTitle,callback:function(t){e.newTitle=t},expression:"newTitle"}}),r("q-input",{attrs:{outlined:"",clearable:"",spellcheck:"false",autogrow:"",label:e.$t("Address"),error:e.newAddressIsError,"error-message":e.newAddressErrorMsg},model:{value:e.newAddress,callback:function(t){e.newAddress=t},expression:"newAddress"}}),r("div",[r("q-btn",{staticClass:"full-width",attrs:{type:"submit",label:e.$t("Add wallet"),color:"primary",disabled:!e.newAddress||!e.newAddress.length}})],1)],1)],1)])],1)],1)},P=[];function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D={name:"AddObserver",data:function(){return{newWalletDialog:!1,newTitle:null,newAddress:null,newAddressIsError:null,newAddressErrorMsg:null}},methods:{saveNewObserver:function(){if("Mx"===Object(o["a"])(this.newAddress)){var e={address:this.newAddress,icon:null,title:"Observer"},t=this.findWallet(e.address),r=this.findObserver(e.address);if(t&&t.address||r&&r.address)this.newAddressIsError=!0,this.newAddressErrorMsg=this.$t("This wallet already exists");else{var s=this.findProfile(e.address);e.title=this.newTitle||(s?s.title:"")||(this.observerSelect.length?this.observerSelect.length+1+" observer":"Observer"),e.icon=s?s.icon:"",this.newWalletDialog=!1,this.$store.commit("SAVE_OBSERVER",e),this.$router.push({path:"/wallet/"+e.address})}}else this.newAddressIsError=!0,this.newAddressErrorMsg="Invalid adress"}},computed:S({},Object(i["c"])({address:function(e){return e.wallet.address}}),{},Object(i["b"])(["walletsSelect","observerSelect","findWallet","findObserver","findProfile"])),watch:{newWalletDialog:function(){this.newMnemonic=null,this.newTitle=null},newMnemonic:function(e){var t=this;setTimeout((function(){t.newMnemonicIsError=!1,t.generateWalletLoading=!1}),200)}}},M=D,$=Object(m["a"])(M,E,P,!1,null,null,null),k=$.exports;v()($,"components",{QBtn:g["a"],QIcon:O["a"],QDialog:y["a"],QCard:_["a"],QCardSection:j["a"],QInput:q["a"]});var I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(t){return e.selectWallet(e.wallet.address)}}},[r("q-item-section",{staticClass:"q-ml-none",attrs:{top:"",avatar:""}},[r("q-avatar",{attrs:{"text-color":"green",rounded:""}},["observer"!==e.type&&e.wallet.address===e.activeAddress?r("q-icon",{staticClass:"wallet__active-icon",attrs:{name:"radio_button_checked",color:"green",size:"0.9rem"}}):"observer"!==e.type?r("q-icon",{staticClass:"wallet__active-icon",attrs:{name:"radio_button_unchecked",color:"grey",size:"0.9rem"}}):e._e(),e.wallet.icon?r("q-img",{staticStyle:{height:"40px"},attrs:{src:e.wallet.icon,"spinner-color":"primary","spinner-size":"sm"},scopedSlots:e._u([{key:"error",fn:function(){return[r("div",{staticClass:"avatar__text text-white bg-primary"},[e._v(e._s(e.wallet.title[0]))])]},proxy:!0}],null,!1,1804216258)}):r("q-icon",{attrs:{name:"person",color:"grey",size:"2rem"}})],1)],1),r("q-item-section",[r("q-item-label",{attrs:{lines:"1"},domProps:{innerHTML:e._s(e.wallet.label)}}),r("q-item-label",{attrs:{caption:"",lines:"1"}},[e._v(e._s(e.wallet.caption))])],1),r("q-item-section",{attrs:{side:""}},[e.value?r("b",{staticClass:"text-grey-10",domProps:{innerHTML:e._s(e.value+" BIP")}}):e.wallet.balance?r("b",{staticClass:"text-grey-10",domProps:{innerHTML:e._s(e.wallet.balance+" BIP")}}):r("q-spinner-rings",{attrs:{size:"2em"}})],1)],1)},T=[],Q=r("52b5"),L=r.n(Q),B=(r("c1c3"),r("549c")),N=r.n(B);function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var F={name:"WalletItem",props:{wallet:Object,type:String},data:function(){return{value:null}},created:function(){var e=this;return N()(L.a.mark((function t(){var r;return L.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("FETCH_BALANCE_ADDRESS",e.wallet.address);case 2:r=t.sent,e.value=Object(o["d"])(r.total_balance_sum,2,!0);case 4:case"end":return t.stop()}}),t)})))()},methods:{selectWallet:function(e){"observer"===this.type?this.$router.push({path:"/wallet/"+e}):(this.$store.commit("SET_WALLET",e),this.$store.dispatch("FETCH_BALANCE"),this.$store.dispatch("FETCH_DELEGATION"),this.$router.push({path:"/wallet"}))}},computed:H({},Object(i["c"])({activeAddress:function(e){return e.wallet.address}}))},R=F,G=r("e0e9"),V=r("6c44"),J=r("d6e3"),K=r("0798"),U=r("dc7c"),X=r("4f6c"),Y=r("a561"),Z=Object(m["a"])(R,I,T,!1,null,null,null),ee=Z.exports;function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}v()(Z,"components",{QItem:G["a"],QItemSection:V["a"],QAvatar:J["a"],QIcon:O["a"],QImg:K["a"],QItemLabel:U["a"],QSpinnerRings:X["a"]}),v()(Z,"directives",{Ripple:Y["a"]});var se={name:"Index",components:{AddWallet:C,AddObserver:k,WalletItem:ee},data:function(){return{language:this.$i18n.locale,qrAddress:!1,currentWallet:null,newObserverDialog:!1,newObserverAddress:null}},created:function(){this.currentWallet=this.findWallet(this.address)},methods:{saveNewObserver:function(){},prettyNumber:function(e,t){return Object(o["d"])(e,t)},copyAddress:function(){var e=this;navigator.clipboard.writeText(this.address).then((function(){e.$q.notify({message:e.$t("Address copied"),color:"purple",position:"bottom",timeout:300})})).catch((function(){}))}},computed:re({},Object(i["c"])({address:function(e){return e.wallet.address},wallets:function(e){return e.wallet.wallets},observer:function(e){return e.wallet.observer},balance:function(e){return e.api.balance}}),{},Object(i["b"])(["balanceSum","balanceCustom","walletsSelect","totalWalletsBip","totalObserversBip","observerSelect","findWallet"]))},ne=se,ae=r("505d"),le=r("692f"),ie=Object(m["a"])(ne,s,n,!1,null,null,null);t["default"]=ie.exports;v()(ie,"components",{QPage:ae["a"],QItemLabel:U["a"],QCard:_["a"],QList:le["a"],QBtn:g["a"],QIcon:O["a"]})}}]);