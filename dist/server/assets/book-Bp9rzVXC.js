import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiCalendar, FiCheck } from "react-icons/fi";
// src/booking-page.tsx
function Booking() {
	const [month, setMonth] = useState(() => {
		const p = new Intl.DateTimeFormat("en-US", {
			timeZone: "Asia/Karachi",
			year: "numeric",
			month: "numeric"
		}).formatToParts(/* @__PURE__ */ new Date());
		return new Date(Number(p.find((x) => x.type === "year")?.value), Number(p.find((x) => x.type === "month")?.value) - 1, 1);
	}), [day, setDay] = useState(""), [draft, setDraft] = useState(false);
	const year = month.getFullYear(), m = month.getMonth();
	const days = new Date(year, m + 1, 0).getDate(), offset = new Date(year, m, 1).getDay();
	return /* @__PURE__ */ jsxs("section", {
		className: "section booking-page",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "booking-intro",
			children: [
				/* @__PURE__ */ jsxs("h1", { children: [
					"Book your",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("em", { children: "Lead Leak Diagnostic." })
				] }),
				/* @__PURE__ */ jsx("p", { children: "Thirty minutes with our team. We look at how leads reach you today and show you where they slip away. No pitch." }),
				/* @__PURE__ */ jsxs("div", {
					className: "booking-expect",
					children: [/* @__PURE__ */ jsx("h2", { children: "What to expect" }), [
						"We never pitch on the first call.",
						"You own your data and your system.",
						"No tech skills needed.",
						"We tell you if you don't need us."
					].map((t) => /* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx(FiCheck, {}), t] }, t))]
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "booking-calendar",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "calendar-placeholder",
					children: [
						/* @__PURE__ */ jsx(FiCalendar, {}),
						/* @__PURE__ */ jsx("span", { children: "STATIC CALENDAR PREVIEW" }),
						/* @__PURE__ */ jsx("p", { children: "Choose a date to preview your diagnostic request. Live availability is not connected." })
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "month-heading",
					children: [
						/* @__PURE__ */ jsx("button", {
							"aria-label": "Previous month",
							onClick: () => setMonth(new Date(year, m - 1, 1)),
							children: /* @__PURE__ */ jsx(FiArrowLeft, {})
						}),
						/* @__PURE__ */ jsx("h2", { children: month.toLocaleDateString("en-US", {
							month: "long",
							year: "numeric"
						}) }),
						/* @__PURE__ */ jsx("button", {
							"aria-label": "Next month",
							onClick: () => setMonth(new Date(year, m + 1, 1)),
							children: /* @__PURE__ */ jsx(FiArrowRight, {})
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "calendar-grid",
					children: [
						[
							"Sun",
							"Mon",
							"Tue",
							"Wed",
							"Thu",
							"Fri",
							"Sat"
						].map((t) => /* @__PURE__ */ jsx("small", { children: t }, t)),
						Array.from({ length: offset }, (_, i) => /* @__PURE__ */ jsx("span", {}, "blank" + i)),
						Array.from({ length: days }, (_, i) => {
							const date = year + "-" + String(m + 1).padStart(2, "0") + "-" + String(i + 1).padStart(2, "0");
							return /* @__PURE__ */ jsx("button", {
								type: "button",
								"aria-label": "Request " + date,
								"aria-pressed": day === date,
								onClick: () => setDay(date),
								children: i + 1
							}, date);
						})
					]
				}),
				/* @__PURE__ */ jsxs("form", {
					onSubmit: (e) => {
						e.preventDefault();
						setDraft(true);
					},
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "requested-date",
							children: day ? "Requested date: " + (/* @__PURE__ */ new Date(day + "T12:00:00")).toLocaleDateString("en-US", {
								month: "long",
								day: "numeric",
								year: "numeric"
							}).replace(/,/g, "") : "Select a requested date above."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "form-grid",
							children: [
								["Name", "text"],
								["Phone", "tel"],
								["Email", "email"],
								["Business name", "text"]
							].map(([name, type]) => /* @__PURE__ */ jsxs("label", { children: [name, /* @__PURE__ */ jsx("input", {
								name,
								type,
								placeholder: name === "Name" ? "Your full name" : name === "Phone" ? "Your phone number" : name === "Email" ? "you@business.com" : "Your business name",
								required: true
							})] }, name))
						}),
						/* @__PURE__ */ jsxs("button", {
							className: "button",
							type: "submit",
							disabled: !day,
							children: ["Book My Lead Leak Diagnostic ", /* @__PURE__ */ jsx(FiArrowUpRight, {})]
						}),
						draft && /* @__PURE__ */ jsxs("div", {
							className: "booking-confirmation",
							role: "status",
							children: [
								/* @__PURE__ */ jsx("small", { children: "STATIC PREVIEW ONLY   NO APPOINTMENT RESERVED" }),
								/* @__PURE__ */ jsx("h2", { children: "You're booked. Thank you." }),
								/* @__PURE__ */ jsx("p", { children: "We'll see you on the call. Check your email for the details." }),
								/* @__PURE__ */ jsx("p", {
									className: "preview-note",
									children: "This is the confirmation preview. Live calendar and email confirmation will be connected later."
								})
							]
						})
					]
				})
			]
		})]
	});
}
// src/routes/book.tsx?tsr-split=component
var SplitComponent = Booking;
export { SplitComponent as component };
