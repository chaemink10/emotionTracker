(this["webpackJsonppractice-project"]=this["webpackJsonppractice-project"]||[]).push([[0],{11:function(e,t,n){e.exports={emotionList:"emotion_emotionList__3O6Yy",emotionButton:"emotion_emotionButton__1XAze"}},15:function(e,t,n){e.exports={header:"header_header__v9FKw",counter:"header_counter__1BAsj"}},16:function(e,t,n){e.exports={add:"add_add__2GMyP",btn:"add_btn__Neqr_"}},27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n.n(c),a=n(18),i=n.n(a),o=(n(27),n(12)),s=n(17),u=n(15),j=n.n(u),d=n(1),b=function(e){var t=e.trackerTotalCount;return Object(d.jsxs)("header",{className:j.a.header,children:[Object(d.jsxs)("h2",{children:["Chaemin,",Object(d.jsx)("br",{})," How Was Your Today? \ud83d\ude42"]}),Object(d.jsx)("div",{className:j.a.counter,children:t})]})},l=n(9),f=n(16),p=n.n(f),m=function(e){var t=e.onUpdate,n=Object(c.useRef)(),r=Object(c.useRef)();return Object(d.jsx)("section",{className:p.a.add,children:Object(d.jsxs)("form",{ref:n,children:[Object(d.jsx)("input",{type:"text",placeholder:"Add Your Emotion",ref:r}),Object(d.jsx)("button",{onClick:function(e){e.preventDefault();var c={id:Object(l.a)(),emotion:r.current.value,count:0,description:[]};r.current.value&&t(c),n.current.reset()},className:p.a.btn,children:"Add"})]})})},O=n(22),_=n(5),k=n.n(_),x=function(e){var t=e.tracker,n=e.onUpdate,r=Object(c.useRef)(),a=Object(c.useRef)();return Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault();var c=[],i=[];c.text=a.current.value,c.id=Object(l.a)(),i=t.description?[].concat(Object(O.a)(t.description),[c]):[c];var s=Object(o.a)(Object(o.a)({},t),{},{description:i});c&&n(s),r.current.reset()},ref:r,children:Object(d.jsxs)("div",{className:k.a.trackerDesc,children:[Object(d.jsx)("input",{type:"text",className:k.a.input,placeholder:"Write your feelings in a row simply.",ref:a}),Object(d.jsx)("button",{type:"submit",className:k.a.inputBtn,children:"+"})]})})},h=Object(c.memo)((function(e){var t=e.tracker,n=e.onUpdate,r=Object(c.useRef)(),a=t.description,i=function(e){var c=a.filter((function(e){return e.id!==r.current.value}));t.description=c,n(t)};return Object(d.jsx)("ul",{className:k.a.descList,children:a.map((function(e){return Object(d.jsxs)("li",{children:[e.text,Object(d.jsx)("input",{className:k.a.blind,ref:r,value:e.id,readOnly:!0}),Object(d.jsx)("button",{type:"button",className:k.a.deleteBtn,onClick:i,children:"X"})]},Object(l.a)())}))})})),v=function(e){var t=e.tracker,n=e.onUpdate;return Object(d.jsxs)(d.Fragment,{children:[t.description&&Object(d.jsx)(h,{tracker:t,onUpdate:n}),Object(d.jsx)(x,{tracker:t,onUpdate:n})]})},N=n(6),y=n.n(N),L=Object(c.memo)((function(e){var t=e.onDelete,n=e.onUpdate,c=e.tracker;return Object(d.jsxs)("li",{children:[Object(d.jsxs)("div",{className:y.a.trackerSection,children:[Object(d.jsx)("div",{className:y.a.trackerName,children:c.emotion}),Object(d.jsx)("div",{className:y.a.count,children:c.count}),Object(d.jsx)("button",{type:"button",className:"".concat(y.a.delete," ").concat(y.a.btn),onClick:function(){t(c)},children:"\uc0ad\uc81c"})]}),Object(d.jsx)("div",{children:Object(d.jsx)(v,{tracker:c,onUpdate:n})})]})})),D=Object(c.memo)((function(e){var t=e.tracker,n=e.onDelete,c=e.onUpdate;return Object(d.jsx)("ul",{className:y.a.trackerList,children:Object.keys(t).map((function(e){return Object(d.jsx)(L,{onDelete:n,onUpdate:c,tracker:t[e]},e)}))})})),g=n(11),U=n.n(g),B=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("li",{children:Object(d.jsx)("button",{type:"button",className:U.a.emotionButton,children:"Sad \ud83d\ude2d"})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{type:"button",className:U.a.emotionButton,children:"Surprise \ud83e\udd2d"})})]})},C=function(e){return Object(d.jsx)("ul",{className:U.a.emotionList,children:Object(d.jsx)(B,{})})},S=function(e){var t=e.firebase,n=Object(c.useState)(0),r=Object(s.a)(n,2),a=r[0],i=r[1],u=Object(c.useState)({}),j=Object(s.a)(u,2),l=j[0],f=j[1];Object(c.useEffect)((function(){var e=t.load((function(e){f(e),i(Object.keys(e).length)}));return function(){return e()}}),[t]);var p=function(e){f((function(t){var n=Object(o.a)({},t);return n[e.id]=e,n})),t.save(e)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{trackerTotalCount:a}),Object(d.jsx)(m,{onUpdate:p}),Object(d.jsx)(C,{}),l&&Object(d.jsx)(D,{tracker:l,onDelete:function(e){f((function(t){Object.keys(t).filter((function(t){return t!==e.id}))})),t.remove(e)},onUpdate:p})]})};var F=function(e){var t=e.firebase;return Object(d.jsx)(S,{firebase:t})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},w=n(19),E=n(20),I=n(21),T=(n(30),I.a.initializeApp({apiKey:"AIzaSyC64PNNqG6bE1g9n_9ZMetR0i8VanELn_I",authDomain:"emotion-tracker-46878.firebaseapp.com",projectId:"emotion-tracker-46878",storageBucket:"emotion-tracker-46878.appspot.com",appId:"1:1004907245469:web:764dab67c2c7af9e624974",measurementId:"G-VQ13W4YGME",databaseURL:"https://emotion-tracker-46878-default-rtdb.firebaseio.com/"}).database()),A=new(function(){function e(){Object(w.a)(this,e)}return Object(E.a)(e,[{key:"save",value:function(e){T.ref("users/".concat(e.id)).set(e)}},{key:"load",value:function(e){var t=T.ref("users/");return t.on("value",(function(t){var n=t.val();n&&e(n)})),function(){return t.off()}}},{key:"remove",value:function(e){T.ref("users/".concat(e.id)).remove()}}]),e}());i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(F,{firebase:A})}),document.getElementById("root")),R()},5:function(e,t,n){e.exports={trackerDesc:"trackerDescription_trackerDesc__36-y1",input:"trackerDescription_input__7mK-9",inputBtn:"trackerDescription_inputBtn__26eem",descList:"trackerDescription_descList__3OTgx",deleteBtn:"trackerDescription_deleteBtn__1fZch",blind:"trackerDescription_blind__3osT2"}},6:function(e,t,n){e.exports={trackerList:"trackerList_trackerList__1YRCd",trackerName:"trackerList_trackerName__3bQFv",trackerSection:"trackerList_trackerSection__18CUL",count:"trackerList_count__WZCGD",plus:"trackerList_plus__34mgX",minus:"trackerList_minus__1Ufmf",delete:"trackerList_delete__3vEZ1",btn:"trackerList_btn__oQVcp"}}},[[34,1,2]]]);
//# sourceMappingURL=main.cb756593.chunk.js.map