webpackJsonp([10,12],{85:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=r(2),o=n(u),a=r(302),d=n(a),i="http://192.168.1.112/my-store/index.php/Home/Store/",c="http://192.168.1.112/my-store/index.php/Home/Address/",l="http://192.168.1.112/my-store/index.php/Home/My/",s={url:"",data:{},async:!0,type:"get",server:i},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};t=(0,o.default)({},s,t),d.default.ajax({url:t.server+t.url,data:t.data,async:t.async,type:t.type,dataType:"json"}).then(function(t){e(t.data)})},p=100;e.default={myInfoInit:function(t){var e={server:l,url:"getMyInfo"};f(e,t)},indexInit:function(t){var e={url:"index"};f(e,t)},getMorePro:function(t,e,r){var n={url:"scrollLoadPro",data:{count:e,load_num:r}};f(n,t)},getProList:function(t){var e={url:"proList",async:!1};f(e,t)},addAddress:function(t,e,r,n){var u={server:c,url:"add",type:"post",data:{consignee:e,tel:r,address:n}};f(u,t)},setDefaultAddress:function(t,e){var r={server:c,url:"choose",data:{id:t}};f(r,e)},getMyAddresses:function(t,e){return setTimeout(function(){var e={server:c,async:!1,url:"showList"};f(e,t)},e||p)},getDefaultAddress:function(t,e,r){return setTimeout(function(){var e={server:c,url:"getDefaultAddress",async:!1};f(e,t)},e||p)},getProducts:function(t,e,r){return setTimeout(function(){var e={url:"getCartList",async:!1};f(e,t)},e||p)},getProDetails:function(t,e,r){return setTimeout(function(){var r={url:"getProDetail",data:{pid:e}};f(r,t)},r||p)},collectionProduct:function(t,e){var r={url:"collection",data:{pid:t},type:"post"};f(r,e)},addCartProduct:function(t,e,r){return setTimeout(function(){var r={url:"addCartProduct",data:{cid:t},type:"post"};f(r,e)},r||p)},delCartProduct:function(t,e,r){return setTimeout(function(){var r={url:"delCartProduct",data:{cid:t}};f(r,e)},r||p)},removeCartProById:function(t,e){var r={url:"deleteCartById",data:{cid:t},type:"get"};f(r,e)},settleCart:function(t,e){var r={url:"settleCart",data:{cart_ids:t.join(",")}};f(r,e)},addCart:function(t,e,r,n){var u={url:"addProductToCart",data:{pid:t,did:e,num:r}};f(u,n)},handleSubmitOrder:function(t,e){var r={url:"orderSave",data:{postscript:t},type:"post",async:!1};f(r,e)}},t.exports=e.default},369:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function u(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0}),e.myInfoInit=void 0;var o=r(84),a=u(o),d=r(85),i=n(d),c=function(t){return{type:a.MY_INIT,data:t}};e.myInfoInit=function(){return function(t){i.default.myInfoInit(function(e){t(c(e))})}}},542:function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(5),a=u(o),d=r(6),i=u(d),c=r(7),l=u(c),s=r(9),f=u(s),p=r(8),v=u(p),y=r(1),m=u(y),_=r(212),h=r(369),P=n(h),g=function(t){function e(){return(0,i.default)(this,e),(0,f.default)(this,(e.__proto__||(0,a.default)(e)).apply(this,arguments))}return(0,v.default)(e,t),(0,l.default)(e,[{key:"componentWillMount",value:function(){var t=this.props.init;t()}},{key:"render",value:function(){var t=this.props.qrcode;return m.default.createElement("div",null,m.default.createElement("img",{src:t}))}}]),e}(y.Component),I=function(t){return{qrcode:t.my.info.my_qrcode}},M=function(t){return{init:function(){t(P.myInfoInit())}}};e.default=(0,_.connect)(I,M)(g),t.exports=e.default}});