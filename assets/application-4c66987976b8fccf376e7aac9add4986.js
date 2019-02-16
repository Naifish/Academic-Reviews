window.matchMedia || (window.matchMedia = function()
{
	"use strict";
	var e = window.styleMedia || window.media;
	if (!e)
	{
		var t = document.createElement("style"),
			n = document.getElementsByTagName("script")[0],
			r = null;
		t.type = "text/css";
		t.id = "matchmediajs-test";
		n.parentNode.insertBefore(t, n);
		r = "getComputedStyle" in window && window.getComputedStyle(t, null) || t.currentStyle;
		e = {
			matchMedium: function(e)
			{
				var n = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
				if (t.styleSheet)
				{
					t.styleSheet.cssText = n
				}
				else
				{
					t.textContent = n
				}
				return r.width === "1px"
			}
		}
	}
	return function(t)
	{
		return {
			matches: e.matchMedium(t || "all"),
			media: t || "all"
		}
	}
}());
(function()
{
	if (window.matchMedia && window.matchMedia("all").addListener)
	{
		return false
	}
	var e = window.matchMedia,
		t = e("only all").matches,
		n = false,
		r = 0,
		i = [],
		s = function(t)
		{
			clearTimeout(r);
			r = setTimeout(function()
			{
				for (var t = 0, n = i.length; t < n; t++)
				{
					var r = i[t].mql,
						s = i[t].listeners || [],
						o = e(r.media).matches;
					if (o !== r.matches)
					{
						r.matches = o;
						for (var u = 0, a = s.length; u < a; u++)
						{
							s[u].call(window, r)
						}
					}
				}
			}, 30)
		};
	window.matchMedia = function(r)
	{
		var o = e(r),
			u = [],
			a = 0;
		o.addListener = function(e)
		{
			if (!t)
			{
				return
			}
			if (!n)
			{
				n = true;
				window.addEventListener("resize", s, true)
			}
			if (a === 0)
			{
				a = i.push(
				{
					mql: o,
					listeners: u
				})
			}
			u.push(e)
		};
		o.removeListener = function(e)
		{
			for (var t = 0, n = u.length; t < n; t++)
			{
				if (u[t] === e)
				{
					u.splice(t, 1)
				}
			}
		};
		return o
	}
})();
! function(e, t, n)
{
	var r = window.matchMedia;
	"undefined" != typeof module && module.exports ? module.exports = n(r) : "function" == typeof define && define.amd ? define(function()
	{
		return t[e] = n(r)
	}) : t[e] = n(r)
}("enquire", this, function(e)
{
	"use strict";

	function t(e, t)
	{
		var n, r = 0,
			i = e.length;
		for (r; i > r && (n = t(e[r], r), n !== !1); r++);
	}

	function n(e)
	{
		return "[object Array]" === Object.prototype.toString.apply(e)
	}

	function r(e)
	{
		return "function" == typeof e
	}

	function i(e)
	{
		this.options = e, !e.deferSetup && this.setup()
	}

	function s(t, n)
	{
		this.query = t, this.isUnconditional = n, this.handlers = [], this.mql = e(t);
		var r = this;
		this.listener = function(e)
		{
			r.mql = e, r.assess()
		}, this.mql.addListener(this.listener)
	}

	function o()
	{
		if (!e) throw new Error("matchMedia not present, legacy browsers require a polyfill");
		this.queries = {}, this.browserIsIncapable = !e("only all").matches
	}
	return i.prototype = {
		setup: function()
		{
			this.options.setup && this.options.setup(), this.initialised = !0
		},
		on: function()
		{
			!this.initialised && this.setup(), this.options.match && this.options.match()
		},
		off: function()
		{
			this.options.unmatch && this.options.unmatch()
		},
		destroy: function()
		{
			this.options.destroy ? this.options.destroy() : this.off()
		},
		equals: function(e)
		{
			return this.options === e || this.options.match === e
		}
	}, s.prototype = {
		addHandler: function(e)
		{
			var t = new i(e);
			this.handlers.push(t), this.matches() && t.on()
		},
		removeHandler: function(e)
		{
			var n = this.handlers;
			t(n, function(t, r)
			{
				return t.equals(e) ? (t.destroy(), !n.splice(r, 1)) : void 0
			})
		},
		matches: function()
		{
			return this.mql.matches || this.isUnconditional
		},
		clear: function()
		{
			t(this.handlers, function(e)
			{
				e.destroy()
			}), this.mql.removeListener(this.listener), this.handlers.length = 0
		},
		assess: function()
		{
			var e = this.matches() ? "on" : "off";
			t(this.handlers, function(t)
			{
				t[e]()
			})
		}
	}, o.prototype = {
		register: function(e, i, o)
		{
			var u = this.queries,
				a = o && this.browserIsIncapable;
			return u[e] || (u[e] = new s(e, a)), r(i) && (i = {
				match: i
			}), n(i) || (i = [i]), t(i, function(t)
			{
				u[e].addHandler(t)
			}), this
		},
		unregister: function(e, t)
		{
			var n = this.queries[e];
			return n && (t ? n.removeHandler(t) : (n.clear(), delete this.queries[e])), this
		}
	}, new o
});
(function()
{
	btg.Controller.sendPageCall(window.RMP.Settings.pageLevelData);
	enquire.register("screen and (max-width : 767px)",
	{
		match: function()
		{
			if ($("#mobile-ad").length > 0)
			{
				$("#mobile-ad").empty();
				return btg.DoubleClick.createAd(
				{
					size: "300x50",
					sz: "300x50",
					reloadInterval: window.RMP.Settings.reloadInterval,
					keyValues: ""
				}, "mobile-ad")
			}
		}
	});
	enquire.register("screen and (min-width: 768px)",
	{
		match: function()
		{
			if ($("#ad728").length > 0)
			{
				$("#ad728").empty();
				btg.DoubleClick.createAd(
				{
					size: "728x90",
					reloadInterval: window.RMP.Settings.reloadInterval
				}, "ad728")
			}
			if ($("#ad300").length > 0)
			{
				$("#ad300").empty();
				btg.DoubleClick.createAd(
				{
					size: "300x250",
					reloadInterval: window.RMP.Settings.reloadInterval
				}, "ad300")
			}
			if ($("#mtvnAddFind").length > 0)
			{
				$("#mtvnAddFind").empty();
				return btg.DoubleClick.createAd(
				{
					size: "300x250",
					reloadInterval: window.RMP.Settings.reloadInterval
				}, "mtvnAddFind")
			}
		}
	});
	enquire.register("screen and (min-width : 1225px)",
	{
		match: function()
		{
			$(".right-panel-mtvnad.utility ").empty();
			return btg.DoubleClick.createAd(
			{
				size: "300x250",
				reloadInterval: window.RMP.Settings.reloadInterval,
				keyValues: "gridAd=grid"
			}, "utility-ad")
		}
	});
	enquire.register("screen and (max-width : 1224px)",
	{
		match: function()
		{
			return $(".right-panel-mtvnad.utility ").empty()
		}
	});
	enquire.register("screen and (min-width : 1090px)",
	{
		match: function()
		{
			$(".right-panel-mtvnad.error").empty();
			return btg.DoubleClick.createAd(
			{
				size: "300x250",
				reloadInterval: window.RMP.Settings.reloadInterval,
				keyValues: "gridAd=grid"
			}, "error-ad")
		}
	});
	enquire.register("screen and (max-width : 1089px)",
	{
		match: function()
		{
			return $(".right-panel-mtvnad.error ").empty()
		}
	})
}).call(this);
(function(e, t)
{
	function n(t, n)
	{
		var i, s, o, u = t.nodeName.toLowerCase();
		if ("area" === u)
		{
			i = t.parentNode;
			s = i.name;
			if (!t.href || !s || i.nodeName.toLowerCase() !== "map")
			{
				return false
			}
			o = e("img[usemap=#" + s + "]")[0];
			return !!o && r(o)
		}
		return (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && r(t)
	}

	function r(t)
	{
		return e.expr.filters.visible(t) && !e(t).parents().andSelf().filter(function()
		{
			return e.css(this, "visibility") === "hidden"
		}).length
	}
	var i = 0,
		s = /^ui-id-\d+$/;
	e.ui = e.ui ||
	{};
	if (e.ui.version)
	{
		return
	}
	e.extend(e.ui,
	{
		version: "1.9.2",
		keyCode:
		{
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			NUMPAD_ADD: 107,
			NUMPAD_DECIMAL: 110,
			NUMPAD_DIVIDE: 111,
			NUMPAD_ENTER: 108,
			NUMPAD_MULTIPLY: 106,
			NUMPAD_SUBTRACT: 109,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	});
	e.fn.extend(
	{
		_focus: e.fn.focus,
		focus: function(t, n)
		{
			return typeof t === "number" ? this.each(function()
			{
				var r = this;
				setTimeout(function()
				{
					e(r).focus();
					if (n)
					{
						n.call(r)
					}
				}, t)
			}) : this._focus.apply(this, arguments)
		},
		scrollParent: function()
		{
			var t;
			if (e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")))
			{
				t = this.parents().filter(function()
				{
					return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
				}).eq(0)
			}
			else
			{
				t = this.parents().filter(function()
				{
					return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
				}).eq(0)
			}
			return /fixed/.test(this.css("position")) || !t.length ? e(document) : t
		},
		zIndex: function(n)
		{
			if (n !== t)
			{
				return this.css("zIndex", n)
			}
			if (this.length)
			{
				var r = e(this[0]),
					i, s;
				while (r.length && r[0] !== document)
				{
					i = r.css("position");
					if (i === "absolute" || i === "relative" || i === "fixed")
					{
						s = parseInt(r.css("zIndex"), 10);
						if (!isNaN(s) && s !== 0)
						{
							return s
						}
					}
					r = r.parent()
				}
			}
			return 0
		},
		uniqueId: function()
		{
			return this.each(function()
			{
				if (!this.id)
				{
					this.id = "ui-id-" + ++i
				}
			})
		},
		removeUniqueId: function()
		{
			return this.each(function()
			{
				if (s.test(this.id))
				{
					e(this).removeAttr("id")
				}
			})
		}
	});
	e.extend(e.expr[":"],
	{
		data: e.expr.createPseudo ? e.expr.createPseudo(function(t)
		{
			return function(n)
			{
				return !!e.data(n, t)
			}
		}) : function(t, n, r)
		{
			return !!e.data(t, r[3])
		},
		focusable: function(t)
		{
			return n(t, !isNaN(e.attr(t, "tabindex")))
		},
		tabbable: function(t)
		{
			var r = e.attr(t, "tabindex"),
				i = isNaN(r);
			return (i || r >= 0) && n(t, !i)
		}
	});
	e(function()
	{
		var t = document.body,
			n = t.appendChild(n = document.createElement("div"));
		n.offsetHeight;
		e.extend(n.style,
		{
			minHeight: "100px",
			height: "auto",
			padding: 0,
			borderWidth: 0
		});
		e.support.minHeight = n.offsetHeight === 100;
		e.support.selectstart = "onselectstart" in n;
		t.removeChild(n).style.display = "none"
	});
	if (!e("<a>").outerWidth(1).jquery)
	{
		e.each(["Width", "Height"], function(n, r)
		{
			function i(t, n, r, i)
			{
				e.each(s, function()
				{
					n -= parseFloat(e.css(t, "padding" + this)) || 0;
					if (r)
					{
						n -= parseFloat(e.css(t, "border" + this + "Width")) || 0
					}
					if (i)
					{
						n -= parseFloat(e.css(t, "margin" + this)) || 0
					}
				});
				return n
			}
			var s = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
				o = r.toLowerCase(),
				u = {
					innerWidth: e.fn.innerWidth,
					innerHeight: e.fn.innerHeight,
					outerWidth: e.fn.outerWidth,
					outerHeight: e.fn.outerHeight
				};
			e.fn["inner" + r] = function(n)
			{
				if (n === t)
				{
					return u["inner" + r].call(this)
				}
				return this.each(function()
				{
					e(this).css(o, i(this, n) + "px")
				})
			};
			e.fn["outer" + r] = function(t, n)
			{
				if (typeof t !== "number")
				{
					return u["outer" + r].call(this, t)
				}
				return this.each(function()
				{
					e(this).css(o, i(this, t, true, n) + "px")
				})
			}
		})
	}
	if (e("<a>").data("a-b", "a").removeData("a-b").data("a-b"))
	{
		e.fn.removeData = function(t)
		{
			return function(n)
			{
				if (arguments.length)
				{
					return t.call(this, e.camelCase(n))
				}
				else
				{
					return t.call(this)
				}
			}
		}(e.fn.removeData)
	}(function()
	{
		var t = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
		e.ui.ie = t.length ? true : false;
		e.ui.ie6 = parseFloat(t[1], 10) === 6
	})();
	e.fn.extend(
	{
		disableSelection: function()
		{
			return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e)
			{
				e.preventDefault()
			})
		},
		enableSelection: function()
		{
			return this.unbind(".ui-disableSelection")
		}
	});
	e.extend(e.ui,
	{
		plugin:
		{
			add: function(t, n, r)
			{
				var i, s = e.ui[t].prototype;
				for (i in r)
				{
					s.plugins[i] = s.plugins[i] || [];
					s.plugins[i].push([n, r[i]])
				}
			},
			call: function(e, t, n)
			{
				var r, i = e.plugins[t];
				if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11)
				{
					return
				}
				for (r = 0; r < i.length; r++)
				{
					if (e.options[i[r][0]])
					{
						i[r][1].apply(e.element, n)
					}
				}
			}
		},
		contains: e.contains,
		hasScroll: function(t, n)
		{
			if (e(t).css("overflow") === "hidden")
			{
				return false
			}
			var r = n && n === "left" ? "scrollLeft" : "scrollTop",
				i = false;
			if (t[r] > 0)
			{
				return true
			}
			t[r] = 1;
			i = t[r] > 0;
			t[r] = 0;
			return i
		},
		isOverAxis: function(e, t, n)
		{
			return e > t && e < t + n
		},
		isOver: function(t, n, r, i, s, o)
		{
			return e.ui.isOverAxis(t, r, s) && e.ui.isOverAxis(n, i, o)
		}
	})
})(jQuery);
(function(e, t)
{
	var n = 0,
		r = Array.prototype.slice,
		i = e.cleanData;
	e.cleanData = function(t)
	{
		for (var n = 0, r;
			(r = t[n]) != null; n++)
		{
			try
			{
				e(r).triggerHandler("remove")
			}
			catch (s)
			{}
		}
		i(t)
	};
	e.widget = function(t, n, r)
	{
		var i, s, o, u, a = t.split(".")[0];
		t = t.split(".")[1];
		i = a + "-" + t;
		if (!r)
		{
			r = n;
			n = e.Widget
		}
		e.expr[":"][i.toLowerCase()] = function(t)
		{
			return !!e.data(t, i)
		};
		e[a] = e[a] ||
		{};
		s = e[a][t];
		o = e[a][t] = function(e, t)
		{
			if (!this._createWidget)
			{
				return new o(e, t)
			}
			if (arguments.length)
			{
				this._createWidget(e, t)
			}
		};
		e.extend(o, s,
		{
			version: r.version,
			_proto: e.extend(
			{}, r),
			_childConstructors: []
		});
		u = new n;
		u.options = e.widget.extend(
		{}, u.options);
		e.each(r, function(t, i)
		{
			if (e.isFunction(i))
			{
				r[t] = function()
				{
					var e = function()
						{
							return n.prototype[t].apply(this, arguments)
						},
						r = function(e)
						{
							return n.prototype[t].apply(this, e)
						};
					return function()
					{
						var t = this._super,
							n = this._superApply,
							s;
						this._super = e;
						this._superApply = r;
						s = i.apply(this, arguments);
						this._super = t;
						this._superApply = n;
						return s
					}
				}()
			}
		});
		o.prototype = e.widget.extend(u,
		{
			widgetEventPrefix: s ? u.widgetEventPrefix : t
		}, r,
		{
			constructor: o,
			namespace: a,
			widgetName: t,
			widgetBaseClass: i,
			widgetFullName: i
		});
		if (s)
		{
			e.each(s._childConstructors, function(t, n)
			{
				var r = n.prototype;
				e.widget(r.namespace + "." + r.widgetName, o, n._proto)
			});
			delete s._childConstructors
		}
		else
		{
			n._childConstructors.push(o)
		}
		e.widget.bridge(t, o)
	};
	e.widget.extend = function(n)
	{
		var i = r.call(arguments, 1),
			s = 0,
			o = i.length,
			u, a;
		for (; s < o; s++)
		{
			for (u in i[s])
			{
				a = i[s][u];
				if (i[s].hasOwnProperty(u) && a !== t)
				{
					if (e.isPlainObject(a))
					{
						n[u] = e.isPlainObject(n[u]) ? e.widget.extend(
						{}, n[u], a) : e.widget.extend(
						{}, a)
					}
					else
					{
						n[u] = a
					}
				}
			}
		}
		return n
	};
	e.widget.bridge = function(n, i)
	{
		var s = i.prototype.widgetFullName || n;
		e.fn[n] = function(o)
		{
			var u = typeof o === "string",
				a = r.call(arguments, 1),
				f = this;
			o = !u && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o;
			if (u)
			{
				this.each(function()
				{
					var r, i = e.data(this, s);
					if (!i)
					{
						return e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'")
					}
					if (!e.isFunction(i[o]) || o.charAt(0) === "_")
					{
						return e.error("no such method '" + o + "' for " + n + " widget instance")
					}
					r = i[o].apply(i, a);
					if (r !== i && r !== t)
					{
						f = r && r.jquery ? f.pushStack(r.get()) : r;
						return false
					}
				})
			}
			else
			{
				this.each(function()
				{
					var t = e.data(this, s);
					if (t)
					{
						t.option(o ||
						{})._init()
					}
					else
					{
						e.data(this, s, new i(o, this))
					}
				})
			}
			return f
		}
	};
	e.Widget = function() {};
	e.Widget._childConstructors = [];
	e.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options:
		{
			disabled: false,
			create: null
		},
		_createWidget: function(t, r)
		{
			r = e(r || this.defaultElement || this)[0];
			this.element = e(r);
			this.uuid = n++;
			this.eventNamespace = "." + this.widgetName + this.uuid;
			this.options = e.widget.extend(
			{}, this.options, this._getCreateOptions(), t);
			this.bindings = e();
			this.hoverable = e();
			this.focusable = e();
			if (r !== this)
			{
				e.data(r, this.widgetName, this);
				e.data(r, this.widgetFullName, this);
				this._on(true, this.element,
				{
					remove: function(e)
					{
						if (e.target === r)
						{
							this.destroy()
						}
					}
				});
				this.document = e(r.style ? r.ownerDocument : r.document || r);
				this.window = e(this.document[0].defaultView || this.document[0].parentWindow)
			}
			this._create();
			this._trigger("create", null, this._getCreateEventData());
			this._init()
		},
		_getCreateOptions: e.noop,
		_getCreateEventData: e.noop,
		_create: e.noop,
		_init: e.noop,
		destroy: function()
		{
			this._destroy();
			this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName));
			this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled");
			this.bindings.unbind(this.eventNamespace);
			this.hoverable.removeClass("ui-state-hover");
			this.focusable.removeClass("ui-state-focus")
		},
		_destroy: e.noop,
		widget: function()
		{
			return this.element
		},
		option: function(n, r)
		{
			var i = n,
				s, o, u;
			if (arguments.length === 0)
			{
				return e.widget.extend(
				{}, this.options)
			}
			if (typeof n === "string")
			{
				i = {};
				s = n.split(".");
				n = s.shift();
				if (s.length)
				{
					o = i[n] = e.widget.extend(
					{}, this.options[n]);
					for (u = 0; u < s.length - 1; u++)
					{
						o[s[u]] = o[s[u]] ||
						{};
						o = o[s[u]]
					}
					n = s.pop();
					if (r === t)
					{
						return o[n] === t ? null : o[n]
					}
					o[n] = r
				}
				else
				{
					if (r === t)
					{
						return this.options[n] === t ? null : this.options[n]
					}
					i[n] = r
				}
			}
			this._setOptions(i);
			return this
		},
		_setOptions: function(e)
		{
			var t;
			for (t in e)
			{
				this._setOption(t, e[t])
			}
			return this
		},
		_setOption: function(e, t)
		{
			this.options[e] = t;
			if (e === "disabled")
			{
				this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t);
				this.hoverable.removeClass("ui-state-hover");
				this.focusable.removeClass("ui-state-focus")
			}
			return this
		},
		enable: function()
		{
			return this._setOption("disabled", false)
		},
		disable: function()
		{
			return this._setOption("disabled", true)
		},
		_on: function(t, n, r)
		{
			var i, s = this;
			if (typeof t !== "boolean")
			{
				r = n;
				n = t;
				t = false
			}
			if (!r)
			{
				r = n;
				n = this.element;
				i = this.widget()
			}
			else
			{
				n = i = e(n);
				this.bindings = this.bindings.add(n)
			}
			e.each(r, function(r, o)
			{
				function u()
				{
					if (!t && (s.options.disabled === true || e(this).hasClass("ui-state-disabled")))
					{
						return
					}
					return (typeof o === "string" ? s[o] : o).apply(s, arguments)
				}
				if (typeof o !== "string")
				{
					u.guid = o.guid = o.guid || u.guid || e.guid++
				}
				var a = r.match(/^(\w+)\s*(.*)$/),
					f = a[1] + s.eventNamespace,
					l = a[2];
				if (l)
				{
					i.delegate(l, f, u)
				}
				else
				{
					n.bind(f, u)
				}
			})
		},
		_off: function(e, t)
		{
			t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
			e.unbind(t).undelegate(t)
		},
		_delay: function(e, t)
		{
			function n()
			{
				return (typeof e === "string" ? r[e] : e).apply(r, arguments)
			}
			var r = this;
			return setTimeout(n, t || 0)
		},
		_hoverable: function(t)
		{
			this.hoverable = this.hoverable.add(t);
			this._on(t,
			{
				mouseenter: function(t)
				{
					e(t.currentTarget).addClass("ui-state-hover")
				},
				mouseleave: function(t)
				{
					e(t.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable: function(t)
		{
			this.focusable = this.focusable.add(t);
			this._on(t,
			{
				focusin: function(t)
				{
					e(t.currentTarget).addClass("ui-state-focus")
				},
				focusout: function(t)
				{
					e(t.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger: function(t, n, r)
		{
			var i, s, o = this.options[t];
			r = r ||
			{};
			n = e.Event(n);
			n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase();
			n.target = this.element[0];
			s = n.originalEvent;
			if (s)
			{
				for (i in s)
				{
					if (!(i in n))
					{
						n[i] = s[i]
					}
				}
			}
			this.element.trigger(n, r);
			return !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === false || n.isDefaultPrevented())
		}
	};
	e.each(
	{
		show: "fadeIn",
		hide: "fadeOut"
	}, function(t, n)
	{
		e.Widget.prototype["_" + t] = function(r, i, s)
		{
			if (typeof i === "string")
			{
				i = {
					effect: i
				}
			}
			var o, u = !i ? t : i === true || typeof i === "number" ? n : i.effect || n;
			i = i ||
			{};
			if (typeof i === "number")
			{
				i = {
					duration: i
				}
			}
			o = !e.isEmptyObject(i);
			i.complete = s;
			if (i.delay)
			{
				r.delay(i.delay)
			}
			if (o && e.effects && (e.effects.effect[u] || e.uiBackCompat !== false && e.effects[u]))
			{
				r[t](i)
			}
			else if (u !== t && r[u])
			{
				r[u](i.duration, i.easing, s)
			}
			else
			{
				r.queue(function(n)
				{
					e(this)[t]();
					if (s)
					{
						s.call(r[0])
					}
					n()
				})
			}
		}
	});
	if (e.uiBackCompat !== false)
	{
		e.Widget.prototype._getCreateOptions = function()
		{
			return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
		}
	}
})(jQuery);
(function(e, t)
{
	var n = false;
	e(document).mouseup(function(e)
	{
		n = false
	});
	e.widget("ui.mouse",
	{
		version: "1.9.2",
		options:
		{
			cancel: "input,textarea,button,select,option",
			distance: 1,
			delay: 0
		},
		_mouseInit: function()
		{
			var t = this;
			this.element.bind("mousedown." + this.widgetName, function(e)
			{
				return t._mouseDown(e)
			}).bind("click." + this.widgetName, function(n)
			{
				if (true === e.data(n.target, t.widgetName + ".preventClickEvent"))
				{
					e.removeData(n.target, t.widgetName + ".preventClickEvent");
					n.stopImmediatePropagation();
					return false
				}
			});
			this.started = false
		},
		_mouseDestroy: function()
		{
			this.element.unbind("." + this.widgetName);
			if (this._mouseMoveDelegate)
			{
				e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
			}
		},
		_mouseDown: function(t)
		{
			if (n)
			{
				return
			}
			this._mouseStarted && this._mouseUp(t);
			this._mouseDownEvent = t;
			var r = this,
				i = t.which === 1,
				s = typeof this.options.cancel === "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : false;
			if (!i || s || !this._mouseCapture(t))
			{
				return true
			}
			this.mouseDelayMet = !this.options.delay;
			if (!this.mouseDelayMet)
			{
				this._mouseDelayTimer = setTimeout(function()
				{
					r.mouseDelayMet = true
				}, this.options.delay)
			}
			if (this._mouseDistanceMet(t) && this._mouseDelayMet(t))
			{
				this._mouseStarted = this._mouseStart(t) !== false;
				if (!this._mouseStarted)
				{
					t.preventDefault();
					return true
				}
			}
			if (true === e.data(t.target, this.widgetName + ".preventClickEvent"))
			{
				e.removeData(t.target, this.widgetName + ".preventClickEvent")
			}
			this._mouseMoveDelegate = function(e)
			{
				return r._mouseMove(e)
			};
			this._mouseUpDelegate = function(e)
			{
				return r._mouseUp(e)
			};
			e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
			t.preventDefault();
			n = true;
			return true
		},
		_mouseMove: function(t)
		{
			if (e.ui.ie && !(document.documentMode >= 9) && !t.button)
			{
				return this._mouseUp(t)
			}
			if (this._mouseStarted)
			{
				this._mouseDrag(t);
				return t.preventDefault()
			}
			if (this._mouseDistanceMet(t) && this._mouseDelayMet(t))
			{
				this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== false;
				this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)
			}
			return !this._mouseStarted
		},
		_mouseUp: function(t)
		{
			e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
			if (this._mouseStarted)
			{
				this._mouseStarted = false;
				if (t.target === this._mouseDownEvent.target)
				{
					e.data(t.target, this.widgetName + ".preventClickEvent", true)
				}
				this._mouseStop(t)
			}
			return false
		},
		_mouseDistanceMet: function(e)
		{
			return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
		},
		_mouseDelayMet: function(e)
		{
			return this.mouseDelayMet
		},
		_mouseStart: function(e) {},
		_mouseDrag: function(e) {},
		_mouseStop: function(e) {},
		_mouseCapture: function(e)
		{
			return true
		}
	})
})(jQuery);
(function(e, t)
{
	function n(e, t, n)
	{
		return [parseInt(e[0], 10) * (h.test(e[0]) ? t / 100 : 1), parseInt(e[1], 10) * (h.test(e[1]) ? n / 100 : 1)]
	}

	function r(t, n)
	{
		return parseInt(e.css(t, n), 10) || 0
	}
	e.ui = e.ui ||
	{};
	var i, s = Math.max,
		o = Math.abs,
		u = Math.round,
		a = /left|center|right/,
		f = /top|center|bottom/,
		l = /[\+\-]\d+%?/,
		c = /^\w+/,
		h = /%$/,
		p = e.fn.position;
	e.position = {
		scrollbarWidth: function()
		{
			if (i !== t)
			{
				return i
			}
			var n, r, s = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
				o = s.children()[0];
			e("body").append(s);
			n = o.offsetWidth;
			s.css("overflow", "scroll");
			r = o.offsetWidth;
			if (n === r)
			{
				r = s[0].clientWidth
			}
			s.remove();
			return i = n - r
		},
		getScrollInfo: function(t)
		{
			var n = t.isWindow ? "" : t.element.css("overflow-x"),
				r = t.isWindow ? "" : t.element.css("overflow-y"),
				i = n === "scroll" || n === "auto" && t.width < t.element[0].scrollWidth,
				s = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;
			return {
				width: i ? e.position.scrollbarWidth() : 0,
				height: s ? e.position.scrollbarWidth() : 0
			}
		},
		getWithinInfo: function(t)
		{
			var n = e(t || window),
				r = e.isWindow(n[0]);
			return {
				element: n,
				isWindow: r,
				offset: n.offset() ||
				{
					left: 0,
					top: 0
				},
				scrollLeft: n.scrollLeft(),
				scrollTop: n.scrollTop(),
				width: r ? n.width() : n.outerWidth(),
				height: r ? n.height() : n.outerHeight()
			}
		}
	};
	e.fn.position = function(t)
	{
		if (!t || !t.of)
		{
			return p.apply(this, arguments)
		}
		t = e.extend(
		{}, t);
		var i, h, d, v, m, g = e(t.of),
			y = e.position.getWithinInfo(t.within),
			b = e.position.getScrollInfo(y),
			w = g[0],
			E = (t.collision || "flip").split(" "),
			S = {};
		if (w.nodeType === 9)
		{
			h = g.width();
			d = g.height();
			v = {
				top: 0,
				left: 0
			}
		}
		else if (e.isWindow(w))
		{
			h = g.width();
			d = g.height();
			v = {
				top: g.scrollTop(),
				left: g.scrollLeft()
			}
		}
		else if (w.preventDefault)
		{
			t.at = "left top";
			h = d = 0;
			v = {
				top: w.pageY,
				left: w.pageX
			}
		}
		else
		{
			h = g.outerWidth();
			d = g.outerHeight();
			v = g.offset()
		}
		m = e.extend(
		{}, v);
		e.each(["my", "at"], function()
		{
			var e = (t[this] || "").split(" "),
				n, r;
			if (e.length === 1)
			{
				e = a.test(e[0]) ? e.concat(["center"]) : f.test(e[0]) ? ["center"].concat(e) : ["center", "center"]
			}
			e[0] = a.test(e[0]) ? e[0] : "center";
			e[1] = f.test(e[1]) ? e[1] : "center";
			n = l.exec(e[0]);
			r = l.exec(e[1]);
			S[this] = [n ? n[0] : 0, r ? r[0] : 0];
			t[this] = [c.exec(e[0])[0], c.exec(e[1])[0]]
		});
		if (E.length === 1)
		{
			E[1] = E[0]
		}
		if (t.at[0] === "right")
		{
			m.left += h
		}
		else if (t.at[0] === "center")
		{
			m.left += h / 2
		}
		if (t.at[1] === "bottom")
		{
			m.top += d
		}
		else if (t.at[1] === "center")
		{
			m.top += d / 2
		}
		i = n(S.at, h, d);
		m.left += i[0];
		m.top += i[1];
		return this.each(function()
		{
			var a, f, l = e(this),
				c = l.outerWidth(),
				p = l.outerHeight(),
				w = r(this, "marginLeft"),
				x = r(this, "marginTop"),
				T = c + w + r(this, "marginRight") + b.width,
				N = p + x + r(this, "marginBottom") + b.height,
				C = e.extend(
				{}, m),
				k = n(S.my, l.outerWidth(), l.outerHeight());
			if (t.my[0] === "right")
			{
				C.left -= c
			}
			else if (t.my[0] === "center")
			{
				C.left -= c / 2
			}
			if (t.my[1] === "bottom")
			{
				C.top -= p
			}
			else if (t.my[1] === "center")
			{
				C.top -= p / 2
			}
			C.left += k[0];
			C.top += k[1];
			if (!e.support.offsetFractions)
			{
				C.left = u(C.left);
				C.top = u(C.top)
			}
			a = {
				marginLeft: w,
				marginTop: x
			};
			e.each(["left", "top"], function(n, r)
			{
				if (e.ui.position[E[n]])
				{
					e.ui.position[E[n]][r](C,
					{
						targetWidth: h,
						targetHeight: d,
						elemWidth: c,
						elemHeight: p,
						collisionPosition: a,
						collisionWidth: T,
						collisionHeight: N,
						offset: [i[0] + k[0], i[1] + k[1]],
						my: t.my,
						at: t.at,
						within: y,
						elem: l
					})
				}
			});
			if (e.fn.bgiframe)
			{
				l.bgiframe()
			}
			if (t.using)
			{
				f = function(e)
				{
					var n = v.left - C.left,
						r = n + h - c,
						i = v.top - C.top,
						u = i + d - p,
						a = {
							target:
							{
								element: g,
								left: v.left,
								top: v.top,
								width: h,
								height: d
							},
							element:
							{
								element: l,
								left: C.left,
								top: C.top,
								width: c,
								height: p
							},
							horizontal: r < 0 ? "left" : n > 0 ? "right" : "center",
							vertical: u < 0 ? "top" : i > 0 ? "bottom" : "middle"
						};
					if (h < c && o(n + r) < h)
					{
						a.horizontal = "center"
					}
					if (d < p && o(i + u) < d)
					{
						a.vertical = "middle"
					}
					if (s(o(n), o(r)) > s(o(i), o(u)))
					{
						a.important = "horizontal"
					}
					else
					{
						a.important = "vertical"
					}
					t.using.call(this, e, a)
				}
			}
			l.offset(e.extend(C,
			{
				using: f
			}))
		})
	};

	e.ui.position = {
		fit:
		{
			left: function(e, t)
			{
				var n = t.within,
					r = n.isWindow ? n.scrollLeft : n.offset.left,
					i = n.width,
					o = e.left - t.collisionPosition.marginLeft,
					u = r - o,
					a = o + t.collisionWidth - i - r,
					f;
				if (t.collisionWidth > i)
				{
					if (u > 0 && a <= 0)
					{
						f = e.left + u + t.collisionWidth - i - r;
						e.left += u - f
					}
					else if (a > 0 && u <= 0)
					{
						e.left = r
					}
					else
					{
						if (u > a)
						{
							e.left = r + i - t.collisionWidth
						}
						else
						{
							e.left = r
						}
					}
				}
				else if (u > 0)
				{
					e.left += u
				}
				else if (a > 0)
				{
					e.left -= a
				}
				else
				{
					e.left = s(e.left - o, e.left)
				}
			},
			top: function(e, t)
			{
				var n = t.within,
					r = n.isWindow ? n.scrollTop : n.offset.top,
					i = t.within.height,
					o = e.top - t.collisionPosition.marginTop,
					u = r - o,
					a = o + t.collisionHeight - i - r,
					f;
				if (t.collisionHeight > i)
				{
					if (u > 0 && a <= 0)
					{
						f = e.top + u + t.collisionHeight - i - r;
						e.top += u - f
					}
					else if (a > 0 && u <= 0)
					{
						e.top = r
					}
					else
					{
						if (u > a)
						{
							e.top = r + i - t.collisionHeight
						}
						else
						{
							e.top = r
						}
					}
				}
				else if (u > 0)
				{
					e.top += u
				}
				else if (a > 0)
				{
					e.top -= a
				}
				else
				{
					e.top = s(e.top - o, e.top)
				}
			}
		},
		flip:
		{
			left: function(e, t)
			{
				var n = t.within,
					r = n.offset.left + n.scrollLeft,
					i = n.width,
					s = n.isWindow ? n.scrollLeft : n.offset.left,
					u = e.left - t.collisionPosition.marginLeft,
					a = u - s,
					f = u + t.collisionWidth - i - s,
					l = t.my[0] === "left" ? -t.elemWidth : t.my[0] === "right" ? t.elemWidth : 0,
					c = t.at[0] === "left" ? t.targetWidth : t.at[0] === "right" ? -t.targetWidth : 0,
					h = -2 * t.offset[0],
					p, d;
				if (a < 0)
				{
					p = e.left + l + c + h + t.collisionWidth - i - r;
					if (p < 0 || p < o(a))
					{
						e.left += l + c + h
					}
				}
				else if (f > 0)
				{
					d = e.left - t.collisionPosition.marginLeft + l + c + h - s;
					if (d > 0 || o(d) < f)
					{
						e.left += l + c + h
					}
				}
			},
			top: function(e, t)
			{
				var n = t.within,
					r = n.offset.top + n.scrollTop,
					i = n.height,
					s = n.isWindow ? n.scrollTop : n.offset.top,
					u = e.top - t.collisionPosition.marginTop,
					a = u - s,
					f = u + t.collisionHeight - i - s,
					l = t.my[1] === "top",
					c = l ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0,
					h = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom" ? -t.targetHeight : 0,
					p = -2 * t.offset[1],
					d, v;
				if (a < 0)
				{
					v = e.top + c + h + p + t.collisionHeight - i - r;
					if (e.top + c + h + p > a && (v < 0 || v < o(a)))
					{
						e.top += c + h + p
					}
				}
				else if (f > 0)
				{
					d = e.top - t.collisionPosition.marginTop + c + h + p - s;
					if (e.top + c + h + p > f && (d > 0 || o(d) < f))
					{
						e.top += c + h + p
					}
				}
			}
		},
		flipfit:
		{
			left: function()
			{
				e.ui.position.flip.left.apply(this, arguments);
				e.ui.position.fit.left.apply(this, arguments)
			},
			top: function()
			{
				e.ui.position.flip.top.apply(this, arguments);
				e.ui.position.fit.top.apply(this, arguments)
			}
		}
	};
	(function()
	{
		var t, n, r, i, s, o = document.getElementsByTagName("body")[0],
			u = document.createElement("div");
		t = document.createElement(o ? "div" : "body");
		r = {
			visibility: "hidden",
			width: 0,
			height: 0,
			border: 0,
			margin: 0,
			background: "none"
		};
		if (o)
		{
			e.extend(r,
			{
				position: "absolute",
				left: "-1000px",
				top: "-1000px"
			})
		}
		for (s in r)
		{
			t.style[s] = r[s]
		}
		t.appendChild(u);
		n = o || document.documentElement;
		n.insertBefore(t, n.firstChild);
		u.style.cssText = "position: absolute; left: 10.7432222px;";
		i = e(u).offset().left;
		e.support.offsetFractions = i > 10 && i < 11;
		t.innerHTML = "";
		n.removeChild(t)
	})();
	if (e.uiBackCompat !== false)
	{
		(function(e)
		{
			var n = e.fn.position;
			e.fn.position = function(r)
			{
				if (!r || !r.offset)
				{
					return n.call(this, r)
				}
				var i = r.offset.split(" "),
					s = r.at.split(" ");
				if (i.length === 1)
				{
					i[1] = i[0]
				}
				if (/^\d/.test(i[0]))
				{
					i[0] = "+" + i[0]
				}
				if (/^\d/.test(i[1]))
				{
					i[1] = "+" + i[1]
				}
				if (s.length === 1)
				{
					if (/left|center|right/.test(s[0]))
					{
						s[1] = "center"
					}
					else
					{
						s[1] = s[0];
						s[0] = "center"
					}
				}
				return n.call(this, e.extend(r,
				{
					at: s[0] + i[0] + " " + s[1] + i[1],
					offset: t
				}))
			}
		})(jQuery)
	}
})(jQuery);
(function(e, t)
{
	var n = 0;
	e.widget("ui.autocomplete",
	{
		version: "1.9.2",
		defaultElement: "<input>",
		options:
		{
			appendTo: "body",
			autoFocus: false,
			delay: 300,
			minLength: 1,
			position:
			{
				my: "left top",
				at: "left bottom",
				collision: "none"
			},
			source: null,
			change: null,
			close: null,
			focus: null,
			open: null,
			response: null,
			search: null,
			select: null
		},
		pending: 0,
		_create: function()
		{
			var t, n, r;
			this.isMultiLine = this._isMultiLine();
			this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"];
			this.isNewMenu = true;
			this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
			this._on(this.element,
			{
				keydown: function(i)
				{
					if (this.element.prop("readOnly"))
					{
						t = true;
						r = true;
						n = true;
						return
					}
					t = false;
					r = false;
					n = false;
					var s = e.ui.keyCode;
					switch (i.keyCode)
					{
						case s.PAGE_UP:
							t = true;
							this._move("previousPage", i);
							break;
						case s.PAGE_DOWN:
							t = true;
							this._move("nextPage", i);
							break;
						case s.UP:
							t = true;
							this._keyEvent("previous", i);
							break;
						case s.DOWN:
							t = true;
							this._keyEvent("next", i);
							break;
						case s.ENTER:
						case s.NUMPAD_ENTER:
							if (this.menu.active)
							{
								t = true;
								i.preventDefault();
								this.menu.select(i)
							}
							break;
						case s.TAB:
							if (this.menu.active)
							{
								this.menu.select(i)
							}
							break;
						case s.ESCAPE:
							if (this.menu.element.is(":visible"))
							{
								this._value(this.term);
								this.close(i);
								i.preventDefault()
							}
							break;
						default:
							n = true;
							this._searchTimeout(i);
							break
					}
				},
				keypress: function(r)
				{
					if (t)
					{
						t = false;
						r.preventDefault();
						return
					}
					if (n)
					{
						return
					}
					var i = e.ui.keyCode;
					switch (r.keyCode)
					{
						case i.PAGE_UP:
							this._move("previousPage", r);
							break;
						case i.PAGE_DOWN:
							this._move("nextPage", r);
							break;
						case i.UP:
							this._keyEvent("previous", r);
							break;
						case i.DOWN:
							this._keyEvent("next", r);
							break
					}
				},
				input: function(e)
				{
					if (r)
					{
						r = false;
						e.preventDefault();
						return
					}
					this._searchTimeout(e)
				},
				focus: function()
				{
					this.selectedItem = null;
					this.previous = this._value()
				},
				blur: function(e)
				{
					if (this.cancelBlur)
					{
						delete this.cancelBlur;
						return
					}
					clearTimeout(this.searching);
					this.close(e);
					this._change(e)
				}
			});
			this._initSource();
			this.menu = e("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu(
			{
				input: e(),
				role: null
			}).zIndex(this.element.zIndex() + 1).hide().data("menu");
			this._on(this.menu.element,
			{
				mousedown: function(t)
				{
					t.preventDefault();
					this.cancelBlur = true;
					this._delay(function()
					{
						delete this.cancelBlur
					});
					var n = this.menu.element[0];
					if (!e(t.target).closest(".ui-menu-item").length)
					{
						this._delay(function()
						{
							var t = this;
							this.document.one("mousedown", function(r)
							{
								if (r.target !== t.element[0] && r.target !== n && !e.contains(n, r.target))
								{
									t.close()
								}
							})
						})
					}
				},
				menufocus: function(t, n)
				{
					if (this.isNewMenu)
					{
						this.isNewMenu = false;
						if (t.originalEvent && /^mouse/.test(t.originalEvent.type))
						{
							this.menu.blur();
							this.document.one("mousemove", function()
							{
								e(t.target).trigger(t.originalEvent)
							});
							return
						}
					}
					var r = n.item.data("ui-autocomplete-item") || n.item.data("item.autocomplete");
					if (false !== this._trigger("focus", t,
						{
							item: r
						}))
					{
						if (t.originalEvent && /^key/.test(t.originalEvent.type))
						{
							this._value(r.value)
						}
					}
					else
					{
						this.liveRegion.text(r.value)
					}
				},
				menuselect: function(e, t)
				{
					var n = t.item.data("ui-autocomplete-item") || t.item.data("item.autocomplete"),
						r = this.previous;
					if (this.element[0] !== this.document[0].activeElement)
					{
						this.element.focus();
						this.previous = r;
						this._delay(function()
						{
							this.previous = r;
							this.selectedItem = n
						})
					}
					if (false !== this._trigger("select", e,
						{
							item: n
						}))
					{
						this._value(n.value)
					}
					this.term = this._value();
					this.close(e);
					this.selectedItem = n
				}
			});
			this.liveRegion = e("<span>",
			{
				role: "status",
				"aria-live": "polite"
			}).addClass("ui-helper-hidden-accessible").insertAfter(this.element);
			if (e.fn.bgiframe)
			{
				this.menu.element.bgiframe()
			}
			this._on(this.window,
			{
				beforeunload: function()
				{
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_destroy: function()
		{
			clearTimeout(this.searching);
			this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
			this.menu.element.remove();
			this.liveRegion.remove()
		},
		_setOption: function(e, t)
		{
			this._super(e, t);
			if (e === "source")
			{
				this._initSource()
			}
			if (e === "appendTo")
			{
				this.menu.element.appendTo(this.document.find(t || "body")[0])
			}
			if (e === "disabled" && t && this.xhr)
			{
				this.xhr.abort()
			}
		},
		_isMultiLine: function()
		{
			if (this.element.is("textarea"))
			{
				return true
			}
			if (this.element.is("input"))
			{
				return false
			}
			return this.element.prop("isContentEditable")
		},
		_initSource: function()
		{
			var t, n, r = this;
			if (e.isArray(this.options.source))
			{
				t = this.options.source;
				this.source = function(n, r)
				{
					r(e.ui.autocomplete.filter(t, n.term))
				}
			}
			else if (typeof this.options.source === "string")
			{
				n = this.options.source;
				this.source = function(t, i)
				{
					if (r.xhr)
					{
						r.xhr.abort()
					}
					r.xhr = e.ajax(
					{
						url: n,
						data: t,
						dataType: "json",
						success: function(e)
						{
							i(e)
						},
						error: function()
						{
							i([])
						}
					})
				}
			}
			else
			{
				this.source = this.options.source
			}
		},
		_searchTimeout: function(e)
		{
			clearTimeout(this.searching);
			this.searching = this._delay(function()
			{
				if (this.term !== this._value())
				{
					this.selectedItem = null;
					this.search(null, e)
				}
			}, this.options.delay)
		},
		search: function(e, t)
		{
			e = e != null ? e : this._value();
			this.term = this._value();
			if (e.length < this.options.minLength)
			{
				return this.close(t)
			}
			if (this._trigger("search", t) === false)
			{
				return
			}
			return this._search(e)
		},
		_search: function(e)
		{
			this.pending++;
			this.element.addClass("ui-autocomplete-loading");
			this.cancelSearch = false;
			this.source(
			{
				term: e
			}, this._response())
		},
		_response: function()
		{
			var e = this,
				t = ++n;
			return function(r)
			{
				if (t === n)
				{
					e.__response(r)
				}
				e.pending--;
				if (!e.pending)
				{
					e.element.removeClass("ui-autocomplete-loading")
				}
			}
		},
		__response: function(e)
		{
			if (e)
			{
				e = this._normalize(e)
			}
			this._trigger("response", null,
			{
				content: e
			});
			if (!this.options.disabled && e && e.length && !this.cancelSearch)
			{
				this._suggest(e);
				this._trigger("open")
			}
			else
			{
				this._close()
			}
		},
		close: function(e)
		{
			this.cancelSearch = true;
			this._close(e)
		},
		_close: function(e)
		{
			if (this.menu.element.is(":visible"))
			{
				this.menu.element.hide();
				this.menu.blur();
				this.isNewMenu = true;
				this._trigger("close", e)
			}
		},
		_change: function(e)
		{
			if (this.previous !== this._value())
			{
				this._trigger("change", e,
				{
					item: this.selectedItem
				})
			}
		},
		_normalize: function(t)
		{
			if (t.length && t[0].label && t[0].value)
			{
				return t
			}
			return e.map(t, function(t)
			{
				if (typeof t === "string")
				{
					return {
						label: t,
						value: t
					}
				}
				return e.extend(
				{
					label: t.label || t.value,
					value: t.value || t.label
				}, t)
			})
		},
		_suggest: function(t)
		{
			var n = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
			this._renderMenu(n, t);
			this.menu.refresh();
			n.show();
			this._resizeMenu();
			n.position(e.extend(
			{
				of: this.element
			}, this.options.position));
			if (this.options.autoFocus)
			{
				this.menu.next()
			}
		},
		_resizeMenu: function()
		{
			var e = this.menu.element;
			e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
		},
		_renderMenu: function(t, n)
		{
			var r = this;
			e.each(n, function(e, n)
			{
				r._renderItemData(t, n)
			})
		},
		_renderItemData: function(e, t)
		{
			return this._renderItem(e, t).data("ui-autocomplete-item", t)
		},
		_renderItem: function(t, n)
		{
			return e("<li>").append(e("<a>").text(n.label)).appendTo(t)
		},
		_move: function(e, t)
		{
			if (!this.menu.element.is(":visible"))
			{
				this.search(null, t);
				return
			}
			if (this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e))
			{
				this._value(this.term);
				this.menu.blur();
				return
			}
			this.menu[e](t)
		},
		widget: function()
		{
			return this.menu.element
		},
		_value: function()
		{
			return this.valueMethod.apply(this.element, arguments)
		},
		_keyEvent: function(e, t)
		{
			if (!this.isMultiLine || this.menu.element.is(":visible"))
			{
				this._move(e, t);
				t.preventDefault()
			}
		}
	});
	e.extend(e.ui.autocomplete,
	{
		escapeRegex: function(e)
		{
			return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
		},
		filter: function(t, n)
		{
			var r = new RegExp(e.ui.autocomplete.escapeRegex(n), "i");
			return e.grep(t, function(e)
			{
				return r.test(e.label || e.value || e)
			})
		}
	});
	e.widget("ui.autocomplete", e.ui.autocomplete,
	{
		options:
		{
			messages:
			{
				noResults: "No search results.",
				results: function(e)
				{
					return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
				}
			}
		},
		__response: function(e)
		{
			var t;
			this._superApply(arguments);
			if (this.options.disabled || this.cancelSearch)
			{
				return
			}
			if (e && e.length)
			{
				t = this.options.messages.results(e.length)
			}
			else
			{
				t = this.options.messages.noResults
			}
			this.liveRegion.text(t)
		}
	})
})(jQuery);
(function(e, t)
{
	var n = false;
	e.widget("ui.menu",
	{
		version: "1.9.2",
		defaultElement: "<ul>",
		delay: 300,
		options:
		{
			icons:
			{
				submenu: "ui-icon-carat-1-e"
			},
			menus: "ul",
			position:
			{
				my: "left top",
				at: "right top"
			},
			role: "menu",
			blur: null,
			focus: null,
			select: null
		},
		_create: function()
		{
			this.activeMenu = this.element;
			this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr(
			{
				role: this.options.role,
				tabIndex: 0
			}).bind("click" + this.eventNamespace, e.proxy(function(e)
			{
				if (this.options.disabled)
				{
					e.preventDefault()
				}
			}, this));
			if (this.options.disabled)
			{
				this.element.addClass("ui-state-disabled").attr("aria-disabled", "true")
			}
			this._on(
			{
				"mousedown .ui-menu-item > a": function(e)
				{
					e.preventDefault()
				},
				"click .ui-state-disabled > a": function(e)
				{
					e.preventDefault()
				},
				"click .ui-menu-item:has(a)": function(t)
				{
					var r = e(t.target).closest(".ui-menu-item");
					if (!n && r.not(".ui-state-disabled").length)
					{
						n = true;
						this.select(t);
						if (r.has(".ui-menu").length)
						{
							this.expand(t)
						}
						else if (!this.element.is(":focus"))
						{
							this.element.trigger("focus", [true]);
							if (this.active && this.active.parents(".ui-menu").length === 1)
							{
								clearTimeout(this.timer)
							}
						}
					}
				},
				"mouseenter .ui-menu-item": function(t)
				{
					var n = e(t.currentTarget);
					n.siblings().children(".ui-state-active").removeClass("ui-state-active");
					this.focus(t, n)
				},
				mouseleave: "collapseAll",
				"mouseleave .ui-menu": "collapseAll",
				focus: function(e, t)
				{
					var n = this.active || this.element.children(".ui-menu-item").eq(0);
					if (!t)
					{
						this.focus(e, n)
					}
				},
				blur: function(t)
				{
					this._delay(function()
					{
						if (!e.contains(this.element[0], this.document[0].activeElement))
						{
							this.collapseAll(t)
						}
					})
				},
				keydown: "_keydown"
			});
			this.refresh();
			this._on(this.document,
			{
				click: function(t)
				{
					if (!e(t.target).closest(".ui-menu").length)
					{
						this.collapseAll(t)
					}
					n = false
				}
			})
		},
		_destroy: function()
		{
			this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
			this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function()
			{
				var t = e(this);
				if (t.data("ui-menu-submenu-carat"))
				{
					t.remove()
				}
			});
			this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
		},
		_keydown: function(t)
		{
			function n(e)
			{
				return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
			}
			var r, i, s, o, u, a = true;
			switch (t.keyCode)
			{
				case e.ui.keyCode.PAGE_UP:
					this.previousPage(t);
					break;
				case e.ui.keyCode.PAGE_DOWN:
					this.nextPage(t);
					break;
				case e.ui.keyCode.HOME:
					this._move("first", "first", t);
					break;
				case e.ui.keyCode.END:
					this._move("last", "last", t);
					break;
				case e.ui.keyCode.UP:
					this.previous(t);
					break;
				case e.ui.keyCode.DOWN:
					this.next(t);
					break;
				case e.ui.keyCode.LEFT:
					this.collapse(t);
					break;
				case e.ui.keyCode.RIGHT:
					if (this.active && !this.active.is(".ui-state-disabled"))
					{
						this.expand(t)
					}
					break;
				case e.ui.keyCode.ENTER:
				case e.ui.keyCode.SPACE:
					this._activate(t);
					break;
				case e.ui.keyCode.ESCAPE:
					this.collapse(t);
					break;
				default:
					a = false;
					i = this.previousFilter || "";
					s = String.fromCharCode(t.keyCode);
					o = false;
					clearTimeout(this.filterTimer);
					if (s === i)
					{
						o = true
					}
					else
					{
						s = i + s
					}
					u = new RegExp("^" + n(s), "i");
					r = this.activeMenu.children(".ui-menu-item").filter(function()
					{
						return u.test(e(this).children("a").text())
					});
					r = o && r.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : r;
					if (!r.length)
					{
						s = String.fromCharCode(t.keyCode);
						u = new RegExp("^" + n(s), "i");
						r = this.activeMenu.children(".ui-menu-item").filter(function()
						{
							return u.test(e(this).children("a").text())
						})
					}
					if (r.length)
					{
						this.focus(t, r);
						if (r.length > 1)
						{
							this.previousFilter = s;
							this.filterTimer = this._delay(function()
							{
								delete this.previousFilter
							}, 1e3)
						}
						else
						{
							delete this.previousFilter
						}
					}
					else
					{
						delete this.previousFilter
					}
			}
			if (a)
			{
				t.preventDefault()
			}
		},
		_activate: function(e)
		{
			if (!this.active.is(".ui-state-disabled"))
			{
				if (this.active.children("a[aria-haspopup='true']").length)
				{
					this.expand(e)
				}
				else
				{
					this.select(e)
				}
			}
		},
		refresh: function()
		{
			var t, n = this.options.icons.submenu,
				r = this.element.find(this.options.menus);
			r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr(
			{
				role: this.options.role,
				"aria-hidden": "true",
				"aria-expanded": "false"
			}).each(function()
			{
				var t = e(this),
					r = t.prev("a"),
					i = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", true);
				r.attr("aria-haspopup", "true").prepend(i);
				t.attr("aria-labelledby", r.attr("id"))
			});
			t = r.add(this.element);
			t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr(
			{
				tabIndex: -1,
				role: this._itemRole()
			});
			t.children(":not(.ui-menu-item)").each(function()
			{
				var t = e(this);
				if (!/[^\-â€”â€“\s]/.test(t.text()))
				{
					t.addClass("ui-widget-content ui-menu-divider")
				}
			});
			t.children(".ui-state-disabled").attr("aria-disabled", "true");
			if (this.active && !e.contains(this.element[0], this.active[0]))
			{
				this.blur()
			}
		},
		_itemRole: function()
		{
			return {
				menu: "menuitem",
				listbox: "option"
			}[this.options.role]
		},
		focus: function(e, t)
		{
			var n, r;
			this.blur(e, e && e.type === "focus");
			this._scrollIntoView(t);
			this.active = t.first();
			r = this.active.children("a").addClass("ui-state-focus");
			if (this.options.role)
			{
				this.element.attr("aria-activedescendant", r.attr("id"))
			}
			this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
			if (e && e.type === "keydown")
			{
				this._close()
			}
			else
			{
				this.timer = this._delay(function()
				{
					this._close()
				}, this.delay)
			}
			n = t.children(".ui-menu");
			if (n.length && /^mouse/.test(e.type))
			{
				this._startOpening(n)
			}
			this.activeMenu = t.parent();
			this._trigger("focus", e,
			{
				item: t
			})
		},
		_scrollIntoView: function(t)
		{
			var n, r, i, s, o, u;
			if (this._hasScroll())
			{
				n = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0;
				r = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0;
				i = t.offset().top - this.activeMenu.offset().top - n - r;
				s = this.activeMenu.scrollTop();
				o = this.activeMenu.height();
				u = t.height();
				if (i < 0)
				{
					this.activeMenu.scrollTop(s + i)
				}
				else if (i + u > o)
				{
					this.activeMenu.scrollTop(s + i - o + u)
				}
			}
		},
		blur: function(e, t)
		{
			if (!t)
			{
				clearTimeout(this.timer)
			}
			if (!this.active)
			{
				return
			}
			this.active.children("a").removeClass("ui-state-focus");
			this.active = null;
			this._trigger("blur", e,
			{
				item: this.active
			})
		},
		_startOpening: function(e)
		{
			clearTimeout(this.timer);
			if (e.attr("aria-hidden") !== "true")
			{
				return
			}
			this.timer = this._delay(function()
			{
				this._close();
				this._open(e)
			}, this.delay)
		},
		_open: function(t)
		{
			var n = e.extend(
			{
				of: this.active
			}, this.options.position);
			clearTimeout(this.timer);
			this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true");
			t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(n)
		},
		collapseAll: function(t, n)
		{
			clearTimeout(this.timer);
			this.timer = this._delay(function()
			{
				var r = n ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
				if (!r.length)
				{
					r = this.element
				}
				this._close(r);
				this.blur(t);
				this.activeMenu = r
			}, this.delay)
		},
		_close: function(e)
		{
			if (!e)
			{
				e = this.active ? this.active.parent() : this.element
			}
			e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
		},
		collapse: function(e)
		{
			var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
			if (t && t.length)
			{
				this._close();
				this.focus(e, t)
			}
		},
		expand: function(e)
		{
			var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
			if (t && t.length)
			{
				this._open(t.parent());
				this._delay(function()
				{
					this.focus(e, t)
				})
			}
		},
		next: function(e)
		{
			this._move("next", "first", e)
		},
		previous: function(e)
		{
			this._move("prev", "last", e)
		},
		isFirstItem: function()
		{
			return this.active && !this.active.prevAll(".ui-menu-item").length
		},
		isLastItem: function()
		{
			return this.active && !this.active.nextAll(".ui-menu-item").length
		},
		_move: function(e, t, n)
		{
			var r;
			if (this.active)
			{
				if (e === "first" || e === "last")
				{
					r = this.active[e === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1)
				}
				else
				{
					r = this.active[e + "All"](".ui-menu-item").eq(0)
				}
			}
			if (!r || !r.length || !this.active)
			{
				r = this.activeMenu.children(".ui-menu-item")[t]()
			}
			this.focus(n, r)
		},
		nextPage: function(t)
		{
			var n, r, i;
			if (!this.active)
			{
				this.next(t);
				return
			}
			if (this.isLastItem())
			{
				return
			}
			if (this._hasScroll())
			{
				r = this.active.offset().top;
				i = this.element.height();
				this.active.nextAll(".ui-menu-item").each(function()
				{
					n = e(this);
					return n.offset().top - r - i < 0
				});
				this.focus(t, n)
			}
			else
			{
				this.focus(t, this.activeMenu.children(".ui-menu-item")[!this.active ? "first" : "last"]())
			}
		},
		previousPage: function(t)
		{
			var n, r, i;
			if (!this.active)
			{
				this.next(t);
				return
			}
			if (this.isFirstItem())
			{
				return
			}
			if (this._hasScroll())
			{
				r = this.active.offset().top;
				i = this.element.height();
				this.active.prevAll(".ui-menu-item").each(function()
				{
					n = e(this);
					return n.offset().top - r + i > 0
				});
				this.focus(t, n)
			}
			else
			{
				this.focus(t, this.activeMenu.children(".ui-menu-item").first())
			}
		},
		_hasScroll: function()
		{
			return this.element.outerHeight() < this.element.prop("scrollHeight")
		},
		select: function(t)
		{
			this.active = this.active || e(t.target).closest(".ui-menu-item");
			var n = {
				item: this.active
			};
			if (!this.active.has(".ui-menu").length)
			{
				this.collapseAll(t, true)
			}
			this._trigger("select", t, n)
		}
	})
})(jQuery);
(function(e, t)
{
	var n = 5;
	e.widget("ui.slider", e.ui.mouse,
	{
		version: "1.9.2",
		widgetEventPrefix: "slide",
		options:
		{
			animate: false,
			distance: 0,
			max: 100,
			min: 0,
			orientation: "horizontal",
			range: false,
			step: 1,
			value: 0,
			values: null
		},
		_create: function()
		{
			var t, r, i = this.options,
				s = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
				o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
				u = [];
			this._keySliding = false;
			this._mouseSliding = false;
			this._animateOff = true;
			this._handleIndex = null;
			this._detectOrientation();
			this._mouseInit();
			this.element.addClass("ui-slider" + " ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all" + (i.disabled ? " ui-slider-disabled ui-disabled" : ""));
			this.range = e([]);
			if (i.range)
			{
				if (i.range === true)
				{
					if (!i.values)
					{
						i.values = [this._valueMin(), this._valueMin()]
					}
					if (i.values.length && i.values.length !== 2)
					{
						i.values = [i.values[0], i.values[0]]
					}
				}
				this.range = e("<div></div>").appendTo(this.element).addClass("ui-slider-range" + " ui-widget-header" + (i.range === "min" || i.range === "max" ? " ui-slider-range-" + i.range : ""))
			}
			r = i.values && i.values.length || 1;
			for (t = s.length; t < r; t++)
			{
				u.push(o)
			}
			this.handles = s.add(e(u.join("")).appendTo(this.element));
			this.handle = this.handles.eq(0);
			this.handles.add(this.range).filter("a").click(function(e)
			{
				e.preventDefault()
			}).mouseenter(function()
			{
				if (!i.disabled)
				{
					e(this).addClass("ui-state-hover")
				}
			}).mouseleave(function()
			{
				e(this).removeClass("ui-state-hover")
			}).focus(function()
			{
				if (!i.disabled)
				{
					e(".ui-slider .ui-state-focus").removeClass("ui-state-focus");
					e(this).addClass("ui-state-focus")
				}
				else
				{
					e(this).blur()
				}
			}).blur(function()
			{
				e(this).removeClass("ui-state-focus")
			});
			this.handles.each(function(t)
			{
				e(this).data("ui-slider-handle-index", t)
			});
			this._on(this.handles,
			{
				keydown: function(t)
				{
					var r, i, s, o, u = e(t.target).data("ui-slider-handle-index");
					switch (t.keyCode)
					{
						case e.ui.keyCode.HOME:
						case e.ui.keyCode.END:
						case e.ui.keyCode.PAGE_UP:
						case e.ui.keyCode.PAGE_DOWN:
						case e.ui.keyCode.UP:
						case e.ui.keyCode.RIGHT:
						case e.ui.keyCode.DOWN:
						case e.ui.keyCode.LEFT:
							t.preventDefault();
							if (!this._keySliding)
							{
								this._keySliding = true;
								e(t.target).addClass("ui-state-active");
								r = this._start(t, u);
								if (r === false)
								{
									return
								}
							}
							break
					}
					o = this.options.step;
					if (this.options.values && this.options.values.length)
					{
						i = s = this.values(u)
					}
					else
					{
						i = s = this.value()
					}
					switch (t.keyCode)
					{
						case e.ui.keyCode.HOME:
							s = this._valueMin();
							break;
						case e.ui.keyCode.END:
							s = this._valueMax();
							break;
						case e.ui.keyCode.PAGE_UP:
							s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / n);
							break;
						case e.ui.keyCode.PAGE_DOWN:
							s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / n);
							break;
						case e.ui.keyCode.UP:
						case e.ui.keyCode.RIGHT:
							if (i === this._valueMax())
							{
								return
							}
							s = this._trimAlignValue(i + o);
							break;
						case e.ui.keyCode.DOWN:
						case e.ui.keyCode.LEFT:
							if (i === this._valueMin())
							{
								return
							}
							s = this._trimAlignValue(i - o);
							break
					}
					this._slide(t, u, s)
				},
				keyup: function(t)
				{
					var n = e(t.target).data("ui-slider-handle-index");
					if (this._keySliding)
					{
						this._keySliding = false;
						this._stop(t, n);
						this._change(t, n);
						e(t.target).removeClass("ui-state-active")
					}
				}
			});
			this._refreshValue();
			this._animateOff = false
		},
		_destroy: function()
		{
			this.handles.remove();
			this.range.remove();
			this.element.removeClass("ui-slider" + " ui-slider-horizontal" + " ui-slider-vertical" + " ui-slider-disabled" + " ui-widget" + " ui-widget-content" + " ui-corner-all");
			this._mouseDestroy()
		},
		_mouseCapture: function(t)
		{
			var n, r, i, s, o, u, a, f, l = this,
				c = this.options;
			if (c.disabled)
			{
				return false
			}
			this.elementSize = {
				width: this.element.outerWidth(),
				height: this.element.outerHeight()
			};
			this.elementOffset = this.element.offset();
			n = {
				x: t.pageX,
				y: t.pageY
			};
			r = this._normValueFromMouse(n);
			i = this._valueMax() - this._valueMin() + 1;
			this.handles.each(function(t)
			{
				var n = Math.abs(r - l.values(t));
				if (i > n)
				{
					i = n;
					s = e(this);
					o = t
				}
			});
			if (c.range === true && this.values(1) === c.min)
			{
				o += 1;
				s = e(this.handles[o])
			}
			u = this._start(t, o);
			if (u === false)
			{
				return false
			}
			this._mouseSliding = true;
			this._handleIndex = o;
			s.addClass("ui-state-active").focus();
			a = s.offset();
			f = !e(t.target).parents().andSelf().is(".ui-slider-handle");
			this._clickOffset = f ?
			{
				left: 0,
				top: 0
			} :
			{
				left: t.pageX - a.left - s.width() / 2,
				top: t.pageY - a.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
			};
			if (!this.handles.hasClass("ui-state-hover"))
			{
				this._slide(t, o, r)
			}
			this._animateOff = true;
			return true
		},
		_mouseStart: function()
		{
			return true
		},
		_mouseDrag: function(e)
		{
			var t = {
					x: e.pageX,
					y: e.pageY
				},
				n = this._normValueFromMouse(t);
			this._slide(e, this._handleIndex, n);
			return false
		},
		_mouseStop: function(e)
		{
			this.handles.removeClass("ui-state-active");
			this._mouseSliding = false;
			this._stop(e, this._handleIndex);
			this._change(e, this._handleIndex);
			this._handleIndex = null;
			this._clickOffset = null;
			this._animateOff = false;
			return false
		},
		_detectOrientation: function()
		{
			this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
		},
		_normValueFromMouse: function(e)
		{
			var t, n, r, i, s;
			if (this.orientation === "horizontal")
			{
				t = this.elementSize.width;
				n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)
			}
			else
			{
				t = this.elementSize.height;
				n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)
			}
			r = n / t;
			if (r > 1)
			{
				r = 1
			}
			if (r < 0)
			{
				r = 0
			}
			if (this.orientation === "vertical")
			{
				r = 1 - r
			}
			i = this._valueMax() - this._valueMin();
			s = this._valueMin() + r * i;
			return this._trimAlignValue(s)
		},
		_start: function(e, t)
		{
			var n = {
				handle: this.handles[t],
				value: this.value()
			};
			if (this.options.values && this.options.values.length)
			{
				n.value = this.values(t);
				n.values = this.values()
			}
			return this._trigger("start", e, n)
		},
		_slide: function(e, t, n)
		{
			var r, i, s;
			if (this.options.values && this.options.values.length)
			{
				r = this.values(t ? 0 : 1);
				if (this.options.values.length === 2 && this.options.range === true && (t === 0 && n > r || t === 1 && n < r))
				{
					n = r
				}
				if (n !== this.values(t))
				{
					i = this.values();
					i[t] = n;
					s = this._trigger("slide", e,
					{
						handle: this.handles[t],
						value: n,
						values: i
					});
					r = this.values(t ? 0 : 1);
					if (s !== false)
					{
						this.values(t, n, true)
					}
				}
			}
			else
			{
				if (n !== this.value())
				{
					s = this._trigger("slide", e,
					{
						handle: this.handles[t],
						value: n
					});
					if (s !== false)
					{
						this.value(n)
					}
				}
			}
		},
		_stop: function(e, t)
		{
			var n = {
				handle: this.handles[t],
				value: this.value()
			};
			if (this.options.values && this.options.values.length)
			{
				n.value = this.values(t);
				n.values = this.values()
			}
			this._trigger("stop", e, n)
		},
		_change: function(e, t)
		{
			if (!this._keySliding && !this._mouseSliding)
			{
				var n = {
					handle: this.handles[t],
					value: this.value()
				};
				if (this.options.values && this.options.values.length)
				{
					n.value = this.values(t);
					n.values = this.values()
				}
				this._trigger("change", e, n)
			}
		},
		value: function(e)
		{
			if (arguments.length)
			{
				this.options.value = this._trimAlignValue(e);
				this._refreshValue();
				this._change(null, 0);
				return
			}
			return this._value()
		},
		values: function(t, n)
		{
			var r, i, s;
			if (arguments.length > 1)
			{
				this.options.values[t] = this._trimAlignValue(n);
				this._refreshValue();
				this._change(null, t);
				return
			}
			if (arguments.length)
			{
				if (e.isArray(arguments[0]))
				{
					r = this.options.values;
					i = arguments[0];
					for (s = 0; s < r.length; s += 1)
					{
						r[s] = this._trimAlignValue(i[s]);
						this._change(null, s)
					}
					this._refreshValue()
				}
				else
				{
					if (this.options.values && this.options.values.length)
					{
						return this._values(t)
					}
					else
					{
						return this.value()
					}
				}
			}
			else
			{
				return this._values()
			}
		},
		_setOption: function(t, n)
		{
			var r, i = 0;
			if (e.isArray(this.options.values))
			{
				i = this.options.values.length
			}
			e.Widget.prototype._setOption.apply(this, arguments);
			switch (t)
			{
				case "disabled":
					if (n)
					{
						this.handles.filter(".ui-state-focus").blur();
						this.handles.removeClass("ui-state-hover");
						this.handles.prop("disabled", true);
						this.element.addClass("ui-disabled")
					}
					else
					{
						this.handles.prop("disabled", false);
						this.element.removeClass("ui-disabled")
					}
					break;
				case "orientation":
					this._detectOrientation();
					this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
					this._refreshValue();
					break;
				case "value":
					this._animateOff = true;
					this._refreshValue();
					this._change(null, 0);
					this._animateOff = false;
					break;
				case "values":
					this._animateOff = true;
					this._refreshValue();
					for (r = 0; r < i; r += 1)
					{
						this._change(null, r)
					}
					this._animateOff = false;
					break;
				case "min":
				case "max":
					this._animateOff = true;
					this._refreshValue();
					this._animateOff = false;
					break
			}
		},
		_value: function()
		{
			var e = this.options.value;
			e = this._trimAlignValue(e);
			return e
		},
		_values: function(e)
		{
			var t, n, r;
			if (arguments.length)
			{
				t = this.options.values[e];
				t = this._trimAlignValue(t);
				return t
			}
			else
			{
				n = this.options.values.slice();
				for (r = 0; r < n.length; r += 1)
				{
					n[r] = this._trimAlignValue(n[r])
				}
				return n
			}
		},
		_trimAlignValue: function(e)
		{
			if (e <= this._valueMin())
			{
				return this._valueMin()
			}
			if (e >= this._valueMax())
			{
				return this._valueMax()
			}
			var t = this.options.step > 0 ? this.options.step : 1,
				n = (e - this._valueMin()) % t,
				r = e - n;
			if (Math.abs(n) * 2 >= t)
			{
				r += n > 0 ? t : -t
			}
			return parseFloat(r.toFixed(5))
		},
		_valueMin: function()
		{
			return this.options.min
		},
		_valueMax: function()
		{
			return this.options.max
		},
		_refreshValue: function()
		{
			var t, n, r, i, s, o = this.options.range,
				u = this.options,
				a = this,
				f = !this._animateOff ? u.animate : false,
				l = {};
			if (this.options.values && this.options.values.length)
			{
				this.handles.each(function(r)
				{
					n = (a.values(r) - a._valueMin()) / (a._valueMax() - a._valueMin()) * 100;
					l[a.orientation === "horizontal" ? "left" : "bottom"] = n + "%";
					e(this).stop(1, 1)[f ? "animate" : "css"](l, u.animate);
					if (a.options.range === true)
					{
						if (a.orientation === "horizontal")
						{
							if (r === 0)
							{
								a.range.stop(1, 1)[f ? "animate" : "css"](
								{
									left: n + "%"
								}, u.animate)
							}
							if (r === 1)
							{
								a.range[f ? "animate" : "css"](
								{
									width: n - t + "%"
								},
								{
									queue: false,
									duration: u.animate
								})
							}
						}
						else
						{
							if (r === 0)
							{
								a.range.stop(1, 1)[f ? "animate" : "css"](
								{
									bottom: n + "%"
								}, u.animate)
							}
							if (r === 1)
							{
								a.range[f ? "animate" : "css"](
								{
									height: n - t + "%"
								},
								{
									queue: false,
									duration: u.animate
								})
							}
						}
					}
					t = n
				})
			}
			else
			{
				r = this.value();
				i = this._valueMin();
				s = this._valueMax();
				n = s !== i ? (r - i) / (s - i) * 100 : 0;
				l[this.orientation === "horizontal" ? "left" : "bottom"] = n + "%";
				this.handle.stop(1, 1)[f ? "animate" : "css"](l, u.animate);
				if (o === "min" && this.orientation === "horizontal")
				{
					this.range.stop(1, 1)[f ? "animate" : "css"](
					{
						width: n + "%"
					}, u.animate)
				}
				if (o === "max" && this.orientation === "horizontal")
				{
					this.range[f ? "animate" : "css"](
					{
						width: 100 - n + "%"
					},
					{
						queue: false,
						duration: u.animate
					})
				}
				if (o === "min" && this.orientation === "vertical")
				{
					this.range.stop(1, 1)[f ? "animate" : "css"](
					{
						height: n + "%"
					}, u.animate)
				}
				if (o === "max" && this.orientation === "vertical")
				{
					this.range[f ? "animate" : "css"](
					{
						height: 100 - n + "%"
					},
					{
						queue: false,
						duration: u.animate
					})
				}
			}
		}
	})
})(jQuery);
! function(e)
{
	function t(e, t)
	{
		if (!(e.originalEvent.touches.length > 1))
		{
			e.preventDefault();
			var n = e.originalEvent.changedTouches[0],
				r = document.createEvent("MouseEvents");
			r.initMouseEvent(t, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(r)
		}
	}
	if (e.support.touch = "ontouchend" in document, e.support.touch)
	{
		var n, r = e.ui.mouse.prototype,
			i = r._mouseInit,
			s = r._mouseDestroy;
		r._touchStart = function(e)
		{
			var r = this;
			!n && r._mouseCapture(e.originalEvent.changedTouches[0]) && (n = !0, r._touchMoved = !1, t(e, "mouseover"), t(e, "mousemove"), t(e, "mousedown"))
		}, r._touchMove = function(e)
		{
			n && (this._touchMoved = !0, t(e, "mousemove"))
		}, r._touchEnd = function(e)
		{
			n && (t(e, "mouseup"), t(e, "mouseout"), this._touchMoved || t(e, "click"), n = !1)
		}, r._mouseInit = function()
		{
			var t = this;
			t.element.bind(
			{
				touchstart: e.proxy(t, "_touchStart"),
				touchmove: e.proxy(t, "_touchMove"),
				touchend: e.proxy(t, "_touchEnd")
			}), i.call(t)
		}, r._mouseDestroy = function()
		{
			var t = this;
			t.element.unbind(
			{
				touchstart: e.proxy(t, "_touchStart"),
				touchmove: e.proxy(t, "_touchMove"),
				touchend: e.proxy(t, "_touchEnd")
			}), s.call(t)
		}
	}
}(jQuery);
window.Modernizr = function(e, t, n)
{
	function r(e)
	{
		g.cssText = e
	}

	function i(e, t)
	{
		return r(E.join(e + ";") + (t || ""))
	}

	function s(e, t)
	{
		return typeof e === t
	}

	function o(e, t)
	{
		return !!~("" + e).indexOf(t)
	}

	function u(e, t)
	{
		for (var r in e)
		{
			var i = e[r];
			if (!o(i, "-") && g[i] !== n) return t == "pfx" ? i : !0
		}
		return !1
	}

	function a(e, t, r)
	{
		for (var i in e)
		{
			var o = t[e[i]];
			if (o !== n) return r === !1 ? e[i] : s(o, "function") ? o.bind(r || t) : o
		}
		return !1
	}

	function f(e, t, n)
	{
		var r = e.charAt(0).toUpperCase() + e.slice(1),
			i = (e + " " + x.join(r + " ") + r).split(" ");
		return s(t, "string") || s(t, "undefined") ? u(i, t) : (i = (e + " " + T.join(r + " ") + r).split(" "), a(i, t, n))
	}

	function l()
	{
		h.input = function(n)
		{
			for (var r = 0, i = n.length; r < i; r++) L[n[r]] = n[r] in y;
			return L.list && (L.list = !!t.createElement("datalist") && !!e.HTMLDataListElement), L
		}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), h.inputtypes = function(e)
		{
			for (var r = 0, i, s, o, u = e.length; r < u; r++) y.setAttribute("type", s = e[r]), i = y.type !== "text", i && (y.value = b, y.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(s) && y.style.WebkitAppearance !== n ? (d.appendChild(y), o = t.defaultView, i = o.getComputedStyle && o.getComputedStyle(y, null).WebkitAppearance !== "textfield" && y.offsetHeight !== 0, d.removeChild(y)) : /^(search|tel)$/.test(s) || (/^(url|email)$/.test(s) ? i = y.checkValidity && y.checkValidity() === !1 : i = y.value != b)), k[e[r]] = !!i;
			return k
		}("search tel url email datetime date month week time datetime-local number range color".split(" "))
	}
	var c = "2.7.1",
		h = {},
		p = !0,
		d = t.documentElement,
		v = "modernizr",
		m = t.createElement(v),
		g = m.style,
		y = t.createElement("input"),
		b = ":)",
		w = {}.toString,
		E = " -webkit- -moz- -o- -ms- ".split(" "),
		S = "Webkit Moz O ms",
		x = S.split(" "),
		T = S.toLowerCase().split(" "),
		N = {
			svg: "http://www.w3.org/2000/svg"
		},
		C = {},
		k = {},
		L = {},
		A = [],
		O = A.slice,
		M, _ = function(e, n, r, i)
		{
			var s, o, u, a, f = t.createElement("div"),
				l = t.body,
				c = l || t.createElement("body");
			if (parseInt(r, 10))
				while (r--) u = t.createElement("div"), u.id = i ? i[r] : v + (r + 1), f.appendChild(u);
			return s = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), f.id = v, (l ? f : c).innerHTML += s, c.appendChild(f), l || (c.style.background = "", c.style.overflow = "hidden", a = d.style.overflow, d.style.overflow = "hidden", d.appendChild(c)), o = n(f, e), l ? f.parentNode.removeChild(f) : (c.parentNode.removeChild(c), d.style.overflow = a), !!o
		},
		D = function(t)
		{
			var n = e.matchMedia || e.msMatchMedia;
			if (n) return n(t).matches;
			var r;
			return _("@media " + t + " { #" + v + " { position: absolute; } }", function(t)
			{
				r = (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle)["position"] == "absolute"
			}), r
		},
		P = function()
		{
			function e(e, i)
			{
				i = i || t.createElement(r[e] || "div"), e = "on" + e;
				var o = e in i;
				return o || (i.setAttribute || (i = t.createElement("div")), i.setAttribute && i.removeAttribute && (i.setAttribute(e, ""), o = s(i[e], "function"), s(i[e], "undefined") || (i[e] = n), i.removeAttribute(e))), i = null, o
			}
			var r = {
				select: "input",
				change: "input",
				submit: "form",
				reset: "form",
				error: "img",
				load: "img",
				abort: "img"
			};
			return e
		}(),
		H = {}.hasOwnProperty,
		B;
	!s(H, "undefined") && !s(H.call, "undefined") ? B = function(e, t)
	{
		return H.call(e, t)
	} : B = function(e, t)
	{
		return t in e && s(e.constructor.prototype[t], "undefined")
	}, Function.prototype.bind || (Function.prototype.bind = function(e)
	{
		var t = this;
		if (typeof t != "function") throw new TypeError;
		var n = O.call(arguments, 1),
			r = function()
			{
				if (this instanceof r)
				{
					var i = function() {};
					i.prototype = t.prototype;
					var s = new i,
						o = t.apply(s, n.concat(O.call(arguments)));
					return Object(o) === o ? o : s
				}
				return t.apply(e, n.concat(O.call(arguments)))
			};
		return r
	}), C.flexbox = function()
	{
		return f("flexWrap")
	}, C.flexboxlegacy = function()
	{
		return f("boxDirection")
	}, C.canvas = function()
	{
		var e = t.createElement("canvas");
		return !!e.getContext && !!e.getContext("2d")
	}, C.canvastext = function()
	{
		return !!h.canvas && !!s(t.createElement("canvas").getContext("2d").fillText, "function")
	}, C.touch = function()
	{
		var n;
		return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : _(["@media (", E.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e)
		{
			n = e.offsetTop === 9
		}), n
	}, C.geolocation = function()
	{
		return "geolocation" in navigator
	}, C.hashchange = function()
	{
		return P("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
	}, C.history = function()
	{
		return !!e.history && !!history.pushState
	}, C.draganddrop = function()
	{
		var e = t.createElement("div");
		return "draggable" in e || "ondragstart" in e && "ondrop" in e
	}, C.rgba = function()
	{
		return r("background-color:rgba(150,255,150,.5)"), o(g.backgroundColor, "rgba")
	}, C.backgroundsize = function()
	{
		return f("backgroundSize")
	}, C.borderimage = function()
	{
		return f("borderImage")
	}, C.borderradius = function()
	{
		return f("borderRadius")
	}, C.boxshadow = function()
	{
		return f("boxShadow")
	}, C.textshadow = function()
	{
		return t.createElement("div").style.textShadow === ""
	}, C.opacity = function()
	{
		return i("opacity:.55"), /^0.55$/.test(g.opacity)
	}, C.cssanimations = function()
	{
		return f("animationName")
	}, C.csscolumns = function()
	{
		return f("columnCount")
	}, C.cssgradients = function()
	{
		var e = "background-image:",
			t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
			n = "linear-gradient(left top,#9f9, white);";
		return r((e + "-webkit- ".split(" ").join(t + e) + E.join(n + e)).slice(0, -e.length)), o(g.backgroundImage, "gradient")
	}, C.csstransforms = function()
	{
		return !!f("transform")
	}, C.csstransforms3d = function()
	{
		var e = !!f("perspective");
		return e && "webkitPerspective" in d.style && _("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, n)
		{
			e = t.offsetLeft === 9 && t.offsetHeight === 3
		}), e
	}, C.csstransitions = function()
	{
		return f("transition")
	}, C.fontface = function()
	{
		var e;
		return _('@font-face {font-family:"font";src:url("https://")}', function(n, r)
		{
			var i = t.getElementById("smodernizr"),
				s = i.sheet || i.styleSheet,
				o = s ? s.cssRules && s.cssRules[0] ? s.cssRules[0].cssText : s.cssText || "" : "";
			e = /src/i.test(o) && o.indexOf(r.split(" ")[0]) === 0
		}), e
	}, C.generatedcontent = function()
	{
		var e;
		return _(["#", v, "{font:0/0 a}#", v, ':after{content:"', b, '";visibility:hidden;font:3px/1 a}'].join(""), function(t)
		{
			e = t.offsetHeight >= 3
		}), e
	}, C.video = function()
	{
		var e = t.createElement("video"),
			n = !1;
		try
		{
			if (n = !!e.canPlayType) n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
		}
		catch (r)
		{}
		return n
	}, C.audio = function()
	{
		var e = t.createElement("audio"),
			n = !1;
		try
		{
			if (n = !!e.canPlayType) n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, "")
		}
		catch (r)
		{}
		return n
	}, C.localstorage = function()
	{
		try
		{
			return localStorage.setItem(v, v), localStorage.removeItem(v), !0
		}
		catch (e)
		{
			return !1
		}
	}, C.sessionstorage = function()
	{
		try
		{
			return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
		}
		catch (e)
		{
			return !1
		}
	}, C.applicationcache = function()
	{
		return !!e.applicationCache
	}, C.svg = function()
	{
		return !!t.createElementNS && !!t.createElementNS(N.svg, "svg").createSVGRect
	}, C.inlinesvg = function()
	{
		var e = t.createElement("div");
		return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == N.svg
	}, C.svgclippaths = function()
	{
		return !!t.createElementNS && /SVGClipPath/.test(w.call(t.createElementNS(N.svg, "clipPath")))
	};
	for (var j in C) B(C, j) && (M = j.toLowerCase(), h[M] = C[j](), A.push((h[M] ? "" : "no-") + M));
	return h.input || l(), h.addTest = function(e, t)
	{
		if (typeof e == "object")
			for (var r in e) B(e, r) && h.addTest(r, e[r]);
		else
		{
			e = e.toLowerCase();
			if (h[e] !== n) return h;
			t = typeof t == "function" ? t() : t, typeof p != "undefined" && p && (d.className += " " + (t ? "" : "no-") + e), h[e] = t
		}
		return h
	}, r(""), m = y = null, h._version = c, h._prefixes = E, h._domPrefixes = T, h._cssomPrefixes = x, h.mq = D, h.hasEvent = P, h.testProp = function(e)
	{
		return u([e])
	}, h.testAllProps = f, h.testStyles = _, d.className = d.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + A.join(" ") : ""), h
}(this, this.document);
(function()
{
	var e = this,
		t = e._,
		n = {},
		r = Array.prototype,
		i = Object.prototype,
		s = Function.prototype,
		o = r.push,
		u = r.slice,
		a = r.concat,
		f = i.toString,
		l = i.hasOwnProperty,
		c = r.forEach,
		h = r.map,
		p = r.reduce,
		d = r.reduceRight,
		v = r.filter,
		m = r.every,
		g = r.some,
		y = r.indexOf,
		b = r.lastIndexOf,
		w = Array.isArray,
		E = Object.keys,
		S = s.bind,
		x = function(e)
		{
			return e instanceof x ? e : this instanceof x ? (this._wrapped = e, void 0) : new x(e)
		};
	"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.5.2";
	var T = x.each = x.forEach = function(e, t, r)
	{
		if (null != e)
			if (c && e.forEach === c) e.forEach(t, r);
			else if (e.length === +e.length)
		{
			for (var i = 0, s = e.length; s > i; i++)
				if (t.call(r, e[i], i, e) === n) return
		}
		else
			for (var o = x.keys(e), i = 0, s = o.length; s > i; i++)
				if (t.call(r, e[o[i]], o[i], e) === n) return
	};
	x.map = x.collect = function(e, t, n)
	{
		var r = [];
		return null == e ? r : h && e.map === h ? e.map(t, n) : (T(e, function(e, i, s)
		{
			r.push(t.call(n, e, i, s))
		}), r)
	};
	var N = "Reduce of empty array with no initial value";
	x.reduce = x.foldl = x.inject = function(e, t, n, r)
	{
		var i = arguments.length > 2;
		if (null == e && (e = []), p && e.reduce === p) return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
		if (T(e, function(e, s, o)
			{
				i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
			}), !i) throw new TypeError(N);
		return n
	}, x.reduceRight = x.foldr = function(e, t, n, r)
	{
		var i = arguments.length > 2;
		if (null == e && (e = []), d && e.reduceRight === d) return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
		var s = e.length;
		if (s !== +s)
		{
			var o = x.keys(e);
			s = o.length
		}
		if (T(e, function(u, a, f)
			{
				a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i = !0)
			}), !i) throw new TypeError(N);
		return n
	}, x.find = x.detect = function(e, t, n)
	{
		var r;
		return C(e, function(e, i, s)
		{
			return t.call(n, e, i, s) ? (r = e, !0) : void 0
		}), r
	}, x.filter = x.select = function(e, t, n)
	{
		var r = [];
		return null == e ? r : v && e.filter === v ? e.filter(t, n) : (T(e, function(e, i, s)
		{
			t.call(n, e, i, s) && r.push(e)
		}), r)
	}, x.reject = function(e, t, n)
	{
		return x.filter(e, function(e, r, i)
		{
			return !t.call(n, e, r, i)
		}, n)
	}, x.every = x.all = function(e, t, r)
	{
		t || (t = x.identity);
		var i = !0;
		return null == e ? i : m && e.every === m ? e.every(t, r) : (T(e, function(e, s, o)
		{
			return (i = i && t.call(r, e, s, o)) ? void 0 : n
		}), !!i)
	};
	var C = x.some = x.any = function(e, t, r)
	{
		t || (t = x.identity);
		var i = !1;
		return null == e ? i : g && e.some === g ? e.some(t, r) : (T(e, function(e, s, o)
		{
			return i || (i = t.call(r, e, s, o)) ? n : void 0
		}), !!i)
	};
	x.contains = x.include = function(e, t)
	{
		return null == e ? !1 : y && e.indexOf === y ? e.indexOf(t) != -1 : C(e, function(e)
		{
			return e === t
		})
	}, x.invoke = function(e, t)
	{
		var n = u.call(arguments, 2),
			r = x.isFunction(t);
		return x.map(e, function(e)
		{
			return (r ? t : e[t]).apply(e, n)
		})
	}, x.pluck = function(e, t)
	{
		return x.map(e, function(e)
		{
			return e[t]
		})
	}, x.where = function(e, t, n)
	{
		return x.isEmpty(t) ? n ? void 0 : [] : x[n ? "find" : "filter"](e, function(e)
		{
			for (var n in t)
				if (t[n] !== e[n]) return !1;
			return !0
		})
	}, x.findWhere = function(e, t)
	{
		return x.where(e, t, !0)
	}, x.max = function(e, t, n)
	{
		if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
		if (!t && x.isEmpty(e)) return -1 / 0;
		var r = {
			computed: -1 / 0,
			value: -1 / 0
		};
		return T(e, function(e, i, s)
		{
			var o = t ? t.call(n, e, i, s) : e;
			o > r.computed && (r = {
				value: e,
				computed: o
			})
		}), r.value
	}, x.min = function(e, t, n)
	{
		if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
		if (!t && x.isEmpty(e)) return 1 / 0;
		var r = {
			computed: 1 / 0,
			value: 1 / 0
		};
		return T(e, function(e, i, s)
		{
			var o = t ? t.call(n, e, i, s) : e;
			o < r.computed && (r = {
				value: e,
				computed: o
			})
		}), r.value
	}, x.shuffle = function(e)
	{
		var t, n = 0,
			r = [];
		return T(e, function(e)
		{
			t = x.random(n++), r[n - 1] = r[t], r[t] = e
		}), r
	}, x.sample = function(e, t, n)
	{
		return arguments.length < 2 || n ? e[x.random(e.length - 1)] : x.shuffle(e).slice(0, Math.max(0, t))
	};
	var k = function(e)
	{
		return x.isFunction(e) ? e : function(t)
		{
			return t[e]
		}
	};
	x.sortBy = function(e, t, n)
	{
		var r = k(t);
		return x.pluck(x.map(e, function(e, t, i)
		{
			return {
				value: e,
				index: t,
				criteria: r.call(n, e, t, i)
			}
		}).sort(function(e, t)
		{
			var n = e.criteria,
				r = t.criteria;
			if (n !== r)
			{
				if (n > r || n === void 0) return 1;
				if (r > n || r === void 0) return -1
			}
			return e.index - t.index
		}), "value")
	};
	var L = function(e)
	{
		return function(t, n, r)
		{
			var i = {},
				s = null == n ? x.identity : k(n);
			return T(t, function(n, o)
			{
				var u = s.call(r, n, o, t);
				e(i, u, n)
			}), i
		}
	};
	x.groupBy = L(function(e, t, n)
	{
		(x.has(e, t) ? e[t] : e[t] = []).push(n)
	}), x.indexBy = L(function(e, t, n)
	{
		e[t] = n
	}), x.countBy = L(function(e, t)
	{
		x.has(e, t) ? e[t]++ : e[t] = 1
	}), x.sortedIndex = function(e, t, n, r)
	{
		n = null == n ? x.identity : k(n);
		for (var i = n.call(r, t), s = 0, o = e.length; o > s;)
		{
			var u = s + o >>> 1;
			n.call(r, e[u]) < i ? s = u + 1 : o = u
		}
		return s
	}, x.toArray = function(e)
	{
		return e ? x.isArray(e) ? u.call(e) : e.length === +e.length ? x.map(e, x.identity) : x.values(e) : []
	}, x.size = function(e)
	{
		return null == e ? 0 : e.length === +e.length ? e.length : x.keys(e).length
	}, x.first = x.head = x.take = function(e, t, n)
	{
		return null == e ? void 0 : null == t || n ? e[0] : u.call(e, 0, t)
	}, x.initial = function(e, t, n)
	{
		return u.call(e, 0, e.length - (null == t || n ? 1 : t))
	}, x.last = function(e, t, n)
	{
		return null == e ? void 0 : null == t || n ? e[e.length - 1] : u.call(e, Math.max(e.length - t, 0))
	}, x.rest = x.tail = x.drop = function(e, t, n)
	{
		return u.call(e, null == t || n ? 1 : t)
	}, x.compact = function(e)
	{
		return x.filter(e, x.identity)
	};
	var A = function(e, t, n)
	{
		return t && x.every(e, x.isArray) ? a.apply(n, e) : (T(e, function(e)
		{
			x.isArray(e) || x.isArguments(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e)
		}), n)
	};
	x.flatten = function(e, t)
	{
		return A(e, t, [])
	}, x.without = function(e)
	{
		return x.difference(e, u.call(arguments, 1))
	}, x.uniq = x.unique = function(e, t, n, r)
	{
		x.isFunction(t) && (r = n, n = t, t = !1);
		var i = n ? x.map(e, n, r) : e,
			s = [],
			o = [];
		return T(i, function(n, r)
		{
			(t ? r && o[o.length - 1] === n : x.contains(o, n)) || (o.push(n), s.push(e[r]))
		}), s
	}, x.union = function()
	{
		return x.uniq(x.flatten(arguments, !0))
	}, x.intersection = function(e)
	{
		var t = u.call(arguments, 1);
		return x.filter(x.uniq(e), function(e)
		{
			return x.every(t, function(t)
			{
				return x.indexOf(t, e) >= 0
			})
		})
	}, x.difference = function(e)
	{
		var t = a.apply(r, u.call(arguments, 1));
		return x.filter(e, function(e)
		{
			return !x.contains(t, e)
		})
	}, x.zip = function()
	{
		for (var e = x.max(x.pluck(arguments, "length").concat(0)), t = new Array(e), n = 0; e > n; n++) t[n] = x.pluck(arguments, "" + n);
		return t
	}, x.object = function(e, t)
	{
		if (null == e) return {};
		for (var n = {}, r = 0, i = e.length; i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
		return n
	}, x.indexOf = function(e, t, n)
	{
		if (null == e) return -1;
		var r = 0,
			i = e.length;
		if (n)
		{
			if ("number" != typeof n) return r = x.sortedIndex(e, t), e[r] === t ? r : -1;
			r = 0 > n ? Math.max(0, i + n) : n
		}
		if (y && e.indexOf === y) return e.indexOf(t, n);
		for (; i > r; r++)
			if (e[r] === t) return r;
		return -1
	}, x.lastIndexOf = function(e, t, n)
	{
		if (null == e) return -1;
		var r = null != n;
		if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
		for (var i = r ? n : e.length; i--;)
			if (e[i] === t) return i;
		return -1
	}, x.range = function(e, t, n)
	{
		arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
		for (var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, s = new Array(r); r > i;) s[i++] = e, e += n;
		return s
	};
	var O = function() {};
	x.bind = function(e, t)
	{
		var n, r;
		if (S && e.bind === S) return S.apply(e, u.call(arguments, 1));
		if (!x.isFunction(e)) throw new TypeError;
		return n = u.call(arguments, 2), r = function()
		{
			if (!(this instanceof r)) return e.apply(t, n.concat(u.call(arguments)));
			O.prototype = e.prototype;
			var i = new O;
			O.prototype = null;
			var s = e.apply(i, n.concat(u.call(arguments)));
			return Object(s) === s ? s : i
		}
	}, x.partial = function(e)
	{
		var t = u.call(arguments, 1);
		return function()
		{
			return e.apply(this, t.concat(u.call(arguments)))
		}
	}, x.bindAll = function(e)
	{
		var t = u.call(arguments, 1);
		if (0 === t.length) throw new Error("bindAll must be passed function names");
		return T(t, function(t)
		{
			e[t] = x.bind(e[t], e)
		}), e
	}, x.memoize = function(e, t)
	{
		var n = {};
		return t || (t = x.identity),
			function()
			{
				var r = t.apply(this, arguments);
				return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
			}
	}, x.delay = function(e, t)
	{
		var n = u.call(arguments, 2);
		return setTimeout(function()
		{
			return e.apply(null, n)
		}, t)
	}, x.defer = function(e)
	{
		return x.delay.apply(x, [e, 1].concat(u.call(arguments, 1)))
	}, x.throttle = function(e, t, n)
	{
		var r, i, s, o = null,
			u = 0;
		n || (n = {});
		var a = function()
		{
			u = n.leading === !1 ? 0 : new Date, o = null, s = e.apply(r, i)
		};
		return function()
		{
			var f = new Date;
			u || n.leading !== !1 || (u = f);
			var l = t - (f - u);
			return r = this, i = arguments, 0 >= l ? (clearTimeout(o), o = null, u = f, s = e.apply(r, i)) : o || n.trailing === !1 || (o = setTimeout(a, l)), s
		}
	}, x.debounce = function(e, t, n)
	{
		var r, i, s, o, u;
		return function()
		{
			s = this, i = arguments, o = new Date;
			var a = function()
				{
					var f = new Date - o;
					t > f ? r = setTimeout(a, t - f) : (r = null, n || (u = e.apply(s, i)))
				},
				f = n && !r;
			return r || (r = setTimeout(a, t)), f && (u = e.apply(s, i)), u
		}
	}, x.once = function(e)
	{
		var t, n = !1;
		return function()
		{
			return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
		}
	}, x.wrap = function(e, t)
	{
		return function()
		{
			var n = [e];
			return o.apply(n, arguments), t.apply(this, n)
		}
	}, x.compose = function()
	{
		var e = arguments;
		return function()
		{
			for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
			return t[0]
		}
	}, x.after = function(e, t)
	{
		return function()
		{
			return --e < 1 ? t.apply(this, arguments) : void 0
		}
	}, x.keys = E || function(e)
	{
		if (e !== Object(e)) throw new TypeError("Invalid object");
		var t = [];
		for (var n in e) x.has(e, n) && t.push(n);
		return t
	}, x.values = function(e)
	{
		for (var t = x.keys(e), n = t.length, r = new Array(n), i = 0; n > i; i++) r[i] = e[t[i]];
		return r
	}, x.pairs = function(e)
	{
		for (var t = x.keys(e), n = t.length, r = new Array(n), i = 0; n > i; i++) r[i] = [t[i], e[t[i]]];
		return r
	}, x.invert = function(e)
	{
		for (var t = {}, n = x.keys(e), r = 0, i = n.length; i > r; r++) t[e[n[r]]] = n[r];
		return t
	}, x.functions = x.methods = function(e)
	{
		var t = [];
		for (var n in e) x.isFunction(e[n]) && t.push(n);
		return t.sort()
	}, x.extend = function(e)
	{
		return T(u.call(arguments, 1), function(t)
		{
			if (t)
				for (var n in t) e[n] = t[n]
		}), e
	}, x.pick = function(e)
	{
		var t = {},
			n = a.apply(r, u.call(arguments, 1));
		return T(n, function(n)
		{
			n in e && (t[n] = e[n])
		}), t
	}, x.omit = function(e)
	{
		var t = {},
			n = a.apply(r, u.call(arguments, 1));
		for (var i in e) x.contains(n, i) || (t[i] = e[i]);
		return t
	}, x.defaults = function(e)
	{
		return T(u.call(arguments, 1), function(t)
		{
			if (t)
				for (var n in t) e[n] === void 0 && (e[n] = t[n])
		}), e
	}, x.clone = function(e)
	{
		return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend(
		{}, e) : e
	}, x.tap = function(e, t)
	{
		return t(e), e
	};
	var M = function(e, t, n, r)
	{
		if (e === t) return 0 !== e || 1 / e == 1 / t;
		if (null == e || null == t) return e === t;
		e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
		var i = f.call(e);
		if (i != f.call(t)) return !1;
		switch (i)
		{
			case "[object String]":
				return e == String(t);
			case "[object Number]":
				return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
			case "[object Date]":
			case "[object Boolean]":
				return +e == +t;
			case "[object RegExp]":
				return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
		}
		if ("object" != typeof e || "object" != typeof t) return !1;
		for (var s = n.length; s--;)
			if (n[s] == e) return r[s] == t;
		var o = e.constructor,
			u = t.constructor;
		if (o !== u && !(x.isFunction(o) && o instanceof o && x.isFunction(u) && u instanceof u)) return !1;
		n.push(e), r.push(t);
		var a = 0,
			l = !0;
		if ("[object Array]" == i)
		{
			if (a = e.length, l = a == t.length)
				for (; a-- && (l = M(e[a], t[a], n, r)););
		}
		else
		{
			for (var c in e)
				if (x.has(e, c) && (a++, !(l = x.has(t, c) && M(e[c], t[c], n, r)))) break;
			if (l)
			{
				for (c in t)
					if (x.has(t, c) && !(a--)) break;
				l = !a
			}
		}
		return n.pop(), r.pop(), l
	};
	x.isEqual = function(e, t)
	{
		return M(e, t, [], [])
	}, x.isEmpty = function(e)
	{
		if (null == e) return !0;
		if (x.isArray(e) || x.isString(e)) return 0 === e.length;
		for (var t in e)
			if (x.has(e, t)) return !1;
		return !0
	}, x.isElement = function(e)
	{
		return !(!e || 1 !== e.nodeType)
	}, x.isArray = w || function(e)
	{
		return "[object Array]" == f.call(e)
	}, x.isObject = function(e)
	{
		return e === Object(e)
	}, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e)
	{
		x["is" + e] = function(t)
		{
			return f.call(t) == "[object " + e + "]"
		}
	}), x.isArguments(arguments) || (x.isArguments = function(e)
	{
		return !(!e || !x.has(e, "callee"))
	}), "function" != typeof /./ && (x.isFunction = function(e)
	{
		return "function" == typeof e
	}), x.isFinite = function(e)
	{
		return isFinite(e) && !isNaN(parseFloat(e))
	}, x.isNaN = function(e)
	{
		return x.isNumber(e) && e != +e
	}, x.isBoolean = function(e)
	{
		return e === !0 || e === !1 || "[object Boolean]" == f.call(e)
	}, x.isNull = function(e)
	{
		return null === e
	}, x.isUndefined = function(e)
	{
		return e === void 0
	}, x.has = function(e, t)
	{
		return l.call(e, t)
	}, x.noConflict = function()
	{
		return e._ = t, this
	}, x.identity = function(e)
	{
		return e
	}, x.times = function(e, t, n)
	{
		for (var r = Array(Math.max(0, e)), i = 0; e > i; i++) r[i] = t.call(n, i);
		return r
	}, x.random = function(e, t)
	{
		return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
	};
	var _ = {
		escape:
		{
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#x27;"
		}
	};
	_.unescape = x.invert(_.escape);
	var D = {
		escape: new RegExp("[" + x.keys(_.escape).join("") + "]", "g"),
		unescape: new RegExp("(" + x.keys(_.unescape).join("|") + ")", "g")
	};
	x.each(["escape", "unescape"], function(e)
	{
		x[e] = function(t)
		{
			return null == t ? "" : ("" + t).replace(D[e], function(t)
			{
				return _[e][t]
			})
		}
	}), x.result = function(e, t)
	{
		if (null == e) return void 0;
		var n = e[t];
		return x.isFunction(n) ? n.call(e) : n
	}, x.mixin = function(e)
	{
		T(x.functions(e), function(t)
		{
			var n = x[t] = e[t];
			x.prototype[t] = function()
			{
				var e = [this._wrapped];
				return o.apply(e, arguments), F.call(this, n.apply(x, e))
			}
		})
	};
	var P = 0;
	x.uniqueId = function(e)
	{
		var t = ++P + "";
		return e ? e + t : t
	}, x.templateSettings = {
		evaluate: /<%([\s\S]+?)%>/g,
		interpolate: /<%=([\s\S]+?)%>/g,
		escape: /<%-([\s\S]+?)%>/g
	};
	var H = /(.)^/,
		B = {
			"'": "'",
			"\\": "\\",
			"\r": "r",
			"\n": "n",
			" ": "t",
			"\u2028": "u2028",
			"\u2029": "u2029"
		},
		j = /\\|'|\r|\n|\t|\u2028|\u2029/g;
	x.template = function(e, t, n)
	{
		var r;
		n = x.defaults(
		{}, n, x.templateSettings);
		var i = new RegExp([(n.escape || H).source, (n.interpolate || H).source, (n.evaluate || H).source].join("|") + "|$", "g"),
			s = 0,
			o = "__p+='";
		e.replace(i, function(t, n, r, i, u)
		{
			return o += e.slice(s, u).replace(j, function(e)
			{
				return "\\" + B[e]
			}), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (o += "';\n" + i + "\n__p+='"), s = u + t.length, t
		}), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
		try
		{
			r = new Function(n.variable || "obj", "_", o)
		}
		catch (u)
		{
			throw u.source = o, u
		}
		if (t) return r(t, x);
		var a = function(e)
		{
			return r.call(this, e, x)
		};
		return a.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", a
	}, x.chain = function(e)
	{
		return x(e).chain()
	};
	var F = function(e)
	{
		return this._chain ? x(e).chain() : e
	};
	x.mixin(x), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e)
	{
		var t = r[e];
		x.prototype[e] = function()
		{
			var n = this._wrapped;
			return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], F.call(this, n)
		}
	}), T(["concat", "join", "slice"], function(e)
	{
		var t = r[e];
		x.prototype[e] = function()
		{
			return F.call(this, t.apply(this._wrapped, arguments))
		}
	}), x.extend(x.prototype,
	{
		chain: function()
		{
			return this._chain = !0, this
		},
		value: function()
		{
			return this._wrapped
		}
	})
}).call(this);
! function(e, t)
{
	"use strict";

	function n(e, t)
	{
		var n, r, i = e.toLowerCase();
		for (t = [].concat(t), n = 0; t.length > n; n += 1)
			if (r = t[n])
			{
				if (r.test && r.test(e)) return !0;
				if (r.toLowerCase() === i) return !0
			}
	}
	var r = t.prototype.trim,
		i = t.prototype.trimRight,
		s = t.prototype.trimLeft,
		o = function(e)
		{
			return 1 * e || 0
		},
		u = function(e, t)
		{
			if (1 > t) return "";
			for (var n = ""; t > 0;) 1 & t && (n += e), t >>= 1, e += e;
			return n
		},
		a = [].slice,
		f = function(e)
		{
			return null == e ? "\\s" : e.source ? e.source : "[" + d.escapeRegExp(e) + "]"
		},
		l = {
			lt: "<",
			gt: ">",
			quot: '"',
			amp: "&",
			apos: "'"
		},
		c = {};
	for (var h in l) c[l[h]] = h;
	c["'"] = "#39";
	var p = function()
		{
			function e(e)
			{
				return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
			}
			var n = u,
				r = function()
				{
					return r.cache.hasOwnProperty(arguments[0]) || (r.cache[arguments[0]] = r.parse(arguments[0])), r.format.call(null, r.cache[arguments[0]], arguments)
				};
			return r.format = function(r, i)
			{
				var s, o, u, a, f, l, c, h = 1,
					d = r.length,
					v = "",
					m = [];
				for (o = 0; d > o; o++)
					if (v = e(r[o]), "string" === v) m.push(r[o]);
					else if ("array" === v)
				{
					if (a = r[o], a[2])
						for (s = i[h], u = 0; a[2].length > u; u++)
						{
							if (!s.hasOwnProperty(a[2][u])) throw new Error(p('[_.sprintf] property "%s" does not exist', a[2][u]));
							s = s[a[2][u]]
						}
					else s = a[1] ? i[a[1]] : i[h++];
					if (/[^s]/.test(a[8]) && "number" != e(s)) throw new Error(p("[_.sprintf] expecting number but found %s", e(s)));
					switch (a[8])
					{
						case "b":
							s = s.toString(2);
							break;
						case "c":
							s = t.fromCharCode(s);
							break;
						case "d":
							s = parseInt(s, 10);
							break;
						case "e":
							s = a[7] ? s.toExponential(a[7]) : s.toExponential();
							break;
						case "f":
							s = a[7] ? parseFloat(s).toFixed(a[7]) : parseFloat(s);
							break;
						case "o":
							s = s.toString(8);
							break;
						case "s":
							s = (s = t(s)) && a[7] ? s.substring(0, a[7]) : s;
							break;
						case "u":
							s = Math.abs(s);
							break;
						case "x":
							s = s.toString(16);
							break;
						case "X":
							s = s.toString(16).toUpperCase()
					}
					s = /[def]/.test(a[8]) && a[3] && s >= 0 ? "+" + s : s, l = a[4] ? "0" == a[4] ? "0" : a[4].charAt(1) : " ", c = a[6] - t(s).length, f = a[6] ? n(l, c) : "", m.push(a[5] ? s + f : f + s)
				}
				return m.join("")
			}, r.cache = {}, r.parse = function(e)
			{
				for (var t = e, n = [], r = [], i = 0; t;)
				{
					if (null !== (n = /^[^\x25]+/.exec(t))) r.push(n[0]);
					else if (null !== (n = /^\x25{2}/.exec(t))) r.push("%");
					else
					{
						if (null === (n = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t))) throw new Error("[_.sprintf] huh?");
						if (n[2])
						{
							i |= 1;
							var s = [],
								o = n[2],
								u = [];
							if (null === (u = /^([a-z_][a-z_\d]*)/i.exec(o))) throw new Error("[_.sprintf] huh?");
							for (s.push(u[1]);
								"" !== (o = o.substring(u[0].length));)
								if (null !== (u = /^\.([a-z_][a-z_\d]*)/i.exec(o))) s.push(u[1]);
								else
								{
									if (null === (u = /^\[(\d+)\]/.exec(o))) throw new Error("[_.sprintf] huh?");
									s.push(u[1])
								}
							n[2] = s
						}
						else i |= 2;
						if (3 === i) throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");
						r.push(n)
					}
					t = t.substring(n[0].length)
				}
				return r
			}, r
		}(),
		d = {
			VERSION: "2.3.0",
			isBlank: function(e)
			{
				return null == e && (e = ""), /^\s*$/.test(e)
			},
			stripTags: function(e)
			{
				return null == e ? "" : t(e).replace(/<\/?[^>]+>/g, "")
			},
			capitalize: function(e)
			{
				return e = null == e ? "" : t(e), e.charAt(0).toUpperCase() + e.slice(1)
			},
			chop: function(e, n)
			{
				return null == e ? [] : (e = t(e), n = ~~n, n > 0 ? e.match(new RegExp(".{1," + n + "}", "g")) : [e])
			},
			clean: function(e)
			{
				return d.strip(e).replace(/\s+/g, " ")
			},
			count: function(e, n)
			{
				if (null == e || null == n) return 0;
				e = t(e), n = t(n);
				for (var r = 0, i = 0, s = n.length;;)
				{
					if (i = e.indexOf(n, i), -1 === i) break;
					r++, i += s
				}
				return r
			},
			chars: function(e)
			{
				return null == e ? [] : t(e).split("")
			},
			swapCase: function(e)
			{
				return null == e ? "" : t(e).replace(/\S/g, function(e)
				{
					return e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()
				})
			},
			escapeHTML: function(e)
			{
				return null == e ? "" : t(e).replace(/[&<>"']/g, function(e)
				{
					return "&" + c[e] + ";"
				})
			},
			unescapeHTML: function(e)
			{
				return null == e ? "" : t(e).replace(/\&([^;]+);/g, function(e, n)
				{
					var r;
					return n in l ? l[n] : (r = n.match(/^#x([\da-fA-F]+)$/)) ? t.fromCharCode(parseInt(r[1], 16)) : (r = n.match(/^#(\d+)$/)) ? t.fromCharCode(~~r[1]) : e
				})
			},
			escapeRegExp: function(e)
			{
				return null == e ? "" : t(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
			},
			splice: function(e, t, n, r)
			{
				var i = d.chars(e);
				return i.splice(~~t, ~~n, r), i.join("")
			},
			insert: function(e, t, n)
			{
				return d.splice(e, t, 0, n)
			},
			include: function(e, n)
			{
				return "" === n ? !0 : null == e ? !1 : -1 !== t(e).indexOf(n)
			},
			join: function()
			{
				var e = a.call(arguments),
					t = e.shift();
				return null == t && (t = ""), e.join(t)
			},
			lines: function(e)
			{
				return null == e ? [] : t(e).split("\n")
			},
			reverse: function(e)
			{
				return d.chars(e).reverse().join("")
			},
			startsWith: function(e, n)
			{
				return "" === n ? !0 : null == e || null == n ? !1 : (e = t(e), n = t(n), e.length >= n.length && e.slice(0, n.length) === n)
			},
			endsWith: function(e, n)
			{
				return "" === n ? !0 : null == e || null == n ? !1 : (e = t(e), n = t(n), e.length >= n.length && e.slice(e.length - n.length) === n)
			},
			succ: function(e)
			{
				return null == e ? "" : (e = t(e), e.slice(0, -1) + t.fromCharCode(e.charCodeAt(e.length - 1) + 1))
			},
			titleize: function(e)
			{
				return null == e ? "" : (e = t(e).toLowerCase(), e.replace(/(?:^|\s|-)\S/g, function(e)
				{
					return e.toUpperCase()
				}))
			},
			camelize: function(e)
			{
				return d.trim(e).replace(/[-_\s]+(.)?/g, function(e, t)
				{
					return t ? t.toUpperCase() : ""
				})
			},
			underscored: function(e)
			{
				return d.trim(e).replace(/([a-z\d])([A-Z]+)/g, "$1_$2").replace(/[-\s]+/g, "_").toLowerCase()
			},
			dasherize: function(e)
			{
				return d.trim(e).replace(/([A-Z])/g, "-$1").replace(/[-_\s]+/g, "-").toLowerCase()
			},
			classify: function(e)
			{
				return d.titleize(t(e).replace(/[\W_]/g, " ")).replace(/\s/g, "")
			},
			humanize: function(e)
			{
				return d.capitalize(d.underscored(e).replace(/_id$/, "").replace(/_/g, " "))
			},
			trim: function(e, n)
			{
				return null == e ? "" : !n && r ? r.call(e) : (n = f(n), t(e).replace(new RegExp("^" + n + "+|" + n + "+$", "g"), ""))
			},
			ltrim: function(e, n)
			{
				return null == e ? "" : !n && s ? s.call(e) : (n = f(n), t(e).replace(new RegExp("^" + n + "+"), ""))
			},
			rtrim: function(e, n)
			{
				return null == e ? "" : !n && i ? i.call(e) : (n = f(n), t(e).replace(new RegExp(n + "+$"), ""))
			},
			truncate: function(e, n, r)
			{
				return null == e ? "" : (e = t(e), r = r || "...", n = ~~n, e.length > n ? e.slice(0, n) + r : e)
			},
			prune: function(e, n, r)
			{
				if (null == e) return "";
				if (e = t(e), n = ~~n, r = null != r ? t(r) : "...", n >= e.length) return e;
				var i = function(e)
					{
						return e.toUpperCase() !== e.toLowerCase() ? "A" : " "
					},
					s = e.slice(0, n + 1).replace(/.(?=\W*\w*$)/g, i);
				return s = s.slice(s.length - 2).match(/\w\w/) ? s.replace(/\s*\S+$/, "") : d.rtrim(s.slice(0, s.length - 1)), (s + r).length > e.length ? e : e.slice(0, s.length) + r
			},
			words: function(e, t)
			{
				return d.isBlank(e) ? [] : d.trim(e, t).split(t || /\s+/)
			},
			pad: function(e, n, r, i)
			{
				e = null == e ? "" : t(e), n = ~~n;
				var s = 0;
				switch (r ? r.length > 1 && (r = r.charAt(0)) : r = " ", i)
				{
					case "right":
						return s = n - e.length, e + u(r, s);
					case "both":
						return s = n - e.length, u(r, Math.ceil(s / 2)) + e + u(r, Math.floor(s / 2));
					default:
						return s = n - e.length, u(r, s) + e
				}
			},
			lpad: function(e, t, n)
			{
				return d.pad(e, t, n)
			},
			rpad: function(e, t, n)
			{
				return d.pad(e, t, n, "right")
			},
			lrpad: function(e, t, n)
			{
				return d.pad(e, t, n, "both")
			},
			sprintf: p,
			vsprintf: function(e, t)
			{
				return t.unshift(e), p.apply(null, t)
			},
			toNumber: function(e, t)
			{
				return e ? (e = d.trim(e), e.match(/^-?\d+(?:\.\d+)?$/) ? o(o(e).toFixed(~~t)) : 0 / 0) : 0
			},
			numberFormat: function(e, t, n, r)
			{
				if (isNaN(e) || null == e) return "";
				e = e.toFixed(~~t), r = "string" == typeof r ? r : ",";
				var i = e.split("."),
					s = i[0],
					o = i[1] ? (n || ".") + i[1] : "";
				return s.replace(/(\d)(?=(?:\d{3})+$)/g, "$1" + r) + o
			},
			strRight: function(e, n)
			{
				if (null == e) return "";
				e = t(e), n = null != n ? t(n) : n;
				var r = n ? e.indexOf(n) : -1;
				return ~r ? e.slice(r + n.length, e.length) : e
			},
			strRightBack: function(e, n)
			{
				if (null == e) return "";
				e = t(e), n = null != n ? t(n) : n;
				var r = n ? e.lastIndexOf(n) : -1;
				return ~r ? e.slice(r + n.length, e.length) : e
			},
			strLeft: function(e, n)
			{
				if (null == e) return "";
				e = t(e), n = null != n ? t(n) : n;
				var r = n ? e.indexOf(n) : -1;
				return ~r ? e.slice(0, r) : e
			},
			strLeftBack: function(e, t)
			{
				if (null == e) return "";
				e += "", t = null != t ? "" + t : t;
				var n = e.lastIndexOf(t);
				return ~n ? e.slice(0, n) : e
			},
			toSentence: function(e, t, n, r)
			{
				t = t || ", ", n = n || " and ";
				var i = e.slice(),
					s = i.pop();
				return e.length > 2 && r && (n = d.rtrim(t) + n), i.length ? i.join(t) + n + s : s
			},
			toSentenceSerial: function()
			{
				var e = a.call(arguments);
				return e[3] = !0, d.toSentence.apply(d, e)
			},
			slugify: function(e)
			{
				if (null == e) return "";
				var n = "ąàáäâãåæăćęèéëêìíïîłńòóöôõøśșțùúüûñçżź",
					r = "aaaaaaaaaceeeeeiiiilnoooooosstuuuunczz",
					i = new RegExp(f(n), "g");
				return e = t(e).toLowerCase().replace(i, function(e)
				{
					var t = n.indexOf(e);
					return r.charAt(t) || "-"
				}), d.dasherize(e.replace(/[^\w\s-]/g, ""))
			},
			surround: function(e, t)
			{
				return [t, e, t].join("")
			},
			quote: function(e, t)
			{
				return d.surround(e, t || '"')
			},
			unquote: function(e, t)
			{
				return t = t || '"', e[0] === t && e[e.length - 1] === t ? e.slice(1, e.length - 1) : e
			},
			exports: function()
			{
				var e = {};
				for (var t in this) this.hasOwnProperty(t) && !t.match(/^(?:include|contains|reverse)$/) && (e[t] = this[t]);
				return e
			},
			repeat: function(e, n, r)
			{
				if (null == e) return "";
				if (n = ~~n, null == r) return u(t(e), n);
				for (var i = []; n > 0; i[--n] = e);
				return i.join(r)
			},
			naturalCmp: function(e, n)
			{
				if (e == n) return 0;
				if (!e) return -1;
				if (!n) return 1;
				for (var r = /(\.\d+)|(\d+)|(\D+)/g, i = t(e).toLowerCase().match(r), s = t(n).toLowerCase().match(r), o = Math.min(i.length, s.length), u = 0; o > u; u++)
				{
					var a = i[u],
						f = s[u];
					if (a !== f)
					{
						var l = parseInt(a, 10);
						if (!isNaN(l))
						{
							var c = parseInt(f, 10);
							if (!isNaN(c) && l - c) return l - c
						}
						return f > a ? -1 : 1
					}
				}
				return i.length === s.length ? i.length - s.length : n > e ? -1 : 1
			},
			levenshtein: function(e, n)
			{
				if (null == e && null == n) return 0;
				if (null == e) return t(n).length;
				if (null == n) return t(e).length;
				e = t(e), n = t(n);
				for (var r, i, s = [], o = 0; n.length >= o; o++)
					for (var u = 0; e.length >= u; u++) i = o && u ? e.charAt(u - 1) === n.charAt(o - 1) ? r : Math.min(s[u], s[u - 1], r) + 1 : o + u, r = s[u], s[u] = i;
				return s.pop()
			},
			toBoolean: function(e, t, r)
			{
				return "number" == typeof e && (e = "" + e), "string" != typeof e ? !!e : (e = d.trim(e), n(e, t || ["true", "1"]) ? !0 : n(e, r || ["false", "0"]) ? !1 : void 0)
			}
		};
	d.strip = d.trim, d.lstrip = d.ltrim, d.rstrip = d.rtrim, d.center = d.lrpad, d.rjust = d.lpad, d.ljust = d.rpad, d.contains = d.include, d.q = d.quote, d.toBool = d.toBoolean, "undefined" != typeof exports && ("undefined" != typeof module && module.exports && (module.exports = d), exports._s = d), "function" == typeof define && define.amd && define("underscore.string", [], function()
	{
		return d
	}), e._ = e._ ||
	{}, e._.string = e._.str = d
}(this, String);
_.mixin(_.str.exports());
var Handlebars = function()
{
	var e = function()
	{
		"use strict";

		function t(e)
		{
			this.string = e
		}
		var e;
		t.prototype.toString = function()
		{
			return "" + this.string
		};
		e = t;
		return e
	}();
	var t = function(e)
	{
		"use strict";

		function o(e)
		{
			return r[e] || "&amp;"
		}

		function u(e, t)
		{
			for (var n in t)
			{
				if (Object.prototype.hasOwnProperty.call(t, n))
				{
					e[n] = t[n]
				}
			}
		}

		function c(e)
		{
			if (e instanceof n)
			{
				return e.toString()
			}
			else if (!e && e !== 0)
			{
				return ""
			}
			e = "" + e;
			if (!s.test(e))
			{
				return e
			}
			return e.replace(i, o)
		}

		function h(e)
		{
			if (!e && e !== 0)
			{
				return true
			}
			else if (l(e) && e.length === 0)
			{
				return true
			}
			else
			{
				return false
			}
		}
		var t = {};
		var n = e;
		var r = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#x27;",
			"`": "&#x60;"
		};
		var i = /[&<>"'`]/g;
		var s = /[&<>"'`]/;
		t.extend = u;
		var a = Object.prototype.toString;
		t.toString = a;
		var f = function(e)
		{
			return typeof e === "function"
		};
		if (f(/x/))
		{
			f = function(e)
			{
				return typeof e === "function" && a.call(e) === "[object Function]"
			}
		}
		var f;
		t.isFunction = f;
		var l = Array.isArray || function(e)
		{
			return e && typeof e === "object" ? a.call(e) === "[object Array]" : false
		};
		t.isArray = l;
		t.escapeExpression = c;
		t.isEmpty = h;
		return t
	}(e);
	var n = function()
	{
		"use strict";

		function n(e, n)
		{
			var r;
			if (n && n.firstLine)
			{
				r = n.firstLine;
				e += " - " + r + ":" + n.firstColumn
			}
			var i = Error.prototype.constructor.call(this, e);
			for (var s = 0; s < t.length; s++)
			{
				this[t[s]] = i[t[s]]
			}
			if (r)
			{
				this.lineNumber = r;
				this.column = n.firstColumn
			}
		}
		var e;
		var t = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
		n.prototype = new Error;
		e = n;
		return e
	}();
	var r = function(e, t)
	{
		"use strict";

		function h(e, t)
		{
			this.helpers = e ||
			{};
			this.partials = t ||
			{};
			p(this)
		}

		function p(e)
		{
			e.registerHelper("helperMissing", function(e)
			{
				if (arguments.length === 2)
				{
					return undefined
				}
				else
				{
					throw new i("Missing helper: '" + e + "'")
				}
			});
			e.registerHelper("blockHelperMissing", function(t, n)
			{
				var r = n.inverse || function() {},
					i = n.fn;
				if (f(t))
				{
					t = t.call(this)
				}
				if (t === true)
				{
					return i(this)
				}
				else if (t === false || t == null)
				{
					return r(this)
				}
				else if (a(t))
				{
					if (t.length > 0)
					{
						return e.helpers.each(t, n)
					}
					else
					{
						return r(this)
					}
				}
				else
				{
					return i(t)
				}
			});
			e.registerHelper("each", function(e, t)
			{
				var n = t.fn,
					r = t.inverse;
				var i = 0,
					s = "",
					o;
				if (f(e))
				{
					e = e.call(this)
				}
				if (t.data)
				{
					o = m(t.data)
				}
				if (e && typeof e === "object")
				{
					if (a(e))
					{
						for (var u = e.length; i < u; i++)
						{
							if (o)
							{
								o.index = i;
								o.first = i === 0;
								o.last = i === e.length - 1
							}
							s = s + n(e[i],
							{
								data: o
							})
						}
					}
					else
					{
						for (var l in e)
						{
							if (e.hasOwnProperty(l))
							{
								if (o)
								{
									o.key = l;
									o.index = i;
									o.first = i === 0
								}
								s = s + n(e[l],
								{
									data: o
								});
								i++
							}
						}
					}
				}
				if (i === 0)
				{
					s = r(this)
				}
				return s
			});
			e.registerHelper("if", function(e, t)
			{
				if (f(e))
				{
					e = e.call(this)
				}
				if (!t.hash.includeZero && !e || r.isEmpty(e))
				{
					return t.inverse(this)
				}
				else
				{
					return t.fn(this)
				}
			});
			e.registerHelper("unless", function(t, n)
			{
				return e.helpers["if"].call(this, t,
				{
					fn: n.inverse,
					inverse: n.fn,
					hash: n.hash
				})
			});
			e.registerHelper("with", function(e, t)
			{
				if (f(e))
				{
					e = e.call(this)
				}
				if (!r.isEmpty(e)) return t.fn(e)
			});
			e.registerHelper("log", function(t, n)
			{
				var r = n.data && n.data.level != null ? parseInt(n.data.level, 10) : 1;
				e.log(r, t)
			})
		}

		function v(e, t)
		{
			d.log(e, t)
		}
		var n = {};
		var r = e;
		var i = t;
		var s = "1.3.0";
		n.VERSION = s;
		var o = 4;
		n.COMPILER_REVISION = o;
		var u = {
			1: "<= 1.0.rc.2",
			2: "== 1.0.0-rc.3",
			3: "== 1.0.0-rc.4",
			4: ">= 1.0.0"
		};
		n.REVISION_CHANGES = u;
		var a = r.isArray,
			f = r.isFunction,
			l = r.toString,
			c = "[object Object]";
		n.HandlebarsEnvironment = h;
		h.prototype = {
			constructor: h,
			logger: d,
			log: v,
			registerHelper: function(e, t, n)
			{
				if (l.call(e) === c)
				{
					if (n || t)
					{
						throw new i("Arg not supported with multiple helpers")
					}
					r.extend(this.helpers, e)
				}
				else
				{
					if (n)
					{
						t.not = n
					}
					this.helpers[e] = t
				}
			},
			registerPartial: function(e, t)
			{
				if (l.call(e) === c)
				{
					r.extend(this.partials, e)
				}
				else
				{
					this.partials[e] = t
				}
			}
		};
		var d = {
			methodMap:
			{
				0: "debug",
				1: "info",
				2: "warn",
				3: "error"
			},
			DEBUG: 0,
			INFO: 1,
			WARN: 2,
			ERROR: 3,
			level: 3,
			log: function(e, t)
			{
				if (d.level <= e)
				{
					var n = d.methodMap[e];
					if (typeof console !== "undefined" && console[n])
					{
						console[n].call(console, t)
					}
				}
			}
		};
		n.logger = d;
		n.log = v;
		var m = function(e)
		{
			var t = {};
			r.extend(t, e);
			return t
		};
		n.createFrame = m;
		return n
	}(t, n);
	var i = function(e, t, n)
	{
		"use strict";

		function a(e)
		{
			var t = e && e[0] || 1,
				n = o;
			if (t !== n)
			{
				if (t < n)
				{
					var r = u[n],
						i = u[t];
					throw new s("Template was precompiled with an older version of Handlebars than the current runtime. " + "Please update your precompiler to a newer version (" + r + ") or downgrade your runtime to an older version (" + i + ").")
				}
				else
				{
					throw new s("Template was precompiled with a newer version of Handlebars than the current runtime. " + "Please update your runtime to a newer version (" + e[1] + ").")
				}
			}
		}

		function f(e, t)
		{
			if (!t)
			{
				throw new s("No environment passed to template")
			}
			var n = function(e, n, r, i, o, u)
			{
				var a = t.VM.invokePartial.apply(this, arguments);
				if (a != null)
				{
					return a
				}
				if (t.compile)
				{
					var f = {
						helpers: i,
						partials: o,
						data: u
					};
					o[n] = t.compile(e,
					{
						data: u !== undefined
					}, t);
					return o[n](r, f)
				}
				else
				{
					throw new s("The partial " + n + " could not be compiled when running in runtime-only mode")
				}
			};
			var r = {
				escapeExpression: i.escapeExpression,
				invokePartial: n,
				programs: [],
				program: function(e, t, n)
				{
					var r = this.programs[e];
					if (n)
					{
						r = c(e, t, n)
					}
					else if (!r)
					{
						r = this.programs[e] = c(e, t)
					}
					return r
				},
				merge: function(e, t)
				{
					var n = e || t;
					if (e && t && e !== t)
					{
						n = {};
						i.extend(n, t);
						i.extend(n, e)
					}
					return n
				},
				programWithDepth: t.VM.programWithDepth,
				noop: t.VM.noop,
				compilerInfo: null
			};
			return function(n, i)
			{
				i = i ||
				{};
				var s = i.partial ? i : t,
					o, u;
				if (!i.partial)
				{
					o = i.helpers;
					u = i.partials
				}
				var a = e.call(r, s, n, o, u, i.data);
				if (!i.partial)
				{
					t.VM.checkRevision(r.compilerInfo)
				}
				return a
			}
		}

		function l(e, t, n)
		{
			var r = Array.prototype.slice.call(arguments, 3);
			var i = function(e, i)
			{
				i = i ||
				{};
				return t.apply(this, [e, i.data || n].concat(r))
			};
			i.program = e;
			i.depth = r.length;
			return i
		}

		function c(e, t, n)
		{
			var r = function(e, r)
			{
				r = r ||
				{};
				return t(e, r.data || n)
			};
			r.program = e;
			r.depth = 0;
			return r
		}

		function h(e, t, n, r, i, o)
		{
			var u = {
				partial: true,
				helpers: r,
				partials: i,
				data: o
			};
			if (e === undefined)
			{
				throw new s("The partial " + t + " could not be found")
			}
			else if (e instanceof Function)
			{
				return e(n, u)
			}
		}

		function p()
		{
			return ""
		}
		var r = {};
		var i = e;
		var s = t;
		var o = n.COMPILER_REVISION;
		var u = n.REVISION_CHANGES;
		r.checkRevision = a;
		r.template = f;
		r.programWithDepth = l;
		r.program = c;
		r.invokePartial = h;
		r.noop = p;
		return r
	}(t, n, r);
	var s = function(e, t, n, r, i)
	{
		"use strict";
		var s;
		var o = e;
		var u = t;
		var a = n;
		var f = r;
		var l = i;
		var c = function()
		{
			var e = new o.HandlebarsEnvironment;
			f.extend(e, o);
			e.SafeString = u;
			e.Exception = a;
			e.Utils = f;
			e.VM = l;
			e.template = function(t)
			{
				return l.template(t, e)
			};
			return e
		};
		var h = c();
		h.create = c;
		s = h;
		return s
	}(r, e, n, t, i);
	var o = function(e)
	{
		"use strict";

		function r(e)
		{
			e = e ||
			{};
			this.firstLine = e.first_line;
			this.firstColumn = e.first_column;
			this.lastColumn = e.last_column;
			this.lastLine = e.last_line
		}
		var t;
		var n = e;
		var i = {
			ProgramNode: function(e, t, n, s)
			{
				var o, u;
				if (arguments.length === 3)
				{
					s = n;
					n = null
				}
				else if (arguments.length === 2)
				{
					s = t;
					t = null
				}
				r.call(this, s);
				this.type = "program";
				this.statements = e;
				this.strip = {};
				if (n)
				{
					u = n[0];
					if (u)
					{
						o = {
							first_line: u.firstLine,
							last_line: u.lastLine,
							last_column: u.lastColumn,
							first_column: u.firstColumn
						};
						this.inverse = new i.ProgramNode(n, t, o)
					}
					else
					{
						this.inverse = new i.ProgramNode(n, t)
					}
					this.strip.right = t.left
				}
				else if (t)
				{
					this.strip.left = t.right
				}
			},
			MustacheNode: function(e, t, n, s, o)
			{
				r.call(this, o);
				this.type = "mustache";
				this.strip = s;
				if (n != null && n.charAt)
				{
					var u = n.charAt(3) || n.charAt(2);
					this.escaped = u !== "{" && u !== "&"
				}
				else
				{
					this.escaped = !!n
				}
				if (e instanceof i.SexprNode)
				{
					this.sexpr = e
				}
				else
				{
					this.sexpr = new i.SexprNode(e, t)
				}
				this.sexpr.isRoot = true;
				this.id = this.sexpr.id;
				this.params = this.sexpr.params;
				this.hash = this.sexpr.hash;
				this.eligibleHelper = this.sexpr.eligibleHelper;
				this.isHelper = this.sexpr.isHelper
			},
			SexprNode: function(e, t, n)
			{
				r.call(this, n);
				this.type = "sexpr";
				this.hash = t;
				var i = this.id = e[0];
				var s = this.params = e.slice(1);
				var o = this.eligibleHelper = i.isSimple;
				this.isHelper = o && (s.length || t)
			},
			PartialNode: function(e, t, n, i)
			{
				r.call(this, i);
				this.type = "partial";
				this.partialName = e;
				this.context = t;
				this.strip = n
			},
			BlockNode: function(e, t, i, s, o)
			{
				r.call(this, o);
				if (e.sexpr.id.original !== s.path.original)
				{
					throw new n(e.sexpr.id.original + " doesn't match " + s.path.original, this)
				}
				this.type = "block";
				this.mustache = e;
				this.program = t;
				this.inverse = i;
				this.strip = {
					left: e.strip.left,
					right: s.strip.right
				};
				(t || i).strip.left = e.strip.right;
				(i || t).strip.right = s.strip.left;
				if (i && !t)
				{
					this.isInverse = true
				}
			},
			ContentNode: function(e, t)
			{
				r.call(this, t);
				this.type = "content";
				this.string = e
			},
			HashNode: function(e, t)
			{
				r.call(this, t);
				this.type = "hash";
				this.pairs = e
			},
			IdNode: function(e, t)
			{
				r.call(this, t);
				this.type = "ID";
				var i = "",
					s = [],
					o = 0;
				for (var u = 0, a = e.length; u < a; u++)
				{
					var f = e[u].part;
					i += (e[u].separator || "") + f;
					if (f === ".." || f === "." || f === "this")
					{
						if (s.length > 0)
						{
							throw new n("Invalid path: " + i, this)
						}
						else if (f === "..")
						{
							o++
						}
						else
						{
							this.isScoped = true
						}
					}
					else
					{
						s.push(f)
					}
				}
				this.original = i;
				this.parts = s;
				this.string = s.join(".");
				this.depth = o;
				this.isSimple = e.length === 1 && !this.isScoped && o === 0;
				this.stringModeValue = this.string
			},
			PartialNameNode: function(e, t)
			{
				r.call(this, t);
				this.type = "PARTIAL_NAME";
				this.name = e.original
			},
			DataNode: function(e, t)
			{
				r.call(this, t);
				this.type = "DATA";
				this.id = e
			},
			StringNode: function(e, t)
			{
				r.call(this, t);
				this.type = "STRING";
				this.original = this.string = this.stringModeValue = e
			},
			IntegerNode: function(e, t)
			{
				r.call(this, t);
				this.type = "INTEGER";
				this.original = this.integer = e;
				this.stringModeValue = Number(e)
			},
			BooleanNode: function(e, t)
			{
				r.call(this, t);
				this.type = "BOOLEAN";
				this.bool = e;
				this.stringModeValue = e === "true"
			},
			CommentNode: function(e, t)
			{
				r.call(this, t);
				this.type = "comment";
				this.comment = e
			}
		};
		t = i;
		return t
	}(n);
	var u = function()
	{
		"use strict";
		var e;
		var t = function()
		{
			function t(e, t)
			{
				return {
					left: e.charAt(2) === "~",
					right: t.charAt(0) === "~" || t.charAt(1) === "~"
				}
			}

			function r()
			{
				this.yy = {}
			}
			var e = {
				trace: function() {},
				yy:
				{},
				symbols_:
				{
					error: 2,
					root: 3,
					statements: 4,
					EOF: 5,
					program: 6,
					simpleInverse: 7,
					statement: 8,
					openInverse: 9,
					closeBlock: 10,
					openBlock: 11,
					mustache: 12,
					partial: 13,
					CONTENT: 14,
					COMMENT: 15,
					OPEN_BLOCK: 16,
					sexpr: 17,
					CLOSE: 18,
					OPEN_INVERSE: 19,
					OPEN_ENDBLOCK: 20,
					path: 21,
					OPEN: 22,
					OPEN_UNESCAPED: 23,
					CLOSE_UNESCAPED: 24,
					OPEN_PARTIAL: 25,
					partialName: 26,
					partial_option0: 27,
					sexpr_repetition0: 28,
					sexpr_option0: 29,
					dataName: 30,
					param: 31,
					STRING: 32,
					INTEGER: 33,
					BOOLEAN: 34,
					OPEN_SEXPR: 35,
					CLOSE_SEXPR: 36,
					hash: 37,
					hash_repetition_plus0: 38,
					hashSegment: 39,
					ID: 40,
					EQUALS: 41,
					DATA: 42,
					pathSegments: 43,
					SEP: 44,
					$accept: 0,
					$end: 1
				},
				terminals_:
				{
					2: "error",
					5: "EOF",
					14: "CONTENT",
					15: "COMMENT",
					16: "OPEN_BLOCK",
					18: "CLOSE",
					19: "OPEN_INVERSE",
					20: "OPEN_ENDBLOCK",
					22: "OPEN",
					23: "OPEN_UNESCAPED",
					24: "CLOSE_UNESCAPED",
					25: "OPEN_PARTIAL",
					32: "STRING",
					33: "INTEGER",
					34: "BOOLEAN",
					35: "OPEN_SEXPR",
					36: "CLOSE_SEXPR",
					40: "ID",
					41: "EQUALS",
					42: "DATA",
					44: "SEP"
				},
				productions_: [0, [3, 2],
					[3, 1],
					[6, 2],
					[6, 3],
					[6, 2],
					[6, 1],
					[6, 1],
					[6, 0],
					[4, 1],
					[4, 2],
					[8, 3],
					[8, 3],
					[8, 1],
					[8, 1],
					[8, 1],
					[8, 1],
					[11, 3],
					[9, 3],
					[10, 3],
					[12, 3],
					[12, 3],
					[13, 4],
					[7, 2],
					[17, 3],
					[17, 1],
					[31, 1],
					[31, 1],
					[31, 1],
					[31, 1],
					[31, 1],
					[31, 3],
					[37, 1],
					[39, 3],
					[26, 1],
					[26, 1],
					[26, 1],
					[30, 2],
					[21, 1],
					[43, 3],
					[43, 1],
					[27, 0],
					[27, 1],
					[28, 0],
					[28, 2],
					[29, 0],
					[29, 1],
					[38, 1],
					[38, 2]
				],
				performAction: function(n, r, i, s, o, u, a)
				{
					var f = u.length - 1;
					switch (o)
					{
						case 1:
							return new s.ProgramNode(u[f - 1], this._$);
							break;
						case 2:
							return new s.ProgramNode([], this._$);
							break;
						case 3:
							this.$ = new s.ProgramNode([], u[f - 1], u[f], this._$);
							break;
						case 4:
							this.$ = new s.ProgramNode(u[f - 2], u[f - 1], u[f], this._$);
							break;
						case 5:
							this.$ = new s.ProgramNode(u[f - 1], u[f], [], this._$);
							break;
						case 6:
							this.$ = new s.ProgramNode(u[f], this._$);
							break;
						case 7:
							this.$ = new s.ProgramNode([], this._$);
							break;
						case 8:
							this.$ = new s.ProgramNode([], this._$);
							break;
						case 9:
							this.$ = [u[f]];
							break;
						case 10:
							u[f - 1].push(u[f]);
							this.$ = u[f - 1];
							break;
						case 11:
							this.$ = new s.BlockNode(u[f - 2], u[f - 1].inverse, u[f - 1], u[f], this._$);
							break;
						case 12:
							this.$ = new s.BlockNode(u[f - 2], u[f - 1], u[f - 1].inverse, u[f], this._$);
							break;
						case 13:
							this.$ = u[f];
							break;
						case 14:
							this.$ = u[f];
							break;
						case 15:
							this.$ = new s.ContentNode(u[f], this._$);
							break;
						case 16:
							this.$ = new s.CommentNode(u[f], this._$);
							break;
						case 17:
							this.$ = new s.MustacheNode(u[f - 1], null, u[f - 2], t(u[f - 2], u[f]), this._$);
							break;
						case 18:
							this.$ = new s.MustacheNode(u[f - 1], null, u[f - 2], t(u[f - 2], u[f]), this._$);
							break;
						case 19:
							this.$ = {
								path: u[f - 1],
								strip: t(u[f - 2], u[f])
							};
							break;
						case 20:
							this.$ = new s.MustacheNode(u[f - 1], null, u[f - 2], t(u[f - 2], u[f]), this._$);
							break;
						case 21:
							this.$ = new s.MustacheNode(u[f - 1], null, u[f - 2], t(u[f - 2], u[f]), this._$);
							break;
						case 22:
							this.$ = new s.PartialNode(u[f - 2], u[f - 1], t(u[f - 3], u[f]), this._$);
							break;
						case 23:
							this.$ = t(u[f - 1], u[f]);
							break;
						case 24:
							this.$ = new s.SexprNode([u[f - 2]].concat(u[f - 1]), u[f], this._$);
							break;
						case 25:
							this.$ = new s.SexprNode([u[f]], null, this._$);
							break;
						case 26:
							this.$ = u[f];
							break;
						case 27:
							this.$ = new s.StringNode(u[f], this._$);
							break;
						case 28:
							this.$ = new s.IntegerNode(u[f], this._$);
							break;
						case 29:
							this.$ = new s.BooleanNode(u[f], this._$);
							break;
						case 30:
							this.$ = u[f];
							break;
						case 31:
							u[f - 1].isHelper = true;
							this.$ = u[f - 1];
							break;
						case 32:
							this.$ = new s.HashNode(u[f], this._$);
							break;
						case 33:
							this.$ = [u[f - 2], u[f]];
							break;
						case 34:
							this.$ = new s.PartialNameNode(u[f], this._$);
							break;
						case 35:
							this.$ = new s.PartialNameNode(new s.StringNode(u[f], this._$), this._$);
							break;
						case 36:
							this.$ = new s.PartialNameNode(new s.IntegerNode(u[f], this._$));
							break;
						case 37:
							this.$ = new s.DataNode(u[f], this._$);
							break;
						case 38:
							this.$ = new s.IdNode(u[f], this._$);
							break;
						case 39:
							u[f - 2].push(
							{
								part: u[f],
								separator: u[f - 1]
							});
							this.$ = u[f - 2];
							break;
						case 40:
							this.$ = [
							{
								part: u[f]
							}];
							break;
						case 43:
							this.$ = [];
							break;
						case 44:
							u[f - 1].push(u[f]);
							break;
						case 47:
							this.$ = [u[f]];
							break;
						case 48:
							u[f - 1].push(u[f]);
							break
					}
				},
				table: [
				{
					3: 1,
					4: 2,
					5: [1, 3],
					8: 4,
					9: 5,
					11: 6,
					12: 7,
					13: 8,
					14: [1, 9],
					15: [1, 10],
					16: [1, 12],
					19: [1, 11],
					22: [1, 13],
					23: [1, 14],
					25: [1, 15]
				},
				{
					1: [3]
				},
				{
					5: [1, 16],
					8: 17,
					9: 5,
					11: 6,
					12: 7,
					13: 8,
					14: [1, 9],
					15: [1, 10],
					16: [1, 12],
					19: [1, 11],
					22: [1, 13],
					23: [1, 14],
					25: [1, 15]
				},
				{
					1: [2, 2]
				},
				{
					5: [2, 9],
					14: [2, 9],
					15: [2, 9],
					16: [2, 9],
					19: [2, 9],
					20: [2, 9],
					22: [2, 9],
					23: [2, 9],
					25: [2, 9]
				},
				{
					4: 20,
					6: 18,
					7: 19,
					8: 4,
					9: 5,
					11: 6,
					12: 7,
					13: 8,
					14: [1, 9],
					15: [1, 10],
					16: [1, 12],
					19: [1, 21],
					20: [2, 8],
					22: [1, 13],
					23: [1, 14],
					25: [1, 15]
				},
				{
					4: 20,
					6: 22,
					7: 19,
					8: 4,
					9: 5,
					11: 6,
					12: 7,
					13: 8,
					14: [1, 9],
					15: [1, 10],
					16: [1, 12],
					19: [1, 21],
					20: [2, 8],
					22: [1, 13],
					23: [1, 14],
					25: [1, 15]
				},
				{
					5: [2, 13],
					14: [2, 13],
					15: [2, 13],
					16: [2, 13],
					19: [2, 13],
					20: [2, 13],
					22: [2, 13],
					23: [2, 13],
					25: [2, 13]
				},
				{
					5: [2, 14],
					14: [2, 14],
					15: [2, 14],
					16: [2, 14],
					19: [2, 14],
					20: [2, 14],
					22: [2, 14],
					23: [2, 14],
					25: [2, 14]
				},
				{
					5: [2, 15],
					14: [2, 15],
					15: [2, 15],
					16: [2, 15],
					19: [2, 15],
					20: [2, 15],
					22: [2, 15],
					23: [2, 15],
					25: [2, 15]
				},
				{
					5: [2, 16],
					14: [2, 16],
					15: [2, 16],
					16: [2, 16],
					19: [2, 16],
					20: [2, 16],
					22: [2, 16],
					23: [2, 16],
					25: [2, 16]
				},
				{
					17: 23,
					21: 24,
					30: 25,
					40: [1, 28],
					42: [1, 27],
					43: 26
				},
				{
					17: 29,
					21: 24,
					30: 25,
					40: [1, 28],
					42: [1, 27],
					43: 26
				},
				{
					17: 30,
					21: 24,
					30: 25,
					40: [1, 28],
					42: [1, 27],
					43: 26
				},
				{
					17: 31,
					21: 24,
					30: 25,
					40: [1, 28],
					42: [1, 27],
					43: 26
				},
				{
					21: 33,
					26: 32,
					32: [1, 34],
					33: [1, 35],
					40: [1, 28],
					43: 26
				},
				{
					1: [2, 1]
				},
				{
					5: [2, 10],
					14: [2, 10],
					15: [2, 10],
					16: [2, 10],
					19: [2, 10],
					20: [2, 10],
					22: [2, 10],
					23: [2, 10],
					25: [2, 10]
				},
				{
					10: 36,
					20: [1, 37]
				},
				{
					4: 38,
					8: 4,
					9: 5,
					11: 6,
					12: 7,
					13: 8,
					14: [1, 9],
					15: [1, 10],
					16: [1, 12],
					19: [1, 11],
					20: [2, 7],
					22: [1, 13],
					23: [1, 14],
					25: [1, 15]
				},
				{
					7: 39,
					8: 17,
					9: 5,
					11: 6,
					12: 7,
					13: 8,
					14: [1, 9],
					15: [1, 10],
					16: [1, 12],
					19: [1, 21],
					20: [2, 6],
					22: [1, 13],
					23: [1, 14],
					25: [1, 15]
				},
				{
					17: 23,
					18: [1, 40],
					21: 24,
					30: 25,
					40: [1, 28],
					42: [1, 27],
					43: 26
				},
				{
					10: 41,
					20: [1, 37]
				},
				{
					18: [1, 42]
				},
				{
					18: [2, 43],
					24: [2, 43],
					28: 43,
					32: [2, 43],
					33: [2, 43],
					34: [2, 43],
					35: [2, 43],
					36: [2, 43],
					40: [2, 43],
					42: [2, 43]
				},
				{
					18: [2, 25],
					24: [2, 25],
					36: [2, 25]
				},
				{
					18: [2, 38],
					24: [2, 38],
					32: [2, 38],
					33: [2, 38],
					34: [2, 38],
					35: [2, 38],
					36: [2, 38],
					40: [2, 38],
					42: [2, 38],
					44: [1, 44]
				},
				{
					21: 45,
					40: [1, 28],
					43: 26
				},
				{
					18: [2, 40],
					24: [2, 40],
					32: [2, 40],
					33: [2, 40],
					34: [2, 40],
					35: [2, 40],
					36: [2, 40],
					40: [2, 40],
					42: [2, 40],
					44: [2, 40]
				},
				{
					18: [1, 46]
				},
				{
					18: [1, 47]
				},
				{
					24: [1, 48]
				},
				{
					18: [2, 41],
					21: 50,
					27: 49,
					40: [1, 28],
					43: 26
				},
				{
					18: [2, 34],
					40: [2, 34]
				},
				{
					18: [2, 35],
					40: [2, 35]
				},
				{
					18: [2, 36],
					40: [2, 36]
				},
				{
					5: [2, 11],
					14: [2, 11],
					15: [2, 11],
					16: [2, 11],
					19: [2, 11],
					20: [2, 11],
					22: [2, 11],
					23: [2, 11],
					25: [2, 11]
				},
				{
					21: 51,
					40: [1, 28],
					43: 26
				},
				{
					8: 17,
					9: 5,
					11: 6,
					12: 7,
					13: 8,
					14: [1, 9],
					15: [1, 10],
					16: [1, 12],
					19: [1, 11],
					20: [2, 3],
					22: [1, 13],
					23: [1, 14],
					25: [1, 15]
				},
				{
					4: 52,
					8: 4,
					9: 5,
					11: 6,
					12: 7,
					13: 8,
					14: [1, 9],
					15: [1, 10],
					16: [1, 12],
					19: [1, 11],
					20: [2, 5],
					22: [1, 13],
					23: [1, 14],
					25: [1, 15]
				},
				{
					14: [2, 23],
					15: [2, 23],
					16: [2, 23],
					19: [2, 23],
					20: [2, 23],
					22: [2, 23],
					23: [2, 23],
					25: [2, 23]
				},
				{
					5: [2, 12],
					14: [2, 12],
					15: [2, 12],
					16: [2, 12],
					19: [2, 12],
					20: [2, 12],
					22: [2, 12],
					23: [2, 12],
					25: [2, 12]
				},
				{
					14: [2, 18],
					15: [2, 18],
					16: [2, 18],
					19: [2, 18],
					20: [2, 18],
					22: [2, 18],
					23: [2, 18],
					25: [2, 18]
				},
				{
					18: [2, 45],
					21: 56,
					24: [2, 45],
					29: 53,
					30: 60,
					31: 54,
					32: [1, 57],
					33: [1, 58],
					34: [1, 59],
					35: [1, 61],
					36: [2, 45],
					37: 55,
					38: 62,
					39: 63,
					40: [1, 64],
					42: [1, 27],
					43: 26
				},
				{
					40: [1, 65]
				},
				{
					18: [2, 37],
					24: [2, 37],
					32: [2, 37],
					33: [2, 37],
					34: [2, 37],
					35: [2, 37],
					36: [2, 37],
					40: [2, 37],
					42: [2, 37]
				},
				{
					14: [2, 17],
					15: [2, 17],
					16: [2, 17],
					19: [2, 17],
					20: [2, 17],
					22: [2, 17],
					23: [2, 17],
					25: [2, 17]
				},
				{
					5: [2, 20],
					14: [2, 20],
					15: [2, 20],
					16: [2, 20],
					19: [2, 20],
					20: [2, 20],
					22: [2, 20],
					23: [2, 20],
					25: [2, 20]
				},
				{
					5: [2, 21],
					14: [2, 21],
					15: [2, 21],
					16: [2, 21],
					19: [2, 21],
					20: [2, 21],
					22: [2, 21],
					23: [2, 21],
					25: [2, 21]
				},
				{
					18: [1, 66]
				},
				{
					18: [2, 42]
				},
				{
					18: [1, 67]
				},
				{
					8: 17,
					9: 5,
					11: 6,
					12: 7,
					13: 8,
					14: [1, 9],
					15: [1, 10],
					16: [1, 12],
					19: [1, 11],
					20: [2, 4],
					22: [1, 13],
					23: [1, 14],
					25: [1, 15]
				},
				{
					18: [2, 24],
					24: [2, 24],
					36: [2, 24]
				},
				{
					18: [2, 44],
					24: [2, 44],
					32: [2, 44],
					33: [2, 44],
					34: [2, 44],
					35: [2, 44],
					36: [2, 44],
					40: [2, 44],
					42: [2, 44]
				},
				{
					18: [2, 46],
					24: [2, 46],
					36: [2, 46]
				},
				{
					18: [2, 26],
					24: [2, 26],
					32: [2, 26],
					33: [2, 26],
					34: [2, 26],
					35: [2, 26],
					36: [2, 26],
					40: [2, 26],
					42: [2, 26]
				},
				{
					18: [2, 27],
					24: [2, 27],
					32: [2, 27],
					33: [2, 27],
					34: [2, 27],
					35: [2, 27],
					36: [2, 27],
					40: [2, 27],
					42: [2, 27]
				},
				{
					18: [2, 28],
					24: [2, 28],
					32: [2, 28],
					33: [2, 28],
					34: [2, 28],
					35: [2, 28],
					36: [2, 28],
					40: [2, 28],
					42: [2, 28]
				},
				{
					18: [2, 29],
					24: [2, 29],
					32: [2, 29],
					33: [2, 29],
					34: [2, 29],
					35: [2, 29],
					36: [2, 29],
					40: [2, 29],
					42: [2, 29]
				},
				{
					18: [2, 30],
					24: [2, 30],
					32: [2, 30],
					33: [2, 30],
					34: [2, 30],
					35: [2, 30],
					36: [2, 30],
					40: [2, 30],
					42: [2, 30]
				},
				{
					17: 68,
					21: 24,
					30: 25,
					40: [1, 28],
					42: [1, 27],
					43: 26
				},
				{
					18: [2, 32],
					24: [2, 32],
					36: [2, 32],
					39: 69,
					40: [1, 70]
				},
				{
					18: [2, 47],
					24: [2, 47],
					36: [2, 47],
					40: [2, 47]
				},
				{
					18: [2, 40],
					24: [2, 40],
					32: [2, 40],
					33: [2, 40],
					34: [2, 40],
					35: [2, 40],
					36: [2, 40],
					40: [2, 40],
					41: [1, 71],
					42: [2, 40],
					44: [2, 40]
				},
				{
					18: [2, 39],
					24: [2, 39],
					32: [2, 39],
					33: [2, 39],
					34: [2, 39],
					35: [2, 39],
					36: [2, 39],
					40: [2, 39],
					42: [2, 39],
					44: [2, 39]
				},
				{
					5: [2, 22],
					14: [2, 22],
					15: [2, 22],
					16: [2, 22],
					19: [2, 22],
					20: [2, 22],
					22: [2, 22],
					23: [2, 22],
					25: [2, 22]
				},
				{
					5: [2, 19],
					14: [2, 19],
					15: [2, 19],
					16: [2, 19],
					19: [2, 19],
					20: [2, 19],
					22: [2, 19],
					23: [2, 19],
					25: [2, 19]
				},
				{
					36: [1, 72]
				},
				{
					18: [2, 48],
					24: [2, 48],
					36: [2, 48],
					40: [2, 48]
				},
				{
					41: [1, 71]
				},
				{
					21: 56,
					30: 60,
					31: 73,
					32: [1, 57],
					33: [1, 58],
					34: [1, 59],
					35: [1, 61],
					40: [1, 28],
					42: [1, 27],
					43: 26
				},
				{
					18: [2, 31],
					24: [2, 31],
					32: [2, 31],
					33: [2, 31],
					34: [2, 31],
					35: [2, 31],
					36: [2, 31],
					40: [2, 31],
					42: [2, 31]
				},
				{
					18: [2, 33],
					24: [2, 33],
					36: [2, 33],
					40: [2, 33]
				}],
				defaultActions:
				{
					3: [2, 2],
					16: [2, 1],
					50: [2, 42]
				},
				parseError: function(t, n)
				{
					throw new Error(t)
				},
				parse: function(t)
				{
					function v(e)
					{
						r.length = r.length - 2 * e;
						i.length = i.length - e;
						s.length = s.length - e
					}

					function m()
					{
						var e;
						e = n.lexer.lex() || 1;
						if (typeof e !== "number")
						{
							e = n.symbols_[e] || e
						}
						return e
					}
					var n = this,
						r = [0],
						i = [null],
						s = [],
						o = this.table,
						u = "",
						a = 0,
						f = 0,
						l = 0,
						c = 2,
						h = 1;
					this.lexer.setInput(t);
					this.lexer.yy = this.yy;
					this.yy.lexer = this.lexer;
					this.yy.parser = this;
					if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
					var p = this.lexer.yylloc;
					s.push(p);
					var d = this.lexer.options && this.lexer.options.ranges;
					if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
					var g, y, b, w, E, S, x = {},
						T, N, C, k;
					while (true)
					{
						b = r[r.length - 1];
						if (this.defaultActions[b])
						{
							w = this.defaultActions[b]
						}
						else
						{
							if (g === null || typeof g == "undefined")
							{
								g = m()
							}
							w = o[b] && o[b][g]
						}
						if (typeof w === "undefined" || !w.length || !w[0])
						{
							var L = "";
							if (!l)
							{
								k = [];
								for (T in o[b])
									if (this.terminals_[T] && T > 2)
									{
										k.push("'" + this.terminals_[T] + "'")
									}
								if (this.lexer.showPosition)
								{
									L = "Parse error on line " + (a + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + k.join(", ") + ", got '" + (this.terminals_[g] || g) + "'"
								}
								else
								{
									L = "Parse error on line " + (a + 1) + ": Unexpected " + (g == 1 ? "end of input" : "'" + (this.terminals_[g] || g) + "'")
								}
								this.parseError(L,
								{
									text: this.lexer.match,
									token: this.terminals_[g] || g,
									line: this.lexer.yylineno,
									loc: p,
									expected: k
								})
							}
						}
						if (w[0] instanceof Array && w.length > 1)
						{
							throw new Error("Parse Error: multiple actions possible at state: " + b + ", token: " + g)
						}
						switch (w[0])
						{
							case 1:
								r.push(g);
								i.push(this.lexer.yytext);
								s.push(this.lexer.yylloc);
								r.push(w[1]);
								g = null;
								if (!y)
								{
									f = this.lexer.yyleng;
									u = this.lexer.yytext;
									a = this.lexer.yylineno;
									p = this.lexer.yylloc;
									if (l > 0) l--
								}
								else
								{
									g = y;
									y = null
								}
								break;
							case 2:
								N = this.productions_[w[1]][1];
								x.$ = i[i.length - N];
								x._$ = {
									first_line: s[s.length - (N || 1)].first_line,
									last_line: s[s.length - 1].last_line,
									first_column: s[s.length - (N || 1)].first_column,
									last_column: s[s.length - 1].last_column
								};
								if (d)
								{
									x._$.range = [s[s.length - (N || 1)].range[0], s[s.length - 1].range[1]]
								}
								S = this.performAction.call(x, u, f, a, this.yy, w[1], i, s);
								if (typeof S !== "undefined")
								{
									return S
								}
								if (N)
								{
									r = r.slice(0, -1 * N * 2);
									i = i.slice(0, -1 * N);
									s = s.slice(0, -1 * N)
								}
								r.push(this.productions_[w[1]][0]);
								i.push(x.$);
								s.push(x._$);
								C = o[r[r.length - 2]][r[r.length - 1]];
								r.push(C);
								break;
							case 3:
								return true
						}
					}
					return true
				}
			};
			var n = function()
			{
				var e = {
					EOF: 1,
					parseError: function(t, n)
					{
						if (this.yy.parser)
						{
							this.yy.parser.parseError(t, n)
						}
						else
						{
							throw new Error(t)
						}
					},
					setInput: function(e)
					{
						this._input = e;
						this._more = this._less = this.done = false;
						this.yylineno = this.yyleng = 0;
						this.yytext = this.matched = this.match = "";
						this.conditionStack = ["INITIAL"];
						this.yylloc = {
							first_line: 1,
							first_column: 0,
							last_line: 1,
							last_column: 0
						};
						if (this.options.ranges) this.yylloc.range = [0, 0];
						this.offset = 0;
						return this
					},
					input: function()
					{
						var e = this._input[0];
						this.yytext += e;
						this.yyleng++;
						this.offset++;
						this.match += e;
						this.matched += e;
						var t = e.match(/(?:\r\n?|\n).*/g);
						if (t)
						{
							this.yylineno++;
							this.yylloc.last_line++
						}
						else
						{
							this.yylloc.last_column++
						}
						if (this.options.ranges) this.yylloc.range[1]++;
						this._input = this._input.slice(1);
						return e
					},
					unput: function(e)
					{
						var t = e.length;
						var n = e.split(/(?:\r\n?|\n)/g);
						this._input = e + this._input;
						this.yytext = this.yytext.substr(0, this.yytext.length - t - 1);
						this.offset -= t;
						var r = this.match.split(/(?:\r\n?|\n)/g);
						this.match = this.match.substr(0, this.match.length - 1);
						this.matched = this.matched.substr(0, this.matched.length - 1);
						if (n.length - 1) this.yylineno -= n.length - 1;
						var i = this.yylloc.range;
						this.yylloc = {
							first_line: this.yylloc.first_line,
							last_line: this.yylineno + 1,
							first_column: this.yylloc.first_column,
							last_column: n ? (n.length === r.length ? this.yylloc.first_column : 0) + r[r.length - n.length].length - n[0].length : this.yylloc.first_column - t
						};
						if (this.options.ranges)
						{
							this.yylloc.range = [i[0], i[0] + this.yyleng - t]
						}
						return this
					},
					more: function()
					{
						this._more = true;
						return this
					},
					less: function(e)
					{
						this.unput(this.match.slice(e))
					},
					pastInput: function()
					{
						var e = this.matched.substr(0, this.matched.length - this.match.length);
						return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
					},
					upcomingInput: function()
					{
						var e = this.match;
						if (e.length < 20)
						{
							e += this._input.substr(0, 20 - e.length)
						}
						return (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
					},
					showPosition: function()
					{
						var e = this.pastInput();
						var t = (new Array(e.length + 1)).join("-");
						return e + this.upcomingInput() + "\n" + t + "^"
					},
					next: function()
					{
						if (this.done)
						{
							return this.EOF
						}
						if (!this._input) this.done = true;
						var e, t, n, r, i, s;
						if (!this._more)
						{
							this.yytext = "";
							this.match = ""
						}
						var o = this._currentRules();
						for (var u = 0; u < o.length; u++)
						{
							n = this._input.match(this.rules[o[u]]);
							if (n && (!t || n[0].length > t[0].length))
							{
								t = n;
								r = u;
								if (!this.options.flex) break
							}
						}
						if (t)
						{
							s = t[0].match(/(?:\r\n?|\n).*/g);
							if (s) this.yylineno += s.length;
							this.yylloc = {
								first_line: this.yylloc.last_line,
								last_line: this.yylineno + 1,
								first_column: this.yylloc.last_column,
								last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
							};
							this.yytext += t[0];
							this.match += t[0];
							this.matches = t;
							this.yyleng = this.yytext.length;
							if (this.options.ranges)
							{
								this.yylloc.range = [this.offset, this.offset += this.yyleng]
							}
							this._more = false;
							this._input = this._input.slice(t[0].length);
							this.matched += t[0];
							e = this.performAction.call(this, this.yy, this, o[r], this.conditionStack[this.conditionStack.length - 1]);
							if (this.done && this._input) this.done = false;
							if (e) return e;
							else return
						}
						if (this._input === "")
						{
							return this.EOF
						}
						else
						{
							return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(),
							{
								text: "",
								token: null,
								line: this.yylineno
							})
						}
					},
					lex: function()
					{
						var t = this.next();
						if (typeof t !== "undefined")
						{
							return t
						}
						else
						{
							return this.lex()
						}
					},
					begin: function(t)
					{
						this.conditionStack.push(t)
					},
					popState: function()
					{
						return this.conditionStack.pop()
					},
					_currentRules: function()
					{
						return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
					},
					topState: function()
					{
						return this.conditionStack[this.conditionStack.length - 2]
					},
					pushState: function(t)
					{
						this.begin(t)
					}
				};
				e.options = {};
				e.performAction = function(t, n, r, i)
				{
					function s(e, t)
					{
						return n.yytext = n.yytext.substr(e, n.yyleng - t)
					}
					var o = i;
					switch (r)
					{
						case 0:
							if (n.yytext.slice(-2) === "\\\\")
							{
								s(0, 1);
								this.begin("mu")
							}
							else if (n.yytext.slice(-1) === "\\")
							{
								s(0, 1);
								this.begin("emu")
							}
							else
							{
								this.begin("mu")
							}
							if (n.yytext) return 14;
							break;
						case 1:
							return 14;
							break;
						case 2:
							this.popState();
							return 14;
							break;
						case 3:
							s(0, 4);
							this.popState();
							return 15;
							break;
						case 4:
							return 35;
							break;
						case 5:
							return 36;
							break;
						case 6:
							return 25;
							break;
						case 7:
							return 16;
							break;
						case 8:
							return 20;
							break;
						case 9:
							return 19;
							break;
						case 10:
							return 19;
							break;
						case 11:
							return 23;
							break;
						case 12:
							return 22;
							break;
						case 13:
							this.popState();
							this.begin("com");
							break;
						case 14:
							s(3, 5);
							this.popState();
							return 15;
							break;
						case 15:
							return 22;
							break;
						case 16:
							return 41;
							break;
						case 17:
							return 40;
							break;
						case 18:
							return 40;
							break;
						case 19:
							return 44;
							break;
						case 20:
							break;
						case 21:
							this.popState();
							return 24;
							break;
						case 22:
							this.popState();
							return 18;
							break;
						case 23:
							n.yytext = s(1, 2).replace(/\\"/g, '"');
							return 32;
							break;
						case 24:
							n.yytext = s(1, 2).replace(/\\'/g, "'");
							return 32;
							break;
						case 25:
							return 42;
							break;
						case 26:
							return 34;
							break;
						case 27:
							return 34;
							break;
						case 28:
							return 33;
							break;
						case 29:
							return 40;
							break;
						case 30:
							n.yytext = s(1, 2);
							return 40;
							break;
						case 31:
							return "INVALID";
							break;
						case 32:
							return 5;
							break
					}
				};
				e.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?=([~}\s)])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/];
				e.conditions = {
					mu:
					{
						rules: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
						inclusive: false
					},
					emu:
					{
						rules: [2],
						inclusive: false
					},
					com:
					{
						rules: [3],
						inclusive: false
					},
					INITIAL:
					{
						rules: [0, 1, 32],
						inclusive: true
					}
				};
				return e
			}();
			e.lexer = n;
			r.prototype = e;
			e.Parser = r;
			return new r
		}();
		e = t;
		return e
	}();
	var a = function(e, t)
	{
		"use strict";

		function s(e)
		{
			if (e.constructor === i.ProgramNode)
			{
				return e
			}
			r.yy = i;
			return r.parse(e)
		}
		var n = {};
		var r = e;
		var i = t;
		n.parser = r;
		n.parse = s;
		return n
	}(u, o);
	var f = function(e)
	{
		"use strict";

		function r()
		{}

		function i(e, t, r)
		{
			if (e == null || typeof e !== "string" && e.constructor !== r.AST.ProgramNode)
			{
				throw new n("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + e)
			}
			t = t ||
			{};
			if (!("data" in t))
			{
				t.data = true
			}
			var i = r.parse(e);
			var s = (new r.Compiler).compile(i, t);
			return (new r.JavaScriptCompiler).compile(s, t)
		}

		function s(e, t, r)
		{
			function s()
			{
				var n = r.parse(e);
				var i = (new r.Compiler).compile(n, t);
				var s = (new r.JavaScriptCompiler).compile(i, t, undefined, true);
				return r.template(s)
			}
			if (e == null || typeof e !== "string" && e.constructor !== r.AST.ProgramNode)
			{
				throw new n("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + e)
			}
			t = t ||
			{};
			if (!("data" in t))
			{
				t.data = true
			}
			var i;
			return function(e, t)
			{
				if (!i)
				{
					i = s()
				}
				return i.call(this, e, t)
			}
		}
		var t = {};
		var n = e;
		t.Compiler = r;
		r.prototype = {
			compiler: r,
			disassemble: function()
			{
				var e = this.opcodes,
					t, n = [],
					r, i;
				for (var s = 0, o = e.length; s < o; s++)
				{
					t = e[s];
					if (t.opcode === "DECLARE")
					{
						n.push("DECLARE " + t.name + "=" + t.value)
					}
					else
					{
						r = [];
						for (var u = 0; u < t.args.length; u++)
						{
							i = t.args[u];
							if (typeof i === "string")
							{
								i = '"' + i.replace("\n", "\\n") + '"'
							}
							r.push(i)
						}
						n.push(t.opcode + " " + r.join(" "))
					}
				}
				return n.join("\n")
			},
			equals: function(e)
			{
				var t = this.opcodes.length;
				if (e.opcodes.length !== t)
				{
					return false
				}
				for (var n = 0; n < t; n++)
				{
					var r = this.opcodes[n],
						i = e.opcodes[n];
					if (r.opcode !== i.opcode || r.args.length !== i.args.length)
					{
						return false
					}
					for (var s = 0; s < r.args.length; s++)
					{
						if (r.args[s] !== i.args[s])
						{
							return false
						}
					}
				}
				t = this.children.length;
				if (e.children.length !== t)
				{
					return false
				}
				for (n = 0; n < t; n++)
				{
					if (!this.children[n].equals(e.children[n]))
					{
						return false
					}
				}
				return true
			},
			guid: 0,
			compile: function(e, t)
			{
				this.opcodes = [];
				this.children = [];
				this.depths = {
					list: []
				};
				this.options = t;
				var n = this.options.knownHelpers;
				this.options.knownHelpers = {
					helperMissing: true,
					blockHelperMissing: true,
					each: true,
					"if": true,
					unless: true,
					"with": true,
					log: true
				};
				if (n)
				{
					for (var r in n)
					{
						this.options.knownHelpers[r] = n[r]
					}
				}
				return this.accept(e)
			},
			accept: function(e)
			{
				var t = e.strip ||
					{},
					n;
				if (t.left)
				{
					this.opcode("strip")
				}
				n = this[e.type](e);
				if (t.right)
				{
					this.opcode("strip")
				}
				return n
			},
			program: function(e)
			{
				var t = e.statements;
				for (var n = 0, r = t.length; n < r; n++)
				{
					this.accept(t[n])
				}
				this.isSimple = r === 1;
				this.depths.list = this.depths.list.sort(function(e, t)
				{
					return e - t
				});
				return this
			},
			compileProgram: function(e)
			{
				var t = (new this.compiler).compile(e, this.options);
				var n = this.guid++,
					r;
				this.usePartial = this.usePartial || t.usePartial;
				this.children[n] = t;
				for (var i = 0, s = t.depths.list.length; i < s; i++)
				{
					r = t.depths.list[i];
					if (r < 2)
					{
						continue
					}
					else
					{
						this.addDepth(r - 1)
					}
				}
				return n
			},
			block: function(e)
			{
				var t = e.mustache,
					n = e.program,
					r = e.inverse;
				if (n)
				{
					n = this.compileProgram(n)
				}
				if (r)
				{
					r = this.compileProgram(r)
				}
				var i = t.sexpr;
				var s = this.classifySexpr(i);
				if (s === "helper")
				{
					this.helperSexpr(i, n, r)
				}
				else if (s === "simple")
				{
					this.simpleSexpr(i);
					this.opcode("pushProgram", n);
					this.opcode("pushProgram", r);
					this.opcode("emptyHash");
					this.opcode("blockValue")
				}
				else
				{
					this.ambiguousSexpr(i, n, r);
					this.opcode("pushProgram", n);
					this.opcode("pushProgram", r);
					this.opcode("emptyHash");
					this.opcode("ambiguousBlockValue")
				}
				this.opcode("append")
			},
			hash: function(e)
			{
				var t = e.pairs,
					n, r;
				this.opcode("pushHash");
				for (var i = 0, s = t.length; i < s; i++)
				{
					n = t[i];
					r = n[1];
					if (this.options.stringParams)
					{
						if (r.depth)
						{
							this.addDepth(r.depth)
						}
						this.opcode("getContext", r.depth || 0);
						this.opcode("pushStringParam", r.stringModeValue, r.type);
						if (r.type === "sexpr")
						{
							this.sexpr(r)
						}
					}
					else
					{
						this.accept(r)
					}
					this.opcode("assignToHash", n[0])
				}
				this.opcode("popHash")
			},
			partial: function(e)
			{
				var t = e.partialName;
				this.usePartial = true;
				if (e.context)
				{
					this.ID(e.context)
				}
				else
				{
					this.opcode("push", "depth0")
				}
				this.opcode("invokePartial", t.name);
				this.opcode("append")
			},
			content: function(e)
			{
				this.opcode("appendContent", e.string)
			},
			mustache: function(e)
			{
				this.sexpr(e.sexpr);
				if (e.escaped && !this.options.noEscape)
				{
					this.opcode("appendEscaped")
				}
				else
				{
					this.opcode("append")
				}
			},
			ambiguousSexpr: function(e, t, n)
			{
				var r = e.id,
					i = r.parts[0],
					s = t != null || n != null;
				this.opcode("getContext", r.depth);
				this.opcode("pushProgram", t);
				this.opcode("pushProgram", n);
				this.opcode("invokeAmbiguous", i, s)
			},
			simpleSexpr: function(e)
			{
				var t = e.id;
				if (t.type === "DATA")
				{
					this.DATA(t)
				}
				else if (t.parts.length)
				{
					this.ID(t)
				}
				else
				{
					this.addDepth(t.depth);
					this.opcode("getContext", t.depth);
					this.opcode("pushContext")
				}
				this.opcode("resolvePossibleLambda")
			},
			helperSexpr: function(e, t, r)
			{
				var i = this.setupFullMustacheParams(e, t, r),
					s = e.id.parts[0];
				if (this.options.knownHelpers[s])
				{
					this.opcode("invokeKnownHelper", i.length, s)
				}
				else if (this.options.knownHelpersOnly)
				{
					throw new n("You specified knownHelpersOnly, but used the unknown helper " + s, e)
				}
				else
				{
					this.opcode("invokeHelper", i.length, s, e.isRoot)
				}
			},
			sexpr: function(e)
			{
				var t = this.classifySexpr(e);
				if (t === "simple")
				{
					this.simpleSexpr(e)
				}
				else if (t === "helper")
				{
					this.helperSexpr(e)
				}
				else
				{
					this.ambiguousSexpr(e)
				}
			},
			ID: function(e)
			{
				this.addDepth(e.depth);
				this.opcode("getContext", e.depth);
				var t = e.parts[0];
				if (!t)
				{
					this.opcode("pushContext")
				}
				else
				{
					this.opcode("lookupOnContext", e.parts[0])
				}
				for (var n = 1, r = e.parts.length; n < r; n++)
				{
					this.opcode("lookup", e.parts[n])
				}
			},
			DATA: function(e)
			{
				this.options.data = true;
				if (e.id.isScoped || e.id.depth)
				{
					throw new n("Scoped data references are not supported: " + e.original, e)
				}
				this.opcode("lookupData");
				var t = e.id.parts;
				for (var r = 0, i = t.length; r < i; r++)
				{
					this.opcode("lookup", t[r])
				}
			},
			STRING: function(e)
			{
				this.opcode("pushString", e.string)
			},
			INTEGER: function(e)
			{
				this.opcode("pushLiteral", e.integer)
			},
			BOOLEAN: function(e)
			{
				this.opcode("pushLiteral", e.bool)
			},
			comment: function() {},
			opcode: function(e)
			{
				this.opcodes.push(
				{
					opcode: e,
					args: [].slice.call(arguments, 1)
				})
			},
			declare: function(e, t)
			{
				this.opcodes.push(
				{
					opcode: "DECLARE",
					name: e,
					value: t
				})
			},
			addDepth: function(e)
			{
				if (e === 0)
				{
					return
				}
				if (!this.depths[e])
				{
					this.depths[e] = true;
					this.depths.list.push(e)
				}
			},
			classifySexpr: function(e)
			{
				var t = e.isHelper;
				var n = e.eligibleHelper;
				var r = this.options;
				if (n && !t)
				{
					var i = e.id.parts[0];
					if (r.knownHelpers[i])
					{
						t = true
					}
					else if (r.knownHelpersOnly)
					{
						n = false
					}
				}
				if (t)
				{
					return "helper"
				}
				else if (n)
				{
					return "ambiguous"
				}
				else
				{
					return "simple"
				}
			},
			pushParams: function(e)
			{
				var t = e.length,
					n;
				while (t--)
				{
					n = e[t];
					if (this.options.stringParams)
					{
						if (n.depth)
						{
							this.addDepth(n.depth)
						}
						this.opcode("getContext", n.depth || 0);
						this.opcode("pushStringParam", n.stringModeValue, n.type);
						if (n.type === "sexpr")
						{
							this.sexpr(n)
						}
					}
					else
					{
						this[n.type](n)
					}
				}
			},
			setupFullMustacheParams: function(e, t, n)
			{
				var r = e.params;
				this.pushParams(r);
				this.opcode("pushProgram", t);
				this.opcode("pushProgram", n);
				if (e.hash)
				{
					this.hash(e.hash)
				}
				else
				{
					this.opcode("emptyHash")
				}
				return r
			}
		};
		t.precompile = i;
		t.compile = s;
		return t
	}(n);
	var l = function(e, t)
	{
		"use strict";

		function u(e)
		{
			this.value = e
		}

		function a()
		{}
		var n;
		var r = e.COMPILER_REVISION;
		var i = e.REVISION_CHANGES;
		var s = e.log;
		var o = t;
		a.prototype = {
			nameLookup: function(e, t)
			{
				var n, r;
				if (e.indexOf("depth") === 0)
				{
					n = true
				}
				if (/^[0-9]+$/.test(t))
				{
					r = e + "[" + t + "]"
				}
				else if (a.isValidJavaScriptVariableName(t))
				{
					r = e + "." + t
				}
				else
				{
					r = e + "['" + t + "']"
				}
				if (n)
				{
					return "(" + e + " && " + r + ")"
				}
				else
				{
					return r
				}
			},
			compilerInfo: function()
			{
				var e = r,
					t = i[e];
				return "this.compilerInfo = [" + e + ",'" + t + "'];\n"
			},
			appendToBuffer: function(e)
			{
				if (this.environment.isSimple)
				{
					return "return " + e + ";"
				}
				else
				{
					return {
						appendToBuffer: true,
						content: e,
						toString: function()
						{
							return "buffer += " + e + ";"
						}
					}
				}
			},
			initializeBuffer: function()
			{
				return this.quotedString("")
			},
			namespace: "Handlebars",
			compile: function(e, t, n, r)
			{
				this.environment = e;
				this.options = t ||
				{};
				s("debug", this.environment.disassemble() + "\n\n");
				this.name = this.environment.name;
				this.isChild = !!n;
				this.context = n ||
				{
					programs: [],
					environments: [],
					aliases:
					{}
				};
				this.preamble();
				this.stackSlot = 0;
				this.stackVars = [];
				this.registers = {
					list: []
				};
				this.hashes = [];
				this.compileStack = [];
				this.inlineStack = [];
				this.compileChildren(e, t);
				var i = e.opcodes,
					u;
				this.i = 0;
				for (var a = i.length; this.i < a; this.i++)
				{
					u = i[this.i];
					if (u.opcode === "DECLARE")
					{
						this[u.name] = u.value
					}
					else
					{
						this[u.opcode].apply(this, u.args)
					}
					if (u.opcode !== this.stripNext)
					{
						this.stripNext = false
					}
				}
				this.pushSource("");
				if (this.stackSlot || this.inlineStack.length || this.compileStack.length)
				{
					throw new o("Compile completed with content left on stack")
				}
				return this.createFunctionContext(r)
			},
			preamble: function()
			{
				var e = [];
				if (!this.isChild)
				{
					var t = this.namespace;
					var n = "helpers = this.merge(helpers, " + t + ".helpers);";
					if (this.environment.usePartial)
					{
						n = n + " partials = this.merge(partials, " + t + ".partials);"
					}
					if (this.options.data)
					{
						n = n + " data = data || {};"
					}
					e.push(n)
				}
				else
				{
					e.push("")
				}
				if (!this.environment.isSimple)
				{
					e.push(", buffer = " + this.initializeBuffer())
				}
				else
				{
					e.push("")
				}
				this.lastContext = 0;
				this.source = e
			},
			createFunctionContext: function(e)
			{
				var t = this.stackVars.concat(this.registers.list);
				if (t.length > 0)
				{
					this.source[1] = this.source[1] + ", " + t.join(", ")
				}
				if (!this.isChild)
				{
					for (var n in this.context.aliases)
					{
						if (this.context.aliases.hasOwnProperty(n))
						{
							this.source[1] = this.source[1] + ", " + n + "=" + this.context.aliases[n]
						}
					}
				}
				if (this.source[1])
				{
					this.source[1] = "var " + this.source[1].substring(2) + ";"
				}
				if (!this.isChild)
				{
					this.source[1] += "\n" + this.context.programs.join("\n") + "\n"
				}
				if (!this.environment.isSimple)
				{
					this.pushSource("return buffer;")
				}
				var r = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];
				for (var i = 0, o = this.environment.depths.list.length; i < o; i++)
				{
					r.push("depth" + this.environment.depths.list[i])
				}
				var u = this.mergeSource();
				if (!this.isChild)
				{
					u = this.compilerInfo() + u
				}
				if (e)
				{
					r.push(u);
					return Function.apply(this, r)
				}
				else
				{
					var a = "function " + (this.name || "") + "(" + r.join(",") + ") {\n  " + u + "}";
					s("debug", a + "\n\n");
					return a
				}
			},
			mergeSource: function()
			{
				var e = "",
					t;
				for (var n = 0, r = this.source.length; n < r; n++)
				{
					var i = this.source[n];
					if (i.appendToBuffer)
					{
						if (t)
						{
							t = t + "\n    + " + i.content
						}
						else
						{
							t = i.content
						}
					}
					else
					{
						if (t)
						{
							e += "buffer += " + t + ";\n  ";
							t = undefined
						}
						e += i + "\n  "
					}
				}
				return e
			},
			blockValue: function()
			{
				this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
				var e = ["depth0"];
				this.setupParams(0, e);
				this.replaceStack(function(t)
				{
					e.splice(1, 0, t);
					return "blockHelperMissing.call(" + e.join(", ") + ")"
				})
			},
			ambiguousBlockValue: function()
			{
				this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
				var e = ["depth0"];
				this.setupParams(0, e);
				var t = this.topStack();
				e.splice(1, 0, t);
				this.pushSource("if (!" + this.lastHelper + ") { " + t + " = blockHelperMissing.call(" + e.join(", ") + "); }")
			},
			appendContent: function(e)
			{
				if (this.pendingContent)
				{
					e = this.pendingContent + e
				}
				if (this.stripNext)
				{
					e = e.replace(/^\s+/, "")
				}
				this.pendingContent = e
			},
			strip: function()
			{
				if (this.pendingContent)
				{
					this.pendingContent = this.pendingContent.replace(/\s+$/, "")
				}
				this.stripNext = "strip"
			},
			append: function()
			{
				this.flushInline();
				var e = this.popStack();
				this.pushSource("if(" + e + " || " + e + " === 0) { " + this.appendToBuffer(e) + " }");
				if (this.environment.isSimple)
				{
					this.pushSource("else { " + this.appendToBuffer("''") + " }")
				}
			},
			appendEscaped: function()
			{
				this.context.aliases.escapeExpression = "this.escapeExpression";
				this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
			},
			getContext: function(e)
			{
				if (this.lastContext !== e)
				{
					this.lastContext = e
				}
			},
			lookupOnContext: function(e)
			{
				this.push(this.nameLookup("depth" + this.lastContext, e, "context"))
			},
			pushContext: function()
			{
				this.pushStackLiteral("depth" + this.lastContext)
			},
			resolvePossibleLambda: function()
			{
				this.context.aliases.functionType = '"function"';
				this.replaceStack(function(e)
				{
					return "typeof " + e + " === functionType ? " + e + ".apply(depth0) : " + e
				})
			},
			lookup: function(e)
			{
				this.replaceStack(function(t)
				{
					return t + " == null || " + t + " === false ? " + t + " : " + this.nameLookup(t, e, "context")
				})
			},
			lookupData: function()
			{
				this.pushStackLiteral("data")
			},
			pushStringParam: function(e, t)
			{
				this.pushStackLiteral("depth" + this.lastContext);
				this.pushString(t);
				if (t !== "sexpr")
				{
					if (typeof e === "string")
					{
						this.pushString(e)
					}
					else
					{
						this.pushStackLiteral(e)
					}
				}
			},
			emptyHash: function()
			{
				this.pushStackLiteral("{}");
				if (this.options.stringParams)
				{
					this.push("{}");
					this.push("{}")
				}
			},
			pushHash: function()
			{
				if (this.hash)
				{
					this.hashes.push(this.hash)
				}
				this.hash = {
					values: [],
					types: [],
					contexts: []
				}
			},
			popHash: function()
			{
				var e = this.hash;
				this.hash = this.hashes.pop();
				if (this.options.stringParams)
				{
					this.push("{" + e.contexts.join(",") + "}");
					this.push("{" + e.types.join(",") + "}")
				}
				this.push("{\n    " + e.values.join(",\n    ") + "\n  }")
			},
			pushString: function(e)
			{
				this.pushStackLiteral(this.quotedString(e))
			},
			push: function(e)
			{
				this.inlineStack.push(e);
				return e
			},
			pushLiteral: function(e)
			{
				this.pushStackLiteral(e)
			},
			pushProgram: function(e)
			{
				if (e != null)
				{
					this.pushStackLiteral(this.programExpression(e))
				}
				else
				{
					this.pushStackLiteral(null)
				}
			},
			invokeHelper: function(e, t, n)
			{
				this.context.aliases.helperMissing = "helpers.helperMissing";
				this.useRegister("helper");
				var r = this.lastHelper = this.setupHelper(e, t, true);
				var i = this.nameLookup("depth" + this.lastContext, t, "context");
				var s = "helper = " + r.name + " || " + i;
				if (r.paramsInit)
				{
					s += "," + r.paramsInit
				}
				this.push("(" + s + ",helper " + "? helper.call(" + r.callParams + ") " + ": helperMissing.call(" + r.helperMissingParams + "))");
				if (!n)
				{
					this.flushInline()
				}
			},
			invokeKnownHelper: function(e, t)
			{
				var n = this.setupHelper(e, t);
				this.push(n.name + ".call(" + n.callParams + ")")
			},
			invokeAmbiguous: function(e, t)
			{
				this.context.aliases.functionType = '"function"';
				this.useRegister("helper");
				this.emptyHash();
				var n = this.setupHelper(0, e, t);
				var r = this.lastHelper = this.nameLookup("helpers", e, "helper");
				var i = this.nameLookup("depth" + this.lastContext, e, "context");
				var s = this.nextStack();
				if (n.paramsInit)
				{
					this.pushSource(n.paramsInit)
				}
				this.pushSource("if (helper = " + r + ") { " + s + " = helper.call(" + n.callParams + "); }");
				this.pushSource("else { helper = " + i + "; " + s + " = typeof helper === functionType ? helper.call(" + n.callParams + ") : helper; }")
			},
			invokePartial: function(e)
			{
				var t = [this.nameLookup("partials", e, "partial"), "'" + e + "'", this.popStack(), "helpers", "partials"];
				if (this.options.data)
				{
					t.push("data")
				}
				this.context.aliases.self = "this";
				this.push("self.invokePartial(" + t.join(", ") + ")")
			},
			assignToHash: function(e)
			{
				var t = this.popStack(),
					n, r;
				if (this.options.stringParams)
				{
					r = this.popStack();
					n = this.popStack()
				}
				var i = this.hash;
				if (n)
				{
					i.contexts.push("'" + e + "': " + n)
				}
				if (r)
				{
					i.types.push("'" + e + "': " + r)
				}
				i.values.push("'" + e + "': (" + t + ")")
			},
			compiler: a,
			compileChildren: function(e, t)
			{
				var n = e.children,
					r, i;
				for (var s = 0, o = n.length; s < o; s++)
				{
					r = n[s];
					i = new this.compiler;
					var u = this.matchExistingProgram(r);
					if (u == null)
					{
						this.context.programs.push("");
						u = this.context.programs.length;
						r.index = u;
						r.name = "program" + u;
						this.context.programs[u] = i.compile(r, t, this.context);
						this.context.environments[u] = r
					}
					else
					{
						r.index = u;
						r.name = "program" + u
					}
				}
			},
			matchExistingProgram: function(e)
			{
				for (var t = 0, n = this.context.environments.length; t < n; t++)
				{
					var r = this.context.environments[t];
					if (r && r.equals(e))
					{
						return t
					}
				}
			},
			programExpression: function(e)
			{
				this.context.aliases.self = "this";
				if (e == null)
				{
					return "self.noop"
				}
				var t = this.environment.children[e],
					n = t.depths.list,
					r;
				var i = [t.index, t.name, "data"];
				for (var s = 0, o = n.length; s < o; s++)
				{
					r = n[s];
					if (r === 1)
					{
						i.push("depth0")
					}
					else
					{
						i.push("depth" + (r - 1))
					}
				}
				return (n.length === 0 ? "self.program(" : "self.programWithDepth(") + i.join(", ") + ")"
			},
			register: function(e, t)
			{
				this.useRegister(e);
				this.pushSource(e + " = " + t + ";")
			},
			useRegister: function(e)
			{
				if (!this.registers[e])
				{
					this.registers[e] = true;
					this.registers.list.push(e)
				}
			},
			pushStackLiteral: function(e)
			{
				return this.push(new u(e))
			},
			pushSource: function(e)
			{
				if (this.pendingContent)
				{
					this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));
					this.pendingContent = undefined
				}
				if (e)
				{
					this.source.push(e)
				}
			},
			pushStack: function(e)
			{
				this.flushInline();
				var t = this.incrStack();
				if (e)
				{
					this.pushSource(t + " = " + e + ";")
				}
				this.compileStack.push(t);
				return t
			},
			replaceStack: function(e)
			{
				var t = "",
					n = this.isInline(),
					r, i, s;
				if (n)
				{
					var o = this.popStack(true);
					if (o instanceof u)
					{
						r = o.value;
						s = true
					}
					else
					{
						i = !this.stackSlot;
						var a = !i ? this.topStackName() : this.incrStack();
						t = "(" + this.push(a) + " = " + o + "),";
						r = this.topStack()
					}
				}
				else
				{
					r = this.topStack()
				}
				var f = e.call(this, r);
				if (n)
				{
					if (!s)
					{
						this.popStack()
					}
					if (i)
					{
						this.stackSlot--
					}
					this.push("(" + t + f + ")")
				}
				else
				{
					if (!/^stack/.test(r))
					{
						r = this.nextStack()
					}
					this.pushSource(r + " = (" + t + f + ");")
				}
				return r
			},
			nextStack: function()
			{
				return this.pushStack()
			},
			incrStack: function()
			{
				this.stackSlot++;
				if (this.stackSlot > this.stackVars.length)
				{
					this.stackVars.push("stack" + this.stackSlot)
				}
				return this.topStackName()
			},
			topStackName: function()
			{
				return "stack" + this.stackSlot
			},
			flushInline: function()
			{
				var e = this.inlineStack;
				if (e.length)
				{
					this.inlineStack = [];
					for (var t = 0, n = e.length; t < n; t++)
					{
						var r = e[t];
						if (r instanceof u)
						{
							this.compileStack.push(r)
						}
						else
						{
							this.pushStack(r)
						}
					}
				}
			},
			isInline: function()
			{
				return this.inlineStack.length
			},
			popStack: function(e)
			{
				var t = this.isInline(),
					n = (t ? this.inlineStack : this.compileStack).pop();
				if (!e && n instanceof u)
				{
					return n.value
				}
				else
				{
					if (!t)
					{
						if (!this.stackSlot)
						{
							throw new o("Invalid stack pop")
						}
						this.stackSlot--
					}
					return n
				}
			},
			topStack: function(e)
			{
				var t = this.isInline() ? this.inlineStack : this.compileStack,
					n = t[t.length - 1];
				if (!e && n instanceof u)
				{
					return n.value
				}
				else
				{
					return n
				}
			},
			quotedString: function(e)
			{
				return '"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
			},
			setupHelper: function(e, t, n)
			{
				var r = [],
					i = this.setupParams(e, r, n);
				var s = this.nameLookup("helpers", t, "helper");
				return {
					params: r,
					paramsInit: i,
					name: s,
					callParams: ["depth0"].concat(r).join(", "),
					helperMissingParams: n && ["depth0", this.quotedString(t)].concat(r).join(", ")
				}
			},
			setupOptions: function(e, t)
			{
				var n = [],
					r = [],
					i = [],
					s, o, u;
				n.push("hash:" + this.popStack());
				if (this.options.stringParams)
				{
					n.push("hashTypes:" + this.popStack());
					n.push("hashContexts:" + this.popStack())
				}
				o = this.popStack();
				u = this.popStack();
				if (u || o)
				{
					if (!u)
					{
						this.context.aliases.self = "this";
						u = "self.noop"
					}
					if (!o)
					{
						this.context.aliases.self = "this";
						o = "self.noop"
					}
					n.push("inverse:" + o);
					n.push("fn:" + u)
				}
				for (var a = 0; a < e; a++)
				{
					s = this.popStack();
					t.push(s);
					if (this.options.stringParams)
					{
						i.push(this.popStack());
						r.push(this.popStack())
					}
				}
				if (this.options.stringParams)
				{
					n.push("contexts:[" + r.join(",") + "]");
					n.push("types:[" + i.join(",") + "]")
				}
				if (this.options.data)
				{
					n.push("data:data")
				}
				return n
			},
			setupParams: function(e, t, n)
			{
				var r = "{" + this.setupOptions(e, t).join(",") + "}";
				if (n)
				{
					this.useRegister("options");
					t.push("options");
					return "options=" + r
				}
				else
				{
					t.push(r);
					return ""
				}
			}
		};
		var f = ("break else new var" + " case finally return void" + " catch for switch while" + " continue function this with" + " default if throw" + " delete in try" + " do instanceof typeof" + " abstract enum int short" + " boolean export interface static" + " byte extends long super" + " char final native synchronized" + " class float package throws" + " const goto private transient" + " debugger implements protected volatile" + " double import public let yield").split(" ");
		var l = a.RESERVED_WORDS = {};
		for (var c = 0, h = f.length; c < h; c++)
		{
			l[f[c]] = true
		}
		a.isValidJavaScriptVariableName = function(e)
		{
			if (!a.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e))
			{
				return true
			}
			return false
		};
		n = a;
		return n
	}(r, n);
	var c = function(e, t, n, r, i)
	{
		"use strict";
		var s;
		var o = e;
		var u = t;
		var a = n.parser;
		var f = n.parse;
		var l = r.Compiler;
		var c = r.compile;
		var h = r.precompile;
		var p = i;
		var d = o.create;
		var v = function()
		{
			var e = d();
			e.compile = function(t, n)
			{
				return c(t, n, e)
			};
			e.precompile = function(t, n)
			{
				return h(t, n, e)
			};
			e.AST = u;
			e.Compiler = l;
			e.JavaScriptCompiler = p;
			e.Parser = a;
			e.parse = f;
			return e
		};
		o = v();
		o.create = v;
		s = o;
		return s
	}(s, o, a, f, l);
	return c
}();
(function(e, t)
{
	"use strict";

	function n(e)
	{
		var t = Array.prototype.slice.call(arguments, 1);
		return e.prop ? e.prop.apply(e, t) : e.attr.apply(e, t)
	}

	function r(e, t, n)
	{
		var r, i;
		for (r in n) n.hasOwnProperty(r) && (i = r.replace(/ |$/g, t.eventNamespace), e.bind(i, n[r]))
	}

	function i(e, t, n)
	{
		r(e, n,
		{
			focus: function()
			{
				t.addClass(n.focusClass)
			},
			blur: function()
			{
				t.removeClass(n.focusClass), t.removeClass(n.activeClass)
			},
			mouseenter: function()
			{
				t.addClass(n.hoverClass)
			},
			mouseleave: function()
			{
				t.removeClass(n.hoverClass), t.removeClass(n.activeClass)
			},
			"mousedown touchbegin": function()
			{
				e.is(":disabled") || t.addClass(n.activeClass)
			},
			"mouseup touchend": function()
			{
				t.removeClass(n.activeClass)
			}
		})
	}

	function s(e, t)
	{
		e.removeClass(t.hoverClass + " " + t.focusClass + " " + t.activeClass)
	}

	function o(e, t, n)
	{
		n ? e.addClass(t) : e.removeClass(t)
	}

	function u(e, t, n)
	{
		var r = "checked",
			i = t.is(":" + r);
		t.prop ? t.prop(r, i) : i ? t.attr(r, r) : t.removeAttr(r), o(e, n.checkedClass, i)
	}

	function a(e, t, n)
	{
		o(e, n.disabledClass, t.is(":disabled"))
	}

	function f(e, t, n)
	{
		switch (n)
		{
			case "after":
				return e.after(t), e.next();
			case "before":
				return e.before(t), e.prev();
			case "wrap":
				return e.wrap(t), e.parent()
		}
		return null
	}

	function l(t, r, i)
	{
		var s, o, u;
		return i || (i = {}), i = e.extend(
		{
			bind:
			{},
			divClass: null,
			divWrap: "wrap",
			spanClass: null,
			spanHtml: null,
			spanWrap: "wrap"
		}, i), s = e("<div />"), o = e("<span />"), r.autoHide && t.is(":hidden") && "none" === t.css("display") && s.hide(), i.divClass && s.addClass(i.divClass), r.wrapperClass && s.addClass(r.wrapperClass), i.spanClass && o.addClass(i.spanClass), u = n(t, "id"), r.useID && u && n(s, "id", r.idPrefix + "-" + u), i.spanHtml && o.html(i.spanHtml), s = f(t, s, i.divWrap), o = f(t, o, i.spanWrap), a(s, t, r),
		{
			div: s,
			span: o
		}
	}

	function c(t, n)
	{
		var r;
		return n.wrapperClass ? (r = e("<span />").addClass(n.wrapperClass), r = f(t, r, "wrap")) : null
	}

	function h()
	{
		var t, n, r, i;
		return i = "rgb(120,2,153)", n = e('<div style="width:0;height:0;color:' + i + '">'), e("body").append(n), r = n.get(0), t = window.getComputedStyle ? window.getComputedStyle(r, "").color : (r.currentStyle || r.style ||
		{}).color, n.remove(), t.replace(/ /g, "") !== i
	}

	function p(t)
	{
		return t ? e("<span />").text(t).html() : ""
	}

	function d()
	{
		return navigator.cpuClass && !navigator.product
	}

	function v()
	{
		return window.XMLHttpRequest !== void 0 ? !0 : !1
	}

	function m(e)
	{
		var t;
		return e[0].multiple ? !0 : (t = n(e, "size"), !t || 1 >= t ? !1 : !0)
	}

	function g()
	{
		return !1
	}

	function y(e, t)
	{
		var n = "none";
		r(e, t,
		{
			"selectstart dragstart mousedown": g
		}), e.css(
		{
			MozUserSelect: n,
			msUserSelect: n,
			webkitUserSelect: n,
			userSelect: n
		})
	}

	function b(e, t, n)
	{
		var r = e.val();
		"" === r ? r = n.fileDefaultHtml : (r = r.split(/[\/\\]+/), r = r[r.length - 1]), t.text(r)
	}

	function w(e, t, n)
	{
		var r, i;
		for (r = [], e.each(function()
			{
				var e;
				for (e in t) Object.prototype.hasOwnProperty.call(t, e) && (r.push(
				{
					el: this,
					name: e,
					old: this.style[e]
				}), this.style[e] = t[e])
			}), n(); r.length;) i = r.pop(), i.el.style[i.name] = i.old
	}

	function E(e, t)
	{
		var n;
		n = e.parents(), n.push(e[0]), n = n.not(":visible"), w(n,
		{
			visibility: "hidden",
			display: "block",
			position: "absolute"
		}, t)
	}

	function S(e, t)
	{
		return function()
		{
			e.unwrap().unwrap().unbind(t.eventNamespace)
		}
	}
	var x = !0,
		T = !1,
		N = [
		{
			match: function(e)
			{
				return e.is("a, button, :submit, :reset, input[type='button']")
			},
			apply: function(e, t)
			{
				var o, u, f, c, h;
				return u = t.submitDefaultHtml, e.is(":reset") && (u = t.resetDefaultHtml), c = e.is("a, button") ? function()
				{
					return e.html() || u
				} : function()
				{
					return p(n(e, "value")) || u
				}, f = l(e, t,
				{
					divClass: t.buttonClass,
					spanHtml: c()
				}), o = f.div, i(e, o, t), h = !1, r(o, t,
				{
					"click touchend": function()
					{
						var t, r, i, s;
						h || e.is(":disabled") || (h = !0, e[0].dispatchEvent ? (t = document.createEvent("MouseEvents"), t.initEvent("click", !0, !0), r = e[0].dispatchEvent(t), e.is("a") && r && (i = n(e, "target"), s = n(e, "href"), i && "_self" !== i ? window.open(s, i) : document.location.href = s)) : e.click(), h = !1)
					}
				}), y(o, t),
				{
					remove: function()
					{
						return o.after(e), o.remove(), e.unbind(t.eventNamespace), e
					},
					update: function()
					{
						s(o, t), a(o, e, t), e.detach(), f.span.html(c()).append(e)
					}
				}
			}
		},
		{
			match: function(e)
			{
				return e.is(":checkbox")
			},
			apply: function(e, t)
			{
				var n, o, f;
				return n = l(e, t,
				{
					divClass: t.checkboxClass
				}), o = n.div, f = n.span, i(e, o, t), r(e, t,
				{
					"click touchend": function()
					{
						u(f, e, t)
					}
				}), u(f, e, t),
				{
					remove: S(e, t),
					update: function()
					{
						s(o, t), f.removeClass(t.checkedClass), u(f, e, t), a(o, e, t)
					}
				}
			}
		},
		{
			match: function(e)
			{
				return e.is(":file")
			},
			apply: function(t, o)
			{
				function u()
				{
					b(t, p, o)
				}
				var c, h, p, v;
				return c = l(t, o,
				{
					divClass: o.fileClass,
					spanClass: o.fileButtonClass,
					spanHtml: o.fileButtonHtml,
					spanWrap: "after"
				}), h = c.div, v = c.span, p = e("<span />").html(o.fileDefaultHtml), p.addClass(o.filenameClass), p = f(t, p, "after"), n(t, "size") || n(t, "size", h.width() / 10), i(t, h, o), u(), d() ? r(t, o,
				{
					click: function()
					{
						t.trigger("change"), setTimeout(u, 0)
					}
				}) : r(t, o,
				{
					change: u
				}), y(p, o), y(v, o),
				{
					remove: function()
					{
						return p.remove(), v.remove(), t.unwrap().unbind(o.eventNamespace)
					},
					update: function()
					{
						s(h, o), b(t, p, o), a(h, t, o)
					}
				}
			}
		},
		{
			match: function(e)
			{
				if (e.is("input"))
				{
					var t = (" " + n(e, "type") + " ").toLowerCase(),
						r = " color date datetime datetime-local email month number password search tel text time url week ";
					return r.indexOf(t) >= 0
				}
				return !1
			},
			apply: function(e, t)
			{
				var r, s;
				return r = n(e, "type"), e.addClass(t.inputClass), s = c(e, t), i(e, e, t), t.inputAddTypeAsClass && e.addClass(r),
				{
					remove: function()
					{
						e.removeClass(t.inputClass), t.inputAddTypeAsClass && e.removeClass(r), s && e.unwrap()
					},
					update: g
				}
			}
		},
		{
			match: function(e)
			{
				return e.is(":radio")
			},
			apply: function(t, o)
			{
				var f, c, h;
				return f = l(t, o,
				{
					divClass: o.radioClass
				}), c = f.div, h = f.span, i(t, c, o), r(t, o,
				{
					"click touchend": function()
					{
						e.uniform.update(e(':radio[name="' + n(t, "name") + '"]'))
					}
				}), u(h, t, o),
				{
					remove: S(t, o),
					update: function()
					{
						s(c, o), u(h, t, o), a(c, t, o)
					}
				}
			}
		},
		{
			match: function(e)
			{
				return e.is("select") && !m(e) ? !0 : !1
			},
			apply: function(t, n)
			{
				var o, u, f, c;
				return n.selectAutoWidth && E(t, function()
				{
					c = t.width()
				}), o = l(t, n,
				{
					divClass: n.selectClass,
					spanHtml: (t.find(":selected:first") || t.find("option:first")).html(),
					spanWrap: "before"
				}), u = o.div, f = o.span, n.selectAutoWidth ? E(t, function()
				{
					w(e([f[0], u[0]]),
					{
						display: "block"
					}, function()
					{
						var e;
						e = f.outerWidth() - f.width(), u.width(c + e), f.width(c)
					})
				}) : u.addClass("fixedWidth"), i(t, u, n), r(t, n,
				{
					change: function()
					{
						f.html(t.find(":selected").html()), u.removeClass(n.activeClass)
					},
					"click touchend": function()
					{
						var e = t.find(":selected").html();
						f.html() !== e && t.trigger("change")
					},
					keyup: function()
					{
						f.html(t.find(":selected").html())
					}
				}), y(f, n),
				{
					remove: function()
					{
						return f.remove(), t.unwrap().unbind(n.eventNamespace), t
					},
					update: function()
					{
						n.selectAutoWidth ? (e.uniform.restore(t), t.uniform(n)) : (s(u, n), f.html(t.find(":selected").html()), a(u, t, n))
					}
				}
			}
		},
		{
			match: function(e)
			{
				return e.is("select") && m(e) ? !0 : !1
			},
			apply: function(e, t)
			{
				var n;
				return e.addClass(t.selectMultiClass), n = c(e, t), i(e, e, t),
				{
					remove: function()
					{
						e.removeClass(t.selectMultiClass), n && e.unwrap()
					},
					update: g
				}
			}
		},
		{
			match: function(e)

			{
				return e.is("textarea")
			},
			apply: function(e, t)
			{
				var n;
				return e.addClass(t.textareaClass), n = c(e, t), i(e, e, t),
				{
					remove: function()
					{
						e.removeClass(t.textareaClass), n && e.unwrap()
					},
					update: g
				}
			}
		}];
	d() && !v() && (x = !1), e.uniform = {
		defaults:
		{
			activeClass: "active",
			autoHide: !0,
			buttonClass: "button",
			checkboxClass: "checker",
			checkedClass: "checked",
			disabledClass: "disabled",
			eventNamespace: ".uniform",
			fileButtonClass: "action",
			fileButtonHtml: "Choose File",
			fileClass: "uploader",
			fileDefaultHtml: "No file selected",
			filenameClass: "filename",
			focusClass: "focus",
			hoverClass: "hover",
			idPrefix: "uniform",
			inputAddTypeAsClass: !0,
			inputClass: "uniform-input",
			radioClass: "radio",
			resetDefaultHtml: "Reset",
			resetSelector: !1,
			selectAutoWidth: !0,
			selectClass: "selector",
			selectMultiClass: "uniform-multiselect",
			submitDefaultHtml: "Submit",
			textareaClass: "uniform",
			useID: !0,
			wrapperClass: null
		},
		elements: []
	}, e.fn.uniform = function(t)
	{
		var n = this;
		return t = e.extend(
		{}, e.uniform.defaults, t), T || (T = !0, h() && (x = !1)), x ? (t.resetSelector && e(t.resetSelector).mouseup(function()
		{
			window.setTimeout(function()
			{
				e.uniform.update(n)
			}, 10)
		}), this.each(function()
		{
			var n, r, i, s = e(this);
			if (s.data("uniformed")) return e.uniform.update(s), void 0;
			for (n = 0; N.length > n; n += 1)
				if (r = N[n], r.match(s, t)) return i = r.apply(s, t), s.data("uniformed", i), e.uniform.elements.push(s.get(0)), void 0
		})) : this
	}, e.uniform.restore = e.fn.uniform.restore = function(n)
	{
		n === t && (n = e.uniform.elements), e(n).each(function()
		{
			var t, n, r = e(this);
			n = r.data("uniformed"), n && (n.remove(), t = e.inArray(this, e.uniform.elements), t >= 0 && e.uniform.elements.splice(t, 1), r.removeData("uniformed"))
		})
	}, e.uniform.update = e.fn.uniform.update = function(n)
	{
		n === t && (n = e.uniform.elements), e(n).each(function()
		{
			var t, n = e(this);
			t = n.data("uniformed"), t && t.update(n, t.options)
		})
	}
})(jQuery);
! function(e)
{
	"use strict";
	var t = function(t, n)
	{
		this.options = e.extend(
		{}, e.fn.combobox.defaults, n);
		this.$source = e(t);
		this.$container = this.setup();
		this.$element = this.$container.find("input[type=text]");
		this.$target = this.$container.find("input[type=hidden]");
		this.$button = this.$container.find(".dropdown-toggle");
		this.$menu = e(this.options.menu).appendTo("body");
		this.template = this.options.template || this.template;
		this.matcher = this.options.matcher || this.matcher;
		this.sorter = this.options.sorter || this.sorter;
		this.highlighter = this.options.highlighter || this.highlighter;
		this.shown = false;
		this.selected = false;
		this.refresh();
		this.transferAttributes();
		this.listen()
	};
	t.prototype = {
		constructor: t,
		setup: function()
		{
			var t = e(this.template());
			this.$source.before(t);
			this.$source.hide();
			return t
		},
		disable: function()
		{
			this.$element.prop("disabled", true);
			this.$button.attr("disabled", true);
			this.disabled = true;
			this.$container.addClass("combobox-disabled")
		},
		enable: function()
		{
			this.$element.prop("disabled", false);
			this.$button.attr("disabled", false);
			this.disabled = false;
			this.$container.removeClass("combobox-disabled")
		},
		parse: function()
		{
			var t = this,
				n = {},
				r = [],
				i = false,
				s = "";
			this.$source.find("option").each(function()
			{
				var o = e(this);
				if (o.val() === "")
				{
					t.options.placeholder = o.text();
					return
				}
				n[o.text()] = o.val();
				r.push(o.text());
				if (o.prop("selected"))
				{
					i = o.text();
					s = o.val()
				}
			});
			this.map = n;
			if (i)
			{
				this.$element.val(i);
				this.$target.val(s);
				this.$container.addClass("combobox-selected");
				this.selected = true
			}
			return r
		},
		transferAttributes: function()
		{
			this.options.placeholder = this.$source.attr("data-placeholder") || this.options.placeholder;
			this.$element.attr("placeholder", this.options.placeholder);
			this.$target.prop("name", this.$source.prop("name"));
			this.$target.val(this.$source.val());
			this.$source.removeAttr("name");
			this.$element.attr("required", this.$source.attr("required"));
			this.$element.attr("rel", this.$source.attr("rel"));
			this.$element.attr("title", this.$source.attr("title"));
			this.$element.attr("class", this.$source.attr("class"));
			this.$element.attr("tabindex", this.$source.attr("tabindex"));
			this.$source.removeAttr("tabindex");
			if (this.$source.attr("disabled") !== undefined) this.disable()
		},
		select: function()
		{
			var e = this.$menu.find(".active").attr("data-value");
			this.$element.val(this.updater(e)).trigger("change");
			this.$target.val(this.map[e]).trigger("change");
			this.$source.val(this.map[e]).trigger("change");
			this.$container.addClass("combobox-selected");
			this.selected = true;
			return this.hide()
		},
		updater: function(e)
		{
			return e
		},
		show: function()
		{
			var t = e.extend(
			{}, this.$element.position(),
			{
				height: this.$element[0].offsetHeight
			});
			this.$menu.insertAfter(this.$element).css(
			{
				top: t.top + t.height,
				left: t.left
			}).show();
			e(".dropdown-menu").on("mousedown", e.proxy(this.scrollSafety, this));
			this.shown = true;
			return this
		},
		hide: function()
		{
			this.$menu.hide();
			e(".dropdown-menu").off("mousedown", e.proxy(this.scrollSafety, this));
			this.$element.on("blur", e.proxy(this.blur, this));
			this.shown = false;
			return this
		},
		lookup: function(e)
		{
			this.query = this.$element.val();
			return this.process(this.source)
		},
		process: function(t)
		{
			var n = this;
			t = e.grep(t, function(e)
			{
				return n.matcher(e)
			});
			t = this.sorter(t);
			if (!t.length)
			{
				return this.shown ? this.hide() : this
			}
			return this.render(t.slice(0, this.options.items)).show()
		},
		template: function()
		{
			if (this.options.bsVersion == "2")
			{
				return '<div class="combobox-container"><input type="hidden" /> <div class="input-append"> <input type="text" autocomplete="off" autocorrect="off" spellcheck="false" /> <span class="add-on dropdown-toggle" data-dropdown="dropdown"> <span class="caret"/> <i class="icon-remove"/> </span> </div> </div>'
			}
			else
			{
				return '<div class="combobox-container"> <input type="hidden" /> <div class="input-group"> <input type="text" autocomplete="off" autocorrect="off" spellcheck="false" /> <span class="input-group-addon dropdown-toggle" data-dropdown="dropdown"> <span class="caret" /> <span class="glyphicon glyphicon-remove" /> </span> </div> </div>'
			}
		},
		matcher: function(e)
		{
			return ~e.toLowerCase().indexOf(this.query.toLowerCase())
		},
		sorter: function(e)
		{
			var t = [],
				n = [],
				r = [],
				i;
			while (i = e.shift())
			{
				if (!i.toLowerCase().indexOf(this.query.toLowerCase()))
				{
					t.push(i)
				}
				else if (~i.indexOf(this.query))
				{
					n.push(i)
				}
				else
				{
					r.push(i)
				}
			}
			return t.concat(n, r)
		},
		highlighter: function(e)
		{
			var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
			return e.replace(new RegExp("(" + t + ")", "ig"), function(e, t)
			{
				return "<strong>" + t + "</strong>"
			})
		},
		render: function(t)
		{
			var n = this;
			t = e(t).map(function(t, r)
			{
				t = e(n.options.item).attr("data-value", r);
				t.find("a").html(n.highlighter(r));
				return t[0]
			});
			t.first().addClass("active");
			this.$menu.html(t);
			return this
		},
		next: function(t)
		{
			var n = this.$menu.find(".active").removeClass("active"),
				r = n.next();
			if (!r.length)
			{
				r = e(this.$menu.find("li")[0])
			}
			r.addClass("active")
		},
		prev: function(e)
		{
			var t = this.$menu.find(".active").removeClass("active"),
				n = t.prev();
			if (!n.length)
			{
				n = this.$menu.find("li").last()
			}
			n.addClass("active")
		},
		toggle: function()
		{
			if (!this.disabled)
			{
				if (this.$container.hasClass("combobox-selected"))
				{
					this.clearTarget();
					this.triggerChange();
					this.clearElement()
				}
				else
				{
					if (this.shown)
					{
						this.hide()
					}
					else
					{
						this.clearElement();
						this.lookup()
					}
				}
			}
		},
		scrollSafety: function(e)
		{
			if (e.target.tagName == "UL")
			{
				this.$element.off("blur")
			}
		},
		clearElement: function()
		{
			this.$element.val("").focus()
		},
		clearTarget: function()
		{
			this.$source.val("");
			this.$target.val("");
			this.$container.removeClass("combobox-selected");
			this.selected = false
		},
		triggerChange: function()
		{
			this.$source.trigger("change")
		},
		refresh: function()
		{
			this.source = this.parse();
			this.options.items = this.source.length
		},
		listen: function()
		{
			this.$element.on("focus", e.proxy(this.focus, this)).on("blur", e.proxy(this.blur, this)).on("keypress", e.proxy(this.keypress, this)).on("keyup", e.proxy(this.keyup, this));
			if (this.eventSupported("keydown"))
			{
				this.$element.on("keydown", e.proxy(this.keydown, this))
			}
			this.$menu.on("click", e.proxy(this.click, this)).on("mouseenter", "li", e.proxy(this.mouseenter, this)).on("mouseleave", "li", e.proxy(this.mouseleave, this));
			this.$button.on("click", e.proxy(this.toggle, this))
		},
		eventSupported: function(e)
		{
			var t = e in this.$element;
			if (!t)
			{
				this.$element.setAttribute(e, "return;");
				t = typeof this.$element[e] === "function"
			}
			return t
		},
		move: function(e)
		{
			if (!this.shown)
			{
				return
			}
			switch (e.keyCode)
			{
				case 9:
				case 13:
				case 27:
					e.preventDefault();
					break;
				case 38:
					e.preventDefault();
					this.prev();
					break;
				case 40:
					e.preventDefault();
					this.next();
					break
			}
			e.stopPropagation()
		},
		keydown: function(t)
		{
			this.suppressKeyPressRepeat = ~e.inArray(t.keyCode, [40, 38, 9, 13, 27]);
			this.move(t)
		},
		keypress: function(e)
		{
			if (this.suppressKeyPressRepeat)
			{
				return
			}
			this.move(e)
		},
		keyup: function(e)
		{
			switch (e.keyCode)
			{
				case 40:
				case 39:
				case 38:
				case 37:
				case 36:
				case 35:
				case 16:
				case 17:
				case 18:
					break;
				case 9:
				case 13:
					if (!this.shown)
					{
						return
					}
					this.select();
					break;
				case 27:
					if (!this.shown)
					{
						return
					}
					this.hide();
					break;
				default:
					this.clearTarget();
					this.lookup()
			}
			e.stopPropagation();
			e.preventDefault()
		},
		focus: function(e)
		{
			this.focused = true
		},
		blur: function(e)
		{
			var t = this;
			this.focused = false;
			var n = this.$element.val();
			if (!this.selected && n !== "")
			{
				this.$element.val("");
				this.$source.val("").trigger("change");
				this.$target.val("").trigger("change")
			}
			if (!this.mousedover && this.shown)
			{
				setTimeout(function()
				{
					t.hide()
				}, 200)
			}
		},
		click: function(e)
		{
			e.stopPropagation();
			e.preventDefault();
			this.select();
			this.$element.focus()
		},
		mouseenter: function(t)
		{
			this.mousedover = true;
			this.$menu.find(".active").removeClass("active");
			e(t.currentTarget).addClass("active")
		},
		mouseleave: function(e)
		{
			this.mousedover = false
		}
	};
	e.fn.combobox = function(n)
	{
		return this.each(function()
		{
			var r = e(this),
				i = r.data("combobox"),
				s = typeof n == "object" && n;
			if (!i)
			{
				r.data("combobox", i = new t(this, s))
			}
			if (typeof n == "string")
			{
				i[n]()
			}
		})
	};
	e.fn.combobox.defaults = {
		bsVersion: "3",
		menu: '<ul class="typeahead typeahead-long dropdown-menu"></ul>',
		item: '<li><a href="#"></a></li>'
	};
	e.fn.combobox.Constructor = t
}(window.jQuery);
(function(e)
{
	"use strict";
	e.fn.selectOrDie = function(t)
	{
		var n = {
				customID: null,
				customClass: "",
				placeholder: null,
				placeholderOption: false,
				prefix: null,
				cycle: false,
				stripEmpty: false,
				links: false,
				linksExternal: false,
				size: 0,
				tabIndex: 0,
				onChange: e.noop
			},
			r = {},
			i = false,
			s, o;
		var u = {
			initSoD: function(t)
			{
				r = e.extend(
				{}, n, t);
				return this.each(function()
				{
					if (!e(this).parent().hasClass("sod_selecst"))
					{
						var t = e(this),
							n = t.data("custom-id") ? t.data("custom-id") : r.customID,
							i = t.data("custom-class") ? t.data("custom-class") : r.customClass,
							s = t.data("prefix") ? t.data("prefix") : r.prefix,
							o = t.data("placeholder") ? t.data("placeholder") : r.placeholder,
							a = t.data("placeholder-option") ? t.data("placeholder-option") : r.placeholderOption,
							f = t.data("cycle") ? t.data("cycle") : r.cycle,
							l = t.data("links") ? t.data("links") : r.links,
							c = t.data("links-external") ? t.data("links-external") : r.linksExternal,
							h = parseInt(t.data("size")) ? t.data("size") : r.size,
							p = parseInt(t.data("tabindex")) ? t.data("tabindex") : r.tabIndex ? r.tabIndex : t.attr("tabindex") ? t.attr("tabindex") : r.tabIndex,
							d = t.data("strip-empty") ? t.data("strip-empty") : r.stripEmpty,
							v = t.prop("title") ? t.prop("title") : null,
							m = t.is(":disabled") ? " disabled" : "",
							g = "",
							y = "",
							b = 0,
							w, E, S;
						if (s)
						{
							g = '<span class="sod_prefix">' + s + "</span> "
						}
						if (o && !s)
						{
							y += '<span class="sod_label sod_placeholder">' + o + "</span>"
						}
						else
						{
							y += '<span class="sod_label">' + g + "</span>"
						}
						w = e("<span/>",
						{
							id: n,
							"class": "sod_selecst " + i + m,
							title: v,
							tabindex: p,
							html: y,
							"data-cycle": f,
							"data-links": l,
							"data-links-external": c,
							"data-placeholder": o,
							"data-placeholder-option": a,
							"data-prefix": s,
							"data-filter": ""
						}).insertAfter(this);
						if (u.isTouch())
						{
							w.addClass("touch")
						}
						E = e("<span/>",
						{
							"class": "sod_list_wrapper"
						}).appendTo(w);
						S = e("<span/>",
						{
							"class": "sod_list"
						}).appendTo(E);
						e("option, optgroup", t).each(function(t)
						{
							var n = e(this);
							if (d && !e.trim(n.text()))
							{
								n.remove()
							}
							else if (t === 0 && a && !g) u.populateSoD(n, S, w, true);
							else
							{
								u.populateSoD(n, S, w, false)
							}
						});
						if (h)
						{
							E.show();
							e(".sod_option:lt(" + h + ")", S).each(function()
							{
								b += e(this).outerHeight()
							});
							E.removeAttr("style");
							S.css(
							{
								"max-height": b
							})
						}
						t.appendTo(w);
						w.on("focusin", u.focusSod).on("click", u.triggerSod).on("click", ".sod_option", u.optionClick).on("mousemove", ".sod_option", u.optionHover).on("keydown", u.keyboardUse);
						t.on("change", u.selectChange);
						e(document).on("click", "label[for='" + t.attr("id") + "']", function(e)
						{
							e.preventDefault();
							w.focus()
						})
					}
					else
					{
						console.log("Select or Die: It looks like the SoD already exists")
					}
				})
			},
			populateSoD: function(t, n, r, i)
			{
				var s = r.data("placeholder"),
					o = r.data("placeholder-option"),
					u = r.data("prefix"),
					a = r.find(".sod_label"),
					f = t.parent(),
					l = t.text(),
					c = t.val(),
					h = t.data("custom-id") ? t.data("custom-id") : null,
					p = t.data("custom-class") ? t.data("custom-class") : "",
					d = t.is(":disabled") ? " disabled " : "",
					v = t.is(":selected") ? " selected active " : "",
					m = t.data("link") ? " link " : "",
					g = t.data("link-external") ? " linkexternal" : "",
					y = t.prop("label");
				if (t.is("option"))
				{
					e("<span/>",
					{
						"class": "sod_option " + p + d + v + m + g,
						id: h,
						title: l,
						html: l,
						"data-value": c
					}).appendTo(n);
					if (i && !u)
					{
						r.data("label", l);
						r.data("placeholder", l);
						t.prop("disabled", true);
						n.find(".sod_option:last").addClass("is-placeholder disabled");
						if (v)
						{
							a.addClass("sod_placeholder")
						}
					}
					else if (v && s && !o && !u)
					{
						r.data("label", s)
					}
					else if (v)
					{
						r.data("label", l)
					}
					if (v && !s || v && o || v && u)
					{
						a.append(l)
					}
					if (f.is("optgroup"))
					{
						n.find(".sod_option:last").addClass("groupchild");
						if (f.is(":disabled"))
						{
							n.find(".sod_option:last").addClass("disabled")
						}
					}
				}
				else
				{
					e("<span/>",
					{
						"class": "sod_option optgroup " + d,
						title: y,
						html: y,
						"data-label": y
					}).appendTo(n)
				}
			},
			focusSod: function()
			{
				var t = e(this);
				if (!t.hasClass("disabled"))
				{
					u.blurSod(e(".sod_selecst.focus").not(t));
					t.addClass("focus");
					e("html").on("click.sodBlur", function()
					{
						u.blurSod(t)
					})
				}
				else
				{
					u.blurSod(t)
				}
			},
			triggerSod: function(t)
			{
				t.stopPropagation();
				var n = e(this),
					r = n.find(".sod_list"),
					i = n.data("placeholder"),
					s = n.find(".active"),
					a = n.find(".selected");
				if (!n.hasClass("disabled") && !n.hasClass("open") && !n.hasClass("touch"))
				{
					n.addClass("open");
					u.listScroll(r, a)
				}
				else
				{
					clearTimeout(o);
					n.removeClass("open");
					if (i)
					{
						n.find(".sod_label").get(0).lastChild.nodeValue = s.text()
					}
				}
			},
			keyboardUse: function(t)
			{
				var n = e(this),
					r = n.find(".sod_list"),
					o = n.find(".sod_option"),
					a = n.find(".sod_label"),
					f = n.data("cycle"),
					l = o.filter(".active"),
					c, h, p;
				if (t.which > 36 && t.which < 41)
				{
					if (t.which === 37 || t.which === 38)
					{
						h = l.prevAll(":not('.disabled, .optgroup')").first();
						p = o.not(".disabled, .optgroup").last()
					}
					else if (t.which === 39 || t.which === 40)
					{
						h = l.nextAll(":not('.disabled, .optgroup')").first();
						p = o.not(".disabled, .optgroup").first()
					}
					if (!h.hasClass("sod_option") && f)
					{
						h = p
					}
					if (h.hasClass("sod_option") || f)
					{
						l.removeClass("active");
						h.addClass("active");
						a.get(0).lastChild.nodeValue = h.text();
						u.listScroll(r, h);
						if (!n.hasClass("open"))
						{
							i = true
						}
					}
					return false
				}
				else if (t.which === 13 || t.which === 32 && n.hasClass("open") && (n.data("filter")[0] === " " || n.data("filter") === ""))
				{
					t.preventDefault();
					l.click()
				}
				else if (t.which === 32 && !n.hasClass("open") && (n.data("filter")[0] === " " || n.data("filter") === ""))
				{
					t.preventDefault();
					i = false;
					n.click()
				}
				else if (t.which === 27)
				{
					u.blurSod(n)
				}
				if (t.which !== 0)
				{
					clearTimeout(s);
					n.data("filter", n.data("filter") + String.fromCharCode(t.which));
					c = o.filter(function()
					{
						return e(this).text().toLowerCase().indexOf(n.data("filter").toLowerCase()) === 0
					}).not(".disabled, .optgroup").first();
					if (c.length)
					{
						l.removeClass("active");
						c.addClass("active");
						u.listScroll(r, c);
						a.get(0).lastChild.nodeValue = c.text();
						if (!n.hasClass("open"))
						{
							i = true
						}
					}
					s = setTimeout(function()
					{
						n.data("filter", "")
					}, 500)
				}
			},
			optionHover: function()
			{
				var t = e(this);
				if (!t.hasClass("disabled") && !t.hasClass("optgroup"))
				{
					t.siblings().removeClass("active").end().addClass("active")
				}
			},
			optionClick: function(t)
			{
				t.stopPropagation();
				var n = e(this),
					r = n.closest(".sod_selecst"),
					i = n.hasClass("disabled"),
					s = n.hasClass("optgroup"),
					u = r.find(".sod_option:not('.optgroup')").index(this);
				if (r.hasClass("touch"))
				{
					return
				}
				if (!i && !s)
				{
					r.find(".selected, .sod_placeholder").removeClass("selected sod_placeholder");
					n.addClass("selected");
					r.find("select option")[u].selected = true;
					r.find("select").change()
				}
				clearTimeout(o);
				r.removeClass("open")
			},
			selectChange: function()
			{
				var t = e(this),
					n = t.find(":selected"),
					i = n.text(),
					s = t.closest(".sod_selecst");
				s.find(".sod_label").get(0).lastChild.nodeValue = i;
				s.data("label", i);
				r.onChange.call(this);
				if ((s.data("links") || n.data("link")) && !n.data("link-external"))
				{
					window.location.href = n.val()
				}
				else if (s.data("links-external") || n.data("link-external"))
				{
					window.open(n.val(), "_blank")
				}
			},
			blurSod: function(t)
			{
				if (e("body").find(t).length)
				{
					var n = t.data("label"),
						r = t.data("placeholder"),
						s = t.find(".active"),
						u = t.find(".selected"),
						a = false;
					clearTimeout(o);
					if (i && !s.hasClass("selected"))
					{
						s.click();
						a = true
					}
					else if (!s.hasClass("selected"))
					{
						s.removeClass("active");
						u.addClass("active")
					}
					if (!a && r)
					{
						t.find(".sod_label").get(0).lastChild.nodeValue = u.text()
					}
					else if (!a)
					{
						t.find(".sod_label").get(0).lastChild.nodeValue = n
					}
					i = false;
					t.removeClass("open focus");
					t.blur();
					e("html").off(".sodBlur")
				}
			},
			checkViewport: function(t, n)
			{
				var r = t[0].getBoundingClientRect(),
					i = n.outerHeight();
				if (r.bottom + i + 10 > e(window).height() && r.top - i > 10)
				{
					t.addClass("above")
				}
				else
				{
					t.removeClass("above")
				}
				o = setTimeout(function()
				{
					u.checkViewport(t, n)
				}, 200)
			},
			listScroll: function(e, t)
			{
				var n = e[0].getBoundingClientRect(),
					r = t[0].getBoundingClientRect();
				if (n.top > r.top)
				{
					e.scrollTop(e.scrollTop() - n.top + r.top)
				}
				else if (n.bottom < r.bottom)
				{
					e.scrollTop(e.scrollTop() - n.bottom + r.bottom)
				}
			},
			isTouch: function()
			{
				return e("html").hasClass("touch") || "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
			}
		};
		var a = {
			destroy: function()
			{
				return this.each(function()
				{
					var t = e(this),
						n = t.parent();
					if (n.hasClass("sod_selecst"))
					{
						t.off("change");
						n.find("span").remove();
						t.unwrap()
					}
					else
					{
						console.log("Select or Die: There's no SoD to destroy")
					}
				})
			},
			update: function()
			{
				return this.each(function()
				{
					var t = e(this),
						n = t.parent(),
						r = n.find(".sod_list:first");
					if (n.hasClass("sod_selecst"))
					{
						r.empty();
						n.find(".sod_label").get(0).lastChild.nodeValue = "";
						if (t.is(":disabled"))
						{
							n.addClass("disabled")
						}
						e("option, optgroup", t).each(function()
						{
							u.populateSoD(e(this), r, n)
						})
					}
					else
					{
						console.log("Select or Die: There's no SoD to update")
					}
				})
			},
			disable: function(t)
			{
				return this.each(function()
				{
					var n = e(this),
						r = n.parent();
					if (r.hasClass("sod_selecst"))
					{
						if (typeof t !== "undefined")
						{
							r.find(".sod_list:first .sod_option[data-value='" + t + "']").addClass("disabled");
							r.find(".sod_list:first .sod_option[data-label='" + t + "']").nextUntil(":not(.groupchild)").addClass("disabled");
							e("option[value='" + t + "'], optgroup[label='" + t + "']", this).prop("disabled", true)
						}
						else if (r.hasClass("sod_selecst"))
						{
							r.addClass("disabled");
							n.prop("disabled", true)
						}
					}
					else
					{
						console.log("Select or Die: There's no SoD to disable")
					}
				})
			},
			enable: function(t)
			{
				return this.each(function()
				{
					var n = e(this),
						r = n.parent();
					if (r.hasClass("sod_selecst"))
					{
						if (typeof t !== "undefined")
						{
							r.find(".sod_list:first .sod_option[data-value='" + t + "']").removeClass("disabled");
							r.find(".sod_list:first .sod_option[data-label='" + t + "']").nextUntil(":not(.groupchild)").removeClass("disabled");
							e("option[value='" + t + "'], optgroup[label='" + t + "']", this).prop("disabled", false)
						}
						else if (r.hasClass("sod_selecst"))
						{
							r.removeClass("disabled");
							n.prop("disabled", false)
						}
					}
					else
					{
						console.log("Select or Die: There's no SoD to enable")
					}
				})
			}
		};
		if (a[t])
		{
			return a[t].apply(this, Array.prototype.slice.call(arguments, 1))
		}
		else if (typeof t === "object" || !t)
		{
			return u.initSoD.apply(this, arguments)
		}
		else
		{
			e.error('Select or Die: Oh no! No such method "' + t + '" for the SoD instance')
		}
	}
})(jQuery);
(function(e)
{
	e("a[data-reveal-id]").on("click", function(t)
	{
		t.preventDefault();
		var n = e(this).attr("data-reveal-id");
		e("#" + n).reveal(e(this).data())
	});
	e.fn.reveal = function(t)
	{
		var n = {
			animation: "fadeAndPop",
			animationspeed: 300,
			closeonbackgroundclick: true,
			dismissmodalclass: "close-reveal-modal, close-this"
		};
		var t = e.extend(
		{}, n, t);
		return this.each(function()
		{
			function a()
			{
				s = false
			}

			function f()
			{
				s = true
			}
			var n = e(this),
				r = parseInt(n.css("top")),
				i = n.height() + r,
				s = false,
				o = e(".reveal-modal-bg");
			if (o.length == 0)
			{
				o = e('<div class="reveal-modal-bg" />').insertBefore("#container")
			}
			n.bind("reveal:open", function()
			{
				o.unbind("click.modalEvent");
				e("." + t.dismissmodalclass).unbind("click.modalEvent");
				if (!s)
				{
					f();
					if (t.animation == "fadeAndPop")
					{
						n.css(
						{
							top: e(document).scrollTop() - i,
							opacity: 0,
							visibility: "visible"
						});
						o.fadeIn(t.animationspeed / 2);
						n.delay(t.animationspeed / 2).animate(
						{
							top: e(document).scrollTop() + r + "px",
							opacity: 1
						}, t.animationspeed, a())
					}
					if (t.animation == "fade")
					{
						n.css(
						{
							opacity: 0,
							visibility: "visible",
							top: e(document).scrollTop() + r
						});
						o.fadeIn(t.animationspeed / 2);
						n.delay(t.animationspeed / 2).animate(
						{
							opacity: 1
						}, t.animationspeed, a())
					}
					if (t.animation == "none")
					{
						n.css(
						{
							visibility: "visible",
							top: e(document).scrollTop() + r
						});
						o.css(
						{
							display: "block"
						});
						a()
					}
				}
				n.unbind("reveal:open")
			});
			n.bind("reveal:close", function()
			{
				if (!s)
				{
					f();
					if (t.animation == "fadeAndPop")
					{
						o.delay(t.animationspeed).fadeOut(t.animationspeed);
						n.animate(
						{
							top: e(document).scrollTop() - i + "px",
							opacity: 0
						}, t.animationspeed / 2, function()
						{
							n.css(
							{
								top: r,
								opacity: 1,
								visibility: "hidden"
							});
							a()
						})
					}
					if (t.animation == "fade")
					{
						o.delay(t.animationspeed).fadeOut(t.animationspeed);
						n.animate(
						{
							opacity: 0
						}, t.animationspeed, function()
						{
							n.css(
							{
								opacity: 1,
								visibility: "hidden",
								top: r
							});
							a()
						})
					}
					if (t.animation == "none")
					{
						n.css(
						{
							visibility: "hidden",
							top: r
						});
						o.css(
						{
							display: "none"
						})
					}
				}
				n.unbind("reveal:close")
			});
			n.trigger("reveal:open");
			var u = e("." + t.dismissmodalclass).bind("click.modalEvent", function()
			{
				n.trigger("reveal:close")
			});
			if (t.closeonbackgroundclick)
			{
				o.css(
				{
					cursor: "pointer"
				});
				o.bind("click.modalEvent", function()
				{
					n.trigger("reveal:close")
				})
			}
			e("body").keyup(function(e)
			{
				if (e.which === 27)
				{
					n.trigger("reveal:close")
				}
			})
		})
	}
})(jQuery);
(function(e, t, n)
{
	function c(e)
	{
		var t = {};
		var r = /^jQuery\d+$/;
		n.each(e.attributes, function(e, n)
		{
			if (n.specified && !r.test(n.name))
			{
				t[n.name] = n.value
			}
		});
		return t
	}

	function h(e, t)
	{
		var r = this;
		var i = n(r);
		if (r.value == i.attr("placeholder") && i.hasClass("placeholder"))
		{
			if (i.data("placeholder-password"))
			{
				i = i.hide().next().show().attr("id", i.removeAttr("id").data("placeholder-id"));
				if (e === true)
				{
					return i[0].value = t
				}
				i.focus()
			}
			else
			{
				r.value = "";
				i.removeClass("placeholder");
				r == d() && r.select()
			}
		}
	}

	function p()
	{
		var e;
		var t = this;
		var r = n(t);
		var i = this.id;
		if (t.value == "")
		{
			if (t.type == "password")
			{
				if (!r.data("placeholder-textinput"))
				{
					try
					{
						e = r.clone().attr(
						{
							type: "text"
						})
					}
					catch (s)
					{
						e = n("<input>").attr(n.extend(c(this),
						{
							type: "text"
						}))
					}
					e.removeAttr("name").data(
					{
						"placeholder-password": r,
						"placeholder-id": i
					}).bind("focus.placeholder", h);
					r.data(
					{
						"placeholder-textinput": e,
						"placeholder-id": i
					}).before(e)
				}
				r = r.removeAttr("id").hide().prev().attr("id", i).show()
			}
			r.addClass("placeholder");
			r[0].value = r.attr("placeholder")
		}
		else
		{
			r.removeClass("placeholder")
		}
	}

	function d()
	{
		try
		{
			return t.activeElement
		}
		catch (e)
		{}
	}
	var r = Object.prototype.toString.call(e.operamini) == "[object OperaMini]";
	var i = "placeholder" in t.createElement("input") && !r;
	var s = "placeholder" in t.createElement("textarea") && !r;
	var o = n.fn;
	var u = n.valHooks;
	var a = n.propHooks;
	var f;
	var l;
	if (i && s)
	{
		l = o.placeholder = function()
		{
			return this
		};
		l.input = l.textarea = true
	}
	else
	{
		l = o.placeholder = function()
		{
			var e = this;
			e.filter((i ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind(
			{
				"focus.placeholder": h,
				"blur.placeholder": p
			}).data("placeholder-enabled", true).trigger("blur.placeholder");
			return e
		};
		l.input = i;
		l.textarea = s;
		f = {
			get: function(e)
			{
				var t = n(e);
				var r = t.data("placeholder-password");
				if (r)
				{
					return r[0].value
				}
				return t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
			},
			set: function(e, t)
			{
				var r = n(e);
				var i = r.data("placeholder-password");
				if (i)
				{
					return i[0].value = t
				}
				if (!r.data("placeholder-enabled"))
				{
					return e.value = t
				}
				if (t == "")
				{
					e.value = t;
					if (e != d())
					{
						p.call(e)
					}
				}
				else if (r.hasClass("placeholder"))
				{
					h.call(e, true, t) || (e.value = t)
				}
				else
				{
					e.value = t
				}
				return r
			}
		};
		if (!i)
		{
			u.input = f;
			a.value = f
		}
		if (!s)
		{
			u.textarea = f;
			a.value = f
		}
		n(function()
		{
			n(t).delegate("form", "submit.placeholder", function()
			{
				var e = n(".placeholder", this).each(h);
				setTimeout(function()
				{
					e.each(p)
				}, 10)
			})
		});
		n(e).bind("beforeunload.placeholder", function()
		{
			n(".placeholder").each(function()
			{
				this.value = ""
			})
		})
	}
})(this, document, jQuery);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.Krang = function()
	{
		"use strict";
		var e, t, n, r, i, s;
		r = {};
		e = -1;
		s = function(e, t)
		{
			var n;
			if (!r.hasOwnProperty(e))
			{
				return false
			}
			n = function()
			{
				var n, i, s, o, u;
				s = r[e];
				o = function(e)
				{
					return function()
					{
						throw e
					}
				};
				n = 0;
				i = s.length;
				u = [];
				while (n < i)
				{
					try
					{
						if (s[n].ref != null)
						{
							s[n].func.call(s[n].ref, e, t)
						}
						else
						{
							s[n].func(e, t)
						}
					}
					catch (a)
					{
						setTimeout(o(a), 0)
					}
					u.push(n++)
				}
				return u
			};
			setTimeout(n, 0);
			return true
		};
		t = function(e, t)
		{
			return s(e, t, false)
		};
		n = function(t, n, i)
		{
			var s;
			if (!r.hasOwnProperty(t))
			{
				r[t] = []
			}
			s = (++e).toString();
			r[t].push(
			{
				token: s,
				func: n,
				ref: i
			});
			return s
		};
		i = function(e)
		{
			var t, n, i;
			for (i in r)
			{
				if (r.hasOwnProperty(i))
				{
					t = 0;
					n = r[i].length;
					while (t < n)
					{
						if (r[i][t].token === e)
						{
							r[i].splice(t, 1);
							return e
						}
						t++
					}
				}
			}
			return false
		};
		return {
			publish: t,
			subscribe: n,
			unsubscribe: i
		}
	}()
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.Yoda = function()
	{
		"use strict";

		function t(e)
		{
			this.process(e)
		}
		var e;
		e = Object.keys;
		t.prototype.keys = e || function(e)
		{
			var t, n;
			if (e !== Object(e))
			{
				throw new TypeError("Invalid object")
			}
			n = [];
			for (t in e)
			{
				if (_.has(e, t))
				{
					n[n.length] = t
				}
			}
			return n
		};
		t.prototype.process = function(e)
		{
			this.methods = e;
			this.RouteVals = _.keys(this.methods.Routes);
			this.Routes = this.methods.Routes;
			return this.Router()
		};
		t.prototype.findMethod = function(e)
		{
			var t;
			t = this.Routes[e];
			return this.methods[t]
		};
		t.prototype.routeReg = function(e)
		{
			var t, n, r;
			n = /:\w+/g;
			r = /\*\w+/g;
			t = /[-[\]{}()+?.,\\^$|#\s]/g;
			e = e.replace(t, "\\$&").replace(n, "([^/]+)").replace(r, "(.*?)");
			if (e === "*")
			{
				return new RegExp(".*")
			}
			else
			{
				return new RegExp("^" + e + "$")
			}
		};
		t.prototype.Router = function()
		{
			var e, t, n, r, i, s, o, u;
			n = window.RMP.Settings.page;
			o = this.RouteVals;
			t = 0;
			u = [];
			while (t < o.length)
			{
				i = this.routeReg(o[t]);
				if (i.test(n))
				{
					s = i.exec(n);
					e = this.findMethod(o[t]);
					r = s;
					e(r)
				}
				u.push(t++)
			}
			return u
		};
		return t
	}()
}).call(this);
(function()
{
	var e = this;
	window.RMP = window.RMP ||
	{};
	window.RMP.Autocomplete = function()
	{
		function e(t)
		{
			var n = this;
			this.clearAc = function(t)
			{
				return e.prototype.clearAc.apply(n, arguments)
			};
			this.hideIfShort = function(t)
			{
				return e.prototype.hideIfShort.apply(n, arguments)
			};
			this.showAc = function(t)
			{
				return e.prototype.showAc.apply(n, arguments)
			};
			this.changeVal = function(t)
			{
				return e.prototype.changeVal.apply(n, arguments)
			};
			this.touchEndHandler = function(t)
			{
				return e.prototype.touchEndHandler.apply(n, arguments)
			};
			this.touchStartHandler = function(t)
			{
				return e.prototype.touchStartHandler.apply(n, arguments)
			};
			this.renderTemp = function(t)
			{
				return e.prototype.renderTemp.apply(n, arguments)
			};
			this.searchinput = t.input;
			this.acbox = t.acBox;
			this.Temp = t.template;
			this.keylength = t.keylength;
			this.iterator = t.data_iterator;
			this.search_type = t.search_type;
			this.content_type = t.content_type;
			this.clickcallback = t.click_callback ? t.click_callback : false;
			this.build();
			this.acbox.on("click", "li:not('.noclick')", this.changeVal);
			this.acbox.on("touchstart", "li:not('.noclick')", this.touchStartHandler);
			this.acbox.on("touchend", "li:not('.noclick')", this.touchEndHandler);
			this.term = "";
			this.searchinput.on("blur", this.clearAc);
			this.searchinput.on("focus", this.showAc);
			this.searchinput.on("keyup", this.hideIfShort);
			this.fqparams = ["content_type_s:" + this.content_type];
			this.acbox.onmousedown = function(e)
			{
				return false
			}
		}
		e.prototype.build = function()
		{
			var e = this;
			return this.searchinput.autocomplete(
			{
				minLength: this.keylength,
				source: function(t, n)
				{
					var r, i, s, o;
					e.acbox.empty();
					i = t.term;
					e.term = i;
					if (e.content_type === "TEACHER")
					{
						o = $("#leftNav #searchProfessorSchool22").val();
						s = $("#leftNav #nameprofid").val();
						if (!o)
						{
							o = $("#mainContent #searchProfessorSchool22").val()
						}
						if (o)
						{
							o = o.replace(/-/g, "\\-")
						}
						e.extrafq = 'schoolname_t:"' + o + '"';
						if (s)
						{
							e.extrafq2 = "schoolid_s:" + s
						}
						if (o)
						{
							e.fqparams.splice(1, 1);
							e.fqparams.push(e.extrafq);
							if (s)
							{
								e.fqparams.push(e.extrafq2)
							}
						}
						r = {
							prefix: i,
							qf: "teacherfullname_t^1000 teacherfullname_autosuggest",
							bf: "pow(total_number_of_ratings_i,2.1)",
							defType: "edismax",
							siteName: "rmp",
							group: "off",
							"group.field": e.search_type,
							"group.limit": 20,
							fq: e.fqparams
						}
					}
					else
					{
						r = {
							q: i,
							defType: "edismax",
							bq: 'schoolname_sort_s:"' + i + '"^1000',
							qf: "schoolname_autosuggest",
							bf: "pow(total_number_of_ratings_i,1.9)",
							sort: "score desc",
							siteName: "rmp",
							rows: 20,
							group: "off",
							"group.field": e.search_type,
							"group.limit": 20,
							fq: "content_type_s:" + e.content_type
						}
					}
					r = $.param(r, true);
					return $.ajax(
					{
						url: window.RMP.Settings.typeahead,
						dataType: "JSONP",
						cache: true,
						data: r,
						success: e.renderTemp
					})
				}
			})
		};
		e.prototype.renderTemp = function(e)
		{
			var t = this;
			if (e.response.docs.length > 0)
			{
				this.acbox.empty();
				_.each(e.response.docs, function(e)
				{
					return t.acbox.show().append(t.Temp(e))
				});
				this.sPath = window.RMP.Settings.pathname + "/search?query=" + this.term;
				if (this.content_type === "TEACHER")
				{
					this.sPath += "&type=professor&queryBy=teacherName";
					return this.acbox.append("<li class='dont_see noclick'><a href='" + this.sPath + "'>Don't see your " + this.iterator + "? Click here.</a></li>")
				}
				else
				{
					return this.sPath += "&type=schools&queryBy=schoolName"
				}
			}
		};
		e.prototype.touchStartHandler = function(e)
		{
			var t;
			t = e.originalEvent.targetTouches[0];
			this.cachedX = t.pageX;
			return this.cachedY = t.pageY
		};
		e.prototype.touchEndHandler = function(e)
		{
			var t;
			e.preventDefault();
			t = e.originalEvent.changedTouches[0];
			if (this.cachedX > t.pageX - 20 && this.cachedX < t.pageX + 20 && this.cachedY > t.pageY - 20 && this.cachedY < t.pageY + 20)
			{
				this.changeVal(e);
				this.searchinput.blur();
				return this.clearAc(e)
			}
		};
		e.prototype.changeVal = function(e)
		{
			var t;
			e.preventDefault();
			if (!this.clickcallback)
			{
				t = $(e.currentTarget).data("query");
				return this.searchinput.val(t)
			}
			else
			{
				return this.clickcallback(e)
			}
		};
		e.prototype.showAc = function(e)
		{
			return this.searchinput.autocomplete("search", e.target.value)
		};
		e.prototype.hideIfShort = function(e)
		{
			if (e.target.value.length < 2)
			{
				return this.acbox.hide().empty()
			}
		};
		e.prototype.clearAc = function(e)
		{
			var t = this;
			return _.delay(function()
			{
				return t.acbox.hide().empty()
			}, 200)
		};
		return e
	}()
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.Cache = {
		$window: $(window),
		$document: $(document),
		$body: $(document.body),
		$html: $(document.documentElement)
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.departmentSearchr = function(e)
	{
		var t, n, r, i, s;
		n = e;
		i = {};
		s = function(e)
		{
			return window.RMP.Krang.publish("departments-loaded-" + n, e)
		};
		t = function()
		{
			var e, t;
			e = {
				sid: n
			};
			t = $.ajax(
			{
				url: window.RMP.Settings.pathname + "/teacher/getDepartmentListFromSchool",
				type: "GET",
				data: e
			});
			return t.done(s)
		};
		r = function()
		{
			return t()
		};
		return {
			init: r
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.GenericValidate = function()
	{
		var e, t, n;
		e = null;
		n = function(t)
		{
			var n, r, i;
			i = e.find(".required");
			n = e.find("#recaptcha_response_field");
			$(".form-elem.error").removeClass("error");
			r = 0;
			_.each(i, function(e)
			{
				if (!$(e).val())
				{
					$(e).parents(".form-elem").addClass("error");
					return r++
				}
			});
			if (n.length && !n.val())
			{
				n.parents(".form-elem").addClass("error");
				r++
			}
			if (r !== 0)
			{
				t.preventDefault();
				return $("html, body").animate(
				{
					scrollTop: $(".form-elem.error").offset().top - 87
				}, 1e3)
			}
		};
		t = function(t)
		{
			e = t;
			return e.on("submit", n)
		};
		return {
			init: t
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.leftNav = function(e, t)
	{
		var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N;
		if (e == null)
		{
			e = "#leftNav"
		}
		if (t == null)
		{
			t = "#navToggle"
		}
		f = $(t);
		u = $(e);
		a = $(t + " li a");
		o = $(".menu");
		r = null;
		h = window.location.href.indexOf("blog") > -1;
		p = $("body").hasClass("home_index");
		l = 110;
		c = null;
		S = function()
		{
			var e;
			e = $(window).scrollTop();
			if (e > l)
			{
				return $(".left-panel").addClass("sticky")
			}
			else
			{
				return $(".left-panel").removeClass("sticky")
			}
		};
		i = function(e)
		{
			if ($(e.target).closest("#menuWrap").length === 0)
			{
				u.removeClass();
				a.removeClass("active");
				if ($("#cookie_notice").length === 0)
				{
					return $(".loggedin").removeClass("active")
				}
			}
		};
		s = function()
		{
			u.removeClass();
			return a.removeClass("active")
		};
		b = function(e)
		{
			var t, n, r, i;
			e.preventDefault();
			e.stopPropagation();
			t = $(e.currentTarget);
			u.removeClass();
			r = t.attr("data-menu");
			if (!t.hasClass("blocked"))
			{
				if (t.hasClass("active"))
				{
					t.removeClass("active");
					if ($(".left-panel").hasClass("off"))
					{
						return $(".right-panel").addClass("wide")
					}
				}
				else
				{
					a.removeClass("active");
					t.addClass("active");
					if (u.hasClass("show-menu") === false)
					{
						u.addClass("show-menu").addClass(r);
						i = $("#leftNav #" + r).find(".search-by a");
						i.removeClass();
						i.eq(0).addClass("active")
					}
					else
					{
						u.addClass("show-menu").addClass(r);
						i = $("#leftNav #" + r).find(".search-by a");
						i.removeClass();
						i.eq(0).addClass("active")
					}
					switch (r)
					{
						case "profMenu":
							n = "LEFTNAV:Profs";
							break;
						case "schoolMenu":
							n = "LEFTNAV:School";
							break;
						case "rateMenu":
							n = "LEFTNAV:Rate";
							break;
						case "blogMenu":
							n = "LEFTNAV:Blog";
							if ($("#blog-item-list li").length === 0)
							{
								$("#blog-filter").change()
							}
							break;
						case "myProfsMenu":
							n = "LEFTNAV:MyProfs";
							if ($(".left-panel").hasClass("off"))
							{
								$(".right-panel").removeClass("wide")
							}
					}
					return btg.Controller.sendLinkEvent(
					{
						linkName: n,
						linkType: "o"
					})
				}
			}
			else
			{
				if ($(e.target).closest("#menuWrap").length === 0)
				{
					return a.removeClass("active")
				}
			}
		};
		x = function(e)
		{
			var t, n;
			e.preventDefault();
			r = $(e.currentTarget).parent().data("search");
			t = $(e.currentTarget).parent();
			$('a[data-menu="' + r + '"]').removeClass("active");
			t.find("a").removeClass();
			$(e.currentTarget).addClass("active");
			n = $(e.currentTarget).data("type");
			r += " show-menu";
			return u.removeClass().addClass(r + " " + n)
		};
		g = function(e)
		{
			var t;
			t = $(e.currentTarget).data("id");
			c.eVar2 = $(e.currentTarget).find(".main").text();
			c.eVar3 = "TEACHER";
			c.section = "professors";
			btg.Controller.sendPageCall(c);
			btg.Controller.sendLinkEvent(
			{
				linkName: "LEFTNAV:Rate_Prof",
				linkType: "o"
			});
			return window.location = window.RMP.Settings.pathname + "/" + "AddRating.jsp?tid=" + t
		};
		m = function(e)
		{
			var t;
			t = $(e.currentTarget).data("id");
			c.eVar2 = $(e.currentTarget).find(".main").text();
			c.eVar3 = "SCHOOL";
			c.section = "school";
			btg.Controller.sendPageCall(c);
			btg.Controller.sendLinkEvent(
			{
				linkName: "LEFTNAV:Rate_School",
				linkType: "o"
			});
			return window.location = window.RMP.Settings.pathname + "/" + "ratemyCampusA.jsp?sid=" + t
		};
		y = function(e)
		{
			var t;
			t = $(e.currentTarget).data("id");
			c.eVar2 = $(e.currentTarget).find(".main").text();
			c.eVar3 = "SCHOOL";
			c.section = "school";
			btg.Controller.sendPageCall(c);
			btg.Controller.sendLinkEvent(
			{
				linkName: "LEFTNAV:School_byname",
				linkType: "o"
			});
			return window.location = window.RMP.Settings.pathname + "/" + "campusRatings.jsp?sid=" + t
		};
		v = function(e)
		{
			var t;
			t = $(e.currentTarget).data("id");
			c.eVar2 = $(e.currentTarget).find(".main").text();
			c.eVar3 = "TEACHER";
			c.section = "professors";
			btg.Controller.sendPageCall(c);
			btg.Controller.sendLinkEvent(
			{
				linkName: "LEFTNAV:Profs_byname_proftypeahead",
				linkType: "o"
			});
			return window.location = window.RMP.Settings.pathname + "/" + "ShowRatings.jsp?tid=" + t
		};
		N = function()
		{
			return this.preventHide = true
		};
		w = function(e)
		{
			e.preventDefault();
			$("a[data-menu=schoolMenu]").removeClass("active");
			return u.removeClass().addClass("show-menu").addClass("profMenu")
		};
		d = function(e)
		{
			var t, n, r, i;
			e.preventDefault();
			i = $(e.currentTarget).data("id");
			r = $(e.currentTarget).data("query");
			n = $(e.currentTarget).parents(".drop-down-fix").find("input[type=text]");
			n.val(r);
			$(".schoolID").val(i);
			btg.Controller.sendLinkEvent(
			{
				linkName: "LEFTNAV:Profs_byname_schooltypeahead",
				linkType: "o"
			});
			t = window.RMP.departmentSearchr(i).init();
			return window.RMP.Krang.subscribe("departments-loaded-" + i, function(e, t)
			{
				$("#leftNav #searchProfessorDepartment").empty();
				$("#leftNav #searchProfessorDepartment, #mainContent #searchProfessorDepartment").append("<option>select</option>");
				_.each(t.departments, function(e)
				{
					if (e.name)
					{
						return $("#leftNav #searchProfessorDepartment, #mainContent #searchProfessorDepartment").append('<option value="' + e.name + '">' + e.name + "</option>")
					}
				});
				$("select").selectOrDie("destroy");
				return $("select").selectOrDie(
				{
					size: 8
				})
			})
		};
		T = function()
		{
			return $(".trigger-panel").on("touchend click", function(e)
			{
				var t, n;
				e.preventDefault();
				if ($("#mobileHeader").is(":visible"))
				{
					t = $(this).data("mobile-link");
					location.href = t
				}
				else
				{
					n = $(this).data("menu");
					$("#leftNav").addClass("show-menu");
					$("#leftNav").addClass(n)
				}
				return e.stopPropagation()
			})
		};
		E = function()
		{
			return $(window).on("scroll.leftNav", S)
		};
		n = function()
		{
			c = {};
			c.pageName = "/search/index";
			c.channel = "search";
			c.events = "event36, event38";
			a.on("touchend click", b);
			u.on("touchend click", ".search-by a", x);
			$(".close-left-nav").on("touchend click", s);
			$("#searchBox").on("touchend click", i);
			$(".reset-search-form").on("touchend click", function()
			{
				u.removeClass();
				return $(a).removeClass("active")
			});
			$("#schoolMenu").on("click", ".click-here", function(e)
			{
				e.preventDefault();
				u.removeClass("schoolMenu");
				u.addClass("profMenu");
				return e.stopPropagation()
			});
			new window.RMP.Autocomplete(
			{
				input: $("#leftNav #rateProfessorACC, #mainContent #rateProfessorACC"),
				acBox: $("#leftNav #rateProfAC ul, #mainContent #rateProfAC ul"),
				template: Handlebars.compile('<li data-id="{{pk_id}}"><span class="wrap"><span class="main">{{{teacherfullname_s}}}</span><span class="sub">{{schoolname_s}}</span></span></li>'),
				keylength: 2,
				data_iterator: "professor",
				search_type: "content_type_s",
				click_callback: g,
				last_item: "<li class='dont_see noclick'>Don't see your professor? <a href='" + window.RMP.Settings.pathname + "/AddTeacher.jsp'>Add them</a> </li>",
				content_type: "TEACHER"
			});
			new window.RMP.Autocomplete(
			{
				input: $("#leftNav #searchProfessorNamee, #mainContent #searchProfessorNamee"),
				acBox: $("#leftNav #profNameAc ul, #mainContent #profNameAc ul"),
				template: Handlebars.compile('<li data-id="{{pk_id}}"><span class="wrap"><span class="main">{{{teacherfullname_s}}}</span><span class="sub">{{schoolname_s}}</span></span></li>'),
				search_type: "content_type_s",
				keylength: 2,
				data_iterator: "professor",
				click_callback: v,
				last_item: "<li class='dont_see noclick'>Don't see your professor? <a href='" + window.RMP.Settings.pathname + "/AddTeacher.jsp'>Add them</a> </li>",
				content_type: "TEACHER"
			});
			new window.RMP.Autocomplete(
			{
				input: $("#leftNav #schoolNamee, #mainContent #schoolNamee"),
				acBox: $("#leftNav #rateSchoolAC ul, #mainContent #rateSchoolAC ul"),
				template: Handlebars.compile('<li data-id="{{pk_id}}"><span class="wrap"><span class="main">{{schoolname_s}}</span><span class="sub">{{schoolcity_s}}, {{schoolstate_s}}</span></span></li>'),
				search_type: "content_type_s",
				keylength: 2,
				data_iterator: "school",
				click_callback: m,
				last_item: "<li class='dont_see noclick'>Don't see your school? <a href='" + window.RMP.Settings.pathname + "/AddSchool.jsp'>Add it</a> </li>",
				content_type: "SCHOOL"
			});
			new window.RMP.Autocomplete(
			{
				input: $("#leftNav #searchProfessorSchooll,#leftNav #searchProfessorSchool22, #mainContent #searchProfessorSchooll,#mainContent #searchProfessorSchool22"),
				acBox: $("#leftNav #profauContainer ul, #leftNav #profauContainer2 ul, #mainContent #profauContainer ul, #mainContent #profauContainer2 ul"),
				template: Handlebars.compile('<li data-id="{{pk_id}}" data-query="{{schoolname_s}}"><span class="wrap"><span class="main">{{schoolname_s}}</span><span class="sub">{{schoolcity_s}}, {{schoolstate_s}}</span></span></li>'),
				search_type: "content_type_s",
				keylength: 2,
				data_iterator: "school",
				content_type: "SCHOOL",
				last_item: "<li class='dont_see noclick'>Don't see your school? <a href='" + window.RMP.Settings.pathname + "/add/school'>Add it</a> </li>",
				click_callback: d
			});
			return new window.RMP.Autocomplete(
			{
				input: $("#leftNav #schoolNames #schoolNamee, #mainContent #schoolNames #schoolNamee"),
				acBox: $("#leftNav #schoolauContainer ul, #mainContent #schoolauContainer ul"),
				template: Handlebars.compile('<li data-id="{{pk_id}}"><span class="wrap"><span class="main">{{schoolname_s}}</span><span class="sub">{{schoolcity_s}}, {{schoolstate_s}}</span></span></li>'),
				keylength: 2,
				data_iterator: "school",
				search_type: "content_type_s",
				click_callback: y,
				last_item: "<li class='dont_see noclick'>Don't see your school? <a href='" + window.RMP.Settings.pathname + "/add/school'>Add it</a> </li>",
				content_type: "SCHOOL"
			})
		};
		return {
			init: n,
			trigger: T,
			sticky: E
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.Login = function()
	{
		var e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T;
		e = false;
		t = false;
		r = $("#login");
		u = $("#userActionDD");
		o = $(".overlay");
		n = $("#leftOverlay");
		a = r.find("span").eq(0);
		s = $("#mobileNav");
		i = $("#logout");
		y = function(e)
		{
			u.addClass("loggedIn");
			a.html("Hi, " + e.pfname);
			s.find(".loggedin_user_name").text("Hi " + e.pfname + "!");
			s.addClass("show-prof");
			u.empty().append(ProfessorLoggedInTemplate(e));
			return $("select, input[type=checkbox]").uniform()
		};
		b = function(e)
		{
			var t;
			u.addClass("loggedIn");
			t = {
				id: e.id,
				first_name: e.pfname,
				last_name: e.plname,
				ratings: e.ratings,
				institution: e.institution
			};
			a.html("Hi, " + e.pfname);
			s.find(".loggedin_user_name").text("Hi " + e.pfname + "!");
			s.addClass("show-student");
			u.empty().append(StudentLoggedInTemplate(t));
			return $("select, input[type=checkbox]").uniform()
		};
		g = function()
		{
			u.addClass("not-loggedIn");
			a.html("login / sign up");
			u.empty().append(LoginMenuTemplate(
			{}));
			u.append(CreateUserTemplate(
			{}));
			u.append(ResetPasswordTemplate(
			{}));
			return $("select, input[type=checkbox]").uniform()
		};
		f = function(e)
		{
			var t;
			t = JSON.stringify(e);
			$.cookie("mtvrmp.userinfo", t,
			{
				path: window.RMP.Settings.pathname + "/"
			});
			if (e.type === "student")
			{
				b(e);
				return window.RMP.Settings.user.type = "student"
			}
			else
			{
				y(e);
				return window.RMP.Settings.user.type = "professor"
			}
		};
		w = function(e)
		{
			if (r.hasClass("active"))
			{
				return
			}
			$("#tablet-social-dropdown").removeClass("show-dropdown");
			e.stopPropagation();
			e.preventDefault();
			r.addClass("active");
			o.addClass("show");
			return n.addClass("show")
		};
		p = function(e)
		{
			if (!r.hasClass("active"))
			{
				return
			}
			e.preventDefault();
			e.stopPropagation();
			r.removeClass("active");
			o.removeClass("show");
			return n.removeClass("show")
		};
		E = function(e)
		{
			var t, n, i, s;
			e.preventDefault();
			t = r.find("#loginForm");
			t.removeClass();
			i = $("#loginForm").attr("action");
			n = {};
			t.serializeArray().map(function(e)
			{
				n[e.name] = e.value
			});
			if (n.pemail.length > 0 && n.ppassword.length > 0)
			{
				s = $.ajax(
				{
					url: i,
					type: "POST",
					data: n,
					beforeSend: function() {}
				});
				s.error(function(e)
				{
					return t.addClass("show-error email password")
				});
				return s.success(f)
			}
			else
			{
				return t.addClass("show-error email password")
			}
		};
		v = function(e)
		{
			e.preventDefault();
			$.removeCookie("mtvrmp.userinfo",
			{
				path: window.RMP.Settings.pathname + "/"
			});
			g();
			window.location = window.RMP.Settings.pathname;
			$mobileNav.removeClass();
			return $mobileNav.addClass("slide")
		};
		T = function(e)
		{
			e.preventDefault();
			e.stopPropagation();
			u.removeClass().addClass("signup");
			$("#box-holder").removeClass().addClass("show-student");
			$("select, input[type=checkbox]").uniform();
			return new window.RMP.Autocomplete(
			{
				input: $("#leftNav #schoolNames #schoolNamee"),
				acBox: $("#leftNav #schoolauContainer ul"),
				template: Handlebars.compile('<li data-query="{{schoolname_s}}"><span class="main">{{schoolname_s}}</span><span class="sub">{{schoolcity_s}}, {{schoolstate_s}}</span></li>'),
				searchUrl: window.RMP.Settings.pathname + "/" + "search/school/",
				keylength: 2,
				data_iterator: "schools"
			})
		};
		S = function(e)
		{
			var t;
			e.preventDefault();
			e.stopPropagation();
			t = $(e.currentTarget).attr("data-signup");
			$("#box-holder").removeClass().addClass("show-" + t);
			return $("select, input[type=checkbox]").uniform()
		};
		x = function(e)
		{
			e.preventDefault();
			e.stopPropagation();
			return u.removeClass().addClass("show-resetPassword")
		};
		c = function(e)
		{
			$("#desktopLoginSectionContainer").html(e);
			$("#desktopLoginSectionContainer").addClass("processed");
			$("#login.loggedin").on("click", w);
			$(".js-close").on("click", p);
			r = $("#login");
			u = $("#userActionDD");
			o = $(".overlay");
			n = $("#leftOverlay");
			a = r.find("span").eq(0);
			s = $("#mobileNav");
			i = $("#logout");
			u.on("click", "#userLogin", E);
			u.on("click", "#signupLink", T);
			u.on("click", "#forgotPassword", x);
			return u.on("click", ".tab", S)
		};
		h = function(e)
		{
			$("#mobileLoginSectionContainer").html(e);
			return $("#login.loggedin .welcome-tablet").on("click", w)
		};
		l = function(e)
		{
			var t, n, r, i, s, o;
			r = -1;
			if (document.cookie)
			{
				n = document.cookie.split(";");
				e = e + "=";
				i = function(t)
				{
					t = $.trim(t);
					if (t.substring(0, e.length) === e)
					{
						return r = decodeURIComponent(t.substring(e.length))
					}
				};
				for (s = 0, o = n.length; s < o; s++)
				{
					t = n[s];
					i(t)
				}
			}
			return r
		};
		d = function()
		{
			if (e === true)
			{
				return
			}
			e = true;
			if (l("isLoggedIn") === "true")
			{
				return $.ajax(
				{
					url: window.RMP.Settings.pathname + "/people/loginSection?viaAjax=true",
					dataType: "HTML",
					cache: true,
					success: c
				})
			}
			else
			{
				return $("#desktopLoginSectionContainer").addClass("processed")
			}
		};
		m = function()
		{
			enquire.register("screen and (min-width: 768px)",
			{
				match: function()
				{
					return d()
				}
			});
			if (t === true)
			{
				return
			}
			t = true;
			if (l("isLoggedIn") === "true")
			{
				return $.ajax(
				{
					url: window.RMP.Settings.pathname + "/people/mobileloginSection?viaAjax=true",
					dataType: "HTML",
					cache: true,
					success: h
				})
			}
		};
		return {
			init: d,
			mInit: m
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.ContextSwitch = function()
	{
		var e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v;
		e = $(".option");
		n = $("#homeGrid");
		t = $(".reset-search-form");
		r = null;
		o = null;
		l = function(e)
		{
			var t;
			t = $(e.currentTarget).data("id");
			o.eVar2 = $(e.currentTarget).find(".main").text();
			o.eVar3 = "TEACHER";
			o.section = "professors";
			btg.Controller.sendPageCall(o);
			btg.Controller.sendLinkEvent(
			{
				linkName: "HOME:RateProf",
				linkType: "o"
			});
			return window.location = window.RMP.Settings.pathname + "/AddRating.jsp?tid=" + t
		};
		f = function(e)
		{
			var t;
			t = $(e.currentTarget).data("id");
			o.eVar2 = $(e.currentTarget).find(".main").text();
			o.eVar3 = "SCHOOL";
			o.section = "school";
			btg.Controller.sendPageCall(o);
			btg.Controller.sendLinkEvent(
			{
				linkName: "GLOBAL_NAV:rateSchoolHomepageSearchTypeaheadClick",
				linkType: "o"
			});
			return window.location = window.RMP.Settings.pathname + "/ratemyCampusA.jsp?sid=" + t
		};
		h = function(e)
		{
			var t;
			t = $(e.currentTarget).data("id");
			o.eVar2 = $(e.currentTarget).find(".main").text();
			o.eVar3 = "SCHOOL";
			o.section = "school";
			btg.Controller.sendPageCall(o);
			btg.Controller.sendLinkEvent(
			{
				linkName: "HOME:FindSchool_byname_schooltypeahead",
				linkType: "o"
			});
			return window.location = window.RMP.Settings.pathname + "/campusRatings.jsp?sid=" + t
		};
		a = function(e)
		{
			var t;
			t = $(e.currentTarget).data("id");
			o.eVar2 = $(e.currentTarget).find(".main").text();
			o.eVar3 = "TEACHER";
			o.section = "professors";
			btg.Controller.sendPageCall(o);
			btg.Controller.sendLinkEvent(
			{
				linkName: "HOME:FindProf_byname_professortypeahead",
				linkType: "o"
			});
			return window.location = window.RMP.Settings.pathname + "/ShowRatings.jsp?tid=" + t
		};
		c = function(e)
		{
			e.preventDefault();
			n.removeClass();
			$(this).closest("form").removeClass("show-errors");
			return _.each($("#searchBlock .search-by"), function(e)
			{
				$(e).find("a").removeClass("active");
				return $(e).find("a").eq(0).addClass("active")
			})
		};
		d = function(e)
		{
			var t, i;
			e.preventDefault();
			if (window.innerWidth > 767)
			{
				t = $(e.currentTarget).data("search");
				n.removeClass().addClass("search " + t);
				r = "search " + t;
				return $("." + t + "-form").find('input[type="text"]')[0].focus()
			}
			else
			{
				i = $(e.currentTarget).data("mobile");
				return window.location = i
			}
		};
		v = function(e)
		{
			var t, i;
			e.preventDefault();
			t = $(e.currentTarget).parent();
			t.find("a").removeClass();
			$(e.currentTarget).addClass("active");
			i = $(e.currentTarget).data("type");
			n.removeClass().addClass(r + " " + i);
			if ($("form." + i).find('input[type="text"]')[0])
			{
				return $("form." + i).find('input[type="text"]')[0].focus()
			}
		};
		p = function(e)
		{
			e.preventDefault();
			n.removeClass().addClass("search prof-block");
			return r = "search prof-block"
		};
		u = function(e)
		{
			var t, n, r, i;
			i = $(e.currentTarget).data("id");
			r = $(e.currentTarget).data("query");
			n = $(e.currentTarget).parents(".drop-down-fix").find("input[type=text]");
			n.val(r);
			$(".schoolID").val(i);
			btg.Controller.sendLinkEvent(
			{
				linkName: "HOME:FindProf_byschool_schooltypeahead",
				linkType: "o"
			});
			t = window.RMP.departmentSearchr(i).init();
			return window.RMP.Krang.subscribe("departments-loaded-" + i, function(e, t)
			{
				$("#homeGrid #searchProfessorDepartment").empty();
				$("#homeGrid #searchProfessorDepartment").append("<option>select</option>");
				_.each(t.departments, function(e)
				{
					if (e.name)
					{
						return $("#homeGrid #searchProfessorDepartment").append('<option value="' + e.name + '">' + e.name + "</option>")
					}
				});
				$("select").selectOrDie("destroy");
				return $("select").selectOrDie(
				{
					size: 8
				})
			})
		};
		s = function()
		{
			o = {};
			o.pageName = "/search/index";
			o.channel = "search";
			o.events = "event36, event38";
			$("#searchBlock").on("click", ".search-by a", v);
			e.on("click", d);
			t.on("click", c);
			$("#searchBlock .click-here").on("click", p);
			return e.each(function(e, t)
			{
				var n;
				n = $(this).attr("data-mobile");
				$(this).attr("href", n);
				return $(this).removeAttr("data-menu")
			})
		};
		i = function()
		{
			o = {};
			o.pageName = "/search/index";
			o.channel = "search";
			o.events = "event36, event38";
			$("#searchBlock").on("click", ".search-by a", v);
			e.on("click", d);
			t.on("click", c);
			$("#searchBlock .click-here").on("click", p);
			new window.RMP.Autocomplete(
			{
				input: $("#homeGrid #searchProfessorSchooll"),
				acBox: $("#homeGrid #profauContainer ul"),
				template: Handlebars.compile('<li data-query="{{schoolname_s}}" data-id="{{pk_id}}"><span class="main">{{schoolname_s}}</span><span class="sub">{{schoolcity_s}}, {{schoolstate_s}}</span></li>'),
				keylength: 2,
				search_type: "content_type_s",
				data_iterator: "school",
				content_type: "SCHOOL",
				click_callback: u
			});
			new window.RMP.Autocomplete(
			{
				input: $("#homeGrid #searchProfessorSchool22"),
				acBox: $("#homeGrid #profauContainer2 ul"),
				template: Handlebars.compile('<li data-query="{{schoolname_s}}" data-id="{{pk_id}}"><span class="main">{{schoolname_s}}</span><span class="sub">{{schoolcity_s}}, {{schoolstate_s}}</span></li>'),
				keylength: 2,
				search_type: "content_type_s",
				data_iterator: "school",
				content_type: "SCHOOL",
				click_callback: u
			});
			new window.RMP.Autocomplete(
			{
				input: $("#homeGrid #searchProfessorNamee"),
				acBox: $("#homeGrid #profNameAc ul"),
				template: Handlebars.compile('<li data-id="{{pk_id}}"><span class="main">{{{teacherfullname_s}}} </span><span class="sub">{{schoolname_s}}</span></li>'),
				search_type: "content_type_s",
				keylength: 2,
				data_iterator: "professor",
				click_callback: a,
				content_type: "TEACHER",
				last_item: "<li class='dont_see noclick'>Don't see your professor? <a href='" + window.RMP.Settings.pathname + "/add/teacher'>Add them</a> </li>"
			});
			new window.RMP.Autocomplete(
			{
				input: $("#homeGrid #schoolNamee"),
				acBox: $("#homeGrid #schoolauContainer ul"),
				template: Handlebars.compile('<li data-id="{{pk_id}}"><span class="main">{{schoolname_s}}</span><span class="sub">{{schoolcity_s}}, {{schoolstate_s}}</span></li>'),
				keylength: 2,
				data_iterator: "school",
				search_type: "content_type_s",
				click_callback: h,
				content_type: "SCHOOL",
				last_item: "<li class='dont_see noclick'>Don't see your school? <a href='" + window.RMP.Settings.pathname + "/add/school'>Add it</a> </li>"
			});
			new window.RMP.Autocomplete(
			{
				input: $("#homeGrid #rateprof"),
				acBox: $("#homeGrid #rateAuContainer ul"),
				template: Handlebars.compile('<li data-id="{{pk_id}}"><span class="main">{{{teacherfullname_s}}}</span><span class="sub">{{schoolname_s}}</span></li>'),
				keylength: 2,
				data_iterator: "professor",
				search_type: "content_type_s",
				click_callback: l,
				content_type: "TEACHER"
			});
			return new window.RMP.Autocomplete(
			{
				input: $("#homeGrid #rateschool"),
				acBox: $("#homeGrid #rateSchoolAuContainer ul"),
				template: Handlebars.compile('<li data-id="{{pk_id}}"><span class="main">{{{schoolname_s}}}</span><span class="sub">{{schoolcity_s}}, {{schoolstate_s}}</span></li>'),
				keylength: 2,
				data_iterator: "school",
				search_type: "content_type_s",
				click_callback: f,
				content_type: "SCHOOL"
			})
		};
		return {
			init: i,
			mobile: s
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.MainSearch = function()
	{
		var e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w = this;
		h = Handlebars.compile($("#autocomplete-profitem").html());
		v = Handlebars.compile($("#autocomplete-schoolitem").html());
		e = $("#mobileHeader #headerAutocomplete, #searchBox #headerAutocomplete");
		c = null;
		n = e.find(".school-list ul");
		t = e.find(".professor-list ul");
		r = $(".main-search-form #searchrr");
		u = function(t)
		{
			var n = this;
			return _.delay(function()
			{
				return e.hide()
			}, 200)
		};
		m = function(t)
		{
			if (t.target.value.length > 1)
			{
				return e.show()
			}
		};
		a = function(t)
		{
			if (t.target.value.length < 2)
			{
				return e.hide()
			}
		};
		s = function(n)
		{
			e.find(".view-all-professors").html;
			t.empty();
			if (n.length > 0)
			{
				$(".results-container").show();
				e.find(".professor-list").show()
			}
			return _.each(n, function(e)
			{
				return t.append(h(e))
			})
		};
		o = function(t)
		{
			n.empty();
			if (t.length > 0)
			{
				$(".results-container").show();
				e.find(".school-list").show()
			}
			return _.each(t, function(e)
			{
				return n.append(v(e))
			})
		};
		d = function(e)
		{
			var t;
			e.preventDefault();
			t = $(e.currentTarget).data("id");
			c.eVar2 = $(e.currentTarget).find(".main").text();
			c.eVar3 = "HEADER";
			c.section = "school";
			btg.Controller.sendPageCall(c);
			btg.Controller.sendLinkEvent(
			{
				linkName: "GLOBAL_NAV:findSchoolHeaderTypeaheadClick",
				linkType: "o"
			});
			return window.location = window.RMP.Settings.pathname + "/" + "campusRatings.jsp?sid=" + t
		};
		p = function(e)
		{
			var t;
			e.preventDefault();
			t = $(e.currentTarget).data("id");
			c.eVar2 = $(e.currentTarget).find(".main").text();
			c.eVar3 = "HEADER";
			c.section = "professors";
			btg.Controller.sendPageCall(c);
			btg.Controller.sendLinkEvent(
			{
				linkName: "GLOBAL_NAV:findProfessorHeaderTypeaheadClick",
				linkType: "o"
			});
			return window.location = window.RMP.Settings.pathname + "/" + "ShowRatings.jsp?tid=" + t
		};
		i = function(t)
		{
			var n, r;
			if (!_.isNull(t.grouped.content_type_s))
			{
				n = null;
				r = null;
				_.each(t.grouped.content_type_s.groups, function(e)
				{
					if (e.groupValue.toLowerCase() === "teacher")
					{
						return n = e
					}
					else if (e.groupValue.toLowerCase() === "school")
					{
						return r = e
					}
				});
				if (n && n.doclist.numFound > 0)
				{
					s(n.doclist.docs);
					if (n.doclist.numFound === 1)
					{
						e.find(".view-all-professors").html("View " + n.doclist.numFound + " Professor")
					}
					else
					{
						e.find(".view-all-professors").html("View All " + n.doclist.numFound + " Professors")
					}
				}
				else
				{
					e.find(".professor-list").hide()
				}
				if (r && r.doclist.numFound > 0)
				{
					o(r.doclist.docs);
					if (r.doclist.numFound === 1)
					{
						e.find(".view-all-schools").html("View " + r.doclist.numFound + " School")
					}
					else
					{
						e.find(".view-all-schools").html("View All " + r.doclist.numFound + " Schools")
					}
				}
				else
				{
					e.find(".school-list").hide()
				}
				if (r || n)
				{
					e.find("#header-results").show();
					return e.find("#header-no-results").hide()
				}
				else
				{
					e.find("#header-no-results").show();
					return e.find("#header-results").hide()
				}
			}
		};
		g = function(t, n)
		{
			var r, s;
			s = t.term;
			if (!e.is(":visible"))
			{
				e.show()
			}
			e.find(".view-all-professors").attr("href", window.RMP.Settings.pathname + "/search.jsp?queryBy=teacherName&query=" + s);
			e.find(".view-all-schools").attr("href", window.RMP.Settings.pathname + "/search.jsp?queryBy=schoolName&query=" + s);
			r = {
				q: s,
				defType: "edismax",
				qf: "teacherfullname_t^1000 autosuggest",
				bf: "pow(total_number_of_ratings_i,1.7)",
				sort: "score desc",
				siteName: "rmp",
				group: "on",
				"group.field": "content_type_s",
				"group.limit": 20
			};
			return $.ajax(
			{
				url: window.RMP.Settings.typeahead,
				dataType: "JSONP",
				cache: true,
				data: r,
				success: i
			})
		};
		l = function(t, n)
		{
			var r, s;
			s = t.term;
			if (!e.is(":visible"))
			{
				e.show()
			}
			e.find(".view-all-professors").attr("href", window.RMP.Settings.pathname + "/search.jsp?queryBy=teacherName&query=" + s);
			e.find(".view-all-schools").attr("href", window.RMP.Settings.pathname + "/search.jsp?queryBy=schoolName&query=" + s);
			r = {
				q: s,
				defType: "edismax",
				qf: "teacherfullname_t^1000 autosuggest",
				bf: "pow(total_number_of_ratings_i,1.7)",
				sort: "score desc",
				siteName: "rmp",
				group: "on",
				"group.field": "content_type_s",
				"group.limit": 3
			};
			return $.ajax(
			{
				url: window.RMP.Settings.typeahead,
				dataType: "JSONP",
				cache: true,
				jsonpCallback: "noCB",
				data: r,
				success: i
			})
		};
		b = function(e)
		{
			var t;
			t = e.originalEvent.targetTouches[0];
			w.cachedX = t.pageX;
			return w.cachedY = t.pageY
		};
		y = function(e, t)
		{
			var n;
			t.preventDefault();
			n = t.originalEvent.changedTouches[0];
			if (w.cachedX > n.pageX - 20 && w.cachedX < n.pageX + 20 && w.cachedY > n.pageY - 20 && w.cachedY < n.pageY + 20)
			{
				return e(t)
			}
		};
		f = function()
		{
			var i, s;
			c = {};
			c.pageName = "/search/index";
			c.channel = "search";
			c.events = "event36, event38";
			$("#searchrr").autocomplete(
			{
				minLength: 2,
				source: g
			});
			$("#msearchr").autocomplete(
			{
				minLength: 2,
				source: l
			});
			e.onmousedown = function(e)
			{
				return false
			};
			s = y.bind(null, d);
			n.on("click", "li", d);
			n.on("touchstart", "li", b);
			n.on("touchend", "li", s);
			i = y.bind(null, p);
			t.on("click", "li", p);
			t.on("touchstart", "li", b);
			t.on("touchend", "li", i);
			$("#body, #headSocial, #desktopLoginSectionContainer, #logo").click(u);
			r.focus(m);
			r.on("keyup", a);
			return $(".main-search-form").attr("action", window.RMP.Settings.pathname + "/search.jsp")
		};
		return {
			init: f
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.ratingSliders = function()
	{
		var e, t, n, r, i, s;
		s = {};
		n = false;
		i = function(e, t)
		{
			var r, i, s, o;
			s = t.value;
			if (n === false)
			{
				$(this).prev().html(s)
			}
			else
			{
				$(this).parents(".rating-slider").find(".rating").html(s)
			}
			$(this).next().val(s);
			if (s > 0 && s < 1.9)
			{
				o = "poor"
			}
			else if (s > 1.9 && s < 3.1)
			{
				o = "average"
			}
			else if (s > 3.1)
			{
				o = "good"
			}
			$(this).attr("data-rating", o);
			if (s > 0)
			{
				r = $(this).siblings(".bubble-text").data("bub" + s);
				i = r.length;
				$(this).closest(".form-element").removeClass("error");
				if (i > 20)
				{
					$(".bubble").css(
					{
						width: 100 + i * 5
					})
				}
				else if (i > 12)
				{
					$(".bubble").css(
					{
						width: 100 + i * 3
					})
				}
				else
				{
					$(".bubble").css(
					{
						width: 120
					})
				}
			}
			else
			{
				r = "Rate from 1-5"
			}
			return $(this).parent().find(".bubble > .text").text(r)
		};
		r = function()
		{
			$(".bubble").hide();
			return $(this).find(".bubble").show()
		};
		e = function()
		{
			return _.each(s, function(e)
			{
				var t, n, s;
				if (!!$(e).data("value"))
				{
					n = parseInt($(e).data("value"));
					if ($(e).data("value") !== "0")
					{
						if (n > 0 && n < 1.9)
						{
							s = "poor"
						}
						else if (n > 1.9 && n < 3.1)
						{
							s = "average"
						}
						else if (n > 3.1)
						{
							s = "good"
						}
						else if (n > 0)
						{
							s = "poor"
						}
						else
						{}
						$(e).attr("data-rating", s)
					}
					else
					{}
				}
				else
				{
					$(e).attr("data-rating", "start");
					t = 0
				}
				$(e).slider(
				{
					range: "min",
					min: 0,
					max: 5,
					step: 1,
					value: n,
					slide: i
				});
				$(e).children("a").eq(0).append("<div class='bubble'><span class='text'>Drag Here</span></div>");
				return $(e).on("mousedown", r)
			})
		};
		t = function(t, r)
		{
			s = $(t);
			if (!!r)
			{
				n = r
			}
			return e()
		};
		return {
			init: t
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.characterCountdown = function()
	{
		var e, t, n, r;
		t = {};
		e = {};
		r = function()
		{
			var n, r, i;
			n = t.val();
			r = n.length;
			i = 350 - r;
			if (i < 0)
			{
				t.val(n.substring(0, r + i));
				i = 0
			}
			return e.find("span").text(i)
		};
		n = function(n, i)
		{
			t = $(n);
			e = $(i);
			t.change(r);
			return t.keyup(r)
		};
		return {
			init: n
		}
	};
	window.RMP.contactcharacterCountdown = function()
	{
		var e, t, n, r;
		t = {};
		e = {};
		r = function()
		{
			var n, r, i;
			n = t.val();
			r = n.length;
			i = 1e3 - r;
			if (i < 0)
			{
				t.val(n.substring(0, r + i));
				i = 0
			}
			return e.find("span").text(i)
		};
		n = function(n, i)
		{
			t = $(n);
			e = $(i);
			t.change(r);
			return t.keyup(r)
		};
		return {
			init: n
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.tagPicker = function()
	{
		var e, t, n, r, i;
		i = $(".tag-holder a");
		e = $("#tags");
		t = function()
		{
			var t, n;
			t = $(".tag-holder a.active");
			n = [];
			_.each(t, function(e)
			{
				return n.push($(e).html())
			});
			return e.val(n.join(","))
		};
		n = function(e)
		{
			e.preventDefault();
			if ($(".tag-holder a.active").length < 3)
			{
				$(e.currentTarget).toggleClass("active")
			}
			else if ($(e.currentTarget).hasClass("active"))
			{
				$(e.currentTarget).removeClass("active").addClass("inactive")
			}
			return t()
		};
		r = function()
		{
			return i.on("click", n)
		};
		return {
			init: r
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.accordian = function()
	{
		var e, t, n, r, i;
		t = $(".accordion > dd").hide();
		e = function(e)
		{
			var t, n, r;
			e.preventDefault();
			if ($(this).hasClass("opened"))
			{
				$(this).find("span").text("+");
				$(this).removeClass("opened")
			}
			else
			{
				$(this).addClass("opened");
				$(this).find("span").text("-");
				n = $(this).attr("href")
			}
			t = $(this);
			r = function()
			{
				if (t.hasClass("opened"))
				{
					$("html,body").animate(
					{
						scrollTop: t.offset().top - 60
					}, "slow");
					if (n[0] === "#")
					{
						return location.hash = t.attr("id")
					}
				}
			};
			$(this).parent().next().slideToggle("slow", r);
			return false
		};
		r = function(e)
		{
			var t, n, r;
			e.preventDefault();
			t = $(this).parents("dd");
			n = t.prev().find("> a");
			n.click();
			r = $(this).attr("href");
			if (r[0] === "#")
			{
				r = r.substr(1)
			}
			return i(r)
		};
		n = function()
		{
			$(".accordion > dt > a").click(e);
			return $(".accordion > dd a#samePage").click(r)
		};
		i = function(e)
		{
			var t;
			t = $(".trigger-" + e);
			t.click();
			return $("body").animate(
			{
				scrollTop: t.offset().top - 80
			})
		};
		return {
			init: n,
			expand: i
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.Lozenger = function()
	{
		var e, t;
		t = function(e)
		{
			var t, n;
			e.preventDefault();
			t = $(e.currentTarget);
			if (t.hasClass("single"))
			{
				t.toggleClass("active");
				if (t.hasClass("active"))
				{
					return t.parent().find("input[type=hidden]").val("true")
				}
				else
				{
					return t.parent().find("input[type=hidden]").val("false")
				}
			}
			else if (t.hasClass("active"))
			{
				if (t.parents(".required").length <= 0)
				{
					t.blur();
					t.parent().find(".lozeng").removeClass("active");
					n = t.parent().find("input[type=hidden]");
					return n.val("")
				}
			}
			else
			{
				t.parent().find(".lozeng").removeClass("active");
				t.addClass("active");
				$(this).closest(".form-element").removeClass("error");
				n = t.parent().find("input[type=hidden]");
				return n.val(t.text().toLowerCase())
			}
		};
		e = function()
		{
			return $(".lozeng").click(t)
		};
		return {
			init: e
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.professorSidebarSearch = function()
	{
		var e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H;
		l = $(".left-panel").data("param-department");
		L = $(".left-panel").data("param-schoolid");
		A = $(".left-panel").data("param-schoolname");
		u = $(".left-panel").data("param-campuspage");
		O = $(".left-panel .result-list ul");
		P = $(".professor-count");
		t = $(".filter-options .result");
		o = $(".left-panel #sort-results");
		e = $(".progressbtnwrap");
		r = $("#edit");
		i = $("#leftNav");
		n = $("#department-dropdown");
		s = $("#professor-name");
		b = Handlebars.compile($("#professor-result-template").html());
		E = 1;
		S = 20;
		w = null;
		D = null;
		x = "*:*";
		f = 0;
		H = null;
		c = 200;
		g = function(t, n)
		{
			var r, i, s, o, u, a;
			if (E === 1)
			{
				O.empty()
			}
			e.hide();
			P.html(n.response.numFound);
			a = n.response.docs;
			for (o = 0, u = a.length; o < u; o++)
			{
				s = a[o];
				if (s.teacherfirstname_t && t === f)
				{
					r = {
						id: s.pk_id,
						pfname: s.teacherfirstname_t,
						plname: s.teacherlastname_t,
						rating_count: s.total_number_of_ratings_i,
						schoolID: s.schoolid_s
					};
					if (r.rating_count > 0)
					{
						r.overall_rating = s.averageratingscore_rf.toFixed(1);
						if (r.overall_rating > 3.4)
						{
							r.ratingclass = "good"
						}
						else if (r.overall_rating > 2.4)
						{
							r.ratingclass = "average"
						}
						else
						{
							r.ratingclass = "poor"
						}
					}
					else
					{
						r.ratingclass = "zero";
						r.overall_rating = "N/A"
					}
					i = b(r);
					O.append(i)
				}
			}
			if (n.response.numFound - E * S > 0)
			{
				e.show()
			}
			else
			{
				e.hide();
				$(".add-professor").show()
			}
			return E++
		};
		p = function()
		{
			var e, t, n, r;
			n = "teacherfullname_t^1000 autosuggest";
			r = x;
			if (L)
			{
				r += " AND schoolid_s:" + L
			}
			if (l)
			{
				r += ' AND teacherdepartment_s:"' + l + '"'
			}
			if (w)
			{
				r += " AND teacherlastname_engram:" + w
			}
			t = {
				q: r,
				defType: "edismax",
				qf: n,
				bf: "pow(total_number_of_ratings_i,2.1)",
				sort: D,
				siteName: "rmp",
				rows: S,
				start: (E - 1) * S,
				fl: "pk_id teacherfirstname_t teacherlastname_t total_number_of_ratings_i averageratingscore_rf schoolid_s"
			};
			if (A)
			{
				t.prefix = 'schoolname_t:"' + A + '"'
			}
			f++;
			e = g.bind(void 0, f);
			return $.ajax(
			{
				url: window.RMP.Settings.typeahead,
				dataType: "JSONP",
				cache: true,
				data: t,
				success: e
			})
		};
		m = function(e)
		{
			t.removeClass("active");
			$(this).addClass("active");
			w = $(this).data("value");
			if (w === "All")
			{
				w = null;
				$.removeCookie("lastNameLetter",
				{
					path: "/"
				})
			}
			else
			{
				$.cookie("lastNameLetter", w,
				{
					path: "/"
				})
			}
			E = 1;
			return p()
		};
		d = function(e)
		{
			D = $(this).val();
			$.cookie("professorSort", D,
			{
				path: "/"
			});
			E = 1;
			return p()
		};
		h = function(e)
		{
			if (u)
			{
				return $("#leftNav").removeClass().addClass("show-menu schoolMenu")
			}
			else
			{
				return $("#leftNav").removeClass().addClass("show-menu profMenu")
			}
		};
		M = function()
		{
			k();
			N();
			if (n.val())
			{
				l = n.val();
				$.cookie("department", l,
				{
					path: "/"
				})
			}
			else
			{
				l = null;
				$.removeCookie("department",
				{
					path: "/"
				})
			}
			E = 1;
			return p()
		};
		a = function()
		{
			clearTimeout(H);
			return H = setTimeout(_, c)
		};
		_ = function()
		{
			if (s.val())
			{
				x = s.val();
				$.cookie("professorName", x,
				{
					path: "/"
				})
			}
			else
			{
				x = "*:*";
				$.removeCookie("professorName",
				{
					path: "/"
				})
			}
			E = 1;
			return p()
		};
		k = function()
		{
			x = "*:*";
			$.removeCookie("professorName",
			{
				path: "/"
			});
			return s.val("")
		};
		N = function()
		{
			w = null;
			$.removeCookie("lastNameLetter",
			{
				path: "/"
			});
			return t.removeClass("active")
		};
		C = function()
		{
			l = null;
			$.removeCookie("department",
			{
				path: "/"
			});
			return n.val(null)
		};
		T = function()
		{
			k();
			N();
			return C()
		};
		v = function(e)
		{
			return $.get(window.RMP.Settings.pathname + "/teacher/getDepartmentListFromSchool",
			{
				sid: e
			}, function(e)
			{
				var t, r, i, s;
				s = e.departments;
				for (r = 0, i = s.length; r < i; r++)
				{
					t = s[r];
					if (t.name && t.name === l)
					{
						n.append('<option value="' + t.name + '" selected="selected">' + t.name + "</option>")
					}
					else if (t.name)
					{
						n.append('<option value="' + t.name + '">' + t.name + "</option>")
					}
				}
				return n.combobox()
			})
		};
		y = function()
		{
			if (parseInt($.cookie("previousSchoolID")) !== L)
			{
				if (u || A && (l === void 0 || l === ""))
				{
					T()
				}
				else
				{
					k();
					N()
				}
			}
			$.cookie("previousSchoolID", L,
			{
				path: "/"
			});
			if ($.cookie("lastNameLetter"))
			{
				w = $.cookie("lastNameLetter")
			}
			if ($.cookie("professorName"))
			{
				x = $.cookie("professorName")
			}
			if ($.cookie("department") && (l === void 0 || l === ""))
			{
				l = $.cookie("department")
			}
			if ($.cookie("professorSort"))
			{
				D = $.cookie("professorSort")
			}
			else
			{
				D = o.val()
			}
			e.on("click", p);
			t.on("click", m);
			o.on("change", d);
			r.on("click", h);
			n.on("change", M);
			s.on("keyup", a);
			if (L && n.find("option").length === 1)
			{
				v(L)
			}
			else
			{
				n.combobox()
			}
			return p()
		};
		return {
			init: y
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.limitCharacters = function()
	{
		var e, t, n, r, i;
		e = {};
		n = {};
		t = "";
		i = function()
		{
			if (e.val().length >= 15)
			{
				n.html(t);
				return n.show()
			}
			else
			{
				n.hide();
				return n.html("")
			}
		};
		r = function(r, s, o)
		{
			e = $(r);
			n = $(s);
			t = o;
			e.change(i);
			return e.keyup(i)
		};
		return {
			init: r
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.courseCodedigitValidation = function()
	{
		var e, t, n, r, i;
		e = {};
		n = {};
		t = "";
		r = function()
		{
			if (!e.val().match(/[0-9]+/))
			{
				n.html(t);
				return n.show()
			}
			else
			{
				n.hide();
				return n.html("")
			}
		};
		i = function(i, s, o)
		{
			e = $(i);
			n = $(s);
			t = o;
			e.change(r);
			return e.keyup(r)
		};
		return {
			init: i
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.AddTeacher = function()
	{
		var e, t, n, r, i, s, o;
		e = $(".add-teacher-form");
		i = function(t)
		{
			var n, r, i, s, o, u, a, f, l, c, h;
			t.preventDefault();
			n = e.find("#addTeacher");
			n.removeClass();
			o = {};
			n.serializeArray().map(function(e)
			{
				return o[e.name] = e.value
			});
			l = $("#addTeacher").find(".js-required");
			s = $("#terms_conditions").is(":checked") ? 0 : 1;
			a = $("schoolid").val !== 0 ? 0 : 1;
			i = 0;
			r = function()
			{
				var e, t;
				i = 0;
				e = l[u - 1];
				$(e).nextAll(".error-message").css("display", "block");
				$(e).css("cssText", "");
				if ($(e).hasClass("terms-checkbox"))
				{
					t = $("#terms_conditions").is(":checked")
				}
				else
				{
					t = $(e).val()
				}
				if (!!t && t !== "" && t !== null)
				{
					i = 0;
					$(e).parent().siblings(".error-message").hide();
					return $(e).removeClass("js-required").siblings(".error-message").hide()
				}
				else if (t === void 0)
				{
					i = 0;
					return $(e).removeClass("js-required").siblings(".error-message").hide()
				}
				else
				{
					i = 1;
					$(e).addClass("js-required").siblings(".error-message").show();
					return $(e).parent().siblings(".error-message").show()
				}
			};
			for (u = c = 0, h = l.length; c < h; u = ++c)
			{
				f = l[u];
				r(u++, f)
			}
			if (i === 0 && o.fname.length && s === 0 && a === 0)
			{
				return n.submit()
			}
			else
			{
				_.each(l, function(e)
				{
					var t;
					t = $(e).val();
					if ($(e).hasClass("terms-checkbox"))
					{
						if (s === 0)
						{
							$(e).find(".error-message").css("display", "none");
							$(e).find("span").css("cssText", "border-color: rgba(0, 0, 0, 0.25) !important")
						}
					}
					else if (!!t && t !== "" && t !== null)
					{
						$(e).nextAll(".error-message").css("display", "none");
						$(e).css("cssText", "border-color: rgba(0, 0, 0, 0.25) !important")
					}
					return n.addClass("show-error")
				});
				return $("html, body").animate(
				{
					scrollTop: $(".js-required").parent().parent().offset().top - 80
				}, 1e3)
			}
		};
		s = function(t)
		{
			var n, r;
			t.preventDefault();
			n = e.find("#addTeacher");
			n.removeClass();
			r = {};
			n.serializeArray().map(function(e)
			{
				return r[e.name] = e.value
			});
			if (r.fname.length && r.ppassword.length && $("#addteacher .terms-checkbox span").hasClass("checked"))
			{
				return window.location.replace("/rmp-client/users/professor/success")
			}
			else
			{
				return n.addClass("show-error email password")
			}
		};
		r = function()
		{
			var t, n;
			t = e.find("#disable_url");
			n = e.find("#faculty_url");
			
		};
		n = function()
		{
			e.on("click", "#createTeacher", s);
			return o()
		};
		t = function()
		{
			e.on("click", "#submitTeacher", i);
			return new window.RMP.Autocomplete(
			{
				input: $("#addTeacher #school_name"),
				acBox: $("#addTeacher #school_name_container ul"),
				template: Handlebars.compile('<li data-query="{{schoolname_s}}"><span class="main">{{schoolname_s}}</span><span class="sub">{{schoolcity_s}}, {{schoolstate_s}}</span></li>'),
				search_type: "content_type_s",
				keylength: 2,
				data_iterator: "schools"
			})
		};
		o = function()
		{
			$(".faculty-phone-number").hide();
			return e.on("click", ".faculty-url-form .check", r)
		};
		return {
			add: t,
			create: n,
			toggleField: o
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.AddSchool = function()
	{
		var e, t, n;
		e = $(".add-school-form");
		n = function(t)
		{
			var n, r, i, s, o, u, a, f, l, c;
			t.preventDefault();
			n = e.find("#addSchool");
			n.removeClass();
			o = {};
			n.serializeArray().map(function(e)
			{
				return o[e.name] = e.value
			});
			f = $("#addSchool").find(".js-required");
			s = $("#terms_conditions").is(":checked") ? 0 : 1;
			i = 0;
			if ($(".skl").val() !== "")
			{
				$(".skl").removeClass("js-required").siblings(".error-message").hide()
			}
			else
			{
				$(".skl").addClass("js-required").siblings(".error-message").show()
			}
			r = function()
			{
				var e, t;
				i = 0;
				e = f[u - 1];
				t = $(e).val();
				if (!!t && t !== "" && t !== null)
				{
					i = 0;
					$(e).parent().siblings(".error-message").hide();
					return $(e).removeClass("js-required").siblings(".error-message").hide()
				}
				else if (t === void 0)
				{
					i = 0;
					return $(e).removeClass("js-required").siblings(".error-message").hide()
				}
				else
				{
					i = 1;
					$(e).addClass("js-required").siblings(".error-message").show();
					return $(e).parent().siblings(".error-message").show()
				}
			};
			for (u = l = 0, c = f.length; l < c; u = ++l)
			{
				a = f[u];
				r(u++, a)
			}
			if (s)
			{
				$(".checkbox_wrap").removeClass("js-required").find(".error-message").hide()
			}
			else
			{
				$(".checkbox_wrap").addClass("js-required").find(".error-message").show()
			}
			if (i === 0 && o.school.length && s && o.email)
			{
				return n.submit()
			}
			else
			{
				return n.addClass("show-error email password")
			}
		};
		t = function()
		{
			return e.on("click", "#submitSchool", n)
		};
		return {
			init: t
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.rateForm = function()
	{
		var e, t, n, r, i, s, o;
		n = {};
		e = {};
		s = function()
		{
			return $(n).submit()
		};
		t = function(e)
		{
			var t, r;
			e.preventDefault();
			t = $(n + " .form-element.required input," + n + " .form-element.required textarea," + n + " .form-element.required select").not("input[type=submit]").not("input#online");
			$(n).find(".form-element.required").removeClass("error");
			r = 0;
			_.each(t, function(e)
			{
				if ($(e).val().length < 1 || parseInt($(e).val()) === 0)
				{
					$(e).parents(".form-element").addClass("error");
					return r++
				}
			});
			if (r === 0)
			{
				return s()
			}
			else
			{
				return $("html, body").animate(
				{
					scrollTop: $(".required.error").offset().top - 80
				}, 1e3)
			}
		};
		o = function()
		{
			return $(".help-toggle").on("click", function(e)
			{
				var t, n, r;
				t = $(this);
				r = t.index();
				n = t.closest(".form-element").find(".help-text");
				$(".help-text").not(n).slideUp();
				$(".help-toggle").not(t).removeClass("active");
				t.toggleClass("active");
				return n.slideToggle()
			})
		};
		i = function(e)
		{
			if ($(e.target).val().lastIndexOf("Yes", 0) === 0)
			{
				return $(".extra-internship").slideDown()
			}
			else
			{
				return $(".extra-internship").slideUp()
			}
		};
		r = function(r, s)
		{
			n = r;
			e = $(s);
			e.on("touchstart click", t);
			$(n + " #internship").on("change", i);
			return o()
		};
		return {
			init: r
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.mobileNav = function()
	{
		var e, t, n, r, i, s, o, u, a, f, l, c, h, p;
		e = $("#body");
		l = $("#container").height();
		r = $("#mobileNav");
		t = $("#mobileHamburger");
		s = $(".icon-search");
		i = $(".mobileSearch");
		o = $("#msearchr");
		n = $("#mobileLeaderboardAd");
		p = function(e)
		{
			e.preventDefault();
			i.slideToggle();
			i.addClass("open-search");
			return n.toggleClass("open-search")
		};
		c = function(e)
		{
			var t;
			if (e.keyCode === 13)
			{
				t = window.RMP.Settings.pathname + "/search.jsp?query=" + $(this).val();
				return window.location = t
			}
		};
		h = function(e)
		{
			e.preventDefault();
			$(this).toggleClass("active");
			$("body").toggleClass("open-menu");
			if (i.hasClass("open-search"))
			{
				return i.slideUp()
			}
		};
		a = function(e)
		{
			if ($("body").hasClass("open-menu"))
			{
				e.preventDefault();
				t.toggleClass("active");
				return $("body").removeClass("open-menu")
			}
		};
		u = function()
		{
			return r
		};
		f = function()
		{
			u();
			t.on("touchstart click", h);
			s.on("touchstart click", p);
			o.on("keyup", c);
			return e.on("touchstart click", a)
		};
		return {
			init: f
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.pTableToggle = function()
	{
		var e, t, n, r;
		t = $(".table-toggle");
		e = $(".togglable");
		r = function(n)
		{
			var r;
			n.preventDefault();
			r = $(n.currentTarget).data("table");
			t.removeClass("active");
			$(n.currentTarget).addClass("active");
			e.hide();
			return $("." + r).show()
		};
		n = function()
		{
			return t.on("click", r)
		};
		return {
			init: n
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.stickyNav = function()
	{
		var e, t, n, r, i, s;
		n = $("header");
		t = $(".top-header");
		i = 110;
		s = function()
		{
			if ($(this).scrollTop() > 0)
			{
				if ($(this).scrollTop() <= 110)
				{
					n.css("top", 110);
					n.addClass("absolute");
					t.addClass("relative");
					$("#body").css("margin-top", 72)
				}
				else
				{
					n.animate(
					{
						top: "0"
					}, 500);
					t.animate(
					{
						height: "0"
					}, 500, function()
					{
						t.addClass("relative");
						t.css("height", 110);
						return $("#body").css("margin-top", 72)
					})
				}
			}
			else
			{
				t.addClass("relative");
				$("#body").css("margin-top", 72)
			}
			return i = 0
		};
		e = function(e)
		{
			if ($(this).scrollTop() > 110)
			{
				if (n.hasClass("absolute"))
				{
					n.removeClass("absolute");
					n.css("top", i)
				}
				$("#leftNav").attr("data-position", "fixed");
				return window.RMP.Krang.publish("sticky-nav",
				{
					sticky: true
				})
			}
			else if ($(this).scrollTop() <= 110 - i)
			{
				n.css("top", 110);
				n.addClass("absolute");
				$("#leftNav").attr("data-position", "regular");
				return window.RMP.Krang.publish("un-sticky-nav",
				{
					sticky: true
				})
			}
		};
		r = function()
		{
			window.RMP.Cache.$window.scroll(e);
			return setTimeout(s, 4e3)
		};
		return {
			init: r
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.mobileStickyNav = function()
	{
		var e, t, n;
		e = $("#mobileLeaderboardAd.top-header");
		n = function()
		{
			if ($(this).scrollTop() > 0)
			{
				if ($(this).scrollTop() <= 65)
				{
					$("#mainContent").css("padding-top", 0);
					e.addClass("relative");
					return e.css("height", "65px")
				}
				else
				{
					return e.animate(
					{
						height: "0"
					}, 500, function()
					{
						$("#mainContent").css("padding-top", 0);
						e.addClass("relative");
						return e.css("height", "65px")
					})
				}
			}
			else
			{
				e.addClass("relative");
				$("#mainContent").css("padding-top", 0);
				return e.css("height", "65px")
			}
		};
		t = function()
		{
			return setTimeout(n, 4e3)
		};
		return {
			init: t
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.helpful = function()
	{
		var e, t, n, r, i, s;
		r = $(".helpful-links.thumbs a");
		i = "";
		n = function(e)
		{
			var t;
			t = $.ajax(
			{
				url: e.url,
				type: "POST",
				data: e
			});
			t.error();
			return t.success()
		};
		e = function(e)
		{
			var t, r, i, s, o, u, a;
			e.preventDefault();
			if (!$(e.currentTarget).parent().hasClass("chosen"))
			{
				if (!$(e.currentTarget).hasClass("active"))
				{
					$(e.currentTarget).addClass("active");
					$(e.currentTarget).parent().addClass("chosen");
					if ($(e.currentTarget).hasClass("helpful"))
					{
						a = "helpful"
					}
					else
					{
						a = "unhelpful"
					}
					r = $(e.currentTarget).find("span.count");
					t = parseInt(r.html());
					o = t + 1;
					r.html(o);
					i = $(e.currentTarget).find("span.grouping");
					console.log(o);
					console.log(i);
					u = o === 1 ? "person" : "people";
					i.html(u);
					s = {
						id: $(e.currentTarget).data("id"),
						url: $(e.currentTarget).data("url"),
						tid: $(e.currentTarget).data("tid"),
						sid: $(e.currentTarget).data("sid"),
						type: a
					};
					return n(s)
				}
			}
		};
		t = function(e)
		{
			return e.preventDefault()
		};
		s = function(t)
		{
			i = t;
			return window.RMP.Cache.$body.on("click", ".helpful-links.thumbs a", e)
		};
		return {
			init: s
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.pratings = function()
	{
		var e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T;
		y = 2;
		x = $("#loadMore").data("teach-id");
		S = $(".rating-filter tbody");
		w = Handlebars.compile($("#ratingTemplate").html());
		c = $(".head-label,.comment-option");
		b = $("#ratingDrop .option");
		t = $(".check-item .radio");
		n = $(".comment-option .option");
		g = "next page";
		f = null;
		e = Handlebars.compile('<a data-teach-id="{{tid}}" data-filter-type="{{filtertype}}" id="loadMore">	                            Load More	                           </a>');
		v = function(e)
		{
			var t, n;
			n = S.find("tr").length - 1 - (S.find("tr").length - 1) / 6;
			t = 0 + n;
			if (e.remaining === 0)
			{
				$("#loadMore").hide()
			}
			else
			{
				y++
			}
			return _.each(e.ratings, function(e)
			{
				var n;
				t++;
				if (t % 2 === 0)
				{
					e["class"] = "even"
				}
				else
				{
					e["class"] = ""
				}
				S.append(w(e));
				if (t % 5 === 0)
				{
					n = "item-mtvnad-" + t;
					S.append($('<tr>                          <td colspan="4" class="ad-placement">                            <div id="' + n + '"></div>                          </td>                        </tr>'));
					if (btg.Environment.userAgent.isMobile || btg.Environment.userAgent.isTablet)
					{
						enquire.register("screen and (max-width : 1023px)",
						{
							match: function()
							{
								$("#" + n).empty();
								btg.DoubleClick.createAd(
								{
									size: "300x50",
									reloadInterval: window.RMP.Settings.reloadInterval,
									keyValues: "gridAd=grid"
								}, n);
								return $("#" + n).parent(".ad-placement").css("padding-left", "10px")
							}
						})
					}
					return enquire.register("screen and (min-width : 1024px)",
					{
						match: function()
						{
							$("#" + n).empty();
							btg.DoubleClick.createAd(
							{
								size: "728x90",
								reloadInterval: window.RMP.Settings.reloadInterval,
								keyValues: "gridAd=grid"
							}, n);
							return $("#" + n).parent(".ad-placement").css("padding-left", "30px")
						}
					})
				}
			})
		};
		p = function(t, n)
		{
			var r, i;
			i = 0;
			if (t.remaining === 0)
			{
				$("#loadMore").hide()
			}
			else
			{
				y++;
				$("#loadMore").remove();
				r = e(
				{
					tid: x,
					filtertype: n
				});
				$(".tftable").after(r)
			}
			$(".rating-filter tbody tr").not(":first").remove();
			return _.each(t.ratings, function(e)
			{
				var t;
				i++;
				if (i % 2 === 0)
				{
					e["class"] = "even"
				}
				else
				{
					e["class"] = ""
				}
				S.append(w(e));
				if (i % 5 === 0)
				{
					t = "item-mtvnad-" + i;
					S.append($('<tr>           <td colspan="4" class="ad-placement">                            <div id="' + t + '"></div>                          </td>        </tr>'));
					if (btg.Environment.userAgent.isMobile || btg.Environment.userAgent.isTablet)
					{
						enquire.register("screen and (max-width : 1023px)",
						{
							match: function()
							{
								$("#" + t).empty();
								btg.DoubleClick.createAd(
								{
									size: "300x50",
									reloadInterval: window.RMP.Settings.reloadInterval,
									keyValues: "gridAd=grid"
								}, t);
								return $("#" + t).parent(".ad-placement").css("padding-left", "10px")
							}
						})
					}
					return enquire.register("screen and (min-width : 1024px)",
					{
						match: function()
						{
							$("#" + t).empty();
							btg.DoubleClick.createAd(
							{
								size: "728x90",
								reloadInterval: window.RMP.Settings.reloadInterval,
								keyValues: "gridAd=grid"
							}, t);
							return $("#" + t).parent(".ad-placement").css("padding-left", "30px")
						}
					})
				}
			})
		};
		s = function(e)
		{
			var t;
			if ($("#loadMore").data("filter-type") === "")
			{
				t = {
					tid: x,
					page: y
				}
			}
			else
			{
				t = {
					tid: x,
					page: y,
					filter: $("#loadMore").data("filter-type")
				}
			}
			if (g === "next page")
			{
				e.preventDefault();
				return $.ajax(
				{
					url: window.RMP.Settings.pathname + "/paginate/professors/ratings",
					dataType: "JSON",
					type: "GET",
					data: t,
					success: v
				})
			}
			else
			{
				e.preventDefault();
				return a(f)
			}
		};
		d = function(e)
		{
			if ($("#loadMore").data("filter-type") === !"")
			{
				f = $("#loadMore").data("filter-type")
			}
			return p(e, f)
		};
		a = function(e)
		{
			var t;
			t = {
				tid: x,
				filter: e,
				page: y
			};
			return $.ajax(
			{
				url: window.RMP.Settings.pathname + "/paginate/professors/ratings",
				dataType: "JSON",
				type: "GET",
				data: t,
				success: d
			})
		};
		l = function(e)
		{
			var t;
			e.preventDefault();
			e.stopPropagation();
			g = "next page";
			y = 1;
			t = $(e.currentTarget).data("sortby");
			f = t;
			$(e.currentTarget).parents(".head-label").removeClass("active");
			btg.Controller.sendLinkEvent(
			{
				linkName: "PROF:SortRatings",
				linkType: "o"
			});
			return a(t)
		};
		o = function(e)
		{
			var t;
			e.stopPropagation();
			g = "filter";
			y = 1;
			t = $(e.currentTarget).parent().data("filter");
			f = t;
			$(e.currentTarget).parents(".head-label.class").removeClass("active");
			return a(t)
		};
		u = function(e)
		{
			var t;
			e.stopPropagation();
			g = "filter";
			y = 1;
			t = $(e.currentTarget).data("filter");
			f = t;
			$(e.currentTarget).parents(".head-label.comment").removeClass("active");
			return a(t)
		};
		E = function(e)
		{
			e.preventDefault();
			if ($(e.currentTarget).hasClass("active"))
			{
				return c.removeClass("active")
			}
			else
			{
				c.removeClass("active");
				return $(e.currentTarget).addClass("active")
			}
		};
		r = function()
		{
			return $("td.ad-placement").each(function(e, t)
			{
				var n;
				n = $(t).children("div").attr("id");
				if (btg.Environment.userAgent.isMobile || btg.Environment.userAgent.isTablet)
				{
					enquire.register("screen and (max-width : 1023px)",
					{
						match: function()
						{
							$("#" + n).empty();
							btg.DoubleClick.createAd(
							{
								size: "300x50",
								reloadInterval: window.RMP.Settings.reloadInterval,
								keyValues: "gridAd=grid"
							}, n);
							return $(t).css("padding-left", "10px")
						}
					})
				}
				return enquire.register("screen and (min-width: 1024px)",
				{
					match: function()
					{
						$("#" + n).empty();
						btg.DoubleClick.createAd(
						{
							size: "728x90",
							reloadInterval: window.RMP.Settings.reloadInterval,
							keyValues: "gridAd=grid"
						}, n);
						return $(t).css("padding-left", "30px")
					}
				})
			})
		};
		h = function(e)
		{
			var t, n, r, i, s, o;
			r = -1;
			if (document.cookie)
			{
				n = document.cookie.split(";");
				e = e + "=";
				i = function(t)
				{
					t = $.trim(t);
					if (t.substring(0, e.length) === e)
					{
						return r = decodeURIComponent(t.substring(e.length))
					}
				};
				for (s = 0, o = n.length; s < o; s++)
				{
					t = n[s];
					i(t)
				}
			}
			return r
		};
		m = function()
		{
			var e;
			$(".rating-filter").on("touchstart click", "#loadMore", s);
			c.on("touchstart click", E);
			b.on("touchstart click", l);
			t.on("touchstart click", o);
			n.on("touchstart click", u);
			e = $(".pfname").html().trim().length + $(".plname").html().trim().length;
			if (e > 15)
			{
				$(".twitter-wrapper").css(
				{
					display: "block",
					"margin-top": "15px"
				}).appendTo("div.result-title")
			}
			$(".left-panel").prepend("<a class='toggle-left-panel close-this'>&#215;</a>");
			$(".toggle-left-panel").on("touchstart click", T);
			$("#profNav").on("touchstart click", T);
			r();
			return i()
		};
		i = function()
		{
			var e, t, n, r;
			r = h("userinfo");
			t = $(".left-panel").data("proftpid");
			e = $(".left-panel").data("rebuttaltotal");
			n = $(".left-panel").data("tpid");
			window.RMP.Settings.editNotes = r.toString() === t.toString();
			if (e > 0)
			{
				$(".professor-note").show()
			}
			if (h("isLoggedIn") === "true")
			{
				if (window.RMP.Settings.editNotes)
				{
					if (n !== "")
					{
						$(".addNote").show();
						$(".editLinks").show();
						return $(".professor-note").show()
					}
				}
			}
		};
		T = function()
		{
			if ($(".left-panel").hasClass("off"))
			{
				$(".left-panel").removeClass("off");
				return $(".right-panel").removeClass("wide")
			}
			else
			{
				mtvn.btg.Controller.sendLinkEvent(
				{
					linkName: "PROFMIDPANE:X",
					linkType: "o"
				});
				$(".left-panel").addClass("off");
				return $(".right-panel").addClass("wide")
			}
		};
		return {
			init: m
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.Account = function()
	{
		var e, t, n;
		n = function(e)
		{
			var t;
			e.preventDefault();
			e.stopPropagation();
			t = $(e.currentTarget).attr("data-signup");
			$("#form-context").removeClass().addClass("show-" + t);
			$(".search-by a").removeClass();
			return $(this).addClass("active")
		};
		e = function()
		{
			if ($(this).is(":checked"))
			{
				return $("input#faculty_url").attr("disabled", true)
			}
			else
			{
				return $("input#faculty_url").attr("disabled", false)
			}
		};
		t = function()
		{
			$(".new_account").on("click", ".search-by a", n);
			return $("#url_option").on("change", e)
		};
		return {
			init: t
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.Validate = function()
	{
		var e, t;
		t = function(e)
		{
			var t, n, r, i, s;
			e.preventDefault();
			s = true;
			n = $(".page-wrap");
			n.removeClass("show-success");
			t = n.find("form");
			t.find(".form-field").removeClass("show-error");
			r = {};
			t.serializeArray().map(function(e)
			{
				return r[e.name] = e.value
			});
			if (!r.pEmail.length)
			{
				t.find("[name=pEmail]").parents(".form-field").addClass("show-error");
				s = false
			}
			else if (r.pEmail2 !== r.pEmail)
			{
				t.find("[name=pEmail2]").parents(".form-field").addClass("show-error");
				s = false
			}
			if (!r.pPassword.length || r.pPassword.length < 6)
			{
				t.find("[name=pPassword]").parents(".form-field").addClass("show-error");
				s = false
			}
			if (r.pPassword2 !== r.pPassword)
			{
				t.find("[name=pPassword2]").parents(".form-field").addClass("show-error");
				s = false
			}
			if (!document.getElementById("terms_conditions").checked)
			{
				t.find("[name=terms_conditions]").parents(".form-field").addClass("show-error");
				s = false
			}
			i = $("form").find(".show-error").length;
			if (i !== 0)
			{
				event.preventDefault();
				$("html, body").animate(
				{
					scrollTop: $(".form-field.show-error").offset().top - 87
				}, 1e3)
			}
			if (!s)
			{
				e.preventDefault();
				return false
			}
			if (!r.tid && r.pname)
			{
				return $("form").submit()
			}
			else
			{
				$(".page-wrap").addClass("show-success");
				return $("form").submit()
			}
		};
		e = function()
		{
			return $(".btn_signup").on("click", t)
		};
		return {
			init: e
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.searchForm = function()
	{
		var e, t, n, r, i;
		n = {};
		e = {};
		i = function()
		{
			if (n === "#homeGrid #prof-name")
			{
				mtvn.btg.Controller.sendLinkEvent(
				{
					linkName: "HOME:FindProf_byname_search",
					linkType: "o"
				})
			}
			else if (n === "#homeGrid #prof-location")
			{
				mtvn.btg.Controller.sendLinkEvent(
				{
					linkName: "HOME:FindProf_byschool_search",
					linkType: "o"
				})
			}
			else if (n === "#homeGrid #schoolNames")
			{
				mtvn.btg.Controller.sendLinkEvent(
				{
					linkName: "HOME:FindSchool_byname_search",
					linkType: "o"
				})
			}
			else if (n === ".menu #prof-name")
			{
				mtvn.btg.Controller.sendLinkEvent(
				{
					linkName: "LEFTNAV:Profs_byname_search",
					linkType: "o"
				})
			}
			else if (n === ".menu #prof-location")
			{
				mtvn.btg.Controller.sendLinkEvent(
				{
					linkName: "LEFTNAV:Profs_byschool_search",
					linkType: "o"
				})
			}
			return $(n).submit()
		};
		t = function(e)
		{
			var t, r;
			e.preventDefault();
			t = $(n + " input[required]");
			$(n).find(".form-element.required").removeClass("error");
			r = 0;
			_.each(t, function(e)
			{
				if ($(e).val().length < 1 || parseInt($(e).val()) === 0)
				{
					$(n).addClass("show-errors");
					return r++
				}
			});
			if (r === 0)
			{
				return i()
			}
		};
		r = function(r, i)
		{
			n = r;
			e = $(i);
			return e.on("touchstart click", t)
		};
		return {
			init: r
		}
	};
	window.RMP.selectValidation = function()
	{
		var e, t, n, r, i;
		n = {};
		e = {};
		i = function()
		{
			return $(n).submit()
		};
		t = function(e)
		{
			var t, r;
			e.preventDefault();
			t = $(n + " select");
			$(n).find(".form-element.required").removeClass("error");
			r = 0;
			_.each(t, function(e)
			{
				if ($(e).val() === null || $(e).val().length < 1 || parseInt($(e).val()) === 0)
				{
					$(n).addClass("show-errors");
					return r++
				}
			});
			if (r === 0)
			{
				return i()
			}
		};
		r = function(r, i)
		{
			n = r;
			e = $(i);
			return e.on("touchstart click", t)
		};
		return {
			init: r
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.ValidateProfile = function()
	{
		var e, t;
		t = function(e)
		{
			var t, n, r;
			e.preventDefault();
			n = $(".page-wrap");
			n.removeClass("show-success");
			t = n.find("form");
			t.find(".form-field").removeClass("show-error");
			r = {};
			t.serializeArray().map(function(e)
			{
				return r[e.name] = e.value
			});
			if (r.pEmail.length)
			{
				if (r.pEmail2 !== r.pEmail)
				{
					t.find("[name=pEmail2]").parents(".form-field").addClass("show-error")
				}
			}
			if (r.pPassword.length)
			{
				if (r.pPassword.length < 6)
				{
					t.find("[name=pPassword]").parents(".form-field").addClass("show-error")
				}
				else if (r.pPassword2 !== r.pPassword)
				{
					t.find("[name=pPassword2]").parents(".form-field").addClass("show-error")
				}
			}
			if (r.current_password.length < 6)
			{
				return t.find("[name=current_password]").parents(".form-field").addClass("show-error")
			}
			else
			{
				$(".page-wrap").addClass("show-success");
				console.log("data -> ", r);
				return $("form").submit()
			}
		};
		e = function()
		{
			return $(".save-profile").on("click", t)
		};
		return {
			init: e
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.BuildDeleteAccount = function()
	{
		var e;
		e = function()
		{
			var e, t, n, r, i, s;
			r = $(".page-wrap");
			i = $(".save-profile");
			n = $("#delete-account");
			t = n.parent();
			e = t.parent();
			s = '<form method="post" action="/people/deleteUser/">\n<div class="delete-account-confirm col">\n  <div class="delete-account-header col">Are you sure you want to delete your account?</div>\n  <label class="delete-account-label col">Enter your password to confirm</label>\n  <input class="delete-account-field col" type="password" name="confirm_password" id="confirm_password" />\n  <input type="submit" class="delete-account-btn col" value="Delete account" />\n  <a class="delete-account-cancel col">Cancel</a>\n</div>\n</form>';
			return n.on("click", function(n)
			{
				n.preventDefault();
				t.addClass("is-hidden");
				r.addClass("faded");
				e.append(s);
				return $(".delete-account-cancel").on("click", function(e)
				{
					e.preventDefault();
					$(this).parent(".delete-account-confirm").remove();
					r.removeClass("faded");
					return t.removeClass("is-hidden")
				})
			})
		};
		return {
			init: e
		}
	}
}).call(this);
(function()
{
	window.RMP.ProfilePasswordConf = function()
	{
		function e(e)
		{
			var t, n, r, i, s = this;
			this.config = e;
			this.fields = this.config.fields;
			this.$container = $(this.config.container);
			this.confirm_field_added = false;
			this.template = '<hr />\n<div class="form-field no-margin-bottom">\n  <label for="password" class="label">Current Password (Required)</label>\n  <input class="field" type="password" name="password" id="password">\n  <span class="error-field">Password too short</span>\n</div>';
			i = this.fields;
			for (n = 0, r = i.length; n < r; n++)
			{
				t = i[n];
				$(t).keyup(function()
				{
					if (!s.confirm_field_added)
					{
						s.$container.append(s.template);
						return s.confirm_field_added = true
					}
				})
			}
		}
		return e
	}()
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.promo = function()
	{
		var e, t, n, r, i, s, o, u, a;
		e = $(".promotion a.close");
		o = $(".promotion a.open");
		n = $(".promotion .content");
		t = false;
		r = false;
		a = function(e)
		{
			e.preventDefault();
			if (t)
			{
				t = false;
				return o.fadeOut(function()
				{
					return $(".promotion").animate(
					{
						right: "0"
					}, 500, function()
					{
						return n.animate(
						{
							opacity: 1
						}, 500)
					})
				})
			}
			else
			{
				t = true;
				return n.animate(
				{
					opacity: 0
				}, 500, function()
				{
					return $(".promotion").animate(
					{
						right: "-346px"
					}, 500, function()
					{
						return o.fadeIn()
					})
				})
			}
		};
		s = function()
		{
			if (!r)
			{
				r = true;
				return $(".promotion").animate(
				{
					right: "0"
				})
			}
		};
		u = function(e)
		{
			if (e.headertext)
			{
				$(".promotion .title").text(e.headertext);
				$(".promotion .description").text(e.desctext);
				$(".promotion .promo-image").attr("src", e.imageurl);
				$(".promotion .more-info").text(e.clickurltext);
				$(".promotion .more-info").attr("href", e.clickurl);
				$(".promotion #promoid").html(e.id);
				if (e.isOpeninNewTab)
				{
					$(".promotion .more-info").attr("target", "_blank")
				}
				$(".promotion a.close").on("touchstart click", a);
				$(".promotion a.open").on("touchstart click", a);
				return window.RMP.Cache.$window.scroll(s)
			}
		};
		i = function()
		{
			var e, t;
			e = window.RMP.Settings.schoolID;
			if (!window.RMP.Settings.schoolID)
			{
				e = $(".left-panel").data("schoolid")
			}
			t = {
				tId: window.RMP.Settings.professorID,
				sId: e,
				targetpageName: window.RMP.Settings.uri,
				dept: window.RMP.Settings.department,
				state: window.RMP.Settings.state,
				country: window.RMP.Settings.country
			};
			return jQuery.get(window.RMP.Settings.pathname + "/doshowpromo", t, u, "json")
		};
		return {
			init: i
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.addNote = function()
	{
		var e, t, n, r, i, s, o, u, a, f, l, c, h, p;
		p = $("#noteAdd");
		f = $("#noteForm");
		l = Handlebars.compile($("#noteTemplate").html());
		c = 1;
		n = function(e)
		{
			var t;
			e.showEdit = window.RMP.Settings.editNotes;
			t = l(e);
			$(".professor-notes tbody tr:first").after(t);
			$(".professor-notes tbody tr:first").on("touchstart click", ".editNote", s);
			$(".professor-notes tbody tr:first").on("touchstart click", ".deleteNote", i);
			return $(".save-edit").on("touchstart click", h)
		};
		o = function()
		{
			f.find("input[name=course]").val("");
			return f.find("#professorNote").val("")
		};
		t = function(e)
		{
			var t, r;
			e.preventDefault();
			t = {
				course: f.find("input[name=course]").val(),
				note: f.find("#professorNote").val(),
				profId: f.data("id")
			};
			r = $.ajax(
			{
				url: window.RMP.Settings.pathname + "/rmpRebuttal/saveNote",
				type: "POST",
				data: t
			});
			$("#saveNoteModal").reveal(
			{
				animation: "fadeAndPop",
				animationspeed: 300,
				closeonbackgroundclick: true,
				dismissmodalclass: "close-reveal-modal"
			});
			r.success(n);
			return o()
		};
		i = function(e)
		{
			var t;
			e.preventDefault();
			$("#deleteNoteModal").removeClass("delete-confirm-show");
			t = $(e.currentTarget).data("id");
			$("#deleteNoteModal .delete-confirm").data("id", t);
			return $("#deleteNoteModal").reveal(
			{
				animation: "fadeAndPop",
				animationspeed: 300,
				closeonbackgroundclick: true,
				dismissmodalclass: "close-reveal-modal"
			})
		};
		s = function(e)
		{
			e.preventDefault();
			return $(e.currentTarget).parents(".comments").addClass("edit")
		};
		r = function(e)
		{
			var t, n, r;
			e.preventDefault();
			n = $(e.currentTarget).data("id");
			t = {
				id: n
			};
			r = $.ajax(
			{
				url: window.RMP.Settings.pathname + "/rmpRebuttal/deleteNote",
				type: "POST",
				data: t
			});
			$(".professor-notes tr#note-" + n).remove();
			return $("#deleteNoteModal").addClass("delete-confirm-show")
		};
		h = function(e)
		{
			var t, n, r, i;
			e.preventDefault();
			n = $(e.currentTarget).data("id");
			i = $("tr#note-" + n + " .edit-note-box").val();
			$("tr#note-" + n + " .read-mode p").html(i);
			t = {
				id: n,
				note: i
			};
			r = $.ajax(
			{
				url: window.RMP.Settings.pathname + "/rmpRebuttal/updateNote",
				type: "POST",
				data: t
			});
			$("#saveNoteModal").reveal(
			{
				animation: "fadeAndPop",
				animationspeed: 300,
				closeonbackgroundclick: true,
				dismissmodalclass: "close-reveal-modal"
			});
			return $(e.currentTarget).parents(".comments").removeClass("edit")
		};
		e = function(e)
		{
			_.each(e.items, function(e)
			{
				var t;
				e.showEdit = window.RMP.Settings.editNotes;
				t = l(e);
				return $(".professor-notes tbody").append(t)
			});
			if (e.remaining === 0)
			{
				return $(".view-more-notes").hide()
			}
		};
		u = function(t)
		{
			var n, r, i;
			t.preventDefault();
			r = $(t.currentTarget).attr("id");
			c++;
			n = {
				tid: $(".view-more-notes").data("tid"),
				total: $(".view-more-notes").data("total"),
				page: c
			};
			i = $.ajax(
			{
				url: window.RMP.Settings.pathname + "/rmpRebuttal/moreNotes",
				type: "POST",
				data: n
			});
			return i.success(e)
		};
		a = function()
		{
			p.on("touchstart click", t);
			$(".professor-notes").on("touchstart click", ".editNote", s);
			$(".professor-notes").on("touchstart click", ".deleteNote", i);
			$(".save-edit").on("touchstart click", h);
			$("#deleteNoteModal .delete-confirm").on("touchstart click", r);
			$(".view-more-notes ").on("touchstart click", u);
			return $(".close-this").on("touchstart click", function()
			{
				return $(".close-reveal-modal").trigger("click")
			})
		};
		return {
			init: a
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.schoolratings = function()
	{
		var e, t, n, r, i, s, o, u, a;
		u = 1;
		e = $("#loadMore");
		t = Handlebars.compile($("#schoolRating").html());
		n = $(".school-ratings tbody");
		r = function(r)
		{
			var i, s, o = this;
			s = n.find("tr").length - 1 - (n.find("tr").length - 1) / 6;
			i = 0 + s;
			if (r.remaining === 0)
			{
				e.hide()
			}
			_.each(r.ratings, function(e)
			{
				var r, s;
				i++;
				if (i % 2 === 0)
				{
					e["class"] = "even"
				}
				else
				{
					e["class"] = ""
				}
				n.append(t(e));
				if (i % 5 === 0)
				{
					s = "item-mtvnad-" + i;
					r = s + "-ad-placement";
					n.append($('<tr>          <td colspan="3" class="ad-placement">            <div id="' + r + '"></div>          </td>        </tr>'));
					if (btg.Environment.userAgent.isMobile || btg.Environment.userAgent.isTablet)
					{
						enquire.register("screen and (max-width : 1023px)",
						{
							match: function()
							{
								$("#" + r).empty();
								btg.DoubleClick.createAd(
								{
									size: "300x50",
									reloadInterval: window.RMP.Settings.reloadInterval,
									keyValues: "gridAd=grid"
								}, r);
								return $("#" + r).parent(".ad-placement").css("padding-left", "10px")
							}
						})
					}
					return enquire.register("screen and (min-width : 1024px)",
					{
						match: function()
						{
							$("#" + r).empty();
							btg.DoubleClick.createAd(
							{
								size: "728x90",
								reloadInterval: window.RMP.Settings.reloadInterval,
								keyValues: "gridAd=grid"
							}, r);
							return $("#" + r).parent(".ad-placement").css("padding-left", "30px")
						}
					})
				}
			});
			if ($(document).width() < 768)
			{
				$("body").addClass("mobile-toggle");
				if ($(".mobile-toggle").length)
				{
					return $(".school-rating-list .scores .js-open").each(function(e, t)
					{
						if (!$(t).hasClass("bound"))
						{
							return $(t).addClass("bound").on("click", function()
							{
								return $(this).next(".rate-list").slideToggle()
							})
						}
					})
				}
			}
		};
		s = function(e)
		{
			var t, n;
			e.preventDefault();
			u++;
			t = {
				page: u,
				sid: $(this).data("school-id")
			};
			n = $.ajax(
			{
				url: window.RMP.Settings.pathname + "/campusrating/paginatecampusRatings",
				type: "GET",
				data: t
			});
			return n.success(r)
		};
		i = function()
		{
			return _($("td.ad-placement")).each(function(e)
			{
				var t;
				t = $(e).children("div").attr("id");
				if (btg.Environment.userAgent.isMobile || btg.Environment.userAgent.isTablet)
				{
					enquire.register("screen and (max-width : 1023px)",
					{
						match: function()
						{
							$("#" + t).empty();
							btg.DoubleClick.createAd(
							{
								size: "300x50",
								reloadInterval: window.RMP.Settings.reloadInterval,
								keyValues: "gridAd=grid"
							}, t);
							return $(e).css("padding-left", "10px")
						}
					})
				}
				return enquire.register("screen and (min-width: 1024px)",
				{
					match: function()
					{
						$("#" + t).empty();
						btg.DoubleClick.createAd(
						{
							size: "728x90",
							reloadInterval: window.RMP.Settings.reloadInterval,
							keyValues: "gridAd=grid"
						}, t);
						return $(e).css("padding-left", "30px")
					}
				})
			})
		};
		a = function()
		{
			if ($(".left-panel").hasClass("off"))
			{
				$(".left-panel").removeClass("off");
				return $(".right-panel").removeClass("wide")
			}
			else
			{
				$(".left-panel").addClass("off");
				return $(".right-panel").addClass("wide")
			}
		};
		o = function()
		{
			e.on("click", s);
			$(".left-panel").prepend('<a class="toggle-left-panel close-this" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:"SCHOOL:ViewAllProfs", linkType:"o" } );" >&#215;</a>');
			$(".toggle-left-panel").on("touchstart click", a);
			$("#schoolNav").on("touchstart click", a);
			return i()
		};
		return {
			init: o
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.popupNotice = function()
	{
		var e, t, n, r, i;
		r = ["<div id='cookie_notice'>", "<h3>Special Notice</h3>", "<p><strong>We've updated our terms.</strong>", " By continuing to use this site, you agree to ratemyprofessors.com's updated", " <a href='/TermsOfUse_us.jsp#privacy'>Privacy Policy</a> and <a href='/TermsOfUse_us.jsp#use'>Terms of Use</a>.", " Before you do so, please read them and <a href='/assets/chilis/Summary_of_Most_Recent_Significant_Changes.pdf' download>check out some of these changes</a>.</p>", "<p><strong>This site uses cookies.</strong>", " We use cookies so we can give you a better experience on our site.  By continuing to use this site, ", "you consent to our use of cookies, as described in Sections 3(b) and 4 of the document <a href='/TermsOfUse_us.jsp#privacy'>here</a>, unless you have disabled them.</p>", "<a class='btn close-this'>Close</a>", "<a class='close-notice close-this'>&#215;</a>", "</div>"];
		e = function()
		{
			var e;
			e = r.join("");
			if ($("#cookie_notice").length == -1)
			{
				RMP.Cache.$body.prepend(e);
				return RMP.Cache.$body.find(".overlay").addClass("show")
			}
		};
		i = function()
		{
			if ($("#cookie_notice").length)
			{
				$("#cookie_notice").remove("#cookie_notice");
				return RMP.Cache.$body.find(".overlay").removeClass("show")
			}
		};
		t = function()
		{
			return $.cookie("notice", true,
			{
				path: "/",
				expires: 365
			})
		};
		n = function()
		{
			if ($.cookie("notice") === void 0)
			{
				e();
				t();
				return $("#cookie_notice").on("click", ".close-this", i)
			}
		};
		return {
			check: n
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.blogMenus = function()
	{
		var e, t, n, r, i, s, o, u, a, f, l, c, h, p;
		h = Handlebars.compile($("#blogitems").html());
		p = {};
		o = {};
		a = {};
		f = {};
		r = "";
		c = 1;
		t = function(e)
		{
			_.each(e.items, function(e)
			{
				return a.append(h(e))
			});
			if (e.remaining === 0)
			{
				return f.css("cssText", "display:none !important")
			}
			else
			{
				return f.show()
			}
		};
		s = function(e)
		{
			a.empty();
			_.each(e.items, function(e)
			{
				return a.append(h(e))
			});
			if (e.remaining === "0")
			{
				return f.hide()
			}
			else
			{
				return f.show()
			}
		};
		n = function(e, t)
		{
			var n;
			n = $.ajax(
			{
				url: window.RMP.Settings.pathname + "/blog/paginateblogNavItems",
				type: "GET",
				data: e
			});
			return n.done(t)
		};
		i = function(e)
		{
			var t;
			e.preventDefault();
			r = $(e.currentTarget).val();
			if (r === "RMP Buzz")
			{
				mtvn.btg.Controller.sendLinkEvent(
				{
					linkName: "BLOG:Buzz",
					linkType: "o"
				})
			}
			else if (r === "Professors Strike Back")
			{
				mtvn.btg.Controller.sendLinkEvent(
				{
					linkName: "BLOG:Video",
					linkType: "o"
				})
			}
			else if (r === "Lists")
			{
				mtvn.btg.Controller.sendLinkEvent(
				{
					linkName: "BLOG:Lists",
					linkType: "o"
				})
			}
			else if (r === "Misc.")
			{
				mtvn.btg.Controller.sendLinkEvent(
				{
					linkName: "BLOG:Misc",
					linkType: "o"
				})
			}
			c = 1;
			t = {
				page: c,
				filter: r
			};
			return n(t, s)
		};
		l = function(e)
		{
			var r;
			e.preventDefault();
			c++;
			if ($(window).width() > 767)
			{
				r = {
					page: c,
					filter: $("#blog-filter").val()
				}
			}
			else
			{
				r = {
					page: c,
					filter: $(".blog-filters")[1].value
				}
			}
			return n(r, t)
		};
		e = function()
		{
			f.on("touchstart click", l);
			o.on("change", i);
			return o.change()
		};
		u = function(t)
		{
			p = t;
			o = p.find("#blog-filter");
			f = p.find("#loadmoreBlog");
			a = p.find(".result-list ul");
			return e()
		};
		return {
			init: u
		}
	};
	window.RMP.initPanelToggle = function()
	{
		var e;
		e = function()
		{
			if ($(".left-panel").hasClass("off"))
			{
				$(".left-panel").removeClass("off");
				return $(".right-panel").removeClass("wide")
			}
			else
			{
				$(".left-panel").addClass("off");
				return $(".right-panel").addClass("wide")
			}
		};
		$(".left-panel").prepend("<a class='toggle-left-panel close-this'>&#215;</a>");
		$("#blogNav").on("touchstart click", e);
		return $(".close-this").on("touchstart click", e)
	};
	window.RMP.renderFooterBlogLink = function()
	{
		var e;
		e = function(e)
		{
			var t, n;
			t = e.items[0];
			n = window.RMP.Settings.pathname;
			$("#blogFooterLink").attr("href", n + "/" + t.actionUrl + t.blogurl + "?all=1");
			return $("#blogMobileFooterLink").attr("href", n + "/mobile/blog")
		};
		return $.get(window.RMP.Settings.pathname + "/blog/paginateblogNavItems", e)
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.myProfessors = function()
	{
		var e, t, n, r, i, s, o, u, a, f, l, c, h;
		h = $(".my-professors-result-list ul");
		f = Handlebars.compile($("#my-professor-result-template").html());
		e = $(".my-profs-button");
		n = 'You can click "Add to My Profs" on any professor\'s page to save them in a personalized list here.';
		u = function(r)
		{
			var i, s, o, u, a, l, p, d;
			i = e.attr("data-id");
			u = false;
			if (r.success === "true")
			{
				if (r.professors.length)
				{
					$(".no-professors").empty();
					d = r.professors;
					for (l = 0, p = d.length; l < p; l++)
					{
						a = d[l];
						s = {
							id: a.id,
							pfname: a.firstName,
							plname: a.lastName,
							rating_count: a.ratingCount,
							schoolID: a.schoolID
						};
						if (s.rating_count > 0)
						{
							s.overall_rating = a.averageScore.toFixed(1);
							if (s.overall_rating > 3.4)
							{
								s.ratingclass = "good"
							}
							else if (s.overall_rating > 2.4)
							{
								s.ratingclass = "average"
							}
							else
							{
								s.ratingclass = "poor"
							}
						}
						else
						{
							s.ratingclass = "zero"
						}
						if (Number(i) === Number(s.id))
						{
							u = true
						}
						o = f(s);
						h.append(o)
					}
				}
				else
				{
					$(".no-professors").html(n)
				}
				$(".remove-this-button").on("click touchstart", c);
				if (u)
				{
					e.html("remove from my profs");
					e.removeClass("add");
					e.removeClass("added");
					e.addClass("remove");
					return e.on("click touchstart", c)
				}
				else
				{
					return e.on("click touchstart", t)
				}
			}
		};
		r = function()
		{
			return $.post(window.RMP.Settings.pathname + "/people/listmyprofs",
			{}, u, "JSON")
		};
		c = function(r)
		{
			var i, s, o;
			s = function(r)
			{
				return function(i)
				{
					$(".mobileMyProfs #my-professor-" + r).remove();
					$(".menu #my-professor-" + r).remove();
					if (Number(e.attr("data-id")) === Number(r))
					{
						e.html("add to my profs");
						e.removeClass("remove");
						e.addClass("add");
						e.off();
						e.on("click touchstart", t)
					}
					if (h.children().length === 0)
					{
						return $(".no-professors").html(n)
					}
				}
			};
			r.stopPropagation();
			r.preventDefault();
			o = $(r.target);
			i = o.attr("data-id");
			return $.post(window.RMP.Settings.pathname + "/people/deletefrommyprofs",
			{
				tid: i
			}, s(i), "JSON")
		};
		t = function(e)
		{
			var t, n, i;
			t = function(e)
			{
				return function(t)
				{
					e.off();
					e.html("added to my profs");
					e.removeClass("add");
					e.addClass("added");
					if (h.children().length <= 0 && !$("#leftNav").hasClass("myProfsMenu"))
					{
						$(".my-prof-notice").fadeIn()
					}
					return setTimeout(function()
					{
						$(".my-prof-notice").fadeOut();
						h.empty();
						return r()
					}, 2e3)
				}
			};
			e.stopPropagation();
			e.preventDefault();
			i = $(e.target);
			n = i.attr("data-id");
			return $.post(window.RMP.Settings.pathname + "/people/addtomyprofs",
			{
				tid: n
			}, t(i), "JSON")
		};
		o = function(e)
		{
			if (e.userType === "student" && e.viaAjax === "true")
			{
				return $("#desktopmyProfContainer").show()
			}
		};
		s = function(e)
		{
			if (e.userType === "student" && e.viaAjax === "true")
			{
				return $("#mobilemyProfContainer").show()
			}
		};
		i = function(e)
		{
			var t, n, r, i, s, o;
			r = -1;
			if (document.cookie)
			{
				n = document.cookie.split(";");
				e = e + "=";
				i = function(t)
				{
					t = $.trim(t);
					if (t.substring(0, e.length) === e)
					{
						return r = decodeURIComponent(t.substring(e.length))
					}
				};
				for (s = 0, o = n.length; s < o; s++)
				{
					t = n[s];
					i(t)
				}
			}
			return r
		};
		a = function()
		{
			var e;
			r();
			if (window.location.href.indexOf("showMyProfs=true") > -1)
			{
				$("[data-menu='myProfsMenu']").click()
			}
			if (e === true)
			{
				return
			}
			e = true;
			if (i("isLoggedIn") === "true")
			{
				return $.ajax(
				{
					url: window.RMP.Settings.pathname + "/people/myProfsSection?viaAjax=true",
					dataType: "json",
					cache: true,
					success: o
				})
			}
		};
		l = function()
		{
			var e;
			r();
			enquire.register("screen and (min-width: 768px)",
			{
				match: function()
				{
					return a()
				}
			});
			if (e === true)
			{
				return
			}
			e = true;
			if (i("isLoggedIn") === "true")
			{
				return $.ajax(
				{
					url: window.RMP.Settings.pathname + "/people/mobilemyProfsSection?viaAjax=true",
					dataType: "json",
					cache: true,
					success: s
				})
			}
		};
		return {
			init: a,
			mInit: l
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.goNative = function()
	{
		var e, t, n, r, i;
		e = $("html");
		t = navigator.userAgent;
		n = t.indexOf("gonative");
		r = function(r)
		{
			console.log(
			{
				"The current User Agent string is: ": t
			});
			console.log(
			{
				'Is "gonative"" string detected? ': n
			});
			if (n !== -1)
			{
				return e.addClass("go-native")
			}
		};
		i = function()
		{
			return r()
		};
		return {
			init: i
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.jqueryUITouchPunch = function()
	{
		$(".ui-slider-handle").draggable();
		return {
			init: init
		}
	}
}).call(this);
(function()
{
	window.RMP = window.RMP ||
	{};
	window.RMP.Router = new window.RMP.Yoda(
	{
		Routes:
		{
			"*": "always",
			home_index: "home",
			sresults: "searchresults",
			school_results: "schoolresults",
			teacher_results: "teacherresults",
			rate_professor: "profratepage",
			rate_school: "schoolratepage",
			search_results: "searchresultspage",
			show_professor: "teacher_show",
			show_school: "school_show",
			utility_help: "helppage",
			utility_terms: "termspage",
			utility_contact: "contactpage",
			add_teacher: "addteacher",
			"add_teacher create_teacher": "createteacher",
			add_school: "addschool",
			mobilePanels: "mobile_panel",
			account_page: "account_page",
			"account_page new_account": "new_account",
			report_professor_rating: "report_pages",
			report_school_rating: "report_pages",
			report_professor_note: "report_pages",
			submit_correction: "submit_correction",
			user_profile: "student_profile",
			blog_buzzpost: "blogs",
			blog_profstrikesback: "blogs",
			blog_toplist: "blogs",
			blog_misc: "blogs",
			mobileBlog: "mobileBlog",
			signup_success: "signup_success"
		},
		always: function()
		{
			var e, t, n, r, i, s, o;
			o = $(window).height();
			if ($("body").hasClass("home_index") === false)
			{
				i = new window.RMP.leftNav("#leftNav", "#navToggle");
				i.init();
				r = (new window.RMP.blogMenus).init($(".js-blog-menu-global"));
				n = new window.RMP.myProfessors;
				if ($(document).width() > 768)
				{
					n.init()
				}
				if (btg.Environment.userAgent.isMobile || btg.Environment.userAgent.isTablet)
				{
					n.mInit()
				}
			}(new window.RMP.promo).init();
			window.RMP.renderFooterBlogLink();
			$("select").not(".combobox").selectOrDie(
			{
				size: 8
			});
			$("input[type=checkbox], input[type=radio]").uniform();
			$("#tablet-social-dropdown").on("click", ".tablet-social", function()
			{
				$(".loggedin").removeClass("active");
				$(this).parent().toggleClass("show-dropdown");
				$(this).find(".social-text").text("...");
				if (!$(this).parent().hasClass("show-dropdown"))
				{
					return $(this).find(".social-text").text("Follow us")
				}
			});
			e = new window.RMP.Login;
			if ($(document).width() > 768)
			{
				e.init()
			}
			else
			{}
			enquire.register("screen and (max-width: 1140px)",
			{
				match: function()
				{
					return e.mInit()
				}
			});
			t = (new window.RMP.MainSearch).init();
			btg.DoubleClick.createAd(
			{
				size: "1x1",
				reloadInterval: "-1",
				keyValues: ""
			}, "ad1x1");
			btg.DoubleClick.createAd(
			{
				size: "1x2",
				reloadInterval: "-1",
				keyValues: ""
			}, "ad1x2");
			btg.DoubleClick.createAd(
			{
				size: "3x3",
				reloadInterval: "-1",
				keyValues: ""
			}, "ad3x3");
			btg.DoubleClick.createAd(
			{
				size: "6x6",
				reloadInterval: "-1",
				keyValues: ""
			}, "ad6x6");
			enquire.register("screen and (min-width: 768px)",
			{
				match: function()
				{
					var e;
					e = (new window.RMP.stickyNav).init();
					$(window).load(function()
					{
						var e, t, n, r, i, s, u, a, f, l;
						e = $("#body");
						t = $("#body").css("background-color");
						n = $("#body").height();
						r = $("#container");
						i = $(".home_index");
						s = $("#leftNav");
						u = $(".left-panel");
						a = $(".right-panel");
						f = $(".right-panel").height();
						l = $("#menuWrap .menu");
						$(r).css("background-color", t);
						s.height(o);
						if (f < o)
						{
							u.height(o - 130);
							return u.css("padding-bottom", "50px")
						}
						else
						{
							u.height(o - 50);
							return u.css("padding-bottom", "50px")
						}
					});
					return $(window).resize(function()
					{
						var e, t, n, r, i, s, u, a, f, l;
						e = $("#body");
						t = $("#body").css("background-color");
						n = $("#body").height();
						r = $("#container");
						i = $(".home_index");
						s = $("#leftNav");
						u = $(".left-panel");
						a = $(".right-panel");
						f = $(".right-panel").height();
						o = $(window).height();
						l = $("#menuWrap .menu");
						s.height(o);
						if (f < o)
						{
							return u.height(o - 180)
						}
						else
						{
							u.height(o - 50);
							return u.css("padding-bottom", "50px")
						}
					})
				}
			});
			enquire.register("screen and (max-width: 767px)",
			{
				match: function()
				{
					var e;
					$("#container").addClass("leaderboardAd");
					$("#mobileLeaderboardAd").addClass("shown");
					$("#mobileLeaderboardAdWrap").empty();
					if (btg.Environment.userAgent.isMobile || btg.Environment.userAgent.isTablet)
					{
						btg.DoubleClick.createAd(
						{
							size: "300x50",
							sz: "300x50",
							reloadInterval: window.RMP.Settings.reloadInteval,
							keyValues: ""
						}, "mobileLeaderboardAdWrap")
					}
					else if (!btg.Environment.userAgent.isMobile && !btg.Environment.userAgent.isTablet)
					{
						btg.DoubleClick.createAd(
						{
							size: "728x90",
							sz: "728x90",
							reloadInterval: window.RMP.Settings.reloadInteval,
							keyValues: ""
						}, "mobileLeaderboardAdWrap")
					}
					return e = (new window.RMP.mobileStickyNav).init()
				}
			});
			(new window.RMP.mobileNav).init();
			(new window.RMP.searchForm).init(".menu #prof-location", ".menu #prof-location-btn");
			(new window.RMP.searchForm).init(".menu #prof-name", ".menu #prof-name-btn");
			(new window.RMP.searchForm).init(".menu #schoolNames", ".menu #schoolNames-btn");
			(new window.RMP.searchForm).init(".menu #rateProfessor", ".menu #rateProfessor-btn");
			(new window.RMP.searchForm).init(".menu #rateSchool", ".menu #rateSchool-btn");
			(new window.RMP.selectValidation).init(".menu #schoollocations", ".menu #schoolLocationz");
			s = (new window.RMP.popupNotice).check();
			$('input[type="text"]').placeholder();
			$('input[type="search"]').placeholder();
			if ($("#no-default").length === 0)
			{
				$(".sod_option:first-child").remove();
				$(".sod_selecst #contactUs option:first-child").remove()
			}
			$(document).one("focus.textarea", ".autoExpand", function()
			{
				var e;
				e = this.value;
				this.value = "";
				this.baseScrollHeight = this.scrollHeight;
				this.value = e
			}).on("input.textarea", ".autoExpand", function()
			{
				var e, t;
				e = this.getAttribute("data-min-rows") | 0;
				t = void 0;
				this.rows = e;
				t = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17);
				this.rows = e + t
			});
			return (new window.RMP.characterCountdown).init($("#sratingComments"), $(".character-count"))
		},
		home: function()
		{
			(new window.RMP.searchForm).init("#homeGrid #prof-location", "#homeGrid #prof-location-btn");
			(new window.RMP.searchForm).init("#homeGrid #prof-name", "#homeGrid #prof-name-btn");
			(new window.RMP.searchForm).init("#homeGrid #schoolNames", "#homeGrid #schoolNames-btn");
			(new window.RMP.searchForm).init("#homeGrid #rateSearch", "#homeGrid #rateSearch-btn");
			(new window.RMP.searchForm).init("#homeGrid #rateSchoolSearch", "#homeGrid #rateSchoolSearch-btn");
			(new window.RMP.selectValidation).init("#homeGrid #schoollocations", "#homeGrid #schoolLocationz");
			$(".option").hover(function(e)
			{
				return $("#fullBlock .green").text($(e.currentTarget).attr("data-text"))
			}, function()
			{
				return $("#fullBlock .green").text("what")
			});
			enquire.register("screen and (max-width: 767px)",
			{
				match: function()
				{
					var e, t;
					e = (new window.RMP.ContextSwitch).mobile();
					t = window.location.pathname.split("/");
					switch (t[t.length - 1])
					{
						case "findprof":
							$("#findProfessorOption").trigger("click");
							break;
						case "findschool":
							$("#findSchoolOption").trigger("click");
							break;
						case "rateprof":
							$("#rateProfessorOption").trigger("click");
							break;
						case "rateschool":
							$("#rateSchoolOption").trigger("click")
					}
					return btg.DoubleClick.createAd(
					{
						size: "300x250",
						reloadInterval: window.RMP.Settings.reloadInterval
					}, "ad300")
				},
				unmatch: function()
				{
					var e;
					$(".options").find("a").attr("href", "#");
					return e = (new window.RMP.ContextSwitch).init()
				}
			});
			enquire.register("screen and (max-width:  1140px)",
			{
				match: function()
				{
					return $(".block").eq(0).after($("#ad300"))
				}
			});
			enquire.register("screen and (min-width: 1141px) and (max-width:  1269px)",
			{
				match: function()
				{
					var e;
					if ($(".block").eq(1).is("#ad300"))
					{
						e = $(".block").eq(1).clone(true);
						$(".block").eq(1).remove();
						$(".block").eq(2).before(e)
					}
					else
					{
						$(".block").eq(1).after($("#ad300"))
					}
					return (new window.RMP.leftNav).trigger()
				}
			});
			enquire.register("screen and (min-width: 1270px)",
			{
				match: function()
				{
					var e;
					e = $(".block").eq(3);
					return e.after($("#ad300"))
				}
			});
			return enquire.register("screen and (min-width: 768px)",
			{
				match: function()
				{
					var e, t;
					$(".options").find("a").attr("href", "#");
					e = (new window.RMP.ContextSwitch).init();
					t = window.location.pathname.split("/");
					switch (t[t.length - 1])
					{
						case "findprof":
							return $("#findProfessorOption").trigger("click");
						case "findschool":
							return $("#findSchoolOption").trigger("click");
						case "rateprof":
							return $("#rateProfessorOption").trigger("click");
						case "rateschool":
							return $("#rateSchoolOption").trigger("click")
					}
				}
			})
		},
		new_account: function()
		{
			var e, t, n, r;
			n = (new window.RMP.Validate).init();
			e = function(e)
			{
				var t, n, r, i;
				t = $(e.currentTarget).data("id");
				i = $(e.currentTarget).data("query");
				r = $(e.currentTarget).data("state");
				n = $(e.currentTarget).data("country");
				$("#schoolid").val(t);
				$("#signup_school #school").val(i);
				$("#school_c_id").val(n);
				return $("#school_s_id").val(r)
			};
			t = function(e)
			{
				var t, n;
				t = $(e.currentTarget).data("id");
				n = $(e.currentTarget).data("query");
				$("#pname").val(n);
				return $("#tid").val(t)
			};
			new window.RMP.Autocomplete(
			{
				input: $("#signup_school #school"),
				acBox: $("#signup_school #schoolauContainerjoin ul"),
				template: Handlebars.compile('<li data-query="{{schoolname_s}}" data-id="{{pk_id}}" data-country="{{schoolcountry_s}}" data-state="{{schoolstate_s}}"><span class="main">{{schoolname_s}}</span><span class="sub noclick">{{schoolcity_s}}, {{schoolstate_s}}</span></li>'),
				keylength: 2,
				data_iterator: "school",
				search_type: "content_type_s",
				content_type: "SCHOOL",
				click_callback: e
			});
			new window.RMP.Autocomplete(
			{
				input: $("#pNamewrap #pname"),
				acBox: $("#pNamewrap #profauContainer ul"),
				template: Handlebars.compile('<li data-query="{{{teacherfullname_s}}}" data-id="{{pk_id}}" data-pname="" data-schoolname="" ><span class="wrap"><span class="main">{{{teacherfullname_s}}} </span><span class="sub">{{schoolname_s}}</span></span></li>'),
				keylength: 2,
				data_iterator: "name",
				search_type: "content_type_s",
				content_type: "TEACHER",
				click_callback: t
			});
			return r = (new window.RMP.AddTeacher).toggleField()
		},
		student_profile: function()
		{
			var e, t;
			e = function(e)
			{
				var t, n;
				t = $(e.currentTarget).data("id");
				n = $(e.currentTarget).data("query");
				$("#schoolid").val(t);
				return $("#profileEdit #changeSchool").val(n)
			};
			new window.RMP.Autocomplete(
			{
				input: $("#profileEdit #changeSchool"),
				acBox: $("#profileEdit #schoolauContainereditAccount ul"),
				template: Handlebars.compile('<li data-query="{{schoolname_s}}" data-id="{{pk_id}}"><span class="main">{{schoolname_s}}</span><span class="sub">{{schoolcity_s}}, {{schoolstate_s}}</span></li>'),
				keylength: 2,
				data_iterator: "school",
				search_type: "content_type_s",
				click_callback: e,
				content_type: "SCHOOL",
				last_item: "<li class='dont_see noclick'>Don't see your school? <a href='" + window.RMP.Settings.pathname + "/AddSchool.jsp'>Add it</a> </li>"
			});
			t = (new window.RMP.ValidateProfile).init();
			(new window.RMP.BuildDeleteAccount).init();
			return new window.RMP.ProfilePasswordConf(
			{
				fields: [],
				container: ".current-password-container"
			})
		},
		account_page: function()
		{
			var e, t, n;
			if ($("input[type='file']").length)
			{
				e = $("#profile_upload");
				e.on("change", function(t)
				{
					var n, r;
					n = e.get(0).files[0];
					r = new FileReader;
					r.onload = function(e)
					{
						return $(".profile_upload_preview").css(
						{
							"background-image": "url(" + event.target.result + ")"
						})
					};
					return r.readAsDataURL(n)
				})
			}
			n = (new window.RMP.ValidateProfile).init();
			t = function(e)
			{
				var t, n;
				t = $(e.currentTarget).data("id");
				n = $(e.currentTarget).data("query");
				$("#schoolid").val(t);
				return $("#editAccount #changeSchool").val(n)
			};
			new window.RMP.Autocomplete(
			{
				input: $("#editAccount #changeSchool"),
				acBox: $("#editAccount #schoolauContainer ul"),
				template: Handlebars.compile('<li data-query="{{schoolname_s}}" data-id="{{pk_id}}"><span class="main">{{schoolname_s}}</span><span class="sub">{{schoolcity_s}}, {{schoolstate_s}}</span></li>'),
				keylength: 2,
				data_iterator: "school",
				search_type: "content_type_s",
				click_callback: t,
				content_type: "SCHOOL",
				last_item: "<li class='dont_see noclick'>Don't see your school? <a href='" + window.RMP.Settings.pathname + "/AddSchool.jsp'>Add it</a> </li>"
			});
			(new window.RMP.BuildDeleteAccount).init();
			return new window.RMP.ProfilePasswordConf(
			{
				fields: [],
				container: ".current-password-container"
			})
		},
		createteacher: function()
		{
			var e, t;
			$("#school_name").on("keyup", function()
			{
				$("#department").empty();
				$("#department").append("<option>Select department</option>");
				$("select").selectOrDie("destroy");
				return $("select").selectOrDie(
				{
					size: 8
				})
			});
			e = (new window.RMP.AddTeacher).create();
			t = function(e)
			{
				var t, n, r, i, s;
				n = $(e.currentTarget).data("id");
				s = $(e.currentTarget).data("query");
				i = $(e.currentTarget).data("state");
				r = $(e.currentTarget).data("country");
				$("#schoolid").val(n);
				$("#addTeacher #school_name").val(s);
				$("#school_country").val(r);
				$("#school_state").val(i);
				t = window.RMP.departmentSearchr(n).init();
				return window.RMP.Krang.subscribe("departments-loaded-" + n, function(e, t)
				{
					$("#department").empty();
					$("#department").append("<option>Select department</option>");
					_.each(t.departments, function(e)
					{
						if (e.name)
						{
							return $("#department").append('<option value="' + e.name + '">' + e.name + "</option>")
						}
					});
					$("select").selectOrDie("destroy");
					return $("select").selectOrDie(
					{
						size: 8
					})
				})
			};
			return new window.RMP.Autocomplete(
			{
				input: $("#addTeacher #school_name"),
				acBox: $("#addTeacher #school_name_container ul"),
				template: Handlebars.compile('<li data-query="{{schoolname_s}}" data-id="{{pk_id}}" data-country="{{schoolcountry_s}}" data-state="{{schoolstate_s}}"><span class="main">{{schoolname_s}}</span><span class="sub">{{schoolcity_s}}, {{schoolstate_s}}</span></li>'),
				keylength: 2,
				data_iterator: "school",
				search_type: "content_type_s",
				click_callback: t,
				content_type: "SCHOOL",
				last_item: "<li class='dont_see noclick'>Don't see your school? <a href='" + window.RMP.Settings.pathname + "/AddSchool.jsp'>Add it</a> </li>"
			})
		},
		addteacher: function()
		{
			var e, t;
			$("#school_name").on("keyup", function()
			{
				$("#department").empty();
				$("#department").append("<option>Select department</option>");
				$("select").selectOrDie("destroy");
				return $("select").selectOrDie(
				{
					size: 8
				})
			});
			e = (new window.RMP.AddTeacher).add();
			t = function(e)
			{
				var t, n, r;
				n = $(e.currentTarget).data("id");
				r = $(e.currentTarget).data("query");
				$("#schoolid").val(n);
				$("#addTeacher #school_name").val(r);
				t = window.RMP.departmentSearchr(n).init();
				return window.RMP.Krang.subscribe("departments-loaded-" + n, function(e, t)
				{
					$("#department").empty();
					$("#department").append("<option>Select department</option>");
					_.each(t.departments, function(e)
					{
						if (e.name)
						{
							return $("#department").append('<option value="' + e.name + '">' + e.name + "</option>")
						}
					});
					$("select").selectOrDie("destroy");
					return $("select").selectOrDie(
					{
						size: 8
					})
				})
			};
			return new window.RMP.Autocomplete(
			{
				input: $("#addTeacher #school_name"),
				acBox: $("#addTeacher #school_name_container ul"),
				template: Handlebars.compile('<li data-query="{{schoolname_s}}" data-id="{{pk_id}}"><span class="main">{{schoolname_s}}</span><span class="sub">{{schoolcity_s}}, {{schoolstate_s}}</span></li>'),
				keylength: 2,
				data_iterator: "school",
				search_type: "content_type_s",
				click_callback: t,
				content_type: "SCHOOL",
				last_item: "<li class='dont_see noclick'>Don't see your school? <a href='" + window.RMP.Settings.pathname + "/AddTeacher.jsp'>Add it</a> </li>"
			})
		},
		addschool: function()
		{
			var e, t, n;
			n = (new window.RMP.AddSchool).init();
			t = $(".js-add-school-toggle").val();
			e = $(".js-add-school-toggle option");
			return e.on("click", function()
			{
				var e;
				e = $(this).val();
				$(".js-add-selects option").hide();
				switch (e)
				{
					case "0":
						return $(".js-us").show();
					case "1":
						return $(".js-ca").show();
					case "2":
						return $(".js-en").show();
					case "3":
						return $(".js-sc").show();
					case "4":
						return $(".js-ir").show();
					case "5":
						return $(".js-wl").show()
				}
			})
		},
		mobile_panel: function()
		{
			var e, t;
			window.root = window.RMP.Settings.pathname + "/";
			$(".cta").find(".reset-search-form").attr("href", window.root);
			(new window.RMP.searchForm).init("#mainContent #prof-name", "#mainContent #prof-name-btn");
			(new window.RMP.searchForm).init("#mainContent #prof-location", "#mainContent #prof-location-btn");
			(new window.RMP.searchForm).init("#mainContent #schoolNames", "#mainContent #schoolNames-btn");
			(new window.RMP.selectValidation).init("#mainContent #schoollocations", "#mainContent #schoolLocationz");
			t = function(e)
			{
				var t, n, r, i;
				e.preventDefault();
				t = $(e.currentTarget).parent();
				t.find("a").removeClass();
				$(e.currentTarget).addClass("active");
				i = $(e.currentTarget).data("type");
				$("#mainContent form").hide();
				n = function(e)
				{
					var t;
					t = $(e.currentTarget).data("id");
					return window.location = window.RMP.Settings.pathname + "/" + "ratemyCampusA.jsp?sid=" + t
				};
				r = function(e)
				{
					var t;
					t = $(e.currentTarget).data("id");
					return window.location = window.RMP.Settings.pathname + "/" + "campusRatings.jsp?sid=" + t
				};
				if ($("#mainContent form").hasClass(i))
				{
					$("#mainContent form." + i).show()
				}
				return (new window.RMP.searchForm).init("#prof-location", "#prof-location-btn")
			};
			$("#mainContent").on("touchstart click", ".search-by a", t);
			return e = (new window.RMP.Login).mInit()
		},
		profratepage: function()
		{
			var e, t;
			e = $("#helpSlider,#easinessSlider, #claritySlider, #interestSlider,#textbookSlider");
			window.RMP.ratingSliders().init(e, false);
			(new window.RMP.Lozenger).init();
			(new window.RMP.characterCountdown).init($("#comments"), $(".character-count"));
			(new window.RMP.limitCharacters).init($("#course-code"), $("#course-character-limit"), "The course you entered is too long. Are you sure you're using the course code and not the full course name?");
			(new window.RMP.courseCodedigitValidation).init($("#course-code"), $("#course-digit-validation"), "Please include the numeric portion of your course code.");
			t = (new window.RMP.tagPicker).init();
			(new window.RMP.leftNav).trigger();
			(new window.RMP.rateForm).init("#rateProfessorForm", "#rateProfessorBtn");
			enquire.register("screen and (min-width : 1430px)",
			{
				match: function()
				{
					$("#ad-container").empty();
					return btg.DoubleClick.createAd(
					{
						size: "300x250",
						reloadInterval: window.RMP.Settings.reloadInterval,
						keyValues: "gridAd=grid"
					}, "ad-container")
				}
			});
			enquire.register("screen and (min-width : 1141px) and (max-width : 1429px)",
			{
				match: function()
				{
					return $("#ad-container").empty()
				}
			});
			enquire.register("screen and (min-width : 768px) and (max-width : 1140px)",
			{
				match: function()
				{
					$("#ad-container").empty();
					return btg.DoubleClick.createAd(
					{
						size: "300x250",
						reloadInterval: window.RMP.Settings.reloadInterval,
						keyValues: "gridAd=grid"
					}, "ad-container")
				}
			});
			enquire.register("screen and (max-width : 767px)",
			{
				match: function()
				{
					return $("#ad-container").empty()
				}
			});
			$("#leftNav a[data-menu=rateMenu]").addClass("highlighted");
			return enquire.register("screen and (min-width: 1141px)",
			{
				match: function()
				{
					$("#leftNav a[data-menu=rateMenu]").addClass("blocked");
					return (new window.RMP.leftNav).sticky()
				},
				unmatch: function()
				{
					return $("#leftNav a[data-menu=rateMenu]").removeClass("blocked")
				}
			})
		},
		schoolratepage: function()
		{
			var e;
			e = $("#repSlider,#locationSlider,#optSlider,#librarySlider, #campusSlider, #internetSlider, #foodSlider, #clubsSlider, #socialSlider, #happinessSlider");
			window.RMP.ratingSliders().init(e);
			(new window.RMP.characterCountdown).init($("#comments"), $(".character-count"));
			(new window.RMP.rateForm).init("#rateSchoolForm", "#rateSchoolBtn");
			(new window.RMP.leftNav).trigger();
			enquire.register("screen and (min-width : 1430px)",
			{
				match: function()
				{
					$("#ad-container").empty();
					return btg.DoubleClick.createAd(
					{
						size: "300x250",
						reloadInterval: window.RMP.Settings.reloadInterval,
						keyValues: "gridAd=grid"
					}, "ad-container")
				}
			});
			enquire.register("screen and (min-width : 1141px) and (max-width : 1429px)",
			{
				match: function()
				{
					return $("#ad-container").empty()
				}
			});
			enquire.register("screen and (min-width : 768px) and (max-width : 1140px)",
			{
				match: function()
				{
					$("#ad-container").empty();
					return btg.DoubleClick.createAd(
					{
						size: "300x250",
						reloadInterval: window.RMP.Settings.reloadInterval,
						keyValues: "gridAd=grid"
					}, "ad-container")
				}
			});
			enquire.register("screen and (max-width : 767px)",
			{
				match: function()
				{
					return $("#ad-container").empty()
				}
			});
			$("#leftNav a[data-menu=rateMenu]").addClass("highlighted");
			return enquire.register("screen and (min-width: 1141px)",
			{
				match: function()
				{
					$("#leftNav a[data-menu=rateMenu]").addClass("blocked");
					return (new window.RMP.leftNav).sticky()
				},
				unmatch: function()
				{
					return $("#leftNav a[data-menu=rateMenu]").removeClass("blocked")
				}
			})
		},
		teacher_show: function()
		{
			var e, t, n, r, i, s, o, u, a, f;
			t = $(".ad-placement");
			_.each(t, function(e)
			{
				var t, n;
				t = $(e);
				n = t.attr("id");
				return n = $("#" + n)
			});
			enquire.register("screen and (min-width : 768px)",
			{
				match: function()
				{
					$("#ad-container, #mobile-ad-container").empty();
					return btg.DoubleClick.createAd(
					{
						size: "300x250",
						reloadInterval: window.RMP.Settings.reloadInterval,
						keyValues: "gridAd=grid"
					}, "ad-container")
				}
			});
			enquire.register("screen and (max-width : 767px)",
			{
				match: function()
				{
					$("#ad-container, #mobile-ad-container").empty();
					return btg.DoubleClick.createAd(
					{
						size: "300x250",
						reloadInterval: window.RMP.Settings.reloadInterval,
						keyValues: "gridAd=grid"
					}, "mobile-ad-container")
				}
			});
			enquire.register("screen and (max-width : 320px)",
			{
				match: function()
				{
					$(".pfname, .plname").css(
					{
						width: 300
					});
					if ($(".pfname").text().length > 30)
					{
						$(".pfname").css(
						{
							display: "block"
						})
					}
					if ($(".plname").text().length > 30)
					{
						return $(".plname").css(
						{
							display: "block"
						})
					}
				},
				unmatch: function() {}
			});
			enquire.register("screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait)",
			{
				match: function()
				{
					if ($(".pfname").text().length > 23)
					{
						$(".pfname").css(
						{
							width: 220,
							fontSize: 32,
							display: "block"
						})
					}
					if ($(".plname").text().length > 23)
					{
						return $(".plname").css(
						{
							width: 220,
							fontSize: 32,
							display: "block"
						})
					}
				},
				unmatch: function()
				{
					if ($(".pfname").text().length > 20)
					{
						$(".pfname").css(
						{
							fontSize: 32,
							display: "block"
						})
					}
					if ($(".plname").text().length > 20)
					{
						return $(".plname").css(
						{
							fontSize: 32,
							display: "block"
						})
					}
				}
			});
			$("#leftNav a[data-menu=profMenu]").addClass("highlighted");
			enquire.register("screen and (min-width: 1141px)",
			{
				match: function()
				{
					return $("#leftNav a[data-menu=profMenu]").addClass("blocked")
				},
				unmatch: function()
				{
					return $("#leftNav a[data-menu=profMenu]").removeClass("blocked")
				}
			});
			$("#profMenu .header").text("Edit your professor search");
			u = $("#helpfulnessSlider, #claritySlider, #easinessSlider");
			s = (new window.RMP.ratingSliders).init(u, true);
			f = (new window.RMP.tagPicker).init();
			a = (new window.RMP.pTableToggle).init();
			i = (new window.RMP.helpful).init(window.RMP.Settings.pathname + "/teacherRating/updateTeacherRatingHelp");
			o = (new window.RMP.pratings).init();
			(new window.RMP.characterCountdown).init($("#reportDesc"), $(".character-count"));
			(new window.RMP.characterCountdown).init($("#professorNote"), $("#noteCount"));
			(new window.RMP.professorSidebarSearch).init();
			n = (new window.RMP.addNote).init();
			window.RMP.Krang.subscribe("sticky-nav", function(e, t)
			{
				return $(".left-panel").addClass("sticky")
			});
			window.RMP.Krang.subscribe("un-sticky-nav", function(e, t)
			{
				return $(".left-panel").removeClass("sticky")
			});
			if (_.isEmpty(window.RMP.Settings.user))
			{
				$("#areyouquestion").show()
			}
			else if (window.RMP.Settings.user.type === "professor")
			{
				$("#areyouquestion").hide()
			}
			else
			{
				$("#areyouquestion").hide()
			}
			r = function()
			{
				var e, t;
				t = false;
				e = {};
				$(".edit-slides form").serializeArray().map(function(t)
				{
					return e[t.name] = parseInt(t.value)
				});
				if (e.helpfulnessrating && e.clarityrating && e.easinessrating)
				{
					t = true
				}
				if (t)
				{
					return $("#sliderValues").prop("disabled", false)
				}
				else
				{
					return $("#sliderValues").prop("disabled", true)
				}
			};
			if (!$(".faux-slides").hasClass("blocked"))
			{
				$(".faux-slides").on("click", function()
				{
					$(".edit-slides").show();
					$(".faux-slides").hide();
					mtvn.btg.Controller.sendLinkEvent(
					{
						linkName: "PROF:Sliders",
						linkType: "o"
					});
					$("#helpfulnessrating").val("");
					$("#clarityrating").val("");
					$("#easinessrating").val("");
					return u.on("mouseout", r)
				});
				$("#cancel-rating").on("click", function(e)
				{
					e.preventDefault();
					$(".edit-slides").hide();
					return $(".faux-slides").show()
				})
			}
			else
			{
				$("#areyouquestion").hide()
			}
			if ($(document).width() < 768)
			{
				$("body").addClass("mobile-toggle");
				if ($(".mobile-toggle").length)
				{
					e = $(".mobile-toggle").find(".rating-wrapper");
					return e.on("click", function()
					{
						return $(this).siblings(".breakdown").slideToggle()
					})
				}
			}
		},
		school_show: function()
		{
			var e, t = this;
			$("#leftNav a[data-menu=schoolMenu]").addClass("highlighted");
			enquire.register("screen and (min-width: 1141px)",
			{
				match: function()
				{
					return $("#leftNav a[data-menu=schoolMenu]").addClass("blocked")
				},
				unmatch: function()
				{
					return $("#leftNav a[data-menu=schoolMenu]").removeClass("blocked")
				}
			});
			(new window.RMP.professorSidebarSearch).init();
			e = (new window.RMP.helpful).init(window.RMP.Settings.pathname + "/campusrating/updateCampusRatingHelp");
			$("#schoolMenu .header").text("Edit your school search");
			window.RMP.Krang.subscribe("sticky-nav", function(e, t)
			{
				return $(".left-panel").addClass("sticky")
			});
			window.RMP.Krang.subscribe("un-sticky-nav", function(e, t)
			{
				return $(".left-panel").removeClass("sticky")
			});
			enquire.register("screen and (max-width : 767px)",
			{
				match: function()
				{
					$("#ad-container, #mobile-ad-container").empty();
					return btg.DoubleClick.createAd(
					{
						size: "300x250",
						reloadInterval: window.RMP.Settings.reloadInterval,
						keyValues: "gridAd=grid"
					}, "mobile-ad-container")
				},
				unmatch: function()
				{
					return $("#mobile-ad-container").empty()
				}
			});
			enquire.register("screen and (min-width : 768px)",
			{
				match: function()
				{
					$("#ad-container, #mobile-ad-container").empty();
					return btg.DoubleClick.createAd(
					{
						size: "300x250",
						reloadInterval: window.RMP.Settings.reloadInterval,
						keyValues: "gridAd=grid"
					}, "ad-container")
				}
			});
			(new window.RMP.schoolratings).init();
			if ($(document).width() < 768)
			{
				$("body").addClass("mobile-toggle");
				if ($(".mobile-toggle").length)
				{
					return $(".school-rating-list .scores .js-open").each(function(e, t)
					{
						if (!$(t).hasClass("bound"))
						{
							return $(t).addClass("bound").on("click", function()
							{
								return $(this).next(".rate-list").slideToggle()
							})
						}
					})
				}
			}
		},
		searchresultspage: function()
		{
			var e, t;
			t = $(".filteroptions input[type=radio]");
			e = $(".filteroptions label");
			t.click(function(t)
			{
				var n, r;
				r = $(t.currentTarget).val();
				e.removeClass();
				n = $(t.currentTarget).parents(".filter-type");
				n.find("label").addClass("active");
				switch (r)
				{
					case "all":
						return $(".listings .listing").show();
					case "professor":
						$(".listing.school").hide();
						return $(".listing.professor").show();
					case "schools":
						$(".listing.professor").hide();
						return $(".listing.school").show()
				}
			});
			enquire.register("screen and (min-width : 700px)",
			{
				match: function()
				{
					$("#ad-container").empty();
					return btg.DoubleClick.createAd(
					{
						size: "300x250",
						reloadInterval: window.RMP.Settings.reloadInterval,
						keyValues: "gridAd=grid"
					}, "ad-container")
				}
			});
			return enquire.register("screen and (max-width : 699px)",
			{
				match: function()
				{
					return $("#ad-container").empty()
				}
			})
		},
		schoolresults: function(e)
		{
			$("#schoolMenu .header").text("Edit your School search");
			$("#leftNav a[data-menu=schoolMenu]").addClass("highlighted");
			enquire.register("screen and (min-width: 1141px)",
			{
				match: function()
				{
					return $("#leftNav a[data-menu=schoolMenu]").addClass("blocked")
				},
				unmatch: function()
				{
					return $("#leftNav a[data-menu=schoolMenu]").removeClass("blocked")
				}
			});
			(new window.RMP.schoolfiltering).init();
			enquire.register("screen and (min-width : 700px)",
			{
				match: function()
				{
					$("#ad-container").empty();
					return btg.DoubleClick.createAd(
					{
						size: "300x250,300x600",
						reloadInterval: window.RMP.Settings.reloadInterval,
						keyValues: "gridAd=grid"
					}, "ad-container")
				}
			});
			return enquire.register("screen and (max-width : 699px)",
			{
				match: function()
				{
					return $("#ad-container").empty()
				}
			})
		},
		teacherresults: function(e)
		{
			$("#profMenu .header").text("Edit your professor search");
			$("#leftNav a[data-menu=profMenu]").addClass("highlighted");
			enquire.register("screen and (min-width: 1141px)",
			{
				match: function()
				{
					return $("#leftNav a[data-menu=profMenu]").addClass("blocked")
				},
				unmatch: function()
				{
					return $("#leftNav a[data-menu=profMenu]").removeClass("blocked")
				}
			});
			(new window.RMP.professorSidebarSearch).init();
			enquire.register("screen and (min-width : 1001px)",
			{
				match: function()
				{
					$("#ad-container").empty();
					return btg.DoubleClick.createAd(
					{
						size: "300x250,300x600",
						reloadInterval: window.RMP.Settings.reloadInterval,
						keyValues: "gridAd=grid"
					}, "ad-container")
				}
			});
			enquire.register("screen and (max-width : 1000px)",
			{
				match: function()
				{
					return $("#ad-container").empty()
				}
			});
			enquire.register("screen and (min-width: 1141px)",
			{
				match: function()
				{
					return (new window.RMP.leftNav).sticky()
				}
			});
			return enquire.register("screen and (min-width : 768px) and (max-width : 1140px)",
			{
				match: function()
				{
					$("#ad-container").empty();
					return btg.DoubleClick.createAd(
					{
						size: "300x250",
						reloadInterval: window.RMP.Settings.reloadInterval,
						keyValues: "gridAd=grid"
					}, "ad-container")
				}
			})
		},
		signup_success: function()
		{
			return (new window.RMP.leftNav).trigger()
		},
		mobileBlog: function()
		{
			var e;
			return e = (new window.RMP.blogMenus).init($("#body #mainContent"))
		},
		blogs: function()
		{
			var e;
			$("#leftNav a[data-menu=blogMenu]").addClass("blocked");
			window.RMP.Krang.subscribe("sticky-nav", function(e, t)
			{
				return $(".left-panel").addClass("sticky")
			});
			window.RMP.Krang.subscribe("un-sticky-nav", function(e, t)
			{
				return $(".left-panel").removeClass("sticky")
			});
			e = (new window.RMP.blogMenus).init($(".js-blog-menu-interior"));
			window.RMP.initPanelToggle();
			enquire.register("screen and (min-width : 1430px)",
			{
				match: function()
				{
					$("#ad-container").empty();
					return btg.DoubleClick.createAd(
					{
						size: "300x250",
						reloadInterval: window.RMP.Settings.reloadInterval,
						keyValues: "gridAd=grid"
					}, "ad-container")
				}
			});
			enquire.register("screen and (min-width : 1141px) and (max-width : 1429px)",
			{
				match: function()
				{
					$("#ad-container").empty();
					return btg.DoubleClick.createAd(
					{
						size: "300x250",
						reloadInterval: window.RMP.Settings.reloadInterval,
						keyValues: "gridAd=grid"
					}, "ad-container")
				}
			});
			enquire.register("screen and (min-width : 1011px) and (max-width : 1140px)",
			{
				match: function()
				{
					$("#ad-container").empty();
					return btg.DoubleClick.createAd(
					{
						size: "300x250",
						reloadInterval: window.RMP.Settings.reloadInterval,
						keyValues: "gridAd=grid"
					}, "ad-container")
				}
			});
			enquire.register("screen and (max-width : 320px)",
			{
				match: function()
				{
					$("#mobile-ad-container").empty();
					return btg.DoubleClick.createAd(
					{
						size: "300x250",
						reloadInterval: window.RMP.Settings.reloadInterval,
						keyValues: "gridAd=grid"
					}, "mobile-ad-container")
				}
			});
			return enquire.register("screen and (max-width : 1010px)",
			{
				match: function()
				{
					return $("#ad-container").empty()
				}
			})
		},
		report_pages: function()
		{
			(new window.RMP.characterCountdown).init($("#report_reason"), $(".counter"));
			console.log("report form");
			return (new window.RMP.GenericValidate).init($(".report"))
		},
		submit_correction: function()
		{
			return (new window.RMP.GenericValidate).init($(".correction"))
		},
		contactpage: function()
		{
			(new window.RMP.accordian).init();
			(new window.RMP.contactcharacterCountdown).init($("#contact_message"), $(".character-count"));
			return (new window.RMP.GenericValidate).init($("#contact-Us"))
		},
		helppage: function()
		{
			var e, t, n;
			e = new window.RMP.accordian;
			e.init();
			n = document.URL.split("#");
			if (n.length === 2)
			{
				t = n[n.length - 1];
				return e.expand(t)
			}
		},
		termspage: function()
		{
			var e, t, n;
			e = new window.RMP.accordian;
			e.init();
			n = document.URL.split("#");
			if (n.length === 2)
			{
				t = n[n.length - 1];
				return e.expand(t)
			}
		}
	})
}).call(this)