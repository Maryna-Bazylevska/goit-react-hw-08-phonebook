"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[694],{1694:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,o,a,i,c,s,u,l,d,p,x,b,m=function(n){return n.contacts.filter},h=function(n){var e=function(n){return n.contacts.items}(n),t=m(n).toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(t)}))},f=t(3487),g=t(168),Z=t(9958),v=Z.Z.div(r||(r=(0,g.Z)(["\n  margin: 20px auto;\n  padding: 20px;\n  max-width: 380px;\n  background-color: #c5637c;\n  border-radius: 6px;\n  box-shadow: 7px 7px 13px 0px rgba(0, 0, 0, 0.38);\n"]))),k=Z.Z.h1(o||(o=(0,g.Z)(["\n  color: black;\n"]))),j=Z.Z.h2(a||(a=(0,g.Z)(["\n  color: black;\n"]))),y=Z.Z.p(i||(i=(0,g.Z)(["\n  padding-top: 15px;\n  color: black;\n"]))),w=t(2791),C=t(9434),z=t(6140),A=t(885),F=Z.Z.form(c||(c=(0,g.Z)(["\n  margin-top: 10px;\n  margin-bottom: 30px;\n"]))),S=Z.Z.label(s||(s=(0,g.Z)(["\n  display: block;\n  margin-bottom: 20px;\n  color: black;\n  font-weight: 500;\n  font-size: 15px;\n"]))),_=Z.Z.input(u||(u=(0,g.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 15px;\n"]))),I=Z.Z.button(l||(l=(0,g.Z)(["\n  padding: 5px;\n  margin: 7px 0;\n  border: none;\n  outline: none;\n  border-radius: 6px;\n  background-color: pink;\n  color: black;\n  cursor: pointer;\n  text-transform: capitalize;\n  box-shadow: 7px 7px 13px 0px rgba(0, 0, 0, 0.38);\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    background-color: #c5637c;\n    color: white;\n  }\n"]))),L=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},P=t(184);function N(){var n=(0,w.useState)(""),e=(0,A.Z)(n,2),t=e[0],r=e[1],o=(0,w.useState)(""),a=(0,A.Z)(o,2),i=a[0],c=a[1],s=(0,C.v9)(h),u=(0,C.I0)(),l=function(){r(""),c("")},d=L(),p=L();return(0,P.jsxs)(F,{onSubmit:function(n){n.preventDefault(),l(),s.find((function(n){return n.name.toLowerCase()===t.toLowerCase()}))?z.ZP.error("".concat(t," is already in contacts.")):s.find((function(n){return n.number===i}))?z.ZP.error("".concat(i," is already in contacts.")):u((0,f.uK)({name:t,number:i}))},children:[(0,P.jsxs)(S,{htmlFor:d,children:["Name",(0,P.jsx)(_,{type:"text",name:"name",id:d,value:t,onChange:function(n){return r(n.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,P.jsxs)(S,{htmlFor:p,children:["Number",(0,P.jsx)(_,{type:"tel",name:"number",id:p,value:i,onChange:function(n){return c(n.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,P.jsx)(I,{type:"sumbit",children:"Add contact"})]})}var q,D,K=Z.Z.ul(d||(d=(0,g.Z)(["\n  font-size: 18px;\n"]))),M=Z.Z.li(p||(p=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: black;\n"]))),U=Z.Z.p(x||(x=(0,g.Z)(["\n  margin-right: 5px;\n"]))),B=Z.Z.button(b||(b=(0,g.Z)(["\n  margin-top: 15px;\n  background-color: pink;\n  border: 1px solid #bdbdbd;\n  border-radius: 3px;\n"])));function E(){var n=(0,C.v9)(h),e=(0,C.I0)();return(0,P.jsx)(K,{children:n.map((function(n){var t=n.id,r=n.name,o=n.number;return(0,P.jsxs)(M,{children:[(0,P.jsxs)(U,{children:[r,": ",o]}),(0,P.jsx)(B,{type:"button",onClick:function(){return function(n){return e((0,f.GK)(n))}(t)},children:"Delete"})]},t)}))})}var G=Z.Z.div(q||(q=(0,g.Z)(["\n  margin-left: 20px;\n"]))),J=Z.Z.input(D||(D=(0,g.Z)(["\n  border: 1px solid #bdbdbd;\n"])));function R(){var n=(0,C.I0)(),e=(0,C.v9)(m),t=L();return(0,P.jsx)(G,{children:(0,P.jsx)("label",{htmlFor:t,children:(0,P.jsx)(J,{type:"text",name:"name",value:e,id:t,onChange:function(e){!function(e){n((0,f.M6)(e))}(e.target.value)},placeholder:"Find contacts by name"})})})}function T(){var n=(0,C.v9)(h),e=(0,C.I0)();return(0,w.useEffect)((function(){return e((0,f.yF)()),function(){console.log("This will be logged on unmount")}}),[e]),(0,P.jsxs)(v,{children:[(0,P.jsx)(z.x7,{}),(0,P.jsx)(k,{children:"Phonebook"}),(0,P.jsx)(N,{}),(0,P.jsx)(j,{children:"Contacts"}),(0,P.jsx)(R,{}),n.length>0?(0,P.jsx)(E,{contacts:n}):(0,P.jsx)(y,{children:"Your phonebook is empty."})]})}}}]);
//# sourceMappingURL=694.16dc5f35.chunk.js.map