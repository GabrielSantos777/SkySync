/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var n = {
      494: () => {
        function n(n) {
          return n < 10 ? "0".concat(n) : n;
        }
        function r() {
          var r,
            t,
            e = document.getElementById("currentDate"),
            o = new Date(),
            a = n(o.getDate()),
            i = n(o.getFullYear()),
            c = n(o.getHours()),
            s = n(o.getMinutes());
          switch (o.getDay()) {
            case 0:
              r = "Dom";
              break;
            case 1:
              r = "Seg";
              break;
            case 2:
              r = "Ter";
              break;
            case 3:
              r = "Qua";
              break;
            case 4:
              r = "Qui";
              break;
            case 5:
              r = "Sex";
              break;
            case 6:
              r = "Sab";
          }
          switch (o.getMonth()) {
            case 0:
              t = "Jan";
              break;
            case 1:
              r = "Fev";
              break;
            case 2:
              r = "Mar";
              break;
            case 3:
              r = "Abr";
              break;
            case 4:
              r = "Mai";
              break;
            case 5:
              r = "Jun";
              break;
            case 6:
              r = "Jul";
              break;
            case 7:
              r = "Ago";
              break;
            case 8:
              r = "Set";
              break;
            case 9:
              r = "Out";
              break;
            case 10:
              r = "Nov";
              break;
            case 1:
              r = "Dez";
          }
          e.innerHTML = ""
            .concat(c, ":")
            .concat(s, " - ")
            .concat(r, ", ")
            .concat(a, " de ")
            .concat(t, " de ")
            .concat(i);
        }
        window.onload = function () {
          r(), setInterval(r, 1e3);
        };
      },
      253: () => {
        document
          .querySelector("#search")
          .addEventListener("click", function (n) {
            var r, t;
            (t = (r = ["city1.jpg", "city3.jpg", "city4.jpg", "city5.jpg"])[
              Math.floor(Math.random() * r.length)
            ]),
              (document.body.style.backgroundImage =
                "url('../src/assets/imgs/".concat(t, "')"));
          });
      },
      644: () => {
        function n(r) {
          return (
            (n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (n) {
                    return typeof n;
                  }
                : function (n) {
                    return n &&
                      "function" == typeof Symbol &&
                      n.constructor === Symbol &&
                      n !== Symbol.prototype
                      ? "symbol"
                      : typeof n;
                  }),
            n(r)
          );
        }
        function r() {
          "use strict";
          r = function () {
            return e;
          };
          var t,
            e = {},
            o = Object.prototype,
            a = o.hasOwnProperty,
            i =
              Object.defineProperty ||
              function (n, r, t) {
                n[r] = t.value;
              },
            c = "function" == typeof Symbol ? Symbol : {},
            s = c.iterator || "@@iterator",
            A = c.asyncIterator || "@@asyncIterator",
            u = c.toStringTag || "@@toStringTag";
          function l(n, r, t) {
            return (
              Object.defineProperty(n, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              n[r]
            );
          }
          try {
            l({}, "");
          } catch (t) {
            l = function (n, r, t) {
              return (n[r] = t);
            };
          }
          function f(n, r, t, e) {
            var o = r && r.prototype instanceof v ? r : v,
              a = Object.create(o.prototype),
              c = new I(e || []);
            return i(a, "_invoke", { value: L(n, t, c) }), a;
          }
          function p(n, r, t) {
            try {
              return { type: "normal", arg: n.call(r, t) };
            } catch (n) {
              return { type: "throw", arg: n };
            }
          }
          e.wrap = f;
          var d = "suspendedStart",
            h = "suspendedYield",
            m = "executing",
            g = "completed",
            y = {};
          function v() {}
          function E() {}
          function C() {}
          var x = {};
          l(x, s, function () {
            return this;
          });
          var b = Object.getPrototypeOf,
            w = b && b(b(M([])));
          w && w !== o && a.call(w, s) && (x = w);
          var B = (C.prototype = v.prototype = Object.create(x));
          function k(n) {
            ["next", "throw", "return"].forEach(function (r) {
              l(n, r, function (n) {
                return this._invoke(r, n);
              });
            });
          }
          function S(r, t) {
            function e(o, i, c, s) {
              var A = p(r[o], r, i);
              if ("throw" !== A.type) {
                var u = A.arg,
                  l = u.value;
                return l && "object" == n(l) && a.call(l, "__await")
                  ? t.resolve(l.__await).then(
                      function (n) {
                        e("next", n, c, s);
                      },
                      function (n) {
                        e("throw", n, c, s);
                      }
                    )
                  : t.resolve(l).then(
                      function (n) {
                        (u.value = n), c(u);
                      },
                      function (n) {
                        return e("throw", n, c, s);
                      }
                    );
              }
              s(A.arg);
            }
            var o;
            i(this, "_invoke", {
              value: function (n, r) {
                function a() {
                  return new t(function (t, o) {
                    e(n, r, t, o);
                  });
                }
                return (o = o ? o.then(a, a) : a());
              },
            });
          }
          function L(n, r, e) {
            var o = d;
            return function (a, i) {
              if (o === m) throw new Error("Generator is already running");
              if (o === g) {
                if ("throw" === a) throw i;
                return { value: t, done: !0 };
              }
              for (e.method = a, e.arg = i; ; ) {
                var c = e.delegate;
                if (c) {
                  var s = j(c, e);
                  if (s) {
                    if (s === y) continue;
                    return s;
                  }
                }
                if ("next" === e.method) e.sent = e._sent = e.arg;
                else if ("throw" === e.method) {
                  if (o === d) throw ((o = g), e.arg);
                  e.dispatchException(e.arg);
                } else "return" === e.method && e.abrupt("return", e.arg);
                o = m;
                var A = p(n, r, e);
                if ("normal" === A.type) {
                  if (((o = e.done ? g : h), A.arg === y)) continue;
                  return { value: A.arg, done: e.done };
                }
                "throw" === A.type &&
                  ((o = g), (e.method = "throw"), (e.arg = A.arg));
              }
            };
          }
          function j(n, r) {
            var e = r.method,
              o = n.iterator[e];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === e &&
                  n.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  j(n, r),
                  "throw" === r.method)) ||
                  ("return" !== e &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + e + "' method"
                    )))),
                y
              );
            var a = p(o, n.iterator, r.arg);
            if ("throw" === a.type)
              return (
                (r.method = "throw"), (r.arg = a.arg), (r.delegate = null), y
              );
            var i = a.arg;
            return i
              ? i.done
                ? ((r[n.resultName] = i.value),
                  (r.next = n.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : i
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function T(n) {
            var r = { tryLoc: n[0] };
            1 in n && (r.catchLoc = n[1]),
              2 in n && ((r.finallyLoc = n[2]), (r.afterLoc = n[3])),
              this.tryEntries.push(r);
          }
          function O(n) {
            var r = n.completion || {};
            (r.type = "normal"), delete r.arg, (n.completion = r);
          }
          function I(n) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              n.forEach(T, this),
              this.reset(!0);
          }
          function M(r) {
            if (r || "" === r) {
              var e = r[s];
              if (e) return e.call(r);
              if ("function" == typeof r.next) return r;
              if (!isNaN(r.length)) {
                var o = -1,
                  i = function n() {
                    for (; ++o < r.length; )
                      if (a.call(r, o))
                        return (n.value = r[o]), (n.done = !1), n;
                    return (n.value = t), (n.done = !0), n;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(n(r) + " is not iterable");
          }
          return (
            (E.prototype = C),
            i(B, "constructor", { value: C, configurable: !0 }),
            i(C, "constructor", { value: E, configurable: !0 }),
            (E.displayName = l(C, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (n) {
              var r = "function" == typeof n && n.constructor;
              return (
                !!r &&
                (r === E || "GeneratorFunction" === (r.displayName || r.name))
              );
            }),
            (e.mark = function (n) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(n, C)
                  : ((n.__proto__ = C), l(n, u, "GeneratorFunction")),
                (n.prototype = Object.create(B)),
                n
              );
            }),
            (e.awrap = function (n) {
              return { __await: n };
            }),
            k(S.prototype),
            l(S.prototype, A, function () {
              return this;
            }),
            (e.AsyncIterator = S),
            (e.async = function (n, r, t, o, a) {
              void 0 === a && (a = Promise);
              var i = new S(f(n, r, t, o), a);
              return e.isGeneratorFunction(r)
                ? i
                : i.next().then(function (n) {
                    return n.done ? n.value : i.next();
                  });
            }),
            k(B),
            l(B, u, "Generator"),
            l(B, s, function () {
              return this;
            }),
            l(B, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (n) {
              var r = Object(n),
                t = [];
              for (var e in r) t.push(e);
              return (
                t.reverse(),
                function n() {
                  for (; t.length; ) {
                    var e = t.pop();
                    if (e in r) return (n.value = e), (n.done = !1), n;
                  }
                  return (n.done = !0), n;
                }
              );
            }),
            (e.values = M),
            (I.prototype = {
              constructor: I,
              reset: function (n) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(O),
                  !n)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      a.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function () {
                this.done = !0;
                var n = this.tryEntries[0].completion;
                if ("throw" === n.type) throw n.arg;
                return this.rval;
              },
              dispatchException: function (n) {
                if (this.done) throw n;
                var r = this;
                function e(e, o) {
                  return (
                    (c.type = "throw"),
                    (c.arg = n),
                    (r.next = e),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    c = i.completion;
                  if ("root" === i.tryLoc) return e("end");
                  if (i.tryLoc <= this.prev) {
                    var s = a.call(i, "catchLoc"),
                      A = a.call(i, "finallyLoc");
                    if (s && A) {
                      if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return e(i.finallyLoc);
                    } else if (s) {
                      if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                    } else {
                      if (!A)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return e(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (n, r) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var e = this.tryEntries[t];
                  if (
                    e.tryLoc <= this.prev &&
                    a.call(e, "finallyLoc") &&
                    this.prev < e.finallyLoc
                  ) {
                    var o = e;
                    break;
                  }
                }
                o &&
                  ("break" === n || "continue" === n) &&
                  o.tryLoc <= r &&
                  r <= o.finallyLoc &&
                  (o = null);
                var i = o ? o.completion : {};
                return (
                  (i.type = n),
                  (i.arg = r),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), y)
                    : this.complete(i)
                );
              },
              complete: function (n, r) {
                if ("throw" === n.type) throw n.arg;
                return (
                  "break" === n.type || "continue" === n.type
                    ? (this.next = n.arg)
                    : "return" === n.type
                    ? ((this.rval = this.arg = n.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === n.type && r && (this.next = r),
                  y
                );
              },
              finish: function (n) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var t = this.tryEntries[r];
                  if (t.finallyLoc === n)
                    return this.complete(t.completion, t.afterLoc), O(t), y;
                }
              },
              catch: function (n) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var t = this.tryEntries[r];
                  if (t.tryLoc === n) {
                    var e = t.completion;
                    if ("throw" === e.type) {
                      var o = e.arg;
                      O(t);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (n, r, e) {
                return (
                  (this.delegate = {
                    iterator: M(n),
                    resultName: r,
                    nextLoc: e,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function t(n, r, t, e, o, a, i) {
          try {
            var c = n[a](i),
              s = c.value;
          } catch (n) {
            return void t(n);
          }
          c.done ? r(s) : Promise.resolve(s).then(e, o);
        }
        function e(n) {
          return function () {
            var r = this,
              e = arguments;
            return new Promise(function (o, a) {
              var i = n.apply(r, e);
              function c(n) {
                t(i, o, a, c, s, "next", n);
              }
              function s(n) {
                t(i, o, a, c, s, "throw", n);
              }
              c(void 0);
            });
          };
        }
        var o = document.querySelector("#city-input"),
          a = document.querySelector("#search"),
          i = document.querySelector("#city"),
          c = document.querySelector("#temperature span"),
          s = document.querySelector("#description"),
          A = document.querySelector("#weather-icon"),
          u = document.querySelector("#humidity span"),
          l = document.querySelector("#wind span"),
          f = document.querySelector("#weather-data"),
          p = (function () {
            var n = e(
              r().mark(function n(t) {
                var e, o, a;
                return r().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (e =
                            "https://api.openweathermap.org/data/2.5/weather?q="
                              .concat(t, "&units=metric&appid=")
                              .concat(
                                "d5a8191e9af72488e03633c1f84380a7",
                                "&lang=pt_br"
                              )),
                          (n.next = 3),
                          fetch(e)
                        );
                      case 3:
                        return (o = n.sent), (n.next = 6), o.json();
                      case 6:
                        return (a = n.sent), n.abrupt("return", a);
                      case 8:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
            return function (r) {
              return n.apply(this, arguments);
            };
          })(),
          d = (function () {
            var n = e(
              r().mark(function n(t) {
                var e;
                return r().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), p(t);
                      case 2:
                        (e = n.sent),
                          (i.innerText = e.name),
                          (c.innerText = "".concat(parseInt(e.main.temp), "°")),
                          (s.innerText = e.weather[0].description),
                          A.setAttribute(
                            "src",
                            "http://openweathermap.org/img/wn/".concat(
                              e.weather[0].icon,
                              ".png"
                            )
                          ),
                          (u.innerText = "".concat(e.main.humidity, "%")),
                          (l.innerText = "".concat(e.wind.speed, "km/h")),
                          f.classList.remove("hide");
                      case 10:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
            return function (r) {
              return n.apply(this, arguments);
            };
          })();
        a.addEventListener("click", function (n) {
          n.preventDefault();
          var r = o.value,
            t = document.querySelector("#warn");
          "" === r.trim()
            ? (t.innerText = "Por favor, escreva alguma coisa!")
            : ((t.innerText = ""), d(r));
        }),
          o.addEventListener("keyup", function (n) {
            var r = document.querySelector("#warn");
            if ("Enter" === n.code) {
              var t = n.target.value;
              "" === t.trim()
                ? (r.innerText = "Por favor, escreva alguma coisa!")
                : ((r.innerText = ""), d(t));
            }
          });
      },
      122: (n, r, t) => {
        "use strict";
        t.d(r, { Z: () => c });
        var e = t(537),
          o = t.n(e),
          a = t(645),
          i = t.n(a)()(o());
        i.push([
          n.id,
          "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap);",
        ]),
          i.push([
            n.id,
            ":root {\n  --primary-color: rgb(12, 55, 184);\n  --primary-color-darker: rgb(2, 16, 52);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-position: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.hide {\n  display: none;\n}\n\n.container {\n  background-color: rgba(60, 89, 114, 0.541);\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  padding: 2rem;\n  width: 40%;\n  color: #ffffff;\n  border-radius: 1rem;\n}\n\n.logo{\n    position: fixed;\n    bottom: 0;\n    top: 20px;\n    display: flex;\n    width: 15%;\n    padding: 10px;\n    margin: 15px;\n}\n.nameLogo{\n  color: black;\n}\n\n/*FORM*/\n\n.form h3 {\n  margin-bottom: 1rem;\n  text-align: center;\n}\n\n.form-input-container {\n  display: flex;\n}\n\n.form input {\n  padding: 0.8rem;\n  width: 50%;\n  border: none;\n  flex: 1;\n  border-radius: 4px;\n}\n\n.form button {\n  padding: 0.8rem;\n  min-width: 50px;\n  margin-left: 8px;\n  background-color: #5274da;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\nspan#warn {\n  color: yellowgreen;\n}\n\n/*CLIMA*/\n\n#weather-data {\n  color: #fff;\n  text-align: left;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n#weather-data h2 {\n  margin-bottom: 0.6rem;\n}\n\n#weather-data h2 i {\n  font-size: 1rem;\n}\n\n#weather-data span {\n  font-size: 2rem;\n}\n\n#currentDate {\n  font-size: 1.5rem;\n}\n\n#country {\n  height: 15px;\n}\n\n#description-container {\n  border-left: 1px solid #fff;\n  margin: 0.6rem;\n  padding: 0 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#description {\n  font-weight: bold;\n  text-transform: capitalize;\n  font-size: 1.5rem;\n}\n\n#details-container {\n  text-align: left;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#details-container #humidity {\n  border-right: 1px solid #fff;\n  margin: 0.6rem;\n  padding: 0.6rem;\n}\n\n#details-container #temperature {\n  border-right: 1px solid #fff;\n  padding: 0.6rem;\n  font-size: 2em;\n}\n\n.hide {\n  display: none !important;\n}\n\n#social-links {\n  text-align: right;\n  position: fixed;\n  top: 0;\n  right: 0;\n  display: flex;\n  padding: 10px;\n  margin: 15px;\n}\n#social-links a {\n  padding: 10px;\n  font-size: 24px;\n  transition: background 0.2s;\n}\n#copy {\n  color: var(--primary-color-darker);\n  text-align: right;\n  position: fixed;\n  top: 35px;\n  right: 0;\n  display: flex;\n  padding: 10px;\n  margin: 15px 0px 5px;\n}\n",
            "",
            {
              version: 3,
              sources: ["webpack://./src/assets/css/style.css"],
              names: [],
              mappings:
                "AACA;EACE,iCAAiC;EACjC,sCAAsC;AACxC;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,0CAA0C;EAC1C,2CAA2C;EAC3C,gDAAgD;EAChD,aAAa;EACb,UAAU;EACV,cAAc;EACd,mBAAmB;AACrB;;AAEA;IACI,eAAe;IACf,SAAS;IACT,SAAS;IACT,aAAa;IACb,UAAU;IACV,aAAa;IACb,YAAY;AAChB;AACA;EACE,YAAY;AACd;;AAEA,OAAO;;AAEP;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,UAAU;EACV,YAAY;EACZ,OAAO;EACP,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,QAAQ;;AAER;EACE,WAAW;EACX,gBAAgB;EAChB,eAAe;EACf,SAAS;EACT,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,2BAA2B;EAC3B,cAAc;EACd,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,0BAA0B;EAC1B,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,4BAA4B;EAC5B,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,4BAA4B;EAC5B,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,MAAM;EACN,QAAQ;EACR,aAAa;EACb,aAAa;EACb,YAAY;AACd;AACA;EACE,aAAa;EACb,eAAe;EACf,2BAA2B;AAC7B;AACA;EACE,kCAAkC;EAClC,iBAAiB;EACjB,eAAe;EACf,SAAS;EACT,QAAQ;EACR,aAAa;EACb,aAAa;EACb,oBAAoB;AACtB",
              sourcesContent: [
                '@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");\r\n:root {\r\n  --primary-color: rgb(12, 55, 184);\r\n  --primary-color-darker: rgb(2, 16, 52);\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-position: 50%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.container {\r\n  background-color: rgba(60, 89, 114, 0.541);\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  padding: 2rem;\r\n  width: 40%;\r\n  color: #ffffff;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.logo{\r\n    position: fixed;\r\n    bottom: 0;\r\n    top: 20px;\r\n    display: flex;\r\n    width: 15%;\r\n    padding: 10px;\r\n    margin: 15px;\r\n}\r\n.nameLogo{\r\n  color: black;\r\n}\r\n\r\n/*FORM*/\r\n\r\n.form h3 {\r\n  margin-bottom: 1rem;\r\n  text-align: center;\r\n}\r\n\r\n.form-input-container {\r\n  display: flex;\r\n}\r\n\r\n.form input {\r\n  padding: 0.8rem;\r\n  width: 50%;\r\n  border: none;\r\n  flex: 1;\r\n  border-radius: 4px;\r\n}\r\n\r\n.form button {\r\n  padding: 0.8rem;\r\n  min-width: 50px;\r\n  margin-left: 8px;\r\n  background-color: #5274da;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\nspan#warn {\r\n  color: yellowgreen;\r\n}\r\n\r\n/*CLIMA*/\r\n\r\n#weather-data {\r\n  color: #fff;\r\n  text-align: left;\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n\r\n#weather-data h2 {\r\n  margin-bottom: 0.6rem;\r\n}\r\n\r\n#weather-data h2 i {\r\n  font-size: 1rem;\r\n}\r\n\r\n#weather-data span {\r\n  font-size: 2rem;\r\n}\r\n\r\n#currentDate {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n#country {\r\n  height: 15px;\r\n}\r\n\r\n#description-container {\r\n  border-left: 1px solid #fff;\r\n  margin: 0.6rem;\r\n  padding: 0 10px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#description {\r\n  font-weight: bold;\r\n  text-transform: capitalize;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n#details-container {\r\n  text-align: left;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#details-container #humidity {\r\n  border-right: 1px solid #fff;\r\n  margin: 0.6rem;\r\n  padding: 0.6rem;\r\n}\r\n\r\n#details-container #temperature {\r\n  border-right: 1px solid #fff;\r\n  padding: 0.6rem;\r\n  font-size: 2em;\r\n}\r\n\r\n.hide {\r\n  display: none !important;\r\n}\r\n\r\n#social-links {\r\n  text-align: right;\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  display: flex;\r\n  padding: 10px;\r\n  margin: 15px;\r\n}\r\n#social-links a {\r\n  padding: 10px;\r\n  font-size: 24px;\r\n  transition: background 0.2s;\r\n}\r\n#copy {\r\n  color: var(--primary-color-darker);\r\n  text-align: right;\r\n  position: fixed;\r\n  top: 35px;\r\n  right: 0;\r\n  display: flex;\r\n  padding: 10px;\r\n  margin: 15px 0px 5px;\r\n}\r\n',
              ],
              sourceRoot: "",
            },
          ]);
        const c = i;
      },
      645: (n) => {
        "use strict";
        n.exports = function (n) {
          var r = [];
          return (
            (r.toString = function () {
              return this.map(function (r) {
                var t = "",
                  e = void 0 !== r[5];
                return (
                  r[4] && (t += "@supports (".concat(r[4], ") {")),
                  r[2] && (t += "@media ".concat(r[2], " {")),
                  e &&
                    (t += "@layer".concat(
                      r[5].length > 0 ? " ".concat(r[5]) : "",
                      " {"
                    )),
                  (t += n(r)),
                  e && (t += "}"),
                  r[2] && (t += "}"),
                  r[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (r.i = function (n, t, e, o, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (e)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var A = 0; A < n.length; A++) {
                var u = [].concat(n[A]);
                (e && i[u[0]]) ||
                  (void 0 !== a &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = a)),
                  t &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = t))
                      : (u[2] = t)),
                  o &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = o))
                      : (u[4] = "".concat(o))),
                  r.push(u));
              }
            }),
            r
          );
        };
      },
      537: (n) => {
        "use strict";
        n.exports = function (n) {
          var r = n[1],
            t = n[3];
          if (!t) return r;
          if ("function" == typeof btoa) {
            var e = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              o =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  e
                ),
              a = "/*# ".concat(o, " */");
            return [r].concat([a]).join("\n");
          }
          return [r].join("\n");
        };
      },
      379: (n) => {
        "use strict";
        var r = [];
        function t(n) {
          for (var t = -1, e = 0; e < r.length; e++)
            if (r[e].identifier === n) {
              t = e;
              break;
            }
          return t;
        }
        function e(n, e) {
          for (var a = {}, i = [], c = 0; c < n.length; c++) {
            var s = n[c],
              A = e.base ? s[0] + e.base : s[0],
              u = a[A] || 0,
              l = "".concat(A, " ").concat(u);
            a[A] = u + 1;
            var f = t(l),
              p = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== f) r[f].references++, r[f].updater(p);
            else {
              var d = o(p, e);
              (e.byIndex = c),
                r.splice(c, 0, { identifier: l, updater: d, references: 1 });
            }
            i.push(l);
          }
          return i;
        }
        function o(n, r) {
          var t = r.domAPI(r);
          return (
            t.update(n),
            function (r) {
              if (r) {
                if (
                  r.css === n.css &&
                  r.media === n.media &&
                  r.sourceMap === n.sourceMap &&
                  r.supports === n.supports &&
                  r.layer === n.layer
                )
                  return;
                t.update((n = r));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var a = e((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < a.length; i++) {
              var c = t(a[i]);
              r[c].references--;
            }
            for (var s = e(n, o), A = 0; A < a.length; A++) {
              var u = t(a[A]);
              0 === r[u].references && (r[u].updater(), r.splice(u, 1));
            }
            a = s;
          };
        };
      },
      569: (n) => {
        "use strict";
        var r = {};
        n.exports = function (n, t) {
          var e = (function (n) {
            if (void 0 === r[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              r[n] = t;
            }
            return r[n];
          })(n);
          if (!e)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          e.appendChild(t);
        };
      },
      216: (n) => {
        "use strict";
        n.exports = function (n) {
          var r = document.createElement("style");
          return n.setAttributes(r, n.attributes), n.insert(r, n.options), r;
        };
      },
      565: (n, r, t) => {
        "use strict";
        n.exports = function (n) {
          var r = t.nc;
          r && n.setAttribute("nonce", r);
        };
      },
      795: (n) => {
        "use strict";
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var r = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, r, t) {
                var e = "";
                t.supports && (e += "@supports (".concat(t.supports, ") {")),
                  t.media && (e += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (e += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (e += t.css),
                  o && (e += "}"),
                  t.media && (e += "}"),
                  t.supports && (e += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (e +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  r.styleTagTransform(e, n, r.options);
              })(r, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(r);
            },
          };
        };
      },
      589: (n) => {
        "use strict";
        n.exports = function (n, r) {
          if (r.styleSheet) r.styleSheet.cssText = n;
          else {
            for (; r.firstChild; ) r.removeChild(r.firstChild);
            r.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    r = {};
  function t(e) {
    var o = r[e];
    if (void 0 !== o) return o.exports;
    var a = (r[e] = { id: e, exports: {} });
    return n[e](a, a.exports, t), a.exports;
  }
  (t.n = (n) => {
    var r = n && n.__esModule ? () => n.default : () => n;
    return t.d(r, { a: r }), r;
  }),
    (t.d = (n, r) => {
      for (var e in r)
        t.o(r, e) &&
          !t.o(n, e) &&
          Object.defineProperty(n, e, { enumerable: !0, get: r[e] });
    }),
    (t.o = (n, r) => Object.prototype.hasOwnProperty.call(n, r)),
    (t.nc = void 0),
    (() => {
      "use strict";
      t(644), t(494), t(253);
      var n = t(379),
        r = t.n(n),
        e = t(795),
        o = t.n(e),
        a = t(569),
        i = t.n(a),
        c = t(565),
        s = t.n(c),
        A = t(216),
        u = t.n(A),
        l = t(589),
        f = t.n(l),
        p = t(122),
        d = {};
      (d.styleTagTransform = f()),
        (d.setAttributes = s()),
        (d.insert = i().bind(null, "head")),
        (d.domAPI = o()),
        (d.insertStyleElement = u()),
        r()(p.Z, d),
        p.Z && p.Z.locals && p.Z.locals;
    })();
})();
//# sourceMappingURL=bundle.js.map
