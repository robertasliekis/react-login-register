(this.webpackJsonpapp01=this.webpackJsonpapp01||[]).push([[0],{34:function(e,a,t){e.exports=t(47)},39:function(e,a,t){},40:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var r=t(0),s=t.n(r),n=t(25),l=t.n(n),i=(t(39),t(14)),o=t(15),c=t(17),m=t(16),u=(t(40),t(7)),d=t(11),p=t(22),g=t(5),b=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=a.call(this,e)).state={burgerClicked:!1},r.handleClickBurger=r.handleClickBurger.bind(Object(p.a)(r)),r.handleLogoClicked=r.handleLogoClicked.bind(Object(p.a)(r)),r}return Object(o.a)(t,[{key:"handleClickBurger",value:function(){var e=this.state.burgerClicked;this.setState({burgerClicked:!e})}},{key:"handleLogoClicked",value:function(){this.setState({burgerClicked:!1})}},{key:"componentDidUpdate",value:function(e,a){this.props.loginStatus!==e.loginStatus&&this.setState({burgerClicked:!1})}},{key:"render",value:function(){var e=this,a=this.props.loginStatus?null:"btn-last",t=this.state.burgerClicked?"burger-menu-clicked":null;return s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"navbar"},s.a.createElement(g.b,{className:"logo-container",onClick:this.handleLogoClicked,to:"/"},"REACT LOGIN"),s.a.createElement("div",{className:"menu-buttons"},s.a.createElement(g.b,{className:"btn btn-login",to:"/",style:{display:this.props.loginStatus?"none":"flex"}},"Login"),s.a.createElement(g.b,{className:"btn btn-register",to:"/register",style:{display:this.props.loginStatus?"none":"flex"}},"Register"),s.a.createElement(g.b,{className:"btn btn-user",to:"/user",style:{display:this.props.loginStatus?"flex":"none"}},"User Info"),s.a.createElement(g.b,{className:"btn btn-user-edit",to:"/edit",style:{display:this.props.loginStatus?"flex":"none"}},"Edit User"),s.a.createElement(g.b,{className:"btn btn-about "+a,to:"/about"},"About"),s.a.createElement(g.b,{className:"btn btn-logout",to:"/",style:{display:this.props.loginStatus?"flex":"none"},onClick:function(){return e.props.isLoggedIn()}},"Log Out")),s.a.createElement("div",{className:"burger-menu "+t,onClick:this.handleClickBurger},s.a.createElement("div",{className:"line"}),s.a.createElement("div",{className:"line"}),s.a.createElement("div",{className:"line"}))),s.a.createElement("div",{className:"sidebar",style:{transform:this.state.burgerClicked?"translateX(0%)":"translateX(-100%)"}},s.a.createElement("div",{className:"menu-buttons"},s.a.createElement(g.b,{className:"btn btn-login",onClick:this.handleClickBurger,to:"/",style:{display:this.props.loginStatus?"none":"flex"}},"Login"),s.a.createElement(g.b,{className:"btn btn-register",onClick:this.handleClickBurger,to:"/register",style:{display:this.props.loginStatus?"none":"flex"}},"Register"),s.a.createElement(g.b,{className:"btn btn-user",onClick:this.handleClickBurger,to:"/user",style:{display:this.props.loginStatus?"flex":"none"}},"User Info"),s.a.createElement(g.b,{className:"btn btn-user-edit",onClick:this.handleClickBurger,to:"/edit",style:{display:this.props.loginStatus?"flex":"none"}},"Edit User"),s.a.createElement(g.b,{className:"btn btn-about "+a,onClick:this.handleClickBurger,to:"/about"},"About"),s.a.createElement(g.b,Object(d.a)({className:"btn btn-logout",onClick:this.handleClickBurger,to:"/",style:{display:this.props.loginStatus?"flex":"none"}},"onClick",(function(){return e.props.isLoggedIn()})),"Log Out"))))}}]),t}(r.Component),E=Object(u.b)((function(e){return{loginStatus:e.isLoggedIn.isLoggedIn}}),(function(e){return{isLoggedIn:function(){return e({type:"IS_LOGGED_IN"})}}}))(b),h=t(4),v=t(3),f=t(21),w=function(){return{type:"IS_LOGGED_IN"}};var y={isLoggedIn:w,setActiveUser:function(e){return{type:"SET_USER_ID",payload:e}}},N=Object(u.b)((function(e){return{users:e.addUser.users,setActiveUser:e.setActiveUser.userId,loginStatus:e.isLoggedIn.isLoggedIn}}),y)((function(e){var a=e.users,t=e.isLoggedIn,n=(e.userId,e.setActiveUser),l=(e.loginStatus,e.onChange,Object(f.a)()),i=l.register,o=l.handleSubmit,c=l.errors,m=Object(r.useState)(!1),u=Object(h.a)(m,2),d=u[0],p=u[1],g=Object(r.useState)("emailas"),b=Object(h.a)(g,2),E=(b[0],b[1]),w=!1,y=Object(v.f)();return s.a.createElement("form",{className:"form-container",onSubmit:o((function(e){Object.values(a).forEach((function(a,r){a.email===e.email&&a.password===e.password&&(w=!0,n(a),t())})),w?(p(!1),y.push("/react-login-register/user")):p(!0)}))},s.a.createElement("h1",{className:"form-heading"},"LOGIN"),s.a.createElement("div",{className:"form-input"},s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"email"},"Email:"),s.a.createElement("input",{onChange:function(e){E(e.target.value)},name:"email",placeholder:"Email",ref:i({required:"*Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"*Invalid email address"}})})),s.a.createElement("div",{className:"error-message"},c.email&&c.email.message)),s.a.createElement("div",{className:"form-input"},s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"password"},"Password:"),s.a.createElement("input",{type:"password",placeholder:"Password",name:"password",ref:i({required:"*Password is required"})})),s.a.createElement("div",{className:"error-message"},c.password&&s.a.createElement("p",null,c.password.message))),s.a.createElement("div",{className:"message-container"},s.a.createElement("div",{className:"error-message",style:{opacity:d?1:0}},"*Incorrect email or password")),s.a.createElement("button",{className:"btn btn-submit",type:"submit"},"LOGIN"))}));var O={addUser:function(e){return{type:"REGISTER_USER",payload:e}},isLoggedIn:w},S=Object(u.b)((function(e){return{users:e.addUser.users,loginStatus:e.isLoggedIn.isLoggedIn}}),O)((function(e){var a=e.users,t=e.addUser,n=Object(f.a)(),l=n.register,i=n.handleSubmit,o=n.errors,c=n.getValues,m=Object(r.useState)(!1),u=Object(h.a)(m,2),d=u[0],p=u[1],g=Object(r.useState)(!1),b=Object(h.a)(g,2),E=b[0],v=b[1];return s.a.createElement("form",{className:"form-container",onSubmit:i((function(e){var r=!1;if(Object.values(a).forEach((function(a){a.email===e.email&&(p(!0),r=!0)})),r)r=!1,v(!1);else{p(!1),v(!0);var s={email:e.email,password:e.password};t(s)}}))},s.a.createElement("h1",{className:"form-heading"},"REGISTER"),s.a.createElement("div",{className:"form-input"},s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"email"},"Email:"),s.a.createElement("input",{name:"email",placeholder:"Email",ref:l({required:"*Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"invalid email address"}})})),s.a.createElement("div",{className:"error-message"},o.email&&o.email.message)),s.a.createElement("div",{className:"form-input"},s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"password"},"Password:"),s.a.createElement("input",{type:"password",placeholder:"Password",name:"password",ref:l({required:"*Password is required"})})),s.a.createElement("div",{className:"error-message"},o.password&&s.a.createElement("p",null,o.password.message))),s.a.createElement("div",{className:"form-input"},s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"repeat_password"},"Repeat Password:"),s.a.createElement("input",{type:"password",placeholder:"Password",name:"repeat_password",ref:l({required:"*Password is required",validate:function(e){return e===c().password||"The passwords do not match"}})})),s.a.createElement("div",{className:"error-message"},o.repeat_password&&s.a.createElement("p",null," ",o.repeat_password.message))),s.a.createElement("div",{className:"message-container"},s.a.createElement("div",{className:"error-message",style:{opacity:d?1:0}},"*User already exists"),s.a.createElement("div",{className:"error-message green-text user-create-message",style:{opacity:E?1:0}},"User created successfully!")),s.a.createElement("button",{className:"btn btn-submit",type:"submit"},"REGISTER"))})),j=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"form-container"},s.a.createElement("h1",null,"ABOUT"),s.a.createElement("p",null,"Login/Register website made with React and Redux"))}}]),t}(r.Component);var I=Object(u.b)((function(e){return{users:e.addUser.users,setActiveUser:e.setActiveUser.userId,loginStatus:e.isLoggedIn.isLoggedIn}}),(function(e){return{}}))((function(e){var a=e.setActiveUser;if(e.loginStatus){var t=a.email;return s.a.createElement("form",{className:"form-container"},s.a.createElement("h1",{className:"form-heading"},"USER INFO"),s.a.createElement("p",null,"User ",t," is logged in"))}return s.a.createElement("div",null,s.a.createElement("h1",null,"You have to log-in"))}));var k={updateUser:function(e){return{type:"UPDATE_USER",payload:e}}},C=Object(u.b)((function(e){return{users:e.addUser.users,setActiveUser:e.setActiveUser.userId,loginStatus:e.isLoggedIn.isLoggedIn}}),k)((function(e){var a,t=e.users,n=e.setActiveUser,l=(e.onChange,e.loginStatus),i=e.updateUser,o=Object(f.a)(),c=o.register,m=o.handleSubmit,u=o.getValues,d=o.errors,p=Object(r.useState)(!1),g=Object(h.a)(p,2),b=g[0],E=g[1];a=l?n.email:"";var v=Object(r.useState)(a),w=Object(h.a)(v,2),y=w[0],N=w[1];return l?s.a.createElement("form",{className:"form-container",onSubmit:m((function(e){Object.values(t).forEach((function(a,t){if(a.id===n.id){var r={index:t,id:n.id,email:e.email,password:e.password};i(r),E(!0)}}))}))},s.a.createElement("h1",{className:"form-heading"},"EDIT USER INFO"),s.a.createElement("div",{className:"form-input"},s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"email"},"Email:"),s.a.createElement("input",{value:y,onChange:function(e){N(e.target.value)},name:"email",ref:c({required:"*Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"invalid email address"}})})),s.a.createElement("div",{className:"error-message"},d.email&&d.email.message)),s.a.createElement("div",{className:"form-input"},s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"password"},"Password:"),s.a.createElement("input",{type:"password",placeholder:"Password",name:"password",ref:c({required:"*Password is required"})})),s.a.createElement("div",{className:"error-message"},d.password&&s.a.createElement("p",null,d.password.message))),s.a.createElement("div",{className:"form-input"},s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"repeat_password"},"Repeat Password:"),s.a.createElement("input",{type:"password",placeholder:"Password",name:"repeat_password",ref:c({required:"*Password is required",validate:function(e){return e===u().password||"The passwords do not match"}})})),s.a.createElement("div",{className:"error-message"},d.repeat_password&&s.a.createElement("p",null," ",d.repeat_password.message))),s.a.createElement("div",{className:"message-container",style:{opacity:b?"1":"0"}},s.a.createElement("div",{className:"error-message green-text"},"Saved successfully")),s.a.createElement("button",{className:"btn btn-submit",type:"submit"},"SAVE")):s.a.createElement("div",null,s.a.createElement("h1",null,"You have to log-in"))})),U=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Page does not exist"))}}]),t}(r.Component),L=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e="/react-login-register";return s.a.createElement(g.a,null,s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"website-wrapper"},s.a.createElement(E,null),s.a.createElement("div",{className:"main-content"},s.a.createElement(v.c,null,s.a.createElement(v.a,{exact:!0,path:e+"/",component:N}),s.a.createElement(v.a,{path:e+"/register",component:S}),s.a.createElement(v.a,{path:e+"/user",component:I}),s.a.createElement(v.a,{path:e+"/edit",component:C}),s.a.createElement(v.a,{path:e+"/about",component:j}),s.a.createElement(v.a,{path:"*",component:U}))))))}}]),t}(s.a.Component),A=Object(u.b)((function(e){return{loginStatus:e.isLoggedIn.isLoggedIn}}))(L);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=t(19),R=t(2),x=t(13),P={users:[{id:"id1",email:"user1@mail.com",password:"123"},{id:"id2",email:"user2@mail.com",password:"123"},{id:"id3",email:"123@123.lt",password:"123"}]},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"REGISTER_USER":return Object(x.a)(Object(x.a)({},e),{},{users:e.users.concat(a.payload)});case"UPDATE_USER":var t=Object(R.a)(e.users);return t[a.payload.index]={id:a.payload.id,email:a.payload.email,password:a.payload.password},Object(x.a)(Object(x.a)({},e),{},{users:t});default:return e}},B={isLoggedIn:!1},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"IS_LOGGED_IN":return Object(x.a)(Object(x.a)({},e),{},{isLoggedIn:!e.isLoggedIn});default:return e}},T={userId:null},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_USER_ID":return Object(x.a)(Object(x.a)({},e),{},{userId:a.payload});default:return e}},D=Object(_.b)({addUser:q,isLoggedIn:G,setActiveUser:F}),Z=Object(_.c)(D);l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(u.a,{store:Z},s.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.be7b203e.chunk.js.map