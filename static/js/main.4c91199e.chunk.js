(this["webpackJsonppractice-project"]=this["webpackJsonppractice-project"]||[]).push([[0],{12:function(e,t,n){e.exports={trackerDesc:"trackerDescription_trackerDesc__36-y1",input:"trackerDescription_input__7mK-9",inputBtn:"trackerDescription_inputBtn__26eem",descList:"trackerDescription_descList__3OTgx",date:"trackerDescription_date__2Ce-q",deleteBtn:"trackerDescription_deleteBtn__1fZch",blind:"trackerDescription_blind__3osT2"}},13:function(e,t,n){e.exports={trackerList:"trackerList_trackerList__1YRCd",trackerName:"trackerList_trackerName__3bQFv",trackerSection:"trackerList_trackerSection__18CUL",count:"trackerList_count__WZCGD",btn:"trackerList_btn__oQVcp",plus:"trackerList_plus__34mgX",minus:"trackerList_minus__1Ufmf",delete:"trackerList_delete__3vEZ1"}},16:function(e,t,n){e.exports={login:"login_login__19aQM",box:"login_box__2ruKU",otherTxt:"login_otherTxt__eU5TY",otherLogin:"login_otherLogin__3MztJ",googleBtn:"login_googleBtn__33d9h",githubBtn:"login_githubBtn__2tb12"}},22:function(e,t,n){e.exports={title:"emotion_title__1qM1t",emotionList:"emotion_emotionList__3O6Yy",emotionButton:"emotion_emotionButton__1XAze"}},27:function(e,t,n){e.exports={header:"header_header__v9FKw",counter:"header_counter__1BAsj",logout:"header_logout__1MXam"}},28:function(e,t,n){e.exports={register:"registerForm_register__1ImPg",loginbtn:"registerForm_loginbtn__2WEze",regbtn:"registerForm_regbtn__11IrK"}},32:function(e,t,n){e.exports={add:"add_add__2GMyP",btn:"add_btn__Neqr_"}},44:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(37),o=n.n(a),i=(n(44),n(31)),s=n(5),u=n(23),l=n(19),j=n(27),b=n.n(j),d=n(1),f=function(e){var t=e.trackerTotalCount,n=e.onLogout,c=e.userName;return Object(d.jsxs)("header",{className:b.a.header,children:[Object(d.jsxs)("h2",{children:[c,",",Object(d.jsx)("br",{})," How Was Your Today? \ud83d\ude42"]}),Object(d.jsx)("div",{className:b.a.counter,children:t}),Object(d.jsx)("button",{className:b.a.logout,onClick:n,children:"LOGOUT"})]})},m=n(10),h=n(32),O=n.n(h),p=function(e){var t=e.onAddEmotion,n=Object(c.useRef)(),r=Object(c.useRef)();return Object(d.jsx)("section",{className:O.a.add,children:Object(d.jsxs)("form",{ref:n,children:[Object(d.jsx)("input",{type:"text",placeholder:"Add Your Emotion",ref:r}),Object(d.jsx)("button",{onClick:function(e){e.preventDefault();var c={id:Object(m.a)(),emotion:r.current.value,description:[]};r.current.value&&t(c),n.current.reset()},className:O.a.btn,children:"Add"})]})})},_=n(39),g=n(12),x=n.n(g),v=function(e){var t=e.tracker,n=e.onUpdate,r=Object(c.useRef)(),a=Object(c.useRef)();return Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault();var c=[],o=new Date,i={id:Object(m.a)(),text:a.current.value,date:"".concat(o.getFullYear(),".").concat(o.getMonth()+1,".").concat(o.getDate(),".").concat(new Intl.DateTimeFormat("ko-KR",{weekday:"short"}).format(o))};c=t.description?[].concat(Object(_.a)(t.description),[i]):[i];var s=Object(u.a)(Object(u.a)({},t),{},{description:c});i&&n(s),r.current.reset()},ref:r,children:Object(d.jsxs)("div",{className:x.a.trackerDesc,children:[Object(d.jsx)("input",{type:"text",className:x.a.input,placeholder:"Write your feelings in a row simply.",ref:a}),Object(d.jsx)("button",{type:"submit",className:x.a.inputBtn,children:Object(d.jsx)("i",{className:"fas fa-plus"})})]})})},k=Object(c.memo)((function(e){var t=e.tracker,n=e.onUpdate,r=Object(c.useRef)(),a=t.description,o=function(){var e=a.filter((function(e){return e.id!==r.current.value}));t.description=e,n(t)};return Object(d.jsx)("ul",{className:x.a.descList,children:a.map((function(e){return Object(d.jsxs)("li",{children:[e.text,Object(d.jsx)("span",{className:x.a.date,children:e.date}),Object(d.jsx)("input",{className:x.a.blind,ref:r,value:e.id,readOnly:!0}),Object(d.jsx)("button",{type:"button",className:x.a.deleteBtn,onClick:o,children:"X"})]},Object(m.a)())}))})})),N=function(e){var t=e.tracker,n=e.onUpdate;return Object(d.jsxs)(d.Fragment,{children:[t.description&&Object(d.jsx)(k,{tracker:t,onUpdate:n}),Object(d.jsx)(v,{tracker:t,onUpdate:n})]})},y=n(13),L=n.n(y),S=(n(46),Object(c.memo)((function(e){var t=e.onDelete,n=e.onUpdate,c=e.tracker;return Object(d.jsxs)("li",{children:[Object(d.jsxs)("div",{className:L.a.trackerSection,children:[Object(d.jsx)("div",{className:L.a.trackerName,children:c.emotion}),Object(d.jsx)("div",{className:L.a.count,children:c.description?c.description.length:0}),Object(d.jsx)("button",{type:"button",className:L.a.delete,onClick:function(){t(c)},children:Object(d.jsx)("i",{className:"fas fa-trash-alt"})})]}),Object(d.jsx)("div",{children:Object(d.jsx)(N,{tracker:c,onUpdate:n})})]})}))),C=Object(c.memo)((function(e){var t=e.tracker,n=e.onDelete,c=e.onUpdate;return Object(d.jsx)("ul",{className:L.a.trackerList,children:Object.keys(t).map((function(e){return Object(d.jsx)(S,{onDelete:n,onUpdate:c,tracker:t[e]},e)}))})})),U=n(22),D=n.n(U),A=function(e){var t=e.emotion,n=e.onUpdate,r=Object(c.useRef)();return Object(d.jsx)("button",{type:"button",className:D.a.emotionButton,onClick:function(e){var t={id:Object(m.a)(),emotion:e.target.innerText,count:0,description:[]};n(t)},ref:r,children:t.emotion})},B=function(e){var t=e.emotion,n=e.onUpdate;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{className:D.a.title,children:"Emotion List"}),Object(d.jsx)("ul",{className:D.a.emotionList,children:Object.keys(t).map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(A,{emotion:t[e],onUpdate:n})},t[e].id)}))})]})},E=function(e){var t=e.firebase,n=e.authService,r=Object(c.useState)(0),a=Object(l.a)(r,2),o=a[0],i=a[1],j=Object(c.useState)({}),b=Object(l.a)(j,2),h=b[0],O=b[1],_=Object(c.useState)({}),g=Object(l.a)(_,2),x=g[0],v=g[1],k=Object(c.useState)(),N=Object(l.a)(k,2),y=N[0],L=N[1],S=Object(c.useState)(),U=Object(l.a)(S,2),D=U[0],A=U[1],E=Object(s.f)();Object(c.useEffect)((function(){n.onAuthChange((function(e){e?(L(e.uid),A(e.displayName?e.displayName:e.email)):E.push("/")}))})),Object(c.useEffect)((function(){var e=t.load((function(e){O(e),i(Object.keys(e).length)}),"tracker",y);return function(){return e()}}),[t,y]),Object(c.useEffect)((function(){var e=t.load((function(e){v(e)}),"emotion",y);return function(){return e()}}),[t,y]);var T=function(e){O((function(t){var n=Object(u.a)({},t);return n[e.id]=e,n})),t.save(e,y)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{trackerTotalCount:o,onLogout:function(){n.logout()},userName:D}),Object(d.jsx)(p,{onAddEmotion:function(e){T(e);var n={id:Object(m.a)(),emotion:e.emotion};t.saveEmotion(n,y)}}),Object(d.jsx)(B,{emotion:x,onUpdate:T}),h&&Object(d.jsx)(C,{tracker:h,onDelete:function(e){O((function(t){Object.keys(t).filter((function(t){return t!==e.id}))})),t.remove(e,y)},onUpdate:T})]})},T=n(16),w=n.n(T),F=n(28),R=n.n(F),I=function(e){var t=e.authService,n=e.btnType,r=Object(c.useRef)(),a=Object(c.useRef)(),o=Object(s.f)(),i=function(e){o.push({pathname:"/emotion",state:{id:e}})};return Object(d.jsxs)("div",{className:R.a.register,children:[Object(d.jsx)("input",{type:"email",ref:r,placeholder:"email"}),Object(d.jsx)("input",{type:"password",ref:a,placeholder:"password"}),"reg"===n?Object(d.jsx)("button",{type:"button",onClick:function(){t.onAccountRegist(r.current.value,a.current.value).then((function(e){i(e.user.uid)})).catch((function(e){alert(e.message),a.current.value=""}))},children:"\ud68c\uc6d0\uac00\uc785"}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{type:"button",onClick:function(){o.push({pathname:"/register"})},className:R.a.regbtn,children:"\ud68c\uc6d0\uac00\uc785"}),Object(d.jsx)("button",{type:"button",onClick:function(){t.onAccountLogin(r.current.value,a.current.value).then((function(e){i(e.user.uid)})).catch((function(e){alert(e.message),r.current.value=""}))},className:R.a.loginbtn,children:"\ub85c\uadf8\uc778"})]})]})},M=function(e){var t=e.authService,n=Object(s.f)(),r=function(e){n.push({pathname:"/emotion",state:{id:e}})};Object(c.useEffect)((function(){t.onAuthChange((function(e){e&&r(e.uid)}))}));var a=function(e){t.login(e.target.outerText).then((function(e){r(e.user.uid)})).catch((function(e){var t=e.message;console.log(t)}))};return Object(d.jsx)("div",{className:w.a.login,children:Object(d.jsxs)("section",{className:w.a.box,children:[Object(d.jsx)("h2",{children:"Your Emotion \ud83d\ude09"}),Object(d.jsx)(I,{authService:t,btnType:"login"}),Object(d.jsx)("span",{className:w.a.otherTxt,children:"Or Sign Up Using"}),Object(d.jsxs)("div",{className:w.a.otherLogin,children:[Object(d.jsxs)("button",{type:"button",onClick:a,className:w.a.googleBtn,children:[Object(d.jsx)("i",{className:"fab fa-google"}),"Google"]}),Object(d.jsxs)("button",{type:"button",onClick:a,className:w.a.githubBtn,children:[Object(d.jsx)("i",{className:"fab fa-github"}),"Github"]})]})]})})},P=function(e){var t=e.authService;return Object(d.jsx)(I,{authService:t,btnType:"reg"})};var G=function(e){var t=e.firebase,n=e.authService;return Object(d.jsx)(i.a,{basename:"/emotionTracker",children:Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{exact:!0,path:["/","/login"],children:Object(d.jsx)(M,{authService:n})}),Object(d.jsx)(s.a,{path:"/register",children:Object(d.jsx)(P,{authService:n})}),Object(d.jsx)(s.a,{path:"/emotion",children:Object(d.jsx)(E,{firebase:t,authService:n})})]})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))},Y=n(25),K=n(26),z=n(18),q=(n(53),n(56),z.a.initializeApp({apiKey:"AIzaSyC64PNNqG6bE1g9n_9ZMetR0i8VanELn_I",authDomain:"emotion-tracker-46878.firebaseapp.com",projectId:"emotion-tracker-46878",storageBucket:"emotion-tracker-46878.appspot.com",appId:"1:1004907245469:web:764dab67c2c7af9e624974",measurementId:"G-VQ13W4YGME",databaseURL:"https://emotion-tracker-46878-default-rtdb.firebaseio.com/"})),Q=q.database(),X=q.auth(),Z=function(){function e(){Object(Y.a)(this,e)}return Object(K.a)(e,[{key:"save",value:function(e,t){Q.ref("users/".concat(t,"/tracker/").concat(e.id)).set(e)}},{key:"load",value:function(e,t,n){var c=Q.ref("users/".concat(n,"/").concat(t));return c.on("value",(function(t){var n=t.val();n&&e(n)})),function(){return c.off()}}},{key:"remove",value:function(e,t){Q.ref("users/".concat(t,"/tracker/").concat(e.id)).remove()}},{key:"saveEmotion",value:function(e,t){Q.ref("users/".concat(t,"/emotion/").concat(e.id)).set(e)}}]),e}(),J=function(){function e(){Object(Y.a)(this,e)}return Object(K.a)(e,[{key:"login",value:function(e){var t=new(z.a.auth["".concat(e,"AuthProvider")]);return X.signInWithPopup(t)}},{key:"onAccountRegist",value:function(e,t){return X.createUserWithEmailAndPassword(e,t)}},{key:"onAccountLogin",value:function(e,t){return X.signInWithEmailAndPassword(e,t)}},{key:"onAuthChange",value:function(e){z.a.auth().onAuthStateChanged((function(t){e(t)}))}},{key:"logout",value:function(){z.a.auth().signOut()}}]),e}(),V=new Z,H=new J;o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(G,{firebase:V,authService:H})}),document.getElementById("root")),W()}},[[58,1,2]]]);
//# sourceMappingURL=main.4c91199e.chunk.js.map