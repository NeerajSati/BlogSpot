(this.webpackJsonpblogger=this.webpackJsonpblogger||[]).push([[0],{28:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},52:function(e,t,s){},53:function(e,t,s){},54:function(e,t,s){},55:function(e,t,s){},56:function(e,t,s){},57:function(e,t,s){},58:function(e,t,s){},59:function(e,t,s){},60:function(e,t,s){},61:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(22),r=s.n(n),i=s(3),l=s(5),o=(s(28),s(13)),j=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"UPDATE_START":return Object(o.a)(Object(o.a)({},e),{},{isFetching:!0});case"UPDATE_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"UPDATE_FAILURE":return{user:e.user,isFetching:!1,error:!0};case"LOGOUT":return{user:null,isFetching:!1,error:!1};default:return e}},u=s(0),b={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},d=Object(a.createContext)(b),p=function(e){var t=e.children,s=Object(a.useReducer)(j,b),c=Object(i.a)(s,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){localStorage.setItem("user",JSON.stringify(n.user))}),[n.user]),Object(u.jsx)(d.Provider,{value:{user:n.user,isFetching:n.isFetching,error:n.error,dispatch:r},children:t})};var m=function(){var e=Object(a.useContext)(d),t=e.user,s=e.dispatch,c=function(){s({type:"LOGOUT"})},n=Object(a.useState)(!1),r=Object(i.a)(n,2),o=r[0],j=r[1],b=Object(a.useState)(!1),p=Object(i.a)(b,2),m=p[0],h=p[1],O=Object(a.useState)(!1),x=Object(i.a)(O,2),f=x[0],g=x[1],v=function(e){window.innerWidth<768?h(!1):h(!0)};return Object(a.useEffect)((function(){return window.addEventListener("resize",v),function(){window.removeEventListener("resize",(function(){}))}}),[]),window.addEventListener("scroll",(function(){window.scrollY>=100?g(!0):g(!1)})),Object(u.jsxs)("div",{className:"Nav",children:[Object(u.jsxs)("div",{className:"navLeft",children:[Object(u.jsx)(l.b,{to:".",className:"link",children:Object(u.jsx)("i",{className:f?"logo logoShift fas fa-book-reader":"logo fas fa-book-reader"})}),Object(u.jsxs)("p",{className:f?"logoText logoTextHide":"logoText",children:[" ","Node BlogSpot"]})]}),Object(u.jsx)("div",{className:"navCenter",style:{display:window.innerWidth>768||o||m?"flex":"none"},children:Object(u.jsxs)("ul",{className:"navList",children:[Object(u.jsx)("li",{className:"navListItem",onClick:function(){j(!o)},children:Object(u.jsx)(l.b,{to:".",className:"link",children:"Home"})}),Object(u.jsx)("li",{className:"navListItem",onClick:function(){j(!o)},children:Object(u.jsx)(l.b,{to:"about",className:"link",children:"About"})}),Object(u.jsx)("li",{className:"navListItem",onClick:function(){j(!o)},children:Object(u.jsx)(l.b,{to:t?"write":"register",className:"link",children:"Create"})}),Object(u.jsx)("li",{className:"navListItem",onClick:function(){j(!o)},children:Object(u.jsx)(l.b,{to:t?"settings":"register",className:"link",children:"Settings"})}),t?Object(u.jsx)("li",{className:"navListItem",onClick:c,children:Object(u.jsx)(l.b,{to:"login",className:"link",children:"Logout"})}):""]})}),Object(u.jsxs)("div",{className:"navRight",children:[t?Object(u.jsx)("img",{className:"userImg",src:"https://nodeblogspot.herokuapp.com/images/"+t.profilePic,onError:function(e){e.target.onerror=null,e.target.src="https://i.pinimg.com/600x315/4b/74/cf/4b74cfb5f9ba362728b5ebfa6920b0f5.jpg"},alt:"user_Image"}):Object(u.jsxs)("ul",{className:"navList",children:[Object(u.jsx)("li",{className:"navListItem",children:Object(u.jsx)(l.b,{to:"login",className:"link",children:"Login"})}),Object(u.jsx)("li",{className:"navListItem",children:Object(u.jsx)(l.b,{to:"register",className:"link",children:"Register"})})]}),Object(u.jsx)("i",{className:" searchIcon fas fa-search"}),Object(u.jsx)("div",{onClick:function(){j(!o)},children:Object(u.jsx)("i",{className:o?" burger hamIcon hamIconRotate fas fa-bars":"burger hamIcon fas fa-bars"})})]})]})},h=s(2),O=s(4),x=s.n(O),f=s(6),g=(s(31),s.p+"static/media/bg.b441056d.jpg");var v=function(){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("img",{className:"headerImg",src:g,alt:"Background"}),Object(u.jsxs)("div",{className:"headerTitle",children:[Object(u.jsx)("span",{className:"headerTitleBg",children:"Blogspot"}),Object(u.jsx)("span",{className:"headerTitleSm",children:"Write a blog!"})]})]})};s(32);var N=function(e){var t=e.post,s=Math.floor(99*Math.random()+10);return Object(u.jsxs)("div",{className:"post",children:[t.photo&&Object(u.jsx)("img",{className:"postImg",src:"https://nodeblogspot.herokuapp.com/images/"+t.photo,onError:function(e){e.target.onerror=null,e.target.src="https://picsum.photos/2500/16".concat(s)},alt:"PostImage"}),Object(u.jsxs)("div",{className:"postInfo",children:[Object(u.jsx)("div",{className:"postCats",children:t.categories.map((function(e){return Object(u.jsx)(l.b,{to:"/?cat=".concat(e),className:"link",children:Object(u.jsx)("span",{className:"postCat",children:e})})}))}),Object(u.jsx)(l.b,{to:"/post/".concat(t._id),className:"link",children:Object(u.jsx)("span",{className:"postTitle",children:t.title})}),Object(u.jsx)("br",{}),Object(u.jsx)(l.b,{className:"link",to:"/?user=".concat(t.username),children:Object(u.jsxs)("span",{className:"postDate",children:["Author: ",t.username," | ",new Date(t.createdAt).toDateString()]})})]}),Object(u.jsx)("p",{className:"postDesc",children:t.desc})]})};s(33);var w=function(e){var t=e.posts;return Object(u.jsx)("div",{className:"posts",children:t.map((function(e){return Object(u.jsx)(N,{post:e})}))})},I=s(23),S=s.n(I).a.create({baseURL:"https://nodeblogspot.herokuapp.com/api/"});s(52);var y=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(f.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("/categories");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsxs)("div",{class:"sidebar",children:[Object(u.jsxs)("div",{className:"sidebarItem",children:[Object(u.jsx)("span",{className:"sidebarTitle",children:"ABOUT THIS SITE"}),Object(u.jsx)("i",{class:"fas fa-book-reader"}),Object(u.jsx)("p",{children:"This is a blog website where anyone interest can upload a story/blog with a picture. User can Write blog, Edit blog, register, login, as well as edit his account."})]}),Object(u.jsxs)("div",{className:"sidebarItem",children:[Object(u.jsx)("span",{className:"sidebarTitle",children:"Categories"}),Object(u.jsx)("ul",{className:"sidebarList",children:s.map((function(e){return Object(u.jsx)(l.b,{className:"link",to:"/?cat=".concat(e.name),children:Object(u.jsx)("li",{className:"sidebarListItem",children:e.name})})}))})]}),Object(u.jsxs)("div",{className:"sidebarItem",children:[Object(u.jsx)("span",{className:"sidebarTitle ",children:"Connect with Me"}),Object(u.jsxs)("div",{className:"sidebarSocial",children:[Object(u.jsx)("a",{className:"sidebarIconAnc",href:"https://www.linkedin.com/in/neeraj-sati/",children:Object(u.jsx)("i",{className:"aboutIcon fab fa-linkedin"})}),Object(u.jsxs)("a",{className:"sidebarIconAnc",href:"https://www.instagram.com/neerajsati17",children:[" ",Object(u.jsx)("i",{className:"aboutIcon fab fa-instagram-square"})]}),Object(u.jsx)("a",{className:"sidebarIconAnc",href:"https://github.com/NeerajSati",children:Object(u.jsx)("i",{className:"aboutIcon fab fa-github-square"})})]})]})]})};s(53);var k=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1],n=Object(h.e)().search;return Object(a.useEffect)((function(){var e=function(){var e=Object(f.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("/posts"+n);case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{}),Object(u.jsxs)("div",{className:"home",children:[Object(u.jsx)(w,{posts:s}),Object(u.jsx)(y,{})]})]})};s(54);function L(){var e=Object(a.useRef)(),t=Object(a.useRef)(),s=Object(a.useContext)(d),c=s.dispatch,n=s.isFetching,r=function(){var s=Object(f.a)(x.a.mark((function s(a){var n;return x.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a.preventDefault(),c({type:"LOGIN_START"}),s.prev=2,s.next=5,S.post("/auth/login",{email:e.current.value,password:t.current.value});case 5:n=s.sent,c({type:"LOGIN_SUCCESS",payload:n.data}),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(2),c({type:"LOGIN_FAILURE"});case 12:case"end":return s.stop()}}),s,null,[[2,9]])})));return function(e){return s.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"login",children:[Object(u.jsxs)("form",{className:"loginForm",onSubmit:r,children:[Object(u.jsx)("span",{className:"loginTitle",children:"Login"}),Object(u.jsx)("label",{className:"loginLabel",children:"Email"}),Object(u.jsx)("input",{className:"loginInput",ref:e,type:"email",placeholder:"Enter your Email..."}),Object(u.jsx)("label",{className:"loginLabel",children:"Password"}),Object(u.jsx)("input",{className:"loginInput",ref:t,type:"password",placeholder:"Enter your Password..."}),Object(u.jsx)("button",{className:"formSubmit",type:"submit",disabled:n,children:"Login"})]}),Object(u.jsx)("span",{className:"loginLabel loginText",children:"Don't have an account? Register here"}),Object(u.jsx)("button",{className:"formSubmit formReg",children:Object(u.jsx)(l.b,{to:"/register",className:"link",children:"Register"})})]})}s(55);function E(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(i.a)(n,2),l=r[0],o=r[1],j=Object(a.useState)(null),b=Object(i.a)(j,2),p=b[0],m=b[1],h=Object(a.useState)([]),O=Object(i.a)(h,2),g=O[0],v=O[1],N=Object(a.useContext)(d).user,w=function(){var e=Object(f.a)(x.a.mark((function e(t){var a,c,n,r,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=g.split(","),c={username:N.username,title:s,desc:l,categories:a},a.map((function(e){var t={name:e};try{S.post("/categories/",t)}catch(s){}})),!p){e.next=27;break}return n=new FormData,console.log(FormData),r=Date.now()+p.name,n.append("name",r),n.append("file",p),c.photo=r,e.prev=11,e.next=14,S.post("/upload",n);case 14:e.next=18;break;case 16:e.prev=16,e.t0=e.catch(11);case 18:return e.prev=18,e.next=21,S.post("/posts",c);case 21:i=e.sent,window.location.replace("/post/"+i.data._id),e.next=27;break;case 25:e.prev=25,e.t1=e.catch(18);case 27:case"end":return e.stop()}}),e,null,[[11,16],[18,25]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"write",children:[p&&Object(u.jsx)("img",{className:"writeImage",src:URL.createObjectURL(p),alt:"ContentImage"}),Object(u.jsxs)("form",{className:"writeForm",onSubmit:w,children:[Object(u.jsxs)("div",{className:"writeFormGroup",children:[Object(u.jsx)("label",{htmlFor:"fileInput",children:Object(u.jsx)("i",{className:"writeIcon fa fas fa-plus"})}),Object(u.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return m(e.target.files[0])}}),Object(u.jsx)("input",{type:"text",placeholder:"Title",className:"writeInput",autoFocus:!0,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("button",{className:"writeSubmit",type:"submit",children:"Publish"})]}),Object(u.jsx)("div",{className:"writeFormGroup",children:Object(u.jsx)("input",{type:"text",placeholder:"Categories (Separated by ,)",className:"writeInput writeCat",onChange:function(e){return v(e.target.value)}})}),Object(u.jsx)("div",{className:"writeFormGroup",children:Object(u.jsx)("textarea",{placeholder:"Enter the blog...",type:"text",className:"writeInput writeText",onChange:function(e){return o(e.target.value)}})})]})]})}s(56);function T(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(i.a)(n,2),o=r[0],j=r[1],b=Object(a.useState)(""),d=Object(i.a)(b,2),p=d[0],m=d[1],h=Object(a.useState)(!1),O=Object(i.a)(h,2),g=O[0],v=O[1],N=Object(a.useState)(!1),w=Object(i.a)(N,2),I=w[0],y=w[1],k=function(){var e=Object(f.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),y(!1),v(!1),e.prev=3,e.next=6,S.post("/auth/register",{username:s,email:o,password:p});case 6:a=e.sent,console.log(a.data),a.data&&window.location.replace("/login"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),e.t0.toString().includes("500")&&y(!0),e.t0.toString().includes("501")&&v(!0);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"register",children:[Object(u.jsxs)("form",{className:"registerForm",onSubmit:k,children:[Object(u.jsx)("span",{className:"registerTitle",children:"Register"}),Object(u.jsx)("label",{className:"registerLabel",children:"Username"}),Object(u.jsx)("input",{className:"registerInput",type:"text",placeholder:"Enter your Username...",onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("label",{className:"registerLabel",children:"Email"}),Object(u.jsx)("input",{className:"registerInput",type:"email",placeholder:"Enter your Email...",onChange:function(e){return j(e.target.value)}}),Object(u.jsx)("label",{className:"registerLabel",children:"Password"}),Object(u.jsx)("input",{className:"registerInput",type:"password",placeholder:"Enter your Password...",onChange:function(e){return m(e.target.value)}}),Object(u.jsx)("button",{className:"formSubmit",children:"Register"})]}),Object(u.jsx)("span",{className:"registerLabel registerText",children:"Already have an account? Login here"}),Object(u.jsx)("button",{className:"formSubmit formReg",children:Object(u.jsx)(l.b,{to:"../../login",className:"link",children:"Login"})}),g&&Object(u.jsx)("span",{className:"errorLabel",children:"Email Already Exists!"}),I&&Object(u.jsx)("span",{className:"errorLabel",children:"UserName Already Exists!"})]})}s(57);function C(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(!1),r=Object(i.a)(n,2),l=r[0],o=r[1],j=Object(a.useContext)(d),b=j.user,p=j.dispatch,m=j.isFetching,h=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.delete("/users/".concat(b._id),{data:{userId:b._id}});case 3:p({type:"LOGOUT"}),window.location.replace("/"),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(f.a)(x.a.mark((function e(t){var a,c,n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),p({type:"UPDATE_START"}),a={userId:b._id},!s){e.next=29;break}return c=new FormData,console.log(FormData),n=Date.now()+s.name,c.append("name",n),c.append("file",s),a.profilePic=n,e.prev=10,e.next=13,S.post("/upload",c);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(10),p({type:"UPDATE_FAILURE"});case 18:return e.prev=18,e.next=21,S.put("/users/"+b._id,a);case 21:r=e.sent,o(!0),p({type:"UPDATE_SUCCESS",payload:r.data}),e.next=29;break;case 26:e.prev=26,e.t1=e.catch(18),p({type:"UPDATE_FAILURE"});case 29:case"end":return e.stop()}}),e,null,[[10,15],[18,26]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"setting",children:[Object(u.jsxs)("div",{className:"settingWrapper",children:[Object(u.jsxs)("div",{className:"settingTitle",children:[Object(u.jsx)("span",{className:"settingUpdateTitle",children:"Update Profile Picture"}),Object(u.jsx)("span",{className:"settingDeleteTitle",onClick:h,children:"Delete Account"})]}),Object(u.jsxs)("form",{className:"settingForm",onSubmit:O,children:[Object(u.jsx)("label",{children:"Profile Picture"}),Object(u.jsxs)("div",{className:"settingPP",children:[Object(u.jsx)("img",{src:s?URL.createObjectURL(s):"https://nodeblogspot.herokuapp.com/images/"+b.profilePic,onError:function(e){e.target.onerror=null,e.target.src="https://i.pinimg.com/600x315/4b/74/cf/4b74cfb5f9ba362728b5ebfa6920b0f5.jpg"},alt:"ProfileImage"}),Object(u.jsx)("label",{htmlFor:"fileInput",children:Object(u.jsx)("i",{className:" settingPPIcon fa far fa-user-circle"})}),Object(u.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return c(e.target.files[0])}})]}),Object(u.jsx)("button",{className:"settingSubmit",type:"submit",disabled:m,children:"Submit"}),l&&Object(u.jsx)("span",{className:"settingSpan",children:"Profile Pic Updated Successfully!"})]})]}),Object(u.jsx)(y,{})]})}s(58),s(59);function P(){var e=Object(a.useContext)(d).user,t=Object(h.g)().postid,s=Object(a.useState)({}),c=Object(i.a)(s,2),n=c[0],r=c[1],o=Object(a.useState)(""),j=Object(i.a)(o,2),b=j[0],p=j[1],m=Object(a.useState)(""),O=Object(i.a)(m,2),g=O[0],v=O[1],N=Object(a.useState)(!1),w=Object(i.a)(N,2),I=w[0],y=w[1];Object(a.useEffect)((function(){var e=function(){var e=Object(f.a)(x.a.mark((function e(){var s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("/posts/"+t);case 2:s=e.sent,r(s.data),p(s.data.title),v(s.data.desc);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var k=function(){var t=Object(f.a)(x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.delete("/posts/".concat(n._id),{data:{username:e.username}});case 3:window.location.replace("/"),t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}(),L=function(){var t=Object(f.a)(x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.put("/posts/".concat(n._id),{username:e.username,title:b,desc:g});case 3:y(!1),t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"singlepost",children:Object(u.jsxs)("div",{className:"singlePostWrapper",children:[n.photo&&Object(u.jsx)("img",{src:"https://nodeblogspot.herokuapp.com/images/"+n.photo,onError:function(e){e.target.onerror=null,e.target.src="https://picsum.photos/2500/1667"},alt:"PostImage",className:"singlePostImage"}),I?Object(u.jsx)("input",{type:"text",autoFocus:!0,className:"singlePostTitleInput",value:b,onChange:function(e){return p(e.target.value)}}):Object(u.jsxs)("h1",{className:"singlePostTitle",children:[b,n.username===(null===e||void 0===e?void 0:e.username)&&Object(u.jsxs)("div",{className:"singlePostEdit",children:[Object(u.jsx)("i",{className:"singlePostIcon fa fa-solid fa-pen-nib",onClick:function(){return y(!0)}}),Object(u.jsx)("i",{class:"singlePostIcon fa fa-solid fa-trash",onClick:k})]})]}),Object(u.jsxs)("div",{className:"singlePostInfo",children:[Object(u.jsxs)("span",{className:"singlePostAuthor",children:["Author: ",Object(u.jsx)(l.b,{className:"link",to:"/?user=".concat(n.username),children:Object(u.jsx)("b",{children:n.username})})]}),Object(u.jsx)("span",{className:"singlePostDate",children:new Date(n.createdAt).toDateString()})]}),I?Object(u.jsx)("textarea",{className:"singlePostDescInput",value:g,onChange:function(e){return v(e.target.value)}}):Object(u.jsx)("p",{className:"singlePostDesc",children:g}),I&&Object(u.jsx)("button",{className:"singlePostButton",onClick:L,children:"Update"})]})})}function U(){return Object(u.jsxs)("div",{className:"single",children:[Object(u.jsx)(P,{}),Object(u.jsx)(y,{})]})}s(60);var A=s.p+"static/media/Aboutme.c0b08f7b.jpg";function F(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(f.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("/categories");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsxs)("div",{className:"about",children:[Object(u.jsxs)("div",{className:"aboutItem",children:[Object(u.jsx)("span",{className:"aboutTitle",children:"ABOUT ME"}),Object(u.jsx)("img",{src:A,alt:"UserImage"}),Object(u.jsx)("p",{children:"Hi!, I am Neeraj Sati. I am currently In my third year in GGSIPU, Delhi. I have created this blog website where anyone interested can upload a story/blog with a picture."})]}),Object(u.jsxs)("div",{className:"aboutItem",children:[Object(u.jsx)("span",{className:"aboutTitle",children:"Languages I know"}),Object(u.jsx)("ul",{className:"aboutList",children:s.map((function(e){return Object(u.jsx)(l.b,{className:"link",to:"/?cat=".concat(e.name),children:Object(u.jsx)("li",{className:"sidebarListItem",children:e.name})})}))})]}),Object(u.jsxs)("div",{className:"aboutItem",children:[Object(u.jsx)("span",{className:"aboutTitle ",children:"Connect with Me"}),Object(u.jsxs)("div",{className:"aboutSocial",children:[Object(u.jsx)("a",{className:"aboutIconAnc",href:"https://www.linkedin.com/in/neeraj-sati/",children:Object(u.jsx)("i",{className:"aboutIcon fab fa-linkedin"})}),Object(u.jsxs)("a",{className:"aboutIconAnc",href:"https://www.instagram.com/neerajsati17",children:[" ",Object(u.jsx)("i",{className:"aboutIcon fab fa-instagram-square"})]}),Object(u.jsx)("a",{className:"aboutIconAnc",href:"https://github.com/NeerajSati",children:Object(u.jsx)("i",{className:"aboutIcon fab fa-github-square"})})]})]})]})}var D=function(){var e=Object(a.useContext)(d).user;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(m,{}),Object(u.jsxs)(h.c,{children:[Object(u.jsx)(h.a,{exact:!0,path:"/",element:Object(u.jsx)(k,{})}),Object(u.jsx)(h.a,{path:"/register",element:e?Object(u.jsx)(k,{}):Object(u.jsx)(T,{})}),Object(u.jsx)(h.a,{path:"/login",element:e?Object(u.jsx)(k,{}):Object(u.jsx)(L,{})}),Object(u.jsx)(h.a,{path:"/write",element:e?Object(u.jsx)(E,{}):Object(u.jsx)(k,{})}),Object(u.jsx)(h.a,{path:"/settings",element:e?Object(u.jsx)(C,{}):Object(u.jsx)(k,{})}),Object(u.jsx)(h.a,{path:"/post/:postid",element:Object(u.jsx)(U,{})}),Object(u.jsx)(h.a,{path:"/about",element:Object(u.jsx)(F,{})})]})]})})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(p,{children:Object(u.jsx)(D,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.ced5ba43.chunk.js.map