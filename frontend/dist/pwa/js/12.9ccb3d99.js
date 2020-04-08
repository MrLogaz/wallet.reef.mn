(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"7ca8":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{attrs:{padding:""}},[n("div",{staticClass:"q-gutter-md q-pa-md"},[n("q-input",{attrs:{outlined:"",clearable:"","bottom-slots":"",label:t.$t("Search")},scopedSlots:t._u([{key:"after",fn:function(){return[n("q-btn",{staticClass:"cursor-pointer",attrs:{flat:"",size:"20px",round:"",icon:"add_circle_outline"},on:{click:function(e){t.newContact=!0}}})]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),n("q-dialog",{attrs:{"transition-show":"scale","transition-hide":"scale"},model:{value:t.newContact,callback:function(e){t.newContact=e},expression:"newContact"}},[n("q-card",{staticClass:"dialog-min300"},[n("form",{attrs:{autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false"},on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.newContactForm(e)}}},[n("q-card-section",[n("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("New contact")))])]),n("q-card-section",{staticClass:"q-gutter-md"},[n("q-input",{attrs:{outlined:"",clearable:"","bottom-slots":"",label:t.$t("Name"),rules:[function(e){return!!e||t.$t("Field is required")}]},model:{value:t.newName,callback:function(e){t.newName=e},expression:"newName"}}),n("q-input",{attrs:{outlined:"",clearable:"","bottom-slots":"",label:t.$t("Mx address"),rules:[function(e){return!!e||t.$t("Field is required")},function(e){return"Mx"===e.substring(0,2)&&42===e.length||t.$t("Mx address invalid")}]},model:{value:t.newAddress,callback:function(e){t.newAddress=e},expression:"newAddress"}})],1),n("q-card-actions",{attrs:{align:"right"}},[n("q-btn",{attrs:{flat:"",type:"submit",label:t.$t("Add new contact"),color:"primary"}})],1)],1)])],1),t.contactsFilter&&t.contactsFilter.length>0?n("q-list",{attrs:{bordered:"",separator:""}},t._l(t.contactsFilter,(function(e){return n("q-item",{key:e.address,staticClass:"q-my-sm"},[n("q-item-section",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{avatar:"",clickable:""},on:{click:function(n){return t.$router.push({name:"send",params:{routeAddressTo:e.address}})}}},[n("q-avatar",{attrs:{color:"primary","text-color":"white"}},[t._v("\n          "+t._s(e.title[0])+"\n        ")])],1),n("q-item-section",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(n){return t.$router.push({name:"send",params:{routeAddressTo:e.address}})}}},[n("q-item-label",[t._v(t._s(e.title))]),n("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v(t._s(e.address))])],1),n("q-item-section",{attrs:{side:""}},[n("div",{staticClass:"text-grey-8 q-gutter-xs"},[n("q-btn",{attrs:{size:"18px",flat:"",dense:"",round:"",icon:"delete_outline"},on:{click:function(n){return t.openContactMenu(e)}}})],1)])],1)})),1):n("div",{staticClass:"text-center"},[n("div",{staticClass:"text-h5 text-center"},[n("div",[t._v(t._s(t.$t("You dont have any saved contacts")))]),n("q-btn",{staticClass:"q-mt-lg",attrs:{to:"/contacts",color:"primary",label:t.$t("Add first contact")},on:{click:function(e){t.newContact=!0}}})],1)])],1)},s=[],c=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("386d"),n("c47a")),r=n.n(c),o=n("2f62"),i=n("ed08");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={name:"Convert",components:{},data:function(){return{search:"",newContact:!1,newName:"",newAddress:"",contactsFilter:[]}},computed:d({},Object(o["c"])({contacts:function(t){return t.contacts.contacts}}),{},Object(o["b"])(["filterContacts"])),methods:{pretty:function(t,e){return Object(i["b"])(t,e)},numberSpaces:function(t){return Object(i["a"])(t)},newContactForm:function(){var t=this;""!==this.newAddress&&""!==this.newName&&(this.$store.dispatch("NEW_CONTACT",{title:this.newName,address:this.newAddress}).then((function(e){t.$store.commit("ADD_CONTACT",e),t.contactsFilter=t.contacts,t.$q.notify({message:t.$t("Contact added"),icon:"tag_faces",color:"teal",position:"bottom"})})).catch((function(){t.$q.notify({message:t.$t("This contact already exists"),icon:"report_problem",color:"negative",position:"bottom"})})),this.search="",this.newName="",this.newAddress="",this.newContact=!1)},openContactMenu:function(t){var e=this;this.$q.dialog({title:this.$t("Remove contact"),message:this.$t("Would you like to remove")+" <b>".concat(t.title,"</b> ")+this.$t("from your contact list?"),html:!0,cancel:{label:"Cancel",color:"red",flat:!0},ok:{label:"Remove"},persistent:!1}).onOk((function(){e.$store.commit("REMOVE_CONTACT",t.address)})).onCancel((function(){}))}},created:function(){this.contactsFilter=this.contacts},watch:{search:function(t){this.contactsFilter=null===t||""===t?this.contacts:this.filterContacts(t)}}},p=u,m=n("2877"),f=n("eebe"),b=n.n(f),h=n("9989"),w=n("27f9"),v=n("9c40"),C=n("24e8"),q=n("f09f"),g=n("a370"),y=n("4b7e"),O=n("1c1c"),$=n("66e5"),_=n("4074"),k=n("cb32"),x=n("0170"),A=n("714f"),j=Object(m["a"])(p,a,s,!1,null,null,null);e["default"]=j.exports;b()(j,"components",{QPage:h["a"],QInput:w["a"],QBtn:v["a"],QDialog:C["a"],QCard:q["a"],QCardSection:g["a"],QCardActions:y["a"],QList:O["a"],QItem:$["a"],QItemSection:_["a"],QAvatar:k["a"],QItemLabel:x["a"]}),b()(j,"directives",{Ripple:A["a"]})}}]);