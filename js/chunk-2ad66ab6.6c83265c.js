(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ad66ab6"],{"37f9":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"index-wrapper"},[t._m(0),a("div",{staticClass:"title"},[t._v("PIKE PROTOCOL")]),a("div",{staticClass:"info"},[t._v(" "+t._s(t.$t("Current market size"))+" ")]),a("div",{staticClass:"price"},[t._v("$ "+t._s(t.totalDeposit))]),a("div",{staticClass:"list-wrapper"},[a("van-sticky",[a("div",{staticClass:"list-header"},[a("div",{staticClass:"w120"},[t._v(" "+t._s(t.$t("Assets"))+" ")]),a("div",{staticClass:"w140"},[t._v(" "+t._s(t.$t("Market size"))+" ")]),a("div",{staticClass:"flex_item"},[t._v(" "+t._s(t.$t("Deposit rate year"))+" ")]),a("div",{staticClass:"flex_item"},[a("p",{staticClass:"small"},[t._v(t._s(t.$t("Float rate")))]),a("p",[t._v(" "+t._s(t.$t("Loan annual rate"))+" ")])]),a("div",{staticClass:"w120"},[a("p",{staticClass:"small"},[t._v(t._s(t.$t("Fixed rate")))]),a("p",[t._v(" "+t._s(t.$t("Loan annual rate"))+" ")])])])]),t._l(t.tokens,(function(s,e){return a("div",{key:e,staticClass:"list-body",on:{click:function(a){return t.tokenView(s)}}},[a("div",{staticClass:"name w120"},[a("img",{staticClass:"biname",attrs:{src:s.img}})]),a("div",{staticClass:"w140 clasdds"},[t._v("$ "+t._s(s._deposit_total))]),a("div",{staticClass:"flex_item"},[a("p",{staticClass:"red"},[t._v(t._s(s._rate_deposit_year))]),a("p",{staticClass:"small"},[t._v(" Past 30D Avg ")]),a("p",{staticClass:"small smallt"},[t._v(" Past 30D Avg ")])]),a("div",{staticClass:"flex_item"},[a("p",{staticClass:"blue"},[t._v(t._s(s._rate_loan_year))]),a("p",{staticClass:"small"},[t._v(t._s(t.$t("Average of the past 30 days")))]),a("p",{staticClass:"small smallt"},[t._v(t._s(s._rate_loan_30day))])]),a("div",{staticClass:"green w120"},[t._v(t._s(s._rate_fixed))])])}))],2)])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:a("ede7")}})])}],l=a("2f62"),n={data(){return{tokens_1:[],tokens_2:[]}},computed:{...Object(l["d"])("common",["totalDeposit","tokens"]),...Object(l["d"])(["web3","contracts"])},watch:{tokens:{handler(t){t.length}}},mounted(){},methods:{async setTokens(){for(let s of this.tokens){var t=await this.getTokenBalance(s);s.token_balance=t,parseFloat(t)>0?this.tokens_1.push(s):this.tokens_2.push(s)}},async getTokenBalance(t){var s;if("ETH"==t.name){s=await this.web3.eth.getBalance(this.web3.eth.defaultAccount);var a=this.web3.utils.fromWei(s,"ether");return parseFloat(a).toFixed(2)}return s=await this.contracts.bank.methods.balanceOf(t.token_1,this.web3.eth.defaultAccount).call(),(s/10**t.decimals).toFixed(2)},tokenView(t){this.$router.push({path:"/prodetail",query:{id:t.id}})}}},c=n,r=(a("cdfa"),a("2877")),o=Object(r["a"])(c,e,i,!1,null,null,null);s["default"]=o.exports},c277:function(t,s,a){},cdfa:function(t,s,a){"use strict";var e=a("c277"),i=a.n(e);i.a}}]);