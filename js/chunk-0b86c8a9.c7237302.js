(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b86c8a9"],{6630:function(t,e,s){"use strict";var a=s("e9c7"),i=s.n(a);i.a},"82e6":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"members-wrapper"},[s("div",{staticClass:"level-wrapper"},[s("div",{staticClass:"tit"},[t._v(t._s(t.$t("Activation fee")))]),s("div",{staticClass:"valus underline"},[t._v("$ "+t._s(t.data.active_fee))]),s("div",{staticClass:"valus valus2"},[t._v("ETH "+t._s(t.eth_value))])]),s("button",{class:{bns:!0,disable:t.has_user},attrs:{disabled:t.has_user},on:{click:function(e){return t.beginActive()}}},[t._v(" "+t._s(t.$t("Confirm activation"))+" ")])])},i=[],n=s("2f62"),r={data(){return{loading:null,data:{},gas:0,gasPrice:0,has_user:!0}},computed:{...Object(n["d"])(["web3","contracts"]),...Object(n["d"])("common",["balances","tokens","identity"]),token(){return this.tokens.find(t=>"ETH"==t.name)},gas_fee(){var t=parseInt(this.gas)*parseInt(this.gasPrice),e=this.web3.utils.fromWei(t.toString(),"ether");return parseFloat(e).toFixed(6)},eth_amount(){var t=this.tokens.find(t=>"ETH"==t.name);if(null==t)return"0.00000";var e=(parseFloat(this.data.active_fee)+.1)/t.price;return e+=parseFloat(this.gas_fee),parseFloat(e*10**t.decimals).toString()},eth_value(){var t=this.tokens.find(t=>"ETH"==t.name);return null==t||void 0==this.data.active_fee?"0.00000":parseFloat((parseFloat(this.data.active_fee)+.1)/parseFloat(t.price)).toFixed(6)}},watch:{"contracts.bank":{handler(t){this.initData(),this.getUser()}}},mounted(){this.$store.commit("website/SET_PAGE_TITLE",this.$t("Activate user")),this.contracts.bank instanceof Object&&(this.initData(),this.getUser())},beforeDestroy(){null!=this.loading&&this.loading.clear()},methods:{async initData(){var t=this.$toast.loading({forbidClick:!0,duration:0});this.axios.get("/v1/site/active").then(e=>{t.clear(),1==e.data.success?(this.data=e.data,null!=e.data.tx&&(this.loading=this.$toast.loading({message:this.$t("Confirming activation"),forbidClick:!1,duration:0}),this.receipt(e.data.tx))):this.$toast(e.data.message)}).catch(e=>{t.clear()})},async getUser(){this.contracts.bank.methods.getUser(this.web3.eth.defaultAccount).call((t,e)=>{t||("0x0000000000000000000000000000000000000000"==e.id?(this.has_user=!1,this.getGas(),this.getGasPrice()):this.$router.go(-1))}).catch(t=>{})},async getGasPrice(){this.web3.eth.getGasPrice().then(t=>{this.gasPrice=parseInt(t)<25e9?25e9:parseInt(t)})},async getGas(){this.web3.eth.getTransactionCount(this.web3.eth.defaultAccount).then(async t=>{var e=localStorage.getItem("__invite");this.web3.eth.estimateGas({nonce:t,to:this.contracts.bank._address,data:this.contracts.bank.methods.register(e).encodeABI()}).then(t=>{this.gas=parseInt(t)})},t=>{})},receipt(t){this.web3.eth.getTransactionReceipt(t).then(e=>{if(null!=e){this.loading.clear();var s=this.contracts.bank._address.toLowerCase(),a=e.to.toLowerCase();a==s?this.$dialog.alert({title:this.$t("Tips"),message:this.$t("Cannot be reactivated")}).then(t=>{this.$router.go(-1)}):this.$dialog.alert({title:this.$t("Tips"),message:this.$t("Please reactivate")})}else setTimeout(()=>{this.receipt(t)},1e3)})},beginActive(){this.tokens.find(t=>"ETH"==t.name);var t=this.eth_amount,e={from:this.web3.eth.defaultAccount,value:t},s=localStorage.getItem("__invite");if(null==s)return this.$toast(this.$t("The referrer does not exist, please revisit the address of your referrer"));this.$dialog.confirm({title:this.$t("Tips"),message:this.$t("This operation requires payment of Oraclize fee {num}{token}",{num:this.gas_fee,token:this.token.name})}).then(t=>{this.active(s,e)}).catch(t=>{})},active(t,e){e.value;var s=this.$toast.loading({message:this.$t("Being paid"),forbidClick:!0,duration:0});this.contracts.bank.methods.activeUser(t).send(e,(t,e)=>{t||(this.initData(),setTimeout(()=>{s.clear(),this.$dialog.alert({title:this.$t("Tips"),message:this.$t("Payment is successful, please wait for confirmation")}).then(t=>{this.$router.go(-1)})},1e3))}).on("receipt",t=>{this.initData()}).on("error",t=>{s.clear()})}}},o=r,c=(s("6630"),s("2877")),h=Object(c["a"])(o,a,i,!1,null,null,null);e["default"]=h.exports},e9c7:function(t,e,s){}}]);