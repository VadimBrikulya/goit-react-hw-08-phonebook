(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t),n.d(t,"fetchContacts",(function(){return j})),n.d(t,"addContacts",(function(){return h})),n.d(t,"deleteContacts",(function(){return g}));var r=n(4),a=n.n(r),c=n(13),o=n(6),u=n(14),i=n.n(u);function s(){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/contacts");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("/contacts",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return p.apply(this,arguments)}function p(){return(p=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.delete("/contacts/".concat(t));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.defaults.baseURL="https://connections-api.herokuapp.com";var j=Object(o.b)("contacts/fetchContacts",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,s();case 4:return c=e.sent,e.abrupt("return",c);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()),h=Object(o.b)("contacts/addContact",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,d(t);case 4:return c=e.sent,e.abrupt("return",c);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()),g=Object(o.b)("contacts/deleteContact",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,b(t);case 4:return e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}())},25:function(e,t,n){"use strict";var r,a=n(2),c=n(6),o=n(5),u=Object(c.c)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrectUser:!1},extraReducers:(r={},Object(a.a)(r,o.default.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(a.a)(r,o.default.register.pending,(function(e){e.error=null})),Object(a.a)(r,o.default.register.rejected,(function(e,t){e.error=t.payload.message})),Object(a.a)(r,o.default.logIn.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0,e.error=null})),Object(a.a)(r,o.default.logIn.pending,(function(e){e.error=null})),Object(a.a)(r,o.default.logIn.rejected,(function(e,t){e.error=t.payload.message})),Object(a.a)(r,o.default.logOut.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1,e.error=null})),Object(a.a)(r,o.default.logOut.pending,(function(e,t){e.error=null})),Object(a.a)(r,o.default.logOut.rejected,(function(e,t){e.error=t.payload.message})),Object(a.a)(r,o.default.fetchCurrentUser.pending,(function(e){e.isFetchingCurrectUser=!0})),Object(a.a)(r,o.default.fetchCurrentUser.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0,e.isFetchingCurrectUser=!1})),Object(a.a)(r,o.default.fetchCurrentUser.rejected,(function(e){e.isFetchingCurrectUser=!1})),r)});t.a=u.reducer},43:function(e,t,n){"use strict";var r=n(5);n.d(t,"a",(function(){return r}));n(8),n(25)},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r,a=n(2),c=n(16),o=n(6),u=Object(o.c)({name:"phoneBook",initialState:{contacts:[],isLoading:!1,filter:"",error:null},reducers:{changeFilter:function(e,t){e.filter=t.payload}},extraReducers:(r={},Object(a.a)(r,c.fetchContacts.fulfilled,(function(e,t){e.contacts=t.payload,e.isLoading=!1,e.error=null})),Object(a.a)(r,c.fetchContacts.pending,(function(e){e.isLoading=!0,e.error=null})),Object(a.a)(r,c.fetchContacts.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload})),Object(a.a)(r,c.addContacts.fulfilled,(function(e,t){e.contacts.push(t.payload),e.isLoading=!1,e.error=null})),Object(a.a)(r,c.addContacts.pending,(function(e){e.isLoading=!0,e.error=null})),Object(a.a)(r,c.addContacts.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload,console.log(t.payload)})),Object(a.a)(r,c.deleteContacts.fulfilled,(function(e,t){e.contacts=e.contacts.filter((function(e){return e.id!==t.payload})),e.isLoading=!1,e.error=null})),Object(a.a)(r,c.deleteContacts.pending,(function(e){e.isLoading=!0,e.error=null})),Object(a.a)(r,c.deleteContacts.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload})),r)});t.b=u.reducer;var i=u.actions.changeFilter},45:function(e,t,n){e.exports={container:"Container_container__2c9PG"}},5:function(e,t,n){"use strict";n.r(t),n.d(t,"register",(function(){return f})),n.d(t,"logIn",(function(){return b})),n.d(t,"logOut",(function(){return p})),n.d(t,"fetchCurrentUser",(function(){return j}));var r=n(4),a=n.n(r),c=n(13),o=n(14),u=n.n(o),i=n(6),s=n(21);u.a.defaults.baseURL="https://connections-api.herokuapp.com";var l=function(e){u.a.defaults.headers.common.Authorization="Bearer ".concat(e)},d=function(){u.a.defaults.headers.common.Authorization=""},f=Object(i.b)("auth/register",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,u.a.post("/users/signup",t);case 4:return c=e.sent,o=c.data,l(o.token),console.log(o),e.abrupt("return",o);case 11:return e.prev=11,e.t0=e.catch(1),s.b.error("Failed! Enter valid data"),e.abrupt("return",r(e.t0.response.data));case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}()),b=Object(i.b)("auth/login",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,u.a.post("/users/login",t);case 4:return c=e.sent,o=c.data,l(o.token),e.abrupt("return",o);case 10:return e.prev=10,e.t0=e.catch(1),s.b.error(" Enter valid Email and Password!"),e.abrupt("return",r(e.t0.response.data));case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),p=Object(i.b)("auth/logout",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,u.a.post("/users/logout");case 4:d(),e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),s.b.error(" Something goes wrong!"),e.abrupt("return",r(e.t0.response.data));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),j=Object(i.b)("auth/refresh",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState(),null!==(c=r.auth.token)){e.next=4;break}return e.abrupt("return",n.rejectWithValue());case 4:return l(c),e.prev=5,e.next=8,u.a.get("/users/current");case 8:return o=e.sent,i=o.data,e.abrupt("return",i);case 13:return e.prev=13,e.t0=e.catch(5),e.abrupt("return",n.rejectWithValue());case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}()),h={register:f,logOut:p,logIn:b,fetchCurrentUser:j};t.default=h},8:function(e,t,n){"use strict";var r={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUsername:function(e){return e.auth.user.name},getIsFetchingCurrent:function(e){return e.auth.isFetchingCurrentUser}};t.a=r},88:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(19),o=n.n(c),u=n(15),i=n(45),s=n.n(i),l=n(1),d=function(e){var t=e.children;return Object(l.jsx)("div",{className:s.a.container,children:t})},f=n(7),b=n(8),p={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}};function j(){var e=Object(f.d)(b.a.getIsLoggedIn);return Object(l.jsxs)("nav",{children:[Object(l.jsx)(u.b,{to:"/",exact:!0,style:p.link,activeStyle:p.activeLink,children:"Home"}),e&&Object(l.jsx)(u.b,{to:"/phonebook",exact:!0,style:p.link,activeStyle:p.activeLink,children:"Phonebook"})]})}var h=n(5),g={container:{display:"flex",alignItems:"center"},avatar:{marginRight:4},name:{fontWeight:700,marginRight:12}},O={onLogout:h.default.logOut},v=Object(f.b)((function(e){return{name:b.a.getUsername(e)}}),O)((function(e){var t=e.avatar,n=e.name,r=e.onLogout;return Object(l.jsxs)("div",{style:g.container,children:[Object(l.jsx)("img",{src:t,alt:"",width:"32",style:g.avatar}),Object(l.jsxs)("span",{style:g.name,children:["Welcome, ",n]}),Object(l.jsx)("button",{type:"button",onClick:r,children:"Logout"})]})})),x={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}};function k(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(u.b,{to:"/register",exact:!0,style:x.link,activeStyle:x.activeLink,children:"Registration"}),Object(l.jsx)(u.b,{to:"/login",exact:!0,style:x.link,activeStyle:x.activeLink,children:"Log in"})]})}var y={header:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #2A363B"}};function m(){var e=Object(f.d)(b.a.getIsLoggedIn);return console.log(b.a.getIsLoggedIn),Object(l.jsxs)("header",{style:y.header,children:[Object(l.jsx)(j,{}),e?Object(l.jsx)(v,{}):Object(l.jsx)(k,{})]})}var L=n(21),C=(n(85),n(3)),w=n(43),I=n(17),U=n(27),F=["children"];function W(e){var t=e.children,n=Object(U.a)(e,F),r=Object(f.d)(b.a.getIsLoggedIn);return Object(l.jsx)(C.b,Object(I.a)(Object(I.a)({},n),{},{children:r?t:Object(l.jsx)(C.a,{to:"/login"})}))}var S=["children","restricted","redirectTo"];function A(e){var t=e.children,n=e.restricted,r=void 0!==n&&n,a=e.redirectTo,c=void 0===a?"/":a,o=Object(U.a)(e,S),u=Object(f.d)(b.a.getIsLoggedIn);console.log(b.a.getIsLoggedIn);var i=u&&r;return Object(l.jsx)(C.b,Object(I.a)(Object(I.a)({},o),{},{children:i?Object(l.jsx)(C.a,{to:c}):t}))}var B=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,108))})),V=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,109))})),z=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,110))})),R=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,111))}));function E(){var e=Object(f.c)();return Object(r.useEffect)((function(){e(w.a.fetchCurrentUser())}),[e]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(d,{children:[Object(l.jsx)(m,{}),Object(l.jsx)(C.d,{children:Object(l.jsxs)(r.Suspense,{fallback:Object(l.jsx)("p",{children:"Loading..."}),children:[Object(l.jsx)(A,{exact:!0,path:"/",children:Object(l.jsx)(B,{})}),Object(l.jsx)(A,{exact:!0,path:"/register",restricted:!0,children:Object(l.jsx)(V,{})}),Object(l.jsx)(A,{exact:!0,path:"/login",redirectTo:"/phonebook",restricted:!0,children:Object(l.jsx)(z,{})}),Object(l.jsx)(W,{path:"/phonebook",children:Object(l.jsx)(R,{})})]})})]}),Object(l.jsx)(L.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}var T=n(51),P=n(6),_=n(18),D=n(48),H=n.n(D),J=n(44),q=n(49),G=n(23),M=n(25),N=[].concat(Object(T.a)(Object(P.d)({serializableCheck:{ignoredActions:[_.a,_.f,_.b,_.c,_.d,_.e]}})),[q.logger,G.a]),K={key:"auth",storage:H.a,whitelist:["token"]},Q=Object(P.a)({reducer:{auth:Object(_.g)(K,M.a),phoneBook:J.b},middleware:N,devTools:!1}),X=Object(_.h)(Q),Y=Q,Z=n(50);o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f.a,{store:Y,children:Object(l.jsx)(Z.a,{loading:null,persistor:X,children:Object(l.jsx)(u.a,{children:Object(l.jsx)(E,{})})})})}),document.querySelector("#root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.c16b2a6b.chunk.js.map