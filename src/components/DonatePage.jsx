/**
 * DonatePage.jsx
 * -------------------------
 * Displays donation page with:
 * - Organization info
 * - Flyer preview
 * - Stripe embedded checkout
 *
 * Notes:
 * - Uses Stripe Buy Button (script injected on mount)
 * - Layout mimics Tailwind using custom CSS utilities
 */

import React, { useEffect } from "react";
import "./DonatePage.css";

// Assets
import Logo from "../images/ponologo.png";
import DonationImage from "../images/Computers For College Flyer.webp";

/**
 * Centralized theme values
 * Helps keep styling consistent and easy to update
 */
const theme = {
  bg: "#F8F8F3",
  text: "#193D40",   // ✅ match rest of site
  subtext: "#193D40", // optional but cleaner
  primary: "#DFCEB9",
  border: "#F8F8F3",
};

export default function DonatePage() {

  /**
   * Inject Stripe script ONCE
   * Prevents duplicate script loads when navigating
   */
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://js.stripe.com/v3/buy-button.js"]'
    );

    if (existingScript) return;

    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;

    document.body.appendChild(script);

    // Cleanup (optional)
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      <div className="max-w-6xl mx-auto px-5 py-12">

        {/* ================= HEADER ================= */}
        <header className="mb-6">
          <div className="w-16 h-1 bg-[#193D40] rounded-full mb-4"></div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Support the Pono Pono Peace Initiative
          </h1>

          <p className="text-sm md:text-base text-neutral-700 max-w-xl leading-relaxed">
            Your gift helps us continue our work in peacebuilding, education,
            and community outreach.
          </p>
        </header>

        {/* ================= MAIN GRID ================= */}
        <div className="grid md:grid-cols-[320px,1fr] gap-10 items-start">

          {/* ===== LEFT COLUMN (Info) ===== */}
          <aside className="space-y-6">

            {/* Logo + Title */}
            <div className="flex items-center gap-4">
              <img
                src={Logo}
                alt="Pono Pono Peace Initiative"
                className="w-16 h-16 object-contain"
              />
              <div>
                <div className="text-xl font-semibold leading-tight">
                  Pono Pono <br /> Peace Initiative
                </div>
                <p className="text-xs text-neutral-600 mt-1">
                  A project of compassion, dialogue, and action.
                </p>
              </div>
            </div>

            {/* Flyer Preview */}
            <img
              src={DonationImage}
              alt="Computers For College Flyer"
              className="w-full rounded-2xl border object-contain bg-white p-3"
              style={{ borderColor: theme.border, maxHeight: "260px" }}
            />

            {/* Why it matters */}
            <div
              className="rounded-2xl border p-5 bg-white/70"
              style={{ borderColor: theme.border }}
            >
              <div className="font-semibold mb-1">
                Why your support matters
              </div>

              <p className="mt-1 text-sm leading-6 text-neutral-700">
                Your donation directly supports peacebuilding programs,
                educational initiatives, and community outreach efforts.
              </p>
            </div>
          </aside>

          {/* ===== RIGHT COLUMN (Stripe Checkout) ===== */}
          <section className="flex justify-center items-start md:items-center">

            <div className="donate-card w-full max-w-xl flex flex-col items-center">

              <h2 className="text-2xl font-semibold mb-4">
                Make a Donation
              </h2>

              {/* Stripe Button Wrapper */}
              <div className="stripe-frame-wrapper">
                <stripe-buy-button
                  buy-button-id="buy_btn_1SX8tTH0PWpUh5ANr3H7Lil4"
                  publishable-key="pk_test_51SX8mnH0PWpUh5ANirHc7seveKTmcAUZACPAMn83nMSz0PKNZmaMJOjFdbq2VZUJsrgZTJqvNXDELEmbhmCQFkcy001SUv9KXJ"
                />
              </div>

              {/* Security note */}
              <p className="text-xs text-neutral-500 mt-3 text-center">
                🔒 Secure checkout powered by Stripe
              </p>

            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
