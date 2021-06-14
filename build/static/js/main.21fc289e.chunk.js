(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{19:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),c=t(14),u=t.n(c),i=(t(19),t(3)),a=t(0),s=function(e){return Object(a.jsxs)("div",{children:["filter shown with: ",Object(a.jsx)("input",{value:e.value,onChange:e.handler})]})},d=function(e){return Object(a.jsxs)("form",{onSubmit:e.addPerson,children:[Object(a.jsxs)("div",{children:["name: ",Object(a.jsx)("input",{value:e.name,onChange:e.handleNameChange})]}),Object(a.jsxs)("div",{children:["number: ",Object(a.jsx)("input",{value:e.number,onChange:e.handleNumberChange})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"submit",children:"add"})})]})},l=function(e){return Object(a.jsx)("div",{children:e.persons.filter((function(n){return n.name.toLowerCase().includes(e.filterTerm)})).map((function(n){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("p",{children:[n.name," ",n.number,Object(a.jsx)("button",{onClick:function(){return e.deletePerson(n)},children:"delete"})]},n.id)})}))})},f=function(e){var n=e.message;e.type;return null===n?null:Object(a.jsx)("div",{className:n.type,children:n.text})},b=t(4),j=t.n(b),h="/api/persons",m=function(){return j.a.get(h).then((function(e){return e.data}))},p=function(e){return j.a.post(h,e).then((function(e){return e.data}))},O=function(e,n){return j.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},x=function(e){return j.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},v=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],o=n[1],c=Object(r.useState)(""),u=Object(i.a)(c,2),b=u[0],j=u[1],h=Object(r.useState)(""),v=Object(i.a)(h,2),g=v[0],y=v[1],w=Object(r.useState)(""),C=Object(i.a)(w,2),T=C[0],k=C[1],S=Object(r.useState)(null),N=Object(i.a)(S,2),P=N[0],D=N[1];Object(r.useEffect)((function(){m().then((function(e){return o(e.sort((function(e,n){return e.id-n.id})))}))}),[]),console.log("render",t.length,"persons");return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Phonebook"}),Object(a.jsx)(f,{message:P}),Object(a.jsx)(s,{value:T,handler:function(e){return k(e.target.value.toLowerCase())}}),Object(a.jsx)("h3",{children:"Add a new"}),Object(a.jsx)(d,{addPerson:function(e){if(e.preventDefault(),t.find((function(e){return e.name===b&&e.number===g})))return D({text:"".concat(b," is already in phonebook."),type:"error"}),void setTimeout((function(){return D(null)}),5e3);var n={name:b,number:g},r=t.find((function(e){return e.name===b&&e.number!==g}));r?window.confirm("".concat(b," is already in phonebook. Replace the old number with new one?"))&&O(r.id,n).then((function(e){o(t.filter((function(e){return e.id!==r.id})).concat(e).sort((function(e,n){return e.id-n.id}))),j(""),y(""),D({text:"Updated ".concat(e.name),type:"info"}),setTimeout((function(){return D(null)}),5e3)})).catch((function(e){o(t.filter((function(e){return e.id!==r.id}))),D({text:"Information of ".concat(b," has already been removed from server"),type:"error"}),setTimeout((function(){return D(null)}),5e3)})):p(n).then((function(e){o(t.concat(e)),j(""),y(""),D({text:"Added ".concat(e.name),type:"info"}),setTimeout((function(){return D(null)}),5e3)})).catch((function(e){console.log(e.response),D({text:e.response.data.error,type:"error"}),setTimeout((function(){return D(null)}),5e3)}))},name:b,handleNameChange:function(e){return j(e.target.value)},number:g,handleNumberChange:function(e){return y(e.target.value)}}),Object(a.jsx)("h3",{children:"Numbers"}),Object(a.jsx)(l,{persons:t,filterTerm:T,deletePerson:function(e){window.confirm("Do you really want to delete ".concat(e.name," ?"))&&x(e.id).then((function(n){o(t.filter((function(n){return n.id!==e.id}))),D({text:"Deleted ".concat(e.name),type:"info"}),setTimeout((function(){return D(null)}),5e3)})).catch((function(n){o(t.filter((function(n){return n.id!==e.id}))),D({text:"Information of ".concat(b," has already been removed from server"),type:"error"}),setTimeout((function(){return D(null)}),5e3)}))}})]})};u.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.21fc289e.chunk.js.map