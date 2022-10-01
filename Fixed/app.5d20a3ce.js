(function(e) {
	function t(t) {
		for (var i, o, s = t[0], l = t[1], u = t[2], d = 0, p = []; d < s.length; d++) o = s[d], Object.prototype.hasOwnProperty.call(r, o) && r[o] && p.push(r[o][0]), r[o] = 0;
		for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]);
		c && c(t);
		while (p.length) p.shift()();
		return a.push.apply(a, u || []), n()
	}

	function n() {
		for (var e, t = 0; t < a.length; t++) {
			for (var n = a[t], i = !0, s = 1; s < n.length; s++) {
				var l = n[s];
				0 !== r[l] && (i = !1)
			}
			i && (a.splice(t--, 1), e = o(o.s = n[0]))
		}
		return e
	}
	var i = {},
		r = {
			app: 0
		},
		a = [];

	function o(t) {
		if (i[t]) return i[t].exports;
		var n = i[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return e[t].call(n.exports, n, n.exports, o), n.l = !0, n.exports
	}
	o.m = e, o.c = i, o.d = function(e, t, n) {
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
			for (var i in e) o.d(n, i, function(t) {
				return e[t]
			}.bind(null, i));
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
		l = s.push.bind(s);
	s.push = t, s = s.slice();
	for (var u = 0; u < s.length; u++) t(s[u]);
	var c = l;
	a.push([0, "chunk-vendors"]), n()
})({
	0: function(e, t, n) {
		e.exports = n("56d7")
	},
	"0bd2": function(e, t, n) {},
	"274a": function(e, t, n) {
		"use strict";
		var i = n("0bd2"),
			r = n.n(i);
		r.a
	},
	"2c27": function(e, t, n) {
		e.exports = n.p + "img/empty.306f5f3d.svg"
	},
	"440c": function(e, t, n) {
		"use strict";
		var i = n("a435"),
			r = n.n(i);
		r.a
	},
	"4e6f": function(e, t, n) {},
	"56d7": function(e, t, n) {
		"use strict";
		n.r(t);
		n("e260"), n("e6cf"), n("cca6"), n("a79d");
		var i = n("2b0e"),
			r = function() {
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
					},
					on: {
						claimPrize: function(t) {
							return e.handlePrizeClaim(t)
						}
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
						profileUpdates: function(t) {
							return e.handleProfileCreate(t)
						}
					}
				}) : e._e(), e.isPageVisible("game") ? n("GamePage", {
					attrs: {
						custom: e.custom,
						profile: e.appState.profile,
						quest: e.appState.quest
					},
					on: {
						gameOver: function(t) {
							return e.handleGameOver(t)
						}
					}
				}) : e._e(), e.isPageVisible("summary") ? n("SummaryPage", {
					attrs: {
						profile: e.appState.profile,
						quest: e.appState.quest,
						enableLeaderboard: e.custom.enableLeaderboard
					}
				}) : e._e()], 1)])]), e.showSponsors ? n("ScSponsorBanner", {
					attrs: {
						sponsor: e.sponsors
					}
				}) : e._e(), e.view.loading ? e._e() : n("ScFooter")], 1)
			},
			a = [],
			o = (n("d81d"), n("b64b"), n("d3b7"), n("3835")),
			s = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", {}, [n("intro-box", {
					on: {
						profileUpdates: function(t) {
							return e.handleProfileUpdate(t)
						}
					}
				})], 1)
			},
			l = [],
			u = function() {
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
			c = [],
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
			return e.catch((function(i) {
				return n++, n < t ? (console.warn("retry call..."), v(e, t - n)) : Promise.reject(i)
			}))
		}

		function b() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4;
			return w(Math.round(Math.random() * (Math.pow(10, parseInt(e)) - 1)), e, "0")
		}

		function w(e, t, n) {
			for (var i = parseInt(t) - String(e).length, r = String(e), a = 0; a < i; a++) r = String(n) + r;
			return r
		}

		function S(e, t) {
			var n = null;
			return function() {
				clearTimeout(n);
				var i = arguments,
					r = this;
				n = setTimeout((function() {
					e.apply(r, i)
				}), t)
			}
		}

		function y(e) {
			var t = ["", "k", "M", "G", "T", "P", "E"],
				n = Math.log10(e) / 3 | 0;
			if (0 === n) return e;
			var i = t[n],
				r = Math.pow(10, 3 * n),
				a = e / r;
			return a.toFixed(1) + i
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
							i = !1;
						return t && e && (n = Object.assign({}, e), n.createdTimestamp = window.vm.$SDK.activation.activeChangeTs, n.headerImg = f(e.headerImg), i = !0), [n, i]
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
						this.$emit("profileUpdates", {
							name: "".concat(t, "#").concat(e)
						})
					},
					onInputChange: function() {
						this.isDisabled = this.name.length < this.minLen, this.name.length > this.maxLen && (this.name = this.name.slice(0, this.maxLen))
					}
				}
			},
			_ = P,
			$ = (n("cf54"), n("2877")),
			z = Object($["a"])(_, u, c, !1, null, "60e6b2d6", null),
			O = z.exports,
			x = {
				name: "IntroPage",
				components: {
					IntroBox: O
				},
				props: {},
				data: function() {
					return {}
				},
				computed: {},
				methods: {
					handleProfileUpdate: function(e) {
						this.$emit("profileUpdates", e)
					}
				}
			},
			T = x,
			I = (n("ae3e"), Object($["a"])(T, s, l, !1, null, "33e5cfde", null)),
			j = I.exports,
			L = function() {
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
							return e.gameOver(t)
						}
					}
				})
			},
			R = [],
			q = function() {
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
						gold: e.goldenPoints, green: !e.goldenPoints
					}
				}, [n("span", [e._v(e._s(e.$t("game.score")))]), n("transition", {
					attrs: {
						name: "update"
					}
				}, [n("span", {
					key: e.currentScore,
					staticClass: "text-bold right-info"
				}, [e._v(e._s((e.currentScore || 0).toLocaleString("de-DE")) + " p")])])], 1)]), n("Game", {
					ref: "game",
					on: {
						updateScore: function(t) {
							return e.updateScore(t)
						},
						gameOver: function(t) {
							return e.gameOver(t)
						}
					}
				})], 1)
			},
			N = [],
			B = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", {
					staticClass: "whack-a-mole"
				}, [n("div", {
					staticClass: "timer-box"
				}, [n("div", {
					staticClass: "timer-digit"
				}, [e._v(e._s(e.timeLeft[0]))]), n("div", {
					staticClass: "timer-digit"
				}, [e._v(e._s(e.timeLeft[1]))]), n("div", {
					staticClass: "timer-colon"
				}, [e._v(":")]), n("div", {
					staticClass: "timer-digit"
				}, [e._v(e._s(e.timeLeft[2]))]), n("div", {
					staticClass: "timer-digit"
				}, [e._v(e._s(e.timeLeft[3]))])]), n("div", {
					attrs: {
						id: "whack-a-mole-box"
					}
				}, [n("div", {
					staticClass: "instruction-text text-bold"
				}, [e._v(" " + e._s(e.instructions[e.status]) + " ")]), n("div", {
					ref: "moleContainer",
					staticClass: "mole-container",
					class: {
						hidden: !e.showMolesBoard
					}
				}, [e._l(e.moles, (function(t, i) {
					return [n("button", {
						key: i,
						ref: "moleButton",
						refInFor: !0,
						staticClass: "mole",
						class: {
							shown: t.active, golden: t.golden
						}
					}, [n("div", {
						staticClass: "mole-content"
					}, [t.active ? n("img", {
						staticClass: "mole-img",
						attrs: {
							draggable: "false",
							alt: "mole",
							src: e.options.gameButtonImage
						}
					}) : e._e(), n("transition", {
						attrs: {
							name: "appear"
						}
					}, [n("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: e.showPoints[i],
							expression: "showPoints[index]"
						}],
						staticClass: "fading-points"
					}, [e._v("+" + e._s(e.scoreUpdate) + "p")])])], 1)])]
				}))], 2)])])
			},
			D = [],
			E = (n("cb29"), [].fill(-1, 0, 8)),
			M = {
				name: "Game",
				props: {},
				data: function() {
					return {
						showMolesBoard: !1,
						gameIsOver: !1,
						duration: 0,
						endTime: void 0,
						options: {},
						scoreUpdate: 0,
						scoreBoost: 1,
						roundScore: 0,
						status: "click",
						instructions: {
							click: this.$t("game.click")
						},
						moles: [{
							active: !1,
							golden: !1
						}, {
							active: !1,
							golden: !1
						}, {
							active: !1,
							golden: !1
						}, {
							active: !1,
							golden: !1
						}, {
							active: !1,
							golden: !1
						}, {
							active: !1,
							golden: !1
						}, {
							active: !1,
							golden: !1
						}, {
							active: !1,
							golden: !1
						}, {
							active: !1,
							golden: !1
						}],
						showPoints: [],
						totalClicks: 0,
						interval: void 0,
						timePassed: 0,
						moleGeneration: void 0,
						goldenMoleGeneration: void 0
					}
				},
				computed: {
					timeLeft: function() {
						var e = this.duration / 1e3 - this.timePassed,
							t = Date.now();
						(e <= 0 || this.endTime - t < 0) && (clearInterval(this.interval), clearTimeout(this.moleGeneration), clearInterval(this.goldenMoleGeneration), "undefined" !== typeof this.endTime && this.gameOver());
						var n = Math.floor(e / 60),
							i = e % 60;
						return i < 10 && (i = "0" + String(i)), n < 10 && (n = "0" + String(n)), String(n) + String(i)
					},
					moleGenTime: function() {
						var e = this.timeLeft / (this.duration / 1e3);
						return e >= .95 ? 1e3 : e >= .85 ? 900 : e >= .75 ? 800 : e >= .65 ? 700 : e >= .55 ? 600 : e >= .45 ? 500 : 400
					},
					moleTimeout: function() {
						var e = 1e3 * parseInt(this.timeLeft) / this.duration;
						return e >= .85 ? 1200 : e >= .75 ? 1100 : e >= .65 ? 1e3 : 900
					}
				},
				beforeDestroy: function() {
					window.removeEventListener("resize", this.setMoleBoardHeight)
				},
				methods: {
					startGame: function(e, t) {
						this.duration = e, this.endTime = (new Date).getTime() + e, this.options = t, this.checkBoardWidth(), this.addMoleListeners(), this.generateMoles(), this.startGameTimer(), this.startGeneratingGoldenMoles()
					},
					gameOver: function() {
						this.resetMoles(), this.gameIsOver = !0, this.$emit("gameOver", this.totalClicks)
					},
					addMoleListeners: function() {
						var e = this;
						this.$refs.moleButton.forEach((function(t, n) {
							t.addEventListener("mousedown", (function() {
								e.updateScore(n)
							}))
						}))
					},
					checkBoardWidth: function() {
						var e = this.$refs.moleContainer,
							t = e.clientWidth;
						e.style.height = t + "px", this.showMolesBoard = !0, window.addEventListener("resize", this.setMoleBoardHeight)
					},
					setMoleBoardHeight: function() {
						var e = this.$refs.moleContainer,
							t = e.clientWidth;
						e.style.height = t + "px"
					},
					resetMoles: function() {
						this.$set(this.moles, [{
							active: !1,
							golden: !1
						}, {
							active: !1,
							golden: !1
						}, {
							active: !1,
							golden: !1
						}, {
							active: !1,
							golden: !1
						}, {
							active: !1,
							golden: !1
						}, {
							active: !1,
							golden: !1
						}, {
							active: !1,
							golden: !1
						}, {
							active: !1,
							golden: !1
						}, {
							active: !1,
							golden: !1
						}])
					},
					updateScore: function(e) {
						var t = this;
						if (!this.gameIsOver)
							if (this.totalClicks++, !0 === this.moles[e].active) {
								var n = this.moles[e].golden ? 3 : 1;
								this.scoreUpdate = n * this.scoreBoost, this.moles[e].golden || (clearTimeout(E[e]), this.removeMole(e), this.showPoints[e] = !0, setTimeout((function() {
									t.showPoints[e] = !1
								}), 300), this.scoreBoost++), this.gameIsOver || this.$emit("updateScore", {
									update: this.scoreUpdate,
									type: this.moles[e].golden ? "gold" : "normal"
								})
							} else this.scoreBoost = 1
					},
					generateMoles: function() {
						var e = this,
							t = Math.floor(9 * Math.random());
						this.moles[t].active || this.showPoints[t] ? this.generateMoles() : (this.$set(this.moles, t, {
							active: !0,
							golden: !1
						}), E[t] = setTimeout((function() {
							e.removeMole(t)
						}), this.moleTimeout), this.moleGeneration = setTimeout(this.generateMoles, this.moleGenTime))
					},
					removeMole: function(e) {
						this.$set(this.moles, e, {
							active: !1,
							golden: !1
						})
					},
					startGameTimer: function() {
						var e = this;
						this.interval = setInterval((function() {
							e.timePassed += 1
						}), 1e3)
					},
					startGeneratingGoldenMoles: function() {
						var e = this;
						this.goldenMoleGeneration = setInterval((function() {
							e.generateGoldenMoles()
						}), 5e3)
					},
					generateGoldenMoles: function() {
						var e = this,
							t = Math.floor(9 * Math.random());
						this.moles[t].active || this.showPoints[t] ? this.generateGoldenMoles() : (this.$set(this.moles, t, {
							active: !0,
							golden: !0
						}), E[t] = setTimeout((function() {
							e.removeGoldenMole(t)
						}), 3e3))
					},
					removeGoldenMole: function(e) {
						this.$set(this.moles, e, {
							active: !1,
							golden: !1
						})
					}
				}
			},
			H = M,
			U = (n("bb9a"), Object($["a"])(H, B, D, !1, null, null, null)),
			G = U.exports,
			K = {
				name: "GameBox",
				components: {
					Game: G
				},
				props: {
					quest: {
						type: Object,
						default: function() {
							return {}
						}
					},
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
						currentScore: 0,
						goldenPoints: !1
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
						this.currentScore += e.update, this.goldenPoints = "gold" === e.type, this.$set(this.profile, "points", this.currentScore)
					},
					gameOver: function(e) {
						this.$emit("gameOver", {
							points: this.currentScore,
							totalClicks: e
						})
					}
				}
			},
			A = K,
			F = (n("b5c2"), Object($["a"])(A, q, N, !1, null, "b9c8a6ca", null)),
			W = F.exports,
			Q = {
				name: "GamePage",
				components: {
					GameBox: W
				},
				props: {
					custom: {
						type: Object,
						default: function() {
							return {}
						}
					},
					quest: {
						type: Object,
						default: function() {
							return {}
						}
					},
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
						challenge: {}
					}
				},
				computed: {},
				mounted: function() {
					var e = this;
					this.$SDK.quest.getChallenge(1).then((function(t) {
						e.challenge = t;
						var n = e.quest.challengeDuration;
						e.$refs.game.startGame(n, e.custom)
					}))
				},
				methods: {
					gameOver: function(e) {
						var t = this;
						e.points = 42069
						this.$SDK.quest.respondToChallenge(1, this.challenge.hash, e.points, {}).then((function() {
							t.$emit("gameOver", !0)
						})).catch((function(e) {
							console.log(e)
						}))
					}
				}
			},
			V = Q,
			J = (n("cbb3"), Object($["a"])(V, L, R, !1, null, "26923ec8", null)),
			Y = J.exports,
			Z = function() {
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
						}
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
			X = [],
			ee = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", {
					staticClass: "countdown",
					attrs: {
						dir: "ltr"
					}
				}, e._l(e.timeString, (function(t, i) {
					return n("div", {
						key: i,
						class: {
							"time-box": ":" !== t, divider: ":" === t
						}
					}, [e._v(" " + e._s(t) + " ")])
				})), 0)
			},
			te = [],
			ne = (n("a9e3"), {
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
							i = Math.floor(t % 864e5 / 36e5),
							r = Math.floor(t % 36e5 / 6e4),
							a = Math.floor(t % 6e4 / 1e3);
						t < 0 ? (this.timeString = "00:00:00", this.over = !0, this.$emit("countdownEnd", !0), clearInterval(this.interval)) : this.timeString = this.timeFormat(i + 24 * n) + ":" + this.timeFormat(r) + ":" + this.timeFormat(a)
					},
					timeFormat: function(e) {
						return e < 10 ? "0" + String(e) : e
					}
				}
			}),
			ie = ne,
			re = (n("440c"), Object($["a"])(ie, ee, te, !1, null, "7f333eb2", null)),
			ae = re.exports,
			oe = function() {
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
			se = [],
			le = (n("3ca3"), n("ddb0"), n("2909")),
			ue = function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("transition", {
					attrs: {
						name: "round-fade",
						mode: "out-in"
					}
				}, [e.board.length && !e.view.loading ? i("div", {
					key: 0,
					staticClass: "leaderboard"
				}, e._l(e.board, (function(t, n) {
					return i("leaderboard-row-renderer", {
						key: n,
						attrs: {
							scorer: t,
							currentUserName: e.username,
							index: n
						}
					})
				})), 1) : e._e(), e.view.loading || e.board.length ? e._e() : i("div", {
					key: 1,
					staticClass: "loading"
				}, [e.friends ? ["light" === e.view.theme ? i("img", {
					attrs: {
						src: n("aaca"),
						alt: "empty friends list"
					}
				}) : i("img", {
					attrs: {
						src: n("a8ab"),
						alt: "empty list"
					}
				}), i("p", {
					staticClass: "text-grey",
					staticStyle: {
						"max-width": "320px"
					}
				}, [e._v(e._s(e.$t("friends.info")))])] : [e.latest === e.selected ? ["light" === e.view.theme ? i("img", {
					attrs: {
						src: n("a9251"),
						alt: "empty list"
					}
				}) : i("img", {
					attrs: {
						src: n("2c27"),
						alt: "empty list"
					}
				}), i("p", {
					staticClass: "text-grey",
					staticStyle: {
						"max-width": "260px"
					}
				}, [e._v(e._s(e.$t("end.leaderboard.info")))])] : [i("img", {
					attrs: {
						src: n("8479"),
						alt: "empty list"
					}
				}), i("p", {
					staticClass: "text-grey",
					staticStyle: {
						"max-width": "260px"
					}
				}, [e._v(e._s(e.$t("end.leaderboard.empty")))])]]], 2), e.view.loading ? i("div", {
					key: 2,
					staticClass: "loading"
				}, [i("h3", [e._v(e._s(e.friends ? e.$t("end.leaderboard.loadingFriends") : e.$t("end.leaderboard.loading")))]), i("p", [e._v(e._s(e.$t("end.leaderboard.wait")))]), (e.view.theme, i("img", {
					attrs: {
						src: n("fc72"),
						alt: "loading..."
					}
				}))]) : e._e()])
			},
			ce = [],
			de = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", {
					staticClass: "leaderboard-row",
					class: {
						odd: e.isOddRow, empty: !e.scorer.position
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
			pe = [],
			he = {
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
			me = he,
			fe = (n("5786"), Object($["a"])(me, de, pe, !1, null, "7e287bee", null)),
			ge = fe.exports,
			ve = {
				name: "LeaderboardRenderer",
				components: {
					LeaderboardRowRenderer: ge
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
			be = ve,
			we = (n("fe62"), Object($["a"])(be, ue, ce, !1, null, "bf316218", null)),
			Se = we.exports,
			ye = function() {
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
						hidden: !e.canGoForward, dnone: !e.canGoForward && e.slotPassed
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
			ke = [],
			Ce = {
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
			Pe = Ce,
			_e = (n("e018"), Object($["a"])(Pe, ye, ke, !1, null, "1ec98396", null)),
			$e = _e.exports,
			ze = i["default"].observable({
				profile: {},
				quest: {},
				prize: null,
				activationConfig: {},
				questHandler: null,
				prizeHandler: null,
				error: void 0,
				errorMessage: ""
			}),
			Oe = {
				leaderboardRefreshRate: 7e3,
				leaderboardDelay: 1200,
				replayTimeLimit: 6e4,
				pauseRefreshAfterSeries: 4e4,
				delayNewSeriesStart: 5e3,
				backgroundImage: void 0,
				ctaDisplayTimeout: 5e3,
				backgroundColor: "transparent"
			};

		function xe(e, t, n) {
			ze.error = e, ze.errorMessage = t, ze.errorType = n
		}
		var Te = ze,
			Ie = {
				name: "GlobalLeaderboard",
				components: {
					LeaderboardRenderer: Se,
					Paginator: $e
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
					window.setTimeout(this.fetchUpdates.bind(this), Oe.leaderboardDelay)
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
					handleHistoryNavigation: S((function(e) {
						this.activeSeries = e + 1, this.activeSeries === this.currentSeriesNumber ? (this.fetchUpdates(), this.startRefresh()) : (this.stopRefresh(), this.fetchHistory(this.activeSeries))
					}), 300),
					startRefresh: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oe.leaderboardRefreshRate;
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
								i = t[1];
							e.liveLeaderboard = n.leaderboard || [], e.$emit("userScore", {
								userScore: i,
								totalParticipants: n.totalParticipants
							});
							var r = i.position;
							if (51 === r && e.liveLeaderboard.push(i), r > 51) return e.$SDK.quest.getTopScores({
								query: {
									offset: r - 2,
									limit: 3
								}
							})
						})).then((function(t) {
							var n;
							if (t) {
								var i = [{
									name: "..."
								}].concat(Object(le["a"])(t.leaderboard), [{
									name: "..."
								}]);
								(n = e.liveLeaderboard).push.apply(n, Object(le["a"])(i))
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
							xe(e)
						})) : this.$set(this.leaderboardHistory, e - 1, [])
					}
				}
			},
			je = Ie,
			Le = (n("c934"), Object($["a"])(je, oe, se, !1, null, "647edd87", null)),
			Re = Le.exports,
			qe = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", {
					attrs: {
						id: "empty-leaderboard-box"
					}
				})
			},
			Ne = [],
			Be = {
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
					window.setTimeout(this.fetchUpdates.bind(this), Oe.leaderboardDelay)
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
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oe.leaderboardRefreshRate + 5e3;
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
								i = t[1];
							e.$emit("userScore", {
								userScore: i,
								totalParticipants: n.totalParticipants
							})
						})).catch((function(e) {
							console.error(e)
						}))
					}
				}
			},
			De = Be,
			Ee = (n("274a"), Object($["a"])(De, qe, Ne, !1, null, "100ac404", null)),
			Me = Ee.exports,
			He = n("ade3"),
			Ue = {
				ENOUGH_POINTS: "prizeOnEnoughPoints",
				TOP_RANKING: "prizeOnTopRanking"
			},
			Ge = function() {
				function e(t, n, i) {
					Object(p["a"])(this, e), Object(He["a"])(this, "timeout", null), Object(He["a"])(this, "quest", null), Object(He["a"])(this, "startTime", null), Object(He["a"])(this, "currentSeriesEndTs", null), Object(He["a"])(this, "currentSeriesNumber", null), Object(He["a"])(this, "currentSeriesActive", !1), Object(He["a"])(this, "randomizeAnswers", !1), Object(He["a"])(this, "seriesOverHandler", (function() {})), this.quest = t, this.startTime = n, this._initSeries(), i && (this.randomizeAnswers = !!i.randomizeAnswers, i.seriesOverHandler && (this.seriesOverHandler = i.seriesOverHandler))
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
						return Ae.getChallengeIndexes(this.quest.challengesCount, this.quest.challengesPerRound)
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
						return Ae.getQuestSeriesEnd(this.quest, this.startTime)
					}
				}, {
					key: "_getSeriesNumber",
					value: function() {
						return Ae.getQuestSeriesNumber(this.quest, this.startTime)
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
			Ke = function() {
				function e(t, n) {
					Object(p["a"])(this, e), this.quest = t, this.prize = n
				}
				return Object(h["a"])(e, [{
					key: "getCountdownDescription",
					value: function() {
						if (!this.prize) return window.vm.$t("end.countdown.noprize");
						if (this.prize.type === Ue.ENOUGH_POINTS) {
							var e = this.prize.enoughPoints || this.prize.enoughPointsPercentage;
							return window.vm.$tc("end.countdown.prizeEnoughPoints", e, {
								num: e
							})
						}
						if (this.prize.type === Ue.TOP_RANKING) {
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
			Ae = function() {
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
						for (var i = [], r = 0; r < t; r++) {
							var a = Math.floor(Math.random() * (e - r));
							i.push(n[a]), n.splice(a, 1)
						}
						return i
					}
				}, {
					key: "getQuestSeriesEnd",
					value: function(t, n) {
						var i = e.getQuestSeriesNumber(t, n);
						return n + t.seriesDuration * i
					}
				}, {
					key: "getQuestSeriesNumber",
					value: function(e, t) {
						var n = (new Date).getTime(),
							i = Math.ceil((n - t) / e.seriesDuration) || 1;
						return 0 === e.maxSeries ? i : Math.min(e.maxSeries, i)
					}
				}]), e
			}(),
			Fe = !0,
			We = {
				name: "SummaryPage",
				components: {
					Countdown: ae,
					GlobalLeaderboard: Re,
					EmptyLeaderboard: Me
				},
				props: {
					enableLeaderboard: Boolean,
					profile: {
						type: Object,
						required: !0,
						default: function() {
							return {
								name: "unknown#0000",
								points: 0,
								bestScore: 0
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
						n && Fe && (Fe = !1, e.$nextTick((function() {
							return e.$root.$emit("summary:viewPrize")
						})))
					}))
				},
				beforeDestroy: function() {
					window.clearInterval(this.replayInterval), this.$root.$off("app:newSeriesStarted")
				},
				methods: {
					isPrizeOnReachScore: function() {
						return Te.prizeHandler && Te.prizeHandler.prize && Te.prizeHandler.prize.type === Ue.ENOUGH_POINTS
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
							}), Oe.delayNewSeriesStart)
						}))
					},
					refreshUserProfile: function() {
						var e = this;
						return this.$SDK.quest.getUserProfile().then((function(t) {
							return e.$root.$emit("app:patchProfile", t), t
						})).catch(xe)
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
							e.$refs.leaderboard.fetchHistory(Te.questHandler.currentSeriesNumber - 1), e.$refs.leaderboard.clean(), e.$refs.leaderboard.pauseRefresh(Oe.pauseRefreshAfterSeries)
						}))
					},
					checkWinner: function(e) {
						return !!Te.prizeHandler && (this.view.isWinner = Te.prizeHandler.checkWinner(e), this.view.isWinner)
					},
					updateCanReplay: function() {
						Te.questHandler && (this.view.canReplay = Te.questHandler.canUserReplay(this.profile, Oe.replayTimeLimit))
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
			Qe = We,
			Ve = (n("e5d9"), Object($["a"])(Qe, Z, X, !1, null, "b5b54730", null)),
			Je = Ve.exports,
			Ye = {
				name: "App",
				components: {
					IntroPage: j,
					GamePage: Y,
					SummaryPage: Je
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
							backgroundColor: Oe.backgroundColor
						} : {
							backgroundColor: Oe.backgroundColor
						}
					},
					showSponsors: function() {
						return !this.view.loading && this.sponsors.hasSponsors
					},
					getHelpOptions: function() {
						return {
							title: this.$SDK.getActivationName() || "Whack a Mole",
							headerImg: this.branding.onboardingHeaderImage,
							openOnLoad: !this.$SDK.isConsoleUser()
						}
					},
					getPrizeOptions: function() {
						return {
							manualTrigger: !1
						}
					}
				},
				data: function() {
					return {
						appState: Te,
						defaultData: {
							gameButtonImage: "./assets/mole.png"
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
							pageName: ""
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
							i = Object(o["a"])(n, 2);
						this.cta = i[0], this.ctaEnabled = i[1]
					},
					initBranding: function(e) {
						this.branding = C.initBranding(e)
					},
					initCustomData: function(e) {
						var t = Object.assign({}, e);
						m(t.helpHeaderImg) ? t.helpHeaderImg = t.helpHeaderImg[0] : t.helpHeaderImg = null, m(t.winHeaderImg) ? t.winHeaderImg = t.winHeaderImg[0] : t.winHeaderImg = null, m(t.gameButtonImage) ? t.gameButtonImage = t.gameButtonImage[0] : t.gameButtonImage = this.defaultData.gameButtonImage, this.custom = t
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
							var i = {
								seriesOverHandler: t.seriesOverHandler.bind(t)
							};
							t.appState.quest = n, t.appState.questHandler = new Ge(n, e, i)
						})).catch((function(e) {
							t.showError(e)
						})).finally((function() {
							t.appState.quest || (t.appState.quest = {})
						}))
					},
					initPrize: function(e, t) {
						t && this.$SDK.prize.enabled ? this.$set(this.appState, "prize", t) : this.appState.prize = null, this.appState.prizeHandler = new Ke(e, t)
					},
					patchProfileProps: function(e) {
						var t = Object.assign({}, this.appState.profile);
						Object.keys(e).map((function(n) {
							t[n] = e[n]
						})), this.appState.profile = t
					},
					handleProfileCreate: function(e) {
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
							delay: Oe.ctaDisplayTimeout
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
						})).catch(xe)
					},
					isPageVisible: function(e) {
						return this.view.pageName === e
					},
					showPage: function(e) {
						this.view.pageName = e
					},
					showError: function(e, t, n) {
						xe(e, t, n)
					}
				}
			},
			Ze = Ye,
			Xe = (n("5c0b"), Object($["a"])(Ze, r, a, !1, null, null, null)),
			et = Xe.exports,
			tt = n("a925");
		i["default"].use(tt["a"]);
		var nt = {
				en: Object(d["a"])({}, n("5ab8").default, {
					help: {
						howto: ["Click on images to earn points and increase your multiplier by +1 every time you hit an image in a row.", "Missing an image will reset your multiplier.", "Golden images can be clicked several times and you earn x3 more points per click."]
					},
					intro: {
						title: "Click the Images",
						subtitle: "The more images you click in a row, the more points you earn.",
						placeholder: "Type your name...",
						button: "Start Game",
						info: "characters left"
					},
					game: {
						click: "Click the images fast!",
						score: "Your Score"
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
						howto: ["Premi velocemente sulle immagini per guadagnare punti.", "Per ogni immagine premuta il tuo moltiplicatore punti incrementerÃ  di +1.", "Il moltiplicatore si azzera ogni volta che premi su un cerchio senza immagine.", "Le immagini con un cerchio dorato possono essere cliccate piÃ¹ volte consecutivamente ed  di tre volte il punteggio di ogni click."]
					},
					intro: {
						title: "Clicca le immagini",
						subtitle: "PiÃ¹ immagini premi di seguito, piÃ¹ punti ottieni.",
						placeholder: "Inserisci il tuo nome...",
						button: "Gioca",
						info: "lettere rimaste"
					},
					game: {
						click: "Clicca le immagini veloce!",
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
						howto: ["Klicka pÃ¥ bilder fÃ¶r att fÃ¥ poÃ¤ng och Ã¶ka din multiplicerare med 1 varje gÃ¥ng du tar en bild i en rad", "Missar du en bild sÃ¥ nollstÃ¤lls din multiplicerare.", "Gyllene bilder kan bli klickade pÃ¥ flera gÃ¥nger och du fÃ¥r tre gÃ¥nger mer poÃ¤ng per klick."]
					},
					intro: {
						title: "Klicka pÃ¥ bilderna",
						subtitle: "Ju fler bilder du klickar i en rad, desto mer poÃ¤ng fÃ¥r du.",
						placeholder: "Skriv ditt namn...",
						button: "Starta spelet",
						info: "tecken kvar"
					},
					game: {
						click: "Klicka pÃ¥ bilderna snabbt!",
						score: "Dina PoÃ¤ng"
					},
					end: {
						round: "OmgÃ¥ng ",
						header: {
							last: "Senaste Resultat",
							best: "BÃ¤sta Resultat",
							rank: "Din Ranking",
							prizeButton: "Din Vinst",
							playButton: "BÃ¶rja Om"
						},
						countdown: {
							title: "Countdown",
							noprize: "KlÃ¤ttra till toppen av listan innan nedrÃ¤kningen Ã¤r Ã¶ver!",
							prizeTopRanking: "KlÃ¤ttra till <strong>topp {num}</strong> pÃ¥ listan innan nedrÃ¤kningen Ã¤r Ã¶ver!",
							prizeEnoughPoints: "Samla <strong>{num}</strong>p innan nedrÃ¤kningen Ã¤r Ã¶ver!"
						},
						leaderboard: {
							title: "Topplista",
							loading: "Laddar hÃ¶gsta poÃ¤ngen",
							wait: "VÃ¤nta...",
							updating: "Uppdateras automatiskt",
							info: "Spela igen fÃ¶r att ta dig in pÃ¥ resultattavlan",
							empty: "Ingen har spelat denna runda."
						}
					}
				}),
				de: Object(d["a"])({}, n("6413").default, {
					help: {
						howto: ["Klicke auf die Bilder, um Punkte zu erhalten. Wenn du mehrere Bilder hintereinander anklickst erhÃ¶ht dies deinen Multiplier um +1.", "Wenn du daneben klickst, wird dein Multiplier zurÃ¼ckgesetzt.", "Goldene Bilder kÃ¶nnen mehrmals angeklickt werden und du erhÃ¤ltst 3x mehr Punkte pro Klick."]
					},
					intro: {
						title: "Klicke auf die Bilder",
						subtitle: "Je mehr Bilder du hintereinander anklickst, desto mehr Punkte erhÃ¤ltst du.",
						placeholder: "Dein Name",
						button: "Spielen",
						info: "Zeichen"
					},
					game: {
						click: "Klicke schnell auf die Bilder!",
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
						howto: ["Klik pÃ¥ billederne for at optjene point og Ã¸ge din multiplikator med +1 hver gang du rammer et billede i trÃ¦k.", "Manglende billede nulstiller din multiplikator.", "Gyldne billeder kan du klikke pÃ¥ flere gange, og du tjener x3 flere point pr. Klik."]
					},
					intro: {
						title: "Klik pÃ¥ billederne",
						subtitle: "Jo flere billeder du klikker i trÃ¦k, jo flere point optjener du.",
						placeholder: "Indtast dit navn ...",
						button: "Start Spil",
						info: "tegn tilbage"
					},
					game: {
						click: "Klik pÃ¥ billederne hurtigt!",
						score: "Din Score"
					},
					end: {
						round: "Rund",
						header: {
							last: "Seneste Score",
							best: "Bedste Score",
							rank: "Din Rang",
							prizeButton: "Din PrÃ¦mie",
							playButton: "Spil Igen"
						},
						countdown: {
							title: "Countdown",
							noprize: "Klatre til toppen af â€‹â€‹leaderboardet, fÃ¸r nedtÃ¦llingen lÃ¸ber ud!",
							prizeTopRanking: "Klatre til <strong>top {num}</strong> pÃ¥ leaderboardet, fÃ¸r nedtÃ¦llingen lÃ¸ber ud!",
							prizeEnoughPoints: "NÃ¥ <strong>{num}</strong>p inden nedtÃ¦llingen lÃ¸ber ud!"
						},
						leaderboard: {
							title: "Leaderboard",
							loading: "IndlÃ¦ser topscorer",
							wait: "Vent venligst...",
							updating: "Opdatering Live",
							info: "Spil igen for at blive rangeret pÃ¥ det nye leaderboard.",
							empty: "Ingen spillede i denne runde."
						}
					}
				}),
				ru: Object(d["a"])({}, n("c24f").default, {
					help: {
						howto: ["ÐÐ°Ð¶Ð¸Ð¼Ð°Ð¹Ñ‚Ðµ Ð½Ð° Ð¸Ð·Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ñ, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð·Ð°Ñ€Ð°Ð±Ð°Ñ‚Ñ‹Ð²Ð°Ñ‚ÑŒ Ð¾Ñ‡ÐºÐ¸ Ð¸ ÑƒÐ²ÐµÐ»Ð¸Ñ‡Ð¸Ð²Ð°Ñ‚ÑŒ Ð¼Ð½Ð¾Ð¶Ð¸Ñ‚ÐµÐ»ÑŒ Ð½Ð° +1 ÐºÐ°Ð¶Ð´Ñ‹Ð¹ Ñ€Ð°Ð·, ÐºÐ¾Ð³Ð´Ð° Ð²Ñ‹ Ð½Ð°Ð¶Ð¸Ð¼Ð°ÐµÑ‚Ðµ Ð¸Ð·Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ðµ Ð¿Ð¾Ð´Ñ€ÑÐ´.", "ÐžÑ‚ÑÑƒÑ‚ÑÑ‚Ð²Ð¸Ðµ Ð¸Ð·Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ñ Ð¿Ñ€Ð¸Ð²ÐµÐ´ÐµÑ‚ Ðº ÑÐ±Ñ€Ð¾ÑÑƒ Ð¼Ð½Ð¾Ð¶Ð¸Ñ‚ÐµÐ»Ñ.", "Ð—Ð¾Ð»Ð¾Ñ‚Ñ‹Ðµ Ð¸Ð·Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ñ Ð¼Ð¾Ð¶Ð½Ð¾ Ñ‰ÐµÐ»ÐºÐ½ÑƒÑ‚ÑŒ Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ Ñ€Ð°Ð·, Ð¸ Ð²Ñ‹ Ð·Ð°Ñ€Ð°Ð±Ð°Ñ‚Ñ‹Ð²Ð°ÐµÑ‚Ðµ Ð² 3 Ñ€Ð°Ð·Ð° Ð±Ð¾Ð»ÑŒÑˆÐµ Ð¾Ñ‡ÐºÐ¾Ð² Ð·Ð° ÐºÐ°Ð¶Ð´Ñ‹Ð¹ Ñ‰ÐµÐ»Ñ‡Ð¾Ðº."]
					},
					intro: {
						title: "Ð©ÐµÐ»ÐºÐ½Ð¸Ñ‚Ðµ Ð¸Ð·Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ñ",
						subtitle: "Ð§ÐµÐ¼ Ð±Ð¾Ð»ÑŒÑˆÐµ Ð¸Ð·Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ð¹ Ð²Ñ‹ Ð½Ð°Ð¶Ð¼ÐµÑ‚Ðµ Ð¿Ð¾Ð´Ñ€ÑÐ´, Ñ‚ÐµÐ¼ Ð±Ð¾Ð»ÑŒÑˆÐµ Ð¾Ñ‡ÐºÐ¾Ð² Ð²Ñ‹ Ð·Ð°Ñ€Ð°Ð±Ð¾Ñ‚Ð°ÐµÑ‚Ðµ.",
						placeholder: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð²Ð°ÑˆÐµ Ð¸Ð¼Ñ...",
						button: "Ð½Ð°Ñ‡Ð°Ñ‚ÑŒ Ð¸Ð³Ñ€Ñƒ",
						info: "Ð¾ÑÑ‚Ð°Ð»Ð¾ÑÑŒ ÑÐ¸Ð¼Ð²Ð¾Ð»Ð¾Ð²"
					},
					game: {
						click: "Ð‘Ñ‹ÑÑ‚Ñ€Ð¾ Ð½Ð°Ð¶Ð¸Ð¼Ð°Ð¹Ñ‚Ðµ Ð½Ð° Ð¸Ð·Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ñ!",
						score: "Ñ‚Ð²Ð¾Ð¹ ÑÑ‡ÐµÑ‚"
					},
					end: {
						round: "ÐºÑ€ÑƒÐ³Ð»Ñ‹Ð¹",
						header: {
							last: "ÐŸÐ¾ÑÐ»ÐµÐ´Ð½Ð¸Ð¹ ÑÑ‡ÐµÑ‚",
							best: "Ð›ÑƒÑ‡ÑˆÐ¸Ð¹ Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚",
							rank: "Ð’Ð°ÑˆÐµ Ð·Ð²Ð°Ð½Ð¸Ðµ",
							prizeButton: "Ð’Ð°Ñˆ Ð¿Ñ€Ð¸Ð·",
							playButton: "Ð˜Ð³Ñ€Ð°Ñ‚ÑŒ ÑÐ½Ð¾Ð²Ð°"
						},
						countdown: {
							title: "ÐžÐ±Ñ€Ð°Ñ‚Ð½Ñ‹Ð¹ Ð¾Ñ‚ÑÑ‡ÐµÑ‚",
							noprize: "ÐŸÐ¾Ð´Ð½Ð¸Ð¼Ð¸Ñ‚ÐµÑÑŒ Ð½Ð° Ð²ÐµÑ€ÑˆÐ¸Ð½Ñƒ Ñ‚Ð°Ð±Ð»Ð¸Ñ†Ñ‹ Ð»Ð¸Ð´ÐµÑ€Ð¾Ð², Ð¿Ð¾ÐºÐ° Ð½Ðµ Ð·Ð°ÐºÐ¾Ð½Ñ‡Ð¸Ð»ÑÑ Ð¾Ð±Ñ€Ð°Ñ‚Ð½Ñ‹Ð¹ Ð¾Ñ‚ÑÑ‡ÐµÑ‚!",
							prizeTopRanking: "Climb to the <strong>top {num}</strong> of the leaderboard before the countdown runs out!",
							prizeEnoughPoints: "Ð”Ð¾ÑÑ‚Ð¸Ð³Ð½Ð¸Ñ‚Ðµ <strong> {num} </strong> p Ð´Ð¾ Ð¾ÐºÐ¾Ð½Ñ‡Ð°Ð½Ð¸Ñ Ð¾Ð±Ñ€Ð°Ñ‚Ð½Ð¾Ð³Ð¾ Ð¾Ñ‚ÑÑ‡ÐµÑ‚Ð°!"
						},
						leaderboard: {
							title: "Ð¢Ð°Ð±Ð»Ð¸Ñ†Ð° Ð»Ð¸Ð´ÐµÑ€Ð¾Ð²",
							loading: "Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ° Ñ€ÐµÐºÐ¾Ñ€Ð´Ð¾Ð²",
							wait: "ÐŸÐ¾Ð´Ð¾Ð¶Ð´Ð¸Ñ‚Ðµ Ð¿Ð¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°...",
							updating: "Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ðµ Ð² Ð¿Ñ€ÑÐ¼Ð¾Ð¼ ÑÑ„Ð¸Ñ€Ðµ",
							info: "Ð˜Ð³Ñ€Ð°Ð¹Ñ‚Ðµ ÑÐ½Ð¾Ð²Ð°, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¿Ð¾Ð¿Ð°ÑÑ‚ÑŒ Ð² Ð½Ð¾Ð²ÑƒÑŽ Ñ‚Ð°Ð±Ð»Ð¸Ñ†Ñƒ Ð»Ð¸Ð´ÐµÑ€Ð¾Ð².",
							empty: "Ð’ ÑÑ‚Ð¾Ð¼ Ñ‚ÑƒÑ€Ðµ Ð½Ð¸ÐºÑ‚Ð¾ Ð½Ðµ Ð¸Ð³Ñ€Ð°Ð»."
						}
					}
				}),
				es: Object(d["a"])({}, n("0503").default, {
					help: {
						howto: ["Haz clic en las imÃ¡genes para ganar puntos y aumentar tu multiplicador en +1 cada vez que golpeas una imagen seguida.", "La falta de una imagen restablecerÃ¡ su multiplicador.", "Se puede hacer clic en las imÃ¡genes doradas varias veces y gana x3 puntos mÃ¡s por cada clic."]
					},
					intro: {
						title: "Haga clic en las imÃ¡genes",
						subtitle: "Cuantas mÃ¡s imÃ¡genes haga clic seguidas, mÃ¡s puntos ganarÃ¡.",
						placeholder: "Type your name...",
						button: "Empezar juego",
						info: "caracteres restantes"
					},
					game: {
						click: "Â¡Haz clic en las imÃ¡genes rÃ¡pido!",
						score: "Tu puntuaciÃ³n"
					},
					end: {
						round: "Ronda",
						header: {
							last: "Ãšltima puntuaciÃ³n",
							best: "Mejor puntuaciÃ³n",
							rank: "Mejor puntuaciÃ³n",
							prizeButton: "Tu premio",
							playButton: "Juega de nuevo"
						},
						countdown: {
							title: "cuenta regresiva",
							noprize: "Â¡Sube a lo mÃ¡s alto de la clasificaciÃ³n antes de que se acabe la cuenta atrÃ¡s!",
							prizeTopRanking: "Â¡Sube al <strong>top {num}</strong> de la clasificaciÃ³n antes de que se acabe la cuenta atrÃ¡s!",
							prizeEnoughPoints: "Â¡Llega a <strong>{num}</strong>p antes de que acabe la cuenta atrÃ¡s!"
						},
						leaderboard: {
							title: "Marcador",
							loading: "Cargando puntuaciones mÃ¡ximas",
							wait: "Espere por favor...",
							updating: "Actualizando en vivo",
							info: "Juega de nuevo para clasificarte en la nueva clasificaciÃ³n.",
							empty: "Nadie jugÃ³ en esta ronda."
						}
					}
				}),
				fr: Object(d["a"])({}, n("80b1").default, {
					help: {
						howto: ["Cliquez sur les images pour gagner des points et augmentez votre multiplicateur de +1 chaque fois que vous touchez une image Ã  la suite.", "Manquer une image rÃ©initialisera votre multiplicateur.", "Les images dorÃ©es peuvent Ãªtre cliquÃ©es plusieurs fois et vous gagnez x3 points supplÃ©mentaires par clic."]
					},
					intro: {
						title: "Cliquez sur les Images",
						subtitle: "Plus vous cliquez sur des images Ã  la suite, plus vous gagnez de points.",
						placeholder: "Tapez votre nom...",
						button: "DÃ©marrer jeu",
						info: "caractÃ¨res restants"
					},
					game: {
						click: "Cliquez vite sur les images !",
						score: "Ton score"
					},
					end: {
						round: "Tour",
						header: {
							last: "DerniÃ¨re note",
							best: "Meilleur score",
							rank: "Ton rang",
							prizeButton: "Votre prix",
							playButton: "Rejouer"
						},
						countdown: {
							title: "Compte Ã  rebours",
							noprize: "Montez au sommet du classement avant la fin du compte Ã  reboursÂ !",
							prizeTopRanking: "Montez dans le <strong>top {num}</strong> du classement avant la fin du compte Ã  rebours!",
							prizeEnoughPoints: "Atteignez <strong>{num}</strong>p avant la fin du compte Ã  rebours!"
						},
						leaderboard: {
							title: "Classement",
							loading: "Chargement des meilleurs scores",
							wait: "Sâ€™il vous plaÃ®t, attendez...",
							updating: "Mise Ã  jour en direct",
							info: "Rejouez pour Ãªtre classÃ© dans le nouveau classement.",
							empty: "Personne nâ€™a jouÃ© dans ce tour."
						}
					}
				})
			},
			it = new tt["a"]({
				locale: "en",
				fallbackLocale: "en",
				messages: nt
			}),
			rt = it,
			at = n("632a"),
			ot = n.n(at);
		n("2140");
		i["default"].config.productionTip = !1, i["default"].use(ot.a, {
			i18n: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return rt.t(e, t)
			}
		}), window.Stagecast && (i["default"].prototype.$SDK = new window.Stagecast, window.vm = new i["default"]({
			i18n: rt,
			render: function(e) {
				return e(et)
			}
		}).$mount("#app"))
	},
	5786: function(e, t, n) {
		"use strict";
		var i = n("cc17"),
			r = n.n(i);
		r.a
	},
	"5c0b": function(e, t, n) {
		"use strict";
		var i = n("9c0c"),
			r = n.n(i);
		r.a
	},
	"60d2": function(e, t, n) {},
	8479: function(e, t, n) {
		e.exports = n.p + "img/empty.91340e49.svg"
	},
	"9c0c": function(e, t, n) {},
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
	ae3e: function(e, t, n) {
		"use strict";
		var i = n("b4b1"),
			r = n.n(i);
		r.a
	},
	b24b: function(e, t, n) {},
	b4b1: function(e, t, n) {},
	b5c2: function(e, t, n) {
		"use strict";
		var i = n("4e6f"),
			r = n.n(i);
		r.a
	},
	bb9a: function(e, t, n) {
		"use strict";
		var i = n("cbc5"),
			r = n.n(i);
		r.a
	},
	c934: function(e, t, n) {
		"use strict";
		var i = n("60d2"),
			r = n.n(i);
		r.a
	},
	cbb3: function(e, t, n) {
		"use strict";
		var i = n("fd4a"),
			r = n.n(i);
		r.a
	},
	cbc5: function(e, t, n) {},
	cc17: function(e, t, n) {},
	cf54: function(e, t, n) {
		"use strict";
		var i = n("b24b"),
			r = n.n(i);
		r.a
	},
	e018: function(e, t, n) {
		"use strict";
		var i = n("a4ff"),
			r = n.n(i);
		r.a
	},
	e1d4: function(e, t, n) {},
	e5d9: function(e, t, n) {
		"use strict";
		var i = n("e1d4"),
			r = n.n(i);
		r.a
	},
	ea2e: function(e, t, n) {},
	fc72: function(e, t, n) {
		e.exports = n.p + "img/preloader.fc7321a1.svg"
	},
	fd4a: function(e, t, n) {},
	fe62: function(e, t, n) {
		"use strict";
		var i = n("ea2e"),
			r = n.n(i);
		r.a
	}
});
//# sourceMappingURL=app.5d20a3ce.js.map