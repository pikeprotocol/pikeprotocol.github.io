(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-535b2251"],{"02ef":function(t,s,a){},"0632b":function(t,s,a){"use strict";a("02ef")},"57d0":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAqCAYAAADBNhlmAAAByUlEQVRYhe2ZsUoDQRCG/wvBQrGSNCJooTaioAHBQrRTbCzEB/BJTKuFjY9gmUaIFkrAFBY2WihqYyNiozaipLD5Zc89XI5Nsjd33G2RHyZ7tzfMfkx2bzMbkBwj2WBxapGskYTN1Md2gXCmjm2AJQAz8EObAA7jJCULWh1AoNu8te4CeK/bhwIAJwFMmB02wKI16zvgnHnTz6BA874DTgMYjW58BIT5NfcBhVowARmLEeg23p+nqiagj1ILZcRnQEQvbJ8Bw3noM2A4D/uAKaQWyrDPgErVboBBl2d5qWIDXAVQ023hgGVL54o2H/SsMnhS8LbWSdcATsv6YgPAYszRnINrAJZyhFMJ2/u76lDRW2yL5GcOBfyjPkwIGYLweMFdUwDO46Whg9Siazn6qrL34z+X7hk07SJhVs6E4yTOYKQBAE0Ay47+bQBDkoGkO8kPgP0E/oPxas1VabY69XpqJPAfzxtQ6SiBb0UyQFrAunHY1EuFACLBMV1bEjwLwCdHvzdJ8CwA7xz93iXBswC8dfR7kQTP6he1yzx8lQTOCrDZ4/kBgC9RZOkeaTG139p0qf+LEcXNElDZDskbkt8kr0jupopH4hcvq28/P6NT2gAAAABJRU5ErkJggg=="},"798a":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAChUlEQVRoQ+2ZPYxNURSF19doJFPpKCgQkSgQiUL8FGOKIUSMiak004hCUBHeFFSIQkxEohLCNH4iYkhQqEREQiKiUIiKSqJdcoRk5s19b/a977437yRz6nXOXd/ZZ+977r4o80Hm/rUI0C6Cto9IOiZpjaQPkp4AE3VGvWsRsP1U0mCB2deSRoFvdYB0BcD2uKTrbQxeBk70M8A9SQfnMTgA/OoUolsRcMDYOuBTQNdWUjuA7Q2S3geMDQLPArqeA4xJuhUwNgbcDuh6DnBOUiNg7DhwJaDrOUCq9+sDxk4DFwK63gHYTpUnVaDIGAduRITtNLUmse2HkvYETe0H7ge1LWW1AdgelvSohKGNwLsS+kJpLQC2l0h6Lmlb0NBvYGlQ2/0csP1C0o4ShqaB3SX03TlCtldLmpa0sqSZVGZfBud8BH600lY+QrYPSLopaSBopKosXTfOAlNFCxQC2B6StKVpwkxtCv/Wqo4qzEt3q0NFEHMAbG+S9Ebqu6+1t8DmZvgigOhVoMJGdjxlGHg8c5UIwKt/CZeqzPaOLXS2wFHgWlmACaBhO1WOFJ2FHCPNeRCJwH+AfjhaO4FZ5Tc3gDmfoTkBfAbWVqlC/XKE7gCHcwY4CVzKGWAXkC6Ns0ZOObAM+JkrQGECJ5iiCDS/sBqpIbvAL7LCBM4J4BRwMXSdLtjpfojAEJC63XNGLkdoOfA9V4CWCZxLDtwFRltdgXM4QmeA8zkD7AVaNsxyiMAq4GsnEZgCRmxHfhvV/bX2BUi9p5YjEoG6TZVZ7yqQftOWAijTIi9jpqz2AbBvvklFEVghaVJS6jYvxPjbBUmNhMjDK7cWI4v3QrMI0ItdbveMP9tAOkDgnTk4AAAAAElFTkSuQmCC"},"7b93":function(t,s,a){"use strict";a("defa")},af21:function(t,s,a){"use strict";a("df44")},bdc9:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"vote-detail-wrapper"},[e("div",{staticClass:"tis-wrapper"},[e("div",{staticClass:"tiss"},[t._v(t._s(t.data.title))]),e("div",{staticClass:"info",domProps:{innerHTML:t._s(t.data.content)}})]),e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"titsd"},[t._v(t._s(t.$t("Number of votes")))]),e("div",{staticClass:"inf flex"},[e("div",{staticClass:"flex_item as"},[e("div",[t._v(t._s(t.data.vote.rate.agree)+" "+t._s(t.$t("Agree")))]),e("div",[t._v(t._s(t.data.vote.total.agree))])]),e("div",{staticClass:"flex_item ds"},[e("div",[t._v("-"+t._s(t.data.vote.total.oppose))]),e("div",[t._v(t._s(t.data.vote.rate.oppose)+" "+t._s(t.$t("Oppose")))])])]),e("div",{staticClass:"progree"},[e("div",{style:{width:t.data.vote.rate.agree,background:"#8cc689"},attrs:{"v-tip":t.$t("Favor of {num}",{num:t.data.vote.rate.agree})}}),e("div",{style:{left:t.data.vote.rate.agree,width:t.data.vote.rate.oppose,background:"#ff6600"},attrs:{"v-tip":t.$t("Against {num}",{num:t.data.vote.rate.oppose})}})]),e("div",{staticClass:"btn-control"},[e("van-button",{staticClass:"btns",attrs:{disabled:!t.data.has_vote},on:{click:function(s){return t.voteAgree()}}},[e("img",{attrs:{src:a("798a")}}),t._v(" "+t._s(t.$t("Agree"))+" ")]),e("van-button",{staticClass:"btns btns2",attrs:{disabled:!t.data.has_vote},on:{click:function(s){return t.voteOppose()}}},[e("img",{attrs:{src:a("57d0")}}),t._v(t._s(t.$t("Oppose"))+" ")])],1)]),e("div",{staticClass:"footer-wrappers"},[e("div",{staticClass:"list"},[e("div",{staticClass:"name"},[t._v("ID")]),e("div",[t._v(t._s(t.data.index))])]),e("div",{staticClass:"list"},[e("div",{staticClass:"name"},[t._v(t._s(t.$t("Status")))]),e("div",{staticClass:"status"},[t._v(t._s(t.data.status))])]),e("div",{staticClass:"list"},[e("div",{staticClass:"name"},[t._v(t._s(t.$t("Starting time")))]),e("div",[t._v(t._s(t._f("formatDate")(t.data.start_time)))])]),e("div",{staticClass:"list small"},[e("div",{staticClass:"name"},[t._v(t._s(t.$t("Block")))]),e("div",[t._v(t._s(t.data.start_block))])]),e("div",{staticClass:"list"},[e("div",{staticClass:"name"},[t._v(t._s(t.$t("End Time")))]),e("div",[t._v(t._s(t._f("formatDate")(t.data.end_time)))])]),e("div",{staticClass:"list small"},[e("div",{staticClass:"name"},[t._v(t._s(t.$t("Block")))]),e("div",[t._v(t._s(t.data.end_block))])]),e("div",{staticClass:"list"},[e("div",{staticClass:"name"},[t._v(t._s(t.$t("Participating address")))]),e("div",[t._v(t._s(t.data.address_num))])]),e("div",{staticClass:"list"},[e("div",{staticClass:"name"},[t._v(t._s(t.$t("Total votes")))]),e("div",[t._v(t._s(t.data.vote_total))])]),e("div",{staticClass:"list"},[e("div",{staticClass:"name"},[t._v(t._s(t.$t("Threshold")))]),e("div",[t._v(t._s(t.$t("{num} Vote",{num:t.data.threshold})))])]),e("div",{staticClass:"progree"},[e("div",{style:{width:t.data.threshold_rate,background:"#006cff"},attrs:{"v-tip":t.$t("Notice {num}",{num:t.data.threshold_rate})}})])]),e("div",{staticClass:"mndf"},[e("div",{staticClass:"fld"},[t._v(" "+t._s(t.$t("Display the top {num} addresses",{num:10}))+" ")]),e("div",{staticClass:"ends",on:{click:function(s){return t.lookHandle()}}},[t._v(t._s(t.$t("View")))])]),e("van-popup",{model:{value:t.show,callback:function(s){t.show=s},expression:"show"}},[e("div",{staticClass:"popup-wrapper"},[e("div",{staticClass:"closeIcon",on:{click:function(s){t.show=!1}}},[e("van-icon",{attrs:{name:"close"}})],1),e("van-tabs",{staticClass:"tabsss",attrs:{"title-active-color":"#0040ff"},model:{value:t.active,callback:function(s){t.active=s},expression:"active"}},[e("van-tab",{attrs:{title:t.$t("Agree")}},[e("agreeItem",{attrs:{vid:parseInt(t.$route.query.id)}})],1),e("van-tab",{attrs:{title:t.$t("Oppose")}},[e("opposeItem",{attrs:{vid:parseInt(t.$route.query.id)}})],1)],1),e("div",{staticClass:"tabs"})],1)])],1)},i=[],o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"vote-agree-wrapper"},[a("div",{staticClass:"tissa"},[a("div",{},[t._v(t._s(t.$t("Agree")))]),a("div",{staticClass:"sx"},[t._v(t._s(t.$t("{num} Vote",{num:t.data.vote_num})))]),a("div",{staticClass:"dd"},[t._v(t._s(t.data.vote_rate))])]),a("div",{staticClass:"progree"},[a("div",{directives:[{name:"tip",rawName:"v-tip",value:t.$t("Favor of {num}",{num:t.data.vote_rate}),expression:"$t('Favor of {num}', {num: data.vote_rate})"}],style:{width:t.data.vote_rate}})]),a("div",{staticClass:"titls-tab"},[a("div",[t._v(t._s(t.$t("Address")))]),a("div",[t._v(t._s(t.$t("Number of votes")))])]),a("div",{staticClass:"body-tab"},t._l(t.items,(function(s,e){return a("div",{key:e,staticClass:"flex"},[a("div",{staticClass:"onea"},[t._v(t._s(t._f("subAddress")(s.uid)))]),a("div",{staticClass:"oneb"},[t._v(t._s(s.vote))])])})),0)])},d=[],v={data(){return{items:[],data:{},loading:!1,finished:!1,currentPage:1}},props:{vid:{type:Number,required:!0}},filters:{subAddress(t){return null==t||""==t||void 0==t||42!=t.length?"-":t.substring(0,5)+"..."+t.substring(t.length-5,t.length)}},mounted(){this.onLoad()},methods:{onLoad(){this.axios.get("/v1/site/vote-agree",{params:{vid:this.vid}}).then(t=>{this.data=t.data,this.items=t.data.vote.items})}}},r=v,n=(a("7b93"),a("2877")),l=Object(n["a"])(r,o,d,!1,null,null,null),c=l.exports,u=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"vote-agree-wrapper"},[a("div",{staticClass:"tissa"},[a("div",{},[t._v(t._s(t.$t("Oppose")))]),a("div",{staticClass:"sx"},[t._v(t._s(t.$t("{num} Vote",{num:t.data.vote_num})))]),a("div",{staticClass:"dd"},[t._v(t._s(t.data.vote_rate))])]),a("div",{staticClass:"progree"},[a("div",{style:{width:t.data.vote_rate},attrs:{"v-tip":t.$t("Against {num}",{num:t.data.vote_rate})}})]),a("div",{staticClass:"titls-tab"},[a("div",[t._v(t._s(t.$t("Address")))]),a("div",[t._v(t._s(t.$t("Number of votes")))])]),a("div",{staticClass:"body-tab"},t._l(t.items,(function(s,e){return a("div",{key:e,staticClass:"flex"},[a("div",{staticClass:"onea"},[t._v(t._s(t._f("subAddress")(s.uid)))]),a("div",{staticClass:"oneb"},[t._v(t._s(s.vote))])])})),0)])},h=[],p={data(){return{items:[],data:{},loading:!1,finished:!1,currentPage:1}},props:{vid:{type:Number,required:!0}},filters:{subAddress(t){return null==t||""==t||void 0==t||42!=t.length?"-":t.substring(0,5)+"..."+t.substring(t.length-5,t.length)}},mounted(){this.onLoad()},methods:{onLoad(){this.axios.get("/v1/site/vote-oppose",{params:{vid:this.vid}}).then(t=>{this.data=t.data,this.items=t.data.vote.items})}}},_=p,m=(a("0632b"),Object(n["a"])(_,u,h,!1,null,null,null)),A=m.exports,g=a("2f62"),C=a("c1df"),f=a.n(C),b={data(){return{show:!1,active:0,data:{vote:{rate:{},total:{}}}}},components:{agreeItem:c,opposeItem:A},computed:{...Object(g["d"])("i18n",["locale"])},filters:{subAddress(t){return null==t||""==t||void 0==t||42!=t.length?"-":t.substring(0,4)+"..."+t.substring(t.length-4,t.length)},formatDate(t){if(void 0!=t)return f()(1e3*Number(t)).format("MM/DD/YYYY")}},watch:{locale:{handler(t){this.getData(),this.initPage()}}},mounted(){this.initPage(),this.getData()},methods:{initPage(){this.$store.commit("website/SET_PAGE_TITLE",this.$t("Vote details"))},getData(){this.axios.get("/v1/site/vote-view",{params:{vid:this.$route.query.id}}).then(t=>{this.data=t.data}).catch(t=>{})},voteAgree(){this.$dialog.confirm({title:this.$t("Tips"),message:this.$t("Are you sure to support this proposal?")}).then(t=>{this.data.has_vote=!1,this.axios.post("/v1/site/vote",{vid:this.$route.query.id,type:"agree"}).then(t=>{this.getData(),this.$toast(t.data.message)})}).catch(t=>{})},voteOppose(){this.$dialog.confirm({title:this.$t("Tips"),message:this.$t("Are you sure to oppose this proposal?")}).then(t=>{this.data.has_vote=!1,this.axios.post("/v1/site/vote",{vid:this.$route.query.id,type:"oppose"}).then(t=>{this.getData(),this.$toast(t.data.message)})}).catch(t=>{})},lookHandle(){this.show=!0}}},w=b,k=(a("af21"),Object(n["a"])(w,e,i,!1,null,null,null));s["default"]=k.exports},defa:function(t,s,a){},df44:function(t,s,a){}}]);