(this["webpackJsonp4353-assignment2"]=this["webpackJsonp4353-assignment2"]||[]).push([[0],{135:function(e,a,t){e.exports=t(147)},143:function(e,a){},147:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),o=t.n(l),i=t(28),c=t(38),s=t(112),u=t(113),m=t(120),d={user:{}};function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;return a.type,e}t(143);var h={};function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,a=arguments.length>1?arguments[1]:void 0;return a.type,e}function E(e){return Object(c.combineReducers)({router:Object(m.a)(e),profiles:b,auth:p})}var g=t(8),f=t(21),v=t(185),y=t(201),x=t(22),w=t(190),O=t(191),j=t(187),S=t(189),C=t(192),k=Object(v.a)((function(){return{root:{flexGrow:1},title:{flexGrow:1}}}));var W=function(){var e=k();return r.a.createElement("div",{className:e.root},r.a.createElement(j.a,{position:"static"},r.a.createElement(S.a,null,r.a.createElement(w.a,{container:!0,justify:"space-evenly"},r.a.createElement(w.a,{item:!0},r.a.createElement(O.a,{component:x.a,to:"/app/profiles",variant:"body2",color:"textSecondary"},r.a.createElement(C.a,{color:"inherit"}," Profiles"))),r.a.createElement(w.a,{item:!0},r.a.createElement(O.a,{component:x.a,to:"/app/fuelquote",variant:"body2",color:"textSecondary"},r.a.createElement(C.a,{color:"inherit"},"Fuel Quote"))),r.a.createElement(w.a,{item:!0},r.a.createElement(C.a,{color:"inherit"},"Logout"))))))},N=Object(v.a)((function(e){return{root:{display:"flex",height:"100%",overflow:"hidden",width:"100%"},wrapper:{display:"flex",flex:"1 1 auto",overflow:"hidden",paddingTop:64,paddingLeft:20,paddingRight:20},contentContainer:{display:"flex",flex:"1 1 auto",overflow:"hidden"},content:{flex:"1 1 auto",height:"100%",overflow:"auto"}}}));var P=function(e){var a=e.children,t=N();return r.a.createElement("div",null,r.a.createElement(W,null),r.a.createElement("div",{className:t.wrapper},r.a.createElement("div",{className:t.contentContainer},r.a.createElement("div",{className:t.content},a))))},I=t(121),L=t(70);var A=function(e){var a=e.component,t=e.render,n=Object(L.a)(e,["component","render"]);return t?t(Object(I.a)({},n)):r.a.createElement(a,n)},M=t(194),T=t(199),q=t(195),B=t(196),D=t(82),F=t(197),R=t(75),V=t.n(R),z=t(88),H=t(3),G=t(51),J=t(97),Q=t(193),U=t(152),K=Object(v.a)((function(){return{root:{}}}));var Y=function(e){var a=e.className,t=e.onSubmitSuccess,n=Object(L.a)(e,["className","onSubmitSuccess"]),l=K();return Object(i.d)(),r.a.createElement(J.a,{initialValues:{email:"default@project.io",password:"user"},validationSchema:G.a().shape({email:G.b().email("Must be a valid email").max(255).required("Email is required"),password:G.b().max(255).required("Password is required")}),onSubmit:function(){var e=Object(z.a)(V.a.mark((function e(a,n){var r,l,o,i;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.setErrors,l=n.setStatus,o=n.setSubmitting;try{t()}catch(a){i=a.response&&a.response.data.message||"Something went wrong",l({success:!1}),r({submit:i}),o(!1)}case 2:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var t=e.errors,o=e.handleBlur,i=e.handleChange,c=e.handleSubmit,s=e.isSubmitting,u=e.touched,m=e.values;return r.a.createElement("form",Object.assign({noValidate:!0,className:Object(H.a)(l.root,a),onSubmit:c},n),r.a.createElement(Q.a,{error:Boolean(u.email&&t.email),fullWidth:!0,autoFocus:!0,helperText:u.email&&t.email,label:"Email Address",margin:"normal",name:"email",onBlur:o,onChange:i,type:"email",value:m.email,variant:"outlined"}),r.a.createElement(Q.a,{error:Boolean(u.password&&t.password),fullWidth:!0,helperText:u.password&&t.password,label:"Password",margin:"normal",name:"password",onBlur:o,onChange:i,type:"password",value:m.password,variant:"outlined"}),r.a.createElement(T.a,{mt:2},r.a.createElement(C.a,{color:"secondary",disabled:s,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Log In"),t.submit&&r.a.createElement(T.a,{mt:3},r.a.createElement(U.a,{error:!0},t.submit))))}))},Z=Object(v.a)((function(e){return{}}));var X=function(){Z();var e=Object(g.g)();return r.a.createElement(M.a,{maxWidth:"md"},r.a.createElement(T.a,{mb:8,display:"flex",alignItems:"center"}),r.a.createElement(q.a,{style:{backgroundColor:"lightgrey",border:"2px solid black"}},r.a.createElement(B.a,null,r.a.createElement(D.a,{variant:"h2",color:"textPrimary"},"Login"),r.a.createElement(T.a,{mt:2}),r.a.createElement(T.a,{mt:3},r.a.createElement(Y,{onSubmitSuccess:function(){e.push("/app")}})),r.a.createElement(T.a,{my:2},r.a.createElement(F.a,null)),r.a.createElement(O.a,{component:x.a,to:"/register",variant:"body2",color:"textSecondary"},"Create new account"))))},$=Object(v.a)((function(){return{root:{}}}));var _=function(e){var a=e.className,t=e.onSubmitSuccess,n=Object(L.a)(e,["className","onSubmitSuccess"]),l=$();return Object(i.d)(),r.a.createElement(J.a,{initialValues:{email:"default@project.io",password:"user"},validationSchema:G.a().shape({email:G.b().email("Must be a valid email").max(255).required("Email is required"),password:G.b().max(255).required("Password is required")}),onSubmit:function(){var e=Object(z.a)(V.a.mark((function e(a,n){var r,l,o,i;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.setErrors,l=n.setStatus,o=n.setSubmitting;try{t()}catch(a){i=a.response&&a.response.data.message||"Something went wrong",l({success:!1}),r({submit:i}),o(!1)}case 2:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var t=e.errors,o=e.handleBlur,i=e.handleChange,c=e.handleSubmit,s=e.isSubmitting,u=e.touched,m=e.values;return r.a.createElement("form",Object.assign({noValidate:!0,className:Object(H.a)(l.root,a),onSubmit:c},n),r.a.createElement(Q.a,{error:Boolean(u.email&&t.email),fullWidth:!0,autoFocus:!0,helperText:u.email&&t.email,label:"Email Address",margin:"normal",name:"email",onBlur:o,onChange:i,type:"email",value:m.email,variant:"outlined"}),r.a.createElement(Q.a,{error:Boolean(u.password&&t.password),fullWidth:!0,helperText:u.password&&t.password,label:"Password",margin:"normal",name:"password",onBlur:o,onChange:i,type:"password",value:m.password,variant:"outlined"}),r.a.createElement(T.a,{mt:2},r.a.createElement(O.a,{component:x.a,to:"/login",variant:"body2",color:"textSecondary"},r.a.createElement(C.a,{color:"secondary",disabled:s,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Create")),t.submit&&r.a.createElement(T.a,{mt:3},r.a.createElement(U.a,{error:!0},t.submit))))}))},ee=Object(v.a)((function(e){return{}}));var ae=function(){ee();var e=Object(g.g)();return r.a.createElement(M.a,{maxWidth:"md"},r.a.createElement(T.a,{mb:8,display:"flex",alignItems:"center"}),r.a.createElement(q.a,{style:{backgroundColor:"lightgrey",border:"2px solid black"}},r.a.createElement(B.a,null,r.a.createElement(D.a,{variant:"h2",color:"textPrimary"},"Register"),r.a.createElement(T.a,{mt:2}),r.a.createElement(T.a,{mt:3},r.a.createElement(_,{onSubmitSuccess:function(){e.push("/app")}})),r.a.createElement(T.a,{my:2},r.a.createElement(F.a,null)))))},te=t(19),ne=t(198),re=t(151),le=t(157),oe=t(153),ie=t(156),ce=t(200),se=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","IllinoisIndiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","MontanaNebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","PennsylvaniaRhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],ue=Object(v.a)((function(e){return{root:{},formControl:{minWidth:160},formControl2:{width:"100%"},cardHeader:{textAlign:"center"}}}));var me=function(e){var a=ue(),t=r.a.useState(),n=Object(te.a)(t,2),l=n[0],o=n[1],i=r.a.useState(),c=Object(te.a)(i,2),s=c[0],u=c[1],m=r.a.useState(),d=Object(te.a)(m,2),p=d[0],h=d[1],b=r.a.useState(),E=Object(te.a)(b,2),g=E[0],f=E[1],v=r.a.useState(),y=Object(te.a)(v,2),x=y[0],O=y[1],j=r.a.useState(),S=Object(te.a)(j,2),C=S[0],k=S[1];return r.a.createElement(q.a,{style:{backgroundColor:"lightgrey",border:"2px solid black"}},r.a.createElement(ne.a,{className:a.cardHeader,title:e.formTitle}),r.a.createElement(F.a,null),r.a.createElement(B.a,null,r.a.createElement(w.a,{container:!0,spacing:1},r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(Q.a,{label:"Full Name",fullWidth:!0,variant:"outlined",onChange:function(e){o(e.target.value)},InputLabelProps:{shrink:!0},value:l}))),r.a.createElement(T.a,{p:1}),r.a.createElement(w.a,{container:!0,spacing:1},r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(Q.a,{label:"Address One",fullWidth:!0,variant:"outlined",onChange:function(e){u(e.target.value)},InputLabelProps:{shrink:!0},value:s}))),r.a.createElement(w.a,{container:!0,spacing:1},r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(Q.a,{label:"Address Two(optional)",fullWidth:!0,variant:"outlined",onChange:function(e){h(e.target.value)},InputLabelProps:{shrink:!0},value:p}))),r.a.createElement(T.a,{p:1}),r.a.createElement(w.a,{container:!0,spacing:1},r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(Q.a,{label:"City",fullWidth:!0,variant:"outlined",onChange:function(e){f(e.target.value)},InputLabelProps:{shrink:!0},value:g})),r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(re.a,{variant:"outlined",className:a.formControl2},r.a.createElement(le.a,{shrink:!0},"State"),r.a.createElement(oe.a,{MenuProps:{getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"left"}},displayEmpty:!0,value:x,onChange:function(e){O(e.target.value)},input:r.a.createElement(ie.a,{notched:!0,labelWidth:"45"})},se.map((function(e,a){return r.a.createElement(ce.a,{value:e},e)})))))),r.a.createElement(T.a,{p:1}),r.a.createElement(w.a,{container:!0,spacing:1},r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(Q.a,{label:"Zip Code",fullWidth:!0,variant:"outlined",onChange:function(e){k(e.target.value)},InputLabelProps:{shrink:!0},value:C})))))},de=Object(v.a)((function(e){return{root:{},cardHeader:{textAlign:"center"}}}));var pe=function(e){var a=de(),t=(Object(g.g)(),r.a.useState("")),n=Object(te.a)(t,2),l=n[0],o=n[1],i=r.a.useState(""),c=Object(te.a)(i,2),s=c[0],u=c[1],m=r.a.useState(""),d=Object(te.a)(m,2),p=d[0],h=d[1],b=r.a.useState(""),E=Object(te.a)(b,2),f=E[0],v=E[1],y=r.a.useState(""),x=Object(te.a)(y,2),O=x[0],j=x[1];return r.a.createElement(w.a,{container:!0,justify:"space-between"},r.a.createElement(w.a,{item:!0,xs:!0,style:{marginLeft:15}},r.a.createElement(q.a,{style:{backgroundColor:"lightgrey",border:"2px solid black"}},r.a.createElement(ne.a,{className:a.cardHeader,title:"Fuel Quote"}),r.a.createElement(F.a,null),r.a.createElement(B.a,null,r.a.createElement(w.a,{container:!0,spacing:1},r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(Q.a,{label:"Gallons Requested",fullWidth:!0,variant:"outlined",onChange:function(e){o(e.target.value)},InputLabelProps:{shrink:!0},value:l})),r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(Q.a,{label:"Delivery Date",fullWidth:!0,variant:"outlined",onChange:function(e){h(e.target.value)},InputLabelProps:{shrink:!0},value:p}))),r.a.createElement(T.a,{p:1}),r.a.createElement(w.a,{container:!0,spacing:1},r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(Q.a,{label:"Price",fullWidth:!0,variant:"outlined",onChange:function(e){v(e.target.value)},InputLabelProps:{shrink:!0},value:f})),r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(Q.a,{label:"Amount Due",fullWidth:!0,variant:"outlined",onChange:function(e){j(e.target.value)},InputLabelProps:{shrink:!0},value:O}))),r.a.createElement(T.a,{p:1}),r.a.createElement(w.a,{container:!0,spacing:1},r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(Q.a,{label:"Delivery Address",fullWidth:!0,variant:"outlined",onChange:function(e){u(e.target.value)},InputLabelProps:{shrink:!0},value:s})))))))},he=Object(v.a)((function(e){return{root:{}}}));var be=function(e){he(),Object(g.g)(),Object(i.d)();var a=r.a.useState({}),t=Object(te.a)(a,2),n=(t[0],t[1]),l=r.a.useState({}),o=Object(te.a)(l,2);return o[0],o[1],r.a.createElement(w.a,{style:{paddingLeft:"20"},container:!0,justify:"space-between"},r.a.createElement(w.a,{item:!0,xs:!0,style:{paddingRight:15}},r.a.createElement(me,{formTitle:"Profile Details",saveProfile:function(e){console.log("profile:",e),n(e)}})),r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(pe,null)))};Object(v.a)((function(e){return{root:{},spacingScheme:{marginLeft:e.spacing(1)},actionIcon:{marginRight:e.spacing(1)}}}));var Ee=function(e){return r.a.createElement("div",null,"FUEL QUOTE")};var ge=function(){return r.a.createElement(g.d,null,r.a.createElement(g.a,{exact:!0,from:"/",to:"/login"}),r.a.createElement(g.b,{exact:!0,path:"/login",component:X}),r.a.createElement(g.b,{exact:!0,path:"/register",component:ae}),r.a.createElement(A,{path:"/app",render:function(e){return r.a.createElement(P,e,r.a.createElement(g.d,null,r.a.createElement(g.a,{exact:!0,from:"/app",to:"/app/profiles"}),r.a.createElement(g.b,{exact:!0,path:"/app/profiles",component:be}),r.a.createElement(g.b,{exact:!0,path:"/app/fuelquote",component:Ee})))}}))},fe=Object(f.a)(),ve=Object(v.a)((function(){return Object(y.a)({"@global":{"*":{boxSizing:"border-box",margin:0,padding:0},html:{"-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale",height:"100%",width:"100%"},body:{height:"100%",width:"100%"},"#root":{height:"100%",width:"100%"}}})}));var ye=function(){return ve(),r.a.createElement(g.c,{history:fe},r.a.createElement(ge,null))},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=[s.a],t=Object(u.composeWithDevTools)(c.applyMiddleware.apply(void 0,a)),n=[t],r=c.compose.apply(void 0,n),l=Object(c.createStore)(E,e,r);return l}();o.a.render(r.a.createElement(i.a,{store:xe},r.a.createElement(ye,null)),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.51d97c7c.chunk.js.map