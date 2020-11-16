(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88584826"],{"240e":function(t,a,i){},"28a5":function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"extract-wrapper"},[i("div",{staticClass:"kong"}),i("div",{staticClass:"mnd"},[i("div",{staticClass:"tit"},[t._v(t._s(t.token.name)+" "+t._s(t.$t("Withdraw")))]),i("div",{staticClass:"input-wrapper"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.withdraw_amount,expression:"withdraw_amount",modifiers:{trim:!0}}],attrs:{placeholder:t.$t("Please enter the withdrawal amount"),type:"digit"},domProps:{value:t.withdraw_amount},on:{input:function(a){a.target.composing||(t.withdraw_amount=a.target.value.trim())},blur:function(a){return t.$forceUpdate()}}})]),i("div",{staticClass:"infos"},[t._v(" "+t._s(t.$t("Available Balance"))+" "+t._s(t.identity.bonus)+" "+t._s(t.token.name)+" ")])]),i("div",{staticClass:"bns",on:{click:function(a){return t.beginWithdraw()}}},[t._v(t._s(t.$t("Withdraw")))])])},s=[],n=i("2f62"),o={data(){return{withdraw_amount:"",gas_fee:"0.00"}},computed:{...Object(n["d"])("i18n",["locale"]),...Object(n["d"])(["web3","contracts"]),...Object(n["d"])("common",["balances","tokens","config","identity"]),token(){var t=this.tokens.find(t=>"ETH"==t.name);return null==t?{}:t}},watch:{locale(){this.initPage()},identity:{handler(t){this.withdraw_amount=t.bonus}},token(t){void 0!=t.name&&this.getGas()}},mounted(){this.initPage(),this.identity instanceof Object&&(this.withdraw_amount=this.identity.bonus),void 0!=this.token.name&&this.getGas()},methods:{initPage(){this.$store.commit("website/SET_PAGE_TITLE",this.$t("Withdraw"))},getGas(){var t=this.$toast.loading({forbidClick:!0,duration:0});this.axios.get("/v1/site/withdraw-gas",{params:{token:this.token.name}}).then(a=>{t.clear(),this.gas_fee=a.data.gas_fee}).catch(a=>{t.clear()})},beginWithdraw(){return""==this.withdraw_amount?this.$toast(this.$t("Please enter the withdrawal amount")):parseFloat(this.withdraw_amount)>parseFloat(this.identity.bonus)?this.$toast(`${this.$t("Available Balance")} ${this.identity.bonus} ETH`):parseFloat(this.withdraw_amount)<parseFloat(this.config.withdraw_min_bonus)?this.$toast(`${this.$t("Withdrawal cannot be lower than")} ${this.config.withdraw_min_bonus} ETH`):parseFloat(this.withdraw_amount)<0?this.$toast(this.$t("Amount must be greater than zero")):void this.$dialog.confirm({title:this.$t("Tips"),message:this.$t("This operation requires payment of Oraclize fee {num}{token}",{num:this.gas_fee,token:this.token.name})}).then(t=>{if(parseFloat(this.withdraw_amount)<parseFloat(this.gas_fee))return this.$toast(this.$t("Your balance is insufficient"));this.withdraw()}).catch(t=>{})},withdraw(){var t=this.$toast.loading({forbidClick:!0,duration:0});this.axios.post("/v1/chain/withdraw-bonus",{amount:this.withdraw_amount}).then(a=>{t.clear(),1==a.data.success&&this.$root.initData(),this.$dialog.alert({title:this.$t("Tips"),message:a.data.message})}).catch(a=>{t.clear()})}}},r=o,h=(i("aa92"),i("2877")),d=Object(h["a"])(r,e,s,!1,null,null,null);a["default"]=d.exports},aa92:function(t,a,i){"use strict";var e=i("240e"),s=i.n(e);s.a}}]);