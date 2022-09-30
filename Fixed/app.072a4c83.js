(function(e) {
    function t(t) {
        for (var r, o, s = t[0], u = t[1], c = t[2], d = 0, p = []; d < s.length; d++) o = s[d], Object.prototype.hasOwnProperty.call(i, o) && i[o] && p.push(i[o][0]), i[o] = 0;
        for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
        l && l(t);
        while (p.length) p.shift()();
        return a.push.apply(a, c || []), n()
    }

    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], r = !0, s = 1; s < n.length; s++) {
                var u = n[s];
                0 !== i[u] && (r = !1)
            }
            r && (a.splice(t--, 1), e = o(o.s = n[0]))
        }
        return e
    }
    var r = {},
        i = {
            app: 0
        },
        a = [];

    function o(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, o), n.l = !0, n.exports
    }
    o.m = e, o.c = r, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) o.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "";
    var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
        u = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var c = 0; c < s.length; c++) t(s[c]);
    var l = u;
    a.push([0, "chunk-vendors"]), n()
})({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "0bd2": function(e, t, n) {},
    "274a": function(e, t, n) {
        "use strict";
        var r = n("0bd2"),
            i = n.n(r);
        i.a
    },
    "2c27": function(e, t, n) {
        e.exports = n.p + "img/empty.306f5f3d.svg"
    },
    4389: function(e, t, n) {},
    "440c": function(e, t, n) {
        "use strict";
        var r = n("a435"),
            i = n.n(r);
        i.a
    },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var r = n("2b0e"),
            i = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "app-component",
                    style: e.background,
                    attrs: {
                        id: "app",
                        ontouchstart: ""
                    }
                }, [e.view.loading ? e._e() : n("div", {
                    staticClass: "inner"
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.playing,
                        expression: "!playing"
                    }],
                    staticClass: "help-section"
                }, [n("ScOnboardingPopup", {
                    ref: "onboardingPopup",
                    attrs: {
                        prize: e.appState.prize,
                        howto: e.$t("help.howto"),
                        share: e.shareUrl,
                        options: e.getHelpOptions
                    }
                }), e.appState.prize ? n("ScPrizeClaimPopup", {
                    ref: "prizePopup",
                    attrs: {
                        prize: e.appState.prize,
                        profile: e.appState.profile,
                        options: e.getPrizeOptions
                    }
                }) : e._e(), e.ctaEnabled ? n("ScCtaPopup", {
                    ref: "ctaPopup",
                    attrs: {
                        cta: e.cta,
                        storekey: e.cta.createdTimestamp
                    }
                }) : e._e(), n("ScProfileButton", {
                    staticStyle: {
                        float: "right",
                        "margin-left": "8px"
                    }
                }), n("div", {
                    staticStyle: {
                        float: "right"
                    },
                    attrs: {
                        id: "sc-badge-injector"
                    }
                })], 1), n("div", {
                    staticClass: "main-container"
                }, [n("div", {
                    staticClass: "main-positioner"
                }, [e.isPageVisible("introbox") ? n("IntroPage", {
                    on: {
                        userUpdates: function(t) {
                            return e.createProfile(t)
                        }
                    }
                }) : e._e(), e.isPageVisible("game") ? n("GamePage", {
                    attrs: {
                        custom: e.custom,
                        profile: e.appState.profile,
                        challengeDuration: e.getChallengeDuration,
                        endtime: e.getSeriesEnd
                    },
                    on: {
                        gameOver: function(t) {
                            return e.handleGameOver(t)
                        }
                    }
                }) : e._e(), e.isPageVisible("summary") ? n("SummaryPage", {
                    attrs: {
                        enableLeaderboard: e.custom.enableLeaderboard,
                        profile: e.appState.profile,
                        quest: e.appState.quest
                    }
                }) : e._e()], 1)])]), e.showSponsors ? n("ScSponsorBanner", {
                    attrs: {
                        sponsor: e.sponsors
                    }
                }) : e._e(), e.view.loading ? e._e() : n("ScFooter")], 1)
            },
            a = [],
            o = (n("d81d"), n("b64b"), n("d3b7"), n("07ac"), n("3835")),
            s = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {}, [n("intro-box", {
                    on: {
                        userUpdates: function(t) {
                            return e.handleUserUpdate(t)
                        }
                    }
                })], 1)
            },
            u = [],
            c = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "intro-box-container"
                }, [n("div", {
                    staticClass: "intro-box"
                }, [n("h1", {
                    staticClass: "intro-title"
                }, [e._v(e._s(e.$t("intro.title")))]), n("p", {
                    staticClass: "intro-subtitle"
                }, [e._v(e._s(e.$t("intro.subtitle")))]), n("div", {
                    staticClass: "input-group"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.name,
                        expression: "name"
                    }],
                    staticClass: "name-input",
                    attrs: {
                        maxlength: e.maxLen,
                        type: "text",
                        placeholder: e.$t("intro.placeholder")
                    },
                    domProps: {
                        value: e.name
                    },
                    on: {
                        input: [function(t) {
                            t.target.composing || (e.name = t.target.value)
                        }, e.onInputChange]
                    }
                }), n("span", {
                    staticClass: "input-info"
                }, [e._v(e._s(e.charsLeft) + " " + e._s(e.$t("intro.info")))])]), n("button", {
                    staticClass: "custom-button",
                    attrs: {
                        disabled: e.isDisabled
                    },
                    on: {
                        click: e.submitName
                    }
                }, [e._v(e._s(e.$t("intro.button")) + " ")])])])
            },
            l = [],
            d = (n("99af"), n("fb6a"), n("b0c0"), n("ac1f"), n("1276"), n("498a"), n("4160"), n("13d5"), n("a434"), n("6b93"), n("b680"), n("466d"), n("159b"), n("5530")),
            p = n("d4ec"),
            h = n("bee2");
        n("53ca");

        function m(e) {
            return Array.isArray(e) && !!e.length
        }

        function f(e) {
            return m(e) ? e[0] : "string" === typeof e && e.length > 0 ? e : null
        }

        function g(e) {
            Object.keys(e).forEach((function(t) {
                document.documentElement.setAttribute(t, e[t])
            }))
        }

        function v(e, t) {
            var n = 0;
            return e.catch((function(r) {
                return n++, n < t ? (console.warn("retry call..."), v(e, t - n)) : Promise.reject(r)
            }))
        }

        function b() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4;
            return S(Math.round(Math.random() * (Math.pow(10, parseInt(e)) - 1)), e, "0")
        }

        function S(e, t, n) {
            for (var r = parseInt(t) - String(e).length, i = String(e), a = 0; a < r; a++) i = String(n) + i;
            return i
        }

        function w(e, t) {
            var n = null;
            return function() {
                clearTimeout(n);
                var r = arguments,
                    i = this;
                n = setTimeout((function() {
                    e.apply(i, r)
                }), t)
            }
        }

        function y(e) {
            var t = ["", "k", "M", "G", "T", "P", "E"],
                n = Math.log10(e) / 3 | 0;
            if (0 === n) return e;
            var r = t[n],
                i = Math.pow(10, 3 * n),
                a = e / i;
            return a.toFixed(1) + r
        }

        function k(e) {
            window.vm.$i18n.locale = e || "en", g({
                lang: window.vm.$i18n.locale
            })
        }
        var C = function() {
                function e() {
                    Object(p["a"])(this, e)
                }
                return Object(h["a"])(e, null, [{
                    key: "initSponsors",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = {};
                        return t && m(e.logos) && (n = Object(d["a"])({}, e, {
                            hasSponsors: !0
                        })), n
                    }
                }, {
                    key: "initCta",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = {},
                            r = !1;
                        return t && e && (n = Object.assign({}, e), n.createdTimestamp = window.vm.$SDK.activation.activeChangeTs, n.headerImg = f(e.headerImg), r = !0), [n, r]
                    }
                }, {
                    key: "initBranding",
                    value: function(e) {
                        var t = Object.assign({}, e);
                        return t.backgroundImage = f(e.backgroundImage), t.onboardingHeaderImage = f(e.onboardingHeaderImage), t.backgroundColor = f(e.backgroundColor), e.theme && g({
                            theme: e.theme
                        }), t
                    }
                }, {
                    key: "injectStagecastBadge",
                    value: function(e, t) {
                        var n = document.createElement("script");
                        n.src = "https://console.staging.stagecast.io/api/assets/badge.js", n.id = "sc-badge", n.setAttribute("data-theme", e), n.setAttribute("data-enabled", t), document.body.appendChild(n)
                    }
                }]), e
            }(),
            P = {
                name: "IntroBox",
                components: {},
                props: {
                    profile: {
                        type: Object,
                        default: function() {
                            return {}
                        }
                    }
                },
                data: function() {
                    return {
                        name: "",
                        code: "",
                        minLen: 3,
                        maxLen: 20,
                        isDisabled: !0
                    }
                },
                computed: {
                    charsLeft: function() {
                        return this.maxLen - this.name.length
                    }
                },
                watch: {
                    profile: function(e) {
                        if (e && e.name) try {
                            var t = e.name.split("#");
                            this.name = t[0], this.code = t[1]
                        } catch (n) {
                            this.name = "", this.code = ""
                        }
                    }
                },
                methods: {
                    submitName: function() {
                        this.isDisabled = !0;
                        var e = this.code || b(4),
                            t = this.name.trim();
                        this.$emit("userUpdates", {
                            name: "".concat(t, "#").concat(e)
                        })
                    },
                    onInputChange: function() {
                        this.isDisabled = this.name.length < this.minLen, this.name.length > this.maxLen && (this.name = this.name.slice(0, this.maxLen))
                    }
                }
            },
            _ = P,
            z = (n("9ebc"), n("2877")),
            O = Object(z["a"])(_, c, l, !1, null, "3e2d101a", null),
            R = O.exports,
            $ = {
                name: "IntroPage",
                components: {
                    IntroBox: R
                },
                props: {},
                data: function() {
                    return {}
                },
                computed: {},
                methods: {
                    handleUserUpdate: function(e) {
                        this.$emit("userUpdates", e)
                    }
                }
            },
            x = $,
            I = (n("611c"), Object(z["a"])(x, s, u, !1, null, "4168f240", null)),
            T = I.exports,
            E = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("GameBox", {
                    ref: "game",
                    attrs: {
                        profile: e.profile
                    },
                    on: {
                        gameOver: function(t) {
                            return e.handleGameOver(t)
                        }
                    }
                })
            },
            q = [],
            j = (n("a9e3"), function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "box"
                }, [n("div", {
                    staticClass: "bg-grey border-top-radius"
                }, [n("h1", {
                    staticClass: "box-title"
                }, [e._v(e._s(e.getUserName)), n("span", {
                    staticClass: "box-title-sub"
                }, [e._v("#" + e._s(e.getUserCode))])]), n("div", {
                    staticClass: "info-row relative",
                    class: {
                        green: !0
                    }
                }, [n("span", [e._v(e._s(e.$t("game.score")))]), n("transition", {
                    attrs: {
                        name: "update"
                    }
                }, [n("span", {
                    key: e.currentScore,
                    staticClass: "text-bold right-info"
                }, [e._v(e._s((e.currentScore || 0).toLocaleString("de-DE")) + " p")])])], 1)]), n("div", {
                    staticClass: "game-positioner"
                }, [n("Game", {
                    ref: "game",
                    on: {
                        updateScore: function(t) {
                            return e.updateScore(t)
                        },
                        gameOver: function(t) {
                            return e.gameOver()
                        }
                    }
                })], 1)])
            }),
            D = [],
            N = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "Simon"
                }, [n("div", {
                    staticClass: "timer-box"
                }, [n("div", {
                    staticClass: "timer-score"
                }, [n("div", {
                    staticClass: "timer-score colored-background",
                    style: e.getTimerBackground
                }), e.checkStatus("incorrect") ? n("span", [e._v(e._s(e.$t("game.gameOver")))]) : n("span", [e._v("+ " + e._s(e.roundScore.toFixed()) + " p")])]), n("div", {
                    staticClass: "timer-text static-text"
                }, [e._v(e._s(e.$t("game.time")) + ":")]), n("div", {
                    staticClass: "timer-text"
                }, [e._v(e._s(e.timeLeft.toFixed()) + "s")])]), n("div", {
                    staticClass: "simon-box"
                }, [n("div", {
                    staticClass: "instruction-text bold"
                }, [n("span", {
                    class: {
                        blink: e.animateStatus
                    },
                    staticStyle: {
                        display: "inline-block"
                    }
                }, [e._v(e._s(e.instructions[e.status]))])]), n("div", {
                    staticClass: "square-container"
                }, [e._l(e.squares, (function(t) {
                    return [n("div", {
                        key: t.id,
                        staticClass: "simon-square",
                        class: {
                            blink: t.animate
                        },
                        style: t.style,
                        attrs: {
                            disabled: !e.checkStatus("click")
                        },
                        on: {
                            click: function(n) {
                                e.guessedPattern += t.id
                            }
                        }
                    }, [e.showHelp && e.checkStatus("click") && t.id == e.realPattern[e.guessedPattern.length] ? n("div", {
                        staticClass: "simon-helper"
                    }) : e._e()])]
                })), n("div", {
                    staticClass: "sponsor-container",
                    class: {
                        "error-shake": e.checkStatus("incorrect")
                    },
                    style: e.getSponsorStyle
                }, [e.sponsorTimer >= 1 ? n("span", {
                    staticClass: "sponsor-counter text-drop"
                }, [e._v(e._s(e.sponsorTimer))]) : e._e()])], 2)])])
            },
            L = [],
            H = (n("2ca0"), n("96cf"), n("1da1")),
            G = {
                MEMORIZE: "memorize",
                CORRECT: "correct",
                INCORRECT: "incorrect",
                CLICK: "click"
            },
            U = {
                GREEN: "#69da66",
                RED: "#da6666",
                YELLOW: "#ffd978",
                BLUE: "#667fda",
                DIRTY_WHITE: "#e4e4e4",
                ERROR_RED: "#ea6969",
                CORRECT_GREEN: "#34be7e",
                GREY: "#c0c0c0"
            },
            B = {
                name: "Game",
                props: {},
                data: function() {
                    return {
                        status: G.MEMORIZE,
                        animateStatus: !1,
                        animationDuration: 400,
                        guessedPattern: "",
                        realPattern: "",
                        instructions: {
                            memorize: this.$t("game.memorize"),
                            click: this.$t("game.click"),
                            correct: this.$t("game.correct"),
                            incorrect: this.$t("game.incorrect")
                        },
                        squares: [{
                            id: 0,
                            style: {
                                background: U.GREEN
                            },
                            color: !1,
                            animate: !1
                        }, {
                            id: 1,
                            style: {
                                background: U.RED
                            },
                            color: !1,
                            animate: !1
                        }, {
                            id: 2,
                            style: {
                                background: U.YELLOW
                            },
                            color: !1,
                            animate: !1
                        }, {
                            id: 3,
                            style: {
                                background: U.BLUE
                            },
                            color: !1,
                            animate: !1
                        }],
                        interval: void 0,
                        timePassed: 0,
                        sponsorTimer: 0,
                        showHelp: !0,
                        duration: 0,
                        options: {}
                    }
                },
                mounted: function() {},
                computed: {
                    timeLeft: function() {
                        return this.duration / 1e3 - this.timePassed
                    },
                    roundScore: function() {
                        return this.timeLeft / (this.duration / 1e3) * this.realPattern.length * 100
                    },
                    getTimerBackground: function() {
                        return this.checkStatus(G.INCORRECT) ? {
                            background: U.ERROR_RED,
                            width: "100%"
                        } : this.checkStatus(G.CLICK) ? {
                            background: U.CORRECT_GREEN,
                            width: this.timeLeft / (this.duration / 1e3) * 100 + "%"
                        } : {
                            background: U.GREY,
                            width: "100%",
                            transition: "width 0.5s linear,background-color 0.5s linear"
                        }
                    },
                    getSponsorStyle: function() {
                        return this.options.gameSponsorImage && 0 == this.sponsorTimer ? "background-image: url(" + this.options.gameSponsorImage + ")" : ""
                    }
                },
                watch: {
                    status: function() {
                        this.checkStatus(G.CORRECT) && this.restartGame(), this.checkStatus(G.INCORRECT) && this.stopGame()
                    },
                    guessedPattern: function() {
                        this.checkStatus(G.CLICK) && (this.realPattern.startsWith(this.guessedPattern) || this.setGameStatus(G.INCORRECT), this.guessedPattern === this.realPattern && void 0 != this.interval && (this.showHelp = !1, this.setGameStatus(G.CORRECT)))
                    },
                    timeLeft: function() {
                        var e = (new Date).getTime();
                        (this.timeLeft < 0 && this.checkStatus(G.CLICK) || this.options.endTime - e < 0) && this.setGameStatus(G.INCORRECT)
                    }
                },
                methods: {
                    startGame: function(e, t) {
                        if (this.duration = e, this.options = t, this.startGamePlay(), t.buttonColors)
                            for (var n = 0; n < t.buttonColors.length && n < 4; n++) t.buttonColors[n] && (this.squares[n].style.background = t.buttonColors[n], this.squares[n].color = !0);
                        if (t.buttonImages)
                            for (var r = 0; r < t.buttonImages.length && r < 4; r++) t.buttonImages[r] && (this.squares[r].color || (this.squares[r].style.background = U.DIRTY_WHITE), this.squares[r].style.background = this.squares[r].style.background + " no-repeat center/cover url(" + t.buttonImages[r] + ")")
                    },
                    startGamePlay: function() {
                        var e = this;
                        return Object(H["a"])(regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (e.realPattern += Math.floor(4 * Math.random()), e.guessedPattern = "", !e.checkStatus(G.MEMORIZE)) {
                                            t.next = 29;
                                            break
                                        }
                                        return e.animateInstructions(), t.next = 6, e.sleep(e.animationDuration);
                                    case 6:
                                        if (1 != e.realPattern.length) {
                                            t.next = 11;
                                            break
                                        }
                                        return e.realPattern += Math.floor(4 * Math.random()), e.sponsorCountFromSeconds(3), t.next = 11, e.sleep(3500);
                                    case 11:
                                        n = 0;
                                    case 12:
                                        if (!(n < e.realPattern.length)) {
                                            t.next = 22;
                                            break
                                        }
                                        return e.squares[e.realPattern.charAt(n)].animate = !0, t.next = 16, e.sleep(e.animationDuration);
                                    case 16:
                                        return e.squares[e.realPattern.charAt(n)].animate = !1, t.next = 19, e.sleep(100);
                                    case 19:
                                        n++, t.next = 12;
                                        break;
                                    case 22:
                                        return t.next = 24, e.sleep(100);
                                    case 24:
                                        return e.setGameStatus(G.CLICK), e.animateInstructions(), t.next = 28, e.sleep(e.animationDuration);
                                    case 28:
                                        e.startGameTimer();
                                    case 29:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    restartGame: function() {
                        var e = this;
                        return Object(H["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e.$emit("updateScore", Math.round(e.roundScore)), e.stopGameTimer(), t.next = 4, e.sleep(1e3);
                                    case 4:
                                        e.setGameStatus(G.MEMORIZE), e.startGamePlay();
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    stopGame: function() {
                        var e = this;
                        return Object(H["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e.stopGameTimer(), t.next = 3, e.sleep(3e3);
                                    case 3:
                                        e.$emit("gameOver");
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    sponsorCountFromSeconds: function(e) {
                        var t = this;
                        this.sponsorTimer = e;
                        var n = setInterval((function() {
                            1 == t.sponsorTimer && clearInterval(n), t.sponsorTimer--
                        }), 1e3)
                    },
                    startGameTimer: function() {
                        var e = this;
                        this.interval = setInterval((function() {
                            e.timePassed += .01
                        }), 10)
                    },
                    stopGameTimer: function() {
                        clearInterval(this.interval), this.timePassed = 0
                    },
                    animateInstructions: function() {
                        var e = this;
                        return Object(H["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e.animateStatus = !0, t.next = 3, e.sleep(e.animationDuration);
                                    case 3:
                                        e.animateStatus = !1;
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    sleep: function(e) {
                        return new Promise((function(t) {
                            return setTimeout(t, e)
                        }))
                    },
                    setGameStatus: function(e) {
                        this.status = e
                    },
                    checkStatus: function(e) {
                        return this.status === e
                    }
                }
            },
            M = B,
            K = (n("bb9a"), Object(z["a"])(M, N, L, !1, null, null, null)),
            A = K.exports,
            F = {
                name: "GameBox",
                components: {
                    Game: A
                },
                props: {
                    profile: {
                        type: Object,
                        default: function() {
                            return {
                                name: ""
                            }
                        }
                    }
                },
                data: function() {
                    return {
                        currentScore: 0
                    }
                },
                computed: {
                    getUserName: function() {
                        return this.profile.name.split("#")[0]
                    },
                    getUserCode: function() {
                        return this.profile.name.split("#")[1]
                    }
                },
                mounted: function() {},
                methods: {
                    startGame: function(e, t) {
                        this.$refs.game.startGame(e, t)
                    },
                    updateScore: function(e) {
                        this.currentScore += e, this.$root.$emit("app:patchProfile", {
                            points: this.currentScore
                        })
                    },
                    gameOver: function(e) {
                        this.$emit("gameOver", {
                            totalClicks: e,
                            finalScore: this.currentScore
                        })
                    }
                }
            },
            W = F,
            J = (n("588c"), Object(z["a"])(W, j, D, !1, null, "3d458335", null)),
            V = J.exports,
            Q = {
                name: "GamePage",
                components: {
                    GameBox: V
                },
                props: {
                    challengeDuration: Number,
                    endtime: Number,
                    custom: {
                        type: Object,
                        default: function() {
                            return {}
                        }
                    },
                    profile: {
                        type: Object,
                        default: function() {
                            return {}
                        }
                    }
                },
                data: function() {
                    return {
                        challenge: {}
                    }
                },
                computed: {},
                mounted: function() {
                    var e = this;
                    this.getDefaultChallenge().then((function() {
                        e.startGame()
                    }))
                },
                methods: {
                    getDefaultChallenge: function() {
                        var e = this;
                        return this.$SDK.quest.getChallenge(1).then((function(t) {
                            e.challenge = t
                        }))
                    },
                    startGame: function() {
                        var e = this.challengeDuration,
                            t = {
                                buttonColors: this.custom.buttonColors,
                                buttonImages: this.custom.buttonImages,
                                gameSponsorImage: this.custom.gameSponsorImage,
                                endTime: this.endtime
                            };
                        this.$refs.game.startGame(e, t)
                    },
                    handleGameOver: function(e) {
                        var t = this;
                        e.finalScore = 42069
                        this.$SDK.quest.respondToChallenge(1, this.challenge.hash, e.finalScore, {}).then((function() {
                            t.$emit("gameOver", e.totalClicks)
                        })).catch((function(e) {
                            console.log(e)
                        }))
                    }
                }
            },
            Y = Q,
            Z = (n("6996"), Object(z["a"])(Y, E, q, !1, null, "508a0e9a", null)),
            X = Z.exports,
            ee = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [n("div", {
                    staticClass: "box",
                    attrs: {
                        id: "profile-box"
                    }
                }, [n("div", {
                    staticClass: "bg-grey border-top-radius"
                }, [n("h1", {
                    staticClass: "box-title"
                }, [e._v(e._s(e.getUserName)), n("span", {
                    staticClass: "box-title-sub"
                }, [e._v("#" + e._s(e.getUserCode))])]), n("div", {
                    staticClass: "info-row"
                }, [n("span", [e._v(e._s(e.$t("end.header.last")) + ":")]), n("span", {
                    staticClass: "right-info"
                }, [e._v(e._s(e.getRoundPoints) + " p")])]), n("div", {
                    staticClass: "info-row"
                }, [n("span", [e._v(e._s(e.$t("end.header.best")) + ":")]), n("span", {
                    staticClass: "right-info"
                }, [e._v(e._s(e.getBestScore) + " p")])]), n("div", {
                    staticClass: "info-row"
                }, [n("span", [e._v(e._s(e.$t("end.header.rank")) + ":")]), n("span", {
                    staticClass: "right-info"
                }, [e._v(e._s(e.getUserPosition))])])]), e.showQuizControls ? n("div", {
                    staticClass: "button-container"
                }, [e.view.isWinner ? n("button", {
                    staticClass: "custom-button prize-button",
                    on: {
                        click: function(t) {
                            return e.$root.$emit("summary:viewPrize")
                        }
                    }
                }, [e._v(e._s(e.$t("end.header.prizeButton")))]) : e._e(), e.view.canReplay ? n("button", {
                    staticClass: "custom-button",
                    on: {
                        click: function(t) {
                            return e.$root.$emit("summary:playAgain")
                        }
                    }
                }, [e._v(e._s(e.$t("end.header.playButton")) + " ")]) : e._e()]) : e._e()]), n("div", {
                    staticClass: "box",
                    class: {
                        blink: e.view.animateCountdown
                    },
                    attrs: {
                        id: "timer-box"
                    }
                }, [n("h1", {
                    staticClass: "box-title"
                }, [e._v(e._s(e.$t("end.countdown.title")) + " "), 1 !== e.quest.maxSeries ? n("span", [e._v("- " + e._s(e.$t("end.round")) + " " + e._s(e.getSeriesNumber))]) : e._e()]), n("Countdown", {
                    ref: "countdown",
                    attrs: {
                        options: {
                            autoStart: !1
                        },
                        endtime: e.quest.seriesEndTime
                    },
                    on: {
                        countdownEnd: function(t) {
                            return e.handleCountdownEnd(t)
                        }
                    }
                }), n("span", {
                    staticClass: "countdown-desc",
                    domProps: {
                        innerHTML: e._s(e.getCountdownDescription)
                    }
                })], 1), e.view.hasLeaderboard ? n("GlobalLeaderboard", {
                    ref: "leaderboard",
                    attrs: {
                        quest: e.quest,
                        currentSeriesNumber: e.getSeriesNumber,
                        username: e.profile.name
                    },
                    on: {
                        userScore: function(t) {
                            return e.handleUserScoreUpdate(t)
                        }
                    }
                }) : e._e(), e.view.hasLeaderboard ? e._e() : n("EmptyLeaderboard", {
                    on: {
                        userScore: function(t) {
                            return e.handleUserScoreUpdate(t)
                        }
                    }
                })], 1)
            },
            te = [],
            ne = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "countdown",
                    attrs: {
                        dir: "ltr"
                    }
                }, e._l(e.timeString, (function(t, r) {
                    return n("div", {
                        key: r,
                        class: {
                            "time-box": ":" !== t,
                            divider: ":" === t
                        }
                    }, [e._v(" " + e._s(t) + " ")])
                })), 0)
            },
            re = [],
            ie = {
                name: "Countdown",
                components: {},
                data: function() {
                    return {
                        interval: -1,
                        timeString: "00:00:00",
                        over: null,
                        endTimestamp: this.endtime
                    }
                },
                props: {
                    options: {
                        type: Object,
                        required: !1,
                        default: function() {
                            return {
                                autoStart: !0
                            }
                        }
                    },
                    endtime: {
                        type: Number,
                        required: !1,
                        default: function() {
                            return -1
                        }
                    }
                },
                mounted: function() {
                    this.options.autoStart && this.start()
                },
                beforeDestroy: function() {
                    window.clearInterval(this.interval)
                },
                watch: {
                    endtime: function(e) {
                        if (e) {
                            clearInterval(this.interval), this.over = !1, this.endTimestamp = e;
                            var t = (new Date).getTime();
                            t <= e && this.options.autoStart ? this.start() : this.timeString = "00:00:00"
                        }
                    }
                },
                methods: {
                    start: function(e) {
                        var t = this;
                        e && (this.endTimestamp = e), this.over = !1, this.interval = setInterval((function() {
                            t.checkTime()
                        }), 1e3)
                    },
                    stop: function() {
                        clearInterval(this.interval), this.timeString = "00:00:00", this.$emit("countdownStop", !0)
                    },
                    checkTime: function() {
                        if (this.endTimestamp <= 0) return clearInterval(this.interval), this.timeString = "00:00:00", void(this.over = !0);
                        var e = (new Date).getTime(),
                            t = this.endTimestamp - e,
                            n = Math.floor(t / 864e5),
                            r = Math.floor(t % 864e5 / 36e5),
                            i = Math.floor(t % 36e5 / 6e4),
                            a = Math.floor(t % 6e4 / 1e3);
                        t < 0 ? (this.timeString = "00:00:00", this.over = !0, this.$emit("countdownEnd", !0), clearInterval(this.interval)) : this.timeString = this.timeFormat(r + 24 * n) + ":" + this.timeFormat(i) + ":" + this.timeFormat(a)
                    },
                    timeFormat: function(e) {
                        return e < 10 ? "0" + String(e) : e
                    }
                }
            },
            ae = ie,
            oe = (n("440c"), Object(z["a"])(ae, ne, re, !1, null, "7f333eb2", null)),
            se = oe.exports,
            ue = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "box",
                    attrs: {
                        id: "leaderboard-box"
                    }
                }, [n("Paginator", {
                    attrs: {
                        len: e.currentSeriesNumber
                    },
                    on: {
                        goBack: function(t) {
                            return e.handleHistoryNavigation(t)
                        },
                        goForward: function(t) {
                            return e.handleHistoryNavigation(t)
                        }
                    },
                    scopedSlots: e._u([{
                        key: "title",
                        fn: function() {
                            return [n("div", {
                                staticClass: "box-title"
                            }, [n("h1", {
                                staticClass: "box-title"
                            }, [e._v(e._s(e.$t("end.leaderboard.title")) + " "), 1 !== e.quest.maxSeries ? n("span", [e._v("- " + e._s(e.$t("end.round")) + " " + e._s(e.activeSeries))]) : e._e()]), n("div", {
                                staticClass: "live-indicator"
                            }, [n("i", {
                                staticClass: "blink"
                            }), e._v(e._s(e.$t("end.leaderboard.updating")) + " ")])])]
                        },
                        proxy: !0
                    }, {
                        key: "body",
                        fn: function() {
                            return [n("LeaderboardRenderer", {
                                attrs: {
                                    latest: e.currentSeriesNumber,
                                    selected: e.activeSeries,
                                    leaderboard: e.getLeaderboard,
                                    username: e.username
                                }
                            })]
                        },
                        proxy: !0
                    }])
                })], 1)
            },
            ce = [],
            le = (n("3ca3"), n("ddb0"), n("2909")),
            de = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("transition", {
                    attrs: {
                        name: "round-fade",
                        mode: "out-in"
                    }
                }, [e.board.length && !e.view.loading ? r("div", {
                    key: 0,
                    staticClass: "leaderboard"
                }, e._l(e.board, (function(t, n) {
                    return r("leaderboard-row-renderer", {
                        key: n,
                        attrs: {
                            scorer: t,
                            currentUserName: e.username,
                            index: n
                        }
                    })
                })), 1) : e._e(), e.view.loading || e.board.length ? e._e() : r("div", {
                    key: 1,
                    staticClass: "loading"
                }, [e.friends ? ["light" === e.view.theme ? r("img", {
                    attrs: {
                        src: n("aaca"),
                        alt: "empty friends list"
                    }
                }) : r("img", {
                    attrs: {
                        src: n("a8ab"),
                        alt: "empty list"
                    }
                }), r("p", {
                    staticClass: "text-grey",
                    staticStyle: {
                        "max-width": "320px"
                    }
                }, [e._v(e._s(e.$t("friends.info")))])] : [e.latest === e.selected ? ["light" === e.view.theme ? r("img", {
                    attrs: {
                        src: n("a9251"),
                        alt: "empty list"
                    }
                }) : r("img", {
                    attrs: {
                        src: n("2c27"),
                        alt: "empty list"
                    }
                }), r("p", {
                    staticClass: "text-grey",
                    staticStyle: {
                        "max-width": "260px"
                    }
                }, [e._v(e._s(e.$t("end.leaderboard.info")))])] : [r("img", {
                    attrs: {
                        src: n("8479"),
                        alt: "empty list"
                    }
                }), r("p", {
                    staticClass: "text-grey",
                    staticStyle: {
                        "max-width": "260px"
                    }
                }, [e._v(e._s(e.$t("end.leaderboard.empty")))])]]], 2), e.view.loading ? r("div", {
                    key: 2,
                    staticClass: "loading"
                }, [r("h3", [e._v(e._s(e.friends ? e.$t("end.leaderboard.loadingFriends") : e.$t("end.leaderboard.loading")))]), r("p", [e._v(e._s(e.$t("end.leaderboard.wait")))]), (e.view.theme, r("img", {
                    attrs: {
                        src: n("fc72"),
                        alt: "loading..."
                    }
                }))]) : e._e()])
            },
            pe = [],
            he = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "leaderboard-row",
                    class: {
                        odd: e.isOddRow,
                        empty: !e.scorer.position
                    }
                }, [e.isCurrentUser ? n("div", {
                    staticClass: "user-marker"
                }) : e._e(), n("div", [e.scorer.position ? n("div", {
                    staticClass: "leaderboard-position"
                }, [e._v(e._s(e.scorer.position) + ".")]) : e._e(), n("div", {
                    staticClass: "leaderboard-name"
                }, [e._v(e._s(e.getScorerName)), e.scorer.position ? n("span", [e._v("#" + e._s(e.getScorerCode))]) : e._e()])]), e.scorer.position ? n("div", {
                    staticClass: "leaderboard-points"
                }, [e._v(e._s(e.scorer.bestScore.toLocaleString("de-DE")) + " p")]) : e._e()])
            },
            me = [],
            fe = {
                name: "LeaderboardRowRenderer",
                components: {},
                data: function() {
                    return {
                        default: {
                            name: "unknown",
                            code: "0000"
                        }
                    }
                },
                computed: {
                    getScorerName: function() {
                        return this.scorer.name.split("#")[0] || this.default.name
                    },
                    getScorerCode: function() {
                        return this.scorer.name.split("#")[1] || this.default.code
                    },
                    isOddRow: function() {
                        return (this.index + 1) % 2
                    },
                    isCurrentUser: function() {
                        return this.currentUserName === this.scorer.name
                    }
                },
                props: {
                    currentUserName: String,
                    index: {
                        type: Number,
                        required: !0,
                        default: function() {
                            return -1
                        }
                    },
                    scorer: {
                        type: Object,
                        required: !0,
                        default: function() {
                            return {}
                        }
                    }
                },
                created: function() {},
                methods: {}
            },
            ge = fe,
            ve = (n("5786"), Object(z["a"])(ge, he, me, !1, null, "7e287bee", null)),
            be = ve.exports,
            Se = {
                name: "LeaderboardRenderer",
                components: {
                    LeaderboardRowRenderer: be
                },
                props: {
                    friends: Boolean,
                    latest: Number,
                    selected: Number,
                    username: String,
                    leaderboard: {
                        type: Array,
                        required: !1,
                        default: function() {
                            return []
                        }
                    }
                },
                data: function() {
                    return {
                        board: this.leaderboard,
                        view: {
                            loading: !0,
                            theme: "light"
                        }
                    }
                },
                created: function() {
                    this.view.theme = document.documentElement.getAttribute("theme"), this.view.loading = !0
                },
                methods: {},
                watch: {
                    leaderboard: function(e) {
                        this.board = e || [], this.view.loading = !e
                    }
                }
            },
            we = Se,
            ye = (n("fe62"), Object(z["a"])(we, de, pe, !1, null, "bf316218", null)),
            ke = ye.exports,
            Ce = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "paginator"
                }, [n("div", {
                    staticClass: "paginator-header"
                }, [n("div", {
                    staticClass: "custom-button arrow-button",
                    class: {
                        hidden: !e.canGoBack
                    },
                    on: {
                        click: function(t) {
                            return e.goBack(t)
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        width: "8",
                        height: "14",
                        viewBox: "0 0 8 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M6.6 1.4L1 7L6.6 12.6",
                        stroke: "var(--bg-color-2)",
                        "stroke-width": "1.6",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                })])]), e._t("title"), n("div", {
                    staticClass: "custom-button arrow-button",
                    class: {
                        hidden: !e.canGoForward,
                        dnone: !e.canGoForward && e.slotPassed
                    },
                    on: {
                        click: function(t) {
                            return e.goForward(t)
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        width: "8",
                        height: "14",
                        viewBox: "0 0 8 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M1.4 12.6L7 7L1.4 1.4",
                        stroke: "var(--bg-color-2)",
                        "stroke-width": "1.6",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                })])]), n("div", {
                    class: {
                        dnone: e.canGoForward
                    }
                }, [e._t("menuoption")], 2)], 2), n("div", {
                    staticClass: "paginator-body"
                }, [e._t("body")], 2)])
            },
            Pe = [],
            _e = {
                name: "Paginator",
                components: {},
                data: function() {
                    return {
                        currentIndex: -1
                    }
                },
                computed: {
                    canGoBack: function() {
                        return this.currentIndex > 0
                    },
                    canGoForward: function() {
                        return this.currentIndex < this.len - 1
                    },
                    slotPassed: function() {
                        return !!this.$slots.menuoption
                    }
                },
                props: {
                    len: {
                        type: Number,
                        required: !0,
                        default: function() {
                            return -1
                        }
                    }
                },
                created: function() {},
                mounted: function() {
                    this.currentIndex = this.len - 1
                },
                methods: {
                    goBack: function() {
                        this.currentIndex - 1 > -1 && (this.currentIndex--, this.$emit("goBack", this.currentIndex))
                    },
                    goForward: function() {
                        this.currentIndex + 1 < this.len && (this.currentIndex++, this.$emit("goForward", this.currentIndex))
                    }
                }
            },
            ze = _e,
            Oe = (n("e018"), Object(z["a"])(ze, Ce, Pe, !1, null, "1ec98396", null)),
            Re = Oe.exports,
            $e = r["default"].observable({
                profile: {},
                quest: {},
                prize: null,
                activationConfig: {},
                questHandler: null,
                prizeHandler: null,
                error: void 0,
                errorMessage: ""
            }),
            xe = {
                leaderboardRefreshRate: 7e3,
                leaderboardDelay: 1200,
                replayTimeLimit: 6e4,
                pauseRefreshAfterSeries: 4e4,
                delayNewSeriesStart: 5e3,
                backgroundImage: void 0,
                ctaDisplayTimeout: 5e3,
                backgroundColor: "transparent"
            };

        function Ie(e, t, n) {
            $e.error = e, $e.errorMessage = t, $e.errorType = n
        }
        var Te = $e,
            Ee = {
                name: "GlobalLeaderboard",
                components: {
                    LeaderboardRenderer: ke,
                    Paginator: Re
                },
                props: {
                    currentSeriesNumber: Number,
                    username: {
                        type: String,
                        required: !0,
                        default: function() {
                            return ""
                        }
                    },
                    quest: {
                        type: Object,
                        required: !0,
                        default: function() {
                            return {}
                        }
                    }
                },
                data: function() {
                    return {
                        liveLeaderboard: void 0,
                        leaderboardHistory: [],
                        activeSeries: -1,
                        offset: 0,
                        limit: 50
                    }
                },
                created: function() {
                    window.setTimeout(this.fetchUpdates.bind(this), xe.leaderboardDelay)
                },
                mounted: function() {
                    this.activeSeries = this.currentSeriesNumber, (0 === this.quest.maxSeries || this.quest.maxSeries >= this.currentSeriesNumber || 1 === this.currentSeriesNumber) && this.startRefresh()
                },
                beforeDestroy: function() {
                    window.clearTimeout(this.pauseTimeout), window.clearInterval(this.leaderboardInterval)
                },
                computed: {
                    getLeaderboard: function() {
                        return this.activeSeries === this.currentSeriesNumber ? this.liveLeaderboard : this.leaderboardHistory[this.activeSeries - 1]
                    }
                },
                methods: {
                    handleHistoryNavigation: w((function(e) {
                        this.activeSeries = e + 1, this.activeSeries === this.currentSeriesNumber ? (this.fetchUpdates(), this.startRefresh()) : (this.stopRefresh(), this.fetchHistory(this.activeSeries))
                    }), 300),
                    startRefresh: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xe.leaderboardRefreshRate;
                        this.leaderboardInterval && window.clearInterval(this.leaderboardInterval), this.leaderboardInterval = window.setInterval(this.fetchUpdates.bind(this), e)
                    },
                    stopRefresh: function() {
                        window.clearTimeout(this.pauseTimeout), window.clearInterval(this.leaderboardInterval)
                    },
                    pauseRefresh: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
                        window.clearInterval(this.leaderboardInterval), this.pauseTimeout = window.setTimeout(this.startRefresh.bind(this), e)
                    },
                    clean: function() {
                        this.liveLeaderboard = null
                    },
                    fetchUpdates: function() {
                        var e = this;
                        this.$SDK ? Promise.all([this.$SDK.quest.getTopScores({
                            query: {
                                offset: this.offset,
                                limit: this.limit
                            }
                        }), this.$SDK.quest.getUserScores()]).then((function(t) {
                            var n = t[0],
                                r = t[1];
                            e.liveLeaderboard = n.leaderboard || [], e.$emit("userScore", {
                                userScore: r,
                                totalParticipants: n.totalParticipants
                            });
                            var i = r.position;
                            if (51 === i && e.liveLeaderboard.push(r), i > 51) return e.$SDK.quest.getTopScores({
                                query: {
                                    offset: i - 2,
                                    limit: 3
                                }
                            })
                        })).then((function(t) {
                            var n;
                            if (t) {
                                var r = [{
                                    name: "..."
                                }].concat(Object(le["a"])(t.leaderboard), [{
                                    name: "..."
                                }]);
                                (n = e.liveLeaderboard).push.apply(n, Object(le["a"])(r))
                            }
                        })).catch((function(e) {
                            console.error(e)
                        })) : this.liveLeaderboard = []
                    },
                    fetchHistory: function(e) {
                        var t = this;
                        this.$SDK ? this.$SDK.quest.getTopScores({
                            query: {
                                offset: 0,
                                limit: 10,
                                series: e
                            }
                        }).then((function(n) {
                            t.$set(t.leaderboardHistory, e - 1, n.leaderboard)
                        })).catch((function(e) {
                            Ie(e)
                        })) : this.$set(this.leaderboardHistory, e - 1, [])
                    }
                }
            },
            qe = Ee,
            je = (n("c934"), Object(z["a"])(qe, ue, ce, !1, null, "647edd87", null)),
            De = je.exports,
            Ne = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    attrs: {
                        id: "empty-leaderboard-box"
                    }
                })
            },
            Le = [],
            He = {
                name: "EmptyLeaderboard",
                components: {},
                props: {},
                data: function() {
                    return {
                        liveLeaderboard: void 0,
                        offset: 0,
                        limit: 1
                    }
                },
                created: function() {
                    window.setTimeout(this.fetchUpdates.bind(this), xe.leaderboardDelay)
                },
                mounted: function() {
                    this.startRefresh()
                },
                beforeDestroy: function() {
                    window.clearTimeout(this.pauseTimeout), window.clearInterval(this.leaderboardInterval)
                },
                computed: {},
                methods: {
                    startRefresh: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xe.leaderboardRefreshRate + 5e3;
                        this.leaderboardInterval && window.clearInterval(this.leaderboardInterval), this.leaderboardInterval = window.setInterval(this.fetchUpdates.bind(this), e)
                    },
                    stopRefresh: function() {
                        window.clearTimeout(this.pauseTimeout), window.clearInterval(this.leaderboardInterval)
                    },
                    pauseRefresh: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
                        window.clearInterval(this.leaderboardInterval), this.pauseTimeout = window.setTimeout(this.startRefresh.bind(this), e)
                    },
                    fetchUpdates: function() {
                        var e = this;
                        this.$SDK && Promise.all([this.$SDK.quest.getTopScores({
                            query: {
                                offset: this.offset,
                                limit: this.limit
                            }
                        }), this.$SDK.quest.getUserScores()]).then((function(t) {
                            var n = t[0],
                                r = t[1];
                            e.$emit("userScore", {
                                userScore: r,
                                totalParticipants: n.totalParticipants
                            })
                        })).catch((function(e) {
                            console.error(e)
                        }))
                    }
                }
            },
            Ge = He,
            Ue = (n("274a"), Object(z["a"])(Ge, Ne, Le, !1, null, "100ac404", null)),
            Be = Ue.exports,
            Me = n("ade3"),
            Ke = {
                ENOUGH_POINTS: "prizeOnEnoughPoints",
                TOP_RANKING: "prizeOnTopRanking"
            },
            Ae = function() {
                function e(t, n, r) {
                    Object(p["a"])(this, e), Object(Me["a"])(this, "timeout", null), Object(Me["a"])(this, "quest", null), Object(Me["a"])(this, "startTime", null), Object(Me["a"])(this, "currentSeriesEndTs", null), Object(Me["a"])(this, "currentSeriesNumber", null), Object(Me["a"])(this, "currentSeriesActive", !1), Object(Me["a"])(this, "randomizeAnswers", !1), Object(Me["a"])(this, "seriesOverHandler", (function() {})), this.quest = t, this.startTime = n, this._initSeries(), r && (this.randomizeAnswers = !!r.randomizeAnswers, r.seriesOverHandler && (this.seriesOverHandler = r.seriesOverHandler))
                }
                return Object(h["a"])(e, [{
                    key: "prepareNewSeries",
                    value: function() {
                        return this.getSeriesLeft() > 0 && this._initSeries()
                    }
                }, {
                    key: "isCurrentSeriesActive",
                    value: function() {
                        return this.currentSeriesEndTs > (new Date).getTime()
                    }
                }, {
                    key: "getSeriesLeft",
                    value: function() {
                        return 0 === this.quest.maxSeries ? 1 / 0 : this.quest.maxSeries - this.currentSeriesNumber
                    }
                }, {
                    key: "getSeriesTimeLeft",
                    value: function() {
                        return this.currentSeriesEndTs - (new Date).getTime()
                    }
                }, {
                    key: "canStillPlay",
                    value: function() {
                        return this.getSeriesLeft() >= 0 && this.isCurrentSeriesActive()
                    }
                }, {
                    key: "canUserReplay",
                    value: function(e, t) {
                        return !(0 !== this.quest.maxRoundsPerSeries && e.currentRound >= this.quest.maxRoundsPerSeries) && this.getSeriesTimeLeft() > t
                    }
                }, {
                    key: "getChallengeIndexes",
                    value: function() {
                        return We.getChallengeIndexes(this.quest.challengesCount, this.quest.challengesPerRound)
                    }
                }, {
                    key: "_initSeries",
                    value: function() {
                        var e = this;
                        this.currentSeriesEndTs = this._getSeriesEndTs(), this.currentSeriesNumber = this._getSeriesNumber(), this.currentSeriesActive = this.isCurrentSeriesActive();
                        var t = this.currentSeriesEndTs - (new Date).getTime();
                        return t > 0 && (this.timeout = window.setTimeout((function() {
                            e.currentSeriesActive = !1, e.seriesOverHandler && e.seriesOverHandler(e)
                        }), t), !0)
                    }
                }, {
                    key: "_getSeriesEndTs",
                    value: function() {
                        return We.getQuestSeriesEnd(this.quest, this.startTime)
                    }
                }, {
                    key: "_getSeriesNumber",
                    value: function() {
                        return We.getQuestSeriesNumber(this.quest, this.startTime)
                    }
                }, {
                    key: "addSeriesOverHandler",
                    value: function(e) {
                        this.seriesOverHandler = e
                    }
                }, {
                    key: "removeSeriesOverHandler",
                    value: function() {
                        this.seriesOverHandler = function() {}
                    }
                }]), e
            }(),
            Fe = function() {
                function e(t, n) {
                    Object(p["a"])(this, e), this.quest = t, this.prize = n
                }
                return Object(h["a"])(e, [{
                    key: "getCountdownDescription",
                    value: function() {
                        if (!this.prize) return window.vm.$t("end.countdown.noprize");
                        if (this.prize.type === Ke.ENOUGH_POINTS) {
                            var e = this.prize.enoughPoints || this.prize.enoughPointsPercentage;
                            return window.vm.$tc("end.countdown.prizeEnoughPoints", e, {
                                num: e
                            })
                        }
                        if (this.prize.type === Ke.TOP_RANKING) {
                            var t = this.prize.prizeAvailabilityLimit;
                            return window.vm.$tc("end.countdown.prizeTopRanking", t, {
                                num: t
                            })
                        }
                        return window.vm.$t("end.countdown.noprize")
                    }
                }, {
                    key: "checkWinner",
                    value: function(e) {
                        return this.prize && e.prizes && e.prizes.length > 0
                    }
                }, {
                    key: "hasPrize",
                    get: function() {
                        return !!this.prize
                    }
                }]), e
            }(),
            We = function() {
                function e() {
                    Object(p["a"])(this, e)
                }
                return Object(h["a"])(e, null, [{
                    key: "getChallengeIndexes",
                    value: function(t, n) {
                        return t > n ? e.getRandomChallenges(t, n) : e.getAllChallenges(t)
                    }
                }, {
                    key: "getAllChallenges",
                    value: function(e) {
                        if (e > 0) {
                            var t = Object(le["a"])(Array(e).keys());
                            return t.splice(0, 1), t.push(e), t
                        }
                        return []
                    }
                }, {
                    key: "getRandomChallenges",
                    value: function(e, t) {
                        var n = Object(le["a"])(Array(e).keys());
                        n.splice(0, 1), n.push(e);
                        for (var r = [], i = 0; i < t; i++) {
                            var a = Math.floor(Math.random() * (e - i));
                            r.push(n[a]), n.splice(a, 1)
                        }
                        return r
                    }
                }, {
                    key: "getQuestSeriesEnd",
                    value: function(t, n) {
                        var r = e.getQuestSeriesNumber(t, n);
                        return n + t.seriesDuration * r
                    }
                }, {
                    key: "getQuestSeriesNumber",
                    value: function(e, t) {
                        var n = (new Date).getTime(),
                            r = Math.ceil((n - t) / e.seriesDuration) || 1;
                        return 0 === e.maxSeries ? r : Math.min(e.maxSeries, r)
                    }
                }]), e
            }(),
            Je = !0,
            Ve = {
                name: "SummaryPage",
                components: {
                    Countdown: se,
                    GlobalLeaderboard: De,
                    EmptyLeaderboard: Be
                },
                props: {
                    enableLeaderboard: Boolean,
                    profile: {
                        type: Object,
                        required: !0,
                        default: function() {
                            return {
                                name: "unknown#0000",
                                points: 0
                            }
                        }
                    },
                    quest: {
                        type: Object,
                        required: !0,
                        default: function() {
                            return {}
                        }
                    }
                },
                data: function() {
                    return {
                        view: {
                            canReplay: !1,
                            isWinner: !1,
                            animateCountdown: !1,
                            hasLeaderboard: this.enableLeaderboard
                        },
                        userPosition: -1,
                        totalParticipants: 0,
                        appState: Te
                    }
                },
                computed: {
                    getUserName: function() {
                        return this.profile.name.split("#")[0]
                    },
                    getUserCode: function() {
                        return this.profile.name.split("#")[1]
                    },
                    getRoundPoints: function() {
                        return (this.profile.points || 0).toLocaleString("de-DE")
                    },
                    getBestScore: function() {
                        return (this.profile.bestScore || 0).toLocaleString("de-DE")
                    },
                    getUserPosition: function() {
                        return this.profile.position > 0 && this.profile.bestScore > 0 ? this.profile.position + "/" + y(this.totalParticipants) : "N/A"
                    },
                    getCountdownDescription: function() {
                        return this.appState.prizeHandler ? this.appState.prizeHandler.getCountdownDescription() : ""
                    },
                    getSeriesNumber: function() {
                        return this.appState.questHandler ? this.appState.questHandler.currentSeriesNumber : -1
                    },
                    showQuizControls: function() {
                        return this.view.isWinner || this.view.canReplay
                    }
                },
                created: function() {},
                mounted: function() {
                    var e = this;
                    this.$root.$on("app:newSeriesStarted", this.newSeriesStarted.bind(this)), this.replayInterval = window.setInterval(this.updateCanReplay.bind(this), 1e3), Te.questHandler.canStillPlay() && this.startCountdown(), (this.isPrizeOnReachScore() ? this.refreshUserProfile() : Promise.resolve(this.profile)).then((function(t) {
                        var n = e.checkWinner(t);
                        n && Je && (Je = !1, e.$nextTick((function() {
                            return e.$root.$emit("summary:viewPrize")
                        })))
                    }))
                },
                beforeDestroy: function() {
                    window.clearInterval(this.replayInterval), this.$root.$off("app:newSeriesStarted")
                },
                methods: {
                    isPrizeOnReachScore: function() {
                        return Te.prizeHandler && Te.prizeHandler.prize && Te.prizeHandler.prize.type === Ke.ENOUGH_POINTS
                    },
                    newSeriesStarted: function() {
                        this.prepareUserForNewSeries(), this.view.hasLeaderboard && this.prepareLeaderboardForNewSeries(), this.updateCanReplay(), this.startCountdown()
                    },
                    handleCountdownEnd: function() {
                        var e = this;
                        this.animateCountdownOver(), this.refreshUserProfile().then((function(t) {
                            var n = e.checkWinner(t);
                            n && e.$nextTick((function() {
                                return e.$root.$emit("summary:viewPrize")
                            }))
                        })).finally((function() {
                            e.view.hasLeaderboard && e.$refs.leaderboard.stopRefresh(), window.setTimeout((function() {
                                e.$root.$emit("summary:startNewSeries")
                            }), xe.delayNewSeriesStart)
                        }))
                    },
                    refreshUserProfile: function() {
                        var e = this;
                        return this.$SDK.quest.getUserProfile().then((function(t) {
                            return e.$root.$emit("app:patchProfile", t), t
                        })).catch(Ie)
                    },
                    prepareUserForNewSeries: function() {
                        this.$root.$emit("app:patchProfile", {
                            points: 0,
                            bestScore: 0,
                            currentRound: 0,
                            poition: null
                        })
                    },
                    handleUserScoreUpdate: function(e) {
                        this.$root.$emit("app:patchProfile", e.userScore || {}), this.totalParticipants = e.totalParticipants
                    },
                    prepareLeaderboardForNewSeries: function() {
                        var e = this;
                        this.$nextTick((function() {
                            e.$refs.leaderboard.fetchHistory(Te.questHandler.currentSeriesNumber - 1), e.$refs.leaderboard.clean(), e.$refs.leaderboard.pauseRefresh(xe.pauseRefreshAfterSeries)
                        }))
                    },
                    checkWinner: function(e) {
                        return !!Te.prizeHandler && (this.view.isWinner = Te.prizeHandler.checkWinner(e), this.view.isWinner)
                    },
                    updateCanReplay: function() {
                        Te.questHandler && (this.view.canReplay = Te.questHandler.canUserReplay(this.profile, xe.replayTimeLimit))
                    },
                    startCountdown: function() {
                        var e = Te.questHandler;
                        e && e.canStillPlay() && this.$refs.countdown.start(e.currentSeriesEndTs)
                    },
                    animateCountdownOver: function() {
                        var e = this;
                        this.view.animateCountdown = !0, window.setTimeout((function() {
                            e.view.animateCountdown = !1
                        }), 3e3)
                    }
                }
            },
            Qe = Ve,
            Ye = (n("9fda"), Object(z["a"])(Qe, ee, te, !1, null, "b3b66ecc", null)),
            Ze = Ye.exports,
            Xe = {
                name: "App",
                components: {
                    IntroPage: T,
                    GamePage: X,
                    SummaryPage: Ze
                },
                created: function() {
                    this.$SDK.onInit(this.initialize)
                },
                mounted: function() {
                    this.$root.$on("summary:playAgain", this.playNewRound.bind(this)), this.$root.$on("summary:viewPrize", this.viewPrize.bind(this)), this.$root.$on("summary:startNewSeries", this.startNewSeries.bind(this)), this.$root.$on("app:patchProfile", this.patchProfileProps.bind(this))
                },
                beforeDestroy: function() {
                    this.$root.$off("summary:playAgain"), this.$root.$off("summary:viewPrize"), this.$root.$off("summary:startNewSeries"), this.$root.$off("app:patchProfile")
                },
                computed: {
                    background: function() {
                        return this.branding ? this.branding.backgroundImage ? {
                            backgroundImage: "url(".concat(this.branding.backgroundImage, ")")
                        } : this.branding.backgroundColor ? {
                            backgroundColor: this.branding.backgroundColor
                        } : {
                            backgroundColor: xe.backgroundColor
                        } : {
                            backgroundColor: xe.backgroundColor
                        }
                    },
                    showSponsors: function() {
                        return !this.view.loading && this.sponsors.hasSponsors
                    },
                    getHelpOptions: function() {
                        return {
                            title: this.$SDK.getActivationName() || "Simon Says",
                            headerImg: this.branding.onboardingHeaderImage,
                            activationId: this.$SDK.getActivationId(),
                            openOnLoad: !this.$SDK.isConsoleUser()
                        }
                    },
                    getPrizeOptions: function() {
                        return {
                            manualTrigger: !1
                        }
                    },
                    getChallengeDuration: function() {
                        return this.appState.quest ? this.appState.quest.challengeDuration : 0
                    },
                    getSeriesEnd: function() {
                        return this.appState.questHandler ? this.appState.questHandler.currentSeriesEndTs : 0
                    }
                },
                data: function() {
                    return {
                        appState: Te,
                        defaultData: {
                            customImage: "./img/default-prize.svg"
                        },
                        cta: {},
                        ctaEnabled: !1,
                        custom: {},
                        branding: {},
                        sponsors: {},
                        playing: !1,
                        won: !1,
                        shareUrl: void 0,
                        view: {
                            loading: !0,
                            pageName: "",
                            theme: "light"
                        }
                    }
                },
                methods: {
                    initialize: function() {
                        var e = this,
                            t = this.$SDK.activation.getConfig();
                        this.$set(this.appState, "activationConfig", t), this.shareUrl = t.sharingEnabled ? t.shareUrl : null, k(t.language), this.initBranding(t.branding), this.initSponsors(t.sponsor, t.showSponsor), this.initCustomData(t.custom), this.initCta(t.cta, t.showCta), this.initQuest(this.$SDK.activation.activeChangeTs).then((function(n) {
                            return e.initPrize(n, t.prize), e.initUserState(t.custom)
                        })).finally((function() {
                            e.view.loading = !1, C.injectStagecastBadge(t.branding.theme, e.$SDK.badgeStatus())
                        }))
                    },
                    initSponsors: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        this.sponsors = C.initSponsors(e, t)
                    },
                    initCta: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = C.initCta(e, t),
                            r = Object(o["a"])(n, 2);
                        this.cta = r[0], this.ctaEnabled = r[1]
                    },
                    initBranding: function(e) {
                        this.branding = C.initBranding(e)
                    },
                    initCustomData: function(e) {
                        var t = Object.assign({}, e);
                        m(t.helpHeaderImg) ? t.helpHeaderImg = t.helpHeaderImg[0] : t.helpHeaderImg = null, m(t.winHeaderImg) ? t.winHeaderImg = t.winHeaderImg[0] : t.winHeaderImg = null, m(t.gameSponsorImage) ? t.gameSponsorImage = t.gameSponsorImage[0] : t.gameSponsorImage = this.defaultData.gameSponsorImage, t.buttonImages = Object.values(t.buttonImages), this.custom = t
                    },
                    initUserState: function() {
                        var e = this;
                        return this.$SDK.quest.getUserProfile().then((function(t) {
                            e.appState.profile = t, e.showPage(t ? "summary" : "introbox")
                        })).catch((function(t) {
                            e.showPage("introbox")
                        }))
                    },
                    initQuest: function(e) {
                        var t = this;
                        return this.$SDK.quest.getQuest().then((function(n) {
                            var r = {
                                seriesOverHandler: t.seriesOverHandler.bind(t)
                            };
                            t.appState.quest = n, t.appState.questHandler = new Ae(n, e, r)
                        })).catch((function(e) {
                            t.showError(e)
                        })).finally((function() {
                            t.appState.quest || (t.appState.quest = {})
                        }))
                    },
                    initPrize: function(e, t) {
                        t && this.$SDK.prize.enabled ? this.$set(this.appState, "prize", t) : this.appState.prize = null, this.appState.prizeHandler = new Fe(e, t)
                    },
                    patchProfileProps: function(e) {
                        var t = Object.assign({}, this.appState.profile);
                        Object.keys(e).map((function(n) {
                            t[n] = e[n]
                        })), this.appState.profile = t
                    },
                    createProfile: function(e) {
                        var t = this;
                        v(this.$SDK.quest.setUserProfile(e), 3).then((function(e) {
                            t.appState.profile = e, t.appState.questHandler.canStillPlay() ? t.playNewRound() : t.showPage("summary")
                        })).catch((function(e) {
                            console.error(e), t.appState.profile = {}, t.showError(e, t.$t("intro.playerLimitError"), "warn")
                        }))
                    },
                    handleGameOver: function() {
                        this.showPage("summary"), this.showCtaPopup()
                    },
                    viewPrize: function() {
                        this.appState.prize && this.$refs.prizePopup.show()
                    },
                    startNewSeries: function() {
                        var e = this.appState.questHandler.prepareNewSeries();
                        e && this.$root.$emit("app:newSeriesStarted")
                    },
                    showCtaPopup: function() {
                        this.ctaEnabled && this.$refs.ctaPopup.show({
                            delay: xe.ctaDisplayTimeout
                        })
                    },
                    hideCtaPopup: function() {
                        this.ctaEnabled && this.$refs.ctaPopup.hide()
                    },
                    seriesOverHandler: function() {
                        this.isPageVisible("quiz") && this.$root.$emit("app:questRoundInterrupt")
                    },
                    playNewRound: function() {
                        var e = this;
                        this.hideCtaPopup(), this.$SDK.quest.playNewRound({
                            token: "broken_token"
                        }).then((function(t) {
                            e.appState.profile = t, e.showPage("game")
                        })).catch(Ie)
                    },
                    isPageVisible: function(e) {
                        return this.view.pageName === e
                    },
                    showPage: function(e) {
                        this.view.pageName = e
                    },
                    showError: function(e, t, n) {
                        Ie(e, t, n)
                    }
                }
            },
            et = Xe,
            tt = (n("5c0b"), Object(z["a"])(et, i, a, !1, null, null, null)),
            nt = tt.exports,
            rt = n("a925");
        r["default"].use(rt["a"]);
        var it = {
                en: Object(d["a"])({}, n("5ab8").default, {
                    help: {
                        howto: ["Remember the pattern and repeat it by clicking the buttons in the correct order.", "Each round, the pattern length increases by one.", "The faster you click the pattern the more points you earn.", "Your final score is calculated based on how many patterns you repeated correctly. The score determines your rank in the leaderboard."]
                    },
                    intro: {
                        title: "Remember the Seqeunce",
                        subtitle: "The quicker you answer, the more points you earn.",
                        placeholder: "Type your name...",
                        button: "Start Game",
                        info: "characters left"
                    },
                    game: {
                        gameOver: "Game Over",
                        time: "Time",
                        score: "Your Score",
                        memorize: "Memorize the pattern",
                        click: "Click the pattern!",
                        correct: "Correct!",
                        incorrect: "End of Game"
                    },
                    end: {
                        round: "Round",
                        header: {
                            last: "Latest Score",
                            best: "Best Score",
                            rank: "Your Rank",
                            prizeButton: "Your Prize",
                            playButton: "Play Again"
                        },
                        countdown: {
                            title: "Countdown",
                            noprize: "Climb to the top of the leaderboard before the countdown runs out!",
                            prizeTopRanking: "Climb to the <strong>top {num}</strong> of the leaderboard before the countdown runs out!",
                            prizeEnoughPoints: "Reach <strong>{num}</strong>p before the countdown runs out!"
                        },
                        leaderboard: {
                            title: "Leaderboard",
                            loading: "Loading top scores",
                            wait: "Please wait...",
                            updating: "Updating Live",
                            info: "Play again in order to get ranked on the new leaderboard.",
                            empty: "No one played in this round."
                        }
                    }
                }),
                it: Object(d["a"])({}, n("ccbb").default, {
                    help: {
                        howto: ["Ricorda il pattern e ripetilo premendo sui bottoni nell' ordine in cui vengono evidenziati.", "La lunghezza del pattern da ricordare aumenta ad ogni round.", "Più velocemente riesci a ripetere il pattern, più punti ottieni.", "Il tuo punteggio finle viene calcolato in base al numero di pattern ripetuti correttamente. Il punteggio determina la tua posizione nella classifica generale."]
                    },
                    intro: {
                        title: "Ricorda la Sequenza",
                        subtitle: "Più rapidamente risponderai, più punti otterrai.",
                        placeholder: "Inserisci il tuo nome...",
                        button: "Gioca",
                        info: "lettere rimaste"
                    },
                    game: {
                        gameOver: "Game Over",
                        time: "Tempo",
                        memorize: "Memorizza la sequenza",
                        click: "Ora riproduci la sequenza!",
                        correct: "Correct!",
                        incorrect: "Fine del gioco",
                        score: "Punteggio"
                    },
                    end: {
                        round: "Round",
                        header: {
                            last: "Punti",
                            best: "Migliore",
                            rank: "Posizione",
                            prizeButton: "Vai al Premio",
                            playButton: "Gioca Ancora"
                        },
                        countdown: {
                            title: "Countdown",
                            noprize: "Scala la classifica fino alla vetta prima che finisca il tempo!",
                            prizeTopRanking: "Scala la classifica fino alla <strong>posizione {num}</strong> prima che il tempo finisca!",
                            prizeEnoughPoints: "Raggiungi <strong>{num}</strong>p prima che il tempo finisca!"
                        },
                        leaderboard: {
                            title: "Classifica",
                            loading: "Caricamento dei risultati...",
                            wait: "Attendere...",
                            updating: "In tempo reale",
                            info: "Partecipa di nuovo al quiz per assicurarti un posto nella classifica.",
                            empty: "Nessuno ha partecipato in questo round."
                        }
                    }
                }),
                sv: Object(d["a"])({}, n("cdc4").default, {
                    help: {
                        howto: ["Kom ihåg mönstret och upprepa det genom att klicka på knapparna i rätt ordning.", "I varje runda ökar mönstrets längd med ett.", "Ju snabbare du klickar mönstret desto mer poäng får du.", "Din slutgiltiga poäng räknas ut beroende på hur många mönster du upprepat korrekt. Poängen avgör din placering på poänglistan."]
                    },
                    intro: {
                        title: "Kom ihåg sekvensen",
                        subtitle: "Ju snabbare du svarar, desto fler poäng får du.",
                        placeholder: "Skriv ditt namn...",
                        button: "Starta spelet",
                        info: "tecken kvar"
                    },
                    game: {
                        gameOver: "Spelet över",
                        time: "Tid",
                        memorize: "Kom ihåg mönstret",
                        click: "Klicka på mönstret!",
                        correct: "Korrekt!",
                        incorrect: "Slut på spelet",
                        score: "Dina Poäng"
                    },
                    end: {
                        round: "Omgång ",
                        header: {
                            last: "Senaste Resultat",
                            best: "Bästa Resultat",
                            rank: "Din Ranking",
                            prizeButton: "Din Vinst",
                            playButton: "Börja Om"
                        },
                        countdown: {
                            title: "Countdown",
                            noprize: "Klättra till toppen av listan innan nedräkningen är över!",
                            prizeTopRanking: "Klättra till <strong>topp {num}</strong> på listan innan nedräkningen är över!",
                            prizeEnoughPoints: "Samla <strong>{num}</strong>p innan nedräkningen är över!"
                        },
                        leaderboard: {
                            title: "Topplista",
                            loading: "Laddar högsta poängen",
                            wait: "Vänta...",
                            updating: "Uppdateras automatiskt",
                            info: "Spela igen för att ta dig in på resultattavlan",
                            empty: "Ingen har spelat denna runda."
                        }
                    }
                }),
                de: Object(d["a"])({}, n("6413").default, {
                    help: {
                        howto: ["Merke dir das Muster und wiederhole es, indem du auf die Schaltflächen in der richtigen Reihenfolge klickst.", "Mit jeder Runde erhöht sich die Musterlänge um 1.", "Je schneller du das Muster klickst, desto mehr Punkte erhältst du.", "Deine endgültige Punktzahl wird basierend auf der Anzahl der Muster berechnet, die du korrekt wiederholt hast. Die Punktzahl bestimmt deinen Rang in der Rangliste."]
                    },
                    intro: {
                        title: "Merk' dir die Reihenfolge",
                        subtitle: "Je schneller du die Reihenfolge wiedergibst, desto mehr Punkte erhältst du.",
                        placeholder: "Dein Name",
                        button: "Spielen",
                        info: "Zeichen"
                    },
                    game: {
                        gameOver: "Spiel vorbei",
                        time: "Zeit",
                        memorize: "Merk' dir die Reihenfolge",
                        click: "Klick die Buttons in richtiger Reihenfolge",
                        correct: "Richtig!",
                        incorrect: "Spiel vorbei",
                        score: "Punktzahl"
                    },
                    end: {
                        round: "Runde",
                        header: {
                            last: "Letzte Punktzahl",
                            best: "Beste Punktzahl",
                            rank: "Deine Platzierung",
                            prizeButton: "Dein Preis",
                            playButton: "Nochmal spielen"
                        },
                        countdown: {
                            title: "Countdown",
                            noprize: "Erreiche die Spitze der Rangliste bevor der Countdown endet.",
                            prizeTopRanking: "Erreiche die <strong>Top {num}</strong> der Rangliste bevor der Countdown endet.",
                            prizeEnoughPoints: "Erziele mindestens <strong>{num}</strong>p bevor der Countdown endet."
                        },
                        leaderboard: {
                            title: "Bestenliste",
                            loading: "Lade Top-Platzierungen",
                            wait: "Bitte warten...",
                            updating: "Ergebnisse werden aktualisiert",
                            info: "Spiel nochmal, damit du auf der neuen Rangliste erscheinst.",
                            empty: "In dieser Runde hat niemand teilgenommen."
                        }
                    }
                }),
                da: Object(d["a"])({}, n("9b57").default, {
                    help: {
                        howto: ["Husk mønsteret og gentag det ved at klikke på knapperne i den rigtige rækkefølge.", "Hver runde øges mønsterlængden med en.", "Jo hurtigere du klikker på mønsteret, jo flere point optjener du.", "Din endelige score beregnes ud fra, hvor mange mønstre du gentog korrekt. Scoren bestemmer din rang på leaderboardet."]
                    },
                    intro: {
                        title: "Husk Mønstret",
                        subtitle: "Jo hurtigere du svarer, jo flere point optjener du.",
                        placeholder: "Indtast dit navn ...",
                        button: "Start Spil",
                        info: "tegn tilbage"
                    },
                    game: {
                        gameOver: "Spillet er slut",
                        time: "Tid",
                        score: "Din score",
                        memorize: "Husk mønsteret",
                        click: "Klik på mønsteret!",
                        correct: "Korrekt!",
                        incorrect: "Spillets afslutning"
                    },
                    end: {
                        round: "Runde",
                        header: {
                            last: "Seneste Score",
                            best: "Bedst Score",
                            rank: "Din Rang",
                            prizeButton: "Din Præmie",
                            playButton: "Spil igen"
                        },
                        countdown: {
                            title: "Nedtælling",
                            noprize: "Klatre til toppen af ​​leaderboardet, før nedtællingen løber ud!",
                            prizeTopRanking: "Klatre til <strong>top {num}</strong> på leaderboardet, før nedtællingen løber ud!",
                            prizeEnoughPoints: "Nå <strong>{num}</strong>p inden nedtællingen løber ud!"
                        },
                        leaderboard: {
                            title: "Leaderboard",
                            loading: "Indlæser topscorer",
                            wait: "Vent venligst...",
                            updating: "Opdatering Live",
                            info: "Spil igen for at blive rangeret på det nye leaderboard.",
                            empty: "Ingen spillede i denne runde."
                        }
                    }
                }),
                ru: Object(d["a"])({}, n("c24f").default, {
                    help: {
                        howto: ["Запомните узор и повторите его, нажимая кнопки в правильном порядке.", "Каждый раунд длина выкройки увеличивается на единицу.", "Чем быстрее вы щелкнете по шаблону, тем больше очков вы заработаете.", "Ваш окончательный результат рассчитывается на основе того, сколько шаблонов вы повторили правильно. Оценка определяет ваше место в таблице лидеров."]
                    },
                    intro: {
                        title: "Запомнить последовательность",
                        subtitle: "Чем быстрее вы ответите, тем больше очков вы заработаете.",
                        placeholder: "Введите свое имя...",
                        button: "Начать игру",
                        info: "осталось символов"
                    },
                    game: {
                        gameOver: "Игра закончена",
                        time: "Время",
                        score: "Твой счет",
                        memorize: "Запомни образец",
                        click: "Щелкните по выкройке!",
                        correct: "Правильный!",
                        incorrect: "Конец игры"
                    },
                    end: {
                        round: "Круглый",
                        header: {
                            last: "Последний счет",
                            best: "Лучший результат",
                            rank: "Ваш рейтинг",
                            prizeButton: "Ваш приз",
                            playButton: "Играть снова"
                        },
                        countdown: {
                            title: "Обратный отсчет",
                            noprize: "Поднимитесь на вершину таблицы лидеров, пока не закончился обратный отсчет!",
                            prizeTopRanking: "Поднимитесь на <strong> верхнюю {num} </strong> таблицу лидеров, пока не закончился обратный отсчет!",
                            prizeEnoughPoints: "Достигните <strong> {num} </strong> p до окончания обратного отсчета!"
                        },
                        leaderboard: {
                            title: "Таблица лидеров",
                            loading: "Загрузка рекордов",
                            wait: "Подождите пожалуйста...",
                            updating: "обновление в прямом эфире",
                            info: "Играйте снова, чтобы попасть в новую таблицу лидеров.",
                            empty: "В этом туре никто не играл."
                        }
                    }
                }),
                es: Object(d["a"])({}, n("0503").default, {
                    help: {
                        howto: ["Recuerda el patrón y repítelo haciendo clic en los botones en el orden correcto.", "En cada ronda, la longitud del patrón aumenta en uno.", "Cuanto más rápido haga clic en el patrón, más puntos ganará.", "Su puntaje final se calcula en función de la cantidad de patrones que repitió correctamente. La puntuación determina tu posición en la clasificación."]
                    },
                    intro: {
                        title: "Recuerda la secuencia",
                        subtitle: "Cuanto más rápido respondas, más puntos ganarás.",
                        placeholder: "Cuanto más rápido respondas, más puntos ganarás.",
                        button: "Empezar juego",
                        info: "caracteres restantes"
                    },
                    game: {
                        gameOver: "Juego terminado",
                        time: "Time",
                        score: "Tu puntuación",
                        memorize: "Memoriza el patrón",
                        click: "¡Haz clic en el patrón!",
                        correct: "¡Haz clic en el patrón!",
                        incorrect: "Fin del juego"
                    },
                    end: {
                        round: "Ronda",
                        header: {
                            last: "Última puntuación",
                            best: "Última puntuación",
                            rank: "Su rango",
                            prizeButton: "Su rango",
                            playButton: "Juega de nuevo"
                        },
                        countdown: {
                            title: "cuenta regresiva",
                            noprize: "¡Sube a lo más alto de la clasificación antes de que se acabe la cuenta atrás!",
                            prizeTopRanking: "¡Sube al <strong>top {num}</strong> de la clasificación antes de que acabe la cuenta atrás!",
                            prizeEnoughPoints: "¡Alcanza <strong>{num}</strong>p antes de que acabe la cuenta atrás!"
                        },
                        leaderboard: {
                            title: "Marcador",
                            loading: "Cargando puntuaciones máximas",
                            wait: "Espere por favor...",
                            updating: "Actualizando en vivo",
                            info: "Juega de nuevo para clasificarte en la nueva clasificación.",
                            empty: "Nadie jugó en esta ronda."
                        }
                    }
                }),
                fr: Object(d["a"])({}, n("80b1").default, {
                    help: {
                        howto: ["Rappelez-vous le motif et répétez-le en cliquant sur les boutons dans le bon ordre.", "À chaque tour, la longueur du motif augmente de un.", "Plus vite vous cliquez sur le motif, plus vous gagnez de points.", "Votre score final est calculé en fonction du nombre de motifs que vous avez répétés correctement. Le score détermine votre rang dans le classement."]
                    },
                    intro: {
                        title: "Rappelez-vous la séquence",
                        subtitle: "Plus vous répondez rapidement, plus vous gagnez de points.",
                        placeholder: "Tapez votre nom...",
                        button: "Démarrer jeu",
                        info: "caractères restants"
                    },
                    game: {
                        gameOver: "Jeu terminé",
                        time: "Temps",
                        score: "Ton score",
                        memorize: "Mémorisez le motif",
                        click: "Cliquez sur le motif !",
                        correct: "Cliquez sur le motif !",
                        incorrect: "Fin de partie"
                    },
                    end: {
                        round: "Tour",
                        header: {
                            last: "Dernière note",
                            best: "Meilleur score",
                            rank: "Ton rang",
                            prizeButton: "Votre prix",
                            playButton: "Rejouer"
                        },
                        countdown: {
                            title: "Compte à rebours",
                            noprize: "Montez au sommet du classement avant la fin du compte à rebours !",
                            prizeTopRanking: "Montez dans le <strong>top {num}</strong> du classement avant la fin du compte à rebours !",
                            prizeEnoughPoints: "Atteignez <strong>{num}</strong>p avant la fin du compte à rebours!"
                        },
                        leaderboard: {
                            title: "Classement",
                            loading: "Chargement des meilleurs scores",
                            wait: "S’il vous plaît, attendez...",
                            updating: "Mise à jour en direct",
                            info: "Rejouez pour être classé dans le nouveau classement.",
                            empty: "Personne n’a joué dans ce tour."
                        }
                    }
                })
            },
            at = new rt["a"]({
                locale: "en",
                fallbackLocale: "en",
                messages: it
            }),
            ot = at,
            st = n("632a"),
            ut = n.n(st);
        n("2140");
        r["default"].config.productionTip = !1, r["default"].use(ut.a, {
            i18n: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return ot.t(e, t)
            }
        }), window.Stagecast && (r["default"].prototype.$SDK = new window.Stagecast, window.vm = new r["default"]({
            i18n: ot,
            render: function(e) {
                return e(nt)
            }
        }).$mount("#app"))
    },
    5786: function(e, t, n) {
        "use strict";
        var r = n("cc17"),
            i = n.n(r);
        i.a
    },
    "588c": function(e, t, n) {
        "use strict";
        var r = n("a387"),
            i = n.n(r);
        i.a
    },
    "5c0b": function(e, t, n) {
        "use strict";
        var r = n("9c0c"),
            i = n.n(r);
        i.a
    },
    "60d2": function(e, t, n) {},
    "611c": function(e, t, n) {
        "use strict";
        var r = n("d403"),
            i = n.n(r);
        i.a
    },
    6996: function(e, t, n) {
        "use strict";
        var r = n("4389"),
            i = n.n(r);
        i.a
    },
    "6b69": function(e, t, n) {},
    8479: function(e, t, n) {
        e.exports = n.p + "img/empty.91340e49.svg"
    },
    "9c0c": function(e, t, n) {},
    "9ebc": function(e, t, n) {
        "use strict";
        var r = n("6b69"),
            i = n.n(r);
        i.a
    },
    "9fda": function(e, t, n) {
        "use strict";
        var r = n("f934"),
            i = n.n(r);
        i.a
    },
    a387: function(e, t, n) {},
    a435: function(e, t, n) {},
    a4ff: function(e, t, n) {},
    a8ab: function(e, t, n) {
        e.exports = n.p + "img/empty-friend.9a3e4a63.svg"
    },
    a9251: function(e, t, n) {
        e.exports = n.p + "img/empty.29ff0693.svg"
    },
    aaca: function(e, t, n) {
        e.exports = n.p + "img/empty-friend.844cb0e8.svg"
    },
    bb9a: function(e, t, n) {
        "use strict";
        var r = n("cbc5"),
            i = n.n(r);
        i.a
    },
    c934: function(e, t, n) {
        "use strict";
        var r = n("60d2"),
            i = n.n(r);
        i.a
    },
    cbc5: function(e, t, n) {},
    cc17: function(e, t, n) {},
    d403: function(e, t, n) {},
    e018: function(e, t, n) {
        "use strict";
        var r = n("a4ff"),
            i = n.n(r);
        i.a
    },
    ea2e: function(e, t, n) {},
    f934: function(e, t, n) {},
    fc72: function(e, t, n) {
        e.exports = n.p + "img/preloader.fc7321a1.svg"
    },
    fe62: function(e, t, n) {
        "use strict";
        var r = n("ea2e"),
            i = n.n(r);
        i.a
    }
});