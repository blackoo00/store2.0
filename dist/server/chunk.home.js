exports.ids=[2],exports.modules={5:function(e,t){e.exports=require("react-css-modules")},9:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(16),u=r(o),l="http://192.168.1.112/my-store/index.php/Home/Store/",i="http://192.168.1.112/my-store/index.php/Home/Address/",c="http://192.168.1.112/my-store/index.php/Home/My/",d={url:"",data:{},async:!0,type:"get",server:l},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};e=a({},d,e),u.default.ajax({url:e.server+e.url,data:e.data,async:e.async,type:e.type,dataType:"json"}).then(function(e){t(e.data)})},s=100;t.default={myInfoInit:function(e){var t={server:c,url:"getMyInfo"};f(t,e)},indexInit:function(e){var t={url:"index"};f(t,e)},getMorePro:function(e,t,n){var r={url:"scrollLoadPro",data:{count:t,load_num:n}};f(r,e)},getProList:function(e){var t={url:"proList",async:!1};f(t,e)},addAddress:function(e,t,n,r){var a={server:i,url:"add",type:"post",data:{consignee:t,tel:n,address:r}};f(a,e)},setDefaultAddress:function(e,t){var n={server:i,url:"choose",data:{id:e}};f(n,t)},getMyAddresses:function(e,t){return setTimeout(function(){var t={server:i,async:!1,url:"showList"};f(t,e)},t||s)},getDefaultAddress:function(e,t,n){return setTimeout(function(){var t={server:i,url:"getDefaultAddress",async:!1};f(t,e)},t||s)},getProducts:function(e,t,n){return setTimeout(function(){var t={url:"getCartList",async:!1};f(t,e)},t||s)},getProDetails:function(e,t,n){return setTimeout(function(){var n={url:"getProDetail",data:{pid:t}};f(n,e)},n||s)},collectionProduct:function(e,t){var n={url:"collection",data:{pid:e},type:"post"};f(n,t)},addCartProduct:function(e,t,n){return setTimeout(function(){var n={url:"addCartProduct",data:{cid:e},type:"post"};f(n,t)},n||s)},delCartProduct:function(e,t,n){return setTimeout(function(){var n={url:"delCartProduct",data:{cid:e}};f(n,t)},n||s)},removeCartProById:function(e,t){var n={url:"deleteCartById",data:{cid:e},type:"get"};f(n,t)},settleCart:function(e,t){var n={url:"settleCart",data:{cart_ids:e.join(",")}};f(n,t)},addCart:function(e,t,n,r){var a={url:"addProductToCart",data:{pid:e,did:t,num:n}};f(a,r)},handleSubmitOrder:function(e,t){var n={url:"orderSave",data:{postscript:e},type:"post",async:!1};f(n,t)}},e.exports=t.default},11:function(e,t){e.exports=require("react-weui")},40:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=r(a),u=n(63),l=r(u),i=function(e){var t=e.list;return o.default.createElement(l.default,{className:"carousel",swipeOptions:{auto:2500},id:"swiper-dom"},t.map(function(e){return o.default.createElement("div",{key:e.id},o.default.createElement("img",{src:e.url}))}))};t.default=i,e.exports=t.default},63:function(e,t){e.exports=require("react-swipe")},110:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=r(a),u=n(282),l=(r(u),n(11)),i=r(l),c=n(280),d=(r(c),n(6)),f=i.default.TabBar,s=i.default.TabBarItem,p=i.default.TabBarIcon,m=i.default.TabBarLabel,v=function(){return o.default.createElement(f,{style:{position:"fixed"},id:"Public-footer"},o.default.createElement(s,null,o.default.createElement(d.Link,{to:"/"},o.default.createElement(p,null,o.default.createElement("img",{src:"http://mystore-1251466962.cosgz.myqcloud.com/icon_nav_button.png"})),o.default.createElement(m,null,"首页"))),o.default.createElement(s,null,o.default.createElement(d.Link,{to:"cart"},o.default.createElement(p,null,o.default.createElement("img",{src:"http://mystore-1251466962.cosgz.myqcloud.com/icon_nav_button.png"})),o.default.createElement(m,null,"购物车"))),o.default.createElement(s,null,o.default.createElement(d.Link,{to:"search"},o.default.createElement(p,null,o.default.createElement("img",{src:"http://mystore-1251466962.cosgz.myqcloud.com/icon_nav_button.png"})),o.default.createElement(m,null,"搜索"))),o.default.createElement(s,null,o.default.createElement(d.Link,{to:"my"},o.default.createElement(p,null,o.default.createElement("img",{src:"http://mystore-1251466962.cosgz.myqcloud.com/icon_nav_button.png"})),o.default.createElement(m,null,"我的"))))};t.default=v,e.exports=t.default},137:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.indexInit=void 0;var o=n(8),u=a(o),l=n(9),i=r(l),c=function(e){return{type:u.INDEX_INIT,data:e}};t.indexInit=function(){return function(e){i.default.indexInit(function(t){e(c(t))})}}},138:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=r(a),u=n(5),l=r(u),i=n(169),c=r(i),d=function(e){var t=e.list;return o.default.createElement("div",{className:c.default.catWrap,id:"home-cat"},t.map(function(e){return o.default.createElement("div",{key:e.id,className:c.default.catItem},o.default.createElement("img",{src:e.icon}),o.default.createElement("p",{className:c.default.catName},e.name))}))};t.default=(0,l.default)(d,c.default),e.exports=t.default},139:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),o=n(170),u=r(o),l=n(1),i=function(e){var t=e.list;return l.createElement("div",{className:u.default.indexItem},l.createElement("div",{style:{paddingBottom:"70px"}},t.map(function(e){return l.createElement(a.Link,{key:e.id,to:"/pdetail/"+e.id},l.createElement("div",{className:u.default.indexProItem},l.createElement("img",{src:e.logo}),l.createElement("div",{className:u.default.indexProNameItem},l.createElement("p",{className:u.default.indexProName},e.name)),l.createElement("p",{className:u.default.indexProPrice},"￥",e.price)))})))};t.default=i,e.exports=t.default},140:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),d=n(171),f=r(d),s=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return u(t,e),l(t,[{key:"render",value:function(){return c.default.createElement("section",{className:f.default.sectionMain},"Home1")}}]),t}(i.Component);t.default=s,e.exports=t.default},141:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),d=a(c),f=n(168),s=a(f),p=n(13),m=n(137),v=r(m),y=n(140),_=(a(y),n(40)),b=a(_),E=n(138),h=a(E),g=n(139),x=a(g),P=n(110),O=a(P),j=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return l(t,e),i(t,[{key:"componentWillMount",value:function(){var e=this.props.init;e()}},{key:"componentDidMount",value:function(){document.getElementById("Public-footer").ontouchmove=function(e){e.preventDefault()},document.getElementById("swiper-dom").ontouchmove=function(e){e.preventDefault()},document.getElementById("home-cat").ontouchmove=function(e){e.preventDefault()}}},{key:"render",value:function(){var e=this.props,t=(e.actions,e.banlist),n=e.catlist,r=e.prolist;return d.default.createElement("div",{className:s.default.app},d.default.createElement(b.default,{list:t}),d.default.createElement(h.default,{list:n}),d.default.createElement(x.default,{list:r}),d.default.createElement(O.default,null))}}]),t}(c.Component),w=function(e){return{banlist:e.home.ban,catlist:e.home.cat,prolist:e.home.pro}},I=function(e){return{init:function(){e(v.indexInit())}}};t.default=(0,p.connect)(w,I)(j),e.exports=t.default},168:163,169:function(e,t){e.exports={"cat-wrap":"_1WY5hYez",catWrap:"_1WY5hYez","cat-item":"_2kdiJR2Q",catItem:"_2kdiJR2Q","cat-name":"_3HG71Umv",catName:"_3HG71Umv"}},170:function(e,t){e.exports={"index-item":"_2VnaELgJ",indexItem:"_2VnaELgJ","index-pro-item":"_1HQLgw-I",indexProItem:"_1HQLgw-I","index-pro-name-item":"_1WAdqxTE",indexProNameItem:"_1WAdqxTE","index-pro-name":"Pl1tjMQ7",indexProName:"Pl1tjMQ7","index-pro-price":"_32rbhv1E",indexProPrice:"_32rbhv1E"}},171:function(e,t){e.exports={"section-main":"n3gfAgW-",sectionMain:"n3gfAgW-"}},280:function(e,t){e.exports=require("prop-types")},282:function(e,t){e.exports=require("react-dom")}};