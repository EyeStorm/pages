(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{333:function(n,e,t){},334:function(n,e,t){},371:function(n,e,t){"use strict";var a=t(333);t.n(a).a},372:function(n,e,t){"use strict";var a=t(334);t.n(a).a},391:function(n,e,t){"use strict";t.r(e);var a=t(346),o={name:"CarbonAds",watch:{$route:function(n,e){n.path!==e.path&&this.$el.querySelector("#carbonads")&&(this.$el.innerHTML="",this.load())}},mounted:function(){this.load()},methods:{load:function(){var n=document.createElement("script");n.id="_carbonads_js",n.src="//cdn.carbonads.com/carbon.js?serve=CEBDT27Y&placement=vuejsorg",this.$el.appendChild(n)}},render:function(n){return n("div",{class:"carbon-ads"})}},s=(t(371),t(13)),r=Object(s.a)(o,void 0,void 0,!1,null,null,null).exports,c="bsa-cpc-script",i={name:"BuySellAds",watch:{$route:function(n,e){n.path!==e.path&&(this.$refs.ads.innerHTML="",this.load())}},mounted:function(){var n=this;if(document.getElementById(c))this.load();else{var e=document.createElement("script");e.id=c,e.src="//m.servedby-buysellads.com/monetization.js",document.head.appendChild(e),e.onload=function(){n.load()}}},methods:{load:function(){"undefined"!=typeof _bsa&&_bsa&&_bsa.init("default","CKYD62QM","placement:vuejsorg",{target:".bsa-cpc",align:"horizontal",disable_css:"true"})}},render:function(n){return n("div",{class:"bsa-cpc-wrapper"},[n("div",{ref:"ads",class:"bsa-cpc"})])}},u=(t(372),Object(s.a)(i,void 0,void 0,!1,null,null,null).exports),d={name:"Layout_",components:{ParentLayout:a.a,CarbonAds:r,BuySellAds:u}},l=Object(s.a)(d,function(){var n=this.$createElement,e=this._self._c||n;return e("ParentLayout",{scopedSlots:this._u([{key:"sidebar-top",fn:function(){return[e("CarbonAds")]},proxy:!0},{key:"page-bottom",fn:function(){return[e("BuySellAds")]},proxy:!0}])})},[],!1,null,null,null);e.default=l.exports}}]);