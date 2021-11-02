(()=>{"use strict";const e=[{func:class{constructor(){this.element=String.raw`
    <main class="flex flex-row justify-center items-center h-[calc(100vh-5rem)]">
      <h1 class="text-5xl text-dark-600">Home Page</h1>
    </main>
    `}},name:"Home",path:"/"},{func:class{constructor(){this.element=String.raw`
    <main class="flex flex-row justify-center items-center h-[calc(100vh-5rem)]">
      <h1 class="text-5xl text-dark-600">Profile Page</h1>
    </main>
    `}},name:"Profile",path:"/profile"},{func:class{constructor(){this.element=String.raw`
    <main class="flex flex-row justify-center items-center h-[calc(100vh-5rem)]">
      <h1 class="text-5xl text-dark-600">Auth Page</h1>
    </main>
    `}},name:"Auth",path:"/auth"},{func:class{constructor(){this.element=String.raw`
    <main class="flex flex-row justify-center items-center h-[calc(100vh-5rem)]">
      <h1 class="text-5xl text-dark-600">Pasan Page</h1>
    </main>
    `}},name:"Pasan",path:"/pasan"},{func:class{constructor(){this.element=String.raw`
    <main class="flex flex-row justify-center items-center h-[calc(100vh-5rem)]">
      <h1 class="text-5xl text-dark-600">Nipun Page</h1>
    </main>
    `}},name:"Nipun",path:"/nipun"}];class t{constructor(e){const t=e.path;this.el=String.raw`
    <li class="h-[calc(100%)] flex flex-1 justify-center items-center">
      <a href="/#${t}" class="text-white text-xl nav-list--link h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:bg-dark-50">
      ${e.name}
      </a>
    </li>
    `}}class s{constructor(e){this.element=String.raw`
    
    <header class="flex flex-col md:flex-row justify-between items-center h-16 bg-dark-800">
      <p class="text-3xl text-white ml-5">N<sup>2</sup>IPD</p>
      <ul class="flex flex-row h-16">
       ${e.map((e=>new t(e).el)).join("")}        
      </ul>
    </header>
    
    `}}const n=new Proxy({isLoggedIn:!1},{set:(e,t,s)=>!0===s?(console.log("Logged in"),e[t]=s,!0):(e[t]=s,!0)}),a=new class{constructor(e){this.routes=e,this.el=document.querySelector("body"),this.el.innerHTML=new s(this.routes).element}render(e="Home"){""===window.location.hash&&(window.location.hash="#/"),this.el.firstElementChild.nextElementSibling&&this.el.removeChild(this.el.firstElementChild.nextElementSibling);const t=this.routes.find((t=>t.name==e));this.el.firstElementChild.insertAdjacentHTML("afterend",(new t.func).element),document.querySelectorAll(".nav-list--link").forEach((e=>{e.hash===window.location.hash?e.classList.add("active"):e.classList.remove("active")}))}}(e);a.render(),window.addEventListener("hashchange",(t=>{const s=window.location.hash.replace("#",""),l=e.find((e=>e.path==s));n.isLoggedIn=!0,a.render(l.name)}))})();