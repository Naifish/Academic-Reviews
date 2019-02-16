//Device detection 
(function() {
    var _h = location.hostname;
    var _d = /^www./.test(_h) ? _h.substring(4) : _h;
    if (document.cookie.indexOf("btg_device=") == -1) {
        document.cookie = "btg_device=" + "m:" + (+false) + ",t:" + (+false) + ";path=/; expires=" + (new Date("December 31, 2038")).toUTCString() + ";domain=" + _d;
    }
})();




//Including Coda 3 config from CODA/sites/ratemyprofessors.com/config.js




if (typeof btg == 'undefined') var btg = {};

btg.config = {
    version: '3',
    defferedAdLoading: false,
    enablePOE: false,
    backwardCompatibility: true,
    hasReporting: true,
    hasAds: false,
    hasAdsDFP: true,
    requireCOPPACompliance: false,
    Omniture: {
        enabled: true,
        account: 'viaviarmp',
        charSet: 'ISO-8859-1',
        dynamicAccountSelection: 'true',
        dynamicAccountList: 'viarmpdev=mtvi.com',
        linkInternalFilters: 'javascript:,ratemyprofessors.com',
        videoViewEventDisable: true,
        enableTimeParting: false,
        trackInlineStats: true,
        defaultHier: 'hier2',
        enableVisitorNamespace: false,
        enableMtvnVisitorGuid: false,
        enableMeteorPlugin: false,
        enableGuidPlugin: false,
        enableGuidAuxiliaryCall: false,
        enableFirstPartyCookie: false,
        tabletAccount: '',
        timezone: '-5',
        trackExternalLinks: 'true',
        fluxCommunityId: ''
    },
    Nielsen: {
        enabled: false,
        cid: '',
        videoCensusId: '',
        idSynchFreq: 'never'
    },
    QuantCast: {
        enabled: false,
        adsEnabled: false,
        labels: 'MTVN Global Digital Network,MTVN Global Digital Proper,MTVN Music and Logo Global Network,MTVN Music and Logo Global Proper,MTVN Music and Logo Domestic,MTVN Music,mtvU Online',
        reportMode: '',
        enableDemoTargeting: false

    },
    ComScore: {
        enabled: true,
        c2: '6036034'
    },
    Meteor: {
        enabled: false,
        applicationId: '',
        multiDomain: false
    },
    ChoiceStream: {
        enabled: false,
        apiKey: '',
        profileId: ''
    },
    DoubleClick: {
        enabled: true,
        dartSite: 'rmp.mtvi',
        isInternational: false,
        isUnobtrusive: false,
        allowMobile: true,
        enabledMobileAdDomain: false,
        reloadableAds: false,
        reloadAdInterval: 10000,
        adUnit: '',
        enableMobileNid: true,
        networkID: '8675',
        enableNavigatorGeolocation: false,
        disableDeviceManagement: false,
        amazonAdsEnabled: false,
        amazonAdsID: '3221'
    },
    Freewheel: {
        enabled: false,
        adBlockerDetection: false
    },
    International: {
        enabled: false,
        dartSite: '',
        region: ''
    },
    ABTest: {
        enabled: false
    },
    Flux: {
        enabled: true,
        communityId: ''
    },
    FluxHosted: {
        enabled: false
    },
    Facebook: {
        enabled: false
    },
    Photos: {
        enabled: false
    },
    TestAndTarget: {
        enabled: false,
        videoAdBlockerTargetingEnabled: false,
        globalMboxID: ''
    },
    Criteo: {
        enabled: false
    },
    Rubicon: {
        enabled: false,
        siteId: '22156',
        zoneId: '77826'
    },
    Demdex: {
        enabled: true
    },
    Recommendations: {
        enabled: false
    },
    LocalAdvisory: {
        enabled: false,
        phase: 0,
        useStaticCreative: false,
        staticCreativeDomID: ''
    },
    Yieldex: {
        enabled: true
    },
    OmnitureIntegrate: {
        enabled: false,
        account: ''
    },
    iOSAdSDK: {
        useExternalBrowser: false
    },
    SourcePoint: {
        enabled: true
    }
};




