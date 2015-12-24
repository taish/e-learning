/*! jQuery v1.8.2 jquery.com | jquery.org/license */
!function(e, t) {
    function n(e) {
        var t = ht[e] = {};
        return K.each(e.split(tt), function(e, n) {
            t[n] = !0
        }
        ),
        t
    }
    function i(e, n, i) {
        if (i === t && 1 === e.nodeType) {
            var r = "data-" + n.replace(gt, "-$1").toLowerCase();
            if (i = e.getAttribute(r),
            "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null  : +i + "" === i ? +i : mt.test(i) ? K.parseJSON(i) : i
                } catch (o) {}
                K.data(e, n, i)
            } else
                i = t
        }
        return i
    }
    function r(e) {
        var t;
        for (t in e)
            if (("data" !== t || !K.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function o() {
        return !1
    }
    function s() {
        return !0
    }
    function a(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType
    }
    function l(e, t) {
        do
            e = e[t];
        while (e && 1 !== e.nodeType);return e
    }
    function u(e, t, n) {
        if (t = t || 0,
        K.isFunction(t))
            return K.grep(e, function(e, i) {
                var r = !!t.call(e, i, e);
                return r === n
            }
            );
        if (t.nodeType)
            return K.grep(e, function(e) {
                return e === t === n
            }
            );
        if ("string" == typeof t) {
            var i = K.grep(e, function(e) {
                return 1 === e.nodeType
            }
            );
            if (Ot.test(t))
                return K.filter(t, i, !n);
            t = K.filter(t, i)
        }
        return K.grep(e, function(e) {
            return K.inArray(e, t) >= 0 === n
        }
        )
    }
    function c(e) {
        var t = Bt.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length; )
                n.createElement(t.pop());
        return n
    }
    function f(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }
    function p(e, t) {
        if (1 === t.nodeType && K.hasData(e)) {
            var n, i, r, o = K._data(e), s = K._data(t, o), a = o.events;
            if (a) {
                delete s.handle,
                s.events = {};
                for (n in a)
                    for (i = 0,
                    r = a[n].length; r > i; i++)
                        K.event.add(t, n, a[n][i])
            }
            s.data && (s.data = K.extend({}, s.data))
        }
    }
    function d(e, t) {
        var n;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(),
        t.mergeAttributes && t.mergeAttributes(e),
        n = t.nodeName.toLowerCase(),
        "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
        K.support.html5Clone && e.innerHTML && !K.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Jt.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
        t.value !== e.value && (t.value = e.value)) : "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text),
        t.removeAttribute(K.expando))
    }
    function h(e) {
        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
    }
    function m(e) {
        Jt.test(e.type) && (e.defaultChecked = e.checked)
    }
    function g(e, t) {
        if (t in e)
            return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = vn.length; r--; )
            if (t = vn[r] + n,
            t in e)
                return t;
        return i
    }
    function y(e, t) {
        return e = t || e,
        "none" === K.css(e, "display") || !K.contains(e.ownerDocument, e)
    }
    function v(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; s > o; o++)
            n = e[o],
            n.style && (r[o] = K._data(n, "olddisplay"),
            t ? (!r[o] && "none" === n.style.display && (n.style.display = ""),
            "" === n.style.display && y(n) && (r[o] = K._data(n, "olddisplay", C(n.nodeName)))) : (i = nn(n, "display"),
            !r[o] && "none" !== i && K._data(n, "olddisplay", i)));
        for (o = 0; s > o; o++)
            n = e[o],
            n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[o] || "" : "none"));
        return e
    }
    function b(e, t, n) {
        var i = fn.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }
    function x(e, t, n, i) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > r; r += 2)
            "margin" === n && (o += K.css(e, n + yn[r], !0)),
            i ? ("content" === n && (o -= parseFloat(nn(e, "padding" + yn[r])) || 0),
            "margin" !== n && (o -= parseFloat(nn(e, "border" + yn[r] + "Width")) || 0)) : (o += parseFloat(nn(e, "padding" + yn[r])) || 0,
            "padding" !== n && (o += parseFloat(nn(e, "border" + yn[r] + "Width")) || 0));
        return o
    }
    function w(e, t, n) {
        var i = "width" === t ? e.offsetWidth : e.offsetHeight
          , r = !0
          , o = K.support.boxSizing && "border-box" === K.css(e, "boxSizing");
        if (0 >= i || null  == i) {
            if (i = nn(e, t),
            (0 > i || null  == i) && (i = e.style[t]),
            pn.test(i))
                return i;
            r = o && (K.support.boxSizingReliable || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + x(e, t, n || (o ? "border" : "content"), r) + "px"
    }
    function C(e) {
        if (hn[e])
            return hn[e];
        var t = K("<" + e + ">").appendTo(W.body)
          , n = t.css("display");
        return t.remove(),
        ("none" === n || "" === n) && (rn = W.body.appendChild(rn || K.extend(W.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0
        })),
        on && rn.createElement || (on = (rn.contentWindow || rn.contentDocument).document,
        on.write("<!doctype html><html><body>"),
        on.close()),
        t = on.body.appendChild(on.createElement(e)),
        n = nn(t, "display"),
        W.body.removeChild(rn)),
        hn[e] = n,
        n
    }
    function T(e, t, n, i) {
        var r;
        if (K.isArray(t))
            K.each(t, function(t, r) {
                n || wn.test(e) ? i(e, r) : T(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            }
            );
        else if (n || "object" !== K.type(t))
            i(e, t);
        else
            for (r in t)
                T(e + "[" + r + "]", t[r], n, i)
    }
    function k(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var i, r, o, s = t.toLowerCase().split(tt), a = 0, l = s.length;
            if (K.isFunction(n))
                for (; l > a; a++)
                    i = s[a],
                    o = /^\+/.test(i),
                    o && (i = i.substr(1) || "*"),
                    r = e[i] = e[i] || [],
                    r[o ? "unshift" : "push"](n)
        }
    }
    function N(e, n, i, r, o, s) {
        o = o || n.dataTypes[0],
        s = s || {},
        s[o] = !0;
        for (var a, l = e[o], u = 0, c = l ? l.length : 0, f = e === qn; c > u && (f || !a); u++)
            a = l[u](n, i, r),
            "string" == typeof a && (!f || s[a] ? a = t : (n.dataTypes.unshift(a),
            a = N(e, n, i, r, a, s)));
        return (f || !a) && !s["*"] && (a = N(e, n, i, r, "*", s)),
        a
    }
    function E(e, n) {
        var i, r, o = K.ajaxSettings.flatOptions || {};
        for (i in n)
            n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        r && K.extend(!0, e, r)
    }
    function $(e, n, i) {
        var r, o, s, a, l = e.contents, u = e.dataTypes, c = e.responseFields;
        for (o in c)
            o in i && (n[c[o]] = i[o]);
        for (; "*" === u[0]; )
            u.shift(),
            r === t && (r = e.mimeType || n.getResponseHeader("content-type"));
        if (r)
            for (o in l)
                if (l[o] && l[o].test(r)) {
                    u.unshift(o);
                    break
                }
        if (u[0] in i)
            s = u[0];
        else {
            for (o in i) {
                if (!u[0] || e.converters[o + " " + u[0]]) {
                    s = o;
                    break
                }
                a || (a = o)
            }
            s = s || a
        }
        return s ? (s !== u[0] && u.unshift(s),
        i[s]) : void 0
    }
    function S(e, t) {
        var n, i, r, o, s = e.dataTypes.slice(), a = s[0], l = {}, u = 0;
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        s[1])
            for (n in e.converters)
                l[n.toLowerCase()] = e.converters[n];
        for (; r = s[++u]; )
            if ("*" !== r) {
                if ("*" !== a && a !== r) {
                    if (n = l[a + " " + r] || l["* " + r],
                    !n)
                        for (i in l)
                            if (o = i.split(" "),
                            o[1] === r && (n = l[a + " " + o[0]] || l["* " + o[0]])) {
                                n === !0 ? n = l[i] : l[i] !== !0 && (r = o[0],
                                s.splice(u--, 0, r));
                                break
                            }
                    if (n !== !0)
                        if (n && e["throws"])
                            t = n(t);
                        else
                            try {
                                t = n(t)
                            } catch (c) {
                                return {
                                    state: "parsererror",
                                    error: n ? c : "No conversion from " + a + " to " + r
                                }
                            }
                }
                a = r
            }
        return {
            state: "success",
            data: t
        }
    }
    function j() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function A() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function D() {
        return setTimeout(function() {
            Yn = t
        }
        , 0),
        Yn = K.now()
    }
    function L(e, t) {
        K.each(t, function(t, n) {
            for (var i = (ei[t] || []).concat(ei["*"]), r = 0, o = i.length; o > r; r++)
                if (i[r].call(e, t, n))
                    return
        }
        )
    }
    function H(e, t, n) {
        var i, r = 0, o = Zn.length, s = K.Deferred().always(function() {
            delete a.elem
        }
        ), a = function() {
            for (var t = Yn || D(), n = Math.max(0, l.startTime + l.duration - t), i = 1 - (n / l.duration || 0), r = 0, o = l.tweens.length; o > r; r++)
                l.tweens[r].run(i);
            return s.notifyWith(e, [l, i, n]),
            1 > i && o ? n : (s.resolveWith(e, [l]),
            !1)
        }
        , l = s.promise({
            elem: e,
            props: K.extend({}, t),
            opts: K.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Yn || D(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = K.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(i),
                i
            },
            stop: function(t) {
                for (var n = 0, i = t ? l.tweens.length : 0; i > n; n++)
                    l.tweens[n].run(1);
                return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]),
                this
            }
        }), u = l.props;
        for (F(u, l.opts.specialEasing); o > r; r++)
            if (i = Zn[r].call(l, e, u, l.opts))
                return i;
        return L(l, u),
        K.isFunction(l.opts.start) && l.opts.start.call(e, l),
        K.fx.timer(K.extend(a, {
            anim: l,
            queue: l.opts.queue,
            elem: e
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function F(e, t) {
        var n, i, r, o, s;
        for (n in e)
            if (i = K.camelCase(n),
            r = t[i],
            o = e[n],
            K.isArray(o) && (r = o[1],
            o = e[n] = o[0]),
            n !== i && (e[i] = o,
            delete e[n]),
            s = K.cssHooks[i],
            s && "expand" in s) {
                o = s.expand(o),
                delete e[i];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = r)
            } else
                t[i] = r
    }
    function M(e, t, n) {
        var i, r, o, s, a, l, u, c, f = this, p = e.style, d = {}, h = [], m = e.nodeType && y(e);
        n.queue || (u = K._queueHooks(e, "fx"),
        null  == u.unqueued && (u.unqueued = 0,
        c = u.empty.fire,
        u.empty.fire = function() {
            u.unqueued || c()
        }
        ),
        u.unqueued++,
        f.always(function() {
            f.always(function() {
                u.unqueued--,
                K.queue(e, "fx").length || u.empty.fire()
            }
            )
        }
        )),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
        "inline" === K.css(e, "display") && "none" === K.css(e, "float") && (K.support.inlineBlockNeedsLayout && "inline" !== C(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden",
        K.support.shrinkWrapBlocks || f.done(function() {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        }
        ));
        for (i in t)
            if (o = t[i],
            Vn.exec(o)) {
                if (delete t[i],
                o === (m ? "hide" : "show"))
                    continue;h.push(i)
            }
        if (s = h.length)
            for (a = K._data(e, "fxshow") || K._data(e, "fxshow", {}),
            m ? K(e).show() : f.done(function() {
                K(e).hide()
            }
            ),
            f.done(function() {
                var t;
                K.removeData(e, "fxshow", !0);
                for (t in d)
                    K.style(e, t, d[t])
            }
            ),
            i = 0; s > i; i++)
                r = h[i],
                l = f.createTween(r, m ? a[r] : 0),
                d[r] = a[r] || K.style(e, r),
                r in a || (a[r] = l.start,
                m && (l.end = l.start,
                l.start = "width" === r || "height" === r ? 1 : 0))
    }
    function O(e, t, n, i, r) {
        return new O.prototype.init(e,t,n,i,r)
    }
    function q(e, t) {
        var n, i = {
            height: e
        }, r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)
            n = yn[r],
            i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function _(e) {
        return K.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var B, P, W = e.document, R = e.location, I = e.navigator, z = e.jQuery, X = e.$, Q = Array.prototype.push, U = Array.prototype.slice, Y = Array.prototype.indexOf, J = Object.prototype.toString, V = Object.prototype.hasOwnProperty, G = String.prototype.trim, K = function(e, t) {
        return new K.fn.init(e,t,B)
    }
    , Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, et = /\S/, tt = /\s+/, nt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, it = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, rt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ot = /^[\],:{}\s]*$/, st = /(?:^|:|,)(?:\s*\[)+/g, at = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, lt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, ut = /^-ms-/, ct = /-([\da-z])/gi, ft = function(e, t) {
        return (t + "").toUpperCase()
    }
    , pt = function() {
        W.addEventListener ? (W.removeEventListener("DOMContentLoaded", pt, !1),
        K.ready()) : "complete" === W.readyState && (W.detachEvent("onreadystatechange", pt),
        K.ready())
    }
    , dt = {};
    K.fn = K.prototype = {
        constructor: K,
        init: function(e, n, i) {
            var r, o, s;
            if (!e)
                return this;
            if (e.nodeType)
                return this.context = this[0] = e,
                this.length = 1,
                this;
            if ("string" == typeof e) {
                if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null , e, null ] : it.exec(e),
                r && (r[1] || !n)) {
                    if (r[1])
                        return n = n instanceof K ? n[0] : n,
                        s = n && n.nodeType ? n.ownerDocument || n : W,
                        e = K.parseHTML(r[1], s, !0),
                        rt.test(r[1]) && K.isPlainObject(n) && this.attr.call(e, n, !0),
                        K.merge(this, e);
                    if (o = W.getElementById(r[2]),
                    o && o.parentNode) {
                        if (o.id !== r[2])
                            return i.find(e);
                        this.length = 1,
                        this[0] = o
                    }
                    return this.context = W,
                    this.selector = e,
                    this
                }
                return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e)
            }
            return K.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector,
            this.context = e.context),
            K.makeArray(e, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return U.call(this)
        },
        get: function(e) {
            return null  == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e, t, n) {
            var i = K.merge(this.constructor(), e);
            return i.prevObject = this,
            i.context = this.context,
            "find" === t ? i.selector = this.selector + (this.selector ? " " : "") + n : t && (i.selector = this.selector + "." + t + "(" + n + ")"),
            i
        },
        each: function(e, t) {
            return K.each(this, e, t)
        },
        ready: function(e) {
            return K.ready.promise().done(e),
            this
        },
        eq: function(e) {
            return e = +e,
            -1 === e ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(U.apply(this, arguments), "slice", U.call(arguments).join(","))
        },
        map: function(e) {
            return this.pushStack(K.map(this, function(t, n) {
                return e.call(t, n, t)
            }
            ))
        },
        end: function() {
            return this.prevObject || this.constructor(null )
        },
        push: Q,
        sort: [].sort,
        splice: [].splice
    },
    K.fn.init.prototype = K.fn,
    K.extend = K.fn.extend = function() {
        var e, n, i, r, o, s, a = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a,
        a = arguments[1] || {},
        l = 2),
        "object" != typeof a && !K.isFunction(a) && (a = {}),
        u === l && (a = this,
        --l); u > l; l++)
            if (null  != (e = arguments[l]))
                for (n in e)
                    i = a[n],
                    r = e[n],
                    a !== r && (c && r && (K.isPlainObject(r) || (o = K.isArray(r))) ? (o ? (o = !1,
                    s = i && K.isArray(i) ? i : []) : s = i && K.isPlainObject(i) ? i : {},
                    a[n] = K.extend(c, s, r)) : r !== t && (a[n] = r));
        return a
    }
    ,
    K.extend({
        noConflict: function(t) {
            return e.$ === K && (e.$ = X),
            t && e.jQuery === K && (e.jQuery = z),
            K
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? K.readyWait++ : K.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--K.readyWait : !K.isReady) {
                if (!W.body)
                    return setTimeout(K.ready, 1);
                K.isReady = !0,
                e !== !0 && --K.readyWait > 0 || (P.resolveWith(W, [K]),
                K.fn.trigger && K(W).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === K.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === K.type(e)
        }
        ,
        isWindow: function(e) {
            return null  != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null  == e ? String(e) : dt[J.call(e)] || "object"
        },
        isPlainObject: function(e) {
            if (!e || "object" !== K.type(e) || e.nodeType || K.isWindow(e))
                return !1;
            try {
                if (e.constructor && !V.call(e, "constructor") && !V.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            var i;
            for (i in e)
                ;
            return i === t || V.call(e, i)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(e, t, n) {
            var i;
            return e && "string" == typeof e ? ("boolean" == typeof t && (n = t,
            t = 0),
            t = t || W,
            (i = rt.exec(e)) ? [t.createElement(i[1])] : (i = K.buildFragment([e], t, n ? null  : []),
            K.merge([], (i.cacheable ? K.clone(i.fragment) : i.fragment).childNodes))) : null
        },
        parseJSON: function(t) {
            return t && "string" == typeof t ? (t = K.trim(t),
            e.JSON && e.JSON.parse ? e.JSON.parse(t) : ot.test(t.replace(at, "@").replace(lt, "]").replace(st, "")) ? new Function("return " + t)() : void K.error("Invalid JSON: " + t)) : null
        },
        parseXML: function(n) {
            var i, r;
            if (!n || "string" != typeof n)
                return null ;
            try {
                e.DOMParser ? (r = new DOMParser,
                i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"),
                i.async = "false",
                i.loadXML(n))
            } catch (o) {
                i = t
            }
            return (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) && K.error("Invalid XML: " + n),
            i
        },
        noop: function() {},
        globalEval: function(t) {
            t && et.test(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            }
            )(t)
        },
        camelCase: function(e) {
            return e.replace(ut, "ms-").replace(ct, ft)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, n, i) {
            var r, o = 0, s = e.length, a = s === t || K.isFunction(e);
            if (i)
                if (a) {
                    for (r in e)
                        if (n.apply(e[r], i) === !1)
                            break
                } else
                    for (; s > o && n.apply(e[o++], i) !== !1; )
                        ;
            else if (a) {
                for (r in e)
                    if (n.call(e[r], r, e[r]) === !1)
                        break
            } else
                for (; s > o && n.call(e[o], o, e[o++]) !== !1; )
                    ;
            return e
        },
        trim: G && !G.call(" ") ? function(e) {
            return null  == e ? "" : G.call(e)
        }
         : function(e) {
            return null  == e ? "" : (e + "").replace(nt, "")
        }
        ,
        makeArray: function(e, t) {
            var n, i = t || [];
            return null  != e && (n = K.type(e),
            null  == e.length || "string" === n || "function" === n || "regexp" === n || K.isWindow(e) ? Q.call(i, e) : K.merge(i, e)),
            i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (Y)
                    return Y.call(t, e, n);
                for (i = t.length,
                n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, n) {
            var i = n.length
              , r = e.length
              , o = 0;
            if ("number" == typeof i)
                for (; i > o; o++)
                    e[r++] = n[o];
            else
                for (; n[o] !== t; )
                    e[r++] = n[o++];
            return e.length = r,
            e
        },
        grep: function(e, t, n) {
            var i, r = [], o = 0, s = e.length;
            for (n = !!n; s > o; o++)
                i = !!t(e[o], o),
                n !== i && r.push(e[o]);
            return r
        },
        map: function(e, n, i) {
            var r, o, s = [], a = 0, l = e.length, u = e instanceof K || l !== t && "number" == typeof l && (l > 0 && e[0] && e[l - 1] || 0 === l || K.isArray(e));
            if (u)
                for (; l > a; a++)
                    r = n(e[a], a, i),
                    null  != r && (s[s.length] = r);
            else
                for (o in e)
                    r = n(e[o], o, i),
                    null  != r && (s[s.length] = r);
            return s.concat.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) {
            var i, r, o;
            return "string" == typeof n && (i = e[n],
            n = e,
            e = i),
            K.isFunction(e) ? (r = U.call(arguments, 2),
            o = function() {
                return e.apply(n, r.concat(U.call(arguments)))
            }
            ,
            o.guid = e.guid = e.guid || K.guid++,
            o) : t
        },
        access: function(e, n, i, r, o, s, a) {
            var l, u = null  == i, c = 0, f = e.length;
            if (i && "object" == typeof i) {
                for (c in i)
                    K.access(e, n, c, i[c], 1, s, r);
                o = 1
            } else if (r !== t) {
                if (l = a === t && K.isFunction(r),
                u && (l ? (l = n,
                n = function(e, t, n) {
                    return l.call(K(e), n)
                }
                ) : (n.call(e, r),
                n = null )),
                n)
                    for (; f > c; c++)
                        n(e[c], i, l ? r.call(e[c], c, n(e[c], i)) : r, a);
                o = 1
            }
            return o ? e : u ? n.call(e) : f ? n(e[0], i) : s
        },
        now: function() {
            return (new Date).getTime()
        }
    }),
    K.ready.promise = function(t) {
        if (!P)
            if (P = K.Deferred(),
            "complete" === W.readyState)
                setTimeout(K.ready, 1);
            else if (W.addEventListener)
                W.addEventListener("DOMContentLoaded", pt, !1),
                e.addEventListener("load", K.ready, !1);
            else {
                W.attachEvent("onreadystatechange", pt),
                e.attachEvent("onload", K.ready);
                var n = !1;
                try {
                    n = null  == e.frameElement && W.documentElement
                } catch (i) {}
                n && n.doScroll && function r() {
                    if (!K.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(r, 50)
                        }
                        K.ready()
                    }
                }
                ()
            }
        return P.promise(t)
    }
    ,
    K.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
        dt["[object " + t + "]"] = t.toLowerCase()
    }
    ),
    B = K(W);
    var ht = {};
    K.Callbacks = function(e) {
        e = "string" == typeof e ? ht[e] || n(e) : K.extend({}, e);
        var i, r, o, s, a, l, u = [], c = !e.once && [], f = function(t) {
            for (i = e.memory && t,
            r = !0,
            l = s || 0,
            s = 0,
            a = u.length,
            o = !0; u && a > l; l++)
                if (u[l].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    i = !1;
                    break
                }
            o = !1,
            u && (c ? c.length && f(c.shift()) : i ? u = [] : p.disable())
        }
        , p = {
            add: function() {
                if (u) {
                    var t = u.length;
                    !function n(t) {
                        K.each(t, function(t, i) {
                            var r = K.type(i);
                            "function" !== r || e.unique && p.has(i) ? i && i.length && "string" !== r && n(i) : u.push(i)
                        }
                        )
                    }
                    (arguments),
                    o ? a = u.length : i && (s = t,
                    f(i))
                }
                return this
            },
            remove: function() {
                return u && K.each(arguments, function(e, t) {
                    for (var n; (n = K.inArray(t, u, n)) > -1; )
                        u.splice(n, 1),
                        o && (a >= n && a--,
                        l >= n && l--)
                }
                ),
                this
            },
            has: function(e) {
                return K.inArray(e, u) > -1
            },
            empty: function() {
                return u = [],
                this
            },
            disable: function() {
                return u = c = i = t,
                this
            },
            disabled: function() {
                return !u
            },
            lock: function() {
                return c = t,
                i || p.disable(),
                this
            },
            locked: function() {
                return !c
            },
            fireWith: function(e, t) {
                return t = t || [],
                t = [e, t.slice ? t.slice() : t],
                u && (!r || c) && (o ? c.push(t) : f(t)),
                this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return p
    }
    ,
    K.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", K.Callbacks("once memory"), "resolved"], ["reject", "fail", K.Callbacks("once memory"), "rejected"], ["notify", "progress", K.Callbacks("memory")]]
              , n = "pending"
              , i = {
                state: function() {
                    return n
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return K.Deferred(function(n) {
                        K.each(t, function(t, i) {
                            var o = i[0]
                              , s = e[t];
                            r[i[1]](K.isFunction(s) ? function() {
                                var e = s.apply(this, arguments);
                                e && K.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n : this, [e])
                            }
                             : n[o])
                        }
                        ),
                        e = null
                    }
                    ).promise()
                },
                promise: function(e) {
                    return null  != e ? K.extend(e, i) : i
                }
            }
              , r = {};
            return i.pipe = i.then,
            K.each(t, function(e, o) {
                var s = o[2]
                  , a = o[3];
                i[o[1]] = s.add,
                a && s.add(function() {
                    n = a
                }
                , t[1 ^ e][2].disable, t[2][2].lock),
                r[o[0]] = s.fire,
                r[o[0] + "With"] = s.fireWith
            }
            ),
            i.promise(r),
            e && e.call(r, r),
            r
        },
        when: function(e) {
            var t, n, i, r = 0, o = U.call(arguments), s = o.length, a = 1 !== s || e && K.isFunction(e.promise) ? s : 0, l = 1 === a ? e : K.Deferred(), u = function(e, n, i) {
                return function(r) {
                    n[e] = this,
                    i[e] = arguments.length > 1 ? U.call(arguments) : r,
                    i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                }
            }
            ;
            if (s > 1)
                for (t = new Array(s),
                n = new Array(s),
                i = new Array(s); s > r; r++)
                    o[r] && K.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, t)) : --a;
            return a || l.resolveWith(i, o),
            l.promise()
        }
    }),
    K.support = function() {
        var t, n, i, r, o, s, a, l, u, c, f, p = W.createElement("div");
        if (p.setAttribute("className", "t"),
        p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        n = p.getElementsByTagName("*"),
        i = p.getElementsByTagName("a")[0],
        i.style.cssText = "top:1px;float:left;opacity:.5",
        !n || !n.length)
            return {};
        r = W.createElement("select"),
        o = r.appendChild(W.createElement("option")),
        s = p.getElementsByTagName("input")[0],
        t = {
            leadingWhitespace: 3 === p.firstChild.nodeType,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(i.getAttribute("style")),
            hrefNormalized: "/a" === i.getAttribute("href"),
            opacity: /^0.5/.test(i.style.opacity),
            cssFloat: !!i.style.cssFloat,
            checkOn: "on" === s.value,
            optSelected: o.selected,
            getSetAttribute: "t" !== p.className,
            enctype: !!W.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== W.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === W.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        },
        s.checked = !0,
        t.noCloneChecked = s.cloneNode(!0).checked,
        r.disabled = !0,
        t.optDisabled = !o.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }
        if (!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", f = function() {
            t.noCloneEvent = !1
        }
        ),
        p.cloneNode(!0).fireEvent("onclick"),
        p.detachEvent("onclick", f)),
        s = W.createElement("input"),
        s.value = "t",
        s.setAttribute("type", "radio"),
        t.radioValue = "t" === s.value,
        s.setAttribute("checked", "checked"),
        s.setAttribute("name", "t"),
        p.appendChild(s),
        a = W.createDocumentFragment(),
        a.appendChild(p.lastChild),
        t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.appendChecked = s.checked,
        a.removeChild(s),
        a.appendChild(p),
        p.attachEvent)
            for (u in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                l = "on" + u,
                c = l in p,
                c || (p.setAttribute(l, "return;"),
                c = "function" == typeof p[l]),
                t[u + "Bubbles"] = c;
        return K(function() {
            var n, i, r, o, s = "padding:0;margin:0;border:0;display:block;overflow:hidden;", a = W.getElementsByTagName("body")[0];
            a && (n = W.createElement("div"),
            n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",
            a.insertBefore(n, a.firstChild),
            i = W.createElement("div"),
            n.appendChild(i),
            i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            r = i.getElementsByTagName("td"),
            r[0].style.cssText = "padding:0;margin:0;border:0;display:none",
            c = 0 === r[0].offsetHeight,
            r[0].style.display = "",
            r[1].style.display = "none",
            t.reliableHiddenOffsets = c && 0 === r[0].offsetHeight,
            i.innerHTML = "",
            i.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
            t.boxSizing = 4 === i.offsetWidth,
            t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop,
            e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null ) || {}).top,
            t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null ) || {
                width: "4px"
            }).width,
            o = W.createElement("div"),
            o.style.cssText = i.style.cssText = s,
            o.style.marginRight = o.style.width = "0",
            i.style.width = "1px",
            i.appendChild(o),
            t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null ) || {}).marginRight)),
            "undefined" != typeof i.style.zoom && (i.innerHTML = "",
            i.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1",
            t.inlineBlockNeedsLayout = 3 === i.offsetWidth,
            i.style.display = "block",
            i.style.overflow = "visible",
            i.innerHTML = "<div></div>",
            i.firstChild.style.width = "5px",
            t.shrinkWrapBlocks = 3 !== i.offsetWidth,
            n.style.zoom = 1),
            a.removeChild(n),
            n = i = r = o = null )
        }
        ),
        a.removeChild(p),
        n = i = r = o = s = a = p = null ,
        t
    }
    ();
    var mt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
      , gt = /([A-Z])/g;
    K.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (K.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? K.cache[e[K.expando]] : e[K.expando],
            !!e && !r(e)
        },
        data: function(e, n, i, r) {
            if (K.acceptData(e)) {
                var o, s, a = K.expando, l = "string" == typeof n, u = e.nodeType, c = u ? K.cache : e, f = u ? e[a] : e[a] && a;
                if (f && c[f] && (r || c[f].data) || !l || i !== t)
                    return f || (u ? e[a] = f = K.deletedIds.pop() || K.guid++ : f = a),
                    c[f] || (c[f] = {},
                    u || (c[f].toJSON = K.noop)),
                    ("object" == typeof n || "function" == typeof n) && (r ? c[f] = K.extend(c[f], n) : c[f].data = K.extend(c[f].data, n)),
                    o = c[f],
                    r || (o.data || (o.data = {}),
                    o = o.data),
                    i !== t && (o[K.camelCase(n)] = i),
                    l ? (s = o[n],
                    null  == s && (s = o[K.camelCase(n)])) : s = o,
                    s
            }
        },
        removeData: function(e, t, n) {
            if (K.acceptData(e)) {
                var i, o, s, a = e.nodeType, l = a ? K.cache : e, u = a ? e[K.expando] : K.expando;
                if (l[u]) {
                    if (t && (i = n ? l[u] : l[u].data)) {
                        K.isArray(t) || (t in i ? t = [t] : (t = K.camelCase(t),
                        t = t in i ? [t] : t.split(" ")));
                        for (o = 0,
                        s = t.length; s > o; o++)
                            delete i[t[o]];
                        if (!(n ? r : K.isEmptyObject)(i))
                            return
                    }
                    (n || (delete l[u].data,
                    r(l[u]))) && (a ? K.cleanData([e], !0) : K.support.deleteExpando || l != l.window ? delete l[u] : l[u] = null )
                }
            }
        },
        _data: function(e, t, n) {
            return K.data(e, t, n, !0)
        },
        acceptData: function(e) {
            var t = e.nodeName && K.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
    K.fn.extend({
        data: function(e, n) {
            var r, o, s, a, l, u = this[0], c = 0, f = null ;
            if (e === t) {
                if (this.length && (f = K.data(u),
                1 === u.nodeType && !K._data(u, "parsedAttrs"))) {
                    for (s = u.attributes,
                    l = s.length; l > c; c++)
                        a = s[c].name,
                        a.indexOf("data-") || (a = K.camelCase(a.substring(5)),
                        i(u, a, f[a]));
                    K._data(u, "parsedAttrs", !0)
                }
                return f
            }
            return "object" == typeof e ? this.each(function() {
                K.data(this, e)
            }
            ) : (r = e.split(".", 2),
            r[1] = r[1] ? "." + r[1] : "",
            o = r[1] + "!",
            K.access(this, function(n) {
                return n === t ? (f = this.triggerHandler("getData" + o, [r[0]]),
                f === t && u && (f = K.data(u, e),
                f = i(u, e, f)),
                f === t && r[1] ? this.data(r[0]) : f) : (r[1] = n,
                void this.each(function() {
                    var t = K(this);
                    t.triggerHandler("setData" + o, r),
                    K.data(this, e, n),
                    t.triggerHandler("changeData" + o, r)
                }
                ))
            }
            , null , n, arguments.length > 1, null , !1))
        },
        removeData: function(e) {
            return this.each(function() {
                K.removeData(this, e)
            }
            )
        }
    }),
    K.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue",
            i = K._data(e, t),
            n && (!i || K.isArray(n) ? i = K._data(e, t, K.makeArray(n)) : i.push(n)),
            i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = K.queue(e, t)
              , i = n.length
              , r = n.shift()
              , o = K._queueHooks(e, t)
              , s = function() {
                K.dequeue(e, t)
            }
            ;
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(e, s, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return K._data(e, n) || K._data(e, n, {
                empty: K.Callbacks("once memory").add(function() {
                    K.removeData(e, t + "queue", !0),
                    K.removeData(e, n, !0)
                }
                )
            })
        }
    }),
    K.fn.extend({
        queue: function(e, n) {
            var i = 2;
            return "string" != typeof e && (n = e,
            e = "fx",
            i--),
            arguments.length < i ? K.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = K.queue(this, e, n);
                K._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && K.dequeue(this, e)
            }
            )
        },
        dequeue: function(e) {
            return this.each(function() {
                K.dequeue(this, e)
            }
            )
        },
        delay: function(e, t) {
            return e = K.fx ? K.fx.speeds[e] || e : e,
            t = t || "fx",
            this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            }
            )
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var i, r = 1, o = K.Deferred(), s = this, a = this.length, l = function() {
                --r || o.resolveWith(s, [s])
            }
            ;
            for ("string" != typeof e && (n = e,
            e = t),
            e = e || "fx"; a--; )
                i = K._data(s[a], e + "queueHooks"),
                i && i.empty && (r++,
                i.empty.add(l));
            return l(),
            o.promise(n)
        }
    });
    var yt, vt, bt, xt = /[\t\r\n]/g, wt = /\r/g, Ct = /^(?:button|input)$/i, Tt = /^(?:button|input|object|select|textarea)$/i, kt = /^a(?:rea|)$/i, Nt = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, Et = K.support.getSetAttribute;
    K.fn.extend({
        attr: function(e, t) {
            return K.access(this, K.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                K.removeAttr(this, e)
            }
            )
        },
        prop: function(e, t) {
            return K.access(this, K.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = K.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch (n) {}
            }
            )
        },
        addClass: function(e) {
            var t, n, i, r, o, s, a;
            if (K.isFunction(e))
                return this.each(function(t) {
                    K(this).addClass(e.call(this, t, this.className))
                }
                );
            if (e && "string" == typeof e)
                for (t = e.split(tt),
                n = 0,
                i = this.length; i > n; n++)
                    if (r = this[n],
                    1 === r.nodeType)
                        if (r.className || 1 !== t.length) {
                            for (o = " " + r.className + " ",
                            s = 0,
                            a = t.length; a > s; s++)
                                o.indexOf(" " + t[s] + " ") < 0 && (o += t[s] + " ");
                            r.className = K.trim(o)
                        } else
                            r.className = e;
            return this
        },
        removeClass: function(e) {
            var n, i, r, o, s, a, l;
            if (K.isFunction(e))
                return this.each(function(t) {
                    K(this).removeClass(e.call(this, t, this.className))
                }
                );
            if (e && "string" == typeof e || e === t)
                for (n = (e || "").split(tt),
                a = 0,
                l = this.length; l > a; a++)
                    if (r = this[a],
                    1 === r.nodeType && r.className) {
                        for (i = (" " + r.className + " ").replace(xt, " "),
                        o = 0,
                        s = n.length; s > o; o++)
                            for (; i.indexOf(" " + n[o] + " ") >= 0; )
                                i = i.replace(" " + n[o] + " ", " ");
                        r.className = e ? K.trim(i) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , i = "boolean" == typeof t;
            return this.each(K.isFunction(e) ? function(n) {
                K(this).toggleClass(e.call(this, n, this.className, t), t)
            }
             : function() {
                if ("string" === n)
                    for (var r, o = 0, s = K(this), a = t, l = e.split(tt); r = l[o++]; )
                        a = i ? a : !s.hasClass(r),
                        s[a ? "addClass" : "removeClass"](r);
                else
                    ("undefined" === n || "boolean" === n) && (this.className && K._data(this, "__className__", this.className),
                    this.className = this.className || e === !1 ? "" : K._data(this, "__className__") || "")
            }
            )
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(xt, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        },
        val: function(e) {
            var n, i, r, o = this[0];
            {
                if (arguments.length)
                    return r = K.isFunction(e),
                    this.each(function(i) {
                        var o, s = K(this);
                        1 === this.nodeType && (o = r ? e.call(this, i, s.val()) : e,
                        null  == o ? o = "" : "number" == typeof o ? o += "" : K.isArray(o) && (o = K.map(o, function(e) {
                            return null  == e ? "" : e + ""
                        }
                        )),
                        n = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()],
                        n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
                    }
                    );
                if (o)
                    return n = K.valHooks[o.type] || K.valHooks[o.nodeName.toLowerCase()],
                    n && "get" in n && (i = n.get(o, "value")) !== t ? i : (i = o.value,
                    "string" == typeof i ? i.replace(wt, "") : null  == i ? "" : i)
            }
        }
    }),
    K.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r, o = e.selectedIndex, s = [], a = e.options, l = "select-one" === e.type;
                    if (0 > o)
                        return null ;
                    for (n = l ? o : 0,
                    i = l ? o + 1 : a.length; i > n; n++)
                        if (r = a[n],
                        !(!r.selected || (K.support.optDisabled ? r.disabled : null  !== r.getAttribute("disabled")) || r.parentNode.disabled && K.nodeName(r.parentNode, "optgroup"))) {
                            if (t = K(r).val(),
                            l)
                                return t;
                            s.push(t)
                        }
                    return l && !s.length && a.length ? K(a[o]).val() : s
                },
                set: function(e, t) {
                    var n = K.makeArray(t);
                    return K(e).find("option").each(function() {
                        this.selected = K.inArray(K(this).val(), n) >= 0
                    }
                    ),
                    n.length || (e.selectedIndex = -1),
                    n
                }
            }
        },
        attrFn: {},
        attr: function(e, n, i, r) {
            var o, s, a, l = e.nodeType;
            if (e && 3 !== l && 8 !== l && 2 !== l)
                return r && K.isFunction(K.fn[n]) ? K(e)[n](i) : "undefined" == typeof e.getAttribute ? K.prop(e, n, i) : (a = 1 !== l || !K.isXMLDoc(e),
                a && (n = n.toLowerCase(),
                s = K.attrHooks[n] || (Nt.test(n) ? vt : yt)),
                i !== t ? null  === i ? void K.removeAttr(e, n) : s && "set" in s && a && (o = s.set(e, i, n)) !== t ? o : (e.setAttribute(n, i + ""),
                i) : s && "get" in s && a && null  !== (o = s.get(e, n)) ? o : (o = e.getAttribute(n),
                null  === o ? t : o))
        },
        removeAttr: function(e, t) {
            var n, i, r, o, s = 0;
            if (t && 1 === e.nodeType)
                for (i = t.split(tt); s < i.length; s++)
                    r = i[s],
                    r && (n = K.propFix[r] || r,
                    o = Nt.test(r),
                    o || K.attr(e, r, ""),
                    e.removeAttribute(Et ? r : n),
                    o && n in e && (e[n] = !1))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (Ct.test(e.nodeName) && e.parentNode)
                        K.error("type property can't be changed");
                    else if (!K.support.radioValue && "radio" === t && K.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return yt && K.nodeName(e, "button") ? yt.get(e, t) : t in e ? e.value : null
                },
                set: function(e, t, n) {
                    return yt && K.nodeName(e, "button") ? yt.set(e, t, n) : void (e.value = t)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, i) {
            var r, o, s, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a)
                return s = 1 !== a || !K.isXMLDoc(e),
                s && (n = K.propFix[n] || n,
                o = K.propHooks[n]),
                i !== t ? o && "set" in o && (r = o.set(e, i, n)) !== t ? r : e[n] = i : o && "get" in o && null  !== (r = o.get(e, n)) ? r : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : Tt.test(e.nodeName) || kt.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }),
    vt = {
        get: function(e, n) {
            var i, r = K.prop(e, n);
            return r === !0 || "boolean" != typeof r && (i = e.getAttributeNode(n)) && i.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            var i;
            return t === !1 ? K.removeAttr(e, n) : (i = K.propFix[n] || n,
            i in e && (e[i] = !0),
            e.setAttribute(n, n.toLowerCase())),
            n
        }
    },
    Et || (bt = {
        name: !0,
        id: !0,
        coords: !0
    },
    yt = K.valHooks.button = {
        get: function(e, n) {
            var i;
            return i = e.getAttributeNode(n),
            i && (bt[n] ? "" !== i.value : i.specified) ? i.value : t
        },
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || (i = W.createAttribute(n),
            e.setAttributeNode(i)),
            i.value = t + ""
        }
    },
    K.each(["width", "height"], function(e, t) {
        K.attrHooks[t] = K.extend(K.attrHooks[t], {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"),
                n) : void 0
            }
        })
    }
    ),
    K.attrHooks.contenteditable = {
        get: yt.get,
        set: function(e, t, n) {
            "" === t && (t = "false"),
            yt.set(e, t, n)
        }
    }),
    K.support.hrefNormalized || K.each(["href", "src", "width", "height"], function(e, n) {
        K.attrHooks[n] = K.extend(K.attrHooks[n], {
            get: function(e) {
                var i = e.getAttribute(n, 2);
                return null  === i ? t : i
            }
        })
    }
    ),
    K.support.style || (K.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    K.support.optSelected || (K.propHooks.selected = K.extend(K.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    })),
    K.support.enctype || (K.propFix.enctype = "encoding"),
    K.support.checkOn || K.each(["radio", "checkbox"], function() {
        K.valHooks[this] = {
            get: function(e) {
                return null  === e.getAttribute("value") ? "on" : e.value
            }
        }
    }
    ),
    K.each(["radio", "checkbox"], function() {
        K.valHooks[this] = K.extend(K.valHooks[this], {
            set: function(e, t) {
                return K.isArray(t) ? e.checked = K.inArray(K(e).val(), t) >= 0 : void 0
            }
        })
    }
    );
    var $t = /^(?:textarea|input|select)$/i
      , St = /^([^\.]*|)(?:\.(.+)|)$/
      , jt = /(?:^|\s)hover(\.\S+|)\b/
      , At = /^key/
      , Dt = /^(?:mouse|contextmenu)|click/
      , Lt = /^(?:focusinfocus|focusoutblur)$/
      , Ht = function(e) {
        return K.event.special.hover ? e : e.replace(jt, "mouseenter$1 mouseleave$1")
    }
    ;
    K.event = {
        add: function(e, n, i, r, o) {
            var s, a, l, u, c, f, p, d, h, m, g;
            if (3 !== e.nodeType && 8 !== e.nodeType && n && i && (s = K._data(e))) {
                for (i.handler && (h = i,
                i = h.handler,
                o = h.selector),
                i.guid || (i.guid = K.guid++),
                l = s.events,
                l || (s.events = l = {}),
                a = s.handle,
                a || (s.handle = a = function(e) {
                    return "undefined" == typeof K || e && K.event.triggered === e.type ? t : K.event.dispatch.apply(a.elem, arguments)
                }
                ,
                a.elem = e),
                n = K.trim(Ht(n)).split(" "),
                u = 0; u < n.length; u++)
                    c = St.exec(n[u]) || [],
                    f = c[1],
                    p = (c[2] || "").split(".").sort(),
                    g = K.event.special[f] || {},
                    f = (o ? g.delegateType : g.bindType) || f,
                    g = K.event.special[f] || {},
                    d = K.extend({
                        type: f,
                        origType: c[1],
                        data: r,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && K.expr.match.needsContext.test(o),
                        namespace: p.join(".")
                    }, h),
                    m = l[f],
                    m || (m = l[f] = [],
                    m.delegateCount = 0,
                    g.setup && g.setup.call(e, r, p, a) !== !1 || (e.addEventListener ? e.addEventListener(f, a, !1) : e.attachEvent && e.attachEvent("on" + f, a))),
                    g.add && (g.add.call(e, d),
                    d.handler.guid || (d.handler.guid = i.guid)),
                    o ? m.splice(m.delegateCount++, 0, d) : m.push(d),
                    K.event.global[f] = !0;
                e = null
            }
        },
        global: {},
        remove: function(e, t, n, i, r) {
            var o, s, a, l, u, c, f, p, d, h, m, g = K.hasData(e) && K._data(e);
            if (g && (p = g.events)) {
                for (t = K.trim(Ht(t || "")).split(" "),
                o = 0; o < t.length; o++)
                    if (s = St.exec(t[o]) || [],
                    a = l = s[1],
                    u = s[2],
                    a) {
                        for (d = K.event.special[a] || {},
                        a = (i ? d.delegateType : d.bindType) || a,
                        h = p[a] || [],
                        c = h.length,
                        u = u ? new RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
                        f = 0; f < h.length; f++)
                            m = h[f],
                            !(!r && l !== m.origType || n && n.guid !== m.guid || u && !u.test(m.namespace) || i && i !== m.selector && ("**" !== i || !m.selector) || (h.splice(f--, 1),
                            m.selector && h.delegateCount--,
                            !d.remove || !d.remove.call(e, m)));
                        0 === h.length && c !== h.length && ((!d.teardown || d.teardown.call(e, u, g.handle) === !1) && K.removeEvent(e, a, g.handle),
                        delete p[a])
                    } else
                        for (a in p)
                            K.event.remove(e, a + t[o], n, i, !0);
                K.isEmptyObject(p) && (delete g.handle,
                K.removeData(e, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(n, i, r, o) {
            if (!r || 3 !== r.nodeType && 8 !== r.nodeType) {
                var s, a, l, u, c, f, p, d, h, m, g = n.type || n, y = [];
                if (Lt.test(g + K.event.triggered))
                    return;
                if (g.indexOf("!") >= 0 && (g = g.slice(0, -1),
                a = !0),
                g.indexOf(".") >= 0 && (y = g.split("."),
                g = y.shift(),
                y.sort()),
                (!r || K.event.customEvent[g]) && !K.event.global[g])
                    return;
                if (n = "object" == typeof n ? n[K.expando] ? n : new K.Event(g,n) : new K.Event(g),
                n.type = g,
                n.isTrigger = !0,
                n.exclusive = a,
                n.namespace = y.join("."),
                n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
                f = g.indexOf(":") < 0 ? "on" + g : "",
                !r) {
                    s = K.cache;
                    for (l in s)
                        s[l].events && s[l].events[g] && K.event.trigger(n, i, s[l].handle.elem, !0);
                    return
                }
                if (n.result = t,
                n.target || (n.target = r),
                i = null  != i ? K.makeArray(i) : [],
                i.unshift(n),
                p = K.event.special[g] || {},
                p.trigger && p.trigger.apply(r, i) === !1)
                    return;
                if (h = [[r, p.bindType || g]],
                !o && !p.noBubble && !K.isWindow(r)) {
                    for (m = p.delegateType || g,
                    u = Lt.test(m + g) ? r : r.parentNode,
                    c = r; u; u = u.parentNode)
                        h.push([u, m]),
                        c = u;
                    c === (r.ownerDocument || W) && h.push([c.defaultView || c.parentWindow || e, m])
                }
                for (l = 0; l < h.length && !n.isPropagationStopped(); l++)
                    u = h[l][0],
                    n.type = h[l][1],
                    d = (K._data(u, "events") || {})[n.type] && K._data(u, "handle"),
                    d && d.apply(u, i),
                    d = f && u[f],
                    d && K.acceptData(u) && d.apply && d.apply(u, i) === !1 && n.preventDefault();
                return n.type = g,
                !(o || n.isDefaultPrevented() || p._default && p._default.apply(r.ownerDocument, i) !== !1 || "click" === g && K.nodeName(r, "a") || !K.acceptData(r) || !f || !r[g] || ("focus" === g || "blur" === g) && 0 === n.target.offsetWidth || K.isWindow(r) || (c = r[f],
                c && (r[f] = null ),
                K.event.triggered = g,
                r[g](),
                K.event.triggered = t,
                !c || !(r[f] = c))),
                n.result
            }
        },
        dispatch: function(n) {
            n = K.event.fix(n || e.event);
            var i, r, o, s, a, l, u, c, f, p = (K._data(this, "events") || {})[n.type] || [], d = p.delegateCount, h = U.call(arguments), m = !n.exclusive && !n.namespace, g = K.event.special[n.type] || {}, y = [];
            if (h[0] = n,
            n.delegateTarget = this,
            !g.preDispatch || g.preDispatch.call(this, n) !== !1) {
                if (d && (!n.button || "click" !== n.type))
                    for (o = n.target; o != this; o = o.parentNode || this)
                        if (o.disabled !== !0 || "click" !== n.type) {
                            for (a = {},
                            u = [],
                            i = 0; d > i; i++)
                                c = p[i],
                                f = c.selector,
                                a[f] === t && (a[f] = c.needsContext ? K(f, this).index(o) >= 0 : K.find(f, this, null , [o]).length),
                                a[f] && u.push(c);
                            u.length && y.push({
                                elem: o,
                                matches: u
                            })
                        }
                for (p.length > d && y.push({
                    elem: this,
                    matches: p.slice(d)
                }),
                i = 0; i < y.length && !n.isPropagationStopped(); i++)
                    for (l = y[i],
                    n.currentTarget = l.elem,
                    r = 0; r < l.matches.length && !n.isImmediatePropagationStopped(); r++)
                        c = l.matches[r],
                        (m || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) && (n.data = c.data,
                        n.handleObj = c,
                        s = ((K.event.special[c.origType] || {}).handle || c.handler).apply(l.elem, h),
                        s !== t && (n.result = s,
                        s === !1 && (n.preventDefault(),
                        n.stopPropagation())));
                return g.postDispatch && g.postDispatch.call(this, n),
                n.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null  == e.which && (e.which = null  != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var i, r, o, s = n.button, a = n.fromElement;
                return null  == e.pageX && null  != n.clientX && (i = e.target.ownerDocument || W,
                r = i.documentElement,
                o = i.body,
                e.pageX = n.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0),
                e.pageY = n.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)),
                !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a),
                !e.which && s !== t && (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[K.expando])
                return e;
            var t, n, i = e, r = K.event.fixHooks[e.type] || {}, o = r.props ? this.props.concat(r.props) : this.props;
            for (e = K.Event(i),
            t = o.length; t; )
                n = o[--t],
                e[n] = i[n];
            return e.target || (e.target = i.srcElement || W),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            r.filter ? r.filter(e, i) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(e, t, n) {
                    K.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function(e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null )
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = K.extend(new K.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? K.event.trigger(r, null , t) : K.event.dispatch.call(t, r),
            r.isDefaultPrevented() && n.preventDefault()
        }
    },
    K.event.handle = K.event.dispatch,
    K.removeEvent = W.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
     : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null ),
        e.detachEvent(i, n))
    }
    ,
    K.Event = function(e, t) {
        return this instanceof K.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? s : o) : this.type = e,
        t && K.extend(this, t),
        this.timeStamp = e && e.timeStamp || K.now(),
        this[K.expando] = !0,
        void 0) : new K.Event(e,t)
    }
    ,
    K.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = s;
            var e = this.originalEvent;
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = s;
            var e = this.originalEvent;
            e && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = s,
            this.stopPropagation()
        },
        isDefaultPrevented: o,
        isPropagationStopped: o,
        isImmediatePropagationStopped: o
    },
    K.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        K.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                {
                    var n, i = this, r = e.relatedTarget, o = e.handleObj;
                    o.selector
                }
                return (!r || r !== i && !K.contains(i, r)) && (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }
    ),
    K.support.submitBubbles || (K.event.special.submit = {
        setup: function() {
            return K.nodeName(this, "form") ? !1 : void K.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target
                  , i = K.nodeName(n, "input") || K.nodeName(n, "button") ? n.form : t;
                i && !K._data(i, "_submit_attached") && (K.event.add(i, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }
                ),
                K._data(i, "_submit_attached", !0))
            }
            )
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && K.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return K.nodeName(this, "form") ? !1 : void K.event.remove(this, "._submit")
        }
    }),
    K.support.changeBubbles || (K.event.special.change = {
        setup: function() {
            return $t.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (K.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }
            ),
            K.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                K.event.simulate("change", this, e, !0)
            }
            )),
            !1) : void K.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                $t.test(t.nodeName) && !K._data(t, "_change_attached") && (K.event.add(t, "change._change", function(e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && K.event.simulate("change", this.parentNode, e, !0)
                }
                ),
                K._data(t, "_change_attached", !0))
            }
            )
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return K.event.remove(this, "._change"),
            !$t.test(this.nodeName)
        }
    }),
    K.support.focusinBubbles || K.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0
          , i = function(e) {
            K.event.simulate(t, e.target, K.event.fix(e), !0)
        }
        ;
        K.event.special[t] = {
            setup: function() {
                0 === n++ && W.addEventListener(e, i, !0)
            },
            teardown: function() {
                0 === --n && W.removeEventListener(e, i, !0)
            }
        }
    }
    ),
    K.fn.extend({
        on: function(e, n, i, r, s) {
            var a, l;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n,
                n = t);
                for (l in e)
                    this.on(l, n, i, e[l], s);
                return this
            }
            if (null  == i && null  == r ? (r = n,
            i = n = t) : null  == r && ("string" == typeof n ? (r = i,
            i = t) : (r = i,
            i = n,
            n = t)),
            r === !1)
                r = o;
            else if (!r)
                return this;
            return 1 === s && (a = r,
            r = function(e) {
                return K().off(e),
                a.apply(this, arguments)
            }
            ,
            r.guid = a.guid || (a.guid = K.guid++)),
            this.each(function() {
                K.event.add(this, e, r, i, n)
            }
            )
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, n, i) {
            var r, s;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                K(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (s in e)
                    this.off(s, n, e[s]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (i = n,
            n = t),
            i === !1 && (i = o),
            this.each(function() {
                K.event.remove(this, e, i, n)
            }
            )
        },
        bind: function(e, t, n) {
            return this.on(e, null , t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null , t)
        },
        live: function(e, t, n) {
            return K(this.context).on(e, this.selector, t, n),
            this
        },
        die: function(e, t) {
            return K(this.context).off(e, this.selector || "**", t),
            this
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function(e, t) {
            return this.each(function() {
                K.event.trigger(e, t, this)
            }
            )
        },
        triggerHandler: function(e, t) {
            return this[0] ? K.event.trigger(e, t, this[0], !0) : void 0
        },
        toggle: function(e) {
            var t = arguments
              , n = e.guid || K.guid++
              , i = 0
              , r = function(n) {
                var r = (K._data(this, "lastToggle" + e.guid) || 0) % i;
                return K._data(this, "lastToggle" + e.guid, r + 1),
                n.preventDefault(),
                t[r].apply(this, arguments) || !1
            }
            ;
            for (r.guid = n; i < t.length; )
                t[i++].guid = n;
            return this.click(r)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        K.fn[t] = function(e, n) {
            return null  == n && (n = e,
            e = null ),
            arguments.length > 0 ? this.on(t, null , e, n) : this.trigger(t)
        }
        ,
        At.test(t) && (K.event.fixHooks[t] = K.event.keyHooks),
        Dt.test(t) && (K.event.fixHooks[t] = K.event.mouseHooks)
    }
    ),
    function(e, t) {
        function n(e, t, n, i) {
            n = n || [],
            t = t || D;
            var r, o, s, a, l = t.nodeType;
            if (!e || "string" != typeof e)
                return n;
            if (1 !== l && 9 !== l)
                return [];
            if (s = w(t),
            !s && !i && (r = nt.exec(e)))
                if (a = r[1]) {
                    if (9 === l) {
                        if (o = t.getElementById(a),
                        !o || !o.parentNode)
                            return n;
                        if (o.id === a)
                            return n.push(o),
                            n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && C(t, o) && o.id === a)
                        return n.push(o),
                        n
                } else {
                    if (r[2])
                        return O.apply(n, q.call(t.getElementsByTagName(e), 0)),
                        n;
                    if ((a = r[3]) && pt && t.getElementsByClassName)
                        return O.apply(n, q.call(t.getElementsByClassName(a), 0)),
                        n
                }
            return m(e.replace(G, "$1"), t, n, i, s)
        }
        function i(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function r(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function o(e) {
            return B(function(t) {
                return t = +t,
                B(function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--; )
                        n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                }
                )
            }
            )
        }
        function s(e, t, n) {
            if (e === t)
                return n;
            for (var i = e.nextSibling; i; ) {
                if (i === t)
                    return -1;
                i = i.nextSibling
            }
            return 1
        }
        function a(e, t) {
            var i, r, o, s, a, l, u, c = R[j][e];
            if (c)
                return t ? 0 : c.slice(0);
            for (a = e,
            l = [],
            u = b.preFilter; a; ) {
                (!i || (r = Z.exec(a))) && (r && (a = a.slice(r[0].length)),
                l.push(o = [])),
                i = !1,
                (r = et.exec(a)) && (o.push(i = new A(r.shift())),
                a = a.slice(i.length),
                i.type = r[0].replace(G, " "));
                for (s in b.filter)
                    (r = at[s].exec(a)) && (!u[s] || (r = u[s](r, D, !0))) && (o.push(i = new A(r.shift())),
                    a = a.slice(i.length),
                    i.type = s,
                    i.matches = r);
                if (!i)
                    break
            }
            return t ? a.length : a ? n.error(e) : R(e, l).slice(0)
        }
        function l(e, t, n) {
            var i = t.dir
              , r = n && "parentNode" === t.dir
              , o = F++;
            return t.first ? function(t, n, o) {
                for (; t = t[i]; )
                    if (r || 1 === t.nodeType)
                        return e(t, n, o)
            }
             : function(t, n, s) {
                if (s) {
                    for (; t = t[i]; )
                        if ((r || 1 === t.nodeType) && e(t, n, s))
                            return t
                } else
                    for (var a, l = H + " " + o + " ", u = l + y; t = t[i]; )
                        if (r || 1 === t.nodeType) {
                            if ((a = t[j]) === u)
                                return t.sizset;
                            if ("string" == typeof a && 0 === a.indexOf(l)) {
                                if (t.sizset)
                                    return t
                            } else {
                                if (t[j] = u,
                                e(t, n, s))
                                    return t.sizset = !0,
                                    t;
                                t.sizset = !1
                            }
                        }
            }
        }
        function u(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--; )
                    if (!e[r](t, n, i))
                        return !1;
                return !0
            }
             : e[0]
        }
        function c(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null  != t; l > a; a++)
                (o = e[a]) && (!n || n(o, i, r)) && (s.push(o),
                u && t.push(a));
            return s
        }
        function f(e, t, n, i, r, o) {
            return i && !i[j] && (i = f(i)),
            r && !r[j] && (r = f(r, o)),
            B(function(o, s, a, l) {
                if (!o || !r) {
                    var u, f, p, d = [], m = [], g = s.length, y = o || h(t || "*", a.nodeType ? [a] : a, [], o), v = !e || !o && t ? y : c(y, d, e, a, l), b = n ? r || (o ? e : g || i) ? [] : s : v;
                    if (n && n(v, b, a, l),
                    i)
                        for (p = c(b, m),
                        i(p, [], a, l),
                        u = p.length; u--; )
                            (f = p[u]) && (b[m[u]] = !(v[m[u]] = f));
                    if (o)
                        for (u = e && b.length; u--; )
                            (f = b[u]) && (o[d[u]] = !(s[d[u]] = f));
                    else
                        b = c(b === s ? b.splice(g, b.length) : b),
                        r ? r(null , s, b, l) : O.apply(s, b)
                }
            }
            )
        }
        function p(e) {
            for (var t, n, i, r = e.length, o = b.relative[e[0].type], s = o || b.relative[" "], a = o ? 1 : 0, c = l(function(e) {
                return e === t
            }
            , s, !0), d = l(function(e) {
                return _.call(t, e) > -1
            }
            , s, !0), h = [function(e, n, i) {
                return !o && (i || n !== E) || ((t = n).nodeType ? c(e, n, i) : d(e, n, i))
            }
            ]; r > a; a++)
                if (n = b.relative[e[a].type])
                    h = [l(u(h), n)];
                else {
                    if (n = b.filter[e[a].type].apply(null , e[a].matches),
                    n[j]) {
                        for (i = ++a; r > i && !b.relative[e[i].type]; i++)
                            ;
                        return f(a > 1 && u(h), a > 1 && e.slice(0, a - 1).join("").replace(G, "$1"), n, i > a && p(e.slice(a, i)), r > i && p(e = e.slice(i)), r > i && e.join(""))
                    }
                    h.push(n)
                }
            return u(h)
        }
        function d(e, t) {
            var i = t.length > 0
              , r = e.length > 0
              , o = function(s, a, l, u, f) {
                var p, d, h, m = [], g = 0, v = "0", x = s && [], w = null  != f, C = E, T = s || r && b.find.TAG("*", f && a.parentNode || a), k = H += null  == C ? 1 : Math.E;
                for (w && (E = a !== D && a,
                y = o.el); null  != (p = T[v]); v++) {
                    if (r && p) {
                        for (d = 0; h = e[d]; d++)
                            if (h(p, a, l)) {
                                u.push(p);
                                break
                            }
                        w && (H = k,
                        y = ++o.el)
                    }
                    i && ((p = !h && p) && g--,
                    s && x.push(p))
                }
                if (g += v,
                i && v !== g) {
                    for (d = 0; h = t[d]; d++)
                        h(x, m, a, l);
                    if (s) {
                        if (g > 0)
                            for (; v--; )
                                !x[v] && !m[v] && (m[v] = M.call(u));
                        m = c(m)
                    }
                    O.apply(u, m),
                    w && !s && m.length > 0 && g + t.length > 1 && n.uniqueSort(u)
                }
                return w && (H = k,
                E = C),
                x
            }
            ;
            return o.el = 0,
            i ? B(o) : o
        }
        function h(e, t, i, r) {
            for (var o = 0, s = t.length; s > o; o++)
                n(e, t[o], i, r);
            return i
        }
        function m(e, t, n, i, r) {
            {
                var o, s, l, u, c, f = a(e);
                f.length
            }
            if (!i && 1 === f.length) {
                if (s = f[0] = f[0].slice(0),
                s.length > 2 && "ID" === (l = s[0]).type && 9 === t.nodeType && !r && b.relative[s[1].type]) {
                    if (t = b.find.ID(l.matches[0].replace(st, ""), t, r)[0],
                    !t)
                        return n;
                    e = e.slice(s.shift().length)
                }
                for (o = at.POS.test(e) ? -1 : s.length - 1; o >= 0 && (l = s[o],
                !b.relative[u = l.type]); o--)
                    if ((c = b.find[u]) && (i = c(l.matches[0].replace(st, ""), it.test(s[0].type) && t.parentNode || t, r))) {
                        if (s.splice(o, 1),
                        e = i.length && s.join(""),
                        !e)
                            return O.apply(n, q.call(i, 0)),
                            n;
                        break
                    }
            }
            return T(e, f)(i, t, r, n, it.test(e)),
            n
        }
        function g() {}
        var y, v, b, x, w, C, T, k, N, E, $ = !0, S = "undefined", j = ("sizcache" + Math.random()).replace(".", ""), A = String, D = e.document, L = D.documentElement, H = 0, F = 0, M = [].pop, O = [].push, q = [].slice, _ = [].indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (this[t] === e)
                    return t;
            return -1
        }
        , B = function(e, t) {
            return e[j] = null  == t || t,
            e
        }
        , P = function() {
            var e = {}
              , t = [];
            return B(function(n, i) {
                return t.push(n) > b.cacheLength && delete e[t.shift()],
                e[n] = i
            }
            , e)
        }
        , W = P(), R = P(), I = P(), z = "[\\x20\\t\\r\\n\\f]", X = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", Q = X.replace("w", "w#"), U = "([*^$|!~]?=)", Y = "\\[" + z + "*(" + X + ")" + z + "*(?:" + U + z + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + Q + ")|)|)" + z + "*\\]", J = ":(" + X + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + Y + ")|[^:]|\\\\.)*|.*))\\)|)", V = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)", G = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$","g"), Z = new RegExp("^" + z + "*," + z + "*"), et = new RegExp("^" + z + "*([\\x20\\t\\r\\n\\f>+~])" + z + "*"), tt = new RegExp(J), nt = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, it = /[\x20\t\r\n\f]*[+~]/, rt = /h\d/i, ot = /input|select|textarea|button/i, st = /\\(?!\\)/g, at = {
            ID: new RegExp("^#(" + X + ")"),
            CLASS: new RegExp("^\\.(" + X + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + X + ")['\"]?\\]"),
            TAG: new RegExp("^(" + X.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + Y),
            PSEUDO: new RegExp("^" + J),
            POS: new RegExp(V,"i"),
            CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)","i"),
            needsContext: new RegExp("^" + z + "*[>+~]|" + V,"i")
        }, lt = function(e) {
            var t = D.createElement("div");
            try {
                return e(t)
            } catch (n) {
                return !1
            } finally {
                t = null
            }
        }
        , ut = lt(function(e) {
            return e.appendChild(D.createComment("")),
            !e.getElementsByTagName("*").length
        }
        ), ct = lt(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            e.firstChild && typeof e.firstChild.getAttribute !== S && "#" === e.firstChild.getAttribute("href")
        }
        ), ft = lt(function(e) {
            e.innerHTML = "<select></select>";
            var t = typeof e.lastChild.getAttribute("multiple");
            return "boolean" !== t && "string" !== t
        }
        ), pt = lt(function(e) {
            return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
            e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e",
            2 === e.getElementsByClassName("e").length) : !1
        }
        ), dt = lt(function(e) {
            e.id = j + 0,
            e.innerHTML = "<a name='" + j + "'></a><div name='" + j + "'></div>",
            L.insertBefore(e, L.firstChild);
            var t = D.getElementsByName && D.getElementsByName(j).length === 2 + D.getElementsByName(j + 0).length;
            return v = !D.getElementById(j),
            L.removeChild(e),
            t
        }
        );
        try {
            q.call(L.childNodes, 0)[0].nodeType
        } catch (ht) {
            q = function(e) {
                for (var t, n = []; t = this[e]; e++)
                    n.push(t);
                return n
            }
        }
        n.matches = function(e, t) {
            return n(e, null , null , t)
        }
        ,
        n.matchesSelector = function(e, t) {
            return n(t, null , null , [e]).length > 0
        }
        ,
        x = n.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += x(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[i]; i++)
                    n += x(t);
            return n
        }
        ,
        w = n.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ,
        C = n.contains = L.contains ? function(e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e
              , i = t && t.parentNode;
            return e === i || !!(i && 1 === i.nodeType && n.contains && n.contains(i))
        }
         : L.compareDocumentPosition ? function(e, t) {
            return t && !!(16 & e.compareDocumentPosition(t))
        }
         : function(e, t) {
            for (; t = t.parentNode; )
                if (t === e)
                    return !0;
            return !1
        }
        ,
        n.attr = function(e, t) {
            var n, i = w(e);
            return i || (t = t.toLowerCase()),
            (n = b.attrHandle[t]) ? n(e) : i || ft ? e.getAttribute(t) : (n = e.getAttributeNode(t),
            n ? "boolean" == typeof e[t] ? e[t] ? t : null  : n.specified ? n.value : null  : null )
        }
        ,
        b = n.selectors = {
            cacheLength: 50,
            createPseudo: B,
            match: at,
            attrHandle: ct ? {} : {
                href: function(e) {
                    return e.getAttribute("href", 2)
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            },
            find: {
                ID: v ? function(e, t, n) {
                    if (typeof t.getElementById !== S && !n) {
                        var i = t.getElementById(e);
                        return i && i.parentNode ? [i] : []
                    }
                }
                 : function(e, n, i) {
                    if (typeof n.getElementById !== S && !i) {
                        var r = n.getElementById(e);
                        return r ? r.id === e || typeof r.getAttributeNode !== S && r.getAttributeNode("id").value === e ? [r] : t : []
                    }
                }
                ,
                TAG: ut ? function(e, t) {
                    return typeof t.getElementsByTagName !== S ? t.getElementsByTagName(e) : void 0
                }
                 : function(e, t) {
                    var n = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (var i, r = [], o = 0; i = n[o]; o++)
                            1 === i.nodeType && r.push(i);
                        return r
                    }
                    return n
                }
                ,
                NAME: dt && function(e, t) {
                    return typeof t.getElementsByName !== S ? t.getElementsByName(name) : void 0
                }
                ,
                CLASS: pt && function(e, t, n) {
                    return typeof t.getElementsByClassName === S || n ? void 0 : t.getElementsByClassName(e)
                }
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(st, ""),
                    e[3] = (e[4] || e[5] || "").replace(st, ""),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1] ? (e[2] || n.error(e[0]),
                    e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])),
                    e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && n.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n;
                    return at.CHILD.test(e[0]) ? null  : (e[3] ? e[2] = e[3] : (t = e[4]) && (tt.test(t) && (n = a(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n),
                    e[0] = e[0].slice(0, n)),
                    e[2] = t),
                    e.slice(0, 3))
                }
            },
            filter: {
                ID: v ? function(e) {
                    return e = e.replace(st, ""),
                    function(t) {
                        return t.getAttribute("id") === e
                    }
                }
                 : function(e) {
                    return e = e.replace(st, ""),
                    function(t) {
                        var n = typeof t.getAttributeNode !== S && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }
                ,
                TAG: function(e) {
                    return "*" === e ? function() {
                        return !0
                    }
                     : (e = e.replace(st, "").toLowerCase(),
                    function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                    )
                },
                CLASS: function(e) {
                    var t = W[j][e];
                    return t || (t = W(e, new RegExp("(^|" + z + ")" + e + "(" + z + "|$)"))),
                    function(e) {
                        return t.test(e.className || typeof e.getAttribute !== S && e.getAttribute("class") || "")
                    }
                },
                ATTR: function(e, t, i) {
                    return function(r) {
                        var o = n.attr(r, e);
                        return null  == o ? "!=" === t : t ? (o += "",
                        "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.substr(o.length - i.length) === i : "~=" === t ? (" " + o + " ").indexOf(i) > -1 : "|=" === t ? o === i || o.substr(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, i) {
                    return "nth" === e ? function(e) {
                        var t, r, o = e.parentNode;
                        if (1 === n && 0 === i)
                            return !0;
                        if (o)
                            for (r = 0,
                            t = o.firstChild; t && (1 !== t.nodeType || (r++,
                            e !== t)); t = t.nextSibling)
                                ;
                        return r -= i,
                        r === n || r % n === 0 && r / n >= 0
                    }
                     : function(t) {
                        var n = t;
                        switch (e) {
                        case "only":
                        case "first":
                            for (; n = n.previousSibling; )
                                if (1 === n.nodeType)
                                    return !1;
                            if ("first" === e)
                                return !0;
                            n = t;
                        case "last":
                            for (; n = n.nextSibling; )
                                if (1 === n.nodeType)
                                    return !1;
                            return !0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var i, r = b.pseudos[e] || b.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                    return r[j] ? r(t) : r.length > 1 ? (i = [e, e, "", t],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? B(function(e, n) {
                        for (var i, o = r(e, t), s = o.length; s--; )
                            i = _.call(e, o[s]),
                            e[i] = !(n[i] = o[s])
                    }
                    ) : function(e) {
                        return r(e, 0, i)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: B(function(e) {
                    var t = []
                      , n = []
                      , i = T(e.replace(G, "$1"));
                    return i[j] ? B(function(e, t, n, r) {
                        for (var o, s = i(e, null , r, []), a = e.length; a--; )
                            (o = s[a]) && (e[a] = !(t[a] = o))
                    }
                    ) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null , o, n),
                        !n.pop()
                    }
                }
                ),
                has: B(function(e) {
                    return function(t) {
                        return n(e, t).length > 0
                    }
                }
                ),
                contains: B(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                    }
                }
                ),
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                empty: function(e) {
                    var t;
                    for (e = e.firstChild; e; ) {
                        if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t)
                            return !1;
                        e = e.nextSibling
                    }
                    return !0
                },
                header: function(e) {
                    return rt.test(e.nodeName)
                },
                text: function(e) {
                    var t, n;
                    return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null  == (n = e.getAttribute("type")) || n.toLowerCase() === t)
                },
                radio: i("radio"),
                checkbox: i("checkbox"),
                file: i("file"),
                password: i("password"),
                image: i("image"),
                submit: r("submit"),
                reset: r("reset"),
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                input: function(e) {
                    return ot.test(e.nodeName)
                },
                focus: function(e) {
                    var t = e.ownerDocument;
                    return !(e !== t.activeElement || t.hasFocus && !t.hasFocus() || !e.type && !e.href)
                },
                active: function(e) {
                    return e === e.ownerDocument.activeElement
                },
                first: o(function() {
                    return [0]
                }
                ),
                last: o(function(e, t) {
                    return [t - 1]
                }
                ),
                eq: o(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }
                ),
                even: o(function(e, t) {
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }
                ),
                odd: o(function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }
                ),
                lt: o(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0; )
                        e.push(i);
                    return e
                }
                ),
                gt: o(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                }
                )
            }
        },
        k = L.compareDocumentPosition ? function(e, t) {
            return e === t ? (N = !0,
            0) : (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1
        }
         : function(e, t) {
            if (e === t)
                return N = !0,
                0;
            if (e.sourceIndex && t.sourceIndex)
                return e.sourceIndex - t.sourceIndex;
            var n, i, r = [], o = [], a = e.parentNode, l = t.parentNode, u = a;
            if (a === l)
                return s(e, t);
            if (!a)
                return -1;
            if (!l)
                return 1;
            for (; u; )
                r.unshift(u),
                u = u.parentNode;
            for (u = l; u; )
                o.unshift(u),
                u = u.parentNode;
            n = r.length,
            i = o.length;
            for (var c = 0; n > c && i > c; c++)
                if (r[c] !== o[c])
                    return s(r[c], o[c]);
            return c === n ? s(e, o[c], -1) : s(r[c], t, 1)
        }
        ,
        [0, 0].sort(k),
        $ = !N,
        n.uniqueSort = function(e) {
            var t, n = 1;
            if (N = $,
            e.sort(k),
            N)
                for (; t = e[n]; n++)
                    t === e[n - 1] && e.splice(n--, 1);
            return e
        }
        ,
        n.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        T = n.compile = function(e, t) {
            var n, i = [], r = [], o = I[j][e];
            if (!o) {
                for (t || (t = a(e)),
                n = t.length; n--; )
                    o = p(t[n]),
                    o[j] ? i.push(o) : r.push(o);
                o = I(e, d(r, i))
            }
            return o
        }
        ,
        D.querySelectorAll && function() {
            var e, t = m, i = /'|\\/g, r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, o = [":focus"], s = [":active", ":focus"], l = L.matchesSelector || L.mozMatchesSelector || L.webkitMatchesSelector || L.oMatchesSelector || L.msMatchesSelector;
            lt(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || o.push("\\[" + z + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                e.querySelectorAll(":checked").length || o.push(":checked")
            }
            ),
            lt(function(e) {
                e.innerHTML = "<p test=''></p>",
                e.querySelectorAll("[test^='']").length && o.push("[*^$]=" + z + "*(?:\"\"|'')"),
                e.innerHTML = "<input type='hidden'/>",
                e.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled")
            }
            ),
            o = new RegExp(o.join("|")),
            m = function(e, n, r, s, l) {
                if (!(s || l || o && o.test(e))) {
                    var u, c, f = !0, p = j, d = n, h = 9 === n.nodeType && e;
                    if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
                        for (u = a(e),
                        (f = n.getAttribute("id")) ? p = f.replace(i, "\\$&") : n.setAttribute("id", p),
                        p = "[id='" + p + "'] ",
                        c = u.length; c--; )
                            u[c] = p + u[c].join("");
                        d = it.test(e) && n.parentNode || n,
                        h = u.join(",")
                    }
                    if (h)
                        try {
                            return O.apply(r, q.call(d.querySelectorAll(h), 0)),
                            r
                        } catch (m) {} finally {
                            f || n.removeAttribute("id")
                        }
                }
                return t(e, n, r, s, l)
            }
            ,
            l && (lt(function(t) {
                e = l.call(t, "div");
                try {
                    l.call(t, "[test!='']:sizzle"),
                    s.push("!=", J)
                } catch (n) {}
            }
            ),
            s = new RegExp(s.join("|")),
            n.matchesSelector = function(t, i) {
                if (i = i.replace(r, "='$1']"),
                !(w(t) || s.test(i) || o && o.test(i)))
                    try {
                        var a = l.call(t, i);
                        if (a || e || t.document && 11 !== t.document.nodeType)
                            return a
                    } catch (u) {}
                return n(i, null , null , [t]).length > 0
            }
            )
        }
        (),
        b.pseudos.nth = b.pseudos.eq,
        b.filters = g.prototype = b.pseudos,
        b.setFilters = new g,
        n.attr = K.attr,
        K.find = n,
        K.expr = n.selectors,
        K.expr[":"] = K.expr.pseudos,
        K.unique = n.uniqueSort,
        K.text = n.getText,
        K.isXMLDoc = n.isXML,
        K.contains = n.contains
    }
    (e);
    var Ft = /Until$/
      , Mt = /^(?:parents|prev(?:Until|All))/
      , Ot = /^.[^:#\[\.,]*$/
      , qt = K.expr.match.needsContext
      , _t = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    K.fn.extend({
        find: function(e) {
            var t, n, i, r, o, s, a = this;
            if ("string" != typeof e)
                return K(e).filter(function() {
                    for (t = 0,
                    n = a.length; n > t; t++)
                        if (K.contains(a[t], this))
                            return !0
                }
                );
            for (s = this.pushStack("", "find", e),
            t = 0,
            n = this.length; n > t; t++)
                if (i = s.length,
                K.find(e, this[t], s),
                t > 0)
                    for (r = i; r < s.length; r++)
                        for (o = 0; i > o; o++)
                            if (s[o] === s[r]) {
                                s.splice(r--, 1);
                                break
                            }
            return s
        },
        has: function(e) {
            var t, n = K(e, this), i = n.length;
            return this.filter(function() {
                for (t = 0; i > t; t++)
                    if (K.contains(this, n[t]))
                        return !0
            }
            )
        },
        not: function(e) {
            return this.pushStack(u(this, e, !1), "not", e)
        },
        filter: function(e) {
            return this.pushStack(u(this, e, !0), "filter", e)
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? qt.test(e) ? K(e, this.context).index(this[0]) >= 0 : K.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], s = qt.test(e) || "string" != typeof e ? K(e, t || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n.ownerDocument && n !== t && 11 !== n.nodeType; ) {
                    if (s ? s.index(n) > -1 : K.find.matchesSelector(n, e)) {
                        o.push(n);
                        break
                    }
                    n = n.parentNode
                }
            return o = o.length > 1 ? K.unique(o) : o,
            this.pushStack(o, "closest", e)
        },
        index: function(e) {
            return e ? "string" == typeof e ? K.inArray(this[0], K(e)) : K.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? K(e, t) : K.makeArray(e && e.nodeType ? [e] : e)
              , i = K.merge(this.get(), n);
            return this.pushStack(a(n[0]) || a(i[0]) ? i : K.unique(i))
        },
        addBack: function(e) {
            return this.add(null  == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    K.fn.andSelf = K.fn.addBack,
    K.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return K.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return K.dir(e, "parentNode", n)
        },
        next: function(e) {
            return l(e, "nextSibling")
        },
        prev: function(e) {
            return l(e, "previousSibling")
        },
        nextAll: function(e) {
            return K.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return K.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return K.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return K.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return K.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return K.sibling(e.firstChild)
        },
        contents: function(e) {
            return K.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : K.merge([], e.childNodes)
        }
    }, function(e, t) {
        K.fn[e] = function(n, i) {
            var r = K.map(this, t, n);
            return Ft.test(e) || (i = n),
            i && "string" == typeof i && (r = K.filter(i, r)),
            r = this.length > 1 && !_t[e] ? K.unique(r) : r,
            this.length > 1 && Mt.test(e) && (r = r.reverse()),
            this.pushStack(r, e, U.call(arguments).join(","))
        }
    }
    ),
    K.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"),
            1 === t.length ? K.find.matchesSelector(t[0], e) ? [t[0]] : [] : K.find.matches(e, t)
        },
        dir: function(e, n, i) {
            for (var r = [], o = e[n]; o && 9 !== o.nodeType && (i === t || 1 !== o.nodeType || !K(o).is(i)); )
                1 === o.nodeType && r.push(o),
                o = o[n];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Bt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , Pt = / jQuery\d+="(?:null|\d+)"/g
      , Wt = /^\s+/
      , Rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , It = /<([\w:]+)/
      , zt = /<tbody/i
      , Xt = /<|&#?\w+;/
      , Qt = /<(?:script|style|link)/i
      , Ut = /<(?:script|object|embed|option|style)/i
      , Yt = new RegExp("<(?:" + Bt + ")[\\s/>]","i")
      , Jt = /^(?:checkbox|radio)$/
      , Vt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Gt = /\/(java|ecma)script/i
      , Kt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g
      , Zt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }
      , en = c(W)
      , tn = en.appendChild(W.createElement("div"));
    Zt.optgroup = Zt.option,
    Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead,
    Zt.th = Zt.td,
    K.support.htmlSerialize || (Zt._default = [1, "X<div>", "</div>"]),
    K.fn.extend({
        text: function(e) {
            return K.access(this, function(e) {
                return e === t ? K.text(this) : this.empty().append((this[0] && this[0].ownerDocument || W).createTextNode(e))
            }
            , null , e, arguments.length)
        },
        wrapAll: function(e) {
            if (K.isFunction(e))
                return this.each(function(t) {
                    K(this).wrapAll(e.call(this, t))
                }
                );
            if (this[0]) {
                var t = K(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                        e = e.firstChild;
                    return e
                }
                ).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(K.isFunction(e) ? function(t) {
                K(this).wrapInner(e.call(this, t))
            }
             : function() {
                var t = K(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }
            )
        },
        wrap: function(e) {
            var t = K.isFunction(e);
            return this.each(function(n) {
                K(this).wrapAll(t ? e.call(this, n) : e)
            }
            )
        },
        unwrap: function() {
            return this.parent().each(function() {
                K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
            }
            ).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e)
            }
            )
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(e, this.firstChild)
            }
            )
        },
        before: function() {
            if (!a(this[0]))
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this)
                }
                );
            if (arguments.length) {
                var e = K.clean(arguments);
                return this.pushStack(K.merge(e, this), "before", this.selector)
            }
        },
        after: function() {
            if (!a(this[0]))
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                }
                );
            if (arguments.length) {
                var e = K.clean(arguments);
                return this.pushStack(K.merge(this, e), "after", this.selector)
            }
        },
        remove: function(e, t) {
            for (var n, i = 0; null  != (n = this[i]); i++)
                (!e || K.filter(e, [n]).length) && (!t && 1 === n.nodeType && (K.cleanData(n.getElementsByTagName("*")),
                K.cleanData([n])),
                n.parentNode && n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null  != (e = this[t]); t++)
                for (1 === e.nodeType && K.cleanData(e.getElementsByTagName("*")); e.firstChild; )
                    e.removeChild(e.firstChild);
            return this
        },
        clone: function(e, t) {
            return e = null  == e ? !1 : e,
            t = null  == t ? e : t,
            this.map(function() {
                return K.clone(this, e, t)
            }
            )
        },
        html: function(e) {
            return K.access(this, function(e) {
                var n = this[0] || {}
                  , i = 0
                  , r = this.length;
                if (e === t)
                    return 1 === n.nodeType ? n.innerHTML.replace(Pt, "") : t;
                if (!("string" != typeof e || Qt.test(e) || !K.support.htmlSerialize && Yt.test(e) || !K.support.leadingWhitespace && Wt.test(e) || Zt[(It.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Rt, "<$1></$2>");
                    try {
                        for (; r > i; i++)
                            n = this[i] || {},
                            1 === n.nodeType && (K.cleanData(n.getElementsByTagName("*")),
                            n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }
            , null , e, arguments.length)
        },
        replaceWith: function(e) {
            return a(this[0]) ? this.length ? this.pushStack(K(K.isFunction(e) ? e() : e), "replaceWith", e) : this : K.isFunction(e) ? this.each(function(t) {
                var n = K(this)
                  , i = n.html();
                n.replaceWith(e.call(this, t, i))
            }
            ) : ("string" != typeof e && (e = K(e).detach()),
            this.each(function() {
                var t = this.nextSibling
                  , n = this.parentNode;
                K(this).remove(),
                t ? K(t).before(e) : K(n).append(e)
            }
            ))
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, i) {
            e = [].concat.apply([], e);
            var r, o, s, a, l = 0, u = e[0], c = [], p = this.length;
            if (!K.support.checkClone && p > 1 && "string" == typeof u && Vt.test(u))
                return this.each(function() {
                    K(this).domManip(e, n, i)
                }
                );
            if (K.isFunction(u))
                return this.each(function(r) {
                    var o = K(this);
                    e[0] = u.call(this, r, n ? o.html() : t),
                    o.domManip(e, n, i)
                }
                );
            if (this[0]) {
                if (r = K.buildFragment(e, this, c),
                s = r.fragment,
                o = s.firstChild,
                1 === s.childNodes.length && (s = o),
                o)
                    for (n = n && K.nodeName(o, "tr"),
                    a = r.cacheable || p - 1; p > l; l++)
                        i.call(n && K.nodeName(this[l], "table") ? f(this[l], "tbody") : this[l], l === a ? s : K.clone(s, !0, !0));
                s = o = null ,
                c.length && K.each(c, function(e, t) {
                    t.src ? K.ajax ? K.ajax({
                        url: t.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : K.error("no ajax") : K.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Kt, "")),
                    t.parentNode && t.parentNode.removeChild(t)
                }
                )
            }
            return this
        }
    }),
    K.buildFragment = function(e, n, i) {
        var r, o, s, a = e[0];
        return n = n || W,
        n = !n.nodeType && n[0] || n,
        n = n.ownerDocument || n,
        1 === e.length && "string" == typeof a && a.length < 512 && n === W && "<" === a.charAt(0) && !Ut.test(a) && (K.support.checkClone || !Vt.test(a)) && (K.support.html5Clone || !Yt.test(a)) && (o = !0,
        r = K.fragments[a],
        s = r !== t),
        r || (r = n.createDocumentFragment(),
        K.clean(e, n, r, i),
        o && (K.fragments[a] = s && r)),
        {
            fragment: r,
            cacheable: o
        }
    }
    ,
    K.fragments = {},
    K.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        K.fn[e] = function(n) {
            var i, r = 0, o = [], s = K(n), a = s.length, l = 1 === this.length && this[0].parentNode;
            if ((null  == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === a)
                return s[t](this[0]),
                this;
            for (; a > r; r++)
                i = (r > 0 ? this.clone(!0) : this).get(),
                K(s[r])[t](i),
                o = o.concat(i);
            return this.pushStack(o, e, s.selector)
        }
    }
    ),
    K.extend({
        clone: function(e, t, n) {
            var i, r, o, s;
            if (K.support.html5Clone || K.isXMLDoc(e) || !Yt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (tn.innerHTML = e.outerHTML,
            tn.removeChild(s = tn.firstChild)),
            !(K.support.noCloneEvent && K.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || K.isXMLDoc(e)))
                for (d(e, s),
                i = h(e),
                r = h(s),
                o = 0; i[o]; ++o)
                    r[o] && d(i[o], r[o]);
            if (t && (p(e, s),
            n))
                for (i = h(e),
                r = h(s),
                o = 0; i[o]; ++o)
                    p(i[o], r[o]);
            return i = r = null ,
            s
        },
        clean: function(e, t, n, i) {
            var r, o, s, a, l, u, f, p, d, h, g, y = t === W && en, v = [];
            for (t && "undefined" != typeof t.createDocumentFragment || (t = W),
            r = 0; null  != (s = e[r]); r++)
                if ("number" == typeof s && (s += ""),
                s) {
                    if ("string" == typeof s)
                        if (Xt.test(s)) {
                            for (y = y || c(t),
                            f = t.createElement("div"),
                            y.appendChild(f),
                            s = s.replace(Rt, "<$1></$2>"),
                            a = (It.exec(s) || ["", ""])[1].toLowerCase(),
                            l = Zt[a] || Zt._default,
                            u = l[0],
                            f.innerHTML = l[1] + s + l[2]; u--; )
                                f = f.lastChild;
                            if (!K.support.tbody)
                                for (p = zt.test(s),
                                d = "table" !== a || p ? "<table>" !== l[1] || p ? [] : f.childNodes : f.firstChild && f.firstChild.childNodes,
                                o = d.length - 1; o >= 0; --o)
                                    K.nodeName(d[o], "tbody") && !d[o].childNodes.length && d[o].parentNode.removeChild(d[o]);
                            !K.support.leadingWhitespace && Wt.test(s) && f.insertBefore(t.createTextNode(Wt.exec(s)[0]), f.firstChild),
                            s = f.childNodes,
                            f.parentNode.removeChild(f)
                        } else
                            s = t.createTextNode(s);
                    s.nodeType ? v.push(s) : K.merge(v, s)
                }
            if (f && (s = f = y = null ),
            !K.support.appendChecked)
                for (r = 0; null  != (s = v[r]); r++)
                    K.nodeName(s, "input") ? m(s) : "undefined" != typeof s.getElementsByTagName && K.grep(s.getElementsByTagName("input"), m);
            if (n)
                for (h = function(e) {
                    return !e.type || Gt.test(e.type) ? i ? i.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e) : void 0
                }
                ,
                r = 0; null  != (s = v[r]); r++)
                    K.nodeName(s, "script") && h(s) || (n.appendChild(s),
                    "undefined" != typeof s.getElementsByTagName && (g = K.grep(K.merge([], s.getElementsByTagName("script")), h),
                    v.splice.apply(v, [r + 1, 0].concat(g)),
                    r += g.length));
            return v
        },
        cleanData: function(e, t) {
            for (var n, i, r, o, s = 0, a = K.expando, l = K.cache, u = K.support.deleteExpando, c = K.event.special; null  != (r = e[s]); s++)
                if ((t || K.acceptData(r)) && (i = r[a],
                n = i && l[i])) {
                    if (n.events)
                        for (o in n.events)
                            c[o] ? K.event.remove(r, o) : K.removeEvent(r, o, n.handle);
                    l[i] && (delete l[i],
                    u ? delete r[a] : r.removeAttribute ? r.removeAttribute(a) : r[a] = null ,
                    K.deletedIds.push(i))
                }
        }
    }),
    function() {
        var e, t;
        K.uaMatch = function(e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }
        ,
        e = K.uaMatch(I.userAgent),
        t = {},
        e.browser && (t[e.browser] = !0,
        t.version = e.version),
        t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0),
        K.browser = t,
        K.sub = function() {
            function e(t, n) {
                return new e.fn.init(t,n)
            }
            K.extend(!0, e, this),
            e.superclass = this,
            e.fn = e.prototype = this(),
            e.fn.constructor = e,
            e.sub = this.sub,
            e.fn.init = function n(n, i) {
                return i && i instanceof K && !(i instanceof e) && (i = e(i)),
                K.fn.init.call(this, n, i, t)
            }
            ,
            e.fn.init.prototype = e.fn;
            var t = e(W);
            return e
        }
    }
    ();
    var nn, rn, on, sn = /alpha\([^)]*\)/i, an = /opacity=([^)]*)/, ln = /^(top|right|bottom|left)$/, un = /^(none|table(?!-c[ea]).+)/, cn = /^margin/, fn = new RegExp("^(" + Z + ")(.*)$","i"), pn = new RegExp("^(" + Z + ")(?!px)[a-z%]+$","i"), dn = new RegExp("^([-+])=(" + Z + ")","i"), hn = {}, mn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, gn = {
        letterSpacing: 0,
        fontWeight: 400
    }, yn = ["Top", "Right", "Bottom", "Left"], vn = ["Webkit", "O", "Moz", "ms"], bn = K.fn.toggle;
    K.fn.extend({
        css: function(e, n) {
            return K.access(this, function(e, n, i) {
                return i !== t ? K.style(e, n, i) : K.css(e, n)
            }
            , e, n, arguments.length > 1)
        },
        show: function() {
            return v(this, !0)
        },
        hide: function() {
            return v(this)
        },
        toggle: function(e, t) {
            var n = "boolean" == typeof e;
            return K.isFunction(e) && K.isFunction(t) ? bn.apply(this, arguments) : this.each(function() {
                (n ? e : y(this)) ? K(this).show() : K(this).hide()
            }
            )
        }
    }),
    K.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = nn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": K.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, i, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, a, l = K.camelCase(n), u = e.style;
                if (n = K.cssProps[l] || (K.cssProps[l] = g(u, l)),
                a = K.cssHooks[n] || K.cssHooks[l],
                i === t)
                    return a && "get" in a && (o = a.get(e, !1, r)) !== t ? o : u[n];
                if (s = typeof i,
                "string" === s && (o = dn.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(K.css(e, n)),
                s = "number"),
                !(null  == i || "number" === s && isNaN(i) || ("number" === s && !K.cssNumber[l] && (i += "px"),
                a && "set" in a && (i = a.set(e, i, r)) === t)))
                    try {
                        u[n] = i
                    } catch (c) {}
            }
        },
        css: function(e, n, i, r) {
            var o, s, a, l = K.camelCase(n);
            return n = K.cssProps[l] || (K.cssProps[l] = g(e.style, l)),
            a = K.cssHooks[n] || K.cssHooks[l],
            a && "get" in a && (o = a.get(e, !0, r)),
            o === t && (o = nn(e, n)),
            "normal" === o && n in gn && (o = gn[n]),
            i || r !== t ? (s = parseFloat(o),
            i || K.isNumeric(s) ? s || 0 : o) : o
        },
        swap: function(e, t, n) {
            var i, r, o = {};
            for (r in t)
                o[r] = e.style[r],
                e.style[r] = t[r];
            i = n.call(e);
            for (r in t)
                e.style[r] = o[r];
            return i
        }
    }),
    e.getComputedStyle ? nn = function(t, n) {
        var i, r, o, s, a = e.getComputedStyle(t, null ), l = t.style;
        return a && (i = a[n],
        "" === i && !K.contains(t.ownerDocument, t) && (i = K.style(t, n)),
        pn.test(i) && cn.test(n) && (r = l.width,
        o = l.minWidth,
        s = l.maxWidth,
        l.minWidth = l.maxWidth = l.width = i,
        i = a.width,
        l.width = r,
        l.minWidth = o,
        l.maxWidth = s)),
        i
    }
     : W.documentElement.currentStyle && (nn = function(e, t) {
        var n, i, r = e.currentStyle && e.currentStyle[t], o = e.style;
        return null  == r && o && o[t] && (r = o[t]),
        pn.test(r) && !ln.test(t) && (n = o.left,
        i = e.runtimeStyle && e.runtimeStyle.left,
        i && (e.runtimeStyle.left = e.currentStyle.left),
        o.left = "fontSize" === t ? "1em" : r,
        r = o.pixelLeft + "px",
        o.left = n,
        i && (e.runtimeStyle.left = i)),
        "" === r ? "auto" : r
    }
    ),
    K.each(["height", "width"], function(e, t) {
        K.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? 0 === e.offsetWidth && un.test(nn(e, "display")) ? K.swap(e, mn, function() {
                    return w(e, t, i)
                }
                ) : w(e, t, i) : void 0
            },
            set: function(e, n, i) {
                return b(e, n, i ? x(e, t, i, K.support.boxSizing && "border-box" === K.css(e, "boxSizing")) : 0)
            }
        }
    }
    ),
    K.support.opacity || (K.cssHooks.opacity = {
        get: function(e, t) {
            return an.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , i = e.currentStyle
              , r = K.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , o = i && i.filter || n.filter || "";
            n.zoom = 1,
            t >= 1 && "" === K.trim(o.replace(sn, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            i && !i.filter) || (n.filter = sn.test(o) ? o.replace(sn, r) : o + " " + r)
        }
    }),
    K(function() {
        K.support.reliableMarginRight || (K.cssHooks.marginRight = {
            get: function(e, t) {
                return K.swap(e, {
                    display: "inline-block"
                }, function() {
                    return t ? nn(e, "marginRight") : void 0
                }
                )
            }
        }),
        !K.support.pixelPosition && K.fn.position && K.each(["top", "left"], function(e, t) {
            K.cssHooks[t] = {
                get: function(e, n) {
                    if (n) {
                        var i = nn(e, t);
                        return pn.test(i) ? K(e).position()[t] + "px" : i
                    }
                }
            }
        }
        )
    }
    ),
    K.expr && K.expr.filters && (K.expr.filters.hidden = function(e) {
        return 0 === e.offsetWidth && 0 === e.offsetHeight || !K.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || nn(e, "display"))
    }
    ,
    K.expr.filters.visible = function(e) {
        return !K.expr.filters.hidden(e)
    }
    ),
    K.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        K.cssHooks[e + t] = {
            expand: function(n) {
                var i, r = "string" == typeof n ? n.split(" ") : [n], o = {};
                for (i = 0; 4 > i; i++)
                    o[e + yn[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        },
        cn.test(e) || (K.cssHooks[e + t].set = b)
    }
    );
    var xn = /%20/g
      , wn = /\[\]$/
      , Cn = /\r?\n/g
      , Tn = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i
      , kn = /^(?:select|textarea)/i;
    K.fn.extend({
        serialize: function() {
            return K.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? K.makeArray(this.elements) : this
            }
            ).filter(function() {
                return this.name && !this.disabled && (this.checked || kn.test(this.nodeName) || Tn.test(this.type))
            }
            ).map(function(e, t) {
                var n = K(this).val();
                return null  == n ? null  : K.isArray(n) ? K.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Cn, "\r\n")
                    }
                }
                ) : {
                    name: t.name,
                    value: n.replace(Cn, "\r\n")
                }
            }
            ).get()
        }
    }),
    K.param = function(e, n) {
        var i, r = [], o = function(e, t) {
            t = K.isFunction(t) ? t() : null  == t ? "" : t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }
        ;
        if (n === t && (n = K.ajaxSettings && K.ajaxSettings.traditional),
        K.isArray(e) || e.jquery && !K.isPlainObject(e))
            K.each(e, function() {
                o(this.name, this.value)
            }
            );
        else
            for (i in e)
                T(i, e[i], n, o);
        return r.join("&").replace(xn, "+")
    }
    ;
    var Nn, En, $n = /#.*$/, Sn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, jn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, An = /^(?:GET|HEAD)$/, Dn = /^\/\//, Ln = /\?/, Hn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Fn = /([?&])_=[^&]*/, Mn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, On = K.fn.load, qn = {}, _n = {}, Bn = ["*/"] + ["*"];
    try {
        En = R.href
    } catch (Pn) {
        En = W.createElement("a"),
        En.href = "",
        En = En.href
    }
    Nn = Mn.exec(En.toLowerCase()) || [],
    K.fn.load = function(e, n, i) {
        if ("string" != typeof e && On)
            return On.apply(this, arguments);
        if (!this.length)
            return this;
        var r, o, s, a = this, l = e.indexOf(" ");
        return l >= 0 && (r = e.slice(l, e.length),
        e = e.slice(0, l)),
        K.isFunction(n) ? (i = n,
        n = t) : n && "object" == typeof n && (o = "POST"),
        K.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n,
            complete: function(e, t) {
                i && a.each(i, s || [e.responseText, t, e])
            }
        }).done(function(e) {
            s = arguments,
            a.html(r ? K("<div>").append(e.replace(Hn, "")).find(r) : e)
        }
        ),
        this
    }
    ,
    K.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        K.fn[t] = function(e) {
            return this.on(t, e)
        }
    }
    ),
    K.each(["get", "post"], function(e, n) {
        K[n] = function(e, i, r, o) {
            return K.isFunction(i) && (o = o || r,
            r = i,
            i = t),
            K.ajax({
                type: n,
                url: e,
                data: i,
                success: r,
                dataType: o
            })
        }
    }
    ),
    K.extend({
        getScript: function(e, n) {
            return K.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return K.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? E(e, K.ajaxSettings) : (t = e,
            e = K.ajaxSettings),
            E(e, t),
            e
        },
        ajaxSettings: {
            url: En,
            isLocal: jn.test(Nn[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Bn
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": K.parseJSON,
                "text xml": K.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: k(qn),
        ajaxTransport: k(_n),
        ajax: function(e, n) {
            function i(e, n, i, s) {
                var u, f, v, b, w, T = n;
                2 !== x && (x = 2,
                l && clearTimeout(l),
                a = t,
                o = s || "",
                C.readyState = e > 0 ? 4 : 0,
                i && (b = $(p, C, i)),
                e >= 200 && 300 > e || 304 === e ? (p.ifModified && (w = C.getResponseHeader("Last-Modified"),
                w && (K.lastModified[r] = w),
                w = C.getResponseHeader("Etag"),
                w && (K.etag[r] = w)),
                304 === e ? (T = "notmodified",
                u = !0) : (u = S(p, b),
                T = u.state,
                f = u.data,
                v = u.error,
                u = !v)) : (v = T,
                (!T || e) && (T = "error",
                0 > e && (e = 0))),
                C.status = e,
                C.statusText = (n || T) + "",
                u ? m.resolveWith(d, [f, T, C]) : m.rejectWith(d, [C, T, v]),
                C.statusCode(y),
                y = t,
                c && h.trigger("ajax" + (u ? "Success" : "Error"), [C, p, u ? f : v]),
                g.fireWith(d, [C, T]),
                c && (h.trigger("ajaxComplete", [C, p]),
                --K.active || K.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e,
            e = t),
            n = n || {};
            var r, o, s, a, l, u, c, f, p = K.ajaxSetup({}, n), d = p.context || p, h = d !== p && (d.nodeType || d instanceof K) ? K(d) : K.event, m = K.Deferred(), g = K.Callbacks("once memory"), y = p.statusCode || {}, v = {}, b = {}, x = 0, w = "canceled", C = {
                readyState: 0,
                setRequestHeader: function(e, t) {
                    if (!x) {
                        var n = e.toLowerCase();
                        e = b[n] = b[n] || e,
                        v[e] = t
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? o : null
                },
                getResponseHeader: function(e) {
                    var n;
                    if (2 === x) {
                        if (!s)
                            for (s = {}; n = Sn.exec(o); )
                                s[n[1].toLowerCase()] = n[2];
                        n = s[e.toLowerCase()]
                    }
                    return n === t ? null  : n
                },
                overrideMimeType: function(e) {
                    return x || (p.mimeType = e),
                    this
                },
                abort: function(e) {
                    return e = e || w,
                    a && a.abort(e),
                    i(0, e),
                    this
                }
            };
            if (m.promise(C),
            C.success = C.done,
            C.error = C.fail,
            C.complete = g.add,
            C.statusCode = function(e) {
                if (e) {
                    var t;
                    if (2 > x)
                        for (t in e)
                            y[t] = [y[t], e[t]];
                    else
                        t = e[C.status],
                        C.always(t)
                }
                return this
            }
            ,
            p.url = ((e || p.url) + "").replace($n, "").replace(Dn, Nn[1] + "//"),
            p.dataTypes = K.trim(p.dataType || "*").toLowerCase().split(tt),
            null  == p.crossDomain && (u = Mn.exec(p.url.toLowerCase()) || !1,
            p.crossDomain = u && u.join(":") + (u[3] ? "" : "http:" === u[1] ? 80 : 443) !== Nn.join(":") + (Nn[3] ? "" : "http:" === Nn[1] ? 80 : 443)),
            p.data && p.processData && "string" != typeof p.data && (p.data = K.param(p.data, p.traditional)),
            N(qn, p, n, C),
            2 === x)
                return C;
            if (c = p.global,
            p.type = p.type.toUpperCase(),
            p.hasContent = !An.test(p.type),
            c && 0 === K.active++ && K.event.trigger("ajaxStart"),
            !p.hasContent && (p.data && (p.url += (Ln.test(p.url) ? "&" : "?") + p.data,
            delete p.data),
            r = p.url,
            p.cache === !1)) {
                var T = K.now()
                  , k = p.url.replace(Fn, "$1_=" + T);
                p.url = k + (k === p.url ? (Ln.test(p.url) ? "&" : "?") + "_=" + T : "")
            }
            (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType),
            p.ifModified && (r = r || p.url,
            K.lastModified[r] && C.setRequestHeader("If-Modified-Since", K.lastModified[r]),
            K.etag[r] && C.setRequestHeader("If-None-Match", K.etag[r])),
            C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Bn + "; q=0.01" : "") : p.accepts["*"]);
            for (f in p.headers)
                C.setRequestHeader(f, p.headers[f]);
            if (!p.beforeSend || p.beforeSend.call(d, C, p) !== !1 && 2 !== x) {
                w = "abort";
                for (f in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    C[f](p[f]);
                if (a = N(_n, p, n, C)) {
                    C.readyState = 1,
                    c && h.trigger("ajaxSend", [C, p]),
                    p.async && p.timeout > 0 && (l = setTimeout(function() {
                        C.abort("timeout")
                    }
                    , p.timeout));
                    try {
                        x = 1,
                        a.send(v, i)
                    } catch (E) {
                        if (!(2 > x))
                            throw E;
                        i(-1, E)
                    }
                } else
                    i(-1, "No Transport");
                return C
            }
            return C.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Wn = []
      , Rn = /\?/
      , In = /(=)\?(?=&|$)|\?\?/
      , zn = K.now();
    K.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Wn.pop() || K.expando + "_" + zn++;
            return this[e] = !0,
            e
        }
    }),
    K.ajaxPrefilter("json jsonp", function(n, i, r) {
        var o, s, a, l = n.data, u = n.url, c = n.jsonp !== !1, f = c && In.test(u), p = c && !f && "string" == typeof l && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && In.test(l);
        return "jsonp" === n.dataTypes[0] || f || p ? (o = n.jsonpCallback = K.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback,
        s = e[o],
        f ? n.url = u.replace(In, "$1" + o) : p ? n.data = l.replace(In, "$1" + o) : c && (n.url += (Rn.test(u) ? "&" : "?") + n.jsonp + "=" + o),
        n.converters["script json"] = function() {
            return a || K.error(o + " was not called"),
            a[0]
        }
        ,
        n.dataTypes[0] = "json",
        e[o] = function() {
            a = arguments
        }
        ,
        r.always(function() {
            e[o] = s,
            n[o] && (n.jsonpCallback = i.jsonpCallback,
            Wn.push(o)),
            a && K.isFunction(s) && s(a[0]),
            a = s = t
        }
        ),
        "script") : void 0
    }
    ),
    K.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return K.globalEval(e),
                e
            }
        }
    }),
    K.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }
    ),
    K.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, i = W.head || W.getElementsByTagName("head")[0] || W.documentElement;
            return {
                send: function(r, o) {
                    n = W.createElement("script"),
                    n.async = "async",
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, r) {
                        (r || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null ,
                        i && n.parentNode && i.removeChild(n),
                        n = t,
                        r || o(200, "success"))
                    }
                    ,
                    i.insertBefore(n, i.firstChild)
                },
                abort: function() {
                    n && n.onload(0, 1)
                }
            }
        }
    }
    );
    var Xn, Qn = e.ActiveXObject ? function() {
        for (var e in Xn)
            Xn[e](0, 1)
    }
     : !1, Un = 0;
    K.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && j() || A()
    }
     : j,
    function(e) {
        K.extend(K.support, {
            ajax: !!e,
            cors: !!e && "withCredentials" in e
        })
    }
    (K.ajaxSettings.xhr()),
    K.support.ajax && K.ajaxTransport(function(n) {
        if (!n.crossDomain || K.support.cors) {
            var i;
            return {
                send: function(r, o) {
                    var s, a, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async),
                    n.xhrFields)
                        for (a in n.xhrFields)
                            l[a] = n.xhrFields[a];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType),
                    !n.crossDomain && !r["X-Requested-With"] && (r["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in r)
                            l.setRequestHeader(a, r[a])
                    } catch (u) {}
                    l.send(n.hasContent && n.data || null ),
                    i = function(e, r) {
                        var a, u, c, f, p;
                        try {
                            if (i && (r || 4 === l.readyState))
                                if (i = t,
                                s && (l.onreadystatechange = K.noop,
                                Qn && delete Xn[s]),
                                r)
                                    4 !== l.readyState && l.abort();
                                else {
                                    a = l.status,
                                    c = l.getAllResponseHeaders(),
                                    f = {},
                                    p = l.responseXML,
                                    p && p.documentElement && (f.xml = p);
                                    try {
                                        f.text = l.responseText
                                    } catch (e) {}
                                    try {
                                        u = l.statusText
                                    } catch (d) {
                                        u = ""
                                    }
                                    a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = f.text ? 200 : 404
                                }
                        } catch (h) {
                            r || o(-1, h)
                        }
                        f && o(a, u, f, c)
                    }
                    ,
                    n.async ? 4 === l.readyState ? setTimeout(i, 0) : (s = ++Un,
                    Qn && (Xn || (Xn = {},
                    K(e).unload(Qn)),
                    Xn[s] = i),
                    l.onreadystatechange = i) : i()
                },
                abort: function() {
                    i && i(0, 1)
                }
            }
        }
    }
    );
    var Yn, Jn, Vn = /^(?:toggle|show|hide)$/, Gn = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$","i"), Kn = /queueHooks$/, Zn = [M], ei = {
        "*": [function(e, t) {
            var n, i, r = this.createTween(e, t), o = Gn.exec(t), s = r.cur(), a = +s || 0, l = 1, u = 20;
            if (o) {
                if (n = +o[2],
                i = o[3] || (K.cssNumber[e] ? "" : "px"),
                "px" !== i && a) {
                    a = K.css(r.elem, e, !0) || n || 1;
                    do
                        l = l || ".5",
                        a /= l,
                        K.style(r.elem, e, a + i);
                    while (l !== (l = r.cur() / s) && 1 !== l && --u)
                }
                r.unit = i,
                r.start = a,
                r.end = o[1] ? a + (o[1] + 1) * n : n
            }
            return r
        }
        ]
    };
    K.Animation = K.extend(H, {
        tweener: function(e, t) {
            K.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; r > i; i++)
                n = e[i],
                ei[n] = ei[n] || [],
                ei[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Zn.unshift(e) : Zn.push(e)
        }
    }),
    K.Tween = O,
    O.prototype = {
        constructor: O,
        init: function(e, t, n, i, r, o) {
            this.elem = e,
            this.prop = n,
            this.easing = r || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (K.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = O.propHooks[this.prop];
            return e && e.get ? e.get(this) : O.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = O.propHooks[this.prop];
            return this.pos = t = this.options.duration ? K.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : O.propHooks._default.set(this),
            this
        }
    },
    O.prototype.init.prototype = O.prototype,
    O.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null  == e.elem[e.prop] || e.elem.style && null  != e.elem.style[e.prop] ? (t = K.css(e.elem, e.prop, !1, ""),
                t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                K.fx.step[e.prop] ? K.fx.step[e.prop](e) : e.elem.style && (null  != e.elem.style[K.cssProps[e.prop]] || K.cssHooks[e.prop]) ? K.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    K.each(["toggle", "show", "hide"], function(e, t) {
        var n = K.fn[t];
        K.fn[t] = function(i, r, o) {
            return null  == i || "boolean" == typeof i || !e && K.isFunction(i) && K.isFunction(r) ? n.apply(this, arguments) : this.animate(q(t, !0), i, r, o)
        }
    }
    ),
    K.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(y).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var r = K.isEmptyObject(e)
              , o = K.speed(t, n, i)
              , s = function() {
                var t = H(this, K.extend({}, e), o);
                r && t.stop(!0)
            }
            ;
            return r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, n, i) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(i)
            }
            ;
            return "string" != typeof e && (i = n,
            n = e,
            e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , n = null  != e && e + "queueHooks"
                  , o = K.timers
                  , s = K._data(this);
                if (n)
                    s[n] && s[n].stop && r(s[n]);
                else
                    for (n in s)
                        s[n] && s[n].stop && Kn.test(n) && r(s[n]);
                for (n = o.length; n--; )
                    o[n].elem === this && (null  == e || o[n].queue === e) && (o[n].anim.stop(i),
                    t = !1,
                    o.splice(n, 1));
                (t || !i) && K.dequeue(this, e)
            }
            )
        }
    }),
    K.each({
        slideDown: q("show"),
        slideUp: q("hide"),
        slideToggle: q("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        K.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }
    ),
    K.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? K.extend({}, e) : {
            complete: n || !n && t || K.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !K.isFunction(t) && t
        };
        return i.duration = K.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in K.fx.speeds ? K.fx.speeds[i.duration] : K.fx.speeds._default,
        (null  == i.queue || i.queue === !0) && (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            K.isFunction(i.old) && i.old.call(this),
            i.queue && K.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    K.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    K.timers = [],
    K.fx = O.prototype.init,
    K.fx.tick = function() {
        for (var e, t = K.timers, n = 0; n < t.length; n++)
            e = t[n],
            !e() && t[n] === e && t.splice(n--, 1);
        t.length || K.fx.stop()
    }
    ,
    K.fx.timer = function(e) {
        e() && K.timers.push(e) && !Jn && (Jn = setInterval(K.fx.tick, K.fx.interval))
    }
    ,
    K.fx.interval = 13,
    K.fx.stop = function() {
        clearInterval(Jn),
        Jn = null
    }
    ,
    K.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    K.fx.step = {},
    K.expr && K.expr.filters && (K.expr.filters.animated = function(e) {
        return K.grep(K.timers, function(t) {
            return e === t.elem
        }
        ).length
    }
    );
    var ti = /^(?:body|html)$/i;
    K.fn.offset = function(e) {
        if (arguments.length)
            return e === t ? this : this.each(function(t) {
                K.offset.setOffset(this, e, t)
            }
            );
        var n, i, r, o, s, a, l, u = {
            top: 0,
            left: 0
        }, c = this[0], f = c && c.ownerDocument;
        if (f)
            return (i = f.body) === c ? K.offset.bodyOffset(c) : (n = f.documentElement,
            K.contains(n, c) ? ("undefined" != typeof c.getBoundingClientRect && (u = c.getBoundingClientRect()),
            r = _(f),
            o = n.clientTop || i.clientTop || 0,
            s = n.clientLeft || i.clientLeft || 0,
            a = r.pageYOffset || n.scrollTop,
            l = r.pageXOffset || n.scrollLeft,
            {
                top: u.top + a - o,
                left: u.left + l - s
            }) : u)
    }
    ,
    K.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop
              , n = e.offsetLeft;
            return K.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(K.css(e, "marginTop")) || 0,
            n += parseFloat(K.css(e, "marginLeft")) || 0),
            {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var i = K.css(e, "position");
            "static" === i && (e.style.position = "relative");
            var r, o, s = K(e), a = s.offset(), l = K.css(e, "top"), u = K.css(e, "left"), c = ("absolute" === i || "fixed" === i) && K.inArray("auto", [l, u]) > -1, f = {}, p = {};
            c ? (p = s.position(),
            r = p.top,
            o = p.left) : (r = parseFloat(l) || 0,
            o = parseFloat(u) || 0),
            K.isFunction(t) && (t = t.call(e, n, a)),
            null  != t.top && (f.top = t.top - a.top + r),
            null  != t.left && (f.left = t.left - a.left + o),
            "using" in t ? t.using.call(e, f) : s.css(f)
        }
    },
    K.fn.extend({
        position: function() {
            if (this[0]) {
                var e = this[0]
                  , t = this.offsetParent()
                  , n = this.offset()
                  , i = ti.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
                return n.top -= parseFloat(K.css(e, "marginTop")) || 0,
                n.left -= parseFloat(K.css(e, "marginLeft")) || 0,
                i.top += parseFloat(K.css(t[0], "borderTopWidth")) || 0,
                i.left += parseFloat(K.css(t[0], "borderLeftWidth")) || 0,
                {
                    top: n.top - i.top,
                    left: n.left - i.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || W.body; e && !ti.test(e.nodeName) && "static" === K.css(e, "position"); )
                    e = e.offsetParent;
                return e || W.body
            }
            )
        }
    }),
    K.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var i = /Y/.test(n);
        K.fn[e] = function(r) {
            return K.access(this, function(e, r, o) {
                var s = _(e);
                return o === t ? s ? n in s ? s[n] : s.document.documentElement[r] : e[r] : void (s ? s.scrollTo(i ? K(s).scrollLeft() : o, i ? o : K(s).scrollTop()) : e[r] = o)
            }
            , e, r, arguments.length, null )
        }
    }
    ),
    K.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        K.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(i, r) {
            K.fn[r] = function(r, o) {
                var s = arguments.length && (i || "boolean" != typeof r)
                  , a = i || (r === !0 || o === !0 ? "margin" : "border");
                return K.access(this, function(n, i, r) {
                    var o;
                    return K.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement,
                    Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : r === t ? K.css(n, i, r, a) : K.style(n, i, r, a)
                }
                , n, s ? r : t, s, null )
            }
        }
        )
    }
    ),
    e.jQuery = e.$ = K,
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return K
    }
    )
}
(window),
/*!
* Bootstrap.js by @fat & @mdo
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(e) {
    e(function() {
        "use strict";
        e.support.transition = function() {
            var e = function() {
                var e, t = document.createElement("bootstrap"), n = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
                for (e in n)
                    if (void 0 !== t.style[e])
                        return n[e]
            }
            ();
            return e && {
                end: e
            }
        }
        ()
    }
    )
}
(window.jQuery),
!function(e) {
    "use strict";
    var t = '[data-dismiss="alert"]'
      , n = function(n) {
        e(n).on("click", t, this.close)
    }
    ;
    n.prototype.close = function(t) {
        function n() {
            i.trigger("closed").remove()
        }
        var i, r = e(this), o = r.attr("data-target");
        o || (o = r.attr("href"),
        o = o && o.replace(/.*(?=#[^\s]*$)/, "")),
        i = e(o),
        t && t.preventDefault(),
        i.length || (i = r.hasClass("alert") ? r : r.parent()),
        i.trigger(t = e.Event("close")),
        t.isDefaultPrevented() || (i.removeClass("in"),
        e.support.transition && i.hasClass("fade") ? i.on(e.support.transition.end, n) : n())
    }
    ,
    e.fn.alert = function(t) {
        return this.each(function() {
            var i = e(this)
              , r = i.data("alert");
            r || i.data("alert", r = new n(this)),
            "string" == typeof t && r[t].call(i)
        }
        )
    }
    ,
    e.fn.alert.Constructor = n,
    e(function() {
        e("body").on("click.alert.data-api", t, n.prototype.close)
    }
    )
}
(window.jQuery),
!function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t),
        this.options = e.extend({}, e.fn.button.defaults, n)
    }
    ;
    t.prototype.setState = function(e) {
        var t = "disabled"
          , n = this.$element
          , i = n.data()
          , r = n.is("input") ? "val" : "html";
        e += "Text",
        i.resetText || n.data("resetText", n[r]()),
        n[r](i[e] || this.options[e]),
        setTimeout(function() {
            "loadingText" == e ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t)
        }
        , 0)
    }
    ,
    t.prototype.toggle = function() {
        var e = this.$element.closest('[data-toggle="buttons-radio"]');
        e && e.find(".active").removeClass("active"),
        this.$element.toggleClass("active")
    }
    ,
    e.fn.button = function(n) {
        return this.each(function() {
            var i = e(this)
              , r = i.data("button")
              , o = "object" == typeof n && n;
            r || i.data("button", r = new t(this,o)),
            "toggle" == n ? r.toggle() : n && r.setState(n)
        }
        )
    }
    ,
    e.fn.button.defaults = {
        loadingText: "loading..."
    },
    e.fn.button.Constructor = t,
    e(function() {
        e("body").on("click.button.data-api", "[data-toggle^=button]", function(t) {
            var n = e(t.target);
            n.hasClass("btn") || (n = n.closest(".btn")),
            n.button("toggle")
        }
        )
    }
    )
}
(window.jQuery),
!function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t),
        this.options = n,
        this.options.slide && this.slide(this.options.slide),
        "hover" == this.options.pause && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
    }
    ;
    t.prototype = {
        cycle: function(t) {
            return t || (this.paused = !1),
            this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)),
            this
        },
        to: function(t) {
            var n = this.$element.find(".item.active")
              , i = n.parent().children()
              , r = i.index(n)
              , o = this;
            if (!(t > i.length - 1 || 0 > t))
                return this.sliding ? this.$element.one("slid", function() {
                    o.to(t)
                }
                ) : r == t ? this.pause().cycle() : this.slide(t > r ? "next" : "prev", e(i[t]))
        },
        pause: function(t) {
            return t || (this.paused = !0),
            this.$element.find(".next, .prev").length && e.support.transition.end && (this.$element.trigger(e.support.transition.end),
            this.cycle()),
            clearInterval(this.interval),
            this.interval = null ,
            this
        },
        next: function() {
            return this.sliding ? void 0 : this.slide("next")
        },
        prev: function() {
            return this.sliding ? void 0 : this.slide("prev")
        },
        slide: function(t, n) {
            var i = this.$element.find(".item.active")
              , r = n || i[t]()
              , o = this.interval
              , s = "next" == t ? "left" : "right"
              , a = "next" == t ? "first" : "last"
              , l = this
              , u = e.Event("slide", {
                relatedTarget: r[0]
            });
            if (this.sliding = !0,
            o && this.pause(),
            r = r.length ? r : this.$element.find(".item")[a](),
            !r.hasClass("active")) {
                if (e.support.transition && this.$element.hasClass("slide")) {
                    if (this.$element.trigger(u),
                    u.isDefaultPrevented())
                        return;
                    r.addClass(t),
                    r[0].offsetWidth,
                    i.addClass(s),
                    r.addClass(s),
                    this.$element.one(e.support.transition.end, function() {
                        r.removeClass([t, s].join(" ")).addClass("active"),
                        i.removeClass(["active", s].join(" ")),
                        l.sliding = !1,
                        setTimeout(function() {
                            l.$element.trigger("slid")
                        }
                        , 0)
                    }
                    )
                } else {
                    if (this.$element.trigger(u),
                    u.isDefaultPrevented())
                        return;
                    i.removeClass("active"),
                    r.addClass("active"),
                    this.sliding = !1,
                    this.$element.trigger("slid")
                }
                return o && this.cycle(),
                this
            }
        }
    },
    e.fn.carousel = function(n) {
        return this.each(function() {
            var i = e(this)
              , r = i.data("carousel")
              , o = e.extend({}, e.fn.carousel.defaults, "object" == typeof n && n)
              , s = "string" == typeof n ? n : o.slide;
            r || i.data("carousel", r = new t(this,o)),
            "number" == typeof n ? r.to(n) : s ? r[s]() : o.interval && r.cycle()
        }
        )
    }
    ,
    e.fn.carousel.defaults = {
        interval: 5e3,
        pause: "hover"
    },
    e.fn.carousel.Constructor = t,
    e(function() {
        e("body").on("click.carousel.data-api", "[data-slide]", function(t) {
            var n, i = e(this), r = e(i.attr("data-target") || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")), o = !r.data("modal") && e.extend({}, r.data(), i.data());
            r.carousel(o),
            t.preventDefault()
        }
        )
    }
    )
}
(window.jQuery),
!function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t),
        this.options = e.extend({}, e.fn.collapse.defaults, n),
        this.options.parent && (this.$parent = e(this.options.parent)),
        this.options.toggle && this.toggle()
    }
    ;
    t.prototype = {
        constructor: t,
        dimension: function() {
            var e = this.$element.hasClass("width");
            return e ? "width" : "height"
        },
        show: function() {
            var t, n, i, r;
            if (!this.transitioning) {
                if (t = this.dimension(),
                n = e.camelCase(["scroll", t].join("-")),
                i = this.$parent && this.$parent.find("> .accordion-group > .in"),
                i && i.length) {
                    if (r = i.data("collapse"),
                    r && r.transitioning)
                        return;
                    i.collapse("hide"),
                    r || i.data("collapse", null )
                }
                this.$element[t](0),
                this.transition("addClass", e.Event("show"), "shown"),
                e.support.transition && this.$element[t](this.$element[0][n])
            }
        },
        hide: function() {
            var t;
            this.transitioning || (t = this.dimension(),
            this.reset(this.$element[t]()),
            this.transition("removeClass", e.Event("hide"), "hidden"),
            this.$element[t](0))
        },
        reset: function(e) {
            var t = this.dimension();
            return this.$element.removeClass("collapse")[t](e || "auto")[0].offsetWidth,
            this.$element[null  !== e ? "addClass" : "removeClass"]("collapse"),
            this
        },
        transition: function(t, n, i) {
            var r = this
              , o = function() {
                "show" == n.type && r.reset(),
                r.transitioning = 0,
                r.$element.trigger(i)
            }
            ;
            this.$element.trigger(n),
            n.isDefaultPrevented() || (this.transitioning = 1,
            this.$element[t]("in"),
            e.support.transition && this.$element.hasClass("collapse") ? this.$element.one(e.support.transition.end, o) : o())
        },
        toggle: function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }
    },
    e.fn.collapse = function(n) {
        return this.each(function() {
            var i = e(this)
              , r = i.data("collapse")
              , o = "object" == typeof n && n;
            r || i.data("collapse", r = new t(this,o)),
            "string" == typeof n && r[n]()
        }
        )
    }
    ,
    e.fn.collapse.defaults = {
        toggle: !0
    },
    e.fn.collapse.Constructor = t,
    e(function() {
        e("body").on("click.collapse.data-api", "[data-toggle=collapse]", function(t) {
            var n, i = e(this), r = i.attr("data-target") || t.preventDefault() || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""), o = e(r).data("collapse") ? "toggle" : i.data();
            i[e(r).hasClass("in") ? "addClass" : "removeClass"]("collapsed"),
            e(r).collapse(o)
        }
        )
    }
    )
}
(window.jQuery),
!function(e) {
    "use strict";
    function t() {
        n(e(i)).removeClass("open")
    }
    function n(t) {
        var n, i = t.attr("data-target");
        return i || (i = t.attr("href"),
        i = i && /#/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")),
        n = e(i),
        n.length || (n = t.parent()),
        n
    }
    var i = "[data-toggle=dropdown]"
      , r = function(t) {
        var n = e(t).on("click.dropdown.data-api", this.toggle);
        e("html").on("click.dropdown.data-api", function() {
            n.parent().removeClass("open")
        }
        )
    }
    ;
    r.prototype = {
        constructor: r,
        toggle: function() {
            var i, r, o = e(this);
            if (!o.is(".disabled, :disabled"))
                return i = n(o),
                r = i.hasClass("open"),
                t(),
                r || (i.toggleClass("open"),
                o.focus()),
                !1
        },
        keydown: function(t) {
            var i, r, o, s, a;
            if (/(38|40|27)/.test(t.keyCode) && (i = e(this),
            t.preventDefault(),
            t.stopPropagation(),
            !i.is(".disabled, :disabled"))) {
                if (o = n(i),
                s = o.hasClass("open"),
                !s || s && 27 == t.keyCode)
                    return i.click();
                r = e("[role=menu] li:not(.divider) a", o),
                r.length && (a = r.index(r.filter(":focus")),
                38 == t.keyCode && a > 0 && a--,
                40 == t.keyCode && a < r.length - 1 && a++,
                ~a || (a = 0),
                r.eq(a).focus())
            }
        }
    },
    e.fn.dropdown = function(t) {
        return this.each(function() {
            var n = e(this)
              , i = n.data("dropdown");
            i || n.data("dropdown", i = new r(this)),
            "string" == typeof t && i[t].call(n)
        }
        )
    }
    ,
    e.fn.dropdown.Constructor = r,
    e(function() {
        e("html").on("click.dropdown.data-api touchstart.dropdown.data-api", t),
        e("body").on("click.dropdown touchstart.dropdown.data-api", ".dropdown form", function(e) {
            e.stopPropagation()
        }
        ).on("click.dropdown.data-api touchstart.dropdown.data-api", i, r.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api", i + ", [role=menu]", r.prototype.keydown)
    }
    )
}
(window.jQuery),
!function(e) {
    "use strict";
    var t = function(t, n) {
        this.options = n,
        this.$element = e(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", e.proxy(this.hide, this)),
        this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
    }
    ;
    t.prototype = {
        constructor: t,
        toggle: function() {
            return this[this.isShown ? "hide" : "show"]()
        },
        show: function() {
            var t = this
              , n = e.Event("show");
            this.$element.trigger(n),
            this.isShown || n.isDefaultPrevented() || (e("body").addClass("modal-open"),
            this.isShown = !0,
            this.escape(),
            this.backdrop(function() {
                var n = e.support.transition && t.$element.hasClass("fade");
                t.$element.parent().length || t.$element.appendTo(document.body),
                t.$element.show(),
                n && t.$element[0].offsetWidth,
                t.$element.addClass("in").attr("aria-hidden", !1).focus(),
                t.enforceFocus(),
                n ? t.$element.one(e.support.transition.end, function() {
                    t.$element.trigger("shown")
                }
                ) : t.$element.trigger("shown")
            }
            ))
        },
        hide: function(t) {
            t && t.preventDefault();
            t = e.Event("hide"),
            this.$element.trigger(t),
            this.isShown && !t.isDefaultPrevented() && (this.isShown = !1,
            e("body").removeClass("modal-open"),
            this.escape(),
            e(document).off("focusin.modal"),
            this.$element.removeClass("in").attr("aria-hidden", !0),
            e.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
        },
        enforceFocus: function() {
            var t = this;
            e(document).on("focusin.modal", function(e) {
                t.$element[0] !== e.target && !t.$element.has(e.target).length && t.$element.focus()
            }
            )
        },
        escape: function() {
            var e = this;
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(t) {
                27 == t.which && e.hide()
            }
            ) : this.isShown || this.$element.off("keyup.dismiss.modal")
        },
        hideWithTransition: function() {
            var t = this
              , n = setTimeout(function() {
                t.$element.off(e.support.transition.end),
                t.hideModal()
            }
            , 500);
            this.$element.one(e.support.transition.end, function() {
                clearTimeout(n),
                t.hideModal()
            }
            )
        },
        hideModal: function() {
            this.$element.hide().trigger("hidden"),
            this.backdrop()
        },
        removeBackdrop: function() {
            this.$backdrop.remove(),
            this.$backdrop = null
        },
        backdrop: function(t) {
            var n = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var i = e.support.transition && n;
                this.$backdrop = e('<div class="modal-backdrop ' + n + '" />').appendTo(document.body),
                "static" != this.options.backdrop && this.$backdrop.click(e.proxy(this.hide, this)),
                i && this.$backdrop[0].offsetWidth,
                this.$backdrop.addClass("in"),
                i ? this.$backdrop.one(e.support.transition.end, t) : t()
            } else
                !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"),
                e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, e.proxy(this.removeBackdrop, this)) : this.removeBackdrop()) : t && t()
        }
    },
    e.fn.modal = function(n) {
        return this.each(function() {
            var i = e(this)
              , r = i.data("modal")
              , o = e.extend({}, e.fn.modal.defaults, i.data(), "object" == typeof n && n);
            r || i.data("modal", r = new t(this,o)),
            "string" == typeof n ? r[n]() : o.show && r.show()
        }
        )
    }
    ,
    e.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    e.fn.modal.Constructor = t,
    e(function() {
        e("body").on("click.modal.data-api", '[data-toggle="modal"]', function(t) {
            var n = e(this)
              , i = n.attr("href")
              , r = e(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, ""))
              , o = r.data("modal") ? "toggle" : e.extend({
                remote: !/#/.test(i) && i
            }, r.data(), n.data());
            t.preventDefault(),
            r.modal(o).one("hide", function() {
                n.focus()
            }
            )
        }
        )
    }
    )
}
(window.jQuery),
!function(e) {
    "use strict";
    var t = function(e, t) {
        this.init("tooltip", e, t)
    }
    ;
    t.prototype = {
        constructor: t,
        init: function(t, n, i) {
            var r, o;
            this.type = t,
            this.$element = e(n),
            this.options = this.getOptions(i),
            this.enabled = !0,
            "click" == this.options.trigger ? this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)) : "manual" != this.options.trigger && (r = "hover" == this.options.trigger ? "mouseenter" : "focus",
            o = "hover" == this.options.trigger ? "mouseleave" : "blur",
            this.$element.on(r + "." + this.type, this.options.selector, e.proxy(this.enter, this)),
            this.$element.on(o + "." + this.type, this.options.selector, e.proxy(this.leave, this))),
            this.options.selector ? this._options = e.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        },
        getOptions: function(t) {
            return t = e.extend({}, e.fn[this.type].defaults, t, this.$element.data()),
            t.delay && "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            t
        },
        enter: function(t) {
            var n = e(t.currentTarget)[this.type](this._options).data(this.type);
            return n.options.delay && n.options.delay.show ? (clearTimeout(this.timeout),
            n.hoverState = "in",
            this.timeout = setTimeout(function() {
                "in" == n.hoverState && n.show()
            }
            , n.options.delay.show),
            void 0) : n.show()
        },
        leave: function(t) {
            var n = e(t.currentTarget)[this.type](this._options).data(this.type);
            return this.timeout && clearTimeout(this.timeout),
            n.options.delay && n.options.delay.hide ? (n.hoverState = "out",
            void (this.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide()
            }
            , n.options.delay.hide))) : n.hide()
        },
        show: function() {
            var e, t, n, i, r, o, s;
            if (this.hasContent() && this.enabled) {
                switch (e = this.tip(),
                this.setContent(),
                this.options.animation && e.addClass("fade"),
                o = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement,
                t = /in/.test(o),
                e.remove().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).appendTo(t ? this.$element : document.body),
                n = this.getPosition(t),
                i = e[0].offsetWidth,
                r = e[0].offsetHeight,
                t ? o.split(" ")[1] : o) {
                case "bottom":
                    s = {
                        top: n.top + n.height,
                        left: n.left + n.width / 2 - i / 2
                    };
                    break;
                case "top":
                    s = {
                        top: n.top - r,
                        left: n.left + n.width / 2 - i / 2
                    };
                    break;
                case "left":
                    s = {
                        top: n.top + n.height / 2 - r / 2,
                        left: n.left - i
                    };
                    break;
                case "right":
                    s = {
                        top: n.top + n.height / 2 - r / 2,
                        left: n.left + n.width
                    }
                }
                e.css(s).addClass(o).addClass("in")
            }
        },
        setContent: function() {
            var e = this.tip()
              , t = this.getTitle();
            e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t),
            e.removeClass("fade in top bottom left right")
        },
        hide: function() {
            function t() {
                var t = setTimeout(function() {
                    n.off(e.support.transition.end).remove()
                }
                , 500);
                n.one(e.support.transition.end, function() {
                    clearTimeout(t),
                    n.remove()
                }
                )
            }
            var n = this.tip();
            return n.removeClass("in"),
            e.support.transition && this.$tip.hasClass("fade") ? t() : n.remove(),
            this
        },
        fixTitle: function() {
            var e = this.$element;
            (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").removeAttr("title")
        },
        hasContent: function() {
            return this.getTitle()
        },
        getPosition: function(t) {
            return e.extend({}, t ? {
                top: 0,
                left: 0
            } : this.$element.offset(), {
                width: this.$element[0].offsetWidth,
                height: this.$element[0].offsetHeight
            })
        },
        getTitle: function() {
            var e, t = this.$element, n = this.options;
            return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
        },
        tip: function() {
            return this.$tip = this.$tip || e(this.options.template)
        },
        validate: function() {
            this.$element[0].parentNode || (this.hide(),
            this.$element = null ,
            this.options = null )
        },
        enable: function() {
            this.enabled = !0
        },
        disable: function() {
            this.enabled = !1
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled
        },
        toggle: function() {
            this[this.tip().hasClass("in") ? "hide" : "show"]()
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    },
    e.fn.tooltip = function(n) {
        return this.each(function() {
            var i = e(this)
              , r = i.data("tooltip")
              , o = "object" == typeof n && n;
            r || i.data("tooltip", r = new t(this,o)),
            "string" == typeof n && r[n]()
        }
        )
    }
    ,
    e.fn.tooltip.Constructor = t,
    e.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover",
        title: "",
        delay: 0,
        html: !0
    }
}
(window.jQuery),
!function(e) {
    "use strict";
    var t = function(e, t) {
        this.init("popover", e, t)
    }
    ;
    t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype, {
        constructor: t,
        setContent: function() {
            var e = this.tip()
              , t = this.getTitle()
              , n = this.getContent();
            e.find(".popover-title")[this.options.html ? "html" : "text"](t),
            e.find(".popover-content > *")[this.options.html ? "html" : "text"](n),
            e.removeClass("fade top bottom left right in")
        },
        hasContent: function() {
            return this.getTitle() || this.getContent()
        },
        getContent: function() {
            var e, t = this.$element, n = this.options;
            return e = t.attr("data-content") || ("function" == typeof n.content ? n.content.call(t[0]) : n.content)
        },
        tip: function() {
            return this.$tip || (this.$tip = e(this.options.template)),
            this.$tip
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    }),
    e.fn.popover = function(n) {
        return this.each(function() {
            var i = e(this)
              , r = i.data("popover")
              , o = "object" == typeof n && n;
            r || i.data("popover", r = new t(this,o)),
            "string" == typeof n && r[n]()
        }
        )
    }
    ,
    e.fn.popover.Constructor = t,
    e.fn.popover.defaults = e.extend({}, e.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
    })
}
(window.jQuery),
!function(e) {
    "use strict";
    function t(t, n) {
        var i, r = e.proxy(this.process, this), o = e(e(t).is("body") ? window : t);
        this.options = e.extend({}, e.fn.scrollspy.defaults, n),
        this.$scrollElement = o.on("scroll.scroll-spy.data-api", r),
        this.selector = (this.options.target || (i = e(t).attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a",
        this.$body = e("body"),
        this.refresh(),
        this.process()
    }
    t.prototype = {
        constructor: t,
        refresh: function() {
            var t, n = this;
            this.offsets = e([]),
            this.targets = e([]),
            t = this.$body.find(this.selector).map(function() {
                var t = e(this)
                  , n = t.data("target") || t.attr("href")
                  , i = /^#\w/.test(n) && e(n);
                return i && i.length && [[i.position().top, n]] || null
            }
            ).sort(function(e, t) {
                return e[0] - t[0]
            }
            ).each(function() {
                n.offsets.push(this[0]),
                n.targets.push(this[1])
            }
            )
        },
        process: function() {
            var e, t = this.$scrollElement.scrollTop() + this.options.offset, n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, i = n - this.$scrollElement.height(), r = this.offsets, o = this.targets, s = this.activeTarget;
            if (t >= i)
                return s != (e = o.last()[0]) && this.activate(e);
            for (e = r.length; e--; )
                s != o[e] && t >= r[e] && (!r[e + 1] || t <= r[e + 1]) && this.activate(o[e])
        },
        activate: function(t) {
            var n, i;
            this.activeTarget = t,
            e(this.selector).parent(".active").removeClass("active"),
            i = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            n = e(i).parent("li").addClass("active"),
            n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")),
            n.trigger("activate")
        }
    },
    e.fn.scrollspy = function(n) {
        return this.each(function() {
            var i = e(this)
              , r = i.data("scrollspy")
              , o = "object" == typeof n && n;
            r || i.data("scrollspy", r = new t(this,o)),
            "string" == typeof n && r[n]()
        }
        )
    }
    ,
    e.fn.scrollspy.Constructor = t,
    e.fn.scrollspy.defaults = {
        offset: 10
    },
    e(window).on("load", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            t.scrollspy(t.data())
        }
        )
    }
    )
}
(window.jQuery),
!function(e) {
    "use strict";
    var t = function(t) {
        this.element = e(t)
    }
    ;
    t.prototype = {
        constructor: t,
        show: function() {
            var t, n, i, r = this.element, o = r.closest("ul:not(.dropdown-menu)"), s = r.attr("data-target");
            s || (s = r.attr("href"),
            s = s && s.replace(/.*(?=#[^\s]*$)/, "")),
            r.parent("li").hasClass("active") || (t = o.find(".active a").last()[0],
            i = e.Event("show", {
                relatedTarget: t
            }),
            r.trigger(i),
            i.isDefaultPrevented() || (n = e(s),
            this.activate(r.parent("li"), o),
            this.activate(n, n.parent(), function() {
                r.trigger({
                    type: "shown",
                    relatedTarget: t
                })
            }
            )))
        },
        activate: function(t, n, i) {
            function r() {
                o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),
                t.addClass("active"),
                s ? (t[0].offsetWidth,
                t.addClass("in")) : t.removeClass("fade"),
                t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"),
                i && i()
            }
            var o = n.find("> .active")
              , s = i && e.support.transition && o.hasClass("fade");
            s ? o.one(e.support.transition.end, r) : r(),
            o.removeClass("in")
        }
    },
    e.fn.tab = function(n) {
        return this.each(function() {
            var i = e(this)
              , r = i.data("tab");
            r || i.data("tab", r = new t(this)),
            "string" == typeof n && r[n]()
        }
        )
    }
    ,
    e.fn.tab.Constructor = t,
    e(function() {
        e("body").on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
            t.preventDefault(),
            e(this).tab("show")
        }
        )
    }
    )
}
(window.jQuery),
!function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t),
        this.options = e.extend({}, e.fn.typeahead.defaults, n),
        this.matcher = this.options.matcher || this.matcher,
        this.sorter = this.options.sorter || this.sorter,
        this.highlighter = this.options.highlighter || this.highlighter,
        this.updater = this.options.updater || this.updater,
        this.$menu = e(this.options.menu).appendTo("body"),
        this.source = this.options.source,
        this.shown = !1,
        this.listen()
    }
    ;
    t.prototype = {
        constructor: t,
        select: function() {
            var e = this.$menu.find(".active").attr("data-value");
            return this.$element.val(this.updater(e)).change(),
            this.hide()
        },
        updater: function(e) {
            return e
        },
        show: function() {
            var t = e.extend({}, this.$element.offset(), {
                height: this.$element[0].offsetHeight
            });
            return this.$menu.css({
                top: t.top + t.height,
                left: t.left
            }),
            this.$menu.show(),
            this.shown = !0,
            this
        },
        hide: function() {
            return this.$menu.hide(),
            this.shown = !1,
            this
        },
        lookup: function() {
            var t;
            return this.query = this.$element.val(),
            !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (t = e.isFunction(this.source) ? this.source(this.query, e.proxy(this.process, this)) : this.source,
            t ? this.process(t) : this)
        },
        process: function(t) {
            var n = this;
            return t = e.grep(t, function(e) {
                return n.matcher(e)
            }
            ),
            t = this.sorter(t),
            t.length ? this.render(t.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
        },
        matcher: function(e) {
            return ~e.toLowerCase().indexOf(this.query.toLowerCase())
        },
        sorter: function(e) {
            for (var t, n = [], i = [], r = []; t = e.shift(); )
                t.toLowerCase().indexOf(this.query.toLowerCase()) ? ~t.indexOf(this.query) ? i.push(t) : r.push(t) : n.push(t);
            return n.concat(i, r)
        },
        highlighter: function(e) {
            var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return e.replace(new RegExp("(" + t + ")","ig"), function(e, t) {
                return "<strong>" + t + "</strong>"
            }
            )
        },
        render: function(t) {
            var n = this;
            return t = e(t).map(function(t, i) {
                return t = e(n.options.item).attr("data-value", i),
                t.find("a").html(n.highlighter(i)),
                t[0]
            }
            ),
            t.first().addClass("active"),
            this.$menu.html(t),
            this
        },
        next: function() {
            var t = this.$menu.find(".active").removeClass("active")
              , n = t.next();
            n.length || (n = e(this.$menu.find("li")[0])),
            n.addClass("active")
        },
        prev: function() {
            var e = this.$menu.find(".active").removeClass("active")
              , t = e.prev();
            t.length || (t = this.$menu.find("li").last()),
            t.addClass("active")
        },
        listen: function() {
            this.$element.on("blur", e.proxy(this.blur, this)).on("keypress", e.proxy(this.keypress, this)).on("keyup", e.proxy(this.keyup, this)),
            (e.browser.chrome || e.browser.webkit || e.browser.msie) && this.$element.on("keydown", e.proxy(this.keydown, this)),
            this.$menu.on("click", e.proxy(this.click, this)).on("mouseenter", "li", e.proxy(this.mouseenter, this))
        },
        move: function(e) {
            if (this.shown) {
                switch (e.keyCode) {
                case 9:
                case 13:
                case 27:
                    e.preventDefault();
                    break;
                case 38:
                    e.preventDefault(),
                    this.prev();
                    break;
                case 40:
                    e.preventDefault(),
                    this.next()
                }
                e.stopPropagation()
            }
        },
        keydown: function(t) {
            this.suppressKeyPressRepeat = !~e.inArray(t.keyCode, [40, 38, 9, 13, 27]),
            this.move(t)
        },
        keypress: function(e) {
            this.suppressKeyPressRepeat || this.move(e)
        },
        keyup: function(e) {
            switch (e.keyCode) {
            case 40:
            case 38:
                break;
            case 9:
            case 13:
                if (!this.shown)
                    return;
                this.select();
                break;
            case 27:
                if (!this.shown)
                    return;
                this.hide();
                break;
            default:
                this.lookup()
            }
            e.stopPropagation(),
            e.preventDefault()
        },
        blur: function() {
            var e = this;
            setTimeout(function() {
                e.hide()
            }
            , 150)
        },
        click: function(e) {
            e.stopPropagation(),
            e.preventDefault(),
            this.select()
        },
        mouseenter: function(t) {
            this.$menu.find(".active").removeClass("active"),
            e(t.currentTarget).addClass("active")
        }
    },
    e.fn.typeahead = function(n) {
        return this.each(function() {
            var i = e(this)
              , r = i.data("typeahead")
              , o = "object" == typeof n && n;
            r || i.data("typeahead", r = new t(this,o)),
            "string" == typeof n && r[n]()
        }
        )
    }
    ,
    e.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        minLength: 1
    },
    e.fn.typeahead.Constructor = t,
    e(function() {
        e("body").on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(t) {
            var n = e(this);
            n.data("typeahead") || (t.preventDefault(),
            n.typeahead(n.data()))
        }
        )
    }
    )
}
(window.jQuery),
!function(e) {
    "use strict";
    var t = function(t, n) {
        this.options = e.extend({}, e.fn.affix.defaults, n),
        this.$window = e(window).on("scroll.affix.data-api", e.proxy(this.checkPosition, this)),
        this.$element = e(t),
        this.checkPosition()
    }
    ;
    t.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t, n = e(document).height(), i = this.$window.scrollTop(), r = this.$element.offset(), o = this.options.offset, s = o.bottom, a = o.top, l = "affix affix-top affix-bottom";
            "object" != typeof o && (s = a = o),
            "function" == typeof a && (a = o.top()),
            "function" == typeof s && (s = o.bottom()),
            t = null  != this.unpin && i + this.unpin <= r.top ? !1 : null  != s && r.top + this.$element.height() >= n - s ? "bottom" : null  != a && a >= i ? "top" : !1,
            this.affixed !== t && (this.affixed = t,
            this.unpin = "bottom" == t ? r.top - i : null ,
            this.$element.removeClass(l).addClass("affix" + (t ? "-" + t : "")))
        }
    }
    ,
    e.fn.affix = function(n) {
        return this.each(function() {
            var i = e(this)
              , r = i.data("affix")
              , o = "object" == typeof n && n;
            r || i.data("affix", r = new t(this,o)),
            "string" == typeof n && r[n]()
        }
        )
    }
    ,
    e.fn.affix.Constructor = t,
    e.fn.affix.defaults = {
        offset: 0
    },
    e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var t = e(this)
              , n = t.data();
            n.offset = n.offset || {},
            n.offsetBottom && (n.offset.bottom = n.offsetBottom),
            n.offsetTop && (n.offset.top = n.offsetTop),
            t.affix(n)
        }
        )
    }
    )
}
(window.jQuery);
