import { a as Videos, i as WorkspaceImage, n as CommunityBlock, r as ConversationImage } from "./community-zLzvwQik.js";
import { useEffect, useRef, useState } from "react";
import { HeadContent, Outlet, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight, FiCalendar, FiCheck, FiClock, FiFacebook, FiMessageSquare, FiPhone, FiPlay, FiUsers, FiX, FiYoutube, FiZap } from "react-icons/fi";
import gsap from "gsap";
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
// src/team-image.tsx
function TeamImage({ className = "", priority = false }) {
	return /* @__PURE__ */ jsx("figure", {
		className: "team-image " + className,
		children: /* @__PURE__ */ jsx("img", {
			src: "/assets/owners-group-edited-v1.png",
			alt: "Edited group portrait of the three SLLHQ owners with the man in the center and both women at the sides",
			loading: priority ? "eager" : "lazy",
			fetchPriority: priority ? "high" : void 0,
			width: 1536,
			height: 1024
		})
	});
}
// src/proof-section.tsx
var proofVideos = [
	"kD6Mu7V0eqU",
	"2GJiK9GdjEQ",
	"OqyIwlXkEpQ"
];
function Proof() {
	const reduced = useReducedMotion();
	const [playing, setPlaying] = useState(null);
	const trigger = useRef(null);
	useEffect(() => {
		if (!playing) return;
		const prior = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const key = (e) => {
			if (e.key === "Escape") setPlaying(null);
			if (e.key === "Tab") {
				const els = [...document.querySelectorAll(".proof-video-dialog button, .proof-video-dialog iframe, .proof-video-dialog a")];
				const first = els[0], last = els[els.length - 1];
				if (e.shiftKey && document.activeElement === first) {
					e.preventDefault();
					last?.focus();
				} else if (!e.shiftKey && document.activeElement === last) {
					e.preventDefault();
					first?.focus();
				}
			}
		};
		document.addEventListener("keydown", key);
		return () => {
			document.body.style.overflow = prior;
			document.removeEventListener("keydown", key);
			trigger.current?.focus();
		};
	}, [playing]);
	return /* @__PURE__ */ jsxs("section", {
		className: "section proof proof-complete",
		id: "client-stories",
		"aria-labelledby": "proof-title",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "eyebrow",
				children: "REAL PEOPLE ONLY"
			}),
			/* @__PURE__ */ jsxs("h2", {
				id: "proof-title",
				children: [
					"Real owners. Real businesses.",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("em", { children: "Solving real problems." })
				]
			}),
			/* @__PURE__ */ jsx("p", { children: "We're early, and we're building in the open. Here's what our first clients said." }),
			/* @__PURE__ */ jsx("div", {
				className: "proof-clips",
				children: proofVideos.map((id, i) => /* @__PURE__ */ jsxs(motion.article, {
					className: "client-video-card",
					initial: { y: reduced ? 0 : 20 },
					whileInView: { y: 0 },
					viewport: { once: true },
					transition: {
						duration: .5,
						delay: i * .08
					},
					children: [/* @__PURE__ */ jsxs("button", {
						className: "client-video-cover",
						"aria-label": "Play client conversation " + (i + 1),
						onClick: (e) => {
							trigger.current = e.currentTarget;
							setPlaying(id);
						},
						children: [/* @__PURE__ */ jsx("img", {
							src: "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg",
							alt: "Client conversation " + (i + 1),
							loading: "lazy"
						}), /* @__PURE__ */ jsx("span", {
							className: "client-play",
							children: /* @__PURE__ */ jsx(FiPlay, {})
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "client-video-copy",
						children: [
							/* @__PURE__ */ jsx("small", { children: "REAL CONVERSATIONS" }),
							/* @__PURE__ */ jsx("h3", { children: "Hear their story." }),
							/* @__PURE__ */ jsxs("a", {
								href: "https://www.youtube.com/watch?v=" + id,
								children: ["Watch the conversation ", /* @__PURE__ */ jsx(FiPlay, {})]
							})
						]
					})]
				}, id))
			}),
			playing && /* @__PURE__ */ jsx("div", {
				className: "modal proof-video-dialog",
				role: "dialog",
				"aria-modal": "true",
				"aria-label": "Client conversation",
				onClick: () => setPlaying(null),
				children: /* @__PURE__ */ jsxs("div", {
					onClick: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ jsx("button", {
							className: "close",
							autoFocus: true,
							onClick: () => setPlaying(null),
							"aria-label": "Close client video",
							children: "×"
						}),
						/* @__PURE__ */ jsx("iframe", {
							src: "https://www.youtube-nocookie.com/embed/" + playing + "?autoplay=1",
							title: "Client conversation",
							allow: "autoplay; encrypted-media; fullscreen",
							allowFullScreen: true
						}),
						/* @__PURE__ */ jsx("a", {
							href: "https://www.youtube.com/watch?v=" + playing,
							children: "Watch on YouTube"
						})
					]
				})
			})
		]
	});
}
// src/quiz-page.tsx
var quizQuestions = [
	{
		title: "How do most of your leads reach you?",
		options: [
			"Phone calls",
			"Web forms",
			"Texts or messages",
			"Referrals"
		]
	},
	{
		title: "How fast do you usually reply to a new lead?",
		options: [
			"Within a few minutes",
			"Within a few hours",
			"The next day",
			"It depends on the day"
		]
	},
	{
		title: "What happens when you miss a call?",
		options: [
			"They get a text back right away",
			"They leave a voicemail",
			"I call back when I can",
			"Nothing happens"
		]
	},
	{
		title: "When a lead goes quiet, how many times do you follow up?",
		options: [
			"Many times",
			"Two or three times",
			"Once",
			"Never"
		]
	},
	{
		title: "What do you do with your old contacts?",
		options: [
			"We message them often",
			"We message them sometimes",
			"They sit in a list",
			"We don’t have a list"
		]
	}
];
function scoreQuiz(answers) {
	const scores = [
		[
			0,
			1,
			3,
			2
		][answers[1] ?? 0] + [
			0,
			2,
			1,
			3
		][answers[2] ?? 0],
		[
			0,
			2,
			4,
			6
		][answers[3] ?? 0],
		[
			0,
			2,
			4,
			6
		][answers[4] ?? 0]
	];
	const highest = Math.max(...scores);
	return scores.filter((score) => score === highest).length > 1 ? 0 : scores.indexOf(highest);
}
function Quiz() {
	const [answers, setAnswers] = useState([]), [step, setStep] = useState(0);
	const reduced = useReducedMotion();
	const resultIndex = scoreQuiz(answers);
	const results = [
		["Speed leak", "Your leads wait too long for an answer. A missed call or a slow reply sends them to the next business. The fix is to answer in seconds, even when you’re on a job."],
		["Follow up leak", "You reply once, and then it goes quiet. Most people need more than one touch before they book. The fix is follow up that keeps going until they book or say no."],
		["Database leak", "You already have people who know you, but nobody is talking to them. Old contacts and past customers are sitting untouched. The fix is a reason for them to come back."]
	];
	return /* @__PURE__ */ jsxs("section", {
		className: "section quiz-page",
		children: [
			/* @__PURE__ */ jsxs("h1", { children: [
				"The 30 Second",
				/* @__PURE__ */ jsx("br", {}),
				/* @__PURE__ */ jsx("em", { children: "Lead Leak Quiz." })
			] }),
			/* @__PURE__ */ jsx("p", { children: "Answer a few quick questions and we'll name where your leads are slipping away." }),
			/* @__PURE__ */ jsx("div", {
				className: "quiz-card",
				children: step < 5 ? /* @__PURE__ */ jsxs(Fragment, { children: [
					/* @__PURE__ */ jsxs("small", { children: [
						"Question ",
						step + 1,
						" of 5"
					] }),
					/* @__PURE__ */ jsx("div", {
						className: "progress-track",
						role: "progressbar",
						"aria-label": "Quiz progress",
						"aria-valuenow": step + 1,
						"aria-valuemin": 0,
						"aria-valuemax": 5,
						children: /* @__PURE__ */ jsx("span", { style: { width: (step + 1) * 20 + "%" } })
					}),
					/* @__PURE__ */ jsxs(motion.div, {
						initial: { x: reduced ? 0 : 12 },
						animate: { x: 0 },
						transition: { duration: .25 },
						children: [/* @__PURE__ */ jsx("h2", { children: quizQuestions[step].title }), /* @__PURE__ */ jsx("div", {
							className: "quiz-options",
							children: quizQuestions[step].options.map((option, i) => /* @__PURE__ */ jsxs("button", {
								onClick: () => {
									setAnswers([...answers.slice(0, step), i]);
									setStep(step + 1);
								},
								children: [option, /* @__PURE__ */ jsx(FiArrowRight, {})]
							}, option))
						})]
					}, step),
					step > 0 && /* @__PURE__ */ jsx("button", {
						className: "quiz-back",
						onClick: () => setStep(step - 1),
						children: "Previous question"
					})
				] }) : /* @__PURE__ */ jsxs("div", {
					className: "quiz-result",
					"aria-live": "polite",
					children: [
						/* @__PURE__ */ jsx("h2", { children: results[resultIndex][0] }),
						/* @__PURE__ */ jsx("p", { children: results[resultIndex][1] }),
						/* @__PURE__ */ jsx("p", { children: "Book your diagnostic and we'll show you how to close it." }),
						/* @__PURE__ */ jsxs("a", {
							className: "button",
							href: "/book",
							children: ["Book My Lead Leak Diagnostic ", /* @__PURE__ */ jsx(FiArrowUpRight, {})]
						})
					]
				})
			})
		]
	});
}
// src/brief-content.ts
var brief = {
	"hero": {
		"headline": "You already paid for the lead. Let's make sure somebody answers it.",
		"body": "Most service businesses lose good leads to a missed call or a slow reply. We build and run the follow up system that answers every lead in seconds so you book more jobs from the leads you already have.",
		"quiz": "Not ready to talk? Take the 30 second Lead Leak Quiz."
	},
	"problemClosing": "You are on the job doing the work you're great at. That is exactly when the phone rings. It's not a people problem. It's a system problem.",
	"guide": {
		"headline": "We know what it's like to be on a job when the phone rings.",
		"paragraphs": ["We're Kevin Marcie and Jordanna the co founders with a great team behind us. We run our own businesses and we lost leads the same way you do. So we built a system that answers every call text and form in seconds and keeps following up until the person books or says no. It worked so well for us that we started building it for other owners. Our own team runs on two AI agents we built Mav for strategy and River for getting the work done so every system we install is one we use every day.", "We're not an ad agency and we don't sell you more leads. We help you steward the ones you already paid for."]
	},
	"steps": [
		{
			"title": "Talk with us.",
			"body": "A free Lead Leak Diagnostic. We look at how leads reach you today and show you where they slip away. No pitch."
		},
		{
			"title": "We build it for you.",
			"body": "Instant replies missed call text back follow up and a plan for your old contacts. You approve it and we set up everything."
		},
		{
			"title": "You book more jobs.",
			"body": "Your leads get answered in seconds day and night. You get back to the work."
		}
	],
	"stakes": {
		"headline": "The goal is not more leads. The goal is to stop losing the ones you have.",
		"body": "Every week without a system leads you paid for call someone else and years of past customers go cold. With one you answer every lead your calendar fills and you get your evenings back."
	},
	"final": {
		"headline": "Let's find your leak.",
		"body": "Thirty minutes with our team. You'll leave knowing exactly where leads slip away in your business even if you never work with us."
	},
	"story": [
		"We're Kevin and Marcie husband and wife in Carrollton Texas and we've spent seventeen years as entrepreneurs. Today we run an ecommerce business KMT Antiques and The Business Lab a community where owners build their systems together. In July 2026 Marcie walked away from thirty years in corporate and now we're both all in.",
		"Stop Losing Leads HQ started as our own fix. We needed follow up that actually worked for our ecommerce business and for The Business Lab so every person who reached out to us got an answer. We built it it worked and other owners started asking how. So now we build it for them too.",
		"We don't do it alone. Our co founder Jordanna leads strategy and client relationships with Mav our strategy agent. Kevin and Marcie lead the build and the coaching with River our execution agent. And our team builds and tests every workflow behind the scenes.",
		"Honestly we're curious people. We're always digging into how follow up really works what's changing and what actually gets people to answer. Since we're digging that deep anyway we pull back the curtain and share what we learn along the way.",
		"Here's what we believe. You don't need another course. You need the follow up handled. And before you buy more leads steward the ones you already have.",
		"Jesus Christ is the center of how we run this business. For us that looks like honest numbers real testimonials and serving you before we ask for anything.",
		"Our creed is simple. Always be growing always be learning always be helping others whenever we can."
	],
	"contact": {
		"body": "You won't get a sales team. You'll get us. Tell us a little about your business and we'll set up a free Lead Leak Diagnostic.",
		"steps": [
			"You send this form. We reply within one business day.",
			"We meet for your diagnostic and look at how leads reach you today.",
			"You leave with a clear picture of where leads slip away and if it makes sense the system that fits."
		]
	},
	"pricingAnswer": "Every business leaks in a different place so we don't guess. On your diagnostic we'll show you what it would take to close your leak what it costs and whether you need us at all."
};
// src/redesign.tsx
function Action() {
	return /* @__PURE__ */ jsxs("a", {
		className: "button",
		href: "/book",
		children: ["Book My Lead Leak Diagnostic ", /* @__PURE__ */ jsx(FiArrowUpRight, {})]
	});
}
function Hero() {
	const reduced = useReducedMotion();
	useEffect(() => {
		const mm = gsap.matchMedia();
		mm.add("(prefers-reduced-motion: no-preference)", () => {
			gsap.fromTo(".hero-photo-slot", { y: 10 }, {
				y: 0,
				duration: 1.2,
				ease: "power2.out"
			});
		});
		return () => mm.revert();
	}, []);
	return /* @__PURE__ */ jsxs("section", {
		className: "hero hero-v2",
		children: [
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
					/* @__PURE__ */ jsx("p", { children: brief.hero.body }),
					/* @__PURE__ */ jsx(Action, {}),
					/* @__PURE__ */ jsxs("a", {
						className: "quiz-link",
						href: "/quiz",
						children: [
							brief.hero.quiz,
							" ",
							/* @__PURE__ */ jsx(FiArrowRight, {})
						]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "hero-photo-slot",
				children: /* @__PURE__ */ jsx(TeamImage, { priority: true })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "hero-assurance",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(FiCheck, {}), /* @__PURE__ */ jsx("span", { children: "Built for you" })] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(FiCheck, {}), /* @__PURE__ */ jsx("span", { children: "Run by us" })] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(FiCheck, {}), /* @__PURE__ */ jsx("span", { children: "Owned by you" })] })
				]
			})
		]
	});
}
var steps = brief.steps.map((step, i) => ({
	...step,
	icon: [
		FiPhone,
		FiMessageSquare,
		FiCalendar
	][i]
}));
function Plan() {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ jsxs("section", {
		id: "how-it-works",
		className: "section plan plan-v2",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "plan-intro",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "eyebrow",
					children: "A CLEAR PATH FORWARD"
				}),
				/* @__PURE__ */ jsxs("h2", { children: [
					"Here's how",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("em", { children: "it works." })
				] }),
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
		children: [/* @__PURE__ */ jsx("div", { className: "cta-scrim" }), /* @__PURE__ */ jsxs("div", {
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
				/* @__PURE__ */ jsx("p", { children: brief.final.body }),
				/* @__PURE__ */ jsx(Action, {}),
				/* @__PURE__ */ jsx("small", { children: "No pitch on the first call." })
			]
		})]
	});
}
// src/site.tsx
var A = "/assets/";
var CTA = () => /* @__PURE__ */ jsxs("a", {
	className: "button",
	href: "/book",
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
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const update = () => setScrolled(window.scrollY > 50);
		update();
		window.addEventListener("scroll", update, { passive: true });
		return () => window.removeEventListener("scroll", update);
	}, []);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("a", {
			className: "skip",
			href: "#main",
			children: "Skip to content"
		}),
		/* @__PURE__ */ jsxs("header", {
			className: scrolled ? "is-scrolled" : "",
			children: [
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
					className: "desktop-nav",
					children: [
						/* @__PURE__ */ jsx("a", {
							href: "/",
							children: "Home"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "/our-story",
							children: "Our Story"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "/business-lab",
							children: "Business Lab"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "/contact",
							children: "Talk to Our Team"
						})
					]
				}),
				/* @__PURE__ */ jsxs("a", {
					className: "nav-cta",
					href: "/book",
					children: ["Book My Lead Leak Diagnostic ", /* @__PURE__ */ jsx("span", {
						className: "button-arrow",
						children: /* @__PURE__ */ jsx(FiArrowUpRight, {})
					})]
				})
			]
		}),
		/* @__PURE__ */ jsx("main", {
			id: "main",
			children
		}),
		/* @__PURE__ */ jsxs("footer", { children: [
			/* @__PURE__ */ jsx("div", {
				className: "footer-atmosphere",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "footer-top",
				children: [
					/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "footer-brand",
						children: /* @__PURE__ */ jsx("img", {
							src: A + "logo.png",
							alt: "Stop Losing Leads HQ"
						})
					}) }),
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("a", {
							href: "/",
							children: "Home"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "/our-story",
							children: "Our Story"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "/business-lab",
							children: "Business Lab"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "/contact",
							children: "Talk to Our Team"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "/quiz",
							children: "Lead Leak Quiz"
						})
					] }),
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("a", {
							href: "tel:+19402027945",
							children: "(940) 202 7945"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "mailto:hello@mail.stoplosingleadshq.com",
							children: "hello@mail.stoplosingleadshq.com"
						}),
						/* @__PURE__ */ jsxs("p", { children: [
							"Carrollton TX",
							/* @__PURE__ */ jsx("br", {}),
							"Monday to Friday · 9am to 5pm Central"
						] })
					] })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "footer-social",
				children: [
					/* @__PURE__ */ jsxs("a", {
						href: "https://www.youtube.com/@stoplosingleadshq",
						children: [
							/* @__PURE__ */ jsx(FiYoutube, {}),
							"YouTube ",
							/* @__PURE__ */ jsx(FiArrowUpRight, {})
						]
					}),
					/* @__PURE__ */ jsxs("a", {
						href: "https://www.facebook.com/profile.php?id=61575410375946",
						children: [
							/* @__PURE__ */ jsx(FiFacebook, {}),
							"Facebook ",
							/* @__PURE__ */ jsx(FiArrowUpRight, {})
						]
					}),
					/* @__PURE__ */ jsxs("a", {
						href: "https://www.skool.com/thebusinesslab-5864/about",
						children: [
							/* @__PURE__ */ jsx(FiUsers, {}),
							"Skool ",
							/* @__PURE__ */ jsx(FiArrowUpRight, {})
						]
					})
				]
			})
		] })
	] });
}
var problems = [
	{
		icon: FiPhone,
		title: "The phone rings and nobody picks up.",
		body: "That caller just Googled your competitor. They picked up on the first ring."
	},
	{
		icon: FiClock,
		title: "The web form sits overnight.",
		body: "That prospect contacted three businesses. You replied last."
	},
	{
		icon: FiMessageSquare,
		title: "One reply then silence.",
		body: "Nobody follows up again. A good lead goes cold."
	},
	{
		icon: FiUsers,
		title: "Old contacts collect dust.",
		body: "You already paid to reach these people. Give them a reason to come back."
	}
];
var before = [
	"A missed call goes to voicemail then to your competitor",
	"A web form waits until tonight.",
	"One reply then silence",
	"Old contacts sit in a spreadsheet.",
	"You answer the phone between jobs."
];
var after = [
	"A missed call gets a text back in seconds.",
	"A web form gets an answer before they close the tab",
	"Follow up keeps going until they book or say no",
	"Old contacts get a reason to come back.",
	"You do the job and the system answers"
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
		children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(TeamImage, { className: "guide-team-image" }) }), /* @__PURE__ */ jsxs(Reveal, { children: [
			/* @__PURE__ */ jsx("span", {
				className: "eyebrow",
				children: "YOUR BUSINESS DESERVES A GUIDE"
			}),
			/* @__PURE__ */ jsx("h2", { children: brief.guide.headline }),
			brief.guide.paragraphs.map((p) => /* @__PURE__ */ jsx("p", { children: p }, p)),
			/* @__PURE__ */ jsxs("a", {
				className: "button meet-team-button",
				href: "/our-story#team",
				children: ["Meet the team ", /* @__PURE__ */ jsx("span", {
					className: "button-arrow",
					children: /* @__PURE__ */ jsx(FiArrowUpRight, {})
				})]
			})
		] })]
	});
}
var faqs = [
	["Do I need more leads first?", "No. If you get prospects but struggle to respond quickly or follow up consistently this matters now. The system works with the contacts you already have."],
	["Do you replace my marketing?", "No. We do not run ads or SEO. We focus on what happens after a prospect comes in. Your marketing brings people in. We make sure they convert."],
	["Do I need to be tech savvy?", "No. We handle everything. You approve the plan we build and install. Most clients go live without touching a single setting."],
	["What if I already have a CRM?", "That is exactly who we help. A CRM without automations is an expensive contact list. We turn it into an automated follow up and nurture machine."],
	["What does it cost?", brief.pricingAnswer]
];
function Home() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Hero, {}),
		/* @__PURE__ */ jsxs("section", {
			className: "section problem",
			id: "problem",
			children: [
				/* @__PURE__ */ jsx(Reveal, {
					className: "section-heading",
					children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
						className: "eyebrow",
						children: "THE LEAK ISN'T ALWAYS OBVIOUS"
					}), /* @__PURE__ */ jsxs("h2", { children: [
						"You're not short on leads.",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("em", { children: "You're losing the ones you have." })
					] })] })
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
				/* @__PURE__ */ jsx("div", {
					className: "problem-end",
					children: /* @__PURE__ */ jsx("p", { children: brief.problemClosing })
				})
			]
		}),
		/* @__PURE__ */ jsx(Guide, {}),
		/* @__PURE__ */ jsx(Plan, {}),
		/* @__PURE__ */ jsx(Comparison, {}),
		/* @__PURE__ */ jsx(Proof, {}),
		/* @__PURE__ */ jsx(Videos, {}),
		/* @__PURE__ */ jsxs("section", {
			className: "stakes",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "eyebrow",
					children: "STEWARD WHAT YOU ALREADY HAVE"
				}),
				/* @__PURE__ */ jsx("h2", { children: brief.stakes.headline }),
				/* @__PURE__ */ jsx("p", { children: brief.stakes.body })
			]
		}),
		/* @__PURE__ */ jsx(FinalCTA, {}),
		/* @__PURE__ */ jsx(CommunityBlock, {}),
		/* @__PURE__ */ jsxs("section", {
			id: "faq",
			className: "section faq",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
				className: "eyebrow",
				children: "COMMON QUESTIONS"
			}), /* @__PURE__ */ jsx("h2", { children: "Common questions." })] }), /* @__PURE__ */ jsx("div", { children: faqs.map(([q, a]) => /* @__PURE__ */ jsxs("details", { children: [/* @__PURE__ */ jsxs("summary", { children: [q, /* @__PURE__ */ jsx("span", { children: "+" })] }), /* @__PURE__ */ jsx("p", { children: a })] }, q)) })]
		})
	] });
}
function Story() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "section page-hero",
			children: [/* @__PURE__ */ jsx("span", {
				className: "eyebrow",
				children: "OUR STORY · CARROLLTON TEXAS"
			}), /* @__PURE__ */ jsxs("h1", { children: [
				"We built this",
				/* @__PURE__ */ jsx("br", {}),
				/* @__PURE__ */ jsx("em", { children: "for ourselves first." })
			] })]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section story-grid",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "story-photo-grid",
				children: [/* @__PURE__ */ jsx(TeamImage, { className: "story-team-image" }), /* @__PURE__ */ jsx(WorkspaceImage, {})]
			}), /* @__PURE__ */ jsxs("article", { children: [brief.story.map((p) => /* @__PURE__ */ jsx("p", { children: p }, p)), /* @__PURE__ */ jsx(CTA, {})] })]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section team",
			id: "team",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "eyebrow",
					children: "THE PEOPLE & THE SYSTEMS"
				}),
				/* @__PURE__ */ jsx("h2", { children: "Meet the team." }),
				/* @__PURE__ */ jsx(ConversationImage, {}),
				/* @__PURE__ */ jsx("div", {
					className: "team-grid",
					children: [
						[
							"Kevin",
							"Co founder systems architect",
							"Designs every follow up system and runs his own businesses on them."
						],
						[
							"Marcie",
							"Co founder coaching and client success",
							"Walked away from thirty years in corporate to help owners steward what they already have."
						],
						[
							"Jordanna",
							"Co founder strategy and client relationships",
							"Makes sure every system fits the business it’s built for and signs off before anything goes live."
						],
						[
							"Mav (AI agent)",
							"Strategy agent works with Jordanna",
							"Finds the leak shapes the message names the next move."
						],
						[
							"River (AI agent)",
							"Execution agent works with Kevin and Marcie",
							"Ships the work: content scheduling reporting and the numbers."
						]
					].map(([n, r, b], i) => /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("div", {
							className: "team-avatar",
							children: i > 2 ? /* @__PURE__ */ jsx(FiZap, {}) : /* @__PURE__ */ jsx("span", { children: n[0] })
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
			/* @__PURE__ */ jsx("p", { children: brief.contact.body }),
			/* @__PURE__ */ jsx("ol", { children: brief.contact.steps.map((p) => /* @__PURE__ */ jsx("li", { children: p }, p)) }),
			/* @__PURE__ */ jsx("a", {
				className: "text-link",
				href: "tel:+19402027945",
				children: "(940) 202 7945"
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
				children: [/* @__PURE__ */ jsx(ConversationImage, {}), /* @__PURE__ */ jsxs("p", { children: [brief.story[0].split(". ").slice(0, 2).join(". "), "."] })]
			})
		] }), /* @__PURE__ */ jsxs("form", {
			id: "diagnostic-form",
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
						["Phone", "tel"],
						["Email", "email"],
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
						"Real estate",
						"Coaching and consulting",
						"Home services (plumbing HVAC electrical)",
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
				/* @__PURE__ */ jsxs("label", { children: ["What happens today when you miss a call?", /* @__PURE__ */ jsxs("select", {
					name: "Missed calls",
					required: true,
					children: [
						/* @__PURE__ */ jsx("option", {
							value: "",
							children: "Select an answer"
						}),
						/* @__PURE__ */ jsx("option", { children: "Answer" }),
						/* @__PURE__ */ jsx("option", { children: "Voicemail" }),
						/* @__PURE__ */ jsx("option", { children: "Nothing" })
					]
				})] }),
				/* @__PURE__ */ jsxs("div", {
					className: "sms-consents",
					children: [/* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("input", {
						type: "checkbox",
						name: "Service SMS consent",
						value: "Yes"
					}), /* @__PURE__ */ jsx("span", { children: "I agree to receive text messages from Stop Losing Leads HQ about my inquiry and appointments. Message frequency varies. Message and data rates may apply. Reply STOP to opt out." })] }), /* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("input", {
						type: "checkbox",
						name: "Marketing SMS consent",
						value: "Yes"
					}), /* @__PURE__ */ jsx("span", { children: "I agree to receive marketing text messages from Stop Losing Leads HQ. Consent is optional and is not required to work with us. Message frequency varies. Message and data rates may apply. Reply STOP to opt out." })] })]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "form-note",
					children: "Both text message choices are optional. This form prepares an email draft. Our team must receive your request before it can process your preferences."
				}),
				/* @__PURE__ */ jsxs("button", {
					type: "submit",
					className: "button",
					children: ["Book My Lead Leak Diagnostic ", /* @__PURE__ */ jsx(FiArrowUpRight, {})]
				}),
				ready && /* @__PURE__ */ jsx("p", {
					role: "status",
					children: "Please send the draft from your email app. If it did not open call (940) 202 7945."
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
var $$splitComponentImporter$5 = () => import("./routes-DsgQjt16.js");
var Route$5 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
// src/routes/book.tsx
var $$splitComponentImporter$4 = () => import("./book-Bp9rzVXC.js");
var Route$4 = createFileRoute("/book")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
// src/routes/business-lab.tsx
var $$splitComponentImporter$3 = () => import("./business-lab-CJNO4Jfz.js");
var Route$3 = createFileRoute("/business-lab")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
// src/routes/contact.tsx
var $$splitComponentImporter$2 = () => import("./contact-D8ni1lXh.js");
var Route$2 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
// src/routes/our-story.tsx
var $$splitComponentImporter$1 = () => import("./our-story-D_jYXvfK.js");
var Route$1 = createFileRoute("/our-story")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
// src/routes/quiz.tsx
var $$splitComponentImporter = () => import("./quiz-CX7UGzUL.js");
var Route = createFileRoute("/quiz")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
// src/routeTree.gen.ts
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	BookRoute: Route$4.update({
		id: "/book",
		path: "/book",
		getParentRoute: () => Route$6
	}),
	BusinessLabRoute: Route$3.update({
		id: "/business-lab",
		path: "/business-lab",
		getParentRoute: () => Route$6
	}),
	ContactRoute: Route$2.update({
		id: "/contact",
		path: "/contact",
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
export { Quiz as a, getRouter, Story as i, Contact as n, Home as r, router_exports as t };
