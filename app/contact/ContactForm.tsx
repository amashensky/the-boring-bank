"use client";

import { useState } from "react";
import Arrow from "@/components/Arrow";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div style={{ padding: "56px 32px", border: "1px solid var(--line)", background: "var(--off)", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 28, marginBottom: 12, color: "var(--ink)" }}>Request received.</div>
        <p style={{ color: "var(--muted)", fontSize: 15, maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
          A banker will reach out within one business day. Check your inbox for a secure intake link.
        </p>
      </div>
    );
  }

  return (
    <form className="form-grid" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
      <div className="field">
        <label htmlFor="name">Full Name</label>
        <input id="name" type="text" placeholder="Jane Doe" required />
      </div>
      <div className="field">
        <label htmlFor="email">Work Email</label>
        <input id="email" type="email" placeholder="jane@familyoffice.com" required />
      </div>
      <div className="field">
        <label htmlFor="firm">Firm or Entity</label>
        <input id="firm" type="text" placeholder="Family Office LLC" />
      </div>
      <div className="field">
        <label htmlFor="role">You Are A</label>
        <select id="role" defaultValue="seller">
          <option value="seller">Seller (LP with an interest to price)</option>
          <option value="buyer">Buyer (secondary fund or institution)</option>
          <option value="advisor">Advisor (representing an LP)</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="fund">Fund Name (if comfortable)</label>
        <input id="fund" type="text" placeholder="Meridian Growth Fund IV, L.P." />
      </div>
      <div className="field">
        <label htmlFor="size">Commitment Size</label>
        <select id="size" defaultValue="">
          <option value="" disabled>Select range</option>
          <option>Under $1M</option>
          <option>$1M to $5M</option>
          <option>$5M to $15M</option>
          <option>$15M to $50M</option>
          <option>Over $50M</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="notes">What would be most useful to discuss?</label>
        <textarea id="notes" placeholder="A quick description of the interest, your timeline, and any constraints." />
      </div>
      <div className="full" style={{ marginTop: 8, display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
        <button type="submit" className="btn btn-primary">Submit Request <Arrow /></button>
        <div style={{ fontSize: 12, color: "var(--muted)" }}>We respond within one business day. Your submission is confidential.</div>
      </div>
    </form>
  );
}
