/**
 * CompetitionPage.jsx — Student Peacebuilder Competition
 *
 * Rendered at the "/competition" route. Reached via the "Find Out More"
 * CTA on the Home page (Hero.jsx).
 *
 * Page structure (top to bottom):
 *  1. Banner         — Dark full-width header with competition.png image,
 *                      title, and year label.
 *  2. Introduction   — Overview of the competition, eligibility summary,
 *                      and prize highlights.
 *  3. Competition Details — Important dates, registration link, and
 *                           workshop topics.
 *  4. Peacebuilding image — Visual break between Details and Requirements.
 *  5. Submission Requirements — Detailed breakdown of the seven required
 *                               components, submission format, and template link.
 *  6. Eligibility    — Education, team, and program focus rules.
 *  7. Honor Code     — Professional conduct standards.
 *  8. Judges         — Placeholder (information coming soon).
 *  9. Prize Details  — $1,000 cash prize, incubation, and mentorship info.
 */

import React from "react";
import "./CompetitionPage.css";
import peaceBuildingImg from "../images/peacebuilding.png";

function CompetitionPage() {
  return (
    <div className="competition-page">
      <div className="competition-body">

        {/* ── 1. Banner ────────────────────────────────────────────────────
            Dark branded header. competition.png spans the full width above
            the title to give the page a strong visual opening.
        ─────────────────────────────────────────────────────────────────── */}
        <div className="competition-banner">
          <img
            src={peaceBuildingImg}
            alt="Peacebuilding"
            className="competition-banner-img"
          />
          <h1>Student Peacebuilder Competition</h1>
          <p className="competition-subtitle">Second Annual — Fall 2025</p>
        </div>

        {/* ── 2. Introduction ──────────────────────────────────────────────
            Brief overview of who the competition is for, what participants
            submit, and the three-part prize package.
        ─────────────────────────────────────────────────────────────────── */}
        <section className="competition-section">
          <p>
            The Ponopono Peace Initiative is excited to announce our second annual
            student competition for aspiring student peacebuilders in the Fall of
            2025!
          </p>
          <p>
            This competition is open to current students from any university who
            are majoring, minoring, or taking a certificate in peacebuilding,
            peace and conflict studies, or a related field.
          </p>
          <p>
            Participants are invited to propose innovative projects or organizations
            that apply peacebuilding to address a specific need in their
            communities. Priority will be given to ideas focused on the Asia
            Pacific region or international contexts.
          </p>
          <p>Entries will be judged by a panel of judges, with the winning entry receiving:</p>
          {/* Prize list styled with left-border highlight cards */}
          <ul className="competition-prize-list">
            <li>A cash award of <strong>$1,000</strong></li>
            <li>A package of in-kind supports (marketing, legal, etc.)</li>
            <li>
              The opportunity to be incubated by the Ponopono Peace Initiative for
              one year
            </li>
          </ul>
        </section>

        <hr className="competition-divider" />

        {/* ── 3. Competition Details ───────────────────────────────────────
            Key logistical information: deadlines, how to register, and the
            workshop series available to all registered participants.
        ─────────────────────────────────────────────────────────────────── */}
        <section className="competition-section">
          <h2>Competition Details</h2>

          {/* Important Dates */}
          <h3>Important Dates</h3>
          <ul>
            <li><strong>October 1, 2025:</strong> Registration Deadline</li>
            <li><strong>November 30, 2025:</strong> Submission Deadline</li>
            <li>
              <strong>December 2025:</strong> Winner announced in the first week
              of December. Exact date TBA.
            </li>
          </ul>

          {/* Registration — external Google Form link */}
          <h3>How to Register</h3>
          <p>
            You can register for the competition through the link below. Once
            registered, you will receive additional information through your email
            with access to the relevant competition resources. The last possible
            day to register is <strong>October 1, 2025</strong>.
          </p>
          <a
            href="https://forms.gle/f3FVM1PhHKnytRWA7"
            target="_blank"
            rel="noopener noreferrer"
            className="competition-link-button"
          >
            Register Now
          </a>

          {/* Workshops — links delivered via email post-registration */}
          <h3>Competition Workshops</h3>
          <p>
            To assist in developing your entry, we offer a series of recorded
            workshops to help you develop your idea. Links will be sent via email
            to all participants who register. Workshop topics include:
          </p>
          <ul>
            <li>From Idea to Impact: Developing Your Project</li>
            <li>Theory of Change</li>
            <li>Risk Analysis</li>
            <li>Financial Planning</li>
            <li>Building Strategic Partnerships</li>
          </ul>
        </section>

        <hr className="competition-divider" />

        {/* ── 5. Submission Requirements ───────────────────────────────────
            Seven required written components (each with a minimum word count),
            plus the video format and written summary template.
            Each requirement is displayed as a bordered card for scannability.
        ─────────────────────────────────────────────────────────────────── */}
        <section className="competition-section">
          <h2>Submission Requirements</h2>
          <p>
            The components of the contest entry are similar to what would be
            expected in a business plan, and must include:
          </p>

          {/* Each item is a card with bold title, description, and word count */}
          <ul className="competition-requirements-list">
            <li>
              <strong>Project Overview</strong> — Detailed explanation of the
              peacebuilding problem to be focused on and how the program or
              organization will address it. Must explicitly outline what
              peacebuilding theories support your approach. <em>200+ words.</em>
            </li>
            <li>
              <strong>System Scan</strong> — Description of how other
              organizations are addressing this problem and how your approach
              builds on previous work and adds value to the space, emphasizing
              innovation and creativity. <em>250+ words.</em>
            </li>
            <li>
              <strong>Financial Sustainability Plan</strong> — Detailed
              description of your funding model and how you will reach/acquire
              financial support. <em>250+ words.</em>
            </li>
            <li>
              <strong>Theory of Change</strong> — Detailed description of the
              theory of change. <em>250+ words.</em>
            </li>
            <li>
              <strong>Risk Analysis</strong> — Identification and assessment of
              potential risks and mitigation strategies. <em>250+ words.</em>
            </li>
            <li>
              <strong>Management and Organization</strong> — Information about
              the management team, key personnel, and organizational structure.{" "}
              <em>250+ words.</em>
            </li>
            <li>
              <strong>One-Year Plan</strong> — A detailed 1-year plan outlining
              what you will accomplish if you win. <em>200+ words.</em>
            </li>
          </ul>

          <p>
            Participants will submit a <strong>10–15 minute recorded video
            presentation</strong> and a <strong>3–5 page written summary</strong>{" "}
            of the above components. Both should be submitted by email to{" "}
            <a href="mailto:ponoponopeace@gmail.com" className="competition-inline-link">
              ponoponopeace@gmail.com
            </a>
            . The winner will be contacted through email in December 2025.
          </p>

          {/* Secondary button — links to external Google Doc template */}
          <a
            href="https://docs.google.com/document/d/1rnQxvlwE3jyVzcZxcdLxoGHHDYIbOyU3WQBWcI4vNPM/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="competition-link-button secondary"
          >
            Written Summary Template
          </a>
        </section>

        <hr className="competition-divider" />

        {/* ── 6. Eligibility ───────────────────────────────────────────────
            Three criteria: education level/field, team size rules, and
            the type of program that can be submitted.
        ─────────────────────────────────────────────────────────────────── */}
        <section className="competition-section">
          <h2>Eligibility</h2>
          <ul>
            <li>
              <strong>Education:</strong> All current students from any
              university who are majoring, minoring, or taking a certificate in
              peacebuilding, peace and conflict studies, or a related field are
              eligible.
            </li>
            <li>
              <strong>Teams:</strong> Entries may be from an individual or a
              team of up to four members. If entering as a team, only one
              person needs to be majoring or minoring in peacebuilding or a
              related field.
            </li>
            <li>
              <strong>Program Focus:</strong> Entries may propose a program, an
              NGO, a social enterprise, or a business. Priority will be given to
              ideas focused on the Asia Pacific region or international contexts.
            </li>
          </ul>
        </section>

        <hr className="competition-divider" />

        {/* ── 7. Honor Code ────────────────────────────────────────────────
            Professional conduct standards that all registrants agree to.
            Violations can result in disqualification.
        ─────────────────────────────────────────────────────────────────── */}
        <section className="competition-section">
          <h2>Honor Code</h2>
          <p>
            All aspects of this competition are to be professional and of high
            quality. An entry can be disqualified if the idea, business, video,
            presentation, presenters, etc., do not adhere to a professional code
            of conduct. All components of your presentation should avoid any
            dishonesty, bullying, profanity, substance abuse, and/or immodesty.
            All registrants agree to abide by these standards.
          </p>
        </section>

        <hr className="competition-divider" />

        {/* ── 8. Judges ────────────────────────────────────────────────────
            Placeholder section — judge details to be announced.
        ─────────────────────────────────────────────────────────────────── */}
        <section className="competition-section">
          <h2>Judges</h2>
          <p className="competition-coming-soon">Information coming soon.</p>
        </section>

        <hr className="competition-divider" />

        {/* ── 9. Prize Details ─────────────────────────────────────────────
            Expands on the intro prize list: cash disbursement, optional
            incubation, and in-kind mentorship hours.
        ─────────────────────────────────────────────────────────────────── */}
        <section className="competition-section">
          <h2>Prize Details</h2>
          <p>
            The winning student(s) will receive a <strong>$1,000 cash prize</strong>{" "}
            for seed funding, disbursed according to a set budget. The winners
            will also have the option to be incubated by the Ponopono Peace
            Initiative to help get their idea off the ground and running. The
            in-kind support included in the prize package will come in the form
            of mentorship hours with specific mentors.
          </p>
          <p className="competition-coming-soon">More details coming soon.</p>
        </section>

      </div>
    </div>
  );
}

export default CompetitionPage;
