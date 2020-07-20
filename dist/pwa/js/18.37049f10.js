(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{dd40:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{attrs:{padding:""}},[t.wallet?a("q-card",{staticClass:"q-mb-lg q-mt-sm",attrs:{flat:"",bordered:""}},[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"text-h5"},[t._v(t._s(t.wallet.title))]),a("div",{staticClass:"text-caption text-grey-7"},[t._v(t._s(t.wallet.address))]),a("q-separator",{staticClass:"q-mb-sm q-mt-sm"}),t.balanceData&&t.delegationsData?a("div",[a("div",[t._v("\n          Available balance: "),a("b",{staticClass:"q-ml-sm"},[t._v(t._s(t.prettyNumber(t.balanceData.available_balance_sum,2)))]),t._v(" bip\n          "),a("span",{staticClass:"q-ml-xs text-grey-7"},[t._v("("+t._s(t.Big(t.balanceData.available_balance_sum).times(t.currency.usd).round(2,3).toString())+" $)")])]),a("div",[t._v("\n          Delegated: "),a("b",{staticClass:"q-ml-sm"},[t._v(t._s(t.prettyNumber(t.delegationsData.meta.additional.total_delegated_bip_value,2)))]),t._v(" bip\n          "),a("span",{staticClass:"q-ml-xs text-grey-7"},[t._v("("+t._s(t.Big(t.delegationsData.meta.additional.total_delegated_bip_value).times(t.currency.usd).round(2,3).toString())+" $)")])])]):a("div",[a("q-skeleton",{attrs:{type:"text"}}),a("q-skeleton",{attrs:{type:"text"}})],1)],1),a("q-separator",{attrs:{inset:""}}),a("q-card-actions",{attrs:{align:"center"}},[a("q-btn",{attrs:{flat:"",round:"",color:"teal"},on:{click:function(e){t.qrAddressDialog=!0}}},[a("q-icon",{attrs:{size:"sm"}},[a("img",{staticStyle:{"max-width":"92%"},attrs:{src:"statics/qr-icon_black.svg"}})])],1),a("q-btn",{attrs:{flat:"",round:"",color:"teal",icon:"file_copy"},on:{click:t.copyAddress}}),t.shareTest()?a("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"share"},on:{click:t.shareAddress}}):t._e(),a("q-btn",{attrs:{flat:"",round:"",color:"purple",icon:"settings"},on:{click:function(e){t.settingWalletDialog=!0}}})],1)],1):t._e(),a("q-dialog",{model:{value:t.qrAddressDialog,callback:function(e){t.qrAddressDialog=e},expression:"qrAddressDialog"}},[a("q-card",[a("img",{staticClass:"address__qr",attrs:{src:t.qrImg}})])],1),a("q-dialog",{attrs:{"transition-show":"scale","transition-hide":"scale"},model:{value:t.settingWalletDialog,callback:function(e){t.settingWalletDialog=e},expression:"settingWalletDialog"}},[a("q-card",{staticClass:"dialog-min300"},[a("q-list",[a("q-item-label",{staticClass:"q-pb-sm",attrs:{header:""}},[t._v(t._s(t.$t("Wallet settings")))]),a("q-separator"),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(e){t.settingWalletDialog=!1,t.editWalletDialog=!0}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"teal",name:"edit"}})],1),a("q-item-section",[a("q-item-label",{staticClass:"text-subtitle2"},[t._v(t._s(t.$t("Change name")))])],1)],1),a("q-separator",{attrs:{inset:""}}),a("q-item",{directives:[{name:"show",rawName:"v-show",value:!t.isObserve,expression:"!isObserve"},{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(e){t.settingWalletDialog=!1,t.showSeedDialog=!0}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"orange",name:"visibility"}})],1),a("q-item-section",[a("q-item-label",{staticClass:"text-subtitle2"},[t._v(t._s(t.$t("Show seed phrase")))]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.$t("Keep it secret")))])],1)],1),a("q-separator",{attrs:{inset:""}}),t.isObserve?a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(e){t.settingWalletDialog=!1,t.removeObserveDialog=!0}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"deep-orange-14",name:"delete"}})],1),a("q-item-section",[a("q-item-label",{staticClass:"text-subtitle2"},[t._v(t._s(t.$t("Logout this wallet")))]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.$t("Data about wallet will be deleted")))])],1)],1):a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(e){t.settingWalletDialog=!1,t.logoutDialog=!0}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"deep-orange-14",name:"delete"}})],1),a("q-item-section",[a("q-item-label",{staticClass:"text-subtitle2"},[t._v(t._s(t.$t("Logout this wallet")))]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.$t("Data about wallet will be deleted")))])],1)],1)],1)],1)],1),a("q-dialog",{attrs:{"transition-show":"scale","transition-hide":"scale"},model:{value:t.editWalletDialog,callback:function(e){t.editWalletDialog=e},expression:"editWalletDialog"}},[a("q-card",{staticClass:"dialog-min300 q-pa-md",staticStyle:{"padding-bottom":"4px"}},[a("div",[a("q-input",{attrs:{outlined:"",clearable:"",spellcheck:"false","bg-color":"white"},model:{value:t.newTitle,callback:function(e){t.newTitle=e},expression:"newTitle"}})],1),a("q-separator",{staticClass:"q-mt-md q-mb-xs"}),a("q-card-actions",[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",dense:"",label:t.$t("Cancel"),color:"primary"}}),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",dense:"",label:t.$t("Save"),color:"teal"},on:{click:t.saveNewTitle}})],1)],1)],1),a("q-dialog",{attrs:{"transition-show":"scale","transition-hide":"scale"},model:{value:t.showSeedDialog,callback:function(e){t.showSeedDialog=e},expression:"showSeedDialog"}},[a("q-card",{staticClass:"dialog-min300 q-pa-md",staticStyle:{"padding-bottom":"4px"}},[a("div",{staticClass:"text-subtitle1"},[t._v(t._s(t.wallet.mnemonic))]),a("q-separator",{staticClass:"q-mt-md q-mb-xs"}),a("q-card-actions",[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",dense:"",label:t.$t("Cancel"),color:"primary"}}),a("q-space"),a("q-btn",{attrs:{flat:"",dense:"",label:t.$t("Copy"),color:"teal"},on:{click:t.copyMnemonic}})],1)],1)],1),a("q-dialog",{attrs:{"transition-show":"scale","transition-hide":"scale"},model:{value:t.logoutDialog,callback:function(e){t.logoutDialog=e},expression:"logoutDialog"}},[a("q-card",{staticClass:"dialog-min300 q-pa-md",staticStyle:{"padding-bottom":"4px"}},[a("div",{staticClass:"text-h6 text-center"},[t._v(t._s(t.$t("Attention")))]),a("div",{staticClass:"text-subtitle2 text-center"},[t._v(t._s(t.$t("Remove wallet text")))]),a("q-separator",{staticClass:"q-mt-md q-mb-xs"}),a("q-card-actions",[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",dense:"",label:t.$t("Cancel"),color:"primary"}}),a("q-space"),a("q-btn",{attrs:{flat:"",dense:"",label:t.$t("Remove wallet"),color:"red-10"},on:{click:t.removeWallet}})],1)],1)],1),a("q-dialog",{attrs:{"transition-show":"scale","transition-hide":"scale"},model:{value:t.removeObserveDialog,callback:function(e){t.removeObserveDialog=e},expression:"removeObserveDialog"}},[a("q-card",{staticClass:"dialog-min300 q-pa-md",staticStyle:{"padding-bottom":"4px"}},[a("div",{staticClass:"text-subtitle2 text-center"},[t._v(t._s(t.$t("Remove observer text")))]),a("q-separator",{staticClass:"q-mt-md q-mb-xs"}),a("q-card-actions",[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",dense:"",label:t.$t("Cancel"),color:"primary"}}),a("q-space"),a("q-btn",{attrs:{flat:"",dense:"",label:t.$t("Remove observer"),color:"red-10"},on:{click:t.removeObserver}})],1)],1)],1),a("q-tabs",{staticClass:"bg-light-blue-9 text-white",attrs:{"inline-label":"","active-color":"white","indicator-color":"grey-13","active-bg-color":"light-blue-10"},model:{value:t.balanceTab,callback:function(e){t.balanceTab=e},expression:"balanceTab"}},[a("q-tab",{attrs:{"no-caps":"",name:"balance",label:t.$t("Coins")}}),a("q-tab",{attrs:{"no-caps":"",name:"delegations",label:t.$t("Delegations")}}),a("q-tab",{attrs:{"no-caps":"",name:"transactions",label:t.$t("Transactions")}})],1),a("q-tab-panels",{attrs:{animated:""},model:{value:t.balanceTab,callback:function(e){t.balanceTab=e},expression:"balanceTab"}},[a("q-tab-panel",{attrs:{name:"balance"}},[t.balanceData&&t.balanceData.balances.length?a("q-list",t._l(t.balanceData.balances,(function(e,s){return a("q-item",{key:s,staticClass:"q-pl-none q-pr-none"},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{staticClass:"balance__coin-avatar",style:"background-color: "+t.stringToHSL(e.coin),attrs:{"text-color":"white"}},[a("span",{staticClass:"balance__coin-letter"},[t._v(t._s(e.coin.charAt(0).toUpperCase()))])])],1),a("q-item-section",[a("q-item-label",{staticClass:"text-bold"},[t._v(t._s(e.coin))]),t.coinsInfo&&t.coinsInfo[e.coin]?a("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v(t._s(t.coinsInfo[e.coin].name))]):t._e()],1),a("q-item-section",{staticClass:"text-grey-9",attrs:{side:""}},[a("b",[t._v(t._s(t.prettyNumber(e.amount,4)))]),"BIP"!==e.coin?a("div",{staticClass:"text-caption text-grey-7 text-weight-medium"},[t._v("\n              "+t._s(t.coinsCost(e.amount,e.coin))+" bip\n            ")]):a("div",{staticClass:"text-caption text-grey-7 text-weight-medium"},[t._v("Base coin")])])],1)})),1):a("div",{staticClass:"text-center q-pa-lg"},[a("q-spinner",{attrs:{color:"primary",size:"3em"}})],1)],1),a("q-tab-panel",{staticClass:"q-pl-none q-pr-none",attrs:{name:"delegations"}},[t.delegationsGroup&&t.delegationsData.data.length?a("div",{staticClass:"delegations"},t._l(t.delegationsGroup,(function(e,s){return a("q-list",{key:s},[a("q-item",{staticClass:"q-mb-xs"},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("img",{attrs:{src:e[0].validator_meta.icon_url}})])],1),a("q-item-section",[a("q-item-label",{staticClass:"text-bold",attrs:{lines:"1"}},[t._v(t._s(e[0].validator_meta.name))]),a("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v(t._s(e[0].validator_meta.description))])],1),t.isObserve?t._e():a("q-item-section",{attrs:{side:""}},[a("q-btn",{attrs:{size:"1rem",flat:"",color:"light-blue-14",dense:"",round:"",icon:"add_circle_outline"},on:{click:function(a){return t.$router.push({name:"send",params:{import:{address:e[0].pub_key}}})}}})],1)],1),a("q-separator",{staticClass:"q-mb-sm",attrs:{inset:""}}),t._l(e,(function(s){return a("q-item",{key:s.coin,staticClass:"q-mb-xs"},[a("q-item-section",[a("q-item-label",{staticClass:"text-grey-10",attrs:{lines:"1"}},[a("b",[t._v(t._s(s.coin))])])],1),a("q-item-section",{staticClass:"text-grey-9",attrs:{side:""}},[a("b",[t._v(t._s(t.prettyNumber(s.value,5)))]),"BIP"!==s.coin?a("div",{staticClass:"text-caption text-grey-7 text-weight-medium"},[t._v("\n                "+t._s(t.prettyNumber(s.bip_cost,0))+"\n                "),s.bip_value?a("span",[t._v("/ "+t._s(t.prettyNumber(s.bip_value,0)))]):t._e(),t._v("\n                bip\n              ")]):a("div",{staticClass:"text-caption text-grey-7 text-weight-medium"},[t._v("Base coin")])]),t.isObserve||"unbond"===s.type?t._e():a("q-item-section",{staticClass:"text-grey-9",attrs:{side:""}},[a("q-btn",{attrs:{size:"1rem",flat:"",color:"grey-6",dense:"",round:"",icon:"remove_circle_outline"},on:{click:function(a){return t.unbondOpen(e[0].pub_key,s.coin,s.value)}}})],1),!t.isObserve&&s.type&&"unbond"===s.type?a("q-item-section",{staticClass:"text-grey-9",attrs:{side:""}},[a("div",{staticClass:"text-caption text-grey-7 text-weight-medium"},[t._v(t._s(s.days)+" days")]),a("div",{staticClass:"text-caption text-grey-7 text-weight-medium"},[t._v(t._s(s.hours)+" hours")])]):t._e(),!t.isObserve&&s.type&&"unbond"===s.type?a("q-item-section",{staticClass:"text-grey-9 text-center",attrs:{side:""}},[a("q-spinner-ios",{staticStyle:{margin:"0 auto"},attrs:{color:"text-grey-9",size:"1.5em"}}),a("div",{staticClass:"text-caption text-grey-7 text-weight-medium"},[t._v(t._s(t.$t("Unbonding")))])],1):t._e()],1)})),a("q-separator",{staticClass:"q-mt-xs",staticStyle:{height:"1rem"},attrs:{color:"grey-2"}})],2)})),1):a("q-item-label",{attrs:{header:""}},[t._v(t._s(t.$t("No delegations")))])],1),a("q-tab-panel",{staticClass:"q-pa-none transactions__wrap",attrs:{name:"transactions"}},[a("TransactionsList",{attrs:{address:t.wallet.address}})],1)],1),a("q-dialog",{attrs:{"transition-show":"scale","transition-hide":"scale"},model:{value:t.unbondDialog,callback:function(e){t.unbondDialog=e},expression:"unbondDialog"}},[t.unbondDialogData?a("q-card",{staticClass:"dialog-min300 q-pa-md",staticStyle:{"padding-bottom":"4px"}},[t.unbondDialogData.validator?a("q-item",{staticClass:"q-mb-xs"},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("img",{attrs:{src:t.unbondDialogData.validator.meta.icon_url}})])],1),a("q-item-section",[a("q-item-label",{staticClass:"text-bold",attrs:{lines:"1"}},[t._v(t._s(t.unbondDialogData.validator.meta.name))]),a("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v(t._s(t.unbondDialogData.validator.meta.description))])],1)],1):t._e(),a("div",{staticClass:"text-h6 text-center q-mt-sm"},[t._v(t._s(t.prettyNumber(t.unbondDialogData.value,2))+" "+t._s(t.unbondDialogData.coin))]),a("div",{staticClass:"text-caption text-center text-grey-7 q-mt-sm"},[t._v("Unbond commision: 0.2 bip")]),a("q-separator",{staticClass:"q-mt-md q-mb-xs"}),a("q-card-actions",[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",dense:"",label:t.$t("Cancel"),color:"primary"}}),a("q-space"),a("q-btn",{attrs:{flat:"",dense:"",label:t.$t("Make unbond"),color:"red-10"},on:{click:t.unbondSend}})],1)],1):t._e()],1)],1)},i=[],n=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("456d"),a("c47a")),l=a.n(n),o=(a("34ef"),a("28a5"),a("f751"),a("967e")),r=a.n(o),c=(a("96cf"),a("fa84")),d=a.n(c),u=(a("6b54"),a("06db"),a("7f7f"),a("20d6"),a("2f62")),p=a("ed08"),m=a("cdde"),b=a("d055"),g=a.n(b),v=a("9dcd"),h=a.n(v),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-checkbox",{staticClass:"q-mt-sm q-ml-sm",attrs:{label:"Show Multisend"},model:{value:t.showMultisend,callback:function(e){t.showMultisend=e},expression:"showMultisend"}}),t.transactions?a("div",t._l(t.transactions,(function(e,s){return a("q-list",{key:s,staticClass:"transactions",attrs:{separator:""}},[t.checkOnlyMultisend(e)||t.showMultisend?a("div",{staticClass:"text-grey text-h6 q-mb-xs q-pl-md q-mt-md"},[t._v(t._s(s))]):t._e(),t._l(e,(function(e){return a("q-item",{directives:[{name:"show",rawName:"v-show",value:t.showMultisend||"MULTISEND"!==e.type,expression:"showMultisend || item.type !== 'MULTISEND'"},{name:"ripple",rawName:"v-ripple"}],key:e.txn,staticClass:"bg-white",attrs:{clickable:""},on:{click:function(a){return t.openDialog(e)}}},[a("q-item-section",{attrs:{avatar:""}},["SEND"===e.type?a("q-icon",{attrs:{name:"send",color:"light-blue-4",size:"xs"}}):"DELEGATE"===e.type||"UNBOND"===e.type?a("q-icon",{attrs:{name:"work",color:"light-blue-4",size:"xs"}}):"BUY"===e.type||"SELL"===e.type||"SELL_ALL"===e.type?a("q-icon",{attrs:{name:"cached",color:"light-blue-4",size:"xs"}}):"MULTISEND"===e.type?a("q-icon",{attrs:{name:"playlist_play",color:"light-blue-4",size:"sm"}}):t._e()],1),a("q-item-section",[a("q-item-label",{staticClass:"q-mb-xs text-weight-medium",attrs:{lines:"1"},domProps:{innerHTML:t._s(e.title)}}),a("q-item-label",{staticClass:"text-grey",attrs:{caption:"",lines:"1"}},[t._v(t._s(e.date))])],1),a("q-item-section",{attrs:{side:""}},[a("q-item-label",{class:("+"===e.symbol?"text-green":"-"===e.symbol?"text-red":"text-grey-8")+" text-weight-medium q-mb-xs"},[t._v(t._s(e.symbol)+" "+t._s(e.value)+" "+t._s(e.coin))]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(e.desc))])],1)],1)}))],2)})),1):a("div",{staticClass:"text-center q-mt-lg"},[a("q-spinner",{attrs:{size:"7em",thickness:2,color:"purple-2"}})],1),a("q-dialog",{attrs:{"transition-show":"scale","transition-hide":"scale"},model:{value:t.txDialog,callback:function(e){t.txDialog=e},expression:"txDialog"}},[t.txDataDialog?a("q-card",{staticClass:"dialog-min300 q-pa-md"},[a("div",{staticClass:"text-h5 text-center q-mb-sm"},[t._v(t._s(t.txDataDialog.desc))]),a("div",{staticClass:"text-subtitle row"},["BUY"===t.txDataDialog.type||"SELL"===t.txDataDialog.type||"SELL_ALL"===t.txDataDialog.type?a("span",{staticClass:"col-2 text-grey-7"},[t._v("Sell: ")]):t._e(),"SEND"===t.txDataDialog.type&&"-"===t.txDataDialog.symbol?a("span",{staticClass:"col-2 text-grey-7"},[t._v("To:")]):t._e(),""===t.txDataDialog.symbol||"SEND"===t.txDataDialog.type&&"+"===t.txDataDialog.symbol?a("span",{staticClass:"col-2 text-grey-7"},[t._v("From:")]):t._e(),a("span",{staticClass:"col",domProps:{innerHTML:t._s(t.txDataDialog.title)}})]),a("div",{staticClass:"row"},["BUY"===t.txDataDialog.type||"SELL"===t.txDataDialog.type||"SELL_ALL"===t.txDataDialog.type?a("span",{staticClass:"col-2 text-grey-7"},[t._v("Buy: ")]):a("span",{staticClass:"col-2 text-grey-7"},[t._v("Value: ")]),a("span",{class:("+"===t.txDataDialog.symbol?"text-green":"-"===t.txDataDialog.symbol?"text-red":"text-grey-8")+" col text-weight-medium"},[t._v(t._s(t.txDataDialog.symbol)+" "+t._s(t.txDataDialog.value)+" "+t._s(t.txDataDialog.coin))])]),a("div",{staticClass:"row"},[a("span",{staticClass:"col-2 text-grey-7"},[t._v("Date: ")]),a("span",{staticClass:"col"},[t._v(t._s(t.txDataDialog.date))])]),t.txDataDialog.message?a("div",{staticClass:"q-mt-md"},[t._v("\n        "+t._s(t.txDataDialog.message)+"\n      ")]):t._e(),"SEND"===t.txDataDialog.type&&"-"===t.txDataDialog.symbol?a("div",{staticClass:"row q-mt-md"},[a("div",{staticClass:"col-6 q-pr-xs"},[a("q-btn",{staticClass:"bg-light-blue-14 text-white full-width",attrs:{stack:"",label:"Repeat",icon:"repeat"},on:{click:function(e){return t.$router.push({name:"send",params:{import:{address:t.txDataDialog.to,coin:t.txDataDialog.coin,amount:t.txDataDialog.value}}})}}})],1),a("div",{staticClass:"col-6 q-pl-xs"},[a("q-btn",{staticClass:"bg-light-blue-14 text-white full-width",attrs:{stack:"",label:"Open explorer",icon:"open_in_new"},on:{click:function(e){return t.openURL("https://minterscan.net/tx/"+t.txDataDialog.hash)}}})],1)]):a("div",{staticClass:"q-mt-lg"},[a("q-btn",{staticClass:"bg-light-blue-14 text-white full-width",attrs:{label:"Open explorer",icon:"open_in_new"},on:{click:function(e){return t.openURL("https://minterscan.net/tx/"+t.txDataDialog.hash)}}})],1)]):t._e()],1)],1)},_=[],D=(a("7514"),a("bd4c")),q=a("b06b"),y=a("b862");function x(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function w(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?x(Object(a),!0).forEach((function(e){l()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var C={name:"Transactions",props:{address:String},data:function(){return{showMultisend:!1,txDialog:!1,txDataDialog:null,transactions:null,txTypeId:{},txTypeDesc:{BUY:"Buy",CREATE_COIN:"Create coin",CREATE_MULTISIG:"Create multisig",DECLARE_CANDIDACY:"Declare candidacy",DELEGATE:"Delegate",EDIT_CANDIDATE:"Edit candidate",MULTISEND:"Multisend",REDEEM_CHECK:"Redeem check",SELL:"Sell",SELL_ALL:"Sell all",SEND:"Send",SET_CANDIDATE_OFF:"Set candidate off",SET_CANDIDATE_ON:"Set candidate on",UNBOND:"Unbond"}}},created:function(){for(var t in y["b"])this.txTypeId[parseInt(y["b"][t])]=t;this.loadTransactions()},methods:{openURL:function(t){return Object(q["a"])(t)},openDialog:function(t){this.txDialog=!0,this.txDataDialog=t},b64DecodeUnicode:function(t){return decodeURIComponent(atob(t).split("").map((function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)})).join(""))},checkOnlyMultisend:function(t){return t.reduce((function(t,e){return"MULTISEND"!==e.type?t+1:t}),0)},loadTransactions:function(){var t=this;return d()(r.a.mark((function e(){var a,s;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("FETCH_TRANSACTION",t.address);case 2:a=e.sent,s=a.data.map((function(e){var a={to:e.data.to,hash:e.hash,type:t.txTypeId[e.type],date:D["a"].formatDate(e.timestamp,"DD.MM.YYYY HH:mm"),timestamp:e.timestamp,message:t.b64DecodeUnicode(e.payload)};if(a.desc=t.txTypeDesc[a.type],"SEND"===a.type){if(e.from===t.address){a.symbol="-";var s=t.findUser(e.data.to);a.title=s?s.title:Object(p["e"])(e.data.to)}else{a.symbol="+";var i=t.findUser(e.from);a.title=i?i.title:Object(p["e"])(e.from)}a.value=Object(p["d"])(e.data.value,2),a.coin=e.data.coin,a.to=e.data.to}else if("DELEGATE"===a.type){a.symbol="=";var n=t.findValidator(e.data.pub_key);a.title=n?n.meta.name:Object(p["e"])(e.data.pub_key),a.value=Object(p["d"])(e.data.value,2),a.coin=e.data.coin}else if("BUY"===a.type||"SELL"===a.type||"SELL_ALL"===a.type)a.symbol="+",a.title="<span class='text-red'>- ".concat(Object(p["d"])(e.data.value_to_sell,2)," ").concat(e.data.coin_to_sell,"</span>"),a.value=Object(p["d"])(e.data.value_to_buy,2),a.coin=e.data.coin_to_buy;else if("MULTISEND"===a.type)if(e.from===t.address){a.symbol="-",a.title="Multisend to "+e.data.list.length+" address";var l=e.data.list.reduce((function(t,e){return h()(t).plus(e.value)}),h()(0));a.value=h()(l).round(2,3).toString(),a.coin=e.data.list[0].coin}else{a.symbol="+";var o=t.findUser(e.from);a.title='<span class="text-grey-7">From:</span>  '+(o?o.title:Object(p["e"])(e.from));var r=e.data.list.find((function(e){return e.to===t.address}));a.value=Object(p["d"])(r.value,2),a.coin=r.coin}else if("UNBOND"===a.type){a.symbol="";var c=t.findValidator(e.data.pub_key);a.title=c?c.meta.name:Object(p["e"])(e.data.pub_key),a.value=Object(p["d"])(e.data.value,2),a.coin=e.data.coin}return a})),t.transactions=s.reduce((function(t,e){return(t[D["a"].formatDate(e.timestamp,"DD.MM")]=t[D["a"].formatDate(e.timestamp,"DD.MM")]||[]).push(e),t}),{});case 5:case"end":return e.stop()}}),e)})))()}},computed:w({},Object(u["c"])({}),{},Object(u["b"])(["findUser","findValidator"])),watch:{address:function(t){this.transactions=null,this.loadTransactions()}}},O=C,S=a("2877"),E=a("eebe"),T=a.n(E),k=a("8f8e"),L=a("1c1c"),N=a("66e5"),A=a("4074"),$=a("0016"),I=a("0170"),j=a("0d59"),U=a("24e8"),M=a("f09f"),B=a("9c40"),Q=a("714f"),R=Object(S["a"])(O,f,_,!1,null,null,null),P=R.exports;function W(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function H(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?W(Object(a),!0).forEach((function(e){l()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):W(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}T()(R,"components",{QCheckbox:k["a"],QList:L["a"],QItem:N["a"],QItemSection:A["a"],QIcon:$["a"],QItemLabel:I["a"],QSpinner:j["a"],QDialog:U["a"],QCard:M["a"],QBtn:B["a"]}),T()(R,"directives",{Ripple:Q["a"]});var G={name:"Wallet",props:{obsAddress:String},components:{TransactionsList:P},data:function(){return{wallet:null,isObserve:!1,balanceData:null,delegationsData:null,delegationsGroup:null,editWalletDialog:!1,newTitle:!1,removeObserveDialog:!1,qrAddressDialog:!1,unbondDialog:!1,unbondDialogData:null,qrImg:"",settingWalletDialog:!1,showSeedDialog:!1,logoutDialog:!1,balanceTab:"balance"}},created:function(){this.init(this.address)},methods:{Big:function(t){return h()(t)},prettyNumber:function(t,e){return Object(p["d"])(t,e)},stringToHSL:function(t){return Object(p["f"])(t)},init:function(t,e){var a=this;if(this.balanceData=null,this.delegationsData=null,this.delegationsGroup=null,!e&&this.obsAddress&&42===this.obsAddress.length){this.isObserve=!0;var s=this.observerSelect.findIndex((function(t){return t.address===a.obsAddress}));if(-1!==s)this.wallet=this.observerSelect[s],this.newTitle=this.wallet.title;else{var i=this.findUser(this.obsAddress);this.newTitle=i.title}}else{this.isObserve=!1;var n=this.walletsSelect.findIndex((function(e){return e.address===t}));this.wallet=this.walletsSelect[n],this.newTitle=this.wallet.title}this.getBalance(this.wallet.address),this.getDelegations(this.wallet.address),this.createQR()},unbondOpen:function(t,e,a){this.unbondDialogData={validator:this.findValidator(t),pubKey:t,coin:e,value:a},this.unbondDialog=!0,console.log(this.unbondDialogData)},unbondSend:function(){var t=this,e={type:"UNBOND",data:{publicKey:this.unbondDialogData.pubKey,coin:this.unbondDialogData.coin,stake:this.unbondDialogData.value},gasCoin:"BIP"};this.$store.dispatch("SENDER",e).then((function(a){t.unbondDialog=!1,t.$store.commit("SET_UNBOND",{pub_key:e.data.publicKey,value:e.data.stake,coin:e.data.coin,validator_meta:{name:t.unbondDialogData.validator.meta.name},address:t.address}),t.$q.notify({message:t.$t("Transaction successful")+". Сoins return in about 30 days",icon:"tag_faces",color:"teal",position:"bottom"})})).catch((function(e){console.log(e),t.$q.notify({message:e,icon:"report_problem",color:"negative",position:"bottom"})}))},shareTest:function(){return!!navigator.share},coinsCost:function(t,e){if(!this.coinsInfo[e]||!this.coinsInfo[e].volume)return"Error";var a=this.coinsInfo[e],s=1-Math.pow(1-t/a.volume,100/a.crr);return h()(a.reserve).times(s).round(1,0).toString()},getBalance:function(t){var e=this;return d()(r.a.mark((function t(){return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("FETCH_BALANCE_ADDRESS",e.wallet.address);case 2:e.balanceData=t.sent;case 3:case"end":return t.stop()}}),t)})))()},getDelegations:function(t){var e=this;return d()(r.a.mark((function t(){var a,s,i,n;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.delegationsGroup=null,e.delegationsData=null,t.next=4,e.$store.dispatch("FETCH_DELEGATIONS_ADDRESS",e.wallet.address);case 4:a=t.sent,console.log(e.wallet.address),console.log(e.address),e.unbond[e.wallet.address]?(i=e.unbond[e.wallet.address].map((function(t){var a=e.findValidator(t.pub_key),s=Object.assign({},t),i=h()(518400).minus(e.status.latestBlockHeight-s.height).times(e.status.averageBlockTime).round(0,0).toString();return s.days=h()(i).div(86400).round(0,0),s.hours=h()(i).minus(h()(s.days).times(86400)).div(3600).round(0,0).toString(),s.validator_meta=a.meta,s.bip_value=!1,s})),s=a.data.filter((function(t){if(e.unbond&&i){var a=i.findIndex((function(e){return e.pub_key===t.pub_key&&e.coin===t.coin&&e.value===t.value}));return a<0}return!0})),s=s.concat(i)):s=a.data,n=s.map((function(t){return"BIP"!==t.coin?t.bip_cost=e.coinsCost(t.value,t.coin):t.bip_cost=0,t})),e.delegationsData=a,e.delegationsGroup=n.reduce((function(t,e){return(t[e.validator_meta.name]=t[e.validator_meta.name]||[]).push(e),t}),{});case 11:case"end":return t.stop()}}),t)})))()},createQR:function(){var t=this,e={errorCorrectionLevel:"M",type:"image/png",width:400,margin:1};g.a.toDataURL(this.wallet.address,e).then((function(e){t.qrImg=e})).catch((function(e){t.$q.notify({message:e,color:"purple"})}))},dataURItoBlob:function(t){for(var e=atob(t.split(",")[1]),a=t.split(",")[0].split(":")[1].split(";")[0],s=new ArrayBuffer(e.length),i=new Uint8Array(s),n=0;n<e.length;n++)i[n]=e.charCodeAt(n);var l=new Blob([s],{type:a});return l},shareAddress:function(){var t=this.dataURItoBlob(this.qrImg);navigator.canShare&&navigator.canShare({files:[t]})?navigator.share({files:[t],text:this.wallet.address}).then((function(){return console.log("Share was successful.")})).catch((function(t){return console.log("Sharing failed",t)})):navigator.share({text:this.wallet.address}).then((function(){return console.log("Successful share")})).catch((function(t){return console.log("Error sharing",t)}))},saveNewTitle:function(){this.newTitle?(this.$store.commit("CHANGE_NAME_WALLET",{title:this.newTitle,address:this.wallet.address,isObserve:this.isObserve}),this.wallet.title=this.newTitle):(this.$store.commit("CHANGE_NAME_WALLET",{title:"No name",address:this.wallet.address,isObserve:this.isObserve}),this.wallet.title="No name")},copyAddress:function(){var t=this;Object(m["a"])(this.wallet.address).then((function(){t.$q.notify({message:t.$t("Address copied"),color:"purple",position:"bottom",timeout:400})})).catch((function(){}))},copyMnemonic:function(){var t=this;Object(m["a"])(this.wallet.mnemonic).then((function(){t.$q.notify({message:t.$t("Seed phrase copied"),color:"purple",position:"bottom",timeout:400})})).catch((function(){}))},removeWallet:function(){this.logoutDialog=!1,this.$store.commit("REMOVE_WALLET",this.wallet.address),this.wallet=this.walletsSelect[0],this.$store.commit("SET_WALLET",this.wallet.address),this.$store.dispatch("FETCH_BALANCE"),this.$store.dispatch("FETCH_DELEGATION")},removeObserver:function(){this.removeObserveDialog=!1,this.$store.commit("REMOVE_OBSERVER",this.wallet.address),this.$router.push({path:"/"})}},computed:H({},Object(u["c"])({address:function(t){return t.wallet.address},wallets:function(t){return t.wallet.wallets},currency:function(t){return t.api.currency},balance:function(t){return t.api.balance},delegations:function(t){return t.api.delegations},status:function(t){return t.api.status},unbond:function(t){return t.api.unbond},delegationsTotal:function(t){return t.api.delegationsTotal}}),{},Object(u["b"])(["balanceObj","coinsInfo","delegationsSum","observerSelect","walletsSelect","findValidator","findWallet","findUser"])),beforeRouteUpdate:function(t,e,a){console.log(t.obsAddress),void 0===t.obsAddress?this.init(this.address,!0):this.init(t.obsAddress,!0),a()},watch:{address:function(t){console.log("Wallet",t),this.init(t,!0)}}},z=G,V=a("9989"),Y=a("eb85"),F=a("293e"),K=a("4b7e"),J=a("27f9"),X=a("2c91"),Z=a("429b"),tt=a("7460"),et=a("adad"),at=a("823b"),st=a("cb32"),it=a("d9b2"),nt=a("7f67"),lt=Object(S["a"])(z,s,i,!1,null,null,null);e["default"]=lt.exports;T()(lt,"components",{QPage:V["a"],QCard:M["a"],QSeparator:Y["a"],QSkeleton:F["a"],QCardActions:K["a"],QBtn:B["a"],QIcon:$["a"],QDialog:U["a"],QList:L["a"],QItemLabel:I["a"],QItem:N["a"],QItemSection:A["a"],QInput:J["a"],QSpace:X["a"],QTabs:Z["a"],QTab:tt["a"],QTabPanels:et["a"],QTabPanel:at["a"],QAvatar:st["a"],QSpinner:j["a"],QSpinnerIos:it["a"]}),T()(lt,"directives",{Ripple:Q["a"],ClosePopup:nt["a"]})}}]);