"use strict";(self.webpackChunktask2=self.webpackChunktask2||[]).push([[52],{2052:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(4006);class l{constructor(){this.element=document.createElement("main"),this.element.className="login-main";const e=document.createElement("form");return e.className="login-form",e.innerHTML=String.raw`
      <input type="email" id="login-email"   required   autocomplete="false"  name="login-email" class="input" placeholder="Email">
      <input type="password" id="login-password"  required   autocomplete="false"  name="login-password" class="input" placeholder="Password">
      `,e.insertAdjacentElement("afterbegin",function(){const e=document.createElement("h1");return e.className="login-header",e.textContent="Login",e}()),e.addEventListener("submit",this.handleSubmit),e.appendChild(function(){const e=document.createElement("button");return e.className="login-form-submit-btn",e.textContent="Login",e.type="submit",e}()),e.appendChild(function(){const e=document.createElement("a");return e.className="change-to-signup signup-link",e.textContent="Don't have an account yet? Join NOW =>",e}()),this.element.appendChild(e),this.element}async handleSubmit(e){e.preventDefault();const t=document.querySelector("#login-email"),n=document.querySelector("#login-password");await(0,a.x4)({email:t.value,password:n.value})}}}}]);