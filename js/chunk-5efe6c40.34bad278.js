(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5efe6c40"],{"0547":function(t,e,a){"use strict";var i=a("a364"),s=a.n(i);s.a},"45bc":function(module,__webpack_exports__,__webpack_require__){"use strict";var vuex__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("2f62");let sleep=t=>new Promise(e=>setTimeout(e,t));__webpack_exports__["a"]={data(){return{keyword:"",contract:null,activeName:"0",timer_1:null,refreshing:!1,color:["#FF0000","#FFCC00","#22DD48","#09C7F7","#226DDD","#912BD5","#D52BB3","#C4C43C","#44A3BB","#F7F709","#11EE3D","#91766F","#808080","#7A1F56","#FF9999"],percentage:["30","20","50"],items:[],loading:!1,finished:!1,currentPage:1,actionsShow:!1,token_name:null,sort:null}},props:{stable:{type:Number,required:!1}},filters:{subAddress(t){return null==t||""==t||void 0==t||42!=t.length?"-":t.substring(0,6)+"......"+t.substring(t.length-5,t.length)}},computed:{...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["d"])(["web3","contracts"]),...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["d"])("common",["balances","config","tokens","identity"]),actions(){return[{name:this.$t("From big to small"),value:"-value"},{name:this.$t("From small to large"),value:"value"}]}},mounted(){this.timer_1=setInterval(async()=>{var t=this.$helper.cache.get("__liquidate_approve",!1);t&&(this.liquidateToken(t),this.$helper.cache.set("__liquidate_approve",null))},1e3)},beforeDestroy(){clearInterval(this.timer_1)},methods:{onRefresh(){this.finished=!1,this.loading=!0,this.items=[],this.onLoad()},onSort(t){this.actionsShow=!1,this.sort=t.value,this.items=[],this.onLoad()},onSearch(t){this.items=[],this.token_name=t,this.onLoad()},onCancel(){this.items=[],this.token_name=null,this.onLoad()},maxHandle(t,e){this.items[e]._repay_amount=t._amount},getStyle(t,e){let a=t,i=this.items[e]._pawn_from[t],s={width:i.percent,background:i.color};if(0!==a){let t=0;while(a>0){a--;let i=this.items[e]._pawn_from[a].percent;i=i.slice(0,i.length-1),t+=Math.abs(i)}s.left=Math.abs(t)+"%"}return s},submitLiquidate(t){if(parseFloat(t._repay_amount)>parseFloat(t.repayer_balance))return this.$toast(this.$(this.$t("Your balance is insufficient")));if(parseFloat(t._repay_amount)>parseFloat(t._amount))return this.$toast(this.$t("Excess liquidation amount"));if(parseFloat(t._repay_amount)<=0)return this.$toast(this.$t("Amount must be greater than zero"));var e=this.$toast.loading({forbidClick:!0,duration:0}),a=this.tokens.find(e=>e.name==t.token),i=t._repay_amount*10**a.decimals;this.axios.get("/v1/site/liquidate-lock",{params:{uid:t.uid,token:t.token,lid:t.id,amount:i}}).then(a=>{e.clear(),1==a.data.success?this.liquidate(t):(1==a.data.reload&&this.onRefresh(),this.$dialog.alert({title:this.$t("Tips"),message:a.data.message}))}).catch(t=>{e.clear()})},unlockRepay(t){this.$helper.cache.set("__repay_unlock",{params:{uid:t.uid,token:t.token}})},liquidate(item){if("ETH"==item.token)this.liquidateETH(item);else{var tokenName=item.token.toLowerCase();eval("this.contract = this.contracts."+tokenName),this.contract.methods.allowance(this.web3.eth.defaultAccount,this.contracts.funds._address).call((t,e)=>{var a=this.tokens.find(t=>t.name==item.token),i=e/10**a.decimals,s=item._repay_amount*10**a.decimals;i>=item._repay_amount?this.liquidateToken({token:a.token_1,amount:this.$helper.numToString(s),owner:item.uid,oid:item.id.toString()}):this.liquidateApprove(item)}).catch(t=>{this.unlockRepay(item)})}},liquidateETH(t){var e=this.tokens.find(e=>e.name==t.token),a=t._repay_amount*10**e.decimals,i={from:this.web3.eth.defaultAccount,value:a.toString()};this.contracts.bank.methods.liquidate(this.contracts.funds._address,t.uid,"0",t.id.toString()).send(i,(e,i)=>{e||(this.$helper.cache.set("__liquidate_tx",{params:{tokenAddress:this.contracts.funds._address,payer:this.web3.eth.defaultAccount,amount:a.toString(),oid:t.id.toString(),tx:i}}),setTimeout(()=>{this.onRefresh(),this.$toast(this.$t("Send successfully, please wait for confirmation"))},2e3))}).on("receipt",t=>{this.$toast(this.$t("Successful liquidation")),setTimeout(()=>{this.onRefresh()},2e3)}).on("error",e=>{this.unlockRepay(t)})},liquidateApprove(t){var e,a=this.tokens.find(e=>e.name==t.token),i=this.$helper.numToString(t._repay_amount*10**a.decimals),s={from:this.web3.eth.defaultAccount,value:0};this.contract.methods.approve(this.contracts.funds._address,i).send(s,(t,a)=>{t||(e=this.$toast.loading({message:this.$t("Quantity approval confirmation, please wait"),forbidClick:!0,duration:0}))}).on("receipt",s=>{e.clear(),this.$helper.cache.set("__liquidate_approve",{token:a.token_1,amount:i,owner:t.uid,oid:t.id.toString()})}).on("error",e=>{this.unlockRepay(t)})},async liquidateToken(t){var e={from:this.web3.eth.defaultAccount,value:0},a=t.token,i=this.$helper.numToString(t.amount);this.contracts.bank.methods.liquidate(a,t.owner,i,t.oid.toString()).send(e,(e,a)=>{e||(this.$helper.cache.set("__liquidate_tx",{params:{tokenAddress:t.token,payer:this.web3.eth.defaultAccount,amount:this.$helper.numToString(t.amount),oid:t.oid,tx:a}}),setTimeout(()=>{this.$toast(this.$t("Send successfully, please wait for confirmation")),this.onRefresh()},2e3))}).on("receipt",t=>{this.$toast(this.$t("Successful liquidation")),setTimeout(()=>{this.onRefresh()},2e3)}).on("error",e=>{this.unlockRepay({uid:t.owner,token:t.token})})},async getTokenBalance(t){while(void 0==this.contracts.bank||0==this.tokens.length)await sleep(1e3);var e;if("ETH"==t.token){e=await this.web3.eth.getBalance(this.web3.eth.defaultAccount);var a=this.web3.utils.fromWei(e,"ether");return parseFloat(a).toFixed(4)}var i=this.tokens.find(e=>e.name==t.token);return e=await this.contracts.bank.methods.balanceOf(i.token_1,this.web3.eth.defaultAccount).call(),(e/10**i.decimals).toFixed(2)},async onLoad(){this.refreshing&&(this.items=[],this.refreshing=!1),this.axios.get("/v1/site/liquidate",{params:{page:this.currentPage,perPage:10,stable:this.stable,sort:this.sort,"LiquidateSearch[token]":this.token_name}}).then(async t=>{for(let e of t.data.items)e.repayer_balance=await this.getTokenBalance(e),e._repay_amount=parseFloat(e._repay_amount)>parseFloat(e.repayer_balance)?e.repayer_balance:e._repay_amount;this.items=this.items.concat(t.data.items),this.loading=!1,this.currentPage>=t.data._meta.pageCount?this.finished=!0:this.currentPage++}).catch(t=>{this.loading=!1})}}}},7129:function(t,e,a){},"7be1":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAmCAYAAACyAQkgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVCOUU0MDQ4RjA1QzExRUE5N0VFREZFMzcyNDg4NjQ1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVCOUU0MDQ5RjA1QzExRUE5N0VFREZFMzcyNDg4NjQ1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUI5RTQwNDZGMDVDMTFFQTk3RUVERkUzNzI0ODg2NDUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUI5RTQwNDdGMDVDMTFFQTk3RUVERkUzNzI0ODg2NDUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6r1vttAAACJElEQVR42tRYMUvDQBhNQim4Ky2tWi246CTaWkXt5q6lStWiq2ilyS+ok5vF0U0RHV0VHEQqjoKLk+AqCEUX1/pOr3DUJrnLXdr0weOS3Jfk9d3dd1+qNxoNjQdf1TRPWB9YBL/BK9oqgaGpwyB4B56A5+ADvRY4oRY4w5xP0muBEjoLmm2um7QvMEJNj30dFboK5h368y79HRGqczpm0diuCSUiMxxxGdkpICN0WHBVk9ihbgglDsUF4uMy6cqr0Dmw7OG+Mr23Y0KdnHkCXzzeq1ToGpiz6bsBp8AJsGoTk6PP8FWo4eJIiTk+dHHV8FMoeYFTGfXKHH84xKVFp4CI0ISq7ZDJGgk/hBIHYgqFxkR+uM5TOKNonkdT49xSWfBU5Qu0dlXiqKX5B1PJ0MPNApplH4WugAUpoRAZUryAnFwNyThKhjzVAaEpN0NsFxPcHEXzCEYF61PRxdTEO60D3kQdNQVFyiLq5Kph4+Ziy3bIi+OWTxBRlGi6+oeQ4g+yfbAODoC7EpVZzXWOws11NBdad7EBXtoOPUSGfU7uIukq7DRHTVpPyqDuUjnxYLp1+hmMm0kFyf0U7Acj4JkCV5PtHLXoC2RwQHMnYUXyWRF2GhrUzazEKmWxxRwvKXge0ZRl05Oq/bxCd6d+RT+8qe1e/zxKbWp//2cGGUUy9Dta8LFHhI73gNAxIvS2B4Re/26hWPXbOBkJqEhSaj7/CDAA2+5qlDBSjycAAAAASUVORK5CYII="},"89fd":function(t,e,a){"use strict";var i=a("7129"),s=a.n(i);s.a},a364:function(t,e,a){},de7e:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"liquidation-wrapper"},[a("van-tabs",{attrs:{sticky:"","line-width":"50px"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tab",{attrs:{title:t.$t("All tokens")}},[a("all")],1),a("van-tab",{attrs:{title:t.$t("Stable tokens")}},[a("all",{attrs:{stable:1}})],1)],1)],1)},s=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"liquidation-wrapper-all"},[i("div",{staticClass:"content"},[i("div",{staticClass:"search-wrapper"},[i("van-search",{attrs:{placeholder:t.$t("Please enter the search token name"),"input-align":"center"},on:{search:t.onSearch,cancel:t.onCancel},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),i("van-button",{on:{click:function(e){t.actionsShow=!0}}},[t._v(t._s(t.$t("Sort")))])],1),i("div",{staticClass:"content-title"},[i("div",[t._v(t._s(t.$t("Address")))]),i("div",[t._v(t._s(t.$t("Health factor")))]),i("div",[t._v(t._s(t.$t("Debt payment")))])]),i("div",{staticClass:"content-list"},[i("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[i("van-list",{attrs:{finished:t.finished,"finished-text":t.$t("No more")},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[i("van-collapse",{attrs:{accordion:""},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.items,(function(e,s){return i("van-collapse-item",{key:s,attrs:{name:s},scopedSlots:t._u([{key:"title",fn:function(){return[i("div",{staticClass:"list"},[i("div",{staticClass:"head"},[i("div",[t._v(t._s(t._f("subAddress")(e.uid)))]),i("div",{staticClass:"green"},[t._v(t._s(e._health_factor))]),i("div",{staticClass:"moreText"},[i("p",{},[i("span",[t._v(t._s(e.token)+" ")]),i("a",[t._v(t._s(e._amount))])]),i("p",[t._v("USD "+t._s(e.value))])])])])]},proxy:!0},{key:"right-icon",fn:function(){return[i("div",{staticClass:"none"})]},proxy:!0}],null,!0)},[i("div",{staticClass:"body-wrapper"},[i("div",{staticClass:"flex allds"},[i("div",{staticClass:"name"},[t._v(t._s(t.$t("Total mortgage")))]),i("div",{staticClass:"moreText"},[i("p",{},[t._v(" USD "),i("a",[t._v(t._s(e._pawn_total_value))])])])]),i("div",{staticClass:"name"},[t._v(t._s(t.$t("Collateral composition")))]),i("div",{staticClass:"progree"},t._l(e._pawn_from,(function(e,a){return i("div",{directives:[{name:"tip",rawName:"v-tip",value:e.token+": "+e.nums+" "+e.percent,expression:"item.token + ': ' + item.nums + ' ' + item.percent"}],key:a,style:t.getStyle(a,s)})})),0),i("div",{staticClass:"name mtone"},[t._v(t._s(t.$t("Mortgage")))]),i("div",{staticClass:"flex panelone"},[i("div",{staticClass:"name"},[t._v(t._s(e.pawn_token))]),i("div",{staticClass:"moreText"},[i("p",{},[i("span",[t._v(t._s(e.pawn_token)+" ")]),i("a",[t._v(t._s(e._pawn_amount))])]),i("p",[t._v("$ "+t._s(e.pawn_value))]),i("p",[t._v(t._s(e._pawn_percent))])])]),i("div",{staticClass:"disabled-panel"},[i("van-field",{attrs:{center:"",clearable:"",label:t.$t("Amount"),type:"number",placeholder:t.$t("Please enter the amount")},scopedSlots:t._u([{key:"button",fn:function(){return[i("van-button",{attrs:{size:"small"},on:{click:function(a){return t.maxHandle(e,s)}}},[t._v("MAX")])]},proxy:!0}],null,!0),model:{value:e._repay_amount,callback:function(a){t.$set(e,"_repay_amount",a)},expression:"item._repay_amount"}})],1),i("div",{staticClass:"disabled-panel-info"},[i("div",[t._v(t._s(t.$t("Maximum payable debt")))]),i("div",[t._v(t._s(e.repayer_balance)+" "+t._s(e.token))])]),parseFloat(e._repay_amount)>parseFloat(e.repayer_balance)?i("div",{staticClass:"nomoney"},[i("img",{attrs:{src:a("7be1")}}),i("span",[t._v(t._s(t.$t("Your balance is insufficient")))])]):t._e(),parseFloat(e._repay_amount)>parseFloat(e._amount)?i("div",{staticClass:"nomoney"},[i("img",{attrs:{src:a("7be1")}}),i("span",[t._v(t._s(t.$t("Excess liquidation amount")))])]):t._e(),i("div",{staticClass:"flex panelone paneltwo"},[i("div",{staticClass:"name"},[i("p",[t._v(t._s(t.$t("You will receive")))]),i("p",[t._v(" ("+t._s(e._bonus_rate)+") "+t._s(t.$t("Liquidation bonus"))+" ")])]),i("div",{staticClass:"moreText"},[i("p",{staticClass:"equle"},[t._v(" "+t._s(e.pawn_token)+t._s(e._repay_bonus_amount)+" ")]),i("p",{staticClass:"equle"},[t._v("$"+t._s(e._repay_bonus_value))])])]),i("div",{staticClass:"btn",on:{click:function(a){return t.submitLiquidate(e)}}},[t._v(" "+t._s(t.$t("Liquidation"))+" ")])])])})),1)],1)],1)],1)]),i("van-action-sheet",{attrs:{actions:t.actions,"cancel-text":t.$t("cancel"),"close-on-click-action":""},on:{select:t.onSort},model:{value:t.actionsShow,callback:function(e){t.actionsShow=e},expression:"actionsShow"}})],1)},o=[],l=a("45bc"),r=l["a"],c=(a("89fd"),a("2877")),u=Object(c["a"])(r,n,o,!1,null,null,null),d=u.exports,h=a("2f62"),m={data(){return{active:0,isConcact:!1}},components:{all:d},computed:{...Object(h["d"])("i18n",["locale"])},watch:{locale(){this.initPage()}},mounted(){this.initPage()},methods:{initPage(){this.$store.commit("website/SET_PAGE_TITLE",this.$t("Liquidation"))}}},_=m,p=(a("0547"),Object(c["a"])(_,i,s,!1,null,null,null));e["default"]=p.exports}}]);