"use client";

import { useState } from "react";
import Arrow from "@/components/Arrow";

/**
 * NAV Lending inquiry form — placeholder submission handler. The real
 * backend wiring (email forwarding / CRM / API route) will be added by
 * the founding team; for now, submitting just shows a confirmation state.
 */
export default function NavLendingInquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="nav-inquiry-confirm">
        <div className="nav-inquiry-confirm__title">Request received.</div>
        <p className="nav-inquiry-confirm__body">
          A senior advisor will reach out within one business day with a
          structured diligence checklist and proposed terms.
        </p>
      </div>
    );
  }

  return (
    <form
      className="form-grid nav-inquiry-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="field">
        <label htmlFor="nl-name">Full Name</label>
        <input id="nl-name" type="text" placeholder="Jane Doe" required />
      </div>
      <div className="field">
        <label htmlFor="nl-email">Work Email</label>
        <input
          id="nl-email"
          type="email"
          placeholder="jane@fundmanager.com"
          required
        />
      </div>
      <div className="field">
        <label htmlFor="nl-firm">Firm</label>
        <input
          id="nl-firm"
          type="text"
          placeholder="Vantage Strand Capital"
        />
      </div>
      <div className="field">
        <label htmlFor="nl-role">You Are A</label>
        <select id="nl-role" defaultValue="gp">
          <option value="gp">GP (fund manager)</option>
          <option value="lp">LP (allocator)</option>
          <option value="advisor">Advisor to a fund</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="nl-nav">Fund NAV</label>
        <select id="nl-nav" defaultValue="">
          <option value="" disabled>
            Select range
          </option>
          <option>Under $100M</option>
          <option>$100M &ndash; $500M</option>
          <option>$500M &ndash; $1B</option>
          <option>$1B &ndash; $5B</option>
          <option>Over $5B</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="nl-facility">Facility Size Sought</label>
        <select id="nl-facility" defaultValue="">
          <option value="" disabled>
            Select range
          </option>
          <option>$10M &ndash; $25M</option>
          <option>$25M &ndash; $50M</option>
          <option>$50M &ndash; $100M</option>
          <option>Over $100M</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="nl-use">Use of Proceeds</label>
        <select id="nl-use" defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option>Follow-on investment</option>
          <option>Bridge to distribution</option>
          <option>GP commitment financing</option>
          <option>Portfolio acquisition</option>
          <option>Other</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="nl-timing">Timing</label>
        <select id="nl-timing" defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option>Within 30 days</option>
          <option>30 &ndash; 60 days</option>
          <option>60 &ndash; 90 days</option>
          <option>Exploratory</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="nl-notes">Anything else we should know?</label>
        <textarea
          id="nl-notes"
          placeholder="Brief context on your portfolio, any existing financing, and your goals for the facility."
        />
      </div>
      <div
        className="full"
        style={{
          marginTop: 8,
          display: "flex",
          gap: 16,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <button type="submit" className="btn btn-primary">
          Request Facility <Arrow />
        </button>
        <div style={{ fontSize: 12, color: "var(--muted)" }}>
          Your inquiry is confidential.
        </div>
      </div>
    </form>
  );
}
