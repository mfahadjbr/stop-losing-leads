import { useEffect, useRef, useState } from "react";
import { HeadContent, Outlet, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiCalendar, FiCheck, FiClock, FiMenu, FiMessageSquare, FiPause, FiPhone, FiPlay, FiUsers, FiX, FiZap } from "react-icons/fi";
// \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
// src/redesign.tsx
function Action() {
	return /* @__PURE__ */ jsxs("a", {
		className: "button",
		href: "/contact",
		children: ["Book My Lead Leak Diagnostic ", /* @__PURE__ */ jsx(FiArrowUpRight, {})]
	});
}
function Hero() {
	const reduced = useReducedMotion();
	useEffect(() => {
		const mm = gsap.matchMedia();
		mm.add("(prefers-reduced-motion: no-preference)", () => {
			gsap.fromTo(".hero-scene", { scale: 1.04 }, {
				scale: 1,
				duration: 2.2,
				ease: "power2.out"
			});
		});
		return () => mm.revert();
	}, []);
	return /* @__PURE__ */ jsxs("section", {
		className: "hero hero-v2",
		children: [
			/* @__PURE__ */ jsx("img", {
				className: "hero-scene",
				src: "/assets/hero-service-owner-v2.png",
				alt: "",
				fetchPriority: "high"
			}),
			/* @__PURE__ */ jsx("div", { className: "hero-scrim" }),
			/* @__PURE__ */ jsxs(motion.div, {
				className: "hero-content",
				initial: { y: reduced ? 0 : 18 },
				animate: { y: 0 },
				transition: { duration: .8 },
				children: [
					/* @__PURE__ */ jsxs("span", {
						className: "eyebrow",
						children: [/* @__PURE__ */ jsx("span", {}), " FOLLOW UP FOR SERVICE BUSINESSES"]
					}),
					/* @__PURE__ */ jsxs("h1", { children: [
						"You already paid",
						/* @__PURE__ */ jsx("br", {}),
						"for the lead.",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsxs("em", { children: [
							"Let's make sure",
							/* @__PURE__ */ jsx("br", {}),
							"somebody answers it."
						] })
					] }),
					/* @__PURE__ */ jsx("p", { children: "We build and run your follow up system so you book more jobs from the leads you already have." }),
					/* @__PURE__ */ jsx(Action, {}),
					/* @__PURE__ */ jsxs("a", {
						className: "quiz-link",
						href: "/quiz",
						children: ["Take the 30 second Lead Leak Quiz ", /* @__PURE__ */ jsx(FiArrowRight, {})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "hero-assurance",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(FiCheck, {}), /* @__PURE__ */ jsx("span", { children: "Built for you" })] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(FiCheck, {}), /* @__PURE__ */ jsx("span", { children: "Run by us" })] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(FiCheck, {}), /* @__PURE__ */ jsx("span", { children: "Owned by you" })] }),
					/* @__PURE__ */ jsx("span", {
						className: "hero-assurance-caption",
						children: "You do the work. We handle the follow up."
					})
				]
			})
		]
	});
}
var steps = [
	{
		icon: FiPhone,
		title: "Talk with us.",
		body: "A free Lead Leak Diagnostic. We look at how leads reach you today and show you where they slip away. No pitch."
	},
	{
		icon: FiMessageSquare,
		title: "We build it for you.",
		body: "Instant replies. Missed call text back. Follow up and a plan for your old contacts. You approve it. We set up everything."
	},
	{
		icon: FiCalendar,
		title: "You book more jobs.",
		body: "Your leads get answered in seconds. Day and night. You get back to the work."
	}
];
function Plan() {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ jsxs("section", {
		className: "section plan plan-v2",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "plan-intro",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "eyebrow",
					children: "A CLEAR PATH FORWARD"
				}),
				/* @__PURE__ */ jsxs("h2", { children: [
					"Three steps.",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("em", { children: "A whole lot less chasing." })
				] }),
				/* @__PURE__ */ jsx("p", { children: "No new software to figure out. No extra person to manage. We handle the follow up." }),
				/* @__PURE__ */ jsx(Action, {})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "journey",
			children: [/* @__PURE__ */ jsx("svg", {
				className: "journey-path",
				viewBox: "0 0 1000 480",
				fill: "none",
				preserveAspectRatio: "none",
				"aria-hidden": "true",
				children: /* @__PURE__ */ jsx("path", {
					d: "M 0 335 C 130 465 230 240 390 270 S 580 330 730 105 S 900 65 980 85",
					stroke: "currentColor",
					strokeWidth: "3",
					strokeLinecap: "round"
				})
			}), steps.map((step, i) => /* @__PURE__ */ jsxs(motion.article, {
				className: "journey-step journey-step-" + i,
				initial: { y: reduced ? 0 : 20 },
				whileInView: { y: 0 },
				viewport: { once: true },
				transition: {
					duration: .6,
					delay: reduced ? 0 : i * .12
				},
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "journey-dot",
						children: /* @__PURE__ */ jsx(step.icon, {})
					}),
					/* @__PURE__ */ jsxs("span", {
						className: "journey-number",
						children: ["0", i + 1]
					}),
					/* @__PURE__ */ jsx("h3", { children: step.title }),
					/* @__PURE__ */ jsx("p", { children: step.body })
				]
			}, step.title))]
		})]
	});
}
function FinalCTA() {
	return /* @__PURE__ */ jsxs("section", {
		className: "final-cta final-cta-v2",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: "/assets/cta-evening-v2.png",
				alt: "",
				loading: "lazy"
			}),
			/* @__PURE__ */ jsx("div", { className: "cta-scrim" }),
			/* @__PURE__ */ jsxs("div", {
				className: "cta-copy",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "eyebrow",
						children: "GET BACK TO YOUR BUSINESS. AND YOUR EVENINGS."
					}),
					/* @__PURE__ */ jsxs("h2", { children: [
						"Let's find",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("em", { children: "your leak." })
					] }),
					/* @__PURE__ */ jsx("p", { children: "Talk with our team. Leave knowing where leads slip away and what to do next." }),
					/* @__PURE__ */ jsx(Action, {}),
					/* @__PURE__ */ jsx("small", { children: "No pitch on the first call." })
				]
			})
		]
	});
}
// src/video-gallery.tsx
var ids = [
	"Y81b-ZFxWoY",
	"k_0uYRxxKpA",
	"IH9EbIdV3bc",
	"zRh2hzJaARs",
	"tJ9m_3EVOoc",
	"wMO_tKKo-mo",
	"BqQmhQK8EG0"
];
function Videos() {
	const reduced = useReducedMotion();
	const [index, setIndex] = useState(0), [playing, setPlaying] = useState(null), [paused, setPaused] = useState(false), [hovered, setHovered] = useState(false), [focused, setFocused] = useState(false), [visible, setVisible] = useState(false);
	const section = useRef(null), trigger = useRef(null);
	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .2 });
		if (section.current) observer.observe(section.current);
		return () => observer.disconnect();
	}, []);
	useEffect(() => {
		if (paused || hovered || focused || playing || reduced || !visible) return;
		const timer = setInterval(() => {
			if (!document.hidden) setIndex((i) => (i + 1) % ids.length);
		}, 5e3);
		return () => clearInterval(timer);
	}, [
		paused,
		hovered,
		focused,
		playing,
		reduced,
		visible
	]);
	useEffect(() => {
		if (!playing) return;
		const priorOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const onKey = (e) => {
			if (e.key === "Escape") setPlaying(null);
			if (e.key === "Tab") {
				const controls = [...document.querySelectorAll(".video-dialog button,.video-dialog iframe,.video-dialog a")];
				const first = controls[0], last = controls.at(-1);
				if (e.shiftKey && document.activeElement === first) {
					e.preventDefault();
					last?.focus();
				} else if (!e.shiftKey && document.activeElement === last) {
					e.preventDefault();
					first?.focus();
				}
			}
		};
		document.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = priorOverflow;
			document.removeEventListener("keydown", onKey);
			trigger.current?.focus();
		};
	}, [playing]);
	return /* @__PURE__ */ jsxs("section", {
		className: "videos section videos-v3",
		ref: section,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "section-heading",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
					className: "eyebrow",
					children: "INSIDE THE BUSINESS LAB"
				}), /* @__PURE__ */ jsxs("h2", { children: [
					"Mic drop moments.",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("em", { children: "From The Business Lab." })
				] })] }), /* @__PURE__ */ jsxs("p", { children: [
					"Real owners talking through the work.",
					/* @__PURE__ */ jsx("br", {}),
					"Watch a moment from our sessions."
				] })]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "gallery-stage",
				onMouseEnter: () => setHovered(true),
				onMouseLeave: () => setHovered(false),
				onFocusCapture: () => setFocused(true),
				onBlurCapture: (e) => {
					if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
				},
				"aria-roledescription": "carousel",
				"aria-label": "Business Lab videos",
				onKeyDown: (e) => {
					if (e.key === "ArrowRight") setIndex((i) => (i + 1) % 7);
					if (e.key === "ArrowLeft") setIndex((i) => (i + 6) % 7);
				},
				children: [
					-1,
					0,
					1
				].map((offset) => {
					const n = (index + offset + 7) % 7, id = ids[n];
					return /* @__PURE__ */ jsxs(motion.button, {
						className: "video-card position" + offset,
						"aria-label": offset ? "Show video " + (n + 1) : "Play Business Lab video " + (n + 1),
						onClick: (e) => {
							if (offset) setIndex(n);
							else {
								trigger.current = e.currentTarget;
								setPlaying(id);
							}
						},
						animate: {
							rotate: offset * 3,
							scale: offset ? .88 : 1,
							y: offset ? 15 : -18
						},
						transition: {
							duration: reduced ? 0 : .65,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						children: [
							/* @__PURE__ */ jsx("img", {
								src: "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg",
								alt: "Business Lab video " + (n + 1),
								loading: "lazy"
							}, id),
							/* @__PURE__ */ jsx("div", { className: "video-overlay" }),
							/* @__PURE__ */ jsx("span", {
								className: "video-kicker",
								children: "▶ THE BUSINESS LAB"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "play",
								children: /* @__PURE__ */ jsx(FiPlay, {})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "video-label",
								children: [
									/* @__PURE__ */ jsx("small", { children: "REAL OWNERS. REAL CONVERSATIONS." }),
									/* @__PURE__ */ jsx("b", { children: "Inside The Business Lab" }),
									/* @__PURE__ */ jsxs("span", { children: ["Watch the moment ", /* @__PURE__ */ jsx(FiArrowUpRight, {})] })
								]
							})
						]
					}, offset);
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "carousel-controls",
				children: [
					/* @__PURE__ */ jsx("button", {
						"aria-label": "Previous video",
						onClick: () => setIndex((i) => (i + 6) % 7),
						children: /* @__PURE__ */ jsx(FiArrowLeft, {})
					}),
					!reduced && /* @__PURE__ */ jsx("button", {
						className: "autoplay-toggle",
						"aria-label": paused ? "Resume automatic videos" : "Pause automatic videos",
						"aria-pressed": paused,
						onClick: () => setPaused(!paused),
						children: paused ? /* @__PURE__ */ jsx(FiPlay, {}) : /* @__PURE__ */ jsx(FiPause, {})
					}),
					/* @__PURE__ */ jsx("button", {
						"aria-label": "Next video",
						onClick: () => setIndex((i) => (i + 1) % 7),
						children: /* @__PURE__ */ jsx(FiArrowRight, {})
					})
				]
			}),
			/* @__PURE__ */ jsxs("a", {
				className: "button youtube-cta",
				href: "https://www.youtube.com/@stoplosingleadshq",
				children: ["Watch more & subscribe on YouTube ", /* @__PURE__ */ jsx("span", {
					className: "button-arrow",
					children: /* @__PURE__ */ jsx(FiArrowUpRight, {})
				})]
			}),
			playing && /* @__PURE__ */ jsxs("div", {
				className: "modal video-dialog",
				role: "dialog",
				"aria-modal": "true",
				"aria-label": "Business Lab video",
				onClick: () => setPlaying(null),
				children: [
					/* @__PURE__ */ jsx("button", {
						autoFocus: true,
						className: "close",
						"aria-label": "Close video",
						onClick: () => setPlaying(null),
						children: /* @__PURE__ */ jsx(FiX, {})
					}),
					/* @__PURE__ */ jsx("iframe", {
						src: "https://www.youtube-nocookie.com/embed/" + playing + "?autoplay=1",
						title: "Business Lab video",
						allow: "autoplay; encrypted-media; fullscreen",
						allowFullScreen: true,
						onClick: (e) => e.stopPropagation()
					}),
					/* @__PURE__ */ jsx("a", {
						href: "https://www.youtube.com/shorts/" + playing,
						children: "Watch on YouTube ↗"
					})
				]
			})
		]
	});
}
// src/site.tsx
var A = "/assets/";
var CTA = () => /* @__PURE__ */ jsxs("a", {
	className: "button",
	href: "/contact",
	children: ["Book My Lead Leak Diagnostic ", /* @__PURE__ */ jsx(FiArrowUpRight, {})]
});
function Reveal({ children, className = "" }) {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ jsx(motion.div, {
		className,
		initial: {
			opacity: 1,
			y: reduce ? 0 : 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: { once: true },
		transition: { duration: .6 },
		children
	});
}
function Shell({ children }) {
	const [menu, setMenu] = useState(false);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("a", {
			className: "skip",
			href: "#main",
			children: "Skip to content"
		}),
		/* @__PURE__ */ jsxs("header", { children: [
			/* @__PURE__ */ jsx("a", {
				href: "/",
				className: "brand",
				"aria-label": "Stop Losing Leads HQ home",
				children: /* @__PURE__ */ jsx("img", {
					src: A + "logo.png",
					alt: "Stop Losing Leads HQ"
				})
			}),
			/* @__PURE__ */ jsxs("nav", {
				"aria-label": "Main navigation",
				className: menu ? "open" : "",
				children: [
					/* @__PURE__ */ jsx("a", {
						href: "/",
						children: "Home"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "/how-it-works",
						children: "How it works"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "/our-story",
						children: "Our story"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "/business-lab",
						children: "The Business Lab"
					})
				]
			}),
			/* @__PURE__ */ jsxs("a", {
				className: "nav-cta",
				href: "/contact",
				children: ["Let's find your leak ", /* @__PURE__ */ jsx("span", {
					className: "button-arrow",
					children: /* @__PURE__ */ jsx(FiArrowUpRight, {})
				})]
			}),
			/* @__PURE__ */ jsx("button", {
				className: "menu",
				"aria-label": menu ? "Close navigation" : "Open navigation",
				"aria-expanded": menu,
				onClick: () => setMenu(!menu),
				children: menu ? /* @__PURE__ */ jsx(FiX, {}) : /* @__PURE__ */ jsx(FiMenu, {})
			})
		] }),
		/* @__PURE__ */ jsx("main", {
			id: "main",
			children
		}),
		/* @__PURE__ */ jsxs("footer", { children: [/* @__PURE__ */ jsxs("div", {
			className: "footer-top",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("a", {
					href: "/",
					className: "footer-brand",
					children: /* @__PURE__ */ jsx("img", {
						src: A + "logo.png",
						alt: "Stop Losing Leads HQ"
					})
				}), /* @__PURE__ */ jsxs("p", { children: [
					"You do the work.",
					/* @__PURE__ */ jsx("br", {}),
					"We'll handle the follow up."
				] })] }),
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("b", { children: "Explore" }),
					/* @__PURE__ */ jsx("a", {
						href: "/how-it-works",
						children: "How it works"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "/our-story",
						children: "Our story"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "/business-lab",
						children: "The Business Lab"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "/quiz",
						children: "Lead Leak Quiz"
					})
				] }),
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("b", { children: "Talk to real people" }),
					/* @__PURE__ */ jsx("a", {
						href: "tel:+19402027945",
						children: "(940) 202-7945"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "mailto:hello@mail.stoplosingleadshq.com",
						children: "hello@mail.stoplosingleadshq.com"
					}),
					/* @__PURE__ */ jsxs("p", { children: [
						"Carrollton Texas",
						/* @__PURE__ */ jsx("br", {}),
						"Mon to Fri · 9am to 5pm Central"
					] })
				] }),
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("b", { children: "Keep growing" }),
					/* @__PURE__ */ jsx("a", {
						href: "https://www.youtube.com/@stoplosingleadshq",
						children: "YouTube ↗"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "https://www.facebook.com/profile.php?id=61575410375946",
						children: "Facebook ↗"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "https://www.skool.com/thebusinesslab-5864/about",
						children: "The Business Lab ↗"
					})
				] })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "footer-bottom",
			children: [
				/* @__PURE__ */ jsx("span", { children: "© 2026 Stop Losing Leads HQ" }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("a", {
					href: "https://stoplosingleadshq.com/privacy-policy",
					children: "Privacy policy"
				}), /* @__PURE__ */ jsx("a", {
					href: "https://stoplosingleadshq.com/terms-and-conditions",
					children: "Terms & conditions"
				})] }),
				/* @__PURE__ */ jsx("span", { children: "Built on honest conversations." })
			]
		})] })
	] });
}
var problems = [
	{
		icon: FiPhone,
		title: "The phone rings. Nobody picks up.",
		body: "That caller just Googled your competitor. They picked up on the first ring."
	},
	{
		icon: FiClock,
		title: "A form sits for hours. Then overnight.",
		body: "They contacted three businesses. You responded last. Guess who got the job."
	},
	{
		icon: FiMessageSquare,
		title: "You send one reply. Then silence.",
		body: "No second follow up. The prospect goes cold. The money you spent to reach them is gone."
	},
	{
		icon: FiUsers,
		title: "Old contacts. Collecting dust.",
		body: "Each one is a relationship you already invested in. Recoverable. Sitting there. Waiting."
	}
];
var before = [
	"A missed call goes to voicemail. Then your competitor.",
	"A web form waits until tonight.",
	"One reply. Then silence.",
	"Old contacts sit in a spreadsheet.",
	"You answer the phone between jobs."
];
var after = [
	"A missed call gets a text back in seconds.",
	"A web form gets a prompt answer.",
	"Follow up continues until they book or say no.",
	"Old contacts get a reason to come back.",
	"You do the job. The system answers."
];
function Comparison() {
	const labels = [
		"Missed calls",
		"Web inquiries",
		"Follow up",
		"Past contacts",
		"Your time"
	];
	const icons = [
		FiPhone,
		FiMessageSquare,
		FiClock,
		FiUsers,
		FiCalendar
	];
	return /* @__PURE__ */ jsxs("section", {
		className: "section compare compare-v3",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "section-heading",
				children: [/* @__PURE__ */ jsx("span", {
					className: "eyebrow",
					children: "SAME LEADS. A DIFFERENT WAY TO WORK."
				}), /* @__PURE__ */ jsxs("h2", { children: [
					"More follow through.",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("em", { children: "Less falling through." })
				] })]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "change-table",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "change-head",
					children: [
						/* @__PURE__ */ jsx("span", { children: "WHERE IT CHANGES" }),
						/* @__PURE__ */ jsx("span", { children: "Without a system" }),
						/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("span", { className: "live-dot" }), " With your system"] })
					]
				}), labels.map((label, i) => {
					const Icon = icons[i];
					return /* @__PURE__ */ jsxs("div", {
						className: "change-row",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "change-label",
								children: [/* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(Icon, {}) }), /* @__PURE__ */ jsx("b", { children: label })]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "change-before",
								children: [/* @__PURE__ */ jsx(FiX, {}), before[i]]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "change-after",
								children: [/* @__PURE__ */ jsx(FiCheck, {}), after[i]]
							})
						]
					}, label);
				})]
			}),
			/* @__PURE__ */ jsx("small", { children: "Illustrative workflows. Your system is shaped around your business." })
		]
	});
}
function Guide() {
	return /* @__PURE__ */ jsxs("section", {
		className: "section guide",
		children: [/* @__PURE__ */ jsxs(Reveal, {
			className: "guide-art",
			children: [/* @__PURE__ */ jsx("img", {
				src: A + "MJ Head shot.png",
				alt: "Portrait supplied by the SLLHQ team",
				loading: "lazy"
			}), /* @__PURE__ */ jsx("span", { children: "THE PEOPLE BEHIND THE FOLLOW UP" })]
		}), /* @__PURE__ */ jsxs(Reveal, { children: [
			/* @__PURE__ */ jsx("span", {
				className: "eyebrow",
				children: "YOUR BUSINESS DESERVES A GUIDE"
			}),
			/* @__PURE__ */ jsxs("h2", { children: [
				"We run businesses too.",
				/* @__PURE__ */ jsx("br", {}),
				/* @__PURE__ */ jsx("em", { children: "We know the feeling." })
			] }),
			/* @__PURE__ */ jsx("p", { children: "We're Kevin and Marcie and our co founder Jordanna. There is a great team behind us. We run our own businesses. So we built the follow up system we needed ourselves." }),
			/* @__PURE__ */ jsx("p", { children: "Now we build and run it for other owners. You don't need another course. You need the follow up handled." }),
			/* @__PURE__ */ jsxs("a", {
				className: "button guide-cta",
				href: "/our-story",
				children: ["Meet the people behind the system ", /* @__PURE__ */ jsx(FiArrowUpRight, {})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "names",
				children: [
					/* @__PURE__ */ jsxs("span", { children: ["Kevin ", /* @__PURE__ */ jsx("small", { children: "Systems architect" })] }),
					/* @__PURE__ */ jsxs("span", { children: ["Marcie ", /* @__PURE__ */ jsx("small", { children: "Client success" })] }),
					/* @__PURE__ */ jsxs("span", { children: ["Jordanna ", /* @__PURE__ */ jsx("small", { children: "Strategy" })] })
				]
			})
		] })]
	});
}
var faqs = [
	["Do I need more leads first?", "No. Start with the leads you have. We help you reply faster and keep following up."],
	["Do you replace my marketing?", "No. Your marketing brings people in. We handle what happens after they reach out."],
	["Do I need to be tech savvy?", "No. You approve the plan. We build and test your system. Then we run it for you."],
	["What if I already have a CRM?", "We look at what you have first. A contact list becomes more useful when the right follow up runs behind it."],
	["What does it cost?", "Every business leaks in a different place. We do not guess. On your diagnostic we explain what it takes to close your leak and what it costs. We tell you whether you need us at all."]
];
function Home() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Hero, {}),
		/* @__PURE__ */ jsxs("section", {
			className: "section problem",
			id: "problem",
			children: [
				/* @__PURE__ */ jsxs(Reveal, {
					className: "section-heading",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
						className: "eyebrow",
						children: "THE LEAK ISN'T ALWAYS OBVIOUS"
					}), /* @__PURE__ */ jsxs("h2", { children: [
						"You're not short on leads.",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("em", { children: "You're losing the ones you have." })
					] })] }), /* @__PURE__ */ jsx("p", { children: "You're on the job doing the work you're great at. That is exactly when the phone rings." })]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "problem-grid",
					children: problems.map((p, i) => /* @__PURE__ */ jsxs(Reveal, { children: [
						/* @__PURE__ */ jsx(p.icon, {}),
						/* @__PURE__ */ jsxs("span", {
							className: "card-index",
							children: ["0", i + 1]
						}),
						/* @__PURE__ */ jsx("h3", { children: p.title }),
						/* @__PURE__ */ jsx("p", { children: p.body })
					] }, p.title))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "problem-end",
					children: [
						"It's not a people problem. ",
						/* @__PURE__ */ jsx("b", { children: "It's a system problem." }),
						/* @__PURE__ */ jsxs("a", {
							className: "button problem-cta",
							href: "/quiz",
							children: ["Find your leak ", /* @__PURE__ */ jsx("span", {
								className: "button-arrow",
								children: /* @__PURE__ */ jsx(FiArrowRight, {})
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ jsx(Guide, {}),
		/* @__PURE__ */ jsx(Plan, {}),
		/* @__PURE__ */ jsx(Comparison, {}),
		/* @__PURE__ */ jsx(Videos, {}),
		/* @__PURE__ */ jsxs("section", {
			className: "stakes",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "eyebrow",
					children: "STEWARD WHAT YOU ALREADY HAVE"
				}),
				/* @__PURE__ */ jsxs("h2", { children: [
					"The goal isn't more leads.",
					/* @__PURE__ */ jsx("br", {}),
					"It's to stop losing",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("em", { children: "the ones you have." })
				] }),
				/* @__PURE__ */ jsxs("p", { children: [
					"Your calendar fills. Old customers come back.",
					/* @__PURE__ */ jsx("br", {}),
					"You get your evenings back."
				] })
			]
		}),
		/* @__PURE__ */ jsx(FinalCTA, {}),
		/* @__PURE__ */ jsxs("section", {
			className: "section faq",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("span", {
					className: "eyebrow",
					children: "A LITTLE MORE CLARITY"
				}),
				/* @__PURE__ */ jsxs("h2", { children: [
					"Good questions.",
					/* @__PURE__ */ jsx("br", {}),
					"Honest answers."
				] }),
				/* @__PURE__ */ jsxs("a", {
					href: "/contact",
					className: "text-link",
					children: ["Talk to our team ", /* @__PURE__ */ jsx(FiArrowUpRight, {})]
				})
			] }), /* @__PURE__ */ jsx("div", { children: faqs.map(([q, a]) => /* @__PURE__ */ jsxs("details", { children: [/* @__PURE__ */ jsxs("summary", { children: [q, /* @__PURE__ */ jsx("span", { children: "+" })] }), /* @__PURE__ */ jsx("p", { children: a })] }, q)) })]
		}),
		/* @__PURE__ */ jsx(HomeContact, {})
	] });
}
function HomeContact() {
	return /* @__PURE__ */ jsxs("section", {
		className: "section home-contact",
		children: [/* @__PURE__ */ jsxs("div", { children: [
			/* @__PURE__ */ jsx("span", {
				className: "eyebrow",
				children: "TALK TO OUR TEAM"
			}),
			/* @__PURE__ */ jsxs("h2", { children: [
				"A real conversation.",
				/* @__PURE__ */ jsx("br", {}),
				/* @__PURE__ */ jsx("em", { children: "A clear next step." })
			] }),
			/* @__PURE__ */ jsx("p", { children: "Tell us a little about your business. We will look at where leads slip away and explain the system that fits. Pricing comes after we understand what you need." }),
			/* @__PURE__ */ jsx(CTA, {})
		] }), /* @__PURE__ */ jsxs("div", {
			className: "contact-details",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: "tel:+19402027945",
					children: [
						/* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(FiPhone, {}) }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("small", { children: "GIVE US A CALL" }), /* @__PURE__ */ jsx("b", { children: "(940) 202 7945" })] }),
						/* @__PURE__ */ jsx(FiArrowUpRight, {})
					]
				}),
				/* @__PURE__ */ jsxs("a", {
					href: "mailto:hello@mail.stoplosingleadshq.com",
					children: [
						/* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(FiMessageSquare, {}) }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("small", { children: "SEND US AN EMAIL" }), /* @__PURE__ */ jsx("b", { children: "hello@mail.stoplosingleadshq.com" })] }),
						/* @__PURE__ */ jsx(FiArrowUpRight, {})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "contact-hours",
					children: [/* @__PURE__ */ jsx(FiClock, {}), /* @__PURE__ */ jsxs("p", { children: [
						"Monday to Friday · 9am to 5pm Central",
						/* @__PURE__ */ jsx("br", {}),
						"Carrollton Texas"
					] })]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "fast-reply",
					children: "We respond fast. (Obviously.)"
				})
			]
		})]
	});
}
function Story() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "section page-hero",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "eyebrow",
					children: "OUR STORY · CARROLLTON TEXAS"
				}),
				/* @__PURE__ */ jsxs("h1", { children: [
					"We built this",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("em", { children: "for ourselves first." })
				] }),
				/* @__PURE__ */ jsx("p", { children: "Business owners. Curious people. Your follow up team." })
			]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section story-grid",
			children: [/* @__PURE__ */ jsx("img", {
				src: A + "M SLLHQ in the house 5.png",
				alt: "Supplied SLLHQ brand artwork"
			}), /* @__PURE__ */ jsxs("article", { children: [
				/* @__PURE__ */ jsxs("h2", { children: [
					"A better way to",
					/* @__PURE__ */ jsx("br", {}),
					"follow through."
				] }),
				/* @__PURE__ */ jsx("p", { children: "We're Kevin and Marcie. We're husband and wife in Carrollton Texas. We've spent seventeen years as entrepreneurs. Today we run KMT Antiques and The Business Lab. Our community helps owners build their systems together." }),
				/* @__PURE__ */ jsx("p", { children: "Stop Losing Leads HQ started as our own fix. We needed follow up that worked. Every person who reached out needed an answer. It worked. Other owners started asking how." }),
				/* @__PURE__ */ jsx("p", { children: "Our co founder Jordanna leads strategy and client relationships. Kevin and Marcie lead the build and coaching. Our team builds and tests the workflows behind the scenes." }),
				/* @__PURE__ */ jsx("p", { children: "Jesus Christ is the center of how we run this business. For us that means honest numbers and real testimonials. We serve you before we ask for anything." }),
				/* @__PURE__ */ jsxs("blockquote", { children: [
					"Always be growing.",
					/* @__PURE__ */ jsx("br", {}),
					"Always be learning.",
					/* @__PURE__ */ jsx("br", {}),
					"Always be helping."
				] })
			] })]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section team",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "eyebrow",
					children: "THE PEOPLE & THE SYSTEMS"
				}),
				/* @__PURE__ */ jsx("h2", { children: "Meet your corner." }),
				/* @__PURE__ */ jsx("div", {
					className: "team-grid",
					children: [
						[
							"Kevin",
							"Co founder · Systems architect",
							"Designs follow up systems and runs his own businesses on them."
						],
						[
							"Marcie",
							"Co founder · Client success",
							"Helps owners steward what they already have."
						],
						[
							"Jordanna",
							"Co founder · Strategy",
							"Makes sure each system fits the business it is built for."
						],
						[
							"Mav",
							"AI strategy agent",
							"Works with Jordanna to shape the message and next move."
						],
						[
							"River",
							"AI execution agent",
							"Works with Kevin and Marcie on content and reporting."
						]
					].map(([n, r, b], i) => /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("div", {
							className: "team-avatar",
							children: i > 2 ? /* @__PURE__ */ jsx(FiZap, {}) : n[0]
						}),
						/* @__PURE__ */ jsx("h3", { children: n }),
						/* @__PURE__ */ jsx("small", { children: r }),
						/* @__PURE__ */ jsx("p", { children: b })
					] }, n))
				}),
				/* @__PURE__ */ jsx("p", { children: "And the team behind us who make it all possible." })
			]
		}),
		/* @__PURE__ */ jsx(Videos, {}),
		/* @__PURE__ */ jsx(FinalCTA, {})
	] });
}
function Lab() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "section lab-hero",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("span", {
					className: "eyebrow",
					children: "THE BUSINESS LAB"
				}),
				/* @__PURE__ */ jsxs("h1", { children: [
					"Less chaos.",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("em", { children: "More clarity." })
				] }),
				/* @__PURE__ */ jsx("p", { children: "A room for owners who want to build better systems together. Real conversations. Practical next steps. People in your corner." }),
				/* @__PURE__ */ jsxs("a", {
					className: "button",
					href: "https://www.skool.com/thebusinesslab-5864/about",
					children: ["Explore The Business Lab ", /* @__PURE__ */ jsx(FiArrowUpRight, {})]
				})
			] }), /* @__PURE__ */ jsx("img", {
				src: A + "From Chaos to Clarity_ Business Lab.png",
				alt: "From Chaos to Clarity, supplied Business Lab artwork"
			})]
		}),
		/* @__PURE__ */ jsx(Videos, {}),
		/* @__PURE__ */ jsx(FinalCTA, {})
	] });
}
function Quiz() {
	const [answers, setAnswers] = useState([]), [step, setStep] = useState(0);
	const questions = [
		"How fast do you reply to a new inquiry?",
		"What happens after your first reply?",
		"When did you last reconnect with old contacts?"
	];
	const options = [
		[
			"Within minutes",
			"Later that day",
			"The next day or later"
		],
		[
			"We follow up until they answer",
			"We try once or twice",
			"Usually nothing"
		],
		[
			"This month",
			"A few months ago",
			"We have not done that"
		]
	];
	const result = answers[0] === 2 ? "Speed leak" : answers[1] === 2 ? "Follow up leak" : answers[2] > 0 ? "Database leak" : "Follow up opportunity";
	return /* @__PURE__ */ jsxs("section", {
		className: "section quiz-page",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "eyebrow",
				children: "30 SECOND LEAD LEAK QUIZ"
			}),
			/* @__PURE__ */ jsxs("h1", { children: [
				"Find the gap.",
				/* @__PURE__ */ jsx("br", {}),
				/* @__PURE__ */ jsx("em", { children: "Keep the opportunity." })
			] }),
			/* @__PURE__ */ jsx("div", {
				className: "quiz-card",
				children: step < 3 ? /* @__PURE__ */ jsxs(Fragment, { children: [
					/* @__PURE__ */ jsxs("small", { children: [
						"QUESTION ",
						step + 1,
						" OF 3"
					] }),
					/* @__PURE__ */ jsx("div", {
						className: "progress-track",
						children: /* @__PURE__ */ jsx("span", { style: { width: (step + 1) / 3 * 100 + "%" } })
					}),
					/* @__PURE__ */ jsx("h2", { children: questions[step] }),
					options[step].map((o, i) => /* @__PURE__ */ jsxs("button", {
						onClick: () => {
							setAnswers([...answers.slice(0, step), i]);
							setStep(step + 1);
						},
						children: [o, /* @__PURE__ */ jsx(FiArrowRight, {})]
					}, o)),
					step > 0 && /* @__PURE__ */ jsx("button", {
						onClick: () => setStep(step - 1),
						children: "← Previous question"
					})
				] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
					/* @__PURE__ */ jsx("span", {
						className: "eyebrow",
						children: "YOUR POSSIBLE LEAK"
					}),
					/* @__PURE__ */ jsx("h2", { children: result }),
					/* @__PURE__ */ jsx("p", { children: "This quick self check points to a possible gap. It is not a full business diagnosis. Book your diagnostic and we'll show you how to close it." }),
					/* @__PURE__ */ jsx(CTA, {}),
					/* @__PURE__ */ jsx("button", {
						onClick: () => {
							setStep(0);
							setAnswers([]);
						},
						children: "Take the quiz again"
					})
				] })
			})
		]
	});
}
function Contact() {
	const [ready, setReady] = useState(false);
	return /* @__PURE__ */ jsxs("section", {
		className: "section contact-page",
		children: [/* @__PURE__ */ jsxs("div", { children: [
			/* @__PURE__ */ jsx("span", {
				className: "eyebrow",
				children: "LET'S FIND YOUR LEAK"
			}),
			/* @__PURE__ */ jsxs("h1", { children: [
				"Talk to",
				/* @__PURE__ */ jsx("br", {}),
				/* @__PURE__ */ jsx("em", { children: "our team." })
			] }),
			/* @__PURE__ */ jsx("p", { children: "You won't get a sales team. You'll get us. Tell us a little about your business and let's set up your free Lead Leak Diagnostic." }),
			/* @__PURE__ */ jsxs("ol", { children: [
				/* @__PURE__ */ jsx("li", { children: "Send your details. We reply within one business day." }),
				/* @__PURE__ */ jsx("li", { children: "We look at how leads reach you today." }),
				/* @__PURE__ */ jsx("li", { children: "You leave with a clear picture and a next step." })
			] }),
			/* @__PURE__ */ jsx("a", {
				className: "text-link",
				href: "tel:+19402027945",
				children: "(940) 202-7945"
			}),
			/* @__PURE__ */ jsx("a", {
				className: "text-link",
				href: "mailto:hello@mail.stoplosingleadshq.com",
				children: "Email our team ↗"
			}),
			/* @__PURE__ */ jsx("p", { children: "Carrollton TX · Mon to Fri · 9am to 5pm Central" }),
			/* @__PURE__ */ jsx("b", { children: "We respond fast. (Obviously.)" }),
			/* @__PURE__ */ jsxs("div", {
				className: "contact-story",
				children: [/* @__PURE__ */ jsx("img", {
					src: A + "MJ Head shot.png",
					alt: "Portrait supplied by the SLLHQ team"
				}), /* @__PURE__ */ jsx("p", { children: "We're Kevin and Marcie in Carrollton Texas. We run our own businesses and The Business Lab. We built this follow up system for ourselves first." })]
			})
		] }), /* @__PURE__ */ jsxs("form", {
			onSubmit: (e) => {
				e.preventDefault();
				const data = new FormData(e.currentTarget);
				const body = Array.from(data.entries()).map(([k, v]) => k + ": " + v).join("\n");
				window.location.href = "mailto:hello@mail.stoplosingleadshq.com?subject=" + encodeURIComponent("Lead Leak Diagnostic request") + "&body=" + encodeURIComponent(body);
				setReady(true);
			},
			children: [
				/* @__PURE__ */ jsx("h2", { children: "A little about your business." }),
				/* @__PURE__ */ jsx("p", { children: "This form opens your email app with your details. Send the email there to reach our team." }),
				/* @__PURE__ */ jsx("div", {
					className: "form-grid",
					children: [
						["Name", "text"],
						["Email", "email"],
						["Phone", "tel"],
						["Business name", "text"]
					].map(([n, t]) => /* @__PURE__ */ jsxs("label", { children: [n, /* @__PURE__ */ jsx("input", {
						name: n,
						type: t,
						required: true
					})] }, n))
				}),
				/* @__PURE__ */ jsxs("label", { children: ["Industry", /* @__PURE__ */ jsxs("select", {
					name: "Industry",
					required: true,
					children: [/* @__PURE__ */ jsx("option", {
						value: "",
						children: "Select your industry"
					}), [
						"Home services",
						"Real estate",
						"Coaching & consulting",
						"Professional services",
						"Other"
					].map((t) => /* @__PURE__ */ jsx("option", { children: t }, t))]
				})] }),
				/* @__PURE__ */ jsxs("label", { children: ["Where do most of your leads come from?", /* @__PURE__ */ jsx("input", {
					name: "Lead source",
					required: true
				})] }),
				/* @__PURE__ */ jsxs("label", { children: ["About how many new leads a month?", /* @__PURE__ */ jsx("input", {
					name: "Monthly leads",
					type: "number",
					min: "0",
					required: true
				})] }),
				/* @__PURE__ */ jsxs("label", { children: ["What happens when you miss a call?", /* @__PURE__ */ jsxs("select", {
					name: "Missed calls",
					required: true,
					children: [
						/* @__PURE__ */ jsx("option", {
							value: "",
							children: "Select an answer"
						}),
						/* @__PURE__ */ jsx("option", { children: "Someone calls back" }),
						/* @__PURE__ */ jsx("option", { children: "Voicemail" }),
						/* @__PURE__ */ jsx("option", { children: "Nothing" }),
						/* @__PURE__ */ jsx("option", { children: "Automatic text reply" })
					]
				})] }),
				/* @__PURE__ */ jsx("p", {
					className: "form-note",
					children: "We use these details to respond to your request. No SMS subscription is created by this form."
				}),
				/* @__PURE__ */ jsxs("button", {
					type: "submit",
					className: "button",
					children: ["Prepare My Diagnostic Request ", /* @__PURE__ */ jsx(FiArrowUpRight, {})]
				}),
				ready && /* @__PURE__ */ jsx("p", {
					role: "status",
					children: "Please send the draft from your email app. If it did not open call (940) 202-7945."
				})
			]
		})]
	});
}
// src/routes/__root.tsx
var Route$6 = createRootRoute({
	head: () => ({ meta: [
		{ charSet: "utf-8" },
		{
			name: "viewport",
			content: "width=device-width, initial-scale=1"
		},
		{ title: "Stop Losing Leads HQ | Make every lead count" },
		{
			name: "description",
			content: "We build and run your follow up system. Find your lead leak with the team at Stop Losing Leads HQ."
		}
	] }),
	component: () => /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [/* @__PURE__ */ jsx(Shell, { children: /* @__PURE__ */ jsx(Outlet, {}) }), /* @__PURE__ */ jsx(Scripts, {})] })]
	}),
	notFoundComponent: () => /* @__PURE__ */ jsxs("section", {
		className: "section",
		children: [/* @__PURE__ */ jsx("h1", { children: "That page slipped away." }), /* @__PURE__ */ jsx("a", {
			href: "/",
			children: "Back to home →"
		})]
	})
});
// src/routes/index.tsx
var $$splitComponentImporter$5 = () => import("./routes-B_pW62f0.js");
var Route$5 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
// src/routes/business-lab.tsx
var $$splitComponentImporter$4 = () => import("./business-lab-CO50XsQh.js");
var Route$4 = createFileRoute("/business-lab")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
// src/routes/contact.tsx
var $$splitComponentImporter$3 = () => import("./contact-DG-vk4dk.js");
var Route$3 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
// src/routes/how-it-works.tsx
var $$splitComponentImporter$2 = () => import("./how-it-works-gcIcICRd.js");
var Route$2 = createFileRoute("/how-it-works")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
// src/routes/our-story.tsx
var $$splitComponentImporter$1 = () => import("./our-story-DfxRY8qa.js");
var Route$1 = createFileRoute("/our-story")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
// src/routes/quiz.tsx
var $$splitComponentImporter = () => import("./quiz-BhTkCPtB.js");
var Route = createFileRoute("/quiz")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
// src/routeTree.gen.ts
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	BusinessLabRoute: Route$4.update({
		id: "/business-lab",
		path: "/business-lab",
		getParentRoute: () => Route$6
	}),
	ContactRoute: Route$3.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$6
	}),
	HowItWorksRoute: Route$2.update({
		id: "/how-it-works",
		path: "/how-it-works",
		getParentRoute: () => Route$6
	}),
	OurStoryRoute: Route$1.update({
		id: "/our-story",
		path: "/our-story",
		getParentRoute: () => Route$6
	}),
	QuizRoute: Route.update({
		id: "/quiz",
		path: "/quiz",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
// src/router.tsx
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		scrollRestoration: true
	});
}
export { Quiz as a, Plan as c, getRouter, Lab as i, Contact as n, Story as o, Home as r, FinalCTA as s, router_exports as t };
