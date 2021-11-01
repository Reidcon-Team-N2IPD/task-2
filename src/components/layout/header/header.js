import { NavigationLink } from "./components/navigation-link";

export class Header {
  constructor(routes) {
    this.element = String.raw`
    
    <header class="flex flex-col md:flex-row justify-between items-center h-16 bg-dark-800">
      <p class="text-3xl text-white ml-5">N<sup>2</sup>IPD</p>
      <ul class="flex flex-row h-16">
       ${routes
         .map((r) => {
           return new NavigationLink(r).el;
         })
         .join("")}        
      </ul>
    </header>
    
    `;
  }
}
