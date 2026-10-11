"use client";

import React from "react";
import { Language, translations } from "@/data/translations";

interface AyurvedaGardenProps {
  currentLang: Language;
}

export const AyurvedaGarden: React.FC<AyurvedaGardenProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="section-padding" id="ayurveda" style={{ background: "var(--bg-deep)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-kicker">{t.ayurveda.kicker}</span>
          <h2 className="section-title">{t.ayurveda.title}</h2>
          <p className="section-subtitle">{t.ayurveda.subtitle}</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "center" }}>
          {/* Garden Image */}
          <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border-clean)", maxHeight: "460px" }}>
            <img
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80"
              alt="Ayurveda Herbal Medicine Garden in Pinnawala, Sri Lanka"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Details */}
          <div>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#ded8cc", marginBottom: "2rem" }}>
              {t.ayurveda.description}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.25rem" }}>
              {t.ayurveda.features.map((item, idx) => (
                <div key={idx}>
                  <h4 style={{ fontSize: "1.1rem", color: "#ffffff", marginBottom: "0.25rem" }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Botanicals list */}
            <div>
              <div style={{ fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold-light)", marginBottom: "0.75rem" }}>
                {t.ayurveda.botanicalsTitle}:
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {t.ayurveda.botanicals.map((botanical, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: "0.82rem",
                      padding: "0.35rem 0.85rem",
                      borderRadius: "999px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid var(--border-clean)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {botanical}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
