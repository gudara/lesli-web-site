"use client";

import React, { useState } from "react";
import { Language, translations } from "@/data/translations";
import { travelPlans } from "@/data/itineraries";
import { ArrowRight, Check } from "lucide-react";

interface TravelPlansProps {
  currentLang: Language;
  onSelectPlanForBooking: (planTitle: string) => void;
}

export const TravelPlans: React.FC<TravelPlansProps> = ({
  currentLang,
  onSelectPlanForBooking,
}) => {
  const [activePlanId, setActivePlanId] = useState<string>("2-days");
  const t = translations[currentLang];

  const currentPlan =
    travelPlans.find((p) => p.id === activePlanId) || travelPlans[0];

  return (
    <section className="section-padding" id="itineraries">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-kicker">{t.plans.kicker}</span>
          <h2 className="section-title">{t.plans.title}</h2>
          <p className="section-subtitle">{t.plans.subtitle}</p>
        </div>

        {/* Clean Duration Tabs */}
        <div className="stay-tabs-clean">
          {travelPlans.map((plan) => (
            <button
              key={plan.id}
              type="button"
              className={`stay-tab-btn-clean ${activePlanId === plan.id ? "active" : ""}`}
              onClick={() => setActivePlanId(plan.id)}
            >
              {plan.duration}
            </button>
          ))}
        </div>

        {/* Clean Detail Card */}
        <div className="clean-card" style={{ padding: "3rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1.25rem" }}>
            <div>
              <div style={{ fontSize: "0.8rem", color: "var(--gold-light)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.35rem" }}>
                {currentPlan.duration}
              </div>
              <h3 style={{ fontSize: "2rem", color: "#ffffff", margin: 0 }}>
                {currentPlan.title[currentLang] || currentPlan.title.en}
              </h3>
            </div>
            <div style={{ fontSize: "0.88rem", color: "var(--gold-light)", fontStyle: "italic" }}>
              {t.plans.tagline}
            </div>
          </div>

          <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: "1.75", marginBottom: "2rem" }}>
            {currentPlan.summary[currentLang] || currentPlan.summary.en}
          </p>

          {/* Highlights */}
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--gold-light)", marginBottom: "0.85rem" }}>
              Highlights:
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.6rem" }}>
              {currentPlan.highlights.map((h, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "#ddd7cb" }}>
                  <Check size={14} style={{ color: "var(--gold-primary)", flexShrink: 0 }} />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Day By Day */}
          <div style={{ borderTop: "1px solid var(--border-clean)", paddingTop: "2rem", marginBottom: "2.5rem" }}>
            <div style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--gold-light)", marginBottom: "1.25rem" }}>
              Daily Itinerary:
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentPlan.days.map((d) => (
                <div key={d.dayNumber} style={{ paddingLeft: "1.5rem", borderLeft: "2px solid var(--gold-border)" }}>
                  <h4 style={{ fontSize: "1.1rem", color: "#ffffff", marginBottom: "0.35rem" }}>
                    {d.title[currentLang] || d.title.en}
                  </h4>
                  <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", margin: 0 }}>
                    {d.details[currentLang] || d.details.en}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", borderTop: "1px solid var(--border-clean)", paddingTop: "1.5rem" }}>
            <div style={{ fontSize: "0.88rem", color: "var(--text-dim)" }}>
              Recommended: {currentPlan.recommendedFor[currentLang] || currentPlan.recommendedFor.en}
            </div>

            <button
              type="button"
              className="btn-gold-clean"
              onClick={() =>
                onSelectPlanForBooking(
                  currentPlan.title[currentLang] || currentPlan.title.en
                )
              }
            >
              <span>{t.plans.ctaEnquire}</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
