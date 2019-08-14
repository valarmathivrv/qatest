/*Copyright (c) 2011, 2018, Oracle and/or its affiliates.  All rights reserved.*/
try {
 (function(p, r) {
  function Ca(a) {
   if (m.b.ac()) return AB_SCAFFOLD.sampling.onReady(function() {
    Da(a)
   });
   Da(a)
  }

  function Da(a) {
   m.m.a.sxaz("trackingReady", {
    callback: Ca
   });
   if (!m.b.ac() || !AB_SCAFFOLD.sampling.tagShouldNotTrack()) {
    ta = q.h;
    q.h++;
    q.i[ta] = !1;
    m.ay.c();
    "undefined" === typeof a && (a = m.w.c && m.w.c(G));
    var k = a && m.u.b(null, a, {}, null, !0);
    k && k.qs && k.qs.d && "string" === typeof k.qs.d && (m.j = k.qs.d.split(":")[0]);
    k = null;
    k = !1;
    if (k = m.b.ac() ? !AB_SCAFFOLD.sampling.isEnabled() : m.d.an().isInApp && !m.d.cr()) delete m.d._sprg,
     delete m.d._sdrc, ua = !1, m.d.fk = !0, m.d.fi = !0;
    m.b.ac() && (AB_SCAFFOLD.sampling.isActiveSampling() ? m.h = 1 : (delete m.h, delete m.i));
    k && (delete m.h, delete m.i);
    m.h && (ua = !0);
    m.t.l();
    m.d.ay.c || (m.d.ay.c = !0, q.dcsx.ynds(window, "unload", "unload-" + m.d.ay.a, "unloadFn" + m.d.ay.a), q.dcsx.ynds(window, "beforeunload", "unload-" + m.d.ay.a, "beforeunloadFn" + m.d.ay.a));
    q.swde.azsx("unload-" + m.d.ay.a, Ea, {
     once: !0
    });
    m.m.a.azsx("allLocalAdsKilled", function() {
     q.swde.sxaz("unload-" + m.d.ay.a, {
      callback: Ea
     })
    }, {
     once: !0
    });
    m.o.e(m.l.f,
     100);
    m.b.ag() && m.o.f(aa, 3E5);
    if (m.d.cw() && (m.p.f() || m.p.k())) m.p.o(), m.b.da() && Fa && AB_SCAFFOLD.sampling.set({
     enabled: !1,
     multiplier: 1,
     active: !1
    });
    else {
     "undefined" === typeof a && (a = m.w.c(G));
     if (m.b.af()) {
      var k = "number" === typeof m.h,
       d = 1;
      ua && (k ? (d = m.b.ab(m.h, m.i), d = d.sample ? d.multiplier : 0) : d = SAMPLING_MULTIPLIER);
      AB_SCAFFOLD.sampling.set({
       enabled: ua,
       multiplier: d,
       active: k
      })
     }
     k = G.parentNode;
     "undefined" === typeof a && (a = {});
     m.v.i(m.d.ay.a, m.d.ba);
     Na(a, 1E4);
     m.f.aq(a);
     m.u.b(17, a);
     m.aw.c(k, a)
    }
   }
  }

  function Na(a, k) {
   m.d.av.adFindingTimeout =
    m.o.f(function() {
     a && a.shouldKillTimeout || !1 !== q.i[ta] || (m.u.b(11, a), m.m.a.zaxs("adNotFoundTimeout"), aa())
    }, k)
  }
  var I;
  I = "undefined" === typeof AB_SCAFFOLD ? 0 : AB_SCAFFOLD.type;
  var m = {},
   M = "VERVEINAPPVRV1";
  r.floor(r.random() * r.pow(10, 12));
  (function(a) {
   function k(a) {
    return "function" !== typeof a ? function() {
     return a
    } : a
   }

   function d(a) {
    return {
     get: function(b, e) {
      if (b && b._MoatProxySet && "undefined" !== typeof b._MoatProxySet[e]) return b._MoatProxySet[e];
      if ("string" === typeof e && a)
       for (var c = 0; c < a.length; c++) {
        var l =
         a[c],
         d = k(l.func);
        if (l.exp.constructor === RegExp && l.exp.test(e) || l.exp.constructor === String && l.exp == e) return c = d(b, e), b._MoatProxySet[e] = c
       }
      return null
     },
     getPrototypeOf: function(a) {
      return null
     },
     set: function(a, b, e) {
      return a._MoatProxySet[b] = e
     }
    }
   }

   function h(a, b, e, c) {
    if (!a[b]) {
     var l;
     try {
      l = new Proxy({
       _MoatProxySet: {
        _MoatProxyOf: b
       }
      }, d(e))
     } catch (f) {
      throw f.message = "ES6 proxy not found when proxying " + b, f;
     }
     c && (c[b] = l);
     return l
    }
    return a[b]
   }

   function f(a, b) {
    this.exp = a;
    this.func = b
   }

   function g() {
    return function() {
     return 0
    }
   }

   function e(a) {
    return {
     style: {},
     _MoatProxyOf: "HTMLElement",
     tagName: a,
     ownerDocument: document,
     appendChild: function() {},
     removeChild: function() {},
     addEventListener: function() {},
     getElementsByTagName: function(a) {
      return []
     }
    }
   }
   a.a = {};
   var c = this,
    b = new f(/^get[A-Z]/m, 0);
   new f(/^insert[A-Z]/m, 0);
   new f(/^append[A-Z]/m, 0);
   new f(/erCase$/gm, "");
   var l = new f(/^getElements*[A-Z]/m, function() {
     return function() {
      return []
     }
    }),
    u = new f(/^create[A-Z]/m, g),
    x = new f(/^(?!(MoatSuper|Math|MmJsBridge))[A-Z][a-z].*/m, g);
   new f(/subsc.*_$/m,
    0);
   var n = new f("valueOf", 0),
    t = new f(/^MoatMAK/m, 0),
    v = new f(/.*/m, ""),
    z = new f(/.*/m, 0),
    A = new f(/.*/m, function(a, b) {
     return c ? c[b] : 0
    });
   a.a.createWindow = function() {
    var e = h(c, "window", [b, t, x, u, n, A], null);
    a.a.a(e) && (e.window = e, e.parent = e, e.top = e, e.Function = Function, e.setTimeout = g(), e.clearTimeout = g(), e.clearInterval = g(), e.setInterval = g(), e.history = []);
    return a.a.b = e
   };
   a.a.navigator = function() {
    return h(c, "navigator", [v], window)
   };
   a.a.document = function() {
    var d = h(c, "document", [l, b], window);
    a.a.a(d) && (d.documentElement =
     e("HTML"), d.createElement = e, d.defaultView = window, d.body = {
      appendChild: function(a) {
       return a
      },
      removeChild: function() {}
     }, d.scripts = []);
    return d
   };
   a.a.location = function() {
    return h(c, "location", [v], window)
   };
   a.a.screen = function() {
    return h(c, "screen", [z], window)
   };
   a.a.c = function(a, b, e, c) {
    c = c || window;
    setTimeout = e ? a.bind(e) : a;
    clearTimeout = e ? b.bind(e) : b;
    a._MoatProxyOf = "setTimeout";
    b._MoatProxyOf = "clearTimeout";
    c.setTimeout = setTimeout;
    c.clearTimeout = clearTimeout
   };
   a.a.d = function(a, b, e, c) {
    c = c || window;
    setInterval =
     e ? a.bind(e) : a;
    clearInterval = e ? b.bind(e) : b;
    a._MoatProxyOf = "setInterval";
    b._MoatProxyOf = "clearInterval";
    c.setInterval = setInterval;
    c.clearTimeout = clearInterval
   };
   a.a.a = function(a) {
    return a && a._MoatProxyOf
   };
   a.a.e = function(b) {
    return (b = c[b]) && !a.a.a(b)
   };
   a.a.f = !a.a.e("window") && !a.a.e("document");
   a.a.g = function(b) {
    a.a.a(navigator) && (navigator.userAgent = b)
   }
  })(m);
  m.a.f && (this.__moatBPM = m.a, eval("var window = this.__moatBPM.createWindow();var navigator = this.__moatBPM.navigator();var document = this.__moatBPM.document();var location = this.__moatBPM.location();var screen = this.__moatBPM.screen();var setTimeout = window['setTimeout'];var clearTimeout = window['clearTimeout'];var setInterval = window['setInterval'];var clearInterval = window['clearInterval'];"),
   this.__moatBPM = void 0);
  var xa, ya, za, ta = 0,
   Aa = {},
   O = {},
   E = {},
   va = [],
   w = {},
   wa = !1,
   Ga = {
    15: "",
    12: "",
    6: "",
    7: ""
   },
   Y, Ha = function() {
    for (var a in O) O.hasOwnProperty && O.hasOwnProperty(a) && O[a] && m.b.a(O[a]);
    for (a = 0; a < va.length; a++) m.b.b(va[a]);
    for (var k in E) E.hasOwnProperty && E.hasOwnProperty(k) && E[k] && (m.b.a(E[k].tid), E[k] = !1);
    O = {};
    va = [];
    G = null;
    m.c = null;
    m.d.a = null
   },
   aa = function() {
    m.e.a(null, 0) || m.e.b();
    m.f && m.f.a();
    Ha()
   };
  m.g = aa;
  m.h = null;
  m.i = null;
  m.j = "";
  (function(a) {
   function k(d) {
    return (d = a.b.c.toString.call(d)) && ("[object Array]" ===
     d || "[object Array Iterator]" === d)
   }
   a.b = {};
   a.b.c = {};
   a.b.d = k;
   a.b.e = function(a) {
    return a && a.document && a.location && a[__ale + rt__] && a[__setInte + rval__]
   };
   a.b.f = function(d) {
    if (null == d || a.b.e(d)) return !1;
    var h = d.length;
    return 1 === d.nodeType && h ? !0 : "string" === typeof d || k(d) || 0 === h || "number" === typeof h && 0 < h && h - 1 in d
   };
   a.b.forEach = function(d, h, f, g) {
    var e, c = typeof d;
    if (d)
     if ("function" === c)
      for (e in d) {
       if ("prototype" != e && "length" != e && "name" != e && (g || !d.hasOwnProperty || d.hasOwnProperty(e)) && (c = h.call(f, d[e], e), "boolean" ===
         typeof c && !c)) break
      } else if ("number" === c)
       for (e = 0; e < d && (c = h.call(f, d, e), "boolean" !== typeof c || c); e++);
      else if ("function" === typeof d.every) d.every(function(a, e, c) {
     a = h.call(f, a, e);
     return !("boolean" === typeof a && !a)
    });
    else if (a.b.f(d))
     for (e = 0; e < d.length && (c = h.call(f, d[e], e), "boolean" !== typeof c || c); e++);
    else
     for (e in d)
      if (g || d.hasOwnProperty(e))
       if (c = h.call(f, d[e], e), "boolean" === typeof c && !c) break;
    return d
   };
   a.b.g = function(d) {
    if (!d) return !1;
    var h;
    if (d !== Object(d)) h = d;
    else if (a.b.f(d)) {
     h = [];
     for (var f = 0, g =
       d.length; f < g; f++) h[f] = d[f]
    } else
     for (f in h = {}, d) h[f] = d[f];
    return h
   };
   a.b.h = function(d, h) {
    if (!d || "function" !== typeof d) return !1;
    var f = !1;
    0 <= String(d).indexOf("[native code]") ? f = !0 : a.d.b || d === Function.prototype.toString || (f = !0);
    f && h && (f = d.toString && d.toString === Function.prototype.toString);
    return f
   };
   a.b.i = function() {
    try {
     return navigator.userAgent
    } catch (a) {
     return ""
    }
   };
   a.b.j = function(d) {
    d = d || a.b.i();
    d = /iPad|iPhone|iPod|Silk|Kindle|Android|BlackBerry|PlayBook|BB10|Windows Phone|SpreadTrum|MAUI/.exec(d);
    var h = a.d && a.d.c && a.d.c() && a.d.d && a.d.d();
    return !(!d && !h)
   };
   a.b.k = function(d) {
    d = d || a.b.i();
    return !!/Android/.exec(d)
   };
   a.b.l = function(d) {
    d = d || a.b.i();
    var h = /Safari|CriOS/i;
    d = /iPhone|iPod|iPad/.exec(d) && !h.exec(d);
    h = a.d && a.d.c && a.d.c() && a.d.d && a.d.d();
    return !(!d && !h)
   };
   a.b.m = function(d) {
    d = d || a.b.i();
    return a.b.k(d) ? !!/Version/.exec(d) : !1
   };
   a.b.n = function() {
    if (!navigator) return null;
    var d;
    d = a.b.i();
    return "Microsoft Internet Explorer" == navigator.appName ? parseInt(d.replace(/^.*MSIE (\d+).*$/, "$1"), 10) : "Netscape" ==
     navigator.appName && (d = d.match(/(?:Trident\/.*rv:|MSIE )(\d+)/)) ? parseInt(d[1], 10) : null
   };
   a.b.o = function() {
    return null != a.b.n()
   }
  })(m);
  (function(a) {
   function k(a) {
    var c = new RegExp("(^| )" + a + "($| )");
    return function(a) {
     return a && a.className && a.className.match(c)
    }
   }
   a.b.p = 2500;
   a.b.q = 1E3;
   a.b.r = !1;
   a.b.s = !1;
   a.b.t = function() {
    var e = /Firefox\/(\d+)/.exec(a.b.i());
    return e ? (e = parseInt(e[1], 10), 21 > e && 14 < e) : !1
   }();
   a.b.u = function() {
    var e, c = /^(?:[a-z]+:\/\/|:?\/?\/)?(?:www\.)?([^\/:]*)/i;
    a.d.e || (e = a.b.v(), !e && a.d.f &&
     (e = a.d.f));
    e || (e = a.d.g.location.hostname);
    var b = a.d.h();
    b && (e = b.sourceUrl);
    return (e = e && e.match && e.match(c)) && e[1] || a.d.g.location.hostname
   };
   a.b.w = function() {
    var e, c, b = !1;
    a.d.e ? (b = !0, e = window.top && window.top.location && window.top.location.href) : (c = a.k.a(), c.parent === window.top ? (e = c.document.referrer, b = !0) : (e = a.b.v(), e || (e = c.document.referrer)));
    return {
     url: e,
     isCorrect: b
    }
   };
   a.b.x = function() {
    var e;
    a.d.e ? e = 2 : (e = a.k.a(), e = e.parent === window.top ? 2 : location && location.ancestorOrigins ? 1 : 0);
    return e
   };
   a.b.v = function() {
    var a =
     location && location.ancestorOrigins;
    return a ? 0 === a.length ? !1 : a[a.length - 1] : !1
   };
   a.b.y = function() {
    var e, c = a.b.u(),
     b = c && c.split("."),
     l = b && b.length;
    3 <= l ? e = "co" === b[l - 2] || "com" === b[l - 2] ? b[l - 3] + "." + b[l - 2] + "." + b[l - 1] : b[l - 2] + "." + b[l - 1] : 2 == l && (e = b[l - 2] + "." + b[l - 1]);
    return e && decodeURIComponent(e) || decodeURIComponent(c)
   };
   a.b.z = function(a) {
    if ("string" !== typeof a) return "";
    var c = a.match(/^([^:]{2,}:\/\/[^\/]*)/);
    c && c[1] && (a = c[1]);
    return a
   };
   a.b.aa = function(a, c) {
    for (var b = [a], l = 1; l <= c; l++) b.push(a + l), b.push(a - l);
    b = b[r.floor(r.random() * b.length)];
    l = r.floor(r.random() * b);
    return {
     multiplier: b,
     sample: 0 == l
    }
   };
   a.b.ab = function(e, c) {
    if (a.b.ac()) {
     var b = AB_SCAFFOLD.sampling.getMultiplier(),
      l = AB_SCAFFOLD.sampling.inSample();
     a.b.ad(b, l);
     return {
      multiplier: b,
      sample: l
     }
    }
    b = a.b.aa(e, c);
    a.b.ad(b.multiplier, b.sample);
    return b
   };
   a.b.ae = function() {
    return a.b.ab(a.h, a.i).sample
   };
   a.b.ad = function(e, c) {
    a.b.ab = function() {
     return {
      multiplier: e,
      sample: c
     }
    };
    a.b.af() && AB_SCAFFOLD.sampling.set({
     multiplier: c ? e : 0,
     isActive: !!a.h
    })
   };
   a.b.ag = function() {
    var e =
     a.b.n();
    return 5 === e || 6 === e || 7 === e
   };
   a.b.ah = function(e) {
    if (!navigator) return null;
    e = e || a.b.i();
    return e ? (e = e.match(/Edge\/(\d{1,}(.\d{1,})?)/)) ? parseFloat(e[1]) : null : null
   };
   a.b.ai = function(e, c) {
    return -1 !== a.b.indexOf(e, c)
   };
   a.b.aj = function() {
    function a(b) {
     if (!b) return "";
     b = b.match(/[\d]+/g);
     b.length = 3;
     return b.join(".")
    }
    var c = !1,
     b = "";
    if (navigator.plugins && navigator.plugins.length) {
     var l = navigator.plugins["Shockwave Flash"];
     l && (c = !0, l.description && (b = a(l.description)));
     navigator.plugins["Shockwave Flash 2.0"] &&
      (c = !0, b = "2.0.0.11")
    } else if (navigator.mimeTypes && navigator.mimeTypes.length)(c = (l = navigator.mimeTypes["application/x-shockwave-flash"]) && l.enabledPlugin && l.enabledPlugin.description) && (b = a(l.enabledPlugin.description));
    else try {
     l = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), c = !0, b = a(l.GetVariable("$version"))
    } catch (d) {
     try {
      l = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), c = !0, b = "6.0.21"
     } catch (f) {
      try {
       l = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), c = !0, b = a(l.GetVariable("$version"))
      } catch (h) {}
     }
    }
    return c ?
     b : "0"
   };
   a.b.getElementsByClassName = function(a, c, b) {
    c = c || "*";
    b = b || document;
    if (b.getElementsByClassName) {
     var l = [],
      d = b.getElementsByClassName(a);
     if ("*" !== c) {
      a = 0;
      for (b = d.length; a < b; a++) {
       var f = d[a];
       f.tagName === c && l.push(f)
      }
      return l
     }
     return d
    }
    d = [];
    c = b.getElementsByTagName(c);
    b = k(a);
    f = c.length;
    for (a = 0; a < f; a++) l = c[a], b(l) && d.push(l);
    return d
   };
   a.b.ak = k;
   a.b.al = function(a, c) {
    if (!a || !c) return !1;
    var b = new RegExp("(^| )" + c + "($| )");
    return a.className && a.className.match(b)
   };
   a.b.am = function(a) {
    return new p - a.de
   };
   a.b.an =
    function(a) {
     return a.replace(/^http:/, "").replace(/^\/\//, "").replace(/^www[^.]*\./, "").split("/")[0]
    };
   a.b.ao = function(e, c, b) {
    if (("undefined" === typeof b || !b) && e && (b = a.b.ap(e), !b)) return;
    if (e && e.nodeType)
     if ("undefined" === typeof Node) {
      if (1 != e.nodeType) return
     } else if (e.nodeType != Node.ELEMENT_NODE) return;
    if (b.getComputedStyle) return b.getComputedStyle(e, "") && b.getComputedStyle(e, "")[c];
    for (b = c.indexOf("-"); - 1 < b;) c = b == c.length - 1 ? c.substr(0, b) : c.substr(0, b) + c.charAt(b + 1).toUpperCase() + c.substr(b + 2), b = c.indexOf("-");
    if (e.currentStyle) return e.currentStyle[c];
    if (e.style) return e.style[c]
   };
   a.b.aq = function(e) {
    if (!e) return !1;
    var c = a.b.ao(e, "background-image");
    c || (c = a.b.ao(e, "backgroundImage"));
    var b;
    c && (b = (b = c.match("url\\((.*)\\)")) && b[1].replace(/\x22/g, ""));
    return b
   };
   a.b.ar = function(e, c, b) {
    if (!e) return [];
    var l = "boolean" === typeof b ? b : !1,
     d = [e],
     f = !1;
    a.b.forEach("number" === typeof c ? c : 50, function() {
     if ((f = a.b.as(e)) && 1 == f.nodeType) e = f, d.push(e);
     else if (l && f && 9 == f.nodeType)
      if ((f = a.k.b(e)) && 1 == f.nodeType) e = f, d.push(e);
      else return !1;
     else return !1
    });
    return d
   };
   a.b.at = function(e, c) {
    var b = a.b.ar(e);
    return b && -1 !== a.b.indexOf(b, c)
   };
   a.b.as = function(a) {
    return a.parentNode || a.parentElement || !1
   };
   a.b.au = function(e) {
    e = e || a.b.i();
    return !!/iPhone|iPod/.exec(e)
   };
   a.b.av = function(e) {
    e = e || a.b.i();
    return !!/iPad/.exec(e)
   };
   a.b.aw = function() {
    var e = {};
    return function(c) {
     if ("undefined" !== typeof e[c]) return e[c];
     e[c] = null;
     var b = a.f.b([5, 1, 0, 21]),
      l = a.f.b([19, 48, 34, 45, 45, 30, 43]),
      d = a.f.b([15, 34, 39, 45, 30, 43, 30, 44, 45]),
      f = a.f.b([0, 41, 41, 37,
       30, 13, 30, 48, 44
      ]),
      h = a.f.b([8, 39, 44, 45, 26, 32, 43, 26, 38]),
      g = a.f.b([24, 30, 37, 41]);
     a.b.forEach([b, l, d, f, h, g], function(a) {
      if ((new RegExp(a)).test(c)) return e[c] = a, !1
     });
     return e[c]
    }
   }();
   a.b.ax = function() {
    var e;
    return function() {
     if ("undefined" !== typeof e) return e;
     e = {
      results: {
       article: !1,
       page_height: !1,
       meta_properties: !1,
       favicon: !1
      },
      meta_data: {
       num_articles: 0,
       page_height_ratio: null,
       meta_property_matches: []
      }
     };
     var c = a.d.g && a.d.g.document,
      b = (c && c.getElementsByTagName("article")).length;
     0 < b && (e.results.article = !0,
      e.meta_data.num_articles = b);
     var b = a.d.i,
      l = a.d.g && a.d.g.innerHeight,
      b = b && l && b / l;
     1.5 <= b && (e.results.page_height = !0, e.meta_data.page_height_ratio = b);
     var b = c && c.getElementsByTagName("meta"),
      d = {
       "fb:app_id": 1,
       "og:site_name": 1,
       "og:type": 1,
       "fb:page_id": 1,
       "twitter:account_id": 1,
       "twitter:site": 1
      };
     a.b.forEach(b, function(a) {
      if ((a = a.getAttribute("property")) && d.hasOwnProperty(a)) return e.results.meta_properties = !0, e.meta_data.meta_property_matches.push(a), !1
     });
     c = c && c.getElementsByTagName("link");
     a.b.forEach(c,
      function(a) {
       if ("icon" === a.getAttribute("rel") && /favicon\./.test(a.getAttribute("href"))) return e.results.favicon = !0, !1
      });
     return e
    }
   }();
   a.b.ay = function() {
    var e = a.b.ax().results;
    for (prop in e)
     if (e.hasOwnProperty(prop) && e[prop]) return !0;
    return !1
   };
   a.b.az = function() {
    for (var e = [103, 46, 100, 111, 117, 98, 108, 101, 99, 108, 105, 99, 107, 46, 110, 101, 116], c = "", b = 0, l = e.length; b < l; b++) c += String.fromCharCode(e[b]);
    return (new RegExp("^[^.]+." + c)).test(a.b.u())
   };
   a.b.ba = function() {
    var e = a.d.g.screen;
    if (a.b.l()) {
     var c;
     "undefined" !==
     typeof window.orientation ? 0 === window.orientation || 180 === window.orientation ? (c = e.width, e = e.height) : (c = e.height, e = e.width) : c = e = 0;
     return {
      w: c,
      h: e
     }
    }
    if (a.b.m()) {
     c = a.d.g.devicePixelRatio;
     var b = 1;
     .05 > r.abs(e.width / a.d.g.innerWidth - c) && (b = c);
     return {
      w: e.width / b,
      h: e.height / b
     }
    }
    return {
     w: e.width,
     h: e.height
    }
   };
   a.b.bb = function() {
    var a = null;
    "string" === typeof navigator.doNotTrack ? a = navigator.doNotTrack : "string" === typeof navigator.msDoNotTrack ? a = navigator.msDoNotTrack : "string" === typeof window.doNotTrack && (a = window.doNotTrack);
    return !a || "1" !== a[0] && "yes" !== a ? !1 : !0
   };
   a.b.bc = function() {
    var e;
    return function() {
     if ("undefined" === typeof e) {
      var c = a.b.y();
      if (!c) return !1;
      var b = [a.f.b([39, 34, 28, 36, 72, 28, 40, 38]), a.f.b([39, 34, 28, 36, 35, 43, 72, 28, 40, 38])];
      e = a.b.ai(b, c)
     }
     return e
    }
   }();
   a.b.getAttribute = function(a, c) {
    return a[c] || a.getAttribute(c)
   };
   var d = [function(a) {
    if (!a || "IFRAME" !== a.nodeName) return !1;
    var c = a.offsetHeight;
    return isNaN(c) || 15 < c || "google_conversion_frame" !== a.name ? !1 : !0
   }];
   a.b.bd = function(e, c) {
    return "undefined" === typeof e ||
     null === e || !1 === e || !a.b.be(e) || e.nodeName && "IMG" == e.nodeName && !e.complete || a.b.filter(d, function(a) {
      return a(e)
     }).length || !0 === e[F] ? !1 : !0
   };
   a.b.bf = function(e, c, b) {
    a.l.a(c);
    !0 === b && c.aa && (c.aa[H] = void 0, c.aa[F] = void 0);
    !c.hasIframeListener && e.tagName && "iframe" === e.tagName.toLowerCase() && (c.hasIframeListener = !0);
    c.components && c.components.splice(0, 1, e);
    c.aa = e;
    a.m.a.zaxs("adElementUpdate");
    a.b.bg(c.aa);
    a.l.b(c);
    c.periscopeManager && c.periscopeManager.rebuildPixelTargets(e, e.parentNode)
   };
   a.b.bh = function(a) {
    return a.replace(/:/g,
     "%3A").replace(/=/g, "%3D").replace(/,/g, "%2C")
   };
   a.b.bi = function(e) {
    var c = [];
    a.b.forEach(e, function(b, e) {
     var d = typeof b;
     "number" == d ? c.push(a.b.bh(e) + ":" + a.b.bh(b + "")) : "string" == d ? c.push(a.b.bh(e) + ":" + a.b.bh('"' + b + '"')) : "undefined" == d ? c.push(a.b.bh(e) + ":" + a.b.bh("undefined")) : "boolean" == d ? c.push(a.b.bh(e) + ":" + a.b.bh(b ? "true" : "false")) : null === b ? c.push(a.b.bh(e) + ":" + a.b.bh("null")) : "object" != d && "function" != d || !b.toString || c.push(a.b.bh(e) + ":" + a.b.bh('"' + b.toString() + '"'))
    }, null, !0);
    c.sort();
    return "{" +
     c.join(",") + "}"
   };
   a.b.bj = function(a) {
    var c = {};
    if ("string" != typeof a || "{" != a.charAt(0)) return !1;
    a = a.slice(1, -1).split(",");
    for (var b = 0; b < a.length; b++) {
     var l = a[b].split(":");
     l[1] = unescape(l[1]);
     "true" == l[1] ? l[1] = !0 : "false" == l[1] ? l[1] = !1 : '"' == l[1].charAt(0) ? l[1] = l[1].slice(1, -1) : l[1] = "undefined" == l[1] ? void 0 : "null" == l[1] ? null : "NaN" == l[1] ? NaN : parseFloat(l[1]);
     c[unescape(l[0])] = l[1]
    }
    return c
   };
   a.b.be = function(e) {
    var c = e.offsetWidth,
     b = e.offsetHeight;
    if (a.b.r && b < a.b.r || a.b.s && c < a.b.s) return !1;
    a.b.forEach(a.b.ar(e,
     3), function(a) {
     var e = a.style && a.style.width,
      d = a.style && a.style.height;
     a && a.style && "hidden" == a.style.overflow && ("" != e || "" != d) && (a = parseFloat(e), d = parseFloat(d), c = !isNaN(a) && a < c ? a : c, b = !isNaN(d) && d < b ? d : b)
    });
    (e = a.b.bk(e)) && e.width * e.height < a.b.p && (c = e.width < c ? e.width : c, b = e.height < b ? e.height : b);
    return a.d.j() && .9 > c * b / (a.d.g.innerWidth * a.d.g.innerHeight) ? !1 : c * b >= a.b.p
   };
   var h = {};
   a.b.bk = function(e) {
    if (!e || !e.nodeName || "IMG" == !e.nodeName || !e.complete) return !1;
    var c = e.getAttribute("src");
    if (!c) return !1;
    if (h[c]) return h[c];
    try {
     if ("undefined" !== typeof e.naturalHeight && "undefined" !== typeof e.naturalWidth) {
      var b = {
       width: e.naturalWidth,
       height: e.naturalHeight
      };
      return h[e.src] = b
     }
    } catch (d) {}
    return a.d.a && (a.d.a.src = c, a.d.a.a) ? (b = {
     width: parseInt(a.d.a.b),
     height: parseInt(a.d.a.c)
    }, h[c] = b) : !1
   };
   a.b.bl = function(a, c) {
    var b = !1,
     d = c.body,
     f = d && d.firstChild;
    d && f && (d.insertBefore(a, f), b = !0);
    return b
   };
   a.b.bm = function() {
    if (!a.d.k) {
     var e = a.d,
      c;
     a: {
      for (var b = document.getElementsByTagName("script"), d = b.length - 1; - 1 < d; d--)
       if ((c = b[d]) && c.src &&
        c.src.indexOf && (-1 !== c.src.indexOf("verveinappvrv481346465113/moatad.js") || -1 !== c.src.indexOf("verveinappvrv481346465113%2Fmoatad.js")) && ("undefined" === typeof c[F] || !0 !== c[F])) {
        c[F] = !0;
        break a
       } c = void 0
     }
     e.k = c
    }
    return a.d.k ? (a.d.k[F] = !0, a.d.k) : null
   };
   a.b.bn = function(a, c) {
    for (var b in c) c.hasOwnProperty(b) && (a[b] = c[b])
   };
   a.b.bo = function(a) {
    var c, b = /https:/i;
    if (a) c = b.test(a.src || a.href || "http:") ? "https:" : "http:";
    else try {
     c = window.location.protocol
    } catch (d) {
     a = document.createElement("a"), a.href = "", c = a.protocol
    }
    return "https:" ===
     c ? "https:" : "http:"
   };
   a.b.bp = function(a) {
    try {
     return -1 !== (a.src || a.getAttribute("src")).indexOf("psd=1")
    } catch (c) {
     return !1
    }
   };
   a.b.bq = function(a) {
    for (var c = [], b = 0; b < a.length; b++) c.push(a[b]);
    return c
   };
   a.b.nextElementSibling = function(a) {
    if (a.nextElementSibling) return a.nextElementSibling;
    for (; a = a.nextSibling;)
     if (1 === a.nodeType) return a
   };
   a.b.previousElementSibling = function(a) {
    if (a) {
     if (a.previousElementSibling) return a.previousElementSibling;
     for (var c = 0;
      (a = a.previousSibling) && 1E3 > c;)
      if (c++, a && 1 === a.nodeType) return a
    }
   };
   a.b.br = function(a, c, b) {
    "undefined" !== typeof b && (a[c] = b)
   };
   a.b.bs = function(e) {
    return a.b.d(e) ? 0 === e.length : !0
   };
   a.b.filter = function(a, c) {
    for (var b = [], d = 0; d < a.length; d++) c(a[d]) && b.push(a[d]);
    return b
   };
   a.b.bt = function(a, c) {
    for (var b = [], d = 0; d < c.length; d++) b.push(a(c[d]));
    return b
   };
   a.b.reduce = function(e, c, b) {
    if (!a.b.f(e) || "function" !== typeof c) return !1;
    b = b ? c(b, e[0]) : e[0];
    for (var d = 1; d < e.length; d++) b = c(b, e[d]);
    return b
   };
   a.b.indexOf = function(e, c) {
    if (!e) return -1;
    if (a.b.d(e)) {
     for (var b = 0, d = e.length; b < d; b++)
      if (e[b] ===
       c) return b;
     return -1
    }
    return "string" === typeof e ? c || "string" !== typeof c ? e.indexOf(c) : -1 : -1
   };
   a.b.lastIndexOf = function(e, c) {
    if (!e) return -1;
    if (a.b.d(e)) {
     for (var b = e.length - 1; 0 <= b; b--)
      if (e[b] === c) return b;
     return -1
    }
    return "string" === typeof e ? "" === c ? -1 : e.lastIndexOf(c) : -1
   };
   a.b.bu = function(e, c) {
    if (!e || !c) return !1;
    var b = a.b.bv(c);
    if (!b) return !1;
    if (a.b.hasChildNodes(b)) {
     var d = b.childNodes[r.max(0, b.childNodes.length - 1)] || null;
     b.insertBefore(e, d)
    } else b.appendChild(e);
    return b
   };
   a.b.bw = function(e, c, b) {
    if ("string" !=
     typeof e || !c || !document) return !1;
    b = b || document.createElement("script");
    b.type = "text/javascript";
    c = a.b.bu(b, c);
    if (!c) return !1;
    b.src = e;
    return c
   };
   a.b.hasChildNodes = function(a) {
    return a && a.childNodes && 0 < a.childNodes.length
   };
   a.b.bv = function(e) {
    if (!e) return !1;
    if ("OBJECT" !== e.nodeName && "EMBED" !== e.nodeName) return e;
    e = a.b.ar(e);
    var c = !1;
    a.b.forEach(e, function(a) {
     if (a && "OBJECT" !== a.nodeName && "EMBED" !== a.nodeName) return c = a, !1
    });
    return c
   };
   a.b.bx = function(a, c) {
    if ("undefined" === typeof a) return !1;
    for (var b = 0,
      d = c.length; b < d; b++)
     if ("string" == typeof c[b]) {
      try {
       a = a[c[b]]
      } catch (f) {}
      if ("undefined" === typeof a) return !1
     } return a
   };
   a.b.by = function(a) {
    return w && "undefined" !== typeof a && w[a] ? w[a] : !1
   };
   a.b.bz = function(e) {
    if (!e || "object" !== typeof e || "number" !== typeof e.zr) return !1;
    var c = a.b.by(e.zr);
    return c && c === e
   };
   a.b.ca = function(e, c) {
    for (var b = a.b.ar(e, 50, !0), d = 0; d < b.length; d++)
     if (b[d] === c) return !0;
    return !1
   };
   a.b.cb = function(e) {
    if (!e || !e.aa) return !1;
    if ("number" !== typeof e.ADAREA) {
     var c, b;
     if (e.isCompositeAd && e.components &&
      1 < e.components.length)
      for (c = e.ADAREA = 0; c < e.components.length; c++) e.ADAREA += e.components[c].offsetWidth * e.components[c].offsetHeight;
     else e.elementRect ? (c = e.elementRect.right - e.elementRect.left, b = e.elementRect.bottom - e.elementRect.top, e.ADAREA = c * b) : e.ADAREA = e.aa.offsetWidth * e.aa.offsetHeight;
     a.n.a() && a.n.realEstateMeasurements && (c = a.n.realEstateMeasurements.w, b = a.n.realEstateMeasurements.h, e.ADAREA = c * b)
    }
    return e.ADAREA
   };
   a.b.bg = function(e) {
    if (!(!e || e && e.CLIPCHECKINGTARGET)) {
     var c = a.b.ar(e, 3),
      b;
     c && 0 <
      c.length && (a.b.forEach(c, function(a) {
       if (a && a.style && a.style.clip) return b = a, !1
      }), !b && e.style && e.style.clip && (b = e), b && (e.CLIPCHECKINGTARGET = b))
    }
   };
   var f = /rect\((\d+)px,? ?(\d+)px,? ?(\d+)px,? ?(\d+)px\)/;
   a.b.cc = function(e) {
    e = e.match(f);
    var c = !1;
    e && (e = a.b.bt(function(a) {
     return parseInt(a, 10)
    }, e), c = {
     top: e[1],
     right: e[2],
     bottom: e[3],
     left: e[4]
    });
    return c
   };
   a.b.cd = function() {
    var a = function() {
     var a = window.pageXOffset ? window.pageXOffset + window.innerWidth - 1 : 0,
      b = window.pageYOffset ? window.pageYOffset + window.innerHeight -
      1 : 0;
     return a || b ? !document.elementFromPoint(a, b) : !0
    }();
    return function(c, b, d) {
     if (!a) {
      var f = d.defaultView || d.parentWindow || window;
      c += f.pageXOffset;
      b += f.pageYOffset
     }
     return d.elementFromPoint(c, b)
    }
   }();
   a.b.ce = function(a, c) {
    return Object.prototype.hasOwnProperty.call(a, c)
   };
   a.b.cf = function(e) {
    if (!e || !e.style || !e.style.filter) return !1;
    e = e.style.filter.split(" ");
    var c = !1,
     b;
    a.b.forEach(e, function(a) {
     var e = a.match(/\d+/);
     a.search(/opacity/) && e && 0 < e.length && (b = parseFloat(e.join("")), !1 === c || b < c) && (c = b)
    });
    return c
   };
   a.b.cg = function(e, c) {
    var b;
    if (!e) return 100;
    if (c && e.style && "hidden" === e.style.visibility) return 0;
    b = e.style && e.style.opacity ? parseFloat(e.style.opacity) : a.b.cf(e);
    return a.b.ch(b) ? b : 100
   };
   a.b.ci = function(a) {
    return a.backgroundColor ? (a = a.backgroundColor, "transparent" === a ? 0 : -1 !== a.indexOf("rgb") ? 4 > a.split(",").length ? 1 : parseFloat(a.split(",")[3].split(")")[0]) : 1) : -1
   };
   a.b.cj = function(e, c) {
    var b = -1;
    if (a.d.g.getComputedStyle) {
     var d = a.d.g.getComputedStyle(e);
     if (!d) return b;
     if (c && "hidden" === d.visibility ||
      "collapse" === d.visibility || c && 0 === a.b.ci(d)) return 0;
     b = parseFloat(d.opacity)
    }
    return b
   };
   a.b.ck = function(e, c, b) {
    if (!e || !e.aa) return !1;
    "undefined" === typeof e.parentNodeTree && (e.parentNodeTree = a.b.ar(e.aa.parentElement, 50, !0), c && e.parentNodeTree.push(e.aa));
    var d = 100,
     f, h;
    a.b.forEach(e.parentNodeTree, function(c) {
     f = a.b.cg(c, b);
     0 === f && (h = a.b.cj(c, b), a.b.ch(h) && h >= f && (f = h));
     f < d && (d = f);
     if (0 === d) return !1
    });
    return d
   };
   a.b.cl = function(a, c, b) {
    return function() {
     c.apply(b || null, a.concat(a.slice.call(arguments)))
    }
   };
   a.b.ap = function(a) {
    try {
     var c = a && a.ownerDocument;
     return c && (c.defaultView || c.parentWindow)
    } catch (b) {
     return !1
    }
   };
   a.b.cm = function(e, c, b) {
    if (!e || !c) return !1;
    var d = [];
    "number" !== typeof b && (b = 50);
    for (var f = 0; f < b; f++)
     if (c != c.parent) {
      if (e = a.k.b(e, c)) d.push(e);
      else break;
      c = c.parent
     } else break;
    return d
   };
   a.b.cn = function(a) {
    a = r.max(4, a);
    return ((1 + r.random()) * r.pow(16, a) | 0).toString(16).substring(0, a)
   };
   a.b.co = function() {
    var e = a.b.cn;
    return e(4) + "-" + e(4) + "-" + e(4) + "-" + e(4)
   };
   a.b.a = function(a) {
    window && window.clearTimeout &&
     window.clearTimeout(a)
   };
   a.b.b = function(a) {
    window && window.clearInterval && window.clearInterval(a)
   };
   var g = function(e, c) {
    if (a.b.h(c.toString)) return c.toString();
    if (a.b.h(e && e.Function.prototype.toString)) return c.toString = e.Function.prototype.toString, c.toString();
    var b = a.d.g !== e && a.d.g && a.d.g.Function.prototype.toString;
    if (a.b.h(b)) return c.toString = b, c.toString();
    if (a.d.l && 8 >= a.b.n()) return c.toString();
    var b = e || window,
     d = b.document.createElement("IFRAME");
    d.style.display = "none";
    d.style.width = "0px";
    d.style.height = "0px";
    d.width = "0";
    d.height = "0";
    a.b.bu(d, b.document.documentElement);
    d.contentWindow && (c.toString = d.contentWindow.Function.prototype.toString);
    var f = c.toString();
    b.document.documentElement.removeChild(d);
    return f
   };
   a.b.toString = function(e, c) {
    c = c || a.d.g;
    var b;
    try {
     b = g(c, e)
    } catch (d) {
     b = e.toString()
    }
    return b
   };
   a.b.cp = function(e, c, b) {
    e = a.b.toString(e, b);
    if (a.d.m()) b.eval("(" + e + ")(" + c + ")");
    else if (a.d.n(b))(new b.Function("(" + e + ")(" + c + ")"))();
    else {
     var d = b.document.createElement("script");
     d.type =
      "text/javascript";
     d.text = "(" + e + ")(" + c + ")";
     a.b.bu(d, b.document.body)
    }
   };
   a.b.cq = function(e, c, b, d) {
    function f(a, b) {
     try {
      return d(b[a])
     } catch (c) {}
    }
    var h, g;
    if ("string" !== typeof e) return !1;
    "function" !== typeof d && (d = function(a) {
     return a
    });
    h = window;
    g = f(e, h);
    if (!g) {
     c = a.k.c(h, "number" === typeof c ? c : 20);
     if (!c) return !1;
     for (var t = 0, v = c.length; t < v && (h = c[t], g = f(e, h), "undefined" === typeof g); t++);
    }
    return b ? [g, h] : g
   };
   a.b.cr = function(a, c) {
    var b = a.toString();
    c && (b = "(" + b + "(" + c + "))");
    return "(function(){try{return(" + b + ")()}catch(e){return false}})()"
   };
   a.b.cs = function() {
    if (!a.d.o) return !1;
    var e = a.b.i(),
     c = e && "string" === typeof e,
     b = /Version\/(\d*)/,
     d = /CPU.*OS\s(\d*)_/,
     b = (b = c && e.match(b)) && 1 < b.length ? parseInt(b[1], 10) : !1;
    "number" !== typeof b && (b = (b = c && e.match(d)) && 1 < b.length ? parseInt(b[1], 10) : !1);
    return b
   };
   a.b.ct = function(a) {
    if ("object" === typeof a) {
     if (Object.keys) return Object.keys(a);
     var c = [],
      b;
     for (b in a) c.push(b);
     return c
    }
   };
   a.b.every = function(a, c) {
    if ("object" !== typeof a || !a || "function" !== typeof c) return !1;
    var b = !0,
     d;
    for (d in a)
     if (a.hasOwnProperty(d) &&
      (b = c(a[d]), !1 === b || "boolean" !== typeof b)) break;
    return b
   };
   a.b.cu = function(a, c) {
    c = c || {
     width: "1px",
     height: "1px",
     style: {
      left: "-9999px",
      top: "-9999px",
      position: "absolute"
     }
    };
    for (var b in c)
     if (c.hasOwnProperty(b))
      if ("style" === b)
       if ("string" === typeof c[b]) a.setAttribute(b, c[b]);
       else
        for (var d in c[b]) c[b].hasOwnProperty(d) && (a[b][d] = c[b][d]);
    else a[b] = c[b]
   };
   a.b.some = function(a, c) {
    if ("object" !== typeof a || !a || "function" !== typeof c) return !1;
    for (var b in a)
     if (a.hasOwnProperty(b)) {
      var d = c(a[b]);
      if ("boolean" !== typeof d) break;
      if (d) return !0
     } return !1
   };
   a.b.cv = function(a) {
    return void 0 === a || null === a || !1 === a || "" === a ? !0 : !1
   };
   a.b.cw = function(e, c, b) {
    return a.b.ch(e) && a.b.ch(c) && a.b.ch(b) ? r.abs(e - c) <= b : !1
   };
   a.b.ch = function(a) {
    return "number" === typeof a && !isNaN(a)
   };
   a.b.cx = function(e, c) {
    if (!a.b.d(c)) return !1;
    var b = 0;
    a.b.forEach(c, function(a) {
     a === e && b++
    });
    return b
   };
   a.b.cy = function(a) {
    return "string" !== typeof a ? !1 : /^(?:https?:\/\/)?[^.:\/]+(?:\.[^.:\/]+)/.test(a)
   };
   a.b.cz = function(e, c) {
    if ("string" !== typeof e || "string" !== typeof c) return e;
    if (!e.match(c)) {
     var b = e.lastIndexOf("_BETA");
     a.b.ac() && 0 < b && (e = e.slice(0, b), c += "_BETA");
     e += c
    }
    return e
   };
   a.b.da = function() {
    return "undefined" === typeof AB_SCAFFOLD ? !1 : 0 !== I
   };
   a.b.af = function() {
    return a.b.da() && 1 === I
   };
   a.b.ac = function() {
    return a.b.da() && 2 === I
   };
   a.b.db = function() {
    return "undefined" !== typeof I && 2 === I
   };
   a.b.dc = function() {
    return "undefined" === typeof AB_SCAFFOLD ? !0 : 1 === I || 0 === I
   }
  })(m);
  (function(a) {
   a.k = {};
   a.k.d = function(a) {
    try {
     var d = typeof a.location.toString;
     if ("undefined" === d || "unknown" === d) return !0;
     var h = typeof a.document;
     if ("undefined" === h || "unknown" === h) return !0;
     var f = a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth || 0;
     return "number" !== typeof(a.screenX || a.screenLeft || 0) || "number" !== typeof f ? !0 : !1
    } catch (g) {
     return !0
    }
   }
  })(m);
  (function(a) {
   a.k.e = function(k) {
    if (!k) return null;
    try {
     if (k.moatHostileIframe) return null;
     var d = k.getAttribute("src");
     if (d && d.slice && "http" === d.slice(0, 4) && a.b.an(d) != a.b.an(Ia.location.toString())) return k.moatHostileIframe = !0, null;
     var h = k &&
      (k.contentDocument || k.contentWindow && k.contentWindow.document);
     if (h && "string" === typeof h.location.toString()) return h;
     k.moatHostileIframe = !0;
     return null
    } catch (f) {
     return k.moatHostileIframe = !0, null
    }
   };
   a.k.b = function(k, d) {
    d = d || a.b.ap(k);
    try {
     return d && d.frameElement
    } catch (h) {
     return !1
    }
   };
   a.k.f = function(k, d) {
    var h;
    a.b.forEach(k.getElementsByTagName("iframe"), function(a) {
     if (a && a.contentWindow && a.contentWindow == d) return h = a, !1
    });
    return h
   };
   a.k.g = function(k) {
    if (k = a.k.b(k)) try {
     return k.parentNode
    } catch (d) {}
    return null
   };
   a.k.h = function(k, d) {
    if (!k) return !1;
    var h = 0,
     f = [];
    for (d = d || 10; h < d;)
     if (h++, k = a.k.b(k)) f.push(k);
     else return f
   };
   a.k.c = function(k, d) {
    if (!k) return !1;
    var h = 0,
     f = [k],
     g;
    for (d = d || 10; h < d;) {
     h++;
     try {
      if (k = (g = k.frameElement) && a.b.ap(g), g && k && !a.k.d(k)) f.push(k);
      else return f
     } catch (e) {
      break
     }
    }
    return f
   };
   a.k.i = function(k, d, h) {
    function f(d, e, c) {
     var b = [];
     d && b.push(d);
     c = c || 0;
     if (10 < c || !d || !d.frames) return b;
     var l;
     try {
      l = isNaN(d.frames.length) ? 100 : d.frames.length
     } catch (h) {
      l = 100
     }
     for (var u = 0; u < l; u++) try {
      try {
       if (void 0 == d.frames[u]) break
      } catch (h) {
       break
      }
      e &&
       !a.k.j(d.frames[u]) ? b.push(d.frames[u]) : b = b.concat(f(d.frames[u], e, c + 1))
     } catch (h) {
      break
     }
     return b
    }
    return f(k, d, h)
   };
   a.k.k = function(a, d) {
    d = "number" == typeof d && 0 < d ? d : 15;
    var h = [],
     f;
    try {
     if (a) {
      f = a.top;
      for (var g = 0; g < d; g++)
       if ((a = a.parent) && a != a.top) h.push(a);
       else break;
      h.push(f)
     }
    } catch (e) {
     return []
    }
    return h
   };
   a.k.l = [];
   a.k.j = function(k) {
    for (var d, h = 0, f = a.k.l.length; h < f; h++) a.k.l[h].win == k && (d = a.k.l[h]);
    if (!d) {
     d = {
      win: k,
      friendly: !1
     };
     try {
      k.document && (d.friendly = !0)
     } catch (g) {}
    }
    return d.friendly
   };
   a.k.m = function(k,
    d, h) {
    k = a.k.c(k).pop();
    k = a.k.i(k, !0);
    for (var f = 0, g = k.length; f < g; f++)
     if (k[f] == d) {
      if (h && d.parent && a.k.d(d.parent)) break;
      return !0
     } return !1
   };
   a.k.a = function() {
    if (a.d.e) return window.top;
    for (var k = 0, d = window; 50 > k;) {
     k++;
     if (d === window.top || a.k.d(d.parent)) break;
     d = d.parent
    }
    return d
   }
  })(m);
  (function(a) {
   function k(a) {
    return function() {
     var d = !1;
     return function(g) {
      try {
       return a && a.apply ? a.apply(null, arguments) : a(g)
      } catch (v) {
       if (!d) {
        d = !0;
        var e = (new p).getTime();
        this["Moat#ETS"] || (this["Moat#ETS"] = e);
        this["Moat#EMC"] ||
         (this["Moat#EMC"] = 0);
        var c = 36E5 <= e - this["Moat#ETS"],
         b = "";
        try {
         b = a.toString()
        } catch (z) {
         b = "failed"
        }
        b = v.name + " in closure (cb): " + v.message + ", stack=" + v.stack + ", \ncb=" + b + "\n";
        if (!c && 10 > this["Moat#EMC"]) {
         this["Moat#EMC"]++;
         try {
          var l = "undefined" !== typeof omidNative && ("undefined" === typeof Image || Image && Image._MoatProxyOf),
           u = l ? "" : document.referrer,
           x = "undefined" === typeof M ? "VERVEINAPPVRV1" : M,
           n = "https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape(x) + "&ac=1&k=" + escape(b) + "&ar=" +
           escape("21bcfc3260-clean") + "&j=" + escape(u) + "&cs=" + (new p).getTime();
          if (l) omidNative.sendUrl(n);
          else {
           var t = new Image(1, 1);
           t.src = n
          }
         } catch (z) {}
        } else if (c) {
         this["Moat#EMC"] = 1;
         this["Moat#ETS"] = e;
         try {
          u = (l = "undefined" !== typeof omidNative && ("undefined" === typeof Image || Image && Image._MoatProxyOf)) ? "" : document.referrer, x = "undefined" === typeof M ? "VERVEINAPPVRV1" : M, n = "https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape(x) + "&ac=1&k=" + escape(b) + "&ar=" + escape("21bcfc3260-clean") + "&j=" +
           escape(u) + "&cs=" + (new p).getTime(), l ? omidNative.sendUrl(n) : (t = new Image(1, 1), t.src = n)
         } catch (z) {}
        }
       }
      }
     }
    }()
   }
   a.o = {};
   var d = {};
   a.o.a = d;
   a.o.b = function(d, f) {
    if (!d || "string" !== typeof f || !d[f] || d == window) return !1;
    if ("string" === typeof d.nodeName && ("OBJECT" === d.nodeName || "EMBED" === d.nodeName)) {
     var g = a && a.c && a.c[f];
     if (g && g !== d[f]) return g
    }
    return !1
   };
   a.o.c = function(h, f, g, e) {
    var c, b, l = !1;
    "touchstart" === f && a.d.p && (l = {
     passive: !0
    });
    e ? d[f + e] ? g = d[f + e] : (g = k(g), d[f + e] = g) : g = k(g);
    if (h.addEventListener) e = "addEventListener",
     c = "";
    else if (h.attachEvent) e = "attachEvent", c = "on";
    else return !1;
    if (b = a.o.b(h, e)) try {
     b.call(h, c + f, g, l)
    } catch (u) {
     h[e](c + f, g, l)
    } else if (h && e && h[e]) try {
     h[e](c + f, g, l)
    } catch (u) {
     return !1
    }
   };
   a.o.d = function(h, f, g, e) {
    var c, b;
    g = e ? d[f + e] : g;
    delete d[f + e];
    if (!h) return !1;
    if (h.removeEventListener) e = "removeEventListener", c = "";
    else if (h.detachEvent) e = "detachEvent", c = "on";
    else return !1;
    if (b = a.o.b(h, e)) try {
     b.call(h, c + f, g, !1)
    } catch (l) {
     h[e](c + f, g, !1)
    } else try {
     h[e](c + f, g, !1)
    } catch (l) {}
   };
   a.o.e = function(d, f) {
    d = k(d);
    var g;
    window && window.setInterval && (g = window.setInterval(d, f), 1 == g && (a.b.b(g), g = window.setInterval(d, f)), va.push(g));
    return g
   };
   a.o.f = function(d, f) {
    var g, e = k(function(a) {
     delete O[g];
     return d && d.apply ? d.apply(null, arguments) : d(a)
    });
    window && window.setTimeout && (g = window.setTimeout(e, f), 1 == g && (a.b.a(g), g = window.setTimeout(e, f)), O[g] = !0);
    return g
   };
   a.o.g = function(d, f, g, e) {
    if (!e) return !1;
    e += "";
    E[e] && a.b.a(E[e].tid);
    E[e] = {};
    E[e].callback = k(d);
    E[e].params = f;
    E[e].interval = g;
    E[e].tid = a.o.f(a.o.h(e), g);
    callbacks = null
   };
   a.o.h = function(d) {
    return function() {
     if (!E || !E[d]) return !1;
     var f = E[d].callback(E[d].params);
     if ("boolean" === typeof f && !1 === f) return a.b.a(E[d].tid), E[d] = !1;
     E[d].tid = a.o.f(a.o.h(d), E[d].interval);
     time = d = null
    }
   };
   a.o.i = function(d) {
    E[d] && (a.b.a(E[d].tid), E[d] = !1)
   };
   a.o.j = function() {
    return E
   };
   a.o.k = function(d, f, g, e) {
    var c = 0,
     b = function() {
      c += 1;
      !0 !== d() && (c < f ? a.o.f(b, g) : "function" === typeof e && e())
     };
    b()
   };
   a.o.l = k
  })(m);
  (function(a) {
   function k() {
    if ("number" === typeof a.b.ah()) return !1;
    var d = a.b.i();
    return (d = d && d.match(/Chrom(e|ium)\/([0-9]+)\./)) ?
     parseInt(d[2], 10) : !1
   }
   a.d = {};
   var d = a.k.d(window.parent);
   a.d.q = window != window.parent;
   a.d.r = a.d.q && !d;
   a.d.e = d ? !1 : !a.k.d(window.top);
   a.d.g = a.d.e ? window.top : a.d.r ? window.parent : window;
   a.d.s = function(a) {
    var d, g, e, c = 0,
     b = 0;
    try {
     d = a.document;
     g = d.documentElement;
     e = d.body;
     var l = document.getElementById("mianahwvc");
     if (l) return l.getBoundingClientRect();
     "undefined" !== typeof a.innerWidth ? (c = a.innerWidth, b = a.innerHeight) : "CSS1Compat" === d.compatMode && 5 !== d.documentMode || !e || "undefined" === typeof e.clientWidth ? g && "undefined" !==
      typeof g.clientWidth && (c = g.clientWidth, b = g.clientHeight) : (c = e.clientWidth, b = e.clientHeight)
    } catch (u) {}
    return {
     width: c,
     height: b,
     left: 0,
     right: c,
     top: 0,
     bottom: b
    }
   };
   a.d.t = function() {
    var d = a.p && a.p.a();
    if (d) return d;
    if (!a.d.g || !a.d.g.screen) return null;
    d = a.d.g.screen;
    return {
     width: d.width,
     height: d.height,
     availWidth: d.availWidth,
     availHeight: d.availHeight
    }
   };
   a.d.u = function() {
    var d = a.d.g;
    if (!d) return !1;
    try {
     var f = d.document && d.document.body,
      g = d.document && d.document.documentElement
    } catch (c) {}
    try {
     var e = a.d.t();
     e &&
      (a.d.v = e.availWidth, a.d.w = e.availHeight, a.d.x = e.width, a.d.y = e.height)
    } catch (c) {
     a.d.v = a.d.v || 0, a.d.w = a.d.w || 0, a.d.x = a.d.x || 0, a.d.y = a.d.y || 0
    }
    e = a.d.s(d);
    a.d.z = e.width;
    a.d.aa = e.height;
    try {
     a.d.ab = d.outerWidth || d.document && d.document.body && d.document.body.offsetWidth || 0, a.d.ac = d.outerHeight || d.document && d.document.body && d.document.body.offsetHeight || 0
    } catch (c) {
     a.d.ab = 0, a.d.ac = 0
    }
    f && g && (a.d.i = r.max(f.scrollHeight, f.offsetHeight, g.clientHeight, g.scrollHeight, g.offsetHeight), a.d.ad = f.scrollTop || g.scrollTop ||
     d.pageYOffset || 0)
   };
   a.d.u();
   a.d.b = 0 <= String(Function.prototype.toString).indexOf("[native code]");
   a.d.ae = -1 !== a.b.i().toLowerCase().indexOf("firefox");
   a.d.l = a.b.o();
   a.d.af = !!window.chrome && a.b.h(window.chrome.csi, !0);
   a.d.ag = !!("opr" in window && "addons" in window.opr && a.b.h(window.DetachedViewControlEvent));
   a.d.ah = !a.d.af && Error.propertyIsEnumerable("captureStackTrace") && void 0 !== window.onorientationchange;
   a.d.ai = a.d.ag || a.d.ah;
   a.d.aj = a.d.af && (!!window.Atomics && !!window.Atomics.notify || !!window.EnterPictureInPictureEvent ||
    !!window.chrome.webstore);
   a.d.ak = a.d.af && !a.d.ai && void 0 !== window.onorientationchange;
   a.d.al = a.d.aj || a.d.ak;
   a.d.am = navigator && navigator.appVersion && -1 < navigator.appVersion.search(/Edge\/\d*.\d*/) && !document.documentMode && !!window.StyleMedia;
   a.d.o = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") || window.HTMLVideoElement && window.HTMLVideoElement.prototype && "webkitWirelessVideoPlaybackDisabled" in window.HTMLVideoElement.prototype;
   a.d.an = function() {
    var d;
    return function() {
     if ("undefined" !==
      typeof d) return d;
     d = {
      isInApp: 0,
      env: "Not app"
     };
     a.b.l() ? (d.isInApp = 1, d.env = "iOS") : a.b.m() && (d.isInApp = 1, d.env = "Android");
     return d
    }
   }();
   a.d.ao = k;
   a.d.ap = a.d.aj && 40 <= k();
   a.d.aq = function() {
    if (!a.d.ap) return !1;
    var d = a.f.b([48, 30, 27, 29, 43, 34, 47, 30, 43]);
    if (navigator && navigator[d]) return !0;
    if (66 > k()) {
     var d = a.f.b([28, 33, 43, 40, 38, 30]),
      f = a.f.b([43, 46, 39, 45, 34, 38, 30]),
      g = a.f.b([28, 40, 39, 39, 30, 28, 45]);
     return "undefined" !== typeof window[d] && !(window[d] && window[d][f] && window[d][f][g])
    }
    return !1
   };
   a.d.ar = function() {
    if (a.f.c !==
     a.f.d.toString()) return !1;
    var d = a.f.b([48, 30, 27, 29, 43, 34, 47, 30, 43]);
    return window && window.navigator && window.navigator[d]
   };
   a.d.as = function() {
    if (a.f.c !== a.f.e.toString()) return !1;
    var d = a.f.b([26, 37, 30, 43, 45]),
     f = a.f.b([28, 40, 39, 31, 34, 43, 38]),
     g = a.f.b([41, 43, 40, 38, 41, 45]);
    return !a.d.an().isInApp && a.d.o && a.d.b && !a.b.h(window[d], !0) && !a.b.h(window[f], !0) && !a.b.h(window[g], !0)
   }
  })(m);
  (function(a) {
   function k(a) {
    return a.omid_v1_present || a.omid
   }

   function d(b, c) {
    if (a.d.d() && a.d.bl || !c && !a.d.an().isInApp) return !1;
    var e = l;
    return (l = e = e && e[0] ? e : a.b.cq("mraid", 20, !0)) ? b ? e : e[0] : !1
   }

   function h(a) {
    return a && a.getVendor && "function" === typeof a.getVendor && a.getVendor()
   }

   function f(a) {
    return a && a.getVendorVersion && "function" === typeof a.getVendorVersion && a.getVendorVersion() + ""
   }

   function g(b, c) {
    b.qmrv(function(b) {
     c.preventTryFindingAdAgain = !0;
     a.t.a(c);
     a.s.c(c)
    }, c.MMAK_ID)
   }

   function e(b, c) {
    a.s.a() && b.hgen && b.hgen(function(b) {
     b = "click" !== b ? 23 : 3;
     c && (c.dm || (c.counters && c.counters.strictDwell && c.counters.strictDwell.tCur && (c.cb =
      c.counters.strictDwell.tCur), c.dm = 1), data = {}, data.e = b, data.q = c.aq[b]++, a.u.a(c, data))
    }, c.MMAK_ID)
   }

   function c() {
    var b = a.d.bd,
     c = 53 <= a.d.ao();
    return c ? c : b && -1 < b.search("Spotify")
   }
   a.d.at = "26";
   a.b.db() && (a.d.at += "_beta");
   a.d.au = "MoatSuperV";
   a.d.av = {};
   a.d.aw = a.d.au + a.d.at;
   a.d.ax = 0;
   a.d.ay = window && window["Moat#G" + a.d.at] || {};
   a.d.az = "Moat#G" + a.d.at;
   window[a.d.az] = a.d.ay;
   a.d.ay.a || (a.d.ay.a = r.floor(r.random() * r.pow(10, 12)));
   a.d.ba = r.floor(r.random() * r.pow(10, 12));
   var b = a.b.w();
   a.d.bb = b.url;
   a.d.bc = b.isCorrect;
   b = a.o.l(function() {
    return navigator.userAgent
   });
   a.d.bd = b();
   "string" !== typeof a.d.bd && (a.d.bd = "");
   a.d.c = function() {
    return a.a.f
   };
   a.d.be = function() {
    var b;
    !a.d.c() || "undefined" === typeof omidNative || "function" !== typeof omidNative.setInterval && "function" !== typeof omidNative.clearInterval && "function" !== typeof omidNative.setTimeout && "function" !== typeof omidNative.clearTimeout && "function" !== typeof omidNative.downloadJavaScriptResource && "function" !== typeof omidNative.sendUrl || (b = omidNative);
    return function() {
     return b
    }
   }();
   a.d.d = function() {
    var b = !1;
    if ("undefined" !== typeof a.d.be()) b = !0;
    else try {
     b = !!k(a.d.g.top.frames)
    } catch (c) {
     b = !1
    }
    return function() {
     return b
    }
   }();
   a.d.bf = function() {
    var b;
    return function(c) {
     b || (b = {}, a.p.b(b));
     return b[c]
    }
   }();
   a.d.bg = (new p).getTime();
   a.d.bh = !0;
   a.d.bi = !1;
   a.d.bj = !1;
   a.d.bj = !0;
   a.d.bk = function(a, b) {
    a = a.split(".");
    b = b.split(".");
    for (var c = 0; 3 > c; c++) {
     var e = parseInt(a[c]),
      d = parseInt(b[c]);
     if (e && isNaN(d)) return 1;
     if (d && isNaN(e)) return 0;
     if (e > d) return 1;
     if (d > e) return 0
    }
    return 2
   };
   var l, u = !1;
   a.d.bm =
    d;
   a.d.bn = function() {
    return !!d()
   };
   a.d.bo = function() {
    var a = d(!0);
    return a && a[1]
   };
   a.d.bp = function() {
    if (!a.d.an().isInApp) return !1;
    var b = d(),
     c;
    if (c = b)
     if (b)
      if (u) c = !0;
      else {
       c = "";
       a.b.l() ? c = "ios" : a.b.m() && (c = "android");
       var e = {
        AdMarvel: {
         ios: "340",
         android: "270"
        },
        AdColony: {
         ios: "3.0",
         android: "3.0"
        }
       } [h(b)];
       c = e ? e[c] : null;
       e = f(b);
       if (c = c ? 0 !== a.d.bk(e, c) : !1) b: {
        if (b && b.isViewable && "function" === typeof b.isViewable) try {
         c = "undefined" !== typeof b.isViewable();
         break b
        } catch (l) {}
        c = !1
       }
       c = u = c
      }
    else c = !1;
    return c
   };
   a.d.bq = a.d.bp;
   a.d.br = a.d.bp;
   a.d.bs = function() {
    var a = d();
    return a && h(a)
   };
   a.d.bt = function() {
    var a = d();
    return a && f(a)
   };
   a.d.bu = function() {
    return !1
   };
   a.d.bv = function() {
    if (a.d.bn() && a.d.bp() && a.o && a.o.g) {
     var b = "___mraid_loop___" + (new p).getTime();
     a.b.bx(a.d.bo(), ["mraid", "isViewable"]) && a.o.g(function() {
      return d().isViewable() ? (a.d.bu = function() {
       return !0
      }, !1) : !0
     }, {}, 300, b)
    }
   };
   a.d.bw = function() {
    return !1
   };
   a.d.bx = !1;
   var x = function() {
    var b = function(b) {
      if (a.d.an().isInApp) return !1;
      var c = a.q && a.q.a();
      if (a.d.by || c || a.d.bz()) return a.d.by ||
       c || a.d.bz(), !1;
      b = a.b.bx(b, ["$sf"]);
      if (!b) return !1;
      var e = b.ext;
      b = e && e.geom;
      var c = [
        ["exp", "b", "t", "l", "r"], "self b t l r h w xiv yiv".split(" ")
       ],
       d, l = !1;
      if (e && b && "function" === typeof b) try {
       if ((b = b()) && b.win) {
        if (a.b.forEach(b.win, function(a) {
          if (a && ("number" === typeof a || "string" === typeof a) && 0 !== parseFloat(a, 10)) return l = !0, !1
         }), !l) return !1
       } else return !1;
       if (b.par) return !0;
       for (var e = 0, f = c.length; e < f; e++) {
        d = c[e][0];
        for (var g = 1, v = c[e].length; g < v; g++)
         if ("undefined" === typeof b[d][c[e][g]]) return !1
       }
       return !0
      } catch (h) {}
      return !1
     },
     c, e, d, l;
    a.d.ca = function() {
     if (l) return !0;
     c = window;
     e = document;
     l = b(c);
     d = !(!l && !c.$sf);
     if (!l && a.d.r)
      for (var f = 0; 20 > f && !l; f++) {
       var g = a.k.b(e.body);
       if (!1 !== g && !g) break;
       e = (c = a.b.ap(g)) && c.document;
       l = l || b(c);
       d = d || l || c.$sf
      }
     return l
    };
    a.d.cb = function() {
     return a.d.ca() && c
    };
    a.d.cc = function() {
     "undefined" === typeof l && a.d.ca();
     return d
    }
   };
   a.d.cd = !1;
   a.d.ce = !1;
   a.d.cf = null;
   a.d.cb = function() {
    x();
    return a.d.cb()
   };
   a.d.cc = function() {
    x();
    return a.d.cc()
   };
   a.d.ca = function() {
    x();
    return a.d.ca()
   };
   var n = function() {
    var b = function(b) {
      return a.d.an().isInApp ?
       !1 : a.b.bx(b, ["context", "observeIntersection"]) ? !0 : !1
     },
     c = window,
     e = document,
     d = b(c),
     l = !(!d && !c.context);
    if (!d && a.d.r)
     for (var f = 0; 20 > f && !d; f++) {
      e = a.k.b(e.body);
      if (!1 !== e && !e) break;
      e = (c = a.b.ap(e)) && c.document;
      d = d || b(c);
      l = l || d || c.context
     }
    a.d.cg = function() {
     return d && c
    };
    a.d.ch = function(a) {
     "boolean" === typeof a && (d = a);
     return d
    };
    a.d.ci = function() {
     return l
    }
   };
   a.d.cg = function() {
    n();
    return a.d.cg()
   };
   a.d.ci = function() {
    n();
    return a.d.ci()
   };
   a.d.ch = function() {
    n();
    return a.d.ch()
   };
   a.d.h = function() {
    var b = a.b.cq("context");
    if (b && a.b.bx(b, ["observeIntersection"])) return b;
    b = a.b.cq("AMP_CONTEXT_DATA");
    if (a.b.bx(b, ["initialIntersection"])) return b
   };
   var t = function() {
    var b, c = function(c) {
      return (b = a.b.bx(c, ["amazonmobileadsviewablebridge"])) && "function" === typeof b.addEventListener && "function" === typeof b.getVersion ? !0 : b = !1
     },
     e = document,
     d = window,
     l = c(d),
     f = b && 1.1 <= b.getVersion();
    if (!l && a.d.r)
     for (var g = 0; 20 > g && !l; g++) {
      e = a.k.b(e.body);
      if (!1 !== e && !e) break;
      e = (d = a.b.ap(e)) && d.document;
      l = l || c(d);
      f = f || b && 1.1 <= b.getVersion()
     }
    a.d.cj = function() {
     return l &&
      d
    };
    a.d.ck = function() {
     return l
    };
    a.d.cl = function() {
     return f
    };
    a.d.cm = function() {
     return b
    }
   };
   a.d.cj = function() {
    t();
    return a.d.cj()
   };
   a.d.ck = function() {
    t();
    return a.d.ck()
   };
   a.d.cl = function() {
    t();
    return a.d.cl()
   };
   a.d.cm = function() {
    t();
    return a.d.cm()
   };
   a.d.cn = function() {
    return a.d.ck() && a.d.cl()
   };
   a.d.co = !1;
   a.d.p = function() {
    var a = !1;
    try {
     var b = Object.defineProperty({}, "passive", {
      get: function() {
       a = !0
      }
     });
     window.addEventListener("test", null, b);
     window.removeEventListener("test", null, b)
    } catch (c) {}
    return a
   }();
   a.d.cp =
    function() {
     var b;
     return function() {
      if ("undefined" !== typeof b) return b;
      var c = a.d.g,
       e = a.b.ba();
      if (a.d.g.navigator.standalone) b = !0;
      else {
       var d = c.innerWidth / e.w,
        c = c.innerHeight / e.h,
        d = !isNaN(d) && isFinite(d) && .9 <= d && 1.1 >= d,
        c = !isNaN(c) && isFinite(c) && .75 <= c && 1.1 >= c;
       b = d && c
      }
      a.d.g.MoatMAK ? a.d.g.MoatMAK.namespace && (b = !1) : (d = a.d.g) && d.imraid && "function" === typeof d.imraid.getVendorName && "inmobi" === d.imraid.getVendorName() && (b = !1);
      return b
     }
    }();
   a.d.cq = function() {
    var b = a.d.an().isInApp ? 0 : void 0;
    a.d.j() ? b = 3 : a.d.cr() &&
     (b = 1);
    return b
   };
   a.d.cr = function() {
    if (a.d.d()) return !1;
    var b = a.d.cp(),
     c = a.b.y(),
     e = a.d.bn(),
     d = window.location && ("applewebdata:" === window.location.protocol || "data:" === window.location.protocol),
     c = "-" === c || "" === c.replace(/^\s+|\s+$/gm, "");
    return b && !(c || e || d)
   };
   a.d.j = function() {
    var b;
    return function() {
     return "undefined" !== typeof b ? b : b = a.d.cs() || a.d.d() ? !0 : a.d.cr() ? !1 : a.b.m() || a.b.l()
    }
   }();
   a.d.ct = function() {
    return a.d.g.webkit && a.d.g.webkit.messageHandlers && a.d.g.webkit.messageHandlers.__z_moat_bridge__
   };
   a.d.cs = function() {
    return !(!a.d.g || !(a.d.g.__zMoatInit__ || a.d.g.MoatMAK || a.d.ct())) || v
   };
   a.d.cu = function() {
    return !1
   };
   a.d.cv = function() {
    return a.n && a.n.b()
   };
   a.d.cw = function() {
    return a.n && a.n.c()
   };
   a.d.cx = function() {
    return a.d.cw() ? a.p && (a.p.c() || a.p.d()) : !1
   };
   a.d.cy = function() {
    if (a.d.cx()) return !0;
    var b = !1;
    return a.d.bw() ? !0 : a.d.e || a.d.ce ? b = (b = b || a.d.j() && a.d.cv()) || a.d.ce || a.d.cr() || a.d.bq() || a.d.cn() : b
   };
   a.d.protocol = a.b.bo();
   a.d.cz = "z.moatads.com";
   a.d.da = a.b.j();
   a.d.bl = !a.d.e;
   a.d.db = function(b) {
    var c =
     0;
    b = b || window;
    try {
     if (!a.d.e) {
      var e;
      for (e = 0; 20 > e && b != window.top; e++) b = b.parent;
      c = e
     }
    } catch (d) {}
    return c
   };
   a.d.e || a.b.v() || 1 == a.d.db(a.k.a()) ? a.d.dc = 1 : a.d.dc = 0;
   a.d.g[a.d.az] || (a.d.g[a.d.az] = new a.d.g.Object);
   a.d.an().isInApp && a.d.e && (a.d.e = a.d.cy() || a.d.j());
   a.d.dd = function() {
    return a.p && a.p.e()
   };
   a.d.de = function() {
    return a.p && a.p.d()
   };
   a.d.f = a.d.g.document.referrer || "";
   try {
    a.d.df = a.d.g.history && a.d.g.history.length
   } catch (A) {}
   a.d.dg = function() {
    if (w)
     for (var a in w)
      if (w.hasOwnProperty(a)) return !0;
    return !1
   };
   a.d.dh = function(b) {
    var c = !0;
    a.b.forEach(b && b.parentNode && b.parentNode.childNodes, function(b) {
     if (a.b.ai(["DIV", "IFRAME", "A", "EMBED", "OBJECT"], b.nodeName)) return c = !1
    });
    return c
   };
   a.d.di = function() {
    for (var a in w)
     if (w.hasOwnProperty(a)) {
      var b = w[a];
      if (b && b.aa && b.aa[F]) return !0
     } return !1
   };
   a.d.dj = function() {
    return a.d.an().isInApp ? a.d.cy() : a.d.e
   };
   a.d.bz = function() {
    return a.d.dk && a.d.dk()
   };
   a.d.dl = function() {
    return a.d.cd
   };
   a.d.dm = function() {
    return a.d.ca && a.d.ca()
   };
   a.d.dn = function() {
    return a.d.ch && a.d.ch()
   };
   a.d["do"] = function() {
    return a.q && a.q.a()
   };
   a.d.dp = function(b) {
    var c = !1;
    a.r && a.r.a && (b && b.periscopeManager ? b.periscopeManager.measurable && (c = !0) : c = !0);
    return c
   };
   a.d.by = function() {
    var b = a.b.cs(),
     c = 1 === a.d.an().isInApp;
    return !(!(9 <= b && window && window.requestAnimationFrame) || c)
   }();
   a.d.dq = function(b) {
    return a.d["do"]() || a.d.dp(b)
   };
   a.d.dr = function(b, c) {
    if (!b || b && b.isMeasurabilityDisabled() || a.e.c() && !c) return !1;
    var e;
    a.d.dq(b) && (e = !0);
    return a.d.dj() || a.d.ds() || e
   };
   a.d.dt = function(b) {
    if (!b || b && b.isMeasurabilityDisabled() ||
     a.e.c()) return !1;
    var c = !1;
    a.q && a.q.a() ? c = !0 : a.r && a.r.a && b.periscopeManager && b.periscopeManager.fullyMeasurable && b.ao && 1 != b.ao.skin && (c = !0);
    return a.d.dj() || a.d.ds() || c
   };
   a.d.du = function() {
    a.d.bh = !1;
    a.d.bi = !0;
    a.d.bj = !0
   };
   a.d.dv = !0;
   a.d.dw = !0;
   "mlb.com" === a.b.y() && (a.b.au() || a.b.av()) && (a.d.dw = !1);
   a.d.dx = function() {
    return a.s.a()
   };
   a.d.dy = function() {
    if (!a.d.j()) return !1;
    var b;
    return b = (b = a.d.cw() && a.p.f()) || a.s.a()
   };
   a.d.dz = function() {
    return !1
   };
   var v;
   a.d.j() && (a.d.ea = function() {
    v = !0
   });
   var z = {
    version: "sv",
    appName: "lw",
    namespace: "lu",
    isNative: "ma",
    versionHash: "ar",
    deviceOS: "av"
   };
   a.d.eb = function() {
    var b = !!a.d.g.MoatMAK;
    return function() {
     return b
    }
   }();
   a.d.ec = function() {
    return a.d.g && a.d.g.MoatMAK || null
   };
   a.d.ed = function() {
    var b = {},
     c = a.d.ec();
    if (c)
     for (var e in z) z.hasOwnProperty(e) && (b[z[e]] = c[e]);
    return b
   };
   a.d.ee = function(b) {
    var c, e;
    (c = a.d.ec()) && c.hasOwnProperty(b) && (e = c[b]);
    mappedKey = z[b];
    c = a.s.b();
    mappedKey && c && c.hasOwnProperty(mappedKey) && (e = c[mappedKey]);
    "versionHash" === b && "undefined" !== typeof e &&
     (e = e.slice(0, 7));
    return e
   };
   a.d.ef = function() {
    return a.d.ee("namespace")
   };
   a.d.eg = function() {
    var b = a.d.ee("version");
    return b ? /\d+\.\d+(\.\d+)?/.exec(b) ? b : null : b
   };
   a.d.eh = 0;
   a.d.ei = 1;
   a.d.ej = -1;
   a.d.ek = function(b) {
    var c = a.d.eg();
    if (!c) return a.d.ej;
    if (!/\d+\.\d+(\.\d+)?/.exec(b)) return a.d.ei;
    switch (a.d.bk(c, b)) {
     case 0:
      return a.d.ej;
     case 1:
      return a.d.ei;
     case 2:
      return a.d.eh
    }
   };
   a.d.el = function(b) {
    if (a.d.em && a.d.em()) {
     var c = a.d.ec();
     c && b && (g(c, b), e(c, b))
    }
   };
   a.d.em = function() {
    if (!a.d.j()) return !1;
    var b;
    a.b.l() ?
     b = "3.0" : a.b.m() && (b = "1.8");
    return b ? a.d.ek(b) !== a.d.ej ? !0 : !1 : !1
   };
   a.d.en = function() {
    var b;
    a.b.l() ? b = "3.1.1" : a.b.m() && (b = "1.7.7");
    return a.d.ek(b) !== a.d.ej
   };
   a.d.eo = function() {
    var b = a.s.a(),
     c;
    a.b.l() ? c = "3.1" : a.b.m() && (c = "2.1");
    c = a.d.ek(c) !== a.d.ej;
    return b && c
   };
   a.d.ep = function() {
    var b = "___mraid_viewable_loop___" + (new p).getTime(),
     c = a.d.bm();
    a.o.g(function() {
     return c && c.isViewable && c.isViewable() ? (a.n.d(), a.m.a.zaxs("trackingReady"), !1) : !0
    }, {}, 300, b)
   };
   a.d.eq = function() {
    if (a.d.d() && !a.d.cs()) return !1;
    var b = !(!window || !window.MmJsBridge),
     c = !(!window || !window.imraid || "function" !== typeof window.imraid.getVendorName || "inmobi" !== window.imraid.getVendorName());
    return b || c
   };
   a.d.er = function() {
    var b = a.d.bd;
    return (b = b && b.match(/Firefox\/([0-9]+)\./)) ? parseInt(b[1], 10) : !1
   };
   (function() {
    var b = a.b.bx(window, ["IntersectionObserver"]),
     e = c() || 57 <= a.d.er() || 17 <= a.b.ah(),
     d = a.d.an().isInApp,
     l = a.d.d(),
     f = e && b && "function" === typeof b && (!d || l && a.d.bl);
    a.d.dk = function(a) {
     "boolean" === typeof a && (f = a);
     return f
    };
    a.d.es = function() {
     return f &&
      b
    }
   })();
   a.d.bi = c();
   a.d.et = function() {
    if (a.d.e || a.d.bz()) return !1;
    var b = a.d.l || a.d.am && 15.16199 <= a.b.ah();
    if (!b) return !1;
    var c = a.b.n();
    if (a.d.l && 8 >= c) return !1;
    var e = 1 === a.d.an().isInApp,
     d, l = "function";
    a.d.l ? (8 === c && (l = "object"), d = document && typeof document[10 > c ? "elementFromPoint" : "msElementsFromPoint"] === l) : a.d.am && (d = typeof window.requestAnimationFrame === l);
    return b && !e && d
   }();
   a.d.a = new a.d.g.Image;
   a.d.m = function() {
    if ("undefined" !== typeof a.d.g["Moat#EVA"]) return !0;
    try {
     if ("undefined" !== typeof a.d.g.eval &&
      (a.d.g.eval("(function(win){ win['Moat#EVA'] = true; })(window)"), "undefined" !== typeof a.d.g["Moat#EVA"])) return !0
    } catch (b) {}
    return !1
   };
   a.d.n = function(a) {
    try {
     return new a.Function(""), !0
    } catch (b) {
     return !1
    }
   };
   (function() {
    var b = a.b.cq("context"),
     c = !a.d.an().isInApp && !(!b || !b.observeIntersection),
     e, d, l, f, g, v;
    if (!c && window.JSON && "function" === typeof window.JSON.parse && (e = location.hash.match(/amp3pSentinel=((\d+)-\d+)/))) {
     d = e[1];
     e = Number(e[2]);
     l = [];
     for (f = window; f && f != f.parent; f = f.parent) l.unshift(f.parent);
     g = l[e];
     c = v = !!g
    }
    a.d.eu = function() {
     return c && b
    };
    a.d.ch = function(a) {
     "boolean" === typeof a && (c = a);
     return c
    };
    a.d.ev = function() {
     return {
      isDfp: v,
      win: g,
      sentinel: d
     }
    };
    a.d.ew = function() {
     return g && g.postMessage && d ? (g.postMessage({
      sentinel: d,
      type: "send-intersections"
     }, "*"), !0) : !1
    }
   })();
   a.d.ex = function() {
    var a = navigator && navigator.appVersion && navigator.appVersion.match(/Windows NT (\d\d{0,1}\.\d)/);
    return a ? parseFloat(a[1]) : -1
   };
   a.d.ey = function() {
    return 6.1 === a.d.ex()
   };
   a.d.ez = function() {
    var b = a.d.g;
    return b.navigator &&
     "function" === typeof b.navigator.getBattery
   };
   a.d.ds = function() {
    return !!a.d.fa()
   };
   a.d.fa = function() {
    return a.d.dk() ? {
     measurableFn: a.d.bz
    } : a.d.cd ? {
     measurableFn: a.d.dl
    } : a.d.ch() ? {
     measurableFn: a.d.dn
    } : a.d.bq() ? {
     measurableFn: a.d.bq
    } : a.d.cn() ? {
     measurableFn: a.d.cn
    } : a.d.de() ? {
     measurableFn: a.d.dd
    } : !1
   };
   a.d.fb = a.b.bb();
   a.d.fc = function(b) {
    return a.b.db() ? !0 : b = (b = a.d.fb) || a.b.bc()
   }
  })(m);
  (function(a) {
   function k(a, h, f) {
    function g(a, b) {
     for (var e in a) a.hasOwnProperty(e) && b.call(null, a[e], e)
    }

    function e(a) {
     var b = [];
     g(a, function(a, c) {
      b.push(c)
     });
     return b
    }
    a = h[a];
    a && a.xa.sode || (a.xa.sode = function() {
     this.desw = {};
     this.xfgf = [];
     this.publishing_ = !1;
     this.xkcd = {};
     this.edws = []
    }, a.xa.sode.prototype.uxin = function() {
     var a = function(a) {
      a = f.max(4, a);
      return ((1 + f.random()) * f.pow(16, a) | 0).toString(16).substring(0, a)
     };
     return function(b) {
      return a(4) + "-" + a(4) + "-" + a(4) + "-" + a(4)
     }
    }(), a.xa.sode.prototype.xsza = function(a) {
     this.desw[a] || (this.desw[a] = {});
     return this.desw[a]
    }, a.xa.sode.prototype.esgf = function(a, b) {
     this.publishing_ ? this.xfgf.push(arguments) :
      this.zaxs.apply(this, arguments)
    }, a.xa.sode.prototype.kswa = function(a, b) {
     for (var e = this.xkcd[a] || [], d = e && e.length, f = 0; f < d; f++)
      if (e[f] === b) return !1;
     e.push(b);
     e.sort(function(a, b) {
      return a - b
     });
     this.xkcd[a] = e
    }, a.xa.sode.prototype.aksw = function(a, b) {
     if (!this.xkcd[a]) return !1;
     for (var e = this.xkcd[a], d = -1, f = e && e.length, g = 0; g < f; g++)
      if (e[g] === b) {
       d = g;
       break
      } - 1 != d && e.splice(d, 1);
     this.xkcd[a] = e
    }, a.xa.sode.prototype._getEventPriorities_ = function(a) {
     return this.xkcd[a] || []
    }, a.xa.sode.prototype.azsx = function(a, b,
     e) {
     e = e || {};
     var d = e.id || this.uxin(),
      f;
     f = e.priority;
     f = !isNaN(f) && isFinite(f) ? parseInt(f, 10) : 10;
     for (var g = this.xsza(a), h = 0; g[d] && !e.id && 10 > h;) h++, d = this.uxin();
     g[f] || (g[f] = {});
     this.kswa(a, f);
     e.priority = f;
     g[f][d] = {
      cb: b,
      options: e
     };
     return d
    }, a.xa.sode.prototype.zaxs = function(a, b) {
     if (!this.desw[a]) return !1;
     this.publishing_ = !0;
     for (var e = this.edws.slice.call(arguments, 1), d = this._getEventPriorities_(a).slice(0), f = 0, g = d.length; f < g; f++) {
      var h = this.desw[a][d[f]],
       v;
      for (v in h)
       if (h.hasOwnProperty(v)) {
        var z = h[v];
        if (z) {
         var A;
         A = z.options && z.options.includeId ? [v].concat(e) : e;
         if (!z.options || !z.options.condition || z.options.condition && z.options.condition.apply(null, A)) z.options && z.options.once && "undefined" !== typeof z.options.priority && this.sxaz(a, {
          id: v,
          priority: z.options.priority
         }), z.cb.apply(null, A)
        }
       }
     }
     this.publishing_ = !1;
     for (e = 0; 0 < this.xfgf.length && 500 > e; e++) this.zaxs.apply(this, this.xfgf.pop())
    }, a.xa.sode.prototype.swaq = function(a, b, d) {
     var f = !1;
     if (this.desw[a] && this.desw[a][d]) try {
      delete this.desw[a][d][b], f = !0
     } catch (g) {}
     0 === e(this.desw[a][d]).length && this.aksw(a, d);
     return f
    }, a.xa.sode.prototype.sxaz = function(a, b) {
     if (!b || "object" != typeof b || !this.desw[a]) return !1;
     if (b.id && void 0 !== b.priority) return this.swaq(a, b.id, b.priority);
     if (b.id || b.callback)
      for (var e = this._getEventPriorities_(a), d = 0, f = e.length; d < f; d++) {
       var g = e[d];
       if (b.id && b.callback) {
        if (this.desw[a][g][b.id] && this.desw[a][g][b.id].cb == b.callback) return this.swaq(a, b.id, g)
       } else if (b.id) {
        if (this.desw[a][g][b.id]) return this.swaq(a, b.id, g)
       } else
        for (var h in this.desw[a][g])
         if (this.desw[a][g][h] &&
          this.desw[a][g][h].cb == b.callback) return this.swaq(a, h, g)
      }
     return !1
    }, a.xa.sode.prototype.ugin = function(a) {
     if ("string" === typeof a)
      if (this.desw[a]) delete this.desw[a];
      else return !1;
     else this.desw = {};
     return !0
    })
   }
   a.m = {};
   a.m.b = function(d) {
    d.xa.sode || (d.xb == window ? k(a.d.aw, window, r) : a.b.cp(k, "'" + a.d.aw + "',window, Math", d.xb));
    a.m.a = new d.xa.sode
   }
  })(m);
  (function(a) {
   function k(d, h) {
    function f(a) {
     var c = b.xb.Math.pow,
      e = b.xb.Math.random;
     a = (0, b.xb.Math.max)(4, a);
     return ((1 + e()) * c(16, a) | 0).toString(16).substring(0,
      a)
    }

    function g(a) {
     return function(b) {
      return a(b)
     }
    }

    function e(a, b) {
     if (!a || "string" !== typeof b || !a[b] || a == c) return !1;
     if ("string" === typeof a.nodeName && ("OBJECT" === a.nodeName || "EMBED" === a.nodeName)) {
      var e = document && document.body && document.body[b];
      if (e && e !== a[b]) return e
     }
     return !1
    }
    var c;
    c = "object" === typeof a && a && a.a && a.a.b ? a.a.b : this.window;
    h[d] = h[d] || {
     zs: !1,
     zr: 0,
     yf: {},
     h: 0,
     m: 0,
     i: {},
     xa: {},
     xb: h,
     xc: {},
     xyds: {}
    };
    var b = h[d],
     l = {},
     u = function() {
      var a = !1;
      try {
       var b = Object.defineProperty({}, "passive", {
        get: function() {
         a = !0
        }
       });
       c.addEventListener("test", null, b);
       c.removeEventListener("test", null, b)
      } catch (e) {}
      return a
     }();
    b.xc.dowg = function(a, c) {
     b && (b.xyds || (b.xyds = {}), b && b.xyds && (b.xyds[c] ? b.xyds[c].push(a) : b.xyds[c] = [a]))
    };
    b.xc.hsxk = function() {
     b.dcsx && b.dcsx.dcwn();
     "undefined" !== typeof a && a && b.xc.esde(a);
     var a;
     b.xc.exde(b.xc.hsxk, 1E3)
    };
    b.xc.esde = function(a) {
     c && c.clearTimeout && c.clearTimeout(a)
    };
    b.xc.ynds = function(a, b, c, d) {
     var f, h, k = !1;
     "touchstart" === b && u && (k = {
      passive: !0
     });
     d ? l[b + d] ? c = l[b + d] : (c = g(c), l[b + d] = c) : c = g(c);
     if (a.addEventListener) d = "addEventListener", f = "";
     else if (a.attachEvent) d = "attachEvent", f = "on";
     else return !1;
     if (h = e(a, d)) try {
      h.call(a, f + b, c, k)
     } catch (K) {
      a[d](f + b, c, k)
     } else if (a && d && a[d]) try {
      a[d](f + b, c, k)
     } catch (K) {
      return !1
     }
    };
    b.xc.engn = function(a, b, c, d) {
     var f, g = b + d,
      h;
     if (!a) return delete l[g], !1;
     c = !1 !== d ? l[g] : c;
     if (a.removeEventListener) d = "removeEventListener", f = "";
     else if (a.detachEvent) d = "detachEvent", f = "on";
     else return delete l[g], !1;
     if (h = e(a, d)) try {
      h.call(a, f + b, c, !1)
     } catch (u) {
      a[d](f + b, c, !1)
     } else try {
      a[d](f +
       b, c, !1)
     } catch (u) {}
     delete l[g]
    };
    b.xc.exde = function(a, b) {
     a = g(a);
     var e;
     c && c.setTimeout && (e = c.setTimeout(a, b));
     return e
    };
    b.xc.exae = function(a, b, c) {
     return function() {
      b.apply(c || null, a.concat(a.slice.call(arguments)))
     }
    };
    b.xc.uxin = function() {
     return f(4) + "-" + f(4) + "-" + f(4) + "-" + f(4)
    };
    b.xc.twer = function(a, c) {
     b && (b.yf || (b.yf = {}), b && b.yf && (b.yf[c] ? b.yf[c].push(a) : b.yf[c] = [a]))
    }
   }
   a.v = {};
   a.v.a = function(d) {
    var h = a.v.b(d),
     f = !1;
    h || (h = a.v.c(d), f = !0, h.xc.exde(h.xc.hsxk, 1E3));
    window[a.d.aw] = h;
    a.m.b(h);
    f && (h.swde = new h.xa.sode);
    a.m.a.azsx("adKilled", a.v.d);
    a.m.a.azsx("allLocalAdsKilled", a.v.e, {
     once: !0
    });
    return h
   };
   a.v.e = function() {
    a.m.a.sxaz("adKilled", {
     callback: a.v.d
    });
    a.v.f(q)
   };
   a.v.d = function(d) {
    a.d.k = null;
    if (q) {
     try {
      var h = q.yf[a.d.ay.a];
      if (h) {
       var f = a.b.indexOf(h, d.yg); - 1 < f && h.splice(f, 1)
      }
      a.v.g(a.d.ay.a, d.TAGID)
     } catch (g) {}
     a.v.f(q)
    }
   };
   a.v.h = function(d, h) {
    var f = a.v.b(a.d.g);
    f && f.xc.twer(d, h)
   };
   a.v.i = function(d, h) {
    var f = a.v.b(a.d.g);
    f && f.xc.dowg(h, d)
   };
   a.v.g = function(d, h) {
    var f = q.xyds[d];
    if (f) {
     var g = a.b.indexOf(f, h); - 1 < g && f.splice(g,
      1)
    }
   };
   a.v.f = function(d) {
    var h = !1,
     f = !1,
     g = 0,
     e = 0;
    try {
     d.yf[a.d.ay.a] && (f = 0 === d.yf[a.d.ay.a].length), a.b.forEach(d.yf, function(a) {
      0 < a.length && g++
     }), a.v.g(a.d.ay.a, a.d.ba), a.b.forEach(d.xyds, function(a) {
      0 < a.length && (e += a.length)
     }), d.xyds[a.d.ay.a] && 0 != d.xyds[a.d.ay.a].length || (f = !0), 0 === e && 0 === g && (h = !0)
    } catch (c) {}
    f && d.swde.esgf("allAdsInWindowKilled", a.d.ay.a);
    h && (a.m.a.sxaz("adKilled", {
     callback: a.v.d
    }), a.m.a.sxaz("allLocalAdsKilled", {
     callback: a.v.e
    }), d.swde.esgf("allAdsKilled"))
   };
   a.v.c = function(d) {
    d == window ?
     k(a.d.aw, window) : a.b.cp(k, "'" + a.d.aw + "',window", d);
    return a.v.b(d)
   };
   a.v.b = function(d) {
    try {
     return d = d || a.d.g, d[a.d.aw]
    } catch (h) {
     return null
    }
   };
   a.v.j = function(d) {
    try {
     var h = [];
     d = d || a.d.g;
     if (!d) return !1;
     var f = a.d.au;
     if (!f) return !1;
     var g = new RegExp("^" + f);
     if (!g) return !1;
     a.b.forEach(d, function(a, c) {
      -1 < c.search(g) && a && "number" === typeof a.zr && h.push(a)
     });
     return h
    } catch (e) {
     return !1
    }
   };
   a.v.k = function(d) {
    try {
     var h = [];
     d = d || a.d.g;
     return d ? (h = a.v.j(d)) ? 0 < h.length ? !0 : !1 : !1 : !1
    } catch (f) {
     return !1
    }
   };
   a.v.l = function(d) {
    var h =
     a.v.b();
    h && (h.i[d] = !0)
   }
  })(m);
  (function(a) {
   function k(d, h, f) {
    f = {};
    d = d.replace(/&amp;/g, "&").replace(/(^\s+|\s+$)/g, "");
    d = d.split("&");
    for (var g = 0; g < d.length; g++) {
     var e = d[g].split("=");
     if ("string" === typeof e[1]) {
      e[0] && e[0].match("moatClient") && (f["rawM" + e[0].slice(1)] = e[1]);
      var c = e,
       b, l = b = e[1];
      try {
       for (var u = 0; 100 > u && (b = decodeURIComponent(b), l != b) && !b.match(/^http(s)?\:/); u++) l = b
      } catch (x) {}
      b = b.replace(/(^\s+|\s+$)/g, "");
      c[1] = b
     } else e[1] = "";
     f[e[0]] = e[1]
    }
    "undefined" !== typeof h && (f.clientZone = "undefined" !==
     h ? h : "");
    return f = a.w.f(f)
   }
   a.w = {};
   a.w.a = function(d, h) {
    if (!d) return !1;
    if ("undefined" === typeof d.startTime || h) d.startTime = a.d.bg;
    if ("undefined" === typeof d.rand || h) d.rand = r.floor(r.random() * r.pow(10, 12));
    "undefined" === typeof d.adNum && (d.adNum = q.zr, q.zr++)
   };
   a.w.b = function(d) {
    if (!d) return !1;
    var h = a.b.u();
    a.b.y();
    decodeURIComponent(h);
    return d
   };
   a.w.c = function(d) {
    return a.w.d(d)
   };
   a.w.d = function(a) {
    try {
     var h = a.className,
      f = a.getAttribute("src");
     h.split("\n").join(" ");
     if (-1 !== h.indexOf("moatfooter")) return !1;
     var g = f.split("?"),
      e = f.split("#");
     a = !1;
     1 < g.length && 1 < e.length && g[1].length < e[1].length && (a = !0);
     if (1 == g.length || a) g = e;
     return 1 < g.length ? k(g[1], "undefined") : !1
    } catch (c) {
     return !1
    }
   };
   a.w.e = function(a) {
    if (!a) return !1;
    var h = {};
    try {
     var f = a && a.className.replace("amp;", "").split("?")[1];
     return h = f && k(f)
    } catch (g) {
     return !1
    }
   };
   a.w.f = function(a) {
    if (a) {
     for (var h in a) a.hasOwnProperty(h) && h && h.match("moatClientLevel") && "string" === typeof a[h] && (a[h] = a[h].replace(/\:/g, "_").replace(/%3A/gi, "_"));
     return a
    }
   };
   a.w.g = function(a) {
    try {
     var h =
      zoneRegEx.exec(a.innerHTML);
     0 < h.length && (zone = h[1]);
     return zone
    } catch (f) {}
   };
   a.w.h = function(a) {
    return (a = unescape(unescape(unescape(unescape(a.innerHTML)))).match(/~fdr=(\d*).*?\/.*?;(\d*)/)) ? {
     adid: a && a[1] || "-",
     cid: a && a[2] || "-"
    } : !1
   };
   a.w.i = function(a, h) {
    return h || {}
   };
   a.w.j = function(a) {
    a = decodeURIComponent(decodeURIComponent(a)); - 1 < a.indexOf("anonymous.google") && (a = "anonymous.google");
    var h = a.match(/^(?:[^:]{1,}:\/\/)?(?::*\/?\/?)?(?:www\.)?([^\/:]*)/);
    h && h[1] && (a = h[1]);
    return a.split("/")[0]
   };
   a.w.k =
    function(d) {
     a.w.a(d);
     a.w.l(d);
     d = a.w.f(d);
     a.w.m && a.w.m(d);
     return d
    }
  })(m);
  m.b.db() && (M += "_BETA");
  var q = m.v.a(m.d.g),
   Ja = m.d.e,
   sa = m.b.j(),
   T = m.d.bg,
   Ia = m.d.g,
   F = "moatFound" + M,
   H = "__moat__" + M;
  m.b.da() && 2 === I && (F = "moatFound" + M + "BETA", H = "__moat__" + M + "BETA");
  (function(a) {
   function k(d, h, f) {
    var g = h[d];
    g && g.xa.txae || (g.xa.txae = function(a, c) {
      this.sxdc = g.xc.uxin();
      this.cdxs = a;
      this.xscd = {};
      this.swde = c;
      var b = this,
       d = this.swde.azsx("allAdsInWindowKilled", function(a) {
        g.dcsx.engn({
         listenerName: "unloadFn" + a
        });
        g.dcsx.engn({
         listenerName: "beforeunloadFn" +
          a
        })
       });
      this.swde.azsx("allAdsKilled", function() {
       b.swde.sxaz("allAdsInWindowKilled", {
        id: d
       });
       g.dcsx && (g.dcsx.aqsw(), g.zs = !1, g.xz = !1, g.dcsx = !1)
      }, {
       once: !0
      })
     }, g.xa.txae.prototype.wsed = function(a, c, b, d, f) {
      this.xscd[d] || (this.xscd[d] = {});
      this.xscd[d].evt = c;
      this.xscd[d].target = a;
      this.xscd[d].periodic = !0;
      var h;
      h = g.xc.exae([this], function(n, t) {
       g.xc.engn(a, c, null, d);
       if (n.xscd[d]) {
        n.xscd[d].tid && g.xc.esde(n.xscd[d].tid);
        n.xscd[d].tid = g.xc.exde(function() {
         n.xscd[d].tid = null;
         g.xc.ynds(a, c, h, d)
        }, f);
        try {
         n.swde.zaxs(b,
          t)
        } catch (v) {}
       }
      });
      g.xc.ynds(a, c, h, d)
     }, g.xa.txae.prototype.wsqa = function(a) {
      this.xscd[a] && (g.xc.esde(this.xscd[a].tid), g.xc.engn(this.xscd[a].target, this.xscd[a].evt, null, a), delete this.xscd[a])
     }, g.xa.txae.prototype.qaws = function() {
      if (!("object" === typeof a && a && a.d && a.d.c && a.d.c())) {
       this.wsed(this.cdxs, "scroll", "scroll", "globalScrollevent" + this.sxdc, 1E3);
       var e = this.cdxs.document.documentElement;
       this.wsed(e, "mousedown", "mouseEvent", "globalMouseDown" + this.sxdc, 1E3);
       this.wsed(e, "mouseover", "mouseEvent",
        "globalMouseOver" + this.sxdc, 1E3);
       this.wsed(e, "mousemove", "mouseEvent", "globalMouseMove" + this.sxdc, 5E3);
       this.wsed(this.cdxs, "mousewheel", "mouseEvent", "globalMouseWheel" + this.sxdc, 5E3);
       this.wsed(this.cdxs, "DOMMouseScroll", "mouseEvent", "globalMouseScroll" + this.sxdc, 5E3);
       this.wsed(e, "touchstart", "mouseEvent", "globalTouchStartEvent" + this.sxdc, 1E3);
       this.wsed(e, "keydown", "keyboardEvent", "globalKeyboardEvent" + this.sxdc, 1E3)
      }
     }, g.xa.txae.prototype.aqsw = function() {
      for (var a in this.xscd) this.engn({
       listenerName: a
      })
     },
     g.xa.txae.prototype.ynds = function(a, c, b, d) {
      if (!this.xscd[d]) {
       this.xscd[d] = {};
       this.xscd[d].evt = c;
       this.xscd[d].target = a;
       this.xscd[d].publishEvt = b;
       var f;
       f = g.xc.exae([this], function(a, c) {
        a.xscd[d] && a.swde.zaxs(b, c)
       });
       g.xc.ynds(a, c, f, d)
      }
     }, g.xa.txae.prototype.engn = function(a) {
      function c(a, b) {
       a.xscd[b].periodic ? a.wsqa(b) : (g.xc.engn(a.xscd[b].target, a.xscd[b].evt, null, b), delete a.xscd[b])
      }
      var b = a.target && a.evt,
       d = a.target && !a.evt,
       f = a.all;
      if (a.listenerName) this.xscd[a.listenerName] && c(this, a.listenerName);
      else if (b)
       for (var h in this.xscd)(b = this.xscd[h]) && b.evt == a.evt && b.target == a.target && c(this, h);
      else if (d)
       for (h in this.xscd)(b = this.xscd[h]) && b.target == a.target && c(this, h);
      else if (f)
       for (h in this.xscd)(b = this.xscd[h]) && c(this, h)
     }, g.xa.txae.prototype.kdmw = function(a) {
      g.swde.esgf(a.publishEvt)
     }, g.xa.txae.prototype.dcwn = function() {
      var a = this.xscd,
       c;
      for (c in a) {
       var b = a[c];
       "unload" === b.evt && b.target && b.target.closed && this.kdmw(b)
      }
     })
   }
   a.x = {};
   a.x.a = function(d) {
    d && (d.xa.txae || (d.xb == window ? k(a.d.aw, window,
     r) : a.b.cp(k, "'" + a.d.aw + "',window, Math", d.xb)), d.zs || (d.dcsx = new d.xa.txae(a.d.g, d.swde), d.zs = !0))
   };
   a.m.a.azsx("modulesReady", a.x.a, {
    once: !0
   });
   a.m.a.azsx("startAdTracking", function(d) {
    q && q.zs && !q.xz && (q.dcsx ? (q.xz = !0, q.dcsx.qaws()) : a.x.a(q), a.focus.setFocusListeners())
   })
  })(m);
  (function(a) {
   function k() {
    this.height = this.width = this.absTop = this.absLeft = 0;
    this.update = function(a) {
     var c = b("left", a.win),
      e = b("top", a.win);
     !1 !== c && !1 !== e && (this.absLeft = a.left + c, this.absTop = a.top + e, this.width = a.width, this.height =
      a.height)
    }
   }

   function d(b, c) {
    var e = b.zr;
    v.hasOwnProperty(e) || (v[e] = new k);
    var d = c || new a.y.k(b.aa);
    v[e].update(d)
   }

   function h(b, c, e) {
    return e ? new a.y.k(b.parentNode, c) : new a.y.k(b, c)
   }

   function f(a, b) {
    if (!a) return !1;
    var c = "number" == typeof a.zr,
     f, l;
    c ? (f = a.aa, l = a._calcVideoBasedOnContainer) : f = a;
    f = h(f, b, l);
    l = f.height;
    var g = f.width;
    c && (a.AD_RECT = f);
    var v = f.calcArea();
    if (0 === v) return {
     area: v,
     visibleArea: 0,
     percv: 0
    };
    var u = e(f),
     t = u.visibleRect.calcArea(),
     x = t / v,
     n;
    a: {
     var k = u.cumulRect,
      N = u.cumulRect.getViewportRect();
     if (0 > k.top && 0 < k.bottom) n = -k.top;
     else if (0 <= k.top && k.top <= N.height) n = 0;
     else {
      n = {
       yMin: -1,
       yMax: -1
      };
      break a
     }
     if (0 <= k.bottom && k.bottom <= N.height) k = k.height;
     else if (k.bottom > N.height && k.top < N.height) k = k.height - (k.bottom - N.height);
     else {
      n = {
       yMin: -1,
       yMax: -1
      };
      break a
     }
     n = {
      yMin: n,
      yMax: k
     }
    }
    c && d(a, f);
    return {
     area: v,
     visibleArea: t,
     visibleRect: u.visibleRect,
     cumulRect: u.cumulRect,
     percv: x,
     yMinMax: n,
     elGeo: {
      elHeight: l,
      elWidth: g,
      foldTop: u.cumulRect.top,
      totalArea: u.parentArea
     },
     rect: f.rect
    }
   }

   function g(a, b) {
    for (var c = [], e = 0; e <
     b.length; e++) c.push(a(b[e]));
    return c
   }

   function e(b) {
    var c, e = [],
     d = a.b.cm(b.el, b.win, b && b.el && b.el._moatParentCount);
    d && (e = g(function(b) {
     return new a.y.k(b)
    }, d));
    e.unshift(b);
    d = e.length;
    b = new a.y.k(b.el, a.d.g);
    for (var f = 0; f < d; f++) {
     var l = e[f];
     0 === f ? c = l : (c.changeReferenceFrame(l), b.changeReferenceFrame(l));
     l = l.getViewportRect(f < d - 1 ? e[f + 1] : !1);
     c = a.y.n(c, l)
    }
    return {
     visibleRect: c,
     cumulRect: b,
     parentArea: e[e.length - 1].calcArea()
    }
   }

   function c(a, b, c, e) {
    a = r.max(a, c);
    b = r.min(b, e);
    return b > a ? [a, b] : [0, 0]
   }

   function b(a,
    b) {
    b || (b = window);
    try {
     var c = b.document.documentElement,
      e = b.document.body;
     return "left" === a ? b.pageXOffset || c && c.scrollLeft || e && e.scrollLeft : b.pageYOffset || c && c.scrollTop || e && e.scrollTop
    } catch (d) {
     return !1
    }
   }

   function l(b) {
    function c(a, b) {
     return {
      top: r.max(a.top, b.top),
      right: r.max(a.right, b.right),
      bottom: r.min(a.bottom, b.bottom),
      left: r.min(a.left, b.left)
     }
    }
    var e, d, f;
    e = [];
    d = [];
    if (!a.b.d(b) || 0 === b.length) return !1;
    a.b.forEach(b, function(a) {
     a.cumulRect && a.visibleRect && (d.push(a.cumulRect), e.push(a.visibleRect))
    });
    b = a.b.reduce(d, c);
    f = a.b.reduce(e, c);
    return {
     elRect: b,
     visibleRect: f
    }
   }

   function u(b, c, e, d, l) {
    var g = {
      IFRAME: !0,
      VIDEO: !0,
      OBJECT: !0,
      EMBED: !0,
      IMG: !0
     },
     h = f(b),
     v = [],
     u = w[l];
    e.elementsFromPoint && !u.elementsFromPointCache ? (c = e.elementsFromPoint(c.m[0], c.m[1]) || [], u.elementsFromPointCache = c, v = v.concat(Array.prototype.slice.call(c))) : (c = a.b.cd(c.m[0], c.m[1], e), u.elementsFromPointCache && (v = v.concat(Array.prototype.slice.call(u.elementsFromPointCache))), c && (v = [c].concat(v)));
    for (u = 0; u < v.length; u++) {
     if (e = (c = v[u]) &&
      c !== d && c[H] !== l && g[c.nodeName] && !a.b.ca(c, b) && !a.b.ca(b, c)) e = (e = c) && e.nodeName && "map" === e.nodeName.toLowerCase() ? !0 : (e = a.b.bk(e)) && (1 >= e.width || 1 >= e.height) ? !0 : !1, e = !e;
     e && (e = c, e = !(e && (0 === a.b.ck({
      aa: e
     }, !0, !0) || 0 === a.b.cj(e, !0))));
     if (e) {
      if (e = c = f(c)) e = ((e = c.cumulRect) ? 100 <= e.width && 50 <= e.height : !1) && h && c && .5 <= a.y.r(h.cumulRect, c.cumulRect);
      if (e) return !0
     }
    }
    return !1
   }

   function x(a) {
    var b = .01 * a.width,
     c = .01 * a.height;
    return {
     tl: [a.left + b, a.top + c],
     m: [a.left + (a.right - a.left) / 2, a.top + (a.bottom - a.top) / 2],
     br: [a.right -
      b, a.bottom - c
     ]
    }
   }

   function n(b, c) {
    var d = [],
     f = a.k.h(b);
    f && (d = g(function(c) {
     var d = e(new a.y.k(b)).visibleRect;
     new a.y.k(c);
     return {
      rect: d,
      frame: c,
      doc: c.ownerDocument
     }
    }, f));
    d.unshift({
     rect: e(new a.y.k(b)).visibleRect,
     frame: b,
     doc: b.ownerDocument
    });
    for (f = 0; f < d.length; f++) {
     var l = x(d[f].rect),
      h = !1;
     if (0 != l.tl[0] || 0 != l.tl[1] || 0 != l.br[0] || 0 != l.br[1]) h = !0;
     if (h && u(b, l, d[f].doc, d[f].frame, c)) return !0
    }
    return !1
   }
   a.y = {};
   var t = a.d.e,
    v = {};
   a.y.a = .5;
   a.y.b = .3;
   a.y.c = .98;
   a.y.d = void 0;
   a.y.e = function(b, c) {
    c = c || !1;
    return function(e,
     d) {
     var l = e.ao.skin ? a.y.f(e, d) : f(e, d);
     l.isVisible = c ? l.percv > b : l.percv >= b;
     l.elGeo && (l.elGeo.threshold = b);
     return l
    }
   };
   a.y.f = function(b, c) {
    function e() {
     if (b.isMultipartAd && b.multipartComponents && 0 < b.multipartComponents.length) {
      for (var a, d = 0, l = 0; l < b.multipartComponents.length; l++) {
       var g = f(b.multipartComponents[l], c);
       g.visibleArea >= d && (d = g.visibleArea, a = b.multipartComponents[l])
      }
      return f(a, c)
     }
    }

    function d() {
     if (b.isCompositeAd && b.components && 1 < b.components.length) {
      for (var e = {
        area: 0,
        visibleArea: 0,
        percv: 0,
        visibleRect: !1,
        cumulRect: !1,
        yMinMax: !1,
        elGeo: !1,
        rect: !1,
        componentResults: []
       }, g, h = 0; h < b.components.length; h++) g = f(b.components[h], c), e.area += g.area, e.visibleArea += g.visibleArea, e.componentResults.push(g);
      e.percv = e.visibleArea / e.area;
      b.compositeAdAreaPx = e.area;
      (g = l(e.componentResults)) && "strict" === a.aa.a(b.zr) && a.m.a.zaxs("rectsAvailable", b.zr, g.elRect, g.visibleRect)
     } else e = f(b, c);
     return e
    }
    b.viewabilityMethod.strict || (b.viewabilityMethod.strict = 1);
    if (1 == b.ao.skin) {
     var g = {},
      h = a.d.g.scrollY || a.d.g.document.documentElement.scrollTop;
     if ("width" == a.z.a && a.z.b <= b.adContent && 45 < h || !a.focus.pageIsVisible()) return g.isVisible = !1, g.isFullyVisible = !1, g.percv = 0, g;
     g.isVisible = !0;
     g.isFullyVisible = !0;
     g.isDentsuVisible = !0;
     g.percv = 1;
     a.m.a.zaxs("adEdgesViewStatus", b.zr, {
      topLeft: !0,
      topRight: !0,
      bottomLeft: !0,
      bottomRight: !0
     });
     return g
    }
    g = b.isMultipartAd ? e(b, c) : b.isCompositeAd ? d(b, c) : f(b, c);
    "strict" === a.aa.a(b.zr) && a.d.e && !a.d.j() && a.m.a.zaxs("rectsAvailable", b.zr, g.cumulRect, g.visibleRect);
    var h = a.y.g(g, b),
     v = a.y.c;
    g.isVisible = g.percv >= h;
    g.isFullyVisible =
     g.percv >= v;
    g.elGeo && (g.elGeo.threshold = h);
    b.videoIsFullscreen && 0 < g.percv && (g.isVisible = !0);
    .8 <= g.percv && (g.isDentsuVisible = !0);
    a.y.d ? g.percv > a.y.d && (a.y.d = g.percv) : a.y.d = g.percv;
    b.AD_RECT = g && g.rect;
    return g
   };
   a.y.g = function(b, c) {
    return a.ab.a(b.area) ? (c.viewstats || (c.viewstats = {}), c.viewstats.isBigAd = !0, a.y.b) : a.y.a
   };
   a.y.h = function() {
    return t
   };
   a.y.i = f;
   a.y.j = function(a, b) {
    t && v.hasOwnProperty(b) || d(a);
    return v[b]
   };
   a.y.l = h;
   a.y.m = a.d.s;
   a.y.k = function(b, c, e, d) {
    try {
     this.rect = e || b.getBoundingClientRect &&
      b.getBoundingClientRect() || {}
    } catch (f) {
     this.rect = e || b && {
      top: b.offsetTop,
      left: b.offsetLeft,
      width: b.offsetWidth,
      height: b.offsetHeight,
      bottom: b.offsetTop + b.offsetHeight,
      right: b.offsetLeft + b.offsetWidth
     } || {}
    }
    e = "left right top bottom width height".split(" ");
    for (d = 0; d < e.length; d++) {
     var l = e[d];
     this[l] = this.rect[l]
    }
    b && b.adjustForClip && (e = a.b.cc(b.style.clip)) && (this.left += e.left, this.right = this.left + e.right, this.top += e.top, this.bottom = this.top + e.bottom);
    b && b.CLIPCHECKINGTARGET && b.CLIPCHECKINGTARGET.style &&
     "absolute" === b.CLIPCHECKINGTARGET.style.position && (e = a.b.cc(b.CLIPCHECKINGTARGET.style.clip)) && (this.right = this.left + e.right, this.left += e.left, this.bottom = this.top + e.bottom, this.top += e.top);
    this.width = this.right - this.left;
    this.height = this.bottom - this.top;
    this.el = b;
    this.win = c || b && a.b.ap(b);
    this.changeReferenceFrame = function(a) {
     this.left += a.left;
     this.right += a.left;
     this.top += a.top;
     this.bottom += a.top
    };
    this.calcArea = function() {
     return (this.right - this.left) * (this.bottom - this.top)
    };
    this.getViewportRect = function(b) {
     var c =
      a.d.s(this.win);
     b && (b.width < c.width && (c.width = b.width, c.right = c.left + c.width), b.height < c.height && (c.height = b.height, c.bottom = c.top + c.height));
     return c
    }
   };
   a.y.o = function(a, b, c) {
    return "undefined" === typeof a ? !1 : {
     left: Number(b) + Number(a.left),
     right: Number(b) + Number(a.right),
     top: Number(c) + Number(a.top),
     bottom: Number(c) + Number(a.bottom)
    }
   };
   a.y.n = function(b, e) {
    if ("undefined" === typeof b || "undefined" === typeof e) return !1;
    var d = c(b.left, b.right, e.left, e.right),
     f = c(b.top, b.bottom, e.top, e.bottom);
    return new a.y.k(void 0,
     void 0, {
      left: d[0],
      right: d[1],
      top: f[0],
      bottom: f[1]
     })
   };
   a.y.p = function(b, c, e, d) {
    if (!b || !c || !e) return !1;
    b = a.y.i(b);
    if (!b) return !1;
    e = d || a.y.n(c, e);
    if (!e) return !1;
    d = a.y.o(b.visibleRect, c.left, c.top);
    return d ? (e = a.y.n(d, e)) ? {
     elementRect: a.y.o(b.cumulRect, c.left, c.top),
     visibleRect: e,
     area: b.area,
     calcVisiblePercv: function() {
      return (this.visibleRect.right - this.visibleRect.left) * (this.visibleRect.bottom - this.visibleRect.top) / this.area
     }
    } : !1 : !1
   };
   a.y.q = b;
   a.y.i = f;
   a.y.s = function(b) {
    var c = b.aa;
    b = b.zr;
    if (c) {
     if (a.d.r) c =
      n(c, b);
     else var d = e(new a.y.k(c)).visibleRect,
      d = x(d),
      c = u(c, d, a.d.g.document, null, b);
     return c
    }
   };
   a.y.t = function(a) {
    return a ? (a.right - a.left) * (a.bottom - a.top) : !1
   };
   a.y.u = function(b) {
    function c(b) {
     return a.b.ch(b) || "string" === typeof b
    }
    return "object" === typeof b && c(b.left) && c(b.right) && c(b.top) && c(b.bottom) ? !0 : !1
   };
   a.y.r = function(b, c) {
    if (!a.y.u(b) || !a.y.u(c)) return !1;
    var e = a.y.n(b, c);
    if (!e) return !1;
    var d = a.y.t(b);
    return e.calcArea() / d
   };
   a.m.a.azsx("adKilled", function(a) {
    a && !a.ep && delete v[a.zr]
   })
  })(m);
  (function(a) {
   function k(b) {
    var c =
     b.ad,
     e = b.elem,
     d = b.cbName,
     f = b.rcbName,
     l = b.options;
    b = b.isDummy;
    if (!c || !e || !l) return !1;
    if (e = a.ac.a(c, l.id, e, l)) {
     if (b) return a.ac.call(c, e, function() {}), !0;
     a.ac.call(c, e, a.ad.a, "'" + d + "','" + f + "'");
     return !0
    }
   }

   function d(b) {
    var c = b.ad,
     e = b.elem,
     d = b.cbName,
     f = b.options,
     l = b.name,
     g = b.customFn,
     h = b.preserveDom,
     u = b.argument || "";
    if (!(c && e && f && g)) return !1;
    if (b.customPixelDiv) return h = document.createElement("div"), b = f.id || a.b.co(), a.b.cu(h, f), h.id = b, a.b.bu(h, e), {
     killFn: g(d, l, c.zr, h)
    };
    b = a.ac.a(c, f.id, e, f);
    if (!b) return !1;
    a.ac.call(c, b, g, "'" + d + "', '" + l + "', '" + c.zr + "', '" + u + "'", null, h);
    return !0
   }
   a.r = {};
   var h = a.b.n(),
    f = null !== h,
    g = "number" === typeof a.d.ao(),
    e = a.d.am,
    c = !1,
    b = !0,
    l = function() {
     var a = navigator.appVersion.match(/Windows NT (\d\.\d)/);
     return a ? parseFloat(a[1]) : -1
    }(),
    u = 6.2 <= l;
   a.r.b = h;
   a.r.c = f;
   a.r.d = g;
   a.r.e = l;
   a.r.f = u;
   var x = {
    FRAME_RATE: "fr",
    STAGE_WIDTH: "sd",
    ACTIVE_STAGE_WIDTH: "asd",
    THROTTLE: "td",
    RAPID_THROTTLE: "rtd"
   };
   a.r.g = x;
   a.r.h = a.d.o;
   a.r.i = a.b.aj && a.b.aj();
   a.r.j = !1;
   if (a.r.h) try {
    var n = a.b.cs();
    a.r.j = 5 < n
   } catch (t) {}
   a.r.k = !1;
   a.r.l = function(a) {
    if (a.currentFocusState) {
     if ("center" != a.config.name) {
      var b, c, e = (b = a.manager.getPixelByName("center")) && (c = b.viewstates[a.manager.getTargetViewState()]) && c.inview;
      b = a.manager.reachedAnyInview;
      if (!e && b) {
       a.skipWidthCheck = !0;
       return
      }
     }
     a.skipWidthCheck = !1
    } else a.skipWidthCheck = !0
   };
   a.r.m = function(b) {
    var c = a.r.l,
     e = b.aa.parentNode,
     d = {
      insertableFunc: a.r.n,
      pixels: [{
        name: "center",
        id: "moatPx" + b.zr + "_" + r.ceil(1E6 * r.random()),
        target: b.aa,
        container: e,
        position: {
         top: "50%",
         left: "50%"
        },
        onWidthCheck: c
       },
       {
        name: "topLeft",
        id: "moatPx" + b.zr + "_" + r.ceil(1E6 * r.random()),
        target: b.aa,
        container: e,
        position: {
         top: "0px",
         left: "0px"
        },
        onWidthCheck: c
       }, {
        name: "bottomRight",
        id: "moatPx" + b.zr + "_" + r.ceil(1E6 * r.random()),
        target: b.aa,
        container: e,
        position: {
         top: "100%",
         left: "100%"
        },
        onWidthCheck: c
       }
      ]
     };
    d.pixels.push({
     name: "dentsuTopLeft",
     id: "moatPx" + b.zr + "_" + r.ceil(1E6 * r.random()),
     target: b.aa,
     container: e,
     position: {
      top: "20%",
      left: "20%"
     },
     onWidthCheck: c
    });
    d.pixels.push({
     name: "dentsuBottomRight",
     id: "moatPx" + b.zr + "_" + r.ceil(1E6 * r.random()),
     target: b.aa,
     container: e,
     position: {
      top: "80%",
      left: "80%"
     },
     onWidthCheck: c
    });
    d.pixels.push({
     name: "topLeft30",
     id: "moatPx" + b.zr + "_" + r.ceil(1E6 * r.random()),
     target: b.aa,
     container: e,
     position: {
      top: "30%",
      left: "30%"
     },
     onWidthCheck: c
    });
    d.pixels.push({
     name: "topRight30",
     id: "moatPx" + b.zr + "_" + r.ceil(1E6 * r.random()),
     target: b.aa,
     container: e,
     position: {
      top: "30%",
      left: "70%"
     },
     onWidthCheck: c
    });
    d.pixels.push({
     name: "bottomLeft30",
     id: "moatPx" + b.zr + "_" + r.ceil(1E6 * r.random()),
     target: b.aa,
     container: e,
     position: {
      top: "70%",
      left: "30%"
     },
     onWidthCheck: c
    });
    d.pixels.push({
     name: "bottomRight30",
     id: "moatPx" + b.zr + "_" + r.ceil(1E6 * r.random()),
     target: b.aa,
     container: e,
     position: {
      top: "70%",
      left: "70%"
     },
     onWidthCheck: c
    });
    d.pixels.push({
     name: "bottomLeft",
     id: "moatPx" + b.zr + "_" + r.ceil(1E6 * r.random()),
     target: b.aa,
     container: e,
     position: {
      top: "100%",
      left: "0%"
     },
     onWidthCheck: c
    });
    d.pixels.push({
     name: "topRight",
     id: "moatPx" + b.zr + "_" + r.ceil(1E6 * r.random()),
     target: b.aa,
     container: e,
     position: {
      top: "0%",
      left: "100%"
     },
     onWidthCheck: c
    });
    a.d.by && d.pixels.push({
     name: "dummy",
     id: "moatPx" + b.zr + "_" + r.ceil(1E6 * r.random()),
     target: b.aa,
     container: e,
     position: {
      top: "0%",
      left: "50%"
     },
     onWidthCheck: c
    });
    return d
   };
   a.r.o = function(b) {
    var c = 0,
     e = b.getTargetViewState();
    a.b.forEach(b.pixels, function(a) {
     a.measurable && a.viewstates && a.viewstates[e] && c++
    });
    return c === b.pixels.length
   };
   a.r.p = function(b, c) {
    var e = !1,
     d = !1;
    a.b.forEach(b.pixels, function(a) {
     "0px" == a.config.position.left && "0px" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (e = !0);
     "100%" == a.config.position.left &&
      "100%" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (d = !0)
    });
    return e && d ? !0 : !1
   };
   a.r.q = function(b, c) {
    var e = !1;
    a.b.forEach(b.pixels, function(a) {
     if (a.config && "50%" == a.config.position.left && "50%" == a.config.position.top && a.viewstates && a.viewstates[c]) return e = !0, !1
    });
    return e
   };
   a.r.r = function(b, c) {
    var e = !1,
     d = !1,
     f = !1,
     l = !1;
    a.b.forEach(b.pixels, function(a) {
     "0px" == a.config.position.left && "0px" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (e = !0);
     "100%" == a.config.position.left &&
      "100%" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (f = !0);
     a.config && "20%" == a.config.position.left && "20%" == a.config.position.top && a.viewstates && a.viewstates[c] && (d = !0);
     a.config && "80%" == a.config.position.left && "80%" == a.config.position.top && a.viewstates && a.viewstates[c] && (l = !0)
    });
    return e && l && f && d
   };
   a.r.s = function(b, c) {
    var e = !1;
    a.b.forEach(b.pixels, function(a) {
     if (a.config && a.viewstates && a.viewstates[c] && (e = a.viewstates[c].inview)) return !1
    });
    return e
   };
   a.r.t = function(b, c) {
    var e = !1;
    a.b.forEach(b.pixels, function(a) {
     if (a.config && "50%" == a.config.position.left && "50%" == a.config.position.top && a.viewstates && a.viewstates[c]) return e = a.viewstates[c].inview, !1
    });
    return e
   };
   a.r.u = function(b, c) {
    var e = !1,
     d = !1;
    if (b.edgesInView.tlPixelInview && b.edgesInView.brPixelInview && !b.inview) return !1;
    a.b.forEach(b.pixels, function(a) {
     "0px" == a.config.position.left && "0px" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (e = a.viewstates[c].inview);
     "100%" == a.config.position.left && "100%" ==
      a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (d = a.viewstates[c].inview)
    });
    b.edgesInView.tlPixelInview = e;
    b.edgesInView.brPixelInview = d;
    return e && d ? !0 : !1
   };
   a.r.v = function(b, c) {
    var e = !1,
     d = !1,
     f = !1,
     l = !1,
     g = !1,
     h = !1,
     u = !1,
     x = !1;
    a.b.forEach(b.pixels, function(a) {
     a.config && "topLeft" == a.config.name && a.viewstates && a.viewstates[c] && (e = a.viewstates[c].inview);
     a.config && "topLeft30" == a.config.name && a.viewstates && a.viewstates[c] && (d = a.viewstates[c].inview);
     a.config && "topRight" == a.config.name && a.viewstates &&
      a.viewstates[c] && (f = a.viewstates[c].inview);
     a.config && "topRight30" == a.config.name && a.viewstates && a.viewstates[c] && (l = a.viewstates[c].inview);
     a.config && "bottomLeft" == a.config.name && a.viewstates && a.viewstates[c] && (g = a.viewstates[c].inview);
     a.config && "bottomLeft30" == a.config.name && a.viewstates && a.viewstates[c] && (h = a.viewstates[c].inview);
     a.config && "bottomRight" == a.config.name && a.viewstates && a.viewstates[c] && (u = a.viewstates[c].inview);
     a.config && "bottomRight30" == a.config.name && a.viewstates && a.viewstates[c] &&
      (x = a.viewstates[c].inview)
    });
    return e && f && (l || d) || g && u && (x || h) || e && g && (d || h) || f && u && (l || x)
   };
   a.r.w = function(b, c) {
    if (b.inview) return !0;
    var e = !1,
     d = !1,
     f = !1,
     l = !1;
    a.b.forEach(b.pixels, function(a) {
     "0px" == a.config.position.left && "0px" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (e = a.viewstates[c].inview);
     "100%" == a.config.position.left && "100%" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (f = a.viewstates[c].inview);
     a.config && "20%" == a.config.position.left && "20%" ==
      a.config.position.top && a.viewstates && a.viewstates[c] && (d = a.viewstates[c].inview);
     a.config && "80%" == a.config.position.left && "80%" == a.config.position.top && a.viewstates && a.viewstates[c] && (l = a.viewstates[c].inview)
    });
    return e && d || f && l
   };
   a.r.x = function(b, c) {
    if (!b.inview) return !1;
    var e = !1,
     d = !1,
     f = !1,
     l = !1;
    a.b.forEach(b.pixels, function(a) {
     "0px" == a.config.position.left && "0px" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (e = a.viewstates[c].inview);
     "100%" == a.config.position.left && "100%" ==
      a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (f = a.viewstates[c].inview);
     a.config && "20%" == a.config.position.left && "20%" == a.config.position.top && a.viewstates && a.viewstates[c] && (d = a.viewstates[c].inview);
     a.config && "80%" == a.config.position.left && "80%" == a.config.position.top && a.viewstates && a.viewstates[c] && (l = a.viewstates[c].inview)
    });
    return e && l || f && d
   };
   a.r.y = function(b) {
    a.b.forEach(b.periscopeManagerList, function(a) {
     a && a.killAllPixels()
    });
    b.periscopeManagerList = null
   };
   a.r.z = function(b) {
    a.m.a.azsx("adKilled",
     a.r.y, {
      once: !0,
      condition: function(a) {
       return b.zr === a.zr
      }
     });
    a.r.aa(b.periscopeConfig) || (b.periscopeConfig = a.r.m(b));
    b.periscopeManager = new a.r.ab(b.periscopeConfig, b.zr);
    a.r.a = b.periscopeManager.insertSuccessful;
    b.periscopeManagerList || (b.periscopeManagerList = []);
    b.periscopeManagerList.push(b.periscopeManager);
    return b.periscopeManager.insertSucceeded
   };
   a.r.a = !1;
   a.r.ac = function() {
    b = !0
   };
   a.r.ad = function() {
    return a.d.bi || !a.d.bh || "0" === a.b.aj()
   };
   a.r.n = function() {
    var b = a.r.ad(),
     c = a.d.by || a.d.et,
     d = f || e;
    return b && !c ? !1 : (!a.b.j() || c) && !a.d.e && (d || g || a.r.j)
   };
   a.r.ae = function(b) {
    var c = 11;
    a.d.et && (c = 14);
    a.d.by && (c = 12);
    b.viewabilityMethod.pscope = c;
    return b && b.periscopeManager ? (a.aa.b(b, !1) && a.ae.a() && b.periscopeManager.killDentsuPixels(), b.periscopeManager.getViewStats()) : {
     isVisible: !1
    }
   };
   a.r.af = function() {};
   a.r.aa = function(b) {
    if ("object" !== typeof b || "function" !== typeof b.insertableFunc || !a.b.d(b.pixels) || 0 == b.pixels.length) return !1;
    var c = !1;
    a.b.forEach(b.pixels, function(a) {
     a.id && a.target && a.container &&
      "object" === typeof a.position && "string" === typeof a.position.top && "string" === typeof a.position.left || (c = !0)
    });
    return !c
   };
   a.r.ag = function() {
    return u && f && 10 <= h
   };
   a.r.ah = /([0-9]+(?:\.[0-9]+)?)(\%|px)/i;
   a.r.ai = function() {
    var b = {};
    return function(c) {
     if ("string" !== typeof c) return !1;
     if ("undefined" !== typeof b[c]) return b[c];
     var e, d;
     (e = c.match(a.r.ah)) && 3 == e.length && (d = e[2], e = -1 != e[1].indexOf(".") ? parseInt(e[1], 10) : parseFloat(e[1], 10));
     if ("number" !== typeof e) return !1;
     b[c] = {
      val: e,
      type: d
     };
     return b[c]
    }
   }();
   a.r.aj =
    function(c, e) {
     this.config = c;
     this.measurable = this.inserted = !1;
     this.viewstates = {};
     this.manager = e;
     this.killed = !1;
     this.cbNames = [];
     this.skipWidthCheck = !1;
     this.loopIds = [];
     this.getPeriscopeAssetURI = function() {
      return "https://z.moatads.com/swf/p6.v3.swf"
     };
     this.getDummyPixel = function(b) {
      if (!b) return !1;
      var c = !1;
      a.b.forEach(b.manager && b.manager.pixels, function(a) {
       a.config && "dummy" === a.config.name && (c = a)
      });
      return c
     };
     this.resetDummyPixel = function(b) {
      if (a.d.by && (b = b && b[0])) {
       if (b.dummyPixel) b = b.dummyPixel;
       else {
        b =
         this.getDummyPixel(b);
        if (!b) return;
        b.dummyPixel = b
       }
       var c = b.manager && b.manager.adNum;
       if ("number" === typeof c && !isNaN(c) && (c = w && w[c])) {
        var e = b.config && b.config.id;
        if ("string" === typeof e) {
         var d = b.element && b.element.getAttribute && b.element.getAttribute("style");
         if ("string" === typeof d) {
          var f = b.wrapperDiv;
          if (f) {
           var l = b.cbNames && b.cbNames[0];
           if (l) {
            var g = b.cbNames && b.cbNames[1];
            if (g) {
             var h = b.targetDoc;
             h && (a.ac.b(c, e, !0), k({
              ad: c,
              elem: f,
              cbName: l,
              rcbName: g,
              options: {
               width: b.width,
               height: b.height,
               style: d,
               id: e,
               frameborder: 0
              },
              noLog: !0,
              isDummy: !0
             }), b.element = h.getElementById(e))
            }
           }
          }
         }
        }
       }
      }
     };
     this.resetDummyPixelCB = a.o.l(a.b.cl([
      [this]
     ], this.resetDummyPixel, this));
     this.insertIntoDOM = function() {
      if (this.inserted) return !1;
      var b, c, l, g;
      l = -9999;
      f ? (c = b = 2, a.d.et && 10 > h && (g = l = 0)) : (c = b = 1, g = 0);
      a.d.by && (c = b = 8);
      this.config.dimensions && (b = this.config.dimensions.width, c = this.config.dimensions.height);
      var u = "position: absolute; width: " + b + "px; height: " + c + "px; z-index: " + l + "; border-style: none;";
      a.r.j && (u = "position: absolute !important; width: " +
       b + "px !important; height: " + c + "px !important; z-index: " + l + "!important; border-style: none !important; display: block !important; -webkit-transform: translate3d(0, 0, 0) !important;");
      a.d.by && (u += "pointer-events: none !important;");
      l = this.config.id;
      var x = this.getPeriscopeAssetURI(),
       n = this.calcPosition();
      if (!n) return !1;
      var n = u + "left: " + n.left + "px; top: " + n.top + "px;",
       t = u + "left: 0px; top: 0px;",
       z = this.config.target.ownerDocument;
      this.targetDoc = z;
      var A = a.b.ap(this.config.target);
      if (!A) return !1;
      u = "Moat#PSCB_" +
       w[this.manager.adNum].yg + "_" + r.floor(1E8 * r.random());
      A[u] = this.onStateChangeCB;
      this.cbNames.push(u);
      if (a.d.by) {
       var m = "Moat#PSRCB" + r.floor(1E8 * r.random());
       A[m] = this.resetDummyPixelCB;
       this.cbNames.push(m)
      }
      var X = this.config.callback,
       q = this.config.callbackName;
      X && q && (A[q] = X, this.cbNames.push(q));
      A = "sco=" + encodeURIComponent(u) + "&tvs=" + this.manager.getTargetViewState();
      z = z.createElement("div");
      z.id = "moatPxDiv" + r.ceil(1E6 * r.random());
      z.style.width = "0px";
      z.style.height = "0px";
      z.style.position = "absolute";
      z.style.top =
       "0px";
      z.style.left = "0px";
      this.wrapperDiv = z;
      a.b.bu(z, this.config.container);
      x = '<object type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="' + b + '" height="' + c + '" style="' + n + '" id="' + l + '"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + x + '" /><param name="quality" value="low" /><param name="hasPriority" value="true" /><param name="FlashVars" value="' + A + '" /><param name="bgcolor" value="" /><param name="wmode" value="transparent" /><embed type="application/x-shockwave-flash" src="' +
       x + '" quality="low" flashvars="' + A + '" bgcolor="" wmode="transparent" width="' + b + '" height="' + c + '" id="' + l + 'e" name="' + l + '" style="' + t + '" hasPriority="true" allowscriptaccess="always" allowFullScreen="false" type="application/x-shockwave-flash" /></object>';
      a.d.et && (this.config.customPixel = !0, this.config.customFn = a.af.a, this.config.preserveDom = !0, this.config.argument = h, q = u);
      if (a.d.by) {
       if (!k({
         ad: w[e.adNum],
         elem: z,
         cbName: u,
         rcbName: m,
         options: {
          width: b,
          height: c,
          style: n,
          id: l,
          frameborder: g
         },
         noLog: !1,
         isDummy: this.config &&
          "dummy" === this.config.name
        })) return !1;
       e.measurable = !0;
       e.fullyMeasurable = !0;
       e.dentsuMeasurable = !0;
       e.anyMeasurable = !0
      } else if (!a.d.bi) z.innerHTML = x;
      else if (this.config.customPixel) {
       b = d({
        ad: w[e.adNum],
        elem: z,
        cbName: q,
        name: this.config.name,
        options: {
         width: b,
         height: c,
         style: n,
         id: l,
         frameborder: g,
         scrolling: "no"
        },
        noLog: !1,
        customFn: this.config.customFn,
        argument: this.config.argument,
        preserveDom: this.config.preserveDom,
        customPixelDiv: this.config.customPixelDiv
       });
       if (!b) return !1;
       b.killFn && (this.config.killFn = b.killFn);
       a.d.et && (e.measurable = !0, e.fullyMeasurable = !0, e.dentsuMeasurable = !0, e.anyMeasurable = !0)
      }
      return this.inserted = !0
     };
     this.startIntervals = function() {
      var b = this.getPixelElement();
      if (!b) return !1;
      if (8 == h && (this.manager.getTargetViewState() === x.STAGE_WIDTH || this.manager.getTargetViewState() === x.ACTIVE_STAGE_WIDTH)) {
       var c = "positionToggle#" + this.config.id;
       this.loopIds.push(c);
       a.o.j()[c] || (this.positionTogglingEnabled = !0, this.positionOffsets || (this.positionOffsets = {}), a.o.g(this.positionToggle, {
         pxSwf: b,
         pxRef: this
        },
        100, c))
      }
      this.manager.getTargetViewState() === x.STAGE_WIDTH && (c = "stageWidthLoop#" + this.config.id, this.loopIds.push(c), a.o.j()[c] || a.o.g(this.stageWidthToggle, {
       pxSwf: b,
       pxRef: this,
       originalWidth: b.style.width,
       widthRe: /^[0-9\.]+/i,
       updates: 0
      }, 150, c));
      this.manager.getTargetViewState() === x.ACTIVE_STAGE_WIDTH && (c = "activeStageWidthLoop#" + this.config.id, this.loopIds.push(c), a.o.j()[c] || a.o.g(this.stageWidthToggle, {
        pxSwf: b,
        pxRef: this,
        originalWidth: b.style.width,
        widthRe: /^[0-9\.]+/i,
        updates: 0,
        active: !0,
        onWidthCheck: this.config.onWidthCheck
       },
       200, c))
     };
     this.stageWidthToggle = function(a) {
      if (!(a.pxSwf && a.pxSwf.parentNode && a.pxRef)) return !1;
      if (a.onWidthCheck && (a.onWidthCheck(a.pxRef), a.pxRef.skipWidthCheck)) return !0;
      var b;
      if (a.parsedWidth || (b = a.pxSwf.style.width.match(a.widthRe)))
       if (a.parsedWidth || (a.parsedWidth = parseInt(b[0], 10)), 1 == a.updates ? (a.updates = 0, a.pxSwf.style.width = a.originalWidth, b = a.parsedWidth) : (a.updates = 1, b = 1 < a.parsedWidth ? a.parsedWidth - 1 : a.parsedWidth + 1, a.pxSwf.style.width = b + "px"), a.active && a.pxSwf.currentPW) try {
        a.pxSwf.currentPW(b)
       } catch (c) {}
     };
     this.positionToggle = function(a) {
      if (!a.pxRef || !a.pxRef.element) return !1;
      0 > a.pxRef.positionOffsets.yOffset ? (a.pxRef.positionOffsets.yOffset = 0, a.pxRef.positionOffsets.xOffset = 0) : (a.pxRef.positionOffsets.yOffset = -2E3, a.pxRef.positionOffsets.xOffset = -2E3);
      a.pxRef.updatePosition(!0)
     };
     this.onStateChange = function(b) {
      if (!this.measurable) {
       this.measurable = !0;
       var c;
       b && b[0] && b[0].rev && (c = b[0].rev.match(a.r.ak)) && 3 == c.length && (a.r.al = c[1], a.r.i = c[2]);
       this.updateFocusState();
       this.startIntervals()
      }
      this.inserted &&
       this.killed ? (this.killed = !1, this.updateFocusState(), this.startIntervals()) : (a.b.forEach(b, function(a) {
        this.viewstates[a.name] = a
       }, this), this.manager.onStateChange(this, b))
     };
     this.onStateChangeCB = a.o.l(a.b.cl([], this.onStateChange, this));
     this.calcPosition = function() {
      var b = {},
       c = this.config.position.left,
       e = a.r.ai(this.config.position.top),
       c = a.r.ai(c),
       d, l;
      this.config.positionTarget ? this.config.positionTargetWindow ? this.targetRect = new a.y.k(this.config.positionTarget, this.config.positionTargetWindow, null,
       !0) : (this.targetRect = new a.y.k(this.config.positionTarget, null, null, !0), this.config.positionTargetWindow = this.targetRect.win) : (this.targetRect = this.targetRect ? new a.y.k(this.config.target, this.targetRect.win, null, !0) : new a.y.k(this.config.target, null, null, !0), 0 == this.targetRect.left && 0 == this.targetRect.right && 0 == this.targetRect.top && 0 == this.targetRect.bottom && "EMBED" == this.targetRect.el.nodeName && null == this.targetRect.el.offsetParent && this.config.target.parentNode && (this.targetRect = new a.y.k(this.config.target.parentNode,
       null, null, !0), this.config.positionTarget = this.config.target.parentNode));
      d = a.y.q("left", this.targetRect.win);
      l = a.y.q("top", this.targetRect.win);
      var f;
      this.wrapperDiv && (f = this.wrapperDiv.offsetParent) && "BODY" !== f.nodeName ? this.offsetRect = this.offsetRect ? new a.y.k(f, this.offsetRect.win, null, !0) : new a.y.k(f, null, null, !0) : this.offsetRect = {
       left: -d,
       top: -l
      };
      if (!e || !c) return !1;
      if ("%" == e.type) b.relativeTop = e.val / 100 * this.targetRect.height, b.top = this.targetRect.top - this.offsetRect.top + e.val / 100 * this.targetRect.height;
      else if ("px" == e.type) b.relativeTop = e.val, b.top = this.targetRect.top - this.offsetRect.top + e.val;
      else return !1;
      if ("%" == c.type) b.relativeLeft = c.val / 100 * this.targetRect.width, b.left = this.targetRect.left - this.offsetRect.left + c.val / 100 * this.targetRect.width;
      else if ("px" == c.type) b.relativeLeft = c.val, b.left = this.targetRect.left - this.offsetRect.left + c.val;
      else return !1;
      b && b.top && b.left && this.targetRect && (b.top == this.targetRect.top + this.targetRect.height && --b.top, b.left == this.targetRect.left + this.targetRect.width &&
       --b.left);
      return b
     };
     this.maxPositionUpdateInterval = 200;
     this.getStyle = function(a) {
      var b;
      try {
       b = a && a.style
      } catch (c) {}
      return b
     };
     this.updatePosition = function(a) {
      var b = (new p).getTime(),
       c;
      if (!this.element || !(c = this.getStyle(this.element)) || this.killed || !a && b - this.lastPositionUpdate < this.maxPositionUpdateInterval) return !1;
      this.lastPositionUpdate = b;
      a = this.calcPosition();
      if (!a) return !1;
      this.positionOffsets && (a.left += this.positionOffsets.xOffset || 0, a.top += this.positionOffsets.yOffset || 0);
      c.left = this.width +
       a.relativeLeft > this.targetRect.width ? r.floor(a.left - this.width) + "px" : 0 == a.relativeLeft ? r.floor(a.left) + "px" : r.floor(a.left - .5 * this.width) + "px";
      c.top = this.height + a.relativeTop > this.targetRect.height ? r.floor(a.top - this.height) + "px" : 0 == a.relativeTop ? r.floor(a.top) + "px" : r.floor(a.top - .5 * this.height) + "px";
      return !0
     };
     this.updateFocusState = function() {
      var a = this.getPixelElement();
      if (a && this.measurable) try {
       a.updateFocusState(this.currentFocusState)
      } catch (b) {}
     };
     this.kill = function(b) {
      var c = this.getPixelElement(),
       e = a.b.ap(c),
       d = a.b.ap(this.config.target);
      e && c && c.dataMoatTIDS && a.b.forEach(c.dataMoatTIDS, function(a) {
       e.clearTimeout(a)
      });
      a.b.forEach(this.loopIds, function(b) {
       a.o.i(b)
      });
      for (var c = 0, l = this.cbNames.length; c < l; c++) try {
       d[this.cbNames[c]] = null, delete d[this.cbNames[c]]
      } catch (f) {}
      this.targetDoc = null;
      return this.wrapperDiv && this.wrapperDiv.parentNode ? (this.wrapperDiv.parentNode.removeChild(this.wrapperDiv), this.killed = !0, this.inserted = !1, this.element = this.wrapperDiv = null, b && (this.config && this.config.killFn &&
       "function" === typeof this.config.killFn && (this.config.killFn(), this.config.killFn = null), this.config = null), !0) : !1
     };
     this.getPixelElement = function() {
      var a, b, c = this.config && this.config.id;
      if (this.targetDoc && c) {
       a = this.targetDoc.getElementById(c);
       if (b = !!(a && a.isPxSwf && a.isPxSwf())) return a;
       a = this.targetDoc.getElementById(c + "e");
       if (b = !!(a && a.isPxSwf && a.isPxSwf())) return a
      }
      return !1
     };
     if ("embed" === c.container.nodeName || "object" === c.container.nodeName) {
      var l;
      a.b.forEach(a.b.ar(c.container), function(a) {
       if ("embed" !==
        a.nodeName && "object" !== a.nodeName) return l = a, !1
      });
      if (!l) return !1;
      this.config.container = l
     }
     if (!b) {
      var g = document.getElementById("moatPxCont" + this.manager.contId);
      g || (g = document.createElement("div"), g.id = "moatPxCont" + this.manager.contId, g.offsetWidth = this.config.target.offsetWidth, g.offsetHeight = this.config.target.offsetHeight, g.offsetTop = this.config.target.offsetTop || "0px", g.offsetLeft = this.config.target.offsetLeft || "0px", g.style.position = "absolute", g.style.overflow = "hidden", g.style.zIndex = -9999, a.b.bu(g,
       this.config.container));
      this.config.container = g;
      this.config.container && !this.manager.container && (this.manager.container = this.config.container)
     }
     if (!this.insertIntoDOM()) return !1;
     this.element = this.targetDoc.getElementById(this.config.id);
     if (!this.element) return !1;
     g = new a.y.k(this.element, null, null, !0);
     this.width = g.width;
     this.height = g.height;
     if (!this.updatePosition()) return !1;
     this.currentFocusState = a.focus.pageIsVisible();
     this.focusCheckingLoop = function(b) {
      var c = a.focus.pageIsVisible();
      if (!b.pxRef) return !1;
      var d = b.pxRef;
      d.currentFocusState != c && (d.currentFocusState = !d.currentFocusState, d.killed || d.updateFocusState(), a.d.by && (b = e && "number" === typeof e.adNum && w[e.adNum], d = d && d.config && d.config.id, b && d && a.ac && a.ac.call(b, d, "(function(){var innerFunction = window && window['" + (c ? "onFocus" : "onBlur") + "'];if (typeof innerFunction === 'function') { innerFunction(); } }())")))
     };
     this.rebuildOnFocusLoss = function() {
      f && (this.currentFocusState || this.killed || !this.inserted ? this.currentFocusState && this.killed && !this.inserted &&
       (this.insertIntoDOM.call(this), (this.element = this.targetDoc.getElementById(this.config.id)) && this.updatePosition()) : this.kill())
     };
     this.rebuildTarget = function(a, b) {
      this.config.target = a;
      this.config.container = b;
      this.targetDoc = this.config.target.ownerDocument;
      this.updatePosition()
     };
     this.positionUpdateLoop = function(a) {
      if (!a.pxRef) return !1;
      a.pxRef.killed || a.pxRef.updatePosition()
     };
     var g = "focusCheckingLoop#" + this.config.id,
      u = "positionUpdateLoop#" + this.config.id;
     this.loopIds.push(g);
     this.loopIds.push(u);
     a.o.g(this.focusCheckingLoop, {
      pxRef: this
     }, 200, g);
     a.o.g(this.positionUpdateLoop, {
      pxRef: this
     }, 500, u);
     this.inserted = !0;
     this.insertionTime = (new p).getTime()
    };
   a.r.ak = /([0-9a-z]+-[a-z]+)-(.*)/i;
   a.r.ab = function(d, l) {
    this.insertedAllSuccessfully = this.insertSuccessful = !1;
    this.pixels = [];
    this.adNum = l;
    this.anyInview = this.fullyInview = this.inview = !1;
    this.edgesInView = {};
    this.edgesInView.tlPixelInview = !1;
    this.twentyPercentInView = this.dentsuInview = this.dentsuMeasurable = this.anyMeasurable = this.fullyMeasurable = this.measurable =
     this.reachedAnyInview = this.reachedFullyInview = this.reachedInview = this.edgesInView.brPixelInview = !1;
    this.getPixelByName = function(b) {
     var c;
     a.b.forEach(this.pixels, function(a) {
      if (a.config.name && a.config.name == b) return c = a, !1
     });
     return c || !1
    };
    this.getTargetViewState = function() {
     var b = x.FRAME_RATE;
     !f && !e || a.d.et || (b = x.ACTIVE_STAGE_WIDTH);
     a.r.j && !a.d.by && (b = x.ACTIVE_STAGE_WIDTH);
     return b
    };
    this.onStateChange = function(b, e) {
     var d = this.getTargetViewState(),
      l = a.focus.pageIsVisible(),
      f = "undefined" != typeof w && w[this.adNum];
     b.targetRect && (this.isBigAd = a.ab.a(b.targetRect.calcArea()), f && f.viewstats && (f.viewstats.isBigAd = this.isBigAd));
     this.anyMeasurable || (this.anyMeasurable = !0);
     this.fullyMeasurable || (this.fullyMeasurable = a.r.p(this, d));
     this.measurable || (this.measurable = a.r.q(this, d), a.r.am = (new p).getTime());
     this.dentsuMeasurable || (this.dentsuMeasurable = a.r.r(this, d));
     if (1 == e.length) {
      if (e[0].name != d) return !1
     } else {
      var g = !0;
      a.b.forEach(e, function(a) {
       if (a.name == d) return g = !1
      });
      if (g || !l) return !1
     }
     this.anyMeasurable && (this.anyInview =
      a.r.s(this, d));
     this.measurable && ((this.anyInview = a.r.s(this, d)) && !this.reachedAnyInview && (this.reachedAnyInview = !0), this.inview = a.r.t(this, d), this.thirtyPercentInView = a.r.v(this, d), this.inview && !this.reachedInview && (this.reachedInview = !0), !c && a.r.j && f && (c = !0, a.t.b(f)));
     this.fullyMeasurable && (this.fullyInview = a.r.u(this, d)) && !this.reachedFullyInview && (this.reachedFullyInview = !0);
     this.dentsuMeasurable && (this.dentsuInview = a.r.x(this, d), this.twentyPercentInView = a.r.w(this, d));
     a.m.a.zaxs("periscope:onStateChange",
      this.adNum)
    };
    this.getViewStats = function() {
     var b = 0;
     if (this.fullyInview) b = 1;
     else if (this.dentsuInview) b = .8;
     else if (this.inview) b = .5;
     else if (this.thirtyPercentInView) b = .3;
     else if (this.twentyPercentInView) b = .2;
     else if (this.anyInview || this.reachedAnyInview && !this.sentReachedAnyInview) this.sentReachedAnyInview = !0, b = .01;
     var c = "pscope" === a.aa.a(this.adNum);
     this.edgesInView && c && a.m.a.zaxs("adEdgesViewStatus", this.adNum, {
      topLeft: this.edgesInView.tlPixelInview,
      topRight: this.edgesInView.tlPixelInview,
      bottomLeft: this.edgesInView.brPixelInview,
      bottomRight: this.edgesInView.brPixelInview
     });
     b = {
      isVisible: this.inview,
      isFullyVisible: this.fullyInview,
      isDentsuVisible: this.dentsuInview,
      percv: b
     };
     b.isVisible = this.inview || this.isBigAd && this.thirtyPercentInView;
     return b
    };
    this.getPercentViewable = function(b, c) {
     var e = this.getTargetViewState(),
      d = [],
      f = b * c,
      l, g, h;
     a.b.forEach(this.pixels, function(a) {
      a.measurable && a.viewstates && a.viewstates[e] && a.viewstates[e].inview && (g = parseInt(a.config.position.top), -1 < a.config.position.top.indexOf("%") && (g = g / 100 * c), d.push(g))
     });
     0 === d.length ? l = 0 : (l = r.min.apply(null, d), h = r.max.apply(null, d), l = b * (h - l));
     return r.round(l / f * 100)
    };
    this.killDentsuPixels = function() {
     a.b.forEach(this.pixels, function(b) {
      !b.config || "dentsuTopLeft" !== b.config.name && "dentsuBottomRight" !== b.config.name || ((a.d.by || a.d.et) && a.ac.b(w[b.manager.adNum], b.config.id), b.kill())
     })
    };
    this.rebuildPixelTargets = function(b, c) {
     if (!b || !c) return !1;
     a.b.forEach(this.pixels, function(a) {
      a.rebuildTarget(b, c)
     })
    };
    this.killAllPixels = function() {
     a.b.forEach(this.pixels, function(a) {
      a.kill(!0)
     });
     this.pixels = []
    };
    this.updateContainer = function(b) {
     function c(b, l) {
      var f = d[l],
       g = d.style && d.style[b];
      if (!a.b.ch(f))
       if (a.b.ch(g)) f = g;
       else return !1;
      if (e[l] === f || !e.style) return !1;
      e.style[b] = f + "px"
     }
     b.container || (b.container = document.getElementById("moatPxCont" + b.contId));
     b.adElement || (b.adElement = w[b.adNum] && w[b.adNum].aa);
     var e = b.container,
      d = b.adElement;
     if (!e || !d) return !1;
     c("left", "offsetLeft");
     c("top", "offsetTop");
     c("width", "offsetWidth");
     c("height", "offsetHeight")
    };
    if (d.insertableFunc()) {
     var g = 0;
     this.contId =
      r.ceil(1E6 * r.random());
     a.b.forEach(d.pixels, function(b, c) {
      this.pixels.push(new a.r.aj(b, this));
      this.pixels[c].inserted && (g++, this.insertSuccessful = !0)
     }, this);
     this.insertedAllSuccessfully = g === this.pixels.length;
     b || a.o.g(this.updateContainer, this, 200, "pixelContainerResizeLoop#" + this.contId)
    }
   }
  })(m);
  (function(a) {
   function k(a, b, c) {
    a.IR5.MIN[c] = r.min(b, a.IR5.MIN[c]) || b || 1;
    a.IR5.MAX[c] = r.max(b, a.IR5.MAX[c]) || b
   }

   function d(b) {
    if (n) return !0;
    var c = q.swde.azsx("focusStateChange", function(c) {
     var e = {
      type: "blur"
     };
     c || (a.ag.g(e, b), a.ag.h(e, b))
    });
    a.m.a.azsx("adKilled", function() {
     q.swde.sxaz("focusStateChange", {
      id: c
     })
    }, {
     once: !0,
     condition: function(a) {
      return b.zr == a.zr
     }
    });
    n = !0
   }

   function h(a, b) {
    b.be = r.max("undefined" !== typeof b.be ? b.be : 0, a - b.bf);
    "undefined" === typeof b.by && 500 <= b.be && (b.by = b.bk)
   }

   function f(b) {
    b.az === a.ag.a.d.a ? b.az = a.ag.a.d.b : b.az === a.ag.a.d.b && (b.az = a.ag.a.d.a)
   }

   function g(b) {
    b.ba === a.ag.a.d.a ? b.ba = a.ag.a.d.b : b.ba === a.ag.a.d.b && (b.ba = a.ag.a.d.a)
   }

   function e(b) {
    b.ax === a.ag.a.b.a ? b.ax = a.ag.a.b.b : b.ax ===
     a.ag.a.b.b && (b.ax = a.ag.a.b.a)
   }

   function c(b) {
    b.ay === a.ag.a.c.a ? b.ay = a.ag.a.c.b : b.ay === a.ag.a.c.b && (b.ay = a.ag.a.c.a)
   }

   function b(a, b) {
    "undefined" === typeof b.bk && (b.bk = 0);
    b.bk += a - b.bo;
    b.bo = a
   }

   function l(a, b) {
    "undefined" === typeof b.bl && (b.bl = 0);
    b.bl += a - b.bp;
    b.bp = a
   }

   function u(a, b) {
    "undefined" === typeof b.bg && (b.bg = 0);
    "undefined" === typeof b.bc && (b.bc = 0);
    b.bu = a - b.bs;
    b.bu > b.bc && (b.bc = b.bu);
    b.bg += a - b.bq;
    500 <= b.bc && "undefined" === typeof b.bw && (b.bk += a - b.bo, b.bw = b.bk);
    b.bq = a
   }

   function x(a, b) {
    "undefined" === typeof b.bh &&
     (b.bh = 0);
    "undefined" === typeof b.bd && (b.bd = 0);
    b.bv = a - b.bt;
    b.bv > b.bd && (b.bd = b.bv);
    b.bh += a - b.br;
    500 <= b.bd && "undefined" === typeof b.bx && (b.bl += a - b.bp, b.bx = b.bl);
    b.br = a
   }
   a.ag = {};
   var n = !1;
   a.ag.a = {};
   a.ag.a.a = {};
   a.ag.a.a.a = 0;
   a.ag.a.a.b = 1;
   a.ag.a.b = {};
   a.ag.a.b.a = 0;
   a.ag.a.b.b = 1;
   a.ag.a.c = {};
   a.ag.a.c.a = 0;
   a.ag.a.c.b = 1;
   a.ag.a.d = {};
   a.ag.a.d.a = 0;
   a.ag.a.d.b = 1;
   a.ag.a.e = {};
   a.ag.a.e.a = 0;
   a.ag.a.e.b = 1;
   a.ag.a.f = {};
   a.ag.a.f.a = 0;
   a.ag.a.f.b = 1;
   a.ag.a.f.c = 2;
   a.ag.b = function(a) {
    k(a, a.aj, "x");
    k(a, a.ak, "y");
    a.IR5.AREA = (a.IR5.MAX.x -
     a.IR5.MIN.x) * (a.IR5.MAX.y - a.IR5.MIN.y)
   };
   a.ag.c = function(b) {
    function c() {
     500 <= (new p).getTime() - ya && (a.ag.d({
      type: "park"
     }, b), clearInterval(d), b.au = a.ag.a.a.a)
    }
    var e = b.au;
    if (e === a.ag.a.a.a) {
     ya = (new p).getTime();
     var d = a.o.e(c, 50);
     b.au = a.ag.a.a.b
    } else e === a.ag.a.a.b && (ya = (new p).getTime())
   };
   a.ag.e = function(b) {
    function c() {
     3E3 <= (new p).getTime() - za && (a.ag.f({
      type: "park"
     }, b), clearInterval(d), b.av = a.ag.a.a.a)
    }
    var e = b.av;
    if (e === a.ag.a.a.a) {
     za = (new p).getTime();
     var d = a.o.e(c, 50);
     b.av = a.ag.a.a.b
    } else e === a.ag.a.a.b &&
     (za = (new p).getTime())
   };
   a.ag.g = function(c, e) {
    var l = c.type;
    d(e);
    if (e.az === a.ag.a.d.a) {
     if ("mouseover" === l || "mousemove" === l) e.bo = (new p).getTime(), f(e)
    } else if (e.az === a.ag.a.d.b) {
     "mousemove" === l && b((new p).getTime(), e);
     if ("mouseout" === l || "blur" === l) b((new p).getTime(), e), f(e);
     "scooper" === l && b((new p).getTime(), e)
    }
   };
   a.ag.h = function(b, c) {
    var e = b.type;
    d(c);
    if (c.ba === a.ag.a.d.a) {
     if ("mouseover" === e || "mousemove" === e) c.bp = (new p).getTime(), g(c)
    } else if (c.ba === a.ag.a.d.b) {
     "mousemove" === e && l((new p).getTime(),
      c);
     if ("mouseout" === e || "blur" === e) l((new p).getTime(), c), g(c);
     "scooper" === e && l((new p).getTime(), c)
    }
   };
   a.ag.d = function(b, c) {
    if (2 != c.an) {
     var d = b.type;
     if (c.ax === a.ag.a.b.a) {
      if ("mouseover" === d || "mousemove" === d) c.bq = (new p).getTime(), c.bs = (new p).getTime(), e(c)
     } else c.ax === a.ag.a.b.b && ("mousemove" !== d && "mouseout" !== d || u((new p).getTime(), c), "park" === d && u((new p).getTime() - 500, c), "mouseout" !== d && "park" !== d || e(c))
    }
   };
   a.ag.f = function(b, e) {
    if (2 != e.an) {
     var d = b.type;
     if (e.ay === a.ag.a.c.a) {
      if ("mouseover" === d || "mousemove" ===
       d) e.br = (new p).getTime(), e.bt = (new p).getTime(), c(e)
     } else e.ay === a.ag.a.c.b && ("mousemove" !== d && "mouseout" !== d || x((new p).getTime(), e), "park" === d && x((new p).getTime() - 3E3, e), "mouseout" !== d && "park" !== d || c(e))
    }
   };
   a.ag.i = function(b, c) {
    var e = b.type;
    if (c.bb == a.ag.a.e.a) {
     if ("mouseover" == e || "mousemove" == e) c.bf = (new p).getTime(), c.bb = a.ag.a.e.b
    } else c.bb == a.ag.a.e.b && ("mouseout" == e ? (h((new p).getTime(), c), c.bb = a.ag.a.e.a) : "mousemove" != e && "scooper" != e || h((new p).getTime(), c))
   }
  })(m);
  (function(a) {
   function k(d) {
    var h = !1;
    if (a.d.dk()) return d.viewabilityMethod.sframe = 3, a.ai.a(d);
    if (a.d.cd) return d.viewabilityMethod.sframe = 4, a.aj.a(d);
    if (a.d.ch()) return d.viewabilityMethod.sframe = 5, a.ak.a(d);
    if (a.d.bq()) return d.viewabilityMethod.sframe = 6, a.al.a(d);
    a.d.cn() && (d.viewabilityMethod.sframe = 7, h = a.am.a(d), 0 < h && (a.d.co = !0));
    return h
   }
   a.ah = {};
   a.ah.a = function(d) {
    var h = a.b.cb(d);
    h && a.ab.a(h) ? (d.viewstats || (d.viewstats = {}), d.viewstats.isBigAd = !0, h = .3) : h = .5;
    h = (d = k(d)) && !isNaN(d) && d >= h;
    h = {
     isVisible: h,
     isFullyVisible: h && .98 <= d,
     percv: d
    };
    .8 <= d && (h.isDentsuVisible = !0);
    return h
   }
  })(m);
  (function(a) {
   a.q = {};
   try {
    var k = -1 < navigator.platform.indexOf("Mac") ? 102 : 117
   } catch (g) {
    k = 117
   }
   var d = "undefined" !== typeof window.devicePixelRatio,
    h = a.d.e && d && "undefined" !== typeof window.innerHeight && "undefined" !== typeof window.outerHeight && r.round(window.devicePixelRatio * (a.d.g.outerHeight - a.d.g.innerHeight)),
    f = function() {
     var d = !1;
     if (57 <= a.d.er()) return !1;
     try {
      d = "undefined" !== typeof window.mozInnerScreenX && "undefined" !== typeof window.screenX
     } catch (e) {}
     return d
    }();
   a.q.b = function(f, e) {
    f.viewabilityMethod.pscope = 13;
    var c, b, l, h = {
     isVisible: !1,
     isFullyVisible: !1,
     percv: 0
    };
    try {
     l = f.aa.getBoundingClientRect();
     var x = e || f.WINDOW || a.b.ap(f.aa),
      n = a.d.s(x),
      t = a.y.n(l, n),
      v = x.mozInnerScreenX,
      z = x.mozInnerScreenY,
      A = {
       left: t.left + v,
       right: t.right + v,
       top: t.top + z,
       bottom: t.bottom + z
      },
      m = window.screenX,
      r = window.screenY,
      B = a.y.n(A, {
       left: m,
       right: m + window.outerWidth,
       top: r + k / (d ? window.devicePixelRatio : 1),
       bottom: r + window.outerHeight
      }),
      y = l.width * l.height,
      C = (B.right - B.left) * (B.bottom - B.top) / y;
     "pscope" === a.aa.a(f.zr) && a.m.a.zaxs("rectsAvailable", f.zr, A, B);
     c = {
      area: y,
      percv: C
     };
     b = a.y.g(c, f)
    } catch (D) {}
    l = a.y.c;
    "undefined" !== typeof c && "undefined" !== typeof b && (h.isVisible = c.percv >= b, h.isFullyVisible = c.percv >= l, h.percv = c.percv, .8 <= c.percv && (h.isDentsuVisible = !0));
    return h
   };
   a.q.a = function() {
    return f
   };
   a.q.c = function() {
    var a = {};
    a.dl = Number(f);
    "number" !== typeof h || isNaN(h) || (a.dn = h);
    return a
   }
  })(m);
  (function(a) {
   function k(a) {
    var c = 0,
     b;
    return function() {
     var d = (new p).getTime();
     150 < d - c && (b = a.apply(this,
      arguments), c = d);
     return b
    }
   }

   function d(e) {
    function c(a) {
     "undefined" !== typeof e.overrideViewMethod && (a.viewabilityMethod[k] = e.overrideViewMethod);
     return A(a)
    }
    var b = e.isVisibleFn,
     d = e.isMeasurableFn,
     f = e.pauseCheckingFn,
     g = e.careFoc,
     n = e.qsKeys,
     k = e.counterLabel,
     v = k;
    a.d.an();
    var z = [],
     A = b,
     m = 0,
     q = 0,
     B = 0,
     y = 0,
     C = 0,
     D = 0,
     L = 0,
     J = 0;
    (new p).getTime();
    var ba = !1,
     S = !1,
     N = !1,
     ga = !1,
     fa, U, ha, qa, ia = 0,
     w = 0,
     F = !1,
     E = !1,
     G = 0,
     M = 0,
     H = 0,
     I = !1,
     Q = !1,
     P = !1,
     ca = a.d.e,
     O, Ka;
    if (0 === n) var ja = "as",
     da = "ag",
     ka = "an",
     W = "ck",
     ea = "kw",
     la = "ah",
     ma = "aj",
     Y = "pg",
     T = "pf",
     ra = "gi",
     na = "gf",
     oa = "ix",
     Z = "gg",
     R = "ez",
     F = !0;
    else 1 === n ? (ja = "cc", da = "bw", ka = "bx", W = "ci", ea = "jz", la = "bu", ma = "dj") : 2 === n ? (ja = "cg", da = "ce", ka = "cf", W = "cj", ea = "ts", la = "ah", ma = "dk", ra = "gj", na = "gb", oa = "ig", Z = "ge", R = "ez") : 3 === n ? (ja = "cg", da = "ce", ka = "cf", W = "cj", ea = "ts", la = "ah", ma = "dk", ra = "gi", na = "gf", oa = "ix", Z = "gg", R = "ez") : 5 === n ? (ja = "aa", da = "ad", ka = "cn", W = "co", ea = "cp", la = "ah", ma = "cq", ra = "gn", na = "gk", oa = "ik", Z = "gl", R = "ez") : 6 === ("number" === typeof n ? n : n.type) && (ja = n.otsKey, da = n.ivtKey, ka = n.lastivtKey, W = n.ivtAtOtsKey,
     ea = n.timeToViewSendKey, la = n.timeToViewAskKey, ma = n.visOnLoadKey, ra = n.fullyIvtOtsKey, na = n.fullyIvtKey, oa = n.maxfullyIvtKey, Z = n.lastFullyIvtKey, R = n.wasPartiallyInviewKey);
    this.getLabel = function() {
     return v
    };
    this.addListener = function(b) {
     var c = !1;
     a.b.forEach(z, function(a) {
      if (a === b) return c = !0, !1
     });
     c || z.push(b)
    };
    this.removeListener = function(a) {
     for (var b, c = z.length; b < c; b++) {
      var e = !1,
       d = !1,
       f;
      for (f in z[b])
       if (d || (d = !0), z[b][f] !== a[f]) {
        e = !0;
        break
       } d && !e && z.splice(b, 1)
     }
    };
    this.hadOTS = function() {
     return N
    };
    this.hadFullOTS =
     function() {
      return ga
     };
    this.hadFIT = function() {
     return 0 < q
    };
    this.hadVideo2SecOTS = function() {
     return "undefined" != typeof _hadVideo2SecOts && _hadVideo2SecOts
    };
    this.hadDentsuVideoOTS = function() {
     return !1
    };
    this.hadDentsuDisplayOTS = function() {
     return I
    };
    this.getInViewTime = function() {
     return m
    };
    this.getFullyInViewThreshold = function() {
     return .98
    };
    this.getLastInviewPercent = function() {
     return G
    };
    this.getLastInviewPercentWithThresholdCap = function() {
     return .98 <= G ? 1 : G
    };
    this.getCareAboutFocus = function() {
     return g
    };
    this.getPauseCheckingFn =
     function() {
      return f
     };
    this.visible = function() {
     return ba
    };
    this.fullyVisible = function() {
     return S
    };
    this.wasPartiallyInview = function() {
     return E
    };
    this.getFullInviewTimeTotal = function() {
     return q
    };
    this.getMaximumContinuousInViewTime = function() {
     return r.max(C, D)
    };
    this.getMaximumContinuousFullyInViewTime = function() {
     return r.max(J, L)
    };
    this.getDentsuInViewTime = function() {
     return M
    };
    this.getDentsuAudibleAndVisibleTime = function() {
     return 0
    };
    this.isAdMeasurable = function(a) {
     var b = "function" === typeof d && d(a);
     a && a.isMeasurabilityDisabled() &&
      (b = !1);
     return b
    };
    this.adStartedOnScreen = function() {
     return qa
    };
    this.update = function(b, e, y) {
     if (Ka === y) return !1;
     Ka = y;
     y = "function" === typeof d && d(b);
     b && b.isMeasurabilityDisabled() && (y = !1);
     if (!y) return !1;
     var k = m || 0,
      B = q || 0;
     y = !1;
     var t = c(b);
     t.rect && (b.elementRect = t.rect, b.currentWidth = b.elementRect.right - b.elementRect.left, b.currentHeight = b.elementRect.bottom - b.elementRect.top);
     b.viewabilityPercent[v] = a.b.ch(t.percv) ? r.round(100 * t.percv) : "-";
     "number" === typeof t.area && (b.ADAREA = t.area);
     var A = t.isVisible,
      R =
      t.isFullyVisible,
      p = t.isDentsuVisible,
      w = t.percv && 0 < t.percv;
     G = t.percv;
     !k && t.percv && a.m.a.zaxs("adEntersView", b);
     var V = f(b),
      V = (!g || a.t.f(b)) && !V;
     a.m.a.zaxs("adCheckingState", b, v, V);
     A = A && V;
     R = R && V;
     w = w && V;
     R && a.m.a.zaxs("adFullyVisible", b, v);
     P = p && V;
     !E && w && (E = !0);
     if (A && ba) m += e, C += e;
     else if (A || ba) p = r.round(e / 2), m += p, C += p;
     if (R && S) q += e, L += e;
     else if (R || S) p = r.round(e / 2), q += p, L += p;
     if (P && Q) M += e, H += e;
     else if (P || Q) p = r.round(e / 2), M += p, H += p;
     !N && 1E3 <= C && (y = N = !0, this.timeToView = fa = b.counters.query()[la], U = m);
     !ga && 1E3 <=
      L && (ga = !0, a.m.a.zaxs("fullOtsReached", b, v));
     "undefined" === typeof ha && (p = b.counters.query().bu, 1E3 >= p ? A && (ha = !0) : ha = !1);
     "undefined" === typeof qa && (p = b.counters.query().bu, 1E3 >= p ? w && (qa = !0) : qa = !1);
     (b.el = ca) && "undefined" === typeof O && 2 !== n && 3 !== n && t.elGeo && (p = h().y + t.elGeo.foldTop, V = t.elGeo.threshold * t.elGeo.elHeight, p = p > a.aa.c() - V, 0 < t.elGeo.totalArea && (O = p, b.dn = O));
     F && w && (ia = r.min(r.max(G, ia), 1));
     D < C && (D = C);
     J < L && (J = L);
     A || (C = 0);
     R || (L = 0);
     ba = A;
     S = R;
     1E3 <= H && (I = !0);
     P || (H = 0);
     Q = P;
     a.b.forEach(z, function(a) {
      var b =
       t && t.percv,
       b = "number" === typeof b && 100 * b;
      if (a.onInViewTimeCount) a.onInViewTimeCount(e, m - k, b, v);
      if (a.onFullyInViewTimeCount) {
       var c = r.max(q - B, 0);
       a.onFullyInViewTimeCount(e, c, b, v)
      }
     });
     return y
    };
    this.getQS = function(b, c, e) {
     B > m && (B = m);
     y > q && (y = q);
     b[ja] = Number(N);
     b[da] = m;
     b[ka] = B;
     if (0 === n || 2 === n || 3 === n || 5 === n || ("number" === typeof n ? n : n.type)) ga && ra && (b[ra] = 1), c = (c = 0 === n && e && "sframe" === e) || a.d.cw() && !a.p.c() && 0 === n, na && !c && (b[na] = q, b[Z] = y, c = this.getMaximumContinuousFullyInViewTime(), b[oa] = c, v === e && (b.ic = c)), E &&
      R && (b[R] = 1);
     "undefined" !== typeof U && (b[W] = U);
     "undefined" !== typeof fa && (b[ea] = fa);
     "undefined" !== typeof ha && (b[ma] = Number(ha));
     !0 === F && (e = r.round(100 * ia), c = r.round(100 * w), b[Y] = e, b[T] = c, w = ia);
     "undefined" !== typeof O && (b.ib = Number(O));
     B = m;
     y = q
    }
   }

   function h() {
    var e = a.d.g,
     c = e.document;
    return {
     y: void 0 !== e.pageYOffset ? e.pageYOffset : (c.documentElement || c.body.parentNode || c.body).scrollTop
    }
   }
   a.aa = {};
   var f = {},
    g = {};
   a.aa.c = function() {
    return sa ? a.d.s(a.d.g).height : 750
   };
   a.aa.d = function() {
    if (!a.b.l() && !a.b.m()) return !1;
    var e = a.d.bn();
    return e = (e = e || a.s.d()) || a.d.cn()
   };
   a.aa.e = function() {
    if (!a.aa.d()) return !1;
    var e = a.d.bu(),
     e = e | a.s.e();
    return e |= a.d.co
   };
   a.aa.f = function(e) {
    var c = e.zr;
    a.m.a.azsx("adKilled", a.aa.g, {
     once: !0,
     condition: function(a) {
      return a.zr == e.zr
     }
    });
    f[c] = f[c] || {};
    e.viewstats = {
     isBigAd: !1
    };
    if (e && e.isMeasurabilityDisabled()) return !1;
    if (a.d.dj() || a.d.an().isInApp && a.d.e) {
     var b = k(a.y.f),
      l;
     l = a.d.j() ? a.d.cw() ? new d({
      isVisibleFn: a.p.g,
      isMeasurableFn: a.d.dj,
      pauseCheckingFn: a.t.c,
      overrideViewMethod: 15,
      careFoc: !1,
      qsKeys: 0,
      counterLabel: "strict"
     }) : a.d.dx() ? new d({
      isVisibleFn: a.s.f,
      isMeasurableFn: a.d.dj,
      pauseCheckingFn: a.t.c,
      careFoc: !1,
      qsKeys: 0,
      counterLabel: "strict"
     }) : new d({
      isVisibleFn: a.s.f,
      isMeasurableFn: a.d.dj,
      pauseCheckingFn: a.t.c,
      careFoc: !0,
      qsKeys: 0,
      counterLabel: "strict"
     }) : new d({
      isVisibleFn: b,
      isMeasurableFn: a.d.dj,
      pauseCheckingFn: a.t.c,
      careFoc: !0,
      qsKeys: 0,
      counterLabel: "strict"
     });
     f[c].strict = l;
     b = new d({
      isVisibleFn: b,
      isMeasurableFn: a.d.dj,
      pauseCheckingFn: a.t.c,
      careFoc: !1,
      qsKeys: 1,
      counterLabel: "lax"
     });
     f[c].lax =
      b
    } else !0 !== e.isSkin && a.q && a.q.a() && (b = new d({
     isVisibleFn: a.q.b,
     isMeasurableFn: a.d["do"],
     pauseCheckingFn: a.t.c,
     careFoc: !0,
     qsKeys: 3,
     counterLabel: "pscope"
    }), f[c].pscope = b);
    a.r && a.r.n() && !f[c].pscope && (b = new d({
     isVisibleFn: a.r.ae,
     isMeasurableFn: a.d.dp,
     pauseCheckingFn: a.t.c,
     careFoc: !0,
     qsKeys: 2,
     counterLabel: "pscope"
    }), f[c].pscope = b);
    var h, x, n, t, b = a.ah.a;
    l = !0;
    a.d.de() && (h = !0, b = a.p.g, x = a.p.d, t = 15, l = !1);
    var v = a.d.fa();
    !h && v && (h = !0, n = v.name, x = v.measurableFn);
    h && (h = new d({
     isVisibleFn: b,
     isMeasurableFn: x,
     pauseCheckingFn: a.t.c,
     viewabilityApiName: n,
     overrideViewMethod: t,
     careFoc: l,
     qsKeys: 5,
     counterLabel: "sframe"
    }), f[c].sframe = h);
    c = a.m.a.azsx("view:tick", a.b.cl([e], a.aa.h), {
     priority: 5
    });
    g[e.zr] = c;
    a.m.a.zaxs("viewCounterStarted", e);
    (a.b.l() || a.b.m()) && (c = a.aa.i(e.zr)) && c.addListener({
     _wasAnyPixelInView: !1,
     onInViewTimeCount: function(b, c, d) {
      return this._wasAnyPixelInView ? !1 : a.aa.e() ? (a.t.b(e), this._wasAnyPixelInView = !0, !1) : !0
     }
    })
   };
   a.aa.j = function(e, c, b) {
    return (e || opt_counters) && c && b ? (e = a.aa.k(e.zr, c)) && "function" == typeof e[b] &&
     e[b]() : !1
   };
   a.aa.l = function(e, c) {
    if (e && c) {
     var b = a.d.fa(),
      l;
     !c.sframe && b && (l = b.measurableFn, b = b.name, f[e.zr].sframe = new d({
      isVisibleFn: a.ah.a,
      isMeasurableFn: l,
      pauseCheckingFn: a.t.c,
      viewabilityApiName: b,
      careFoc: !0,
      qsKeys: 5,
      counterLabel: "sframe"
     }), a.m.a.zaxs("viewCounterStarted", e))
    }
   };
   a.aa.h = function(e, c, b) {
    if (a.b.bz(e)) {
     var d = f[e.zr],
      g;
     a.aa.l(e, d);
     for (var h in d) d.hasOwnProperty(h) && d[h].update(e, c, b) && (g = !0);
     e.fireFullViewEvent = !1;
     a.b.forEach(e.secondaryCounters, function(a) {
      a.update(e, c, b)
     });
     e.fireFullViewEvent &&
      (a.t.d(e), e.fireFullViewEvent = !1);
     g && a.t.e(e);
     a.ab.b(e);
     e.ao && 1 == e.ao.skin && "width" == a.z.a && a.z.c();
     a.e.d(e) && a.t.b(e)
    }
   };
   a.aa.m = function(e, c) {
    return a.aa.n(e) >= c
   };
   a.aa.n = function(e) {
    var c = 0;
    (e = e && "undefined" !== typeof e.zr && a.aa && a.aa.i(e.zr)) && (c = e.getInViewTime());
    return c
   };
   a.aa.o = function() {
    return "hadOTS"
   };
   a.aa.p = function(e, c) {
    var b = a.aa.o();
    return e && e && "undefined" != typeof e.zr ? c ? a.aa.j(e, c, b) : a.aa.j(e, a.aa.a(e.zr), b) : null
   };
   a.aa.q = function(e, c) {
    var b = a.aa.r(e.zr);
    return a.r && a.r.a && b && b.pscope &&
     b.pscope[c ? "hadVideo2SecOTS" : "hadOTS"]()
   };
   a.aa.b = function(e, c) {
    var b = a.aa.r(e.zr);
    return a.r && a.r.a && b && b.pscope && b.pscope[c ? "hadDentsuVideoOTS" : "hadDentsuDisplayOTS"]()
   };
   a.aa.s = function(e, c) {
    var b = a.aa && a.aa.r(e.zr);
    return a.r && a.r.a && b && b.pscope && b.pscope.getFullInviewTimeTotal() >= c
   };
   a.aa.t = function(e) {
    var c = 0;
    (e = e && "undefined" !== typeof e.zr && a.aa && a.aa.i(e.zr)) && (c = e.getFullInviewTimeTotal());
    return c
   };
   a.aa.u = function(e, c) {
    return a.aa.t(e) >= c
   };
   a.aa.g = function(e) {
    delete f[e.zr];
    g.hasOwnProperty(e.zr) &&
     a.m.a.sxaz("view:tick", {
      id: g[e.zr]
     })
   };
   a.aa.r = function(a) {
    var c;
    f[a] ? c = f[a] : f[a] = c = {};
    return c
   };
   a.aa.k = function(e, c) {
    var b = a.aa.r(e);
    return b && b[c]
   };
   a.aa.v = function(e) {
    var c, b, d;
    if (!e || !e.strict) return !1;
    if (a.d.cw()) return a.p.c();
    e = a.d.an().isInApp;
    c = a.d.cr();
    b = a.d.cv();
    d = a.d.cu();
    return e && (c || b) || !(e || d)
   };
   a.aa.a = function() {
    var e;
    return function(c, b) {
     var d = null,
      g = f[c];
     a.aa.v(g) ? d = "strict" : g && g.sframe ? d = "sframe" : g && g.pscope && (d = "pscope");
     (g = "undefined" !== typeof w && w[c]) && g.isMeasurabilityDisabled() &&
      (d = null);
     a.e.c() && !b && (d = null);
     e != d && (e = d, a.m.a.esgf("preferredViewCounterUpdate", w[c]));
     return d
    }
   }();
   a.aa.i = function(e, c) {
    var b = "undefined" !== typeof w && w[e];
    if (!b || !b.isMeasurabilityDisabled()) {
     var b = a.aa.a(e, c),
      d = f[e];
     if (!a.e.c() || c) return d && b && d[b]
    }
   };
   a.aa.w = function(e, c) {
    var b = {},
     d = f[e],
     g = a.aa.a(e),
     h;
    for (h in d) d.hasOwnProperty(h) && d[h].getQS(b, c, g);
    a.ab.c(e, b);
    a.an.a(e, b);
    a.aa.i(e) && a.aa.i(e).hadDentsuDisplayOTS() && (b.nb = 1);
    (d = w[e]) && d.viewstats && d.viewstats.isBigAd && (b.el = 1);
    return b
   }
  })(m);
  (function(a) {
   function k(a) {
    a && a.ao && (a = document.getElementById(a.ao.mmakAdKey)) && a.parentNode && "function" === typeof a.parentNode.removeChild && a.parentNode.removeChild(a)
   }

   function d() {
    return {
     isVisible: !1,
     isFullyVisible: !1,
     percv: 0
    }
   }
   a.n = {};
   a.n.realEstateMeasurements = !1;
   var h;
   a.n.e = function(d) {
    !a.n.realEstateMeasurements && 0 < d.w && 0 < d.h && (a.n.realEstateMeasurements = {
     w: r.round(d.w),
     h: r.round(d.h)
    })
   };
   a.n.f = function(d, g, e) {
    d.mmakAdKey = g;
    var c;
    c = document.createElement("div");
    c.id = g;
    e ? (g = e.h, e = e.w) : e = g = "100";
    c.style.cssText = "height: " + g + "px; width: " + e + "px;";
    document.body.appendChild(c);
    a.u.b(17, d);
    d = a.e.e(c, c.tagName, !1, void 0, d, null);
    a.m.a.azsx("adKilled", k);
    return d
   };
   a.n.g = d;
   a.n.h = function(a) {
    var d = {
     isVisible: !0,
     isFullyVisible: !0,
     percv: 1
    };
    a || (d.jsPercv = 1);
    d.isDentsuVisible = !0;
    return d
   };
   a.n.i = function(f, g, e, c, b) {
    var l = d();
    b = b ? .9 : .98;
    var h = e;
    if (!c) {
     if (a.d.bz()) {
      if (f = a.ai.a(f), "undefined" === typeof f || null === f) return l
     } else {
      g = g || f.WINDOW || a.b.ap(f.aa);
      f = a.y.i(f, g);
      if (!f || !f.visibleRect) return l;
      f = f.percv
     }
     l.jsPercv =
      f;
     h = r.min(e, f)
    }
    l.isVisible = .5 <= h;
    l.originalPercv = h;
    h >= b && (l.isFullyVisible = !0, h = 1);
    l.percv = h;
    h >= r.min(.8, .98) && (l.isDentsuVisible = !0);
    return l
   };
   a.n.j = function(d, g, e, c, b) {
    return b ? {
     elementRect: e,
     visibleRect: g
    } : a.y.p(d.aa, e, c, g)
   };
   a.n.k = function(d, g, e, c) {
    d = "strict" === a.aa.a(d);
    !c && d && (c = -1, "function" === typeof g.calcVisiblePercv && (c = g.calcVisiblePercv()), d = -1 < c && r.floor(e.originalPercv) === r.floor(c));
    return d
   };
   a.n.b = function() {
    return 1 == h
   };
   a.n.c = function() {
    return 2 == h
   };
   a.n.a = function() {
    var d;
    return d =
     (d = (d = a.d.cw() && a.p.f()) || a.d.cw() && a.p.e()) || a.d.dx()
   };
   a.n.l = function(a) {
    "undefined" === typeof h && (h = a)
   };
   a.n.m = function(a) {
    "undefined" !== typeof h && (a.yz = h)
   };
   a.n.d = function() {
    a.s.g();
    a.p.h()
   };
   a.n.n = function(a, d) {
    return a.x === d.x && a.y === d.y && a.w === d.w && a.h === d.h
   }
  })(m);
  (function(a) {
   function k() {
    var a = (19).toString(2).length - 1,
     c = 1;
    return function() {
     c <<= 1;
     0 != c >> a && (c ^= 19);
     return c
    }
   }

   function d(a) {
    return 9 === a ? 30 : 10 === a ? 31 : a
   }
   a.f = {};
   a.f.f = 0;
   a.f.d = 1;
   a.f.g = 2;
   a.f.e = 3;
   a.f.h = 4;
   for (var h = [
     [1, 25],
     [7, 1],
     [1, 25],
     [-74,
      1
     ],
     [1, 9],
     [-24, 1],
     [2, 1],
     [1, 3],
     [2, 1],
     [1, 4],
     [2, 1],
     [1, 1],
     [11, 1],
     [1, 6],
     [27, 1],
     [2, 1],
     [1, 3],
     [27, 1],
     [1, 3],
     [-92, 1]
    ], f = 65, g = "", e = 0, e = 0; e < h.length; e++)
    for (var c = 0; c < h[e][1]; c++) g += String.fromCharCode(f), f += h[e][0];
   g += String.fromCharCode(f);
   a.f.i = g;
   a.f.j = function(a) {
    for (var c = "", e = 0; e < a.length; e++) var d = a.charCodeAt(e) ^ 85,
     c = c + String.fromCharCode(d);
    a = c;
    for (var c = "", d = e = 0, f, h, v, k = 0; k < a.length; ++k)
     for (v = a.charCodeAt(k), h = 255 < v ? 0 : 1; 2 > h; ++h) e = 0 === h ? e | (v & 65280) / 256 << d : e | (v & 255) << d, d += 8, 13 < d && (f = e & 8191, 88 < f ? (e >>= 13,
      d -= 13) : (f = e & 16383, e >>= 14, d -= 14), c += g.charAt(f % 91), c += g.charAt(f / 91 | 0));
    0 < d && (c += g.charAt(e % 91), 7 < d || 90 < e) && (c += g.charAt(e / 91 | 0));
    return c
   };
   a.f.k = function(a) {
    for (var c = "", e = k(), f = 0; f < a.length; f++) {
     var g;
     g = d(a.charCodeAt(f));
     var h = 0 === f % 2 ? e() : -1 * e();
     g = 0 === h ? g : 126 < g + h ? 30 + (h - (126 - g) - 1) : 30 > g + h ? 126 + (h + (g - 30) + 1) : g + h;
     c += String.fromCharCode(30 === g ? 9 : 31 === g ? 10 : g)
    }
    return c
   };
   a.f.l = function(a) {
    for (var c = "", e = k(), f = 0; f < a.length; f++) {
     var g = e(),
      h;
     h = d(a[f].charCodeAt(0));
     g = 0 === f % 2 ? g : -1 * g;
     h = 0 === g ? h : 30 > h - g ? 126 - (g - (h -
      30) - 1) : 126 < h - g ? 30 - (g + (126 - h) + 1) : h - g;
     c += String.fromCharCode(30 === h ? 9 : 31 === h ? 10 : h)
    }
    return c
   };
   a.f.m = function(b, c) {
    var e = [];
    a.b.forEach(b, function(a, b) {
     if (void 0 !== a && ("string" === typeof(c ? a[c] : a) || "number" === typeof(c ? a[c] : a) || "boolean" === typeof(c ? a[c] : a))) {
      var d = String(c ? a[c] : a).split("&").join("%26").split("=").join("%3D");
      e.push(("number" === typeof b ? "" : b + "=") + d)
     }
    }, null, !0);
    e.sort();
    return e.join("&")
   };
   a.f.b = function(a) {
    for (var c = "", e = 0; e < a.length; e++) a.hasOwnProperty(e) && (c += g[a[e]]);
    return c
   };
   a.f.n =
    function() {
     var b = document && document.documentElement && document.documentElement.style || {};
     a.f.o = [!0 === (!!window.chrome && (!!window.Atomics && !!window.Atomics.notify || !!window.EnterPictureInPictureEvent || !!window.chrome.webstore)) ? 1 : 0, !0 === ("undefined" !== typeof InstallTrigger || "MozAppearance" in b) ? 1 : 0, !0 === !!window.opera ? 1 : 0, !0 === a.d.o ? 1 : 0, !0 === (!+"\v1" || !!document.documentMode || !!window.ActiveXObject || "-ms-scroll-limit" in b && "-ms-ime-align" in b) ? 1 : 0];
     for (var b = !1, c = 0; c < a.f.o.length; c++)
      if (1 === a.f.o[c]) {
       b =
        c;
       break
      }! 1 !== b && (a.f.c = b);
     return a.f.c
    };
   a.f.c = a.f.n()
  })(m);
  (function(a) {
   a.ao = {};
   var k = [];
   a.ao.a = function(a, h) {
    k.push({
     query: a,
     callback: h
    });
    return !1
   }
  })(m);
  (function(a) {
   function k(a, b) {
    try {
     var e = a.split(g),
      d = b || window,
      k, n;
     for (n = 0; n < e.length; n++) {
      k = e[n];
      if (null === d || typeof d === h) return 1;
      d = d[k]
     }
     if (typeof d === h) return 2;
     if (null === d) return 3;
     var t;
     var v = a + f + d.toString(),
      e = 0,
      z = v.length,
      A, m;
     if (0 == z) t = e;
     else {
      for (A = 0; A < z; A++) m = v.charCodeAt(A), e = (e << 5) - e + m, e &= e;
      t = e >>> 0
     }
     return 4 + t % 58
    } catch (r) {
     return 0
    }
   }

   function d() {
    var a,
     b = [function() {
       return "c$$b" !== "cab".replace("a", function() {
        return "$$"
       })
      }, function() {
       return eval('class A { constructor(pp) { this.pp = pp; }\n call() { return this.pp; }\n }\n class B extends A { tS(a) { return super.call(); }\n tT(a){ return this.call(); } }\n  const obj = new B("cab");  (obj.tS() !== obj.tT()); ')
      }, function() {
       return eval("'\\\n\r'")
      }, function() {
       return eval('((new Date("1300-02-28T21:11:11.000Z")).toISOString() !== "1300-02-28T21:11:11.000Z")')
      }, function() {
       return eval('(new Date("2835")).toISOString() !== "2835-01-01T00:00:00.000Z"')
      },
      function() {
       return -1 !== "22".localeCompare("122", "de", {
        numeric: !0
       })
      },
      function() {
       return "p" === window.atob("cab==")
      },
      function() {
       return "cab" !== "cab".split(/\b/).pop()
      },
      function() {
       return void 0 === Array.prototype.find
      },
      function() {
       return Number.isNaN("MAX_SAFE_INTEGER")
      },
      function() {
       return /(G)+|(X)+X/.test("X ")
      },
      function() {
       return "bec" != "cabecab".match(".?e.?")
      },
      function() {
       var a = {};
       ["cab", "cab"].sort(a, a);
       return !0
      },
      function() {
       var a = new Proxy([3, 444], {});
       return [12, 444].concat(a)[3]
      },
      function() {
       return eval("let x = (e) => { let e = true;};")
      },
      function() {
       return 0 === (new ArrayBuffer(5)).slice(3, 4394878398).byteLength
      }
     ];
    a = "1-";
    for (var e = 0; e < b.length; e++) {
     var d;
     try {
      d = (0, b[e])() ? "1" : "0"
     } catch (f) {
      d = "2"
     }
     a += d
    }
    return a
   }
   a.ap = {};
   var h = a.f.b([46, 39, 29, 30, 31, 34, 39, 30, 29]),
    f = a.f.b([77]),
    g = a.f.b([72]),
    e;
   a.ap.a = function() {
    if (void 0 !== e) return a.b.g(e);
    e = {};
    var c = a.d.g;
    try {
     var b = c.document,
      f = b.body,
      g = c.innerWidth || b.documentElement.clientWidth || f.clientWidth,
      h = c.innerHeight || b.documentElement.clientHeight || f.clientHeight,
      n = c.outerWidth || f.offsetWidth,
      t = c.outerHeight || f.offsetHeight
    } catch (m) {}
    try {
     var v = c.screenX || c.screenLeft || c.screenX,
      z = c.screenY || c.screenTop || c.screenY
    } catch (m) {}
    var b = (new p).getTimezoneOffset(),
     f = a.f.b([84, 41, 33, 26, 39, 45, 40, 38]),
     A = a.f.b([28, 26, 37, 37, 15, 33, 26, 39, 45, 40, 38]),
     c = !0 === ("undefined" != typeof c[f] || "undefined" != typeof c[A]) ? 1 : 0;
    a.b.j() || a.d.an().isInApp || (e.ud = a.f.c);
    var f = e,
     r;
    try {
     for (var q = [a.f.b([33, 26, 43, 29, 48, 26, 43, 30, 2, 40, 39, 28, 46, 43, 43, 30, 39, 28, 50]), a.f.b([47, 30, 39, 29, 40, 43]), a.f.b([41, 37, 26, 45, 31, 40, 43, 38]), a.f.b([46,
       44, 30, 43, 0, 32, 30, 39, 45
      ]), a.f.b([48, 30, 27, 29, 43, 34, 47, 30, 43])], A = {}, B = 0; B < q.length; B++) A[q[B]] = window.navigator[q[B]];
     r = a.f.j(a.f.m(A))
    } catch (m) {
     r = ""
    }
    f.qn = r;
    e.qp = a.f.o.join("");
    r = e;
    if (document && document.body) {
     q = document.createElement(a.f.b([34, 31, 43, 26, 38, 30]));
     q.width = a.f.b([53, 41, 49]);
     q.height = a.f.b([53, 41, 49]);
     q.style.left = "-" + a.f.b([61, 61, 61, 61, 41, 49]);
     q.style.top = "-" + a.f.b([61, 61, 61, 61, 41, 49]);
     q.style.position = a.f.b([26, 27, 44, 40, 37, 46, 45, 30]);
     document.body.appendChild(q);
     for (var f = a.f.l('Cjqjghtjx>#V{k/LSFH&Meu8h`}X{OtkumzFpn\te!\ny\\oex`/;|eGWu`teYqqixqXY~pvm<_ndf*EhsfuXfjpa}6jbja6@N9NFSGU~Ngqjm[dnuds9hUwXNqtkzB|Yyo8;c3OCJLKWSBMHJ"Hd T!-q^{bxjp)xZ{V98umqafm:hyeyW=_nmipp)Ghzhs\\ \n#Xjr2fdgq!Fkk[~C{nea{pobr@\n^|e;cflklk&Mjyeja|cudvaMoxc}@\n^|e;DPSW=PIb:18pYd\\ws80IoxU#)v^|X _-@pmhn{dy^YW|b}dI=\\QJY~^|b~e|i/jifjnt!Gb|W"bxsjNmjuhpBKMbDriwcv&o_z\\y^34{hnsqk|eXYxj~^U2aKTcvnhl:cfcl\tRF\\-t]l+tUx`6<aDVdbeiNdf Z3dh_t\nLRUIiqnBpbkms\n{Xnc0;VMZVr[zbpVnQwhm+]9MFSMm<RPGPEEHMkGZBL\tRF\\MwimooWa\\vns\n{Xnc0;VM\\gncpfxinUch}b47^Ni<]F[KFP0;VM^dyW{W=_nmipp)IG^M\tes\nd<CIMLbLQ<NEUQaHUD.?[PYh#go=sTyXs_xarh:cfcl\tRF\\TplioyYoQke"V;gbpw]Dfx#q[uY"[5BUO^^rip)MLaPc8MSIWOC_I19ZEeT{hc^tbXYq`|^|TrMbjy]1hmbj"Jd\'c}n0hmkmhs\'NH[6$Zfnxarh:>SLH>X7hMQ@M\\ZM[@i>`C9;PKTglh\n#khv__brmv*tbt[\tc6=]>]fjlx&il{bUep`"!w`oa4AUA[jsg!CrXeMrd|(zVr[36^@[depTfyh9ikfs~QXu_Xjdh\t[jh5^tapsj(L^zUadop<]rehrl$G[\nV[_li=ajlg(Lbhir) kwerco,p]qa\n]1:vU#`nmv*XOU7PN]B\\8l@OQXJX=`>TDf@^7N+FkkrsYyoPkoXz\\or2dhhsim"KdpZNugj|+SCeZ]HcCP<`IIQEIMGI"L`"X{Ok_|rxYTiZbqe!ifCz]qn:6YU[3a:NS.Avqoh#)NHQFZ<ORc>U;SBJD[Q]BMD.Azouf9n~Zq\\aibaiDlgui1;yd~eNugj|+SC`NOF]GR#FtedHl~dw$uS|X5Dxavq4APOKX[2`B-Cz]qn_dzhjW=6XMPAKQOBR\'PbzVRismv&S;`=d;_;bG\\^GNZ)L`z\\~,@2\tibw2dhhsim"NS|Xy`fA~bth9>KIbF_@OEcHK;_:1=h_tcjcGrmkz"V@c=]H[#H_q]s[p:{[uf=AXMG(PQS@Thk`s6y\\ncrl1hmbj"OF\\?VdpqQqkaPgofs_ %o_q]/B`BQE|f\th}Dnaubth9ikfs~U`trsj|(zVr[3;@$L-Eq{quaO`pb|VYfd_xarh:cfcl\tX$;B0Pmpz9y^y]s\n{Xnc0AG<WZ~Hh`vX7kgjoqn T?LDsj_Xoei&oi"Zw8vg}W7kgjoqn T?LDsj_Xoei&rhxn3dh_t\nRCDPz^tgl^~b}_;cflklk&Ubf]l {Xwfvd4FsUr`Lb!^ngScr\\hlucl9v`"X s0jijk Ti~^\ndrZugsfR\\\tZwlld=_nmipp)Ob\t`|lsT `plSZv_~kjhL`"e!-navdz\\7Dxmz\n[ln`ijIi~bfj5`p`n+Kj|i4Dwp|ZzC!cfq2kxj|dwjlV[bl`na{Ll"w`x`!Y9@orp&U_xVy_}Wc\\vdHkzjgh9n\ti~`\tkfbPgf[xZxEm }Tvd.Evqr" 3LksRx@ucvYwi~#sWtW;>nxGrmkz"OJWXd<l\'-IiqHpqcy$KA\\R_JaLZFTH7H]FsUvXLc}k1c\tI~flE#cyntpma4blho%[R _/qmfk(xZs]{Z;@nck]K^vUmdvb!ZrjJljg1hmbj"TWs\\jCgrq`kg9gogueu#NchadEqnS[lVtWNugj|+GHjOKKU6a#NchadEqnXozft`Jbea{p4blho%[Vq`bIiqv(uhYowWbhyoqn|bj"y\\w^:>r[j_O]|m:ajdnfw\nVdfeiHkm~)xZ{V9DfbmYP_\nViW{S=ajlg(Ubj]lMo\\}cq\\sCvjrlQkjd{ b;REV[U>Y?7Ho]wR`\\tqmgq(zVr[3?tWr`Upzbga9gogueu#NchadM\ngjWt7 exq0hmkmhs\'W^ dn^fAlYqhqa3dh_t\nVnwomPifzgv>#V{k/FSJLT[CY7SQPKRR.I}qghtjx>#V{k/LSFH&ZV{_nS"\\xmRnmiuUoHkgoXri/jifjnt!SW}[vT}nt*tbt[\tc6Gogv^brsj1hmbj"UasXOhnpmo4GSJaXO=Y#OsqZhl:^x?uftZnq0hmkmhs\'Y_t]vef?y\\liOdrfsW"\\xmGrmkz"MG_K:@s]tav]hhOVslheaXwcgnqkm7zi~^%e?;/jifjnt!Tij[{_jsqnVljY9ikfs~\\mfpggqm\ngf_uWs8{qqn6kgap\'ZZuVaiblwawc{cJll`"!VNWOMRV [\\"fs_ 8ebv]vm:cfcl\t_T!lgj|Ftg\tm\tfs_ j/jifjnt!UW\n_ta}Hpo|o{api~l<_ndf*TY|gqcyCh`pZnq0hmkmhs\'ZZ&^reuKefdaqg3dh_t\nYdtbwosUy^oFsR\nlsc2dhhsim"WW Yxqo]v`kBlqs`oevfo,p]qa\n]1Fldub{lcjkbUV~`|oscReup}Dlm\n#sWtW;Cnqhkzjgbn`\\^ `!idcXapcz\\3dh_t\nYhep}ok=yKs\\!f\t\\Xgr\\rq:ajdnfw\nYnyazP{d{g">#V{k/?XWW;^<JJ3B X|dppiqocy)v^|X _-Nv]v_zifjpa}6xmpakqocy)v^|X _-Nv]v_zifjpa}Enbge~bx"w`x`!Y9Gsmkjhm\t:{[uf=@XTUAUL\\97K|h{Z\n\\/pibh]\n#q[uY"[5Otkxbxh#Iy]s=vju,p]qa\n]1Fya&l7btaiqk:\nimmw`{%mcr_wb8Ezio?pajfgn6kgap\'Zn Y`lcqgjlj\n^tdVb"\\xmu*tbt[\tc6I"duJv`w[uc|ineuA\tgrnpo6kgap\'\\MQAr\\sAsfq_oineu;rXNugj|+HIM=VB\\8lGI?W=/L`8U[ldRbwmg_|fubT^o>#V{k/AEHWO^>S=fBW4\\D.N\\@YY~nsh|5rjdpmhwc{c3bl`vgq+TPKPzU\tnZk}gv[fp2fdgq!WJJE"T}rTaxlxh9ikfs~_Xoei&HHPTYEfEc4[S.NikmY9IY=SPO<GMV=/Lq[jhl`rXNqtkz+rYyb~a:Cr]mcgl1i"cP[\ne=ajlg(Zbl`p^~\' V %mcr_wb8GjipltBkrgn~bx"w`x`!Y9JJKH&Ei{a8(\t&=fqthbtb4blho%a:Z;/Dpgdn?\'}*5_xa7kgjoqn ^DW=<Fveu16p7(\tjg$sW}Z}g.O^DGbthkmsU_\\dr2dhhsim"ZHV6uhrLiqn9w`w^|e;cflklk&_KL<L4{XwcGhmjkb\t)]OUPS<CJIFGYYDI;f>d@RMQOQQ_ ^QQ?S4|cppQYwlumJbl_ta}-URO\\L9NJVH`>NKSG\\WWS\\:d>\\7aB]@VA4P\\;Q@Nb eneuJm_knQajcl`"!w`oa4P\\;QdvmscRcfkifw(zVr[3Ee:Y`vd[bm"[<^Aa6TVDSVNHN[TVKH6a4]HE[ZBR ^QQIoeuJfeEjf;nh3FHFWFNFa?]O\\9_Ji<c3V:`PID/Mb<UW{ZbXp@t_I_y"[<^Aa6TVDSVNHN[TVKH6a4]HE[ZBR ^QQIoeuJfeEjf;nh3FHFWFNFa?]O\\9_JiJc2QIBRM;bMYDTJOQa8U+UROMghsNo`Q]|jfNelk(\\6Y>Z7VRUHPA\\Le<ZMSS]?a8M]E:V&_KLFhfwFnfEqzskhzL\tZrcnkjaV]o(\\6Y>Z7VRLTTRMQUS\\PK=`2a@D]WERI`=d7IE;F_FR]|eYYrGsgse|Mfpxaf[x6gi5BPGQRGCg>X7jMOE:Dc>Q_x`V_sAndlf~Inqvek^r5mn8IOEUJFEc;XLb:YEfCd4MQCPQ@eFPG6Ld8]XufW]jFucjjvHte}he]t>hg9KKMVDR>`JMFHN[T[;YFX6JKaNMI2GaBZZ!Y`\\hKsnhn{Gjb5BPGQRGCgIOBPOYXV@_@[MRLDFkGJB3Ee:[dp`moobrDxms_ %SCR<HLUCLUP@c8WSa=]QU ^`mn\nZ pQmpafsb^tbhfxbwDxavq45_Z^:`8RK-QijycoZ\\ey]te[die{qxU\tdyg<_ndf*Wlucz\\3hlb{Tld0hmkmhs\'^b{V_Xoeik1fqcljo\tcejmubwosG\tmoZ{\ny\\oex`/N~ZjMh^zX{-navdz\\7PS>#V{k/KSMV?PGF=3Ga<Nqtkz+tUx`6Na3Pfoli[wc{cJll`"!L@RP]OOBRZZAODR#VQFAqnqgkWjW=ajlg(]pkfX`}loXr?blhdhl\tCfcle\tTld0hmkmhs\'`K^`\n\\/jifjnt!\\;I9[Rmddqo\\xYy_okscl`ods&XHY6XAL6nENMFAZBXSb@L@Z~d\\biQYs(xZs]{Z;JnaCo{bsVwt8Fs^|iz,p]qa\n]1MlTPf|do^tv4Az_\tes\nvdqmvlv(zVr[3ItUJruau_rm9Ok[zV;ebki$Z_n6xil_q_!-ekumo`p)v^|X _-UiZDm\tZrXsk=\\wrv]vqoU\t`8es_tki*[]eAX\'Hetb#gnQgjlbx]ybMh|erou,FMI@QGdLHDX4KKG(_bh;W-Mh{a!kfPifg_~^s]Ja}gnwv*U>^S_@bMcCRVJKE?HYaCNJZ\tfXkFN.Klsd\nooKs_q\\sgr_Fizijn{ a:K@5.N)]YmBV+`V{[fpmfj={cy[\tf=6XKQNg>ZHL>RFS?a(4*[]eAX\'W[uVtermi?wkzY"o8=`2dVCSJ>HL=\'1MlTV?;Qgjlbx]ybMh|erou,HJDQk7Z<M7a$=+YajDR&]`x]scvehAsfw_#i3<Y3\\8KTHBMOe=Y>YF^=RKF]QAVMUCLUHFc4LGOAVQ2Kp]QE@CreecvaqaOdsjlj"![03BgD7%QZL*>79Nf`KD5Lqci[y[}ZLnppmuz"]@X=SCOLGDIJb<XJJUZ;i85Vg^OI8Fpin^\nZ{^Dmrlhr\n#W=?;;JnaIH:Okbo`|b|XPforipw(^<G+=\';JnaIH:Okbo`|b|XPforipw(^<G.\\;;JnaIH:Okbo`|b|XPforipw(`:]J\\DT%A+YajDR&]`x]scvehAsfw_#i3JLJcH[Da.L)]YmBV+`V{[fpmfj={cy[\tf=G[@PONLXAjAO>R3N:L]FMI@QGd8P@S<WF.Sm_M@Njxmsi <wcrl1>NAHBP5Z\n`ddCTOkbo`|b|XPforipw(ODSJLJcRUNUPgTK6RG6PsSTCScr\\hlucl9v`"X s0CMKKFLOOX[:]DBNc@LH`!\\[i9[Enmfazft[Njxmsi %JLZ=UN8LjXN>aXwcgnqkm7zi~^%e;FVRcGIYY:REYK;JnaIHZbtXpmsgu4|euc|l1MO>XIVDn5XW.Sm_M@]`x]scvehAsfw_#i3JLJcH[D414TkVRG^^%e!if,p]qa\n]1MlTZ\\}@peu^z]ziOos_ %DFEFJ?8LjXR["4who]|fubPqog!\ny\\oex`/QqWP_{3}\\v`vewkKjpi~\'|Rz\\-UiZNc\n8XIM[{gnqX]trk"NN]XT:YKFPc@X?kGTJHFT\n`ddGqqIG^Ase!V\tMbjy]1=_Hd<P>c8[^U=\\RX5_@6PsSX`uKi\\l[WZ~;yd~e7LG@Q>e?PTOK`P\\LUNYL/QqWP_{F Twrkpqlt9 `xm<>\\LTCSNHL8LjXR["G{`poqqocy@\n^|e;cflklk&cZgIvUzX}-QLMK2LXGRm!a_\\rsikw(XDF:P@V\naLND|qvFpl\t^ eRmflxLdlsZy$uS|X5WUH\\Mxcn`}l}c;cflklk&meubpUpgrnp?i`nY9\\lh\ne;cflklk&meubpUpgrnp?i`nY9hysOUq%o_q]/[|eq_jS"\\xmE]kek"xj#B!Vzj/asfw[ucx$sW}Z}g.]xmr]n\\~b}_PXdfi&pi%>y[te=Vxmv]qky"y\\w^:R}gmggYwc{cHWjZt!vn|Hmkmhs\'ki~]vZbrmgq=mXm[5e%TyBc_pb4blho%qRp_fq2chs\t#sWtW;Vjbja{+sU\t^r\'|Rz\\-aljrgq#qehVc\\vdu*v^sY7^rk}^r%tcejfb:ajdnfw\nlgtkub4kp]}m}cr%jlwldfx#q[uY"[5bjnwjk"!`ll!`\t\\/grkw[xa3dh_t\nlgtkub4kp]}m}cr%plHgzhxdfZWd~Z{duo6^jXWd}ms_ri/leeh&o]wetW=jnaupwok"ziNh$_yfbbTjra~Zxi5Vxfy`v_p+tUx`6\\vc|df,{]em\ndw[5a}7xvphw^jD}jqksd\n%egwhdno]YeS[!gnmgn6ikbror%qY\tfnc2oh\\\tithl ~aMnyjtlgX[my`\nV\nj/fekOc\tijdld=ajlg(kexcx`8psS\nkppi&rhPd|dsapWYqqczbyg9mof}grCjqx]q_~#q[uY"[5bqj{lrY9^v^oc;ebki$fizhtbl sXkti*v^sY7^yg `y\\/bmj1hmbj"ja}fxkg*lfxlxg8es_tki*ggqm{aj$nd~hyBqht^vgp_8es_tki*ggqm{aj$nd~hyBqht^vgp_8go^r#dmrkrfq#q[uY"[5bqj{lrY9gy`<]rehrl$fizhtbl \texekhm+rYyb~a:T|etmp]1j~dk_sWTam-p]ub2Wzi}hzV;kjkiDra:cfcl\tren`vaQjg[p=sm{R}%mcr_wb8Xwowf~!|tdptb4]xkyk!<rp/jifjnt!hh\nb"b7rw^|ik" `|btj;cflklk&ojxjv_T_nlgj|p4i{b|ZrV;ebki$gc\tefjjZTinmv*v^sY7`x]mRyc`dvYp_\tTndqWrgnc.a\nqkfy\\v\'Wd`\\bpg`Sl{knZldXa|schtbj"^O koa;cflklk&qmy[y`p_7HuOm^xWsK|h#Zq\\sGrkw[xajZ5dtZrrvazBtix)|^ `ymfGr`hluifdjW=\\|HoltbsYyoo]Pj9_jqxgus:ezioE"T}d0hmkmhs\'sgrV$\\eBF$lhpZ}[k6Q!m`v]j^yY~)v^|X _-gr\\hrqYI85Vt_nsg@iqgVlno\'|Rz\\-gwKh] gj9v`"X s.iwskHz)v^|X _-ksrUNOEj[y5~awdepqlt"y\\w^:^|qScumhm\n6s_tS"\\xmHnijk"y\\w^:_nmjeelrl:VufJasXW`oa4kgjtbkm}c;ZqsGddm\t!sW}[vT}nt*obu`z^kmw`{%x_x[kJ{hnjpa}!w`oa4kgjtbkm}c;dpxGgqnmXyi5epin-p]ub2blqs`oe|i/nijpc\thneue=d~dtu6ikbror%|R"`h_xgu(|afjma `5mcrqdghzm8ksXvjucv;rh\nZsjOS}Wudt*tbt[\tc6gogv^brsj1mqg{_jWfb{jgn6dkh]`qb e\tXugsf1hmbj"uS$\\p`vkz+yY}qs\\sH|ilcv&j_\nGj]pe"ejskkvp4`piqmv~{XwgkYwi~#zdyWv\\|sgnXouhz^yeVR{[mcv&q[yZ1eug}_x`f*v^sY7jz^|\ny\\oex`/i|Zs:hfpUjrg*v^sY7jzk<Rq[plw&rhPd|dsapWYqqczbyg9mof}grCjqx]q_~#q[uY"[5ntemkzU\tdyg:anitcJdr[\n#sWtW;cjquaQkz"w`x`!Y9gfpjgugmch[5U{XjqOaip{fpn8es_tki*t]u`{grWuUt!pdvAvqx]pn8es_tki*t]u`{grWuUt!w`xeo^z]zi8MgARVC?GCb@[G\\7Y6;cnqhkzjgbn`8gogv^brmgq(`NU;f@PIRFCPM)vY}ayk{R{Zf,rYycsVy_v`=g!og(zbwipn~:|ZzXugsfIlmbj$uS|X5qgoqwk6#)v^|X _-qgjrfx#q[uY"[5renwir6#)v^|X _-qilLh\nZwlh^=_nmipp)yY\tOsfs`!k/leeh&\tej[jZblwsja{fy"n\\x\\s];cflklk&\tej[jZblwsja{fy"n\\x\\s];ebki$vjqZh^Zk}gqdue{+vU\nno\'zV{^uf0ks_qXmI\n`"[nrko6mgi~`n% ar\\dfWqqntZx_z  X|toa6kgap\'}isVp_Twrlk_\t^x$zbtTthpc4qucw]kk<gvjj`p]/puhzWsHxX\noqn|+vUr`V^te9mjqyYoPuZ|fvd"!y`ia\\lv  d}no]c`futgun:lnZ{Z;jname|@gbn`vKsb!\\trEflgmineu8 Tvd0hmkmhs\' ^p\\vkSRGHh_~8tduWrgrnp*v^sY7ro[yZ Jqci[kA~Vrchd=ajlg(\tbh_to]isVp_Hpeep[~Ani{ {Xwfvd4tkVvd~L~VrZiPi[raz^y_v`=_nmipp)}Ymfsmaar\\dfV]fiscnjpa}!w`oa4vgbo`!\'{Vq`b,w]wG ijI{S"X7kgjoqn #\\x]si;gv`paf@qVykyW=T{dV]jAkgtbxLse `oew=q[najZ5`p`n+{]vakl9k\t[zZp=f_xmu_:ZsWi^tC{nvakq4`piqmv~%Xobip1j Wq_j8tT}tta6dkhb\\ve~R}\\sGr^r(zVr[3kpamdz*xrh`t^P^oe!if,mkSl{ijY{7}Tkkg`6ikbror%&R{[fv2hx\\x^h<lS"h{d0e{Tg`wkkisc_fu_xarh[c3bl`vgq').split(a.f.b([71])),
       A = f.length, y = [], B = 0; B < A; B++) y.push(k(f[B], q.contentWindow));
     document.body.removeChild(q);
     q = a.f.b(y)
    } else q = "";
    r.is = q;
    e.iv = 7;
    e.qt = c;
    e.gz = a.d.aq() ? 1 : 0;
    e.hh = a.d.ar() ? 1 : 0;
    e.hn = a.d.as() ? 1 : 0;
    var c = e,
     C;
    try {
     C = !a.k.d(window.top) && window.top.name ? a.f.j(window.top.name.substring(0, 50 > window.top.name.length ? window.top.name.length : 50)) : ""
    } catch (m) {
     C = ""
    }
    c.tw = C;
    e.qc = v;
    e.qd = z;
    e.qf = g;
    e.qe = h;
    e.qh = n;
    e.qg = t;
    e.qm = b;
    e.qa = a.d.x;
    e.qb = a.d.y;
    e.qi = a.d.v;
    e.qj = a.d.w;
    e.po = d();
    var g = e,
     D, h = a.f.b([28, 26, 39, 47, 26, 44]),
     n = a.f.b([48,
      30, 27, 32, 37
     ]),
     t = a.f.b([30, 49, 41, 30, 43, 34, 38, 30, 39, 45, 26, 37]),
     v = a.f.b([22, 4, 1, 6, 11, 84, 29, 30, 27, 46, 32, 84, 43, 30, 39, 29, 30, 43, 30, 43, 84, 34, 39, 31, 40]),
     z = a.f.b([20, 13, 12, 0, 18, 10, 4, 3, 84, 21, 4, 13, 3, 14, 17, 84, 22, 4, 1, 6, 11]);
    C = a.f.b([20, 13, 12, 0, 18, 10, 4, 3, 84, 17, 4, 13, 3, 4, 17, 4, 17, 84, 22, 4, 1, 6, 11]);
    b = a.f.b([47, 30, 39, 29, 40, 43]);
    c = a.f.b([43, 30, 39, 29, 30, 43, 30, 43]);
    r = a.f.b([28, 43, 30, 26, 45, 30, 4, 37, 30, 38, 30, 39, 45]);
    q = a.f.b([32, 30, 45, 2, 40, 39, 45, 30, 49, 45]);
    f = a.f.b([32, 30, 45, 4, 49, 45, 30, 39, 44, 34, 40, 39]);
    A = a.f.b([32, 30, 45, 15, 26,
     43, 26, 38, 30, 45, 30, 43
    ]);
    B = {};
    try {
     D = document[r](h);
     var L = D[q](n) || D[q](t + "-" + n),
      J = L[f](v);
     B[b] = L[A](J[z]);
     B[c] = L[A](J[C])
    } catch (m) {}
    D = a.f.j(a.f.m(B));
    g.vy = D;
    return a.b.g(e)
   }
  })(m);
  (function(a) {
   function k(b) {
    var c = a.f.u(!0);
    if ((b = a.u.b(35, b, c, !1, !0)) && b.res) {
     b = "https://geo.moatads.com/n.js?" + b.res.querystring;
     var e, c = a.d.c();
     e = a.d.d();
     c && e && (e = q[a.f.aj], a.ar.a("DOMlessLLD", e, b), a.ar.b("DOMlessLLD", e));
     c || (e = a.d.aw + "." + a.f.aj, b += "&callback=" + e, c = document.createElement("script"), a.b.bw(b, document.body ||
      document.getElementsByTagName("script")[0] || document.getElementsByTagName("head")[0], c), a.f.ai.push(c))
    }
   }
   a.f.p = 1;
   a.f.q = !1;
   a.f.r = {};
   a.f.s = [];
   a.f.t = {};
   a.f.t.a = "appendSpecifics";
   a.f.t.b = "appendManual";
   a.f.t.c = "onlyHooman";
   a.f.t.d = "onlyBot";
   a.f.t.e = "onlyNonHiddenAd";
   var d = {};
   (function() {
    a.d.ez() && a.o.e(function() {
     try {
      a.d.g.navigator.getBattery().then(function(a) {
       d.charging = a.charging;
       d.level = a.level
      })["catch"](function(a) {})
     } catch (b) {}
    }, 1E3)
   })();
   a.f.u = function(b) {
    var c;
    try {
     q._c ? c = q._c : (c = a.ap.a(), q._c =
      c)
    } catch (e) {
     c = a.ap.a()
    }
    if (void 0 === b || !1 === b) c.ql = a.f.v, c.qo = a.f.w;
    c.qr = a.f.x();
    d && "undefined" !== typeof d.charging && a.b.ch(d.level) && (c.vf = d.charging ? 1 : 0, c.vg = 100 * d.level);
    return c
   };
   var h = a.f.b([48, 30, 27, 29, 43, 34, 47, 30, 43]),
    f = a.f.b([30, 47, 26, 37, 46, 26, 45, 30]),
    g = a.f.b([43, 30, 44, 41, 40, 39, 44, 30]),
    e = [h, f].join("-"),
    c = [e, g].join("-");
   try {
    a.f.v = a.f.j(a.f.m(a.d.g.navigator.plugins, "name"))
   } catch (u) {}
   a.f.x = function() {
    return 0
   };
   a.f.w = 0;
   a.f.y = function() {};
   var b = "nu ib dc ob oh lt ab n nm sp pt".split(" ");
   a.f.z =
    function(c, e, d) {
     if ((a.f.t.a in e || a.f.t.b in e) && void 0 === a.f.aa) return !1;
     var f = a.b.g(a.f.aa);
     void 0 === f.n && a.aq.a(d) && (f.n = 1);
     a.f.t.a in e ? a.b.forEach(b, function(a, b) {
      c = a in f ? c + ("&" + a + "=1") : c + ("&" + a + "=0")
     }) : a.f.t.b in e && a.b.forEach(b, function(b, e) {
      a.b.ai(a.f.t.b, b) && (c = b in f ? c + ("&" + b + "=1") : c + ("&" + b + "=0"))
     });
     return a.f.t.c in e && a.f.t.e in e ? a.f.ab(d) ? a.f.ac(c) : !1 : a.f.t.c in e ? 0 === a.f.ad ? a.f.ac(c) : !1 : a.f.t.d in e ? 1 === a.f.ad ? a.f.ac(c) : !1 : a.f.ac(c)
    };
   a.f.ac = function(b) {
    var c, e;
    c = a.d.c();
    e = a.d.d();
    if (c && e) return a.p.i(b, null, null);
    if (!c) return (new a.d.g.Image).src = b, !0
   };
   a.f.ae = function(b, c) {
    b(a.f.ad)
   };
   a.f.af = function(a, b, c) {
    l.add(a, b, c)
   };
   a.f.ag = function(b, c) {
    if (void 0 === a.f.ad) return a.f.s.push({
     callback: b,
     opts: c
    });
    a.f.ae(b, c)
   };
   a.f.ah = function() {
    for (var b = 0; b < a.f.s.length; b++)
     if (a.f.s.hasOwnProperty(b)) {
      var c = a.f.s[b];
      a.f.ae(c.callback, c.opts)
     }
   };
   a.f.ai = [];
   a.f.ak = function(b) {
    if (q) {
     a.f.aj = "gna" + r.floor(1E6 * r.random());
     var c;
     q[a.f.aj] = function(b) {
      a.f.al = new p - a.f.am;
      c = b;
      q[a.f.aj] = null;
      delete q[a.f.aj];
      c && (a.f.aa = c, q.jsonpcache = c, a.f.ad = "n" in a.f.aa ? 1 : 0, l.checkPixels(), a.f.ah())
     };
     a.f.am = new p;
     a.o.f(function() {
      a.f.an = new p - a.f.am
     }, 0);
     if (q.jsonpcache) q[a.f.aj](q.jsonpcache);
     else k(b)
    } else a.o.f(setupNadoListener, 200)
   };
   a.f.ao = function(b, c) {
    void 0 === a.f.r[b] && (a.f.r[b] = 1 / a.f.p < r.random());
    if (a.f.r[b]) return !1;
    var e = a.f.u();
    a.as && a.as.a && a.as.a.imaSDK ? b.moatClientLevel3 && a.u.b(34, b, e, !1, !0) : a.u.b(34, b, e, !1, !0);
    return !0
   };
   a.f.ap = function() {
    return [a.f.b([30, 39, 28, 40, 29, 30, 20, 17, 8]), a.f.b([29, 30, 28, 40, 29,
     30, 20, 17, 8
    ]), a.f.b([30, 39, 28, 40, 29, 30, 20, 17, 8, 2, 40, 38, 41, 40, 39, 30, 39, 45]), a.f.b([29, 30, 28, 40, 29, 30, 20, 17, 8, 2, 40, 38, 41, 40, 39, 30, 39, 45])]
   };
   a.f.aq = function(b) {
    if (!0 !== a.f.ar && (a.f.ar = !0, a.f.ao(b))) {
     var d = function() {
       var c = {};
       c.qr = a.f.x();
       c.qo = a.f.w;
       a.u.b(36, b, c)
      },
      f = a.d.g.document;
     a.o.c(f, e, function(b) {
      a.o.d(f, e, null, "mswe");
      a.f.x = function() {
       return 1
      };
      d()
     }, "mswe");
     a.o.c(f, c, function(b) {
      a.o.d(f, c, null, "mswer");
      a.f.x = function() {
       return 1
      };
      d()
     }, "mswer")
    }
   };
   a.f.as = function() {
    if (a.f.ai) {
     for (var b = 0, c = a.f.ai.length; b <
      c; b++) try {
      a.f.ai[b].parentNode && a.f.ai[b].parentNode.removeChild(a.f.ai[b])
     } catch (e) {}
     a.f.ai = null
    }
   };
   a.f.a = function() {
    var b = a.d.g.document;
    a.o.d(b, e, null, "mswe");
    a.o.d(b, c, null, "mswer");
    a.f.as()
   };
   a.f.ab = function(b) {
    return 0 == a.f.ad && !1 === a.aq.a(b)
   };
   a.f.at = function() {
    return !1
   };
   a.f.au = function() {
    var a;
    a = r && r.sinh ? 1E10 * (r.sinh(r.sinh(r.sinh(r.sinh(1)))) - 3.81278003) : -2;
    a = a.toString();
    return 0 === a.indexOf("7.600") ? a.substring(5) : -1
   };
   var l = function() {
    function b(a, c, e) {
     this.pixel = a;
     this.opts = c;
     this.adNum =
      e
    }

    function c() {
     a.b.forEach(e, function(b, c) {
      a.f.z(b.pixel, b.opts, b.adNum) && delete e[c]
     })
    }
    var e = {};
    a.m.a.azsx("hiddenAds:updated", c);
    return {
     add: function(d, f, g) {
      d = new b(d, f, g);
      f = a.b.co();
      e[f] = d;
      c()
     },
     checkPixels: c
    }
   }();
   a.m.a.azsx("allLocalAdsKilled", a.f.a, {
    once: !0
   })
  })(m);
  (function(a) {
   function k() {
    if (!a.d.j() || !a.d.cv()) return !1;
    var b = b || 1 == a.d.ee("isNative") || !!document.getElementById("mianahwvc");
    return b
   }

   function d(a) {
    a.left = a.x;
    a.top = a.y;
    a.right = a.x + a.w;
    a.bottom = a.y + a.h;
    return a
   }

   function h(a) {
    a.x = r.round(a.x);
    a.y = r.round(a.y);
    a.w = r.round(a.w);
    a.h = r.round(a.h);
    return a
   }

   function f(a, b) {
    a.x *= b;
    a.y *= b;
    a.w *= b;
    a.h *= b;
    return a
   }

   function g(b) {
    A || (A = !0, a.d.ea());
    q._i_.m = b;
    z = b.ma && 1 == parseInt(b.ma) || z;
    a.m.a.zaxs("metadataReady")
   }

   function e(a) {
    try {
     return q._i_.r[a.MMAK_ID]
    } catch (b) {
     return null
    }
   }

   function c(a) {
    q._i_.r[a.MMAK_ID] = {}
   }

   function b(b, g) {
    A || (A = !0, a.d.ea());
    var l;
    b: {
     for (l in b)
      if (b.hasOwnProperty(l)) {
       l = !1;
       break b
      } l = !0
    }
    if (l) c(g);
    else {
     l = e(g);
     var u = 1;
     if (b.view) {
      var k = b.view.h,
       n = a.d.g.innerHeight;
      k && n || (k = b.view.w,
       n = a.d.g.innerHeight);
      k && n && (u = n / k);
      a.n.e(b.view)
     }
     l.s = d(h(f(b.screen, u)));
     l.v = d(h(f(b.view, u)));
     l.vv = d(h(f(b.visible, u)));
     "undefined" !== typeof b.maybe && (l.va = d(h(f(b.maybe, u))));
     "undefined" !== typeof b.dv && (u = v, v = b.dv, u !== v && a.m.a.zaxs("deviceVolumeChange", g));
     "undefined" !== typeof b.visiblePercent && (l.isHidden = b.isHidden, l.opacity = b.opacity, l.isAttached = b.isAttached, l.visiblePercent = b.visiblePercent, l.coveredPercent = b.coveredPercent);
     l.f = b.inFocus;
     K[g.MMAK_ID] ? B || "undefined" !== typeof b.inFocus && !b.inFocus ||
      !a.focus.pageIsVisible() || a.n.n(l.v, K[g.MMAK_ID]) || (q.swde.zaxs("scroll"), B = !0) : K[g.MMAK_ID] = l.v;
     l.uts = +new p
    }
   }

   function l() {
    K = {};
    B = !1
   }

   function u(a) {
    return 0 == a || 1 == a ? a : 2
   }

   function x(b) {
    var c = {
     truncated: 0
    };
    a.b.forEach(n, function(a) {
     var e = a[0];
     a = a[1];
     b.hasOwnProperty(e) && ("string" === typeof b[e] ? (c[a] = b[e].substring(0, "buildFp" === e ? 50 : 20), c[a].length !== b[e].length && c.truncated++) : c[a] = b[e])
    });
    return c
   }
   a.s = {};
   var n = [
     ["source", "a"],
     ["carrier", "b"],
     ["sim", "c"],
     ["phone", "d"],
     ["buildFp", "e"],
     ["buildModel",
      "f"
     ],
     ["buildMfg", "g"],
     ["buildBrand", "h"],
     ["buildProduct", "i"],
     ["buildTags", "j"],
     ["f1", "k"],
     ["f2", "l"],
     ["f3", "m"],
     ["f4", "n"]
    ],
    t = a.d.aw + "._i_",
    v, z = !1;
   (function(a) {
    function b(c) {
     MAX_RETRIES = 10;
     PROTOCOL = "moat-bridge:";
     BRIDGE_TYPE = "iframe";
     this.ad = c;
     this.bridgeType = BRIDGE_TYPE;
     this.loopId = "";
     this.iframeEl = null;
     this.fnStates = {};
     this.fnTries = {};
     this.fnStateTimes = {};
     this.init = function() {
      this.createIframe()
     };
     this.createIframe = function() {
      var b = a.d.g.document,
       c = b.createElement("IFRAME");
      c.setAttribute("src",
       "about:blank#Moat");
      c.style.display = "none";
      c.id = this.ad.MMAK_ID;
      b.documentElement.appendChild(c);
      this.iframeEl = c
     };
     this.execute = function(a, b, e) {
      if (0 === this.fnStates[b]) {
       var d = this.fnTries[b];
       if (d && d > MAX_RETRIES) return !1
      }
      d = this.fnStateTimes[b];
      if (300 > (new p).getTime() - d || !a || b && !e || !q._i_.b[c.MMAK_ID]) return !1;
      d = "";
      b && (d = f + "." + this.ad.MMAK_ID + "." + b);
      var g = this;
      d && !q._i_[b] && (q._i_.b[c.MMAK_ID][b] = function(c) {
       g.ackAndRun(a, e, b, c)
      });
      b && (this.fnStates[b] = 0, this.fnTries[b] || (this.fnTries[b] = 0), this.fnTries[b] +=
       1, this.fnStateTimes[b] = (new p).getTime());
      d = PROTOCOL + a + ":" + (d || "");
      this.iframeEl.setAttribute("src", "about:blank");
      this.iframeEl.setAttribute("src", d);
      return !0
     };
     this.subscribe = function(b, c, e, d, f) {
      var g = (new p).getTime(),
       l = function(a) {
        return function() {
         a.execute(b, e, c)
        }
       }(this);
      if (d) this.loopId = g, a.o.g(l, null, f, this.loopId);
      else if (0 < f) a.o.f(l, f);
      else try {
       l()
      } catch (h) {}
     };
     this.ackAndRun = function(a, b, c, e) {
      this.fnStates[c] = 1;
      this.fnStateTimes[c] = (new p).getTime();
      this.fnTries[c] = 0;
      if (!b) return !0;
      try {
       var d =
        b(e, this.ad);
       return "undefined" == typeof d ? "" : d
      } catch (f) {
       return f.message || "error"
      }
     };
     this.destroy = function() {
      a.o.i(this.loopId);
      delete q._i_.b[c.MMAK_ID];
      this.iframeEl.parentNode.removeChild(this.iframeEl);
      delete g[this.ad.MMAK_ID]
     }
    }

    function c(b) {
     this.bridgeType = BRIDGE_TYPE = "postMessage";
     this.ad = b;
     this.execute = function(a, b, c) {
      if (!a || b && !c) return !1;
      var e = "";
      b && (e = f + "." + b);
      var d = this;
      e && !q._i_[b] && (q._i_.b[b] = function(e) {
       d.ackAndRun(a, c, b, e)
      });
      window.webkit.messageHandlers.__z_moat_bridge__.postMessage("moat-bridge:" +
       a + ":" + (e || ""));
      return !0
     };
     this.subscribe = function(b, c, e, d, f) {
      var g = (new p).getTime(),
       l = function(a) {
        return function() {
         a.execute(b, e, c)
        }
       }(this);
      if (d) this.loopId = g, a.o.g(l, null, f, this.loopId);
      else if (0 < f) a.o.f(l, f);
      else try {
       l()
      } catch (h) {}
     };
     this.ackAndRun = function(a, b, c, e) {
      if (!b) return !0;
      try {
       var d = b(e, this.ad);
       return "undefined" == typeof d ? "" : d
      } catch (f) {
       return f.message || "error"
      }
     };
     this.destroy = function() {
      a.o.i(this.loopId);
      delete q._i_.b[b.MMAK_ID];
      delete g[this.ad.MMAK_ID]
     }
    }

    function e(b) {
     this.bridgeType =
      BRIDGE_TYPE = "oneway";
     this.ad = b;
     this.subscribe = function(b, c, e, d, f) {
      e = a.d.ec();
      var g = this;
      switch (b) {
       case "gvr":
        a.m.a.azsx("adKilled", function(a) {
         g.ad === a && g.destroy()
        });
        e.lgpr(function(a) {
         c(a, g.ad)
        }, this.ad.MMAK_ID);
        break;
       case "gmd":
        c(a.d.ed())
      }
     };
     this.destroy = function() {
      var b = this.ad.MMAK_ID;
      a.d.ec().xrnk(b);
      delete g[b]
     }
    }

    function d(a) {
     return g[a.MMAK_ID]
    }
    var f = t + ".b",
     g = {};
    a.s.h = {};
    a.s.h.a = function(f) {
     q._i_.b || (q._i_.b = {});
     q._i_.b[f.MMAK_ID] = {};
     if (a.d.g.webkit && a.d.g.webkit.messageHandlers && a.d.g.webkit.messageHandlers.__z_moat_bridge__) bridge =
      d(f) ? !1 : new c(f);
     else if (a.d.en()) bridge = d(f) ? !1 : new e(f);
     else if (a.d.g.__zMoatInit__)
      if (d(f)) bridge = !1;
      else {
       var l = new b(f);
       l.init();
       bridge = l
      } bridge && (g[f.MMAK_ID] = bridge);
     return bridge
    };
    a.s.h.b = d;
    a.s.h.c = function(a) {
     return (a = d(a)) ? a.bridgeType : null
    }
   })(a);
   var A = !1,
    m = !1,
    K = {},
    B = !1;
   a.s.i = function(e) {
    if (a.d.j() && !a.s.h.b(e)) {
     a.t.g.a.push(l);
     var d = a.d.an();
     if (d && d.isInApp) {
      q._i_ || (q._i_ = {});
      q._i_.r || (q._i_.r = {});
      c(e);
      var f = function(c) {
       return function() {
        var e = a.s.h.a(c);
        e && (e.subscribe("gvr", b, "u", !0, 100),
         e.subscribe("gmd", g, "x", !1, 150))
       }
      }(e);
      e = "sml_" + (new p).getTime();
      a.o.g(function(b) {
       return a.d.cs() ? (f(), !1) : !0
      }, {
       initBridge: f
      }, 100, e)
     }
    }
   };
   a.s.f = function(b, d) {
    b.viewabilityMethod.strict = 2;
    var f = e(b),
     g = a.n.g(),
     l = f && "undefined" !== typeof f.f && 1 === f.f,
     h;
    f ? (h = f.uts) ? (h = 500 >= +new p - h) || c(b) : h = !1 : h = !1;
    if (!h || !l) return g;
    l = f.v;
    if (!l) return g;
    h = l.w * l.h;
    var u, v;
    "undefined" === typeof f.visiblePercent || a.b.m() ? (u = f.vv, v = "ESP" === a.d.ef() ? !0 : !1, v || (v = f.va, u = u || v ? u && !v ? u : v && !u ? v : !u.w || !u.h || v.w && v.h ? !v.w || !v.h || u.w &&
     u.h ? u.w * u.h >= v.w * v.h ? u : v : v : u : !1), v = u.w * u.h / h) : (u = f.vv, v = f.visiblePercent);
    if (!u) return g;
    var n = f.s,
     g = h >= .95 * n.w * n.h;
    h = k();
    g = a.n.i(b, d, v, h, g);
    f.vjs = g.jsPercv;
    0 < g.percv && (m = !0);
    f = a.n.j(b, u, l, n, h);
    a.n.k(b.zr, f, g, h) && a.m.a.zaxs("rectsAvailable", b.zr, f.elementRect, f.visibleRect);
    return g
   };
   a.s.e = function() {
    return m
   };
   a.s.d = function() {
    return A
   };
   a.s.a = k;
   a.s.j = function() {
    var a = q && q._i_ && q._i_.r;
    if ("undefined" === typeof a) return !0;
    for (var b in a)
     if (a.hasOwnProperty(b) && (rects = a[b]) && "undefined" !== typeof rects.f &&
      1 === rects.f) return !1;
    return !0
   };
   a.s.b = function() {
    return q && q._i_ && q._i_.m
   };
   a.s.c = function(b) {
    delete q._i_.r[b.MMAK_ID];
    (b = a.s.h.b(b)) && b.destroy()
   };
   a.s.k = function(b, c, d) {
    (new p).getTime();
    c = function(a, c) {
     var f = {
       Screen: "za",
       View: "zb",
       Visible: "zc",
       VisiblePctNative: "zd",
       VisiblePctJS: "ze"
      },
      g = b ? e(b) : null;
     g && a in f && (g = g[c], formatted = "object" === typeof g ? [g.x, g.y, g.w, g.h].join(":") : g, "undefined" !== typeof formatted && (d[f[a]] = formatted))
    };
    var f = b ? e(b) : null;
    f && "undefined" !== typeof f.f && (c("Screen", "s"), c("View",
     "v"), c("Visible", "vv"), c("VisiblePctNative", "visiblePercent"), c("VisiblePctJS", "vjs"), (f = b ? e(b) : null) && "undefined" !== typeof f.f && (d.zf = [f.isAttached, f.f, f.isHidden, u(f.opacity)].join(":")), c = a.d.ee("metadata"), "undefined" !== typeof c && c.hasOwnProperty("source") && (d.zMoatDR = a.f.j(JSON.stringify(x(c)))))
   };
   a.s.l = function(b) {
    for (var c = [
       ["namespace", "zMoatMMAKns"],
       ["appName", "zMoatMMAKan"],
       ["appId", "zMoatMMAKai"],
       ["versionHash", "zMoatMMAKv"],
       ["deviceOS", "zMoatMMAKOSv"],
       ["version", "zMoatMMAKvs"]
      ], e = 0, d =
      c.length; e < d; e++) {
     var f = c[e],
      g = a.d.ee(f[0]);
     g && (b[f[1]] = g)
    }
    b.zMoatMMAKin = Number(a.d.eb())
   };
   a.s.g = function() {
    var b = function() {
     if (!a.d.cw()) {
      a.n.l(1);
      var b, c = a.d.ec();
      c ? a.d.em() ? (b = c.vgft() && !c.lkpu(), b = a.d.eo() || b) : b = !0 : b = !0;
      b ? a.m.a.zaxs("trackingReady") : c.bpsy(function() {
       a.m.a.zaxs("trackingReady")
      })
     }
    };
    if (a.d.cs()) b();
    else {
     var c = "sml_" + (new p).getTime();
     a.o.g(function(c) {
      return a.d.cw() ? !1 : a.d.cs() ? (b(), !1) : !0
     }, {
      setupImpressionCallback: b
     }, 100, c)
    }
   };
   a.s.m = function() {
    return v
   }
  })(m);
  (function(a) {
   function k(b) {
    if ("object" ===
     typeof b) {
     var c;
     a.b.forEach(b, function(a, b) {
      if (/1\.+/.exec(b)) {
       var e = a.prototype;
       if ("object" === typeof e && "function" === typeof e.isSupported && "function" === typeof e.registerSessionObserver && "function" === typeof e.addEventListener && "function" === typeof e.sendUrl) return c = {}, c[b] = a, !1
      }
     });
     return c
    }
   }

   function d() {
    var b;
    b = C ? [k(this.OmidVerificationClient), a.d.g] : a.b.cq("OmidVerificationClient", !1, !0, k);
    var c = b[0];
    b = b[1];
    c || b == a.d.g || (c = k(a.d.g.OmidVerificationClient));
    return c
   }

   function h() {
    if (!J) {
     var b = d();
     b && (ba = Object.keys(b)[0], J = new b[ba], L && a.p.h())
    }
   }

   function f(a) {
    return function(b) {
     w.push(b);
     ga || ("undefined" !== typeof ia || "sessionStart" !== b.type) && b.adSessionId !== ia || a(b)
    }
   }

   function g(a) {
    return f(function(b) {
     N || !c() ? a(b) : U.push(b)
    })
   }

   function e(a) {
    var b = r.round(a.x),
     c = r.round(a.y),
     e = r.round(a.width),
     d = r.round(a.height);
    return a ? {
     x: b,
     left: b,
     y: c,
     top: c,
     w: e,
     width: e,
     h: d,
     height: d,
     right: b + e,
     bottom: c + d
    } : void 0
   }

   function c() {
    return "undefined" !== typeof F && "native" === F
   }

   function b() {
    var b = [a.f.b([7, 40, 45, 44,
     45, 26, 43
    ]), a.f.b([6, 40, 40, 32, 37, 30]), a.f.b([6, 40, 40, 32, 37, 30, 53]), a.f.b([1, 50, 45, 30, 29, 26, 39, 28, 30])];
    return E && a.b.ai(b, E.partnerName) ? !0 : !1
   }

   function l() {
    if (!a.d.cv() && la && ma && E && I)
     if (b()) a.e.g(4);
     else {
      var c = "https://mb.moatads.com/a.js?yd=" + E.partnerName + ("&ye=" + E.partnerVersion) + ("&yh=" + I.os) + ("&yb=" + H.libraryVersion) + ("&yi=" + I.deviceType);
      a.e.g(1);
      D && D.downloadJavaScriptResource && "function" === typeof D.downloadJavaScriptResource ? D.downloadJavaScriptResource(c, u("native"), x) : (a.ar.a("omwl", "om",
       c), a.ar.b("omwl", u(), x))
     }
   }

   function u(b) {
    return function(c) {
     var e = c;
     "native" === b && (e = JSON.parse(c));
     1 === e.om || "1" === e.om ? (a.e.h(), a.e.g(2)) : a.e.g(3)
    }
   }

   function x() {}

   function n(b) {
    var c = !1,
     e = !1,
     d = !1;
    a.b.forEach(b, function(a) {
     "hidden" === a ? c = !0 : "backgrounded" === a ? e = !0 : "notFound" === a && (d = !0)
    });
    ka = c;
    W = e;
    ea = d
   }

   function t(b) {
    if ("undefined" !== typeof b && "undefined" !== typeof b.adView) {
     var c = b.viewport;
     c && (c.x = 0, c.y = 0, c = e(c), a.d.c() && a.a.a(window) && "undefined" === typeof Q && (window.screen.width = c.w, window.screen.height =
      c.h, window.screen.availWidth = c.w, window.screen.availHeight = c.h, a.d.u()));
     Q = c;
     b = b.adView;
     b.onScreenGeometry ? (T = b.percentageInView / 100, ca = e(b.onScreenGeometry)) : (ca = void 0, T = 0);
     b.reasons && n(b.reasons);
     b.geometry && (c = P, P = e(b.geometry), a.n.e(P), c && P && !W && 0 != c.w && 0 != c.h && 0 != P.w && 0 != P.h && !a.n.n(c, P) && q.swde.zaxs("scroll"));
     Y = "undefined" !== typeof b.measuringElement ? b.measuringElement : !1
    }
   }

   function v() {
    !y || y.ep || y.unloadPixelSent || (y.preventTryFindingAdAgain = !0, a.t.a(y))
   }

   function z(b) {
    if ("sessionStart" ===
     b.type) try {
     ia = b.adSessionId;
     var c;
     try {
      c = JSON.parse(b.data.verificationParameters)
     } catch (e) {}
     if (c && "object" === typeof c && !Array.isArray(c)) {
      var d = "moatClientLevel1 moatClientLevel2 moatClientLevel3 moatClientLevel4 moatClientSlicer1 moatClientSlicer2".split(" ");
      for (key in c)
       if (a.b.ai(d, key) || 0 === key.lastIndexOf("zMoat", 0)) {
        V = c;
        break
       }
     }
     var f = b.data.context;
     F = f.adSessionType;
     E = f.omidNativeInfo;
     G = f.omidJsInfo;
     H = f.app;
     if ("undefined" !== typeof f.deviceInfo) {
      var g = f.deviceInfo;
      "iPhone OS" === g.os && (g.os = "iOS");
      I = g
     }
     la = !0;
     l()
    } catch (e) {
     ga = !0
    } else "sessionError" !== b.type && "sessionFinish" === b.type && v()
   }

   function A(e) {
    if ("undefined" === typeof O) {
     try {
      O = e.timestamp, "undefined" !== typeof e.data && c() && t(e.data)
     } catch (d) {
      ga = !0, v()
     }
     if (!ga) a: if (!a.d.cv()) {
      if (I && I.os && "ANDROID" === I.os.toUpperCase() && (e = [a.f.b([28, 40, 38, 72, 28, 39, 39, 72, 38, 40, 27, 34, 37, 30, 72, 26, 39, 29, 43, 40, 34, 29, 72, 41, 33, 40, 39, 30]), a.f.b([28, 40, 38, 72, 28, 39, 39, 72, 28, 39, 39, 38, 40, 39, 30, 50]), a.f.b([28, 40, 38, 72, 27, 37, 30, 26, 28, 33, 30, 43, 43, 30, 41, 40, 43, 45, 72, 26, 39,
        29, 43, 40, 34, 29, 72, 45, 30, 26, 38, 44, 45, 43, 30, 26, 38
       ]), a.f.b([28, 40, 38, 72, 45, 46, 43, 39, 30, 43, 72, 41, 32, 26, 28, 33, 26, 38, 41, 54, 52, 53, 55]), a.f.b([28, 40, 38, 72, 26, 29, 46, 37, 45, 44, 48, 34, 38, 72, 47, 34, 29, 30, 40, 26, 41, 41, 72, 26, 39, 29, 43, 40, 34, 29]), a.f.b([28, 40, 38, 72, 45, 46, 43, 39, 30, 43, 72, 28, 39, 47, 34, 29, 30, 40, 26, 41, 41]), a.f.b([28, 40, 38, 72, 45, 46, 43, 39, 30, 43, 72, 26, 39, 29, 43, 40, 34, 29, 72, 39, 28, 26, 26])], H && a.b.ai(e, H.appId))) break a;
      a.n.l(2);
      b() || a.e.f();
      a.m.a.zaxs("trackingReady")
     }
    }
   }

   function m(a) {
    t(a.data)
   }

   function K() {
    N = !0;
    var b = U;
    U = [];
    var c = O,
     e = c;
    "undefined" !== typeof e && (b.sort(function(a, b) {
     return a.timestamp - b.timestamp
    }), a.b.forEach(b, function(b) {
     var d = b.timestamp,
      f = b.type,
      g = d >= c;
     g && (a.aa.h(y, 0, new p(e)), a.aa.h(y, d - e, new p(d)));
     "geometryChange" === f && m(b);
     g && (e = d)
    }), b = new p, a.aa.h(y, b - e, b))
   }

   function B() {
    for (var a = "", b = ["mo", "at.", "co", "m-"], c = 0, e = b.length; c < e; c++) a += b[c];
    return a + "verveinappvrv481346465113"
   }
   a.p = {};
   var y, C = !1,
    D, C = a.d.c();
   D = a.d.be();
   var L = !1,
    J, ba, S = !1,
    N = !1,
    ga = !1,
    w = [],
    U = [],
    ha, qa, ia, V = {},
    F, E, G, H, I, O,
    Q, P, ca, Y = !1,
    T, ja, da, ka = !1,
    W = !1,
    ea = !1,
    la = !1,
    ma = !1,
    pa = !1,
    aa = !1;
   a.p.j = function(b) {
    y = b;
    ma = !0;
    l();
    c() && a.o.f(K, 0)
   };
   a.p.f = c;
   a.p.k = function() {
    return !1
   };
   a.p.g = function(b, c) {
    var e = !1;
    if (!(J && J.isSupported && J.isSupported())) e = !0;
    else if ("undefined" === typeof ca) e = !0;
    else if (W || ea) e = !0;
    if (e) return da = 0, a.n.g();
    var e = aa,
     d = result = a.n.i(b, c, T, e, ca.w * ca.h >= .95 * Q.w * Q.h);
    if ("strict" === a.aa.a(b.zr)) {
     var f = a.n.j(b, ca, P, Q, e);
     a.n.k(b.zr, f, d, e) && a.m.a.zaxs("rectsAvailable", b.zr, f.elementRect, f.visibleRect)
    }
    ja = result.jsPercv;
    da = result.percv;
    0 < da && (pa = !0);
    return result
   };
   a.p.c = function() {
    return c() ? !0 : !aa && a.d.e
   };
   a.p.l = function() {
    return pa
   };
   a.p.m = function(a) {
    var b = function(b, c) {
     var e = {
      Screen: "za",
      View: "zb",
      Visible: "zc",
      SDKPct: "zd",
      JSPct: "ze"
     };
     b in e && (formatted = "object" === typeof c && null !== c ? [c.x, c.y, c.w, c.h].join(":") : c, "undefined" !== typeof formatted && null !== formatted && (a[e[b]] = formatted))
    };
    b("Screen", Q);
    b("View", P);
    b("Visible", ca);
    b("SDKPct", T);
    b("JSPct", ja);
    "undefined" !== typeof ca && (a.zf = [Number(!ea), Number(!W), Number(ka),
     "-"
    ].join(":"))
   };
   a.p.b = function(a) {
    var b = function(b, c) {
     var e = {
      AppId: "ya",
      SdkVer: "yb",
      JsVer: "yc",
      IntePartName: "yd",
      IntePartVer: "ye",
      VeriClientVer: "yf",
      VerLoadTime: "yg",
      DeviceType: "yi",
      OS: "yh",
      OSVersion: "yj",
      AdType: "yk",
      ServiceJSMeasurement: "yl"
     };
     "undefined" !== typeof c && (a[e[b]] = c)
    };
    try {
     b("AppId", H.appId), b("SdkVer", H.libraryVersion), b("JsVer", G.serviceVersion), b("IntePartName", E.partnerName), b("IntePartVer", E.partnerVersion), b("VeriClientVer", ba), b("VerLoadTime", qa), "undefined" !== typeof I && (b("DeviceType",
      I.deviceType), b("OS", I.os), b("OSVersion", I.osVersion)), b("AdType", F), b("ServiceJSMeasurement", Number(Y))
    } catch (c) {}
   };
   a.p.n = function() {
    return W
   };
   a.p.h = function() {
    S || (J && J.isSupported && J.isSupported() ? (J.registerSessionObserver(f(z), B()), J.addEventListener("impression", f(A)), J.addEventListener("geometryChange", g(m)), S = !0) : L = !0)
   };
   a.p.o = function() {
    aa = !0;
    a.n.f(V, "OMID-" + ia, P)
   };
   a.p.a = function() {
    return "undefined" === typeof Q ? null : {
     width: Q.w,
     availWidth: Q.w,
     height: Q.h,
     availHeight: Q.h
    }
   };
   var ra = function() {
    var a =
     document.body && document.body.innerHTML;
    return (null == a || "" === a) && 1 === document.scripts.length
   }();
   a.p.e = function() {
    return a.d.cw() && !c() && ra
   };
   a.p.d = function() {
    var b = a.p.e(),
     c = a.d.d() && a.d.dk() && !aa;
    return b || c
   };
   a.p.i = function(a, b, c) {
    function e() {}

    function d() {}
    b = "function" === typeof b ? b : e;
    c = "function" === typeof c ? c : d;
    if ("undefined" === typeof J && "undefined" === typeof D) return !1;
    "undefined" !== typeof J ? J.sendUrl(a, b, c) : "undefined" !== typeof D && D.sendUrl(a, b, c);
    return !0
   };
   a.p.p = function(a, b) {
    var c = function(b) {
     var c = {};
     try {
      c = JSON.parse(b)
     } catch (e) {}
     q.jsonp[a].cachedResponse = c;
     q.swde.zaxs(a + "JsonpReady", c)
    };
    D && D.downloadJavaScriptResource && D.downloadJavaScriptResource(b, c)
   };
   a.p.q = function() {
    0 == r.floor(50 * r.random()) && a.u.b(17, {
     moatClientLevel1: M
    })
   };
   a.p.r = function(a, b) {
    b && b.moatClientLevel1 === M && (a.i = "OMID_DIAGNOSTIC_EVT_COUNT1", a.cm = 50)
   };
   if (a.d.d() && (C && (a.a.c(D.setTimeout, D.clearTimeout, D), a.a.d(D.setInterval, D.clearInterval, D)), h(), !J)) {
    var na = function() {
     v()
    };
    ha = new p;
    try {
     if (C) {
      var oa = function(a) {
       try {
        eval(a),
         qa = new p - ha, h()
       } catch (b) {
        v()
       }
      };
      D.downloadJavaScriptResource("https://z.moatads.com/omidverificationclient/verification-client-v1.js", oa, na)
     } else {
      var oa = function() {
        qa = new p - ha;
        h()
       },
       Z = document.createElement("script");
      Z.src = "https://z.moatads.com/omidverificationclient/verification-client-v1.js";
      Z.onload = oa;
      Z.onerror = na;
      Z.type = "application/javascript";
      a.b.bm().parentNode.appendChild(Z)
     }
    } catch (R) {
     v()
    }
   }
  })(m);
  (function(a) {
   function k(b) {
    a.focus.pageIsPrerendered() || (a.m.a.zaxs("noLongerPreRendered"), a.o.d(document,
     u, k, "pr"))
   }

   function d(a) {
    "undefined" == typeof c && (c = a)
   }
   a.focus = {};
   var h = !1,
    f = a.d.bd,
    f = -1 < f.indexOf("Safari") && -1 == f.indexOf("Chrome") && -1 == f.indexOf("Chromium") && !a.b.j(),
    g = a.b.o() && !a.b.j(),
    e = "undefined" !== typeof document.hasFocus,
    c, b = {
     visible: 0,
     hidden: 1,
     prerender: 2
    },
    l, u, x, n;
   "undefined" !== typeof document.hidden ? (l = "hidden", u = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (l = "mozHidden", u = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (l = "msHidden", u = "msvisibilitychange") :
    "undefined" !== typeof document.webkitHidden && (l = "webkitHidden", u = "webkitvisibilitychange");
   for (var t = ["v", "mozV", "msV", "webkitV"], v = 0; v < t.length; v++) {
    var z = t[v] + "isibilityState";
    if ("undefined" !== typeof document[z]) {
     x = z;
     break
    }
   }
   n = "undefined" !== typeof l;
   var A, m;
   "undefined" !== typeof window.requestAnimationFrame ? A = "requestAnimationFrame" : "undefined" !== typeof window.webkitRequestAnimationFrame && (A = "webkitRequestAnimationFrame");
   m = f && "string" == typeof A && !n;
   var r = (new p).getTime();
   m && function ba() {
    r = (new p).getTime();
    if (!h) window[A](ba)
   }();
   a.focus.focusStartTime = !1;
   var B = q.swde.azsx("focusStateChange", function(b) {
    b && (a.focus.focusStartTime = (new p).getTime(), q.swde.sxaz("focusStateChange", {
     id: B,
     priority: 1
    }))
   }, {
    priority: 1
   });
   a.focus.getFocusMethod = function() {
    return c
   };
   a.focus.visibilitychange = u;
   a.focus.setFocusListeners = function() {};
   a.focus.getQueryString = function(a) {
    a = {};
    a.em = c;
    L && (a.eo = 1);
    "undefined" != typeof x && (a.en = b[document[x]]);
    return a
   };
   a.focus.supportsPageVisAPI = function() {
    return n
   };
   var y = null;
   a.focus.checkFocus =
    function() {
     if (a.d.cw()) return !a.p.n();
     if (a.d.j() && a.d.cv() && a.s.j()) return d(0), !1;
     null === y && (y = a.d.dx());
     if (y) return d(3), !0;
     if (a.focus.supportsPageVisAPI()) return d(0), !document[l];
     if (m) return d(1), 100 > (new p).getTime() - r;
     if (g && e) return d(2), document.hasFocus();
     d(3);
     return !0
    };
   var C = !1;
   a.focus.pageIsVisible = function() {
    var b = a.focus.checkFocus();
    if (C != b && q && q.swde) try {
     q.swde.zaxs("focusStateChange", b)
    } catch (c) {}
    return C = b
   };
   a.focus.pageIsPrerendered = function() {
    return "undefined" !== typeof x ? "prerender" ==
     document[x] : !1
   };
   a.focus.pageIsVisible();
   var D = !1;
   a.m.a.azsx("allLocalAdsKilled", function() {
    D && a.o.d(document, u, k, "pr");
    h = !0
   }, {
    once: !0
   });
   a.focus.pageIsPrerendered() && (a.o.c(document, u, k, "pr"), D = !0);
   var L = a.focus.pageIsPrerendered()
  })(m);
  (function(a) {
   a.at = {};
   a.at.a = function() {
    var k = a.au.a;
    a.au.b(["iframe[id^='ebBannerIFrame']", "$[id|ebBannerIFrame_([0-9]+_[0-9]+)]/.../body/#eyeDiv/iframe[id^='ebAd'][id*='panel'][id*='iframe'][id*='$0']", ["expandUnloads", "useIsFoundAdKnown", "runWithoutExpand"]]);
    a.au.b(["iframe[id^='ebBannerIFrame']",
     ".../body/#eyeDiv/iframe[id^='ebAd'][id*='panel'][id*='iframe']", ["expandUnloads", "useIsFoundAdKnown", "runWithoutExpand", "setCollapseProxyInLoop"], !1, ".../body/#eyeDiv"
    ]);
    a.au.b(["[id^='envIpolli'][name^='envIpolli']", "[id^='envIpolli'][name^='envIpolli']/$[id|envIpolli(\\d+)]/.../body/iframe[id='expIpolli$0_iframe']", ["runWithoutExpand", "expandUnloads", "noCollapseValidation"]]);
    a.au.b(["[id^='OriginPlatformAdUnit'][id$='inpage']", "$[id|OriginPlatformAdUnit-(\\d+)-inpage]/...../[id='OriginPlatformAdUnit-$0-overthepage']",
     ["expandUnloads", "useIsFoundAdKnown", "runWithoutExpand"]
    ]);
    a.au.b(["#cac_adhere", "..../$[id|cmAdFrame__crisp-(.*)]/...../iframe#cacPanelIframe__crisp-$0", ["useIsFoundAdKnown", "findExpandInLoop", "setExpandProxyInLoop"], !1, !1, "iframe/=>/div[id='panelContainerDiv']"]);
    a.d.bs && a.d.bs() && "AdMarvel" == a.d.bs() && (a.au.b(["div#normal", "div#expanded", ["noInitialValidation"]]), a.au.b(["div#normal", "div#resized", ["noInitialValidation"]]));
    k.push({
     onFindAd: function(d, h, f) {
      if ((d = a.av.a(["div.CP#collapsed/img"],
        d)[0]) && a.b.bd(d)) return a.au.c[h] = a.au.d(d, h, f), d
     },
     onLoop: function(d) {
      var h = a.av.a(["../../div.CP#expanded/img"], d.collapsedEl)[0];
      h && !d.expandedEl && (d.expandedEl = h);
      d.expandedIsOpen ? d.collapsedEl && a.b.be(d.collapsedEl) && a.au.e(d, !0) : h && a.b.be(h) && a.au.f(d.expandedEl, "div", null, d.adNum)
     }
    }, {
     onFindAd: function(d, h, f) {
      if ((d = a.d.da ? a.av.a(["div[id^='ptela_unitWrapper']"], d)[0] : a.av.a(["div[id^='ptelaswfholder']"], d)[0]) && a.b.bd(d)) return d
     }
    }, {
     collapsedRe: /ftdiv\d+/,
     expandedRe: /ftin\d+/,
     clipRe: /rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)/,
     onFindAd: function(d, h, f) {
      var g = a.au.g(d, this.collapsedRe);
      d = a.au.g(d, this.expandedRe);
      if (g && d) return a.au.c[h] = a.au.d(g, h, f), a.au.c[h].expandedEl = d, g
     },
     onLoop: function(d) {
      var h = !1,
       f = d.expandedEl.style.clip,
       f = f && f.match(this.clipRe);
      "0" === (f && f[4]) && (h = !0);
      h && !d.expandedIsOpen ? a.au.f(d.expandedEl, "div", null, d.adNum) : !h && d.expandedIsOpen && a.au.e(d, !0)
     }
    }, {
     re: /(DIV)_(\d{6})_1_(\d{13})/,
     onFindAd: function(d, h, f) {
      if (d = a.au.g(d, this.re)) return a.au.c[h] = a.au.d(d, h, f), d
     },
     findExpanded: function(a) {
      if (a = a.id.match(this.re))
       for (var h = [a[3], Number(a[3]) + 1], f = 0; f < h.length; f++) {
        var g = ["DIV", a[2], "2", h[f]].join("_");
        if (g = document.getElementById(g)) return g
       }
     }
    }, {
     re: /pr(flsh)([A-Z0-9]+)/,
     onFindAd: function(d, h, f) {
      if (a.d.da) {
       var g = window.prBnr;
       if (g && 1 === g.nodeType && a.b.bd(g)) {
        var e = d && d.innerHTML && d.innerHTML.match(/pradi([A-Z0-9]+)/);
        if ((e = e && e[1]) && g.id && g.id.match(e) && (d = d.ownerDocument.getElementById("prf" + e))) return a.au.c[h] = a.au.d(g, h, f), a.au.c[h].uncle = d, g
       }
      }
     },
     onLoop: function(d) {
      var h = !1,
       f = d.uncle;
      f && f.children && 1 === f.children.length &&
       (f = f.children[0]) && 1 === f.children.length && (d.expandedEl = f, h = !0);
      h && !d.expandedIsOpen ? a.au.f(d.expandedEl, "div", null, d.adNum) : !h && d.expandedIsOpen && a.au.e(d, !0)
     }
    }, {
     re: /pradi([A-Z0-9]+)/,
     onFindAd: function(d, h, f) {
      var g = d && d.innerHTML && d.innerHTML.match(this.re);
      if (g) {
       var e = d.ownerDocument || document;
       d = e.getElementById("prf" + g[1]);
       var c;
       if (d) {
        var b = d.getElementsByTagName("embed"),
         l = d.getElementsByTagName("object"),
         u = d.getElementsByTagName("div");
        b && b[0] && a.b.be(b[0]) ? c = b[0] : l && l[0] && a.b.be(l[0]) ? c = l[0] :
         u && 0 < u.length && a.b.forEach(u, function(b) {
          b && "mal-ad-container" === b.id && a.b.bd(b) && (c = b)
         });
        !c && d.children && 1 === d.children.length && (b = d.children[0]) && 1 === b.children.length && a.b.bd(b.children[0]) && (c = b.children[0])
       }
       c || (g = e.getElementById("prw" + g[1])) && a.b.bd(g) && (c = g);
       if (c) return a.au.c[h] = a.au.d(c, h, f), a.au.c[h].uncle = d, c
      }
     },
     onNewAd: function(d, h) {
      d && d.uncle && a.l.c(h, d.uncle)
     }
    }, {
     re: /VwP(\d+)Div/,
     onFindAd: function(d, h, f) {
      if (d = a.au.g(d, this.re)) {
       var g = d.id.match(this.re);
       if (g && (g = document.getElementById("VwP" +
         g[1] + "Div2")) && (g = g.getElementsByTagName("div"), 3 !== g.length && 1 === g.length)) {
        g = g[0];
        if (a.b.bd(g)) return g;
        a.au.c[h] = a.au.d(d, h, f);
        return d
       }
      }
     },
     findExpanded: function(d) {
      if ((d = d.id.match(this.re)) && (d = (d = document.getElementById("VwP" + d[1] + "Div2").getElementsByTagName("div")) && d[0]) && a.b.bd(d)) return d
     }
    });
    k.push({
     onFindAd: function(d, h, f) {
      if (a.av.a(["script[src*='jetpackdigital']"], d)[0] && (d = a.d.g.document.getElementById("jpsuperheader")) && a.b.bd(d)) {
       var g = d.getElementsByTagName("object");
       if (g && 1 === g.length &&
        g[0].id && g[0].id.match("jp_embed")) return g = g[0], a.au.c[h] = a.au.d(d, h, f), a.au.c[h].expandedEl = g, a.au.c[h].bgCheck = g && g.parentNode && g.parentNode.parentNode, d
      }
     },
     onLoop: function(d) {
      var h = !1;
      d.bgCheck.className && d.bgCheck.className.match("background1") && (h = !0);
      h && !d.expandedIsOpen ? (a.au.f(d.expandedEl, null, null, d.adNum), a.l.b(w[d.adNum], stage.bgCheck)) : !h && d.expandedIsOpen && a.au.e(d, !0)
     }
    });
    k.push({
     isFoundAdKnown: function(d, h, f) {
      if (d.className && d.className.match("jpplatform")) var g = a.d.g.document.getElementById("jp_overlay"),
       e = !0;
      else d.parentNode && d.parentNode.id && "jpd_expfooter" === d.parentNode.id && (g = a.d.g.document.getElementById("jpd_expfooter_overlay"), e = !1);
      if (g) {
       var c = a.b.getElementsByClassName("jppanel", "DIV", g);
       if (c && 0 < c.length) return d = a.au.d(d, h, f), a.au.c[h] = d, a.au.c[h].overlay = g, a.au.c[h].panels = c, a.au.c[h].ignoreVideo = e, !0
      }
     },
     onLoop: function(d) {
      var h, f = !1;
      if (d.overlay && d.overlay.style && "-9999px" !== d.overlay.style.top) {
       if (!d.expandedEl || d.expandedEl && d.expandedEl.style && "-9999px" === d.expandedEl.style.top) d.ignoreVideo ?
        a.b.forEach(d.panels, function(a) {
         if (a && a.style && "-9999px" !== a.style.top && 0 === a.getElementsByTagName("video").length) return h = a, !1
        }) : a.b.forEach(d.panels, function(a) {
         if (a && a.style && "-9999px" !== a.style.top) return h = a, !1
        }), h && a.b.bd(h) && (d.expandedEl = h);
       d.expandedEl && (f = !0)
      }
      f && !d.expandedIsOpen ? a.au.f(d.expandedEl, "div", null, d.adNum) : !f && d.expandedIsOpen && a.au.e(d, !0)
     }
    });
    k.push({
     isFoundAdKnown: function(d, h, f) {
      var g = w[h];
      if (g.adformCollapsedEl && g.adformExpandedEl) return d = a.au.d(d, h, f), a.au.c[h] = d, a.au.c[h].expandedEl =
       g.adformExpandedEl, a.au.c[h].hiddenClassRx = /(^| )adform-adbox-hidden($| )/, !0
     },
     onLoop: function(d) {
      var h = !1;
      d.hiddenClassRx.test(d.collapsedEl.className) && (h = !0);
      h && !d.expandedIsOpen ? a.au.f(d.expandedEl, null, null, d.adNum) : !h && d.expandedIsOpen && a.au.e(d, !0)
     }
    });
    k.push({
     findCollapsedAd: function(d) {
      if (!d) return !1;
      if (d = d.getElementById("eyeDiv")) {
       var h, f = /ebAd\d+_contractedpanel_asset_.*/i;
       if ((d = d.getElementsByTagName("object")) && 0 < d.length && (a.b.forEach(d, function(a) {
          if (a && a.id.match(f)) return h = a, !1
         }),
         h)) return h
      }
      return !1
     },
     findExpandedAd: function(d) {
      if (!d) return !1;
      if (d = d.getElementById("eyeDiv")) {
       var h, f = /ebAd\d+_expandedpanel\d*_asset_.*/i;
       if ((d = d.getElementsByTagName("object")) && 0 < d.length && (a.b.forEach(d, function(a) {
         if (a && a.id.match(f)) return h = a, !1
        }), h)) return h
      }
      return !1
     },
     isAdExpanded: function(a) {
      return this.findExpandedAd(a) ? !0 : !1
     },
     onFindAd: function(d, h, f) {
      if (!d || !a.av.a(["div#mmBillboardShim"], d)[0]) return !1;
      var g = a.d.g && a.d.g.document;
      d = this.findCollapsedAd(g);
      g = this.findExpandedAd(g);
      if (d ||
       g) {
       if (d && !d[F]) return f = a.au.d(d, h, f), a.au.c[h] = f, d;
       if (g && a.b.bd(g)) return f = a.au.d(g, h, f), a.au.c[h] = f, g
      }
     },
     afterAdStateCreated: function(d) {
      d.pageDocument = a.d.g.document;
      d.collapseUnloads = !0
     },
     onLoop: function(d) {
      var h = this.isAdExpanded(d.pageDocument);
      !1 === d.expandedIsOpen && h ? (d.expandedEl = this.findExpandedAd(d.pageDocument), a.au.f(d.expandedEl, null, null, d.adNum)) : d.expandedIsOpen && 0 == h && (d.collapsedEl = this.findCollapsedAd(d.pageDocument), a.au.h(d.collapsedEl, null, null, d.adNum))
     }
    });
    k.push({
     findExpandedAd: function(d) {
      if (!d) return !1;
      if (d = d.getElementById("eyeDiv")) {
       var h, f = /ebad\d+_panel\d*_asset_.*/i;
       if ((d = d.getElementsByTagName("object")) && 0 < d.length && (a.b.forEach(d, function(a) {
         if (a && a.id.match(f)) return h = a, !1
        }), h)) return h
      }
      return !1
     },
     isAdExpanded: function(a) {
      return this.findExpandedAd(a) ? !0 : !1
     },
     isFoundAdKnown: function(d) {
      if (!d) return !1;
      if (d.id && d.id.match("ebRichBannerFlash")) {
       d = G && G.parentNode && G.parentNode.getElementsByTagName("script");
       var h = !1;
       a.b.forEach(d, function(a) {
        if (a && a.src && a.src.match("ebExpBanner")) return h = !0, !1
       });
       if (h) return !0
      }
     },
     afterAdStateCreated: function(d) {
      d.pageDocument = a.d.g.document
     },
     onLoop: function(d) {
      var h = this.isAdExpanded(d.pageDocument);
      !1 === d.expandedIsOpen && h ? (d.expandedEl = this.findExpandedAd(d.pageDocument), a.au.f(d.expandedEl, null, null, d.adNum)) : d.expandedIsOpen && 0 == h && a.au.e(d, !0)
     }
    });
    k.push({
     findExpandedAd: function(d) {
      if (d.expandedEl) return d.expandedEl;
      var h, f, g;
      if ("banner" === d.expandType) {
       f = a.aw.a(d.pageDoc.body, a.aw.b);
       for (var e = f.length - 1; 0 <= e; e--)
        if ((g = f[e].contentWindow) && g.runtimeParams &&
         g.runtimeParams.placementId && g.runtimeParams.clientTimestamp && g.runtimeParams.placementId === d.celtraId && g.runtimeParams.clientTimestamp === d.celtraTimestamp && (h = g.document && g.document.getElementById("celtra-modal")) && a.b.bd(h)) return d.parentFrame || (d.parentFrame = a.k.g(h)), d.expandedEl = h
      } else if ("video" === d.expandType) {
       f = d.pageDoc.getElementsByTagName("video");
       if (d.adWin && d.adWin.videoContext && d.adWin.videoContext.url) {
        var c = d.adWin.videoContext.url;
        a.b.forEach(f, function(a) {
         if (a && a.src === c) return h =
          a, !1
        })
       } else a.b.forEach(f, function(a) {
        if (a && a.src && a.src.match && a.src.match("celtra")) return h = a, !1
       });
       if (h && a.b.bd(h)) return d.expandedEl = h
      }
      return !1
     },
     isAdExpanded: function(d) {
      var h = this.findExpandedAd(d);
      return h ? (d = d.parentFrame || a.k.g(h)) && d.style && "none" === d.style.display ? !1 : !0 : !1
     },
     isFoundAdKnown: function(d, h, f) {
      if (!d) return !1;
      if (d.id && d.id.match("celtra") || d.className && d.className.match("celtra")) {
       var g = d.ownerDocument && (d.ownerDocument.defaultView || d.ownerDocument.parentWindow);
       if (g && g.ExpandableBanner &&
        g.runtimeParams && g.runtimeParams.placementId && g.runtimeParams.clientTimestamp) return d = a.au.d(d, h, f), a.au.c[h] = d, a.au.c[h].expandType = "banner", a.au.c[h].pageDoc = a.d.g.document, a.au.c[h].celtraId = g.runtimeParams.placementId, a.au.c[h].celtraTimestamp = g.runtimeParams.clientTimestamp, !0;
       if (g && g.VideoContext) return d = a.au.d(d, h, f), a.au.c[h] = d, a.au.c[h].expandType = "video", a.au.c[h].pageDoc = a.d.g.document, a.au.c[h].adWin = g, !0
      }
     },
     onLoop: function(d) {
      var h = this.isAdExpanded(d);
      h && !d.expandedIsOpen ? a.au.f(d.expandedEl,
       "div", null, d.adNum) : !h && d.expandedIsOpen && a.au.e(d, !0)
     }
    })
   }
  })(m);
  (function(a) {
   function k(a, c, e) {
    this.collapsedEl = a;
    this.expandedEl = null;
    this.expandedIsOpen = !1;
    this.adNum = c;
    this.configIndex = e
   }

   function d(b, c) {
    var e = a.au.c[c];
    if (!0 !== e.findingExpanded) {
     e.findingExpanded = !0;
     var d = function() {
       e.findingExpanded = !1
      },
      f = w[c].aa;
     a.o.k(function() {
      var e = b.findExpanded(f);
      if (e) return a.aw.c(e, c, h, !1, d), !0
     }, 5, 500, d)
    }
   }

   function h(b, c, e, d) {
    b[H] = d;
    b[F] = !0;
    c = w[d];
    d = a.au.c[d];
    d.expandedIsOpen = !0;
    a.b.bf(b, c);
    d.findingExpanded = !1;
    return !0
   }

   function f(b, c) {
    a.b.bf(b.collapsedEl, w[b.adNum], !0);
    b.expandedIsOpen = !1;
    c || (b.expandedEl && (b.expandedEl[H] = void 0, b.expandedEl[F] = void 0), b.expandedEl = null)
   }

   function g(b, c, e, d) {
    if (!b) return !1;
    b[H] = d;
    b[F] = !0;
    a.au.c[d].expandedIsOpen = !1;
    a.b.bf(b, w[d]);
    return !0
   }
   a.au = {};
   a.au.i = "bac";
   var e = [];
   a.au.a = e;
   a.au.c = {};
   a.au.d = function(a, c, e) {
    return new k(a, c, e)
   };
   a.au.j = function(b) {
    var c = a.au.c[b.zr];
    c && (c.collapsedEl = null, c.expandedEl = null, delete a.au.c[b.zr])
   };
   a.au.k = function(b) {
    return (b = a.au.c[b]) &&
     !0 === b.expandedIsOpen
   };
   a.au.l = function(b) {
    return (b = a.au.c[b]) && !0 === b.collapseUnloads
   };
   a.au.m = function(b, c) {
    b = b.replace(/^on/, "");
    var h = a.au.c[c],
     k = w[c];
    if (h) {
     var n = e[h.configIndex];
     if ("mousedown" === b && n.findExpanded && !h.expandedIsOpen) d(n, c);
     else if ("mouseover" === b && n.onMouseOver && !h.expandedIsOpen) n.onMouseOver(h);
     else if ("loop" === b && n.onLoop) n.onLoop(h);
     else if ("departed" === b && h.expandedIsOpen) f(h);
     else if ("collapseUnloads" === b && h.expandedIsOpen) g(h.collapsedEl, null, null, c);
     else if ("newad" === b &&
      n.onNewAd) n.onNewAd(h, k)
    }
   };
   a.au.n = function(b, c) {
    for (var d = 0; d < e.length; d++) {
     var f = e[d],
      g = f.onFindAd && f.onFindAd(b, c, d);
     if (g) return a.m.a.azsx("adKilled", a.aa.g, {
      once: !0,
      condition: function(a) {
       return a.zr == c
      }
     }), a.au.c[c] && f.afterAdStateCreated && f.afterAdStateCreated(a.au.c[c]), Y = f.name, g
    }
   };
   a.au.o = function(b) {
    if (b !== a.au.i && b.aa && b.ao && !a.au.c[d])
     for (var c = b.aa, d = b.ao.adNum, f = 0; f < e.length; f++) {
      var g = e[f];
      if (g && g.isFoundAdKnown && g.isFoundAdKnown(c, d, f)) {
       a.m.a.azsx("adKilled", a.aa.g, {
        once: !0,
        condition: function(a) {
         return a.zr ==
          b.zr
        }
       });
       a.au.c[d] || (c = new k(c, d, f), a.au.c[d] = c);
       g.afterAdStateCreated && g.afterAdStateCreated(a.au.c[d]);
       Y = g.name;
       break
      }
     }
   };
   a.au.p = function(a) {
    return "IMG" === a.tagName && a.id && a.id.match(/^pradi[0-9A-Z]+$/) && a.onload && "function" === typeof a.onload.toString && a.onload.toString().match(/shockwave/)
   };
   a.au.q = function(b, c) {
    a.au.k(c.zr) && (a.au.l(c.zr) ? a.au.m("collapseUnloads", c.zr) : a.au.m("departed", c.zr), b.shouldKillAd = !1)
   };
   var c = a.m.a.azsx("beforeAdKilled", a.au.q, {
    priority: 5
   });
   a.m.a.azsx("allLocalAdsKilled",
    function() {
     a.m.a.sxaz("beforeAdKilled", {
      id: c
     })
    }, {
     once: !0
    });
   a.au.b = function(b) {
    var c = [b[0]],
     d = [b[1]],
     x = b[2],
     n = b[3] && [b[3]],
     t = b[4] && [b[4]],
     v = b[5] && [b[5]],
     z = b[6],
     A = b[7],
     m = !1,
     q = !1,
     B = !1,
     y = !1,
     C = !1,
     D = !1,
     L = !1,
     J, r = J = !1,
     S = !1,
     N = !1,
     p = !1,
     fa = !1,
     U = !1;
    x && (a.b.ai(x, "checkHiddenStyles") && (m = !0), a.b.ai(x, "noInitialValidation") && (q = !0), a.b.ai(x, "noLoopValidation") && (B = !0), a.b.ai(x, "noCollapseValidation") && (y = !0), a.b.ai(x, "runWithoutExpand") && (C = !0), a.b.ai(x, "collapseUnloads") && (D = !0), a.b.ai(x, "expandUnloads") && (L = !0),
     a.b.ai(x, "useIsFoundAdKnown") && (J = !0), a.b.ai(x, "setCollapseProxyInLoop") && (r = !0), a.b.ai(x, "setExpandProxyInLoop") && (S = !0), a.b.ai(x, "findExpandInLoop") && (C = N = !0), a.b.ai(x, "addExpandTag") && (p = !0), a.b.ai(x, "setIframeAssetType") && (fa = !0), a.b.ai(x, "preferCollapse") && (U = !0));
    e.push({
     isFoundAdKnown: function(b, e, f) {
      if (!J || !b) return !1;
      if (z && A) {
       if ((b = (b = w[e].ao) && b[z]) && !a.b.ai(A, b)) return !1
      } else if (a.av.a(c, b)[0]) {
       if (C) return a.au.c[e] = new k(b, e, f), a.au.c[e].collapsedQuery = c, a.au.c[e].expandedQuery = d, a.au.c[e].searchableEl =
        b, a.au.c[e].checkHiddenStyles = m, a.au.c[e].collapseUnloads = D, a.au.c[e].noLoopValidation = B, a.au.c[e].expandUnloads = L, a.au.c[e].expandedSelector = n, a.au.c[e].collapseProxyEl = t, a.au.c[e].expandProxyEl = v, a.au.c[e].collapseUnloads = D, a.au.c[e].setCollapseProxyInLoop = r, a.au.c[e].setExpandProxyInLoop = S, a.au.c[e].findExpandInLoop = N, a.au.c[e].addExpandTag = p, a.au.c[e].setIframeAssetType = fa, a.au.c[e].preferCollapse = U, t && a.av.b(t, w[e], b), !0;
       var g = a.av.a(d, b)[0];
       if (g && (q || a.b.be(g))) return a.au.c[e] = new k(b, e, f),
        a.au.c[e].collapsedQuery = c, a.au.c[e].expandedQuery = d, a.au.c[e].searchableEl = b, a.au.c[e].checkHiddenStyles = m, a.au.c[e].collapseUnloads = D, a.au.c[e].noLoopValidation = B, a.au.c[e].expandUnloads = L, a.au.c[e].expandedSelector = n, a.au.c[e].expandedEl = g, a.au.c[e].collapseProxyEl = t, a.au.c[e].expandProxyEl = v, a.au.c[e].collapseUnloads = D, a.au.c[e].setCollapseProxyInLoop = r, a.au.c[e].setExpandProxyInLoop = S, a.au.c[e].findExpandInLoop = N, a.au.c[e].addExpandTag = p, a.au.c[e].setIframeAssetType = fa, a.au.c[e].preferCollapse =
        U, t && a.av.b(t, w[e], b), v && a.av.b(v, w[e], g), !0
      }
     },
     onFindAd: function(b, e, f) {
      if (J) return !1;
      var g = a.av.a(c, b)[0];
      if (g && y && !g[F] || a.b.bd(g)) {
       if (C) return a.au.c[e] = new k(g, e, f), a.au.c[e].collapsedQuery = c, a.au.c[e].expandedQuery = d, a.au.c[e].searchableEl = b, a.au.c[e].checkHiddenStyles = m, a.au.c[e].collapseUnloads = D, a.au.c[e].noLoopValidation = B, a.au.c[e].expandUnloads = L, a.au.c[e].expandedSelector = n, a.au.c[e].collapseProxyEl = t, a.au.c[e].expandProxyEl = v, a.au.c[e].collapseUnloads = D, a.au.c[e].setCollapseProxyInLoop =
        r, a.au.c[e].setExpandProxyInLoop = S, a.au.c[e].findExpandInLoop = N, a.au.c[e].addExpandTag = p, a.au.c[e].setIframeAssetType = fa, a.au.c[e].preferCollapse = U, g;
       var h = a.av.a(d, b)[0];
       if (h && (q || a.b.be(h))) return a.au.c[e] = new k(g, e, f), a.au.c[e].collapsedQuery = c, a.au.c[e].expandedQuery = d, a.au.c[e].searchableEl = b, a.au.c[e].checkHiddenStyles = m, a.au.c[e].collapseUnloads = D, a.au.c[e].noLoopValidation = B, a.au.c[e].expandUnloads = L, a.au.c[e].expandedSelector = n, a.au.c[e].expandedEl = h, a.au.c[e].collapseProxyEl = t, a.au.c[e].expandProxyEl =
        v, a.au.c[e].collapseUnloads = D, a.au.c[e].setCollapseProxyInLoop = r, a.au.c[e].setExpandProxyInLoop = S, a.au.c[e].findExpandInLoop = N, a.au.c[e].addExpandTag = p, a.au.c[e].setIframeAssetType = fa, a.au.c[e].preferCollapse = U, g
      }
     },
     onNewAd: function(b, c) {
      b.collapseProxyEl && !b.useIsFoundAdKnown && a.av.b(b.collapseProxyEl, c, c.aa)
     },
     onLoop: function(b) {
      if (b.stopLoop) return !1;
      var c = !1;
      b.setIframeAssetType && (w[b.adNum].hasIframeListener = !0, b.setIframeAssetType = !1);
      if (b.expandUnloads) {
       var e = a.av.a(b.expandedQuery, b.searchableEl)[0];
       b.expandedEl = e
      }
      b.findExpandInLoop && !b.expandedEl && (e = a.av.a(b.expandedQuery, b.searchableEl)[0], b.expandedEl = e);
      if (b.expandedEl && (b.noLoopValidation || a.b.be(b.expandedEl)))
       if (b.checkHiddenStyles && (b.expandedEl.style && "hidden" === b.expandedEl.style.visibility || "none" === b.expandedEl.style.display) || "0" === a.b.ao(b.expandedEl, "opacity")) c = !1;
       else if (b.expandedSelector && !a.av.a(b.expandedSelector, b.expandedEl)[0]) c = !1;
      else if (c = !0, b.setCollapseProxyInLoop && b.collapseProxyEl && !b.collapseProxySet && (b.collapseProxySet =
        a.av.b(b.collapseProxyEl, w[b.adNum], b.collapsedEl)), b.setExpandProxyInLoop && b.expandProxyEl && !b.expandProxySet && (b.expandProxySet = a.av.b(b.expandProxyEl, w[b.adNum], b.expandedEl)), b.addExpandTag && b.expandedEl.parentNode && (e = G && G.src && G.src.replace(/moatClientLevel4=[^&]*&/, "moatClientLevel4=Expanded&"))) return a.b.bw(e, b.expandedEl.parentNode), b.addExpandTag = !1, b.stopLoop = !0, !1;
      b.preferCollapse && a.b.be(b.collapsedEl) && (c = !1);
      c && !b.expandedIsOpen ? h(b.expandedEl, "div", null, b.adNum) : !c && b.expandedIsOpen &&
       (b.collapseUnloads ? (c = a.av.a(b.collapsedQuery, b.searchableEl)[0], g(c, null, null, b.adNum)) : f(b, !0))
     }
    })
   };
   a.au.f = h;
   a.au.e = f;
   a.au.h = g;
   a.au.g = function(b, c, e) {
    e = e || {};
    var d = b.getElementsByTagName("div");
    e.inclSearchableEl && (d = a.b.bq(d), d.push(b));
    for (b = 0; b < d.length; b++) {
     var f = d[b];
     if (f.id.match(c) && (e.anySize || a.b.bd(f))) return f
    }
   };
   a.at.a()
  })(m);
  (function(a) {
   function k(b, c, e, d, f) {
    ("remove" === f ? a.o.d : a.o.c)(b, c, function(c) {
     c = c || this.event;
     var d = c.currentTarget || b;
     try {
      var f = d[H]
     } catch (g) {
      f = d[H]
     }
     if (f = w[f]) {
      var l;
      l = c;
      var h = d.getBoundingClientRect();
      l = -1 != l.type.indexOf("touch") && l.changedTouches && 0 < l.changedTouches.length ? {
       x: parseInt(l.changedTouches[0].clientX - h.left, 10),
       y: parseInt(l.changedTouches[0].clientY - h.top, 10)
      } : {
       x: parseInt(l.clientX - h.left, 10),
       y: parseInt(l.clientY - h.top, 10)
      };
      f.aj = l.x;
      f.ak = l.y;
      f.dm || (f.cb = 2 == a.focus.getFocusMethod() ? f.counters.laxDwell.tCur : f.counters.strictDwell.tCur, f.dm = 1);
      e.call(b, c, d, f)
     }
    }, "genmouse")
   }

   function d(b, c, e) {
    k(b, "click", x, c, e);
    k(b, "mousedown", f, c, e);
    sa ? a.d.dw && k(b,
     "touchstart", g, c, e) : (k(b, "mousemove", h, c, e), k(b, "mouseover", l, c, e), k(b, "mouseout", u, c, e))
   }

   function h(b, c, e) {
    a.m.a.zaxs("mouseEventOnAd", e);
    b = b || window.event;
    c = b.target || b.srcElement;
    if (1 != e.ao.skin || !a.z.d(c, e.adContent, b)) {
     if (!sa && (e.aj !== e.al || e.ak !== e.am)) {
      a.ag.d(b, e);
      a.ag.f(b, e);
      a.ag.g(b, e);
      a.ag.i(b, e);
      a.ag.h(b, e);
      a.ag.b(e);
      a.ag.c(e);
      a.ag.e(e);
      0 === e.ar.length && (e.ai = t(e));
      if (100 > e.ar.length || 100 > e.as.length || 100 > e.at.length) e.ar.push(e.aj), e.as.push(e.ak), e.at.push(a.b.am(e));
      e.al = e.aj;
      e.am = e.ak
     }
     e.ai !==
      t(e) && 1 < e.ar.length && n(e, "onMouseMove")
    }
   }

   function f(b, c, e) {
    a.m.a.zaxs("mouseEventOnAd", e);
    b = b || window.event;
    c = b.target || b.srcElement;
    1 == e.ao.skin && a.z.d(c, e.adContent, b) || (c = {
     e: 2
    }, c.q = e.aq[2]++, c.x = e.aj, c.y = e.ak, a.u.a(e, c), a.au.m(b.type, e.zr))
   }

   function g(b, c, e) {
    a.m.a.zaxs("mouseEvent", e);
    a.m.a.zaxs("mouseEventOnAd", e);
    b = b || window.event;
    c = b.target || b.srcElement;
    if (1 != e.ao.skin || !a.z.d(c, e.adContent, b)) {
     b = {
      e: 23
     };
     b.q = e.aq[23]++;
     b.x = e.aj;
     b.y = e.ak;
     c = (new p).getTime();
     if ("undefined" === typeof e.ct) e.ct =
      c;
     else {
      var d = c - e.ct;
      e.ct = c;
      e.cu = r.min(e.cu, d) || d
     }
     b.bz = void 0;
     a.u.a(e, b)
    }
   }

   function e(e, d, f) {
    var g;
    if (2 == e.an || e.hasIframeListener) g = !0;
    if (g) {
     g = d.e;
     var l = e.ck;
     l == a.ag.a.f.a && 6 === g ? (c(e, 0), e.cl = a.b.am(e), e.ck = a.ag.a.f.b) : l == a.ag.a.f.b ? 22 === g ? (b(e, d), c(e, f), e.cl = a.b.am(e)) : 7 === g && (1E3 < a.b.am(e) - e.cl ? (clearTimeout(e.cm), d.e = 22, b(e, d), e.cn = 0, e.ck = a.ag.a.f.a) : e.ck = a.ag.a.f.c) : l == a.ag.a.f.c && (6 == g ? (1E3 < a.b.am(e) - e.cl && (clearTimeout(e.cm), e.cn = 0, e.cl = a.b.am(e), c(e, 0)), e.ck = a.ag.a.f.b) : 22 == g && (b(e, d), e.ck =
      a.ag.a.f.a, e.cn = 0))
    }
   }

   function c(b, c) {
    if (a.focus.checkFocus()) {
     var d = 5 > b.cn ? 1E3 : 2 * c,
      f = {
       e: 22
      };
     b.cm = a.o.f(function() {
      e(b, f, d)
     }, d)
    } else e(b, {
     e: 7
    }, 0)
   }

   function b(b, c) {
    c.q = b.aq[c.e]++;
    c.m = a.b.am(b);
    b.cl = c.m;
    a.u.a(b, c);
    b.cn++
   }

   function l(b, c, d) {
    a.m.a.zaxs("mouseEvent", d);
    a.m.a.zaxs("mouseEventOnAd", d);
    b = b || window.event;
    c = b.target || b.srcElement;
    1 == d.ao.skin && a.z.d(c, d.adContent, b) || (a.ag.d(b, d), a.ag.f(b, d), a.ag.g(b, d), a.ag.i(b, d), a.ag.h(b, d), e(d, {
     e: 6
    }, 0), a.au.m(b.type, d.zr))
   }

   function u(b, c, d) {
    a.m.a.zaxs("mouseEventOnAd",
     d);
    b = b || window.event;
    c = b.target || b.srcElement;
    1 == d.ao.skin && a.z.d(c, d.adContent, b) || (a.ag.d(b, d), a.ag.f(b, d), a.ag.g(b, d), a.ag.i(b, d), a.ag.h(b, d), e(d, {
     e: 7
    }, 0))
   }

   function x(b, c, e) {
    a.m.a.zaxs("mouseEvent", e);
    a.m.a.zaxs("mouseEventOnAd", e);
    b = b || window.event;
    c = b.target || b.srcElement;
    1 == e.ao.skin && a.z.d(c, e.adContent, b) || (b = {
     e: 3
    }, b.q = e.aq[3]++, b.x = e.aj, b.y = e.ak, a.u.a(e, b))
   }

   function n(b, c) {
    b.ai = t(b);
    var e = {
     e: 1
    };
    e.q = b.aq[1]++;
    e.x = b.ar.join("a");
    e.y = b.as.join("a");
    for (var d = a.b.am(b), f = b.at, g = [], l = 0; l < f.length; l++) isNaN(f[l]) ||
     g.push(r.abs(f[l] - d));
    e.c = g.join("a");
    e.m = d;
    a.u.a(b, e);
    b.ar = [];
    b.as = [];
    b.at = []
   }

   function t(b) {
    return r.floor(a.b.am(b) / 1E3)
   }
   a.l = {};
   a.l.d = function(b) {
    if (a.d.dv) {
     a.m.a.azsx("adKilled", a.l.e, {
      once: !0,
      condition: function(a) {
       return b.zr == a.zr
      }
     });
     b.mouseEventElements || (b.mouseEventElements = []);
     var c = b.aa;
     a.l.b(b, c);
     b.mouseEventElements.push(c)
    }
   };
   a.l.b = function(a, b) {
    if (a) {
     var c = b || a.aa;
     c && d(c, a.zr)
    }
   };
   a.l.a = function(a, b) {
    if (a) {
     var c = b || a.aa;
     c && d(c, a.zr, "remove")
    }
   };
   a.l.f = function(b) {
    for (var c in w) w.hasOwnProperty(c) &&
     (b = w[c]) && (a.ag.g({
      type: "scooper"
     }, b), a.ag.i({
      type: "scooper"
     }, b), a.ag.h({
      type: "scooper"
     }, b), 1 < b.ar.length && b.ai !== t(b) && n(b, "scooper"))
   };
   a.l.c = function(b, c) {
    if (!c || !b || "number" === typeof c[H]) return !1;
    !b.hasIframeListener && c.tagName && "iframe" === c.tagName.toLowerCase() && (b.hasIframeListener = !0);
    !b.hasNonIframeListener && c.tagName && "iframe" !== c.tagName.toLowerCase() && (b.hasNonIframeListener = !0);
    c[H] = b.zr;
    a.l.b(b, c);
    b.mouseEventElements || (b.mouseEventElements = []);
    b.mouseEventElements.push(c);
    return b.proxyTrackingEnabled = !0
   };
   a.l.e = function(b) {
    a.b.forEach(b.mouseEventElements, function(c) {
     try {
      a.l.a(b, c), c[H] = null
     } catch (e) {}
    })
   }
  })(m);
  (function(a) {
   a.ax = {};
   a.ax.a = function(a, d) {
    var h;
    d.outerHTML ? h = d.outerHTML : (h = document.createElement("div"), h.appendChild(d.cloneNode(!0)), h = h.innerHTML);
    h = [/flashvars\s*=\s*(".*?"|'.*?')/i.exec(h), /name\s*=\s*["']flashvars["']\s*value\s*=\s*(".*?"|'.*?')/i.exec(h), /value\s*=\s*(".*?"|'.*?')\s*name\s*=\s*["']flashvars["']/i.exec(h), a];
    for (var f, g, e = {}, c = 0; c < h.length; c++) {
     if ((f = h[c]) && "object" ===
      typeof f && f[1]) f = f[1].replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/^"/g, "").replace(/"$/g, "").replace(/^'/g, "").replace(/'$/g, "");
     else if ("string" === typeof f) f = f.split("?")[1];
     else continue;
     if (f) {
      f = f.split("&");
      for (var b = 0; b < f.length; b++) g = f[b].split("="), 2 > g.length || "function" == g[0].slice(0, 8) || (e[g[0]] = [g[1]])
     }
    }
    return e
   }
  })(m);
  (function(a) {
   a.z = {};
   a.z.e = {};
   a.z.a = "divs";
   a.z.e.a || (a.z.a = "width", a.z.e.a = function(a) {
    return 1E3
   });
   a.z.c = function() {
    var k = a.d.g,
     d = a.d.r && k.document || document,
     h = d.documentElement,
     d = d.getElementsByTagName("body")[0];
    try {
     a.z.b = k && k.innerWidth || h && h.clientWidth || d && d.clientWidth
    } catch (f) {}
   };
   a.z.d = function(k, d, h) {
    if ("divs" == a.z.a) {
     if (k._Mt_wIC) return !0;
     if (k._Mt_wOC) return !1;
     var f = h.currentTarget,
      g = k;
     for (h = 0; 1E3 > h && !a.b.ai(d, g); h++) {
      if (g == f || null == g) return k._Mt_wOC = !0, !1;
      g = g.parentElement
     }
     return k._Mt_wIC = !0
    }
    if ("width" == a.z.a) {
     k = d / 2;
     f = a.z.b / 2;
     g = h.clientX;
     h = h.clientY;
     var e = a.d.g.scrollY || a.d.g.document.documentElement.scrollTop;
     return a.z.b > d && (g > f + k || g < f - k) || 90 > h + e ? !1 : !0
    }
    if ("ad-els" ===
     a.z.a) {
     if (k._Mt_wIC) return !0;
     if (k._Mt_wOC) return !1;
     f = h.currentTarget;
     g = k;
     for (h = 0; 1E3 > h; h++) {
      if (a.b.ai(d, g)) return k._Mt_wOC = !0, !1;
      if (g == f || null == g) break;
      g = g.parentElement
     }
     return k._Mt_wIC = !0
    }
   }
  })(m);
  (function(a) {
   function k(b) {
    var c = {
     window: 0,
     transparent: 1,
     opaque: 2,
     direct: 3,
     gpu: 4
    };
    if ("EMBED" === b.tagName) var e = a.b.getAttribute(b, "wmode");
    else if ("OBJECT" === b.tagName) {
     b = b.getElementsByTagName("param");
     for (var d = 0; d < b.length; d++) {
      var f = b[d],
       g = a.b.getAttribute(f, "name"),
       f = a.b.getAttribute(f, "value");
      if ("wmode" ===
       g) {
       e = f;
       break
      }
     }
    }
    return e && c[e.toLowerCase()] || 5
   }

   function d(b) {
    try {
     if (!b) return !1;
     var c = b,
      e;
     if ("DIV" === c.tagName || "A" === c.tagName)(c = b.getElementsByTagName("EMBED")[0]) || (c = b.getElementsByTagName("OBJECT")[0]), c || (c = b.getElementsByTagName("IMG")[0]), c || (c = b);
     1 === c.nodeType && "IMG" !== c.nodeName && "EMBED" !== c.nodeName && "OBJECT" !== c.nodeName && (c = b.getElementsByTagName("EMBED")[0] || b.getElementsByTagName("OBJECT")[0] || b.getElementsByTagName("IMG")[0] || b);
     if ("OBJECT" === c.tagName) {
      for (b = 0; b < c.children.length; b++)
       if ("movie" ===
        c.children[b].name || "Movie" === c.children[b].name) e = c.children[b].value;
      c.object && c.object.Movie ? e = c.object.Movie : c.data && -1 !== c.data.indexOf("swf") && (e = c.data)
     }
     "EMBED" !== c.tagName && "IMG" !== c.tagName || !c.src || (e = c.src);
     e || (e = a.b.aq(c));
     var d = a.ax.a(e, c);
     return {
      adURL: e,
      flashVars: d
     }
    } catch (f) {
     return !1
    }
   }

   function h(b) {
    var c = b.el,
     e = b.url,
     g = b.flashVars,
     h = b.adIds,
     t = b.opt_props;
    this.adContent = b.adContent;
    (new p).getTime();
    this.ao = h;
    this.FIND_AD_TRIES = h.numTries || 0;
    var v = d(c);
    if (v && v.adURL && g)
     for (var m in v.flashVars) v.flashVars.hasOwnProperty(m) &&
      (g[m] = v.flashVars[m]);
    v && v.flashVars && (g = v.flashVars);
    if ("string" !== typeof e || "div" === e.toLowerCase() || "a" === e.toLowerCase()) e = v && v.adURL || "-";
    e && 0 !== e.toLowerCase().indexOf("http:") && 0 !== e.toLowerCase().indexOf("https:") && ("//" === e.substring(0, 2) ? e = window.location.protocol + e : "/" === e[0] ? e = window.location.protocol + "//" + window.location.host + e : (v = window.location.pathname.split("/").slice(0, -1).join("/"), e = window.location.protocol + "//" + window.location.host + "/" + v + (v ? "/" : "") + e));
    "IFRAME" !== c.tagName && "IMG" !==
     c.tagName && -1 === e.indexOf("googlesyndication") && (e = e.split("?")[0]);
    this.zr = h.adNum;
    this.MMAK_ID = h.mmakAdKey ? h.mmakAdKey : "m" + this.zr;
    this.yg = a.b.co();
    !h.mmakAdKey && a.b.db() && (this.MMAK_ID += "_beta");
    this.TAGID = a.d.ba;
    a.v.h(this.yg, a.d.ay.a);
    w[this.zr] = this;
    a.e.j(this.zr, [c]);
    this.ae = e;
    this.aa = c;
    a.m.a.zaxs("adElementUpdate");
    this.WINDOW = e = a.b.ap(this.aa);
    this.isInIframe = e != e.parent;
    this.proxyTrackingEnabled = this.isSREMeasurable = !1;
    this.debugData = {
     version: "3",
     trueVisiblePercent: null,
     update: function(a) {
      this.trueVisiblePercent =
       a
     },
     getValue: function() {
      var a;
      a = "number" === typeof this.trueVisiblePercent ? r.round(100 * this.trueVisiblePercent) : "-";
      return this.version + ":" + a
     }
    };
    this.setDimensions = function() {
     var b;
     b = new a.y.k(c);
     this.INITIAL_WIDTH = parseInt(b.width);
     this.INITIAL_HEIGHT = parseInt(b.height)
    };
    this.setDimensions();
    "undefined" === typeof g && (g = {});
    a.v.l(ta);
    this.eg = [];
    this.ee = {};
    a.d.bi || !a.d.bh || t && t.IS_PAGE_LEVEL || (this.ed = {}, a.r.z(this));
    this.periscopeManager && this.periscopeManager.insertSuccessful || t && t.IS_PAGE_LEVEL || (this.ed = {}, a.r.z(this));
    a.ab.d.a(this);
    a.ab.e.a(this);
    a.an.b(this);
    this.get_width = function() {
     return h.initWidth ? h.initWidth : this.INITIAL_WIDTH ? this.INITIAL_WIDTH : !1
    };
    this.get_height = function() {
     return h.initHeight ? h.initHeight : this.INITIAL_HEIGHT ? this.INITIAL_HEIGHT : !1
    };
    this.getScreenRealEstate = function() {
     var b = a.d.x,
      c = a.d.y;
     if (a.n.a()) {
      var e;
      creativeWidth = (e = a.n.realEstateMeasurements) && e.w || 0;
      creativeHeight = e && e.h || 0
     } else creativeWidth = this.INITIAL_WIDTH, creativeHeight = this.INITIAL_HEIGHT;
     return b && c && creativeWidth &&
      creativeHeight ? r.max(0, r.min(1, creativeWidth * creativeHeight / (b * c))) : 0
    };
    a.t.h(this);
    this.ag = g;
    this.ai = 0;
    this.an = this.am = this.al = this.ak = this.aj = void 0;
    this.ar = [];
    this.as = [];
    this.at = [];
    this.av = this.au = a.ag.a.a.a;
    this.ax = a.ag.a.b.a;
    this.ay = a.ag.a.c.a;
    this.ba = this.az = a.ag.a.d.a;
    this.bb = a.ag.a.e.a;
    this.by = this.bx = this.bw = this.bv = this.bu = this.bt = this.bs = this.br = this.bq = this.bp = this.bo = this.bm = this.bl = this.bk = this.bi = this.bh = this.bg = this.bf = this.be = this.bd = this.bc = void 0;
    this.ca = this.bz = !1;
    this.cb = this.cu =
     this.ct = void 0;
    this.cc = +new p + 12E4;
    this.ci = +new p;
    this.cl = this.cm = void 0;
    this.cn = 0;
    this.ck = a.ag.a.f.a;
    this.cd = !1;
    this.cy = void 0;
    this.dt = !1;
    this.db = void 0;
    this.cf = this.ce = !1;
    this.af = Number(this.ef);
    this.eq = !1;
    this.ds = this.ch = this.dr = this.cg = 0;
    this.dq = this.bn = void 0;
    this.IR5 = {
     MIN: {
      x: void 0,
      y: void 0
     },
     MAX: {
      x: void 0,
      y: void 0
     },
     AREA: 0
    };
    this.dm = 0;
    this.ep = this.dd = !1;
    this.aq = {};
    this.aq.g = 0;
    this.aq[1] = 0;
    this.aq[2] = 0;
    this.aq[3] = 0;
    this.aq[13] = 0;
    this.aq[0] = 0;
    this.aq[4] = 0;
    this.aq[5] = 0;
    this.aq[6] = 0;
    this.aq[7] = 0;
    this.aq[9] = 0;
    this.aq[8] = 0;
    this.aq[15] = 0;
    this.aq[16] = 0;
    this.aq[21] = 0;
    this.aq[22] = 0;
    this.aq[23] = 0;
    this.aq[37] = 0;
    this.aq.tc = 0;
    this.es = [5, 10, 15, 30, 60];
    this.doa = [5, 10, 15, 30, 60];
    this.wasEverInView = this.isCurrentlyTransparent = this.isCurrentlyStacked = void 0;
    this.an = b.adType || b.opt_props && b.opt_props.adType || f(c);
    0 === this.an && (this.WMODE = k(c));
    a.b.bg(this.aa);
    b.opt_props && b.opt_props.components && (this.components = b.opt_props.components, this.isCompositeAd = !0);
    var q = !0;
    this.disableMeasurability = function() {
     q = !1
    };
    this.enableMeasurability = function() {
     q = !0
    };
    this.isMeasurabilityDisabled = function() {
     return !1 === q
    };
    this.viewabilityMethod = {};
    this.viewabilityPercent = {
     strict: "-",
     sframe: "-",
     pscope: "-"
    };
    this.isValidAdSize = function() {
     return a.b.be(this.aa)
    };
    a.m.a.zaxs("adInitialized", this);
    a.e.i(this)
   }

   function f(a) {
    return "IFRAME" === a.tagName ? 2 : "IMG" === a.tagName ? 1 : "EMBED" === a.tagName || "OBJECT" === a.tagName ? 0 : 3
   }

   function g(b, c) {
    for (var e = 0, d = c.length; e < d; e++) a.l.c(b, c[e])
   }
   var e = 0,
    c = !0;
   a.e = {};
   a.e.e = function(b, c, e, d, g, t,
    v) {
    t || a.f.aq(g);
    var m;
    m = 1 == arguments.length ? arguments[0] : {
     el: b,
     url: c,
     flashVars: d,
     adIds: g,
     opt_props: v
    };
    if (a.z.e.a && 1 == g.skin) {
     var q;
     q = a.z.e.a(b, g);
     m.adContent = q
    }
    if (t) {
     if ("function" === typeof t) return t(b, c, d, g);
     new p;
     t.em = !0;
     w[t.zr] = t;
     b[H] = t.zr;
     b[F] = !0;
     t.aa = b;
     a.m.a.zaxs("adElementUpdate");
     t.INITIAL_WIDTH = b.offsetWidth;
     t.INITIAL_HEIGHT = b.offsetHeight;
     t.ae = c;
     t.an = f(b);
     0 === t.an && (t.WMODE = k(b));
     t.ag = d || {};
     a.l.d(t);
     m = {
      e: 0
     };
     m.q = t.aq[0]++;
     a.u.a(t, m);
     a.m.a.zaxs("adLoaded", t);
     a.d.bi || !a.d.bh || v && v.IS_PAGE_LEVEL ||
      (t.periscopeManager && t.periscopeManager.killAllPixels(), t.periscopeConfig = !1, a.r.z(t));
     return t
    }
    return w[g.adNum] ? w[g.adNum] : new h(m)
   };
   a.e.i = function(b) {
    b.de = isNaN(b.ao.startTime) ? +new p : b.ao.startTime;
    b.RAND = b.ao.rand;
    (new p).getTime();
    a.d.d() && a.p.j(b);
    a.d.j() && a.s.i(b);
    a.aa.f(b);
    a.d.e || a.aj.b.a();
    a.l.d(b);
    a.au.m("newad", b.zr);
    b.aa.parentNode && "swiffycontainer" === b.aa.parentNode.id && a.av.b(["..../../iframe ~ #clicktag"], b, b.aa.parentNode);
    a.m.a.zaxs("startAdTracking", b);
    b.dd = !0;
    a.d.el(b);
    var c = {
     e: 0
    };
    c.q = b.aq[0]++;
    a.u.a(b, c);
    a.m.a.zaxs("adLoaded", b)
   };
   a.e.b = function() {
    var b, c;
    for (c in w) w.hasOwnProperty(c) && (b = w[c]) && !b.ep && a.t.a(b)
   };
   a.e.d = function(b) {
    var c = +new p,
     e = c - b.ci;
    if (0 < b.doa.length) {
     var d = 1E3 * b.doa[0];
     if (b.counters.laxDwell.tCur >= d) {
      b.doa.shift();
      var f = b.es.length ? b.es[0] : 60;
      if (d < f) return !1;
      if (5E3 < e) return !0
     }
    }
    return 0 < b.es.length && (f = 1E3 * b.es[0], a.aa.m(b, f)) ? (b.es.shift(), !0) : 0 === b.doa.length && c > b.cc ? (b.cc *= 2, !0) : !1
   };
   a.e.j = function(a, c) {
    for (var e = 0; e < c.length; e++) {
     var d = c[e];
     d[H] =
      a;
     d[F] = !0
    }
   };
   a.e.k = function(b, c) {
    a.b.a(c.cc);
    a.e.l(c);
    a.e.a(c, 1) && a.m.a.sxaz("adKilled", {
     id: b
    })
   };
   a.e.m = function(b, c) {
    a.e.a(c) && a.m.a.sxaz("adNotFound", {
     id: b
    })
   };
   a.e.a = function(b, c) {
    var e = 0,
     d;
    for (d in w) w.hasOwnProperty && w.hasOwnProperty(d) && e++;
    return e <= (c || 0) ? (a.m.a.esgf("allLocalAdsKilled"), !0) : !1
   };
   a.e.n = function(a) {
    a.ep = !0;
    delete w[a.zr];
    try {
     a.aa && (a.aa[F] = null, a.aa[H] = null, a.aa = null)
    } catch (c) {}
    a.groupmV2 = null;
    a.groupmV3 = null;
    a.periscopeManager = null;
    a.secondaryCounters = null;
    a.mouseEventElements =
     null;
    a.publicis = null
   };
   a.e.l = function(b) {
    if (b && b.video && !b.video.started) return !1;
    var c = {
     e: 21
    };
    c.q = b.aq[21]++;
    a.ay.a && a.ay.b && (c.yco = a.ay.a.YCoord.join("a"), c.yt = a.ay.a.time.join("a"), c.xco = a.ay.b.XCoord.join("a"), c.xt = a.ay.b.time.join("a"));
    a.az && a.az.a && a.az.a(b);
    a.u.a(b, c);
    b.unloadPixelSent = !0
   };
   a.e.o = function(a) {
    return a && a.video
   };
   a.m.a.azsx("adKilled", a.e.k, {
    includeId: !0
   });
   a.m.a.azsx("adNotFound", a.e.m, {
    includeId: !0
   });
   a.e.p = g;
   a.e.q = function(b, c, e, d, f, h, k, m) {
    var q = {
     area: 0
    };
    a.b.forEach(b, function(b) {
     var c =
      new a.y.k(b);
     c.area = c.height * c.width;
     c && c.area >= q.area && (q = b, q.area = c.area)
    });
    if (c = a.e.e(q, c, e, d, f, h, k)) return c.isMultipartAd = !0, c.multipartComponents = b, a.b.f(m) && m.length === b.length ? g(c, m) : g(c, b), f.adFindingMethod = "MULTIPART_ADS", c
   };
   a.e.r = function(b, c, e, d, f, h, k, m) {
    k = k || {};
    k.components = b;
    if (c = a.e.e(b[0], c, e, d, f, h, k)) return c.isCompositeAd = !0, c.components = b, a.b.f(m) && m.length === b.length ? g(c, m) : g(c, b), f.adFindingMethod = "COMPOSITE_ADS", c
   };
   a.e.g = function(a) {
    "number" === typeof a && (e = a)
   };
   a.e.s = function() {
    return e
   };
   a.e.f = function() {
    c = !1
   };
   a.e.h = function() {
    c = !0
   };
   a.e.c = function() {
    return !1 === c
   }
  })(m);
  (function(a) {
   function k(a) {
    var b = [];
    if ("string" !== typeof a) return !1;
    for (var d, f = !1, h = /(.*?[^\\])(?:\\\\)*\//; a;) {
     if (g(a, ".../")) d = ".../";
     else if (g(a, "...../")) d = "...../";
     else if (g(a, "../") || g(a, "..../")) {
      d = g(a, "../") ? "../" : "..../";
      for (var k = d.length; g(a.substring(k), d);) k += d.length;
      d = a.substring(0, k)
     } else g(a, "=>/") ? d = "=>/" : g(a, "-/") ? d = "-/" : g(a, "+/") ? d = "+/" : g(a, "$[") ? (d = a.length, k = e(a, "]/") + 2, d = a.substring(0, r.min(d,
      k))) : g(a, "^/") ? d = "^/" : g(a, "IN_IFRAME/") ? d = "IN_IFRAME/" : g(a, "IN_X_FRAME/") ? d = "IN_X_FRAME/" : (g(a, "${") ? (d = a.length, k = e(a, "}/") + 2, d = a.substring(0, r.min(d, k))) : d = (f = h.exec(a)) && f[0] ? f[0] : a, f = !0);
     (a = a.substring(d.length)) && f && (d = d.substring(0, d.length - 1), f = !1);
     b.push(d)
    }
    return b
   }

   function d(c) {
    if (!c) return !1;
    if (!a.d.l || 10 < a.b.n() || c.querySelectorAll && c.querySelector && (!c.MoatQSShimSet || c[f])) return !0;
    c.querySelector = function(a) {
     a = this.querySelectorAll(a);
     return a.length ? a[0] : null
    };
    c.querySelectorAll = function(a) {
     var c = [],
      e = this.ownerDocument || document,
      d = e.createElement("style");
     (e = e.getElementsByTagName("head")[0]) && e.insertBefore(d, e.childNodes[r.max(e.childNodes.length - 1, 0)] || null);
     d && d.styleSheet && (d.styleSheet.cssText = a + "{shimtest:bar}");
     a = this.getElementsByTagName("*");
     for (var e = a.length, f = 0; f < e; f++) a[f].currentStyle && "bar" === a[f].currentStyle.shimtest && (c[c.length] = a[f]);
     d.parentNode.removeChild(d);
     return c
    };
    c.MoatQSShimSet = !0;
    return c[f] = !0
   }

   function h(c, b, e) {
    function f(a) {
     if (v && 0 < v.length)
      for (var b = v.length,
        c = 0; c < b; c++) a = a.replace("$" + c, v[c]);
     return a
    }
    var h = function(b, c) {
     if (!b || !c) return !1;
     if (b.matches) return b.matches(c);
     if (!d(b.parentNode)) return !1;
     var e = b.parentNode.querySelectorAll(c);
     if (!e || !e.length) return !1;
     var f = !1;
     a.b.forEach(e, function(a) {
      a === b && (f = !0);
      return !f
     });
     return f
    };
    c = k(c);
    if (!c) return !1;
    for (var n = b, t = 0, v = [], m = function(b) {
      return b && a.k.b(b)
     }, q = function(a) {
      return a && a.parentElement
     }, r = function(b) {
      return b ? (b = a.k.e(b)) && b.body : !1
     }, p = function(a, b, c) {
      return a ? (a = a.getAttribute(b)) && (c = (new RegExp(c)).exec(a)) &&
       c.length && 0 < c.length ? c[c.length - 1] : !1 : !1
     }, B = 0; B < c.length && 100 > t; B++) {
     var y = c[B];
     g(y, "${") && (y = y.substring(2, y.length - 1));
     if (g(y, "../") || g(y, "..../")) {
      var C, D;
      g(y, "../") ? (C = "../", D = q) : (C = "..../", D = m);
      if (0 !== y.length % C.length) return !1;
      for (var L = 0; L < y.length / C.length; L++) {
       if (!n || "HTML" === n.nodeName) return !1;
       n = D(n);
       t++
      }
     } else if (".../" === y)
      for (y = c[B + 1] && f(c[B + 1]); 100 > t;) {
       if (n && h(n, y)) {
        B++;
        break
       }
       if (!n || "HTML" === n.nodeName) return !1;
       n = n.parentElement;
       t++
      } else if ("...../" === y) {
       n = a.d.g && a.d.g.document && a.d.g.document.body;
       if (!n) return !1;
       t++
      } else if ("=>/" === y) {
      n = r(n);
      if (!n) return !1;
      t++
     } else if ("-/" === y) {
      n = a.b.previousElementSibling(n);
      if (!n) return !1;
      t++
     } else if ("+/" === y) {
      if (n = a.b.nextElementSibling(n), !n) return !1
     } else if (g(y, "$["))
      if (y = (C = (y = y.substring(2, y.length - 2)) && y.split("|")) && C[0], C = C && C[1], y && C)
       if (y = p(n, y, C)) v.push(y), t++;
       else return !1;
     else return !1;
     else if ("^/" === y) {
      n = b;
      if (!n) return !1;
      t++
     } else if ("IN_IFRAME/" === y) {
      if (!a.d.q) return !1;
      t++
     } else if ("IN_X_FRAME/" === y) {
      if (!a.d.fd) return !1;
      t++
     } else if (y = f(y), !h(n,
       y)) {
      if (!d(n)) return !1;
      n = n.querySelectorAll(y);
      if (e && B === c.length - 1) return n ? n : !1;
      if (!n || 1 !== n.length) return !1;
      n = n[0]
     }
    }
    return n
   }
   a.av = {};
   var f = "MoatQSShimOrd_" + M + "_" + a.d.bg,
    g = function(a, b) {
     return 0 === a.indexOf(b) && b
    },
    e = function(a, b) {
     var e = a.indexOf(b);
     return 0 > e ? a.length + 1 : e
    };
   a.av.a = function(c, b) {
    var e = [];
    a.b.forEach(c, function(a) {
     (a = h(a, b)) && e.push(a)
    });
    return e
   };
   a.av.c = function(c, b) {
    var e = [];
    a.b.forEach(c, function(a) {
     if (a = h(a, b, !0))
      for (var c = 0; c < a.length; c++) e.push(a[c])
    });
    return e
   };
   a.av.b = function(c,
    b, e) {
    c = a.av.a(c, e);
    a.b.forEach(c, function(c) {
     a.l.c(b, c)
    });
    return !!c
   }
  })(m);
  (function(a) {
   function k(b, c, e, f, g, l) {
    l || (l = window);
    a.aw.d = b;
    var k = a.aw.f,
     u = a.aw.g,
     n = a.aw.h,
     v = 0,
     t = function() {
      var g;
      c.numTries = v++;
      if (a.d.fe && a.aw.e(t, null, c) || a.d.ff && a.aw.e(t, null, c)) return !0;
      if (!g) try {
       u && (g = u(b, c, e, f, null, l))
      } catch (n) {}
      if (!g && (g = k(b, c, e, f, null, l), !0 === g)) return !0;
      if (a.d.j() && a.d.cs() && !g) {
       var m = {
         area: 5E3,
         height: 40,
         width: 40
        },
        x = a.d.ee && a.d.ee("appName"),
        q = a.d.ee && a.d.ee("namespace");
       "NFL Mobile" === x && "NFL" ===
        q && (m.height = 25);
       d(m) && (g = h(c)) && (c.adFindingMethod = "Appscope Body")
      }
      a.d.d() && !g && (m = {
       area: 5E3,
       height: 40,
       width: 40
      }, "com.nfl.mobile3.enterprise" === (a.d.bf && a.d.bf("ya")) && (m.height = 25), d(m) && (g = h(c)) && (c.adFindingMethod = "Omid Body"));
      g && a.au.o(g);
      Y && c && (c.adFindingMethod = c.adFindingMethod ? c.adFindingMethod + (" | " + Y) : Y);
      return g && g !== a.au.i
     };
    if (a.d.e) {
     var m, x;
     c && (m = "skin" in c && 1 == c.skin, x = "format" in c && "Wallpaper" == c.format);
     if (m || x) "width" == a.z.a && a.z.c(), a.d.fg = !0, c.skin = 1, m ? (c.isSkin = 1, c.adFindingMethod =
      "skin1") : x && (c.isAolSkin = 1, c.adFindingMethod = "AOL Skin"), a.r && (a.r.n = function() {
      return !1
     }), t = function() {
      var b, d = a.d.g.document.body;
      c.numTries = v++;
      if (a.z.e.a(d, c)) return d && a.b.bd(d) && (b = a.b.aq(d), b = a.e.e(d, b || d.nodeName, !1, void 0, c, e)), b && !0
     }
    }
    a.o.k(t, n, 500, g)
   }

   function d(b) {
    var c = a.d.g.innerWidth,
     e = a.d.g.innerHeight,
     d = e >= b.height,
     f = c >= b.width;
    return c * e >= b.area && d && f
   }

   function h(b) {
    if (1 !== a.d.an().isInApp) return !1;
    var c = a.d.g;
    if ((c = (c = c && c.document) && c.body) && "undefined" == typeof c.MOATALREADYFOUND) return a.e.e(c,
     "BODY", !1, void 0, b, !1)
   }

   function f(b, c, e, d, f) {
    var g, h, l, k = a.d.g.document.getElementById("eyeDiv");
    if (G && G.id && 0 <= G.id.indexOf("ebebDnlScript")) {
     var u = G.id.split("_");
     u && 3 === u.length && (l = u[1], g = u[2])
    }
    l = l || f.ebAdID;
    g = g || f.ebRand;
    l && g && (h = l + "_" + g);
    if (h && "object" === typeof f.ebAds && f.ebAds[h] && (g = f.ebAds[h].visibilityMgr && f.ebAds[h].visibilityMgr._res) && a.b.bd(g) && (g = a.e.e(g, g.nodeName, !1, void 0, c, e))) return c.adFindingMethod = "SIZMEKADS", g;
    if (l && f.gEbBanners && a.b.d(f.gEbBanners)) {
     var n = !1;
     a.b.forEach(f.gEbBanners,
      function(a) {
       if (a && a.adData && a.adData.nAdID == l) return n = a, !1
      });
     if (n && (f = n.displayUnit && n.displayUnit.defaultPanel && n.displayUnit.defaultPanel.panelDiv) && f.nodeName && "div" == f.nodeName.toLowerCase() && (g = m(f, c, e, d))) return c.adFindingMethod = "SIZMEKADS banner", g
    }
    f = b.getElementsByTagName("div");
    f = a.b.bq(f);
    "DIV" === b.nodeName && f.push(b);
    if (f && 0 < f.length) {
     var v = [];
     a.b.forEach(f, function(a) {
      a && a.id && a.id.match(/ebDiv\d+/) && v.push(a)
     });
     if (v && 0 < v.length && a.d.g && a.d.g.document) {
      var t;
      a.b.forEach(v, function(b) {
       var c =
        a.d.g.document.getElementById(b.id);
       if (c && c !== b) return t = c, !1
      });
      if (t) {
       if (g = m(t, c, e, d)) return g;
       if (t && a.b.bd(t) && d(t)) {
        if (g = a.e.e(t, t.nodeName, !1, void 0, c, e)) return c.adFindingMethod = "SIZMEKADS adDvi", g
       } else {
        b = t.getElementsByTagName("iframe");
        f = t.id.split("ebDiv")[1];
        var x = new RegExp("ebBannerIFrame_\\d+_" + f),
         q;
        if (b && 0 < b.length && (a.b.forEach(b, function(b) {
          if (b && b.id && b.id.match(x) && a.b.bd(b)) return q = b, !1
         }), q && d(q) && (g = a.e.e(q, q.nodeName, !1, void 0, c, e)))) return c.adFindingMethod = "SIZMEKADS banner iframe",
         g
       }
      }
     }
    }
    if (h && k) {
     d = [];
     b = a.av.a(["iframe[id*='header_iframe_" + h + "']"], k)[0];
     f = a.av.a(["iframe[id*='leftgutter_iframe_" + h + "']"], k)[0];
     g = a.av.a(["iframe[id*='rightgutter_iframe_" + h + "']"], k)[0];
     if (b)
      if (a.b.bd(b)) d.push(b);
      else return !1;
     if (f)
      if (a.b.bd(f)) d.push(f);
      else return !1;
     if (g)
      if (a.b.bd(g)) d.push(g);
      else return !1;
     if (d && 0 < d.length && (g = a.e.r(d, d[0].nodeName, !1, void 0, c, e))) return c.adFindingMethod = "SIZMEKADS-1", g;
     (d = a.av.a(["div[id*='" + h + "']"], k)[0]) || (d = a.av.a(["div[id^='eb'][id*='" + h + "']"], k)[0]);
     if (d) {
      if (g =
       m(d, c, e)) return g;
      if (a.b.bd(d) && (g = a.e.e(d, d.nodeName, !1, void 0, c, e))) return c.adFindingMethod = "SIZMEKADS-2", g
     }
    }
    if ("string" === typeof h && (h = document.getElementById("ebDefaultImg_" + h)) && (g = a.e.e(h, h.nodeName, !1, void 0, c, e))) return c.adFindingMethod = "SIZMEKADS-3", g
   }

   function g(b, c, e, d, f) {
    function g(b) {
     return b ? a.av.a(["div.jpstage"], b)[0] || !1 : !1
    }
    var h = g(b),
     l = a.d.g.document;
    d && !h && (h = a.av.a(["..../../div.jpplatform_" + d, "...../div[id='jpplatform_" + d + "']", "...../div.jpplatform_" + d], b)[0]);
    h || (h = g(l.getElementById("jpsuperheader")));
    h || (h = g(a.b.getElementsByClassName("jpeditorialunit", "DIV", l.body)[0]));
    h || (h = g(l.getElementById("jpd_adhesion")));
    h || (b = (b = l.getElementById("jp_overlay") || d && l.getElementById("jp_overlay_" + d)) && a.b.getElementsByClassName("jppanel", "DIV", b)) && 1 <= b.length && a.b.forEach(b, function(b) {
     if (b && a.b.bd(b)) return h = b, !1
    });
    h || (l = l.getElementById("jpd_expfooter"), h = g(l));
    if (h && a.b.bd(h) && f(h) && (ad = a.e.e(h, h.nodeName, !1, void 0, c, e))) return c.adFindingMethod = "JETPACKDIGITALADS", ad
   }

   function e(b, c, e, d) {
    if ((b = a.b.getElementsByClassName("originplatform-ad",
      "SCRIPT", a.d.r ? b.ownerDocument && b.ownerDocument.documentElement || b : b)[0]) && b.id && (b = b.id.match(/embed_origin_(\d+)/)) && b[1] && (b = "OriginPlatformAdUnit-" + b[1] + "-inpage", b = document.getElementById(b) || a.d.r && a.d.g.document.getElementById(b)) && (e = a.e.e(b, b.nodeName, !1, void 0, c, e))) return c.adFindingMethod = "ORIGINADS", e
   }

   function c(b, c, e, d) {
    var f, g, h, l = b.childNodes,
     k = !1;
    for (f = l.length - 1; 0 <= f; f--) {
     var u = l[f];
     "#comment" === u.nodeName && /undertone/i.test(u.nodeValue) ? k = !0 : "STYLE" === u.nodeName && (u = u.innerHTML.match(/(utpga\d+).+/i)) &&
      2 === u.length && (h = u[1])
    }
    if (k) {
     f = a.d.r ? (f = a.k.g(b)) && f.ownerDocument ? f.ownerDocument : document : document;
     h && (g = f.getElementById(h), !g && a.d.r && (g = document.getElementsById(h)));
     g || (h = f.getElementsByTagName("div"), a.b.forEach(h, function(a) {
      if (a && a.id && a.id.match("utpga")) return g = a, !1
     }), !g && a.d.r && (h = document.getElementsByTagName("div"), a.b.forEach(h, function(a) {
      if (a && a.id && a.id.match("utpga")) return g = a, !1
     })));
     if (g) {
      if (h = m(g, c, e, d)) return h;
      if (a.b.bd(g) && d(g) && (h = a.e.e(g, g.nodeName, !1, void 0, c, e))) return c.adFindingMethod =
       "UNDERTONE pageGrabberDiv", h
     }
     if ((h = document.getElementById("utbanner") || a.d.r && a.d.g.document.getElementById("utbanner")) && (h = a.k.e(h)) && h.body && (h = m(h.body, c, e, d))) return c.adFindingMethod = "UNDERTONE fullPageAdIframe", h;
     if ((h = a.b.getElementsByClassName("ut_container", "DIV")[0] || a.d.r && a.b.getElementsByClassName("ut_container", "DIV", a.d.g.document)[0]) && a.b.bd(h) && d(h)) return h = a.e.e(h, h.nodeName, !1, void 0, c, e, {
      adType: 2
     }), c.adFindingMethod = "UNDERTONE screenshift", h;
     if (e = document.getElementById("eyeDiv") ||
      a.d.r && a.d.g.document.getElementById("eyeDiv"))
      for (e = e.getElementsByTagName("object"), f = 0; f < e.length; f++)
       if (h = e[f], "fixed" == h.style.position && a.b.bd(h) && d(h)) return h = a.e.e({
        el: h,
        adIds: c
       }), c.adFindingMethod = "UNDERTONE slider", h
    }
   }

   function b(b, c, e, d, f) {
    if ((b = c.tlview_id || c.tlviewID) && (b = document.getElementById(b) || a.d.g.document.getElementById(b)) && a.b.bd(b) && (c = a.e.e(b, b.nodeName, !1, void 0, c, e))) return c
   }

   function l(b, c, e, d, f) {
    if (b = a.aw.k(["[tleid]"], b, c, e)) return b
   }

   function u(b, c, e, d, f) {
    if (f._tlCreatives &&
     1 === f._tlCreatives.length && f._tlCreatives[0].hook && (c = (b = f._tlCreatives[0].hook) && a.aw.k(["-/[tleid]"], b, c, e))) return c
   }

   function x(b, c, e, d, f, g) {
    var h, l, k, u, n = [];
    if (h = d ? d : g.Adform && g.Adform.ADFBannerData && "string" === typeof g.Adform.ADFBannerData.BN && g.Adform.ADFBannerData.BN) {
     if (d = (b = g.Adform && g.Adform.adRegister) && b[h]) k = d.collapsedContent && d.collapsedContent._element, u = d.expandedContent && d.expandedContent._element, l = d.adBox && d.adBox._attributes && d.adBox._attributes.element;
     l || a.b.forEach(g.Adform &&
      g.Adform.adData,
      function(a) {
       if (l = a && a.bn && a.bn == h && a.container) return !1
      });
     if (k && u && (a.b.bd(k) || a.b.bd(u)) && (g = a.e.e(k, k.nodeName, !1, void 0, c, e, {
       adType: 2
      }))) return c.adFindingMethod = "ADFORMADS two-element expandable", g.adformCollapsedEl = k, g.adformExpandedEl = u, g;
     if (u && a.b.bd(u) && (g = a.e.e(u, u.nodeName, !1, void 0, c, e, {
       adType: 2
      }))) return c.adFindingMethod = "ADFORMADS Single-element expandable", g;
     if (l && a.b.bd(l)) {
      b && a.b.forEach(b, function(b, c) {
       if (c && c.indexOf && -1 < c.indexOf(h + "#")) {
        var e = b && b.adBox && b.adBox._attributes &&
         b.adBox._attributes.element;
        e && e !== l && a.b.bd(e) && n.push(e)
       }
      });
      if (0 < n.length && (n.unshift(l), g = a.e.r(n, n[0].nodeName, !1, void 0, c, e, {
        adType: 2
       }))) return c.adFindingMethod = "ADFORMADS composite", g;
      if (g = a.e.e(l, l.nodeName, !1, void 0, c, e, {
        adType: 2
       })) return c.adFindingMethod = "ADFORMADS-1", g
     }
    }
   }

   function n(b, c, e, d, f, g) {
    if (f && g && (ad = a.aw.k(["div[id='ym_" + f + "'] > iframe/=>/div[id='" + g + "']"], b, c, e))) return c.adFindingMethod = "YIELDMOADS", ad;
    if (ad = a.aw.k(["..../iframe[id$='_tpi']/$[id|([0-9]*)_tpi]/../[id='$0']", "..../iframe[id$='_tpi']/../div.ym/$[data-lf-id|([0-9]+)]/iframe/=>/[id='$0']"],
      b, c, e)) return c.adFindingMethod = "YIELDMOADS-1", ad;
    if (ad = a.aw.k(["div.ym/iframe/=>/body/video.video-elem"], b, c, e)) return c.adFindingMethod = "YIELDMOADS-2", ad;
    if (ad = a.aw.k(["div.ym"], b, c, e)) return c.adFindingMethod = "YIELDMOADS-3", ad
   }

   function t(b, c, e, d) {
    var f = function(a, b) {
      return a && a.moatObject && a.moatObject[b]
     },
     g = function(b) {
      return a.av.a(["div.moat_trackable"], b)[0]
     },
     h = function(b) {
      return (b = (b = a.k.e(b)) && b.documentElement) && g(b)
     },
     l = function(b) {
      var c;
      b = a.aw.a(b, a.aw.b);
      a.b.forEach(b, function(a) {
       if (c =
        h(a)) return !1
      });
      return c
     },
     k = function() {
      var b = f(u, "adElement");
      if (b !== n)
       if (a.b.bd(b)) {
        var e = t;
        n = b;
        n[H] = c.adNum;
        n[F] = !0;
        a.b.bf(n, e, !0);
        (b = f(u, "adProxyElement")) && a.l.c(t, b)
       } else a.b.be(n) || (b = n, a.t.a(t), u.removeEventListener("adLoaded", k), b[H] = void 0, b[F] = void 0, aa())
     };
    d = function(b) {
     if (b) {
      var d = f(u, "creativeType"),
       g = f(u, "adProxyElement");
      switch (d) {
       case "banner":
        if (a.b.bd(b)) var h = a.e.e(b, b.nodeName, !1, void 0, c, e);
        g && a.e.p(h, [g]);
        c.adFindingMethod = "Creative API - Banner";
        return h;
       case "multipart":
        return h =
         a.e.q(b, "DIV", !1, void 0, c, e, null, g), c.adFindingMethod = "Creative API - Multipart", h;
       case "composite":
        return h = a.e.r(b, "DIV", !1, void 0, c, e, null, g), c.adFindingMethod = "Creative API - Composite", h;
       case "expandable":
        return a.b.bd(b) && (h = a.e.e(b, b.nodeName, !1, void 0, c, e), g && a.e.p(h, [g]), u.addEventListener("adLoaded", k)), c.adFindingMethod = "Creative API - Expandable", h
      }
     }
    };
    var u = function(b) {
     if (a.d.fe) return a.d.fe;
     var c = g(b);
     c || (c = l(b));
     c || (a.d.q ? (c = a.k.b(b), c = h(c)) : c = void 0);
     if (!c) a: {
      if (a.d.r && (b = a.k.g(b))) {
       var c =
        a.b.ap(b) === a.d.g,
        e = a.d.e && "BODY" === b.nodeName;
       if (!c || !e) {
        c = g(b);
        break a
       }
      }
      c = void 0
     }
     c && (a.d.fe = c);
     return c
    }(b);
    if (u) {
     if (!f(u, "adLoaded")) return !1;
     var n = f(u, "adElement");
     if (!n) return !1;
     var t = d(n);
     return t ? t : !1
    }
   }

   function v(b, c, e, d) {
    var f = function(b) {
     return a.av.a(["div.celtra-ad-v3", "div.celtra-ad-v4"], b)[0]
    };
    d = function(b, c) {
     var e, d = a.aw.a(b, a.aw.b);
     a.b.forEach(d, function(b) {
      if (b.offsetWidth * b.offsetHeight === c) return e = a.k.e(b).body, !1
     });
     return e ? e : !1
    };
    var g = function() {
      var c, e = a.aw.a(b, a.aw.b);
      a.b.forEach(e,
       function(b) {
        if ((b = (b = a.k.e(b)) && b.documentElement) && f(b)) return c = f(b), !1
       });
      return c
     },
     h = function() {
      if (a.d.r) {
       var c = a.k.g(b);
       if (c) {
        var e = a.b.ap(c) === a.d.g,
         d = a.d.e && "BODY" === c.nodeName;
        e && d || (celtraDiviInParentFrame = f(c))
       }
      }
     },
     l;
    a.d.ff ? l = a.d.ff : ((l = f(b)) || (l = g()), l || (l = h()));
    var k;
    l && (k = l && l.celtra && l.celtra.viewabilityObservee);
    if (k && a.b.bd(k)) return c.adFindingMethod = "Celtra API", c = a.e.e(k, k.nodeName, !1, void 0, c, e), e = a.b.cb(c), (k = d(k, e)) && a.l.c(c, k), c;
    l && !k && (a.d.ff = l);
    return !1
   }

   function m(b, c, e, d) {
    d =
     d || function() {
      return !0
     };
    if (!b) return !1;
    var f = v(b, c, e, d);
    if (f) return f;
    if (a.d.ff) return !1;
    if ((f = (f = a.av.a(["div.voxAdData"], b)[0]) && f.elementToTrack) && a.b.bd(f)) return c.adFindingMethod = "Vox API", a.e.e(f, f.nodeName, !1, void 0, c, e);
    var f = a.b.n(),
     g = null !== f && 11 > f;
    if (!g)
     for (var h = b.getElementsByTagName("embed"), f = 0; f < h.length; f++) {
      var l = h[f];
      if (!0 !== l[F] && -1 === l.id.indexOf("moatPx") && a.b.bd(l) && l.getAttribute("src") && d(l)) {
       var k = l.getAttribute("src");
       d = a.ax.a(k, l);
       f = a.e.e(l, k, !1, d, c, e);
       c.adFindingMethod =
        "AOL-1";
       return f
      }
     }
    for (var u = b.getElementsByTagName("object"), f = 0; f < u.length; f++)
     if (h = u[f], a.b.bd(h) && d(h) && ("undefined" === typeof h[F] || !0 !== h[F]) && -1 == h.id.indexOf("moatPx")) {
      for (var n = 0; n < h.children.length; n++)
       if ("movie" === h.children[n].name || "Movie" === h.children[n].name)
        if (k = h.children[n].value, !k || !k.match("scorecardresearch"))
         for (var t = 0; t < h.children.length; t++) {
          if (!g && "EMBED" === h.children[t].tagName) {
           l = h.children[t];
           if ("undefined" !== typeof l[F] && !0 === l[F] || -1 != l.id.indexOf("moatPx")) continue;
           if (a.b.bd(l) && d(l)) return d = a.ax.a(k, l), f = a.e.e(l, k, !1, d, c, e), c.adFindingMethod = "AOL Embed", f
          }
          if ("OBJECT" === h.children[t].tagName && (l = h.children[t], a.b.bd(l) && !0 !== l[F] && -1 === l.id.indexOf("moatPx") && d(l))) return f = a.e.e(l, void 0, !1, void 0, c, e), c.adFindingMethod = "AOL Object", f
         }
      h.object && h.object.Movie ? k = h.object.Movie : h.data && (k = h.data);
      if (!k || !k.match("scorecardresearch")) return d = a.ax.a(k, h), f = a.e.e(h, k, !1, d, c, e), c.adFindingMethod = "SWF ads", f
     } if (f = a.aw.m(b, c, e, d)) return f;
    k = b.getElementsByTagName("img");
    for (f = 0; f < k.length; f++)
     if (g = k[f], ("undefined" === typeof g[F] || !0 !== g[F]) && a.b.bd(g) && (l = g.getAttribute("src")) && "" !== l && -1 === document.location.href.indexOf(l) && d(g)) return e = a.e.e(g, l, !1, void 0, c, e), c.adFindingMethod = "Standard Image Ad finding ", e;
    if (b = (k = b.getElementsByTagName("canvas")) && k[0]) {
     if (1 === k.length && a.b.bd(b)) return e = a.e.e(b, b.nodeName, !1, void 0, c, e), c.adFindingMethod = "AKQAGAPGEN Canvas", e;
     if (1 < k.length) {
      if (d(b.parentNode) && a.b.bd(b.parentNode)) return e = a.e.e(b.parentNode, b.parentNode.nodeName,
       !1, void 0, c, e), c.adFindingMethod = "AKQAGAPGEN-1", e;
      if (a.b.bd(b) && (e = a.e.e(b, b.nodeName, !1, void 0, c, e))) return a.d.q ? a.av.b([".../body"], e, b) : a.av.b(["../div"], e, b), c.adFindingMethod = "AKQAGAPGEN-2", e
     }
    }
    return !1
   }

   function q(b, c) {
    for (var e = [], d = a.b.d(b) ? b : b.getElementsByTagName("iframe"), f, g = 0; g < d.length; g++)
     if (f = d[g], !f[F]) {
      var h = a.k.e(f) ? !1 : !0;
      (1 === c && h && a.b.bd(f) || 2 === c && !h) && e.push(f)
     } return e
   }
   a.aw = {};
   a.aw.d = void 0;
   a.aw.e = function(b, c, e) {
    return a.d.av.adFindingTimeout ? (a.b.a(a.d.av.adFindingTimeout),
     a.d.av.adFindingTimeout = null, c || (c = function() {
      a.u.b(11, e)
     }), a.o.k(b, 9999, 500, c), !0) : !1
   };
   a.aw.c = function() {
    var b = arguments;
    a.focus.pageIsPrerendered() ? a.m.a.azsx("noLongerPreRendered", function(a) {
     k.apply(this, b)
    }, {
     once: !0
    }) : k.apply(this, b)
   };
   a.aw.m = function(b, c, e, d) {
    d = d || function() {
     return !0
    };
    b = q(b, 1);
    if (b[0] && a.b.bd(b[0]) && d(b[0])) return e = a.e.e(b[0], b[0].src, !1, void 0, c, e), c.adFindingMethod = "findIframeAds", e
   };
   a.aw.l = function(b, c, e, d, f) {
    var g, h;
    b = a.aw.a(d || b, a.aw.b);
    for (d = 0; d < b.length; d++) {
     h = b[d];
     var l =
      a.k.e(h);
     if (l && l.documentElement) {
      a: {
       g = c;
       var k = e;
       if (h.id && h.id.match("ebBannerIFrame") && a.b.bd(h) && (k = a.e.e(h, h.nodeName, !1, void 0, g, k))) {
        g.adFindingMethod = "sizmek banner iframe";
        g = k;
        break a
       }
       g = void 0
      }
      if (g) return g;a: {
       g = c;k = e;h = l;
       var u = f && f.Adform && f.Adform.BannerData && "string" == typeof f.Adform.BannerData.ADFban && f.Adform.BannerData.ADFban,
        n = !1,
        t = void 0;
       try {
        t = h && (h.defaultView || h.parentWindow)
       } catch (v) {}
       u && t && (frameAdformBannerId = t._Adform && t._Adform.BannerData && t._Adform.BannerData.ADFban, u == frameAdformBannerId &&
        (n = h.getElementById("banner") || h.getElementById("video")));
       if (n && a.b.bd(n) && (ad = a.e.e(n, n.nodeName, !1, void 0, g, k))) {
        g.adFindingMethod = "ADFORMADS iframe check";
        g = ad;
        break a
       }
       g = void 0
      }
      if (g) return g;
      if (g = a.aw.k(["[id='ad']"], l.documentElement, c, e)) return c.adFindingMethod = "ad",
      g;
      if (g = m(l.documentElement, c, e)) return c.adFindingMethod = "Domsearch friendly iframe",
      g;
      if (g) return g;
      if (g = a.aw.n(l.documentElement, c, e)) return c.adFindingMethod = "Domsearch again in friendly iframe",
      g
     }
    }
   };
   a.aw.n = function(b, c, e) {
    var d;
    b = a.aw.a(b, a.aw.b);
    for (var f = 0; f < b.length; f++)
     if (d = b[f], (d = a.k.e(d)) && d.documentElement && (d = m(d.documentElement, c, e))) return c.adFindingMethod = "FLITEADS  FRIENDLY IFRAMES AGAIN DEFAULT", d
   };
   a.aw.j = function(b, c, e) {
    if ("function" !== typeof e && (b = a.au.n(b, c.adNum))) {
     if (b === a.au.i) return a.au.i;
     e = a.e.e(b, "div", !1, void 0, c, e);
     c.adFindingMethod = "USATODAYV3-2";
     return e
    }
   };
   a.aw.o = function(b, c) {
    if (!wa && !1 !== b.shouldKillAd) {
     var e = (new p).getTime() - c.ao.startTime;
     !0 !== c.em && !0 !== c.preventTryFindingAdAgain && 5E3 >
      e && (a.aw.p(c), b.shouldKillAd = !1)
    }
   };
   var r = a.m.a.azsx("beforeAdKilled", a.aw.o);
   a.m.a.azsx("allLocalAdsKilled", function() {
    a.m.a.sxaz("beforeAdKilled", {
     id: r
    })
   }, {
    once: !0
   });
   a.aw.q = function(a) {};
   a.aw.p = function(b) {
    if (!0 !== b.em) {
     delete w[b.zr];
     a.b.a(b.cc);
     b.periscopeManager && b.periscopeManager.killAllPixels();
     var c;
     (c = G && G.parentNode) && a.aw.c(c, b.ao, b, void 0, function() {
      a.t.a(b)
     }, void 0)
    }
   };
   a.aw.k = function(b, c, e, d) {
    b = a.av.a(b, c);
    var f;
    a.b.forEach(b, function(b) {
     if (a.b.bd(b)) return f = b, !1
    });
    if (f) return b = a.b.aq(f) ||
     f.src || "DIV", d = a.e.e(f, b, !1, void 0, e, d), e.adFindingMethod = "DOMSEARCH", d
   };
   var K = function(b, c, e, d, f) {
    c = a.av.a(c, e);
    c = a.b.filter(c, a.b.bd);
    if (0 < c.length) return e = a.b.aq(c[0]) || c[0].getAttribute("src") || "DIV", b(c, e, !1, void 0, d, f)
   };
   a.aw.r = function(b, c, e, d) {
    return K(a.e.r, b, c, e, d)
   };
   a.aw.s = function(b, c, e, d) {
    return K(a.e.q, b, c, e, d)
   };
   a.aw.i = m;
   a.aw.f = function(d, h, k, m, q, r) {
    r || (r = window);
    q = q || function() {
     return !0
    };
    var z = a.aw.i,
     A = a.aw.j;
    if ("undefined" === typeof d) return !1;
    if (a.d.q && "HEAD" === d.tagName) {
     var p = d.parentNode;
     "HTML" === p.tagName && (p = p.getElementsByTagName("body"), 0 < p.length && (d = p[0]))
    }
    if (p = t(d, h, k, q)) return p;
    if (a.d.fe) return !1;
    if (a.d.ff) return (p = v(d, h, k, q)) ? p : !1;
    if ((p = document.getElementById("mianahwvc")) && q(p) && (p = a.e.e(p, p.nodeName, !1, void 0, h, k))) return h.adFindingMethod = "APPSCOPE", p;
    if (p = a.aw.k(["[id='ad']"], d, h, k)) return h.adFindingMethod = "DOM Id = ad", p;
    if (p = a.aw.k(["../body/ins[class='dcmads'][data-dcm-rendering-mode='script']"], d, h, k)) return h.adFindingMethod = "DCM ins", p;
    if (p = a.aw.k(["div.teads-player/iframe",
      "div[id^='playArea']"
     ], d, h, k)) return h.adFindingMethod = "teads", p;
    if (p = a.aw.k(["div.avalanche"], d, h, k)) return h.adFindingMethod = "avalanche", p;
    if (a.d.bs && a.d.bs() && "AdMarvel" == a.d.bs() && (p = a.aw.k(["[class='omws-container']", "[id='fill-wrapper']"], d, h, k))) return h.adFindingMethod = "Opera MRAID", p;
    if (p = f(d, h, k, q, r)) return p;
    if (p = h && h.ntvDomSearch) return d = a.b.getElementsByClassName(p), d = a.b.filter(d, a.b.bd), 1 < d.length && (p = a.e.r(d, "DIV", !1, void 0, h, k)) ? (h.adFindingMethod = "NativoAds composite ads", p) : 1 ===
     d.length && (p = a.e.e(d[0], d[0].nodeName, !1, void 0, h, k)) ? (h.adFindingMethod = "NativoAds single ad", p) : !1;
    if (p = a.aw.k(["div.str-adunit", "[data-str-native-key]", "[data-str-sibling]"], d, h, k)) return h.adFindingMethod = "Sharethrough", p;
    if (p = a.aw.k([".../[data-gg-moat]/[data-gg-moat-ifr]", ".../[data-gg-moat]", "[data-gg-moat]"], d, h, k)) return h.adFindingMethod = "GumGum", p;
    var p = (p = a.d.q ? d.ownerDocument.documentElement : d) && p.getElementsByTagName("script"),
     w = {},
     K, X;
    p && 0 < p.length && (w.jpd = /ads\.jetpackdigital\.com\/lineitems\/(\d+)\/jpd/,
     w.adform = /adform\.(?:com|net)\/adfscript\/?\?bn=([0-9]+)/, w.quartz = /ads\.qs\.com/, w.yieldmo = /ads\.yieldmo\.com\/.*\&p=([0-9]+).*\&lf=([0-9]+)/, w.yieldmo2 = /static\.yieldmo\.com\/ym\.[a-z0-9]{2}\.js/, a.b.forEach(p, function(a) {
      for (var b in w)
       if (w.hasOwnProperty(b)) {
        var c = a && a.getAttribute("src");
        if (c && (K = c.match(w[b]))) return X = b, !1
       }
     }));
    a.av.a([".../[class*='jpeditorialunit']", ".../[class*='jpbanner']", ".../[id*='jpplatform']", ".../[id*='jpd_adhesion']"], d)[0] && (X = "jpd");
    if (X && "jpd" === X && (p = g(d, h, k,
      K && K[1], q)) || (p = e(d, h, k, q)) || X && "adform" === X && (p = x(d, h, k, K && K[1], q, r))) return p;
    if (p = b(d, h, k, q, r)) return h.adFindingMethod = "TRIPLELIFTADS: Moat script query string logic - " + (h.tlview_id ? "tlview_id" : "tlviewID"), p;
    if (p = l(d, h, k, q, r)) return h.adFindingMethod = "TRIPLELIFTADS: Domsearch tleid attribute", p;
    if (p = u(d, h, k, q, r)) return h.adFindingMethod = "TRIPLELIFTADS: Domsearch based on window", p;
    if (p = a.aw.k(["[id='qzad']"], d, h, k)) return h.adFindingMethod = "Quartz", p;
    m = p = "";
    X && a.b.ai(["yieldmo", "yieldmo2"], X) &&
     (p = K && K[1], m = K && K[2]);
    if (p = n(d, h, k, q, p, m)) return p;
    if (r = r.weborama_display_tag && r.weborama_display_tag.mediapath) {
     p = /https?:\/\/([0-9a-zA-Z\.\/]+)/;
     r = r.match && r.match(p)[1];
     m = a.av.c(["...../div[id^='scr_'][id*='remotediv']"], d);
     for (var E = 0; E < m.length; E++)
      if (p = a.aw.k(["${[src*='" + r + "']}", "+/${[src*='" + r + "']}"], m[E], h, k)) return h.adFindingMethod = "Weborama", p
    }
    if ((p = A(d, h, k)) || (p = z(d, h, k, q))) return p;
    if (p = a.aw.l(d, h, k)) return h.adFindingMethod = "friendly iframe", p;
    if (m = a.k.g(d))
     if (p = a.aw.l(m, h, k)) return h.adFindingMethod =
      "find iframe parent", p;
    if (a.d.r || m)
     if (m = m || a.k.g(d))
      if (r = a.b.ap(m) === a.d.g, p = a.d.e && "BODY" === m.nodeName, !r || !p) {
       if (p = A(m, h, k)) return h.adFindingMethod = "iframe parent expandable", p;
       if (p = z(m, h, k, q)) return h.adFindingMethod = "iframe parent findAd", p
      } return (p = c(d, h, k, q)) ? (h.adFindingMethod = "Undertone", p) : (p = a.aw.k(["../iframe#verve-banner", ".../body/iframe#verve-expandable/=>/div.content", ".../body/iframe#verve-expandable", "iframe#verve-banner/=>/div.content", "iframe#verve-banner"], d, h, k)) ? (h.adFindingMethod =
     "Verve", p) : (p = a.aw.k(["div.flex-player", "..../../div[id^='google_ads_iframe']/../div.flex-player", "div.flex-play", "..../../div[id^='google_ads_iframe']/../div.flex-play"], d, h, k)) ? (h.adFindingMethod = "WashPost", p) : !1
   };
   a.aw.a = q;
   a.aw.t = function(b, c, e) {
    if (a.d.e && b && a.b.bd(b) && a.z.e.a(b, c)) {
     "width" == a.z.a && a.z.c();
     a.d.fg = !0;
     c.skin = 1;
     a.r && (a.r.n = function() {
      return !1
     });
     var d = a.b.aq(b);
     if (b = a.e.e(b, d || b.nodeName, !1, void 0, c, e)) return c.adFindingMethod = "WALLPAPERS ADS", b
    }
   };
   a.aw.u = 1;
   a.aw.b = 2;
   a.aw.v = 500;
   a.aw.h =
    20;
   a.aw.w = {
    object: 1,
    embed: 1,
    img: 1,
    iframe: 1
   }
  })(m);
  (function(a) {
   function k(a) {
    "object" === typeof a && (a.fq = 0, a.gm = 0, a.ch = 0, a.ga = 0, a.gh = 0, a.hasOwnProperty("lx") && delete a.lx, a.um = 1)
   }

   function d(c) {
    a.b.cy(a.d.bb) && 5E3 > encodeURIComponent(a.d.bb).length && (c.gu = a.d.bb, c.id = a.d.bc ? "1" : "0")
   }

   function h(c, b) {
    if (a.d.fi) {
     var e = c.cm;
     "number" === typeof e && (c.pc = e);
     c.cm = 1;
     !b && a.b.af() && AB_SCAFFOLD.sampling.set({
      multiplier: 1,
      enabled: !1
     })
    }!b && a.b.da() && AB_SCAFFOLD.sampling.getQueryString(c)
   }

   function f(c, b) {
    var e, d = [],
     f, g = a.b.ag() ? 2048 : 7750,
     h = b || {};
    f = {};
    c.fs = "169489";
    for (e in c) c.hasOwnProperty(e) && (1 != c.e || "x" !== e && "y" !== e && "c" !== e ? d.push(encodeURIComponent(e) + "=" + encodeURIComponent(c[e])) : f[e] = c[e].split("a"));
    e = d.join("&");
    var d = g - e.length,
     k = 0;
    if ("undefined" !== typeof f.x) {
     for (var m = 0, q = 0; q < f.x.length; q++)
      if (m += f.x[q].length + (f.y[q] ? f.y[q].length : 0) + (f.c[q] ? f.c[q].length : 0), m < d) k++;
      else break;
     0 < k && (e += "&x=" + f.x.slice(0, k - 1).join("a"), e += "&y=" + f.y.slice(0, k - 1).join("a"), e += "&c=" + f.c.slice(0, k - 1).join("a"))
    }
    for (var w in h) h.hasOwnProperty(w) &&
     (f = "&" + encodeURIComponent(w) + "=" + encodeURIComponent(h[w]), f.length + e.length < g && (e += f));
    e = e.replace(/\x27/g, "%27");
    try {
     var g = e,
      K;
     var h = e,
      B = c.i,
      y = new p,
      C = [y.getFullYear(), ("0" + (y.getMonth() + 1)).slice(-2), ("0" + y.getDate()).slice(-2)].join("-"),
      h = h + (B + C),
      B = 0;
     if (0 == h.length) K = B;
     else {
      for (y = 0; y < h.length; y++) var D = h.charCodeAt(y),
       C = B,
       C = (C << 5) - C + D,
       B = C & C;
      K = r.abs(B)
     }
     e = g + ("&na=" + K)
    } catch (E) {}
    return e
   }

   function g(c, b) {
    c.j = 25 == b ? "string" == typeof a.d.f && a.d.f.slice(0, 500) || "" : a.b.z(a.d.f);
    if (!a.d.e) {
     var e = a.b.v();
     e && (c.lp = e)
    }
   }
   a.u = {};
   var e = ["zMoatSUPPLY"];
   a.u.c = function(c, b) {
    c.hp = 1;
    a.d.e && window.top.document && window.top.document.hasFocus && "function" === typeof window.top.document.hasFocus && (c.wf = window.top.document.hasFocus() ? 1 : 0)
   };
   a.u.b = function(c, b, l, u, m) {
    a.w.a(b, u);
    var n = {};
    n.e = c;
    a.b.bn(n, l);
    n.i = M;
    a.u.c(n, b);
    a.h && (n.cm = a.b.ab(a.h, a.i).multiplier);
    try {
     n.kq = a.d.g && a.d.g.devicePixelRatio
    } catch (v) {
     n.kq = 1
    }
    n.hq = a.d.o ? 1 : 0;
    n.hs = a.d.l ? 1 : 0;
    n.hu = a.d.ai ? 1 : 0;
    n.hr = a.d.ae ? 1 : 0;
    n.ht = a.d.al ? 1 : 0;
    n.dnt = a.d.fb ? 1 : 0;
    if (11 === c) {
     a.m.a.zaxs("adNotFound");
     c = [];
     for (var t in Aa) Aa.hasOwnProperty(t) && c.push(t + "=" + Aa[t]);
     n.k = c.join("&").slice(0, 300)
    }
    if (!(n.e in Ga)) {
     n.bq = a.d.ax;
     1 === b.skin && (n.wp = 1 === b.isSkin ? 1 : 1 === b.isAolSkin ? 2 : 3);
     n.f = Number(!Ja);
     a.d.bl && (n.nh = 1);
     g(n, n.e);
     n.t = b.startTime;
     n.de = b.rand;
     n.m = 0;
     n.ar = "21bcfc3260-clean";
     a.b.br(n, "ai", q.z);
     a.b.br(n, "wr", q.ACTIVETIMEUNTILSCROLL);
     n.q = q.m++;
     n.cb = sa ? 1 : 0;
     n.ym = a.d.c && a.d.c() ? 1 : 0;
     n.cu = T;
     n.ll = a.d.df || 0;
     a.b.br(n, "lm", a.d.db());
     n.ln = a.d.q ? 1 : 0;
     n.r = a.r.i;
     a.b.bn(n, a.focus.getQueryString());
     a.w.i(b, n);
     "undefined" !==
     typeof b && (n.d = b.moatClientLevel1 + ":" + b.moatClientLevel2 + ":" + b.moatClientLevel3 + ":" + b.moatClientLevel4, a.b.forEach(e, function(a) {
      n[a] || (n[a] = b[a] || "-")
     }), b.adFindingMethod && (n.hv = b.adFindingMethod), a.f && (n.qs = a.f.p), d(n), n.bo = b.moatClientSlicer1, n.bd = b.moatClientSlicer2, n.gw = "verveinappvrv481346465113", n.fd = "1");
     a.d.d() && (a.d.cw() && a.p.m(n), a.p.b(n), a.p.r(n, b));
     a.d.cs() && (a.d.cv() && a.s.k(null, b, n), a.s.l(n));
     a.n.m(n);
     n.ac = 1;
     n.it = a.aw.v;
     a.d.an().isInApp && (n.lv = a.d.cq(), n.zl = a.d.dy() ? 1 : 0, a.d.cr() ? (a.b.az() &&
      (n.wo = 1), (t = a.b.aw(a.d.bd)) && (n.zMoatMMAKns = t)) : a.d.cy() && (n.lx = 1));
     a.e.c() && k(n);
     n.ti = I;
     n.ih = 1;
     a.b.da() && (n.sk = AB_SCAFFOLD.scaffoldID, n.tn = AB_SCAFFOLD.AB_TEST_NAME);
     h(n, m);
     c = f(n);
     t = xa;
     c = a.u.d(b, c + "&cs=0", n);
     if (!0 === m) return {
      qs: n,
      res: c
     };
     c.shouldSendPixel && c.querystring && q.yh.yi(c.querystring, t)
    }
   };
   a.u.a = function(c, b, l) {
    if (window && window.closed || !c || !0 === c.ep) return !1;
    a.u.c(b, c.ao);
    try {
     b.kq = a.d.g && a.d.g.devicePixelRatio
    } catch (m) {
     b.kq = 1
    }
    a.aw.q(c);
    if ("undefined" !== typeof c.ao && (2 !== c.an || 1 !== b.e && 3 !==
      b.e) && !(b.e in Ga)) {
     b.lo = c.FIND_AD_TRIES;
     c.proxyTrackingEnabled && (b.tr = 1);
     b.uk = a.b.aw(a.d.bd);
     var u = a.b.ax(),
      x = a.b.ct(u.results),
      n = {
       article: "pk",
       page_height: "wk",
       meta_properties: "rk",
       favicon: "tk"
      };
     a.b.forEach(x, function(a) {
      b[n[a]] = u.results[a] ? 1 : 0
     });
     c.hasNonIframeListener && (b.ni = 1);
     var t = c.ag,
      x = {},
      v = a.aa.a(c.zr);
     if (9 === b.e && 2 === b.q || 25 === b.e) {
      for (var p in t) t.hasOwnProperty(p) && "" !== p && "undefined" !== typeof t[p] && -1 === p.indexOf("dvContains") && -1 === p.indexOf("indexOf") && -1 === p.toLowerCase().indexOf("clicktag") &&
       (x["z" + p] = t[p]);
      b.e = 25
     }
     0 === c.an && (b.dc = c.WMODE);
     a.f && (b.qs = a.f.p);
     "string" !== typeof c.ae || 0 != b.e && 25 != b.e ? b.ak = "-" : (p = a.d.l ? 700 : 1200, b.ak = c.ae.length <= p ? c.ae : c.ae.slice(0, p));
     c.bi > c.bg && (c.bg = c.bi);
     c.bm > c.bk && (c.bk = c.bm);
     b.i = M;
     a.b.bn(b, a.f.u(!0));
     b.bq = a.d.ax;
     1 === c.ao.skin && (b.wp = 1 === c.ao.isSkin ? 1 : 1 === c.ao.isAolSkin ? 2 : 3);
     b.g = c.aq.g++;
     c.isSREMeasurable || c.setDimensions();
     a.d.fg ? (t = a.d.s(a.d.g), p = t.width, t = t.height) : c.compositeAdAreaPx ? (p = c.compositeAdAreaPx, t = 1) : (p = c.INITIAL_WIDTH, t = c.INITIAL_HEIGHT);
     p = p || 0;
     t = t || 0;
     0 < p && 0 < t && (c.isSREMeasurable = !0);
     b.hq = a.d.o ? 1 : 0;
     b.hs = a.d.l ? 1 : 0;
     b.hu = a.d.ai ? 1 : 0;
     b.hr = a.d.ae ? 1 : 0;
     b.ht = a.d.al ? 1 : 0;
     b.dnt = a.d.fb ? 1 : 0;
     a.n.a() && a.n.realEstateMeasurements && (p = a.n.realEstateMeasurements.w, t = a.n.realEstateMeasurements.h);
     b.h = t;
     b.w = p;
     a.d.d() && (b.om = a.e.s());
     a.d.j() && (p = a.d.t(), b.rm = 0 < p.width && 0 < p.height && a.n.realEstateMeasurements ? 1 : 0);
     try {
      a.d.dj() && c && c.elementRect && (b.fy = c.elementRect.left, b.gp = c.elementRect.top)
     } catch (m) {}
     d(b);
     a.h && (b.cm = a.b.ab(a.h, a.i).multiplier);
     b.f = Number(!Ja);
     g(b, b.e);
     b.t = c.ao.startTime;
     b.de = c.ao.rand;
     b.cu = T;
     b.m = b.m || a.b.am(c);
     b.ar = "21bcfc3260-clean";
     b.cb = sa ? 1 : 0;
     b.ym = a.d.c && a.d.c() ? 1 : 0;
     b.ll = a.d.df || 0;
     a.b.br(b, "lm", a.d.db());
     b.ln = a.d.q ? 1 : 0;
     b.r = a.r.i;
     a.b.bn(b, a.q.c());
     a.d.e && (b.gh = 1);
     a.d.bl && (b.nh = 1);
     b.xx = a.d.fh + ":" + a.f.au();
     b.td = a.d.dc;
     a.d.u();
     b.qa = a.d.x;
     b.qb = a.d.y;
     b.qi = a.d.v;
     b.qj = a.d.w;
     b.qf = a.d.z;
     b.qe = a.d.aa;
     b.qh = a.d.ab;
     b.qg = a.d.ac;
     try {
      b.lk = c && c.elementRect && c.elementRect.top + a.d.ad || "undefined"
     } catch (m) {}
     b.lb = a.d.i;
     b.le = La ? 1 : 0;
     a.f && void 0 !== a.f.al && (b.lf =
      a.f.al);
     a.f && void 0 !== a.f.av && (b.lj = a.f.av);
     a.f && void 0 !== a.f.aw && (b.li = a.f.aw);
     a.f && void 0 !== a.f.ad && (b.lg = a.f.ad);
     a.f && void 0 !== a.f.an && (b.lh = a.f.an);
     a.aa.d() && (b.mn = 1, a.aa.e() && (b.mo = 1));
     a.d.ds() && (b.gm = 1, a.d.e && "sframe" === v && (b.fq = 0));
     a.d.dk() && (b.io = 1);
     a.d.cd && (b.fa = 1);
     "number" !== typeof a.d.cf || isNaN(a.d.cf) || (b.zz = a.d.cf);
     a.d.ch() && (b.fx = 1);
     a.d.bn() && a.d.bp() && (b.mm = 1);
     a.d.cn() && (b.hx = 1);
     if (a.q && a.q.a()) b.ch = 1, b.gh = 1;
     else if (a.r && a.r.a) {
      a.d.by && (b.ss = 1);
      a.d.et && (b.ie = 1);
      if (c && c.periscopeManager) {
       p = !a.focus.pageIsVisible() && c && c.counters && c.counters.strictDwell && 0 == c.counters.strictDwell.tCur && 21 == b.e;
       t = a.b.aj && "0" != a.b.aj();
       if (c.periscopeManager.measurable || !a.d.e && p && t) b.ch = 1;
       c.periscopeManager.fullyMeasurable && c.ao && 1 != c.ao.skin && (b.ga = 1)
      } else b.ch = 1;
      "undefined" !== typeof a.r.am && c && c.ao && c.ao.startTime && !isNaN(c.ao.startTime) && (p = a.r.am - c.ao.startTime, b.fg = 0 <= p ? p : 0)
     } else b.ch = 0;
     b.vv = v ? c.viewabilityMethod[v] : 0;
     p = c.viewabilityMethod;
     b.vw = (p.strict || 0) + ":" + (p.sframe || 0) + ":" + (p.pscope || 0);
     p =
      c.viewabilityPercent;
     b.vp = p[v];
     b.vx = p.strict + ":" + p.sframe + ":" + p.pscope;
     a.b.bn(b, a.aa.w(c.zr, b));
     a.b.bn(b, a.focus.getQueryString());
     a.b.bn(b, a.aq.b(c.zr));
     a.b.bn(b, a.ba.a(c.zr));
     a.b.bn(b, c.counters.getQs());
     c.px2 && c.px2.inSample && !c.px2.success && (b.zMoatIDF = 1);
     a.bb.a(c, b);
     a.ae.b(c, b);
     a.b.br(b, "ai", q.z);
     a.b.br(b, "wr", q.ACTIVETIMEUNTILSCROLL);
     a.b.br(b, "ap", c.cb);
     a.b.br(b, "ax", c.bg);
     a.b.br(b, "ay", c.bi);
     a.b.br(b, "az", c.bk);
     a.b.br(b, "ba", c.bm);
     a.b.br(b, "aw", c.bc);
     a.b.br(b, "bg", c.bd);
     a.b.br(b, "be", c.be);
     a.b.br(b, "bc", c.bw);
     a.b.br(b, "bf", c.by);
     a.b.br(b, "bh", c.bx);
     a.b.br(b, "bz", c.cu);
     b.cl = r.round(100 * c.IR5.AREA / (b.w * b.h));
     0 < c.aq[2] && (b.au = c.aq[2] - 1);
     0 < c.aq[3] && (b.av = c.aq[3] - 1);
     0 < c.aq[23] && (b.by = c.aq[23] - 1);
     b.at = c.dm;
     a.w.i(c.ao, b);
     b.d = c.ao.moatClientLevel1 + ":" + c.ao.moatClientLevel2 + ":" + c.ao.moatClientLevel3 + ":" + c.ao.moatClientLevel4;
     b.bo = c.ao.moatClientSlicer1;
     b.bd = c.ao.moatClientSlicer2;
     b.gw = "verveinappvrv481346465113";
     a.b.forEach(e, function(a) {
      b[a] || (b[a] = c.ao[a] || "-")
     });
     c.ao.adFindingMethod && (b.hv =
      c.ao.adFindingMethod);
     b.ab = c.an;
     b.ac = 1;
     b.fd = "1";
     b.kt = v;
     b.it = a.aw.v;
     a.d.d() && (c.aa === a.d.g.document.body && (b.zg = 1), a.d.cw() && a.p.m(b), a.p.b(b));
     a.d.cs() && (c.aa === a.d.g.document.body && (b.zg = 1), a.d.cv() && a.s.k(c, c.ao, b), a.s.l(b));
     a.n.m(b);
     c.bi = c.bg;
     c.bm = c.bk;
     a.ab.f(c) && (b.fz = 1);
     v = a.ab.g(c.zr);
     b.oq = v ? 1 : 0;
     "undefined" !== typeof c.zr && (b.ot = a.ab.h[c.zr].stateMask.toString(16));
     a.d.an().isInApp && (b.lv = a.d.cq(), b.zl = a.d.dy() ? 1 : 0, a.d.cr() ? (a.b.az() && (b.wo = 1), (v = a.b.aw(a.d.bd)) && (b.zMoatMMAKns = v)) : a.d.cy() &&
      (b.lx = 1));
     c.debugData && (b.zMoatJS = c.debugData.getValue());
     b.ti = I;
     b.ih = 1;
     a.b.da() && (b.sk = AB_SCAFFOLD.scaffoldID, b.tn = AB_SCAFFOLD.AB_TEST_NAME);
     c && c.isMeasurabilityDisabled() && k(b);
     a.e.c() && k(b);
     a.b.ai([2], b.e) && c.aq.tc++;
     b.tc = c.aq.tc;
     h(b, l);
     p = f(b, x);
     v = xa;
     if (l) return b;
     l = a.u.d(c.ao, p + "&cs=0", b, x);
     l.shouldSendPixel && l.querystring && q.yh.yi(l.querystring, v)
    }
   };
   a.u.e = function(a, b) {
    a.zMoatSrcd = a.d;
    a.zMoatSrcbo = a.bo;
    a.zMoatSrcbp = a.bp;
    a.zMoatSrcbd = a.bd;
    a.d = (b.moatClientLevel1 || "") + ":";
    a.d += (b.moatClientLevel2 ||
     "") + ":";
    a.d += (b.moatClientLevel3 || "") + ":";
    a.d += b.moatClientLevel4 || "";
    a.bo = b.moatClientSlicer1;
    a.bd = b.moatClientSlicer2;
    return a
   };
   a.u.f = function(c, b, e, d, g, h, k) {
    c = "extraPx_" + c;
    b[c] || (b[c] = {});
    d = a.b.g(d);
    d.zMoatSrci = d.i;
    d.i = e;
    k && (d = a.u.e(d, k));
    if (a.f.ax && !b[c].timestampsReset)
     for (var m = 0; m < a.f.ax.length; m++) {
      var p = a.f.ax[m];
      p.zMoatSrci = p.i;
      p.i = e;
      k && (p = a.u.e(p, k));
      p = f(p) + "&cs=0";
      q.yh.yi(p, g)
     }
    b[c].timestampsReset || (b[c].timestampsReset = !0, d.lc && (d.lc = 0), d.cd && (d.cd = 0), d.sm && (d.sm = 0), d.fv && (d.fv = 0), d.pn &&
     (d.pn = 0), d.lt && (d.lt = 0), d.ba && (d.ba = 0), d.sq && (d.sq = 0), d.gg && (d.gg = 0), d.mu && (d.mu = 0), d.si && (d.si = 0), d.aq && (d.aq = 0), d.mc && (d.mc = 0), d.dt && (d.dt = 0), d.gt && (d.gt = 0), d.ao && (d.ao = 0), d.mk && (d.mk = 0), d.dr && (d.dr = 0), d.ev && (d.ev = 0), d.ge && (d.ge = 0), d.mx && (d.mx = 0), d.an && (d.an = 0), d.cf && (d.cf = 0), d.gl && (d.gl = 0), d.mw && (d.mw = 0), d.xb && (d.xb = 0), d.db && (d.db = 0), d.am && (d.am = 0), d.fj && (d.fj = 0), d.my && (d.my = 0), d.mz && (d.mz = 0), d.cn && (d.cn = 0), d.es && (d.es = 0), d.sa && (d.sa = 0), d.fp && (d.fp = 0), d.pf && (d.pf = 0), d.ay && (d.ay = 0), d.fn && (d.fn =
      0), d.bx && (d.bx = 0));
    c = f(d, h);
    q.yh.yi(c + "&cs=0", g)
   };
   a.u.d = function(c, b, e, d) {
    c = !0;
    if (a.h && (c = a.b.ae(), !c)) {
     for (var g = [1, 2, 3, 23, 25], h = 0, k = g.length; h < k; h++)
      if (e.e == g[h]) {
       c = !0;
       break
      } c && (e.cm = 0, b = f(e, d), b += "&cs=0")
    }
    return {
     shouldSendPixel: c,
     querystring: b
    }
   };
   a.u.g = function(a, b) {
    if (2 !== a.an || 1 !== b.e && 3 !== b.e)(new Image(1, 1)).src = ""
   };
   a.u.h = function(c) {
    var b = a.u.i(c.data);
    b.i += c.iKeySuffix;
    var e = f(b, c.flashVarsForQS) + "&cs=0";
    if (c.sendNow) {
     var d = c.useBeacon;
     if (a.f.ax)
      for (var g = 0; g < a.f.ax.length; g++) {
       var h = a.f.ax[g];
       h.i += c.iKeySuffix;
       h = f(h) + "&cs=0";
       q.yh.yi(h, c.pixelURL)
      }
     d ? navigator.sendBeacon("//bn.pixel.moatads.com/pixel.gif?" + e, "") : q.yh.yi(e, c.pixelURL)
    }
    return b
   };
   a.u.i = function(c) {
    c = a.b.g(c);
    for (var b = "am an ao aq ay ba bx cd cf db dr dt es ev sa sq si sm mc lc pf xb ge gg cn gl pn fj lt mu mk mw mx my mz fn fp fv".split(" "), e = 0; e < b.length; e++) c[b[e]] && (c[b[e]] = 0);
    return c
   };
   a.u.j = function(a, b) {
    return f(a, b)
   };
   a.u.k = function(c) {
    var b = {
     e: 16
    };
    b.q = c.aq[16]++;
    a.u.a(c, b)
   };
   a.u.l = function(c) {
    var b = !1,
     e = a.u.b(8, c.ao,
      !1, !1, !0);
    if (e && e.qs && e.qs.d) {
     b = e.qs.d.split(":");
     b = {
      viewHash: M,
      moatClientLevel1: b[0],
      moatClientLevel2: b[1],
      moatClientLevel3: b[2],
      moatClientLevel4: b[3],
      tagStartTime: a.d.bg
     };
     if (c && c.ao)
      for (var d in c.ao) c.ao.hasOwnProperty(d) && -1 != d.indexOf("zMoat") && (b[d] = c.ao[d]);
     for (d in e) e.hasOwnProperty(d) && -1 != d.indexOf("zMoat") && (b[d] = e[d]);
     b.moatClientSlicer1 = e.qs.bo;
     b.moatClientSlicer2 = e.qs.bd
    }
    return b
   };
   a.u.m = function(c) {
    var b = {
     e: 8
    };
    b.q = c.aq[8]++;
    return a.u.a(c, b, !0)
   }
  })(m);
  (function(a) {
   function k(d, g, e, c,
    b) {
    var h = 1E4;
    a.d.an().isInApp && (h = 500);
    (new p).getTime();
    this.tMaxContinuous = this.tContinuous = this.tLast = this.tCur = 0;
    this.getMaxContinuous = function() {
     return r.max(this.tContinuous, this.tMaxContinuous)
    };
    this.reset = function() {
     this.tLast = this.tCur = 0
    };
    this.update = function(a, e, g) {
     d(a) ? (e = r.min(e, h), a = typeof c, e && 0 > e && (e = 0), this.tCur += e, this.tContinuous += e, "number" === a && 0 < c ? this.tCur > c && (this.tCur = c) : "function" === a && (e = c(), "number" === typeof e && this.tCur > e && 0 < e && (this.tCur = e))) : (this.tMaxContinuous < this.tContinuous &&
      (this.tMaxContinuous = this.tContinuous), this.tContinuous = 0);
     b && b(this.tCur)
    };
    this.getQs = function(a) {
     a = this.query(a);
     this.tLast = this.tCur;
     return a
    };
    this.query = function(a) {
     a = a || {};
     this.tLast > this.tCur && (this.tLast = this.tCur);
     g && e && (a[g] = this.tCur, a[e] = this.tLast);
     return a
    }
   }
   a.t = {};
   a.t.g = {};
   a.t.g.a = [];
   a.t.g.b = [];
   var d = !1,
    h = {};
   a.t.i = function() {
    if (!d) {
     d = !0;
     try {
      var f = q.swde.azsx("scroll", a.t.j);
      a.m.a.azsx("allLocalAdsKilled", function() {
       q.swde.sxaz("scroll", {
        id: f
       })
      }, {
       once: !0
      })
     } catch (g) {}
    }
   };
   a.t.k = function(d,
    g) {
    try {
     if (a.d.c()) return !0;
     var e = d.aa,
      c = a.b.ar(e, 5),
      b = c && (6 == c.length || 1 <= c.length && "HTML" === c[c.length - 1].nodeName);
     g = g || d.WINDOW || a.b.ap(e);
     return !(e && g && b) || "Unicast Generic" === Y && a.au.k(d.zr) && (3 > e.offsetWidth || 3 > e.offsetHeight) || e.ownerDocument && e.ownerDocument.body && !e.ownerDocument.body.contains(e) ? !1 : !0
    } catch (h) {
     return !1
    }
   };
   a.t.l = function() {
    function d() {
     if (!h) try {
      h = !0, g(b), h = !1
     } catch (a) {
      throw h = !1, a;
     }
    }

    function g(a) {
     var b = a.Moat;
     a = a.domNodesIdToAd;
     for (var d in a) a.hasOwnProperty(d) && b.au.m("loop",
      d);
     b.t.m();
     d = (new p).getTime();
     a = r.max(r.min(d - e, c), 0);
     b.m.a.zaxs("view:tick", a, d);
     e = d
    }
    var e = (new p).getTime(),
     c = 1E4;
    a.d.an().isInApp && (c = 500);
    var b = {
      Moat: a,
      domNodesIdToAd: w
     },
     h = !1;
    a.m.a.azsx("periscope:onStateChange", d);
    a.m.a.azsx("viewCounterStarted", d);
    var k = "MOAT_VIEW_LOOP_ID_" + (new p).getTime();
    a.o.g(g, b, 200, k);
    return a.b.cl([b], g)
   }();
   a.t.m = function() {
    var d, g;
    for (g in w) w.hasOwnProperty(g) && (d = w[g], a.t.k(d, d.WINDOW) || a.t.a(d))
   };
   a.t.a = function(d) {
    if (!0 !== d.ep) {
     if (!wa) {
      var g = {
       shouldKillAd: !0
      };
      a.m.a.zaxs("beforeAdKilled",
       g, d);
      if (!g.shouldKillAd) return
     }
     a.m.a.zaxs("adKilled", d);
     a.e.n(d)
    }
   };
   a.t.e = function(d) {
    d.eq || (d.eq = !0);
    var g = {
     e: 5
    };
    g.q = d.aq[5]++;
    a.u.a(d, g)
   };
   a.t.d = function(d) {
    if (!d || !d.aq || !d.aq[0]) return !1;
    var g = {
     e: 37
    };
    g.q = d.aq[37]++;
    a.u.a(d, g)
   };
   a.t.n = [];
   a.t.o = function(d, g) {
    var e = !1;
    if (!d || !d.aq || !d.aq[29] || 3 > d.aq[29]) return !1;
    for (var c = 0; c < g.length; c++) {
     var b = g[c]; - 1 === a.b.indexOf(a.t.n, b) && (e = !0, a.t.n.push(b))
    }
    e && (e = {
     e: 37
    }, e.q = d.aq[37]++, a.u.a(d, e))
   };
   a.t.c = function(d) {
    var g;
    g = d.aa;
    if (1 == d.ao.skin) return !1;
    if (a.aq.c(d)) return !0;
    d.elementRect || (d.currentWidth = g.offsetWidth, d.currentHeight = g.offsetHeight);
    g = d.currentWidth;
    d = d.currentHeight;
    var e = !0;
    a.n.a() && (e = !1);
    return e && (3 > g || 3 > d) || a.focus.pageIsPrerendered() ? !0 : !1
   };
   a.t.f = function(d) {
    return d ? a.focus.pageIsVisible() : !1
   };
   a.t.p = function(d) {
    var g = 1;
    screen.deviceXDPI ? g = screen.deviceXDPI / screen.systemXDPI : d.devicePixelRatio && "undefined" !== typeof d.mozInnerScreenX && (g = d.devicePixelRatio);
    return (d = a.d.t()) ? {
     w: g * d.width,
     h: g * d.height
    } : {
     w: 0,
     h: 0
    }
   };
   a.t.h = function(d) {
    d.counters = {};
    d.counters.laxDwell = new k(function() {
     return !a.focus.pageIsPrerendered()
    }, "bu", "cd");
    d.counters.strictDwell = new k(a.focus.pageIsVisible, "ah", "am");
    d.counters.query = function() {
     var a = {},
      c;
     for (c in this)
      if (this.hasOwnProperty(c)) {
       var b = this[c];
       "function" === typeof b.query && b.query(a)
      } return a
    };
    d.counters.getQs = function() {
     var a = {},
      c;
     for (c in this)
      if (this.hasOwnProperty(c)) {
       var b = this[c];
       "function" === typeof b.getQs && b.getQs(a)
      } return a
    };
    d.counters.update = function(a, c, b) {
     for (var d in this)
      if (this.hasOwnProperty(d)) {
       var f =
        this[d];
       "function" === typeof f.update && !0 !== a.ep && f.update(a, c, b)
      }
    };
    a.m.a.azsx("startAdTracking", a.t.i);
    var g = a.m.a.azsx("view:tick", a.b.cl([d], d.counters.update, d.counters));
    h[d.zr] = g
   };
   a.t.q = function() {
    q.z = void 0;
    q.ACTIVETIMEUNTILSCROLL = void 0;
    q.zs = !1;
    q.xz = !1;
    q.dcsx.wsqa("globalScrollevent" + q.dcsx.uid);
    a.b.forEach(a.t.g.a, function(a) {
     if (a && "function" === typeof a) try {
      a()
     } catch (d) {}
    })
   };
   a.t.j = function(d) {
    if (a.focus.pageIsVisible()) {
     d = (new p).getTime();
     "undefined" === typeof q.z && (q.z = d - T);
     if ("undefined" ===
      typeof q.ACTIVETIMEUNTILSCROLL) {
      var g = a.focus.focusStartTime || T;
      g < T && (g = T);
      q.ACTIVETIMEUNTILSCROLL = d - g
     }
     a: {
      for (var e in w)
       if (w.hasOwnProperty(e) && (d = w[e]) && "undefined" !== typeof d.ao) {
        if (d.ce) break a;
        g = {
         e: 4
        };
        g.q = d.aq[4]++;
        g.ai = q.z;
        g.wr = q.ACTIVETIMEUNTILSCROLL;
        a.u.a(d, g);
        d.ce = !0
       } try {
       q.dcsx.wsqa("globalScrollevent" + q.dcsx.uid), q.swde.sxaz("scroll", {
        callback: a.t.j
       })
      } catch (c) {}
     }
    }
   };
   a.t.b = function(d, g) {
    var e = {
     e: 9
    };
    e.q = d.aq[9]++;
    d.ci = +new p;
    g && "object" === typeof g && a.b.forEach(g, function(a, b) {
     e[b] = a
    });
    a.u.a(d,
     e)
   };
   a.m.a.azsx("adKilled", function(d) {
    d && !d.ep && h.hasOwnProperty(d.zr) && a.m.a.sxaz("view:tick", {
     id: h[d.zr]
    })
   })
  })(m);
  (function(a) {
   function k(d, h) {
    function f(a) {
     return function() {
      try {
       a.sending && (a.sending = !1, m = 0, g())
      } catch (b) {}
     }
    }

    function g(a, b) {
     if (a) {
      var e = {
       qs: a,
       jsd: b
      };
      if (0 === a.indexOf("e=21&")) {
       c(e, !0);
       return
      }
      k.push(e)
     }
     0 === m && 0 < k.length && (m++, e = k.shift(), e.sending = !0, e.uid = h.Math.floor(1E10 * h.Math.random()), e.timeoutId = h.setTimeout(f(e), 2E3), p[e.uid] = e, c(e))
    }

    function e() {
     try {
      return new n(1, 1)
     } catch (a) {
      var b =
       window.document.createElement("img");
      b.height = 1;
      b.width = 1;
      return b
     }
    }

    function c(c, d) {
     if ("object" === typeof a && a && a.d && a.d.c && a.d.c()) a.d.cw() && a.p.i(c.jsd + "/pixel.gif?" + c.qs, function() {
      l(c)
     }, function() {
      b(c)
     });
     else {
      var f = e();
      f.toSend = c;
      d || (f.onerror = function() {
       b(this.toSend)
      }, f.onload = function() {
       l(this.toSend)
      });
      f.src = c.jsd + "/pixel.gif?" + c.qs
     }
    }

    function b(a) {
     a.failedAttempts = "number" == typeof a.failedAttempts ? a.failedAttempts + 1 : 0;
     var b = (a.jsd + "/pixel.gif?" + a.qs).length;
     1 > a.failedAttempts ? c(a) : r && b > w &&
      l(a)
    }

    function l(a) {
     var b = a && a.uid && p && p[a.uid];
     if (a && a.qs && "tracer=" == a.qs) return !1;
     if (b) {
      p[a.uid] = null;
      try {
       delete p[a.uid]
      } catch (c) {}
      try {
       clearTimeout(b.timeoutId)
      } catch (c) {}
      if ("boolean" != typeof b.sending || b.sending) b.sending = !1;
      else return !1
     }
     0 < m && m--;
     g()
    }
    var k = [],
     m = 0,
     n, t = h[d],
     v = h.Math.floor(1E10 * h.Math.random()),
     p = {};
    t.yh = {};
    t = t.yh;
    n = h.Image;
    t.yi = function(a, b) {
     g(a, b)
    };
    t.xq = function() {
     return v
    };
    var q, r, w = 2083;
    try {
     q = document.createElement("div"), q.innerHTML = "\x3c!--[if IE 8]>x<![endif]--\x3e", r = "x" ===
      q.innerHTML
    } catch (B) {
     r = !1
    }
   }
   a.bc = {};
   a.bc.a = function(d) {
    try {
     if (q.yh) return
    } catch (h) {}
    a.d.c() ? k(a.d.aw, d) : a.b.cp(k, "'" + a.d.aw + "',window", d)
   }
  })(m);
  (function(a) {
   a.bd = {};
   a.bd.a = function(k, d) {
    var h = !0;
    d && a.d.dr(k, !0) || (h = !1);
    if (h) {
     h = !0;
     d && d.getCareAboutFocus && (h = d.getCareAboutFocus());
     var f = a.t.c(k),
      h = (!h || a.t.f(k)) && !f
    }
    return h
   };
   a.bd.b = function(k) {
    this.label = k;
    this.metrics = {};
    this.hasTickUpdateMetrics = !1;
    this.set = function(a, h, f) {
     this.metrics[a] = this.metrics[a] || {};
     this.metrics[a].value = h || 0;
     f && (this.hasTickUpdateMetrics ||
      (this.hasTickUpdateMetrics = !0), this.metrics[a].incrementValue = f.incrementValue || "delta", this.metrics[a].ignoreStateCheck = f.ignoreStateCheck || !1, this.metrics[a].shouldIncrementFn = f.shouldIncrementFn, this.metrics[a].postIncrementationFn = f.postIncrementationFn || !1, f.useDeltaCompensation && (this.metrics[a].useDeltaCompensation = !0, this.metrics[a].incrementedLastTick = !1));
     return this.metrics[a].value
    };
    this.increment = function(a, h, f, g, e) {
     var c = !this.metrics[a] || "number" !== typeof this.metrics[a].value;
     try {
      if (g.debugData &&
       c && "publicis_counter" == this.label) {
       var b;
       this.metrics[a] ? this.metrics[a].value && (b = this.metrics[a].value) : b = "NONE";
       var l = [h, b, e].join("-");
       g.debugData.cache.push(l)
      }
     } catch (k) {}
     h = c ? this.set(a, h) : this.metrics[a].value += h;
     "number" === typeof f && (h = this.cap(a, h));
     return h
    };
    this.cap = function(a, h) {
     return this.set(a, r.min(this.get(a), h))
    };
    this.max = function(a, h) {
     return this.set(a, r.max(this.get(a), h))
    };
    this.get = function(d, h) {
     if (!a.e.c() || "visOnLastCheck" === d) return "undefined" === typeof this.metrics[d] ? this.set(d,
      "undefined" !== typeof h ? h : 0) : this.metrics[d].value
    };
    this.update = function(d, h, f) {
     if (d && this.hasTickUpdateMetrics) {
      f = a.aa.i(d.zr, !0);
      var g = a.bd.a(d, f),
       e;
      for (e in this.metrics)
       if (a.b.ce(this.metrics, e)) {
        var c = this.metrics[e];
        if (c.shouldIncrementFn) {
         var b = (g || !0 === c.ignoreStateCheck) && c.shouldIncrementFn(d, f);
         c.useDeltaCompensation ? (b && c.incrementedLastTick ? this.increment(e, h, void 0, d, 1) : (b || c.incrementedLastTick) && this.increment(e, r.round(h / 2), void 0, d, 2), c.incrementedLastTick = b) : b && ("delta" === c.incrementValue ?
          this.increment(e, h, void 0, d, 3) : "addReturnValue" === c.incrementValue ? this.increment(e, b, void 0, d, 4) : "setReturnValue" === c.incrementValue && this.set(e, b));
         "function" === typeof c.postIncrementationFn && c.postIncrementationFn(b)
        }
       }
     }
    }
   };
   a.bd.c = function(k, d) {
    if (!k) return !1;
    var h;
    k[d] ? h = k[d] : (h = new a.bd.b(d), k[d] = h);
    return h
   };
   a.bd.d = function(k, d, h) {
    if (!d) return !1;
    d = a.bd.c(d, h);
    k.secondaryCounters = k.secondaryCounters || [];
    k.secondaryCounters.push(d);
    return d
   }
  })(m);
  (function(a) {
   function k(d, h, f) {
    this.name = d;
    this.reachedInViewTimeThreshold = !1;
    this.alwaysInview = !0;
    this.queryStringKey = f.queryStringKey;
    this.timeThreshold = f.timeThreshold || 1E3;
    this.rawPercThreshold = f.percThreshold / 100 || 50;
    this.percThreshold = r.min(f.percThreshold / 100, .98);
    this.continuous = f.continuous || !1;
    this.timePercent = f.timePercent;
    this.capTimeThreshold = f.capTimeThreshold;
    this.audible = f.audible || !1;
    this.video = f.video || !1;
    this.fullscreen = f.fullscreen || !1;
    "undefined" !== this.timeThreshold && (this.timeThreshold = r.max(this.timeThreshold, 1));
    this.counterState = {};
    d = a.bd.c(this.counterState,
     "customInViewCounter");
    d.set("inViewTime", 0);
    d.set("continuousInViewTime", 0);
    d.set("maxContinuousInViewTime", 0);
    d.set("visOnLastCheck", !1);
    d.set("_tLastChecked", (new p).getTime())
   }
   a.ae = {};
   a.ae.c = {};
   a.ae.d = {};
   a.ae.e = function(d, h, f) {
    if (a.ae.c.hasOwnProperty(d) || void 0 == f.percThreshold && void 0 == f.fullscreen || void 0 == f.timeThreshold && void 0 == f.timePercent) return !1;
    h = new k(d, h, f);
    return a.ae.c[d] = h
   };
   a.ae.f = function(d) {
    return a.e.c() || !a.ae.c.hasOwnProperty(d) ? !1 : a.ae.c[d]
   };
   a.ae.a = function() {
    var d, h;
    for (h in a.ae.c)
     if (a.ae.c.hasOwnProperty(h) &&
      (d = a.ae.f(h), !d.reachedInViewTimeThreshold)) return !1;
    return !0
   };
   k.prototype.update = function(d, h, f) {
    if (d && this.isMeasurable(d) && !this.reachedInViewTimeThreshold) {
     var g, e = a.bd.c(this.counterState, "customInViewCounter"),
      c = a.aa.i(d.zr, !0);
     if (c) {
      var b = c.getLastInviewPercent();
      customInviewPercentThreshold = (g = c.getFullyInViewThreshold()) && "number" === typeof g ? r.min(this.percThreshold, g) : this.percThreshold;
      e.get("_tLastChecked");
      e.set("_tLastChecked", f);
      f = !0;
      c.getCareAboutFocus && (f = c.getCareAboutFocus());
      d =
       c.getPauseCheckingFn ? c.getPauseCheckingFn()(d) : a.t.c(d);
      b = b >= customInviewPercentThreshold;
      c = !f || a.focus.pageIsVisible();
      a.ae.g && "function" === typeof a.ae.g && (b = a.ae.g(b));
      a.ae.h && "function" === typeof a.ae.h && (c = a.ae.h(c));
      b = b && c && !d;
      d = e.get("visOnLastCheck");
      if (b && d) e.increment("inViewTime", h), e.increment("continuousInViewTime", h);
      else if (b || d) h = r.round(h / 2), e.increment("inViewTime", h), e.increment("continuousInViewTime", h);
      b || (this.alwaysInview = !1);
      e.set("visOnLastCheck", b);
      e.get("continuousInViewTime") >
       e.get("maxContinuousInViewTime") && e.set("maxContinuousInViewTime", e.get("continuousInViewTime"));
      b || e.set("continuousInViewTime", 0);
      this.inViewTimeReached() && (this.reachedInViewTimeThreshold = !0)
     }
    }
   };
   k.prototype.getInViewTime = function() {
    var d = a.bd.c(this.counterState, "customInViewCounter");
    return this.continuous ? d.get("maxContinuousInViewTime") : d.get("inViewTime")
   };
   k.prototype.inViewTimeReached = function() {
    return "undefined" !== this.timeThreshold && this.getInViewTime() >= this.timeThreshold
   };
   k.prototype.isMeasurable =
    function(d) {
     if (!d) return !1;
     var h = !1;
     "undefined" !== this.timeThreshold && ("pscope" == a.aa.a(d.zr, !0) && d.custominview.periscopeThresholds ? a.b.ai(d.custominview.periscopeThresholds, this.rawPercThreshold) && a.d.dr(d) && (h = !0) : a.d.dr(d, !0) && (h = !0));
     return h
    };
   a.ae.i = function(d) {
    if (d && d.isMeasurabilityDisabled()) return !1;
    a.ae.e("full_vis_2_sec_continuous", d, {
     percThreshold: 100,
     timeThreshold: 2E3,
     video: !1,
     continuous: !0,
     queryStringKey: "wb"
    })
   };
   a.ae.j = function(d) {
    a.ae.i(d);
    d.custominview = {};
    d.custominview.eventIds = {};
    for (var h = (d.periscopeConfig || a.r.m(d)).pixels, f = [], g = 0, e = h.length; g < e; g++) f.push(parseFloat(h[g].position.top, 10) / 100);
    d.custominview.periscopeThresholds = f;
    d.custominview.eventIds.viewCounterStarted = a.m.a.azsx("viewCounterStarted", a.ae.k);
    d.custominview.eventIds["periscope:onStateChange"] = a.m.a.azsx("periscope:onStateChange", a.ae.k, {
     priority: 5
    });
    d.custominview.eventIds.adKilled = a.m.a.azsx("adKilled", a.ae.l);
    a.ae.k(d)
   };
   a.ae.k = function(d) {
    void 0 !== d && (isNaN(d) || (d = w[d]), d && d.custominview && d.custominview.eventIds &&
     a.d.dr(d, !0) && !d.custominview.eventIds["view:tick"] && (d.custominview.eventIds["view:tick"] = a.m.a.azsx("view:tick", a.b.cl([d], a.ae.m), {
      priority: 6
     })))
   };
   a.ae.m = function(d, h, f) {
    if (d && d.isMeasurabilityDisabled()) return !1;
    for (var g in a.ae.c) a.ae.c.hasOwnProperty(g) && a.ae.c[g].update(d, h, f)
   };
   a.ae.l = function(d) {
    d && d.custominview && d.custominview.eventIds && (a.m.a.sxaz("view:tick", {
      id: d.custominview.eventIds["view:tick"],
      priority: 6
     }), a.m.a.sxaz("viewCounterStarted", {
      id: d.custominview.eventIds.viewCounterStarted
     }),
     a.m.a.sxaz("periscope:onStateChange", {
      id: d.custominview.eventIds["periscope:onStateChange"]
     }), a.m.a.sxaz("adKilled", {
      id: d.custominview.eventIds.adKilled
     }), a.m.a.sxaz("video:AdVideoComplete", {
      id: d.custominview.eventIds["video:AdVideoComplete"]
     }))
   };
   a.ae.n = function() {
    a.m.a.sxaz("startAdTracking", {
     id: a.ae.d.startAdTracking
    });
    a.m.a.sxaz("allLocalAdsKilled", {
     id: a.ae.d.allLocalAdsKilled
    })
   };
   a.ae.b = function(d, h) {
    if (d) {
     for (var f in a.ae.c)
      if (a.ae.c.hasOwnProperty(f)) {
       var g = a.ae.f(f);
       g && ("custom_inview_module_counter" ===
        f ? (h.wm = 0, h.wi = 0, !a.e.c() && g.isMeasurable(d) && (h.wm = 1, g.inViewTimeReached() && (h.wi = 1))) : void 0 != g.queryStringKey && (h[g.queryStringKey] = 0, !a.e.c() && g.isMeasurable(d) && (h[g.queryStringKey] = 1, g.inViewTimeReached() && (h[g.queryStringKey] = 2))))
      } return h
    }
   };
   a.ae.o = function(d) {
    if (!d) return !1;
    d = !1;
    for (var h in a.ae.c)
     if (a.ae.c.hasOwnProperty(h)) {
      var f = a.ae.f(h);
      f && "custom_inview_module_counter" === h && (d = f.reachedInViewTimeThreshold)
     } return d
   };
   a.ae.d.startAdTracking = a.m.a.azsx("startAdTracking", a.ae.j);
   a.ae.d.allLocalAdsKilled =
    a.m.a.azsx("allLocalAdsKilled", a.ae.n)
  })(m);
  (function(a) {
   a.be = {};
   a.be.a = !1;
   a.be.b = function(k) {
    k && k.zMoatENV && "x" === k.zMoatENV && (a.be.a = !0)
   }
  })(m);
  (function(a) {
   function k() {
    c++;
    f = d.pageYOffset;
    e = d.pageXOffset;
    f != h && (a.ay.a.YCoord.push(f.toFixed(2)), a.ay.a.time.push(c), h = f);
    e != g && (a.ay.b.XCoord.push(e.toFixed(2)), a.ay.b.time.push(c), g = e)
   }
   var d, h, f, g, e, c = 0,
    b = !1;
   a.ay = a.ay || {};
   a.ay.c = function() {
    return function() {
     if (!b && a.d.e) {
      d = a.d.g;
      b = !0;
      h = d.pageYOffset;
      g = d.pageXOffset;
      a.ay.a = {
       YCoord: [d.pageYOffset],
       time: [0]
      };
      a.ay.b = {
       XCoord: [d.pageXOffset],
       time: [0]
      };
      var c = "scrollInfo#" + (new p).getTime();
      a.o.g(k, {}, 1E3, c)
     }
    }
   }()
  })(m);
  (function(a) {
   function k(a) {
    for (var b, e = [], d = 0; 100 >= d; d++) e.push(0 === d ? 0 : d / 100);
    try {
     b = new IntersectionObserver(a, {
      rootMargin: "0px",
      threshold: e
     })
    } catch (f) {
     return !1
    }
    return b
   }

   function d(a) {
    return function(b, e) {
     var d = b.length;
     1 > d || (d = b[d - 1], a.percentVisible = d.intersectionRatio, a.visibleRect = d.intersectionRect, a.elementRect = d.boundingClientRect)
    }
   }

   function h(a) {
    var b = a && a.intersectionObserver,
     b = b &&
     b.observer;
    try {
     b && (b.disconnect(), a.intersectionObserver = null)
    } catch (e) {}
   }

   function f(a) {
    a && a.intersectionObserver && (h(a), g(a))
   }

   function g(c) {
    var b, g, u;
    b = {
     started: !1,
     observer: null,
     percentVisible: null,
     visibleRect: null,
     elementRect: null,
     element: function(a) {
      return function() {
       return a && a.aa
      }
     }(c)
    };
    c.intersectionObserver = b;
    g = b.element();
    if (g && (u = k(d(b)))) {
     b.observer = u;
     try {
      u.observe(g)
     } catch (m) {
      return !1
     }
    } else return !1;
    b.started = !0;
    a.m.a.azsx("adKilled", a.b.cl([c], h), {
     condition: function(a) {
      return "object" ===
       typeof c && "object" === typeof a && c.zr == a.zr
     },
     once: !0
    });
    a.m.a.azsx("adElementUpdate", a.b.cl([c], f), {
     condition: function() {
      return c && c.intersectionObserver && c.intersectionObserver.started
     },
     once: !0
    });
    e && e.startTracking(c);
    return !0
   }
   a.ai = {};
   var e = function(a) {
    function b(a, b, c, e) {
     function d(a, e) {
      var f = a.length;
      1 > f || (f = a[f - 1], f = f.intersectionRatio, 0 >= f || !g || g(b, c) && e.disconnect())
     }

     function f() {
      for (var a = [], b = 0; 100 >= b; b++) a.push(0 === b ? 0 : b / 100);
      return a
     }
     var g = a && window && window[a];
     return g ? function() {
      try {
       var a =
        new IntersectionObserver(d, {
         rootMargin: "0px",
         threshold: f()
        });
       if (!e) return !1;
       a.observe(e);
       return function() {
        a.disconnect();
        a = null
       }
      } catch (b) {
       return !1
      }
     }() : !1
    }

    function e(a) {
     h && (h.killAllPixels(), h = null);
     a && a.periscopeManager && (a.periscopeManager = null)
    }

    function d(b, e) {
     if (!b || "undefined" === typeof e) return !1;
     var f = a.b.by(e);
     if (!f || !f.isValidAdSize()) return !1;
     f = {
      "topLeft:": !1,
      "topRight:": !1,
      "bottomLeft:": !1,
      "bottomRight:": !1
     };
     f[b] = !0;
     a.m.a.zaxs("adEdgesViewStatus", e, f);
     return !0
    }

    function f(e) {
     if (!e) return !1;
     var g = e.adCount,
      h = e.name,
      l = e.element,
      k = e.parent,
      n = e.top,
      m = e.left,
      t = e.width;
     e = e.height;
     var p = r.floor(1E8 * r.random());
     return {
      name: h,
      id: "MoatPxIOPT" + g + "_" + p,
      target: l,
      container: k,
      dimensions: {
       width: t,
       height: e
      },
      position: {
       top: n,
       left: m
      },
      onWidthCheck: a.r.l,
      customPixel: !0,
      customFn: b,
      callback: d,
      callbackName: "MoatPxIOPT" + p,
      preserveDom: !1,
      customPixelDiv: !0
     }
    }

    function g(b) {
     if (!b) return !1;
     var e = b.zr,
      d = b.aa,
      h = d && d.parentNode;
     if (!d || !h) return !1;
     var l = b.INITIAL_WIDTH;
     b = b.INITIAL_HEIGHT;
     l = a.b.ch(l) ? l - .98 * l : 1;
     b = a.b.ch(b) ?
      b - .98 * b : 1;
     var l = (b = {
       width: l + 1,
       height: b + 1
      }, b.width),
      k = b && b.height,
      n = [],
      u;
     b = 1;
     for (var m = [
       ["topLeft", "0px", "0px"],
       ["topRight", "0px", "100%"],
       ["bottomLeft", "100%", "0px"],
       ["bottomRight", "100%", "100%"]
      ], t = 0, p = m.length; t < p; t++) u = m[t], n.push(f({
      adCount: e,
      name: u[0],
      element: d,
      parent: h,
      top: u[b],
      left: u[2],
      width: l,
      height: k
     }));
     return {
      insertableFunc: a.d.dk,
      pixels: n
     }
    }
    var h;
    return {
     startTracking: function(b) {
      if (b && !a.d.fg && !a.ab.g(b.zr)) {
       var d = g(b);
       d && (b.periscopeConfig = d, a.r.z(b), h = b.periscopeManager, a.m.a.azsx("adKilled",
        a.b.cl([b], e), {
         condition: function(a) {
          return "object" === typeof b && "object" === typeof a && b.zr == a.zr
         },
         once: !0
        }), a.m.a.azsx("passthrough", a.b.cl([b], e), {
        once: !0
       }))
      }
     }
    }
   }(a);
   a.ai.a = function(c) {
    if (a.d.dk()) {
     if (c.intersectionObserver && c.intersectionObserver.started) return c.intersectionObserver.percentVisible;
     g(c) || a.d.dk(!1)
    }
   }
  })(m);
  (function(a) {
   a.af = {};
   a.af.a = function(a, d, h, f) {
    function g() {
     c("unload", g);
     c("beforeunload", g);
     p = !1;
     clearInterval(w)
    }

    function e(a, b, c) {
     a && b && c && ("function" === typeof a.addEventListener ?
      a.addEventListener(b, c) : "function" === typeof a.attachEvent && a.attachEvent("on" + b, c))
    }

    function c(a, b, c) {
     a && b && c && ("function" === typeof a.removeEventListener ? a.removeEventListener(b, c) : "function" === typeof a.detachEvent && a.detachEvent("on" + b, c))
    }

    function b(a) {
     if (a !== q) {
      var b = [{
       name: "fr",
       enabled: !0,
       inview: a
      }];
      t && t(b)
     }
     q = a
    }

    function l() {
     try {
      var a, c;
      10 > f ? (a = document.elementFromPoint(0, 0), c = !!a) : c = (a = document.msElementsFromPoint(0, 0)) && 0 < a.length;
      b(c)
     } catch (e) {}
     p && window.requestAnimationFrame(l)
    }

    function u() {
     clearInterval(w);
     w = window.setInterval(n, 100);
     window.requestAnimationFrame(m)
    }

    function m() {
     r ? b(!0) : r = !0;
     u()
    }

    function n() {
     b(!1)
    }
    var t = a && window && window.parent && window.parent[a],
     p = "function" === typeof window.requestAnimationFrame,
     q = !1,
     r = !1,
     w;
    a = navigator && navigator.appVersion && -1 < navigator.appVersion.search(/Edge\/\d*.\d*/) && !document.documentMode && !!window.StyleMedia;
    f = "string" === typeof f ? parseInt(f, 10) : NaN;
    (function() {
     document.body.style.overflow = "hidden";
     document.body.style.margin = "0px";
     document.body.style.padding =
      "0px";
     document.body.style.height = "1000px";
     var a = document.createElement("div");
     a.style.width = "300px";
     a.style.height = "250px";
     document.body.appendChild(a);
     e("unload", g);
     e("beforeunload", g)
    })();
    a ? u() : p ? window.requestAnimationFrame(l) : w = window.setInterval(l, 100)
   }
  })(m);
  (function(a) {
   function k() {
    a.d.ch(!1)
   }

   function d(b, c) {
    return function(e) {
     var d, f;
     if (c.dfp) a: {
      if (e && c && "message" === e.type && e.source == c.win && e.data && 0 == e.data.indexOf("amp-")) try {
       if (f = JSON.parse(e.data.substring(4)), f.sentinel == c.sentinel &&
        "intersection" == f.type) {
        d = f.changes;
        break a
       }
      } catch (g) {}
      d = !1
     }
     else d = e;
     if (e = d) d = e.length, 1 > d || (c.context && c.context.hidden ? e = 0 : (e = e[d - 1], d = e.rootBounds, d = {
      left: 0,
      right: d.width,
      top: 0,
      bottom: d.height
     }, d = a.y.p(c.element(), e.boundingClientRect, d), e = d.calcVisiblePercv(), (f = "sframe" === a.aa.a(c.zr)) && a.m.a.zaxs("rectsAvailable", b.zr, d.elementRect, d.visibleRect)), c.percentVisible = e)
    }
   }

   function h(b, c) {
    b.amp = {
     dfp: c.isDfp,
     win: c.win,
     sentinel: c.sentinel,
     started: !1,
     unlisten: null,
     eventHandler: null,
     percentVisible: null,
     context: a.d.eu(),
     element: function(a) {
      return function() {
       return a && a.aa
      }
     }(b),
     zr: b.zr
    };
    return b.amp
   }

   function f(a, c) {
    if (!c || !c.context || !c.context.observeIntersection) return k(), !1;
    c.eventHandler = d(a, c);
    c.unlisten = c.context.observeIntersection(c.eventHandler);
    c.unlisten || (c.unlisten = function() {
     c.unlisten = function() {}
    });
    c.started = !0
   }

   function g(b, c) {
    if (a.d.ew()) {
     var e = "amp-message-" + c.sentinel;
     c.messageId = e;
     c.eventHandler = d(b, c);
     q.dcsx.ynds(window, "message", e, "ampMessageFn" + e);
     q.swde.azsx(e, c.eventHandler);
     return c.started = !0
    }
    k();
    return !1
   }

   function e(b, e) {
    if (!b || !b.aa) return k(), !1;
    var d = h(b, e);
    e.isDfp ? g(b, d) : f(b, d);
    d.started && a.m.a.azsx("adKilled", c, {
     condition: function(a) {
      return b.zr == a.zr
     },
     once: !0
    })
   }

   function c(b) {
    var c = b && b.amp;
    if (!c) return !1;
    try {
     c.dfp ? (q.dcsx.engn(window, "message", c.messageId), a.m.a.sxaz(c.messsageId, c.eventHandler)) : c.unlisten && "function" == typeof c.unlisten && c.unlisten()
    } catch (e) {
     k()
    }
    b.amp = null
   }
   a.ak = {};
   a.ak.a = function(b) {
    b.amp && b.amp.started || e(b, a.d.ev());
    return b.amp.percentVisible
   }
  })(m);
  (function(a) {
   a.al = {};
   a.al.b = null;
   a.al.c = !1;
   a.al.d = !1;
   a.al.e = function(k) {
    k = k || a.d.bm();
    if (!k) return !1;
    var d;
    d = k.getCurrentPosition();
    k = k.getScreenSize();
    d.top = d.y;
    d.bottom = d.y + d.height;
    d.left = d.x;
    d.right = d.x + d.width;
    k.top = 0;
    k.bottom = k.height;
    k.left = 0;
    k.right = k.width;
    return {
     geom: d,
     screen: k
    }
   };
   a.al.f = function(k) {
    var d = a.al.e();
    if (!d) return !1;
    var h = d.screen,
     d = d.geom;
    return h && d ? (k = a.y.p(k, d, h)) ? k : !1 : !1
   };
   a.al.g = function(k, d, h) {
    if (d.api && "function" === typeof d.api.getVendor) {
     var f = d.api.getVendor(),
      g;
     "AdColony" ===
     f ? g = "exposureChange" : "AdMarvel" === f && (g = "viewablePercentageChange");
     if (g) {
      var e = function(a) {
       return function(b) {
        a.percv = b
       }
      }(d);
      d.api.addEventListener(g, e)
     }
     h || a.m.a.azsx("adKilled", function() {
      k.mraid.api.removeEventListener("viewablePercentageChange", e);
      k.mraid = null
     }, {
      condition: function(a) {
       return k.zr == a.zr
      },
      once: !0
     })
    }
   };
   a.al.h = function() {
    var k = {},
     d = a.d.bm();
    k.api = d;
    k.percv = -1;
    return k
   };
   a.al.a = function(k) {
    var d, h, f, g, e = !1;
    g = a.d.br();
    if (!k.mraid) {
     k.mraid = a.al.h();
     if (!k.mraid.api) return !1;
     g && a.al.g(k,
      k.mraid)
    }
    if (!k.mraid.api) return !1;
    f = a.al.f(k.aa);
    if (!f) return !1;
    d = r.floor(100 * f.calcVisiblePercv()) / 100;
    g && (h = r.floor(k.mraid.percv) / 100);
    g ? a.b.cw(h, d, .01) && (e = !0) : e = !0;
    e && "sframe" === a.aa.a(k.zr) && a.m.a.zaxs("rectsAvailable", k.zr, f.elementRect, f.visibleRect);
    return g && 0 <= h ? r.min(d, h) : d
   };
   a.al.i = function() {
    var k = a.d.an().isInApp,
     d = window === window.top,
     h = a.b.cq("_#OMF"),
     f = !a.d.bn(),
     g = !a.al.c;
    return k && d && h && f && g
   };
   (function() {
    if (a.al.i())
     for (var k = a.v.j(), d, h = 0, f = k.length; h < f; h++)(d = k[h]) && d.swde && d.swde.zaxs &&
      d.swde.zaxs("mraid")
   })();
   a.m.a.azsx("startAdTracking", a.d.bv)
  })(m);
  (function(a) {
   a.am = {};
   a.am.a = function(k) {
    k.amazon && k.amazon.started || a.am.b(k);
    return k.amazon.percentVisible
   };
   a.am.b = function(k) {
    var d = a.d.cm(),
     h = a.d.cj(),
     f = h && h.mraid,
     g = h && h.Event && h.Event.Viewability,
     e = f && "function" === typeof f.getScreenSize && f.getScreenSize,
     c;
    k.amazon = {
     api: d,
     element: k.aa,
     event: null,
     eventListener: null,
     getScreenSize: e,
     mraid: f,
     percentVisible: null,
     started: !1,
     win: h
    };
    if (!d || !g || !e) return !1;
    c = k.amazon;
    c.event = g;
    try {
     return c.eventListener =
      function(b) {
       var e = c.getScreenSize(),
        d, f;
       if ("viewable" in b) f = "viewable";
       else if ("viewablePercentage" in b) f = "viewablePercentage";
       else return !1;
       0 === b[f] ? c.percentVisible = 0 : c.element && e ? (d = (e = a.y.p(c.element, {
         left: b.x,
         right: b.x + b.width,
         top: b.y,
         bottom: b.y + b.height
        }, {
         left: 0,
         right: e.width,
         top: 0,
         bottom: e.height
        })) && e.calcVisiblePercv() || !1, b = b[f], b /= 100, f = a.b.ch(d) ? r.min(d, b) : b, c.percentVisible = f, (d = a.b.cw(d, b, .01) && "sframe" === a.aa.a(k.zr)) && a.m.a.zaxs("rectsAvailable", k.zr, e.elementRect, e.visibleRect)) :
        c.percentVisible = null
      }, c.api.addEventListener(g, c.eventListener), k.amazon.started = !0, a.m.a.azsx("adKilled", a.am.c, {
       condition: function(a) {
        return k.zr == a.zr
       },
       once: !0
      }), !0
    } catch (b) {
     return !1
    }
   };
   a.am.c = function(a) {
    if ((a = a.amazon) && a.eventListener && "function" == typeof a.eventListener && a.event) {
     try {
      a.api.removeEventListener(a.event, a.eventListener)
     } catch (d) {}
     a.started = !1
    }
   }
  })(m);
  (function(a) {
   a.ar = {};
   a.ar.c = r.floor(1E8 * r.random());
   a.ar.a = function(k, d, h, f) {
    if (q)
     if (a.d.c() && a.d.d()) q.jsonp || (q.jsonp = {}), q.jsonp[k] ||
      (q.jsonp[k] = {
       cachedResponse: !1
      }), a.p.p(k, h);
     else if (d && a.b.db() && (d += "_beta"), !q.jsonp || !q.jsonp[k]) {
     q.jsonp = q.jsonp || {};
     q.jsonp[k] = q.jsonp[k] || {
      cachedResponse: !1
     };
     var g = q.xb || window,
      e = g.document;
     g[d] = function(a) {
      q.jsonp[k].cachedResponse = a;
      q.swde.zaxs(k + "JsonpReady", a);
      g[d] = null
     };
     var c = e.createElement("script"),
      e = e.body || e.getElementsByTagName("head")[0] || e.getElementsByTagName("script")[0];
     "undefined" === typeof f && (f = "callback");
     h = [h, "&", f, "=", d].join("");
     a.b.bw(h, e, c)
    }
   };
   a.ar.b = function(k, d) {
    q.jsonp &&
     q.jsonp[k] && q.jsonp[k].cachedResponse ? a.b.cl([q.jsonp[k].cachedResponse], d)() : q.swde.azsx(k + "JsonpReady", d, {
      once: !0
     })
   }
  })(m);
  (function(a) {
   function k(e, c, b) {
    var d = a.ab.h[e].stateMask;
    if (c = g[c] * (b ? 16 : 1)) a.ab.h[e].stateMask = d | c << 0
   }

   function d(e, c, b, d) {
    b = a.b.cw(e.x, c.x, b);
    e = a.b.cw(e.y, c.y, d);
    return b && e
   }

   function h(e, c) {
    a.ab && a.ab.h[e] && (a.ab.h[e].allEdgesSeen = !0, a.b.forEach(a.ab.h[e].mediatorIds, function(b, c) {
     a.m.a.sxaz(c, {
      id: b
     })
    }), c && (a.ab.h[e].failsafe = !0), a.m.a.zaxs("passthrough"))
   }
   var f = {};
   a.ab = {};
   a.ab.i = 242500;
   a.ab.j = 1;
   a.ab.h = {};
   var g = {
    topLeft: 8,
    topRight: 4,
    bottomLeft: 2,
    bottomRight: 1
   };
   a.ab.k = function(e) {
    if (!e || e && e.isMeasurabilityDisabled() || a.e.c()) return !1;
    var c, b;
    a.d["do"]() && (c = !0);
    a.r && a.r.a && e.periscopeManager && e.periscopeManager.fullyMeasurable && (b = !0);
    return a.d.dj() || a.d.ds() || c || b
   };
   a.ab.a = function(e) {
    return "number" !== typeof e || a.b.j() ? !1 : 236425 <= e
   };
   a.ab.l = function(a) {
    return a && a.ao ? "slave" == a.ao.moatClientAT ? !0 : !1 : !1
   };
   a.ab.m = function(a) {
    return a && a.ao ? "cpc" == a.ao.moatClientBT ? !0 :
     !1 : !1
   };
   a.ab.n = function(a) {
    return a && a.ao ? "cpcv" == a.ao.moatClientBT ? !0 : !1 : !1
   };
   a.ab.o = function(a) {
    return a && a.ao ? "flatrate" == a.ao.moatClientBT ? !0 : !1 : !1
   };
   a.ab.p = function(a) {
    return a && a.ao ? "skin" == a.ao.moatClientAT || "hpto" == a.ao.moatClientAT || 1 == a.ao.skin ? !0 : !1 : !1
   };
   a.ab.f = function(e) {
    if (!e || !e.aa) return !1;
    if ("undefined" != typeof e.er) return e.er;
    e.video ? !a.ab.k(e) || a.ab.n(e) && !e.video.reachedComplete || (e.er = !0) : a.ab.l(e) || a.ab.m(e) || a.ab.o(e) ? e.er = !1 : a.ab.p(e) || e.isCompositeAd || a.ab.a(a.b.cb(e)) ? e.er = !0 : a.ab.k(e) && a.aa.u(e, a.ab.j, !0) && (e.er = !0);
    return e.er || !1
   };
   a.ab.b = function(e) {
    if (!e || e.SENT_FIT && e.et || !a.ab.k(e)) return !1;
    var c, b, d = a.aa.a(e.zr);
    e.SENT_FIT || (c = a.aa.j(e, d, "hadFIT"));
    e.et || (b = a.aa.j(e, d, "hadFullOTS"));
    if (c || b) a.t.d(e), e.SENT_FIT = e.SENT_FIT || !!c, e.et = e.et || !!b;
    return c || b
   };
   a.ab.q = function(e, c, b) {
    var f;
    a.b.forEach([null, void 0, !1], function(a) {
     if (f = c === a || b === a) return !1
    });
    if (!0 === f || !0 !== (a.b.ch(c.top) && a.b.ch(c.bottom) && a.b.ch(b.bottom) && a.b.ch(b.top)) || c.top === c.bottom || c.left ===
     c.right || b.top === b.bottom || b.left === b.right) return !1;
    var g = c.right - c.left,
     h = c.bottom - c.top,
     k = g * (1 - .98),
     m = h * (1 - .98),
     p = {
      x: c.left,
      y: c.top
     },
     q = {
      x: c.right,
      y: c.top
     },
     A = {
      x: c.left,
      y: c.bottom
     },
     w = {
      x: c.right,
      y: c.bottom
     },
     E = c.left + k,
     B = c.top + m,
     y = c.right - k,
     C = c.top + m,
     D = c.left + k,
     F = c.bottom - m,
     k = c.right - k,
     m = c.bottom - m,
     G = {
      x: b.left,
      y: b.top
     },
     H = {
      x: b.right,
      y: b.top
     },
     I = {
      x: b.left,
      y: b.bottom
     },
     M = {
      x: b.right,
      y: b.bottom
     },
     g = r.ceil(.01 * g),
     h = r.ceil(.01 * h),
     p = d(p, G, g, h),
     q = d(q, H, g, h),
     A = d(A, I, g, h),
     w = d(w, M, g, h);
    a.ab.r(e, {
     topLeft: p,
     topRight: q,
     bottomLeft: A,
     bottomRight: w
    }, {
     topLeft: E >= b.left && B >= b.top,
     topRight: y <= b.right && C >= b.top,
     bottomLeft: D >= b.left && F <= b.bottom,
     bottomRight: k <= b.right && m <= b.bottom
    })
   };
   a.ab.s = function(e) {
    if ("undefined" !== typeof e && 0 <= e && !a.ab.h[e]) {
     a.ab.h[e] = {};
     a.ab.h[e].allEdgesSeen = !1;
     a.ab.h[e].mediatorIds = {};
     a.ab.h[e].outer = {
      topLeft: !1,
      topRight: !1,
      bottomLeft: !1,
      bottomRight: !1
     };
     a.ab.h[e].inner = {
      topLeft: !1,
      topRight: !1,
      bottomLeft: !1,
      bottomRight: !1
     };
     a.ab.h[e].stateMask = 0;
     var c = "rectsAvailable",
      b = a.m.a.azsx(c, a.ab.q);
     a.ab.h[e].mediatorIds[c] =
      b;
     c = "adEdgesViewStatus";
     b = a.m.a.azsx(c, a.ab.r);
     a.ab.h[e].mediatorIds[c] = b;
     c = "adFullyVisible";
     b = a.m.a.azsx(c, h, {
      condition: function(b, c) {
       return b && c && !a.ab.g(b.zr) && a.aa && a.aa.a && c === a.aa.a(b.zr)
      },
      once: !0
     });
     a.ab.h[e].mediatorIds[c] = b
    }
   };
   a.ab.t = function(e) {
    return a.ab.h[e].failsafe
   };
   a.ab.r = function(e, c, b) {
    function d(l, m, p) {
     p && (a.b.forEach(["topLeft", "topRight", "bottomLeft", "bottomRight"], function(a) {
      !f[a] && c[a] && (f[a] = !0, k(e, a, !0));
      !g[a] && b[a] && (g[a] = !0, k(e, a, !1))
     }), (f.topLeft && f.topRight && g.bottomLeft &&
      g.bottomRight || g.topLeft && g.topRight && f.bottomLeft && f.bottomRight || f.topLeft && f.bottomLeft && g.topRight && g.bottomRight || g.topLeft && g.bottomLeft && f.topRight && f.bottomRight) && h(e))
    }
    if (!0 !== a.ab.h[e].allEdgesSeen) {
     b && "object" === typeof b || (b = c);
     var f = a.ab.h[e].outer,
      g = a.ab.h[e].inner;
     a.m.a.azsx("adCheckingState", d, {
      once: !0,
      condition: function(b, c) {
       return a.aa.a(b.zr) === c
      }
     })
    }
   };
   a.ab.g = function(e) {
    return "undefined" !== typeof e && e in a.ab.h ? a.ab.h[e].allEdgesSeen : !1
   };
   (function(a) {
    function c(a, b) {
     return function(c) {
      var e =
       a.maxContinuouslyInViewTime,
       d = b.get("currentContinuouslyInViewTime");
      d > e && (a.maxContinuouslyInViewTime = d, a.checkMilestoneReached());
      c || b.set("currentContinuouslyInViewTime", 0)
     }
    }

    function b() {
     return !1
    }

    function d(b) {
     var c = b.fixedInViewTimeRequirement;
     this.percvRequired = b.percvRequired;
     this.shouldConsiderLargeAds = a.b.ch(b.largeAdSize);
     this.largeAdSize = b.largeAdSize;
     this.largePercvRequired = b.largePercvRequired;
     this.requiresPassthrough = b.requiresPassthrough;
     this.qsKey = b.qsKey;
     b.percvRequiredPassthrough &&
      (this.percvRequiredPassthrough = b.percvRequiredPassthrough);
     this.getInViewTimeRequirement = function(a) {
      return c
     }
    }

    function g(b, c) {
     return a.b.j() ? c === a.ab.d.n ? a.ab.d.n.b : a.ab.e.m.b : c === a.ab.d.n ? a.ab.d.n.a : a.ab.e.m.a
    }

    function h(b, d, g) {
     this.label = g;
     this.config = d;
     this.groupmMilestoneReached = !1;
     this.maxContinuouslyInViewTime = 0;
     this.ad = b;
     this.fullViewEventPixelFired = !1;
     var l = this;
     g = a.bd.d(b, a.ab.u, "groupm_counter_" + b.yg + r.random());
     var k = c(l, g);
     if (d === a.ab.e.m.a || d === a.ab.e.m.b) d = a.m.a.azsx("fullOtsReached",
      function() {
       l.groupmMilestoneReached = !0;
       l.milestoneFailsafeTriggered = !0
      }, {
       once: !0,
       condition: function(c, d) {
        var f = a.aa.a(b.zr);
        return c.zr === b.zr && d === f
       }
      }), f[b.zr] = d;
     this.checkMilestoneReached = function() {
      var b;
      b = l.maxContinuouslyInViewTime;
      var c;
      if (!0 === l.groupmMilestoneReached) return !0;
      c = l.config.getInViewTimeRequirement();
      b = l.config.requiresPassthrough(l.ad) ? a.ab.g(l.ad.zr) && b >= c : b >= c;
      l.groupmMilestoneReached = b;
      !l.fullViewEventPixelFired && b && (l.fullViewEventPixelFired = !0, l.ad.fireFullViewEvent = !0);
      return l.groupmMilestoneReached
     };
     g.set("currentContinuouslyInViewTime", 0, {
      useDeltaCompensation: !0,
      shouldIncrementFn: function(b, c) {
       var d, f;
       d = c.getLastInviewPercent();
       var g = l.config.percvRequired,
        h = l.config.largePercvRequired;
       f = a.b.cb(b);
       d = l.config.requiresPassthrough(l.ad) ? d >= l.config.percvRequiredPassthrough : (f = l.config.shouldConsiderLargeAds && f >= l.config.largeAdSize) ? d >= h : d >= g;
       return d
      },
      postIncrementationFn: k
     })
    }
    a.ab.u = {};
    a.ab.d = {};
    a.ab.d.b = .98;
    a.ab.d.c = 237650;
    a.ab.d.d = .5;
    a.ab.d.e = a.ab.d.b;
    a.ab.d.f =
     1E3;
    a.ab.d.g = a.ab.d.f;
    a.ab.d.h = .98;
    a.ab.d.i = 294E3;
    a.ab.d.j = .8;
    a.ab.d.k = 15E3;
    a.ab.d.l = "im";
    a.ab.d.m = "hj";
    a.ab.d.n = {};
    a.ab.d.n.a = {};
    a.ab.d.n.b = {};
    var k = {
     percvRequired: a.ab.d.b,
     largeAdSize: a.ab.d.c,
     largePercvRequired: a.ab.d.d,
     requiresPassthrough: b,
     fixedInViewTimeRequirement: a.ab.d.f,
     viewTimeCap: !1,
     qsKey: a.ab.d.l
    };
    a.ab.d.n.a = new d(k);
    a.ab.d.n.b = a.ab.d.n.a;
    a.ab.e = {};
    a.ab.e.b = .98;
    a.ab.e.c = 237650;
    a.ab.e.d = .5;
    a.ab.e.e = .98;
    a.ab.e.f = 1E-4;
    a.ab.e.g = 1E3;
    a.ab.e.h = 1E3;
    a.ab.e.i = .98;
    a.ab.e.j = 294E3;
    a.ab.e.k = .8;
    a.ab.e.l =
     15E3;
    a.ab.e.m = {};
    a.ab.e.m.a = {};
    a.ab.e.m.b = {};
    a.ab.e.n = "in";
    a.ab.e.o = "hj";
    k = {
     percvRequired: a.ab.e.b,
     largeAdSize: a.ab.e.c,
     largePercvRequired: a.ab.e.d,
     requiresPassthrough: b,
     fixedInViewTimeRequirement: a.ab.e.g,
     viewTimeCap: !1,
     qsKey: a.ab.e.n
    };
    a.ab.e.m.a = new d(k);
    k = {
     percvRequired: a.ab.e.e,
     percvRequiredPassthrough: a.ab.e.f,
     largeAdSize: !1,
     largePercvRequired: !1,
     requiresPassthrough: function(b) {
      var c;
      c = a.d.s(a.d.g);
      var d = b.currentWidth || 0,
       f = b.currentHeight || 0;
      a.d.bl ? (b = a.d.x, c = a.d.y) : (b = c.width || 0, c = c.height ||
       0);
      return b && c ? f > c || d > b : !1
     },
     fixedInViewTimeRequirement: a.ab.e.h,
     viewTimeCap: !1,
     qsKey: a.ab.e.n
    };
    a.ab.e.m.b = new d(k);
    a.ab.d.a = function(b) {
     var c = g(b, a.ab.d.n);
     if (!1 !== c) return a.ab.s(b.zr), b.groupmV2 = b.groupmV2 || new h(b, c, "GroupM V2"), b.groupmV2
    };
    a.ab.e.a = function(b) {
     var c = g(b, a.ab.e.m);
     if (!1 !== c) return a.ab.s(b.zr), b.groupmV3 = b.groupmV3 || new h(b, c, "GroupM V3"), b.groupmV3
    };
    a.ab.c = function(a, b) {
     b = b || {};
     var c = w[a];
     if ("object" !== typeof c) return b;
     if ("object" === typeof c.groupmV2) {
      var e = c.groupmV2.config.qsKey;
      b[e] = c.groupmV2.checkMilestoneReached() ? 1 : 0
     }
     "object" === typeof c.groupmV3 && (e = c.groupmV3.config.qsKey, b[e] = c.groupmV3.checkMilestoneReached() ? 1 : 0);
     return b
    }
   })(a);
   a.m.a.azsx("adKilled", function(e) {
    if (e && !e.ep && (f.hasOwnProperty(e.zr) && a.m.a.sxaz("fullOtsReached", {
      id: f[e.zr]
     }), a.ab && a.ab.u && "object" === typeof a.ab.u))
     for (var c in a.ab.u) a.ab.u.hasOwnProperty(c) && -1 < a.b.indexOf(c, "groupm_counter_" + e.yg) && delete a.ab.u[c]
   })
  })(m);
  (function(a) {
   function k(d, e) {
    return function(c, b) {
     var e, f;
     e = {
      large: d.config.LARGE_SIZE_REQ,
      normal: d.config.NORMAL_SIZE_REQ
     };
     var h = b.getLastInviewPercent();
     f = a.b.cb(c);
     e = (f = a.b.j() ? !1 : f >= d.config.LARGE_AD_THRESHOLD) && h >= e.large || !f && h >= e.normal;
     return d.fullyVisOnLastCheck = e
    }
   }

   function d(d, e) {
    return function(c) {
     var b = d.maxContinuouslyInViewTime,
      f = e.get("currentContinuouslyInViewTime");
     f > b && (d.maxContinuouslyInViewTime = f, b = f >= d.config.TIME_THRESHOLD, a.d.dr(d.ad) && !d.fullViewEventPixelFired && b && (d.fullViewEventPixelFired = !0, e.set("currentContinuouslyInViewTime", 0, {}), d.ad.fireFullViewEvent = !0));
     c || e.set("currentContinuouslyInViewTime", 0)
    }
   }

   function h(g, e) {
    this.ad = g;
    this.label = e;
    this.counters = {};
    this.config = f.config;
    this.fullViewEventPixelFired = !1;
    this.maxContinuouslyInViewTime = 0;
    this.fullyVisOnLastCheck = !1;
    var c = a.bd.d(this.ad, this.counters, "publicis_counter_" + g.yg + r.random()),
     b = k(this, c),
     h = d(this, c);
    c.set("currentContinuouslyInViewTime", 0, {
     useDeltaCompensation: !0,
     shouldIncrementFn: b,
     postIncrementationFn: h
    })
   }
   a.an = {};
   var f = {
    v1: {},
    config: {}
   };
   f.v1.display = {};
   f.v1.display.LARGE_AD_THRESHOLD =
    237650;
   f.v1.display.NORMAL_SIZE_REQ = .98;
   f.v1.display.LARGE_SIZE_REQ = .3;
   f.v1.display.TIME_THRESHOLD = 1E3;
   f.v1.video = {};
   f.v1.video.LARGE_AD_THRESHOLD = 237650;
   f.v1.video.NORMAL_SIZE_REQ = .98;
   f.v1.video.LARGE_SIZE_REQ = .5;
   f.v1.video.TIME_THRESHOLD = 2E3;
   f.v1.display.VIEWABLE_KEY = "pd";
   f.v1.video.VIEWABLE_KEY = "pv";
   f.config = f.v1.display;
   a.an.b = function(a) {
    a.publicis = a.publicis || new h(a, "Publicis V1");
    return a.publicis
   };
   a.an.a = function(a, e) {
    e = e || {};
    var c = w[a];
    if ("object" !== typeof c) return e;
    c = c.publicis;
    "object" ===
    typeof c && (e[c.config.VIEWABLE_KEY] = c.fullViewEventPixelFired ? 1 : 0);
    return e
   };
   a.m.a.azsx("adKilled", function(d) {
    if (d && !d.ep && d.publicis && d.publicis.counters && "object" === typeof d.publicis.counters)
     for (var e in d.publicis.counters) d.publicis.counters.hasOwnProperty(e) && -1 < a.b.indexOf(e, "publicis_counter_" + d.yg) && delete d.publicis.counters[e]
   })
  })(m);
  (function(a) {
   function k(d) {
    if (d.version == a.bf.a) return !0;
    var g = a.bf.a + "-beta" === d.version,
     e = a.bf.a === d.version + "-beta";
    if ("moatframe" === d.type && (g || e)) return !0
   }
   a.bf = {};
   a.bf.a = "1.2";
   a.b.db() && (a.bf.a += "-beta");
   a.bf.prefix = "MSFAPI";
   a.bf.b = {};
   a.bf.c = {};
   var d = a.d.ay.a,
    h = a.d.ba;
   a.bf.d = /([a-z]+)#([a-z0-9.-]+)#([0-9]+)#([a-z]+)#([0-9]+)#(.+)/i;
   a.bf.e = /@([a-z0-9]+)@@(.*)/i;
   a.bf.f = function(f) {
    if (f) {
     var g = a.bf.g(f);
     g.listening || (q.dcsx.ynds(f, "message", "message-" + d, "ME-" + d), g.listening = !0);
     var e = q.swde.azsx("message-" + d, a.bf.h);
     a.m.a.azsx("allLocalAdsKilled", function() {
      q.swde.sxaz("message-" + d, {
       id: e
      });
      a.bf.i(f)
     }, {
      once: !0
     })
    }
   };
   a.bf.g = function(f) {
    var g = "Moat#PML#" + a.d.at +
     "#" + a.bf.a;
    f[g] || (f[g] = {
     id: d,
     listening: !1
    });
    return f[g]
   };
   a.bf.i = function(f) {
    var g = f && a.bf.g(f);
    a.o.d(f, "message", a.bf.h);
    q.dcsx && q.dcsx.engn({
     listenerName: "ME-" + d
    });
    q.swde.sxaz("message-" + d, {
     callback: a.bf.h
    });
    g && (g.listening = !1)
   };
   a.bf.j = function(d) {
    return a.bf.prefix + "#" + d + "#"
   };
   a.bf.k = function(d) {
    var g = d.match(a.bf.d);
    d = !1;
    g && 7 == g.length && (d = {
     prefix: g[1],
     version: g[2],
     uid: g[3],
     type: g[4],
     request: g[5],
     data: g[6]
    }, (g = d.data.match(a.bf.e)) && 3 == g.length && (d.cmd = g[1], d.arg = g[2]), d.version && -1 !== a.b.indexOf(d.version,
     "-beta") && (d.isBeta = !0));
    return d
   };
   a.bf.h = function(d) {
    if (!(d && d.origin && d.data && "string" === typeof d.data)) return !1;
    var g = a.bf.k(d.data),
     e = g && g.uid == h.toString();
    if (g && !e && k(g) && (d.msgData = g, g.request in a.bf.c && (d.triggerCallback = function() {
      a.bf.c[g.request] && (a.bf.c[g.request](d), a.bf.c[g.request] = null, delete a.bf.c[g.request])
     }), a.bf.b[g.type]))
     for (var e = 0, c = a.bf.b[g.type].length; e < c; e++) a.bf.b[g.type][e](d)
   };
   a.bf.l = function(d, g) {
    a.bf.b[d] = [g]
   };
   a.bf.m = function(d, g, e, c) {
    "object" == typeof g && (g = a.b.bi(g));
    c = c || r.floor(1E10 * r.random());
    "function" == typeof e && (a.bf.c[c] = e);
    d = a.bf.j(a.bf.a) + h + "#" + d + "#" + c + "#" + g;
    return {
     request: c,
     msg: d
    }
   };
   a.bf.n = function(d, g, e, c, b) {
    "object" == typeof e && (e = a.b.bi(e));
    return a.bf.m(d, "@" + g + "@@" + e, c, b)
   };
   a.bf.o = function(d, g, e) {
    try {
     if (!d || !d || !d.source) return !1;
     d.source.postMessage(a.bf.m(d.msgData.type, g, e, d.msgData.request).msg, "*")
    } catch (c) {
     return !1
    }
    return !0
   };
   a.bf.p = function(d, g, e) {
    try {
     var c = a.k.i(g || window.top);
     if (!c) return a.o.f(function() {
      a.bf.p(d, g, e)
     }, 200);
     for (var b = 0; b <
      c.length; b++) e && c[b] == window || c[b].postMessage(d, "*")
    } catch (h) {}
   };
   a.m.a.azsx("modulesReady", a.b.cl([window], a.bf.f), {
    once: !0
   });
   a.m.a.azsx("stopPostMessageListeners", a.b.cl([window], a.bf.i), {
    once: !0
   })
  })(m);
  (function(a) {
   a.aj = {};
   a.aj.c = {};
   a.aj.c.a = "CF";
   a.aj.c.b = "CNF";
   a.aj.c.c = "CNS";
   a.aj.b = {};
   a.aj.b.b = !1;
   a.aj.b.c = [];
   a.aj.d = {};
   a.aj.e = {};
   var k = !1,
    d = [];
   a.aj.b.a = function() {
    var d = a.aj.f();
    a.aj.b.b || a.d.e || (d = a.bf.n("moatframe", "check", d, function(d) {
     (d = a.b.bj(d.msgData.data)) && d.available && !a.aj.b.b && (a.d.cd = !0, a.aj.b.b = !0, d = "MoatFrame#geom#" + (new p).getTime(), a.o.g(a.aj.b.d, null, 200, d), a.aj.b.c.push(d), a.m.a.azsx("allLocalAdsKilled", a.aj.g, {
      once: !0
     }), a.m.a.zaxs("Moatframe:Ready", d))
    }), a.bf.p(d.msg, !1, !0))
   };
   a.aj.h = function() {
    a.bf.l("moatframe", a.aj.i);
    a.bf.p(a.bf.m("moatframe", "ping").msg, !1, !0)
   };
   a.aj.a = function(d) {
    var f = a.aj.b.e;
    if (!f) return !1;
    var g = a.y.i(d.aa),
     e = a.y.o(g.rect, f.el, f.et),
     c = a.y.o(g.visibleRect, f.el, f.et),
     c = a.y.n(c, {
      left: f.vl,
      right: f.vr,
      top: f.vt,
      bottom: f.vb
     }),
     g = (c.right - c.left) * (c.bottom -
      c.top) / g.area,
     b = !1;
    f && "number" === typeof f.pv && !isNaN(f.pv) && (a.b.cw(g, f.pv, .01) && "sframe" === a.aa.a(d.zr) && (b = !0), g = r.min(g, f.pv));
    f.m || (b = !0);
    b && a.m.a.zaxs("rectsAvailable", d.zr, e, c);
    f && "boolean" === typeof f.ia && (a.d.ce = f.ia);
    f && "number" === typeof f.m && !isNaN(f.m) && (a.d.cf = f.m);
    return g
   };
   a.aj.j = function(d) {
    return "undefined" !== typeof d && a.aj.e && a.aj.e[d] ? (a.aj.e[d] = null, !0) : !1
   };
   a.aj.g = function() {
    var d = a.bf.m("moatframe", "kill", null);
    a.bf.p(d.msg, !1, !0)
   };
   a.aj.f = function() {
    var d = a.d.z,
     f = a.d.aa;
    return d &&
     f ? {
      width: d,
      height: f
     } : !1
   };
   a.aj.k = function() {
    return a.d.e || a.d.bq()
   };
   a.aj.l = function(d) {
    var f = !1;
    a.b.forEach(a.aj.c, function(a) {
     if (a == d) return f = !0, !1
    });
    return f
   };
   a.aj.i = function(d) {
    var f = d.msgData.cmd || d.msgData.data;
    if (f)
     if (d.triggerCallback) d.triggerCallback(d);
     else if (a.aj.d[f]) a.aj.d[f](d);
    else a.aj.l(f) || a.bf.o(d, a.aj.c.b)
   };
   a.aj.m = function(d) {
    var f = {},
     g = d.msgData.arg && a.b.bj(d.msgData.arg);
    a.aj.n(window, d.source, d.msgData.uid, g) && a.aj.k() ? f.available = !0 : f.available = !1;
    a.bf.o(d, f)
   };
   a.aj.o = function(d,
    f) {
    if (!d || !f) return !1;
    for (var g = a.k.c(window).pop(), e = a.k.k(d, 10), c = !1, b = !1, l = null, k = null, m, n = e.length - 1; 0 <= n; n--)
     if (e[n] == g && (c = !0), c && !a.k.j(e[n])) {
      k = e[n];
      break
     } c && k && ((l = k && k.parent && k.parent.document) && (m = a.k.f(l, k)), m && (g = m.offsetWidth, e = m.offsetHeight, g == f.width && e == f.height ? b = !0 : (g *= e, e = f.width * f.height, b = .98 <= r.min(g, e) / r.max(g, e))));
    return {
     isNested: b,
     iframe: m,
     iframeParentDoc: l
    }
   };
   a.aj.p = function(d) {
    return d && d.parent && a.k.f(d.parent.document, d)
   };
   a.aj.q = function(d) {
    (d = "undefined" !== typeof d &&
     a.aj.e && a.aj.e[d]) && "boolean" == typeof d.isWithinReach && (d.isNested && !d.iframeParentDoc && (d.isWithinReach = !1), d.isNested || d.win && !a.k.d(d.win) || (d.isWithinReach = !1));
    return d
   };
   a.aj.n = function(d, f, g, e) {
    var c, b, l = {
     isNested: !1,
     iframe: null,
     iframeParentDoc: null
    };
    if ((c = a.aj.q(g)) && c.isWithinReach) return !0;
    b = a.k.m(d, f, !0);
    c && "undefined" == typeof c.isWithinReach ? c.isWithinReach = b : (b ? f = a.aj.p(f) : (l = a.aj.o(f, e), (f = l.iframe) && (b = !0)), c = {
     dimensions: e,
     iframe: f,
     iframeParentDoc: l.iframeParentDoc,
     isNested: l.isNested,
     isWithinReach: b,
     win: d
    }, a.aj.e[g] = c);
    return c.isWithinReach
   };
   a.aj.r = function(a, d, g, e, c) {
    if (!a || !d) return !1;
    a = {
     w: a.width,
     h: a.height,
     el: a.left,
     et: a.top,
     er: a.right,
     eb: a.bottom,
     vl: d.left,
     vt: d.top,
     vr: d.right,
     vb: d.bottom
    };
    "boolean" === typeof e && (a.ia = e);
    "number" !== typeof g || isNaN(g) || (a.m = g);
    "number" !== typeof c || isNaN(c) || (a.pv = 1 < c ? c / 100 : c);
    return a
   };
   a.aj.s = function(d) {
    if (!d) return !1;
    if (a.d.an().isInApp && a.d.bq() && a.al) {
     d = a.al.f(d);
     if (!d) return !1;
     var f = a.al.b;
     return d = a.aj.r(d.elementRect, d.visibleRect, 1,
      !0, f && f.percv)
    }
    d = a.y.i(d);
    return d ? d = a.aj.r(d.cumulRect, d.visibleRect, 0, !1) : !1
   };
   a.aj.b.d = function() {
    if (!k) {
     k = !0;
     var d = a.bf.m("moatframe", "geom", function(d) {
      k = !1;
      a.aj.l(d.msgData.data) || (a.aj.b.e = a.b.bj(d.msgData.data))
     });
     a.bf.p(d.msg, !1, !0)
    }
   };
   a.aj.d.ping = function(d) {
    d && d.source === window || a.b.dc() && d.msgData.isBeta || !a.d.e && a.d.dg() && a.aj.b.a()
   };
   a.aj.d.check = function(h) {
    if (!a.b.db() || h.msgData.isBeta) {
     var f = !0;
     a.d.an().isInApp && (f = a.d.bq(), !f && a.al.d && d.push(h));
     f && a.aj.m(h)
    }
   };
   a.aj.d.geom = function(d) {
    if (!a.b.db() ||
     d.msgData.isBeta)
     if (a.aj.n(window, d.source, d.msgData.uid) && a.aj.k()) {
      var f = a.aj.e && a.aj.e[d.msgData.uid] && a.aj.e[d.msgData.uid].iframe;
      if (f && (f = a.aj.s(f))) {
       a.bf.o(d, f);
       return
      }
      a.bf.o(d, a.aj.c.a)
     } else a.bf.o(d, a.aj.c.c)
   };
   a.aj.d.kill = function(d) {
    a.aj.j(d.msgData.uid)
   }
  })(m);
  (function(a) {
   a.bb = {};
   a.bb.b = 5E3;
   a.bb.c = function(k) {
    if (!a.d.e) return !1;
    k.activetime = {};
    k.activetime.counters = {};
    a.bb.d(k);
    a.m.a.azsx("adKilled", a.bb.e, {
     condition: function(a) {
      return k.zr == a.zr
     },
     once: !0
    });
    a.bb.f(k)
   };
   a.bb.f = function(k) {
    if (k.activetime) {
     var d =
      a.aa.r(k.zr);
     if (k.activetime.onInViewTimeCount)
      for (var h in d) d[h].removeListener && d[h].removeListener(k.activetime);
     else k.activetime.onInViewTimeCount = a.b.cl([k], a.bb.g);
     (d = a.aa.i(k.zr, !0)) && d.addListener(k.activetime)
    }
   };
   a.bb.d = function(k) {
    k.activetime.mouseSubId = q.swde.azsx("mouseEvent", a.b.cl([k], a.bb.h));
    k.activetime.mouseLocalSubId = a.m.a.azsx("mouseEvent", a.b.cl([k], a.bb.h));
    k.activetime.keyboardSubId = q.swde.azsx("keyboardEvent", a.b.cl([k], a.bb.i));
    k.activetime.focusSubId = q.swde.azsx("focusStateChange",
     a.b.cl([k], a.bb.j))
   };
   a.bb.e = function(k) {
    if (k.activetime && (q.swde.sxaz("mouseEvent", {
      id: k.activetime.mouseSubId
     }), a.m.a.sxaz("mouseEvent", {
      id: k.activetime.mouseLocalSubId
     }), q.swde.sxaz("keyboardEvent", {
      id: k.activetime.keyboardSubId
     }), q.swde.sxaz("focusStateChange", {
      id: k.activetime.focusSubId
     }), k.activetime && k.activetime.counters && "object" === typeof k.activetime.counters))
     for (var d in k.activetime.counters) delete k.activetime.counters[d]
   };
   a.bb.k = function(k, d) {
    a.bb.l(k, !0)
   };
   a.bb.h = function(k, d) {
    a.bb.l(k,
     !0)
   };
   a.bb.i = function(k, d) {
    a.bb.l(k, !0)
   };
   a.bb.j = function(k, d) {
    d && a.bb.l(k, !0)
   };
   a.bb.l = function(k, d) {
    var h = (new p).getTime(),
     h = k.activetime.activeTS && h - k.activetime.activeTS || 0;
    d && (1E3 < h || !k.activetime.active) && (k.activetime.checkID && a.b.a(k.activetime.checkID), k.activetime.activeTS = (new p).getTime(), k.activetime.checkID = a.o.f(a.b.cl([k], a.bb.m), a.bb.b));
    k.activetime.active = d
   };
   a.bb.m = function(k) {
    if (k.activetime.active) {
     var d = (new p).getTime() - k.activetime.activeTS < a.bb.b;
     a.bb.l(k, d)
    }
   };
   a.bb.g = function(k,
    d, h, f, g) {
    h = a.bd.c(k.activetime.counters, g);
    g = a.aa.k(k.zr, g);
    g = (k = k.activetime.active) && g && g.visible && g.visible();
    f = h.get("lastActiveVis", !1);
    !h.get("wasEverActiveAndFocused") && k && h.set("wasEverActiveAndFocused", 1);
    f && g ? h.increment("activeInviewTime", r.max(d, 0)) : (f || g) && h.increment("activeInviewTime", r.max(r.round(.5 * d), 0));
    h.set("lastActiveVis", g)
   };
   a.bb.a = function(k, d) {
    if (!a.e.c()) {
     d.rf = a.d.fj ? 1 : 0;
     var h;
     h = a.d.fj;
     if (!a.d.e) return h = h || a.focus.pageIsVisible() || k && k.counters && k.counters.strictDwell &&
      k.counters.strictDwell.tCur && 0 < k.counters.strictDwell.tCur, d.re = h ? 1 : 0, d;
     if (!k.activetime) return d;
     var f = a.aa.a(k.zr),
      f = a.bd.c(k.activetime.counters, f);
     h = h || f.get("wasEverActiveAndFocused");
     d.re = h ? 1 : 0;
     f && 0 < f.get("activeInviewTime") && (d.ft = f.get("activeInviewTime"), d.fv = f.get("lastActiveInviewTime"), d.fw = f.get("activeInviewTimeFirstDelta", f.get("activeInviewTime")), f.set("lastActiveInviewTime", f.get("activeInviewTime")));
     return d
    }
   };
   a.m.a.azsx("viewCounterStarted", a.bb.f);
   a.m.a.azsx("startAdTracking",
    a.bb.c)
  })(m);
  (function(a) {
   function k(d) {
    d.functionInProgress = !1;
    return 0 < d.pendingFunctions.length ? (d = d.pendingFunctions.shift(), a.b.cl(d, a.ac.call, a.ac)(), !0) : !1
   }

   function d() {
    try {
     a = window.__b, (0, window.__w)("INNER_FUNCTION"), window.__w = void 0, window.__b = void 0
    } catch (d) {
     var f = d.name + " in closure (moat.customIframe): " + d.message + ", stack=" + d.stack;
     try {
      var e = "undefined" !== typeof omidNative && ("undefined" === typeof Image || Image && Image._MoatProxyOf),
       c = e ? "" : document.referrer,
       b = "https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" +
       escape("undefined" === typeof M ? "VERVEINAPPVRV1" : M) + "&ac=1&k=" + escape(f) + "&ar=" + escape("21bcfc3260-clean") + "&j=" + escape(c) + "&cs=" + (new p).getTime();
      e ? omidNative.sendUrl(b) : (new Image(1, 1)).src = b
     } catch (h) {}
    }
   }

   function h(f) {
    if (!f) return !1;
    var e = f.iframe,
     c = e.contentWindow.document,
     b = f.innerFunction,
     h = f.innerFunctionCbName,
     m = f.preserveDom;
     c.open();
    !1 !== a.d.er() ? (m = c.createElement("script"), m.innerHTML = d.toString().replace('"INNER_FUNCTION"', b), c.body.appendChild(m)) : (b = "<html><head></head><body><script>" + d.toString().replace('"INNER_FUNCTION"',
     b) + "\x3c/script>", m || (b += "<script>setTimeout(function() { document.close(); }, 1);\x3c/script>"), c.write(b + "</body></html>"));
     c.close();
    e.contentWindow.__b = f.Moat;
    e.contentWindow.__w = f.wrapper;
    e.contentWindow[d.toString().match(/function (\w+)\(\)/)[1]]();
    h && a.d.ay[h] && (a.d.ay[h] = null);
    if (!k(f.frameData)) a: if (c = f.setIframeDomain, f = f.preserveDom, e) {
     var p;
     if (!c) try {
      p = e.contentWindow.document
     } catch (n) {
      break a
     }
     h = !1 === a.d.er();
     f ? c ? e.src = "javascript:document.close();" : p.close() : c ? e.src = h ? "javascript:document.open(); document.close();" :
      'javascript:document.head && (document.head.innerHTML=""); document.body && (document.body.innerHTML="");' : h ? (p.open(), p.close()) : (p.head && (p.head.innerHTML = ""), p.body && (p.body.innerHTML = ""))
    }
   }

   function f(a) {
    if ("string" !== typeof a) return "";
    var d = a.charAt(0);
    "'" !== d && '"' !== d && (a = "'" + a + "'");
    return a
   }
   a.ac = {};
   a.ac.a = function(d, e, c, b) {
    if (!d) return !1;
    try {
     var f = document.createElement("iframe"),
      h = e || a.b.co();
     if (!f) return !1;
     a.b.cu(f, b);
     var m;
     c ? (c = a.b.bv(c), m = function() {
      a.b.bu(f, c)
     }) : (c = a.d.g.document.body,
      m = function() {
       c.insertBefore(f, c.insertBefore[0] || null)
      });
     var n = {
      id: h,
      iframe: f,
      functionInProgress: !1,
      pendingFunctions: [],
      parent: c,
      loaded: !1
     };
     f.onload = function() {
      f.contentWindow && f.contentDocument && !n.loaded && (n.loaded = !0, k(n))
     };
     m();
     n.loaded = n.loaded || f.contentDocument && "complete" === f.contentDocument.readyState;
     d.customIframes || (d.customIframes = {});
     d.customIframes[h] = n;
     n.loaded && k(n);
     a.m.a.azsx("adKilled", function(b) {
      var c = b.customIframes,
       d;
      for (d in c) c.hasOwnProperty(d) && a.ac.b(b, c[d].id)
     }, {
      condition: function(a) {
       return d.zr ==
        a.zr
      },
      once: !0
     });
     return h
    } catch (p) {}
    return !1
   };
   a.ac.b = function(a, d, c) {
    var b = a.customIframes[d];
    c = b && b.iframe;
    if (!b || !c) return !1;
    b = b.parent;
    if (!b) return !1;
    try {
     b.removeChild(c)
    } catch (f) {}
    a.customIframes[d] = null;
    delete a.customIframes[d];
    return !0
   };
   a.ac.call = function(d, e, c, b, l, k) {
    if (!d || "undefined" === typeof e) return !1;
    var m = d && d.customIframes && d.customIframes[e];
    if (!m || !c) return !1;
    b = b && "string" !== typeof b ? b.toString() : f(b);
    c && "string" !== typeof c && (c = a.b.cr(c, b));
    l && "function" === typeof l || (l = function() {});
    if (m.functionInProgress || !m.loaded) return m.pendingFunctions.push([d, e, c, b, l, k]), !1;
    d = m.iframe;
    m.functionInProgress = !0;
    e = !1;
    try {
     if (!m.iframe.contentDocument) throw Error();
    } catch (p) {
     e = !0
    }
    c = a.o.l(a.b.cl([{
     iframe: d,
     frameData: m,
     Moat: a,
     wrapper: function(a) {
      l(a)
     },
     innerFunction: c,
     innerFunctionCbName: n,
     setIframeDomain: e,
     preserveDom: k
    }], h));
    if (e) {
     var n;
     do n = "Moat#iqcb" + r.floor(1E4 * r.random()); while (a.d.ay[n]);
     a.d.g[a.d.az][n] = c;
     d.src = 'javascript:document.open(); document.domain="' + document.domain + '"; window.parent["' +
      a.d.az + '"]["' + n + '"]();'
    } else c()
   }
  })(m);
  (function(a) {
   a.ad = {};
   a.ad.a = function(a, d) {
    function h(a) {
     a = [{
      name: "fr",
      enabled: !0,
      inview: a
     }];
     n && n(a)
    }

    function f(a) {
     a && 5 > p ? p += 1 : a || (p = 0);
     return p
    }

    function g(a) {
     var b, c, d;
     clearTimeout(m);
     c = w;
     d = c.inView;
     b = c.time;
     a = (new window.Date).getTime();
     b = 2 < 1E3 / (a - b);
     var e = w.inView,
      g = b && !e && 0 === p;
     q && (!b && e || g) && q && q(void 0);
     f(b);
     b = b && 5 === p;
     b !== d && h(b);
     c.inView = b;
     c.time = a;
     l()
    }

    function e() {
     var a = w,
      b = (new window.Date).getTime();
     500 <= b - a.time && a.inView && (h(!1), a.inView = !1, a.time =
      b)
    }

    function c() {
     for (var a = 0, b = r.length; a < b; a++) window.cancelAnimationFrame(r[a]);
     r = []
    }

    function b() {
     return {
      time: (new window.Date).getTime(),
      inView: !1
     }
    }

    function l() {
     w.inView && (m = setTimeout(e, 500));
     20 <= r.length && c();
     r.push(window.requestAnimationFrame(g))
    }
    var m, p = 0,
     n = a && window && window.parent && window.parent[a],
     q = d && window && window.parent && window.parent[d],
     r = [],
     w = b();
    window.onBlur = function() {
     f(!1);
     w = b();
     clearTimeout(m);
     c()
    };
    window.onFocus = l;
    l()
   }
  })(m);
  (function(a) {
   function k(b) {
    var d = {
     oz: !0
    };
    if (!a.d.an().isInApp ||
     a.d.cr()) d.st = !0, d.su = !0, d.of = !0;
    if (!c[b]) return !1;
    for (var e in c[b])
     if (d[e] && c[b].hasOwnProperty(e) && !c[b][e]) return !1;
    return !0
   }

   function d(c) {
    if (!a.d.c()) {
     a.aq.e(c);
     a.aq.f(c);
     a.aq.g(c);
     a.aq.h(c);
     var d = k(c.zr);
     !c.hasAdLoadedfired && d ? b = !0 : !b && d && (d = {
      e: 9
     }, d.q = c.aq[9]++, a.u.a(c, d), b = !0)
    }
   }

   function h(b) {
    b = a.d.c() ? !0 : !1;
    return {
     st: b,
     su: b,
     of: b,
     oz: b
    }
   }
   var f = 0,
    g, e = w,
    c = {};
   a.aq = {};
   a.aq.c = function(a) {
    return !1
   };
   a.aq.d = function() {
    var b = (new p).getTime(),
     c = b - f;
    if (f && !(1E3 > c)) {
     f = b;
     for (var g in e) e.hasOwnProperty(g) &&
      d(e[g]);
     a.m.a.zaxs("hiddenAds:updated")
    }
   };
   var b = !1;
   a.aq.e = function(b) {
    c[b.zr] || (c[b.zr] = h(b));
    if (!0 !== c[b.zr].st) {
     var d = a.aa.i(b.zr);
     d ? (d = d.adStartedOnScreen(), "undefined" !== typeof d && (b.isCurrentlyStacked = a.y.s(b), !1 === c[b.zr].st && (c[b.zr].st = !1 === d || !1 === b.isCurrentlyStacked))) : c[b.zr].st = !0
    }
   };
   a.aq.f = function(b) {
    var d = c,
     e = b.zr;
    d[e] = c[e] || h(b);
    var f = d[e].su;
    if (!f) {
     var g = b.WINDOW || window,
      f = b.AD_RECT || a.y.l(b.aa, g, b._calcVideoBasedOnContainer),
      g = a.d.s(g),
      f = b.isInIframe ? f && g && !(f.left >= g.width || 0 >=
       f.right || f.top >= g.height || 0 >= f.bottom) : !0;
     d[e].su = f
    }
   };
   a.aq.g = function(b) {
    var d = c,
     e = b.zr;
    d[e] = c[e] || h(b);
    var f = d[e].of;
    f || (f = a.d.s(b.WINDOW), f = b.isInIframe ? f && !(5 >= f.width || 5 >= f.height) : !0, d[e].of = f)
   };
   a.aq.h = function(b) {
    var d = c[b.zr];
    c[b.zr] = c[b.zr] || h(b);
    if (b.aa) {
     var e = 0 < a.b.ck(b);
     b.isCurrentlyTransparent = !e;
     d.oz = d.oz || e;
     return e
    }
    return d.oz
   };
   a.aq.b = function(a) {
    var b = {},
     d, e;
    for (e in c[a]) c[a].hasOwnProperty(e) && (d = c[a][e], b[e] = d ? 1 : 0);
    return b
   };
   a.aq.a = function(b) {
    return a.d.dy() ? !1 : !k(b)
   };
   a.m.a.azsx("adLoaded",
    function(a) {
     a.hasAdLoadedfired = !0
    });
   a.m.a.azsx("startAdTracking", function(b) {
    d(b);
    f = (new p).getTime();
    g || (g = (new p).getTime() + "ha", a.m.a.azsx("view:tick", function() {
     a.aq.d()
    }, {
     id: g
    }))
   });
   a.m.a.azsx("allLocalAdsKilled", function() {
    a.m.a.sxaz("view:tick", {
     id: g
    });
    e = null
   }, {
    once: !0
   });
   a.m.a.azsx("adEntersView", function(b) {
    a.aq.e(b)
   }, {
    once: !0
   });
   a.m.a.azsx("adKilled", function(a) {
    a && !a.ep && (delete a.elementsFromPointCache, delete c[a.zr])
   })
  })(m);
  (function(a) {
   function k(c) {
    c && (a.d.ay.b || (a.d.ay.b = !0, q.dcsx && q.dcsx.ynds(window,
     "deviceorientation", "deviceorientation-" + a.d.ay.a, "deviceorientationFn" + a.d.ay.a)), b || (b = !0, q.swde.azsx("deviceorientation-" + a.d.ay.a, h)), e.hasOwnProperty(c.zr) || (e[c.zr] = new f))
   }

   function d(a) {
    a && delete e[a.zr]
   }

   function h(a) {
    var b = p.now(),
     d = !1;
    200 < b - c && (c = b, d = !0);
    for (var f in w) w.hasOwnProperty(f) && e.hasOwnProperty(f) && (b = e[f], 1500 > b.eventsCount && (b.eventsCount += 1, d && b.handleOrientationEvent(a)))
   }

   function f() {
    this.validEventsHandledCount = this.eventsHandledCount = this.eventsCount = 0;
    this.alpha = new g(0,
     360);
    this.beta = new g(-180, 180);
    this.gamma = new g(-90, 90)
   }

   function g(a, b) {
    this.minExpectedVal = a;
    this.maxExpectedVal = b;
    this.normalizedMax = r.abs(this.minExpectedVal) + this.maxExpectedVal;
    this.rangeRight = this.rangeLeft = this.origin = null
   }
   a.ba = {};
   var e = {},
    c = 0,
    b = !1;
   f.prototype.isValidEvent = function(a) {
    return !a.alpha && 0 !== a.alpha || !a.beta && 0 !== a.beta || !a.beta && 0 !== a.beta || 0 === a.alpha && 0 === a.beta && 0 == a.gamma ? !1 : !0
   };
   f.prototype.handleOrientationEvent = function(a) {
    this.eventsHandledCount += 1;
    this.isValidEvent(a) &&
     (this.validEventsHandledCount += 1, this.alpha.addValue(a.alpha), this.beta.addValue(a.beta), this.gamma.addValue(a.gamma))
   };
   g.prototype.isOutsideRange = function(a) {
    return this.rangeLeft > this.rangeRight ? this.rangeLeft > a && a > this.rangeRight : a < this.rangeLeft || a > this.rangeRight
   };
   g.prototype.extendRange = function(a) {
    this.isOutsideRange(a) && ((a < this.rangeLeft ? this.rangeLeft - a : this.rangeLeft + this.normalizedMax - a) <= (a > this.rangeRight ? a - this.rangeRight : this.normalizedMax - this.rangeRight + a) ? this.rangeLeft = a : this.rangeRight =
     a)
   };
   g.prototype.addValue = function(a) {
    var b = a + r.abs(this.minExpectedVal);
    null === this.origin ? (this.origin = a.toFixed(3), this.rangeRight = this.rangeLeft = b) : this.extendRange(b)
   };
   g.prototype.getRangeLength = function() {
    return null === this.origin ? -1 : this.rangeRight >= this.rangeLeft ? (this.rangeRight - this.rangeLeft).toFixed(3) : (this.normalizedMax - this.rangeLeft + this.rangeRight).toFixed(3)
   };
   a.ba.a = function(a) {
    var b = {};
    e[a] && (a = e[a], b = {
     oe: [a.eventsCount, a.eventsHandledCount, a.validEventsHandledCount, a.alpha.origin ?
      a.alpha.origin : "null", a.alpha.getRangeLength(), a.beta.origin ? a.beta.origin : "null", a.beta.getRangeLength(), a.gamma.origin ? a.gamma.origin : "null", a.gamma.getRangeLength()
     ].join(":")
    });
    return b
   };
   a.d.g.DeviceOrientationEvent && (a.m.a.azsx("adInitialized", k), a.m.a.azsx("adKilled", d), a.m.a.azsx("allLocalAdsKilled", function() {
    q && q.dcsx && q.dcsx.engn && q.dcsx.engn({
     listenerName: "deviceorientationFn" + a.d.ay.a
    });
    q.swde.sxaz("deviceorientation-" + a.d.ay.a, {
     callback: h
    });
    e = {};
    b = a.d.ay.b = !1
   }))
  })(m);
  m.m.a.zaxs("modulesReady",
   q);
  var La = m.focus.pageIsVisible();
  m.d.fj = 1 == window.history.length && !La && (m.d.e && "" != document.referrer || !m.d.e);
  var Fa = !0;
  m.b.ac() && (Fa = !1);
  var pa = m.d.bb;
  m.b.y();
  m.m.a.azsx("adInitialized", function(a) {
   function k(a) {
    window._qs = a;
    (a = window.__b) && a.b.bw("https://z.moatads.com/px2/client.js", document.body)
   }

   function d(a) {
    var d = m.f.u();
    a = m.u.b(36, a.ao, d, !1, !0);
    a.qs.i = m.b.cz(M, "PX2");
    return m.u.j(a.qs)
   }
   if (a) {
    var h = 0 === r.floor(1E3 * r.random());
    a.px2 = {
     inSample: !1,
     success: !1
    };
    if (h && (a.px2.inSample = !0, h = m.ac.a(a,
      "ivt"))) {
     var f = d(a);
     m.ac.call(a, h, k, f, null, !0);
     a.px2.success = !0
    }
   }
  }, {
   once: !0
  });
  m.d.l || m.d.am || m.d.du();
  (m.d.l || m.d.am) && pa && pa.match("audit.adnxs.net") && m.d.du();
  (m.d.l && m.d.ey() || "dummy.url" === m.b.y()) && m.d.du();
  m.d.du();
  m.aj.h();
  var G = m.b.bm(),
   ua = !1;
  xa = "https://px.moatads.com";
  m.bc.a(Ia);
  var Ea = function() {
   var a;
   a = arguments && arguments[0];
   a = m.b.m() && m.d.j() && a && a.type && "beforeunload" === a.type ? !0 : !1;
   a || (q.zs && q.dcsx && (q.dcsx.engn({
    listenerName: "unloadFn" + m.d.ay.a
   }), q.dcsx.engn({
    listenerName: "beforeunloadFn" +
     m.d.ay.a
   })), wa || (wa = !0, m.e.b()), m.f && m.f.a(), aa(), m.m.a.zaxs("stopPostMessageListeners"))
  };
  !G && m.d.c() && (G = {
   _MoatProxyOf: "thisScript"
  });
  if (!G) return !1;
  m.c = G;
  m.b.bp(G);
  m.m.a.azsx("trackingReady", Ca, {
   once: !0
  });
  pa = m.w.c(G);
  m.be.b(pa);
  if (!m.be.a) {
   if (m.d.j())
    if (m.d.eq()) m.d.ep();
    else {
     m.n.d();
     var pa = m.d.d(),
      Ma = m.d.cs(),
      Oa = m.d.em && m.d.em(),
      Ba = !1;
     Ma && !Oa ? Ba = !0 : Ma || pa || (Ba = !0);
     Ba && m.m.a.zaxs("trackingReady")
    }
   else m.m.a.zaxs("trackingReady");
   m.d.d() && m.p.q();
   m.m.a.azsx("allLocalAdsKilled", Ha, {
    once: !0
   })
  }
 })(Date,
  Math)
} catch (p) {
 var GLOBAL_VAR = this,
  ct = (new Date).getTime();
 GLOBAL_VAR["Moat#ETS"] || (GLOBAL_VAR["Moat#ETS"] = ct);
 GLOBAL_VAR["Moat#EMC"] || (GLOBAL_VAR["Moat#EMC"] = 0);
 var et = ct - GLOBAL_VAR["Moat#ETS"],
  hourElapsed = 36E5 <= et,
  msg = p.name + " in closure (global): " + p.message + ", stack=" + p.stack;
 if (!hourElapsed && 10 > GLOBAL_VAR["Moat#EMC"]) {
  GLOBAL_VAR["Moat#EMC"]++;
  try {
   var pixelDomain = "px.moatads.com",
    isDomless = "undefined" !== typeof omidNative && ("undefined" === typeof Image || Image && Image._MoatProxyOf),
    documentReferrer =
    isDomless ? "" : document.referrer,
    isBeta = !1,
    viewHash = "undefined" === typeof AD_VIEW_HASH ? isBeta ? "VERVEINAPPVRV1_BETA" : "VERVEINAPPVRV1" : AD_VIEW_HASH,
    pxSrc = "https://" + pixelDomain + "/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape(viewHash) + "&ac=1&k=" + escape(msg) + "&ar=" + escape("21bcfc3260-clean") + "&j=" + escape(documentReferrer) + "&cs=" + (new Date).getTime();
   if (isDomless) omidNative.sendUrl(pxSrc);
   else {
    var px = new Image(1, 1);
    px.src = pxSrc
   }
  } catch (r) {}
 } else if (hourElapsed) {
  GLOBAL_VAR["Moat#EMC"] = 1;
  GLOBAL_VAR["Moat#ETS"] =
   ct;
  try {
   pixelDomain = "px.moatads.com", documentReferrer = (isDomless = "undefined" !== typeof omidNative && ("undefined" === typeof Image || Image && Image._MoatProxyOf)) ? "" : document.referrer, isBeta = !1, viewHash = "undefined" === typeof AD_VIEW_HASH ? isBeta ? "VERVEINAPPVRV1_BETA" : "VERVEINAPPVRV1" : AD_VIEW_HASH, pxSrc = "https://" + pixelDomain + "/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape(viewHash) + "&ac=1&k=" + escape(msg) + "&ar=" + escape("21bcfc3260-clean") + "&j=" + escape(documentReferrer) + "&cs=" + (new Date).getTime(),
    isDomless ? omidNative.sendUrl(pxSrc) : (px = new Image(1, 1), px.src = pxSrc)
  } catch (r) {}
 }
};
