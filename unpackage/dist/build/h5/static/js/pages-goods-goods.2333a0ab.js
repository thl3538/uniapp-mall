(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-goods"],{"01ed":function(t,e,i){"use strict";var n=i("7fda"),a=i.n(n);a.a},"0351":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{goodsInfo:Object},methods:{sub:function(){this.$emit("sub")},add:function(){this.$emit("add")}}};e.default=n},"0fe6":function(t,e,i){"use strict";i.r(e);var n=i("b32a"),a=i("f696");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("7912");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"6c7743a3",null,!1,n["a"],s);e["default"]=r.exports},1229:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLoad:function(){},data:function(){return{showBack:!0}},methods:{back:function(){uni.navigateBack()},showCart:function(){uni.switchTab({url:"../tabBar/cart/cart"})}}};e.default=n},1737:function(t,e,i){var n=i("d67e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("519848e6",n,!0,{sourceMap:!1,shadowMode:!1})},"1e7e":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/*  修改状态栏样式 */.swiper-box[data-v-589c59c8]{position:relative;width:100%;height:100vw}.swiper-box uni-swiper[data-v-589c59c8]{width:100%;height:100vw}.swiper-box uni-swiper uni-swiper-item uni-image[data-v-589c59c8]{width:100%;height:100vw}.swiper-box .indicator[data-v-589c59c8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?25?%;height:%?40?%;border-radius:%?40?%;font-size:%?22?%;position:absolute;bottom:%?20?%;right:%?20?%;color:#fff;background-color:rgba(0,0,0,.2)}.info-box[data-v-589c59c8]{width:92%;padding:%?20?% 4%;background-color:#fff;margin-bottom:%?20?%}.goods-info .price[data-v-589c59c8]{font-size:%?46?%;font-weight:600;color:#f47925}.goods-info .title[data-v-589c59c8]{font-size:%?30?%}.row[data-v-589c59c8]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:0 0 %?30?% 0}.row .text[data-v-589c59c8]{font-size:%?28?%;color:#a2a2a2;margin-right:%?20?%}.row .content[data-v-589c59c8]{font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.row .content .serviceitem[data-v-589c59c8]{margin-right:%?10?%}.row .content .sp[data-v-589c59c8]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex}.row .content .sp uni-view[data-v-589c59c8]{background-color:#f6f6f6;padding:%?10?%;color:#999;margin-right:%?10?%;font-size:%?20?%;border-radius:%?5?%}.row .content .sp uni-view.on[data-v-589c59c8]{border:solid %?1?% #f47952;padding:%?4?% %?8?%}.row .arrow[data-v-589c59c8]{position:absolute;right:4%}.row .arrow .icon[data-v-589c59c8]{color:#ccc}.comments .row[data-v-589c59c8]{width:100%;height:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:0 0 %?30?% 0}.comments .row .text[data-v-589c59c8]{font-size:%?30?%}.comments .row .arrow[data-v-589c59c8]{font-size:%?28?%;position:absolute;right:4%;color:#17e6a1}.comments .row .arrow .show[data-v-589c59c8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.comments .row .arrow .show .icon[data-v-589c59c8]{color:#17e6a1}.comments .comment[data-v-589c59c8]{width:100%}.comments .comment .user-info[data-v-589c59c8]{width:100%;height:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.comments .comment .user-info .face[data-v-589c59c8]{width:%?40?%;height:%?40?%;margin-right:%?8?%}.comments .comment .user-info .face uni-image[data-v-589c59c8]{width:%?40?%;height:%?40?%;border-radius:100%}.comments .comment .user-info .username[data-v-589c59c8]{font-size:%?24?%;color:#999}.comments .comment .content[data-v-589c59c8]{margin-top:%?10?%;font-size:%?26?%}.description .title[data-v-589c59c8]{width:100%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;color:#999}.footer[data-v-589c59c8]{position:fixed;bottom:%?0?%;width:92%;padding:0 4%;height:%?99?%;border-top:solid %?1?% #eee;background-color:#fff;z-index:2;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.footer .icons[data-v-589c59c8]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?80?%;margin-left:-4%}.footer .icons .box[data-v-589c59c8]{width:%?80?%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap}.footer .icons .box .icon[data-v-589c59c8]{font-size:%?40?%;color:#828282}.footer .icons .box .text[data-v-589c59c8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;font-size:%?22?%;color:#666}.footer .btn[data-v-589c59c8]{height:%?80?%;border-radius:%?40?%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;margin-right:-2%}.footer .btn .joinCart[data-v-589c59c8],\r\n.footer .btn .buy[data-v-589c59c8]{height:%?80?%;padding:0 %?40?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%}.footer .btn .joinCart[data-v-589c59c8]{background-color:#f0b46c}.footer .btn .buy[data-v-589c59c8]{background-color:#f06c7a}',""]),t.exports=e},"21b7":function(t,e,i){"use strict";var n=i("ee27");i("4160"),i("a9e3"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("0fe6")),o=n(i("4d00")),s=n(i("5136")),c={data:function(){return{isKeep:!1,goodsInfo:{name:"",price:"",number:1,spec:""},goodsData:{swiperList:[],spec:[],comment:[{face:"",content:"",username:""}],descriptionStr:""},currentSwiper:0,spaceInfo:{showSpace:!1}}},components:{goodsHeader:a.default,popubSpec:s.default},onLoad:function(t){this.goodsInfo=JSON.parse(t.goodsInfo),this.initData()},methods:{add:function(){this.goodsInfo.number++},sub:function(){this.goodsInfo.number<=1||this.goodsInfo.number--},hideSpec:function(){this.spaceInfo.showSpace=!1},setSeletctspec:function(t){this.goodsInfo.spec=t},initData:function(){var t=this;this.request({url:o.default.getGoods,success:function(e){t.goodsData=e.data}})},swiperChange:function(t){this.currentSwiper=t.detail.current},handleRating:function(){uni.setStorageSync("comments",this.goodsData.comment),uni.navigateTo({url:"./ratings"})},keep:function(){this.isKeep=!this.isKeep,this.isKeep&&uni.showToast({title:"已收藏"})},joinCart:function(){var t=this;uni.getStorage({key:"goodsList",success:function(e){var i=e.data,n=!1;i.forEach((function(e){e.goods_id==t.goodsInfo.goods_id&&e.spec==t.goodsInfo.spec&&(e.number+=Number(t.goodsInfo.number),n=!0)})),n||(i.push(t.goodsInfo),t.setGoodsList(i))},fail:function(e){var i=[];i.push(t.goodsInfo),t.setGoodsList(i)}})},setGoodsList:function(t){uni.setStorage({key:"goodsList",data:t,success:function(){uni.showToast({icon:"success",title:"添加购物车成功"})}})},handleBuy:function(){var t=[];t.push(this.goodsInfo),uni.setStorage({key:"confirmList",data:t,success:function(){uni.navigateTo({url:"../order/confirm"})}})}}};e.default=c},"292e":function(t,e,i){"use strict";i.r(e);var n=i("64a5"),a=i("4e42");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("01ed");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"589c59c8",null,!1,n["a"],s);e["default"]=r.exports},3465:function(t,e,i){"use strict";var n=i("1737"),a=i.n(n);a.a},"4d00":function(t,e){var i="https://uniapp-interface.herokuapp.com/",n={getMallData:i+"api/profiles/mall_list",getCategory:i+"api/profiles/category",getGoodsList:i+"api/profiles/goodsList",getGoods:i+"api/profiles/goods"};t.exports=n},"4e42":function(t,e,i){"use strict";i.r(e);var n=i("21b7"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},5136:function(t,e,i){"use strict";i.r(e);var n=i("afd2"),a=i("fd2d");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("fd70");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"04492d0c",null,!1,n["a"],s);e["default"]=r.exports},"5cef":function(t,e,i){"use strict";var n=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("662a")),o={props:{spaceInfo:Object,goodsInfo:Object,goodsData:Object},components:{counter:a.default},methods:{hideSpecifications:function(){this.$emit("hideSpec")},handleSelectSpecification:function(t){this.$emit("setSeletctspec",t)},sub:function(){this.$emit("sub")},add:function(){this.$emit("add")}}};e.default=o},"64a5":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("status",{staticClass:"status"}),i("goodsHeader"),i("v-uni-view",{staticClass:"swiper-box"},[i("v-uni-swiper",{attrs:{circular:"true",autoplay:!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},t._l(t.goodsData.swiperList,(function(t){return i("v-uni-swiper-item",{key:t.id},[i("v-uni-image",{attrs:{src:t.img}})],1)})),1),i("v-uni-view",{staticClass:"indicator"},[t._v(t._s(t.currentSwiper+1)+"/"+t._s(t.goodsData.swiperList.length))])],1),i("v-uni-view",{staticClass:"info-box goods-info"},[i("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(t.goodsInfo.price))]),i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.goodsInfo.name))])],1),i("v-uni-view",{staticClass:"info-box"},[i("v-uni-view",{staticClass:"row",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.spaceInfo.showSpace=!0}}},[i("v-uni-view",{staticClass:"text"},[t._v("选择")]),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",[t._v("选择规格")]),i("v-uni-view",{staticClass:"sp"},t._l(t.goodsData.spec,(function(e,n){return i("v-uni-view",{key:n,class:{on:e==t.goodsInfo.spec}},[t._v(t._s(e))])})),1)],1),i("v-uni-view",{staticClass:"arrow"},[i("v-uni-view",{staticClass:"icon iconfont"},[t._v("")])],1)],1)],1),i("popubSpec",{attrs:{goodsInfo:t.goodsInfo,goodsData:t.goodsData,spaceInfo:t.spaceInfo},on:{sub:function(e){arguments[0]=e=t.$handleEvent(e),t.sub.apply(void 0,arguments)},add:function(e){arguments[0]=e=t.$handleEvent(e),t.add.apply(void 0,arguments)},hideSpec:function(e){arguments[0]=e=t.$handleEvent(e),t.hideSpec.apply(void 0,arguments)},setSeletctspec:function(e){arguments[0]=e=t.$handleEvent(e),t.setSeletctspec.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"info-box comments"},[i("v-uni-view",{staticClass:"row"},[i("v-uni-view",{staticClass:"text"},[t._v("商品评价")]),i("v-uni-view",{staticClass:"arrow"},[i("v-uni-view",{staticClass:"show",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleRating.apply(void 0,arguments)}}},[t._v("查看全部"),i("v-uni-view",{staticClass:"icon iconfont"},[t._v("")])],1)],1)],1),i("v-uni-view",{staticClass:"comment",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleRating.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"user-info"},[i("v-uni-view",{staticClass:"face"},[i("v-uni-image",{attrs:{src:t.goodsData.comment[0].face,mode:""}})],1),i("v-uni-view",{staticClass:"username"},[t._v(t._s(t.goodsData.comment[0].username))])],1),i("v-uni-view",{staticClass:"content"},[t._v(t._s(t.goodsData.comment[0].content))])],1)],1),i("v-uni-view",{staticClass:"description"},[i("v-uni-view",{staticClass:"title"},[t._v("商品详情")]),i("v-uni-view",{staticClass:"content"},[i("v-uni-rich-text",{attrs:{nodes:t.goodsData.descriptionStr}})],1)],1),i("v-uni-view",{staticClass:"footer"},[i("v-uni-view",{staticClass:"icons"},[i("v-uni-view",{staticClass:"box"},[i("v-uni-view",{staticClass:"icon iconfont"},[t._v("")]),i("v-uni-view",{staticClass:"text"},[t._v("分享")])],1),i("v-uni-view",{staticClass:"box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.keep.apply(void 0,arguments)}}},[t.isKeep?i("v-uni-view",{staticClass:"icon iconfont"},[t._v("")]):i("v-uni-view",{staticClass:"icon iconfont"},[t._v("")]),i("v-uni-view",{staticClass:"text"},[t._v(t._s(t.isKeep?"已":"")+"收藏")])],1)],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-view",{staticClass:"joinCart",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.joinCart.apply(void 0,arguments)}}},[t._v("加入购物车")]),i("v-uni-view",{staticClass:"buy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBuy.apply(void 0,arguments)}}},[t._v("立即购买")])],1)],1)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},"662a":function(t,e,i){"use strict";i.r(e);var n=i("da3c"),a=i("b3bf");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("3465");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"889cf600",null,!1,n["a"],s);e["default"]=r.exports},"68c1":function(t,e,i){var n=i("faa3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("43d3a670",n,!0,{sourceMap:!1,shadowMode:!1})},"75d6":function(t,e,i){var n=i("ae30");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1863a6fe",n,!0,{sourceMap:!1,shadowMode:!1})},7912:function(t,e,i){"use strict";var n=i("68c1"),a=i.n(n);a.a},"7fda":function(t,e,i){var n=i("1e7e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4e6319a6",n,!0,{sourceMap:!1,shadowMode:!1})},ae30:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.popup[data-v-04492d0c]{position:fixed;top:0;width:100%;height:100%;z-index:20}.popup .mask[data-v-04492d0c]{position:fixed;top:0;width:100%;height:100%;z-index:21;background-color:rgba(0,0,0,.6)}.popup .layer[data-v-04492d0c]{position:fixed;z-index:22;bottom:0;width:92%;padding:0 4%;height:70%;border-radius:%?20?% %?20?% 0 0;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-content:space-between;align-content:space-between}.popup .layer .content[data-v-04492d0c]{width:100%;padding:%?20?% 0}.popup .layer .btn[data-v-04492d0c]{width:100%;height:%?100?%}.popup .layer .btn .button[data-v-04492d0c]{width:100%;height:%?80?%;border-radius:%?40?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#f47952;font-size:%?28?%}.popup.spec .title[data-v-04492d0c]{font-size:%?30?%;margin:%?30?% 0}.popup.spec .sp[data-v-04492d0c]{display:-webkit-box;display:-webkit-flex;display:flex}.popup.spec .sp uni-view[data-v-04492d0c]{font-size:%?28?%;padding:%?5?% %?20?%;border-radius:%?8?%;margin:0 %?30?% %?20?% 0;background-color:#f6f6f6}.popup.spec .sp uni-view.on[data-v-04492d0c]{padding:%?3?% %?18?%;border:solid %?1?% #f47925}.popup.spec .length[data-v-04492d0c]{margin-top:%?30?%;border-top:solid %?1?% #aaa;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-top:%?20?%}.popup.spec .length .text[data-v-04492d0c]{font-size:%?30?%}',""]),t.exports=e},afd2:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.spaceInfo.showSpace,expression:"spaceInfo.showSpace"}],staticClass:"popup spec",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideSpecifications.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"mask"}),i("v-uni-view",{staticClass:"layer"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"title"},[t._v("选择规格")]),i("v-uni-view",{staticClass:"sp"},t._l(t.goodsData.spec,(function(e,n){return i("v-uni-view",{key:n,class:{on:e==t.goodsInfo.spec},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.handleSelectSpecification(e)}}},[t._v(t._s(e))])})),1),i("v-uni-view",{staticClass:"length"},[i("v-uni-view",{staticClass:"text"},[t._v("数量")]),i("counter",{attrs:{goodsInfo:t.goodsInfo},on:{sub:function(e){arguments[0]=e=t.$handleEvent(e),t.sub.apply(void 0,arguments)},add:function(e){arguments[0]=e=t.$handleEvent(e),t.add.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-view",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideSpecifications.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},b32a:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"before"},[t.showBack?i("v-uni-view",{staticClass:"back"},[i("v-uni-view",{staticClass:"icon iconfont",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[t._v("")])],1):t._e(),i("v-uni-view",{staticClass:"middle"}),i("v-uni-view",{staticClass:"icon-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showCart.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"icon iconfont"},[t._v("")])],1)],1)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},b3bf:function(t,e,i){"use strict";i.r(e);var n=i("0351"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},d67e:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.number[data-v-889cf600]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.number .input[data-v-889cf600]{width:%?80?%;height:%?60?%;margin:0 %?10?%;background-color:#f3f3f3;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center}.number .input uni-input[data-v-889cf600]{width:%?80?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center;font-size:%?26?%}.number .sub[data-v-889cf600],\r\n.number .add[data-v-889cf600]{width:%?60?%;height:%?60?%;background-color:#f3f3f3;border-radius:%?5?%}.number .sub .icon[data-v-889cf600],\r\n.number .add .icon[data-v-889cf600]{font-size:%?30?%;width:%?60?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=e},da3c:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"number"},[i("v-uni-view",{staticClass:"sub",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.sub.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"icon iconfont"},[t._v("")])],1),i("v-uni-view",{staticClass:"input"},[i("v-uni-input",{attrs:{type:"number"},model:{value:t.goodsInfo.number,callback:function(e){t.$set(t.goodsInfo,"number",e)},expression:"goodsInfo.number"}})],1),i("v-uni-view",{staticClass:"add",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.add.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"icon iconfont"},[t._v("")])],1)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},f696:function(t,e,i){"use strict";i.r(e);var n=i("1229"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},faa3:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.header[data-v-6c7743a3]{width:100%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;top:0;z-index:10}.header .before[data-v-6c7743a3]{width:92%;padding:0 4%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;top:0;-webkit-transition:opacity .05s linear;transition:opacity .05s linear}.header .before .back[data-v-6c7743a3]{width:%?125?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0}.header .before .back .icon[data-v-6c7743a3]{margin-left:-10%;width:%?60?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?42?%}.header .before .middle[data-v-6c7743a3]{width:100%}.header .before .icon-btn[data-v-6c7743a3]{width:%?60?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex}.header .before .icon-btn .icon[data-v-6c7743a3]{width:%?60?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?42?%}.header .before .back .icon[data-v-6c7743a3]{color:#fff;background-color:rgba(0,0,0,.2);border-radius:100%}.header .before .icon-btn .icon[data-v-6c7743a3]{color:#fff;background-color:rgba(0,0,0,.2);border-radius:100%}',""]),t.exports=e},fd2d:function(t,e,i){"use strict";i.r(e);var n=i("5cef"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},fd70:function(t,e,i){"use strict";var n=i("75d6"),a=i.n(n);a.a}}]);