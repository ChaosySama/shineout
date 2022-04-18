(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[17],{1538:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(560),o=n(562),c=n(41),l=n(1539),u=n.n(l),s=n(1540),d=n.n(s),m=Object(c.b)(u.a,d.a),p=[{name:"1-base",title:Object(c.b)("基本用法 \n 默认为水平分割线","Base \n Divider is horizontal by default. You can add text within Divider."),component:n(1541).default,rawText:n(1543)},{name:"2-base",title:Object(c.b)("带文字的分割线 \n 分割线中带有文字，可以用 orientation 指定文字位置。",'Divider with title \n Divider with inner title, set orientation="left/right" to align it.'),component:n(1544).default,rawText:n(1545)},{name:"3-base",title:Object(c.b)('垂直分割线 \n 使用 mode="vertical" 设置为行内的垂直分割线。','Vertical \n Use type="vertical" make it vertical.'),component:n(1546).default,rawText:n(1547)}];t.default=Object(a.a)(function(e){return r.a.createElement(o.b,Object.assign({},e,{codes:void 0,source:m,examples:p}))})},1539:function(e,t){e.exports="# Divider 分割线\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| children | ReactNode | 无 | 分割线中内容 |\n| className | string | 无 | 扩展className |\n| style | object | 无 | 最外层扩展样式 |\n| mode | 'horizontal' \\| 'vertical' | *horizontal* | 方向，水平或垂直  |\n| orientation | 'center' \\| 'left' \\| 'right' | *center* |  分割线中内容的位置 |\n"},1540:function(e,t){e.exports="# Divider\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| children | ReactNode | - | Content, text or react component|\n| className | string | - | Extend className |\n| style | object | - | Container element style |\n| mode | 'horizontal' \\| 'vertical' | *horizontal* |  mode of divider |\n| orientation | 'center' \\| 'left' \\| 'right' | *center* |  The position of title inside divider |"},1541:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(327),o=n(564);t.default=function(){return r.a.createElement("div",null,r.a.createElement("p",null,Object(o.a)(1)),r.a.createElement(a.a,null),r.a.createElement("p",null,Object(o.a)(3)),r.a.createElement(a.a,null),r.a.createElement("p",null,Object(o.a)(5)))}},1542:function(e,t){},1543:function(e,t){e.exports="/**\n * cn - 基本用法\n *  --默认为水平分割线\n * en - Base\n *  --Divider is horizontal by default. You can add text within Divider.\n */\nimport React from 'react'\nimport { Divider } from 'shineout'\nimport lorem from 'doc/utils/faker/lorem'\n\nexport default function() {\n  return (\n    <div>\n      <p>{lorem(1)}</p>\n      <Divider />\n      <p>{lorem(3)}</p>\n      <Divider />\n      <p>{lorem(5)}</p>\n    </div>\n  )\n}\n"},1544:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(327),o=n(564);t.default=function(){return r.a.createElement("div",null,r.a.createElement("p",null,Object(o.a)(1)),r.a.createElement(a.a,null,"Text"),r.a.createElement("p",null,Object(o.a)(3)),r.a.createElement(a.a,{orientation:"left"},"Left Text"),r.a.createElement("p",null,Object(o.a)(4)),r.a.createElement(a.a,{orientation:"right"},"Right Text"),r.a.createElement("p",null,Object(o.a)(5)))}},1545:function(e,t){e.exports="/**\n * cn - 带文字的分割线\n *   -- 分割线中带有文字，可以用 orientation 指定文字位置。\n * en - Divider with title\n *  --Divider with inner title, set orientation=\"left/right\" to align it.\n */\nimport React from 'react'\nimport { Divider } from 'shineout'\nimport lorem from 'doc/utils/faker/lorem'\n\nexport default function() {\n  return (\n    <div>\n      <p>{lorem(1)}</p>\n      <Divider>Text</Divider>\n      <p>{lorem(3)}</p>\n      <Divider orientation=\"left\">Left Text</Divider>\n      <p>{lorem(4)}</p>\n      <Divider orientation=\"right\">Right Text</Divider>\n      <p>{lorem(5)}</p>\n    </div>\n  )\n}\n"},1546:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(327);t.default=function(){return r.a.createElement("div",null,r.a.createElement("span",null,"Left"),r.a.createElement(a.a,{mode:"vertical"},"H"),r.a.createElement("span",null,"Center"),r.a.createElement(a.a,{mode:"vertical"}),r.a.createElement("span",null,"Right"))}},1547:function(e,t){e.exports='/**\n * cn - 垂直分割线\n *   -- 使用 mode="vertical" 设置为行内的垂直分割线。\n * en - Vertical\n *  --  Use type="vertical" make it vertical.\n */\nimport React from \'react\'\nimport { Divider } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <span>Left</span>\n      <Divider mode="vertical">H</Divider>\n      <span>Center</span>\n      <Divider mode="vertical" />\n      <span>Right</span>\n    </div>\n  )\n}\n'},327:function(e,t,n){"use strict";var c=n(15),i=n(4),r=n(5),a=n(6),o=n(7),l=n(2),u=n(0),s=n.n(u),d=n(14),m=n.n(d),p=(n(32),n(1542)),f=n.n(p),v=n(10),h=Object(v.a)(f.a,"divider");function b(i){return function(){var e,t=Object(l.a)(i);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(l.a)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Object(o.a)(this,e)}}var x=function(e){Object(a.a)(n,e);var t=b(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"showText",value:function(){var e=this.props,t=e.children,n=e.mode;return t&&"horizontal"===n}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,i=e.mode,r=e.orientation,a=Object(c.a)(e,["className","children","mode","orientation"]),o=m()(h("_",i,n&&"with-text",r&&"with-text-".concat(r)),t);return s.a.createElement("div",Object.assign({},a,{className:o}),this.showText()&&s.a.createElement("span",{className:h("inner-text")},n))}}]),n}(u.PureComponent);x.defaultProps={mode:"horizontal"};t.a=x}}]);