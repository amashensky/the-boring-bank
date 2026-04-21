"use client";

import { useState } from "react";
import Arrow from "@/components/Arrow";

export default function TeamContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div style={{ padding: "56px 32px", border: "1px solid var(--line)", background: "var(--off)", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 28, marginBottom: 12, color: "var(--ink)" }}>Message sent.</div>
        <p style={{ color: "var(--muted)", fontSize: 15, maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
          Someone on the team will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form className="form-grid" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
      <div className="field">
        <label htmlFor="team-name">Full Name</label>
        <input id="team-name" type="text" placeholder="Jane Doe" required />
      </div>
      <div className="field">
        <label htmlFor="team-email">Email</label>
        <input id="team-email" type="email" placeholder="jane@company.com" required />
      </div>
      <div className="field full">
        <label htmlFor="team-org">Organization (optional)</label>
        <input id="team-org" type="text" placeholder="Firm or affiliation" />
      </div>
      <div className="field full">
        <label htmlFor="team-message">Message</label>
        <textarea id="team-message" placeholder="What would you like to discuss?" required rows={5} />
      </div>
      <div className="full" style={{ marginTop: 8, display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
        <button type="submit" className="btn btn-primary">Send message <Arrow /></button>
        <div style={{ fontSize: 12, color: "var(--muted)" }}>General inquiries only. For a specific position, use Get Started.</div>
      </div>
    </form>
  );
}
