(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e17291c"],{1895:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"members-wrapper"},[e("div",{staticClass:"level-wrapper"},[e("div",{staticClass:"tit"},[t._v(t._s(t.$t("Subscription mining pool")))]),e("div",{staticClass:"valus underline"},[t._v("$ "+t._s(t.miner_price_value))]),e("div",{staticClass:"valus valus2"},[t._v("ETH "+t._s(t.miner_price_amount))])]),e("div",{staticClass:"bns",on:{click:function(i){return t.validateMiner()}}},[t._v(t._s(t.$t("Buy")))])])},a=[],n=e("2f62"),r={data(){return{has_tips:!0}},computed:{...Object(n["d"])("i18n",["locale"]),...Object(n["d"])(["web3","contracts"]),...Object(n["d"])("common",["identity","tokens","config"]),miner_price_value(){return 0==this.tokens.length||void 0==this.config?"0.00":this.config.pool_mining_price},miner_price_amount(){if(0==this.tokens.length)return"0.00";if(void 0==this.config)return"0.00";var t=this.tokens.find(t=>"ETH"==t.name);return parseFloat(this.miner_price_value/t.price).toFixed(6)}},watch:{locale(){this.initPage()},"identity.is_pool":{handler(t){if(1==t){if(0==this.has_tips)return;this.$dialog.alert({title:this.$t("Tips"),message:this.$t("You are already a mining pool, no need to repeat purchase")}).then(t=>{this.$router.go("-1")})}}}},mounted(){this.initPage()},methods:{initPage(){this.$store.commit("website/SET_PAGE_TITLE",this.$t("Subscription mining pool"))},validateMiner(){var t=this.$toast.loading({message:this.$t("Being paid"),forbidClick:!0,duration:0});this.axios.get("/v1/site/miner-validate",{params:{uid:this.web3.eth.defaultAccount,amount:this.miner_price_value}}).then(i=>{t.clear(),1==i.data.success?this.buyMiner():this.$dialog.alert({title:this.$t("Tips"),message:i.data.message}).then(t=>{this.$router.go(-1)})}).catch(i=>{t.clear()})},minerUnlock(){this.$helper.cache.set("__miner_unlock",{params:{uid:this.web3.eth.defaultAccount,token:""}})},buyMiner(){var t=this.tokens.find(t=>"ETH"==t.name),i=this.web3.utils.toWei(parseFloat(1.0005*this.config.pool_mining_price/t.price).toString(),"ether"),e={from:this.web3.eth.defaultAccount,value:i},s=this.$toast.loading({message:this.$t("Being paid"),forbidClick:!0,duration:0});this.contracts.bank.methods.buyMiner().send(e,(t,i)=>{t||(this.has_tips=!1,setTimeout(()=>{s.clear(),this.$root.initData(),this.disabled_mining=!0,this.$helper.cache.set("_disabled_mining",!0),this.$dialog.alert({title:this.$t("Tips"),message:this.$t("Payment is successful, please wait for confirmation")}).then(t=>{this.$router.go(-1)})},1e3))}).on("receipt",t=>{this.$root.initData(),this.disabled_mining=!0}).on("error",t=>{s.clear()})}}},o=r,c=(e("d418"),e("2877")),l=Object(c["a"])(o,s,a,!1,null,null,null);i["default"]=l.exports},"6eca":function(t,i,e){},d418:function(t,i,e){"use strict";var s=e("6eca"),a=e.n(s);a.a}}]);