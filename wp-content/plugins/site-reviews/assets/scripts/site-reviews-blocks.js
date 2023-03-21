/*! For license information please see site-reviews-blocks.js.LICENSE.txt */
!function(){"use strict";var e={408:function(e,t){var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||f}function h(){}function b(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=y.prototype;var w=b.prototype=new h;w.constructor=b,g(w,y.prototype),w.isPureReactComponent=!0;var _=Array.isArray,x=Object.prototype.hasOwnProperty,S={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var s,a={},i=null,o=null;if(null!=t)for(s in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,s)&&!k.hasOwnProperty(s)&&(a[s]=t[s]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(s in l=e.defaultProps)void 0===a[s]&&(a[s]=l[s]);return{$$typeof:n,type:e,key:i,ref:o,props:a,_owner:S.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var O=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function j(e,t,s,a,i){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var l=!1;if(null===e)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return i=i(l=e),e=""===a?"."+R(l,0):a,_(i)?(s="",null!=e&&(s=e.replace(O,"$&/")+"/"),j(i,t,s,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,s+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(O,"$&/")+"/")+e)),t.push(i)),1;if(l=0,a=""===a?".":a+":",_(e))for(var c=0;c<e.length;c++){var u=a+R(o=e[c],c);l+=j(o,t,s,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(o=e.next()).done;)l+=j(o=o.value,t,s,u=a+R(o,c++),i);else if("object"===o)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function L(e,t,n){if(null==e)return e;var r=[],s=0;return j(e,r,"","",(function(e){return t.call(n,e,s++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},A={transition:null};t.createElement=E},294:function(e,t,n){e.exports=n(408)}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}!function(){var e=wp.i18n._x,t=[{label:"- "+e("Select","admin-text","site-reviews")+" -",value:""},{label:"- "+e("Specific Post ID","admin-text","site-reviews")+" -",value:"custom"},{label:e("The Current Page","admin-text","site-reviews"),value:"post_id"},{label:e("The Parent Page","admin-text","site-reviews"),value:"parent_id"}],r=wp.i18n._x,s=[],a={label:"- "+r("Select","admin-text","site-reviews")+" -",value:""},i={label:"- "+r("Multiple Categories","admin-text","site-reviews")+" -",value:"custom"};wp.apiFetch({path:"/site-reviews/v1/categories?per_page=50"}).then((function(e){s.push(a),s.push(i),jQuery.each(e,(function(e,t){s.push({label:"".concat(t.name," (").concat(t.slug,")"),value:t.id})}))}));var o=s,l=wp.i18n._x,c=[{label:"- "+l("Select","admin-text","site-reviews")+" -",value:""},{label:"- "+l("Specific User ID","admin-text","site-reviews")+" -",value:"custom"},{label:l("The Logged-in user","admin-text","site-reviews"),value:"user_id"},{label:l("The Page author","admin-text","site-reviews"),value:"author_id"},{label:l("The Profile user (BuddyPress/Ultimate Member)","admin-text","site-reviews"),value:"profile_id"}];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var d=n(294),m=["children","custom_value","help","label","onChange","options","className","hideLabelFromVision","selectedValue"],f=(wp.i18n._x,wp.components),g=f.BaseControl,v=f.SelectControl,y=(f.TextControl,lodash.isEmpty),h=wp.compose.useInstanceId;var b={},w=function(e,t){var n=b[e]||[],r=[];t&&[].forEach.call(n,(function(e){t!==e.fn&&t!==e.fn.once&&r.push(e)})),r.length?b[e]=r:delete b[e]},x=function(e,t,n){(b[e]||(b[e]=[])).push({fn:t,context:n})},S={events:b,off:w,on:x,once:function(e,t,n){var r=function r(){w(e,r),t.apply(n,arguments)};r.once=t,x(e,r,n)},trigger:function(e){var t=[].slice.call(arguments,1),n=(b[e]||[]).slice();[].forEach.call(n,(function(e){return e.fn.apply(e.context,t)}))}},k=function(e,t,n){GLSR.Event.trigger(t,e,n)};function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,s,a,i,o=[],l=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);l=!0);}catch(e){c=!0,s=e}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw s}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function R(e){var t=function(e,t){if("object"!==O(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===O(t)?t:String(t)}function j(e,t,n){return(t=R(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=wp.element,P=L.useRef,N=L.useState,A=L.useEffect;function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=lodash,T=M.debounce,D=M.isEqual,G=M.reduce,H=wp.compose.usePrevious,F=wp.element,z=F.RawHTML,U=F.useEffect,$=F.useRef,V=F.useState,Q=wp.i18n,q=Q.__,W=Q.sprintf,Y=wp.apiFetch,J=wp.url.addQueryArgs,X=wp.components,K=X.Placeholder,Z=X.Spinner,ee=wp.blocks.getBlockType;function te(e,t,n){var r,s,a,i,o,l,c=(r=function(){return T(e,t,n)},s=[e,t,n],a=N((function(){return{inputs:s,result:r()}}))[0],i=P(!0),o=P(a),l=i.current||Boolean(s&&o.current.inputs&&function(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(s,o.current.inputs))?o.current:{inputs:s,result:r()},A((function(){i.current=!1,o.current=l}),[l]),l.result);return U((function(){return function(){return c.cancel()}}),[c]),c}function ne(e){var t=e.className;return(0,d.createElement)(K,{className:t},q("Block rendered as empty."))}function re(e){var t=e.response,n=e.className,r=W(q("Error loading block: %s"),t.errorMsg);return(0,d.createElement)(K,{className:n},r)}function se(e){var t=e.className;return(0,d.createElement)(K,{className:t},(0,d.createElement)(Z,null))}var ae=wp.i18n._x,ie=[{label:"- "+ae("Select","admin-text","site-reviews")+" -",value:""},{label:ae("Terms were accepted","admin-text","site-reviews"),value:"true"},{label:ae("Terms were not accepted","admin-text","site-reviews"),value:"false"}],oe={label:"- "+(0,wp.i18n._x)("Select","admin-text","site-reviews")+" -",value:""},le=[];wp.apiFetch({path:"/site-reviews/v1/types?per_page=50"}).then((function(e){e.length<2||(le.push(oe),jQuery.each(e,(function(e,t){le.push({label:t.name,value:t.id})})))}));var ce=le;function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var pe=function(e,t){var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.raw);return n.hide&&(n.hide=n.hide.join()),n.rating&&(n.rating=Number(n.rating)),~["","post_id","parent_id"].indexOf(n.assigned_posts)?t.assign_to?n.assign_to=n.assigned_posts:n.assigned_to=n.assigned_posts:t.assign_to?n.assign_to="custom":n.assigned_to="custom",n.user=n.assigned_users,~_.findIndex(c,(function(e){return e.value==n.assigned_users}))||(n.user="custom"),n.category=n.assigned_terms,~_.findIndex(o,(function(e){return e.value==n.assigned_terms}))||(n.category="custom"),n},de=wp.components.CheckboxControl,me=wp.element.useState;window.hasOwnProperty("GLSR")||(window.GLSR={Event:S}),GLSR.blocks={AssignedPostsOptions:t,AssignedTermsOptions:o,AssignedUsersOptions:c,CheckboxControlList:function(e,t,n){var r=[];return jQuery.each(e,(function(e,s){var a=C(me(!1),2),i=a[0],o=a[1],l=t.split(",").indexOf(e)>-1;r.push((0,d.createElement)(de,{key:"hide-".concat(e),className:"glsr-checkbox-control",checked:l||i,label:s,onChange:function(r){o(r),t=_.without(_.without(t.split(","),""),e),r&&t.push(e),n({hide:t.toString()})},__nextHasNoMarginBottom:!0}))})),r},ConditionalSelectControl:function e(t){var n=t.children,r=t.custom_value,s=void 0===r?"custom":r,a=t.help,i=t.label,o=t.onChange,l=t.options,c=void 0===l?[]:l,f=t.className,b=t.hideLabelFromVision,w=(t.selectedValue,p(t,m)),_=h(e),x="inspector-select-control-".concat(_),S=w.value;return!y(c)&&(0,d.createElement)(g,{label:i,hideLabelFromVision:b,id:x,help:a,className:f,__nextHasNoMarginBottom:!0},(0,d.createElement)(v,u({id:x,className:"components-select-control__input","aria-describedby":a?"".concat(x,"__help"):void 0,onChange:o,options:c},w,{__next36pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),s===S&&n)},ServerSideRender:function(e){var t=e.attributes,n=e.block,r=e.className,s=e.httpMethod,a=void 0===s?"GET":s,i=e.urlQueryArgs,o=e.EmptyResponsePlaceholder,l=void 0===o?ne:o,c=e.ErrorResponsePlaceholder,p=void 0===c?re:c,m=e.LoadingResponsePlaceholder,f=void 0===m?se:m,g=$(!0),v=$(),y=C(V(null),2),h=y[0],b=y[1],w=H(e);function _(){var e;if(g.current){null!==h&&b(null);var r=null!==(e=t&&function(e,t){var n=ee(e);if(void 0===n)throw new Error("Block type '".concat(e,"' is not registered."));return G(n.attributes,(function(e,n,r){var s=t[r];return void 0!==s?e[r]=s:n.hasOwnProperty("default")&&(e[r]=n.default),-1!==["node","children"].indexOf(n.source)&&("string"==typeof e[r]?e[r]=[e[r]]:Array.isArray(e[r])||(e[r]=[])),e}),{})}(n,t))&&void 0!==e?e:null,s="POST"===a,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return J("/wp/v2/block-renderer/".concat(e),B(B({context:"edit"},null!==t?{attributes:t}:{}),n))}(n,s?null:r,i),l=s?{attributes:r}:null,c=v.current=Y({path:o,data:l,method:s?"POST":"GET"}).then((function(e){g.current&&c===v.current&&e&&b(e.rendered)})).catch((function(e){g.current&&c===v.current&&b({error:!0,errorMsg:e.message})}));return c}}var x=te(_,500);return U((function(){return function(){g.current=!1}}),[]),U((function(){void 0===w?_():D(w,e)||x()})),U((function(){e.onRender&&e.onRender(h,n,t)}),[h]),""===h?(0,d.createElement)(l,e):h?h.error?(0,d.createElement)(p,u({response:h},e)):(0,d.createElement)(z,{className:r},h):(0,d.createElement)(f,e)},onRender:k,TermOptions:ie,TypeOptions:ce,transformWidgetAttributes:pe};var fe=wp.i18n._x,ge=wp.blocks,ve=ge.createBlock,ye=ge.registerBlockType,he=wp.blockEditor,be=he.InspectorAdvancedControls,we=he.InspectorControls,_e=wp.components,xe=_e.Icon,Se=_e.PanelBody,ke=(_e.SelectControl,_e.TextControl),Ee=GLSR.blocks,Ce=Ee.AssignedPostsOptions,Oe=Ee.AssignedTermsOptions,Re=Ee.AssignedUsersOptions,je=Ee.CheckboxControlList,Le=Ee.ConditionalSelectControl,Pe=Ee.ServerSideRender,Ne=Ee.onRender,Ae=Ee.transformWidgetAttributes,Ie=GLSR.nameprefix+"/form",Be={assign_to:{default:"",type:"string"},assigned_posts:{default:"",type:"string"},assigned_terms:{default:"",type:"string"},assigned_users:{default:"",type:"string"},category:{default:"",type:"string"},className:{default:"",type:"string"},hide:{default:"",type:"string"},id:{default:"",type:"string"},reviews_id:{default:"",type:"string"},user:{default:"",type:"string"}},Me=(ye(Ie,{attributes:Be,category:GLSR.nameprefix,description:fe("Display a review form.","admin-text","site-reviews"),edit:function(e){var t=e.attributes,n=t.assign_to,r=t.assigned_posts,s=t.assigned_terms,a=t.assigned_users,i=t.category,o=t.hide,l=t.id,c=t.reviews_id,u=t.user,p=(e.className,e.setAttributes),m={assign_to:(0,d.createElement)(Le,{key:"assigned_posts",label:fe("Assign Reviews to a Page","admin-text","site-reviews"),onChange:function(e){return p({assign_to:e,assigned_posts:"custom"===e?r:""})},options:Ce,value:n},(0,d.createElement)(ke,{key:"custom_assigned_posts",className:"glsr-base-conditional-control",help:fe("Separate values with a comma.","admin-text","site-reviews"),onChange:function(e){return p({assigned_posts:e})},placeholder:fe("Enter the Post IDs","admin-text","site-reviews"),type:"text",value:r,__nextHasNoMarginBottom:!0})),category:(0,d.createElement)(Le,{key:"assigned_terms",label:fe("Assign Reviews to a Category","admin-text","site-reviews"),onChange:function(e){return p({category:e,assigned_terms:"custom"===e?s:""})},options:Oe,value:i},(0,d.createElement)(ke,{key:"custom_assigned_terms",className:"glsr-base-conditional-control",help:fe("Separate values with a comma.","admin-text","site-reviews"),onChange:function(e){return p({assigned_terms:e})},placeholder:fe("Enter the Category IDs or slugs","admin-text","site-reviews"),type:"text",value:s,__nextHasNoMarginBottom:!0})),user:(0,d.createElement)(Le,{key:"assigned_users",label:fe("Assign Reviews to a User","admin-text","site-reviews"),onChange:function(e){return p({user:e,assigned_users:"custom"===e?a:""})},options:Re,value:u},(0,d.createElement)(ke,{key:"custom_assigned_users",className:"glsr-base-conditional-control",help:fe("Separate values with a comma.","admin-text","site-reviews"),onChange:function(e){return p({assigned_users:e})},placeholder:fe("Enter the User IDs or usernames","admin-text","site-reviews"),type:"text",value:a,__nextHasNoMarginBottom:!0})),hide:je(GLSR.hideoptions.site_reviews_form,o,p)},f={panel_settings:(0,d.createElement)(Se,{title:fe("Settings","admin-text","site-reviews")},Object.values(wp.hooks.applyFilters(GLSR.nameprefix+".form.InspectorControls",m,e)))},g={id:(0,d.createElement)(ke,{label:fe("Custom ID","admin-text","site-reviews"),onChange:function(e){return p({id:e})},value:l,__nextHasNoMarginBottom:!0}),reviews_id:(0,d.createElement)(ke,{help:fe("Enter the Custom ID of a reviews block, shortcode, or widget where the review should be displayed after submission.","admin-text","site-reviews"),label:fe("Custom Reviews ID","admin-text","site-reviews"),onChange:function(e){return p({reviews_id:e})},value:c,__nextHasNoMarginBottom:!0})};return[(0,d.createElement)(we,null,Object.values(wp.hooks.applyFilters(GLSR.nameprefix+".form.InspectorPanels",f,e))),(0,d.createElement)(be,null,Object.values(wp.hooks.applyFilters(GLSR.nameprefix+".form.InspectorAdvancedControls",g,e))),(0,d.createElement)(Pe,{block:Ie,attributes:e.attributes,onRender:Ne})]},example:{},icon:function(){return(0,d.createElement)(xe,{icon:(0,d.createElement)("svg",null,(0,d.createElement)("path",{d:"M12 2a.36.36 0 0 1 .321.199l2.968 6.01a.36.36 0 0 0 .268.196l6.634.963a.36.36 0 0 1 .199.612l-4.8 4.676a.36.36 0 0 0-.103.318l1.133 6.605a.36.36 0 0 1-.521.378l-5.933-3.12a.36.36 0 0 0-.334 0l-5.934 3.118a.36.36 0 0 1-.519-.377l1.133-6.605a.36.36 0 0 0-.103-.318L1.609 9.981a.36.36 0 0 1 .201-.612l6.632-.963a.36.36 0 0 0 .27-.196l2.967-6.01A.36.36 0 0 1 12 2zm0 2.95v12.505c.492 0 .982.117 1.43.35l3.328 1.745-.636-3.694c-.171-.995.16-2.009.885-2.713l2.693-2.617-3.724-.539c-1.001-.145-1.866-.772-2.313-1.675L12 4.95zM21 1v.963h-3.479v1.683h3.272v.963h-3.272V7.3h-1.017V1H21z"}))})},keywords:["reviews","form"],save:function(){return null},supports:{html:!1},title:fe("Review Form","admin-text","site-reviews"),transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:function(e){var t=e.idBase,n=e.instance;return"glsr_site-reviews-form"===t&&!(null==n||!n.raw)},transform:function(e){var t=e.instance;return ve(Ie,Ae(t,Be))}}]}}),wp.i18n._x),Te=wp.blocks,De=Te.createBlock,Ge=Te.registerBlockType,He=wp.blockEditor,Fe=He.InspectorAdvancedControls,ze=He.InspectorControls,Ue=wp.components,$e=Ue.Icon,Ve=Ue.PanelBody,Qe=Ue.TextControl,qe=GLSR.blocks,We=qe.CheckboxControlList,Ye=qe.ServerSideRender,Je=qe.onRender,Xe=qe.transformWidgetAttributes,Ke=GLSR.nameprefix+"/review",Ze={className:{default:"",type:"string"},hide:{default:"",type:"string"},id:{default:"",type:"string"},post_id:{default:"",type:"string"}};wp.hooks.addFilter("blocks.getBlockAttributes",Ke,(function(e,t,n,r){return e}));Ge(Ke,{attributes:Ze,category:GLSR.nameprefix,description:Me("Display a single review.","admin-text","site-reviews"),edit:function(e){var t=e.attributes,n=t.hide,r=t.id,s=t.post_id,a=(e.className,e.setAttributes),i={post_id:(0,d.createElement)(Qe,{key:"post_id",label:Me("Review Post ID","admin-text","site-reviews"),onChange:function(e){return a({post_id:e})},placeholder:Me("Enter a Review Post ID","admin-text","site-reviews"),value:s,__nextHasNoMarginBottom:!0}),hide:We(GLSR.hideoptions.site_review,n,a)},o={panel_settings:(0,d.createElement)(Ve,{title:Me("Settings","admin-text","site-reviews")},Object.values(wp.hooks.applyFilters(GLSR.nameprefix+".review.InspectorControls",i,e)))},l={id:(0,d.createElement)(Qe,{label:Me("Custom ID","admin-text","site-reviews"),onChange:function(e){return a({id:e})},value:r,__nextHasNoMarginBottom:!0})};return[(0,d.createElement)(ze,null,Object.values(wp.hooks.applyFilters(GLSR.nameprefix+".review.InspectorPanels",o,e))),(0,d.createElement)(Fe,null,Object.values(wp.hooks.applyFilters(GLSR.nameprefix+".review.InspectorAdvancedControls",l,e))),(0,d.createElement)(Ye,{block:Ke,attributes:e.attributes,onRender:Je})]},example:{},icon:function(){return(0,d.createElement)($e,{icon:(0,d.createElement)("svg",null,(0,d.createElement)("path",{d:"M12 2a.36.36 0 0 1 .321.199l2.968 6.01a.36.36 0 0 0 .268.196l6.634.963a.36.36 0 0 1 .199.612l-4.8 4.676a.36.36 0 0 0-.103.318l1.133 6.605a.36.36 0 0 1-.521.378l-5.933-3.12a.36.36 0 0 0-.334 0l-5.934 3.118a.36.36 0 0 1-.519-.377l1.133-6.605a.36.36 0 0 0-.103-.318l-4.8-4.674a.36.36 0 0 1 .201-.612l6.632-.963a.36.36 0 0 0 .27-.196l2.967-6.01A.36.36 0 0 1 12 2zm0 2.95v12.505c.492 0 .982.117 1.43.35l3.328 1.745-.636-3.694a3.06 3.06 0 0 1 .885-2.713l2.693-2.617-3.724-.539a3.07 3.07 0 0 1-2.313-1.675L12 4.95zm4.5 1.36h1.781V2.477l-1.146.865-.582-.776L18.605 1h.792v5.31H21v.99h-4.5z"}))})},keywords:["review"],save:function(){return null},supports:{html:!1},title:Me("Single Review","admin-text","site-reviews"),transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:function(e){var t=e.idBase,n=e.instance;return"glsr_site-review"===t&&!(null==n||!n.raw)},transform:function(e){var t=e.instance;return De(Ke,Xe(t,Ze))}}]}});var et=wp.i18n._x,tt=wp.blocks,nt=tt.createBlock,rt=tt.registerBlockType,st=wp.blockEditor,at=st.InspectorAdvancedControls,it=st.InspectorControls,ot=wp.components,lt=ot.Icon,ct=ot.PanelBody,ut=ot.RangeControl,pt=ot.SelectControl,dt=ot.TextControl,mt=ot.ToggleControl,ft=GLSR.blocks,gt=ft.AssignedPostsOptions,vt=ft.AssignedTermsOptions,yt=ft.AssignedUsersOptions,ht=ft.CheckboxControlList,bt=ft.ConditionalSelectControl,wt=ft.ServerSideRender,_t=ft.onRender,xt=ft.TermOptions,St=ft.TypeOptions,kt=ft.transformWidgetAttributes,Et=GLSR.nameprefix+"/reviews",Ct={assigned_to:{default:"",type:"string"},assigned_posts:{default:"",type:"string"},assigned_terms:{default:"",type:"string"},assigned_users:{default:"",type:"string"},category:{default:"",type:"string"},className:{default:"",type:"string"},display:{default:5,type:"number"},hide:{default:"",type:"string"},id:{default:"",type:"string"},pagination:{default:"",type:"string"},post_id:{default:"",type:"string"},rating:{default:0,type:"number"},schema:{default:!1,type:"boolean"},terms:{default:"",type:"string"},type:{default:"local",type:"string"},user:{default:"",type:"string"}};wp.hooks.addFilter("blocks.getBlockAttributes",Et,(function(e,t,n,r){return r&&r.count&&(e.display=r.count),e}));rt(Et,{attributes:Ct,category:GLSR.nameprefix,description:et("Display your most recent reviews.","admin-text","site-reviews"),edit:function(e){e.attributes.post_id=jQuery("#post_ID").val();var t=e.attributes,n=t.assigned_to,r=t.assigned_posts,s=t.assigned_terms,a=t.assigned_users,i=t.category,o=t.display,l=t.hide,c=t.id,u=t.pagination,p=t.rating,m=t.schema,f=t.terms,g=t.type,v=t.user,y=(e.className,e.setAttributes),h={assigned_to:(0,d.createElement)(bt,{key:"assigned_posts",label:et("Limit Reviews to an Assigned Page","admin-text","site-reviews"),onChange:function(e){return y({assigned_to:e,assigned_posts:"custom"===e?r:""})},options:gt,value:n},(0,d.createElement)(dt,{key:"custom_assigned_posts",className:"glsr-base-conditional-control",help:et("Separate values with a comma.","admin-text","site-reviews"),onChange:function(e){return y({assigned_posts:e})},placeholder:et("Enter the Post IDs","admin-text","site-reviews"),type:"text",value:r,__nextHasNoMarginBottom:!0})),category:(0,d.createElement)(bt,{key:"assigned_terms",label:et("Limit Reviews to an Assigned Category","admin-text","site-reviews"),onChange:function(e){return y({category:e,assigned_terms:"custom"===e?s:""})},options:vt,value:i},(0,d.createElement)(dt,{key:"custom_assigned_terms",className:"glsr-base-conditional-control",help:et("Separate values with a comma.","admin-text","site-reviews"),onChange:function(e){return y({assigned_terms:e})},placeholder:et("Enter the Category IDs or slugs","admin-text","site-reviews"),type:"text",value:s,__nextHasNoMarginBottom:!0})),user:(0,d.createElement)(bt,{key:"assigned_users",label:et("Limit Reviews to an Assigned User","admin-text","site-reviews"),onChange:function(e){return y({user:e,assigned_users:"custom"===e?a:""})},options:yt,value:v},(0,d.createElement)(dt,{key:"custom_assigned_users",className:"glsr-base-conditional-control",help:et("Separate values with a comma.","admin-text","site-reviews"),onChange:function(e){return y({assigned_users:e})},placeholder:et("Enter the User IDs or usernames","admin-text","site-reviews"),type:"text",value:a,__nextHasNoMarginBottom:!0})),terms:(0,d.createElement)(pt,{key:"terms",label:et("Limit Reviews to terms","admin-text","site-reviews"),onChange:function(e){return y({terms:e})},options:xt,value:f,__next36pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),pagination:(0,d.createElement)(pt,{key:"pagination",label:et("Enable Pagination","admin-text","site-reviews"),onChange:function(e){return y({pagination:e})},options:[{label:"- "+et("Select","admin-text","site-reviews")+" -",value:""},{label:et("Yes (AJAX load more)","admin-text","site-reviews"),value:"loadmore"},{label:et("Yes (AJAX pagination)","admin-text","site-reviews"),value:"ajax"},{label:et("Yes (page reload)","admin-text","site-reviews"),value:"true"}],value:u,__next36pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),type:(0,d.createElement)(pt,{key:"type",label:et("Limit the Type of Reviews","admin-text","site-reviews"),onChange:function(e){return y({type:e})},options:St,value:g,__next36pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),display:(0,d.createElement)(ut,{key:"display",label:et("Reviews Per Page","admin-text","site-reviews"),min:1,max:50,onChange:function(e){return y({display:e})},value:o,__nextHasNoMarginBottom:!0}),rating:(0,d.createElement)(ut,{key:"rating",label:et("Minimum Rating","admin-text","site-reviews"),min:0,max:GLSR.maxrating,onChange:function(e){return y({rating:e})},value:p,__nextHasNoMarginBottom:!0}),schema:(0,d.createElement)(mt,{key:"schema",checked:m,help:et("The schema should only be enabled once per page.","admin-text","site-reviews"),label:et("Enable the schema?","admin-text","site-reviews"),onChange:function(e){return y({schema:e})},__nextHasNoMarginBottom:!0}),hide:ht(GLSR.hideoptions.site_reviews,l,y)},b={panel_settings:(0,d.createElement)(ct,{title:et("Settings","admin-text","site-reviews")},Object.values(wp.hooks.applyFilters(GLSR.nameprefix+".reviews.InspectorControls",h,e)))},w={id:(0,d.createElement)(dt,{label:et("Custom ID","admin-text","site-reviews"),onChange:function(e){return y({id:e})},value:c,__nextHasNoMarginBottom:!0})};return[(0,d.createElement)(it,null,Object.values(wp.hooks.applyFilters(GLSR.nameprefix+".reviews.InspectorPanels",b,e))),(0,d.createElement)(at,null,Object.values(wp.hooks.applyFilters(GLSR.nameprefix+".reviews.InspectorAdvancedControls",w,e))),(0,d.createElement)(wt,{block:Et,attributes:e.attributes,onRender:_t})]},example:{attributes:{display:2,pagination:"ajax",rating:0}},icon:function(){return(0,d.createElement)(lt,{icon:(0,d.createElement)("svg",null,(0,d.createElement)("path",{d:"M12 2a.36.36 0 0 1 .321.199l2.968 6.01a.36.36 0 0 0 .268.196l6.634.963a.36.36 0 0 1 .199.612l-4.8 4.676a.36.36 0 0 0-.103.318l1.133 6.605a.36.36 0 0 1-.521.378l-5.933-3.12a.36.36 0 0 0-.334 0l-5.934 3.118a.36.36 0 0 1-.519-.377l1.133-6.605a.36.36 0 0 0-.103-.318L1.609 9.981a.36.36 0 0 1 .201-.612l6.632-.963a.36.36 0 0 0 .27-.196l2.967-6.01A.36.36 0 0 1 12 2zm0 2.95v12.505c.492 0 .982.117 1.43.35l3.328 1.745-.636-3.694c-.171-.995.16-2.009.885-2.713l2.693-2.617-3.724-.539c-1.001-.145-1.866-.772-2.313-1.675L12 4.95zM18.768 1C20.217 1 21 1.648 21 2.823c0 1.071-.819 1.782-2.102 1.827L20.973 7.3h-1.26L17.706 4.65h-.513V7.3h-1.017V1h2.592zm-.027.954h-1.548v1.773h1.548c.819 0 1.202-.297 1.202-.905 0-.599-.405-.869-1.202-.869z"}))})},keywords:["reviews"],save:function(){return null},supports:{html:!1},title:et("Latest Reviews","admin-text","site-reviews"),transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:function(e){var t=e.idBase,n=e.instance;return"glsr_site-reviews"===t&&!(null==n||!n.raw)},transform:function(e){var t=e.instance;return nt(Et,kt(t,Ct))}}]}});var Ot=wp.i18n._x,Rt=wp.blocks,jt=Rt.createBlock,Lt=Rt.registerBlockType,Pt=wp.blockEditor,Nt=Pt.InspectorAdvancedControls,At=Pt.InspectorControls,It=wp.components,Bt=It.Icon,Mt=It.PanelBody,Tt=It.RangeControl,Dt=It.SelectControl,Gt=It.TextControl,Ht=It.ToggleControl,Ft=GLSR.blocks,zt=Ft.AssignedPostsOptions,Ut=Ft.AssignedTermsOptions,$t=Ft.AssignedUsersOptions,Vt=Ft.CheckboxControlList,Qt=Ft.ConditionalSelectControl,qt=Ft.ServerSideRender,Wt=Ft.onRender,Yt=Ft.TermOptions,Jt=Ft.TypeOptions,Xt=Ft.transformWidgetAttributes,Kt=GLSR.nameprefix+"/summary",Zt={assigned_to:{default:"",type:"string"},assigned_posts:{default:"",type:"string"},assigned_terms:{default:"",type:"string"},assigned_users:{default:"",type:"string"},category:{default:"",type:"string"},className:{default:"",type:"string"},hide:{default:"",type:"string"},post_id:{default:"",type:"string"},rating:{default:0,type:"number"},rating_field:{default:"",type:"string"},schema:{default:!1,type:"boolean"},terms:{default:"",type:"string"},type:{default:"local",type:"string"},user:{default:"",type:"string"}};Lt(Kt,{attributes:Zt,category:GLSR.nameprefix,description:Ot("Display a summary of your reviews.","admin-text","site-reviews"),edit:function(e){e.attributes.post_id=jQuery("#post_ID").val();var t=e.attributes,n=t.assigned_to,r=t.assigned_posts,s=t.assigned_terms,a=t.assigned_users,i=t.category,o=(t.display,t.hide),l=t.id,c=(t.pagination,t.rating),u=t.rating_field,p=t.schema,m=t.terms,f=t.type,g=t.user,v=(e.className,e.setAttributes),y={assigned_to:(0,d.createElement)(Qt,{key:"assigned_posts",label:Ot("Limit Reviews to an Assigned Page","admin-text","site-reviews"),onChange:function(e){return v({assigned_to:e,assigned_posts:"custom"===e?r:""})},options:zt,value:n},(0,d.createElement)(Gt,{key:"custom_assigned_posts",className:"glsr-base-conditional-control",help:Ot("Separate values with a comma.","admin-text","site-reviews"),onChange:function(e){return v({assigned_posts:e})},placeholder:Ot("Enter the Post IDs","admin-text","site-reviews"),type:"text",value:r,__nextHasNoMarginBottom:!0})),category:(0,d.createElement)(Qt,{key:"assigned_terms",label:Ot("Limit Reviews to an Assigned Category","admin-text","site-reviews"),onChange:function(e){return v({category:e,assigned_terms:"custom"===e?s:""})},options:Ut,value:i},(0,d.createElement)(Gt,{key:"custom_assigned_terms",className:"glsr-base-conditional-control",help:Ot("Separate values with a comma.","admin-text","site-reviews"),onChange:function(e){return v({assigned_terms:e})},placeholder:Ot("Enter the Category IDs or slugs","admin-text","site-reviews"),type:"text",value:s,__nextHasNoMarginBottom:!0})),user:(0,d.createElement)(Qt,{key:"assigned_users",label:Ot("Limit Reviews to an Assigned User","admin-text","site-reviews"),onChange:function(e){return v({user:e,assigned_users:"custom"===e?a:""})},options:$t,value:g},(0,d.createElement)(Gt,{key:"custom_assigned_users",className:"glsr-base-conditional-control",help:Ot("Separate values with a comma.","admin-text","site-reviews"),onChange:function(e){return v({assigned_users:e})},placeholder:Ot("Enter the User IDs or usernames","admin-text","site-reviews"),type:"text",value:a,__nextHasNoMarginBottom:!0})),terms:(0,d.createElement)(Dt,{key:"terms",label:Ot("Limit Reviews to terms","admin-text","site-reviews"),onChange:function(e){return v({terms:e})},options:Yt,value:m,__next36pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),type:(0,d.createElement)(Dt,{key:"type",label:Ot("Limit the Type of Reviews","admin-text","site-reviews"),onChange:function(e){return v({type:e})},options:Jt,value:f,__next36pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),rating:(0,d.createElement)(Tt,{key:"rating",label:Ot("Minimum Rating","admin-text","site-reviews"),min:0,max:GLSR.maxrating,onChange:function(e){return v({rating:e})},value:c,__nextHasNoMarginBottom:!0}),schema:(0,d.createElement)(Ht,{key:"schema",checked:p,help:Ot("The schema should only be enabled once per page.","admin-text","site-reviews"),label:Ot("Enable the schema?","admin-text","site-reviews"),onChange:function(e){return v({schema:e})},__nextHasNoMarginBottom:!0}),hide:Vt(GLSR.hideoptions.site_reviews_summary,o,v)},h={panel_settings:(0,d.createElement)(Mt,{title:Ot("Settings","admin-text","site-reviews")},Object.values(wp.hooks.applyFilters(GLSR.nameprefix+".summary.InspectorControls",y,e)))},b={id:(0,d.createElement)(Gt,{label:Ot("Custom ID","admin-text","site-reviews"),onChange:function(e){return v({id:e})},value:l,__nextHasNoMarginBottom:!0}),rating_field:(0,d.createElement)(Gt,{help:Ot("Use the Review Forms addon to add custom rating fields.","admin-text","site-reviews"),label:Ot("Custom Rating Field Name","admin-text","site-reviews"),onChange:function(e){return v({rating_field:e})},value:u,__nextHasNoMarginBottom:!0})};return[(0,d.createElement)(At,null,Object.values(wp.hooks.applyFilters(GLSR.nameprefix+".summary.InspectorPanels",h,e))),(0,d.createElement)(Nt,null,Object.values(wp.hooks.applyFilters(GLSR.nameprefix+".summary.InspectorAdvancedControls",b,e))),(0,d.createElement)(qt,{block:Kt,attributes:e.attributes,onRender:Wt})]},example:{},icon:function(){return(0,d.createElement)(Bt,{icon:(0,d.createElement)("svg",null,(0,d.createElement)("path",{d:"M12 2a.36.36 0 0 1 .321.199l2.968 6.01a.36.36 0 0 0 .268.196l6.634.963a.36.36 0 0 1 .199.612l-4.8 4.676a.36.36 0 0 0-.103.318l1.133 6.605a.36.36 0 0 1-.521.378l-5.933-3.12a.36.36 0 0 0-.334 0l-5.934 3.118a.36.36 0 0 1-.519-.377l1.133-6.605a.36.36 0 0 0-.103-.318L1.609 9.981a.36.36 0 0 1 .201-.612l6.632-.963a.36.36 0 0 0 .27-.196l2.967-6.01A.36.36 0 0 1 12 2zm0 2.95v12.505c.492 0 .982.117 1.43.35l3.328 1.745-.636-3.694c-.171-.995.16-2.009.885-2.713l2.693-2.617-3.724-.539c-1.001-.145-1.866-.772-2.313-1.675L12 4.95zM18.651 1a3.95 3.95 0 0 1 2.277.68l-.518.824c-.536-.342-1.13-.54-1.769-.54-.842 0-1.418.365-1.418.941 0 .522.491.725 1.31.842l.437.059c1.022.14 2.03.563 2.03 1.733 0 1.283-1.161 1.985-2.525 1.985-.855 0-1.881-.284-2.534-.846l.554-.81c.432.396 1.247.693 1.976.693.824 0 1.472-.351 1.472-.932 0-.495-.495-.725-1.418-.851l-.491-.068c-.936-.131-1.868-.572-1.868-1.742C16.167 1.702 17.287 1 18.651 1z"}))})},keywords:["reviews","summary"],save:function(){return null},supports:{html:!1},title:Ot("Rating Summary","admin-text","site-reviews"),transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:function(e){var t=e.idBase,n=e.instance;return"glsr_site-reviews-summary"===t&&!(null==n||!n.raw)},transform:function(e){var t=e.instance;return jt(Kt,Xt(t,Zt))}}]}})}()}();