//Including Coda version 3.
var btg = typeof btg === "object" ? btg : {};
btg.config = typeof btg.config === "object" ? btg.config : {};
btg.isCoreLoaded = false;
btg.isDOMLoaded = false;
(function(c, d) {
    var e = false,
        f = true,
        g = c.document,
        h = g.documentElement,
        i = g.addEventListener ? "addEventListener" : "attachEvent",
        n = g.addEventListener ? "removeEventListener" : "detachEvent",
        j = g.addEventListener ? "" : "on",
        l = function(f) {
            if (f.type == "readystatechange" && g.readyState != "complete") return;
            (f.type == "load" ? c : g)[n](j + f.type, l, false);
            if (!e && (e = true)) d.call()
        },
        k = function() {
            try {
                h.doScroll("left")
            } catch (c) {
                setTimeout(k, 50);
                return
            }
            l("poll")
        };
    if (g.readyState == "complete") d.call();
    else {
        if (g.createEventObject && h.doScroll) {
            try {
                f = !c.frameElement
            } catch (o) {}
            if (f) k()
        }
        g[i](j + "DOMContentLoaded", l, false);
        g[i](j + "readystatechange", l, false);
        c[i](j + "load", l, false)
    }
})(window, function() {
    btg.isDOMLoaded = true
});
btg.DOM = {
    Events: {
        addListener: function(c, d, e) {
            if (d == "DOMContentLoaded" && !c.addEventListener) document.onreadystatechange = function() {
                if (document.readyState == "complete") e()
            };
            else if (c.attachEvent) c.attachEvent("on" + d, e);
            else if (c.addEventListener) c.addEventListener(d, e, false);
            else c["on" + d] = e
        },
        removeListener: function(c, d, e) {
            if (c.detachEvent) c.detachEvent("on" + d, e);
            else if (c.removeEventListener) c.removeEventListener(d, e, false);
            else c["on" + d] = null
        },
        onDomLoaded: function(c) {
            var d = window.document;
            if (d.addEventListener) {
                d.addEventListener("DOMContentLoaded",
                    c, false);
                d.addEventListener("readystatechange", c, false);
                window.addEventListener("load", c, false)
            } else {
                d.attachEvent("onDOMContentLoaded", c, false);
                d.attachEvent("onreadystatechange", c, false);
                window.attachEvent("onload", c, false)
            }
        }
    },
    Storage: {
        set: function(c, d, e) {
            var f = btg.String.isDefined,
                g = btg.Object.isDefined;
            if (f(c) && f(d)) try {
                if (e !== true && g(localStorage)) localStorage[c] = d;
                else if (g(sessionStorage)) sessionStorage[c] = d
            } catch (h) {
                btg.Error.log("CODA Error: DOM storage not available!")
            }
        },
        get: function(c,
            d) {
            var e;
            isStrDef = btg.String.isDefined, isObjDef = btg.Object.isDefined;
            if (isStrDef(c)) try {
                if (d !== true && isObjDef(localStorage) && isStrDef(localStorage[c])) e = localStorage[c];
                else if (isObjDef(sessionStorage) && isStrDef(sessionStorage[c])) e = sessionStorage[c]
            } catch (f) {
                btg.Error.log("CODA Error: DOM storage not available!")
            }
            return e
        },
        clear: function(c) {
            var d = btg.Object.isDefined;
            try {
                if (c !== true && d(localStorage)) localStorage.clear();
                else if (d(sessionStorage)) sessionStorage.clear()
            } catch (e) {
                btg.Error.log("CODA Error: DOM storage not available!")
            }
        },
        isStorageAvailable: function() {
            try {
                if (window.localStorage) return true
            } catch (c) {
                return false
            }
        }
    },
    createIframe: function(c) {
        for (var d = document.createElement("iframe"), e = ["id", "name", "width", "height", "scrolling", "frameBorder", "marginHeight", "marginWidth", "noResize"], f = e.length, g = 0; g < f; g++) {
            var h = e[g],
                i = c[h];
            if (i) {
                d[h] = i;
                d.setAttribute(h, i)
            }
        }
        return d
    },
    appendIframe: function(c) {
        if (!c.src) return null;
        if (!c.parent || c.parent.nodeType !== 1) c.parent = document.body;
        if (typeof c.style !== "object") c.style = {
            height: "1px",
            width: "1px",
            visibility: "hidden",
            position: "absolute",
            bottom: "0",
            left: "-1000px"
        };
        var d = this.createIframe(c);
        if (typeof c.onload === "function") d.onload = c.onload;
        this.applyStyle(d, c.style);
        try {
            c.parent.appendChild(d)
        } catch (e) {
            new btg.Alert("Coda Implementation ERROR: 3P Demdex call failed. Please make sure that Coda is included within the document body.");
            btg.Error.log("Coda Implementation ERROR: 3P Demdex call failed. Please make sure that Coda is included within the document body.")
        }
        d.src = c.src;
        return d
    },
    applyStyle: function(c, d) {
        var e = btg.Object.isDefined;
        if (!e(d) || !e(c)) return;
        e = btg.Object.toString(d, ";", ":");
        if (btg.globalvars.is_IE) {
            if (!btg.String.isDefined(c.id)) c.id = "coda_iframe_" + (new Date).getTime();
            document.createStyleSheet().addRule("#" + c.id, e)
        } else c.setAttribute("style", e)
    },
    loadScript: function(c, d, e, f, g) {
        if (btg.String.isDefined(c)) try {
            var h = document.createElement("script");
            h.setAttribute("type", "text/javascript");
            h.setAttribute("src", c);
            if (typeof e === "function") h.onload = h.onreadystatechange =
                e;
            if (f) h.async = true;
            if (g && typeof g === "object")
                for (var i in g)
                    if (g.hasOwnProperty(i)) h.setAttribute(i, g[i]);
            if (d) document.body.appendChild(h);
            else document.getElementsByTagName("head")[0].appendChild(h)
        } catch (n) {}
    },
    loadScriptOnHead: function(c) {
        if (btg.String.isDefined(c)) try {
            var d = document.createElement("script");
            d.setAttribute("type", "text/javascript");
            d.setAttribute("src", c);
            document.getElementsByTagName("head")[0].appendChild(d)
        } catch (e) {}
    },
    getStyle: function(c, d) {
        var e = null,
            f = btg.Object.isDefined;
        try {
            if (f(c) && btg.String.isDefined(d))
                if (f(document.defaultView) && typeof document.defaultView.getComputedStyle == "function") e = document.defaultView.getComputedStyle(c, null)[d];
                else if (typeof window.getComputedStyle == "function") e = window.getComputedStyle(c, null)[d];
            else if (f(c.currentStyle)) e = c.currentStyle[d];
            else e = c.style[d]
        } catch (g) {
            return e
        }
        return e
    },
    getContentVisibleHeight: function() {
        return parseInt(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0)
    },
    getContentVisibleWidth: function() {
        return parseInt(window.innerWidth ||
            document.documentElement.clientWidth || document.body.clientWidth || 0)
    },
    getOffsetTop: function(c) {
        var d = 0,
            e = btg.Object.isDefined;
        try {
            if (e(c) && btg.Object.isFunction(c.getBoundingClientRect)) {
                var f = c.getBoundingClientRect();
                if (e(f) && !isNaN(f.top)) d = parseInt(f.top)
            }
        } catch (g) {
            btg.Error.log("CODA: btg.DOM.getOffsetTop Error: " + g);
            return d
        }
        return d
    },
    isElementVisible: function(c) {
        var d = true,
            c = c.getBoundingClientRect(),
            e = btg.DOM.getContentVisibleHeight(),
            f = btg.DOM.getContentVisibleWidth();
        if (e > 0 && f > 0) try {
            d = c.bottom >=
                0 && c.top <= e - 1 && c.right >= 0 && c.left <= f - 1
        } catch (g) {
            btg.Error.log("CODA: btg.DOM.isElementVisible Error: " + g);
            return d
        }
        return d
    }
};
btg.Cookie = {
    read: function(c) {
        for (var c = c + "=", d = document.cookie.split(";"), e = 0, f = d.length; e < f; e++) {
            for (var g = d[e]; g.charAt(0) == " ";) g = g.substring(1, g.length);
            if (g.indexOf(c) == 0) return unescape(g.substring(c.length, g.length))
        }
        return null
    },
    set: function(c, d, e, f, g) {
        c = c + "=" + escape(d) + "; path=/";
        if (e) c += ";expires=" + e;
        if (!g) g = btg.Cookie.getCookieAutoDomain();
        if (g != "localhost") c += ";domain=" + g;
        c += ";path=" + (f ? f : "/");
        document.cookie = c
    },
    remove: function(c, d, e, f) {
        c = c + "=";
        if (!e) e = btg.Cookie.getCookieAutoDomain();
        if (e != "localhost" && !f) c += ";domain=" + e;
        c += ";path=" + (d ? d : "/");
        c += ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
        document.cookie = c
    },
    getCookieAutoDomain: function() {
        var c = document.domain.split("."),
            d = c.length,
            e = d > 2 ? c[d - 2] + "." + c[d - 1] : document.domain;
        if (d >= 3 && btg.globalvars.TWOPART_TLDS.match(e) != null) e = c[d - 3] + "." + c[d - 2] + "." + c[d - 1];
        return e
    }
};
btg.Object = {
    isDefined: function(c) {
        if (typeof c == "object" && c !== null) return true;
        else return false
    },
    isArray: function(c) {
        return btg.Object.isDefined(c) && btg.Number.isInt(c.length)
    },
    toString: function(c, d, e, f) {
        if (!d) d = ",";
        if (!e) e = "=";
        var g = [],
            h;
        for (h in c) {
            if (!c.hasOwnProperty(h) || f && !btg.String.isDefined(c[h])) continue;
            g.push(h + e + c[h])
        }
        return g.join(d)
    },
    copyProperties: function(c, d, e) {
        if (btg.Object.isDefined(c) && btg.Object.isDefined(d))
            for (var f in c)
                if (typeof d[f] != "undefined") {
                    if (e) d[f] = c[f]
                } else d[f] =
                    c[f]
    },
    isConfigDefined: function(c) {
        if (typeof c == "object" && c !== null && c.enabled == true) return true;
        else return false
    },
    isFunction: function(c) {
        return typeof c === "function"
    },
    isEmptyObject: function(c) {
        var d = true;
        if (typeof c === "object" && c) {
            for (var e in c)
                if (c.hasOwnProperty(e)) {
                    d = false;
                    break
                }
            return d
        }
    }
};
btg.String = {
    isDefined: function(c) {
        if (typeof c !== "string" || typeof c === "undefined" || c === null || c == "") return false;
        else return true
    },
    random: function(c) {
        for (var d = "", c = c ? c : 8, e = 0; e < c; e++) {
            var f = Math.floor(Math.random() * "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".length);
            d += "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".substring(f, f + 1)
        }
        return d
    },
    createUUID: function() {
        for (var c = [], d = 0; d < 36; d++) c[d] = btg.Math.random(0, 15).toString(16);
        c[14] = 4;
        c[19] = ["8", "9", "a", "b"][btg.Math.random(0, 3)];
        c[8] = c[13] = c[18] = c[23] = "-";
        return c = c.join("")
    },
    toObject: function(c, d, e) {
        for (var e = e ? e : "=", c = c.split(d ? d : ","), d = {}, f = 0, g = c.length; f < g; f++) {
            var h = c[f].split(e);
            d[h[0]] = h[1]
        }
        return d
    },
    queryStringToObject: function(c) {
        c = c.indexOf("?") > -1 ? c.split("?")[1] : c;
        return btg.String.toObject(c, "&")
    },
    stripFileExtension: function(c) {
        var d = c.lastIndexOf(".");
        if (d > 0) return c.substring(0, d);
        else return c
    },
    charLtrim: function(c, d) {
        if (c.indexOf(d) == 0) c = c.substring(1);
        return c
    },
    charRtrim: function(c, d) {
        var e = c.lastIndexOf(d),
            f = c.length;
        if (e == f - 1) c = c.substring(0, f - 1);
        return c
    },
    charTrim: function(c, d) {
        c = btg.String.charLtrim(c, d);
        return c = btg.String.charRtrim(c, d)
    },
    isMockupMode: function() {
        var c = false,
            d = this.queryStringToObject((btg.globalvars.IS_TOP_ACCESSIBLE ? top : self).location.search);
        if (d.mockupMode && d.mockupMode == "true") c = true;
        return c
    },
    mockItUp: function(c) {
        c = c.replace(/[<]/g, "&lt;");
        return c = c.replace(/[>]/g, "&gt;")
    },
    getFileName: function(c) {
        c = btg.String.isDefined(c) ? c : "";
        return c = c.substring(c.lastIndexOf("/") + 1)
    },
    getBetween: function(c,
        d, e) {
        var f = "";
        if (btg.String.isDefined(c)) {
            if (btg.String.isDefined(d)) {
                var g = c.indexOf(d);
                if (g >= 0) f = c.substring(g + d.length)
            }
            if (btg.String.isDefined(e)) {
                c = f.indexOf(e);
                if (c >= 0) f = f.substring(0, c)
            }
        }
        return f
    },
    encode: function(c, d) {
        if (btg.String.isDefined(c)) c = d ? escape(c) : encodeURIComponent(c);
        return c
    },
    decode: function(c, d) {
        if (btg.String.isDefined(c)) try {
            c = d ? unescape(c) : decodeURIComponent(c)
        } catch (e) {
            c = unescape(c)
        }
        return c
    },
    append: function(c, d, e) {
        if (!e) e = ",";
        d = d.split(e);
        d.push(c);
        return d.join(e)
    }
};
btg.Number = {
    isInt: function(c, d) {
        if (!d) d = 10;
        return parseInt(c, d) == c
    }
};
btg.Error = {
    log: function(c) {
        try {
            if (typeof console === "object" && console.log && btg.String.isDefined(c)) console.log(c)
        } catch (d) {}
    }
};
(function(c) {
    var d;
    try {
        d = typeof top.location.search != "undefined" && typeof top.location.search != "unknown"
    } catch (e) {
        d = false
    }
    var f = function() {
        try {
            var c = "",
                c = self.location.pathname;
            if (c == "") c = "/";
            return c
        } catch (d) {}
    }();
    var g;
    try {
        g = location.href.toLowerCase().indexOf("/api/jsunittest/tests/") != -1
    } catch (h) {
        g = false
    }
    c.globalvars = {
        VISITOR_NAMESPACE: "mtvn",
        IS_CODA_ADS_USED: false,
        MODULES_URL: "//btg.mtvnservices.com/aria/mods.html",
        INFINITE_COOKIE_EXPY: "Thu, 31-Dec-2038 11:59:59 GMT",
        FW_BLOCKED: false,
        IS_TOP_ACCESSIBLE: d,
        PAGE_URL: f,
        IS_UNIT_TEST: g,
        FORCE_AD_WAIT_TIME: {
            PLAYER_LOADED: 1E4,
            PLAYER_FAILED: 1E4,
            PLAYER_LOAD_WAIT_TIME: 1E4
        },
        VALID_DCOPT: ["ist"],
        is_Chrome: false,
        is_Firefox: false,
        is_IE: false,
        is_Safari: false,
        is_iOS: false,
        NETWORKIDS: {
            DCLK_DOMESTIC_NID: "N1303",
            DCLK_DOMESTIC_NID_TEST: "N400129",
            DCLK_INTL_EMEA_NID: "N4570",
            DCLK_INTL_APAC_NID: "N4687",
            DCLK_INTL_EMEA_NID_TEST: "N308350",
            DCLK_INTL_APAC_NID_TEST: "N378645",
            DCLK_INTL_NID_MOBILE: "N7869",
            DCLK_INTL_NID_MOBILE_TEST: "N7869"
        },
        REGION_EMEA: "EMEA",
        REGION_APAC: "APAC",
        TWOPART_TLDS: "com.br,co.uk,co.hu,co.il,com.tr,com.pl,com.ru,co.kr,com.au,co.nz,com.tw"
    }
})(btg);
(function(c) {
    c.loadLocalConfig = function() {
        if (typeof c.config != "undefined" && typeof c.config != "undefined") c.Object.copyProperties(c.config, this.config, true);
        if (typeof MTVN != "undefined" && typeof MTVN.config != "undefined" && typeof MTVN.config.btg != "undefined")
            for (b in MTVN.config.btg) {
                if (!MTVN.config.btg.hasOwnProperty(b)) continue;
                if (typeof MTVN.config.btg[b] === "object") c.Object.copyProperties(MTVN.config.btg[b], this.config[b], true);
                else this.config[b] = MTVN.config.btg[b]
            }
        if (typeof mtvn != "undefined" && typeof mtvn.btg !=
            "undefined" && typeof mtvn.btg.config != "undefined") {
            if (typeof mtvn.btg.config.ReportSettings != "undefined")
                for (r in mtvn.btg.config.ReportSettings) {
                    if (!mtvn.btg.config.ReportSettings.hasOwnProperty(r)) continue;
                    if (typeof mtvn.btg.config.ReportSettings[r] === "object") c.Object.copyProperties(mtvn.btg.config.ReportSettings[r], this.config[r], true);
                    else this.config[r] = mtvn.btg.config.ReportSettings[r]
                }
            if (typeof mtvn.btg.config.AdSettings != "undefined") {
                for (a in mtvn.btg.config.AdSettings) {
                    if (!mtvn.btg.config.AdSettings.hasOwnProperty(a)) continue;
                    if (typeof mtvn.btg.config.AdSettings[a] === "object") c.Object.copyProperties(mtvn.btg.config.AdSettings[a], this.config[a], true);
                    else this.config[a] = mtvn.btg.config.AdSettings[a]
                }
                if (typeof mtvn.btg.config.AdSettings.reloadableAds == "boolean") this.config.DoubleClick.reloadableAds = mtvn.btg.config.AdSettings.reloadableAds;
                if (typeof mtvn.btg.config.AdSettings.reloadInterval == "number") this.config.DoubleClick.reloadInterval = mtvn.btg.config.AdSettings.reloadInterval
            }
        }
        if (typeof com != "undefined" && typeof com.mtvi !=
            "undefined" && typeof com.mtvi.reporting != "undefined" && typeof com.mtvi.reporting.Account != "undefined") {
            if (typeof this.config.Omniture == "undefined") this.config.Omniture = {
                enabled: true
            };
            this.config.Omniture.account = com.mtvi.reporting.Account.name;
            this.config.Omniture.dynamicAccountSelection = com.mtvi.reporting.Account.dynamic;
            this.config.Omniture.dynamicAccountList = com.mtvi.reporting.Account.list;
            this.config.Omniture.indexFileName = com.mtvi.reporting.Account.defaultIndexFileName;
            this.config.Omniture.linkInternalFilters =
                com.mtvi.reporting.Account.filters;
            if (typeof com.mtvi.reporting.Account.dartSite != "undefined") {
                this.config.DoubleClick.enabled = true;
                this.config.DoubleClick.dartSite = com.mtvi.reporting.Account.dartSite
            }
        }
    }
})(btg);
btg.Environment = new function() {
    var c = btg.String.isDefined;
    this.userAgent = function(d) {
        var e = window.navigator.userAgent.replace(/\;|\(|\)|\,/gi, ""),
            f = {
                browser: "",
                device: "Desktop",
                os: ""
            };
        if (/Chrome/.test(e)) {
            f.browser = "Chrome";
            d.globalvars.is_Chrome = true
        } else if (/Firefox/.test(e)) {
            f.browser = "Firefox";
            d.globalvars.is_Firefox = true
        } else if (/MSIE/.test(e)) {
            f.browser = "MSIE";
            d.globalvars.is_IE = true
        } else if (/Safari/.test(e)) {
            f.browser = "Safari";
            d.globalvars.is_Safari = true
        } else if (/Opera/.test(e)) f.browser = "Opera";
        if (/Windows/.test(e)) f.os = "Windows";
        else if (/Macintosh/.test(e)) f.os = "Macintosh";
        else if (/Linux/.test(e)) f.os = "Linux";
        else if (/Unix/.test(e)) f.os = "Unix";
        if (/iPad/.test(e)) {
            f.device = "iPad";
            d.globalvars.is_iOS = true
        } else if (/iPod/.test(e)) {
            f.device = "iPod";
            d.globalvars.is_iOS = true
        } else if (/iPhone/.test(e) && !/iPod/.test(e)) {
            f.device = "iPhone";
            d.globalvars.is_iOS = true
        }
        e = d.Cookie.read("btg_device");
        f.isMobile = false;
        f.isTablet = false;
        if (c(e)) {
            device = d.String.toObject(e, ",", ":");
            if (c(device.m) && device.m == "1" ||
                /^m\./.test(location.hostname)) f.isMobile = true;
            else if (c(device.t) && device.t == "1") f.isTablet = true
        }
        return f
    }(btg);
    this.getPlatform = function() {
        return this.userAgent.device
    };
    this.getCnamedDomain = function() {
        var c = location.hostname,
            e = "",
            e = new RegExp(/[A-z0-9\-]*\.\bco\...\b|[A-z0-9\-]*\.uol\.\bcom\...\b|[A-z0-9\-]*\.\bcom\...\b|[A-z0-9\-]*\.\bcom\b|[A-z0-9\-]*\.\borg\b|[A-z0-9\-]*\...$/);
        if (c.match(e)) {
            m = e.exec(c);
            e = "sc." + c.substr(m.index)
        } else e = "sc." + c;
        return e
    };
    this.getRootDomain = function() {
        var c = location.hostname,
            e = new RegExp(/[A-z0-9\-]*\.\bco\...\b|[A-z0-9\-]*\.uol\.\bcom\...\b|[A-z0-9\-]*\.\bcom\...\b|[A-z0-9\-]*\.\bcom\b|[A-z0-9\-]*\.\borg\b|[A-z0-9\-]*\...$/);
        if (e.test(c)) {
            m = e.exec(c);
            return c.substr(m.index)
        } else return c
    };
    this.isMobile = function() {
        var c = false;
        if (btg.Cookie.read("ak-mobile-detected") === "yes") c = true;
        return c
    };
    this.getDeviceType = function() {
        var c = btg.Cookie.read("ak-device-type");
        if (c) return c;
        else return false
    }
};
btg.Controller = new function() {
    var c = btg.globalvars,
        d = false,
        e = false,
        f = false,
        g = "";
    this.hasReporting = function() {
        return btg.config.hasReporting && typeof btg.ReportingManager != "undefined"
    };
    this.hasAds = function() {
        if (btg.config.hasAds || btg.config.hasAdsDFP) return typeof btg.AdManager != "undefined";
        else return false
    };
    this.hasTnT = function() {
        return btg.Object.isDefined(btg.TestAndTarget) && btg.config.TestAndTarget.enabled
    };
    this.init = function() {
        btg.loadLocalConfig();
        if (btg.config.requireCOPPACompliance == true) {
            btg.config.Demdex.enabled =
                false;
            btg.config.Criteo.enabled = false;
            btg.config.QuantCast.enabled = false;
            btg.config.Meteor.enabled = false;
            btg.config.Omniture.enableMeteorPlugin = false;
            btg.config.Omniture.enableGuidPlugin = false;
            btg.config.Omniture.enableGuidAuxiliaryCall = false
        }
        if (btg.config.Omniture.enableGuidPlugin == false) {
            btg.Cookie.remove("vmn_uuid", "/", "", true);
            btg.Cookie.remove("mtvn_guid", "/", "", true)
        }
        d = this.hasReporting();
        e = this.hasAds();
        hasTnT = this.hasTnT();
        if (btg.Object.isConfigDefined(btg.config.Freewheel) && btg.config.Freewheel.adBlockerDetection) new btg.Ajax({
            xDomain: true,
            autoSend: true,
            onerror: function() {
                btg.globalvars.FW_BLOCKED = true
            },
            onload: function() {
                btg.globalvars.FW_BLOCKED = false
            },
            url: location.protocol + "//adm.fwmrm.net/crossdomain.xml"
        });
        c.IS_LIVE_ENV = function() {
            var d = true;
            try {
                if (btg.String.isDefined(btg.config.Omniture.dynamicAccountList)) {
                    var e = btg.config.Omniture.dynamicAccountList,
                        f = e.indexOf("=");
                    if (f > -1) {
                        var e = e.substring(f + 1),
                            e = e.split(","),
                            g = self.location.hostname;
                        if (c.IS_TOP_ACCESSIBLE) g = top.location.hostname;
                        for (var f = 0, l = e.length; f < l; f++)
                            if (g.indexOf(e[f]) >
                                -1) {
                                d = false;
                                break
                            }
                    }
                }
            } catch (k) {}
            return d
        }();
        g = typeof c.PAGE_URL == "string" && c.PAGE_URL != "" ? c.PAGE_URL : location.pathname;
        if (g.charAt(g.length - 1) == "/") g += typeof btg.config.indexFileName == "string" ? btg.config.indexFileName : "index";
        btg.config._defaultPageName = g;
        if (d) btg.ReportingManager.init();
        if (e) btg.AdManager.init();
        if (hasTnT) btg.TestAndTarget.init();
        this.init = function() {
            btg.loadLocalConfig();
            return this
        };
        return this
    };
    this.gameInit = function() {
        if (btg.config) btg.ReportingManager.init();
        if (btg.config) btg.AdManager.init();
        if (!f && com.mtvnet.games.GameSettings) {
            btg.GameReportingManager.init();
            btg.GameAdManager.init();
            f = true
        }
        return true
    };
    this.loadGame = function(c) {
        if (f) {
            btg.GameAdManager.loadGame(c);
            btg.GameReportingManager.gameLoad(c)
        }
    };
    this.sendPageCall = function(c) {
        this.init();
        if (d) {
            if (typeof c === "undefined" || !c) c = {};
            if (typeof c.contextData === "object") {
                this.setContextData(c.contextData);
                delete c.contextData
            }
            btg.ReportingManager.sendPageCall(c);
            btg.ReportingManager.getData()
        }
    };
    this.sendLinkEvent = function(c) {
        this.init();
        if (d) {
            if (typeof c === "undefined" || !c) c = {};
            if (typeof c.contextData === "object") {
                this.setContextData(c.contextData);
                delete c.contextData
            }
            btg.ReportingManager.sendLinkEvent(c)
        }
    };
    this.placeAd = function(c) {
        this.init();
        if (e) return btg.AdManager.placeAd(c)
    };
    this.reloadAds = function() {
        if (e) {
            btg.AdManager.reloadAll();
            return this
        }
    };
    this.placeIFrameAd = function(c, d) {
        this.init();
        btg.AdManager.placeIFrameAd(c, d)
    };
    this.getAdUrl = function(c) {
        this.init();
        if (e) return btg.AdManager.getAdUrl(c)
    };
    this.getVersion = function() {
        return btg.config.version
    };
    this.getFullVersion = function() {
        return btg.config.fullVersion ? btg.config.fullVersion : btg.config.version
    };
    this.createMboxes = function() {};
    this.setChoiceStreamRequest = function(c, e) {
        if (d) btg.ReportingManager.setChoiceStreamRequest(c, e)
    };
    this.setContextData = function(c, d) {
        var e, f;
        this.init();
        f = btg.ReportingManager.getOmniture();
        if (f != null) {
            if (typeof f.hcode.contextData === "undefined" || d) f.hcode.contextData = {};
            if (c == null) return true;
            e = this.fixContextDataNamespace(c);
            for (var g in e)
                if (e.hasOwnProperty(g)) f.hcode.contextData[g] =
                    e[g];
            return true
        } else return false
    };
    this.clearContextData = function() {
        this.setContextData(null, true)
    };
    this.fixContextDataNamespace = function(c) {
        var d = {},
            e, f;
        for (e in c)
            if (c.hasOwnProperty(e))
                if (e.indexOf(".") < 0) {
                    f = "v." + e;
                    d[f] = c[e]
                } else d[e] = c[e];
        return d
    }
};
btg.Beacon = function(c) {
    this.url = c;
    this.data = null
};
btg.Beacon.prototype = {
    setData: function(c) {
        this.data = btg.Object.toString(c, "&")
    },
    formatSrc: function() {
        if (this.data)
            if (this.url.indexOf("?") > -1) this.url += "&" + this.data;
            else this.url += "?" + this.data;
        return this.url
    },
    send: function() {
        var c = new Image(1, 1);
        c.src = this.formatSrc();
        c.onload = function() {};
        c.onabort = function() {};
        c.onerror = function() {}
    }
};
btg.Alert = function() {};
btg.Events = new function() {
    var c = function() {
        this.callbacks = [];
        this.subscribe = function(c) {
            if (typeof c == "function") this.callbacks[this.callbacks.length] = c
        };
        this.remove = function(c) {
            for (var e = 0, f = this.callbacks.length; e < f; e++)
                if (this.callbacks[e] == c) delete this.callbacks[e]
        };
        this.fire = function() {
            for (var c = 0, e = this.callbacks.length; c < e; c++) try {
                if (typeof this.callbacks[c] == "function") this.callbacks[c].apply(this, arguments)
            } catch (f) {
                new btg.Alert('An event callback has failed. "' + f.number + ": " + f.message +
                    '".')
            }
        }
    };
    this.add = function(d) {
        this[d] = new c;
        return this
    };
    this.CORE_LOADED = new c;
    this.flipBookView = new c;
    this.adLoaded = new c;
    this.AD_LOAD = new c;
    this.Player_Freewheel_failsafe = new c;
    this.ABTest_Group_Assigned = new c;
    this.ON_GAME_CONFIG_LOADED = new c;
    this.ON_GAME_LOAD = new c;
    this.ON_GAME_PLAY = new c;
    this.ON_GAME_LEVELSTART = new c;
    this.DEMDEX_RESPONSE = new c;
    this.AD_EXPANDED = new c;
    this.AD_SHRUNK = new c;
    this.GPT_SLOT_RENDER_ENDED = new c;
    this.NATIVE_AD_JSON_RESPONSE = new c
};
btg.JSON = function() {
    function c(c) {
        return c < 10 ? "0" + c : c
    }

    function d(c, g) {
        var h, i, n, j;
        h = /["\\\x00-\x1f\x7f-\x9f]/g;
        var l;
        switch (typeof c) {
            case "string":
                return h.test(c) ? '"' + c.replace(h, function(c) {
                    var d = e[c];
                    if (d) return d;
                    d = c.charCodeAt();
                    return "\\u00" + Math.floor(d / 16).toString(16) + (d % 16).toString(16)
                }) + '"' : '"' + c + '"';
            case "number":
                return isFinite(c) ? String(c) : "null";
            case "boolean":
            case "null":
                return String(c);
            case "object":
                if (!c) return "null";
                if (typeof c.toJSON === "function") return d(c.toJSON());
                h = [];
                if (typeof c.length ===
                    "number" && !c.propertyIsEnumerable("length")) {
                    j = c.length;
                    for (i = 0; i < j; i += 1) h.push(d(c[i], g) || "null");
                    return "[" + h.join(",") + "]"
                }
                if (g) {
                    j = g.length;
                    for (i = 0; i < j; i += 1) {
                        n = g[i];
                        if (typeof n === "string")
                            if (l = d(c[n], g)) h.push(d(n) + ":" + l)
                    }
                } else
                    for (n in c)
                        if (typeof n === "string")
                            if (l = d(c[n], g)) h.push(d(n) + ":" + l); return "{" + h.join(",") + "}"
        }
    }
    Date.prototype.toJSON = function() {
        return this.getUTCFullYear() + "-" + c(this.getUTCMonth() + 1) + "-" + c(this.getUTCDate()) + "T" + c(this.getUTCHours()) + ":" + c(this.getUTCMinutes()) + ":" + c(this.getUTCSeconds()) +
            "Z"
    };
    var e = {
        "\u0008": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\u000c": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    };
    return {
        stringify: d,
        parse: function(c, d) {
            function e(c, f) {
                var i, k;
                if (f && typeof f === "object")
                    for (i in f)
                        if (Object.prototype.hasOwnProperty.apply(f, [i])) {
                            k = e(i, f[i]);
                            if (k !== undefined) f[i] = k
                        }
                return d(c, f)
            }
            var i;
            if (/^[\],:{}\s]*$/.test(c.replace(/\\./g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(:?[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                i = eval("(" + c + ")");
                return typeof d ===
                    "function" ? e("", i) : i
            }
            throw new SyntaxError("parseJSON");
        }
    }
}();
btg.Math = {
    random: function() {
        var c, d;
        if (arguments.length > 1) {
            c = arguments[0];
            d = arguments[1]
        } else {
            c = 0;
            d = arguments[0]
        }
        return Math.floor(Math.random() * (d - c + 1) + c)
    }
};
btg.Sections = {
    getAdSections: function() {
        var c = btg.config,
            d = self.location.pathname;
        if (d == "") d = "/";
        if (d.lastIndexOf("/") == d.length - 1) d += btg.Object.isDefined(c) && btg.String.isDefined(c.defaultIndexFileName) ? c.defaultIndexFileName : "index";
        if (d != "/" && d.indexOf("/") == 0) d = d.substring(1);
        return d
    },
    getReportingSections: function() {
        return self.location.pathname
    }
};
btg.Window = {
    getNodeLinkName: function(c) {
        for (var d = null, e = 0, f = c.childNodes.length; e < f; e++) {
            var g = c.childNodes[e];
            switch (g.nodeType) {
                case 3:
                    d = g.nodeValue;
                    break;
                case 1:
                    if (c.attributes.title && c.attributes.title.nodeValue != "") d = c.attributes.title.nodeValue;
                    else if (c.attributes.alt && c.attributes.alt.nodeValue != "") d = c.attributes.alt.nodeValue
            }
        }
        return d
    },
    debug: function(c) {
        var d = document.getElementById("debug");
        if (!d) {
            d = document.createElement("div");
            d.setAttribute("id", "debug");
            document.getElementsByTagName("body")[0].appendChild(d)
        }
        d.innerHTML =
            d.innerHTML + c + "<br>"
    }
};
btg.Class = {
    inheritFrom: function(c, d) {
        function e() {
            if (arguments.length > 0 && typeof c === "function") c.apply(this, arguments)
        }
        if (typeof c === "function" || typeof c === "object")
            if (typeof d === "function" || typeof d === "object") {
                var f = d.prototype;
                d.prototype = typeof c === "function" ? new c : c;
                for (var g in f) d.prototype[g] = f[g];
                d.prototype.constructor = d;
                e.prototype = typeof d === "function" ? new d : d;
                e.prototype.constructor = e
            } else {
                e.prototype = typeof c === "function" ? new c : c;
                e.prototype.constructor = e
            } else btg.Error.log("Coda ERROR: btg.Class.inheritFrom(a_superClass,a_subClass) requires at least a_superClass argument!");
        return e
    }
};
btg.Timer = function(c, d) {
    this.id = c;
    this.isRunning = false;
    this.currentCount = 0;
    this.milliseconds = d ? d : 100;
    this.intervalId = null;
    this.listeners = []
};
btg.Timer.prototype = {
    on: function(c, d) {
        if (typeof d == "function") this.listeners[c] = d
    },
    execListener: function(c) {
        if (typeof this.listeners[c] == "function") this.listeners[c]()
    },
    start: function() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.intervalId = setInterval(this.id + ".count()", this.milliseconds)
        }
    },
    count: function() {
        this.currentCount = this.currentCount + this.milliseconds;
        this.execListener("count")
    },
    stop: function() {
        clearInterval(this.intervalId);
        this.isRunning = false
    },
    reset: function() {
        this.stop();
        this.currentCount =
            0;
        this.start()
    }
};
btg.TimeTracker = function(c) {
    var d = btg.String.isDefined,
        e = btg.Cookie,
        f = "",
        g = null,
        h = d(c) ? c : "";
    this.init = function() {
        g = (new Date).getTime();
        btg.DOM.Events.addListener(window, "unload", this.saveTimeSpent);
        return true
    };
    this.setData = function(c) {
        if (d(c)) f = c
    };
    this.getTimeSpentOnPage = function() {
        var c = "",
            c = (new Date).getTime(),
            c = Math.round((c - g) / 100);
        if (c < 1) c = "";
        g = (new Date).getTime();
        return c
    };
    this.saveTimeSpent = function() {
        if (d(h)) {
            var c = (new Date).getTime(),
                c = Math.round((c - g) / 100);
            if (c < 1) c = 1;
            c = c;
            c += d(f) ? "," +
                f : "";
            e.set(h, c)
        }
    };
    this.getTimespent = function() {
        if (d(h)) {
            var c = e.read(h);
            e.remove(h);
            g = (new Date).getTime();
            return d(c) ? c : ""
        }
    }
};
btg.Ajax = function(c) {
    var d = btg.Object.isDefined(c) ? c : {};
    d.method = btg.String.isDefined(d.method) ? d.method : "GET";
    var e;
    if (d.xDomain === true) {
        var f, g = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
        this.sendRequest = function() {
            if (!btg.String.isDefined(d.url)) {
                btg.Error.log("Coda ERROR: Ajax request URL not specified!");
                return "[ERROR: Ajax request URL not specified!]"
            }
            f = document.createElement("script");
            f.async = true;
            if (btg.String.isDefined(d.scriptCharset)) f.charset = d.scriptCharset;
            f.src = d.url;
            f.onload = function() {
                if (typeof d.onload == "function") d.onload(d);
                if (f.parentNode) f.parentNode.removeChild(f);
                f = null
            };
            f.onerror = function() {
                if (typeof d.onerror == "function") d.onerror(d);
                if (f.parentNode) f.parentNode.removeChild(f);
                f = null
            };
            try {
                g.insertBefore(f, g.firstChild)
            } catch (c) {
                if (typeof d.onFail == "function") {
                    d.error = c;
                    d.fail = true;
                    d.onFail(d)
                }
                return false
            }
        }
    } else {
        if (window.XMLHttpRequest) e = new XMLHttpRequest;
        else e = new ActiveXObject("Microsoft.XMLHTTP");
        this.sendRequest = function() {
            if (!btg.String.isDefined(d.url)) {
                btg.Error.log("Coda ERROR: Ajax request URL not specified!");
                return "[ERROR: Ajax request URL not specified!]"
            }
            e.onreadystatechange = function() {
                if (e.readyState == 4) {
                    d.responseText = e.responseText;
                    d.responseXML = e.responseXML;
                    if (e.status == 404) {
                        if (typeof d.on404 == "function") d.on404(d)
                    } else if (typeof d.onSuccess == "function") {
                        d.success = true;
                        d.onSuccess(d)
                    }
                }
            };
            try {
                e.open(d.method, d.url, true);
                e.send();
                return true
            } catch (c) {
                if (typeof d.onFail == "function") {
                    d.error = c;
                    d.fail = true;
                    d.onFail(d)
                }
                return false
            }
        }
    }
    if (d.autoSend === true) this.sendRequest()
};
(function(c) {
    var d = ["demdexcall", "demdexfwsegment", "uuid", "usersegment", "ad", "trackingserver"],
        e = function(e) {
            var g = e.data,
                h, i;
            if (g) {
                if (typeof g != "object" || g == null) try {
                    g = btg.JSON.parse(g)
                } catch (n) {
                    return
                }
                h = g.type;
                i = g.value
            }
            if (h && d.join().indexOf(h) != -1) switch (h) {
                case d[0]:
                    e = {};
                    g = 0;
                    for (h = i.length; g < h; g++) {
                        var j = i[g].split("=");
                        if (j[0] == "events") e[j[0]] = j.slice(1).join("=");
                        else e[j[0]] = j[1]
                    }
                    if (btg.Object.isConfigDefined(btg.config.Demdex) && btg.Demdex) btg.Demdex.sendPageCall(e);
                    break;
                case d[1]:
                    if (btg.Object.isConfigDefined(btg.config.Demdex) &&
                        btg.Demdex) {
                        g = {
                            type: d[1],
                            value: btg.Demdex.getFWSegment()
                        };
                        if (g.value) e.source.postMessage(btg.JSON.stringify(g), "*")
                    }
                    break;
                case d[2]:
                    g = {
                        type: d[2],
                        value: btg.Cookie.read("vmn_uuid")
                    };
                    if (g.value) e.source.postMessage(btg.JSON.stringify(g), "*");
                    break;
                case d[3]:
                    g = {
                        type: d[3],
                        value: btg.Cookie.read("mtvn_btg_userSegments")
                    };
                    if (g.value) e.source.postMessage(btg.JSON.stringify(g), "*");
                case d[4]:
                    i = i;
                    if (btg.Object.isDefined(i) && btg.String.isDefined(i.fn)) {
                        var j = i.fn.split("."),
                            l = j.pop(),
                            k = c,
                            g = 0;
                        for (h = j.length; g <
                            h; g++) k = k[j[g]];
                        k[l].call(this, i.args)
                    }
                case d[5]:
                    if (btg.globalvars.is_iOS || btg.config.Omniture.enableFirstPartyCookie) {
                        g = {
                            type: d[5],
                            value: btg.Environment.getCnamedDomain()
                        };
                        e.source.postMessage(btg.JSON.stringify(g), "*")
                    }
            }
        };
    if (typeof c.addEventListener !== "undefined") c.addEventListener("message", e, false);
    else if (typeof c.attachEvent !== "undefined") c.attachEvent("onmessage", e)
})(window);
(function(c) {
    c.Singleton = function(d) {
        var e = function(c) {
                if (typeof c === "function") return new c;
                return c
            },
            f = e(d.__implement),
            g = e(d.__extend),
            d = e(d.__construct),
            h;
        for (h in g)
            if (g.hasOwnProperty(h))
                if (!d[h]) d[h] = g[h];
        for (h in f)
            if (f.hasOwnProperty(h))
                if (!d[h]) c.Error.log(sub.instance + " must implement '" + h + "' " + typeof f[h]);
        if (typeof d.init === "function") d.init();
        return d
    }
})(btg);
btg.DependencyManager = function(c) {
    var d = btg.config,
        e = c ? c : 8E3,
        f = false,
        g = [],
        h = [];
    this.add = function(c, d, g, l) {
        if (typeof c == "undefined" || typeof d == "undefined") return false;
        for (var k = 0, o = h.length; k < o; k++)
            if (h[k].flagname == c) return false;
        h[h.length] = {
            flagname: c,
            callback: d,
            interval: g ? g : 100
        };
        if (!f) {
            f = true;
            window.setTimeout(this.sendCalls, e)
        }
        if (l) this.checkDependency(c);
        return true
    };
    this.remove = function(c) {
        if (typeof c == "string" && c != "")
            for (var d = 0, e = h.length; d < e; d++)
                if (h[d].flagname == c) {
                    h.splice(d, 1);
                    break
                }
        if (!this.hasDependency()) this.sendCalls()
    };
    this.checkDependency = function(c) {
        for (var d = null, e = 0, f = h.length; e < f; e++)
            if (h[e].flagname == c) d = h[e];
        if (!d) return false;
        if (d.callback.apply()) this.remove(c);
        else {
            var g = this;
            window.setTimeout(function() {
                g.checkDependency(c)
            }, d.interval)
        }
    };
    this.hasDependency = function(c) {
        if (btg.String.isDefined(c)) {
            for (var d = h.length, e = 0; e < d; e++)
                if (h[e].flagname == c) return true;
            return false
        }
        return h.length >= 1
    };
    this.addToCallQueue = function(c, e) {
        if (!e) return false;
        for (var f = new Array, h = 2, k = arguments.length; h < k; h++) f.push(arguments[h]);
        g[g.length] = {
            context: c ? c : this,
            callback: e,
            args: f,
            config: d
        };
        return true
    };
    this.sendCalls = function() {
        h = [];
        for (var c = d, e = 0, f = g.length; e < f; e++) {
            d = g[e].config;
            g[e].callback.apply(g[e].context, g[e].args)
        }
        d = c;
        g = []
    }
};
btg.PluginManager = function(c) {
    for (var d = new Array, e = 1, f = arguments.length; e < f; e++) d.push(arguments[e]);
    e = 0;
    for (f = c.length; e < f; e++)
        if (btg.Object.isDefined(c[e]) && typeof c[e].init == "function") c[e].init.apply(this, d);
    this.run = function(d) {
        for (var e = 0, f = c.length; e < f; e++)
            if (btg.Object.isDefined(c[e]) && typeof c[e].run == "function") d = c[e].run(d);
        return d
    }
};
btg.QueueManager = function(c) {
    this.id = c.id;
    this.timeToWait = !isNaN(c.timeToWait) ? c.timeToWait : 1;
    this.handler = typeof c.handler == "function" ? c.handler : function() {};
    this.notificationHandler = typeof c.notificationHandler == "function" ? c.notificationHandler : function() {};
    this.intervalId = null;
    this.isProcessing = false;
    this.queue = [];
    this.processedQueue = [];
    this.maxNumItems = c.maxNumItems;
    this.maxElapsed = c.maxElapsed;
    this.itemsAdded = this.totalItems = this.elapsed = 0
};
btg.QueueManager.prototype = {
    init: function() {
        this.isProcessing = true;
        this.processQueue();
        this.intervalId = setInterval(this.id + ".processQueue()", this.timeToWait)
    },
    addToQueue: function() {
        this.queue.push(arguments);
        this.itemsAdded++;
        if (!this.isProcessing) this.init()
    },
    processQueue: function() {
        if (this.isProcessing == true)
            if (this.queue.length > 0) {
                var c = this.queue.shift();
                this.elapsed = this.elapsed + this.timeToWait;
                this.totalItems++;
                if (!this.hasLimit()) {
                    this.handler(c);
                    this.processedQueue.push(c)
                } else {
                    this.notificationHandler(this);
                    this.clearQueue();
                    this.stop()
                }
            } else this.stop()
    },
    stop: function() {
        clearInterval(this.intervalId);
        this.isProcessing = false;
        this.itemsAdded = this.totalItems = this.elapsed = 0
    },
    hasLimit: function() {
        return this.elapsed == this.maxElapsed || this.totalItems > this.maxNumItems
    },
    clearQueue: function() {
        this.queue = [];
        this.processedQueue = []
    }
};
btg.GUID = new function() {
    var c = null,
        d = null,
        e = function() {
            var c = btg.Cookie.read("vmn_uuid");
            if (typeof c == "string") d = c;
            return typeof d == "string" && d != ""
        },
        f = function() {
            var c = btg.Cookie.read("vmn_3pc");
            return typeof c == "string" && c != ""
        },
        g = function() {
            return typeof btg.config.Omniture.enableGuidPlugin == "boolean" && btg.config.Omniture.enableGuidPlugin
        };
    this.isGUIDReported = false;
    this.hasGUIDCookie = function() {
        return e()
    };
    this.get3pcCookie = function() {
        var c = btg.Cookie.read("vmn_3pc");
        return !btg.String.isDefined(c) ?
            null : c
    };
    this.init = function(d) {
        if (!g()) return false;
        c = d;
        if (typeof c.guidIdVarMap == "undefined") c.guidIdVarMap = ["eVar57"];
        if (typeof c.guidIdVarMap == "string") c.guidIdVarMap = c.guidIdVarMap.split(",");
        return true
    };
    this.run = function(f) {
        if (!g()) return f;
        if (!e()) {
            new btg.Alert("Failed to find the UUID value.");
            return f
        }
        for (var h = 0, i = c.guidIdVarMap.length; h < i; h++) f[c.guidIdVarMap[h]] = d;
        this.isGUIDReported = true;
        return f
    };
    this.guidScript = function() {
        var c = btg.GUID;
        btg.Controller.init();
        if (c.hasGUIDCookie() && !c.isGUIDReported) {
            c.sendLinkEventCall();
            return c.isGUIDReported = true
        }
        return false
    };
    this.sendLinkEventCall = function() {
        var c = {
            linkName: "GUID reporting",
            linkType: "o"
        };
        if (g()) btg.Controller.sendLinkEvent(c)
    };
    if (g() && !btg.config.requireCOPPACompliance) try {
        var h = location.protocol + "//btg.mtvnservices.com/aria/uuid.html?c=" + btg.Math.random(9999999999);
        if (!e() || !f()) btg.DOM.loadScript(h)
    } catch (i) {} else {
        btg.Cookie.remove("vmn_uuid", "/", "", true);
        btg.Cookie.remove("mtvn_guid", "/", "", true);
        return false
    }
};
try {
    btg.DOM.Events.addListener(window, "load", function() {
        var c = btg.config,
            d = btg.Object.isConfigDefined;
        if (d(c.Omniture))
            if (c.Omniture.enableGuidPlugin && c.Omniture.enableGuidAuxiliaryCall && !btg.GUID.isGUIDReported) {
                c = new btg.DependencyManager;
                c.add("vmn_uuid", btg.GUID.guidScript);
                c.checkDependency("vmn_uuid")
            }
    })
} catch (e$$24) {};
if (btg && btg.config) btg.config.fullVersion = '3.19.32';




//Attempting to include CODA/builds/3/Demdex.js
var demdex_seg = "",
    demdex_seg = "";
(function(o, k) {
    btg.Demdex = new function() {
        var i = "//mtvn.demdex.net";
        o.aam_tnt_cb = function(a) {
            if (typeof a.stuff != "undefined" && a.stuff != "") {
                demdex_seg = a.stuff;
                for (var a = 0, b = demdex_seg.length; a < b; a++)
                    if (demdex_seg[a].cn == "aam_sc")
                        if (demdex_seg[a].cv.split(",")) {
                            var c = demdex_seg[a].cv.replace("aam=", "");
                            if (c) {
                                if (!btg.DOM.Storage.isStorageAvailable()) {
                                    if (c.length > 120) {
                                        c = c.substr(0, 120);
                                        c = c.substr(0, c.lastIndexOf(","))
                                    }
                                    btg.Cookie.set("vmn_aam", c)
                                } else btg.DOM.Storage.set("vmn_aam", c);
                                break
                            }
                        }
            }
        };
        this.getDpid =
            function() {
                var a = "";
                if (btg.Environment.getPlatform() == "Desktop") a = 332;
                else if (btg.globalvars.is_iOS == "true") a = dpidIos;
                else if (btg.Environment.userAgent.isMobile == "true") a = dpidAndroid;
                return a
            };
        var l = btg.Cookie.read("vmn_uuid");
        if (btg.Cookie.read("vmn_3pc") == 0 && l) btg.DOM.loadScript(i + "/event?d_stuff=1&d_dst=1&d_rtbd=json&d_cts=1&d_cb=aam_tnt_cb&d_dpid=" + this.getDpid() + "&d_dpuuid=" + l, false);
        else btg.DOM.loadScript(i + "/event?d_stuff=1&d_dst=1&d_rtbd=json&d_cts=1&d_cb=aam_tnt_cb", false);
        var i = "//mtvn.demdex.net",
            f = btg.Cookie,
            m = new btg.Beacon,
            n = false,
            j = btg.String,
            g = btg.String.isDefined,
            h = btg.Object.isDefined;
        this.canSendRequest = true;
        this.dependencies = new btg.DependencyManager;
        this.data = null;
        this.sendIdSyncCall = function() {
            if (f.read("vmn_3pc") == "0" || !f.read("vmn_uuid")) return;
            var a = f.read("vmn_uuid");
            if (!f.read("mtvn_dmp_init") && a) {
                var b = new Date;
                m.url = "//dpm.demdex.net/ibs:dpid=332&dpuuid=" + a;
                m.send();
                b.setHours(23);
                b.setMinutes(59);
                f.set("mtvn_dmp_init", 1, b)
            }
        };
        this.init = function() {
            this.setData();
            this.dependencies.add("demdex_response",
                function() {
                    return (btg.Demdex ? btg.Demdex : {}).canSendRequest
                }, 500, false)
        };
        this.sendPageCall = function(a, b) {
            this.dependencies.checkDependency("demdex_response");
            if (this.dependencies.hasDependency()) {
                this.dependencies.addToCallQueue(this, this.sendPageCall, a, b);
                return
            }
            this.canSendRequest = false;
            var c = i + "/event?",
                d = {
                    d_rtbd: "json",
                    d_dst: 1,
                    d_cts: 1,
                    d_cb: "btg.Demdex.response"
                };
            if (b && typeof b === "object")
                for (var e in b)
                    if (b.hasOwnProperty(e)) d["d_" + e] = j.encode(j.decode(b[e]));
            if (f.read("vmn_3pc") == "0") {
                d.d_dpid =
                    this.getDpid();
                d.d_dpuuid = f.read("vmn_uuid")
            }
            a.host = location.hostname;
            if (f.read("vmn_host") == null) {
                this.sendSiteVisitCall();
                a.ref = k.referrer;
                f.set("vmn_host", 1)
            }
            if (a && typeof a === "object")
                for (e in a)
                    if (a.hasOwnProperty(e) && a[e]) {
                        var g = e;
                        if (e.match(/^(prop\d{1,2})$/ig)) g = e.replace("prop", "c");
                        else if (e.match(/^(evar\d{1,2})$/ig)) g = e.replace("eVar", "v");
                        else if (e.match(/^(hier\d{1,2})$/ig)) g = e.replace("hier", "h");
                        else if (e.match(/^(channel)$/ig)) g = e.replace("channel", "ch");
                        d["c_" + g] = j.encode(j.decode(a[e]))
                    }
            btg.DOM.loadScript(c +
                btg.Object.toString(d, "&"))
        };
        this.sendSiteVisitCall = function() {
            this.dependencies.checkDependency("demdex_response");
            if (this.dependencies.hasDependency()) {
                this.dependencies.addToCallQueue(this, this.sendSiteVisitCall);
                return
            }
            this.canSendRequest = false;
            var a = f.read("vmn_uuid"),
                b = i + "/event?",
                a = {
                    d_rtbd: "json",
                    d_dst: 1,
                    d_cts: 1,
                    d_cb: "btg.Demdex.response",
                    c_uuid: a,
                    c_visit: location.hostname + "_visit"
                };
            if (f.read("vmn_3pc") == "0") {
                a.d_dpid = this.getDpid();
                a.d_dpuuid = f.read("vmn_uuid")
            }
            btg.DOM.loadScript(b + btg.Object.toString(a,
                "&"))
        };
        this.sendSocialCall = function(a) {
            this.dependencies.checkDependency("demdex_response");
            if (this.dependencies.hasDependency()) {
                this.dependencies.addToCallQueue(this, this.sendSocialCall, a);
                return
            }
            this.canSendRequest = false;
            var b = f.read("vmn_uuid"),
                c = i + "/event?",
                b = {
                    d_rtbd: "json",
                    d_dst: 1,
                    d_cts: 1,
                    d_cb: "btg.Demdex.response",
                    c_uuid: b
                };
            if (f.read("vmn_3pc") == "0") {
                a.d_dpid = this.getDpid();
                a.d_dpuuid = f.read("vmn_uuid")
            }
            if (a && typeof a === "object")
                for (var d in a)
                    if (a.hasOwnProperty(d) && a[d]) b["c_" + d] = j.encode(j.decode(a[d]));
            btg.DOM.loadScript(c + btg.Object.toString(b, "&"))
        };
        this.getFWSegment = function() {
            return this.getSegment("fw")
        };
        this.getSegment = function(a) {
            var b = this.data,
                c;
            if (h(b) && h(b.stuff) && g(a))
                for (var b = b.stuff, d = 0, e = b.length; d < e; d++)
                    if (h(b[d]) && g(b[d].cn) && b[d].cn == a && g(b[d].cv)) {
                        c = b[d].cv;
                        break
                    }
            return c
        };
        this.setSegment = function(a, b) {
            if (g(a) && g(b)) {
                this.data = h(this.data) ? this.data : {};
                if (!h(this.data.stuff) || this.data.stuff.length <= 0) this.data.stuff = [{
                    cn: a,
                    cv: b
                }];
                else
                    for (var c = this.data.stuff, d = 0, e = c.length; d <
                        e; d++)
                        if (h(c[d]) && g(c[d].cn))
                            if (c[d].cn == a) {
                                this.data.stuff[d].cv = b;
                                break
                            } else {
                                this.data.stuff[c.length] = {
                                    cn: a,
                                    cv: b
                                };
                                break
                            }
            }
        };
        this.setData = function() {
            this.setSegment("dfp", btg.DOM.Storage.get("demdexDFP"));
            this.setSegment("fw", btg.DOM.Storage.get("demdexFW"))
        };
        this.saveToDOM = function() {
            var a = this.getSegment("dfp"),
                b = this.getSegment("fw");
            if (g(a)) btg.DOM.Storage.set("demdexDFP", a);
            if (g(b)) btg.DOM.Storage.set("demdexFW", b)
        };
        this.response = function(a) {
            this.data = a;
            this.saveToDOM();
            btg.Demdex.canSendRequest =
                true;
            if (!n && location.protocol != "https:") {
                btg.DOM.appendIframe({
                    src: location.protocol + "//fast.mtvn.demdex.net/DSD-gz/mtvn-dest.html?" + "targus=1&targusvalidttl=14400&" + "bizo=1&bizovalidttl=14400&" + "nexac=1&nexacvalidttl=14400&" + "acx=1&acxvalidttl=14400&" + "addthis=1&addthisvalidttl=14400&" + "is_exelate=1&exvalidttl=302400&" + "is_mediamath=1&mmvalidttl=10080&" + "rubicon=1&rubiconvalidttl=14400&" + "tapad=1&tapadvalidttl=20160&" + "vid=1&vidvalidttl=10080&" + "qtct=1&qtctvalidttl=20160"
                });
                n = true
            }
            if (h(btg.MediaPlayer)) btg.MediaPlayer.setDemdexFWSegment(a);
            btg.Events.DEMDEX_RESPONSE.fire(a);
            a: {
                if (!btg.Demdex.data) break a;
                if (!btg.Demdex.data.dests) break a;
                for (var a = btg.Demdex.data.dests, b = 0; b < a.length; b++) {
                    var c = k.createElement("img");
                    c.src = a[b].c;
                    k.body.appendChild(c)
                }
            }
        }
    }
})(window, document);




//Attempting to include CODA/builds/3/Reporting.js
btg.ReportingManager = new function() {
    var d = false,
        f = false,
        e = false,
        g, b, c, h, i = false;
    this.isScriptIncluded = {
        comscore: false,
        quantcast: false
    };
    this.init = function() {
        if (i) return;
        b = btg.config;
        var a = btg.Object.isConfigDefined;
        if (a(b.Omniture) && btg.Omniture) {
            c = new btg.Omniture(b.Omniture);
            d = true
        }
        if (a(b.Nielsen) && btg.Nielsen) new btg.Nielsen(b.Nielsen);
        if (a(b.QuantCast) && btg.QuantCast) {
            h = new btg.QuantCast(b.QuantCast);
            f = true
        }
        if (a(b.ComScore) && btg.ComScore) new btg.ComScore(b.ComScore);
        if (b.ChoiceStream && b.ChoiceStream.enabled &&
            btg.ChoiceStream) {
            choicestream = new btg.ChoiceStream(b.ChoiceStream);
            e = true
        }
        if (a(b.ChoiceStream) && btg.ChoiceStream) {
            choicestream = new btg.ChoiceStream(b.ChoiceStream);
            e = true
        }
        if (a(b.Demdex) && btg.Demdex) {
            btg.Demdex.init();
            btg.Demdex.sendIdSyncCall();
            hasDemdex = true
        }
        i = true
    };
    this.sendPageCall = function(a) {
        if (d) {
            c.sendPageCall(typeof a.omniture == "object" && a.omniture != null ? a.omniture : a);
            g = c.getPageName()
        }
        if (f) h.sendPageCall(typeof a.quantCast == "object" && a.quantCast != null ? a.quantCast : a)
    };
    this.sendLinkEvent =
        function(a) {
            if (d) c.sendLinkEvent(typeof a.omniture == "object" && a.omniture != null ? a.omniture : a)
        };
    this.getData = function() {
        btg.Controller.init();
        return {
            pageName: g
        }
    };
    this.getOmniture = function() {
        return d ? c : null
    };
    this.setChoiceStreamRequest = function(a, b) {
        if (e) choicestream.setChoiceStreamRequest(a, b)
    }
};
btg.Omniture = function(a) {
    this.pageViewEventSet = false;
    this.btgIsStr = btg.String.isDefined;
    this.name = "Omniture";
    this.values = [];
    this.newRepeatProp = this.btgIsStr(a.newRepeatProp) ? a.newRepeatProp : "prop41";
    this.config = a;
    this.hcode = btg.Hcode;
    this.hcode.setAccount(this.config.account);
    if (btg.globalvars.is_iOS || this.config.enableFirstPartyCookie) {
        this.hcode.trackingServer = btg.Environment.getCnamedDomain();
        if (this.btgIsStr(this.config.tabletAccount) && btg.globalvars.is_iOS) this.hcode.setAccount(this.config.tabletAccount)
    }
    for (var b in this.config) this.hcode[b] =
        this.config[b];
    this.url = "http" + (this.hcode.ssl ? "s" : "") + "://" + this.hcode.un + ".112.2o7.net/b/ss/" + this.hcode.un + "/1/";
    this.dependencies = new btg.DependencyManager;
    this.plugins = new btg.PluginManager([btg.GUID, btg.Flux, btg.Recommendations, btg.Photos, btg.EmbedAPI, btg.Facebook], this.config, this.dependencies);
    if (typeof btg.config.Omniture.enableVisitorNamespace == "boolean" && btg.config.Omniture.enableVisitorNamespace) this.setAttribute("visitorNamespace", btg.globalvars.VISITOR_NAMESPACE);
    if (typeof this.config.userSegmentVarMap ==
        "undefined") {
        this.config.userSegmentVarMap = {
            traffic: "prop31",
            commerce: "products"
        };
        btg.config.Omniture.userSegmentVarMap = this.config.userSegmentVarMap
    }
    if (typeof btg.UserSegment != "undefined") btg.UserSegment.init(this);
    if (typeof this.config.timePartingVarMap == "undefined") this.config.timePartingVarMap = {
        trafficDay: "prop33",
        trafficHour: "prop34",
        commerceDay: "eVar45",
        commerceHour: "eVar46"
    };
    if (typeof this.config.pageViewEvent != "string") this.config.pageViewEvent = "event16";
    if (typeof btg.MediaPlayer != "undefined") btg.MediaPlayer.init(this)
};
btg.Omniture.prototype = {
    setAttribute: function(a, b) {
        if (this.btgIsStr(a)) {
            this.hcode[a] = this.btgIsStr(b) ? b : "";
            return true
        } else return false
    },
    getAttribute: function(a) {
        return this.hcode[a]
    },
    setValues: function(a) {
        for (var b in a) {
            this.setAttribute(b, a[b]);
            this.values.push(b)
        }
        return true
    },
    clearValues: function() {
        for (var a = 0, b = this.values.length; a < b; a++) {
            if (/(pageName|visitorNamespace)/.test(this.values[a])) continue;
            this.setAttribute(this.values[a], "")
        }
        this.clearNewRepeat();
        this.values = this.getPageName() ? ["pageName"] : [];
        return true
    },
    setNewRepeat: function() {
        this.setAttribute(this.newRepeatProp, this.hcode.getNewRepeat());
        return true
    },
    clearNewRepeat: function() {
        this.setAttribute(this.newRepeatProp, "");
        return true
    },
    getValOnce: function(a, b, c) {
        return this.hcode.getValOnce(a, b, c)
    },
    getNewRepeat: function() {
        return this.hcode.getNewRepeat()
    },
    getPageName: function() {
        return this.getAttribute("pageName")
    },
    preprocessData: function(a) {
        a = this.plugins.run(a);
        if (this.btgIsStr(a.account)) this.hcode.setAccount(a.account);
        else this.hcode.setAccount(this.config.account);
        if (typeof mboxCreate == "function" && btg.Object.isDefined(btg.TestAndTarget) && btg.config.TestAndTarget.enabled) a.tnt = this.hcode.trackTNT();
        if (typeof btg.UserSegment != "undefined") a = btg.UserSegment.setData(this, a);
        var b = btg.Cookie.read;
        if (b("vmn_3pc") && b("vmn_3pc") == "0") a.eVar58 = "3PB";
        if (typeof btg.config.Omniture.enableVisitorNamespace == "boolean" && btg.config.Omniture.enableVisitorNamespace) a.visitorNamespace = btg.globalvars.VISITOR_NAMESPACE;
        return a
    },
    sendPageCall: function(a) {
        if (this.dependencies.hasDependency()) {
            this.dependencies.addToCallQueue(this,
                this.sendPageCall, a);
            return
        }
        a = typeof a != "object" ? {} : a;
        if (typeof a.pageName != "string" || a.pageName == "") a.pageName = typeof this.hcode.pageName === "string" && this.hcode.pageName != "" ? this.hcode.pageName : btg.config._defaultPageName;
        if (typeof this.config.noPagenameSlash != "undefined" && this.config.noPagenameSlash && a.pageName.charAt(0) == "/") a.pageName = a.pageName.substring(1);
        if (typeof this.config.defaultHier == "string" && this.config.defaultHier != "")
            if (typeof a[this.config.defaultHier] !== "string" || a[this.config.defaultHier] ==
                "") {
                if (typeof this.hcode[this.config.defaultHier] === "string" && this.hcode[this.config.defaultHier] != "") var b = this.hcode[this.config.defaultHier];
                else if (typeof a.docHierarchy === "string" && a.docHierarchy != "") b = a.docHierarchy;
                else b = a.pageName;
                if (b.charAt(b.length - 1) == "/")
                    if (typeof btg.config.indexFileName === "string") a[this.config.defaultHier] = b + btg.config.indexFileName;
                    else a[this.config.defaultHier] = b + "index";
                else a[this.config.defaultHier] = b;
                a[this.config.defaultHier] = btg.String.charLtrim(a[this.config.defaultHier],
                    "/")
            }
        if (typeof a.channel != "string" || a.channel == "")
            if (typeof this.hcode.channel == "string") a.channel = this.hcode.channel;
            else if (a.pageName == "/") a.channel = a.pageName;
        else
            for (var b = a.pageName.split("/"), c = 0, d = b.length; c < d; c++)
                if (b[c] != "") {
                    a.channel = b[c];
                    break
                } if (typeof a.channel == "string") a.eVar49 = a.channel;
        if (this.btgIsStr(this.config.franchise)) a.eVar68 = a.prop68 = this.config.franchise;
        if (typeof btg.SEO != "undefined") a = btg.SEO.setData(this, a);
        if (typeof btg.BrowserToolbar != "undefined") a = btg.BrowserToolbar.setData(this,
            a);
        if (typeof btg.Search != "undefined") {
            a.prevPage = this.hcode.getPreviousValue(a.pageName, "s_pn");
            a = btg.Search.setData(a)
        }
        if (typeof btg.Search != "undefined") a = btg.Search.chkConversions(a);
        if (typeof this.config.enableTimeParting != "undefined" && this.config.enableTimeParting == true && typeof this.config.timePartingVarMap != "undefined") {
            b = typeof btg.config.Omniture.timezone != "undefined" ? btg.config.Omniture.timezone : "-5";
            a[this.config.timePartingVarMap.commerceHour] = a[this.config.timePartingVarMap.trafficHour] =
                this.hcode.getTimeParting("h", b);
            a[this.config.timePartingVarMap.commerceDay] = a[this.config.timePartingVarMap.trafficDay] = this.hcode.getTimeParting("d", b)
        }
        if (typeof this.config.percentPageViewedVarMap != "undefined") {
            if (typeof this.config.percentPageViewedVarMap.previousPage != "undefined") a[this.config.percentPageViewedVarMap.previousPage] = this.hcode.getPreviousValue(a.pageName, "s_pn");
            if (typeof this.config.percentPageViewedVarMap.percentage != "undefined")
                if (this.config.percentPageViewedVarMap.percentage.indexOf("event") >=
                    0) {
                    if (typeof a.events == "string" && a.events != "") a.events += ",";
                    else a.events = "";
                    a.events += this.config.percentPageViewedVarMap.percentage;
                    if (typeof a.products == "string" && a.products != "") a.products += ",";
                    else a.products = "";
                    a.products += ";;;;" + this.config.percentPageViewedVarMap.percentage + "=" + this.hcode.getPercentPageViewed()
                } else a[this.config.percentPageViewedVarMap.percentage] = this.hcode.getPercentPageViewed()
        }
        if (!this.pageViewEventSet) {
            b = typeof a.events === "string" ? a.events : "";
            if (typeof this.config.pageViewEvent ===
                "string" && b.indexOf(this.config.pageViewEvent) < 0) {
                if (b != "") b += ",";
                b += this.config.pageViewEvent;
                a.events = b;
                this.pageViewEventSet = true
            }
        }
        if (typeof btg.GameReporter != "undefined") {
            btg.GameReporter.gtsEvent = "event74";
            a = btg.GameReporter.setData(a)
        }
        a = this.preprocessData(a);
        b = null;
        if (btg.DOM.Storage.isStorageAvailable()) b = btg.DOM.Storage.get("vmn_aam");
        else b = btg.Cookie.read("vmn_aam");
        if (b && btg.config.requireCOPPACompliance != true) a.list3 = b;
        b = btg.Cookie.read("vmn_uuid");
        a.eVar67 = (b && btg.config.Omniture.enableGuidPlugin ?
            b : "EMPTY") + "_" + (new Date).getTime();
        this.setValues(this.config);
        this.setValues(a);
        this.setNewRepeat();
        this.attachLoggedEvent();
        if (btg.Object.isConfigDefined(btg.config.Demdex) && btg.Demdex) {
            a[this.newRepeatProp] = this.getAttribute(this.newRepeatProp);
            btg.Demdex.sendPageCall(a)
        }
        this.hcode.t();
        this.clearValues();
        if (btg.SourcePoint) btg.SourcePoint.onPageChange();
        if (this.config.trackExternalLinks.toString() == "true") this.hcode.trackExternalLinks = true;
        return true
    },
    sendLinkEvent: function(a) {
        this.hcode.trackExternalLinks =
            false;
        if (this.dependencies.hasDependency()) {
            this.dependencies.addToCallQueue(this, this.sendPageCall, a);
            return
        }
        a = typeof a != "object" ? {} : a;
        a.lnk = a.lnk ? this.hcode.co(a.lnk) : true;
        a.linkType = a.linkType ? a.linkType : "o";
        a.referrer = location.href;
        a = this.preprocessData(a);
        this.setValues(this.config);
        this.setValues(a);
        this.attachLoggedEvent();
        if (btg.Object.isConfigDefined(btg.config.Demdex) && btg.Demdex) btg.Demdex.sendPageCall(a);
        this.hcode.tl(a.lnk, a.linkType, a.linkName);
        this.clearValues();
        if (btg.config.Omniture.trackExternalLinks ===
            true) {
            var b = this;
            setTimeout(function() {
                b.hcode.trackExternalLinks = true
            }, 1)
        }
        return true
    },
    setAccountVars: function(a) {
        this.setAttribute("un", a.name);
        this.setAttribute("dynamicAccountSelection", a.dynamic);
        this.setAttribute("dynamicAccountList", a.list);
        this.setAttribute("linkInternalFilters", a.filters);
        this.setAttribute("charSet", a.chartset);
        for (var b in a)
            if (this.btgIsStr(b)) this.setAttribute(b, this.btgIsStr(a[b]) ? a[b] : "")
    },
    logEvent: function(a) {
        var b = btg.Cookie.set;
        if (this.btgIsStr(a)) {
            if (this.btgIsStr(a.UIEvent)) b("UIEvent",
                a.UIEvent);
            if (this.btgIsStr(a.UIEventName)) b("UIEventName", a.UIEventName);
            if (this.btgIsStr(a.UITrackingCode)) b("UITrackingCode", a.UITrackingCode)
        }
    },
    attachLoggedEvent: function() {
        var a = btg.Cookie.read,
            b = btg.Cookie.remove;
        if (this.btgIsStr(a("UIEvent"))) {
            this.setAttribute("events", a("UIEvent"));
            b("UIEvent")
        }
        if (this.btgIsStr(a("UIEventName"))) {
            this.setAttribute("eVar40", a("UIEventName"));
            b("UIEventName")
        }
        if (this.btgIsStr(a("UITrackingCode"))) {
            this.setAttribute("campaign", a("UITrackingCode"));
            b("UITrackingCode")
        }
        return true
    },
    clearAllVars: function() {
        for (var a = 1; a <= 50; a++) {
            this.setAttribute("eVar" + a, "");
            this.setAttribute("prop" + a, "");
            if (a < 6) this.setAttribute("hier" + a, "")
        }
        this.setAttribute("pageName", "");
        this.setAttribute("channel", "");
        return true
    }
};
btg.Nielsen = function(b) {
    if (!btg.Controller.hasReporting()) return;
    this.config = b;
    this.dependencies = new btg.DependencyManager;
    this.dependencies.add("nielsen_uuid_present", function() {
        return btg.String.isDefined(btg.Cookie.read("vmn_uuid")) ? true : false
    }, 100, true);
    if (this.dependencies.hasDependency()) this.dependencies.addToCallQueue(this, this.sendPageCall);
    else this.sendPageCall()
};
btg.Nielsen.prototype = {
    sendPageCall: function() {
        if (!btg.Controller.hasReporting()) return;
        var b = btg.Cookie.read("vmn_uuid"),
            c = btg.String.isDefined(btg.config.Nielsen.cid) ? btg.config.Nielsen.cid : "us-mtvn",
            a = new Image(1, 1);
        a.onerror = a.onload = function() {
            a.onerror = a.onload = null
        };
        var d = escape(window.location.href);
        a.src = ["//secure-us.imrworldwide.com/cgi-bin/m?ci=" + c + "&cg=" + b + "&cc=1&si=", d, "&rp=", escape(document.referrer), "&ts=compact&rnd=", (new Date).getTime()].join("");
        this.sendPageCall = function() {}
    }
};
btg.UserSegment = new function() {
    var d = btg.Cookie;
    this.init = function(a) {
        var b = d.read("mtvn_btg_userSegments");
        a.userSegments = b ? b.split(",") : [];
        return true
    };
    this.set = function(a, b) {
        if (!b) b = btg.ReportingManager.getOmniture();
        for (var c = 0, e = b.userSegments.length; c < e; c++)
            if (b.userSegments[c] == a) return false;
        b.userSegments[b.userSegments.length] = a;
        d.set("mtvn_btg_userSegments", b.userSegments.join(","));
        return true
    };
    this.add = function(a, b) {
        this.set(b, a);
        return true
    };
    this.getSegments = function(a) {
        return a.userSegments
    };
    this.getStr = function(a, b, c) {
        if (!b) b = "";
        if (!c) c = "";
        return typeof a.userSegments == "object" && a.userSegments.length > 0 ? b + a.userSegments.join(c + "," + b) + c : ""
    };
    this.setData = function(a, b) {
        b[a.config.userSegmentVarMap.traffic] = b[a.config.userSegmentVarMap.traffic] ? b[a.config.userSegmentVarMap.traffic] + (this.getStr(a) != "" ? "," : "") + this.getStr(a) : this.getStr(a);
        b[a.config.userSegmentVarMap.commerce] = b[a.config.userSegmentVarMap.commerce] ? b[a.config.userSegmentVarMap.commerce] + (this.getStr(a, "User Segment;") != "" ?
            "," : "") + this.getStr(a, "User Segment;") : this.getStr(a, "User Segment;");
        return b
    }
};
btg.Search = new function() {
    var i = btg.Cookie,
        b = i.set,
        j = btg.String.isDefined,
        f = false,
        d = "",
        e = function(a) {
            if (d.indexOf(a) < 0) {
                if (d != "") d += ",";
                d += a
            }
            return d
        };
    this.init = function() {};
    var h = function() {
        if (typeof com_mtvi_SSDC === "object") f = true;
        if (typeof btg_SSDC === "object") f = false;
        btg.Error.log("CODA info: _setSearchVersion: _legacySearch = " + f)
    };
    this.setData = function(a) {
        h();
        if (f) return this.legacy_setData(a);
        if (typeof btg_SSDC != "object") return a;
        if (j(a.events)) d = a.events;
        var c = "events,prop31";
        if (j(btg_SSDC.srchterm)) {
            a.eVar2 =
                btg_SSDC.srchterm;
            c += ",eVar2";
            b("btg_SSDC_searchTerm", btg_SSDC.srchterm)
        }
        if (j(a.prevPage)) {
            a.eVar44 = a.prevPage;
            delete a.prevPage;
            c += ",eVar44"
        }
        if (btg_SSDC.srchfail === true) e("event37");
        else e("event38");
        if (btg_SSDC.srchsyn === true) e("event33");
        btg.UserSegment.set("SiteSearcher");
        a.linkTrackVars = c;
        a.linkTrackEvents = d;
        a.events = d;
        return a
    };
    this.legacy_setData = function(a) {
        if (typeof com_mtvi_SSDC != "object") return a;
        if (typeof a.events == "string") d = a.events;
        var c = "events,prop31";
        e("event36");
        a.eVar3 = typeof com_mtvi_SSDC.srchtype ==
            "string" ? com_mtvi_SSDC.srchtype : "GENERAL";
        if (typeof com_mtvi_SSDC.srchsyn != "undefined") {
            e("event33");
            if (typeof com_mtvi_SSDC.srchsyn == "object") {
                for (var g = 0, f = com_mtvi_SSDC.srchsyn.length; g < f; g++) com_mtvi_SSDC.srchsyn[g] = com_mtvi_SSDC.srchsyn[g].replace(/\,/, "");
                com_mtvi_SSDC.srchsyn = com_mtvi_SSDC.srchsyn.join(",")
            }
            a.eVar36 = com_mtvi_SSDC.srchsyn;
            c += ",eVar36"
        }
        if (typeof com_mtvi_SSDC.srchterm == "string") {
            e("event38");
            a.eVar2 = com_mtvi_SSDC.srchterm;
            c += ",eVar2"
        } else if (typeof com_mtvi_SSDC.srchfail == "string") {
            e("event37");
            a.eVar4 = typeof com_mtvi_SSDC.appfailure == "boolean" && com_mtvi_SSDC.appfailure ? "APP_FAILURE" : com_mtvi_SSDC.srchfail;
            c += ",eVar4"
        }
        btg.UserSegment.set("SiteSearcher");
        a.linkTrackVars = c;
        a.linkTrackEvents = d;
        a.events = d;
        return a
    };
    this.sendLinkEvent = function() {
        h();
        if (f) return this.legacy_sendLinkEvent();
        if (!btg_SSDC) return false;
        var a = {
                linkName: "Site Search",
                linkType: "o"
            },
            a = this.setData(a);
        btg.Controller.sendLinkEvent(a);
        return true
    };
    this.legacy_sendLinkEvent = function() {
        if (!com_mtvi_SSDC) return false;
        var a = {
                linkName: "SITE_SEARCH_RESULTS",
                linkType: "o"
            },
            a = this.setData(a);
        btg.Controller.sendLinkEvent(a);
        return true
    };
    this.chkConversions = function(a) {
        h();
        if (f) return this.legacy_chkConversions(a);
        var c = i.read,
            g = i.remove;
        if (j(a.events)) d = a.events;
        if (c("btg_SSDC_conv")) {
            var b = {
                linkName: "Site Search Conversion",
                linkType: "o",
                events: "event35",
                eVar2: c("btg_SSDC_searchTerm")
            };
            btg.Controller.sendLinkEvent(b);
            g("btg_SSDC_conv");
            g("btg_SSDC_searchTerm")
        }
        if (c("btg_SSDC_typeahead")) {
            e("event36");
            g("btg_SSDC_typeahead")
        }
        if (c("btg_SSDC_typeahead_conv")) {
            e("event39");
            for (var b = d.split(","), k = 0, l = b.length; k < l; k++)
                if (b[k] == "event36") {
                    b.splice(k, 1);
                    break
                }
            d = b.join(",");
            g("btg_SSDC_typeahead_conv")
        }
        if (c("btg_SSDC_syn_conv")) {
            e("event34");
            g("btg_SSDC_syn_conv")
        }
        a.events = d;
        return a
    };
    this.legacy_chkConversions = function(a) {
        var c = i.read,
            b = i.remove;
        if (typeof a.events == "string") d = a.events;
        if (c("mtvn_btg_SSDC_conv")) {
            e("event35");
            b("mtvn_btg_SSDC_conv")
        }
        if (c("mtvn_btg_SSDC_syn_conv")) {
            e("event34");
            b("mtvn_btg_SSDC_syn_conv")
        }
        if (c("mtvn_btg_SSDC_typeahead_conv")) {
            e("event39");
            b("mtvn_btg_SSDC_typeahead_conv")
        }
        a.events = d;
        return a
    };
    this.setConversion = function() {
        h();
        if (f) return this.legacy_setConversion();
        b("btg_SSDC_conv", 1)
    };
    this.legacy_setConversion = function() {
        b("mtvn_btg_SSDC_conv", 1)
    };
    this.setSynConversion = function() {
        h();
        if (f) return this.legacy_setSynConversion();
        b("btg_SSDC_syn_conv", 1)
    };
    this.legacy_setSynConversion = function() {
        b("mtvn_btg_SSDC_syn_conv", 1)
    };
    this.setTypeAhead = function() {
        b("btg_SSDC_typeahead", 1)
    };
    this.setTypeAheadConversion = function() {
        h();
        if (f) return this.legacy_setTypeAheadConversion();
        b("btg_SSDC_typeahead_conv", 1)
    };
    this.legacy_setTypeAheadConversion = function() {
        b("mtvn_btg_SSDC_typeahead_conv", 1)
    }
};
btg.SEO = new function() {
    this.setData = function(e, c) {
        for (var b = [
                ["google.com", "GoogleUser"],
                ["msn.com", "MSNUser"],
                ["yahoo.com", "YahooUser"]
            ], a = 0, d = b.length; a < d; a++)
            if (document.referrer.indexOf(b[a][0]) > -1)
                if (typeof btg.UserSegment != "undefined") btg.UserSegment.set(b[a][1]);
        return c
    }
};
btg.SourcePoint = function() {
    var c = {
            "data-client-id": "VIZrljvxmzsmcCs"
        },
        b = true,
        a = false;
    btg.DOM.Events.onDomLoaded(function() {
        if (!a && btg.Object.isConfigDefined(btg.config.SourcePoint)) {
            btg.DOM.loadScript("//d3avqv6zaxegeu.cloudfront.net/tie.js", true, null, true, c);
            a = true
        }
    });
    return {
        onPageChange: function() {
            if (btg.Object.isConfigDefined(btg.config.SourcePoint)) {
                if (b) {
                    b = false;
                    return
                }
                if (window._sp_ && typeof window._sp_.pageChange === "function") try {
                    window._sp_.pageChange()
                } catch (a) {
                    (new btg.Beacon("//btg.mtvnservices.com/aria/monitor/pixel.gif?err=CALLING_SP_PAGECHANGE_METHOD")).send()
                }
            }
        }
    }
}();
var s_code = "",
    s_objectID;

function s_gi(c, i, g) {
    var d = "s.version='H.25.5';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\" + '\\\\"),"\\n","\\\\n"),"\\"","\\\\\\"")+\'");}catch(e){}\');tcf()};s.cls=function(x,c){var i,y=\'\';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}retur' + "n y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;ret" + "urn 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent(" +
        "x);for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.su" + "bstring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+" + "','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00" +
        "'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unesc" + "ape(x)}return y');return tcf(x)}else return unescape(x)}return y};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r" + ";z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring(" +
        "0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf'" + ",f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visi" + "bilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){whil" +
        "e(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\")" + ";s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.li" + "nkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostnam" +
        "e,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'" + ".','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<" + "0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-6" +
        "0);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':''" + ");return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i" + ";l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tc" +
        "f=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s" + ".wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0" + ";return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return " +
        "s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)fo" + "r(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackin" + "gServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase()" +
        ";else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.t" + "cn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[u" + "n]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;retur" +
        "n ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[imn];if(" + "!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nr" + "s){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'" +
        "].bcr()',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_top'||ta=='_parent'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=ne" + "w Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.s" + "ubstring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.len" +
        "gth>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\"," + "j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&')" + ";if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c." +
        "length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v)i" + "f((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk" + ".substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'" +
        "')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextDa" + "ta.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=" + "='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this" +
        ",qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=" + "s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events" + "2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!=" +
        "'linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';if(v.length>255){s.pageURLRest=v.substring(25" + "5);v=v.substring(0,255);}}else if(k=='pageURLRest')q='-g';else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q=" + "'vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUT" +
        "O')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q=" + "'vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else " + "if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct" +
        "';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0)" + ";v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieve" + "LightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n" +
        ";else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t." + "toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase()" + ":'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.loca" +
        "tion.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.indexOf('#')!=0&&h.indexOf('about:')!=0&&h.indexOf('javascript:')!=0&&(lef" + "||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=this;s.t();s.lnk=0;if(b)r" + "eturn this[b](e);return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct.href)s.d.location=s.bct.hre" +
        "f}s.bct=s.bce=s.bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n,nrs,a,h;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else if(!s." + 'useForcedLinkTracking){s.b.removeEventListener("click",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEventListener("click",s.bc,false);s.eo=e.srcElement?e.srcElement:e.target' + ';nrs=s.nrs;s.t();s.eo=0;if(s.nrs>nrs&&s.useForcedLinkTracking&&e.target){a=e.target;while(a&&a!=s.b&&a.tagName.toUpperCase()!="A"&&a.tagName.toUpperCase()!="AREA")a=a.parentNode;if(a){h=a.href;' +
        'if(h.indexOf("#")==0||h.indexOf("about:")==0||h.indexOf("javascript:")==0)h=0;t=a.target;if(e.target.dispatchEvent&&h&&(!t||t=="_self"||t=="_top"||t=="_parent"||(s.wd.name&&t==s.wd.name' + '))){e.stopPropagation();if (e.stopImmediatePropagation) {e.stopImmediatePropagation();}e.preventDefault();n=s.d.createEvent("MouseEvents");n.initMouseEvent("click",e.bubbles,e.cancelable,e.view' + ",e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget);n.s_fe=1;s.bct=e.target;s.bce=n}}}');s.oh=function(o){var s=this,l=s.wd.location," +
        "h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.path" + "name.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o." + "scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase(" +
        ");else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('" + "javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.inn" + "erText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.su" +
        "bstring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=th" + "is.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1" + "));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.sq" +
        "u=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in" + " s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+']," + 'r=true,b=s.eh(s.wd,"onload"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?""+o.onclick:"";if((oc.indexOf("s_gs(")<0||oc.indexOf(".s_oc(")>=0)&&oc.i' +
        'ndexOf(".tl(")<0)s.eh(o,"onclick",0,s.lc);}return r\');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent(\'onclick\',s.bc);else if(s.b&' + "&s.b.addEventListener){if(s.n&&s.n.userAgent.indexOf('WebKit')>=0&&s.d.createEvent){s.bbc=1;s.useForcedLinkTracking=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false" + ")}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900" +
        "?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t" + ".indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountLis" + "t,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.ind" +
        "exOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;if(s.un&&s.mpc('sa',arguments))return;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+" + "un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m'" + ";m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n" +
        "]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new " + 'Function(\'n\',\'g\',\'e\',\'if(!g)g="m_"+n;var s=s_c_il[\'+s._in+\'],c=s[g+"_c"],m,x,f=0;if(s.mpc("m_a",arguments))return;if(!c)c=s.wd["s_"+g+"_c"];if(c&&s_d)s[g]=new Function("s",s_ft(s_d(c)))' + ';x=s[g];if(!x)x=s.wd[\\\'s_\\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!="m_"+n)){m._i=f=1;if((""+x).indexOf("function")>=0)x(s);else s.m_m("x",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d' +
        "=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf" + "('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}" + "}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s" +
        "=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){" + "if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)cle" + "arTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'" +
        "}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l" + "=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m" + "_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){" +
        'if(!r&&(k=="contextData"||k=="retrieveLightData")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo' + "[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0" + ";s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._" +
        "t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.gfid=function(){var s=this,d='0123456789ABCDEF',k='s_fid',fid=s.c_r(k),h='',l='',i,j,m=8,n=4," + "e=new Date,y;if(!fid||fid.indexOf('-')<0){for(i=0;i<16;i++){j=Math.floor(Math.random()*m);h+=d.substring(j,j+1);j=Math.floor(Math.random()*n);l+=d.substring(j,j+1);m=n=16}fid=h+'-'+l;}y=e.getYear()" + ";e.setYear(y+2+(y<1900?1900:0));if(!s.c_w(k,fid,e))fid=0;return fid};s.applyADMS=function(){var s=this,vb=new Object;if(s.wd.ADMS&&!s.visitorID&&!s.admsc){if(!s.adms)s.adms=ADMS.getDefault();if(!s." +
        "admsq){s.visitorID=s.adms.getVisitorID(new Function('v','var s=s_c_il['+s._in+'],l=s.admsq,i;if(v==-1)v=0;if(v)s.visitorID=v;s.admsq=0;if(l){s.admsc=1;for(i=0;i<l.length;i++)s.t(l[i]);s.admsc=0;}')" + ");if(!s.visitorID)s.admsq=new Array}if(s.admsq){s.vob(vb);vb['!visitorID']=0;s.admsq.push(vb);return 1}else{if(s.visitorID==-1)s.visitorID=0}}return 0};s.track=s.t=function(vo){var s=this,trk=1,tm=" + "new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y" +
        "+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;if(s.mpc('t',arguments))return;" + "s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';i" + "f(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i" +
        "=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1.7';if(a.reduce){j='1.8';if(j.trim){j='1.8.1';if(Date.parse){j='1.8.2';if(Object.create)j='1.8.5'}}}}}}}}}if(s.apv>=4)x=screen.width" + "+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>" + "=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s" +
        '.b.addBehavior("#default#homePage");hp=s.b.isHomePage(tl)?"Y":"N"}catch(e){}return hp\');hp=tcf(s,tl);tcf=new Function(\'s\',\'var e,ct=0;try{s.b.addBehavior("#default#clientCaps");ct=s.b.conne' + "ctionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVer" + "sion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}s.fid=s.gfid();if(s.applyADMS())return" +
        " '';if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);if(!s.abort){var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.re" + "ferrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.par" + "entElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=" +
        "0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t" + "=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.da" + "taset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-object-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+" +
        "o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while" + "(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt(oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}o" + "ce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+" +
        "s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt" + "?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}}else s.dl(vo);if(vo)s.v" + "oa(vb,1);s.abort=0;s.pageURLRest=s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.t" +
        "rackLink=s.tl=function(o,t,n,vo,f){var s=this;s.lnk=o;s.linkType=t;s.linkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=" + "ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.l" + "mq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Obj" +
        "ect.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if" + "(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=docum" + "ent;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVer" +
        "sion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=" + "(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s" + ".ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s." +
        "sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,fid,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods" + ",cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl" + "_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,chan" +
        "nel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n" + "<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth," + "browserHeight,connectionType,homepage,pageURLRest,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disab" +
        "leBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQuerySt" + "ring,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.conte" + "xtData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){return o};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
        b = window,
        e = b.s_c_il,
        f = navigator,
        l = f.userAgent,
        f = f.appVersion,
        m = f.indexOf("MSIE "),
        n = l.indexOf("Netscape6/"),
        h, k, j, a;
    if (c) {
        c = c.toLowerCase();
        if (e)
            for (k = 0; k < 2; k++)
                for (h = 0; h < e.length; h++) {
                    a = e[h];
                    j = a._c;
                    if ((!j || j == "s_c" || k > 0 && j == "s_l") && (a.oun == c || a.fs && a.sa && a.fs(a.oun, c))) {
                        if (a.sa) a.sa(c);
                        if (j == "s_c") return a
                    } else a = 0
                }
    }
    b.s_an = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    b.s_sp = new Function("x", "d", "var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst" +
        "ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
    b.s_jn = new Function("a", "d", "var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
    b.s_rep = new Function("x", "o", "n", "return s_jn(s_sp(x,o),n)");
    b.s_d = new Function("x", "var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d" + "=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn(" +
        "x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
    b.s_fe = new Function("c", "return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
    b.s_fa = new Function("f", "var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':" + "a");
    b.s_ft = new Function("c", "c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i" +
        "f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")" + "'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
    d = s_d(d);
    if (m > 0) {
        e = parseInt(h = f.substring(m + 5));
        if (e > 3) e = parseFloat(h)
    } else if (n > 0) e = parseFloat(l.substring(n + 10));
    else e = parseFloat(f);
    if (e < 5 || f.indexOf("Opera") >= 0 || l.indexOf("Opera") >= 0) d = s_ft(d);
    if (!a) {
        a = new Object;
        if (!b.s_c_in) {
            b.s_c_il = new Array;
            b.s_c_in = 0
        }
        a._il = b.s_c_il;
        a._in = b.s_c_in;
        a._il[a._in] = a;
        b.s_c_in++
    }
    a._c = "s_c";
    (new Function("s", "un", "pg", "ss", d))(a, c, i, g);
    return a
}

function s_giqf() {
    var c = window,
        i = c.s_giq,
        g, d, b;
    if (i)
        for (g = 0; g < i.length; g++) {
            d = i[g];
            b = s_gi(d.oun);
            b.sa(d.un);
            b.setTagContainer(d.tagContainerName)
        }
    c.s_giq = 0
}
s_giqf();
btg.Hcode = s_gi("");
if (typeof btg.Hcode === "object") btg.Hcode.setAccount = function(a) {
    this.un = a
};
if (typeof btg.Hcode === "object") btg.Hcode.getNewRepeat = new Function("" + "var s=this,e=new Date(),cval,ct=e.getTime(),y=e.getYear();e.setTime" + "(ct+30*24*60*60*1000);cval=s.c_r('s_nr');if(cval.length==0){s.c_w(" + "'s_nr',ct,e);return 'New';}if(cval.length!=0&&ct-cval<30*60*1000){s" + ".c_w('s_nr',ct,e);return 'New';}if(cval<1123916400001){e.setTime(cv" + "al+30*24*60*60*1000);s.c_w('s_nr',ct,e);return 'Repeat';}else retur" + "n 'Repeat';");
if (typeof btg.Hcode === "object")(function(a) {
    a.Hcode.getTimeParting = new Function("t", "z", "" + "var s=this,cy;dc=new Date('1/1/2000');" + "if(dc.getDay()!=6||dc.getMonth()!=0){return'Data Not Available'}" + "else{;z=parseFloat(z);var dsts=new Date(s.dstStart);" + "var dste=new Date(s.dstEnd);fl=dste;cd=new Date();if(cd>dsts&&cd<fl)" + "{z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneOffset()*60000);" + "tz=new Date(utc + (3600000*z));thisy=tz.getFullYear();" + "var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'," +
        "'Saturday'];if(thisy!=s.currentYear){return'Data Not Available'}else{;" + "thish=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();" + "var dow=days[thisd];var ap='AM';var dt='Weekday';var mint='00';" + "if(thismin>30){mint='30'}if(thish>=12){ap='PM';thish=thish-12};" + "if (thish==0){thish=12};if(thisd==6||thisd==0){dt='Weekend'};" + "var timestring=thish+':'+mint+ap;if(t=='h'){return timestring}" + "if(t=='d'){return dow};if(t=='w'){return dt}}};");
    a.Hcode.currentYear = (new Date).getFullYear();
    var b =
        7 - (new Date("03/01/" + a.Hcode.currentYear)).getDay() + 7 + 1,
        c = (7 - (new Date("11/01/" + a.Hcode.currentYear)).getDay()) % 7 + 1;
    a.Hcode.dstStart = "03/" + b + "/" + a.Hcode.currentYear;
    a.Hcode.dstEnd = "11/" + c + "/" + a.Hcode.currentYear
})(btg);
if (typeof btg.Hcode === "object") btg.Hcode.getValOnce = new Function("v", "c", "e", "" + "var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime(" + ")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");
if (typeof btg.Hcode === "object") {
    btg.Hcode.getPreviousValue = new Function("v", "c", "el", "" + "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el" + "){if(s.events){i=split(el,',');j=split(s.events,',');for(x in i" + "){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)" + ":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?" + "s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");
    var split = new Function("l", "d", "" + "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x" +
        "++]=l.substring(0,i);l=l.substring(i+d.length);}return a")
};
if (typeof btg.Hcode === "object") {
    btg.Hcode.getPercentPageViewed = new Function("", "" + "var s=this;if(typeof(s.linkType)=='undefined'||s.linkType=='e'){var" + " v=s.c_r('s_ppv');s.c_w('s_ppv',0);return v;}");
    btg.Hcode.getPPVCalc = new Function("", "" + "var s=s_c_il[" + btg.Hcode._in + "],dh=Math.max(Math.max(s.d.body.scrollHeight," + "s.d.documentElement.scrollHeight),Math.max(s.d.body.offsetHeight,s." + "d.documentElement.offsetHeight),Math.max(s.d.body.clientHeight,s.d." + "documentElement.clientHeight)),vph=s.wd.innerHeight||(s.d.documentE" +
        "lement.clientHeight||s.d.body.clientHeight),st=s.wd.pageYOffset||(s" + ".wd.document.documentElement.scrollTop||s.wd.document.body.scrollTo" + "p),vh=st+vph,pv=Math.round(vh/dh*100),cp=s.c_r('s_ppv');if(pv>100){" + "s.c_w('s_ppv','');}else if(pv>cp){s.c_w('s_ppv',pv);}");
    btg.Hcode.getPPVSetup = new Function("", "" + "var s=this;if(s.wd.addEventListener){s.wd.addEventListener('load',s" + ".getPPVCalc,false);s.wd.addEventListener('scroll',s.getPPVCalc,fals" + "e);s.wd.addEventListener('resize',s.getPPVCalc,false);}else if(s.wd" +
        ".attachEvent){s.wd.attachEvent('onload',s.getPPVCalc);s.wd.attachEv" + "ent('onscroll',s.getPPVCalc);s.wd.attachEvent('onresize',s.getPPVCa" + "lc);}");
    btg.Hcode.getPPVSetup()
};
if (typeof btg.Hcode === "object") {
    btg.Hcode.getQueryParam = new Function("p", "d", "u", "" + "var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati" + "on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p" + ".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-" + "1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i=" + "=p.length?i:i+1)}return v");
    btg.Hcode.p_gpv = new Function("k", "u", "" + "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v" +
        "=s.pt(q,'&','p_gvf',k)}return v");
    btg.Hcode.p_gvf = new Function("t", "k", "" + "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T" + "rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s." + "epa(v)}return ''")
};
if (typeof btg.Hcode === "object")
    if (btg.Hcode.getQueryParam("appvi")) {
        btg.Hcode.new_vi_date = new Date;
        btg.Hcode.new_vi_date.setFullYear(btg.Hcode.new_vi_date.getFullYear() + 5);
        btg.Hcode.c_w("app_vi", btg.Hcode.getQueryParam("appvi"), btg.Hcode.new_vi_date);
        btg.Hcode.visitorID = btg.Hcode.c_r("app_vi")
    } else if (btg.Hcode.c_r("app_vi")) btg.Hcode.visitorID = btg.Hcode.c_r("app_vi");
if (typeof btg.Hcode === "object" && btg.config.OmnitureIntegrate && btg.config.OmnitureIntegrate.enabled) {
    btg.Hcode.loadModule("Integrate");
    btg.Hcode.Integrate.onLoad = function() {
        var b = btg.config.OmnitureIntegrate.account,
            e = btg.config.Omniture.account;
        if (!btg.config.Omniture.enableFirstPartyCookie && btg.config.Omniture.enableVisitorNamespace && b && e.indexOf(b) == -1) {
            btg.Hcode.Integrate.add("CopyHit");
            var c = 0;
            btg.Hcode.Integrate.CopyHit.useVars = function(d, f) {
                var a = "",
                    g = btg.Environment.getCnamedDomain();
                if (c ==
                    0) a = window["s_i_" + d.visitorNamespace].src;
                else a = window["s_i_" + d.visitorNamespace + "_" + c].src;
                a = a.replace(d.visitorNamespace + ".112.2o7.net", g);
                a = a.replace(e, b);
                f.beacon(a);
                c++
            }
        }
    };
    btg.Hcode.m_Integrate_c = "var m=s.m_i('Integrate');m.add=function(n,o){var m=this,p;if(!o)o='s_Integrate_'+n;if(!m.s.wd[o])m.s.wd[o]=new Object;m[n]=new Object;p=m[n];p._n=n;p._m=m;p._c=0;p._d=0;p.disable=0;p" + ".get=m.get;p.delay=m.delay;p.ready=m.ready;p.beacon=m.beacon;p.script=m.script;m.l[m.l.length]=n};m._g=function(t){var m=this,s=m.s,i,p,f=(t?'use':'set')+'Vars',tcf;for(i=0;i<m.l.length;i++){p=m[m." +
        "l[i]];if(p&&!p.disable&&p[f]){if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','p','f','var e;try{p[f](s,p)}catch(e){}');tcf(s,p,f)}else p[f](s,p)}}};m._t=function(){this._g(1)};m._fu=func" + "tion(p,u){var m=this,s=m.s,v,x,y,z,tm=new Date;if(u.toLowerCase().substring(0,4) != 'http')u='http://'+u;if(s.ssl)u=s.rep(u,'http:','https:');p.RAND=Math&&Math.random?Math.floor(Math.random()*10000" + "000000000):tm.getTime();p.RAND+=Math.floor(tm.getTime()/10800000)%10;x=0;while(x>=0){x=u.indexOf('[',x);if(x>=0){y=u.indexOf(']',x);if(y>x){z=u.substring(x+1,y);if(z.length>2&&z.substring(0,2)=='s." +
        "'){v=s[z.substring(2)];if(!v)v=''}else{v=''+p[z];if(!(v==p[z]||parseFloat(v)==p[z]))z=0}if(z) {u=u.substring(0,x)+s.rep(escape(v),'+','%2B')+u.substring(y+1);x=y-(z.length-v.length+1)} else {x=y}}}" + "}return u};m.get=function(u,v){var p=this,m=p._m;if(!p.disable){if(!v)v='s_'+m._in+'_Integrate_'+p._n+'_get_'+p._c;p._c++;p.VAR=v;p._d++;m.s.loadModule('Integrate:'+v,m._fu(p,u),0,1,p._n)}};m.delay" + "=function(){var p=this;if(p._d<=0)p._d=1};m.ready=function(){var p=this,m=p._m;p._d=0;if(!p.disable)m.s.dlt()};m._d=function(){var m=this,i,p;for(i=0;i<m.l.length;i++){p=m[m.l[i]];if(p&&!p.disable&" +
        "&p._d>0)return 1}return 0};m._x=function(d,n){var p=this[n],x;if(!p.disable){for(x in d)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))p[x]=d[x];p._d--}};m.beacon=function(u){var p=this,m" + "=p._m,s=m.s,imn='s_i_'+m._in+'_Integrate_'+p._n+'_'+p._c,im;if(!p.disable&&s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){p._c++;im=s.wd[imn]=new Image;im.src=m._fu(p,u)}};m.s" + "cript=function(u){var p=this,m=p._m;if(!p.disable)m.s.loadModule(0,m._fu(p,u),0,1)};m.l=new Array;if(m.onLoad)m.onLoad(s,m)";
    btg.Hcode.m_i("Integrate")
};
btg.Loadtime = {
    initTime: Number(new Date),
    initFlag: 0,
    timeRangeArr: [0, 0.9, 2.9, 4.9, 6.9, 9.9, 12.9, 15.9, 19.9, 24.9, 30],
    reportURL: "http://{suiteName}.112.2o7.net/b/ss/{suiteName}/1/H.1-pdv-2/{ord}?pageName={siteName}&c11=PLAYER-LOAD-TEST&c12={delta}&events=event1&products=;;;;event1={playerLoadTime}",
    suiteName: "viarnd",
    siteNameVal: "media.mtvnservices.com",
    timerStateCheck: function(a) {
        if (typeof siteName != "undefined") this.siteNameVal = siteName;
        if (a == "connected" && this.initFlag == 0) {
            this.initFlag++;
            var d = a = (Number(new Date) -
                    this.initTime) / 1E3,
                a = a > 30 ? 30 : a,
                c = 0;
            switch (a) {
                case 0:
                    c = "0-1";
                    break;
                case 30:
                    c = "30";
                    break;
                default:
                    for (var b = 1, e = this.timeRangeArr.length; b < e; b++)
                        if (this.timeRangeArr[b - 1] < a && this.timeRangeArr[b] >= a) {
                            c = Math.ceil(this.timeRangeArr[b - 1]) + "-" + Math.ceil(this.timeRangeArr[b]);
                            break
                        }
            }
            this.reportURL = this.reportURL.replace(/http:/, "https:" == document.location.protocol ? "https:" : "http:").replace(/\{suiteName\}/g, this.suiteName).replace(/\{ord\}/, Math.floor(Math.random() * 1E12)).replace(/\{siteName\}/g, this.siteNameVal).replace(/\{delta\}/,
                c).replace(/\{playerLoadTime\}/, d);
            (new Image).src = this.reportURL
        }
    }
};
btg.MediaPlayer = {
    context: null,
    playerCommandQueue: null,
    isBrightcove: false,
    isPlayerAvailable: false,
    isHtml5: false,
    html5MetaData: {},
    init: function(a) {
        this.context = a;
        this.playerCommandQueue = new btg.QueueManager({
            id: "btg.MediaPlayer.playerCommandQueue",
            timeToWait: 100,
            maxNumItems: 10,
            maxElapsed: 1E3,
            handler: this.execute
        })
    },
    playStarted: false,
    players: [],
    addPlayer: function(a, b) {
        var c = this.isHtml5 ? a.id : a;
        this.players[c] = new this.Player(a, b);
        return this.players[c]
    },
    setEndSlateClick: function(a) {
        var b = btg.Cookie.set;
        b("mtvn_btg_esclicked", a)
    },
    getEndSlateClick: function() {
        return btg.Cookie.read("mtvn_btg_esclicked")
    },
    PlayerController: function(a, b) {
        return this.addPlayer(a, b)
    },
    pause: function() {
        var a = btg.MediaPlayer,
            b;
        for (b in a.players)
            if (a.players.hasOwnProperty(b)) a.players[b].player.pause()
    },
    unpause: function() {
        var a = btg.MediaPlayer,
            b;
        for (b in a.players)
            if (a.players.hasOwnProperty(b))
                if (a.players[b].player.unpause) a.players[b].player.unpause();
                else if (a.players[b].player.play) a.players[b].player.play()
    },
    execute: function(a) {
        var b =
            btg.MediaPlayer;
        if (b.playStarted || b.isPlayerAvailable) switch (a) {
            case "unpause":
                b.unpause();
                break;
            case "pause":
                b.pause()
        } else b.playerCommandQueue.queue.push(a)
    },
    reportingInit: function() {
        try {
            btg.config.Omniture.videoViewEventDisable = true;
            btg.Demdex.sendIdSyncCall()
        } catch (a) {}
    },
    getFirstPartyServer: function() {
        var a = null;
        if (btg.config.Omniture.enableFirstPartyCookie) a = btg.Environment.getCnamedDomain();
        return a
    },
    getVmnUUID: function() {
        return btg.Cookie.read("vmn_uuid")
    },
    setDemdexFWSegment: function() {
        var a =
            btg.Demdex.getFWSegment(),
            b = btg.MediaPlayer;
        if (a)
            for (var c in b.players)
                if (b.players.hasOwnProperty(c) && b.players[c].player && b.players[c].player.setDemdexFWSegment) b.players[c].player.setDemdexFWSegment(a)
    },
    Player: function(a, b) {
        var c = btg.Controller,
            g = btg.Cookie,
            f = btg.MediaPlayer,
            i = btg.config;
        this.playerId = this.isHtml5 ? a.id : a;
        this.player = this.lastGuid = null;
        this.playerLoaded = false;
        this.onLoaded = function() {
            this.player = f.getPlayerObject(a);
            this.playerLoaded = true;
            if (!btg.MediaPlayer.isBrightcove) {
                f.addListeners(this.player);
                if (typeof window[b] == "function") b(this)
            }
            btg.MediaPlayer.isPlayerAvailable = true
        };
        this.onDump = function() {};
        this.dump = function() {
            var a = "";
            if (this.playerLoaded) a = this.player.getLogDump();
            else a = "player not loaded";
            this.onDump(a)
        };
        this.onPlayHeadUpdate = function(a) {
            a = f.isHtml5 ? a.data : a;
            if ((a = a == -1 || a == null || typeof a == "undefined" ? 1.5 : a) && a > 1)
                if (!f.playStarted) {
                    f.playStarted = true;
                    f.playerCommandQueue.init()
                }
        };
        this.onMetaData = function(a) {
            if (btg.MediaPlayer.isHtml5) try {
                html5MetaData = a = {
                    guid: a.data.rss.guid,
                    contentType: a.data.rss.group.categories.contentType
                }
            } catch (b) {}
            if (location.search.match(/showMetaData\=true/)) {
                str = "";
                for (m in a) str += m + ": " + a[m] + "\n";
                alert(this.lastGuid + "\n\n\n" + str)
            }
            var d = "",
                e = document.location.search,
                h = e.toLowerCase().indexOf("xrs=mpes_") != -1 ? true : false,
                j = a.contentType === "c3_adpod";
            if (h)
                for (var e = e.replace(/^\?/g, "").split("&"), h = 0, k = e.length; h < k; h++)
                    if (e[h].split("=")[0] == "xrs") d = btg.String.isDefined(e[h].split("=")[1]) ? e[h].split("=")[1] : "";
            if (a.guid && this.lastGuid !== a.guid) {
                d = {
                    linkName: "Video View",
                    linkType: "o",
                    eVar28: a.contentType,
                    events: "event15" + (f.getEndSlateClick() == "true" ? ",event45" : ""),
                    campaign: d
                };
                if (typeof i.Omniture.enableTestAndTargetTrial != "undefined" && i.Omniture.enableTestAndTargetTrial) {
                    (e = g.read("mtvn_btg_tnt")) ? e.split("_")[0]: "";
                    e ? e.split("_")[1] : "false"
                }
                g.set("mtvn_btg_tnt", "");
                if (btg.globalvars.FW_BLOCKED) {
                    d.events += btg.String.isDefined(d.events) && d.events.lastIndexOf(",") == d.events.length - 1 ? "event79" : ",event79";
                    d.eVar25 = "Freewheel Blocked"
                }
                if (typeof i.Omniture.videoViewEventDisable !=
                    "undefined" && i.Omniture.videoViewEventDisable) {
                    if (btg.globalvars.FW_BLOCKED) {
                        d = {
                            linkName: "Freewheel Blocked",
                            linkType: "o",
                            eVar25: "Freewheel Blocked",
                            events: "event79"
                        };
                        c.sendLinkEvent(d)
                    }
                } else {
                    if (typeof btg.UserSegment != "undefined") {
                        btg.UserSegment.add(f.context, "VideoViewer");
                        if (j) btg.UserSegment.add(btg.MediaPlayer.context, "C3VideoViewer")
                    }
                    f.setEndSlateClick("false");
                    c.sendLinkEvent(d)
                }
            }
            this.lastGuid = a.guid
        };
        this.onEndslateLoad = function() {
            if (typeof this.onEndslateFired != "undefined") return;
            else this.onEndslateFired =
                true;
            if (typeof btg.UserSegment != "undefined") btg.UserSegment.add(f.context, "EndslateViewer");
            c.sendLinkEvent({
                linkName: "Endslate View",
                linkType: "o",
                events: "event44"
            })
        }
    },
    getPlayerObject: function(a) {
        if (btg.MediaPlayer.isHtml5) a = a;
        else if (btg.MediaPlayer.isBrightcove) a = bcPlayer.getPlayer(a).getModule(APIModules.VIDEO_PLAYER);
        else {
            if (navigator.appName.indexOf("Microsoft")) a = window[a] ? window[a] : document[a] ? document[a] : null;
            else a = document[a] ? document[a] : window[a] ? window[a] : null;
            if (a && typeof a.length != "undefined")
                for (var b in a)
                    if (typeof a[b].pause !=
                        "undefined") {
                        a = a[b];
                        break
                    }
        }
        return a
    },
    addListeners: function(a) {
        if (typeof a === "object")
            if (btg.MediaPlayer.isHtml5 && typeof a.on === "function") {
                a.on("metadata", btg.MediaPlayer.players[a.id].onMetaData);
                a.on("playheadUpdate", btg.MediaPlayer.players[a.id].onPlayHeadUpdate)
            } else if (!btg.MediaPlayer.isBrightcove && typeof a.addEventListener === "function") {
            a.addEventListener("METADATA", 'btg.MediaPlayer.players["' + a.id + '"].onMetaData');
            a.addEventListener("ENDSLATE_CLICK", 'btg.MediaPlayer.players["' + a.id + '"].onEndslateLoad');
            a.addEventListener("PLAYHEAD_UPDATE", 'btg.MediaPlayer.players["' + a.id + '"].onPlayHeadUpdate');
            if (typeof a.addReportingEventListener === "function") {
                a.addReportingEventListener("DEMDEXVIDEOSTARTCALL", "btg.Demdex.sendPageCall");
                a.addReportingEventListener("DEMDEXVIDEOENDCALL", "btg.Demdex.sendPageCall");
                a.addReportingEventListener("DEMDEXEMBED", "btg.Demdex.sendSocialCall");
                a.addReportingEventListener("DEMDEXLINK", "btg.Demdex.sendSocialCall");
                a.addReportingEventListener("DEMDEXSHARE", "btg.Demdex.sendSocialCall");
                a.addReportingEventListener("REPORTINGINIT", "btg.MediaPlayer.reportingInit");
                a.addReportingEventListener("FIRSTPARTYSERVER", "btg.MediaPlayer.getFirstPartyServer");
                a.addReportingEventListener("VMNUUID", "btg.MediaPlayer.getVmnUUID");
                a.addReportingEventListener("ENDSLATECLICK", "btg.MediaPlayer.setEndSlateClick")
            }
        }
    },
    onWindowLoaded: function(e) {
        var self = btg.MediaPlayer;
        //If mtvnPlayerLoaded already exists, store it in a variable.
        var oldMtvnPlayerLoaded = window["mtvnPlayerLoaded"];
        //Creates mtvnPlayerLoaded. If oldMtvnPlayerLoaded was defined, it calls it first, then if an id was passed, it fires it's Player object's onLoaded event.
        var mtvnPlayerLoaded = function(player) {
            var id;
            if (btg.Object.isDefined(player)) {
                self.isHtml5 = true;
                id = player.id;
                if (player.isFlash) {
                    self.isHtml5 = false;
                    player = player.id;
                }
            } else id = player;
            if (typeof oldMtvnPlayerLoaded === "function") oldMtvnPlayerLoaded(id);
            if (!self.isHtml5 && typeof document.getElementById(id) == "undefined") return;
            if (typeof self.players[id] == 'undefined') self.addPlayer(player);
            self.players[id].onLoaded();
        };
        //Copy the mtvnPlayerLoaded function to the window object so that it can live in the global space where the media player SWF can find it.
        window["mtvnPlayerLoaded"] = mtvnPlayerLoaded;
    }
};
try {
    var onTemplateLoaded = function(a) {
        btg.MediaPlayer.isBrightcove = true;
        btg.MediaPlayer.addPlayer(a);
        btg.MediaPlayer.players[a].onLoaded()
    };
    btg.MediaPlayer.onWindowLoaded();
    var MTVNPlayer = MTVNPlayer || {};
    MTVNPlayer.addCallback = function(a) {
        this.onAPIReady = function(b) {
            return b ? function() {
                b();
                a()
            } : a
        }(this.onAPIReady)
    };
    MTVNPlayer.addCallback(function(a) {
        return function() {
            MTVNPlayer.onPlayer(a)
        }
    }(mtvnPlayerLoaded))
} catch (e$$4) {};
btg.Preload = function() {
    this.playUpUrl = location.protocol + "//media.mtvnservices.com/player/images/Button_playBig_upSkin.png";
    this.playOverUrl = location.protocol + "//media.mtvnservices.com/player/images/Button_playBig_overSkin.png";
    this.playButtonWidth = 92;
    this.playButtonHeight = 70;
    this.embedCount = 0;
    this.getElementsByClassName = function(a, d) {
        for (var e = [], c = new RegExp("\\b" + d + "\\b"), b = document.getElementsByTagName(a), f = 0, h = b.length; f < h; f++)
            if (c.test(b[f].className)) e.push(b[f]);
        return e
    };
    this.attachClickToWrappers =
        function(a, d, e) {
            for (var a = this.getElementsByClassName("div", a), c = 0, b = a.length; c < b; c++) this.onClickWrapper(a[c], d, e)
        };
    this.attachToWrappers = function(a, d, e) {
        for (var a = this.getElementsByClassName("div", a), c = 0, b = a.length; c < b; c++) this.attachToWrapper(a[c], d, e)
    };
    this.attachToWrapper = function(a, d, e) {
        var c = this.embedCount,
            b = "pUp" + this.embedCount,
            f = "pOver" + this.embedCount,
            h = a.getElementsByTagName("img")[0];
        a.style.position = "relative";
        var g = document.createElement("img");
        g.src = this.playOverUrl;
        g.style.position =
            "absolute";
        g.style.zIndex = 15;
        g.style.left = h.width / 2 - this.playButtonWidth / 2;
        g.style.top = h.height / 2 - this.playButtonHeight / 2;
        g.style.display = "none";
        g.className = "pOver";
        g.id = f;
        var i = document.createElement("img");
        i.src = this.playUpUrl;
        i.style.position = "absolute";
        i.style.zIndex = 15;
        i.style.left = h.width / 2 - this.playButtonWidth / 2;
        i.style.top = h.height / 2 - this.playButtonHeight / 2;
        i.style.display = "block";
        i.className = "pUp";
        i.id = b;
        a.m = new Object;
        a.m.idNumber = c;
        a.m.overIdName = f;
        a.m.upIdName = b;
        a.appendChild(g);
        a.appendChild(i);
        this.onClickWrapper(a, d, e);
        this.onEnterWrapper(a);
        this.onExitWrapper(a);
        this.embedCount++
    };
    this.onEnterWrapper = function(a) {
        a.onmouseover = function() {
            document.getElementById(this.m.overIdName).style.display = "block";
            document.getElementById(this.m.upIdName).style.display = "none"
        }
    };
    this.onExitWrapper = function(a) {
        a.onmouseout = function() {
            document.getElementById(this.m.overIdName).style.display = "none";
            document.getElementById(this.m.upIdName).style.display = "block"
        }
    };
    this.createEmbedTag = function(a, d, e, c) {
        var b =
            document.createElement("embed");
        b.setAttribute("src", location.protocol + "//media.mtvnservices.com/" + a);
        b.setAttribute("height", d);
        b.setAttribute("width", e);
        b.setAttribute("id", a);
        b.setAttribute("flashVars", c);
        b.setAttribute("wmode", "window");
        b.setAttribute("allowFullScreen", true);
        b.setAttribute("allowScriptAccess", "always");
        b.setAttribute("type", "application/x-shockwave-flash");
        b.style.backgroundColor = "black";
        return b
    };
    this.onClickWrapper = function(a, d, e) {
        a.onclick = function() {
            var c = this.id,
                b;
            if (this.getElementsByTagName("q").length >
                0) b = this.getElementsByTagName("q")[0].innerHTML;
            if (this.getAttribute("flashVars")) b = this.getAttribute("flashVars");
            if (d == 0) {
                var f = this.getElementsByTagName("img")[0];
                d = f.height;
                e = f.width
            }
            pOver = document.getElementById(this.m.overIdName);
            this.removeChild(pOver);
            pUp = document.getElementById(this.m.upIdName);
            this.removeChild(pUp);
            for (var f = this.getElementsByTagName("img"), h = 0, g = f.length; h < g; h++) this.removeChild(f[h]);
            this.appendChild(MTVNPlayerPreload.createEmbedTag(c, d, e, b));
            a.onmouseout = function() {};
            a.onmouseover = function() {};
            a.onclick = function() {}
        }
    }
}();
btg.EmbedAPI = function() {
    var e = btg.Cookie,
        g = btg.String,
        h = btg.Controller,
        d = {
            performance: {
                reporting: "prop37",
                isPiggybacking: false
            }
        },
        i = function(b, a) {
            a.on(b, function(c) {
                var a = {};
                if (b === "performance")
                    if (c.data && c.data.timeout > 0) c = "timeout:" + c.data.timeout;
                    else return;
                else c = g.isDefined(c.data) ? c.data : "";
                if (d[b].isPiggybacking) e.set("btg_embed_api_" + b, c);
                else {
                    a[d[b].reporting] = c;
                    a.linkName = b;
                    h.sendLinkEvent(a)
                }
            })
        };
    window._mtvnPlayerReady = window._mtvnPlayerReady || [];
    window._mtvnPlayerReady.push(function(b) {
        btg.EmbedAPI.setupListeners(b)
    });
    return {
        setupListeners: function(b) {
            for (var a in d)
                if (d.hasOwnProperty(a)) i(a, b)
        },
        init: function() {},
        run: function(b) {
            var a, c, f;
            for (a in d)
                if (d.hasOwnProperty(a) && d[a].isPiggybacking) {
                    c = "btg_embed_api_" + a;
                    f = e.read(c);
                    if (f != null) {
                        b[d[a].reporting] = f;
                        e.remove(c)
                    }
                }
            return b
        }
    }
}();
btg.Facebook = new function() {
    var b = null;
    this.init = function() {
        if (!btg.Object.isConfigDefined(btg.config.Facebook)) return false;
        d()
    };
    this.onCommented = function() {
        var a = {
            linkName: "Community - Comment",
            events: "event88",
            eVar65: "Using non-flux solution -- no Content ID"
        };
        if (typeof window.Widgets4Context != "undefined") a.eVar51 = "facebook";
        var c;
        if (!b) b = btg.ReportingManager.getOmniture().getAttribute("pageName");
        c = b;
        a.linkType = "o";
        a.eVar60 = c;
        a.pageName = c;
        btg.Controller.sendLinkEvent(a)
    };
    var d = function() {
        if (typeof FB !=
            "undefined") FB.Event.subscribe("comment.create", function() {
            btg.Facebook.onCommented()
        })
    }
};




//Attempting to include CODA/builds/3/Ads_DFP.js
btg.AdManager = function() {
    return {
        init: function() {
            btg.DoubleClick.init();
            return this
        },
        getAdUrl: function() {
            btg.Error.log("CODA: DFP ads implementation does not support getAdUrl() method - for On Demand ads implementation use createAd() method instead");
            return null
        },
        placeAd: function(a) {
            var b = a.containerDOMID ? a.containerDOMID : document.body;
            if (btg.isDOMLoaded) {
                btg.config.DoubleClick.onDemand = true;
                return btg.DoubleClick.createAd(a, b)
            } else return btg.DoubleClick.writeAdSlot(a)
        }
    }
}();
btg.SurrogateAd = new function() {
    var b = {
        poe: {
            size: "6x6",
            cookieName: "vmn_poe",
            contentType: "adj",
            position: "atf",
            isAllowed: function() {
                if (typeof btg.config.enablePOE == "undefined" || !btg.config.enablePOE) return false;
                if (typeof btg.config.DoubleClick.keyValues != "undefined" && /\!category\=poe/.test(btg.config.DoubleClick.keyValues)) return false;
                return true
            },
            setKeyValues: function() {
                if (typeof btg.config.LocalAdvisory == "undefined" || !btg.config.LocalAdvisory.enabled) return;
                if (!btg.Number.isInt(btg.config.LocalAdvisory.phase) ||
                    btg.config.LocalAdvisory.phase == 0) return;
                if (/vmn_la_freq=1/.test(document.cookie)) return;
                var a = new Date,
                    b = a.getTime() + 7200 * 1E3;
                a.setTime(b);
                document.cookie = "vmn_la_freq=1" + "; expires=" + a.toGMTString() + "; path=/";
                if (btg.config.LocalAdvisory.useStaticCreative) {
                    if (a = document.getElementById(btg.config.LocalAdvisory.staticCreativeDomID)) {
                        a.style.display = "block";
                        a.style.visibility = "visible"
                    }
                    return
                }
                a = location.hostname;
                if (/^www./i.test(a)) a = a.substring(4);
                btg.AdManager.addKeyValues("host=" + a);
                btg.AdManager.addKeyValues("phase=" +
                    btg.config.LocalAdvisory.phase);
                if (typeof vmn_btg_ESIVars != "undefined") btg.AdManager.addKeyValues("provider=" + vmn_btg_ESIVars.asnum)
            }
        }
    };
    this.load = function(a) {
        if (!btg.Object.isConfigDefined(btg.config.DoubleClick)) return;
        btg.Controller.init();
        if (btg.String.isDefined(a) && btg.Object.isDefined(b[a]) && btg.Object.isConfigDefined(btg.config.DoubleClick)) {
            a = b[a];
            if (typeof a.isAllowed != "undefined" && !a.isAllowed()) return;
            if (typeof a.setKeyValues == "function") a.setKeyValues();
            a.isSurrogate = true;
            if (btg.String.isDefined(a.cookieName)) {
                if (!btg.String.isDefined(btg.Cookie.read(a.cookieName))) {
                    if (btg.config.hasAdsDFP) btg.DoubleClick.setSurrogateAd(a);
                    else btg.AdManager.placeAd(a);
                    btg.Cookie.set(a.cookieName, a.size)
                }
            } else btg.AdManager.placeAd(a)
        }
    }
};
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
btg.DoubleClick = function(r, j) {
    var t = btg.DOM,
        e = btg.String.isDefined,
        u = btg.Number.isInt,
        m = btg.Object.isDefined,
        v = btg.Object.isArray,
        w = btg.Object.isConfigDefined,
        x = btg.config,
        c = x.DoubleClick,
        y = false,
        z = true,
        q = {
            trigger: false
        },
        A = false,
        o = btg.Error.log,
        M = e(c.networkID) ? c.networkID : "5592226",
        N = btg.Environment.userAgent.isMobile || btg.Environment.userAgent.isTablet,
        C = 3E4,
        D = false,
        E = null,
        n = {},
        F = false,
        O = {
            "1x1": null,
            "1x2": null,
            "3x3": null,
            "5x5": null,
            "6x6": {
                cookie: "vmn_poe"
            }
        },
        G = 1,
        H = 0,
        P = function(a) {
            var b = j.createElement("script");
            b.async = true;
            b.type = "text/javascript";
            b.src = ("https:" == j.location.protocol ? "https:" : "http:") + "//" + a;
            a = j.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(b, a)
        },
        I = function() {
            P("www.googletagservices.com/tag/js/gpt.js");
            I = function() {}
        },
        s = null,
        Q = function(a) {
            var b = "unk";
            if (e(a)) {
                a = t.getOffsetTop(j.getElementById(a));
                b = t.getContentVisibleHeight();
                b = a <= b ? "atf" : "btf"
            }
            return b
        },
        R = function(a) {
            if (e(a)) googletag.cmd.push(function() {
                googletag.display(a);
                btg.DoubleClick.createdAdsRefreshQueue.push(a);
                if (!btg.DoubleClick.createdAdsQueueActive) {
                    btg.DoubleClick.createdAdsQueueActive = true;
                    r.setTimeout("btg.DoubleClick.createdAdsRefresh()", 200)
                }
            })
        },
        S = function() {
            for (var a = btg.DoubleClick.slots, b = 0, f = a.length; b < f; b++) {
                var d = a[b].el.id;
                googletag.cmd.push(function() {
                    googletag.display(d)
                })
            }
        },
        T = function(a) {
            var b = btg.DoubleClick.slots;
            if (e(a) && m(j.getElementById(a)))
                for (var f = 0, d = b.length; f < d; f++) {
                    var k = b[f];
                    if (k.el.id === a) return k
                }
            return null
        },
        U = function(a) {
            btg.DoubleClick.rubiconRequestQueue.addToQueue(a);
            var a = btg.Rubicon.getKeyValues(a),
                b = null;
            if (a) {
                a = a.replace(/^[\s;]*|[\s;]*$/g, "");
                b = a.split(";")
            }
            return b
        },
        J = function() {
            V();
            var a = [];
            if (e(c.keyValues)) a = h(c.keyValues, a);
            if (w(btg.config.Demdex) && btg.Demdex) {
                var b = function() {
                    btg.Demdex.setData();
                    var a = btg.Demdex.getSegment("dfp");
                    if (!e(a)) return null;
                    return a
                }();
                if (e(b)) a = h(b, a)
            }
            if (w(btg.config.Criteo) && btg.Criteo) {
                b = function() {
                    var a = btg.Criteo.getKeyValue();
                    if (e(a)) {
                        if (a.length > 64) {
                            new btg.Alert("Criteo targeting params over max length limit: " + a,
                                2);
                            a = a.substring(0, 64);
                            a = a.substring(0, a.lastIndexOf(";"))
                        }
                        return a
                    }
                    return null
                }();
                if (e(b)) a = h(b, a)
            }
            if (btg.config.requireCOPPACompliance != true) {
                b = btg.Cookie.read("vmn_uuid");
                if (e(b)) a = h("u=" + b, a)
            }
            if (btg.globalvars.IS_TOP_ACCESSIBLE) {
                b = btg.String.queryStringToObject(top.location.search.toLowerCase()).testmode;
                if (e(b)) a = h("testmode=" + b)
            }
            for (var f in a) {
                if (!a.hasOwnProperty(f)) continue;
                (function(a, b) {
                    googletag.cmd.push(function() {
                        googletag.pubads().setTargeting(a, b)
                    })
                })(f, a[f])
            }
            if (e(c.exclusionCategories)) {
                googletag.cmd.push(function() {
                    googletag.pubads().clearCategoryExclusions()
                });
                var a = c.exclusionCategories.split(","),
                    d;
                for (d in a) {
                    if (!a.hasOwnProperty(d)) continue;
                    (function(a) {
                        googletag.cmd.push(function() {
                            googletag.pubads().setCategoryExclusion(a)
                        })
                    })(a[d])
                }
            }
        },
        V = function() {
            if (typeof vmn_page_data == "undefined") return;
            var a = "",
                b = false,
                f;
            for (f in vmn_page_data.mappings["ad-unit"]) {
                if (!vmn_page_data.mappings["ad-unit"].hasOwnProperty(f)) continue;
                if (b) a += "/";
                var b = true,
                    d = vmn_page_data.mappings["ad-unit"][f];
                if (!e(d)) {
                    a = "";
                    o("CODA: Empty ad unit mapping at '" + f + "'.");
                    break
                }
                if (d.charAt(0) ===
                    "@") {
                    d = vmn_page_data.metadata[d.substring(1)];
                    if (!e(d)) {
                        a = "";
                        o("CODA: Bad ad unit mapping at '" + f + "'.");
                        break
                    }
                    d = d
                }
                a += d
            }
            if (vmn_page_data.metadata.is_main) a += "/" + "home";
            if (e(a)) c.adUnit = a;
            a = "";
            b = e(c.keyValues);
            for (f in vmn_page_data.mappings["key-values"]) {
                if (!vmn_page_data.mappings["key-values"].hasOwnProperty(f)) continue;
                if (b) a += ";";
                b = true;
                d = vmn_page_data.mappings["key-values"][f];
                if (d.charAt(0) == "@") {
                    d = vmn_page_data.metadata[d.substring(1)];
                    if (!e(d) && !u(d)) continue;
                    d = d
                }
                a += f + "=" + d
            }
            if (e(a))
                if (e(c.keyValues)) c.keyValues +=
                    a;
                else c.keyValues = a;
            if (e(vmn_page_data.mappings["exclusion-categories"])) c.exclusionCategories = vmn_page_data.mappings["exclusion-categories"];
            a: {
                if (typeof vmn_page_data == "undefined") break a;
                if (m(vmn_page_data.settings) && vmn_page_data.settings.reload) {
                    if (u(vmn_page_data.settings.reload_interval) && vmn_page_data.settings.reload_interval >= 1E4) C = vmn_page_data.settings.reload_interval;
                    if (v(vmn_page_data.settings.slots)) s = vmn_page_data.settings.slots;
                    else s = "all";
                    if (vmn_page_data.settings.autoRefreshByVisibility ===
                        true) F = true;
                    if (!D) {
                        D = true;
                        E = setInterval("btg.DoubleClick.refresh();", C)
                    }
                }
            }
            if (m(vmn_page_data.settings) && vmn_page_data.settings.disableAutoSlots) y = true
        },
        h = function(a, b) {
            if (e(a)) a = a.split(";");
            else if (!v(a)) return;
            if (!m(b)) b = {};
            for (var f = 0, d = a.length; f < d; f++) {
                var k = a[f];
                if (k.indexOf("=") == -1) continue;
                var k = k.split("="),
                    B = k[0],
                    k = k[1].split(",");
                if (!b[B]) b[B] = k;
                else
                    for (var c = 0, j = k.length; c < j; c++) b[B].push(k[c])
            }
            return b
        },
        K = function() {
            for (var a in n) {
                if (!n.hasOwnProperty(a)) continue;
                setInterval("btg.DoubleClick.refresh('" +
                    n[a] + "');", a);
                delete n[a]
            }
        },
        L = function(a) {
            var b = [],
                f = a.length,
                d, e;
            if (z)
                for (d = 0; d < f; d++) {
                    e = j.getElementById(a[d].el.id);
                    if (e != null && t.isElementVisible(e)) b.push(a[d])
                }
            return b
        },
        W = function() {
            var a = false,
                b, f, d = function(a) {
                    googletag.cmd.push(function() {
                        googletag.pubads().setLocation(a.coords.latitude, a.coords.longitude)
                    })
                },
                e = function(a) {
                    o("CODA: Geolocation error " + a.code + ": " + a.message)
                };
            if (x.requireCOPPACompliance) return a;
            if (m(vmn_page_data.settings)) {
                if (vmn_page_data.settings.lat) b = parseFloat(vmn_page_data.settings.lat);
                if (vmn_page_data.settings["long"]) f = parseFloat(vmn_page_data.settings["long"])
            }
            if (typeof b === "number" && typeof f === "number")
                if ((b !== 0 || f !== 0) && !isNaN(b) && !isNaN(f)) {
                    googletag.cmd.push(function() {
                        googletag.pubads().setLocation(b, f)
                    });
                    a = true
                }
            if (!a && c.enableNavigatorGeolocation)
                if (r.navigator.geolocation) r.navigator.geolocation.getCurrentPosition(d, e);
            return a
        };
    return {
        slots: [],
        createdAdsRefreshQueue: [],
        createdAdsQueueActive: false,
        reloadableGroupSlots: [],
        hasBeenInitialized: false,
        createdAdsRefresh: function() {
            btg.DoubleClick.refresh(btg.DoubleClick.createdAdsRefreshQueue.join(","));
            btg.DoubleClick.createdAdsRefreshQueue = [];
            btg.DoubleClick.createdAdsQueueActive = false;
            K()
        },
        init: function() {
            if (btg.DoubleClick.hasBeenInitialized) return;
            btg.DoubleClick.hasBeenInitialized = true;
            btg.DOM.Events.addListener(r, "focus", function() {
                z = true
            });
            btg.DOM.Events.addListener(r, "blur", function() {
                z = false
            });
            I();
            if (c.hasOwnProperty("amazonAdsEnabled") && c.amazonAdsEnabled && btg.config.requireCOPPACompliance != true) {
                A = true;
                amznads.getAds(c.amazonAdsID)
            }
            googletag.cmd.push(function() {
                googletag.pubads().addEventListener("slotRenderEnded",
                    function(a) {
                        btg.Events.GPT_SLOT_RENDER_ENDED.fire(a.slot.el.id, a.isEmpty, a)
                    })
            });
            J();
            W();
            if (c.auto == true)
                if (btg.isDOMLoaded) btg.DoubleClick.createAdsFromMarkup();
                else t.Events.addListener(j, "DOMContentLoaded", function() {
                    btg.DoubleClick.createAdsFromMarkup()
                });
            return this
        },
        createAd: function(a, b) {
            if (c.onDemand != true) {
                o("CODA: To create Ad on demand, btg.config.DoubleClick.onDemand has to be set to true!");
                return
            }
            if (!btg.DoubleClick.hasBeenInitialized) this.init();
            else J();
            var f = this.appendAdSlot(a, b);
            googletag.cmd.push(function() {
                googletag.pubads().collapseEmptyDivs();
                googletag.pubads().enableAsyncRendering();
                googletag.pubads().enableSingleRequest();
                googletag.pubads().disableInitialLoad();
                googletag.enableServices();
                R(f)
            });
            if (A) amznads.setTargetingForGPTAsync("amznslots");
            if (q.trigger) this.createAd(q.dataObj, j.body);
            return this
        },
        setSurrogateAd: function(a) {
            q.trigger = true;
            q.dataObj = a
        },
        createAdsFromMarkup: function() {
            if (!btg.DoubleClick.hasBeenInitialized) this.init();
            if (q.trigger) this.appendAdSlot(q.dataObj,
                j.body);
            var a = j.querySelectorAll("div[id][data-ad-sizes]");
            if (!m(a) || a.length < 1) return;
            for (var b = 0, f = a.length; b < f; b++) this.defineAdSlot(a.item ? a.item(b) : a[b]);
            K();
            googletag.cmd.push(function() {
                googletag.pubads().collapseEmptyDivs();
                googletag.pubads().enableAsyncRendering();
                googletag.pubads().enableSingleRequest();
                googletag.enableServices();
                S()
            });
            if (A) amznads.setTargetingForGPTAsync("amznslots");
            this.createAdsFromMarkup = function() {
                return false
            }
        },
        defineAdSlot: function(a) {
            var b = true,
                f = false,
                d = a.id,
                k =
                null;
            (function(a) {
                var l = a.getAttribute("data-ad-unit");
                if (!e(l) && e(c.adUnit)) l = c.adUnit;
                else {
                    o("CODA: DoubleClick: Default adUnit not defined");
                    return
                }
                l = l.split("/");
                if (!(new RegExp("(.com|" + "_web" + "|" + "_mob" + "|" + "_app" + ")$")).test(l[0]) && c.disableDeviceManagement !== true)
                    if (x.isApp) l[0] += "_app";
                    else if (N) l[0] += "_mob";
                else l[0] += "_web";
                l.unshift(M);
                var l = l.join("/"),
                    l = l.replace(/'|,|"|~|@|#|\$|%|\^|&|\?|\{|\}|\[|\]|\|/g, ""),
                    l = l.replace(/\s/g, "_").toLowerCase(),
                    m = new Array,
                    g = a.getAttribute("data-ad-keyValues");
                if (e(g)) m = g.split(";");
                var p = a.getAttribute("data-ad-sizes");
                if (e(p))
                    for (var p = p.indexOf(";") > 0 ? p.split(";") : p.split(","), g = 0, r = p.length; g < r; g++) {
                        var h = O[p[g]];
                        if (typeof h != "undefined") {
                            b = false;
                            a.setAttribute("style", "position:absolute;visibility:hidden");
                            if (h != null)
                                if (e(h.cookie) && e(btg.Cookie.read(h.cookie)) && q.trigger === false) return;
                                else {
                                    btg.Cookie.set(h.cookie, "1");
                                    q.trigger = false
                                }
                        }
                        size = p[g].split("x");
                        size[0] = parseInt(size[0]);
                        size[1] = parseInt(size[1]);
                        p[g] = size
                    }
                g = parseInt(a.getAttribute("data-ad-reload-interval"));
                if (u(g))
                    if (g >= 1E4) {
                        if (!n.hasOwnProperty(g)) {
                            n[g] = new Array;
                            n[g].push(d)
                        } else n[g].push(d);
                        a.reloader = g
                    } else if (g < 0) a.reloader = "off";
                if (w(btg.config.Rubicon) && btg.Rubicon) k = U(size.join("x"));
                googletag.cmd.push(function() {
                    var e = false,
                        c = googletag.defineSlot(l, p, d).addService(googletag.pubads());
                    c.el = a;
                    if (!isNaN(E) && isNaN(a.reloader) && a.reloader != "off")
                        if (s === "all") btg.DoubleClick.reloadableGroupSlots.push(c);
                        else if (v(s))
                        for (var g = 0, h = s.length; g < h; g++)
                            if (c.el.id === s[g]) {
                                btg.DoubleClick.reloadableGroupSlots.push(c);
                                break
                            } else try {
                                if (c.el.id === j.getElementById(s[g]).firstChild.id) {
                                    btg.DoubleClick.reloadableGroupSlots.push(c);
                                    break
                                }
                            } catch (q) {}
                            btg.DoubleClick.slots.push(c);
                    for (g = 0; g < m.length; g++) {
                        h = m[g].split("=");
                        if (h.length < 2) continue;
                        h[1] = h[1].split(",");
                        if (h[0] == "pos") e = true;
                        if (h[0] == "slot") f = true;
                        c.setTargeting(h[0], h[1])
                    }
                    if (k != null) {
                        g = 0;
                        for (h = k.length; g < h; g++) {
                            var n = k[g].split("=");
                            if (n[0] && n[1]) c.setTargeting(n[0], n[1])
                        }
                    }
                    if (!e) c.setTargeting("pos", Q(d));
                    if (b && !y) c.setTargeting("slot", ++H);
                    if (y && b && !f) o("CODA: DFP disableAutoSlot is true, but no manual slot key value provided for Ad id = " +
                        d)
                })
            })(a)
        },
        writeAdSlot: function(a) {
            var b = a.size.replace(/,/g, "_"),
                b = "coda_ad_" + b + "_" + G++,
                a = "<div " + 'data-ad-sizes="' + a.size + '" ' + 'id="' + b + '" ' + 'data-ad-keyValues="' + (e(a.keyValues) ? a.keyValues : "") + '" ' + "></div>";
            j.write(a);
            a = j.getElementById(b);
            this.defineAdSlot(a);
            googletag.cmd.push(function() {
                googletag.pubads().collapseEmptyDivs();
                googletag.pubads().enableAsyncRendering();
                googletag.enableServices();
                googletag.display(b)
            });
            return a
        },
        appendAdSlot: function(a, b) {
            var f = m(b) ? b : e(b) ? j.getElementById(b) :
                null;
            if (m(f))
                if (m(a)) {
                    var d = a.size.replace(/,/g, "_"),
                        d = "coda_ad_" + d + "_" + G++,
                        c = j.createElement("div");
                    c.id = d;
                    if (e(a.size)) c.setAttribute("data-ad-sizes", a.size);
                    else {
                        o("CODA: Ad not placed! Missing required ad size property!");
                        return
                    }
                    if (e(a.adUnit)) c.setAttribute("data-ad-unit", a.adUnit);
                    if (e(a.keyValues)) c.setAttribute("data-ad-keyValues", a.keyValues);
                    if (e(a.reloadInterval)) c.setAttribute("data-ad-reload-interval", a.reloadInterval);
                    try {
                        f.appendChild(c)
                    } catch (h) {
                        o("CODA: Error creating Ad Div: " + h)
                    }
                    this.defineAdSlot(c);
                    return c.id
                } else o("CODA: Ad not placed! Missing or invalid ad property object!");
            else o("CODA: Ad not placed! Invalid DOM ad container!")
        },
        resetSlotCounter: function() {
            H = 0
        },
        refresh: function(a) {
            var b = [];
            if (e(a)) {
                var a = a.split(","),
                    c = new Array;
                for (i = 0; i < a.length; i++) {
                    var d = T(a[i]);
                    if (d != null) c.push(d)
                }
                googletag.cmd.push(function() {
                    googletag.pubads().refresh(c)
                })
            } else if (F) {
                if (btg.DoubleClick.reloadableGroupSlots.length > 0) b = L(btg.DoubleClick.reloadableGroupSlots);
                else b = L(btg.DoubleClick.slots);
                googletag.cmd.push(function() {
                    googletag.pubads().refresh(b)
                })
            } else if (btg.DoubleClick.reloadableGroupSlots.length >
                0) googletag.cmd.push(function() {
                googletag.pubads().refresh(btg.DoubleClick.reloadableGroupSlots)
            });
            else googletag.cmd.push(function() {
                googletag.pubads().refresh()
            });
            return this
        },
        rubiconRequestQueue: new btg.QueueManager({
            id: "btg.DoubleClick.rubiconRequestQueue",
            timeToWait: 500,
            maxNumItems: 10,
            maxElapsed: 5E3,
            handler: btg.Rubicon ? btg.Rubicon.makeRequest : function() {}
        })
    }
}(window, document);
btg.ResizeHandler = function() {
    var r = btg.Error.log,
        f, l = null,
        g = null,
        j = [],
        d = {},
        h = false,
        k = 0,
        m = btg.Events.AD_EXPANDED,
        n = btg.Events.AD_SHRUNK,
        o = function(a) {
            var c = [],
                b = a.split(/[\;:]+/);
            if (b.indexOf("height") !== -1 && b.indexOf("width") !== -1) {
                a = b[b.indexOf("height") + 1];
                b = b[b.indexOf("width") + 1];
                c.push(a, b);
                return c
            } else return false
        },
        s = function(a) {
            if (!a) return;
            f = new MutationObserver(function(c) {
                var b;
                b = g.length;
                var d = j.length;
                if (b > k && !h) {
                    p(g);
                    k = b
                }
                mutation = c[0];
                b = o(mutation.oldValue.replace(/\s/g, "")) || o(c[c.length -
                    1].oldValue.replace(/\s/g, ""));
                if (!b) c = mutation.target.clientHeight + "px", b = mutation.target.clientWidth + "px";
                else c = b[0], b = b[1];
                var q = parseInt(c),
                    i = parseInt(b);
                if (mutation.target.clientHeight + mutation.target.clientWidth > q + i) {
                    h = true;
                    c = {
                        type: "html5",
                        action: "expand",
                        width: mutation.target.clientWidth + "px",
                        height: mutation.target.clientHeight + "px",
                        originalWidth: b,
                        originalHeight: c,
                        allowOrientationChange: false,
                        forceOrientation: false
                    };
                    c = JSON.stringify(c);
                    m.fire(c)
                } else if (mutation.target.clientHeight + mutation.target.clientWidth <
                    q + i) {
                    h = true;
                    c = {
                        type: "html5",
                        action: "close",
                        toState: "default",
                        width: mutation.target.clientWidth + "px",
                        height: mutation.target.clientHeight + "px",
                        originalWidth: b,
                        originalHeight: c
                    };
                    c = JSON.stringify(c);
                    n.fire(c)
                }
                if (h && d > 1) {
                    for (c = 0; c < d; c++) j[c].reference.disconnect();
                    j.length = 0;
                    f.observe(a, {
                        attributes: true,
                        childList: false,
                        characterData: false,
                        attributeOldValue: true,
                        attributeFilter: ["style"]
                    });
                    j.push({
                        reference: f,
                        target: a
                    })
                }
            });
            f.observe(a, {
                attributes: true,
                childList: false,
                characterData: false,
                attributeOldValue: true,
                attributeFilter: ["style"]
            });
            j.push({
                reference: f,
                target: a
            })
        },
        i = function() {
            for (var a = 0, c = g.length; a < c; a++) {
                var b = g[a];
                if (typeof d[a] === "undefined") d[a] = {};
                if (!b) break;
                d[a].width = b.clientWidth + "px";
                d[a].height = b.clientHeight + "px";
                if (typeof d[a].previousHeight === "undefined" || typeof d[a].previousHeight === "undefined") {
                    d[a].previousHeight = b.clientHeight + "px";
                    d[a].previousWidth = b.clientWidth + "px";
                    if (a === c - 1) {
                        setTimeout(i, 250);
                        return
                    }
                }
                var e = parseInt(d[a].previousHeight) + parseInt(d[a].previousWidth),
                    f = parseInt(d[a].height) +
                    parseInt(d[a].width);
                if (f > e) {
                    h = true;
                    e = {
                        type: "html5",
                        action: "expand",
                        width: b.clientWidth + "px",
                        height: b.clientHeight + "px",
                        originalWidth: d[a].previousWidth,
                        originalHeight: d[a].previousHeight,
                        allowOrientationChange: false,
                        forceOrientation: false
                    };
                    e = JSON.stringify(e);
                    m.fire(e);
                    d[a].previousHeight = b.clientHeight + "px";
                    d[a].previousWidth = b.clientWidth + "px"
                } else if (f < e) {
                    h = true;
                    e = {
                        type: "html5",
                        action: "close",
                        toState: "default",
                        width: b.clientWidth + "px",
                        height: b.clientHeight + "px",
                        originalWidth: d[a].previousWidth,
                        originalHeight: d[a].previousHeight
                    };
                    e = JSON.stringify(e);
                    n.fire(e);
                    d[a].previousHeight = b.clientHeight + "px";
                    d[a].previousWidth = b.clientWidth + "px"
                }
                if (h) g = [b]
            }
            setTimeout(i, 250)
        },
        p = function(a) {
            MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
            if (typeof MutationObserver === "function")
                for (var c = 0, b = a.length; c < b; c++) s(a[c]);
            else i()
        };
    return {
        startResizeListener: function() {
            var a = btg.DoubleClick.slots.length;
            if (a === 0) {
                setTimeout(this.startResizeListener, 200);
                return
            }
            l = btg.DoubleClick.slots[0].el;
            g = l.getElementsByTagName("iframe");
            k = g.length;
            if (a > 1) r("More than one ad slot detected, functionality may not perform as desired.");
            p(g)
        }
    }
}();
btg.NativeAds = function() {
    var c = btg.Error.log,
        f = function(a) {
            if (!a.hasOwnProperty("placeholderid")) {
                c("##### Error: Native ad must have a placeholder id!");
                return
            }
            var b = document.getElementById(a.placeholderid);
            if (b === null) {
                c("#### Error: placeholder element (" + a.placeholderid + ") was not found, native ad can not be rendered.");
                return
            }
            if (a.hasOwnProperty("template")) {
                ad = (new btg.NativeAdTemplate(a)).getHTML();
                b.innerHTML = ad;
                b.style.display = "block"
            } else {
                for (var e = b.querySelectorAll("[data-ad-propid]"),
                        d = 0, f = e.length; d < f; d++) {
                    var g = a[e[d].getAttribute("data-ad-propid")];
                    switch (e[d].nodeName) {
                        case "A":
                            e[d].href = g;
                            break;
                        case "IMG":
                            e[d].src = g;
                            break;
                        default:
                            e[d].innerHTML = g
                    }
                }
                b.style.display = "block"
            }
        };
    return {
        callback: function(a) {
            if (!a.hasOwnProperty("type")) a.type = "default";
            switch (a.type) {
                case "default":
                    f(a);
                    break;
                case "html":
                    a: {
                        if (!a.hasOwnProperty("placeholderid")) {
                            c("##### Error: Native ad must have a placeholder id!");
                            break a
                        }
                        if (!a.hasOwnProperty("html")) {
                            c("##### Error: Native ad of type 'html' is missing the html property, ad can not be rendered.");
                            break a
                        }
                        var b = document.getElementById(a.placeholderid);
                        if (b === null) {
                            c("#### Error: placeholder element (" + a.placeholderid + ") was not found, native ad can not be rendered.");
                            break a
                        }
                        b.innerHTML = a.html;
                        b.style.display = "block"
                    }
                    break;
                case "json":
                    a: {
                        if (!a.hasOwnProperty("section")) {
                            c("##### Error: Native ad of type 'json' is missing a 'section' property.");
                            break a
                        }
                        btg.Events.NATIVE_AD_JSON_RESPONSE.fire(a)
                    }
                    break;
                case "thirdparty":
                    a: {
                        if (!a.hasOwnProperty("placeholderid")) {
                            c("##### Error: Native ad must have a placeholder id!");
                            break a
                        }
                        if (!a.hasOwnProperty("thirdpartyurl")) {
                            c("##### Error: Native ad of type 'Third Party' is missing a third party json url.");
                            break a
                        }
                        btg.Ajax({
                            url: a.thirdpartyurl,
                            xDomain: true,
                            autoSend: true
                        })
                    }
            }
        },
        ThirdPartyCallback: function(a) {
            a.placeholderid = "native_thirdparty";
            f(a)
        }
    }
}();
btg.NativeAdTemplate = function(b) {
    var d = function() {
        var c = b.template;
        return c = c.replace(/{{[A-Z_]*}}/g, function(a) {
            a = /[A-Z_]+/g.exec(a).toString().toLowerCase();
            if (b.data.hasOwnProperty(a)) return b.data[a];
            else return a
        })
    };
    return {
        getHTML: function() {
            return d()
        }
    }
};

function amzn_ads(a) {
    try {
        amznads.updateAds(a)
    } catch (g) {
        try {
            console.log("amzn_ads: " + g)
        } catch (f) {}
    }
}

function aax_write(a, g) {
    a.write(g);
    a.close()
}

function aax_render_ad(a) {
    if (a.passback) {
        aax_write(document, a.html);
        return
    }
    var g = a.slotSize;
    if (!g) {
        aax_write(document, a.html);
        return
    }
    var f = g.indexOf("x"),
        j = g.substring(0, f),
        g = g.substring(f + 1),
        f = "amznad" + Math.round(Math.random() * 1E6);
    aax_write(document, '<iframe id="' + f + '" width="' + j + '" height="' + g + '" src="javascript:\'\'" scrolling="no" frameborder="0" marginwidth="0" marginheight="0" bgcolor="#FFFFFF" topmargin="0" leftmargin="0" rightmargin="0" bottommargin="0"></iframe>');
    var h;
    try {
        h = document.getElementById(f);
        var b = h.contentWindow || h.contentDocument;
        if (b.document) b = b.document;
        aax_write(b, a.html)
    } catch (c) {
        if (h) h.style.display = "none"
    }
}
var amzn_console = function() {
    var a = {};
    a.log = function() {};
    return a
}();
if (window.console) amzn_console = window.console;
var amznads = function(a, g, f, j) {
    function h(b, c, d, e, i, l, k) {
        this.element = b;
        this.impId = i;
        this.win = l;
        this.doc = k;
        this.area = this.end = this.start = null;
        this.cutoff = c;
        this.cutoffTime = d * 1E3;
        this.focused = null;
        this.timerStarted = this.timer = false;
        this.getDuration = e;
        this.reported = false;
        this.above = null;
        this.totalTime = 0;
        this.topPos = this.leftPos = null;
        h.prototype.calcArea = function() {
            try {
                var b = g.getElementsByTagName("body")[0],
                    c = f.top.innerWidth || g.documentElement.clientWidth || b.clientWidth,
                    d = f.top.innerHeight || g.documentElement.clientHeight ||
                    b.clientHeight,
                    e = a.$jQ(f).scrollTop(),
                    i = a.$jQ(this.element).offset().top,
                    h = a.$jQ(this.element).height(),
                    l = a.$jQ(f).scrollLeft(),
                    k = a.$jQ(this.element).offset().left,
                    j = a.$jQ(this.element).width(),
                    m = Math.min(i + h, e + d) - Math.max(i, e),
                    m = Math.max(0, m),
                    n = Math.min(k + j, l + c) - Math.max(k, l),
                    n = Math.max(0, n),
                    b = m * n,
                    h = j * h;
                this.leftPos = k / a.$jQ(g).width();
                this.topPos = i / a.$jQ(g).height();
                return b / h
            } catch (o) {
                a.log("calcArea failed for ad id=" + this.element + "; error=" + o)
            }
            return 0
        };
        h.prototype.displayTime = function() {
            if (this.getDuration) {
                var b =
                    this.end - this.start;
                a.log(this.element + " viewed for: " + b);
                this.totalTime += b
            }
        };
        h.prototype.adInView = function() {
            a.log(this.element + " IN VIEW")
        };
        h.prototype.adNotInView = function() {
            a.log(this.element + " NOT IN VIEW")
        };
        h.prototype.seenForTime = function() {
            a.log(this.element + " displayed for " + this.cutoffTime / 1E3 + " seconds");
            a.log(" ");
            this.reported = true;
            try {
                encodeURIComponent(location.protocol + location.host + location.pathname)
            } catch (b) {
                this.firePixel('/{"adViewability":[{"error": ' + JSON.stringify(encodeURIComponent("Error encoding url - " +
                    b)) + "}]}")
            }
            try {
                this.firePixel('/{"adViewability":[{"viewable": true }]}')
            } catch (c) {
                a.log(c);
                this.firePixel('/{"adViewability":[{"error": ' + JSON.stringify(encodeURIComponent("Error sending pixel - " + c)) + "}]}")
            }
        };
        h.prototype.firePixel = function(b) {
            (new Image).src = a.protocol + a.host + a.px_svc + this.impId + b + "&cb=" + Math.round(Math.random() * 1E7)
        };
        h.prototype.getAreaTime = function() {
            function b() {
                if (!e.reported) e.timer = setTimeout(function() {
                    e.seenForTime()
                }, e.cutoffTime)
            }

            function c() {
                e.adInView();
                e.start = new Date;
                b();
                e.timerStarted = true
            }

            function d() {
                clearTimeout(e.timer);
                e.timerStarted = false;
                e.end = new Date;
                e.adNotInView();
                e.displayTime()
            }
            var e = this;
            if (this.area == null) {
                this.area = this.calcArea();
                if (this.area > this.cutoff) this.above = true;
                else this.above = false;
                try {
                    this.firePixel('/{"adViewability":[{"above_the_fold": ' + this.above + ', "topPos": ' + this.topPos + ', "leftPos": ' + this.leftPos + "}]}")
                } catch (i) {
                    a.log(i);
                    this.firePixel('/{"adViewability":[{"error": ' + JSON.stringify(encodeURIComponent("Error sending pixel - " +
                        i)) + "}]}")
                }
            }
            var f = this.calcArea();
            if (g.hasFocus() && (this.focused == false || this.focused == null) && f > this.cutoff && this.timerStarted == false) c();
            if (g.hasFocus()) this.focused = true;
            else if (this.area > this.cutoff && this.focused == true) {
                d();
                this.focused = false
            }
            if (this.area >= this.cutoff && f < this.cutoff || this.area < this.cutoff && f >= this.cutoff)
                if (f >= this.cutoff && this.timerStarted == false) c();
                else if (f < this.area) d();
            this.area = f
        };
        h.prototype.collectData = function() {
            var b = this;
            b.getAreaTime();
            a.$jQ(f).on("scroll resize focus blur",
                function() {
                    if (!b.reported) b.getAreaTime()
                })
        }
    }
    a.protocol = "https:" === g.location.protocol ? "https://" : "http://";
    a.host = "aax.amazon-adsystem.com";
    a.dtb_svc = "/e/dtb/bid";
    a.pb_svc = "/x/getad";
    a.px_svc = "/x/px/";
    a.debug_mode = a.debug_mode || false;
    a.MIN_TIMEOUT = 0;
    a.DEFAULT_TIMEOUT = 1E3;
    a.targetingKey = "amznslots";
    a.vidKey = "amzn_vid";
    a.tasks = a.tasks || [];
    a.$jQ = a.$jQ || null;
    a.VIEWABILITY_CUTOFF_AREA = a.VIEWABILITY_CUTOFF_AREA || 0.5;
    a.VIEWABILITY_CUTOFF_DURATION_SEC = a.VIEWABILITY_CUTOFF_DURATION_SEC || 1;
    a.isjQueryPresent =
        function() {
            if (typeof a.$jQ === "function") return true;
            try {
                if (f.top.jQuery && f.top.jQuery.fn.on && f.top.jQuery.fn.scrollTop) {
                    a.$jQ = f.top.jQuery;
                    return true
                }
            } catch (b) {}
            return false
        };
    a.log = function(b) {
        try {
            if (a.debug_mode) j.log(b)
        } catch (c) {}
    };
    a.log("Initiating amznads");
    if (!a.ads) a.ads = {};
    a.updateAds = function(b) {
        a.ads = b.ads;
        if (b.vads) {
            if (!a.ads) a.ads = {};
            for (var c in b.vads)
                if (b.vads.hasOwnProperty(c)) {
                    a.ads[c] = b.vads[c];
                    a.amzn_vid = b.vads[c]
                }
        }
        a.log("Updated ads. Executing rest of the task queue");
        a.doAllTasks();
        a.tasks.push = function(b) {
            a.doTask(b)
        }
    };
    a.saveAds = function(b) {
        a.saved_ads = b.ads;
        a.updateAds(b)
    };
    a.getAdForSlot = function(b, c, d) {
        a.src_id = b;
        var e = e || {},
            b = e.u;
        if (!b) b = a.getReferrerURL();
        if (b && b.indexOf("amzn_debug_mode") !== -1) a.debug_mode = true;
        a.log("amznads.getAdForSlot: Using url=" + b);
        c = a.protocol + a.host + a.pb_svc + "?jsd=1&" + ("src=" + a.src_id + "&slot_uuid=" + c + "&c=100" + "&u=" + b + "&cb=" + Math.round(Math.random() * 1E7));
        a.log("amznads.getAdAdForSlot: " + (d ? "Async " : "") + "Call to: " + c);
        if (d) a.appendScriptTag(c);
        else aax_write(g, "<script type='text/javascript' src='" + c + "'><\/script>")
    };
    a.getAdsCallback = function(b, c, d, e, f) {
        var g = null,
            f = f || {};
        try {
            if (c && typeof c === "function") g = a.handleCallBack(c, d)
        } catch (h) {
            a.log("amznads.getAdsAsyncWithCallback(): Error occured in setting up callback functionality." + h)
        }
        if (!f.to) f.to = d;
        a.doGetAdsAsync(b, e, f, g)
    };
    a.getAdsAsync = function(b, c, d) {
        a.doGetAdsAsync(b, c, d)
    };
    a.handleCallBack = function(b, c) {
        var d = false,
            e = null,
            g = function(a) {
                if (!d) {
                    try {
                        b(a);
                        if (e) clearTimeout(e)
                    } catch (c) {}
                    d =
                        true
                }
            },
            h = a.getValidMilliseconds(c);
        if (h) e = f.setTimeout(g, h);
        else e = f.setTimeout(g, a.DEFAULT_TIMEOUT);
        return g
    };
    a.getValidMilliseconds = function(b) {
        if (!b) return false;
        try {
            var c = ~~Number(b);
            if (c > a.MIN_TIMEOUT) return c
        } catch (d) {
            a.log("amznads.isValidMilliseconds(): Invalid timeout specified." + d);
            return false
        }
        return false
    };
    a.getAds = function(b, c, d, e) {
        if (e) a.doGetAdsAsync(b, c, d);
        else {
            b = a.getScriptSource(b, c, d);
            a.log("amznads.getAds: Call to: " + b);
            aax_write(g, "<script type='text/javascript' src='" + b + "'><\/script>")
        }
    };
    a.doGetAdsAsync = function(b, c, d, e) {
        b = a.getScriptSource(b, c, d);
        a.log("amznads.getAds: Async Call to: " + b);
        a.appendScriptTag(b, e)
    };
    a.getScriptSource = function(b, c, d) {
        a.src_id = b;
        var d = d || {},
            e = d.u,
            f = d.d,
            d = d.to;
        if (!e) e = a.getReferrerURL();
        if (e && e.indexOf("amzn_debug_mode") !== -1) a.debug_mode = true;
        if (a.ads) {
            a.log("amznads.getAds(): clear out existing ads");
            a.clearTargetingFromGPTAsync();
            a.ads = {}
        }
        if (a.saved_ads) a.ads = a.saved_ads;
        if (f) try {
            g.domain = f;
            a.log("amznads.getAds(): Using domain=" + f)
        } catch (h) {
            a.log("amznads.getAds(): Unable to override document domain with '" +
                f + "'; exception=" + h)
        }
        a.log("amznads.getAds(): Using url=" + e);
        b = "src=" + b + "&u=" + e + "&cb=" + Math.round(Math.random() * 1E7);
        if (c) b += "&sz=" + c;
        if (d) b += "&t=" + d;
        return a.protocol + a.host + a.dtb_svc + "?" + b
    };
    a.getReferrerURL = function() {
        var b = encodeURIComponent(g.documentURI);
        try {
            b = encodeURIComponent(f.top.location.href);
            if (!b || b == "undefined") b = a.detectIframeAndGetURL()
        } catch (c) {
            b = a.detectIframeAndGetURL()
        }
        return b
    };
    a.detectIframeAndGetURL = function() {
        try {
            if (f.top !== f.self) {
                a.log("Script is loaded within iFrame. url=" +
                    url);
                return encodeURIComponent(g.referrer)
            }
        } catch (b) {
            return encodeURIComponent(g.documentURI)
        }
    };
    a.appendScriptTag = function(b, c) {
        var d = g.getElementsByTagName("script")[0],
            e = g.createElement("script");
        e.type = "text/javascript";
        e.async = true;
        e.src = b;
        try {
            if (c && typeof c === "function")
                if (e.readyState) {
                    e.onreadystatechange = function() {
                        if (e.readyState == "loaded" || e.readyState == "complete") {
                            e.onreadystatechange = null;
                            c(true)
                        }
                    };
                    a.log("amznads.appendScriptTag: setting callBack function for < IE-8 ")
                } else {
                    e.onload = function() {
                        c(true)
                    };
                    a.log("amznads.appendScriptTag: setting callBack function for all other browsers exluding  < IE-8")
                }
        } catch (f) {
            a.log("amznads.appendScriptTag: Could not associate callBack function; " + f)
        }
        d.parentNode.insertBefore(e, d)
    };
    a.renderAd = function(b, c) {
        a.log("amznads.renderAd: key=" + c + "; ad-tag=" + a.ads[c]);
        if (a.ads[c]) aax_write(b, a.ads[c]);
        else {
            var d = new Object;
            d.c = "dtb";
            d.src = a.src_id;
            d.kvmismatch = 1;
            d.pubReturnedKey = c;
            d.aaxReturnedKeys = a.getTokens();
            d.cb = Math.round(Math.random() * 1E7);
            try {
                d.u = encodeURIComponent(location.host +
                    location.pathname);
                if (navigator) d.ua = encodeURIComponent(navigator.userAgent)
            } catch (e) {}
            d = encodeURIComponent(JSON.stringify(d));
            d = a.protocol + a.host + "/x/px/p/0/" + d;
            a.log("amznads.renderAd: keyValueMismatch detected, " + "pubReturnedKey=" + c + ", aaxReturnedKeys=" + a.getTokens());
            aax_write(b, "<img src='" + d + "'/>")
        }
    };
    a.detectViewability = function(b, c, d, e) {
        if (a.isjQueryPresent())
            if (d === f.top)(new h(b, a.VIEWABILITY_CUTOFF_AREA, a.VIEWABILITY_CUTOFF_DURATION_SEC, true, c, d, e)).collectData();
            else(new h(d.frameElement,
                a.VIEWABILITY_CUTOFF_AREA, a.VIEWABILITY_CUTOFF_DURATION_SEC, true, c, d, e)).collectData()
    };
    a.hasAds = function(b) {
        var c;
        if (!b) try {
            return Object.keys(a.ads).length > 0
        } catch (d) {
            a.log("amznads.hasAds: looks like IE 8 (and below): " + d);
            for (c in a.ads)
                if (a.ads.hasOwnProperty(c)) return true
        }
        for (c in a.ads)
            if (a.ads.hasOwnProperty(c))
                if (c.indexOf(b) > 0) return true;
        return false
    };
    a.getTargeting = function() {
        var b = {};
        b[a.targetingKey] = a.getTokens();
        b[a.vidKey] = a.amzn_vid;
        return b
    };
    a.setTargeting = function(b, c) {
        for (var d in a.ads)
            if (a.ads.hasOwnProperty(d)) {
                if (c &&
                    d.indexOf(c) < 0) continue;
                b(d, "1")
            }
    };
    a.setTargetingForGPTAsync = function(b) {
        try {
            if (b) {
                a.targetingKey = b;
                var c = a.getTokens();
                if (typeof c != "undefined" && c.length > 0) googletag.cmd.push(function() {
                    googletag.pubads().setTargeting(b, c);
                    googletag.pubads().setTargeting(a.vidKey, a.amzn_vid)
                })
            } else
                for (var d in a.ads)
                    if (a.ads.hasOwnProperty(d))(function() {
                        var b = d;
                        a.log("amznads.setTargetingForGPTAsync: pushing localKey=" + b);
                        googletag.cmd.push(function() {
                            if (amznads.debug_mode) amznads.log("amznads.setTargetingForGPTAsync: localKey=" +
                                b);
                            googletag.pubads().setTargeting(b, "1");
                            googletag.pubads().setTargeting(a.vidKey, a.amzn_vid)
                        })
                    })();
            a.log("amznads.setTargetingForGPTAsync: Completed successfully. Number of ads returned by Amazon: " + Object.keys(a.ads).length)
        } catch (e) {
            a.log("amznads.setTargetingForGPTAsync: ERROR - " + e)
        }
    };
    a.setTargetingForGPTSync = function(b) {
        try {
            if (b) {
                a.targetingKey = b;
                var c = a.getTokens();
                if (typeof c != "undefined" && c.length > 0) {
                    googletag.pubads().setTargeting(b, c);
                    googletag.pubads().setTargeting(a.vidKey, a.amzn_vid)
                }
            } else
                for (var d in a.ads)
                    if (a.ads.hasOwnProperty(d)) {
                        googletag.pubads().setTargeting(d,
                            "1");
                        googletag.pubads().setTargeting(a.vidKey, a.amzn_vid)
                    }
            a.log("amznads.setTargetingForGPTSync: Completed successfully. Number of ads returned by Amazon: " + Object.keys(a.ads).length)
        } catch (e) {
            a.log("amznads.setTargetingForGPTSync: ERROR - " + e)
        }
    };
    a.clearTargetingFromGPTAsync = function() {
        try {
            if (googletag && googletag.pubads()) googletag.pubads().clearTargeting(a.targetingKey);
            googletag.pubads().clearTargeting(a.vidKey)
        } catch (b) {}
    };
    a.appendTargetingToAdServerUrl = function(b) {
        var c = b;
        try {
            if (b.indexOf("?") ===
                -1) b = b + "?";
            for (var d in a.ads)
                if (a.ads.hasOwnProperty(d)) b += "&" + d + "=1";
            a.log("amznads.appendTargetingToAdServerUrl: Completed successfully. Number of ads returned by Amazon: " + a.ads.length)
        } catch (e) {
            a.log("amznads.appendTargetingToAdServerUrl: ERROR - " + e)
        }
        a.log("amznads.appendTargetingToAdServerUrl: input url: " + c + "\nreturning url: " + b);
        return b
    };
    a.appendTargetingToQueryString = function(b) {
        var c = b;
        try {
            for (var d in a.ads)
                if (a.ads.hasOwnProperty(d)) b += "&" + d + "=1"
        } catch (e) {
            a.log("amznads.appendTargetingToQueryString: ERROR - " +
                e)
        }
        a.log("amznads.appendTargetingToQueryString: input query-string:" + c + "\nreturning query-string:" + b);
        return b
    };
    a.getTokens = function(b) {
        var c, d = [];
        try {
            for (c in a.ads)
                if (a.ads.hasOwnProperty(c)) {
                    if (b && c.indexOf(b) < 0) continue;
                    d.push(c)
                }
        } catch (e) {
            a.log("amznads.getTokens: ERROR - " + e)
        }
        a.log("amznads.getTokens: returning tokens = " + d);
        return d
    };
    a.getKeys = a.getTokens;
    a.getVid = function() {
        return a.amzn_vid
    };
    a.doAllTasks = function() {
        for (; a.tasks.length > 0;) {
            var b = a.tasks.shift();
            a.doTask(b)
        }
    };
    a.doTask = function(b) {
        try {
            b.call()
        } catch (c) {
            a.log("Failed calling task: " +
                c)
        }
    };
    a.tryGetAdsAsync = function() {
        if (a.asyncParams) a.getAdsCallback(a.asyncParams.id, a.asyncParams.callbackFn, a.asyncParams.timeout, a.asyncParams.size, a.asyncParams.data)
    };
    return a
}(amznads || {}, document, window, amzn_console);
amznads.tryGetAdsAsync();
window.amzn_ads = amzn_ads;
window.amznads = amznads;




//Attempting to include CODA/builds/3/Flux.js
(function(a) {
    var h = a.Object.isDefined,
        i = a.String.isDefined,
        d, f = "non-member",
        g = "not logged-in",
        j = null,
        k = function() {
            return h(a.config.Flux) && typeof a.config.Flux.enabled != "undefined" && a.config.Flux.enabled === true && i(a.config.Flux.communityId)
        };
    a.Flux = new function() {
        this.init = function() {
            if (!k()) return;
            d = h(a.config.Flux.varmap) ? a.config.Flux.varmap : {};
            if (!i(d.memberState)) d.memberState = "prop5";
            if (!i(d.loginState)) d.loginState = "prop6";
            if (typeof Flux4 === "undefined") window.Flux4 = {};
            Flux4.eventListeners =
                Flux4.eventListeners || {};
            if (typeof Flux4.eventListeners.coreInitialized == "undefined") Flux4.eventListeners.coreInitialized = l;
            else l()
        };
        this.run = function(c) {
            if (!k()) return c;
            var b = window.Widgets4Context;
            if (h(b) && h(b.user)) {
                g = b.user.memberType;
                if (b.user.communityMember) f = "member";
                a.UserSegment.set("LoggedIn");
                a.UserSegment.set(b.user.memberType)
            }
            c[d.loginState] = g;
            c[d.memberState] = f;
            return c
        };
        this.onSignUp = function(a, b) {
            window.Widgets4Context.user = b;
            e({
                linkName: "Community - Sign up, Join, & Sign in",
                events: "event90,event87,event91",
                eVar51: b.initialThirdPartyConnection,
                eVar59: a.widgetName,
                eVar61: b.ucid,
                eVar62: f + "; " + g
            })
        };
        this.onJoin = function(a, b) {
            window.Widgets4Context.user = b;
            e({
                linkName: "Community - Join",
                events: "event87",
                eVar59: a.widgetName,
                eVar61: b.ucid,
                eVar62: f + "; " + g
            })
        };
        this.onSignIn = function(a, b) {
            window.Widgets4Context.user = b;
            e({
                linkName: "Community - Sign in",
                events: "event91",
                eVar51: b.initialThirdPartyConnection,
                eVar59: a.widgetName,
                eVar61: b.ucid,
                eVar62: f + "; " + g
            })
        };
        this.onShared = function(a,
            b) {
            e({
                linkName: "Community - Share",
                events: "event84",
                eVar51: a,
                eVar65: b
            })
        };
        this.onFollowed = function(a, b) {
            e({
                linkName: "Community - Follow",
                events: "event86",
                eVar51: a,
                eVar65: b
            })
        };
        this.onCommented = function(a, b) {
            var d = {
                linkName: "Community - Comment",
                events: "event88",
                eVar65: b
            };
            if (typeof window.Widgets4Context != "undefined") d.eVar51 = window.Widgets4Context.user.initialThirdPartyConnection;
            e(d)
        };
        this.onSignOut = function() {
            try {
                var c = "//btg.mtvnservices.com/aria/2032/2003/uuid5.html?reset=1&c=" + a.Math.random(9999999999);
                a.DOM.loadScript(c)
            } catch (b) {}
        };
        var e = function(c) {
                var b;
                if (!j) j = a.ReportingManager.getOmniture().getAttribute("pageName");
                b = j;
                c.linkType = "o";
                c.eVar60 = b;
                c.pageName = b;
                a.Controller.sendLinkEvent(c)
            },
            l = function() {
                if (typeof Flux4 === "undefined" || typeof Flux4.addEventListener !== "function") return;
                Flux4.addEventListener("signUp", function() {
                    a.Flux.onSignUp.apply(a.Flux, arguments)
                });
                Flux4.addEventListener("join", function() {
                    a.Flux.onJoin.apply(a.Flux, arguments)
                });
                Flux4.addEventListener("signIn", function() {
                    a.Flux.onSignIn.apply(a.Flux,
                        arguments)
                });
                Flux4.addEventListener("onShared", function() {
                    a.Flux.onShared.apply(a.Flux, arguments)
                });
                Flux4.addEventListener("onFollowed", function() {
                    a.Flux.onFollowed.apply(a.Flux, arguments)
                });
                Flux4.addEventListener("onCommented", function() {
                    a.Flux.onCommented.apply(a.Flux, arguments)
                });
                Flux4.addEventListener("signOut", function() {
                    a.Flux.onSignOut.apply(a.Flux, arguments)
                })
            }
    };
    if (k()) a.DOM.loadScript("//daapiak.flux.com/2.0/00001/json/" + a.config.Flux.communityId + "/feeds/widgets4ContextShortest?windowVariable=Widgets4Context")
})(btg);




//Attempting to include CODA/builds/3/ComScore.js
btg.ComScore = function(a) {
    if (!btg.Controller.hasReporting()) return;
    this.btgIsStr = btg.String.isDefined;
    this.config = a;
    this.c1 = this.btgIsStr(this.config.c1) ? this.config.c1 : "2";
    this.c2 = this.btgIsStr(this.config.c2) ? this.config.c2 : "6036034";
    this.c3 = this.btgIsStr(this.config.c3) ? this.config.c3 : "";
    this.c4 = this.btgIsStr(this.config.c4) ? this.config.c4 : escape(document.location.href);
    this.c5 = this.btgIsStr(this.config.c5) ? this.config.c5 : "20000";
    this.c6 = this.btgIsStr(this.config.c6) ? this.config.c6 : "";
    this.c15 =
        this.btgIsStr(this.config.c15) ? this.config.c15 : "";
    this.sendPageCall()
};
btg.ComScore.prototype = {
    sendPageCall: function(a) {
        if (!btg.Controller.hasReporting()) return;
        var b = btg.ReportingManager;
        if (typeof a === "object") {
            if (this.btgIsStr(a.comScore1)) this.c1 = a.comScore1;
            if (this.btgIsStr(a.comScore2)) this.c2 = a.comScore2;
            if (this.btgIsStr(a.comScore3)) this.c3 = a.comScore3;
            if (this.btgIsStr(a.comScore4)) this.c4 = a.comScore4;
            if (this.btgIsStr(a.comScore5)) this.c5 = a.comScore5;
            if (this.btgIsStr(a.comScore6)) this.c6 = a.comScore6;
            if (this.btgIsStr(a.comScore15)) this.c15 = a.comScore15
        }
        this.c4 =
            encodeURIComponent(this.c4);
        a = ["c1=", this.c1, "&c2=", this.c2, "&c3=", this.c3, "&c4=", this.c4, "&c5=", this.c5, "&c6=", this.c6, "&c15=", this.c15].join("");
        try {
            if (!btg.globalvars.IS_UNIT_TEST && !b.isScriptIncluded.comscore) {
                btg.DOM.loadScript((document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js?" + a);
                b.isScriptIncluded.comscore = true
            }
        } catch (c) {}
    }
};




//Attempting to include CODA/builds/3/Gemius.js
btg.Gemius = function(b) {
    var e = (document.location.protocol == "https:" ? "https://" : "http://") + "PREFIX.hit.gemius.pl",
        b = b,
        c, f = [1, 10, 100],
        g = [],
        h = [];
    this.btgIsStr = mtvn.btg.util.String.isDefined;
    this.btgU = mtvn.btg.util;
    this.btgGv = mtvn.btg.globalvars;
    this.btgU.DOM.loadScript((document.location.protocol == "https:" ? "https://" : "http://") + "pro.hit.gemius.pl/gstream.js");
    this.dependencies = new mtvn.btg.managers.DependencyManager;
    this.dependencies.add("gemius_script_load", function() {
            return typeof gemiusStream == "object"
        },
        100);
    this.dependencies.checkDependency("gemius_script_load");
    this.load = function(a) {
        if (this.dependencies.hasDependency()) {
            this.dependencies.addToCallQueue(this, this.load, a);
            return
        }
        c = a.guid;
        gemiusStream.newStream(b, c, a.duration, h, g, "1234567.89", e, f)
    };
    this.event = function(a) {
        if (this.dependencies.hasDependency()) {
            this.dependencies.addToCallQueue(this, this.event, a);
            return
        }
        var d = a.eventType == "seeking" ? "seekingStarted" : a.eventType,
            a = a.playHead;
        if (d == "complete") {
            gemiusStream.event(b, c, a, d);
            gemiusStream.closeStream(b,
                c, a)
        } else if (d.match(/playing|paused|seekingstarted|buffering|stopped/ig)) gemiusStream.event(b, c, a, d)
    }
};




//Attempting to include CODA/builds/3/Bridge.js
if (typeof mtvn == "undefined") var mtvn = {};
mtvn.btg = {
    Controller: btg.Controller,
    managers: {
        DependencyManager: btg.DependencyManager,
        PluginManager: btg.PluginManager,
        QueueManager: btg.QueueManager
    },
    ads: {
        AdManager: btg.AdManager,
        games: {
            GameAdLoader: btg.GameAdLoader,
            GameAdManager: btg.GameAdManager,
            GameDc: btg.GameDc
        },
        freewheel: {
            FreeWheelAd: btg.FreeWheelAd,
            FreeWheelAdInterface: btg.FreeWheelAdInterface
        }
    },
    reporting: {
        ABTest: btg.ABTest,
        ChoiceStream: btg.ChoiceStream,
        ComScore: btg.ComScore,
        FluxHosted: btg.FluxHosted,
        FluxState: btg.Flux,
        Nielsen: btg.Nielsen,
        Omniture: btg.Omniture,
        Photos: btg.Photos,
        QuantCast: btg.QuantCast,
        RecsABTesting: btg.Recommendations,
        ReportingManager: btg.ReportingManager,
        Search: btg.Search,
        SEO: btg.SEO,
        TestAndTarget: btg.TestAndTarget,
        UserSegment: btg.UserSegment,
        Demdex: btg.Demdex,
        omniture: {
            Hcode: btg.Hcode
        },
        player: {
            Loadtime: btg.Loadtime,
            MediaPlayer: btg.MediaPlayer,
            Preload: btg.Preload
        },
        games: {
            GameEventMediator: btg.GameEventMediator,
            GameEventVO: btg.GameEventVO,
            GameReporter: btg.GameReporter,
            GameReportingManager: btg.GameReportingManager
        }
    },
    util: {
        Alert: btg.Alert,
        Beacon: btg.Beacon,
        Class: btg.Class,
        Cookie: btg.Cookie,
        DOM: btg.DOM,
        Events: btg.Events,
        JSON: btg.JSON,
        Math: btg.Math,
        Object: btg.Object,
        String: btg.String,
        Timer: btg.Timer,
        TimeTracker: btg.TimeTracker,
        Window: btg.Window,
        Sections: btg.Sections
    },
    plugins: {
        GUID: btg.GUID,
        Meteor: btg.Meteor
    }
};
if (typeof mtvn.btg.config == "undefined") mtvn.btg.config = {};
if (typeof mtvn.btg.config.ReportSettings == "undefined") mtvn.btg.config.ReportSettings = {
    defaultPageName: btg.globalvars.PAGE_URL,
    Omniture: {},
    Nielsen: {},
    QuantCast: {},
    ComScore: {},
    Meteor: {},
    ChoiceStream: {},
    Demdex: {}
};
if (typeof mtvn.btg.config.AdSettings == "undefined") mtvn.btg.config.AdSettings = {
    DoubleClick: {},
    International: {},
    QuantCast: {}
};
if (typeof com == "undefined") com = {};
if (typeof com.mtvi == "undefined") com.mtvi = {};
if (typeof com.mtvi.reporting == "undefined") com.mtvi.reporting = {};
if (typeof com.mtvi.ads == "undefined") com.mtvi.ads = {};
if (typeof com.mtvi.config == "undefined") com.mtvi.config = {};
if (typeof com.mtvi.util == "undefined") com.mtvi.util = {};
if (typeof com.mtvi.util.IFrameReloader == "undefined") com.mtvi.util.IFrameReloader = {};
if (typeof com.mtvi.metadata == "undefined") com.mtvi.metadata = {};
com.mtvi.util = {
    toObject: btg.String.toObject,
    queryStringToHash: btg.String.queryStringToObject,
    isDefined: btg.String.isDefined,
    readCookie: btg.Cookie.read,
    deleteCookie: btg.Cookie.remove,
    crawlNodes: btg.Window.getNodeLinkName,
    addOnloadEvent: function(a) {
        return btg.DOM.Events.addListener(window, "load", a)
    }
};
com.mtvi.metadata = {
    getDefaultPageName: function() {
        var a = "",
            b = btg.globalvars;
        try {
            a = b && typeof b.PAGE_URL == "string" && b.PAGE_URL != "" ? b.PAGE_URL : location.pathname;
            if (a.lastIndexOf("/") == a.length - 1)
                if (mtvn.btg.util.String.isDefined(mtvn.btg.config.ReportSettings.indexFileName)) a += mtvn.btg.config.ReportSettings.indexFileName;
                else a = a != "/" ? mtvn.btg.util.String.charRtrim(a, "/") : a;
            if (a != "/") a = mtvn.btg.util.String.charRtrim(a, "/");
            if (a != "/" && a.indexOf("/") == 0) a = a.substring(1);
            if (a.indexOf("/") == -1 && a.indexOf(mtvn.btg.config.ReportSettings.indexFileName) !=
                -1) a = "home/" + a
        } catch (e) {}
        return a
    },
    getDefaultHierarchy: function() {
        var a = this.getDefaultPageName();
        return a == "/" ? "" : a
    },
    getDefaultChannel: function() {
        var a = this.getDefaultPageName();
        return a != "/" ? a.split("/")[0] : a
    }
};
if (btg.config.hasReporting && typeof btg.ReportingManager != "undefined") {
    com.mtvi.reporting.Controller = new function() {
        this.initalized = false;
        this.initialize = function() {
            btg.Controller.init()
        };
        this.sendCall = function(a) {
            btg.Controller.sendPageCall(a)
        };
        this.sendLinkEvent = function(a) {
            btg.Controller.sendLinkEvent(a)
        };
        this.registerLinks = function() {
            return true
        };
        this.setConfig = function(a) {
            for (var b in a) btg.config.Omniture[b] = a[b];
            return true
        };
        this.addRegisterLinks = function() {
            return true
        };
        this.setDefaultData =
            function(a, b) {
                if (btg.String.isDefined(a)) {
                    btg.config.Omniture[a] = btg.String.isDefined(b) ? b : "";
                    return true
                }
                return false
            }
    };
    com.mtvi.reporting.ComScore = new function() {
        this.sendComScoreCall = function() {}
    };
    com.mtvi.reporting.Dispatcher = function() {
        this.getValOnce = function() {
            return true
        };
        this.sendCall = function(a) {
            btg.Controller.sendPageCall(a)
        };
        this.sendLinkEvent = function(a) {
            mtvn.btg.Controller.sendLinkEvent(a)
        };
        this.registerLinks = function() {
            return true
        };
        this.setAttribute = function(a, b) {
            if (btg.String.isDefined(a)) {
                btg.Hcode[a] =
                    btg.String.isDefined(b) ? b : "";
                return true
            }
            return false
        };
        this.getAttribute = function(a) {
            return btg.config.Omniture[a]
        };
        this.setValues = function(a) {
            for (var b in a)
                if (btg.String.isDefined(a[b])) this.setAttribute(b, a[b])
        };
        this.send = function(a) {
            btg.Controller.sendPageCall(a)
        };
        this.setDefaultData = function() {};
        this.clearProps = function() {};
        this.clearAllVars = function() {}
    };
    com.mtvi.reporting.FluxWidgeted = {
        setVars: function() {
            return true
        }
    };
    com.mtvi.reporting.MediaPlayer = {
        addPlayer: btg.MediaPlayer.addPlayer
    };
    mtvn.btg.reporting.MediaPlayer = {
        setEndSlateClick: mtvn.btg.reporting.player.MediaPlayer.setEndSlateClick,
        getEndSlateClick: mtvn.btg.reporting.player.MediaPlayer.getEndSlateClick
    };
    com.mtvi.reporting.QuantCast = new function() {
        this.sendQuantCastCall = function() {
            (new btg.QuantCast(btg.config.QuantCast)).sendPageCall();
            return true
        }
    };
    com.mtvi.reporting.Search = btg.Search;
    com.mtvi.reporting.Search.setVars = btg.Search.setData
}
if (btg.config.hasAds && typeof btg.AdManager != "undefined") {
    com.mtvi.ads.AdManager = new function() {
        var a = btg.config.DoubleClick,
            b = btg.config.International,
            e = btg.String.isDefined,
            h = btg.Object.isDefined;
        this.setDartSite = function(c) {
            (a.enabled ? a : b).dartSite = c
        };
        this.setPositionThreshold = function(c) {
            (a.enabled ? a : b).positionThreshold = c
        };
        this.setSiteName = function(c) {
            (a.enabled ? a : b).siteName = c
        };
        this.setDefaultSections = function(c) {
            if (e(c)) a.sections = c
        };
        this.setKeyValues = function(c) {
            (a.enabled ? a : b).keyValues = c
        };
        this.getFormattedSections = function(a) {
            var b = a;
            try {
                var b = a == "/" ? a : btg.String.charTrim(a, "/"),
                    j = a.length,
                    d = "index";
                if (h(com.mtvi.reporting.Account) && e(com.mtvi.reporting.Account.defaultIndexFileName)) d = com.mtvi.reporting.Account.defaultIndexFileName;
                if (h(mtvn.btg.config.AdSettings) && e(mtvn.btg.config.AdSettings.defaultIndexFileName)) d = mtvn.btg.config.AdSettings.defaultIndexFileName;
                if (h(btg.config) && e(btg.config.defaultIndexFileName)) d = btg.config.defaultIndexFileName;
                for (var d = btg.String.stripFileExtension(d),
                        g = ["/", d, "home/" + d], f = 0, k = g.length; f < k; f++)
                    if (a.indexOf(g[f]) == 0 && j == g[f].length) {
                        b = a.replace(g[f], "_hp");
                        break
                    }
                if (b == "") b = "_hp";
                var i = btg.String.stripFileExtension(b).split("/");
                if (i.length == 2)
                    if (i[1] == d) b = btg.String.stripFileExtension(b).replace(d, "_mn")
            } catch (l) {}
            return b
        };
        this.placeAd = function(a) {
            btg.Controller.placeAd(a)
        };
        this.setServer = function(c) {
            (a.enabled ? a : b).server = c
        };
        this.setSsl = function() {
            (a.enabled ? a : b).ssl = true
        };
        this.setDefaultContentType = function(c) {
            (a.enabled ? a : b).contentType = c
        };
        this.setZoneOverride = function(c) {
            (a.enabled ? a : b).zoneOverride = c
        };
        this.IFrameAds = [];
        this.placeIFrameAd = function(a) {
            a.isReloadable = true;
            a.contentType = "adi";
            btg.Controller.placeAd(a)
        };
        this.setReloadInterval = function(a) {
            btg.config.reloadInterval = a
        };
        this.setAdClass = function() {};
        this.getAdById = function() {
            return null
        };
        this.getDartSite = function() {
            return (a.enabled ? a : b).dartSite
        };
        this.getAd = function(a) {
            return btg.AdManager.getAd(a)
        };
        this.getReloadInterval = function() {
            return btg.config.reloadInterval
        };
        this.reloadIFrameAds =
            function() {
                btg.Controller.reloadAds()
            };
        this.reloadIFrameAd = function() {};
        this.setZone = function() {};
        this.getNewAd = function() {};
        this.populateNamesValuesObj = function() {}
    };
    com.mtvi.ads.DoubleClickAd = function() {};
    com.mtvi.ads.DoubleClickAd.prototype = {
        setZoneOverride: function() {},
        setDartSite: function() {},
        setOrd: function() {},
        placeAd: function() {},
        getXml: function() {
            return null
        },
        getJson: function() {
            return null
        },
        getUrl: function() {
            return null
        },
        getSections: function() {
            return null
        },
        setSize: function() {},
        setSections: function() {},
        setContentType: function() {},
        setKeyValues: function() {},
        setTile: function() {},
        setPositionThreshold: function() {},
        setServer: function() {},
        setSsl: function() {},
        setMediaType: function() {},
        setPosition: function() {},
        setPartner: function() {},
        setId: function() {}
    }
};
(function() {
    btg.DomesticDc = function() {
        this.setContentTypeData = function() {};
        this.setDartData = function() {};
        this.setSectionsData = function() {};
        this.setSizeData = function() {};
        this.setMediaTypeData = function() {};
        this.setTileData = function() {};
        this.setKeyValuesData = function() {};
        this.setOrdData = function() {};
        this.getUrl = function() {
            return "DoubleClick ads not supported."
        };
        this.init = function() {}
    }
})();



btg.isCoreLoaded = function() {
    btg.Events.CORE_LOADED.fire();
    if ((btg.config.hasAds || btg.config.hasAdsDFP) && typeof btg.SurrogateAd != "undefined") btg.SurrogateAd.load("poe");
    return true
}();