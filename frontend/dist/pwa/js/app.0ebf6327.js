(function(e){function t(t){for(var a,r,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={2:0},o={2:0},s=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{1:"72001f76",3:"d8dc4300",4:"22922622",5:"08d0b012",6:"c2e7cc78",7:"f91fc748",8:"31f4a612",9:"2c4e2dcd",10:"89b01803",11:"42210cb4",12:"7ac1afd1",13:"a29bb48a",14:"03b1dfaa",15:"2f45c210",16:"d73eac3b"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={1:1,3:1,6:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{1:"2828dd79",3:"1bcb0b0e",4:"31d6cfe0",5:"31d6cfe0",6:"5e44303a",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0",12:"31d6cfe0",13:"31d6cfe0",14:"31d6cfe0",15:"31d6cfe0",16:"31d6cfe0"}[e]+".css",o=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===a||u===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[e],p.parentNode.removeChild(p),n(s)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;s.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},1:function(e,t){},2:function(e,t){},"2f39":function(e,t,n){"use strict";n.r(t);var a=n("967e"),r=n.n(a),o=(n("a481"),n("96cf"),n("fa84")),s=n.n(o),i=(n("5c7d"),n("e54f"),n("4848"),n("c382"),n("64e9"),n("4f62"),n("c00e"),n("ca07"),n("4a8e"),n("b828"),n("58af"),n("7713"),n("1c10"),n("7bb2"),n("62f2"),n("7e6d"),n("2b0e")),c=n("b05d"),l=n("436b"),u=n("2a19"),d=n("f508"),p=n("1b3f");i["a"].use(c["a"],{config:{},plugins:{Dialog:l["a"],Notify:u["a"],Loading:d["a"],LoadingBar:p["a"]}});var f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view",{staticClass:"bg-grey-2"})],1)},h=[],m=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),v=n.n(m),b=n("2f62");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S={name:"App",data:function(){return{}},method:{},created:function(){this.$i18n.locale=this.language,this.$store.commit("SAVE_GATE");var e=new Date,t=new Date;t.setDate(t.getDate()-3),this.$store.dispatch("GET_CURRENCY"),!this.dataUpdateDate||this.dataUpdateDate&&this.dataUpdateDate<t.getTime()?(this.$store.dispatch("FETCH_ALL_PROFILES"),this.$store.dispatch("FETCH_COINS"),this.$store.dispatch("FETCH_VALIDATORS"),this.$store.commit("SET_UPDATE_DATE",e.getTime())):(this.coins||this.$store.dispatch("FETCH_COINS"),this.validators||this.$store.dispatch("FETCH_VALIDATORS"),this.profiles||this.$store.dispatch("FETCH_ALL_PROFILES"))},mounted:function(){this.isLogin&&(this.$store.dispatch("FETCH_BALANCE"),this.$store.dispatch("FETCH_DELEGATION"))},computed:w({},Object(b["c"])({language:function(e){return e.app.language},coins:function(e){return e.api.coins},profiles:function(e){return e.contacts.profiles},dataUpdateDate:function(e){return e.app.dataUpdateDate},validators:function(e){return e.api.validators}}),{},Object(b["b"])(["isLogin"]))},y=S,E=n("2877"),A=n("eebe"),C=n.n(A),T=n("24e8"),x=n("f09f"),_=n("a370"),O=n("e669"),L=Object(E["a"])(y,f,h,!1,null,null,null),N=L.exports;C()(L,"components",{QDialog:T["a"],QCard:x["a"],QCardSection:_["a"],QSpinnerFacebook:O["a"]});n("f751");var R,k=n("a925"),P={"My Address":"My Address",Coins:"Coins","Convert coins":"Convert coins","Total balance":"Total balance","Available balance":"Available balance","Copy address":"Copy address","Address copied":"Address copied","Show QR":"Show QR","Send to people":"Send to people",Home:"Home","My Wallet":"My Wallet",Send:"Send",Request:"Request","Make unbond":"Make unbond","Сontact list":"Сontact list",Profile:"Profile",Settings:"Settings",Exit:"Exit",Transactions:"Transactions","Scan QR Code":"Scan QR Code",Wallet:"Wallet",Wallets:"Wallets","Add wallet":"Add wallet",Observers:"Observers","Add observer":"Add observer","Remove observer":"Remove observer","Remove observer text":"Stop observation this wallet?","Current wallet":"Current wallet","Сhoose active wallet":"Сhoose active wallet","Share address":"Share address","Wallet settings":"Wallet settings","Change name":"Change name",Save:"Save","Start using":"Start using","Now this is your new wallet":"Now this is your new wallet",Mnemonic:"Mnemonic",Balance:"Balance",Delegations:"Delegations","No delegations":"No delegations","Logout this wallet":"Logout this wallet","Data about wallet will be deleted":"Data about wallet will be deleted","This wallet already exists":"This wallet already exists","Remove wallet text":"If you delete your wallet, you will lose access to it. Be sure to save the seed phrase to restore access","Remove all wallets text":"If you delete all wallets, you will lose access to them. Be sure to save seed phrases for all wallets to restore access","Remove wallet":"Remove wallet","Remove all wallets":"Remove all wallets",Attention:"Attention","No results":"No results",Optional:"Optional",Address:"Address",Name:"Name",Title:"Title","Mx address or Mp public key":"Mx address or Mp public key","Mx address":"Mx address","Address invalid":"Address invalid",Validators:"Validators",Delegate:"Delegate","Delegate dialog":"delegate","Send dialog":"send","Add message":"Add message",Message:"Message","Please use maximum 1024 characters":"Please use maximum 1024 characters",Convert:"Convert",Exchange:"Exchange",Get:"Get","Сhoose coin":"Сhoose coin",Amount:"Amount","Coin you have":"Coin you have","Coin you want":"Coin you want","Not enough":"Not enough","Transaction fee":"Transaction fee","Transaction successful":"Transaction successful","You will pay":"You will pay","You will get":"You will get","Youre Exchange":"You're Exchange","You are":"You are",to:"to",Cancel:"Cancel",Accept:"Accept","Field is required":"Field is required","Сhoose different coins":"Сhoose different coins","for transaction fee":"for transaction fee",General:"General",Interface:"Interface",Support:"Support","Show seed phrase":"Show seed phrase","Keep it secret":"Keep it secret","Change language":"Change language",Available:"Available","Choose a language":"Choose a language","Copy phrase":"Copy phrase","Save seed phrase text":"Save this seed phrase in case you plan to use this address in the future.","Seed phrase copied":"Seed phrase copied","Share wallet":"Share wallet",Share:"Share","Send wallet as a link":"Send wallet as a link","Link to wallet is ready":"Link to wallet is ready","Link copied to your clipboard":"Link copied to your clipboard","Move menu":"Move menu","Logout app":"Logout app","All data will be deleted from this device":"All data will be deleted from this device","You are not registered in the Authenticator":"You are not registered in the Authenticator","Authenticator Registration text":"Registration is free, but you must have at least 0.01 bip on your balance to pay network commission","Sign in":"Sign in","No requests":"No requests",Apps:"Apps",Services:"Services",Contacts:"Contacts",Profiles:"Profiles",Search:"Search","New contact":"New contact","Add new contact":"Add new contact","No contacts found":"No contacts found","Add first contact":"Add first contact","Contact added":"Contact added","You dont have any saved contacts":"You don't have any saved contacts","This contact already exists":"This contact already exists","Remove contact":"Remove contact",Remove:"Remove",Close:"Close",Copy:"Copy","Would you like to remove":"Would you like to remove","from your contact list?":"from your contact list?",Hello:"Hello",lucky:"lucky","Your friend":"Your friend","sent you":"sent you","What is it":"What is it","With this you can":"With this you can","or send to someone else":"or send to someone else",Soon:"Soon"},D={"My Address":"Мой адрес",Coins:"Монеты","Convert coins":"Конвертация","Total balance":"Общий баланс","Available balance":"Доступный баланс","Copy address":"Скопировать адрес","Address copied":"Адрес скопирован","Show QR":"Показать QR","Send to people":"Отправить людям",Home:"Главная","My Wallet":"Кошелек",Send:"Отправить",Request:"Запросы","Make unbond":"Отозвать","Сontact list":"Список контактов",Profile:"Профиль",Settings:"Настройки",Exit:"Выход",Transactions:"Переводы","Scan QR Code":"Сканировать QR Code",Wallet:"Кошелек",Wallets:"Кошельки","Add wallet":"Добавить кошелек",Observers:"Наблюдатели","Add observer":"Добавить наблюдателя","Remove observer":"Удалить наблюдателя","Remove observer text":"Прекратить наблюдение за этим кошельком?","Current wallet":"Текущий кошелек","Сhoose active wallet":"Выберите активный кошелек","Share address":"Поделиться адресом","Wallet settings":"Настройки кошелька","Change name":"Изменить название",Save:"Сохранить","Start using":"Начать пользоваться","Now this is your new wallet":"Теперь это ваш новый кошелек",Mnemonic:"Мнемоник",Balance:"Баланс",Delegations:"Делегировано","No delegations":"Нет делегирований","Logout this wallet":"Выйти из этого кошелька","Data about wallet will be deleted":"Все данные о кошельке будут удалены","This wallet already exists":"Этот кошелек уже есть","Remove wallet text":"Удалив кошелек, вы потеряете доступ к нему. Убедитесь что сохранили сид фразу для восстановления доступа","Remove all wallets text":"Удалив все кошельки, вы потеряете доступы к ним. Убедитесь что сохранили сид фразы всех кошельков для восстановления доступа","Remove wallet":"Удалить кошелек","Remove all wallets":"Удалить все кошельки",Attention:"Внимание","No results":"Нет результатов",Optional:"Не обязательно",Address:"Адреса",Name:"Имя",Title:"Название","Mx address or Mp public key":"Mx адрес или Mp публичный ключ","Mx address":"Mx адрес","Address invalid":"Адрес недействителен",Validators:"Валидаторы",Delegate:"Делегировать","Delegate dialog":"делегируете","Send dialog":"отправляете","Add message":"Добавить сообщение",Message:"Сообщение","Please use maximum 1024 characters":"Пожалуйста используйте не более 1024 символов",Convert:"Конвертация",Exchange:"Обменять",Get:"Получить","Сhoose coin":"Выбрать монету",Amount:"Количество","Coin you have":"Монета у вас","Coin you want":"Желаемая монета","Not enough":"Недостаточно","Transaction fee":"Комиссия сети","Transaction successful":"Транзакция успешна","You will pay":"Вы должны заплатить","You will get":"Вы получите","Youre Exchange":"Вы меняете","You are":"Вы",to:"на",Cancel:"Отменить",Accept:"Подтвердить","Field is required":"Поле обязательно","Сhoose different coins":"Выберите разные монеты","for transaction fee":"для оплаты комиссии",General:"Основные",Interface:"Интерфейс",Support:"Техподдержка","Show seed phrase":"Показать сид фразу","Keep it secret":"Сохраните это в секрете","Change language":"Сменить язык",Available:"Доступны","Choose a language":"Выберите язык","Copy phrase":"Скопировать фразу","Save seed phrase text":"Сохраните эту фразу на случай, если вы планируете использовать этот адрес в будущем.","Seed phrase copied":"Cид фраза скопирована","Share wallet":"Поделиться кошельком",Share:"Поделиться","Send wallet as a link":"Отправить кошелек как ссылку","Link to wallet is ready":"Ссылка на кошелек готова","Link copied to your clipboard":"Ссылка скопирована в ваш буфер обмена","Move menu":"Переместить меню","Logout app":"Выйти из приложения","All data will be deleted from this device":"Все данные будут удалены с этого устройства","You are not registered in the Authenticator":"Вы не зарегистрированы в Authenticator","Authenticator Registration text":"Регистрация бесплатна, но вы должны иметь на своем балансе не менее 0,01 bip для оплаты комиссии сети","Sign in":"Зарегистрироваться","No requests":"Нет запросов",Apps:"Приложения",Services:"Сервисы",Contacts:"Контакты",Profiles:"Профили",Search:"Поиск","New contact":"Новый контакт","Add new contact":"Добавить новый контакт","No contacts found":"Контакты не найдены","Add first contact":"Добавить первый контакт","Contact added":"Контакт добавлен","You dont have any saved contacts":"У вас не сохранено ни одного контакта","This contact already exists":"Этот контакт уже есть","Remove contact":"Удалить контакт",Remove:"Удалить",Close:"Закрыть",Copy:"Скопировать","Would you like to remove":"Вы хотите удалить","from your contact list?":"из вашего списка контактов?",Hello:"Привет",lucky:"счастливчик","Your friend":"Твой друг","sent you":"отправил тебе","What is it":"Что это","With this you can":"С помощью этого ты можешь","or send to someone else":"или отправить кому-то еще",Soon:"Скоро"},I={"en-us":P,ru:D},M=function(e){var t=e.app,n=e.Vue;n.use(k["a"]),t.i18n=new k["a"]({locale:"en-us",fallbackLocale:"en-us",messages:I}),R=t.i18n},j=function(){return{rightMenu:!1,language:"en-us",dataUpdateDate:null,menu:"header"}},F=j(),B={},G={RESET_APP:function(e){Object.assign(e,j())},SET_MENU:function(e,t){e.rightMenu=t},SET_UPDATE_DATE:function(e,t){e.dataUpdateDate=t},SET_MAIN_MENU:function(e,t){e.menu=t},SET_LANG:function(e,t){R.locale=t,e.language=t}},W={},H={state:F,getters:B,mutations:G,actions:W},U=(n("7514"),n("7f7f"),n("ed08")),V=n("bc3a"),Y=n.n(V),K=function(){return{scoringApi:"https://minter-scoring.space/api/",explorerApi:"https://explorer-api.minter.network/api/v1/",balance:null,currency:null,coins:null,delegations:null,delegationsTotal:null,validators:null}},q=K(),Q={filterValidator:function(e){return function(t){var n=e.validators.filter((function(e){return!!e.meta.name&&e.meta.name.toLowerCase().indexOf(t.toLowerCase())>-1}));return n.map((function(e){return{address:e.public_key,icon:e.meta.icon_url,title:e.meta.name}}))}},findValidator:function(e){return function(t){return e.validators.find((function(e){return e.public_key===t}))}},balanceSum:function(e){return Object(U["d"])(e.balance.available_balance_sum,5)},balanceSelect:function(e){return e.balance.balances.map((function(e){return{label:"<b>".concat(e.coin,"</b> (").concat(Object(U["d"])(e.amount,5),")"),value:e.coin,amount:e.amount}}))},balanceObj:function(e){var t={};return e.balance.balances.forEach((function(e){t[e.coin]=e.amount})),t},coinsSelect:function(e){return e.coins.map((function(e){return{label:"<b>".concat(e.symbol,"</b> (crr: ").concat(e.crr,")"),value:e.symbol,reserve:e.reserveBalance,crr:e.crr,volume:e.volume}}))},coinsInfo:function(e){var t={};return e.coins.forEach((function(e){t[e.symbol]={crr:e.crr,name:e.name,reserve:e.reserveBalance,volume:e.volume}})),t},delegationsGroup:function(e){return e.delegations.reduce((function(e,t){return(e[t.validator_meta.name]=e[t.validator_meta.name]||[]).push(t),e}),{})},validatorsSelect:function(e){var t=[];return e.validators&&e.validators.length&&(e.validators.forEach((function(e){2===e.status&&e.part&&e.meta.name&&t.push({label:e.meta.name,value:e.public_key,desc:e.meta.description,icon:e.meta.icon_url,part:e.part})})),t.sort((function(e,t){return parseFloat(e.part)<parseFloat(t.part)?1:parseFloat(e.part)>parseFloat(t.part)?-1:0}))),t}},$={RESET_API:function(e){Object.assign(e,K())},SET_BALANCE:function(e,t){e.balance=t},SET_COINS:function(e,t){e.coins=t},SET_DELEGATION:function(e,t){e.delegations=t.coins,e.delegationsTotal=t.total},SET_VALIDATORS:function(e,t){e.validators=t},SET_TRANSACTION:function(e,t){e.transactions=t},SET_CURRENCY:function(e,t){e.currency=t}},z={FETCH_BALANCE:function(){var e=s()(r.a.mark((function e(t,n){var a,o,s;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=n||t.rootState.wallet.address,e.next=4,Y.a.get("".concat(q.explorerApi,"addresses/").concat(a,"?withSum=true"));case 4:return o=e.sent,s=o.data,n&&n.length||t.commit("SET_BALANCE",s.data),e.abrupt("return",s.data);case 10:e.prev=10,e.t0=e["catch"](0),console.log("SET_BALANCE",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));function t(t,n){return e.apply(this,arguments)}return t}(),FETCH_DELEGATION:function(){var e=s()(r.a.mark((function e(t,n){var a,o,s;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=n||t.rootState.wallet.address,e.next=4,Y.a.get("".concat(q.explorerApi,"addresses/").concat(a,"/delegations"));case 4:return o=e.sent,s=o.data,n&&n.length||t.commit("SET_DELEGATION",{coins:s.data,total:s.meta.additional.total_delegated_bip_value}),e.abrupt("return",s);case 10:e.prev=10,e.t0=e["catch"](0),console.log("SET_DELEGATION",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));function t(t,n){return e.apply(this,arguments)}return t}(),FETCH_COINS:function(){var e=s()(r.a.mark((function e(t,n){var a,o,s,i;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.a.get("".concat(q.explorerApi,"coins"));case 3:a=e.sent,o=a.data,t.commit("SET_COINS",o.data),e.next=15;break;case 8:return e.prev=8,e.t0=e["catch"](0),e.next=12,Y.a.get("https://api.charity.cloudp.group/coins");case 12:s=e.sent,i=s.data,t.commit("SET_COINS",i);case 15:case"end":return e.stop()}}),e,null,[[0,8]])})));function t(t,n){return e.apply(this,arguments)}return t}(),FETCH_VALIDATORS:function(){var e=s()(r.a.mark((function e(t,n){var a,o;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Y.a.get("".concat(q.explorerApi,"validators"));case 2:a=e.sent,o=a.data,t.commit("SET_VALIDATORS",o.data);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GET_VALIDATOR:function(){var e=s()(r.a.mark((function e(t,n){var a,o;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Y.a.get("".concat(q.explorerApi,"validators/").concat(n));case 2:return a=e.sent,o=a.data,e.abrupt("return",o.data);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GET_CURRENCY:function(){var e=s()(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.a.get("https://api.coingecko.com/api/v3/simple/price?ids=bip&vs_currencies=usd");case 3:n=e.sent,a=n.data,t.commit("SET_CURRENCY",a.bip),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));function t(t){return e.apply(this,arguments)}return t}(),FETCH_TRANSACTION:function(){var e=s()(r.a.mark((function e(t,n){var a,o;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Y.a.get("".concat(q.explorerApi,"addresses/").concat(n,"/transactions"));case 2:return a=e.sent,o=a.data,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},J={state:q,getters:Q,mutations:$,actions:z},X=(n("551c"),n("6b54"),n("20d6"),n("b862")),Z=n("9dcd"),ee=n.n(Z),te=function(){return{wallets:[],observer:[],address:null,privateKey:null,mnemonic:null,minterGate:null,key:null,nonce:null,_id:null}},ne=te(),ae={isLogin:function(e){return!!e.privateKey&&!!e.address&&!!e.address.length},findWallet:function(e){return function(t){return e.wallets.find((function(e){return e.address===t}))}},walletsSelect:function(e){return e.wallets.map((function(e){return{label:"<b>".concat(e.title,"</b>"),value:e.address,caption:Object(U["e"])(e.address,8),icon:e.icon,title:e.title,privateKey:e.privateKey,mnemonic:e.mnemonic,address:e.address,balance:e.balance?Object(U["d"])(e.balance,2,!0):null}}))},observerSelect:function(e){return e.observer.map((function(e){return{label:"<b>".concat(e.title,"</b>"),value:e.address,caption:Object(U["e"])(e.address,8),icon:e.icon,title:e.title,address:e.address,balance:e.balance?Object(U["d"])(e.balance,2,!0):null}}))}},re={RESET_WALLET:function(e){Object.assign(e,te())},SAVE_WALLET:function(e,t){var n={title:t.title||"",icon:t.icon||"",address:t.address,privateKey:t.privateKey,mnemonic:t.mnemonic};e.wallets.push(n),e.address=n.address,e.privateKey=n.privateKey,e.mnemonic=n.mnemonic},SAVE_OBSERVER:function(e,t){e.observer.push(t)},SET_WALLET:function(e,t){var n=e.wallets.findIndex((function(e){return e.address===t}));e.address=e.wallets[n].address,e.privateKey=e.wallets[n].privateKey,e.mnemonic=e.wallets[n].mnemonic},REMOVE_OBSERVER:function(e,t){var n=e.observer.findIndex((function(e){return e.address===t}));e.observer.splice(n,1)},REMOVE_WALLET:function(e,t){var n=e.wallets.findIndex((function(e){return e.address===t}));e.wallets.splice(n,1)},CHANGE_WALLET:function(e,t){var n=e.wallets.findIndex((function(e){return e.address===t}));e.wallets[n]=t},CHANGE_NAME_WALLET:function(e,t){if(t.isObserve){console.log(e.observer,t.address);var n=e.observer.findIndex((function(e){return e.address===t.address}));console.log(n,e.observer,t.title),e.observer[n].title=t.title}else{var a=e.wallets.findIndex((function(e){return e.address===t.address}));e.wallets[a].title=t.title}},SAVE_GATE:function(e){e.minterGate=new X["a"]({apiType:"gate",baseURL:"https://gate-api.minter.network/api/v1/"})},SET_SENDING:function(e,t){t?d["a"].show({QSpinnerFacebook:O["a"],spinnerColor:"white",spinnerSize:120,backgroundColor:"indigo-10",message:"Transaction is being sent, please wait",messageColor:"white"}):d["a"].hide()},SET_WALLET_BALANCE:function(e,t){var n=e.wallets.findIndex((function(e){return e.address===t.address}));if(-1!==n)e.wallets[n].balance=t.balance;else{var a=e.observer.findIndex((function(e){return e.address===t.address}));-1!==a&&(e.observer[a].balance=t.balance)}}},oe={FETCH_BALANCE_ADDRESS:function(){var e=s()(r.a.mark((function e(t,n){var a,o;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Y.a.get("".concat(t.rootState.api.explorerApi,"addresses/").concat(n,"?withSum=true"));case 2:return a=e.sent,o=a.data,t.commit("SET_WALLET_BALANCE",{address:n,balance:o.data.available_balance_sum}),e.abrupt("return",o.data);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),FETCH_DELEGATIONS_ADDRESS:function(){var e=s()(r.a.mark((function e(t,n){var a,o;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Y.a.get("".concat(t.rootState.api.explorerApi,"addresses/").concat(n,"/delegations"));case 2:return a=e.sent,o=a.data,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GET_COMMISSION:function(e,t){var n={chainId:1,nonce:99999,type:X["b"][t.type],data:t.data,gasCoin:t.gasCoin||"BIP",payload:t.payload||""},a=Object(X["d"])(n).serialize().toString("hex");return new Promise((function(t,n){e.state.minterGate.estimateTxCommission({transaction:a}).then((function(e){t(ee()(e).div(1e18).toString())})).catch((function(e){console.log(e),n(e.response.data)}))}))},SENDER:function(e,t){e.commit("SET_SENDING",!0);var n={chainId:1,type:X["b"][t.type.toUpperCase()],data:t.data,gasCoin:t.gasCoin||"BIP",payload:t.payload||""};return new Promise((function(a,r){e.state.minterGate.postTx(n,{privateKey:e.state.privateKey}).then((function(n){console.log(t.type+" created: "+n),a(n),e.commit("SET_SENDING",!1)})).catch((function(t){console.log(t),e.commit("SET_SENDING",!1),r(t.response&&t.response.data?t.response.data.error.message:t.response.error.message)}))}))}},se={state:ne,getters:ae,mutations:re,actions:oe},ie=function(){return{authDB:{}}},ce=ie(),le={getAuthorized:function(e){var t={};for(var n in e.authDB)"blocked"!==t[n]&&(t[n]=e.authDB[n]);return t},getBlocked:function(e){var t={};for(var n in e.authDB)"blocked"===t[n]&&(t[n]=e.authDB[n]);return t}},ue={RESET_APP:function(e){Object.assign(e,ie())},SAVE_AUTH:function(e,t){e.authDB[t.domen]={nonce:t.nonce,name:t.domen}},UPDATE_AUTH:function(e,t){var n={};for(var a in t)n[a]={nonce:t[a],name:a};e.authDB=n}},de={},pe={state:ce,getters:le,mutations:ue,actions:de},fe=function(){return{minterscanApi:"https://minterscan.pro/",contacts:[],profiles:[],profilesUpdateDate:null}},he=fe(),me={filterContacts:function(e){return function(t){return e.contacts.filter((function(e){return e.title&&e.title.toLowerCase().indexOf(t.toLowerCase())>-1}))}},findContact:function(e){return function(t){return e.contacts.find((function(e){return e.address&&e.address===t}))}},filterProfiles:function(e){return function(t){return e.profiles.filter((function(e){return e.title&&e.title.toLowerCase().indexOf(t.toLowerCase())>-1}))}},findProfile:function(e){return function(t){return e.profiles.find((function(e){return e.address&&e.address===t}))}},findUser:function(e,t,n){return function(t){if("Mx"===t.substring(0,2)&&42===t.length){var a=e.contacts.find((function(e){return e.address&&e.address===t}));if(a&&a.title&&""!==a.title)return a;var r=e.profiles.find((function(e){return e.address&&e.address===t}));if(r&&r.title)return r;var o=n.wallet.wallets.find((function(e){return e.address===t}));return o&&o.title?(o.caption=t.substr(0,6)+"..."+t.substr(-6),o):{title:t.substr(0,6)+"..."+t.substr(-6),address:t,caption:"Profile not found",icon:null}}return null}}},ve={RESET_CONTACTS:function(e){Object.assign(e,fe())},REMOVE_CONTACT:function(e,t){var n=e.contacts.findIndex((function(e){return e.address===t}));e.contacts.splice(n,1)},ADD_CONTACT:function(e,t){e.contacts.push(t)},SET_PROFILES:function(e,t){e.profiles=t}},be={NEW_CONTACT:function(e,t){return new Promise((function(n,a){var r=e.state.contacts.filter((function(e){return e.address.toLowerCase()===t.address.toLowerCase()}));r.length?a(r):n(t)}))},FETCH_ALL_PROFILES:function(){var e=s()(r.a.mark((function e(t,n){var a,o,s,i;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.a.get("".concat(he.minterscanApi,"profiles"));case 3:a=e.sent,o=a.data,t.commit("SET_PROFILES",o),e.next=15;break;case 8:return e.prev=8,e.t0=e["catch"](0),e.next=12,Y.a.get("https://api.charity.cloudp.group/mscanprofiles");case 12:s=e.sent,i=s.data,t.commit("SET_PROFILES",i);case 15:case"end":return e.stop()}}),e,null,[[0,8]])})));function t(t,n){return e.apply(this,arguments)}return t}(),GET_PROFILE:function(){var e=s()(r.a.mark((function e(t,n){var a,o;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.a.get("".concat(he.minterscanApi,"profiles/").concat(n));case 3:return a=e.sent,o=a.data,e.abrupt("return",o);case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));function t(t,n){return e.apply(this,arguments)}return t}()},ge={state:he,getters:me,mutations:ve,actions:be},we=n("0e44");i["a"].use(b["a"]);var Se=function(){var e=new b["a"].Store({modules:{app:H,api:J,wallet:se,auth:pe,contacts:ge},plugins:[Object(we["a"])()],strict:!1});return e},ye=n("8c4f"),Ee=[{path:"/start",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"cee8"))},props:!0},{path:"/wallet/:obsAddress?",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"8e31"))},children:[{path:"",component:function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"dd40"))},props:!0}]},{path:"/",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"8e31"))},children:[{path:"",component:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"8b24"))}},{path:"/home",redirect:"/"},{path:"send",name:"send",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"1667"))},props:!0},{path:"qr-code",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"9a1b"))}},{path:"requests",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"d2ae"))}},{path:"convert",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"f1da"))}},{path:"setting",component:function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,"d508"))}},{path:"setting/private",component:function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,"d1f8"))}},{path:"services",component:function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"bb33"))}},{path:"authenticator",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"3066"))}},{path:"contacts",component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"7ca8"))}},{path:"transactions",component:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"febe"))}},{path:"soon",component:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"bf05"))}}]}];Ee.push({path:"*",redirect:"/"});var Ae=Ee;i["a"].use(ye["a"]);var Ce=function(){var e=new ye["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:Ae,mode:"hash",base:""});return e},Te=function(){return xe.apply(this,arguments)};function xe(){return xe=s()(r.a.mark((function e(){var t,n,a;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof Se){e.next=6;break}return e.next=3,Se({Vue:i["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=Se;case 7:if(t=e.t0,"function"!==typeof Ce){e.next=14;break}return e.next=11,Ce({Vue:i["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=Ce;case 15:return n=e.t1,t.$router=n,a={el:"#q-app",router:n,store:t,render:function(e){return e(N)}},e.abrupt("return",{app:a,store:t,router:n});case 19:case"end":return e.stop()}}),e)}))),xe.apply(this,arguments)}var _e=n("9483");Object(_e["a"])("service-worker.js",{ready:function(){0},registered:function(){0},cached:function(){0},updatefound:function(){0},updated:function(){u["a"].create({message:"App update is available",icon:"cloud_download",closeBtn:"Update",timeout:1e4,onDismiss:function(){location.reload(!0)}})},offline:function(){0},error:function(){0}});var Oe=n("8343"),Le=n("691a");function Ne(){return Re.apply(this,arguments)}function Re(){return Re=s()(r.a.mark((function e(){var t,n,a,o,s,c,l,u,d;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Te();case 2:t=e.sent,n=t.app,a=t.store,o=t.router,s=!0,c=function(e){s=!1,window.location.href=e},l=window.location.href.replace(window.location.origin,""),u=[M,void 0,void 0],d=0;case 11:if(!(!0===s&&d<u.length)){e.next=29;break}if("function"===typeof u[d]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,u[d]({app:n,router:o,store:a,Vue:i["a"],ssrContext:null,redirect:c,urlPath:l});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:d++,e.next=11;break;case 29:if(!1!==s){e.next=31;break}return e.abrupt("return");case 31:new i["a"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),Re.apply(this,arguments)}i["a"].prototype.$axios=Y.a.create({baseURL:"/",headers:{"Cache-Control":"no-cache"},adapter:Object(Oe["a"])(Object(Le["a"])(Y.a.defaults.adapter,{threshold:1500}))}),u["a"].setDefaults({position:"top",timeout:2500,textColor:"white",actions:[{icon:"close",color:"white"}]}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&n.e(0).then(n.t.bind(null,"a0db",7)),Ne()},3:function(e,t){},4:function(e,t){},"7e6d":function(e,t,n){},ed08:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"f",(function(){return d}));n("a481"),n("6b54"),n("06db"),n("28a5"),n("34ef"),n("af56");var a=n("9dcd"),r=n.n(a);function o(e,t){return parseFloat(parseFloat(e).toFixed(t))}function s(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),t.join(".")}function i(e,t,n){var a=r()(e).round(t,3).toString(),o=a.split(".");return o[0]=o[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),o[1]?(o[1]=n?'<span class="pretty__min">'+o[1]+"</span>":o[1],o.join(".")):o[0]}var c=function(e,t){return e.substr(0,t)+"..."+e.substr(-1*t)},l=function(e){return!!e&&("Mx"===e.substring(0,2)&&42===e.length?"Mx":"Mp"===e.substring(0,2)&&66===e.length&&"Mp")};var u={A:1,B:7,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:1,K:2,L:3,M:4,N:5,O:6,P:7,Q:8,R:9,S:1,T:2,U:3,V:4,W:5,X:6,Y:7,Z:8};function d(e){var t=.359*e.replace(/./gi,(function(e){return u[e.toUpperCase()]||e}));return"hsla("+~~t+",80%,45%,1)"}}});