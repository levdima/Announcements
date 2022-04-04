(this["webpackJsonpmy-todolist"]=this["webpackJsonpmy-todolist"]||[]).push([[0],{22:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),o=c(15),a=c.n(o),i=c(16),r=c(13),j=c(4),l=Object(n.createContext)(null),d=l,b=(c(22),c(27)),u=c.n(b),O=c(9),x=c(1),h=function(e){var t=Object(n.useState)({title:"",description:"",id:null,date:u()().format("H:mm D.MM.yy")}),c=Object(j.a)(t,2),s=c[0],o=c[1],a=Object(n.useContext)(l).onTodosCreate,d=function(e){var t=e.target,c=t.name,n=t.value;o(Object(r.a)(Object(r.a)({},s),{},Object(i.a)({},c,n)))};return Object(x.jsx)("div",{children:Object(x.jsxs)("form",{className:"form",children:[Object(x.jsx)("input",{className:"input",value:s.title,onChange:d,type:"text",name:"title",placeholder:"Announcement title"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"input",value:s.description,onChange:d,type:"text",name:"description",placeholder:"Announcement description"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{className:"buttonInput",onClick:function(){""!==s.title&&""!==s.description?(a(Object(r.a)(Object(r.a)({},s),{},{id:Math.random()})),o({title:"",description:"",id:null})):console.error("Write something")},children:Object(x.jsx)(O.b,{className:"LinkButton",to:"/list",children:"Add Announcement"})})]})})};c(45);var m=function(e){var t=e.onClose,c=e.title,s=e.description,o=e.todo,a=Object(n.useState)([]),i=Object(j.a)(a,2),r=i[0],l=i[1],b=Object(n.useState)(""),u=Object(j.a)(b,2),O=u[0],h=u[1],m=Object(n.useState)(""),p=Object(j.a)(m,2),v=(p[0],p[1]),f=Object(n.useContext)(d).todos;return Object(x.jsx)("div",{className:"modalBackground",children:Object(x.jsxs)("div",{className:"modalContainer",children:[Object(x.jsx)("div",{className:"titleCloseBtn",children:Object(x.jsx)("button",{onClick:t,children:"X"})}),Object(x.jsx)("div",{className:"title",children:Object(x.jsx)("h1",{children:c})}),Object(x.jsxs)("div",{className:"body",children:[Object(x.jsx)("p",{children:s}),Object(x.jsx)("p",{children:o.date}),Object(x.jsx)("h1",{children:"show top3 announcemets"}),Object(x.jsx)("input",{type:"checkbox",value:O,onChange:function(){var e=o.title,t=o.description;h(e),v(t);var c=f.filter((function(c){return c.title.toLowerCase().includes(e.toLowerCase())&&c.description.toLowerCase().includes(t.toLowerCase())}));l(c)}}),1!=r.length&&r.sort((function(e,t){return e.date.localeCompare(t.date)})).slice(0,3).map((function(e,t){return Object(x.jsxs)("div",{className:"topAnounsments",children:[Object(x.jsxs)("p",{children:[e.title," "]}),Object(x.jsxs)("p",{children:[e.description," "]})]})}))]})]})})};var p=function(e){var t=e.todo,c=e.onTodoRemove,s=Object(n.useState)(t.title),o=Object(j.a)(s,2),a=o[0],i=o[1],r=Object(n.useState)(t.description),l=Object(j.a)(r,2),d=l[0],b=l[1],u=Object(n.useState)(!1),O=Object(j.a)(u,2),h=O[0],p=O[1],v=Object(n.useState)(!1),f=Object(j.a)(v,2),C=f[0],N=f[1],g=Object(n.useCallback)((function(e){i(e.target.value)}),[]),k=Object(n.useCallback)((function(e){b(e.target.value)}),[]),S=Object(n.useCallback)((function(){p(!h)}),[h]);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{children:[h?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("input",{value:a,onChange:g}),Object(x.jsx)("input",{value:d,onChange:k})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("p",{className:"text",children:a}),Object(x.jsx)("div",{className:"textconteiner",children:Object(x.jsx)("p",{className:"text",children:d})})]}),Object(x.jsx)("button",{className:"button",onClick:function(){c(t.id)},children:"delete"}),Object(x.jsx)("button",{className:"button",onClick:S,children:h?"Done":"Edit"}),Object(x.jsx)("button",{className:"button",onClick:function(){N(!0)},children:"details"})]}),C&&Object(x.jsx)(m,{title:a,description:d,setModalOpen:N,onClose:function(){return N(!1)},todo:t})]})};c(46);var v=function(){var e=Object(n.useContext)(l),t=e.todos,c=e.onTodoRemove;return Object(x.jsx)("div",{className:"commonContainer",children:t.map((function(e){return Object(x.jsx)(p,{onTodoRemove:c,todo:e},e.title+e.description)}))})},f=(c(47),function(e){return Object(x.jsxs)("header",{className:"container",children:[Object(x.jsx)(O.b,{className:"box",to:"/list",children:"List of Announcements  "}),Object(x.jsx)(O.b,{className:"box",to:"/create-todo",children:"Add new Announcement"}),Object(x.jsx)(O.b,{className:"box",to:"/search",children:"Search Announcements"})]})}),C=c(32);var N=function(e){var t=e.children,c=Object(n.useState)([]),s=Object(j.a)(c,2),o=s[0],a=s[1];return Object(x.jsx)("div",{children:Object(x.jsx)(l.Provider,{value:{todos:o,onTodosCreate:function(e){e?(a([].concat(Object(C.a)(o),[e])),console.log(o)):console.error("wrong arg")},onTodoRemove:function(e){e||console.error("wrong id"),a(o.filter((function(t){return t.id!==e})))}},children:t})})},g=(c(48),c(29)),k=c.n(g),S=c(31),w=c.n(S),y=function(e){e.todo;var t=Object(n.useState)([]),c=Object(j.a)(t,2),s=c[0],o=c[1],a=Object(n.useState)(""),i=Object(j.a)(a,2),r=i[0],d=i[1],b=Object(n.useContext)(l).todos;return Object(x.jsxs)("div",{className:"search",children:[Object(x.jsxs)("div",{className:"searchInputs",children:[Object(x.jsx)("input",{type:"text",value:r,onChange:function(e){var t=e.target.value;d(t);var c=b.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}));o(""===t?[]:c)}})," ",Object(x.jsxs)("div",{className:"searchIcon",children:[" ",0===s.length?Object(x.jsx)(k.a,{}):Object(x.jsx)(w.a,{id:"clearBtn",onClick:function(){o([]),d("")}})," "]})," "]})," ",0!=s.length&&Object(x.jsxs)("div",{className:"dataResult",children:[" ",s.map((function(e,t){return Object(x.jsxs)("a",{className:"dataItem",href:e.link,target:"_blank",children:[Object(x.jsxs)("p",{children:[" ",e.title," "]})," ",Object(x.jsxs)("p",{children:[" ",e.description," "]})," ",Object(x.jsxs)("p",{children:[" ",e.date," "]})," "]})}))," "]})," "]})},A=c(2);var L=function(){return Object(x.jsx)(N,{children:Object(x.jsxs)(O.a,{children:[Object(x.jsx)(f,{}),Object(x.jsxs)(A.c,{children:[Object(x.jsx)(A.a,{path:"/list",exact:!0,children:Object(x.jsx)(v,{})}),Object(x.jsx)(A.a,{path:"/create-todo",exact:!0,children:Object(x.jsx)(h,{})}),Object(x.jsx)(A.a,{path:"/search",exact:!0,children:Object(x.jsx)(y,{})})]})]})})};a.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(L,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.cbe35b09.chunk.js.map