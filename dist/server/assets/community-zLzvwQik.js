import { useEffect, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiLayers, FiMessageSquare, FiPlay, FiUsers, FiX } from "react-icons/fi";
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
	const [index, setIndex] = useState(0), [playing, setPlaying] = useState(null), [hovered, setHovered] = useState(false), [focused, setFocused] = useState(false), [visible, setVisible] = useState(false);
	const section = useRef(null), trigger = useRef(null);
	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .2 });
		if (section.current) observer.observe(section.current);
		return () => observer.disconnect();
	}, []);
	useEffect(() => {
		if (hovered || focused || playing || reduced || !visible) return;
		const timer = setInterval(() => {
			if (!document.hidden) setIndex((i) => (i + 1) % ids.length);
		}, 5e3);
		return () => clearInterval(timer);
	}, [
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
				const controls = [...document.querySelectorAll(".video-dialog button, .video-dialog iframe, .video-dialog a")];
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
					"Mic drop moments",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("em", { children: "from The Business Lab." })
				] })] }), /* @__PURE__ */ jsx("p", { children: "Real owners real conversations. Watch the moments that happen inside our sessions." })]
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
				children: [/* @__PURE__ */ jsx("button", {
					"aria-label": "Previous video",
					onClick: () => setIndex((i) => (i + 6) % 7),
					children: /* @__PURE__ */ jsx(FiArrowLeft, {})
				}), /* @__PURE__ */ jsx("button", {
					"aria-label": "Next video",
					onClick: () => setIndex((i) => (i + 1) % 7),
					children: /* @__PURE__ */ jsx(FiArrowRight, {})
				})]
			}),
			/* @__PURE__ */ jsxs("a", {
				className: "button youtube-cta",
				href: "https://www.youtube.com/@stoplosingleadshq",
				children: ["Watch more on YouTube ", /* @__PURE__ */ jsx("span", {
					className: "button-arrow",
					children: /* @__PURE__ */ jsx(FiArrowUpRight, {})
				})]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "youtube-subscribe",
				children: "Subscribe for more Business Lab moments."
			}),
			/* @__PURE__ */ jsx("small", {
				className: "youtube-source",
				children: "YouTube source placeholder · supplied clips shown until the live channel feed is connected."
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
// src/community.tsx
var skool = "https://www.skool.com/thebusinesslab-5864/about";
function WorkspaceImage({ className = "" }) {
	return /* @__PURE__ */ jsxs("figure", {
		className: "community-image " + className,
		children: [/* @__PURE__ */ jsx("img", {
			src: "/assets/business-lab-workspace-v1.png",
			alt: "Generated illustration of a warm workspace for business owners",
			loading: "lazy",
			width: 1536,
			height: 1024
		}), /* @__PURE__ */ jsx("figcaption", { children: "Generated workspace visual" })]
	});
}
function ConversationImage() {
	return /* @__PURE__ */ jsx("figure", {
		className: "conversation-image",
		children: /* @__PURE__ */ jsx("img", {
			src: "/assets/team-conversation-edited-v1.png",
			alt: "Edited meeting portrait of the three owners from the supplied reference",
			loading: "lazy",
			width: 1536,
			height: 1024
		})
	});
}
function CommunityBlock() {
	return /* @__PURE__ */ jsx("section", {
		className: "section community-block",
		children: /* @__PURE__ */ jsxs("div", { children: [
			/* @__PURE__ */ jsx("span", {
				className: "eyebrow",
				children: "THE BUSINESS LAB"
			}),
			/* @__PURE__ */ jsxs("h2", { children: [
				"A room for",
				/* @__PURE__ */ jsx("br", {}),
				/* @__PURE__ */ jsx("em", { children: "business owners." })
			] }),
			/* @__PURE__ */ jsx("p", { children: "The Business Lab is the community every client joins and the room for owners who are not ready for done for you." }),
			/* @__PURE__ */ jsxs("a", {
				className: "button community-link",
				href: "/business-lab",
				children: ["The Business Lab ", /* @__PURE__ */ jsx(FiArrowUpRight, {})]
			})
		] })
	});
}
function BusinessLab() {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "section community-hero",
			children: [/* @__PURE__ */ jsxs(motion.div, {
				initial: { y: reduced ? 0 : 18 },
				animate: { y: 0 },
				transition: { duration: .65 },
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "eyebrow",
						children: "THE BUSINESS LAB"
					}),
					/* @__PURE__ */ jsxs("h1", { children: [
						"Build your business",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("em", { children: "with other owners." })
					] }),
					/* @__PURE__ */ jsx("p", { children: "The Business Lab is the community every client joins and the room for owners who are not ready for done for you." }),
					/* @__PURE__ */ jsxs("a", {
						className: "button",
						href: skool,
						children: ["The Business Lab on Skool ", /* @__PURE__ */ jsx(FiArrowUpRight, {})]
					})
				]
			}), /* @__PURE__ */ jsx("figure", {
				className: "community-image lab-brand-image",
				children: /* @__PURE__ */ jsx("img", {
					src: "/assets/From Chaos to Clarity_ Business Lab.png",
					alt: "The Business Lab owners at a strategy workspace",
					width: 1149,
					height: 1371
				})
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section community-purpose",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "section-heading",
				children: [/* @__PURE__ */ jsx("span", {
					className: "eyebrow",
					children: "A PLACE TO WORK ON YOUR BUSINESS"
				}), /* @__PURE__ */ jsxs("h2", { children: [
					"You do not need another course.",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("em", { children: "You need the follow up handled." })
				] })]
			}), /* @__PURE__ */ jsx("div", {
				className: "community-points",
				children: [
					[
						FiUsers,
						"A room for owners",
						"Work on your systems alongside other business owners."
					],
					[
						FiLayers,
						"Steward what you have",
						"Start with the leads and contacts you already paid for."
					],
					[
						FiMessageSquare,
						"Real conversations",
						"See the conversations inside our Business Lab sessions."
					]
				].map(([Icon, title, body], i) => {
					const I = Icon;
					return /* @__PURE__ */ jsxs(motion.article, {
						initial: { y: reduced ? 0 : 18 },
						whileInView: { y: 0 },
						viewport: { once: true },
						transition: {
							duration: .5,
							delay: reduced ? 0 : i * .1
						},
						children: [
							/* @__PURE__ */ jsx(I, {}),
							/* @__PURE__ */ jsx("h3", { children: title }),
							/* @__PURE__ */ jsx("p", { children: body })
						]
					}, i);
				})
			})]
		}),
		/* @__PURE__ */ jsx(Videos, {}),
		/* @__PURE__ */ jsxs("section", {
			className: "section community-close",
			children: [
				/* @__PURE__ */ jsxs("h2", { children: [
					"Before you buy more leads",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("em", { children: "steward the ones you already have." })
				] }),
				/* @__PURE__ */ jsxs("a", {
					className: "button",
					href: "/book",
					children: ["Book My Lead Leak Diagnostic ", /* @__PURE__ */ jsx(FiArrowUpRight, {})]
				}),
				/* @__PURE__ */ jsxs("a", {
					className: "text-link",
					href: skool,
					children: ["The Business Lab on Skool ", /* @__PURE__ */ jsx(FiArrowUpRight, {})]
				})
			]
		})
	] });
}
export { Videos as a, WorkspaceImage as i, CommunityBlock as n, ConversationImage as r, BusinessLab as t };
