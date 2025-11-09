import React, { useState } from "react";
import "./DonatePage.css";
import Logo from "../images/ponologo.png";

const theme = {
  bg: "#F8F8F3",
  text: "#222222",
  subtext: "#4A4A4A",
  primary: "#193D40",
  border: "#F8F8F3",
};

export default function DonatePage() {
  const [freq, setFreq] = useState("one");
  const [amount, setAmount] = useState(5);
  const [currency] = useState("USD ($)");

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-[320px,1fr] gap-10 py-10">
        {/* Left column */}
        <aside className="space-y-6">
          <div className="flex items-center gap-4">
            <img
              src={Logo}
              alt="Pono Pono Peace Initiative"
              className="w-16 h-16 object-contain"
            />
            <div className="text-2xl font-semibold leading-tight">
              Pono Pono
              <br />
              Peace Initiative
            </div>
          </div>

          <div
            className="w-full aspect-[4/3] rounded-xl bg-gradient-to-b from-sky-100 to-teal-200 border"
            style={{ borderColor: theme.border }}
          />

          <div
            className="rounded-xl border p-4"
            style={{ borderColor: theme.border }}
          >
            <div className="font-semibold">Call to Action Here:</div>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Add a short, persuasive message about what donations support.
            </p>
          </div>
        </aside>

        {/* Right column */}
        <section>
          <h1 className="text-6xl font-semibold mb-6">Donate!</h1>

          {/* Frequency + currency */}
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <fieldset className="flex items-center gap-6">
              {/* One-time */}
              <label className="flex items-center gap-3 cursor-pointer">
                <span
                  className={`w-5 h-5 rounded-full border ${
                    freq === "one"
                      ? "bg-[var(--accent)] border-transparent"
                      : ""
                  }`}
                  style={{ "--accent": theme.primary }}
                />
                <input
                  type="radio"
                  name="freq"
                  className="hidden"
                  checked={freq === "one"}
                  onChange={() => setFreq("one")}
                />
                <span className="text-xl">One-Time</span>
              </label>

              {/* Monthly */}
              <label className="flex items-center gap-3 cursor-pointer">
                <span
                  className={`w-5 h-5 rounded-full border ${
                    freq === "monthly"
                      ? "bg-[var(--accent)] border-transparent"
                      : ""
                  }`}
                  style={{ "--accent": theme.primary }}
                />
                <input
                  type="radio"
                  name="freq"
                  className="hidden"
                  checked={freq === "monthly"}
                  onChange={() => setFreq("monthly")}
                />
                <span className="text-xl">Monthly</span>
              </label>
            </fieldset>

            {/* Currency dropdown placeholder */}
            <div className="ml-auto">
              <button
                className="flex items-center gap-3 px-5 py-3 rounded-lg text-xl font-medium"
                style={{ backgroundColor: theme.primary, color: "#111" }}
              >
                {currency}
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    d="M6 9l6 6 6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Amount buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {[5, 10, 20, 50, 100].map((v) => (
              <button
                key={v}
                onClick={() => setAmount(v)}
                className={`rounded-xl border text-2xl font-semibold py-5 ${
                  amount === v ? "ring-2 ring-offset-2" : ""
                }`}
                style={{ "--tw-ring-color": theme.primary }}
              >
                ${v}
              </button>
            ))}

            <button
              onClick={() => setAmount("other")}
              className={`rounded-xl border text-2xl font-semibold py-5 ${
                amount === "other" ? "ring-2 ring-offset-2" : ""
              }`}
              style={{ "--tw-ring-color": theme.primary }}
            >
              Other
              <div className="text-base font-normal">Amount</div>
            </button>
          </div>

          {/* Donate CTA */}
          <div className="max-w-xl">
            <button
              className="w-full rounded-2xl py-6 text-2xl font-semibold shadow-md hover:shadow-lg transition-shadow"
              style={{ backgroundColor: theme.primary, color: "#111" }}
            >
              Donate and Support
            </button>
            <p className="text-sm text-neutral-600 mt-3">
              Wireframe button — connect to your payment processor (Stripe,
              PayPal) later.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
