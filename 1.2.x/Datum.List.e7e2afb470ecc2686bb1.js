(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[17],{122:function(e,t,n){"use strict";n.d(t,"h",function(){return a}),n.d(t,"i",function(){return r}),n.d(t,"j",function(){return i}),n.d(t,"a",function(){return o}),n.d(t,"f",function(){return u}),n.d(t,"e",function(){return s}),n.d(t,"c",function(){return c}),n.d(t,"d",function(){return l}),n.d(t,"b",function(){return d}),n.d(t,"g",function(){return f});var a=function(e){return"__CHANGE_SUBSCRIBE_".concat(e,"__")},r=function(e){return"__ERROR_SUBSCRIBE_".concat(e,"__")},i=function(e){return"__UPDATE_SUBSCRIBE_".concat(e,"__")},o="__CHANGE_TOPIC__",u="__VALIDATE_TOPIC__",s="__RESET_TOPIC__",c="__VALIDATE_FORCE_PASS__",l="__IGNORE_VALIDATE__",d="__UPDATE_ERROR_TYPE__",f="__WITH_OUT_DISPATCH__"},123:function(e,t,n){"use strict";var s=n(18),c=n(0),l=n.n(c),d=n(160),f=n(39),h=n(17);t.a=function(u){return function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)([]),i=Object(s.a)(n,1)[0],o=Object(c.useCallback)(function(e){e.forEach(function(e){i.push(e)})},[]);Object(c.useEffect)(function(){var e=function(){var n=document.documentElement.scrollTop,e=i.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var a=e[0].id;e.forEach(function(e){var t=document.querySelector("#".concat(e.id));t&&t.offsetTop<=n&&(a=e.id)}),r(a)}};return document.addEventListener("scroll",e),e(),function(){document.removeEventListener("scroll",e)}},[]);return l.a.createElement("div",{className:Object(h.f)("_")},l.a.createElement(u,{onHeadingSetted:o}),l.a.createElement(d.a,{className:Object(h.f)("sticky"),top:50},l.a.createElement("div",{className:Object(h.f)("nav")},i.map(function(e,t){var n=e.children.filter(function(e){return"string"==typeof e});return l.a.createElement("a",{key:t,className:Object(h.f)("level-".concat(e.level),a===e.id&&"active"),onClick:function(e){if(0===f.a.location.search.indexOf("?example="))f.a.push("".concat(f.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var t=document.getElementById(e);t&&t.scrollIntoView()}}.bind(null,e.id)},n)}))))}}},124:function(e,t,n){"use strict";var a=n(153),c=n.n(a),l=Object.prototype.hasOwnProperty;function d(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function f(e,t){if(!e[t])return[];var n=e[t];return Array.isArray(n)?n:[n]}t.a=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if(d(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var a=Object.keys(e),r=Object.keys(t),i=f(n,"skip"),o=f(n,"deep");if(a.length!==r.length)return!1;a.sort(function(e,t){return o.indexOf(e)-o.indexOf(t)});for(var u=0;u<a.length;u++){var s=a[u];if(!i.includes(s)&&(!l.call(t,s)||!d(e[s],t[s]))){if(e[s]instanceof Error&&t[s]instanceof Error){if(e[s].message!==t[s].message)return!1;continue}if(!o.includes(s))return!1;if(!c()(e[s],t[s]))return!1}}return!0}},126:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return l}),n.d(t,"b",function(){return d});var i=n(7),o=n(10),u=n(2),a=n(9),r=n(178),s=function(e){function r(e,t,n){var a;return Object(i.a)(this,r),(a=Object(o.a)(this,Object(u.a)(r).call(this))).message=e,a.name=t,a.value=n,a}return Object(a.a)(r,e),r}(Object(r.a)(Error)),c=function e(t){return t instanceof Error?new s(t.message):Array.isArray(t)?t.map(e):t},l=function(e){var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];return new Promise(function(n,a){Promise.all(e).then(function(e){var t=e.find(function(e){return!0!==e});t?a(t):n(!0)}).catch(function(e){a(t?c(e):e)})})},d=function(e,t){return e===t||(e instanceof Error&&t instanceof Error?e.message===t.message:e===t)}},129:function(e,t,n){"use strict";var _=n(0),x=n.n(_),l=n(24),C=n(18),a=n(162),d=n.n(a),f=n(35),A=n(17),h=n(25),r=n(11),o=n.n(r),i=n(163),u=n.n(i),T=(n(164),function(e){var t=e.language,n=void 0===t?"lang-jsx":t,a=e.onHighLight,r=e.value,i=Object(_.useRef)(null);return Object(_.useEffect)(function(){var e=i.current;u.a.highlightElement(e,!1,function(){a&&a(e.offsetHeight)})},[]),x.a.createElement("pre",{ref:i,className:o()(n||"lang-jsx",Object(A.a)("pre"))},x.a.createElement("code",null,r))}),D=n(149),s=n(32),c=n(7),m=n(8),v=n(10),g=n(2),p=n(9),b=n(27),y=n(136),S=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(v.a)(this,Object(g.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(p.a)(n,e),Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(y.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(y.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,t=this.props,n=t.children,a=t.placeholder;return e?n:x.a.createElement("span",{ref:this.placeholderRef},a)}}]),n}(b.b),L=n(46),N=n(39),P=x.a.createElement("div",{className:Object(A.a)("placeholder")},x.a.createElement(s.a,null));function O(e){var t=e.component,n=e.id,a=e.name,r=e.rawText,i=e.title,o=Object(_.useRef)(null),u=Object(_.useState)(!1),s=Object(C.a)(u,2),c=s[0],l=s[1],d=Object(_.useState)(),f=Object(C.a)(d,2),h=f[0],m=f[1],v=Object(_.useState)(),g=Object(C.a)(v,1)[0],p=function e(t,n,a){o.current.style.height="".concat(t*(n-1),"px"),1<n&&setTimeout(function(){e(t,n-1,a)},16),a&&(document.documentElement.scrollTop-=t)};Object(_.useEffect)(function(){if(o.current)if(c)o.current.style.height="".concat(h,"px");else{var e=h%15;0<e&&p(e,1,g),p((h-e)/15,15,g)}},[c]);var b=function(e){l(!c),g=e},y=function(e){return x.a.createElement("a",{href:"javascript:;",className:Object(A.a)("toggle"),onClick:b.bind(null,e)},x.a.createElement(L.a,{name:c?"code-close":"code"}))},O=r.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),j=N.a.location.search,E="?example=";if(0===j.indexOf(E)&&(j=j.replace(E,""),a.indexOf(j)<0))return null;var k=i.split("\n"),w=Object(D.a)(k),$=w[0],V=w.slice(1);return $&&($=$.trim()),x.a.createElement(_.Fragment,null,$&&x.a.createElement("h3",{key:"0",id:n},$),x.a.createElement(S,{placeholder:P},x.a.createElement("div",{className:Object(A.a)("_",c&&"showcode")},x.a.createElement("div",{className:Object(A.a)("body")},Object(_.createElement)(t)),0<i.length&&x.a.createElement("div",{className:Object(A.a)("desc")},V.map(function(e,t){return x.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}),y(!1)),x.a.createElement("div",{ref:o,className:Object(A.a)("code")},x.a.createElement(T,{onHighLight:function(e){m(e)},onClose:b,value:O}),y(!0)))))}O.defaultProps={rawText:""};var j=function(e){var t=e.children,n=Object(_.useState)(!1),a=Object(C.a)(n,2),r=a[0],i=a[1],o=t.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),u=r?"pre":"div";return x.a.createElement("div",{onClick:function(){i(!r)},className:Object(A.e)("console")},x.a.createElement(u,null,o))};j.defaultProps={children:[]};var E=j,k=/^<code name="([\w|-]+)" /,w=/^<example name="([\w|-]+)"/;function $(e){var t=e.onHeadingSetted,i=e.codes,o=e.examples,n=e.source,a=Object(_.useState)([]),r=Object(C.a)(a,1)[0],u=Object(_.useState)({}),s=Object(C.a)(u,1)[0];Object(_.useEffect)(function(){t&&t(r)},[]);var c=function(e){r.push(e)};return r=[],x.a.createElement(d.a,{className:Object(A.e)("_"),source:n,renderers:{code:T,heading:function(e){var t=e.level,n=e.children,a="".concat(t,"-").concat(n[0]),r="h".concat(t);if("object"==typeof n[0])return x.a.createElement(r,null,n);if(!s[a]){var i="heading-".concat(Object(f.b)());2!==t&&3!==t||c({id:i,level:t,children:n}),s[a]=x.a.createElement(r,{id:i},n)}return s[a]},html:function(e){if("<example />"===e.value)return function(){if(s.examples)return s.examples;if(!o)return x.a.createElement("div",null);var e=Object(h.a)("示例","Example"),t="heading-".concat(Object(f.b)());return c({id:t,level:2,children:[e]}),s.examples=[x.a.createElement("h2",{key:"h",id:t},e)].concat(Object(l.a)(o.map(function(e,t){if(/\d+-/.test(e.name)){var n="heading-".concat(e.name),a=e.title.split("\n"),r=Object(C.a)(a,1)[0];return c({id:n,level:3,children:[r]}),x.a.createElement(O,Object.assign({key:t,id:n},e,{lazy:2<t}))}}))),s.examples}();var t=e.value.match(w);if(t)return function(t){var e="example-".concat(t);if(!s[e]){var n=(o||[]).find(function(e){return e.name===t});s[e]=n?x.a.createElement(O,n):null}return s[e]}(t[1],e.value.indexOf("noExpand"));if("<br>"===e.value||"<br />"===e.value)return x.a.createElement("br",null);var n,a,r=e.value.match(k);return r?(n=r[1],(a=i[n])?[x.a.createElement(T,{key:"cb",value:a.text})].concat(Object(l.a)(a.log.map(function(e,t){return x.a.createElement(E,{key:t},e)}))):(console.error("Code ".concat(n," not existed")),null)):null},link:function(e){var t=e.href.indexOf(!1)?"_blank":void 0;return x.a.createElement("a",{href:e.href,target:t},e.children)}}})}$.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var V=n(45),I=n(123);n.d(t,"a",function(){return B});var R,H=((R=function(e){var t=Object(_.useState)(e.source),n=Object(C.a)(t,2),a=n[0],r=n[1];return Object(_.useEffect)(function(){e.loader&&e.loader().then(function(e){r(e.default)})},[]),a?x.a.createElement($,Object.assign({},e,{source:a})):x.a.createElement(V.a,{style:{minHeight:200}})}).defaultProps={loader:void 0,source:void 0},Object(_.memo)(R));t.b=H;function B(t){return Object(I.a)(function(e){return x.a.createElement(H,Object.assign({},e,{loader:t}))})}},133:function(e,t,n){"use strict";var a=n(137),v=n(7),g=n(8),p=n(124),b=n(122),r=function(){function c(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};Object(v.a)(this,c);var t=e.format,n=e.onChange,a=e.separator,r=e.value,i=e.prediction,o=e.distinct,u=e.disabled,s=e.limit;this.distinct=o,this.limit=s,this.separator=a,this.initFormat(t),this.$events={},this.$cachedDisabled={},this.setDisabled(u),i&&(this.prediction=i),this.setValue(r,b.g),this.onChange=n}return Object(g.a)(c,[{key:"setDisabled",value:function(e){this.$cachedDisabled!==e&&(this.$cachedDisabled=e,this.disabled=function(){switch(typeof e){case"boolean":return e;case"function":return e.apply(void 0,arguments);default:return!1}})}},{key:"handleChange",value:function(e){if(this.$values=e,this.dispatch(b.a),this.onChange){for(var t=arguments.length,n=new Array(1<t?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];this.onChange.apply(this,[this.getValue()].concat(n))}}},{key:"add",value:function(e){var t=this;if(null!=e){1===this.limit&&(this.$values=[]);var n=Array.isArray(e)?e:[e];n=n.filter(function(e){return!t.disabled(e)&&(!t.distinct||!t.check(e))});var a=[],r=!0,i=!1,o=void 0;try{for(var u,s=n[Symbol.iterator]();!(r=(u=s.next()).done);r=!0){var c=u.value,l=this.format(c);void 0!==l&&a.push(l)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}this.handleChange(this.values.concat(a),e,!0)}}},{key:"set",value:function(e){this.$values=[],this.add(e)}},{key:"check",value:function(e){if(this.prediction){for(var t=0,n=this.values.length;t<n;t++)if(this.prediction(this.values[t],e))return!0;return!1}return 0<=this.values.indexOf(this.format(e))}},{key:"clear",value:function(){this.values=[]}},{key:"dispatch",value:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=this.$events[e];r&&r.forEach(function(e){return e.apply(void 0,n)})}},{key:"initFormat",value:function(t){switch(typeof t){case"string":this.format=function(e){return e[t]};break;case"function":this.format=function(e){return t(e)};break;default:this.format=function(e){return e}}}},{key:"defaultPrediction",value:function(e,t){return e===this.format(t)}},{key:"remove",value:function(e){var t=this;if(e){var n=Array.isArray(e)?e:[e];n=n.filter(function(e){return!t.disabled(e)});var a=[],r=this.prediction||this.defaultPrediction.bind(this),i=!0,o=!1,u=void 0;try{e:for(var s,c=this.values[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){for(var l=s.value,d=0;d<n.length;d++)if(n[d].IS_NOT_MATCHED_VALUE||r(l,n[d])){n.splice(d,1);continue e}a.push(l)}}catch(e){o=!0,u=e}finally{try{i||null==c.return||c.return()}finally{if(o)throw u}}this.handleChange(a,e,!1)}}},{key:"subscribe",value:function(e,t){this.$events[e]||(this.$events[e]=[]);var n=this.$events[e];t in n||n.push(t)}},{key:"unsubscribe",value:function(e,t){this.$events[e]&&(this.$events[e]=this.$events[e].filter(function(e){return e!==t}))}},{key:"getValue",value:function(){var e=this.values;return 1===this.limit?e=this.values[0]:this.separator&&(e=this.values.join(this.separator)),this.$cachedValue=e}},{key:"resetValue",value:function(e){this.$values=e,this.onChange&&this.onChange(this.getValue()),this.dispatch(b.a),this.dispatch("set-value")}},{key:"formatValue",value:function(e){return 1!==this.limit||Array.isArray(e)?e?Array.isArray(e)?e:"string"==typeof e?this.separator?e.split(this.separator).map(function(e){return e.trim()}):(console.warn("Select separator parameter is empty."),[e]):(console.error(new Error("Select values is not valid.")),[]):[]:[e]}},{key:"setValue",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=1<arguments.length?arguments[1]:void 0;Object(p.a)(this.$cachedValue,e)||(t===b.g?this.$values=this.formatValue(e):this.resetValue(this.formatValue(e)))}},{key:"length",get:function(){return this.$values.length}},{key:"values",get:function(){return this.$values},set:function(e){this.$values=e,this.dispatch(b.a),this.onChange&&this.onChange(this.getValue())}}]),c}(),y=n(21),O=n(10),j=n(2),E=n(9),k=n(0),w=n.n(k),i=n(36),$={form:a.a,list:r},o=Object(i.b)(function(e,a){var t,n,r=e||{},i=r.type,o=void 0===i?"list":i,u=r.key,s=void 0===u?"value":u,c=r.limit,l=void 0===c?0:c,d=r.bindProps,f=void 0===d?[]:d,h=r.ignoreUndefined,m=$[o];return n=t=function(e){function u(n){var e;Object(v.a)(this,u),e=Object(O.a)(this,Object(j.a)(u).call(this,n));var t=n.datum,a=n.onChange,r=n.initValidate,i=n[s];if(t instanceof m)e.datum=t;else{var o=f.reduce(function(e,t){return e[t]=n[t],e},{value:i,limit:l,initValidate:r});e.datum=new m(Object.assign(o,t))}return a&&(e.datum.onChange=a),e}return Object(E.a)(u,e),Object(g.a)(u,[{key:"componentDidMount",value:function(){this.prevValues=this.props[s]}},{key:"componentDidUpdate",value:function(){var e=this.props[s];Object(p.a)(e,this.prevValues)||(this.setValue(this.props.initValidate?void 0:b.d),this.prevValues=e)}},{key:"setValue",value:function(e){var t=this.props[s];h&&void 0===t||this.datum.setValue(t,e)}},{key:"render",value:function(){var e=this.props,t=e.onDatumBind,n=Object(y.a)(e,["onDatumBind"]);return t&&t(this.datum),f.includes("disabled")&&void 0!==n.disabled&&this.datum.setDisabled(n.disabled),"list"===o&&this.setValue(b.g),w.a.createElement(a,Object.assign({},n,{datum:this.datum}))}}]),u}(k.PureComponent),t.defaultProps={initValidate:!1},n});t.a={Form:a.a,List:r,hoc:o}},136:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return l});var a=n(147),r=n(35),i={},o=null,u=!1,s=window.innerHeight||document.documentElement.clientHeight;function c(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>s){var n=Object(r.b)();return i[n]=e,n}return e.render(),null}function l(e){e&&delete i[e]}document.addEventListener("scroll",function(){o&&clearTimeout(o),o=setTimeout(function(){u||(u=!0,Object.keys(i).forEach(function(e){var t=i[e],n=t.element,a=t.render,r=n.getBoundingClientRect();r.bottom<0||r.top>s||(delete i[e],a())}),u=!1),o=null},80)},a.a)},137:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n(24),c=n(7),a=n(8),r=n(153),i=n.n(r),u=n(44),l=n(47),d=n(31),f=n(4),h=n(126),m=n(122),s=function(){function s(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};Object(c.a)(this,s);var t=e.removeUndefined,n=void 0===t||t,a=e.rules,r=e.onChange,i=e.value,o=e.error,u=e.initValidate;this.rules=a,this.onChange=r,this.removeUndefined=n,this.$inputNames={},this.$values={},this.$defaultValues={},this.$validator={},this.$events={},this.$errors={},this.deepSetOptions={removeUndefined:n,forceSet:!0},i&&this.setValue(i,u?void 0:m.d),o&&this.setError("",o)}return Object(a.a)(s,[{key:"handleChange",value:function(){this.onChange&&this.onChange(this.getValue())}},{key:"reset",value:function(){this.$errors={},this.setValue(Object(u.f)(Object(l.b)(this.$defaultValues)),m.c,!0),this.handleChange(),this.dispatch(m.e)}},{key:"get",value:function(e){var t=this;return Array.isArray(e)?e.map(function(e){return t.get(e)}):Object(d.a)(this.$values,e)}},{key:"set",value:function(e,t,n){Object(f.h)(e)&&(t=Object(d.f)(e),e=Object.keys(e)),Object(f.a)(e)?this.setArrayValue(e,t):t!==this.get(e)&&(Object(d.d)(this.$values,e,t,this.deepSetOptions),this.$inputNames[e]&&(this.dispatch(Object(m.j)(e),t,e),this.dispatch(Object(m.h)(e))),n&&this.publishValue(e,m.c),this.dispatch(m.a),this.handleChange())}},{key:"setArrayValue",value:function(e,n){var a=this;e.forEach(function(e,t){Object(d.d)(a.$values,e,n[t],a.deepSetOptions)}),e.forEach(function(e,t){a.$inputNames[e]&&(a.dispatch(Object(m.j)(e),n[t],e),a.dispatch(Object(m.h)(e)))}),this.dispatch(m.a),this.handleChange()}},{key:"insert",value:function(e,t,n){this.insertError(e,t,void 0),this.get(e).splice(t,0,n),this.publishValue(e,m.d),this.publishError(e)}},{key:"splice",value:function(e,t){this.spliceError(e,t),this.get(e).splice(t,1),this.publishValue(e,m.d),this.publishError(e)}},{key:"remove",value:function(e){Object(d.c)(this.$values,e)}},{key:"publishValue",value:function(e,t){var n=this,a="".concat(e,"["),r="".concat(e,".");Object.keys(this.$inputNames).filter(function(e){return 0===e.indexOf(a)||0===e.indexOf(r)}).forEach(function(e){n.dispatch(Object(m.j)(e),n.get(e),e,t)})}},{key:"getError",value:function(e,t){return t?this.$errors[e]:Object(u.b)(e,this.$errors)}},{key:"setError",value:function(e,t,n){void 0===t?delete this.$errors[e]:this.$errors[e]=t,this.dispatch(Object(m.i)(e),this.getError(e),e,m.b),n&&this.publishError(e)}},{key:"insertError",value:function(e,t,n){Object(u.d)(this.$errors,e,t,n)}},{key:"spliceError",value:function(e,t){Object(u.e)(this.$errors,e,t)}},{key:"publishError",value:function(e){var t=this,n="".concat(e,"["),a="".concat(e,".");Object.keys(this.$inputNames).filter(function(e){return 0===e.indexOf(n)||0===e.indexOf(a)}).forEach(function(e){t.dispatch(Object(m.i)(e),t.getError(e),e,m.b)})}},{key:"getRule",value:function(e){return this.rules&&Object(d.a)(this.rules,e)||[]}},{key:"getValue",value:function(){return Object(l.b)(this.$values)}},{key:"setValue",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=1<arguments.length?arguments[1]:void 0;!(2<arguments.length?arguments[2]:void 0)&&i()(e,this.$values)||(this.$values=Object(d.b)({},e,{clone:!0}),setTimeout(function(){Object.keys(t.$inputNames).sort(function(e,t){return e.length-t.length}).forEach(function(e){t.dispatch(Object(m.j)(e),t.get(e),e,n),t.dispatch(Object(m.h)(e))}),t.dispatch(m.a)}))}},{key:"bind",value:function(e,t,n,a){this.$inputNames[e]&&console.warn('There is already an item with name "'.concat(e,'" exists. The name props must be unique.')),void 0===n||this.get(e)||(this.set(e,n,!0),this.dispatch(Object(m.h)(e)),this.dispatch(m.a)),n&&(this.$defaultValues[e]=Object(l.b)(n)),this.$validator[e]=a,this.$inputNames[e]=!0,this.subscribe(Object(m.j)(e),t),this.subscribe(Object(m.i)(e),t)}},{key:"unbind",value:function(e){var t=this;Array.isArray(e)?e.forEach(function(e){return t.unbind(e)}):(this.unsubscribe(Object(m.j)(e)),this.unsubscribe(Object(m.i)(e)),delete this.$inputNames[e],delete this.$validator[e],delete this.$errors[e],delete this.$defaultValues[e],Object(d.c)(this.$values,e))}},{key:"dispatch",value:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=this.$events[e];r&&r.forEach(function(e){return e.apply(void 0,n)})}},{key:"subscribe",value:function(e,t){this.$events[e]||(this.$events[e]=[]);var n=this.$events[e];t in n||n.push(t)}},{key:"unsubscribe",value:function(e,t){this.$events[e]&&(t?this.$events[e]=this.$events[e].filter(function(e){return e!==t}):delete this.$events[e])}},{key:"validate",value:function(){var i=this;return new Promise(function(n,a){var e=Object.keys(i.$validator),t=i.getValue(),r=[].concat(Object(o.a)(e.map(function(e){return i.$validator[e](i.get(e),t)})),Object(o.a)((i.$events[m.f]||[]).map(function(e){return e()})));Promise.all(r).then(function(e){var t=e.find(function(e){return!0!==e});void 0===t?n(!0):a(t)}).catch(function(e){a(new h.a(e))})})}},{key:"validateFieldsByName",value:function(t,n){var a=this;if(!t||"string"!=typeof t)return Promise.reject(new Error('Name expect a string, get "'.concat(t,'"')));var r=[],i=this.getValue();return Object.keys(this.$validator).forEach(function(e){e!==t&&0!==e.indexOf(t)||r.push(a.$validator[e](a.get(e),i,n))}),Object(h.c)(r)}},{key:"validateFields",value:function(e,t){var n=this;Array.isArray(e)||(e=[e]);var a=e.map(function(e){return n.validateFieldsByName(e,t)});return Object(h.c)(a)}},{key:"validateClear",value:function(){var t=this,e=Object.keys(this.$validator);this.$errors={};var n=e.map(function(e){return t.$validator[e](m.c)});Promise.all(n)}}]),s}()},192:function(e,t,n){"use strict";t.a={red:{id:1,name:"red"},orange:{id:2,name:"orange"},yellow:{id:3,name:"yellow"},green:{id:4,name:"green"},cyan:{id:5,name:"cyan"},blue:{id:6,name:"blue"},violet:{id:7,name:"violet"}}},201:function(e,t,n){"use strict";var a=n(7),r=n(8),i=window.console,o=function(){function e(){Object(a.a)(this,e),this.logs={default:[]},this.current=this.logs.default}return Object(r.a)(e,[{key:"setType",value:function(e){this.logs[e]||(this.logs[e]=[]),this.current=this.logs[e]}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t.map(function(e){return"".concat((t=e,JSON.stringify(t,function(e,t){return"function"==typeof t?"fn#fn".concat(t.toString(),"fn#fn"):t},2)));var t});this.current.push(a)}}]),e}();t.a={start:function(){window.console=new o},setType:function(e){window.console.setType(e)},end:function(){var e=window.console.logs;return window.console=i,e}}},938:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(123),o=n(129),u=n(201),s=n(25),c=n(939),l=n.n(c),d=n(940),f=n.n(d),h=Object(s.a)(l.a,f.a),m=[];u.a.start(),u.a.setType("disabled"),n(941),u.a.setType("example"),n(942),u.a.setType("format"),n(943),u.a.setType("onchange"),n(944),u.a.setType("prediction"),n(945),u.a.setType("separator"),n(946);var v=u.a.end(),g={disabled:{text:n(947),log:v.disabled},example:{text:n(948),log:v.example},format:{text:n(949),log:v.format},onchange:{text:n(950),log:v.onchange},prediction:{text:n(951),log:v.prediction},separator:{text:n(952),log:v.separator}};t.default=Object(i.a)(function(e){return r.a.createElement(o.b,Object.assign({},e,{codes:g,source:h,examples:m}))})},939:function(e,t){e.exports="# Data.List 数据处理\n\n列表数据辅助类，用来处理如 Select，Table 等组件在复杂数据情况下，格式化数据、校验状态、拼接结果等操作。\n\n\n## 示例\n\n这个页面中示例用到的数据如下\n```\nconst data = {\n  red: { id: 1, name: 'red' },\n  orange: { id: 2, name: 'orange' },\n  yellow: { id: 3, name: 'yellow' },\n  green: { id: 4, name: 'green' },\n  cyan: { id: 5, name: 'cyan' },\n  blue: { id: 6, name: 'blue' },\n  violet: { id: 7, name: 'violet' },\n}\n```\n<code name=\"example\" />\n\n## 初始化参数\n\n### format  *null | string | function(d)*\nformat 是Datum内部用来把复杂数据格式化为需要的值，可以为 null, string, function\n\n- **null** - 为空时，返回值为原始数据\n- **string** - 为string时，会作为key从原始数据中获取值，相当于 (d) => d\\[format]\n- **function(d)** - d 为单条原始数据\n\n<code name=\"format\" />\n\n### onChange *function(value)*\n值改变时触发的回调函数。value 为 format 函数格式化后的数据。\n\n<code name=\"onchange\" />\n\n### separator *null | string*\n分隔符。为空时，value会保留Array格式。不为空时，value会处理为 separator 分隔的字符串。\n\n<code name=\"separator\" />\n\n### prediction *function(val, d):bool*\nDatum内部存储的是format之后的值，所以需要prediction函数来比对存储的值和原始数据是否一致。不设置，会使用此默认值:\n```\n(val, d) => val === format(d)\n```\n\n通常用在 value 为对象时，值相同却不是同一个对象等情况。\n\n<code name=\"prediction\" />\n\n### disabled *function(d):bool*\n判断数据项是否禁用。如果返回 true，add 和 remove 函数会忽略此数据。\n\n<code name=\"disabled\" />\n\n### value *array | string*\n初始值，可以为 Array 或 String。\n\n## 函数\n\n### getValue *function():array|string*\n获取当前值。根据separator的设置，返回array或者string。\n\n### setValue *function(array|string)*\n设置值。新的值会替代当前值。\n\n### add *function(array|object)*\n添加数据。值为 format 前的原始数据，单条或者一组数据。\n\n### remove *function(array|object)*\n移除数据。值为 format 前的原始数据，单条或者一组数据。\n\n### clear *function*\n清空数据。"},940:function(e,t){e.exports="# Data.List\n\n The auxiliary class that process the array values.\n \n## Example\n\nThe data used in the example on this page is as follows:\n```\nconst data = {\n  red: { id: 1, name: 'red' },\n  orange: { id: 2, name: 'orange' },\n  yellow: { id: 3, name: 'yellow' },\n  green: { id: 4, name: 'green' },\n  cyan: { id: 5, name: 'cyan' },\n  blue: { id: 6, name: 'blue' },\n  violet: { id: 7, name: 'violet' },\n}\n```\n\n<br />\n\n<code name=\"example\" />\n\n## Arguments\n\n### format  *null | string | function(d)*\nThe format is used to convert the original data object to the specified value.\n\n- **null** - When it is null, the return value is the original data.\n- **string** - When it is a string, it will get the value from the original data as the key, which is equivalent to (d) => d\\[format].\n- **function(d)** - d is the single original data.\n\n<code name=\"format\" />\n\n### onChange *function(value)*\nA callback function triggered when a value changes. Value is an array of the formatted data for the format function or string(separator is a string).\n\n<code name=\"onchange\" />\n\n### separator *null | string*\nWhen it is null, value is the Array format.\n\nWhen it is a string, value is a string delimited by the separator.\n\n<code name=\"separator\" />\n\n### prediction *function(val, d):bool*\nDetermine whether the value is consistent with the original data. If it is not set, this default prediction will be used:\n```\n(val, d) => val === format(d)\n```\n\n<code name=\"prediction\" />\n\n### disabled *function(d):bool*\nDetermines whether data items are disabled. If true, the add and remove functions will ignore this item.\n\n<code name=\"disabled\" />\n\n### value *array | string*\nThe initial value.\n\n## Methods\n\n### getValue *function():array|string*\nGet the current values. Return array or string depending on the separator setting.\n\n### setValue *function(array|string)*\nSet the value. The new value will replace the current value.\n\n### add *function(array|object)*\nAdd data. The value is the original data before being formatted.\n\n### remove *function(array|object)*\nRemove data. The value is the original data before being formatted.\n\n### clear *function*\nClear all data.\n"},941:function(e,t,n){"use strict";n.r(t);var a=n(133),r=n(192),i=new a.a.List({disabled:function(e){return"blue"===e.name||"red"===e.name},format:function(e){return e.name},onChange:function(e){console.log(e)}});i.setValue(["red"]),i.add([r.a.orange,r.a.blue]),i.remove([r.a.orange,r.a.red])},942:function(e,t,n){"use strict";n.r(t);var a=n(133),r=n(192),i=new a.a.List({format:"name",separator:",",prediction:function(e,t){return e===t.name},value:"blue",onChange:function(e){console.log(e)}});i.add(r.a.orange),i.add(r.a.green),i.remove(r.a.green),i.clear(),i.setValue("red,violet"),i.add(r.a.cyan)},943:function(e,t,n){"use strict";n.r(t);var a=n(133),r=n(192),i=new a.a.List({});i.add(r.a.red),console.log(i.getValue()),(i=new a.a.List({format:function(e){return e.name}})).add(r.a.red),console.log(i.getValue()),(i=new a.a.List({format:function(e){return"".concat(e.id,"-").concat(e.name)}})).add(r.a.red),i.add(r.a.green),console.log(i.getValue())},944:function(e,t,n){"use strict";n.r(t);var a=n(133),r=n(192),i=new a.a.List({format:function(e){return e.name},onChange:function(e){console.log(e)}});i.setValue(["blue"]),i.add(r.a.red),i.add(r.a.orange),i.remove(r.a.red),i.clear()},945:function(e,t,n){"use strict";n.r(t);var a=n(133),r=n(192),i=new a.a.List({format:"id",separator:",",prediction:function(e,t){return parseInt(e,10)===t.id},value:"2,3"});i.add(r.a.red),console.log(i.getValue()),i.remove(r.a.orange),console.log(i.getValue())},946:function(e,t,n){"use strict";n.r(t);var a=n(133),r=n(192),i=function(e){return console.log(e)},o=new a.a.List({format:"id",value:[2,3],onChange:i});o.add(r.a.red),(o=new a.a.List({format:"name",onChange:i,separator:",",value:"red,yellow"})).add(r.a.blue),o.remove(r.a.yellow),(o=new a.a.List({format:"name",onChange:i,separator:"|",value:"red|yellow"})).add(r.a.cyan)},947:function(e,t){e.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nconst datum = new Datum.List({\n  disabled: d => d.name === 'blue' || d.name === 'red',\n  format: d => d.name,\n  onChange(value) {\n    console.log(value)\n  },\n})\n\ndatum.setValue(['red'])\ndatum.add([data.orange, data.blue]) // orange, blue\ndatum.remove([data.orange, data.red]) // orange, red\n"},948:function(e,t){e.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nconst datum = new Datum.List({\n  format: 'name',\n  separator: ',',\n  prediction: (val, d) => val === d.name,\n  value: 'blue',\n  onChange: values => {\n    console.log(values)\n  },\n})\ndatum.add(data.orange)\ndatum.add(data.green)\ndatum.remove(data.green)\ndatum.clear()\ndatum.setValue('red,violet')\ndatum.add(data.cyan)\n"},949:function(e,t){e.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nlet datum = new Datum.List({})\ndatum.add(data.red)\nconsole.log(datum.getValue())\n\ndatum = new Datum.List({ format: d => d.name })\ndatum.add(data.red)\nconsole.log(datum.getValue())\n\ndatum = new Datum.List({ format: d => `${d.id}-${d.name}` })\ndatum.add(data.red)\ndatum.add(data.green)\nconsole.log(datum.getValue())\n"},950:function(e,t){e.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nconst datum = new Datum.List({\n  format: d => d.name,\n  onChange(value) {\n    console.log(value)\n  },\n})\n\ndatum.setValue(['blue'])\ndatum.add(data.red)\ndatum.add(data.orange)\ndatum.remove(data.red)\ndatum.clear()\n"},951:function(e,t){e.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nconst datum = new Datum.List({\n  format: 'id',\n  separator: ',',\n  prediction: (val, d) => parseInt(val, 10) === d.id,\n  value: '2,3',\n})\ndatum.add(data.red)\nconsole.log(datum.getValue())\ndatum.remove(data.orange)\nconsole.log(datum.getValue())\n"},952:function(e,t){e.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nconst onChange = value => console.log(value)\n\nlet datum = new Datum.List({ format: 'id', value: [2, 3], onChange })\ndatum.add(data.red)\n\ndatum = new Datum.List({\n  format: 'name',\n  onChange,\n  separator: ',',\n  value: 'red,yellow',\n})\ndatum.add(data.blue)\ndatum.remove(data.yellow)\n\ndatum = new Datum.List({\n  format: 'name',\n  onChange,\n  separator: '|',\n  value: 'red|yellow',\n})\ndatum.add(data.cyan)\n"}}]);