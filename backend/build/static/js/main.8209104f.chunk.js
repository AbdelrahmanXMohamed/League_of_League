(this.webpackJsonpleague_of_legends=this.webpackJsonpleague_of_legends||[]).push([[0],{96:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(24),r=a.n(s),i=a(8),l=a(3),o=a(7),j=a(0),m=function(e){var t=e.champ,a=e.index,c=Object(o.f)();return Object(j.jsx)("div",{className:"ChamptionsCard",onClick:function(){c.push("/Champtions/Profile/".concat(t.id))},style:{animationDelay:.5*a+"s"},children:Object(j.jsxs)("figure",{className:"card",children:[Object(j.jsx)("img",{src:"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/".concat(t.id,"_0.jpg"),alt:t.name}),Object(j.jsx)("figcaption",{children:Object(j.jsx)("p",{children:t.name})})]})})},d=a.p+"static/media/Logo.04c6898b.png",b=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"Loading",children:Object(j.jsx)("div",{className:"middle",children:Object(j.jsx)("img",{src:d,alt:"logo"})})})})},u=a(10),h=a.n(u),O=function(){var e=Object(c.useState)((function(){return[]})),t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){h.a.get("http://127.0.0.1:5000/api/currentChampions").then((function(e){var t=e.data,a=[];Object.keys(t.data).map((function(e){return a=[].concat(Object(i.a)(a),[t.data[e]]),null})),n(a)})).catch((function(e){return console.log(e.message)}))}),[]),Object(j.jsx)(j.Fragment,{children:0===a.length?Object(j.jsx)(b,{}):Object(j.jsx)("div",{className:"Champtions",children:a.map((function(e,t){return Object(j.jsx)(m,{champ:e,index:t},t)}))})})},x=a(57),p=a.n(x),g=a(6),v=function(){var e=Object(c.useState)((function(){return!0})),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)((function(){return!0})),r=Object(l.a)(s,2),i=r[0],o=r[1];return Object(j.jsxs)("div",{className:a?"Navbar":"Navbar Toggled",children:[Object(j.jsx)(p.a,{className:"makeItColor Toggle",onClick:function(){return n(!a),void o(!1)}}),Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("img",{src:d,alt:"logo"})}),Object(j.jsxs)("div",{className:i?"start":a?"mobileNav":"mobileNav addAnimation",children:[Object(j.jsx)(g.b,{className:"makeItColor",to:"/",children:"Home"}),Object(j.jsx)(g.b,{className:"makeItColor",to:"/champtions",children:"Champtions"}),Object(j.jsx)(g.b,{className:"makeItColor",to:"/dashboard",children:"Dashboard"})]}),Object(j.jsx)(g.b,{to:"/login",className:"makeItColor right",children:"Login"})]})},f=a(62),N=a.n(f);function w(e){var t=e.version,a=e.user,c=e.platform;return console.log(c),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(g.b,{to:"/summoner/"+a.puuid,children:Object(j.jsxs)("div",{className:"UserCard",children:[Object(j.jsxs)("div",{className:"UserProfileImg",children:[Object(j.jsx)("img",{src:"http://ddragon.leagueoflegends.com/cdn/".concat(t,"/img/profileicon/").concat(a.profileIconId,".png"),alt:"".concat(a.name)}),Object(j.jsx)("figcaption",{className:"UserProfileCaption",children:a.summonerLevel})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:a.name}),Object(j.jsx)("p",{children:c})]})]})})})}var S=a(61),I=a.n(S);function k(e){var t=e.Chamption,a=e.handlePopUp,n=Object(c.useState)([]),s=Object(l.a)(n,2),r=s[0],i=s[1],o=Object(c.useState)(""),m=Object(l.a)(o,2),d=m[0],u=m[1],O=Object(c.useState)(!1),x=Object(l.a)(O,2),p=x[0],g=x[1];return Object(c.useEffect)((function(){return h()({url:"http://127.0.0.1:5000/api/dataOfCertainUser/".concat(t.current.value),method:"get"}).then((function(e){var t=e.data;t.message?g(!0):(i(t.users),u(t.version))})).catch((function(e){return console.log(e)})),function(){return console.log("unmounted")}}),[t]),Object(c.useEffect)((function(){r.length>0?(console.log(r[0].user.puuid),h()({url:"http://127.0.0.1:5000/api/matchesForUser/".concat(r[0].user.puuid),method:"get"}).then((function(e){var t=e.data;console.log(t)})).catch((function(e){return console.log(e)}))):console.log("Loading")}),[r]),console.log(r),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"PopUp",children:[Object(j.jsxs)("div",{className:"Header",children:[Object(j.jsx)("h1",{children:"PopUp"}),Object(j.jsx)(N.a,{onClick:a})]}),0===r.length?Object(j.jsx)(j.Fragment,{children:p?Object(j.jsxs)("center",{children:[" ",Object(j.jsx)("h3",{children:" No Users Found"})]}):Object(j.jsx)(b,{})}):Object(j.jsx)("div",{className:"Card",children:r.map((function(e){return Object(j.jsx)(I.a,{option:{scale:1,cursor:"pointer"},className:"Tilt",children:Object(j.jsx)(w,{version:d,user:e.user,platform:e.platform},e.user.id)})}))})]})})}var y=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(!1),a=Object(l.a)(t,2),n=a[0],s=a[1],r=function(){s(!n)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"Home",children:Object(j.jsxs)("div",{className:"Top",children:[Object(j.jsx)("img",{src:d,alt:"logo"}),Object(j.jsx)("div",{className:"SearchBorder",children:Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),r()},children:Object(j.jsx)("input",{placeholder:"Chamption Name",type:"text",ref:e,className:"Search"})})})]})}),n?Object(j.jsx)(k,{Chamption:e,handlePopUp:r}):null]})},F=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"Error",children:Object(j.jsxs)("div",{className:"ErrorText",children:[Object(j.jsx)("h1",{children:"404"}),Object(j.jsx)("h1",{children:"Page Not Found"})]})})})},C=a(113),P=function(e){var t=Object(o.g)().id,a=Object(c.useState)(null),n=Object(l.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(""),m=Object(l.a)(i,2),d=m[0],b=m[1];return Object(c.useEffect)((function(){h.a.get("http://127.0.0.1:5000/api/certainChamption/".concat(t)).then((function(e){var a=e.data;r(a.data["".concat(t)]),b(a.version)})).catch((function(e){return console.log(e.message)}))}),[t]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"ChampProfile",children:[Object(j.jsxs)("div",{className:"ProHead",children:[Object(j.jsx)("div",{className:"Cover",children:Boolean(s)?Object(j.jsx)("img",{src:"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/".concat(t,"_0.jpg"),alt:t}):Object(j.jsx)(C.a,{animation:"wave",variant:"rect",className:"Skeleton"})}),Object(j.jsx)("div",{className:"Profile",children:Boolean(s)?Object(j.jsx)("img",{src:"http://ddragon.leagueoflegends.com/cdn/".concat(d,"/img/champion/").concat(t,".png"),alt:t}):Object(j.jsx)(C.a,{animation:"wave",variant:"circle",className:"Skeleton"})}),Object(j.jsx)("center",{className:"Name",children:Boolean(s)?Object(j.jsx)("h3",{children:s.name}):Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(C.a,{animation:"wave",variant:"text"})})}),Object(j.jsx)("center",{className:"Title",children:Boolean(s)?Object(j.jsx)("p",{children:s.title}):Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(C.a,{animation:"wave",variant:"text"})})})]}),Object(j.jsx)("div",{className:"ProBody",children:Object(j.jsxs)("div",{className:"Lore",children:[Object(j.jsx)("h2",{children:"Lore"}),Boolean(s)?Object(j.jsx)("p",{className:"lore",children:s.lore}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(C.a,{animation:"wave",variant:"text"}),Object(j.jsx)(C.a,{animation:"wave",variant:"text"}),Object(j.jsx)(C.a,{animation:"wave",variant:"text"})]})]})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"ProBody",children:Object(j.jsxs)("div",{className:"Skills",children:[Object(j.jsxs)("h2",{children:["How to counter ",t||s.name," ?"]}),Boolean(s)?Object(j.jsx)("ul",{className:"lore",children:s.enemytips.map((function(e,t){return Object(j.jsx)("li",{className:"lore",children:e},t)}))}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(C.a,{animation:"wave",variant:"text"}),Object(j.jsx)(C.a,{animation:"wave",variant:"text"}),Object(j.jsx)(C.a,{animation:"wave",variant:"text"})]})]})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"ProBody",children:Object(j.jsxs)("div",{className:"Skills",children:[Object(j.jsxs)("h2",{children:["How to Win with ",t||s.name," ?"]}),Boolean(s)?Object(j.jsx)("ul",{className:"lore",children:s.allytips.map((function(e,t){return Object(j.jsx)("li",{className:"lore",children:e},t)}))}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(C.a,{animation:"wave",variant:"text"}),Object(j.jsx)(C.a,{animation:"wave",variant:"text"}),Object(j.jsx)(C.a,{animation:"wave",variant:"text"})]})]})})]})})};function L(e){var t=e.match,a=e.version,n=Object(c.useState)((function(){return"Loading"})),s=Object(l.a)(n,2),r=s[0],i=s[1];return Object(c.useEffect)((function(){t&&i((function(){return t.win?"Win":"Lose"}))}),[t]),console.log(a),Object(j.jsxs)("div",{className:r,children:[Object(j.jsx)("div",{className:"Highlight",children:Object(j.jsx)("span",{className:"Char",children:"Loading"!==r?r[0]:Object(j.jsx)(C.a,{animation:"wave",variant:"rect",className:"Skelaton-Char"})})}),Object(j.jsxs)("div",{className:"Data",children:[t?Object(j.jsx)("img",{src:"http://ddragon.leagueoflegends.com/cdn/".concat(a,"/img/champion/").concat(t.championName,".png"),className:"Skeleton-Champ-Img",alt:t.championName}):Object(j.jsx)(C.a,{animation:"wave",variant:"rect",className:"Skeleton-Champ-Img"}),Object(j.jsxs)("div",{className:"Details",children:[Object(j.jsxs)("div",{className:"KDA",children:[t?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:t.kills}),Object(j.jsx)("span",{children:"/"}),Object(j.jsx)("p",{children:t.deaths}),Object(j.jsx)("span",{children:"/"}),Object(j.jsx)("p",{children:t.assists})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(C.a,{animation:"wave",variant:"text",className:"Skeleton-KDA"}),Object(j.jsx)("span",{children:"/"}),Object(j.jsx)(C.a,{animation:"wave",variant:"text",className:"Skeleton-KDA"}),Object(j.jsx)("span",{children:"/"}),Object(j.jsx)(C.a,{animation:"wave",variant:"text",className:"Skeleton-KDA"})]}),"                    "]}),t?Object(j.jsxs)("div",{className:"Items",children:[t.item0?Object(j.jsx)("img",{src:"http://ddragon.leagueoflegends.com/cdn/".concat(a,"/img/item/").concat(t.item0,".png"),className:"Skeleton-Item-Img",alt:t.item0}):Object(j.jsx)(C.a,{animation:"wave",variant:"rect",className:"Skeleton-Item-Img"}),t.item1?Object(j.jsx)("img",{src:"http://ddragon.leagueoflegends.com/cdn/".concat(a,"/img/item/").concat(t.item1,".png"),className:"Skeleton-Item-Img",alt:t.item1}):Object(j.jsx)(C.a,{animation:"wave",variant:"rect",className:"Skeleton-Item-Img"}),t.item2?Object(j.jsx)("img",{src:"http://ddragon.leagueoflegends.com/cdn/".concat(a,"/img/item/").concat(t.item2,".png"),className:"Skeleton-Item-Img",alt:t.item2}):Object(j.jsx)(C.a,{animation:"wave",variant:"rect",className:"Skeleton-Item-Img"}),t.item3?Object(j.jsx)("img",{src:"http://ddragon.leagueoflegends.com/cdn/".concat(a,"/img/item/").concat(t.item3,".png"),className:"Skeleton-Item-Img",alt:t.item3}):Object(j.jsx)(C.a,{animation:"wave",variant:"rect",className:"Skeleton-Item-Img"}),t.item4?Object(j.jsx)("img",{src:"http://ddragon.leagueoflegends.com/cdn/".concat(a,"/img/item/").concat(t.item4,".png"),className:"Skeleton-Item-Img",alt:t.item4}):Object(j.jsx)(C.a,{animation:"wave",variant:"rect",className:"Skeleton-Item-Img"}),t.item5?Object(j.jsx)("img",{src:"http://ddragon.leagueoflegends.com/cdn/".concat(a,"/img/item/").concat(t.item5,".png"),className:"Skeleton-Item-Img",alt:t.item5}):Object(j.jsx)(C.a,{animation:"wave",variant:"rect",className:"Skeleton-Item-Img"}),t.item6?Object(j.jsx)("img",{src:"http://ddragon.leagueoflegends.com/cdn/".concat(a,"/img/item/").concat(t.item6,".png"),className:"Skeleton-Item-Img",alt:t.item6}):Object(j.jsx)(C.a,{animation:"wave",variant:"rect",className:"Skeleton-Item-Img"})]}):Object(j.jsxs)("div",{className:"Items",children:[Object(j.jsx)(C.a,{animation:"wave",variant:"rect",className:"Skeleton-Item-Img"}),Object(j.jsx)(C.a,{animation:"wave",variant:"rect",className:"Skeleton-Item-Img"}),Object(j.jsx)(C.a,{animation:"wave",variant:"rect",className:"Skeleton-Item-Img"}),Object(j.jsx)(C.a,{animation:"wave",variant:"rect",className:"Skeleton-Item-Img"}),Object(j.jsx)(C.a,{animation:"wave",variant:"rect",className:"Skeleton-Item-Img"}),Object(j.jsx)(C.a,{animation:"wave",variant:"rect",className:"Skeleton-Item-Img"}),Object(j.jsx)(C.a,{animation:"wave",variant:"rect",className:"Skeleton-Item-Img"})]}),Object(j.jsxs)("center",{children:[t?null:Object(j.jsx)(C.a,{animation:"wave",variant:"text",className:"Skeleton-Champ-Name"}),t?t.pentaKills?Object(j.jsx)("p",{className:"pentaKill",children:"Penta Kill"}):t.quadraKills?Object(j.jsx)("p",{className:"quadraKill",children:"Quadra Kill"}):t.tripleKills?Object(j.jsx)("p",{className:"tripleKill",children:"Triple Kill"}):t.doubleKills?Object(j.jsx)("p",{className:"doubleKill",children:" Double Kill"}):t.firstBloodKill?Object(j.jsx)("p",{className:"firstBlood",children:"First Blood"}):null:null]})]})]})]})}var q=function(e){var t=Object(o.g)().puuid,a=Object(c.useState)([null,null,null,null,null]),n=Object(l.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(""),m=Object(l.a)(i,2),d=m[0],b=m[1],u=Object(c.useState)(null),O=Object(l.a)(u,2),x=O[0],p=O[1];return Object(c.useEffect)((function(){h()({url:"http://127.0.0.1:5000/api/matchesForUser/".concat(t),method:"get"}).then((function(e){var t=e.data;b((function(){return t.version})),p((function(){return t.user_info})),r((function(){return t.match}))})).catch((function(e){return console.log(e)}))}),[t]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"SummonerProfile",children:[Object(j.jsxs)("div",{className:"ProHead",children:[Object(j.jsx)("div",{className:"Profile",children:Boolean(x)?Object(j.jsx)("img",{src:"http://ddragon.leagueoflegends.com/cdn/".concat(d,"/img/profileicon/").concat(x.profileIconId,".png"),alt:"".concat(x.name)}):Object(j.jsx)(C.a,{animation:"wave",variant:"circle",className:"Skeleton"})}),Object(j.jsx)("center",{className:"Name",children:Boolean(x)?Object(j.jsx)("h3",{children:x.name}):Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(C.a,{animation:"wave",variant:"text"})})})]}),Object(j.jsx)("div",{className:"WinLose",children:s.map((function(e,t){return Object(j.jsx)(L,{match:e,version:d},t)}))}),Object(j.jsx)("br",{})]})})},B=a(20),T=a(4),K=a.n(T),D=a(11),E=a(36),R=a(23),U=function(){var e,t,a,n,s=Object(E.a)(),r=s.register,i=s.handleSubmit,o=s.formState.errors,m=Object(c.useState)((function(){return!1})),d=Object(l.a)(m,2),b=d[0],u=d[1],O=function(){var e=Object(D.a)(K.a.mark((function e(t){var a;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()({url:"http://127.0.0.1:5000/auth/register/",method:"post",data:t});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("form",{onSubmit:i((function(e){e.password===e.repassword?(delete e.repassword,R.b.promise(O(e),{loading:"Loading",success:function(e){return e.data.message},error:function(e){return e.response.data.email&&e.response.data.email.map((function(e){return e}))||e.response.data.password&&e.response.data.password.map((function(e){return e}))||e.response.data.username&&e.response.data.username.map((function(e){return e}))}}),u((function(){return!1}))):u((function(){return!0}))})),children:[Object(j.jsx)("input",Object(B.a)({type:"text",placeholder:"Username"},r("username",{required:!0}))),o.username&&Object(j.jsx)("span",{children:"This field is required"}),Object(j.jsx)("input",Object(B.a)({type:"email",placeholder:"E-mail"},r("email",{required:!0}))),o.email&&Object(j.jsx)("span",{children:"This field is required"}),Object(j.jsx)("input",Object(B.a)({type:"password",placeholder:"Password"},r("password",{required:!0,minLength:6}))),"required"===(null===(e=o.password)||void 0===e?void 0:e.type)&&Object(j.jsx)("span",{children:"This field is required"}),"minLength"===(null===(t=o.password)||void 0===t?void 0:t.type)&&Object(j.jsx)("span",{children:"This required minimum Length 6 or greater"}),Object(j.jsx)("input",Object(B.a)({type:"password",placeholder:"Confirm Password"},r("repassword",{required:!0,minLength:6}))),"required"===(null===(a=o.repassword)||void 0===a?void 0:a.type)&&Object(j.jsx)("span",{children:"This field is required"}),"minLength"===(null===(n=o.repassword)||void 0===n?void 0:n.type)&&Object(j.jsx)("span",{children:"This required minimum Length 6 or greater"}),b&&Object(j.jsx)("span",{children:"Confirm password doesn't match password"}),Object(j.jsx)("input",{type:"submit",value:"Register"}),Object(j.jsxs)("p",{children:["Already a memeber ",Object(j.jsx)(g.b,{to:"/login",style:{fontSize:"inherit"},children:"Login ?"})]})]})};function _(){var e,t,a=Object(E.a)(),c=a.register,n=a.handleSubmit,s=a.formState.errors,r=function(){var e=Object(D.a)(K.a.mark((function e(t){var a;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()({url:"http://127.0.0.1:5000/auth/login/",method:"post",data:t}).then((function(e){var t=e.data;console.log(t)}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{onSubmit:n((function(e){R.b.promise(r(e),{loading:"Loading",success:function(e){return"Welcome,"+e.data.username},error:function(e){return e.response.data.message}})})),children:[Object(j.jsx)("input",Object(B.a)({type:"email",placeholder:"email"},c("email",{required:!0}))),s.email&&Object(j.jsx)("span",{children:"This field is required"}),Object(j.jsx)("input",Object(B.a)({type:"password",placeholder:"Password"},c("password",{required:!0,minLength:6}))),"required"===(null===(e=s.password)||void 0===e?void 0:e.type)&&Object(j.jsx)("span",{children:"This field is required"}),"minLength"===(null===(t=s.password)||void 0===t?void 0:t.type)&&Object(j.jsx)("span",{children:"This required minimum Length 6 or greater"}),Object(j.jsxs)("div",{className:"last",children:[Object(j.jsxs)("div",{className:"remember_me",children:[Object(j.jsx)("input",Object(B.a)({type:"checkbox",id:"Remember_me"},c("remember_me"))),Object(j.jsx)("label",{children:" Remember me"})]}),Object(j.jsx)(g.b,{className:"right",to:"/forget_password",children:"Forget Password ?"})]}),Object(j.jsx)("input",{type:"submit",value:"Login"}),Object(j.jsxs)("p",{children:["Not a memeber ",Object(j.jsx)(g.b,{to:"/register",style:{fontSize:"inherit"},children:"Register Now ?"})]})]})})}function A(e){var t=Object(o.f)();t.location.pathname.replace("/","");var a=Object(c.useState)((function(){return t.location.pathname.replace("/","")})),n=Object(l.a)(a,2),s=n[0],r=n[1];return Object(c.useEffect)((function(){r((function(){return t.location.pathname.replace("/","")}))}),[t.location.pathname]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(R.a,{position:"top-center"}),Object(j.jsx)("div",{className:"Forms",children:Object(j.jsxs)("div",{className:"Form",children:[Object(j.jsxs)("div",{className:"register"===s?"Sign-register":"Sign-login",children:[Object(j.jsx)("div",{className:"login",children:Object(j.jsx)(g.b,{to:"/login",children:"Login"})}),Object(j.jsx)("div",{className:"register",children:Object(j.jsx)(g.b,{to:"/register",children:"Register"})})]}),"register"===t.location.pathname.replace("/","")?Object(j.jsx)(U,{}):Object(j.jsx)(_,{})]})})]})}var H=a(114),W=a(115),z=Object(H.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(5),textAlign:"center",color:e.palette.text.secondary}}})),J=function(){var e=z();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("center",{children:Object(j.jsx)("h1",{children:"Dashboard Page"})}),Object(j.jsx)("div",{className:e.root,children:Object(j.jsxs)(W.a,{container:!0,spacing:3,children:[Object(j.jsx)(W.a,{item:!0,md:3,sm:3,xs:6,children:Object(j.jsx)("img",{src:"https://dummyimage.com/200x200/000/fff",style:{width:"100%",height:"100%"},alt:"logo"})}),Object(j.jsx)(W.a,{item:!0,md:9,sm:3,xs:6,children:Object(j.jsx)("img",{src:"https://dummyimage.com/200x200/000/fff",style:{width:"25%",height:"25%"},alt:"logo"})})]})})]})},G=function(){var e=Object(c.useRef)(null);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"Forms",children:Object(j.jsxs)("form",{className:"Form ForgetPassword",onSubmit:function(t){t.preventDefault(),function(e){console.log("email : "+e)}(e.current.value)},children:[Object(j.jsx)("div",{className:"title",children:Object(j.jsx)("h3",{children:"Forget Password"})}),Object(j.jsx)("div",{className:"handleInput",children:Object(j.jsx)("input",{type:"text",name:"email",ref:e,placeholder:"Email"})}),Object(j.jsx)("input",{type:"submit",className:"Submit",value:"Recover Password"}),Object(j.jsxs)("p",{children:["Not a memeber ",Object(j.jsx)(g.b,{to:"/register",style:{fontSize:"inherit"},children:"Register Now ?"})]})]})})})},M=(a(96),function(){var e=Object(c.useRef)(null);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"Forms",children:Object(j.jsxs)("form",{className:"Form",onSubmit:function(t){t.preventDefault(),function(e){console.log("password : "+e)}(e.current.value)},children:[Object(j.jsx)("div",{className:"title",children:Object(j.jsx)("h3",{children:"Reset Password"})}),Object(j.jsx)("div",{className:"handleInput",children:Object(j.jsx)("div",{className:"handleLogo",children:Object(j.jsx)("input",{type:"password",name:"password",ref:e,placeholder:"Password"})})}),Object(j.jsx)("div",{className:"handleInput",children:Object(j.jsx)("div",{className:"handleLogo",children:Object(j.jsx)("input",{type:"password",name:"password",ref:e,placeholder:"Confirm Password"})})}),Object(j.jsx)("div",{className:"handleSubmit",children:Object(j.jsx)("input",{type:"submit",className:"Submit",value:"Reset Password"})})]})})})});function Q(){var e=Object(o.g)().token,t=Object(c.useState)((function(){return""})),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(c.useEffect)((function(){h()({url:"http://127.0.0.1:5000/auth/email-verify/?token=".concat(e),method:"get"}).then((function(e){var t=e.data;s((function(){return t.message})),console.log(t)}))}),[]),Object(j.jsx)("div",{className:"ActivateAccount",children:Object(j.jsx)("div",{className:"message",children:Object(j.jsx)("p",{children:n})})})}var V=function(){return Object(j.jsxs)(g.a,{children:[Object(j.jsx)(v,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",children:Object(j.jsx)(y,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/champtions",children:Object(j.jsx)(O,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/summoner/:puuid",children:Object(j.jsx)(q,{})}),Object(j.jsx)(o.a,{path:"/champtions/profile/:id",children:Object(j.jsx)(P,{})}),Object(j.jsx)(o.a,{path:"/login",children:Object(j.jsx)(A,{})}),Object(j.jsx)(o.a,{path:"/register",children:Object(j.jsx)(A,{})}),Object(j.jsx)(o.a,{path:"/activate/:token",children:Object(j.jsx)(Q,{})}),Object(j.jsx)(o.a,{path:"/forget_password",children:Object(j.jsx)(G,{})}),Object(j.jsx)(o.a,{path:"/dashboard",children:Object(j.jsx)(J,{})}),Object(j.jsx)(o.a,{path:"/resetpassword",children:Object(j.jsx)(M,{})}),Object(j.jsx)(o.a,{path:"*",children:Object(j.jsx)(F,{})})]})]})},X=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,117)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(V,{})}),document.getElementById("root")),X()}},[[97,1,2]]]);
//# sourceMappingURL=main.8209104f.chunk.js.map