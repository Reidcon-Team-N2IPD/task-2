(() => {
  "use strict";
  var e,
    t = {
      851: (e, t, n) => {
        n.d(t, { l: () => g });
        var a = n(921);
        class r {
          constructor() {
            (this.element = document.createElement("header")),
              (this.element.id = "auth-header"),
              (this.element.className =
                "flex flex-col md:flex-row justify-between items-center h-16 top-0 left-0 w-[100%]");
            const e = document.createElement("p");
            (e.className = "text-5xl text-dark-400 ml-8 font-bold"),
              (e.innerHTML = "N<sup>2</sup>IPD");
            const t = document.createElement("ul");
            return (
              (t.className = "flex flex-row h-16"),
              t.appendChild(
                (function () {
                  const e = document.createElement("li");
                  e.className =
                    "h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer";
                  const t = document.createElement("a");
                  return (
                    (t.className =
                      "cursor-pointer text-dark-400 text-xl h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:text-red-500"),
                    (t.textContent = "Documentation"),
                    e.appendChild(t),
                    e
                  );
                })()
              ),
              t.appendChild(
                (function () {
                  const e = document.createElement("li");
                  e.className =
                    "h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer login-link";
                  const t = document.createElement("a");
                  return (
                    (t.className =
                      "cursor-pointer text-dark-400 text-xl h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:text-red-500"),
                    (t.textContent = "Login"),
                    e.appendChild(t),
                    e
                  );
                })()
              ),
              t.appendChild(
                (function () {
                  const e = document.createElement("li");
                  e.className =
                    "h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer signup-link";
                  const t = document.createElement("a");
                  return (
                    (t.className =
                      "cursor-pointer text-dark-400 text-xl h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:text-red-500"),
                    (t.textContent = "Signup"),
                    e.appendChild(t),
                    e
                  );
                })()
              ),
              this.element.appendChild(e),
              this.element.appendChild(t),
              this.element
            );
          }
        }
        var l = n(669),
          s = n.n(l);
        class o {
          constructor() {
            return (
              (this.el = document.createElement("div")),
              (this.el.className = "loader"),
              this.el
            );
          }
          static show() {
            document.querySelector(".loader").classList.add("show");
          }
          static hide() {
            document.querySelector(".loader").classList.remove("show");
          }
        }
        class i {
          constructor() {
            (this.element = document.createElement("div")),
              (this.element.className = "update-profile-dialog-wrapper hidden");
            const e = document.createElement("div");
            e.className =
              "update-profile-dialog flex flex-col justify-center items-center";
            const t = document.createElement("form");
            (t.className =
              "update-form flex flex-col justify-evenly items-center w-[90%] transition-all h-[100%] mt-16"),
              (t.innerHTML = String.raw`
      <input type="text" id="update-username"    required  autocomplete="false" name="update-username" class="update-profile-input" placeholder="Username">
      <input type="text" id="update-fullname"  required   autocomplete="false"  name="update-fullname" class="update-profile-input" placeholder="Full Name">
      <input type="text" id="update-address"   required  autocomplete="false" name="update-address" class="update-profile-input" placeholder="Address">
      <label for="update-birthday"   required  class="text-lg mt-4">Birthday</label>
      <input type="date" id="update-birthday" autocomplete="false" name="update-birthday" class="mt-4 h-15 border-dark-100 p-3 text-xl border">
    `);
            const n = document.createElement("button");
            (n.innerHTML = String.raw`&times;`),
              (n.className =
                "text-3xl font-bold absolute top-[10px] right-[20px]"),
              n.addEventListener("click", i.toggleDialog),
              e.appendChild(n),
              e.appendChild(
                (function () {
                  const e = document.createElement("h1");
                  return (
                    (e.className = "text-3xl text-dark-600 mt-4"),
                    (e.textContent = "Update your profile"),
                    e
                  );
                })()
              ),
              t.addEventListener("submit", this.handleSubmit),
              t.appendChild(
                (function () {
                  const e = document.createElement("button");
                  return (
                    (e.className =
                      "text-xl text-white bg-dark-800 my-4 py-4 px-20 rounded-[5px] shadow-sm shadow-dark-500 hover:transform hover:bg-dark-600 hover:shadow-2xl hover:shadow-dark-800 hover:-translate-y-[1] active:transform active:bg-dark-100 active:shadow-2xl active:shadow-dark-800 active:-translate-y-[0.5] transition-all"),
                    (e.textContent = "Update"),
                    (e.type = "submit"),
                    e
                  );
                })()
              ),
              e.appendChild(t),
              this.element.appendChild(e);
          }
          async handleSubmit(e) {
            e.preventDefault();
            const t = document.querySelector("#update-username"),
              n = document.querySelector("#update-fullname"),
              a = document.querySelector("#update-address"),
              r = document.querySelector("#update-birthday");
            try {
              await m({
                username: t.value,
                fullname: n.value,
                address: a.value,
                birthday: r.value,
              });
            } catch (e) {
            } finally {
              (t.value = ""), (n.value = ""), (a.value = ""), (r.value = "");
            }
          }
          static toggleDialog() {
            const e = document.querySelector(".update-profile-dialog-wrapper"),
              t = document.querySelector(".update-profile-dialog");
            e.classList.contains("hidden")
              ? ((document.body.style.overflow = "hidden"),
                e.classList.remove("hidden"),
                e.classList.add("flex"),
                t.classList.remove("animated-wrapper-close"),
                t.classList.add("animated-wrapper-open"))
              : (t.classList.remove("animated-wrapper-open"),
                t.classList.add("animated-wrapper-close"),
                setTimeout(() => {
                  e.classList.remove("flex"), e.classList.add("hidden");
                }, 200),
                (document.body.style.overflow = "auto"));
          }
        }
        const c = new Proxy(
            { isLoggedIn: !1 },
            {
              set: (e, t, n) => (
                (e[t] = n),
                !0 === n
                  ? (localStorage.setItem("isLoggedIn", !0),
                    (p.currentPath = "/"))
                  : !1 === n &&
                    (localStorage.setItem("isLoggedIn", !1),
                    localStorage.setItem("profile", null),
                    (p.currentPath = "/auth")),
                !0
              ),
            }
          ),
          d = new Proxy({ members: [] }, {}),
          u = s().create({
            baseURL:
              "https://3463d6f8-081d-458b-8a57-59f1e5d0781a.mock.pstmn.io",
            timeout: 6e3,
            headers: { "Content-Type": "application/json" },
          }),
          m = async (e) => {
            try {
              o.show(), await u.put("/profile/update", e), i.toggleDialog();
            } catch (e) {
              console.log(e), i.toggleDialog();
            } finally {
              o.hide();
            }
          },
          p = new Proxy(
            {
              routes: [
                {
                  func: class {
                    constructor() {
                      return (
                        (this.element = document.createElement("main")),
                        (this.element.className = "home-page"),
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
                      this.element = document.createElement("main");
                      const e = new i();
                      (this.element.className =
                        "flex flex-col justify-center items-center min-h-[calc(100vh-4rem)]"),
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
                        );
                      const t = document.createElement("button");
                      return (
                        (t.textContent = "Update Profile"),
                        (t.className =
                          "bg-dark-800 text-white text-xl py-4 px-8"),
                        this.element.appendChild(t),
                        this.element.appendChild(e.element),
                        t.addEventListener("click", i.toggleDialog),
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
                      if (
                        ((this.element = document.createElement("main")),
                        (this.element.className = "members-page"),
                        this.element.insertAdjacentElement(
                          "afterbegin",
                          (function () {
                            const e = document.createElement("h1");
                            return (
                              (e.className = "text-5xl text-dark-600"),
                              (e.textContent = "Members Page"),
                              e
                            );
                          })()
                        ),
                        0 === d.members.length)
                      )
                        (async () => {
                          try {
                            o.show();
                            const e = await u.get("/profile/get-all");
                            "Successfully fetched!" == e.data.message &&
                              (d.members = e.data.profiles),
                              console.log(d);
                          } catch (e) {
                            console.log(e);
                          } finally {
                            o.hide();
                          }
                        })()
                          .then(() => {
                            d.members.forEach((e) => {
                              const t = document.createElement("li");
                              (t.textContent = e.fullname),
                                this.element.appendChild(t);
                            });
                          })
                          .catch((e) => console.log(e));
                      else {
                        const e = this;
                        d.members.forEach(function (t) {
                          const n = document.createElement("li");
                          (n.textContent = t.fullname),
                            e.element.appendChild(n);
                        });
                      }
                      return this.element;
                    }
                  },
                  name: "Members",
                  path: "/members",
                },
                {
                  func: class {
                    constructor() {
                      return (
                        (this.element = document.createElement("div")),
                        this.element.appendChild(
                          (function () {
                            const e = document.createElement("header");
                            (e.id = "auth-header"),
                              (e.className =
                                "flex flex-col md:flex-row justify-between items-center h-16 top-0 left-0 w-[100%]");
                            const t = document.createElement("p");
                            (t.className =
                              "text-5xl text-dark-400 ml-8 font-bold"),
                              (t.innerHTML = "N<sup>2</sup>IPD");
                            const n = document.createElement("ul");
                            return (
                              (n.className = "flex flex-row h-16 mr-8"),
                              n.appendChild(
                                (function () {
                                  const e = document.createElement("li");
                                  e.className =
                                    "h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer";
                                  const t = document.createElement("a");
                                  return (
                                    (t.className =
                                      "cursor-pointer text-dark-400 text-[16px] h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:text-[#27DEBF]"),
                                    (t.textContent = "Documentation"),
                                    e.appendChild(t),
                                    e
                                  );
                                })()
                              ),
                              n.appendChild(
                                (function () {
                                  const e = document.createElement("li");
                                  e.className =
                                    "h-[calc(100%)] mr-4 flex flex-1 justify-center items-center cursor-pointer login-link";
                                  const t = document.createElement("a");
                                  return (
                                    (t.className =
                                      "cursor-pointer bg-dark-800 text-white text-[16px] w-[112px] rounded-[5px]  h-[60%] pl-5 pr-5  flex justify-center items-center transition-all"),
                                    (t.textContent = "Log In"),
                                    e.appendChild(t),
                                    e
                                  );
                                })()
                              ),
                              n.appendChild(
                                (function () {
                                  const e = document.createElement("li");
                                  e.className =
                                    "h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer signup-link";
                                  const t = document.createElement("a");
                                  return (
                                    (t.className =
                                      "cursor-pointer bg-[#27DEBF] text-[16px] text-white w-[112px] h-[60%] rounded-[5px] pl-5 pr-5  flex justify-center items-center transition-all"),
                                    (t.textContent = "Sign Up"),
                                    e.appendChild(t),
                                    e
                                  );
                                })()
                              ),
                              e.appendChild(t),
                              e.appendChild(n),
                              e
                            );
                          })()
                        ),
                        this.element.appendChild(
                          (function () {
                            const e = document.createElement("main");
                            (e.id = "landing-auth"),
                              (e.className =
                                "flex flex-row justify-between items-center"),
                              (e.style.overflow = "hidden"),
                              (e.innerHTML = String.raw`
        <div class="h-[calc(100vh-4rem)] w-[38vw] flex flex-col justify-center items-center ml-[100px] text-justify " id="auth-btn-container">
            <h1 class="self-start text-5xl text-[#27DEBF] font-600 mb-4">
                MOCK API
            </h1>
            <h2 class="self-start text-[1.5rem] text-dark-900 mb-4 font-600">
                Latest Project By N<sup>2</sup>IPD
            </h2>
          <p class="text-[14px] leading-[21px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc, quam vestibulum dignissim. Id laoreet lorem faucibus adipiscing pellentesque accumsan, dui natoque. A mauris amet, egestas facilisi semper vel a nisi, nec. Fusce ac tincidunt odio non bibendum ac id. Vulputate ipsum odio leo risus cursus. 
        </p>
          <p class="text-[14px] leading-[21px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc, quam vestibulum dignissim. Id laoreet lorem faucibus adipiscing pellentesque accumsan, dui natoque. A mauris amet, egestas facilisi semper vel a nisi, nec. Fusce ac tincidunt odio non bibendum ac id. Vulputate ipsum odio leo risus cursus. 
        </p>
          <div class="py-4 w-[calc(100%-4rem)] flex flex-row justify-start items-center self-start">
            <button  style="font-family: 'Roboto', sans-serif"  class="text-[16px] font-bold text-white bg-dark-800 h-[50px] w-[200px] shadow-sm shadow-dark-500 hover: hover:bg-dark-600 hover:shadow-2xl hover:shadow-dark-800 hover: active: active:bg-dark-100 active:shadow-2xl active:shadow-dark-800 active: transition-all">
              Read Documentation
            </button>
            <button   style="font-family: 'Roboto', sans-serif"  class="signup-link text-[16px] font-bold text-dark-800 bg-bg-white  h-[50px] ml-2 w-[200px] shadow-sm
            border border-4 border-dark-800 shadow-dark-500 hover: hover:bg-dark-600 hover:text-white hover:shadow-2xl hover:shadow-dark-800 active:bg-dark-900 active:text-white active:shadow-2xl active:shadow-dark-800 transition-all">
              Join N<sup>2</sup>IPD
            </button>
          </div>
        </div>
        `);
                            const t = document.createElement("div");
                            t.className =
                              "h-[calc(100vh-4rem)] w-[35vw] flex flex-col justify-center items-center mr-[100px]";
                            const n = new Image();
                            return (
                              (n.src = a),
                              (n.style.height = "80vh"),
                              (n.style.width = "35vw"),
                              (n.alt = "Landing Page Image"),
                              t.appendChild(n),
                              e.appendChild(t),
                              e
                            );
                          })()
                        ),
                        this.element
                      );
                    }
                  },
                  name: "Auth",
                  path: "/auth",
                },
                {
                  func: class {
                    constructor() {
                      (this.element = document.createElement("div")),
                        this.element.appendChild(new r());
                      const e = document.createElement("main");
                      e.className = "flex flex-col justify-center items-center";
                      const t = document.createElement("form");
                      return (
                        (t.className =
                          "signup-form flex flex-col justify-evenly items-center w-[calc(50vw)] transition-all h-screen"),
                        (t.innerHTML = String.raw`
   <input type="email" id="signup-email"   required   autocomplete="false"  name="signup-email" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Email">
      <input type="password" id="signup-password"  required   autocomplete="false"  name="signup-password" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Password">
      <input type="text" id="signup-username"    required  autocomplete="false" name="signup-username" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Username">
        <input type="text" id="signup-fullname"  required   autocomplete="false"  name="signup-fullname" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Full Name">
      <input type="text" id="signup-address"   required  autocomplete="false" name="signup-address" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Address">
      <label for="signup=-birthday"   required  class="text-lg mt-4">Birthday</label>
      <input type="date" id="signup-birthday" autocomplete="false" name="signup-birthday" class="mt-4 h-15 border-dark-100 p-3 text-xl border">
    `),
                        t.insertAdjacentElement(
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
                        t.addEventListener("submit", this.handleSubmit),
                        t.appendChild(
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
                        t.appendChild(
                          (function () {
                            const e = document.createElement("a");
                            return (
                              (e.className =
                                "text-xl text-blue-800 my-4 cursor-pointer  transition-all  hover:underline login-link"),
                              (e.textContent =
                                "Already signed up? Log in here =>"),
                              e
                            );
                          })()
                        ),
                        e.appendChild(t),
                        this.element.appendChild(e),
                        this.element
                      );
                    }
                    async handleSubmit(e) {
                      e.preventDefault();
                      const t = document.querySelector("#signup-email"),
                        n = document.querySelector("#signup-password"),
                        a = document.querySelector("#signup-username"),
                        r = document.querySelector("#signup-fullname"),
                        l = document.querySelector("#signup-address"),
                        s = document.querySelector("#signup-birthday");
                      await (async (e) => {
                        try {
                          o.show(),
                            "Successfully registered!" ==
                              (await u.post("/profile/create", e)).data
                                .message && (c.isLoggedIn = !0);
                        } catch (e) {
                          console.log(e);
                        } finally {
                          o.hide();
                        }
                      })({
                        email: t.value,
                        password: n.value,
                        username: a.value,
                        fullname: r.value,
                        address: l.value,
                        birthday: s.value,
                      });
                    }
                  },
                  name: "Signup",
                  path: "/signup",
                },
                {
                  func: class {
                    constructor() {
                      (this.element = document.createElement("div")),
                        this.element.appendChild(new r());
                      const e = document.createElement("main");
                      e.className = "flex flex-col justify-center items-center";
                      const t = document.createElement("form");
                      return (
                        (t.className =
                          "login-form flex flex-col justify-evenly items-center w-[calc(50vw)] transition-all h-screen"),
                        (t.innerHTML = String.raw`
      <input type="email" id="login-email"   required   autocomplete="false"  name="login-email" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Email">
      <input type="password" id="login-password"  required   autocomplete="false"  name="login-password" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Password">
      `),
                        t.insertAdjacentElement(
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
                        t.addEventListener("submit", this.handleSubmit),
                        t.appendChild(
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
                        t.appendChild(
                          (function () {
                            const e = document.createElement("a");
                            return (
                              (e.className =
                                "text-xl text-blue-800 my-4 cursor-pointer  transition-all  hover:underline signup-link"),
                              (e.textContent =
                                "Don't have an account yet? Create one now =>"),
                              e
                            );
                          })()
                        ),
                        e.appendChild(t),
                        this.element.appendChild(e),
                        this.element
                      );
                    }
                    async handleSubmit(e) {
                      e.preventDefault();
                      const t = document.querySelector("#login-email"),
                        n = document.querySelector("#login-password");
                      await (async (e) => {
                        try {
                          o.show();
                          const t = await u.post("/profile/login", e);
                          "Successfully logged in!" == t.data.message &&
                            (localStorage.setItem(
                              "profile",
                              JSON.stringify(t.data.profile)
                            ),
                            (c.isLoggedIn = !0));
                        } catch (e) {
                          console.log(e);
                        } finally {
                          o.hide();
                        }
                      })({ email: t.value, password: n.value });
                    }
                  },
                  name: "Login",
                  path: "/login",
                },
              ],
              currentPath: "/",
            },
            {
              set: (e, t, n) =>
                "currentPath" !== t || ("/auth" == n && c.isLoggedIn)
                  ? ((e[t] = n), !0)
                  : (history.pushState(null, null, n),
                    g.render(e.routes.find((e) => e.path === n)),
                    (e[t] = n),
                    !0),
            }
          );
        class h {
          constructor() {
            (this.element = document.createElement("header")),
              (this.element.id = "main-header"),
              (this.element.className =
                "flex flex-col md:flex-row justify-between items-center h-16 top-0 left-0 w-[100%]");
            const e = document.createElement("p");
            (e.className = "text-5xl text-dark-400 ml-8 font-bold"),
              (e.innerHTML = "N<sup>2</sup>IPD"),
              e.addEventListener("click", () => {
                p.currentPath = "/";
              }),
              (e.style.cursor = "pointer");
            const t = document.createElement("ul");
            return (
              (t.className = "flex flex-row h-16"),
              t.appendChild(
                (function () {
                  const e = document.createElement("li");
                  e.className =
                    "h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer";
                  const t = document.createElement("a");
                  return (
                    (t.className =
                      "cursor-pointer text-dark-400 text-xl h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:text-red-500"),
                    (t.textContent = "Documentation"),
                    e.appendChild(t),
                    e
                  );
                })()
              ),
              t.appendChild(
                (function () {
                  const e = document.createElement("li");
                  e.className =
                    "h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer login-link";
                  const t = document.createElement("a");
                  return (
                    (t.className =
                      "cursor-pointer text-dark-400 text-xl h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:text-red-500"),
                    (t.textContent = "Members"),
                    t.addEventListener("click", () => {
                      p.currentPath = "/members";
                    }),
                    e.appendChild(t),
                    e
                  );
                })()
              ),
              t.appendChild(
                (function () {
                  const e = document.createElement("li");
                  e.className =
                    "h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer signup-link";
                  const t = document.createElement("a");
                  return (
                    (t.className =
                      "cursor-pointer text-dark-400 text-xl h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:text-red-500"),
                    (t.textContent = "Profile"),
                    t.addEventListener("click", () => {
                      p.currentPath = "/profile";
                    }),
                    e.appendChild(t),
                    e
                  );
                })()
              ),
              t.appendChild(
                (function () {
                  const e = document.createElement("li");
                  e.className =
                    "h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer signup-link";
                  const t = document.createElement("a");
                  return (
                    (t.className =
                      "cursor-pointer text-dark-400 text-xl h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:text-red-500"),
                    (t.textContent = "Logout"),
                    t.addEventListener("click", () => {
                      c.isLoggedIn = !1;
                    }),
                    e.appendChild(t),
                    e
                  );
                })()
              ),
              this.element.appendChild(e),
              this.element.appendChild(t),
              this.element
            );
          }
        }
        class f {
          constructor(e, t) {
            return (
              (this.element = document.createElement("div")),
              this.element.insertAdjacentElement("afterbegin", new h(t)),
              document.body.appendChild(new o()),
              this.element.appendChild(new e()),
              this.element
            );
          }
        }
        class x {
          constructor(e) {
            return new e();
          }
        }
        const g = new (class {
            constructor() {
              (this.routes = p.routes),
                (this.el = document.querySelector("body")),
                new o();
            }
            render(e) {
              if (
                (this.el.firstElementChild &&
                  this.el.removeChild(this.el.firstElementChild),
                "/auth" !== e.path &&
                  "/login" !== e.path &&
                  "/signup" !== e.path)
              )
                this.el.insertAdjacentElement(
                  "afterbegin",
                  new f(e.func, this.routes)
                ),
                  document.querySelectorAll(".nav-list--link").forEach((t) => {
                    t.textContent === e.name
                      ? t.classList.add("active")
                      : t.classList.remove("active");
                  });
              else {
                this.el.insertAdjacentElement("afterbegin", new x(e.func));
                const t = document.querySelectorAll(".login-link"),
                  n = document.querySelectorAll(".signup-link");
                t.forEach((e) => {
                  e.addEventListener("click", () => {
                    p.currentPath = "/login";
                  });
                }),
                  n.forEach((e) => {
                    e.addEventListener("click", () => {
                      p.currentPath = "/signup";
                    });
                  });
              }
            }
          })(),
          w = window.location.pathname,
          v = localStorage.getItem("isLoggedIn");
        null === v
          ? (localStorage.setItem("isLoggedIn", !1),
            (p.currentPath = "/signup" !== w && "/login" !== w ? "/auth" : w))
          : "true" === v
          ? ((c.isLoggedIn = !0), (p.currentPath = "/auth" !== w ? w : "/"))
          : "false" == v &&
            (p.currentPath = "/signup" !== w && "/login" !== w ? "/auth" : w),
          window.addEventListener("popstate", (e) => {
            p.currentPath = e.target.location.pathname;
          });
      },
      921: (e, t, n) => {
        e.exports = n.p + "65025df78c658ea6324f.svg";
      },
    },
    n = {};
  function a(e) {
    var r = n[e];
    if (void 0 !== r) return r.exports;
    var l = (n[e] = { exports: {} });
    return t[e](l, l.exports, a), l.exports;
  }
  (a.m = t),
    (e = []),
    (a.O = (t, n, r, l) => {
      if (!n) {
        var s = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [n, r, l] = e[d], o = !0, i = 0; i < n.length; i++)
            (!1 & l || s >= l) && Object.keys(a.O).every((e) => a.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((o = !1), l < s && (s = l));
          if (o) {
            e.splice(d--, 1);
            var c = r();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      l = l || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > l; d--) e[d] = e[d - 1];
      e[d] = [n, r, l];
    }),
    (a.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
    (a.d = (e, t) => {
      for (var n in t)
        a.o(t, n) &&
          !a.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (a.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      a.g.importScripts && (e = a.g.location + "");
      var t = a.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        n.length && (e = n[n.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (a.p = e + "../");
    })(),
    (() => {
      var e = { 826: 0 };
      a.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var r,
            l,
            [s, o, i] = n,
            c = 0;
          if (s.some((t) => 0 !== e[t])) {
            for (r in o) a.o(o, r) && (a.m[r] = o[r]);
            if (i) var d = i(a);
          }
          for (t && t(n); c < s.length; c++)
            (l = s[c]), a.o(e, l) && e[l] && e[l][0](), (e[s[c]] = 0);
          return a.O(d);
        },
        n = (self.webpackChunktask2 = self.webpackChunktask2 || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var r = a.O(void 0, [669], () => a(851));
  r = a.O(r);
})();
