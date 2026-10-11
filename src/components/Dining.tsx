"use client";

import React from "react";
import { Language, translations } from "@/data/translations";
import { Utensils, Coffee, Moon } from "lucide-react";

interface DiningProps {
  currentLang: Language;
}

export const Dining: React.FC<DiningProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="section-padding" id="dining" style={{ background: "var(--bg-deep)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-kicker">{t.dining.kicker}</span>
          <h2 className="section-title">{t.dining.title}</h2>
          <p className="section-subtitle">{t.dining.subtitle}</p>
        </div>

        {/* Calm 3-Card Grid */}
        <div className="clean-grid-3">
          <div className="clean-card">
            <div style={{ color: "var(--gold-light)", marginBottom: "1.25rem" }}>
              <Utensils size={24} />
            </div>
            <h3 style={{ fontSize: "1.4rem", color: "#ffffff", marginBottom: "0.75rem" }}>
              {t.dining.luckUyanaDining.title}
            </h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.75" }}>
              {t.dining.luckUyanaDining.desc}
            </p>
          </div>

          <div className="clean-card">
            <div style={{ color: "var(--gold-light)", marginBottom: "1.25rem" }}>
              <Coffee size={24} />
            </div>
            <h3 style={{ fontSize: "1.4rem", color: "#ffffff", marginBottom: "0.75rem" }}>
              {t.dining.pinnawalaReachDining.title}
            </h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.75" }}>
              {t.dining.pinnawalaReachDining.desc}
            </p>
          </div>

          <div className="clean-card">
            <div style={{ color: "var(--gold-light)", marginBottom: "1.25rem" }}>
              <Moon size={24} />
            </div>
            <h3 style={{ fontSize: "1.4rem", color: "#ffffff", marginBottom: "0.75rem" }}>
              {t.dining.authenticFlavors.title}
            </h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.75" }}>
              {t.dining.authenticFlavors.desc}
            </p>
          </div>
        </div>

        {/* Subtle Dietary / Host Note */}
        <div
          style={{
            marginTop: "2.5rem",
            padding: "1.25rem 1.75rem",
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid var(--border-clean)",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <p style={{ margin: 0, fontSize: "0.92rem", color: "#d2ccc0" }}>
            {t.dining.note}
          </p>
        </div>
      </div>
    </section>
  );
};
