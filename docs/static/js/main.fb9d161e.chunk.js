(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{156:function(e,t,n){},157:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),r=n(33),s=n.n(r),i=n(8),o=n(7),u=n.n(o),l=n(12),d=n(20),j=n(30);n(158),n(74);j.a.initializeApp({apiKey:"AIzaSyCAAzQJfSR2_wU6_SHJlkvYP8w3UhZIBUA",authDomain:"react-app-courses-b7352.firebaseapp.com",projectId:"react-app-courses-b7352",storageBucket:"react-app-courses-b7352.appspot.com",messagingSenderId:"225831865721",appId:"1:225831865721:web:4c4829194c24720c9ef3a8"});var p=j.a.firestore(),b=new j.a.auth.GoogleAuthProvider,m=n(21),h=n(10),f=n(5),O=n(23),x=n.n(O),v=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dbzei34n4/upload",(n=new FormData).append("upload_preset","react-journal"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dbzei34n4/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=17;break}return e.next=11,a.json();case 11:return c=e.sent,e.next=14,c.secure_url;case 14:return e.abrupt("return",e.sent);case 17:return e.next=19,a.json();case 19:throw e.sent;case 20:e.next=25;break;case 22:throw e.prev=22,e.t0=e.catch(4),e.t0;case 25:case"end":return e.stop()}}),e,null,[[4,22]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.collection("".concat(t,"/journal/notes")).get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(f.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g="[AUTH] Login",y="[AUTH] Logout",N="[UI] Set Error",w="[UI] Remove Error",k="[UI] Start loading",C="[UI] Finish loading",I="[Notes] New note",E="[Notes] Set active note",S="[Notes] Load notes",A="[Notes] Update note",P="[Notes] Delete note",U="[Notes] Logout cleaning",L=function(e,t){return{type:E,payload:Object(f.a)({id:e},t)}},D=function(e,t){return{type:I,payload:Object(f.a)({id:e},t)}},R=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:a=t.sent,n(q(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},q=function(e){return{type:S,payload:e}},z=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n,a){var c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,delete(r=Object(f.a)({},e)).id,t.next=5,p.doc("".concat(c,"/journal/notes/").concat(e.id)).update(r);case 5:n(T(e.id,e)),x.a.fire("Saved",e.title,"success");case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},T=function(e,t){return{type:A,payload:{id:e,note:t}}},Y=function(e){return{type:P,payload:e}},J=n(36),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(d.a)(t,2),a=n[0],r=n[1],s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},i=function(e){var t=e.target;r(Object(f.a)(Object(f.a)({},a),{},Object(J.a)({},t.name,t.value)))};return[a,i,s]},W=n(31),F=n(37),B=n.n(F),G=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.notes})).active,n=B()(t.date);return Object(a.jsxs)("div",{className:"notes__appbar",children:[Object(a.jsxs)("div",{className:"notes__appbar-date",children:[Object(a.jsx)("i",{className:"far fa-calendar-alt"}),Object(a.jsx)("span",{children:"".concat(n.format("D")," ").concat(n.format("MMMM")," ").concat(n.format("YYYY"))})]}),Object(a.jsx)("input",{type:"file",id:"addPictures",name:"file",multiple:!0,style:{display:"none"},onChange:function(t){var n=Object(W.a)(t.target.files);0!==(n=n.filter((function(e,t){return t<3&&e}))).length&&e(function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n,a){var c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,r=[],x.a.fire({title:"Uploading...",text:"Please wait",allowOutsideClick:!1,didOpen:function(){x.a.showLoading()}}),t.next=5,e.forEach(function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,v(t);case 3:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:setTimeout((function(){c.urls=r,console.log(c),n(z(c)),x.a.close()}),3*e.length*1e3);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("button",{className:"btn pointer",onClick:function(){document.querySelector("#addPictures").click()},children:[Object(a.jsx)("i",{className:"far fa-image"}),Object(a.jsx)("span",{children:"Add Pictures"})]}),Object(a.jsxs)("button",{className:"btn btn-important pointer",onClick:function(){e(z(t))},children:[Object(a.jsx)("i",{className:"far fa-save"}),Object(a.jsx)("span",{children:"Save"})]})]})]})},H=function(){var e=Object(i.c)((function(e){return e.notes})).active,t=Object(i.b)(),n=M(e),r=Object(d.a)(n,3),s=r[0],o=r[1],j=r[2],b=s.body,m=s.title,h=e.urls,O=Object(c.useRef)(e.id);return Object(c.useEffect)((function(){O.current!==e.id&&(j(e),O.current=e.id)}),[e,j]),Object(c.useEffect)((function(){t(L(s.id,Object(f.a)({},s)))}),[s,t]),Object(a.jsxs)("div",{className:"notes__main-content animate__animated animate__slideInRight",children:[Object(a.jsx)(G,{}),Object(a.jsxs)("div",{className:"notes__content",children:[Object(a.jsx)("input",{autoComplete:"off",type:"text",placeholder:"An awesome title...",name:"title",value:m,className:"notes__title-input",onChange:o}),Object(a.jsx)("textarea",{name:"body",value:b,placeholder:"What happened today?",className:"notes__textarea",onChange:o}),h&&0!==h.length&&Object(a.jsx)("div",{className:"notes__image animate__animated animate__slideInUp",children:h.map((function(e,t){return Object(a.jsx)("img",{className:"animate__animated animate__fadeIn",src:"".concat(e),alt:"JournalImage ".concat(t)},t)}))})]}),Object(a.jsx)("button",{className:"btn btn-danger pointer",onClick:function(){var e;t((e=O.current,function(){var t=Object(l.a)(u.a.mark((function t(n,a){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,t.next=3,p.doc("".concat(c,"/journal/notes/").concat(e)).delete();case 3:n(Y(e));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()))},children:"Delete entry"})]})},X=function(){return Object(a.jsxs)("div",{className:"nothing__main-content animate__animated animate__slideInRight",children:[Object(a.jsx)("h1",{children:"Create an entry"}),Object(a.jsx)("br",{}),Object(a.jsx)("h4",{children:"or"}),Object(a.jsx)("br",{}),Object(a.jsx)("h3",{children:"Select one of the already created"}),Object(a.jsx)("i",{class:"fas fa-pen-square fa-4x mt-5 animate__animated animate__rotateIn animate__delay-1s"})]})},K=function(e){return{type:N,payload:e}},Q=function(){return{type:w}},V=function(){return{type:k}},Z=function(){return{type:C}},$=function(e,t){return{type:g,payload:{uid:e,displayName:t}}},ee=function(){return{type:y}},te=function(e){var t=e.id,n=e.title,c=e.body,r=e.date,s=e.urls,o=void 0===s?[]:s,u=B()(r),l=0!==o.length&&o[0],d=Object(i.b)();return Object(a.jsxs)("div",{className:"journal__entry animate__animated animate__flipInX pointer",onClick:function(){d(L(t,{title:n,body:c,date:r,urls:o}))},children:[Object(a.jsx)("div",{className:"journal__entry-picture animate__animated animate__fadeIn",style:{backgroundSize:"cover",backgroundImage:"url(".concat(l&&l,")"),backgroundPosition:"center",display:"flex",justifyContent:"center",alignItems:"center"},children:l?"":Object(a.jsx)("i",{class:"fas fa-images fa-3x"})}),Object(a.jsxs)("div",{className:"journal__entry-body",children:[Object(a.jsx)("p",{className:"journal__entry-title mb-1",children:n}),Object(a.jsx)("p",{className:"journal__entry-content",children:c})]}),Object(a.jsxs)("div",{className:"journal__entry-date-box",children:[Object(a.jsx)("span",{children:u.format("dddd")}),Object(a.jsx)("h4",{children:u.format("Do")})]})]})},ne=function(){var e=Object(i.c)((function(e){return e.notes})).notes;return Object(a.jsx)("div",{className:"journal__entries mb-5",children:e.map((function(e){return Object(a.jsx)(te,Object(f.a)({},e),e.id)}))})},ae=function(e){e.notes;var t=Object(i.b)(),n=Object(i.c)((function(e){return e.auth})).name;return Object(a.jsxs)("aside",{className:"journal__sidebar animate__animated animate__slideInLeft",children:[Object(a.jsxs)("div",{className:"journal__siderbar-navbar",children:[Object(a.jsxs)("h3",{className:"mt-5",children:[Object(a.jsx)("i",{className:"far fa-user"}),Object(a.jsx)("span",{children:n})]}),Object(a.jsxs)("button",{className:"btn pointer mt-5",onClick:function(){t(function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.auth().signOut();case 2:t(ee()),t({type:U});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:[Object(a.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(a.jsx)("span",{children:" Logout"})]})]}),Object(a.jsxs)("div",{className:"journal__new-entry pointer",onClick:function(){t(function(){var e=Object(l.a)(u.a.mark((function e(t,n){var a,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime(),urls:[]},e.next=4,p.collection("".concat(a,"/journal/notes")).add(c);case 4:r=e.sent,t(L(r.id,c)),t(D(r.id,c));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(a.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(a.jsx)("p",{className:"mt-5",children:"New entry"})]}),Object(a.jsx)(ne,{})]})},ce=function(){var e=Object(i.c)((function(e){return e.notes})).active;return Object(a.jsxs)("div",{className:"journal__main-content",children:[Object(a.jsx)(ae,{}),Object(a.jsx)("main",{children:e?Object(a.jsx)(H,{}):Object(a.jsx)(X,{})})]})},re=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})),n=t.msgError,c=t.loading,r=M({email:"mendezaa4417@protonmail.com",password:"soren616"}),s=Object(d.a)(r,2),o=s[0],u=s[1],l=o.email,p=o.password,h=function(){var t=[];return 0===l.trim().length&&t.push("Email is required"),0===p.trim().length&&t.push("Password is required"),t.length>0?(e(K(t)),!1):(e(Q()),!0)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"auth__title mb-5",children:"Login"}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),h()&&e(function(e,t){return function(n){n(V()),j.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n($(t.uid,t.displayName)),n(Z())})).catch((function(e){n(Z()),x.a.fire("Error",e.message,"error")}))}}(l,p))},children:[Object(a.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input mt-1",autoComplete:"off",value:l,onChange:u}),Object(a.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input mt-1",value:p,onChange:u}),null!=n&&Object(a.jsx)("div",{className:"auth__alert-error",children:n.map((function(e,t){return Object(a.jsx)("p",{children:e},t)}))}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary btn-block pointer mb-5 mt-1",disabled:c,children:"Login"}),Object(a.jsxs)("div",{className:"auth__social-networks",children:[Object(a.jsx)("p",{className:"mb-1",children:"Login with..."}),Object(a.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){j.a.auth().signInWithPopup(b).then((function(t){var n=t.user;e($(n.uid,n.displayName))}))}))},children:[Object(a.jsx)("div",{className:"google-icon-wrapper",children:Object(a.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(a.jsx)("p",{className:"btn-text",children:Object(a.jsx)("b",{children:"Sign in with google"})})]})]}),Object(a.jsx)(m.b,{to:"/auth/register",className:"link",children:"Create an account"})]})]})},se=n(47),ie=n.n(se),oe=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})),n=t.msgError,c=t.loading,r=M({email:"mendezaa4417@protonmail.com",name:"IudexSoren",password:"soren616",confpassword:"soren616"}),s=Object(d.a)(r,2),o=s[0],p=s[1],b=o.email,h=o.name,f=o.password,O=o.confpassword,v=function(){var t=[];return 0===b.trim().length?t.push("Email is required"):ie.a.isEmail(b)||t.push("Invalid email"),0===h.trim().length&&t.push("Name is required"),f.trim().length<8?t.push("Password must be at least 8 characters"):0===O.trim().length?t.push("You must confirm your password"):ie.a.equals(f,O)||t.push("Passwords do not match"),t.length>0?(e(K(t)),!1):(e(Q()),!0)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"auth__title",children:"Register"}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),v()&&(e(function(e,t,n){return function(a){a(V()),j.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(l.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:n});case 3:a($(c.uid,c.displayName)),a(Z());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){a(Z()),x.a.fire("Error",e.message,"error")}))}}(b,f,h)),console.log("Success"))},children:[Object(a.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input mt-1",autoComplete:"off",value:b,onChange:p}),Object(a.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input mt-1",autoComplete:"off",value:h,onChange:p}),Object(a.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input mt-1",value:f,onChange:p}),Object(a.jsx)("input",{type:"password",placeholder:"Confirm password",name:"confpassword",className:"auth__input mt-1",value:O,onChange:p}),null!=n&&Object(a.jsx)("div",{className:"auth__alert-error",children:n.map((function(e,t){return Object(a.jsx)("p",{children:e},t)}))}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary btn-block pointer mb-5 mt-1",disabled:c,children:"Register"}),Object(a.jsx)(m.b,{to:"/auth/login",className:"link",children:"Log in"})]})]})},ue=function(){return Object(a.jsx)("div",{className:"auth__main",children:Object(a.jsx)("div",{className:"auth__box-container animate__animated animate__fadeIn",children:Object(a.jsxs)(h.d,{children:[Object(a.jsx)(h.b,{path:"/auth/login",component:re}),Object(a.jsx)(h.b,{path:"/auth/register",component:oe,exact:!0}),Object(a.jsx)(h.a,{to:"/auth/login"})]})})})},le=function(){return Object(a.jsx)("div",{className:"loading__loading-container",children:Object(a.jsx)("h1",{children:"Wait a moment..."})})},de=n(38),je=function(e){var t=e.isAuthenticated,n=e.component,c=Object(de.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(h.b,Object(f.a)(Object(f.a)({},c),{},{component:function(e){return t?Object(a.jsx)(h.a,{to:"/"}):Object(a.jsx)(n,Object(f.a)({},e))}}))},pe=n(22),be=n.n(pe),me=function(e){var t=e.isAuthenticated,n=e.component,c=Object(de.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath","".concat(c.location.pathname).concat(c.location.search)),Object(a.jsx)(h.b,Object(f.a)(Object(f.a)({},c),{},{component:function(e){return t?Object(a.jsx)(n,Object(f.a)({},e)):Object(a.jsx)(h.a,{to:"/auth/login"})}}))};me.propType={isAuthenticated:be.a.bool.isRequired,component:be.a.func.isRequired};var he=me,fe=function(){var e=Object(i.b)(),t=Object(c.useState)(!0),n=Object(d.a)(t,2),r=n[0],s=n[1],o=Object(c.useState)(!1),p=Object(d.a)(o,2),b=p[0],f=p[1];return Object(c.useEffect)((function(){j.a.auth().onAuthStateChanged(function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===n||void 0===n?void 0:n.uid)?(e($(n.uid,n.displayName)),f(!0),e(R(n.uid))):f(!1),s(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,s,f]),r?Object(a.jsx)(le,{}):Object(a.jsx)("div",{children:Object(a.jsx)(m.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(h.d,{children:[Object(a.jsx)(je,{isAuthenticated:b,path:"/auth",component:ue}),Object(a.jsx)(he,{isAuthenticated:b,path:"/",component:ce,exact:!0}),Object(a.jsx)(h.a,{to:"/auth/login"})]})})})})},Oe=n(24),xe=n(62),ve={notes:[],active:null},_e={loading:!1,msgError:null},ge="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Oe.d,ye=Object(Oe.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{uid:t.payload.uid,name:t.payload.displayName};case y:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(f.a)(Object(f.a)({},e),{},{msgError:t.payload});case w:return Object(f.a)(Object(f.a)({},e),{},{msgError:null});case k:return Object(f.a)(Object(f.a)({},e),{},{loading:!0});case C:return Object(f.a)(Object(f.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(f.a)(Object(f.a)({},e),{},{active:Object(f.a)({},t.payload)});case I:return Object(f.a)(Object(f.a)({},e),{},{notes:[].concat(Object(W.a)(e.notes),[t.payload])});case S:return Object(f.a)(Object(f.a)({},e),{},{notes:Object(W.a)(t.payload)});case A:return Object(f.a)(Object(f.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case P:return Object(f.a)(Object(f.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case U:return ve;default:return e}}}),Ne=Object(Oe.e)(ye,ge(Object(Oe.a)(xe.a))),we=function(){return Object(a.jsx)(i.a,{store:Ne,children:Object(a.jsx)(fe,{})})};n(156);s.a.render(Object(a.jsx)(we,{}),document.getElementById("root"))}},[[157,1,2]]]);
//# sourceMappingURL=main.fb9d161e.chunk.js.map