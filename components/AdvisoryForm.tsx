"use client";

import { useState } from "react";
import Arrow from "@/components/Arrow";

export default function AdvisoryForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div
        style={{
          padding: "56px 32px",
          border: "1px solid var(--line)",
          background: "var(--off)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-serif), serif",
            fontSize: 28,
            marginBottom: 12,
            color: "var(--ink)",
          }}
        >
          Request received.
        </div>
        <p
          style={{
            color: "var(--muted)",
            fontSize: 15,
            maxWidth: 480,
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          A member of our advisory team will reach out within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      className="form-grid"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="field">
        <label htmlFor="adv-name">Full Name</label>
        <input id="adv-name" type="text" placeholder="Jane Doe" required />
      </div>
      <div className="field">
        <label htmlFor="adv-email">Work Email</label>
        <input id="adv-email" type="email" placeholder="jane@firm.com" required />
      </div>
      <div className="field">
        <label htmlFor="adv-firm">Firm or Organization</label>
        <input id="adv-firm" type="text" placeholder="Family office, fund, GP, etc." />
      </div>
      <div className="field">
        <label htmlFor="adv-title">Title</label>
        <input id="adv-title" type="text" placeholder="Managing Partner" />
      </div>
      <div className="field full">
        <label htmlFor="adv-area">Advisory focus</label>
        <select id="adv-area" defaultValue="" required>
          <option value="" disabled>
            Select a focus
          </option>
          <option value="portfolio">Portfolio advisory</option>
          <option value="gp">GP advisory</option>
          <option value="valuation">Valuation advisory</option>
          <option value="transaction">Transaction advisory</option>
          <option value="other">Other / not sure yet</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="adv-notes">What can we help with?</label>
        <textarea
          id="adv-notes"
          placeholder="Describe your situation, timeline, and any constraints."
          required
        />
      </div>
      <div
        className="full"
        style={{
          marginTop: 8,
          display: "flex",
          alignItems: "center",
          gap: 18,
          flexWrap: "wrap",
        }}
      >
        <button type="submit" className="btn btn-primary">
          Submit inquiry <Arrow />
        </button>
        <p
          style={{
            fontSize: 12,
            color: "var(--muted)",
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          Your inquiry is confidential.
        </p>
      </div>
    </form>
  );
}
