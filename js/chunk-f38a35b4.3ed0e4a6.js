(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f38a35b4"],{1883:function(t,e,s){},30418:function(t,e,s){"use strict";s("9187")},"5d4f":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail-table"},[s("van-list",{attrs:{finished:t.finished,"finished-text":t.$t("No more")},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.items,(function(e,i){return s("div",{key:i,staticClass:"detail-list"},[s("div",{staticClass:"detail-thead alignflex flex"},[s("div",{staticClass:"oneb"},[t._v(t._s(t.$t("Amount")))]),s("div",{staticClass:"onea"},[t._v(t._s(t.$t("Status")))]),s("div",{staticClass:"onec"},[t._v(t._s(t.$t("Time")))]),s("div",{staticClass:"onec"},[t._v(t._s(t.$t("Details")))])]),s("div",{staticClass:"detail-tbody alignflex flex"},[s("div",{staticClass:"oneb"},[t._v(t._s(e.number))]),s("div",{staticClass:"onea"},[t._v(t._s(e.status))]),s("div",{staticClass:"onec"},[t._v(t._s(t._f("formatDatetime")(e.created_at)))]),s("div",{staticClass:"onec",staticStyle:{color:"blue"},on:{click:function(s){return t.etherscan(e)}}},[t._v(" etherscan ")])])])})),0)],1)},a=[],n=s("2f62"),c=s("c1df"),o=s.n(c),l={data(){return{active:0,loading:!1,finished:!1,currentPage:1,items:[]}},props:{field:{type:String,required:!0}},computed:{...Object(n["d"])("i18n",["locale"]),...Object(n["d"])(["web3","contracts"]),...Object(n["d"])("common",["balances","tokens","identity"])},filters:{formatDatetime(t){return o()(1e3*Number(t)).format("HH:mm MM/DD")}},watch:{locale:{handler(t){this.initPage(),this.onRefresh()}}},mounted(){this.initPage()},methods:{initPage(){},async etherscan(t){var e=await this.web3.eth.net.getId();3==e?window.open("https://ropsten.etherscan.io/tx/"+t.tx):1==e?window.open("https://cn.etherscan.com/tx/"+t.tx):this.$toast(this.$t("The current network does not support viewing"))},onRefresh(t){this.items=[],this.address=t,this.onLoad()},onLoad(){var t=this.$toast.loading({forbidClick:!0,duration:0}),e="/v1/site/withdraw-"+this.field;this.axios.get(e,{params:{page:this.currentPage,perPage:10,stable:this.stable}}).then(async e=>{this.items=this.items.concat(e.data.items),this.loading=!1,this.currentPage>=e.data._meta.pageCount?this.finished=!0:this.currentPage++,t.clear()}).catch(e=>{this.loading=!1,t.clear()})}}},r=l,d=(s("f751"),s("2877")),h=Object(d["a"])(r,i,a,!1,null,null,null);e["a"]=h.exports},9187:function(t,e,s){},ac01:function(t,e,s){"use strict";s("cbbc")},c3fb:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"assets-detail"},[s("div",{staticClass:"list-dd"},[s("div",{staticClass:"header-top flex alignflex"},[s("div",{staticClass:"dds"},[t._v(t._s(t.token.name))])]),s("div",{staticClass:"list-body flex alignflex"},[s("div",{staticClass:"flex_item"},[s("div",{staticClass:"md"},[t._v(t._s(t.$t("Withdrawalable")))]),s("div",{staticClass:"mdds"},[t._v(t._s(t.identity.bonus))])]),s("div",{staticClass:"flex_item"},[s("div",{staticClass:"md"},[t._v(t._s(t.$t("Convert"))+"（USD）")]),s("div",{staticClass:"mdds"},[t._v(t._s(t.withdraw_value))])])]),s("div",{staticClass:"flex"},[s("div",{staticClass:"withw",on:{click:function(e){return t.withw()}}},[t._v(t._s(t.$t("Withdrawal")))]),s("div",{staticClass:"withw",staticStyle:{"margin-left":"0.4rem"},on:{click:function(e){return t.deposit()}}},[t._v(" "+t._s(t.$t("Transfer deposit"))+" ")])])]),s("div",{staticClass:"kong"}),s("div",{staticClass:"content-dd"},[s("div",{staticClass:"title-big"},[t._v(t._s(t.$t("Transaction Record")))])]),s("van-tabs",{attrs:{sticky:"","line-width":"50px"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[s("van-tab",{attrs:{title:t.$t("Withdrawals record")}},[s("WithdrawRecord",{attrs:{field:t.field}})],1),s("van-tab",{attrs:{title:t.$t("Transfer deposit records")}},[s("DepositRecord",{attrs:{field:t.field}})],1)],1)],1)},a=[],n=s("2f62"),c=s("c1df"),o=s.n(c),l=s("ecba"),r=s("5d4f"),d={data(){return{active:0,loading:!1,finished:!1,currentPage:1,items:[],field:"bonus"}},components:{DepositRecord:l["a"],WithdrawRecord:r["a"]},computed:{...Object(n["d"])("i18n",["locale"]),...Object(n["d"])(["web3","contracts"]),...Object(n["d"])("common",["balances","tokens","identity"]),token(){var t=this.tokens.find(t=>"ETH"==t.name);return null==t?{}:t},withdraw_value(){var t=parseFloat(parseFloat(this.token.price)*parseFloat(this.identity.bonus)).toFixed(2);return"NaN"==t?"0.00":t},decimals(){return 1==this.token.stable?2:4}},filters:{formatDatetime(t){return o()(1e3*Number(t)).format("HH:mm MM/DD")}},watch:{locale(){this.initPage()}},mounted(){this.initPage()},methods:{initPage(){this.$store.commit("website/SET_PAGE_TITLE",this.$t("Asset details"))},withw(){this.$router.push({path:"/assets/withdraw-bonus"})},deposit(){this.$router.push({path:"/assets/deposit-bonus"})},onLoad(){var t=this.$toast.loading({forbidClick:!0,duration:0}),e="/v1/site/withdraw-bonus";this.axios.get(e,{params:{page:this.currentPage,perPage:10,stable:this.stable}}).then(async e=>{this.items=this.items.concat(e.data.items),this.loading=!1,this.currentPage>=e.data._meta.pageCount?this.finished=!0:this.currentPage++,t.clear()}).catch(e=>{this.loading=!1,t.clear()})}}},h=d,u=(s("ac01"),s("2877")),v=Object(u["a"])(h,i,a,!1,null,null,null);e["default"]=v.exports},cbbc:function(t,e,s){},ecba:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail-table"},[s("van-list",{attrs:{finished:t.finished,"finished-text":t.$t("No more")},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.items,(function(e,i){return s("div",{key:i,staticClass:"detail-list"},[s("div",{staticClass:"detail-thead alignflex flex"},[s("div",{staticClass:"oneb"},[t._v(t._s(t.$t("Amount")))]),s("div",{staticClass:"onea"},[t._v(t._s(t.$t("Status")))]),s("div",{staticClass:"onec"},[t._v(t._s(t.$t("Time")))]),s("div",{staticClass:"onec"},[t._v(t._s(t.$t("Details")))])]),s("div",{staticClass:"detail-tbody alignflex flex"},[s("div",{staticClass:"oneb"},[t._v(t._s(e.number))]),s("div",{staticClass:"onea"},[t._v(t._s(e.status))]),s("div",{staticClass:"onec"},[t._v(t._s(t._f("formatDatetime")(e.created_at)))]),s("div",{staticClass:"onec",staticStyle:{color:"blue"},on:{click:function(s){return t.etherscan(e)}}},[t._v("etherscan")])])])})),0)],1)},a=[],n=s("2f62"),c=s("c1df"),o=s.n(c),l={data(){return{active:0,loading:!1,finished:!1,currentPage:1,items:[]}},props:{field:{type:String,required:!0}},computed:{...Object(n["d"])("i18n",["locale"]),...Object(n["d"])(["web3","contracts"]),...Object(n["d"])("common",["balances","tokens","identity"])},filters:{formatDatetime(t){return o()(1e3*Number(t)).format("HH:mm MM/DD")}},watch:{locale(){this.initPage(),this.onRefresh()}},methods:{async etherscan(t){var e=await this.web3.eth.net.getId();3==e?window.open("https://ropsten.etherscan.io/tx/"+t.tx):1==e?window.open("https://cn.etherscan.com/tx/"+t.tx):this.$toast(this.$t("The current network does not support viewing"))},onRefresh(t){this.items=[],this.address=t,this.onLoad()},onLoad(){var t=this.$toast.loading({forbidClick:!0,duration:0}),e="/v1/site/deposit-"+this.field;this.axios.get(e,{params:{page:this.currentPage,perPage:10,stable:this.stable}}).then(async e=>{this.items=this.items.concat(e.data.items),this.loading=!1,this.currentPage>=e.data._meta.pageCount?this.finished=!0:this.currentPage++,t.clear()}).catch(e=>{this.loading=!1,t.clear()})}}},r=l,d=(s("30418"),s("2877")),h=Object(d["a"])(r,i,a,!1,null,null,null);e["a"]=h.exports},f751:function(t,e,s){"use strict";s("1883")}}]);