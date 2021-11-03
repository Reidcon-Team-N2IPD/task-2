(() => {
  "use strict";
  var e,
    t = {
      203: (e, t, r) => {
        r.d(t, { l: () => u });
        const a = new Proxy(
          { isLoggedIn: !1 },
          {
            set: (e, t, r) => (
              (e[t] = r),
              !0 === r
                ? (localStorage.setItem("isLoggedIn", !0),
                  (n.currentPath = "/"))
                : !1 === r &&
                  (localStorage.setItem("isLoggedIn", !1),
                  (n.currentPath = "/auth")),
              !0
            ),
          }
        );
        var o = r(669);
        const i = r
          .n(o)()
          .create({
            baseURL:
              "https://3463d6f8-081d-458b-8a57-59f1e5d0781a.mock.pstmn.io",
            timeout: 3e3,
            headers: { "Content-Type": "application/json" },
          });
        class v {
          constructor() {
            return (
              (this.element = document.createElement("form")),
              (this.element.className = "signup-form hiddenFromView"),
              (this.element.innerHTML = String.raw`
      <input type="email" id="signup-email"   required   autocomplete="false"  name="signup-email" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Email">
      <input type="password" id="signup-password"  required   autocomplete="false"  name="signup-password" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Password">
      <input type="text" id="signup-username"    required  autocomplete="false" name="signup-username" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Username">
        <input type="text" id="signup-fullname"  required   autocomplete="false"  name="signup-fullname" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Full Name">
      <input type="text" id="signup-address"   required  autocomplete="false" name="signup-address" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Address">
      <label for="signup=-birthday"   required  class="text-lg mt-4">Birthday</label>
      <input type="date" id="signup-birthday" autocomplete="false" name="signup-birthday" class="mt-4 h-15 border-dark-100 p-3 text-xl border">
    `),
              this.element.insertAdjacentElement(
                "afterbegin",
                (function () {
                  const e = document.createElement("h1");
                  return (
                    (e.className = "text-5xl text-dark-600 mt-4"),
                    (e.textContent = "Create Profile"),
                    e
                  );
                })()
              ),
              this.element.addEventListener("submit", this.handleSubmit),
              this.element.appendChild(
                (function () {
                  const e = document.createElement("button");
                  return (
                    (e.className =
                      "text-2xl text-white bg-dark-800 my-8 py-4 px-20 rounded-full shadow-sm shadow-dark-500 hover:transform hover:bg-dark-600 hover:shadow-2xl hover:shadow-dark-800 hover:-translate-y-2 active:transform active:bg-dark-100 active:shadow-2xl active:shadow-dark-800 active:-translate-y-1 transition-all"),
                    (e.textContent = "Signup"),
                    (e.type = "submit"),
                    e
                  );
                })()
              ),
              this.element.appendChild(
                (function () {
                  const e = document.createElement("a");
                  return (
                    (e.className =
                      "text-xl text-blue-800 my-4 cursor-pointer  transition-all  hover:underline"),
                    (e.textContent = "Already signed up? Log in here =>"),
                    e.addEventListener("click", (e) => {
                      e.preventDefault();
                      const t = document.querySelector(".signup-form"),
                        r = document.querySelector(".login-form");
                      t.classList.remove("visibleFromView"),
                        t.classList.add("hiddenFromView"),
                        r.classList.remove("hiddenFromView"),
                        r.classList.add("visibleFromView");
                    }),
                    e
                  );
                })()
              ),
              this.element
            );
          }
          async handleSubmit(e) {
            e.preventDefault();
            const t = document.querySelector("#signup-email"),
              r = document.querySelector("#signup-password"),
              o = document.querySelector("#signup-username"),
              v = document.querySelector("#signup-fullname"),
              c = document.querySelector("#signup-address"),
              n = document.querySelector("#signup-birthday");
            await (async (e) => {
              try {
                "Successfully registered!" ==
                  (await i.post("/profile/create-profile", e)).data.message &&
                  (a.isLoggedIn = !0);
              } catch (e) {
                console.log(e);
              }
            })({
              email: t.value,
              password: r.value,
              username: o.value,
              fullname: v.value,
              address: c.value,
              birthday: n.value,
            });
          }
        }
        class c {
          constructor() {
            return (
              (this.element = document.createElement("form")),
              (this.element.className = "visibleFromView login-form"),
              (this.element.innerHTML = String.raw`
      <input type="email" id="login-email"   required   autocomplete="false"  name="login-email" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Email">
      <input type="password" id="login-password"  required   autocomplete="false"  name="login-password" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Password">
      `),
              this.element.insertAdjacentElement(
                "afterbegin",
                (function () {
                  const e = document.createElement("h1");
                  return (
                    (e.className = "text-5xl text-dark-600 mt-16"),
                    (e.textContent = "Login"),
                    e
                  );
                })()
              ),
              this.element.addEventListener("submit", this.handleSubmit),
              this.element.appendChild(
                (function () {
                  const e = document.createElement("button");
                  return (
                    (e.className =
                      "text-2xl text-white bg-dark-800 my-8 py-4 px-20 rounded-full shadow-sm shadow-dark-500 hover:transform hover:bg-dark-600 hover:shadow-2xl hover:shadow-dark-800 hover:-translate-y-2 active:transform active:bg-dark-100 active:shadow-2xl active:shadow-dark-800 active:-translate-y-1 transition-all"),
                    (e.textContent = "Login"),
                    (e.type = "submit"),
                    e
                  );
                })()
              ),
              this.element.appendChild(
                (function () {
                  const e = document.createElement("a");
                  return (
                    (e.className =
                      "text-xl text-blue-800 my-4 cursor-pointer  transition-all  hover:underline"),
                    (e.textContent =
                      "Don't have an account yet? Create one now =>"),
                    e.addEventListener("click", (e) => {
                      e.preventDefault();
                      const t = document.querySelector(".signup-form"),
                        r = document.querySelector(".login-form");
                      r.classList.remove("visibleFromView"),
                        r.classList.add("hiddenFromView"),
                        t.classList.remove("hiddenFromView"),
                        t.classList.add("visibleFromView");
                    }),
                    e
                  );
                })()
              ),
              this.element
            );
          }
          async handleSubmit(e) {
            e.preventDefault();
            const t = document.querySelector("#login-email"),
              r = document.querySelector("#login-password");
            await (async (e) => {
              try {
                "Successfully logged in!" ==
                  (await i.post("/profile/login", e)).data.message &&
                  (a.isLoggedIn = !0);
              } catch (e) {
                console.log(e);
              }
            })({ email: t.value, password: r.value });
          }
        }
        const n = new Proxy(
          {
            routes: [
              {
                func: class {
                  constructor() {
                    return (
                      (this.element = document.createElement("main")),
                      (this.element.className =
                        "flex flex-col justify-center items-center min-h-[calc(100vh-4rem)] mt-16"),
                      this.element.insertAdjacentElement(
                        "afterbegin",
                        (function () {
                          const e = document.createElement("h1");
                          return (
                            (e.className = "text-5xl text-dark-600"),
                            (e.textContent = "Home Page"),
                            e
                          );
                        })()
                      ),
                      this.element.appendChild(
                        (function () {
                          const e = document.createElement("button");
                          return (
                            (e.className =
                              "text-2xl \n                               text-white\n                               bg-dark-800\n                               my-8\n                               py-4\n                               px-20\n                               rounded-full\n                               shadow-sm\n                               shadow-dark-500\n                               hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover:transform hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover:bg-dark-600 hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover:shadow-2xl hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover:shadow-dark-800 hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover:-translate-y-2 hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover: hover:\n                               active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active:transform active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active:bg-dark-100 active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active:shadow-2xl active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active:shadow-dark-800 active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active:-translate-y-1 active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active: active:\n                               transition-all"),
                            (e.textContent = "Logout"),
                            e.addEventListener("click", () => {
                              a.isLoggedIn = !1;
                            }),
                            e
                          );
                        })()
                      ),
                      this.element
                    );
                  }
                },
                name: "Home",
                path: "/",
              },
              {
                func: class {
                  constructor() {
                    return (
                      (this.element = document.createElement("main")),
                      (this.element.className =
                        "flex flex-row justify-center items-center min-h-[calc(100vh-4rem)] mt-16"),
                      this.element.insertAdjacentElement(
                        "afterbegin",
                        (function () {
                          const e = document.createElement("h1");
                          return (
                            (e.className = "text-5xl text-dark-600"),
                            (e.textContent = "Profile Page"),
                            e
                          );
                        })()
                      ),
                      this.element
                    );
                  }
                },
                name: "Profile",
                path: "/profile",
              },
              {
                func: class {
                  constructor() {
                    return (
                      (this.element = document.createElement("main")),
                      (this.element.className =
                        "flex flex-row justify-center items-center min-h-[calc(100vh-4rem)] mt-4"),
                      this.element.appendChild(new v()),
                      this.element.appendChild(new c()),
                      this.element
                    );
                  }
                },
                name: "Auth",
                path: "/auth",
              },
            ],
            currentPath: "/",
          },
          {
            set: (e, t, r) =>
              "currentPath" !== t || ("/auth" == r && a.isLoggedIn)
                ? ((e[t] = r), !0)
                : (history.pushState(null, null, r),
                  u.render(e.routes.find((e) => e.path === r)),
                  (e[t] = r),
                  !0),
          }
        );
        class h {
          constructor(e) {
            const t = e.path;
            (this.el = document.createElement("li")),
              (this.el.className =
                "h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer");
            const r = document.createElement("a");
            return (
              (r.className =
                "cursor-pointer text-white text-xl nav-list--link h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:bg-dark-50"),
              (r.textContent = e.name),
              this.el.appendChild(r),
              r.addEventListener("click", () => {
                n.currentPath = t;
              }),
              this.el
            );
          }
        }
        class s {
          constructor(e) {
            (this.el = document.createElement("header")),
              (this.el.className =
                "flex flex-col md:flex-row justify-between items-center h-16 bg-dark-800 fixed top-0 left-0 w-[100vw]");
            const t = document.createElement("p");
            (t.className = "text-3xl text-white ml-5"),
              (t.innerHTML = "N<sup>2</sup>IPD");
            const r = document.createElement("ul");
            return (
              (r.className = "flex flex-row h-16"),
              e.forEach((e) => {
                "/auth" !== e.path && r.appendChild(new h(e));
              }),
              this.el.appendChild(t),
              this.el.appendChild(r),
              this.el
            );
          }
        }
        class l {
          constructor(e, t) {
            return (
              (this.element = document.createElement("div")),
              this.element.insertAdjacentElement("afterbegin", new s(t)),
              this.element.appendChild(new e()),
              this.element
            );
          }
        }
        class d {
          constructor(e) {
            return (
              (this.element = document.createElement("div")),
              this.element.appendChild(new e()),
              this.element
            );
          }
        }
        const u = new (class {
            constructor() {
              (this.routes = n.routes),
                (this.el = document.querySelector("body"));
            }
            render(e) {
              this.el.firstElementChild &&
                this.el.removeChild(this.el.firstElementChild),
                "/auth" !== e.path
                  ? (this.el.appendChild(new l(e.func, this.routes)),
                    document
                      .querySelectorAll(".nav-list--link")
                      .forEach((t) => {
                        t.textContent === e.name
                          ? t.classList.add("active")
                          : t.classList.remove("active");
                      }))
                  : this.el.appendChild(new d(e.func));
            }
          })(),
          m = window.location.pathname,
          p = localStorage.getItem("isLoggedIn");
        null === p
          ? (localStorage.setItem("isLoggedIn", !1), (n.currentPath = "/auth"))
          : "true" === p
          ? ((a.isLoggedIn = !0), (n.currentPath = "/auth" !== m ? m : "/"))
          : "false" == p && (n.currentPath = "/auth"),
          window.addEventListener("popstate", (e) => {
            n.currentPath = e.target.location.pathname;
          });
      },
    },
    r = {};
  function a(e) {
    var o = r[e];
    if (void 0 !== o) return o.exports;
    var i = (r[e] = { exports: {} });
    return t[e](i, i.exports, a), i.exports;
  }
  (a.m = t),
    (e = []),
    (a.O = (t, r, o, i) => {
      if (!r) {
        var v = 1 / 0;
        for (s = 0; s < e.length; s++) {
          for (var [r, o, i] = e[s], c = !0, n = 0; n < r.length; n++)
            (!1 & i || v >= i) && Object.keys(a.O).every((e) => a.O[e](r[n]))
              ? r.splice(n--, 1)
              : ((c = !1), i < v && (v = i));
          if (c) {
            e.splice(s--, 1);
            var h = o();
            void 0 !== h && (t = h);
          }
        }
        return t;
      }
      i = i || 0;
      for (var s = e.length; s > 0 && e[s - 1][2] > i; s--) e[s] = e[s - 1];
      e[s] = [r, o, i];
    }),
    (a.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
    (a.d = (e, t) => {
      for (var r in t)
        a.o(t, r) &&
          !a.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = { 826: 0 };
      a.O.j = (t) => 0 === e[t];
      var t = (t, r) => {
          var o,
            i,
            [v, c, n] = r,
            h = 0;
          if (v.some((t) => 0 !== e[t])) {
            for (o in c) a.o(c, o) && (a.m[o] = c[o]);
            if (n) var s = n(a);
          }
          for (t && t(r); h < v.length; h++)
            (i = v[h]), a.o(e, i) && e[i] && e[i][0](), (e[v[h]] = 0);
          return a.O(s);
        },
        r = (self.webpackChunktask2 = self.webpackChunktask2 || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var o = a.O(void 0, [669], () => a(203));
  o = a.O(o);
})();
