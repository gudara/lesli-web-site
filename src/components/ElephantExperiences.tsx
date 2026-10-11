"use client";

import React from "react";
import { Language, translations } from "@/data/translations";
import { Clock, ShieldCheck } from "lucide-react";

interface ElephantExperiencesProps {
  currentLang: Language;
}

export const ElephantExperiences: React.FC<ElephantExperiencesProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="section-padding" id="elephants">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-kicker">{t.elephants.kicker}</span>
          <h2 className="section-title">{t.elephants.title}</h2>
          <p className="section-subtitle">{t.elephants.subtitle}</p>
        </div>

        {/* Calm 2x2 Grid */}
        <div className="clean-grid-2">
          {t.elephants.experiences.map((item) => (
            <div key={item.id} className="clean-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <h3 style={{ fontSize: "1.45rem", color: "#ffffff", margin: 0 }}>
                    {item.title}
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.82rem", color: "var(--gold-light)" }}>
                    <Clock size={14} />
                    <span>{item.time}</span>
                  </div>
                </div>

                <p style={{ fontSize: "0.98rem", color: "var(--text-muted)", lineHeight: "1.75", marginBottom: "1.25rem" }}>
                  {item.description}
                </p>
              </div>

              <div style={{ borderTop: "1px solid var(--border-clean)", paddingTop: "0.85rem", fontSize: "0.88rem", color: "#dcd6ca" }}>
                {item.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Wildlife Philosophy Box */}
        <div
          style={{
            marginTop: "3rem",
            padding: "2rem",
            background: "rgba(16, 33, 24, 0.4)",
            border: "1px solid var(--border-clean)",
            borderRadius: "16px",
            display: "flex",
            alignItems: "flex-start",
            gap: "1.5rem",
          }}
        >
          <div style={{ color: "var(--gold-light)", marginTop: "2px", flexShrink: 0 }}>
            <ShieldCheck size={26} />
          </div>
          <div>
            <h4 style={{ fontSize: "1.2rem", color: "#ffffff", marginBottom: "0.4rem" }}>
              {t.elephants.charterTitle}
            </h4>
            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", margin: 0, lineHeight: "1.7" }}>
              {t.elephants.charterText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
