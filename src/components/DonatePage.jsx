import React, { useEffect } from "react";
import "./DonatePage.css";
import Logo from "../images/ponologo.png";
import DonationImage from "../images/Computers For College Flyer.webp";

const theme = {
  bg: "#F8F8F3",
  text: "#222222",
  subtext: "#4A4A4A",
  primary: "#DFCEB9",
  border: "#F8F8F3",
};

export default function DonatePage() {
  useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://js.stripe.com/v3/buy-button.js";
  script.async = true;
  document.body.appendChild(script);
}, []);
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      <div className="max-w-6xl mx-auto px-5 py-12">
        {/* Page heading */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3">
            Support the Pono Pono Peace Initiative
          </h1>
          <p className="text-sm md:text-base text-neutral-700 max-w-2xl leading-relaxed">
            Your gift helps us continue our work in peacebuilding, education,
            and community outreach. Use the secure form below to make a one-time
            or recurring contribution.
          </p>
        </header>

        {/* Content grid */}
        <div className="grid md:grid-cols-[320px,1fr] gap-10 items-start">
          {/* Left column */}
          <aside className="space-y-6">
            <div className="flex items-center gap-4">
              <img
                src={Logo}
                alt="Pono Pono Peace Initiative"
                className="w-16 h-16 object-contain"
              />
              <div>
                <div className="text-xl font-semibold leading-tight">
                  Pono Pono
                  <br />
                  Peace Initiative
                </div>
                <p className="text-xs text-neutral-600 mt-1">
                  A project of compassion, dialogue, and action.
                </p>
              </div>
            </div>

            <img
              src={DonationImage}
              alt= "Computers For College Flyer"
              className="w-full rounded-2xl border object-contain bg-white p-3"
              style={{ borderColor: theme.border, maxHeight: "260px" }}
            />

            <div
              className="rounded-2xl border p-5 bg-white/70"
              style={{ borderColor: theme.border }}
            >
              <div className="font-semibold mb-1">Why your support matters</div>
              <p className="mt-1 text-sm leading-6 text-neutral-700">
                Your donation directly supports peacebuilding programs, educational initiatives, and community outreach efforts led by the Pono Pono Peace Initiative. 
                Every contribution—no matter the size—helps foster dialogue, understanding, and compassionate action in the communities we serve.
              </p>
            </div>
          </aside>

          {/* Right column – Stripe embedded checkout */}
          <section className="flex justify-center">
            <div className="donate-card w-full max-w-xl flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-4">Make a Donation</h2>

              <div className="stripe-frame-wrapper">
  <stripe-buy-button
    buy-button-id="buy_btn_1SX8tTH0PWpUh5ANr3H7Lil4"
    publishable-key="pk_test_51SX8mnH0PWpUh5ANirHc7seveKTmcAUZACPAMn83nMSz0PKNZmaMJOjFdbq2VZUJsrgZTJqvNXDELEmbhmCQFkcy001SUv9KXJ"
  >
  </stripe-buy-button>
</div>

              <p className="text-sm text-neutral-700 text-center mt-4 px-4">
                *All payments are processed securely through Stripe. No card
                details are stored on this site.*
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
