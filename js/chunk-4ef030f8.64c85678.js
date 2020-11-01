(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ef030f8"],{6502:function(module,__webpack_exports__,__webpack_require__){"use strict";var vuex__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("2f62");__webpack_exports__["a"]={data(){return{loading:null,contract:Object,token_balance:"0.00",health_factor:"-",deposit_amount:"0.00",available_amount:"0.00",isNext:!1,deposit_type:"0",chooseIndex:0,token_amount:"0",loan_rate_items:[{label:"25%",value:.25},{label:"50%",value:.5},{label:"75%",value:.75},{label:"100%",value:1}],data:{graph:{one:{date:[],fixed:[],loan:[]},two:{date:[],deposit:[]},three:{date:[],used:[]}},rate:{deposit:{current:"0.00",average:"0.00",rate:"0.00"},loan:{current:"0.00",average:"0.00",rate:"0.00"},fixed:{current:"0.00",average:"0.00",rate:"0.00"}}},timer_1:null,timer_2:null}},computed:{...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["d"])(["web3","contracts"]),...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["d"])("common",["balances","config","tokens","identity"]),deposit_value(){return this.$helper.formatDecimals(this.token.price*this.deposit_amount,this.decimals)},token:{get(){return this.tokens.find(t=>t.id==this.$route.query.id)||!1},set(t){}},disable_aridrop(){return console.log("production"),!1},init_data(){return 0!=this.token&&null!=this.contracts.bank},decimals(){return 1==this.token.stable?2:4}},watch:{init_data:{handler(t){1==t&&this.initData()}}},async mounted(){1==this.init_data&&this.initData(),this.timer_1=setInterval(async()=>{var t=this.$helper.cache.get("__deposit_approve",!1);t&&(this.depositToken(t),this.$helper.cache.set("__deposit_approve",null))},1e3)},beforeDestroy(){this.token=!1,clearInterval(this.timer_1),null!=this.loading&&this.loading.clear()},methods:{airdropTest(){var contract,tokenName=this.token.name.toLowerCase();eval("contract = this.contracts."+tokenName);var options={from:this.web3.eth.defaultAccount,value:0};contract.methods.airdropTest().send(options,(t,e)=>{t||this.$toast("空投确认中，请等待")}).on("receipt",t=>{this.initData(),this.$toast("空投成功")})},lookheadthfn(t){1==t?this.$dialog.alert({title:this.$t("Loan-to-value ratio"),message:this.$t("The maximum borrowing capacity of a particular collateral. If the value of the collateral loan is 75%, then for every 1 ETH collateral pledged, the user will be able to borrow 0.75 ETH of the principal. The loan value is specified by mortgage and expressed as a percentage."),confirmButtonColor:"#4fa0fb"}):2==t?this.$dialog.alert({title:this.$t("Liquidation threshold"),message:this.$t("For example, if the mortgage settlement gate cloud is 80%, it means that when the value of the debt reaches 80% of the mortgage value, it will be liquidated."),confirmButtonColor:"#4fa0fb"}):this.$dialog.alert({title:this.$t("Clearing bills"),message:this.$t("When liquidation occurs, the liquidator will repay part or all of the outstanding amount on behalf of the borrower. In return, they can buy collateral at a discount and keep the difference as a reward!"),confirmButtonColor:"#4fa0fb"})},lookheadth(){this.$dialog.alert({title:this.$t("Health factor"),message:this.$t("The health factor represents the safety of your loan, the proportion of its subsidiary collateral and how much money you have borrowed. Replace it to remain above 1 to be liquidated."),confirmButtonColor:"#4fa0fb"})},async initData(){this.$store.commit("website/SET_PAGE_TITLE",`${this.token.name} ${this.$t("Overview of Reserves")}`),this.getDepositView(),this.getTokenBalance(),this.available(),this.getIdentity()},async getDepositView(){this.loading=this.$toast.loading({forbidClick:!0,duration:0}),this.axios.get("/v1/site/deposit-view",{params:{id:this.token.id}}).then(t=>{this.loading.clear(),this.data=t.data}).catch(t=>{this.loading.clear()})},async getIdentity(){this.axios.get("/v1/site/identity").then(t=>{null!=t.data&&0!=t.data.is_active||this.$dialog.alert({title:this.$t("Tips"),message:this.$t("Your account is not activated, please activate before depositing")}).then(t=>{this.$router.push("/governance")})})},async getHealthFactor(){null!=this.web3&&this.axios.get("/v1/site/health-factor",{params:{tokenName:this.token.name}}).then(t=>{this.health_factor=t.data})},async getTokenBalance(){if(this.deposit_type=0,null!=this.contracts.bank)if("ETH"==this.token.name){var t=await this.web3.eth.getBalance(this.web3.eth.defaultAccount),e=this.web3.utils.fromWei(t,"ether");this.token_amount=e,this.token_balance=this.$helper.formatDecimals(e,this.decimals),this.deposit_type=parseFloat(this.token_balance)>0?2:1,this.isNext=!1;var a=parseFloat(this.loan_rate_items[0].value*parseFloat(this.token_balance));this.deposit_amount=this.$helper.formatDecimals(a,this.decimals)}else this.contracts.bank.methods.balanceOf(this.token.token_1,this.web3.eth.defaultAccount).call((t,e)=>{if(!t&&null!=e){this.token_amount=e;var s=e/10**this.token.decimals;this.token_balance=this.$helper.formatDecimals(s,this.decimals),this.deposit_type=parseFloat(this.token_balance)>0?2:1,this.isNext=!1,a=parseFloat(this.loan_rate_items[0].value*parseFloat(this.token_balance)),this.deposit_amount=this.$helper.formatDecimals(a,this.decimals)}})},async available(){var t;if("ETH"==this.token.name){t=await this.web3.eth.getBalance(this.token.token_2);var e=this.web3.utils.fromWei(t,"ether");this.available_amount=this.$helper.formatDecimals(e,this.decimals)}else t=await this.contracts.bank.methods.balanceOf(this.token.token_1,this.token.token_2).call(),this.available_amount=this.$helper.formatDecimals(t/10**this.token.decimals,this.decimals)},next(){""!=this.price?this.isNext=!0:this.$toast(this.$t("Please enter the deposit amount"))},deposit(){if(parseFloat(this.deposit_amount)>parseFloat(this.token_balance))return this.$toast(this.$t("Your balance is insufficient"));if("ETH"==this.token.name)this.depositETH();else{var tokenName=this.token.name.toLowerCase();eval("this.contract = this.contracts."+tokenName),this.contract.methods.allowance(this.web3.eth.defaultAccount,this.contracts.funds._address).call((t,e)=>{var a=e/10**this.token.decimals;if(a>=this.deposit_amount){var s=this.deposit_amount*10**this.token.decimals;this.depositToken({token:this.token.token_1,amount:this.$helper.numToString(s)})}else this.depositApprove()})}},depositETH(){var t={from:this.web3.eth.defaultAccount,value:this.$helper.numToString(this.deposit_amount*10**18)},e=this.$toast.loading({message:this.$t("Being paid"),forbidClick:!0,duration:0});this.contracts.bank.methods.deposit(this.contracts.funds._address,"0").send(t,(t,a)=>{t||(this.$helper.cache.set("__deposit_tx",{params:{tokenAddress:this.contracts.funds._address,who:this.web3.eth.defaultAccount,amount:this.$helper.numToString(this.deposit_amount*10**18),tx:a}}),setTimeout(()=>{e.clear(),this.$toast(this.$t("Send successfully, please wait for confirmation")),setTimeout(()=>{this.$router.go(-1)},1e3)},1e3))}).on("receipt",t=>{this.$root.initData(),this.initData(),this.getTokenBalance(),this.$toast(this.$t("Successful deposit"))}).on("error",t=>{e.clear()})},depositApprove(){var amount=this.deposit_amount*10**this.token.decimals,tokenName=this.token.name.toLowerCase();amount=this.$helper.numToString(amount),eval("this.contract = this.contracts."+tokenName);var options={from:this.web3.eth.defaultAccount,value:0},toast=this.$toast.loading({message:this.$t("Quantity approval confirmation, please wait"),forbidClick:!0,duration:0});this.contract.methods.approve(this.contracts.funds._address,amount.toString()).send(options,(t,e)=>{}).on("receipt",t=>{toast.clear(),this.$helper.cache.set("__deposit_approve",{token:this.token.token_1,amount:amount.toString()})}).on("error",t=>{toast.clear()})},async depositToken(t){var e={from:this.web3.eth.defaultAccount,value:0},a=t.token,s=t.amount,i=this.$toast.loading({message:this.$t("Being paid"),forbidClick:!0,duration:0});this.contracts.bank.methods.deposit(a,s.toString()).send(e,(e,a)=>{e||(this.$helper.cache.set("__deposit_tx",{params:{tokenAddress:this.token.token_1,who:this.web3.eth.defaultAccount,amount:this.$helper.numToString(t.amount),tx:a}}),setTimeout(()=>{i.clear(),this.$toast(this.$t("Send successfully, please wait for confirmation")),setTimeout(()=>{this.$router.go(-1)},1e3)},1e3))}).on("receipt",t=>{this.$root.initData(),this.initData(),this.getHealthFactor(),this.getTokenBalance(),this.$toast(this.$t("Successful deposit"))}).on("error",t=>{i.clear()})},chooseTypeHandle(t){this.chooseIndex=t;var e=parseFloat(this.loan_rate_items[t].value*this.token_balance);this.deposit_amount=this.$helper.formatDecimals(e,this.decimals)},goBack(){this.$router.go(-1)},drawLineOne(){this.threemyChart||(this.threemyChart=this.$echarts.init(document.getElementById("myChartone")),this.threemyChart.setOption({xAxis:{type:"category",data:this.data.graph.two.date,axisLabel:{interval:0,rotate:40},axisLine:{lineStyle:{color:"#929293",fontSize:6}}},grid:{left:"10%",bottom:"10%",top:"10%",right:"5%"},yAxis:[{type:"value",axisLabel:{formatter:"{value}%"},axisLine:{lineStyle:{color:"#929293",fontSize:6}}}],series:[{data:this.data.graph.two.deposit,type:"line",smooth:!0,color:"#0078ff"}]}))}}}},a427:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"deposit-detail-wrapper"},[s("div",{staticClass:"header-wrapper flex"},[s("div",{staticClass:"flex_item"},[s("div",[s("div",{staticClass:"name"},[t._v(t._s(t.$t("You have deposited")))]),s("div",{staticClass:"price"},[t._v(t._s(t.data.deposit_balance_amount))])]),s("div",{staticClass:"extra"},[s("div",{staticClass:"extra-title"},[t._v(" "+t._s(t.$t("Health factor"))),s("img",{attrs:{src:a("d11b")},on:{click:t.lookheadth}})]),s("div",{staticClass:"price"},[t._v(t._s(t.data.health_factor))])])]),s("div",{staticClass:"flex_item"},[s("div",{staticClass:"name"},[t._v(t._s(t.$t("Your wallet balance")))]),s("div",{staticClass:"price"},[t._v(t._s(t.token_balance))])])]),1==t.deposit_type?[s("div",{staticClass:"info-title"},[t._v(t._s(t.$t("Your balance is zero")))]),s("div",{staticClass:"remark-info"},[s("p",[t._v(t._s(t.$t("Your token balance is 0",{token:t.token.name}))+"，")]),s("p",[t._v(" "+t._s(t.$t("Please transfer token to the wallet for deposit",{token:t.token.name}))+" ")])]),s("div",{staticClass:"btn-control"},[t.disable_aridrop?s("div",{staticClass:"confirmBtn",on:{click:function(e){return t.airdropTest()}}},[t._v(" "+t._s(t.$t("Aridrop"))+" ")]):t._e(),s("div",{staticClass:"confirmBtn",on:{click:function(e){return t.goBack()}}},[t._v(t._s(t.$t("Go back")))])])]:t._e(),2==t.deposit_type?[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isNext,expression:"!isNext"}]},[s("div",{staticClass:"info-title"},[t._v(" "+t._s(t.$t("How much do you want to deposit?"))+" ")]),s("div",{staticClass:"remark-info"},[s("p",[t._v(" "+t._s(t.$t("Here you can set the deposit amount, you can manually enter a specific"))+" ")]),s("p",[t._v(t._s(t.$t("Amount or use the percentage button below.")))])]),s("div",{staticClass:"input-wrapper"},[s("van-field",{attrs:{type:"number",placeholder:t.$t("Please enter the amount")},scopedSlots:t._u([{key:"extra",fn:function(){return[t._v(t._s(t.token.name))]},proxy:!0}],null,!1,10452152),model:{value:t.deposit_amount,callback:function(e){t.deposit_amount=e},expression:"deposit_amount"}})],1),s("div",{staticClass:"choose-type"},t._l(t.loan_rate_items,(function(e,a){return s("div",{key:a,class:a===t.chooseIndex?"active":"",on:{click:function(e){return t.chooseTypeHandle(a)}}},[t._v(" "+t._s(e.label)+" ")])})),0),s("div",{staticClass:"remark-info"},[t._v(" "+t._s(t.$t("You can deposit up to"))+" "+t._s(t.token_balance)+" "+t._s(t.token.name)+" ")]),s("div",{staticClass:"btn-control"},[s("div",{staticClass:"confirmBtn",on:{click:function(e){return t.next()}}},[t._v(t._s(t.$t("Continue")))]),s("div",{staticClass:"goBack",on:{click:function(e){return t.goBack()}}},[t._v(t._s(t.$t("Go back")))])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isNext,expression:"isNext"}]},[s("div",{staticClass:"info-title"},[t._v(t._s(t.$t("Deposit")))]),s("div",{staticClass:"remark-info"},[s("p",[t._v(t._s(t.$t("Your transaction details")))])]),s("div",{staticClass:"input-wrapper"},[s("div",{staticClass:"inpdd"},[s("div",{staticClass:"name"},[t._v(t._s(t.$t("Amount")))]),s("div",{staticClass:"price"},[s("div",{staticClass:"eth"},[t._v(t._s(t.deposit_amount)+" "+t._s(t.token.name))]),s("div",[t._v("$"+t._s(t.deposit_value))])])])]),s("div",{staticClass:"remark-info"},[t._v(" "+t._s(t.$t("You can deposit up to"))+" "+t._s(t.token_balance)+" "+t._s(t.token.name)+" ")]),s("div",{staticClass:"btn-control"},[s("div",{staticClass:"confirmBtn",on:{click:function(e){return t.deposit()}}},[t._v(t._s(t.$t("Deposit")))]),s("div",{staticClass:"goBack",on:{click:function(e){t.isNext=!1}}},[t._v(t._s(t.$t("Go back")))])])])]:t._e(),s("div",{staticClass:"panel-info"},[s("div",{staticClass:"panel-info-title"},[t._v(" "+t._s(t.token.name)+" "+t._s(t.$t("Overview of reserves"))+" ")]),s("div",{staticClass:"flex flexcenter"},[s("div",{staticClass:"name"},[t._v(t._s(t.$t("Utilization")))]),s("div",{staticClass:"value"},[t._v(t._s(t.data.rate_used))])]),s("div",{staticClass:"flex flexcenter"},[s("div",{staticClass:"name"},[t._v(t._s(t.$t("Available liquidity")))]),s("div",{staticClass:"value"},[t._v(t._s(t.available_amount)+" "+t._s(t.token.name))])]),s("div",{staticClass:"flex flexcenter"},[s("div",{staticClass:"name"},[t._v("Asset price")]),s("div",{staticClass:"value"},[t._v(t._s(t.token.price))])]),s("div",{staticClass:"flex flexcenter"},[s("div",{staticClass:"name"},[t._v(t._s(t.$t("Deposit APY (Annual Yield)")))]),s("div",{staticClass:"value"},[t._v(t._s(t.token._rate_deposit_year))])]),s("div",{staticClass:"flex flexcenter"},[s("div",{staticClass:"name"},[t._v(t._s(t.$t("Can be used as collateral")))]),s("div",{staticClass:"value green"},[t._v(t._s(t.token._pawn))])]),s("div",{staticClass:"flex flexcenter"},[s("div",{staticClass:"name"},[t._v(" "+t._s(t.$t("Maximum LTV"))+" "),s("img",{attrs:{src:a("d11b")},on:{click:function(e){return t.lookheadthfn("1")}}})]),s("div",{staticClass:"value"},[t._v(t._s(t.token._rate_loan))])]),s("div",{staticClass:"flex flexcenter"},[s("div",{staticClass:"name"},[t._v(" "+t._s(t.$t("Liquidation threshold"))+" "),s("img",{attrs:{src:a("d11b")},on:{click:function(e){return t.lookheadthfn("2")}}})]),s("div",{staticClass:"value"},[t._v(t._s(t.token._rate_liquidate))])]),s("div",{staticClass:"flex flexcenter"},[s("div",{staticClass:"name"},[t._v(" "+t._s(t.$t("Clearing bills"))+" "),s("img",{attrs:{src:a("d11b")},on:{click:function(e){return t.lookheadthfn("3")}}})]),s("div",{staticClass:"value"},[t._v(t._s(t.token._rate_bonus))])]),s("div",{staticClass:"flex flexcenter"},[s("div",{staticClass:"name"},[t._v(t._s(t.$t("Historical rate")))]),s("div",{staticClass:"value"},[s("span",{staticClass:"cirl"}),t._v(t._s(t.$t("Annualized"))+" ")])]),s("div",{style:{width:"100%",height:"270px"},attrs:{id:"myChartone"}})])],2)},i=[],o=a("6502"),n=o["a"],l=(a("ce1e"),a("2877")),r=Object(l["a"])(n,s,i,!1,null,null,null);e["default"]=r.exports},c52b:function(t,e,a){},ce1e:function(t,e,a){"use strict";var s=a("c52b"),i=a.n(s);i.a},d11b:function(t,e){t.exports="data:image/png;base64,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"}}]);