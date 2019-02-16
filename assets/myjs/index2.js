var MTVNPlayer = window.MTVNPlayer = window.MTVNPlayer || {};
MTVNPlayer.version = "2.11.7", MTVNPlayer.build = "06/03/2014 01:58:57 PM",
    function(e, t) {
        var n = e.MTVNPlayer = e.MTVNPlayer || {},
            r = t(e);
        n.require || r.extend(n)
    }(this, function(e) {
        var t = e.yepnope;
        (function() {
            (function(e, t, n) {
                function r(e) {
                    return !e || "loaded" == e || "complete" == e || "uninitialized" == e
                }

                function i(e, n, i, a, l, u) {
                    var s, c, d = t.createElement("script");
                    a = a || f.errorTimeout, d.src = e;
                    for (c in i) d.setAttribute(c, i[c]);
                    n = u ? o : n || m, d.onreadystatechange = d.onload = function() {
                        !s && r(d.readyState) && (s = 1, n(), d.onload = d.onreadystatechange = null)
                    }, p(function() {
                        s || (s = 1, n(1))
                    }, a), O(), l ? d.onload() : h.parentNode.insertBefore(d, h)
                }

                function a(e, t, n, r, i, a) {
                    var o, l, u, s = document.createElement("link"),
                        c = function() {
                            l || (l = 1, s.removeAttribute("id"), setTimeout(t, 0))
                        },
                        d = "yn" + +new Date;
                    t = a ? f.executeStack : t || function() {}, r = r || f.errorTimeout, s.href = e, s.rel = "stylesheet", s.type = "text/css", s.id = d;
                    for (u in n) s.setAttribute(u, n[u]);
                    if (!i) {
                        o = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0], o.parentNode.insertBefore(s, o), s.onload = c;
                        var p = function() {
                            try {
                                for (var e = document.styleSheets, t = 0, n = e.length; n > t; t++)
                                    if (e[t].ownerNode.id == d && e[t].cssRules.length) return c();
                                throw Error()
                            } catch (r) {
                                setTimeout(p, 20)
                            }
                        };
                        p()
                    }
                }

                function o() {
                    var e = g.shift();
                    y = 1, e ? e.t ? p(function() {
                        ("c" == e.t ? f.injectCss : f.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
                    }, 0) : (e(), o()) : y = 0
                }

                function l(e, n, i, a, l, u, s) {
                    function c(t) {
                        if (!v && r(d.readyState) && (E.r = v = 1, !y && o(), t)) {
                            "img" != e && p(function() {
                                b.removeChild(d)
                            }, 50);
                            for (var i in I[n]) I[n].hasOwnProperty(i) && I[n][i].onload();
                            d.onload = d.onreadystatechange = null
                        }
                    }
                    s = s || f.errorTimeout;
                    var d = t.createElement(e),
                        v = 0,
                        m = 0,
                        E = {
                            t: i,
                            s: n,
                            e: l,
                            a: u,
                            x: s
                        };
                    1 === I[n] && (m = 1, I[n] = []), "object" == e ? (d.data = n, d.setAttribute("type", "text/css")) : (d.src = n, d.type = e), d.width = d.height = "0", d.onerror = d.onload = d.onreadystatechange = function() {
                        c.call(this, m)
                    }, g.splice(a, 0, E), "img" != e && (m || 2 === I[n] ? (O(), b.insertBefore(d, w ? null : h), p(c, s)) : I[n].push(d))
                }

                function u(e, t, n, r, i) {
                    return y = 0, t = t || "j", C(e) ? l("c" == t ? T : P, e, t, this.i++, n, r, i) : (g.splice(this.i++, 0, e), 1 == g.length && o()), this
                }

                function s() {
                    var e = f;
                    return e.loader = {
                        load: u,
                        i: 0
                    }, e
                }
                var c, f, d = t.documentElement,
                    p = e.setTimeout,
                    h = t.getElementsByTagName("script")[0],
                    v = {}.toString,
                    g = [],
                    y = 0,
                    m = function() {},
                    E = "MozAppearance" in d.style,
                    w = E && !!t.createRange().compareNode,
                    b = w ? d : h.parentNode,
                    A = e.opera && "[object Opera]" == v.call(e.opera),
                    x = !!t.attachEvent && !A,
                    P = E ? "object" : x ? "script" : "img",
                    T = x ? "script" : P,
                    N = Array.isArray || function(e) {
                        return "[object Array]" == v.call(e)
                    },
                    S = function(e) {
                        return Object(e) === e
                    },
                    C = function(e) {
                        return "string" == typeof e
                    },
                    M = function(e) {
                        return "[object Function]" == v.call(e)
                    },
                    O = function() {
                        h && h.parentNode || (h = t.getElementsByTagName("script")[0])
                    },
                    _ = [],
                    I = {},
                    L = {
                        timeout: function(e, t) {
                            return t.length && (e.timeout = t[0]), e
                        }
                    };
                f = function(e) {
                    function t(e) {
                        var t, n, r, i = e.split("!"),
                            a = _.length,
                            o = i.pop(),
                            l = i.length,
                            u = {
                                url: o,
                                origUrl: o,
                                prefixes: i
                            };
                        for (n = 0; l > n; n++) r = i[n].split("="), t = L[r.shift()], t && (u = t(u, r));
                        for (n = 0; a > n; n++) u = _[n](u);
                        return u
                    }

                    function r(e) {
                        var t = e.split("?")[0];
                        return t.substr(t.lastIndexOf(".") + 1)
                    }

                    function i(e, i, a, o, l) {
                        var u = t(e),
                            c = u.autoCallback;
                        return r(u.url), u.bypass ? void 0 : (i && (i = M(i) ? i : i[e] || i[o] || i[e.split("/").pop().split("?")[0]]), u.instead ? u.instead(e, i, a, o, l) : (I[u.url] && u.reexecute !== !0 ? u.noexec = !0 : I[u.url] = 1, e && a.load(u.url, u.forceCSS || !u.forceJS && "css" == r(u.url) ? "c" : n, u.noexec, u.attrs, u.timeout), (M(i) || M(c)) && a.load(function() {
                            s(), i && i(u.origUrl, l, o), c && c(u.origUrl, l, o), I[u.url] = 2
                        }), void 0))
                    }

                    function a(e, t) {
                        function n(e, n) {
                            if ("" === e || e) {
                                if (C(e)) n || (s = function() {
                                    var e = [].slice.call(arguments);
                                    c.apply(this, e), f()
                                }), i(e, s, t, 0, o);
                                else if (S(e)) {
                                    r = function() {
                                        var t, n = 0;
                                        for (t in e) e.hasOwnProperty(t) && n++;
                                        return n
                                    }();
                                    for (a in e) e.hasOwnProperty(a) && (n || --r || (M(s) ? s = function() {
                                        var e = [].slice.call(arguments);
                                        c.apply(this, e), f()
                                    } : s[a] = function(e) {
                                        return function() {
                                            var t = [].slice.call(arguments);
                                            e && e.apply(this, t), f()
                                        }
                                    }(c[a])), i(e[a], s, t, a, o))
                                }
                            } else !n && f()
                        }
                        var r, a, o = !!e.test,
                            l = o ? e.yep : e.nope,
                            u = e.load || e.both,
                            s = e.callback || m,
                            c = s,
                            f = e.complete || m;
                        n(l, !!u || !!e.complete), u && n(u), !u && !!e.complete && n("")
                    }
                    var o, l, u = this.yepnope.loader;
                    if (C(e)) i(e, 0, u, 0);
                    else if (N(e))
                        for (o = 0; e.length > o; o++) l = e[o], C(l) ? i(l, 0, u, 0) : N(l) ? f(l) : S(l) && a(l, u);
                    else S(e) && a(e, u)
                }, f.addPrefix = function(e, t) {
                    L[e] = t
                }, f.addFilter = function(e) {
                    _.push(e)
                }, f.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", c = function() {
                    t.removeEventListener("DOMContentLoaded", c, 0), t.readyState = "complete"
                }, 0)), e.yepnope = s(), e.yepnope.executeStack = o, e.yepnope.injectJs = i, e.yepnope.injectCss = a
            })(this, document)
        }).apply(e);
        var n = e.yepnope;
        e.yepnope = t;
        var r = function() {
            r.extend(this)
        };
        return r.extend = function(t) {
            var r = function() {
                    var e = [].slice;
                    return {
                        isFunction: function(e) {
                            return "function" == typeof e
                        },
                        isString: function(e) {
                            return "[object String]" === Object.prototype.toString.call(e)
                        },
                        isArray: function(e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        },
                        after: function(e, t) {
                            return 0 >= e ? t() : function() {
                                return 1 > --e ? t.apply(this, arguments) : void 0
                            }
                        },
                        extend: function(t) {
                            var n = e.call(arguments, 1);
                            for (var r in n)
                                if (n.hasOwnProperty(r)) {
                                    var i = n[r];
                                    if (i)
                                        for (var a in i) i.hasOwnProperty(a) && (t[a] = i[a])
                                }
                            return t
                        },
                        partial: function(t) {
                            var n = e.call(arguments, 1);
                            return function() {
                                return t.apply(this, n.concat(e.call(arguments)))
                            }
                        }
                    }
                }(),
                i = !1,
                a = {
                    yepnope: n,
                    "pacakge-manager-info": {
                        version: "0.10.0",
                        build: "Mon Jun 02 2014 14:49:50"
                    }
                },
                o = {},
                l = {},
                u = [],
                s = {},
                c = {},
                f = function(e) {
                    if (r.isArray(e)) {
                        for (var t = e.length - 1; t >= 0; t--) {
                            var n = e[t];
                            r.isString(n) && (e[t] = n.toLowerCase())
                        }
                        return e
                    }
                    for (var i in e)
                        if (e.hasOwnProperty(i)) {
                            var a = e[i];
                            delete e[i], e[i.toLowerCase()] = a
                        }
                    return e
                },
                d = function(e) {
                    return -1 !== e.indexOf(".css") ? c[e] : !1
                },
                p = function(e, t) {
                    if (!r.isArray(e) || !t) {
                        if (r.isString(e) && (e = e.toLowerCase()), a[e]) r.isFunction(t) && E(e, t);
                        else {
                            if (!r.isFunction(t)) throw Error("PJS PackageManager: package " + e + " not found.");
                            E(e, t)
                        }
                        return a[e]
                    }
                    g(f(e), t)
                },
                h = function(e) {
                    var t = [];
                    for (var n in e) A(n) && t.push(p(n));
                    return t
                },
                v = function(e) {
                    var t = s[e];
                    if (t)
                        for (; t.length > 0;) {
                            var n = t.pop();
                            A(e) && n(p(e))
                        }
                },
                g = function(e, t) {
                    var n = function() {
                            var n = [];
                            for (var r in e)
                                if (e.hasOwnProperty(r)) {
                                    var i = e[r];
                                    n.push(a[i])
                                }
                            t.apply(null, n)
                        },
                        i = r.after(e.length, n);
                    for (var o in e)
                        if (e.hasOwnProperty(o)) {
                            var l = e[o];
                            A(l) ? i() : p(e[o], i)
                        }
                },
                y = function(t, n, r, i, a) {
                    if (t = t || a, !e[t]) throw "mtvn-package-manager: Can't shim \"" + t + '", not found in global scope.';
                    b(a, e[t]), n ? e[a] = e[t] : e[t] = o[t]
                },
                m = function(t, a) {
                    function l(e, t) {
                        s.load[t] = e, c[e] = !0, p = !0
                    }
                    if (i) return u.push(function() {
                        m(t, a)
                    }), void 0;
                    t = f(t), i = !0;
                    var s = {
                            load: {},
                            callback: {},
                            complete: function() {
                                i = !1, a && a.apply(null, h(t)), u.length > 0 && u.shift()();
                                for (var e in t) t.hasOwnProperty(e) && v(e)
                            }
                        },
                        p = !1;
                    for (var g in t)
                        if (t.hasOwnProperty(g)) {
                            var E = t[g],
                                w = E.url || E.src || E;
                            if (!A(g) && !d(w)) {
                                if (E.shim) {
                                    var b = E.exports || g;
                                    o[b] = e[b], s.callback[g] = r.partial(y, E.exports, E.global)
                                }
                                l(w, g)
                            }
                            E.css && !d(E.css) && l(E.css, g + "-css")
                        }
                    p ? n.call({
                        yepnope: n
                    }, s) : s.complete()
                },
                E = function(e, t) {
                    if (A(e)) t(p(e));
                    else if (s[e] ? s[e].push(t) : s[e] = [t], l[e]) {
                        var n = {};
                        n[e] = l[e], m(n)
                    }
                },
                w = function(e) {
                    r.extend(l, f(e))
                },
                b = function(e, t) {
                    r.isString(e) && (e = e.toLowerCase()), t ? (a[e] = t, v(e)) : delete a[e]
                },
                A = function(e) {
                    return void 0 !== a[e] && null !== a[e]
                },
                x = function(e) {
                    var t = [];
                    for (var n in a)
                        if (a.hasOwnProperty(n)) {
                            var r = n;
                            e || (a[n].version && (r += " " + a[n].version), a[n].build && (r += " built:" + a[n].build)), t.push(r)
                        }
                    return t
                };
            n.errorTimeout = 18e4, r.extend(t, {
                require: p,
                provide: b,
                has: A,
                loadPackages: m,
                listPackages: x,
                configurePackages: w
            })
        }, r
    }),
    function() {
        if (!MTVNPlayer.Player) {
            var e = MTVNPlayer.require,
                t = MTVNPlayer.provide,
                n = window._mtvnPlayerReady = window._mtvnPlayerReady || [];
            MTVNPlayer.module || (MTVNPlayer.module = function() {
                    var e = {};
                    return function(t) {
                        return e[t] ? e[t] : (e[t] = {}, e[t])
                    }
                }()),
                function(e) {
                    var t = e.yepnope;
                    MTVNPlayer.noConflict = function() {
                        e.yepnope = t
                    }
                }(window),
                function() {
                    (function(e) {
                        e.getSWFObject = function() {
                            if (!window.MTVNPlayer.swfobject) {
                                var t = function() {
                                    function e() {
                                        if (!G) {
                                            try {
                                                var e = R.getElementsByTagName("body")[0].appendChild(y("span"));
                                                e.parentNode.removeChild(e)
                                            } catch (t) {
                                                return
                                            }
                                            G = !0;
                                            for (var n = B.length, r = 0; n > r; r++) B[r]()
                                        }
                                    }

                                    function n(e) {
                                        G ? e() : B[B.length] = e
                                    }

                                    function r(e) {
                                        if (typeof k.addEventListener != M) k.addEventListener("load", e, !1);
                                        else if (typeof R.addEventListener != M) R.addEventListener("load", e, !1);
                                        else if (typeof k.attachEvent != M) m(k, "onload", e);
                                        else if ("function" == typeof k.onload) {
                                            var t = k.onload;
                                            k.onload = function() {
                                                t(), e()
                                            }
                                        } else k.onload = e
                                    }

                                    function i() {
                                        D ? a() : o()
                                    }

                                    function a() {
                                        var e = R.getElementsByTagName("body")[0],
                                            t = y(O);
                                        t.setAttribute("type", L);
                                        var n = e.appendChild(t);
                                        if (n) {
                                            var r = 0;
                                            (function() {
                                                if (typeof n.GetVariable != M) {
                                                    var i = n.GetVariable("$version");
                                                    i && (i = i.split(" ")[1].split(","), Y.pv = [parseInt(i[0], 10), parseInt(i[1], 10), parseInt(i[2], 10)])
                                                } else if (10 > r) return r++, setTimeout(arguments.callee, 10), void 0;
                                                e.removeChild(t), n = null, o()
                                            })()
                                        } else o()
                                    }

                                    function o() {
                                        var e = U.length;
                                        if (e > 0)
                                            for (var t = 0; e > t; t++) {
                                                var n = U[t].id,
                                                    r = U[t].callbackFn,
                                                    i = {
                                                        success: !1,
                                                        id: n
                                                    };
                                                if (Y.pv[0] > 0) {
                                                    var a = g(n);
                                                    if (a)
                                                        if (!E(U[t].swfVersion) || Y.wk && 312 > Y.wk)
                                                            if (U[t].expressInstall && u()) {
                                                                var o = {};
                                                                o.data = U[t].expressInstall, o.width = a.getAttribute("width") || "0", o.height = a.getAttribute("height") || "0", a.getAttribute("class") && (o.styleclass = a.getAttribute("class")), a.getAttribute("align") && (o.align = a.getAttribute("align"));
                                                                for (var f = {}, d = a.getElementsByTagName("param"), p = d.length, h = 0; p > h; h++) "movie" != d[h].getAttribute("name").toLowerCase() && (f[d[h].getAttribute("name")] = d[h].getAttribute("value"));
                                                                s(o, f, n, r)
                                                            } else c(a), r && r(i);
                                                    else b(n, !0), r && (i.success = !0, i.ref = l(n), r(i))
                                                } else if (b(n, !0), r) {
                                                    var v = l(n);
                                                    v && typeof v.SetVariable != M && (i.success = !0, i.ref = v), r(i)
                                                }
                                            }
                                    }

                                    function l(e) {
                                        var t = null,
                                            n = g(e);
                                        if (n && "OBJECT" == n.nodeName)
                                            if (typeof n.SetVariable != M) t = n;
                                            else {
                                                var r = n.getElementsByTagName(O)[0];
                                                r && (t = r)
                                            }
                                        return t
                                    }

                                    function u() {
                                        return !W && E("6.0.65") && (Y.win || Y.mac) && !(Y.wk && 312 > Y.wk)
                                    }

                                    function s(e, t, n, r) {
                                        W = !0, T = r || null, N = {
                                            success: !1,
                                            id: n
                                        };
                                        var i = g(n);
                                        if (i) {
                                            "OBJECT" == i.nodeName ? (x = f(i), P = null) : (x = i, P = n), e.id = j, (typeof e.width == M || !/%$/.test(e.width) && 310 > parseInt(e.width, 10)) && (e.width = "310"), (typeof e.height == M || !/%$/.test(e.height) && 137 > parseInt(e.height, 10)) && (e.height = "137"), R.title = R.title.slice(0, 47) + " - Flash Player Installation";
                                            var a = Y.ie && Y.win ? "ActiveX" : "PlugIn",
                                                o = "MMredirectURL=" + ("" + k.location).replace(/&/g, "%26") + "&MMplayerType=" + a + "&MMdoctitle=" + R.title;
                                            if (typeof t.flashvars != M ? t.flashvars += "&" + o : t.flashvars = o, Y.ie && Y.win && 4 != i.readyState) {
                                                var l = y("div");
                                                n += "SWFObjectNew", l.setAttribute("id", n), i.parentNode.insertBefore(l, i), i.style.display = "none",
                                                    function() {
                                                        4 == i.readyState ? i.parentNode.removeChild(i) : setTimeout(arguments.callee, 10)
                                                    }()
                                            }
                                            d(e, t, n)
                                        }
                                    }

                                    function c(e) {
                                        if (Y.ie && Y.win && 4 != e.readyState) {
                                            var t = y("div");
                                            e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(f(e), t), e.style.display = "none",
                                                function() {
                                                    4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
                                                }()
                                        } else e.parentNode.replaceChild(f(e), e)
                                    }

                                    function f(e) {
                                        var t = y("div");
                                        if (Y.win && Y.ie) t.innerHTML = e.innerHTML;
                                        else {
                                            var n = e.getElementsByTagName(O)[0];
                                            if (n) {
                                                var r = n.childNodes;
                                                if (r)
                                                    for (var i = r.length, a = 0; i > a; a++) 1 == r[a].nodeType && "PARAM" == r[a].nodeName || 8 == r[a].nodeType || t.appendChild(r[a].cloneNode(!0))
                                            }
                                        }
                                        return t
                                    }

                                    function d(e, t, n) {
                                        var r, i = g(n);
                                        if (Y.wk && 312 > Y.wk) return r;
                                        if (i)
                                            if (typeof e.id == M && (e.id = n), Y.ie && Y.win) {
                                                var a = "";
                                                for (var o in e) e[o] != Object.prototype[o] && ("data" == o.toLowerCase() ? t.movie = e[o] : "styleclass" == o.toLowerCase() ? a += ' class="' + e[o] + '"' : "classid" != o.toLowerCase() && (a += " " + o + '="' + e[o] + '"'));
                                                var l = "";
                                                for (var u in t) t[u] != Object.prototype[u] && (l += '<param name="' + u + '" value="' + t[u] + '" />');
                                                i.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + a + ">" + l + "</object>", H[H.length] = e.id, r = g(e.id)
                                            } else {
                                                var s = y(O);
                                                s.setAttribute("type", L);
                                                for (var c in e) e[c] != Object.prototype[c] && ("styleclass" == c.toLowerCase() ? s.setAttribute("class", e[c]) : "classid" != c.toLowerCase() && s.setAttribute(c, e[c]));
                                                for (var f in t) t[f] != Object.prototype[f] && "movie" != f.toLowerCase() && p(s, f, t[f]);
                                                i.parentNode.replaceChild(s, i), r = s
                                            }
                                        return r
                                    }

                                    function p(e, t, n) {
                                        var r = y("param");
                                        r.setAttribute("name", t), r.setAttribute("value", n), e.appendChild(r)
                                    }

                                    function h(e) {
                                        var t = g(e);
                                        t && "OBJECT" == t.nodeName && (Y.ie && Y.win ? (t.style.display = "none", function() {
                                            4 == t.readyState ? v(e) : setTimeout(arguments.callee, 10)
                                        }()) : t.parentNode.removeChild(t))
                                    }

                                    function v(e) {
                                        var t = g(e);
                                        if (t) {
                                            for (var n in t) "function" == typeof t[n] && (t[n] = null);
                                            t.parentNode.removeChild(t)
                                        }
                                    }

                                    function g(e) {
                                        var t = null;
                                        try {
                                            t = R.getElementById(e)
                                        } catch (n) {}
                                        return t
                                    }

                                    function y(e) {
                                        return R.createElement(e)
                                    }

                                    function m(e, t, n) {
                                        e.attachEvent(t, n), $[$.length] = [e, t, n]
                                    }

                                    function E(e) {
                                        var t = Y.pv,
                                            n = e.split(".");
                                        return n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10) || 0, n[2] = parseInt(n[2], 10) || 0, t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? !0 : !1
                                    }

                                    function w(e, t, n, r) {
                                        if (!Y.ie || !Y.mac) {
                                            var i = R.getElementsByTagName("head")[0];
                                            if (i) {
                                                var a = n && "string" == typeof n ? n : "screen";
                                                if (r && (S = null, C = null), !S || C != a) {
                                                    var o = y("style");
                                                    o.setAttribute("type", "text/css"), o.setAttribute("media", a), S = i.appendChild(o), Y.ie && Y.win && typeof R.styleSheets != M && R.styleSheets.length > 0 && (S = R.styleSheets[R.styleSheets.length - 1]), C = a
                                                }
                                                Y.ie && Y.win ? S && typeof S.addRule == O && S.addRule(e, t) : S && typeof R.createTextNode != M && S.appendChild(R.createTextNode(e + " {" + t + "}"))
                                            }
                                        }
                                    }

                                    function b(e, t) {
                                        if (z) {
                                            var n = t ? "visible" : "hidden";
                                            G && g(e) ? g(e).style.visibility = n : w("#" + e, "visibility:" + n)
                                        }
                                    }

                                    function A(e) {
                                        var t = /[\\\"<>\.;]/,
                                            n = null != t.exec(e);
                                        return n && typeof encodeURIComponent != M ? encodeURIComponent(e) : e
                                    }
                                    var x, P, T, N, S, C, M = "undefined",
                                        O = "object",
                                        _ = "Shockwave Flash",
                                        I = "ShockwaveFlash.ShockwaveFlash",
                                        L = "application/x-shockwave-flash",
                                        j = "SWFObjectExprInst",
                                        F = "onreadystatechange",
                                        k = window,
                                        R = document,
                                        V = navigator,
                                        D = !1,
                                        B = [i],
                                        U = [],
                                        H = [],
                                        $ = [],
                                        G = !1,
                                        W = !1,
                                        z = !0,
                                        Y = function() {
                                            var e = typeof R.getElementById != M && typeof R.getElementsByTagName != M && typeof R.createElement != M,
                                                t = V.userAgent.toLowerCase(),
                                                n = V.platform.toLowerCase(),
                                                r = n ? /win/.test(n) : /win/.test(t),
                                                i = n ? /mac/.test(n) : /mac/.test(t),
                                                a = /webkit/.test(t) ? parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                                                o = !1,
                                                l = [0, 0, 0],
                                                u = null;
                                            if (typeof V.plugins != M && typeof V.plugins[_] == O) u = V.plugins[_].description, !u || typeof V.mimeTypes != M && V.mimeTypes[L] && !V.mimeTypes[L].enabledPlugin || (D = !0, o = !1, u = u.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), l[0] = parseInt(u.replace(/^(.*)\..*$/, "$1"), 10), l[1] = parseInt(u.replace(/^.*\.(.*)\s.*$/, "$1"), 10), l[2] = /[a-zA-Z]/.test(u) ? parseInt(u.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
                                            else if (typeof k.ActiveXObject != M) try {
                                                var s = new ActiveXObject(I);
                                                s && (u = s.GetVariable("$version"), u && (o = !0, u = u.split(" ")[1].split(","), l = [parseInt(u[0], 10), parseInt(u[1], 10), parseInt(u[2], 10)]))
                                            } catch (c) {}
                                            return {
                                                w3: e,
                                                pv: l,
                                                wk: a,
                                                ie: o,
                                                win: r,
                                                mac: i
                                            }
                                        }();
                                    return function() {
                                            Y.w3 && ((typeof R.readyState != M && "complete" == R.readyState || typeof R.readyState == M && (R.getElementsByTagName("body")[0] || R.body)) && e(), G || (typeof R.addEventListener != M && R.addEventListener("DOMContentLoaded", e, !1), Y.ie && Y.win && (R.attachEvent(F, function() {
                                                "complete" == R.readyState && (R.detachEvent(F, arguments.callee), e())
                                            }), k == top && function() {
                                                if (!G) {
                                                    try {
                                                        R.documentElement.doScroll("left")
                                                    } catch (t) {
                                                        return setTimeout(arguments.callee, 0), void 0
                                                    }
                                                    e()
                                                }
                                            }()), Y.wk && function() {
                                                return G ? void 0 : /loaded|complete/.test(R.readyState) ? (e(), void 0) : (setTimeout(arguments.callee, 0), void 0)
                                            }(), r(e)))
                                        }(),
                                        function() {
                                            Y.ie && Y.win && window.attachEvent("onunload", function() {
                                                for (var e = $.length, n = 0; e > n; n++) $[n][0].detachEvent($[n][1], $[n][2]);
                                                for (var r = H.length, i = 0; r > i; i++) h(H[i]);
                                                for (var a in Y) Y[a] = null;
                                                Y = null;
                                                for (var o in t) t[o] = null;
                                                t = null
                                            })
                                        }(), {
                                            registerObject: function(e, t, n, r) {
                                                if (Y.w3 && e && t) {
                                                    var i = {};
                                                    i.id = e, i.swfVersion = t, i.expressInstall = n, i.callbackFn = r, U[U.length] = i, b(e, !1)
                                                } else r && r({
                                                    success: !1,
                                                    id: e
                                                })
                                            },
                                            getObjectById: function(e) {
                                                return Y.w3 ? l(e) : void 0
                                            },
                                            embedSWF: function(e, t, r, i, a, o, l, c, f, p) {
                                                var h = {
                                                    success: !1,
                                                    id: t
                                                };
                                                Y.w3 && !(Y.wk && 312 > Y.wk) && e && t && r && i && a ? (b(t, !1), n(function() {
                                                    r += "", i += "";
                                                    var n = {};
                                                    if (f && typeof f === O)
                                                        for (var v in f) n[v] = f[v];
                                                    n.data = e, n.width = r, n.height = i;
                                                    var g = {};
                                                    if (c && typeof c === O)
                                                        for (var y in c) g[y] = c[y];
                                                    if (l && typeof l === O)
                                                        for (var m in l) typeof g.flashvars != M ? g.flashvars += "&" + m + "=" + l[m] : g.flashvars = m + "=" + l[m];
                                                    if (E(a)) {
                                                        var w = d(n, g, t);
                                                        n.id == t && b(t, !0), h.success = !0, h.ref = w
                                                    } else {
                                                        if (o && u()) return n.data = o, s(n, g, t, p), void 0;
                                                        b(t, !0)
                                                    }
                                                    p && p(h)
                                                })) : p && p(h)
                                            },
                                            switchOffAutoHideShow: function() {
                                                z = !1
                                            },
                                            ua: Y,
                                            getFlashPlayerVersion: function() {
                                                return {
                                                    major: Y.pv[0],
                                                    minor: Y.pv[1],
                                                    release: Y.pv[2]
                                                }
                                            },
                                            hasFlashPlayerVersion: E,
                                            createSWF: function(e, t, n) {
                                                return Y.w3 ? d(e, t, n) : void 0
                                            },
                                            showExpressInstall: function(e, t, n, r) {
                                                Y.w3 && u() && s(e, t, n, r)
                                            },
                                            removeSWF: function(e) {
                                                Y.w3 && h(e)
                                            },
                                            createCSS: function(e, t, n, r) {
                                                Y.w3 && w(e, t, n, r)
                                            },
                                            addDomLoadEvent: n,
                                            addLoadEvent: r,
                                            getQueryParamValue: function(e) {
                                                var t = R.location.search || R.location.hash;
                                                if (t) {
                                                    if (/\?/.test(t) && (t = t.split("?")[1]), null == e) return A(t);
                                                    for (var n = t.split("&"), r = 0; n.length > r; r++)
                                                        if (n[r].substring(0, n[r].indexOf("=")) == e) return A(n[r].substring(n[r].indexOf("=") + 1))
                                                }
                                                return ""
                                            },
                                            expressInstallCallback: function() {
                                                if (W) {
                                                    var e = g(j);
                                                    e && x && (e.parentNode.replaceChild(x, e), P && (b(P, !0), Y.ie && Y.win && (x.style.display = "block")), T && T(N)), W = !1
                                                }
                                            }
                                        }
                                }();
                                return e.getSWFObject = function() {
                                    return t
                                }, t
                            }
                        }
                    })(window.MTVNPlayer.module("swfobject"))
                }.apply(window),
                function() {
                    (function() {
                        var e = this,
                            t = e._,
                            n = {},
                            r = Array.prototype,
                            i = Object.prototype,
                            a = Function.prototype,
                            o = r.push,
                            l = r.slice,
                            u = r.concat,
                            s = i.toString,
                            c = i.hasOwnProperty,
                            f = r.forEach,
                            d = r.map,
                            p = r.reduce,
                            h = r.reduceRight,
                            v = r.filter,
                            g = r.every,
                            y = r.some,
                            m = r.indexOf,
                            E = r.lastIndexOf,
                            w = Array.isArray,
                            b = Object.keys,
                            A = a.bind,
                            x = function(e) {
                                return e instanceof x ? e : this instanceof x ? (this._wrapped = e, void 0) : new x(e)
                            };
                        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.5.1";
                        var P = x.each = x.forEach = function(e, t, r) {
                            if (null != e)
                                if (f && e.forEach === f) e.forEach(t, r);
                                else if (e.length === +e.length) {
                                for (var i = 0, a = e.length; a > i; i++)
                                    if (t.call(r, e[i], i, e) === n) return
                            } else
                                for (var o in e)
                                    if (x.has(e, o) && t.call(r, e[o], o, e) === n) return
                        };
                        x.map = x.collect = function(e, t, n) {
                            var r = [];
                            return null == e ? r : d && e.map === d ? e.map(t, n) : (P(e, function(e, i, a) {
                                r.push(t.call(n, e, i, a))
                            }), r)
                        };
                        var T = "Reduce of empty array with no initial value";
                        x.reduce = x.foldl = x.inject = function(e, t, n, r) {
                            var i = arguments.length > 2;
                            if (null == e && (e = []), p && e.reduce === p) return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
                            if (P(e, function(e, a, o) {
                                    i ? n = t.call(r, n, e, a, o) : (n = e, i = !0)
                                }), !i) throw new TypeError(T);
                            return n
                        }, x.reduceRight = x.foldr = function(e, t, n, r) {
                            var i = arguments.length > 2;
                            if (null == e && (e = []), h && e.reduceRight === h) return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
                            var a = e.length;
                            if (a !== +a) {
                                var o = x.keys(e);
                                a = o.length
                            }
                            if (P(e, function(l, u, s) {
                                    u = o ? o[--a] : --a, i ? n = t.call(r, n, e[u], u, s) : (n = e[u], i = !0)
                                }), !i) throw new TypeError(T);
                            return n
                        }, x.find = x.detect = function(e, t, n) {
                            var r;
                            return N(e, function(e, i, a) {
                                return t.call(n, e, i, a) ? (r = e, !0) : void 0
                            }), r
                        }, x.filter = x.select = function(e, t, n) {
                            var r = [];
                            return null == e ? r : v && e.filter === v ? e.filter(t, n) : (P(e, function(e, i, a) {
                                t.call(n, e, i, a) && r.push(e)
                            }), r)
                        }, x.reject = function(e, t, n) {
                            return x.filter(e, function(e, r, i) {
                                return !t.call(n, e, r, i)
                            }, n)
                        }, x.every = x.all = function(e, t, r) {
                            t || (t = x.identity);
                            var i = !0;
                            return null == e ? i : g && e.every === g ? e.every(t, r) : (P(e, function(e, a, o) {
                                return (i = i && t.call(r, e, a, o)) ? void 0 : n
                            }), !!i)
                        };
                        var N = x.some = x.any = function(e, t, r) {
                            t || (t = x.identity);
                            var i = !1;
                            return null == e ? i : y && e.some === y ? e.some(t, r) : (P(e, function(e, a, o) {
                                return i || (i = t.call(r, e, a, o)) ? n : void 0
                            }), !!i)
                        };
                        x.contains = x.include = function(e, t) {
                            return null == e ? !1 : m && e.indexOf === m ? -1 != e.indexOf(t) : N(e, function(e) {
                                return e === t
                            })
                        }, x.invoke = function(e, t) {
                            var n = l.call(arguments, 2),
                                r = x.isFunction(t);
                            return x.map(e, function(e) {
                                return (r ? t : e[t]).apply(e, n)
                            })
                        }, x.pluck = function(e, t) {
                            return x.map(e, function(e) {
                                return e[t]
                            })
                        }, x.where = function(e, t, n) {
                            return x.isEmpty(t) ? n ? void 0 : [] : x[n ? "find" : "filter"](e, function(e) {
                                for (var n in t)
                                    if (t[n] !== e[n]) return !1;
                                return !0
                            })
                        }, x.findWhere = function(e, t) {
                            return x.where(e, t, !0)
                        }, x.max = function(e, t, n) {
                            if (!t && x.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.max.apply(Math, e);
                            if (!t && x.isEmpty(e)) return -1 / 0;
                            var r = {
                                computed: -1 / 0,
                                value: -1 / 0
                            };
                            return P(e, function(e, i, a) {
                                var o = t ? t.call(n, e, i, a) : e;
                                o > r.computed && (r = {
                                    value: e,
                                    computed: o
                                })
                            }), r.value
                        }, x.min = function(e, t, n) {
                            if (!t && x.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.min.apply(Math, e);
                            if (!t && x.isEmpty(e)) return 1 / 0;
                            var r = {
                                computed: 1 / 0,
                                value: 1 / 0
                            };
                            return P(e, function(e, i, a) {
                                var o = t ? t.call(n, e, i, a) : e;
                                r.computed > o && (r = {
                                    value: e,
                                    computed: o
                                })
                            }), r.value
                        }, x.shuffle = function(e) {
                            var t, n = 0,
                                r = [];
                            return P(e, function(e) {
                                t = x.random(n++), r[n - 1] = r[t], r[t] = e
                            }), r
                        };
                        var S = function(e) {
                            return x.isFunction(e) ? e : function(t) {
                                return t[e]
                            }
                        };
                        x.sortBy = function(e, t, n) {
                            var r = S(t);
                            return x.pluck(x.map(e, function(e, t, i) {
                                return {
                                    value: e,
                                    index: t,
                                    criteria: r.call(n, e, t, i)
                                }
                            }).sort(function(e, t) {
                                var n = e.criteria,
                                    r = t.criteria;
                                if (n !== r) {
                                    if (n > r || void 0 === n) return 1;
                                    if (r > n || void 0 === r) return -1
                                }
                                return e.index < t.index ? -1 : 1
                            }), "value")
                        };
                        var C = function(e, t, n, r) {
                            var i = {},
                                a = S(null == t ? x.identity : t);
                            return P(e, function(t, o) {
                                var l = a.call(n, t, o, e);
                                r(i, l, t)
                            }), i
                        };
                        x.groupBy = function(e, t, n) {
                            return C(e, t, n, function(e, t, n) {
                                (x.has(e, t) ? e[t] : e[t] = []).push(n)
                            })
                        }, x.countBy = function(e, t, n) {
                            return C(e, t, n, function(e, t) {
                                x.has(e, t) || (e[t] = 0), e[t]++
                            })
                        }, x.sortedIndex = function(e, t, n, r) {
                            n = null == n ? x.identity : S(n);
                            for (var i = n.call(r, t), a = 0, o = e.length; o > a;) {
                                var l = a + o >>> 1;
                                i > n.call(r, e[l]) ? a = l + 1 : o = l
                            }
                            return a
                        }, x.toArray = function(e) {
                            return e ? x.isArray(e) ? l.call(e) : e.length === +e.length ? x.map(e, x.identity) : x.values(e) : []
                        }, x.size = function(e) {
                            return null == e ? 0 : e.length === +e.length ? e.length : x.keys(e).length
                        }, x.first = x.head = x.take = function(e, t, n) {
                            return null == e ? void 0 : null == t || n ? e[0] : l.call(e, 0, t)
                        }, x.initial = function(e, t, n) {
                            return l.call(e, 0, e.length - (null == t || n ? 1 : t))
                        }, x.last = function(e, t, n) {
                            return null == e ? void 0 : null == t || n ? e[e.length - 1] : l.call(e, Math.max(e.length - t, 0))
                        }, x.rest = x.tail = x.drop = function(e, t, n) {
                            return l.call(e, null == t || n ? 1 : t)
                        }, x.compact = function(e) {
                            return x.filter(e, x.identity)
                        };
                        var M = function(e, t, n) {
                            return t && x.every(e, x.isArray) ? u.apply(n, e) : (P(e, function(e) {
                                x.isArray(e) || x.isArguments(e) ? t ? o.apply(n, e) : M(e, t, n) : n.push(e)
                            }), n)
                        };
                        x.flatten = function(e, t) {
                            return M(e, t, [])
                        }, x.without = function(e) {
                            return x.difference(e, l.call(arguments, 1))
                        }, x.uniq = x.unique = function(e, t, n, r) {
                            x.isFunction(t) && (r = n, n = t, t = !1);
                            var i = n ? x.map(e, n, r) : e,
                                a = [],
                                o = [];
                            return P(i, function(n, r) {
                                (t ? r && o[o.length - 1] === n : x.contains(o, n)) || (o.push(n), a.push(e[r]))
                            }), a
                        }, x.union = function() {
                            return x.uniq(x.flatten(arguments, !0))
                        }, x.intersection = function(e) {
                            var t = l.call(arguments, 1);
                            return x.filter(x.uniq(e), function(e) {
                                return x.every(t, function(t) {
                                    return x.indexOf(t, e) >= 0
                                })
                            })
                        }, x.difference = function(e) {
                            var t = u.apply(r, l.call(arguments, 1));
                            return x.filter(e, function(e) {
                                return !x.contains(t, e)
                            })
                        }, x.zip = function() {
                            for (var e = x.max(x.pluck(arguments, "length").concat(0)), t = Array(e), n = 0; e > n; n++) t[n] = x.pluck(arguments, "" + n);
                            return t
                        }, x.object = function(e, t) {
                            if (null == e) return {};
                            for (var n = {}, r = 0, i = e.length; i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
                            return n
                        }, x.indexOf = function(e, t, n) {
                            if (null == e) return -1;
                            var r = 0,
                                i = e.length;
                            if (n) {
                                if ("number" != typeof n) return r = x.sortedIndex(e, t), e[r] === t ? r : -1;
                                r = 0 > n ? Math.max(0, i + n) : n
                            }
                            if (m && e.indexOf === m) return e.indexOf(t, n);
                            for (; i > r; r++)
                                if (e[r] === t) return r;
                            return -1
                        }, x.lastIndexOf = function(e, t, n) {
                            if (null == e) return -1;
                            var r = null != n;
                            if (E && e.lastIndexOf === E) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
                            for (var i = r ? n : e.length; i--;)
                                if (e[i] === t) return i;
                            return -1
                        }, x.range = function(e, t, n) {
                            1 >= arguments.length && (t = e || 0, e = 0), n = arguments[2] || 1;
                            for (var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, a = Array(r); r > i;) a[i++] = e, e += n;
                            return a
                        };
                        var O = function() {};
                        x.bind = function(e, t) {
                            var n, r;
                            if (A && e.bind === A) return A.apply(e, l.call(arguments, 1));
                            if (!x.isFunction(e)) throw new TypeError;
                            return n = l.call(arguments, 2), r = function() {
                                if (!(this instanceof r)) return e.apply(t, n.concat(l.call(arguments)));
                                O.prototype = e.prototype;
                                var i = new O;
                                O.prototype = null;
                                var a = e.apply(i, n.concat(l.call(arguments)));
                                return Object(a) === a ? a : i
                            }
                        }, x.partial = function(e) {
                            var t = l.call(arguments, 1);
                            return function() {
                                return e.apply(this, t.concat(l.call(arguments)))
                            }
                        }, x.bindAll = function(e) {
                            var t = l.call(arguments, 1);
                            if (0 === t.length) throw Error("bindAll must be passed function names");
                            return P(t, function(t) {
                                e[t] = x.bind(e[t], e)
                            }), e
                        }, x.memoize = function(e, t) {
                            var n = {};
                            return t || (t = x.identity),
                                function() {
                                    var r = t.apply(this, arguments);
                                    return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
                                }
                        }, x.delay = function(e, t) {
                            var n = l.call(arguments, 2);
                            return setTimeout(function() {
                                return e.apply(null, n)
                            }, t)
                        }, x.defer = function(e) {
                            return x.delay.apply(x, [e, 1].concat(l.call(arguments, 1)))
                        }, x.throttle = function(e, t, n) {
                            var r, i, a, o = null,
                                l = 0;
                            n || (n = {});
                            var u = function() {
                                l = n.leading === !1 ? 0 : new Date, o = null, a = e.apply(r, i)
                            };
                            return function() {
                                var s = new Date;
                                l || n.leading !== !1 || (l = s);
                                var c = t - (s - l);
                                return r = this, i = arguments, 0 >= c ? (clearTimeout(o), o = null, l = s, a = e.apply(r, i)) : o || n.trailing === !1 || (o = setTimeout(u, c)), a
                            }
                        }, x.debounce = function(e, t, n) {
                            var r, i = null;
                            return function() {
                                var a = this,
                                    o = arguments,
                                    l = function() {
                                        i = null, n || (r = e.apply(a, o))
                                    },
                                    u = n && !i;
                                return clearTimeout(i), i = setTimeout(l, t), u && (r = e.apply(a, o)), r
                            }
                        }, x.once = function(e) {
                            var t, n = !1;
                            return function() {
                                return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
                            }
                        }, x.wrap = function(e, t) {
                            return function() {
                                var n = [e];
                                return o.apply(n, arguments), t.apply(this, n)
                            }
                        }, x.compose = function() {
                            var e = arguments;
                            return function() {
                                for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
                                return t[0]
                            }
                        }, x.after = function(e, t) {
                            return function() {
                                return 1 > --e ? t.apply(this, arguments) : void 0
                            }
                        }, x.keys = b || function(e) {
                            if (e !== Object(e)) throw new TypeError("Invalid object");
                            var t = [];
                            for (var n in e) x.has(e, n) && t.push(n);
                            return t
                        }, x.values = function(e) {
                            var t = [];
                            for (var n in e) x.has(e, n) && t.push(e[n]);
                            return t
                        }, x.pairs = function(e) {
                            var t = [];
                            for (var n in e) x.has(e, n) && t.push([n, e[n]]);
                            return t
                        }, x.invert = function(e) {
                            var t = {};
                            for (var n in e) x.has(e, n) && (t[e[n]] = n);
                            return t
                        }, x.functions = x.methods = function(e) {
                            var t = [];
                            for (var n in e) x.isFunction(e[n]) && t.push(n);
                            return t.sort()
                        }, x.extend = function(e) {
                            return P(l.call(arguments, 1), function(t) {
                                if (t)
                                    for (var n in t) e[n] = t[n]
                            }), e
                        }, x.pick = function(e) {
                            var t = {},
                                n = u.apply(r, l.call(arguments, 1));
                            return P(n, function(n) {
                                n in e && (t[n] = e[n])
                            }), t
                        }, x.omit = function(e) {
                            var t = {},
                                n = u.apply(r, l.call(arguments, 1));
                            for (var i in e) x.contains(n, i) || (t[i] = e[i]);
                            return t
                        }, x.defaults = function(e) {
                            return P(l.call(arguments, 1), function(t) {
                                if (t)
                                    for (var n in t) void 0 === e[n] && (e[n] = t[n])
                            }), e
                        }, x.clone = function(e) {
                            return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
                        }, x.tap = function(e, t) {
                            return t(e), e
                        };
                        var _ = function(e, t, n, r) {
                            if (e === t) return 0 !== e || 1 / e == 1 / t;
                            if (null == e || null == t) return e === t;
                            e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
                            var i = s.call(e);
                            if (i != s.call(t)) return !1;
                            switch (i) {
                                case "[object String]":
                                    return e == t + "";
                                case "[object Number]":
                                    return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                                case "[object Date]":
                                case "[object Boolean]":
                                    return +e == +t;
                                case "[object RegExp]":
                                    return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
                            }
                            if ("object" != typeof e || "object" != typeof t) return !1;
                            for (var a = n.length; a--;)
                                if (n[a] == e) return r[a] == t;
                            var o = e.constructor,
                                l = t.constructor;
                            if (o !== l && !(x.isFunction(o) && o instanceof o && x.isFunction(l) && l instanceof l)) return !1;
                            n.push(e), r.push(t);
                            var u = 0,
                                c = !0;
                            if ("[object Array]" == i) {
                                if (u = e.length, c = u == t.length)
                                    for (; u-- && (c = _(e[u], t[u], n, r)););
                            } else {
                                for (var f in e)
                                    if (x.has(e, f) && (u++, !(c = x.has(t, f) && _(e[f], t[f], n, r)))) break;
                                if (c) {
                                    for (f in t)
                                        if (x.has(t, f) && !u--) break;
                                    c = !u
                                }
                            }
                            return n.pop(), r.pop(), c
                        };
                        x.isEqual = function(e, t) {
                            return _(e, t, [], [])
                        }, x.isEmpty = function(e) {
                            if (null == e) return !0;
                            if (x.isArray(e) || x.isString(e)) return 0 === e.length;
                            for (var t in e)
                                if (x.has(e, t)) return !1;
                            return !0
                        }, x.isElement = function(e) {
                            return !(!e || 1 !== e.nodeType)
                        }, x.isArray = w || function(e) {
                            return "[object Array]" == s.call(e)
                        }, x.isObject = function(e) {
                            return e === Object(e)
                        }, P(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
                            x["is" + e] = function(t) {
                                return s.call(t) == "[object " + e + "]"
                            }
                        }), x.isArguments(arguments) || (x.isArguments = function(e) {
                            return !(!e || !x.has(e, "callee"))
                        }), x.isFunction = function(e) {
                            return "function" == typeof e
                        }, x.isFinite = function(e) {
                            return isFinite(e) && !isNaN(parseFloat(e))
                        }, x.isNaN = function(e) {
                            return x.isNumber(e) && e != +e
                        }, x.isBoolean = function(e) {
                            return e === !0 || e === !1 || "[object Boolean]" == s.call(e)
                        }, x.isNull = function(e) {
                            return null === e
                        }, x.isUndefined = function(e) {
                            return void 0 === e
                        }, x.has = function(e, t) {
                            return c.call(e, t)
                        }, x.noConflict = function() {
                            return e._ = t, this
                        }, x.identity = function(e) {
                            return e
                        }, x.times = function(e, t, n) {
                            for (var r = Array(Math.max(0, e)), i = 0; e > i; i++) r[i] = t.call(n, i);
                            return r
                        }, x.random = function(e, t) {
                            return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
                        };
                        var I = {
                            escape: {
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': "&quot;",
                                "'": "&#x27;",
                                "/": "&#x2F;"
                            }
                        };
                        I.unescape = x.invert(I.escape);
                        var L = {
                            escape: RegExp("[" + x.keys(I.escape).join("") + "]", "g"),
                            unescape: RegExp("(" + x.keys(I.unescape).join("|") + ")", "g")
                        };
                        x.each(["escape", "unescape"], function(e) {
                            x[e] = function(t) {
                                return null == t ? "" : ("" + t).replace(L[e], function(t) {
                                    return I[e][t]
                                })
                            }
                        }), x.result = function(e, t) {
                            if (null == e) return void 0;
                            var n = e[t];
                            return x.isFunction(n) ? n.call(e) : n
                        }, x.mixin = function(e) {
                            P(x.functions(e), function(t) {
                                var n = x[t] = e[t];
                                x.prototype[t] = function() {
                                    var e = [this._wrapped];
                                    return o.apply(e, arguments), V.call(this, n.apply(x, e))
                                }
                            })
                        };
                        var j = 0;
                        x.uniqueId = function(e) {
                            var t = ++j + "";
                            return e ? e + t : t
                        }, x.templateSettings = {
                            evaluate: /<%([\s\S]+?)%>/g,
                            interpolate: /<%=([\s\S]+?)%>/g,
                            escape: /<%-([\s\S]+?)%>/g
                        };
                        var F = /(.)^/,
                            k = {
                                "'": "'",
                                "\\": "\\",
                                "\r": "r",
                                "\n": "n",
                                "	": "t",
                                "\u2028": "u2028",
                                "\u2029": "u2029"
                            },
                            R = /\\|'|\r|\n|\t|\u2028|\u2029/g;
                        x.template = function(e, t, n) {
                            var r;
                            n = x.defaults({}, n, x.templateSettings);
                            var i = RegExp([(n.escape || F).source, (n.interpolate || F).source, (n.evaluate || F).source].join("|") + "|$", "g"),
                                a = 0,
                                o = "__p+='";
                            e.replace(i, function(t, n, r, i, l) {
                                return o += e.slice(a, l).replace(R, function(e) {
                                    return "\\" + k[e]
                                }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (o += "';\n" + i + "\n__p+='"), a = l + t.length, t
                            }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
                            try {
                                r = Function(n.variable || "obj", "_", o)
                            } catch (l) {
                                throw l.source = o, l
                            }
                            if (t) return r(t, x);
                            var u = function(e) {
                                return r.call(this, e, x)
                            };
                            return u.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", u
                        }, x.chain = function(e) {
                            return x(e).chain()
                        };
                        var V = function(e) {
                            return this._chain ? x(e).chain() : e
                        };
                        x.mixin(x), P(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
                            var t = r[e];
                            x.prototype[e] = function() {
                                var n = this._wrapped;
                                return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], V.call(this, n)
                            }
                        }), P(["concat", "join", "slice"], function(e) {
                            var t = r[e];
                            x.prototype[e] = function() {
                                return V.call(this, t.apply(this._wrapped, arguments))
                            }
                        }), x.extend(x.prototype, {
                            chain: function() {
                                return this._chain = !0, this
                            },
                            value: function() {
                                return this._wrapped
                            }
                        })
                    }).call(this), t("_", this._)
                }.apply({}),
                function(r, i) {
                    "use strict";
                    var a = e("_"),
                        o = function(e, t) {
                            var i = "http://media.mtvnservices.com/",
                                o = [],
                                l = function(e) {
                                    return "uiStateChange" === e ? "onUIStateChange" : "on" + e.charAt(0).toUpperCase() + e.substr(1)
                                };
                            return e.instances = [], e.baseURL = i, e.onPlayerCallbacks = o, e.$ = t, e.playerInit = function(e, t) {
                                var n = [];
                                e.module = function() {
                                    var e = {};
                                    return function(t) {
                                        return e[t] ? e[t] : (e[t] = {}, e[t])
                                    }
                                }(), e.destroy = function() {
                                    t.destroy.apply(this, arguments)
                                }, e.message = function() {
                                    return this.ready ? t.message.apply(this, arguments) : (n.push(arguments), void 0)
                                }, e.one("ready", function(e) {
                                    for (var t = e.target, r = t.message, i = 0, a = n.length; a > i; i++) r.apply(t, n[i])
                                })
                            }, e.isHTML5Player = function(e) {
                                var t = e ? e.toLowerCase() : "",
                                    n = function(e) {
                                        if (-1 !== e.indexOf("silk")) {
                                            var t = /silk\/(\d)/gi,
                                                n = parseInt(t.exec(e)[1], 10);
                                            return !isNaN(n) && n >= 2
                                        }
                                        return !1
                                    },
                                    r = function(e) {
                                        if (-1 !== e.indexOf("android")) {
                                            if (-1 !== e.indexOf("firefox")) return !0;
                                            var t = /android (\d)/gi,
                                                n = parseInt(t.exec(e)[1], 10);
                                            return !isNaN(n) && n >= 4
                                        }
                                        return !1
                                    },
                                    i = function(e) {
                                        return -1 !== e.indexOf("wiiu")
                                    },
                                    a = function(e) {
                                        return -1 !== e.indexOf("playstation 4")
                                    };
                                return -1 !== t.indexOf("iphone") || -1 !== t.indexOf("ipad") || n(t) || r(t) || i(t) || a(t)
                            }, e.appendStyle = function(e) {
                                var t = document.createElement("style");
                                t.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(t), t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e))
                            }, e.getPath = function(t) {
                                var n = i + t.uri;
                                return t.templateURL && (n = t.templateURL.replace("{uri}", t.uri)), r.isHTML5Player && (n = e.processQSParams(n, t)), n
                            }, e.processQSParams = function(e, t) {
                                return a.isObject(t.flashVars) && (e = u.addQueryStringParam(e, "flashVars", encodeURIComponent(JSON.stringify(t.flashVars)))), a.isObject(t.test) && (e = u.addQueryStringParam(e, "testConfig", encodeURIComponent(JSON.stringify(t.test)))), e
                            }, e.processPerformance = function(t, n) {
                                var i = t.config.performance.startTime,
                                    a = r.Events.PERFORMANCE;
                                for (var o in n) n[o] = n[o] - i;
                                e.processEvent(t.events[a], {
                                    data: n,
                                    target: t,
                                    type: a
                                })
                            }, e.processEvent = function(e, t) {
                                if (t && t.target && t.target.$el && (t.target.$el.trigger("MTVNPlayer:" + t.type, t), t.target.$el.trigger("MTVNPlayer:" + l(t.type), t)), e)
                                    if (e instanceof Array) {
                                        e = e.slice();
                                        for (var n = 0, r = e.length; r > n; n++) e[n](t)
                                    } else e(t)
                            }, e.executeCallbacks = function(e) {
                                var t = o.concat(n).slice(),
                                    r = 0,
                                    i = t.length;
                                for (r; i > r; r++) t[r](e)
                            }, e
                        }(window.MTVNPlayer.module("core"), window.jQuery || window.Zepto),
                        l = r.module("config");
                    l.copyEvents = function(e, t) {
                            var n, r;
                            if (t)
                                for (var i in t) t.hasOwnProperty(i) && (n = t[i], (a.isFunction(n) || a.isArray(n)) && (r = e[i], r ? a.isArray(r) ? a.isArray(n) ? e[i] = r.concat(n) : r.push(n) : e[i] = a.isArray(n) ? [r].concat(n) : [r, n] : e[i] = n));
                            return e
                        }, l.copyProperties = function(e, t, n) {
                            function r(e) {
                                return void 0 !== e && null !== e
                            }
                            if (t)
                                for (var i in t)
                                    if (t.hasOwnProperty(i) && r(t[i])) {
                                        var a = i.toLowerCase();
                                        if ("flashvars" === a || "attributes" === a || "params" === a) e[i] = e[i] || {}, l.copyProperties(e[i], t[i], n);
                                        else {
                                            if (("width" === i || "height" === i) && !t[i]) continue;
                                            if (!n && r(e[i])) continue;
                                            e[i] = t[i]
                                        }
                                    }
                            return e
                        }, l.needsScrollToForFullScreen = function(e) {
                            var t = /OS (\d*)/gi,
                                n = t.exec(e);
                            if (!a.isEmpty(n)) {
                                var r = parseInt(n[1], 10);
                                if (!isNaN(r) && 4 >= r) return !0
                            }
                            return !1
                        }, l.versionIsMinimum = function(e, t) {
                            function n(t) {
                                return -1 !== t.indexOf("-") ? t.slice(0, e.indexOf("-")) : t
                            }
                            if (e && t) {
                                if (e = n(e), t = n(t), e === t) return !0;
                                e = e.split("."), t = t.split(".");
                                for (var r = 0, i = t.length; i > r; r++) {
                                    var a = parseInt(e[r], 10),
                                        o = parseInt(t[r], 10);
                                    if (a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o, a != o) return o > a
                                }
                            }
                        }, l.provideJQuery = function() {
                            if (!r.has("$")) {
                                var e = window.jQuery;
                                e && l.versionIsMinimum("1.9.0", e.fn.jquery) && t("$", e)
                            }
                        }, l.buildConfig = function(e, t) {
                            t = l.copyProperties(t, window.MTVNPlayer.defaultConfig), t = l.copyProperties(t, {
                                width: 640,
                                height: 360
                            });
                            var n = function(t) {
                                    return e.getAttribute("data-" + t)
                                },
                                r = function(t) {
                                    return parseInt(e.style[t], 10)
                                },
                                i = function(e) {
                                    if (e = n(e)) {
                                        var t, r, i = {},
                                            a = e.split("&");
                                        for (t = a.length; t--;) r = a[t].split("="), r && 2 == r.length && (i[r[0]] = r[1]);
                                        return i
                                    }
                                },
                                a = function(e) {
                                    var t, r, i, a = ["autoPlay", "sid", "ssid"];
                                    for (t = a.length; t--;) i = a[t], r = n(i), r && (e || (e = {}), e[i] = r);
                                    return e
                                },
                                o = {
                                    uri: n("contenturi"),
                                    width: r("width") || null,
                                    height: r("height") || null,
                                    flashVars: a(i("flashVars")),
                                    attributes: i("attributes")
                                };
                            return l.copyProperties(t, o, !0)
                        },
                        function(e, t) {
                            var n = null;
                            e.find = function(t) {
                                return e.initialize(), n(t)
                            }, e.initialize = function() {
                                e.initialize = function() {};
                                var r, i, a, o, l, u, s = {},
                                    c = /^\s+|\s+$/g,
                                    f = !!t.querySelectorAll,
                                    d = function(e, t, n) {
                                        if (r = n || [], l = t || d.context, f) try {
                                            return m(l.querySelectorAll(e)), r
                                        } catch (i) {}
                                        return u = l.ownerDocument || l, v(e.replace(c, "")), h(), r
                                    },
                                    p = function(e) {
                                        if (i.tag) {
                                            var t = e.nodeName.toUpperCase();
                                            if ("*" == i.tag) {
                                                if ("@" > t) return !1
                                            } else if (t != i.tag) return !1
                                        }
                                        if (i.id && e.getAttribute("id") != i.id) return !1;
                                        if (a = i.classes)
                                            for (var n = " " + e.className + " ", r = a.length; r--;)
                                                if (0 > n.indexOf(" " + a[r] + " ")) return !1;
                                        if (o = i.pseudos)
                                            for (var l = o.length; l--;) {
                                                var u = s[o[l]];
                                                if (!u || !u.call(d, e)) return !1
                                            }
                                        return !0
                                    },
                                    h = function() {
                                        var e = i.id,
                                            t = e && i.tag || i.classes || i.pseudos || !e && (i.classes || i.pseudos) ? b : E;
                                        if (e) {
                                            var n = u.getElementById(e);
                                            n && (u === l || A(n)) && t([n])
                                        } else t(l.getElementsByTagName(i.tag || "*"))
                                    },
                                    v = function(e) {
                                        for (i = {}; e = e.replace(/([#.:])?([^#.:]*)/, g););
                                    },
                                    g = function(e, t, n) {
                                        return t ? "#" == t ? i.id = n : "." == t ? i.classes ? i.classes.push(n) : i.classes = [n] : ":" == t && (i.pseudos ? i.pseudos.push(n) : i.pseudos = [n]) : i.tag = n.toUpperCase(), ""
                                    },
                                    y = Array.prototype.slice,
                                    m = function(e) {
                                        r = y.call(e, 0)
                                    },
                                    E = function(e) {
                                        for (var t = 0, n = e.length; n > t; t++) r.push(e[t])
                                    };
                                try {
                                    y.call(t.documentElement.childNodes, 0)
                                } catch (w) {
                                    m = E
                                }
                                var b = function(e) {
                                        for (var t = 0, n = e.length; n > t; t++) {
                                            var i = e[t];
                                            p(i) && r.push(i)
                                        }
                                    },
                                    A = function(e) {
                                        do
                                            if (e === l) return !0;
                                        while (e = e.parentNode);
                                        return !1
                                    };
                                d.pseudos = s, d.context = t, n = d
                            }
                        }(window.MTVNPlayer.module("selector"), window.document);
                    var u = {
                        addQueryStringParam: function(e, t, n) {
                            var r = t + "=" + n;
                            if (-1 === e.indexOf(r)) {
                                var i = e.length - 1,
                                    a = e.lastIndexOf("?"),
                                    o = e.lastIndexOf("&") === i || a === i ? "" : -1 === a ? "?" : "&";
                                e += o + r
                            }
                            return e
                        },
                        setQueryStringParam: function(e, t, n) {
                            var r = RegExp("([?|&])" + t + "=.*?(&|$)", "i");
                            return e.match(r) ? e.replace(r, "$1" + t + "=" + n + "$2") : u.addQueryStringParam(e, t, n)
                        }
                    };
                    r.configurePackages({
                        $: {
                            shim: !0,
                            exports: "Zepto",
                            url: "http://cdnjs.cloudflare.com/ajax/libs/zepto/1.0/zepto.min.js"
                        },
                        "mtvn-util": {
                            url: "http://media.mtvnservices.com/player/js/util/1.5.0/mtvn-util.min.js"
                        }
                    }), r.module("flash").initialize = a.once(function() {
                        var e = {
                                play: "unpause",
                                seek: "setPlayheadTime"
                            },
                            t = function(e) {
                                var t, n, r = null,
                                    i = o.instances.length;
                                for (t = i; t--;)
                                    if (n = o.instances[t], n.source === e) {
                                        r = n.player;
                                        break
                                    }
                                return r
                            },
                            n = r.module("swfobject").getSWFObject(),
                            i = function(e, r) {
                                var i = r.attributes || {},
                                    a = r.params || {
                                        allowFullScreen: !0
                                    },
                                    l = r.flashVars || {};
                                i.data = o.getPath(r), i.width = i.height = "100%", a.allowScriptAccess = "always", l.objectID = e, a.flashVars = function(e) {
                                    var t = "";
                                    for (var n in e) t += n + "=" + e[n] + "&";
                                    return t ? t.slice(0, -1) : ""
                                }(l), t(e).element = n.createSWF(i, a, e)
                            },
                            u = function(e) {
                                o.instances = a.reject(o.instances, function(t) {
                                    return t.source === e
                                })
                            },
                            s = function() {
                                try {
                                    this.element.exitFullScreen()
                                } catch (e) {}
                            },
                            f = function(e, t, n, r) {
                                var i, a = {};
                                return a.duration = e.duration, a.live = !1, a.isAd = e.isAd, a.isBumper = e.isBumper, a.index = void 0 !== n && null !== n ? n : r ? function(e) {
                                    for (var t = r.length; t--;)
                                        if (r[t].rss.guid === e) return t;
                                    return -1
                                }(e.guid) : function(e) {
                                    for (var n = t.length; n--;)
                                        if (t[n].metaData.guid === e) return n;
                                    return -1
                                }(e.guid), i = a.rss = {}, i.title = e.title, i.description = e.description, i.guid = e.guid, i.link = e.link, i.image = e.thumbnail, i.group = {}, i.group.categories = function() {
                                    var t = e.displayData;
                                    return {
                                        isReportable: e.reportable,
                                        source: t.source,
                                        sourceLink: t.sourceLink,
                                        seoHTMLText: t.seoHTMLText
                                    }
                                }(), a
                            },
                            d = function(e) {
                                var t, n = {},
                                    r = e.items,
                                    i = r.length;
                                for (n.description = e.description, n.title = e.title, n.link = e.link, n.items = [], t = i; t--;) n.items[t] = f(r[t], null, t);
                                return n
                            },
                            p = function(e) {
                                var t, n = {
                                        items: []
                                    },
                                    r = e.length;
                                for (t = r; t--;) n.items[t] = f(e[t].metaData, null, t);
                                return n
                            },
                            h = function(e) {
                                var t = r.Player.flashEventMap,
                                    n = "player" + Math.round(1e6 * Math.random()),
                                    i = e.element,
                                    a = "MTVNPlayer.Player.flashEventMap." + n,
                                    o = r.Events.METADATA,
                                    u = r.Events.FULL_SCREEN_CHANGE,
                                    s = r.Events.STATE_CHANGE,
                                    h = r.Events.PLAYLIST_COMPLETE,
                                    v = r.Events.READY,
                                    g = r.Events.MEDIA_END,
                                    y = r.Events.MEDIA_START,
                                    m = r.Events.PERFORMANCE,
                                    E = r.Events.INDEX_CHANGE,
                                    w = r.Events.PLAYHEAD_UPDATE;
                                t[n + o] = function(t) {
                                    var n = i.getPlaylist().items,
                                        r = e.playlistMetadata,
                                        a = f(t, n, null, r ? r.items : null),
                                        u = !1,
                                        s = a.index,
                                        c = r ? r.index : -1;
                                    if (e.currentMetadata = a, !r) {
                                        u = !0;
                                        try {
                                            r = d(i.getPlaylistMetadata())
                                        } catch (h) {
                                            r = p(n)
                                        }
                                    }
                                    if (-1 !== s && (r.items[s] = a, r.index = s, c !== s && e.trigger(E, s)), e.playlistMetadata = r, u) {
                                        e.ready = !0;
                                        try {
                                            var g = i.getJSConfig();
                                            l.copyProperties(e.config, g)
                                        } catch (h) {}
                                        e.trigger(v, a)
                                    }
                                    e.trigger(o, a)
                                }, i.addEventListener("METADATA", a + o), t[n + s] = function(t) {
                                    t = t.replace("playstates.", ""), e.state = t, e.trigger(s, t), e.trigger(s + ":" + t, t)
                                }, i.addEventListener("STATE_CHANGE", a + s), t[n + u] = function(t) {
                                    e.isFullScreen !== t && (e.isFullScreen = t, e.trigger(u, t))
                                }, i.addEventListener("FULL_SCREEN_CHANGE", a + u), t[n + w] = function(t) {
                                    var n = Math.floor(e.playhead);
                                    e.playhead = t, e.trigger(w, t), n != Math.floor(t) && e.trigger(w + ":" + Math.floor(t), t)
                                }, i.addEventListener("PLAYHEAD_UPDATE", a + w), t[n + h] = function() {
                                    e.trigger(h)
                                }, i.addEventListener("PLAYLIST_COMPLETE", a + h), t[n + m] = function(t) {
                                    e.trigger(m, t)
                                }, i.addEventListener("PERFORMANCE", a + m), t[n + y] = function() {
                                    e.trigger(y)
                                }, i.addEventListener("READY", a + y), t[n + g] = function() {
                                    e.trigger(g)
                                }, i.addEventListener("MEDIA_ENDED", a + g), t[n + "onEndSlate"] = function(t) {
                                    e.trigger(c.Events.ENDSLATE, t)
                                }, i.addEventListener("ENDSLATE", a + "onEndSlate")
                            };
                        r.Player.flashEventMap = {}, this.create = function(e, t) {
                            var n = e.id,
                                r = e.config;
                            o.instances.push({
                                source: n,
                                player: e
                            }), t || i(n, r)
                        }, this.destroy = function() {
                            n.removeSWF(this.element.id), u(this.id)
                        }, this.message = function(t) {
                            if (!this.ready) throw Error("MTVNPlayer.Player." + t + "() called before player loaded.");
                            switch (t = e[t] || t) {
                                case "exitFullScreen":
                                    return s.call(this), void 0;
                                case "goFullScreen":
                                    return;
                                default:
                            }
                            return void 0 !== arguments[1] && void 0 !== arguments[2] ? this.element[t](arguments[1], arguments[2]) : void 0 !== arguments[1] ? this.element[t](arguments[1]) : this.element[t]()
                        }, window.mtvnPlayerLoaded = function(e) {
                            return function(n) {
                                e && e(n);
                                var r = t(n);
                                o.executeCallbacks(r), h(r)
                            }
                        }(window.mtvnPlayerLoaded)
                    }), r.module("html5").initialize = a.once(function() {
                        function e() {
                            var e, t = null,
                                n = o.instances,
                                r = n.length;
                            for (e = r; e--;) t = n[e].player, t.isFullScreen && f(t)
                        }
                        var t = function(e, t, n) {
                                e.style.cssText += t + ":" + n
                            },
                            n = function(e) {
                                var t, n, r = null,
                                    i = o.instances.length;
                                for (t = i; t--;)
                                    if (n = o.instances[t], n.player.element.contentWindow === e) {
                                        r = n.player;
                                        break
                                    }
                                return r
                            },
                            u = function(e) {
                                o.instances = a.reject(o.instances, function(t) {
                                    return t.player.element.contentWindow === e
                                })
                            },
                            s = function(e) {
                                e.isFullScreen = !1;
                                var n = e.config,
                                    i = e.containerElement;
                                t(i, "position", "static"), t(i, "z-index", "auto"), t(i, "width", n.width + "px"), t(i, "height", n.height + "px"), t(e.element, "width", n.width + "px"), t(e.element, "height", n.height + "px"), e.trigger(r.Events.FULL_SCREEN_CHANGE)
                            },
                            f = function(e) {
                                var n = e.containerElement,
                                    i = e.config.highestZIndex,
                                    a = e.config.fullScreenCssText;
                                e.isFullScreen = !0, n.style.cssText = a ? a : "position:fixed;left:0px;top:0px;z-index:" + (i || 2147483645) + ";", t(n, "width", window.innerWidth + "px"), t(n, "height", window.innerHeight + "px"), t(e.element, "width", window.innerWidth + "px"), t(e.element, "height", window.innerHeight + "px"), l.needsScrollToForFullScreen(navigator.userAgent) && window.scrollTo(0, 0), e.trigger(r.Events.FULL_SCREEN_CHANGE)
                            },
                            d = function(e) {
                                return d = function() {
                                    return window.JSON ? function(e) {
                                        return e ? JSON.parse(e) : null
                                    } : i && i.parseJSON ? function(e) {
                                        return i.parseJSON(e)
                                    } : function() {}
                                }(), d(e)
                            },
                            p = function(e) {
                                return e.slice(e.indexOf(":") + 1)
                            },
                            h = function(e, t) {
                                var n = d(p(e)),
                                    i = n.index,
                                    a = t.playlistMetadata.index;
                                t.currentMetadata = n, -1 !== i && (t.playlistMetadata.items[n.index] = n, t.playlistMetadata.index = n.index, i !== a && t.trigger(r.Events.INDEX_CHANGE, i)), t.trigger(r.Events.METADATA, n)
                            },
                            v = function(e) {
                                e.ready = !0;
                                var t = e.config.flashVars;
                                t && t.sid && e.message.call(e, "setSSID:" + t.sid);
                                var n = parseInt(e.config.startIndex, 10);
                                !isNaN(n) && n > 0 && e.message.call(e, "startIndex:" + n), o.executeCallbacks(e), e.trigger(r.Events.READY)
                            },
                            g = function(e) {
                                var t, i, a, u = e.data,
                                    g = r.Events;
                                if (u && u.indexOf && -1 === u.indexOf("logMessage:") && (t = n(e.source)))
                                    if (a = t.events, 0 === u.indexOf("playState:")) t.state = p(u), t.trigger(g.STATE_CHANGE, t.state), t.trigger(g.STATE_CHANGE + ":" + t.state, t.state);
                                    else if (0 === u.indexOf("config:")) l.copyProperties(t.config, d(p(u)));
                                else if (0 === u.indexOf("performance:")) t.config.performance && o.processPerformance(t, d(p(u)));
                                else if (0 === u.indexOf("playlistComplete")) t.trigger(g.PLAYLIST_COMPLETE);
                                else if (0 === u.indexOf("metadata:")) h(u, t);
                                else if (0 === u.indexOf("mediaStart")) t.trigger(g.MEDIA_START);
                                else if (0 === u.indexOf("mediaEnd")) t.trigger(g.MEDIA_END);
                                else if (0 === u.indexOf("playheadUpdate")) {
                                    var y = Math.floor(t.playhead);
                                    i = parseInt(p(u), 10), t.playhead = i, t.trigger(g.PLAYHEAD_UPDATE, i), y != Math.floor(i) && t.trigger(g.PLAYHEAD_UPDATE + ":" + Math.floor(i), i)
                                } else 0 === u.indexOf("playlistMetadata:") ? t.playlistMetadata = d(p(u)) : "onReady" === u ? v(t) : "fullscreen" === u ? t.isFullScreen ? s(t) : f(t) : 0 === u.indexOf("overlayRectChange:") ? t.trigger(g.OVERLAY_RECT_CHANGE, d(p(u))) : 0 === u.indexOf("onUIStateChange:") ? t.trigger(g.UI_STATE_CHANGE, d(p(u))) : 0 === u.indexOf("airplay") ? t.trigger(g.AIRPLAY) : 0 === u.indexOf("showCCPrefs:") ? t.trigger(c.Events.CC_PREFS, d(p(u))) : (0 === u.indexOf("onEndSlate:") || 0 === u.indexOf("endslate")) && t.trigger(c.Events.ENDSLATE, d(p(u)))
                            },
                            y = function(e, t) {
                                return e.element.contentWindow.postMessage(t, "*")
                            },
                            m = function(e) {
                                var n = e.config,
                                    r = document.createElement("iframe"),
                                    i = document.getElementById(e.id);
                                r.setAttribute("id", e.id), r.setAttribute("src", o.getPath(n)), r.setAttribute("frameborder", "0"), r.setAttribute("scrolling", "no"), r.setAttribute("type", "text/html"), t(r, "width", n.width + "px"), t(r, "height", n.height + "px"), t(r, "position", "absolute"), i.parentNode.replaceChild(r, i), e.element = r
                            };
                        this.create = function(e) {
                            e.config.isSyndicatedLegacyHTML5 ? (e.element = window, o.instances.push({
                                player: e
                            }), y = function(e, t) {
                                return window.postMessage(t, "*")
                            }, v(e)) : (m(e), o.instances.push({
                                player: e
                            })), window.addEventListener !== void 0 ? window.addEventListener("message", g, !1) : window.attachEvent !== void 0 && window.attachEvent("onmessage", g)
                        }, this.message = function(e) {
                            if (!this.ready) throw Error("MTVNPlayer.Player." + e + "() called before player loaded.");
                            switch (e) {
                                case "goFullScreen":
                                    f.apply(this, [this]);
                                    break;
                                case "exitFullScreen":
                                    s.apply(this, [this]);
                                    break;
                                case "playUri":
                                case "playURI":
                                    this.config.uri = arguments[1], this.element.src = o.getPath(this.config);
                                    break;
                                default:
                                    return void 0 !== arguments[1] && (e += ":" + arguments[1] + (void 0 !== arguments[2] ? "," + arguments[2] : "")), y(this, e)
                            }
                        }, this.destroy = function() {
                            u(this.element.contentWindow), this.element.parentNode.removeChild(this.element)
                        }, window.addEventListener("orientationchange", function() {
                            e(), setTimeout(e, 500)
                        }, !1)
                    });
                    var s = {
                        configure: function(e) {
                            this.message("configure", e)
                        },
                        disableAds: function(e) {
                            this.message("disableAds", e)
                        },
                        spoofAdURI: function(e) {
                            this.message("spoofAdURI", e)
                        },
                        loadVideo: function(e) {
                            this.message("loadVideo", e)
                        },
                        loadPlaylist: function(e, t) {
                            this.message("loadPlaylist", e, t)
                        }
                    };
                    r.Events = {
                            METADATA: "metadata",
                            STATE_CHANGE: "stateChange",
                            MEDIA_START: "mediaStart",
                            MEDIA_END: "mediaEnd",
                            PLAYHEAD_UPDATE: "playheadUpdate",
                            PLAYLIST_COMPLETE: "playlistComplete",
                            OVERLAY_RECT_CHANGE: "overlayRectChange",
                            READY: "ready",
                            UI_STATE_CHANGE: "uiStateChange",
                            INDEX_CHANGE: "indexChange",
                            FULL_SCREEN_CHANGE: "fullScreenChange",
                            AIRPLAY: "airplay",
                            PERFORMANCE: "performance"
                        }, r.PlayState = {
                            PLAYING: "playing",
                            PAUSED: "paused",
                            SEEKING: "seeking",
                            STOPPED: "stopped",
                            BUFFERING: "buffering"
                        }, r.defaultConfig = r.defaultConfig, r.defaultEvents = r.defaultEvents, r.Player = function(e) {
                            var t, n = function(e) {
                                    throw Error("Embed API:" + e)
                                },
                                u = e.document,
                                f = function(e) {
                                    return e && 0 === e.indexOf("on") ? "onUIStateChange" === e ? "uiStateChange" : e.charAt(2).toLowerCase() + e.substr(3) : e
                                },
                                d = function(e) {
                                    -1 !== e.indexOf(":") && (e = e.split(":")[0]);
                                    var t = function(t) {
                                        for (var n in t)
                                            if (t.hasOwnProperty(n) && t[n] === e) return !0;
                                        return !1
                                    };
                                    t(r.Events) || t(c.Events) || n("event:" + e + " doesn't exist.")
                                },
                                p = function(e) {
                                    for (var t in e) e.hasOwnProperty(t) && 0 === t.indexOf("on") && (e[f(t)] = e[t], delete e[t]);
                                    for (t in e) e.hasOwnProperty(t) && d(t)
                                },
                                h = function(e, t) {
                                    var n = "100%" === e.width ? t.clientWidth : e.width,
                                        r = "100%" === e.height ? t.clientHeight : e.height,
                                        i = {
                                            width: 512,
                                            height: 288
                                        },
                                        a = {
                                            width: 360,
                                            height: 293
                                        },
                                        o = n / r,
                                        l = Math.abs(o - 4 / 3),
                                        u = Math.abs(o - 16 / 9);
                                    return l > u ? i : a
                                },
                                v = function() {
                                    var e = this.config,
                                        t = this.currentMetadata,
                                        n = '<p style="text-align:left;background-color:#FFFFFF;padding:4px;margin-top:4px;margin-bottom:0px;font-family:Arial, Helvetica, sans-serif;font-size:12px;">',
                                        r = function() {
                                            if (!t) return "";
                                            var e = "",
                                                r = t.rss.group.categories,
                                                i = r.source,
                                                a = r.sourceLink,
                                                o = r.seoHTMLText;
                                            return i && (e += a ? '<b><a href="' + a + '">' + i + "</a></b>" : "<b>" + i + "</b> "), o && (e && (e += "<br/>"), e += "Get More: " + o), e && (e = n + e + "</p>"), e
                                        }(),
                                        i = h(e, this.element),
                                        a = '<div style="background-color:#000000;width:{divWidth}px;"><div style="padding:4px;"><iframe src="http://media.mtvnservices.com/embed/{uri}" width="{width}" height="{height}" frameborder="0"></iframe>{displayMetadata}</div></div>';
                                    return a = a.replace(/\{uri\}/, e.uri), a = a.replace(/\{width\}/, i.width), a = a.replace(/\{divWidth\}/, i.width + 8), a = a.replace(/\{height\}/, i.height), a = a.replace(/\{displayMetadata\}/, r)
                                },
                                g = function(e) {
                                    return isNaN(e) ? e : e + "px"
                                },
                                y = function() {
                                    var e = u.createElement("div");
                                    return e.setAttribute("id", "mtvnPlayer" + Math.round(1e7 * Math.random())), e
                                };
                            return r.isHTML5Player = o.isHTML5Player(e.navigator.userAgent), r.onPlayer = function(e) {
                                o.onPlayerCallbacks.push(e)
                            }, r.removeOnPlayer = function(e) {
                                var t = o.onPlayerCallbacks.indexOf(e); - 1 !== t && o.onPlayerCallbacks.splice(t, 1)
                            }, r.getPlayers = function() {
                                var e = [],
                                    t = o.instances,
                                    n = t.length;
                                for (n; n--;) e.push(t[n].player);
                                return e
                            }, r.getPlayer = function(e) {
                                var t = o.instances,
                                    n = t.length;
                                for (n; n--;)
                                    if (t[n].player.config.uri === e) return t[n].player;
                                return null
                            }, r.gc = function() {
                                var e = function(e) {
                                        for (; e.parentNode;)
                                            if (e = e.parentNode, e == u) return !0;
                                        return !1
                                    },
                                    t = o.instances,
                                    n = t.length;
                                for (n; n--;) e(t[n].player.element) || t.splice(n, 1)
                            }, r.createPlayers = function(e, t, n) {
                                e || (e = "div.MTVNPlayer");
                                for (var i = r.module("selector").find(e), a = 0, o = i.length; o > a; a++) new r.Player(i[a], t, n);
                                return i.length
                            }, t = function(e, c, f) {
                                if (!(this instanceof t)) return new t(e, c, f);
                                this.ready = !1, this.state = null, this.currentMetadata = null, this.playlistMetadata = null, this.playhead = 0, this.element = null, this.config = c || {}, this.config.performance && (this.config.performance = {
                                    startTime: (new Date).getTime()
                                }), this.config.contentless && a.extend(t.prototype, s), this.isFullScreen = !1;
                                var d, h = y();
                                return this.containerElement = a.isElement(e) ? e : u.getElementById(e), this.id = h.id, this.config = l.buildConfig(this.containerElement, this.config), this.containerElement.style.width = g(this.config.width), this.containerElement.style.height = g(this.config.height), this.containerElement.style.position = "relative", this.containerElement.appendChild(h), this.events = l.copyEvents(f || {}, r.defaultEvents), this.isFlash = void 0 === this.config.isFlash ? !r.isHTML5Player : this.config.isFlash, p(f), d = r.module(this.isFlash ? "flash" : "html5"), d.initialize(), o.playerInit(this, d), this.containerElement ? (d.create(this), void 0) : ("complete" === u.readyState ? n("target div " + this.id + " not found") : i ? function(e) {
                                    i(u).ready(function() {
                                        u.getElementById(e.id) ? d.create(e) : n("target div " + e.id + " not found")
                                    })
                                }(this) : n("Only call new MTVNPlayer.Player(targetID,..) after the targetID element is in the DOM."), void 0)
                            }, t.prototype = {
                                getPlayerElement: function() {
                                    return this.element
                                },
                                play: function() {
                                    this.message("play")
                                },
                                pause: function() {
                                    this.message("pause")
                                },
                                mute: function() {
                                    this.message("mute")
                                },
                                unmute: function() {
                                    this.message("unmute")
                                },
                                playIndex: function(e, t) {
                                    this.message("playIndex", e, t)
                                },
                                playURI: function(e) {
                                    this.message("playUri", e)
                                },
                                setVolume: function(e) {
                                    this.message("setVolume", e)
                                },
                                seek: function(e) {
                                    this.message("seek", e)
                                },
                                getEmbedCode: function() {
                                    return v.call(this)
                                },
                                goFullScreen: function() {
                                    this.message("goFullScreen")
                                },
                                exitFullScreen: function() {
                                    this.message("exitFullScreen")
                                },
                                createUserClip: function() {
                                    return this.message("createUserClip")
                                },
                                bind: function(e, t) {
                                    e = f(e), d(e);
                                    var n = this.events[e];
                                    n ? n instanceof Array ? n.push(t) : n = [t, n] : n = t, this.events[e] = n
                                },
                                unbind: function(e, t) {
                                    e = f(e), d(e);
                                    var n, r = this.events[e];
                                    if (r)
                                        if (r instanceof Array) {
                                            for (n = r.length; n--;)
                                                if (r[n] === t) {
                                                    r.splice(n, 1);
                                                    break
                                                }
                                        } else this.events[e] = null
                                },
                                once: function(e, t) {
                                    var n = this,
                                        r = function(i) {
                                            n.unbind(e, r), t(i)
                                        };
                                    this.on(e, r)
                                },
                                trigger: function(e, t) {
                                    o.processEvent(this.events[e], {
                                        target: this,
                                        data: t,
                                        type: e
                                    })
                                },
                                destroy: function() {}
                            }, t.prototype.on = t.prototype.bind, t.prototype.off = t.prototype.unbind, t.prototype.one = t.prototype.once, t
                        }(window),
                        function(e) {
                            if (e) {
                                var t = "MTVNPlayer:",
                                    n = function(e) {
                                        return e && e.config && e.config.player ? e.config.player : void 0
                                    }(window.MTVN),
                                    i = l.copyProperties({
                                        width: "100%",
                                        height: "100%"
                                    }, n || r.defaultConfig),
                                    a = function() {
                                        a = function() {};
                                        var e = "\n.MTVNPlayer_placeholder {cursor:pointer; position: relative;}\n.MTVNPlayer_placeholder_button {\nposition:absolute;\nheight: 100%;\nwidth: 100%;\ntop:0;\nleft:0;\nbackground: no-repeat url(http://media.mtvnservices.com/player/images/Button_playBig_upSkin.png) center;\n}\n\n.MTVNPlayer_placeholder_button:hover {\nbackground-image: url(http://media.mtvnservices.com/player/images/Button_playBig_overSkin.png)\n}\n";
                                        o.appendStyle(e)
                                    },
                                    u = function(e) {
                                        var n = e.data("player"),
                                            i = function(e, r, i) {
                                                var a = e.type.replace(t, "");
                                                n[a].apply(n, [r, i])
                                            };
                                        for (var a in r.Player.prototype) e.bind(t + a, i)
                                    },
                                    s = function(e) {
                                        var t, n = l.buildConfig(e[0], i);
                                        t = new r.Player(e[0], n), e.data("player", t), t.$el = e, u(e)
                                    };
                                e.fn.player = function(t) {
                                    var n = e.isFunction(t) ? t : function() {},
                                        i = this.not(function() {
                                            return e(this).data("contenturi") ? !1 : !0
                                        });
                                    i.length > 0 ? i.each(function() {
                                        var t = e(this);
                                        !r.isHTML5Player && t.children().length > 0 ? (a(), t.html(function(e, t) {
                                            return '<div class="MTVNPlayer_placeholder">' + t + '<div class="MTVNPlayer_placeholder_button"></div></div>'
                                        }), t.delegate("div.MTVNPlayer_placeholder", "click", function(e) {
                                            e.preventDefault(), t.find("div.MTVNPlayer_placeholder").hide(), t.bind("MTVNPlayer:showPlaceholder", function() {
                                                t.children().not("div.MTVNPlayer_placeholder").remove(), t.find("div.MTVNPlayer_placeholder").show(), delete t.data().player
                                            }), t.data("autoplay", !0), s(t), n()
                                        })) : (t.empty(), s(t), n())
                                    }) : n()
                                }
                            }
                        }(window.jQuery || window.Zepto);
                    var c = function() {
                        var e = {
                                ENDSLATE: "endslate"
                            },
                            t = "http://media.mtvnservices.com/player/api/module/",
                            n = {
                                $: {
                                    shim: !0,
                                    url: "http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"
                                },
                                "mtvn-util": t + "mtvn-util/latest/mtvn-util.min.js",
                                "endslate-css": t + "endslate/latest/style.css",
                                endslate: t + "endslate/latest/endslate.min.js"
                            },
                            i = function(e) {
                                l.provideJQuery();
                                var t = e.target,
                                    i = t.config.module || {};
                                r.loadPackages(a.extend(n, i.endslate), function() {
                                    new(r.require("endslate"))({
                                        config: e.data,
                                        player: t
                                    })
                                })
                            };
                        return r.onPlayer(function(e) {
                            e.bind(c.Events.ENDSLATE, i)
                        }), {
                            Events: e
                        }
                    }();
                    (function(e) {
                        var t = e.MTVNPlayer,
                            n = t.require("_");
                        t.noConflict(), delete t.noConflict, n.isFunction(t.onAPIReady) && t.onAPIReady(), n.isArray(e._mtvnPlayerAPIReady) && n.each(e._mtvnPlayerAPIReady, function(e) {
                            n.isFunction(e) && e()
                        }), e._mtvnPlayerAPIReady = [], e._mtvnPlayerAPIReady.push = function(e) {
                            e()
                        }
                    })(window), r.isReady = !0
                }(MTVNPlayer, window.jQuery || window.Zepto)
        }
    }();