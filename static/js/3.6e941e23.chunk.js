(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{100:function(t,e,n){"use strict";var r,o="object"===typeof window&&(window.crypto||window.msCrypto);r=o&&o.getRandomValues?function(t){return o.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=r},101:function(t,e){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,o=-~(1.6*r*n/e.length),c="";;)for(var a=t(o),i=o;i--;)if((c+=e[a[i]&r]||"").length===+n)return c}},102:function(t,e,n){"use strict";var r=n(90);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},103:function(t,e,n){"use strict";t.exports=0},104:function(t,e,n){t.exports={formInput:"Form_formInput__2y4O6",formBtn:"Form_formBtn__1jp9X"}},105:function(t,e,n){t.exports={contactList:"ContactsList_contactList__8jKJM",contactItem:"ContactsList_contactItem__31DgE",contactDescription:"ContactsList_contactDescription__1x-pq",deleteBtn:"ContactsList_deleteBtn__1Qv7R"}},106:function(t,e,n){t.exports={filterInput:"Filter_filterInput__1faHz"}},107:function(t,e,n){t.exports={container:"PhoneBookViews_container__X-xa1"}},111:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return V}));var r={};n.r(r),n.d(r,"getContacts",(function(){return b})),n.d(r,"getIsLoading",(function(){return j})),n.d(r,"getFilter",(function(){return m})),n.d(r,"getVisibleContacts",(function(){return x}));var o=n(94),c=n.n(o),a=n(1),i=function(t){var e=t.title,n=t.children;return Object(a.jsxs)("section",{className:c.a.section,children:[Object(a.jsxs)("h2",{className:c.a.title,children:["Phonebook"===e,e]}),n]})},s=n(89),u=n(0),l=n(95),f=n.n(l),d=n(7),h=n(16),p=n(26),b=function(t){return t.phoneBook.contacts},j=function(t){return t.phoneBook.isLoading},m=function(t){return t.phoneBook.filter},x=Object(p.a)([b,m],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)||t.number.includes(e)}))})),g=n(21),v=n(104),O=n.n(v),w=function(){var t=Object(u.useState)(""),e=Object(s.a)(t,2),n=e[0],o=e[1],c=Object(u.useState)(""),i=Object(s.a)(c,2),l=i[0],p=i[1],b=Object(d.d)(r.getContacts),j=Object(d.c)(),m=f.a.generate(),x=f.a.generate(),v=function(t){var e=t.currentTarget,n=e.name,r=e.value;switch(n){case"name":o(r);break;case"number":p(r)}},w=function(){o(""),p("")};return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=b.find((function(t){return t.name.toLowerCase()===n.toLowerCase()})),r=b.find((function(t){return t.number===l}));return e?(g.b.error("'".concat(n,"' is already in your list")),void w()):r?(g.b.error("'".concat(l,"' is already in your list")),void w()):(j(h.addContacts({name:n,number:l})),g.b.success("'".concat(n,"' added to phonebook")),void w())},children:[Object(a.jsx)("label",{htmlFor:m,children:Object(a.jsx)("input",{className:O.a.formInput,placeholder:"Name",id:m,type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"The name can only consist of letters, an apostrophe, a dash and spaces.",required:!0,onChange:v})}),Object(a.jsx)("label",{htmlFor:x,children:Object(a.jsx)("input",{className:O.a.formInput,placeholder:"Tel",id:x,type:"tel",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"The phone number must consist of digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:v})}),Object(a.jsx)("button",{className:O.a.formBtn,type:"submit",children:"Add contact"})]})})},_=n(105),y=n.n(_),C=function(){var t=Object(d.d)(r.getVisibleContacts),e=Object(d.c)();return Object(a.jsx)("ul",{className:y.a.contactList,children:t.map((function(t){var n=t.id,r=t.name,o=t.number;return Object(a.jsxs)("li",{className:y.a.contactItem,children:[Object(a.jsxs)("p",{className:y.a.contactDescription,children:[r,": ",o]}),Object(a.jsx)("button",{className:y.a.deleteBtn,type:"button",onClick:function(){return e(h.deleteContacts(n))},children:"Delete"})]},n)}))})},k=n(106),N=n.n(k),I=n(44),L=function(){var t=Object(d.d)(r.getFilter),e=Object(d.c)();return Object(a.jsx)("label",{className:N.a.label,children:Object(a.jsx)("input",{className:N.a.filterInput,placeholder:"Find contacts",type:"text",value:t,onChange:function(t){return e(Object(I.a)(t.target.value))}})})},B=n(107),S=n.n(B);function V(){var t=Object(d.d)(r.getContacts),e=Object(d.c)();return Object(u.useEffect)((function(){e(h.fetchContacts())}),[e]),Object(a.jsxs)("div",{className:S.a.container,children:[Object(a.jsx)(i,{title:"Phonebook",children:Object(a.jsx)(w,{})}),t.length>0&&Object(a.jsxs)(i,{title:"Contacts",children:[Object(a.jsx)(L,{}),Object(a.jsx)(C,{})]})]})}},89:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(33);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,c=void 0;try{for(var a,i=t[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(s){o=!0,c=s}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},90:function(t,e,n){"use strict";var r,o,c,a=n(97),i="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function s(){c=!1}function u(t){if(t){if(t!==r){if(t.length!==i.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,s()}}else r!==i&&(r=i,s())}function l(){return c||(c=function(){r||u(i);for(var t,e=r.split(""),n=[],o=a.nextValue();e.length>0;)o=a.nextValue(),t=Math.floor(o*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||i},characters:function(t){return u(t),r},seed:function(t){a.seed(t),o!==t&&(s(),o=t)},lookup:function(t){return l()[t]},shuffled:l}},94:function(t,e,n){t.exports={section:"Section_section__1tpN6",title:"Section_title__30h6d"}},95:function(t,e,n){"use strict";t.exports=n(96)},96:function(t,e,n){"use strict";var r=n(90),o=n(98),c=n(102),a=n(103)||0;function i(){return o(a)}t.exports=i,t.exports.generate=i,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return a=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=c},97:function(t,e,n){"use strict";var r=1;t.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(t){r=t}}},98:function(t,e,n){"use strict";var r,o,c=n(99);n(90);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===o?r++:(r=0,o=n),e+=c(7),e+=c(t),r>0&&(e+=c(r)),e+=c(n)}},99:function(t,e,n){"use strict";var r=n(90),o=n(100),c=n(101);t.exports=function(t){for(var e,n=0,a="";!e;)a+=c(o,r.get(),1),e=t<Math.pow(16,n+1),n++;return a}}}]);
//# sourceMappingURL=3.6e941e23.chunk.js.map