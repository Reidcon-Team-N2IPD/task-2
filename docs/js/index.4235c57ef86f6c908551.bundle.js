(()=>{"use strict";var e,t={203:(e,t,n)=>{n.d(t,{l:()=>m});var r=n(669),a=n.n(r);const l=new Proxy({isLoggedIn:!1},{set:(e,t,n)=>(e[t]=n,!0===n?(localStorage.setItem("isLoggedIn",!0),o.currentPath="/"):!1===n&&(localStorage.setItem("isLoggedIn",!1),o.currentPath="/auth"),!0)}),s=a().create({baseURL:"https://3463d6f8-081d-458b-8a57-59f1e5d0781a.mock.pstmn.io",timeout:3e3,headers:{"Content-Type":"application/json"}}),o=new Proxy({routes:[{func:class{constructor(){return this.element=document.createElement("main"),this.element.className="home-page",this.element.insertAdjacentElement("afterbegin",function(){const e=document.createElement("h1");return e.className="text-5xl text-dark-600",e.textContent="Home Page",e}()),this.element.appendChild(function(){const e=document.createElement("button");return e.className="text-2xl text-white bg-dark-800 my-8 py-4 px-20 rounded-full shadow-sm shadow-dark-500 hover:transform hover:bg-dark-600 hover:shadow-2xl hover:shadow-dark-800 hover:-translate-y-2 active: active:transform active:bg-dark-100 active:shadow-2xl active:shadow-dark-800 active:-translate-y-1 transition-all",e.textContent="Logout",e.addEventListener("click",(()=>{l.isLoggedIn=!1})),e}()),this.element}},name:"Home",path:"/"},{func:class{constructor(){return this.element=document.createElement("main"),this.element.className="flex flex-row justify-center items-center min-h-[calc(100vh-4rem)] mt-16",this.element.insertAdjacentElement("afterbegin",function(){const e=document.createElement("h1");return e.className="text-5xl text-dark-600",e.textContent="Profile Page",e}()),this.element}},name:"Profile",path:"/profile"},{func:class{constructor(){return this.element=document.createElement("div"),this.element.appendChild(function(){const e=document.createElement("header");e.id="auth-header",e.className="flex flex-col md:flex-row justify-between items-center h-16 top-0 left-0 w-[100%]";const t=document.createElement("p");t.className="text-5xl text-dark-400 ml-8 font-bold",t.innerHTML="N<sup>2</sup>IPD";const n=document.createElement("ul");return n.className="flex flex-row h-16",n.appendChild(function(){const e=document.createElement("li");e.className="h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer";const t=document.createElement("a");return t.className="cursor-pointer text-dark-400 text-xl h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:text-red-500",t.textContent="Documentation",e.appendChild(t),e}()),n.appendChild(function(){const e=document.createElement("li");e.className="h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer login-link";const t=document.createElement("a");return t.className="cursor-pointer text-dark-400 text-xl h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:text-red-500",t.textContent="Login",e.appendChild(t),e}()),n.appendChild(function(){const e=document.createElement("li");e.className="h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer signup-link";const t=document.createElement("a");return t.className="cursor-pointer text-dark-400 text-xl h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:text-red-500",t.textContent="Signup",e.appendChild(t),e}()),e.appendChild(t),e.appendChild(n),e}()),this.element.appendChild(function(){const e=document.createElement("main");return e.id="landing-auth",e.className="flex flex-col justify-center items-center",e.style.overflow="hidden",e.innerHTML=String.raw`
        <div class="h-[calc(100vh-4rem)] w-[30vw] flex flex-col justify-center items-center self-start " id="auth-btn-container">
          <button class="documentation-link text-2xl text-white bg-dark-800 mt-8 mx-8 py-4 w-[calc(100%-4rem)] shadow-sm shadow-dark-500 hover:transform hover:bg-dark-600 hover:shadow-2xl hover:shadow-dark-800 hover:-translate-y-2 active:transform active:bg-dark-100 active:shadow-2xl active:shadow-dark-800 active:-translate-y-1 transition-all">
            Read Documentation
          </button>
          <div class="mx-8 py-4 w-[calc(100%-4rem)] flex flex-row justify-between items-center">
            <button class="login-link text-2xl text-white bg-dark-800 py-4 mr-2 w-[calc(100%)] shadow-sm shadow-dark-500 hover:transform hover:bg-dark-600 hover:shadow-2xl hover:shadow-dark-800 hover:-translate-y-2 active:transform active:bg-dark-100 active:shadow-2xl active:shadow-dark-800 active:-translate-y-1 transition-all">
              Login
            </button>
            <button  class="signup-link text-2xl text-white bg-dark-800 py-4 ml-2 w-[calc(100%)] shadow-sm shadow-dark-500 hover:transform hover:bg-dark-600 hover:shadow-2xl hover:shadow-dark-800 hover:-translate-y-2 active:transform active:bg-dark-100 active:shadow-2xl active:shadow-dark-800 active:-translate-y-1 transition-all">
              Signup
            </button>
          </div>
        </div>
        `,e}()),this.element}},name:"Auth",path:"/auth"},{func:class{constructor(){return this.element=document.createElement("div"),this.element.appendChild(function(){const e=document.createElement("header");e.id="auth-header",e.className="flex flex-col md:flex-row justify-between items-center h-16 top-0 left-0 w-[100%]";const t=document.createElement("p");t.className="text-5xl text-dark-400 ml-8 font-bold",t.innerHTML="N<sup>2</sup>IPD";const n=document.createElement("ul");return n.className="flex flex-row h-16",n.appendChild(function(){const e=document.createElement("li");e.className="h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer";const t=document.createElement("a");return t.className="cursor-pointer text-dark-400 text-xl h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:text-red-500",t.textContent="Documentation",e.appendChild(t),e}()),n.appendChild(function(){const e=document.createElement("li");e.className="h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer login-link";const t=document.createElement("a");return t.className="cursor-pointer text-dark-400 text-xl h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:text-red-500",t.textContent="Login",e.appendChild(t),e}()),n.appendChild(function(){const e=document.createElement("li");e.className="h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer signup-link";const t=document.createElement("a");return t.className="cursor-pointer text-dark-400 text-xl h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:text-red-500",t.textContent="Signup",e.appendChild(t),e}()),e.appendChild(t),e.appendChild(n),e}()),this.element.appendChild(function(){const e=document.createElement("form");return e.className="signup-form visibleFromView h-screen",e.innerHTML=String.raw`
      <input type="email" id="signup-email"   required   autocomplete="false"  name="signup-email" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Email">
      <input type="password" id="signup-password"  required   autocomplete="false"  name="signup-password" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Password">
      <input type="text" id="signup-username"    required  autocomplete="false" name="signup-username" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Username">
        <input type="text" id="signup-fullname"  required   autocomplete="false"  name="signup-fullname" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Full Name">
      <input type="text" id="signup-address"   required  autocomplete="false" name="signup-address" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Address">
      <label for="signup=-birthday"   required  class="text-lg mt-4">Birthday</label>
      <input type="date" id="signup-birthday" autocomplete="false" name="signup-birthday" class="mt-4 h-15 border-dark-100 p-3 text-xl border">
    `,e.insertAdjacentElement("afterbegin",function(){const e=document.createElement("h1");return e.className="text-5xl text-dark-600 mt-4",e.textContent="Create Profile",e}()),e.addEventListener("submit",this.handleSubmit),e.appendChild(function(){const e=document.createElement("button");return e.className="text-2xl text-white bg-dark-800 my-8 py-4 px-20 rounded-full shadow-sm shadow-dark-500 hover:transform hover:bg-dark-600 hover:shadow-2xl hover:shadow-dark-800 hover:-translate-y-2 active:transform active:bg-dark-100 active:shadow-2xl active:shadow-dark-800 active:-translate-y-1 transition-all",e.textContent="Signup",e.type="submit",e}()),e.appendChild(function(){const e=document.createElement("a");return e.className="text-xl text-blue-800 my-4 cursor-pointer  transition-all  hover:underline login-link",e.textContent="Already signed up? Log in here =>",e}()),e}()),this.element}async handleSubmit(e){e.preventDefault();const t=document.querySelector("#signup-email"),n=document.querySelector("#signup-password"),r=document.querySelector("#signup-username"),a=document.querySelector("#signup-fullname"),o=document.querySelector("#signup-address"),i=document.querySelector("#signup-birthday");await(async e=>{try{"Successfully registered!"==(await s.post("/profile/create-profile",e)).data.message&&(l.isLoggedIn=!0)}catch(e){console.log(e)}})({email:t.value,password:n.value,username:r.value,fullname:a.value,address:o.value,birthday:i.value})}},name:"Auth",path:"/auth/signup"},{func:class{constructor(){return this.element=document.createElement("div"),this.element.appendChild(function(){const e=document.createElement("header");e.id="auth-header",e.className="flex flex-col md:flex-row justify-between items-center h-16 top-0 left-0 w-[100%]";const t=document.createElement("p");t.className="text-5xl text-dark-400 ml-8 font-bold",t.innerHTML="N<sup>2</sup>IPD";const n=document.createElement("ul");return n.className="flex flex-row h-16",n.appendChild(function(){const e=document.createElement("li");e.className="h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer";const t=document.createElement("a");return t.className="cursor-pointer text-dark-400 text-xl h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:text-red-500",t.textContent="Documentation",e.appendChild(t),e}()),n.appendChild(function(){const e=document.createElement("li");e.className="h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer login-link";const t=document.createElement("a");return t.className="cursor-pointer text-dark-400 text-xl h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:text-red-500",t.textContent="Login",e.appendChild(t),e}()),n.appendChild(function(){const e=document.createElement("li");e.className="h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer signup-link";const t=document.createElement("a");return t.className="cursor-pointer text-dark-400 text-xl h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:text-red-500",t.textContent="Signup",e.appendChild(t),e}()),e.appendChild(t),e.appendChild(n),e}()),this.element.appendChild(function(){const e=document.createElement("form");return e.className="visibleFromView login-form h-screen",e.innerHTML=String.raw`
      <input type="email" id="login-email"   required   autocomplete="false"  name="login-email" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Email">
      <input type="password" id="login-password"  required   autocomplete="false"  name="login-password" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Password">
      `,e.insertAdjacentElement("afterbegin",function(){const e=document.createElement("h1");return e.className="text-5xl text-dark-600 mt-16",e.textContent="Login",e}()),e.addEventListener("submit",this.handleSubmit),e.appendChild(function(){const e=document.createElement("button");return e.className="text-2xl text-white bg-dark-800 my-8 py-4 px-20 rounded-full shadow-sm shadow-dark-500 hover:transform hover:bg-dark-600 hover:shadow-2xl hover:shadow-dark-800 hover:-translate-y-2 active:transform active:bg-dark-100 active:shadow-2xl active:shadow-dark-800 active:-translate-y-1 transition-all",e.textContent="Login",e.type="submit",e}()),e.appendChild(function(){const e=document.createElement("a");return e.className="text-xl text-blue-800 my-4 cursor-pointer  transition-all  hover:underline signup-link",e.textContent="Don't have an account yet? Create one now =>",e}()),e}()),this.element}async handleSubmit(e){e.preventDefault();const t=document.querySelector("#login-email"),n=document.querySelector("#login-password");await(async e=>{try{"Successfully logged in!"==(await s.post("/profile/login",e)).data.message&&(l.isLoggedIn=!0)}catch(e){console.log(e)}})({email:t.value,password:n.value})}},name:"Auth",path:"/auth/login"}],currentPath:"/"},{set:(e,t,n)=>"currentPath"!==t||"/auth"==n&&l.isLoggedIn?(e[t]=n,!0):(history.pushState(null,null,n),m.render(e.routes.find((e=>e.path===n))),e[t]=n,!0)});class i{constructor(e){const t=e.path;this.el=document.createElement("li"),this.el.className="h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer";const n=document.createElement("a");return n.className="cursor-pointer text-white text-xl nav-list--link h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:bg-dark-50",n.textContent=e.name,this.el.appendChild(n),n.addEventListener("click",(()=>{o.currentPath=t})),this.el}}class c{constructor(e){this.el=document.createElement("header"),this.el.className="flex flex-col md:flex-row justify-between items-center h-16 bg-dark-800 fixed top-0 left-0 w-[100vw]";const t=document.createElement("p");t.className="text-3xl text-white ml-5",t.innerHTML="N<sup>2</sup>IPD";const n=document.createElement("ul");return n.className="flex flex-row h-16",e.forEach((e=>{"/auth"!==e.path&&n.appendChild(new i(e))})),this.el.appendChild(t),this.el.appendChild(n),this.el}}class d{constructor(e,t){return this.element=document.createElement("div"),this.element.insertAdjacentElement("afterbegin",new c(t)),this.element.appendChild(new e),this.element}}class u{constructor(e){return this.element=document.createElement("div"),this.element.appendChild(new e),this.element}}const m=new class{constructor(){this.routes=o.routes,this.el=document.querySelector("body")}render(e){this.el.firstElementChild&&this.el.removeChild(this.el.firstElementChild),"/auth"!==e.path&&"/auth/login"!==e.path&&"/auth/signup"!==e.path?(this.el.appendChild(new d(e.func,this.routes)),document.querySelectorAll(".nav-list--link").forEach((t=>{t.textContent===e.name?t.classList.add("active"):t.classList.remove("active")}))):this.el.appendChild(new u(e.func)),this.el.appendChild(function(){const e=document.createElement("div");return e.className="loader",e}())}},h=window.location.pathname;console.log(h);const p=localStorage.getItem("isLoggedIn");null===p?(localStorage.setItem("isLoggedIn",!1),o.currentPath="/auth/signup"!==h&&"/auth/login"!==h?"/auth":h):"true"===p?(l.isLoggedIn=!0,o.currentPath="/auth"!==h?h:"/"):"false"==p&&(o.currentPath="/auth/signup"!==h&&"/auth/login"!==h?"/auth":h),window.addEventListener("popstate",(e=>{o.currentPath=e.target.location.pathname}))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,n,a,l)=>{if(!n){var s=1/0;for(d=0;d<e.length;d++){for(var[n,a,l]=e[d],o=!0,i=0;i<n.length;i++)(!1&l||s>=l)&&Object.keys(r.O).every((e=>r.O[e](n[i])))?n.splice(i--,1):(o=!1,l<s&&(s=l));if(o){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[n,a,l]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,l,[s,o,i]=n,c=0;if(s.some((t=>0!==e[t]))){for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(i)var d=i(r)}for(t&&t(n);c<s.length;c++)l=s[c],r.o(e,l)&&e[l]&&e[l][0](),e[s[c]]=0;return r.O(d)},n=self.webpackChunktask2=self.webpackChunktask2||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[669],(()=>r(203)));a=r.O(a)})();