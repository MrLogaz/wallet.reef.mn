(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"5fbe":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",[s("div",{staticClass:"q-gutter-md q-pa-md"},[s("q-input",{attrs:{outlined:"",clearable:"",spellcheck:"false","bottom-slots":"","bg-color":"white",label:t.$t("Search")},scopedSlots:t._u([{key:"append",fn:function(){return[t.search&&""!==t.search?t._e():s("q-icon",{attrs:{name:"search"}})]},proxy:!0},{key:"after",fn:function(){return[s("q-btn",{staticClass:"cursor-pointer",attrs:{flat:"",size:"20px",round:"",icon:"add_circle_outline"},on:{click:function(e){t.newContact=!0}}})]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),s("q-dialog",{attrs:{"transition-show":"scale","transition-hide":"scale"},model:{value:t.newContact,callback:function(e){t.newContact=e},expression:"newContact"}},[s("q-card",{staticClass:"dialog-min300"},[s("form",{attrs:{autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false"},on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.newContactValidate(e)}}},[s("q-card-section",[s("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("New contact")))])]),s("q-card-section",{staticClass:"q-gutter-md"},[s("q-input",{attrs:{outlined:"",clearable:"","bottom-slots":"",spellcheck:"false",label:t.$t("Name"),error:t.newNameIsError,"error-message":t.newNameErrorMsg},model:{value:t.newName,callback:function(e){t.newName=e},expression:"newName"}}),s("q-input",{attrs:{outlined:"",clearable:"",spellcheck:"false","bottom-slots":"",label:t.$t("Mx address"),error:t.newAddressIsError,"error-message":t.newAddressErrorMsg},model:{value:t.newAddress,callback:function(e){t.newAddress=e},expression:"newAddress"}}),s("div",[s("q-btn",{staticClass:"full-width",attrs:{type:"submit",label:t.$t("Add new contact"),color:"primary"}})],1)],1)],1)])],1),t.contactsFilter&&t.contactsFilter.length>0?s("q-list",{staticClass:"bg-white",attrs:{bordered:"",separator:""}},t._l(t.contactsFilter,(function(e){return s("q-item",{key:e.address,staticClass:"q-my-sm"},[s("q-item-section",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{avatar:"",clickable:""},on:{click:function(s){return t.$router.push({name:"send",params:{import:{address:e.address}}})}}},[e.title?s("q-avatar",{attrs:{"text-color":"white"}},[e.icon?s("q-img",{staticStyle:{height:"40px"},attrs:{src:e.icon,"spinner-color":"primary","spinner-size":"sm"},scopedSlots:t._u([{key:"error",fn:function(){return[s("div",{staticClass:"avatar__text text-white bg-primary"},[t._v(t._s(e.title[0]))])]},proxy:!0}],null,!0)}):s("div",{staticClass:"avatar__text text-white bg-primary"},[t._v(t._s(e.title[0]))])],1):t._e()],1),s("q-item-section",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(s){return t.$router.push({name:"send",params:{import:{address:e.address}}})}}},[s("q-item-label",[t._v(t._s(e.title))]),s("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v(t._s(e.address))])],1),s("q-item-section",{attrs:{side:""}},[s("div",{staticClass:"text-grey-8 q-gutter-xs"},[s("q-btn",{attrs:{size:"18px",flat:"",dense:"",round:"",icon:"delete_outline"},on:{click:function(s){return t.openContactMenu(e)}}})],1)])],1)})),1):t.contacts&&t.contacts.length?s("div",{staticClass:"text-center"},[s("div",{staticClass:"text-h5 text-center"},[s("div",[t._v(t._s(t.$t("No contacts found")))])])]):s("div",{staticClass:"text-center"},[s("div",{staticClass:"text-h5 text-center"},[s("div",[t._v(t._s(t.$t("You dont have any saved contacts")))]),s("q-btn",{staticClass:"q-mt-lg",attrs:{to:"/contacts",color:"primary",label:t.$t("Add first contact")},on:{click:function(e){t.newContact=!0}}})],1)])],1)},n=[],a=(s("d93a"),s("0012"),s("5b54"),s("2bf3"),s("b7dd"),s("ef92"),s("9289")),c=s.n(a),i=s("52b5"),o=s.n(i),l=(s("9ec6"),s("c1c3"),s("549c")),d=s.n(l),u=s("94ea"),h=s("422d");function p(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function m(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?p(Object(s),!0).forEach((function(e){c()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var w={name:"Convert",components:{},data:function(){return{search:"",newContact:!1,newName:"",newNameIsError:!1,newNameErrorMsg:null,newAddress:"",newAddressIsError:!1,newAddressErrorMsg:null,contactForm:!1,contactsFilter:[]}},created:function(){this.filter()},methods:{pretty:function(t,e){return Object(h["c"])(t,e)},numberSpaces:function(t){return Object(h["b"])(t)},filter:function(){this.contactsFilter=this.contacts},newContactSave:function(){var t=this;return d()(o.a.mark((function e(){var s;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.findContact(t.newAddress)?t.$q.notify({message:t.$t("This contact already exists"),icon:"report_problem",color:"negative",position:"bottom"}):(s={title:t.newName,address:t.newAddress},t.$store.dispatch("SAVE_USER_CONTACTS",s)),t.search="",t.newName="",t.newAddress="",t.newContact=!1;case 5:case"end":return e.stop()}}),e)})))()},newContactValidate:function(){this.newNameIsError=!1,this.newNameErrorMsg=null,this.newAddressIsError=!1,this.newAddressErrorMsg=null,this.newName&&0!==this.newName.length||(this.newNameIsError=!0,this.newNameErrorMsg=this.$t("Field is required")),this.newAddress&&this.newAddress.length>0?(this.newAddressIsError=!0,this.newAddressErrorMsg=this.$t("Address invalid"),("Mx"===this.newAddress.substring(0,2)&&42===this.newAddress.length||"Mp"===this.newAddress.substring(0,2)&&66===this.newAddress.length)&&(this.newAddressIsError=!1,this.newAddressErrorMsg=null)):(this.newAddressIsError=!0,this.newAddressErrorMsg=this.$t("Field is required")),this.newAddressIsError||this.newNameIsError||this.newContactSave()},openContactMenu:function(t){var e=this;this.$q.dialog({title:this.$t("Remove contact"),message:this.$t("Would you like to remove")+" <b>".concat(t.title,"</b> ")+this.$t("from your contact list?"),html:!0,cancel:{label:this.$t("Cancel"),color:"red",flat:!0},ok:{label:this.$t("Remove")},persistent:!1}).onOk((function(){e.$store.dispatch("REMOVE_USER_CONTACTS",t.address)})).onCancel((function(){}))}},computed:m({},Object(u["c"])({contacts:function(t){return t.contacts.contacts}}),{},Object(u["b"])(["filterContacts","findContact"])),watch:{contacts:function(t){this.filter()},newAddress:function(t){this.newAddressIsError=!1,this.newAddressErrorMsg=null},newName:function(t){this.newNameIsError=!1,this.newNameErrorMsg=null},search:function(t){this.contactsFilter=null===t||""===t?this.contacts:this.filterContacts(t)}}},f=w,b=s("a6c2"),v=s("63c1"),g=s.n(v),C=s("505d"),A=s("a3be"),E=s("19dc"),y=s("ef9c"),_=s("ec6d"),q=s("5ce7"),x=s("7006"),N=s("692f"),k=s("e0e9"),O=s("6c44"),$=s("d6e3"),I=s("0798"),M=s("dc7c"),j=s("a561"),S=Object(b["a"])(f,r,n,!1,null,null,null);e["default"]=S.exports;g()(S,"components",{QPage:C["a"],QInput:A["a"],QIcon:E["a"],QBtn:y["a"],QDialog:_["a"],QCard:q["a"],QCardSection:x["a"],QList:N["a"],QItem:k["a"],QItemSection:O["a"],QAvatar:$["a"],QImg:I["a"],QItemLabel:M["a"]}),g()(S,"directives",{Ripple:j["a"]})}}]);