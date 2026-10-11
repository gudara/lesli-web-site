"use client";

import React, { useState } from "react";
import { Language, translations } from "@/data/translations";
import { packageTiers } from "@/data/packages";
import { Check, ArrowRight } from "lucide-react";

interface PackagesProps {
  currentLang: Language;
  onSelectPackageForBooking: (packageName: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({
  currentLang,
  onSelectPackageForBooking,
}) => {
  const [targetAudience, setTargetAudience] = useState<"couple" | "family">("couple");
  const t = translations[currentLang];

  return (
    <section className="section-padding" id="packages">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-kicker">{t.packages.kicker}</span>
          <h2 className="section-title">{t.packages.title}</h2>
          <p className="section-subtitle">{t.packages.subtitle}</p>
        </div>

        {/* Clean Audience Toggle */}
        <div className="stay-tabs-clean">
          <button
            type="button"
            className={`stay-tab-btn-clean ${targetAudience === "couple" ? "active" : ""}`}
            onClick={() => setTargetAudience("couple")}
          >
            {t.packages.couple}
          </button>
          <button
            type="button"
            className={`stay-tab-btn-clean ${targetAudience === "family" ? "active" : ""}`}
            onClick={() => setTargetAudience("family")}
          >
            {t.packages.family}
          </button>
        </div>

        {/* Calm 3 Grid */}
        <div className="clean-grid-3">
          {packageTiers.map((pkg) => {
            const isFeatured = pkg.tier === "premium";

            return (
              <div
                key={pkg.id}
                className="clean-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderColor: isFeatured ? "var(--gold-border)" : "var(--border-clean)",
                  background: isFeatured ? "rgba(20, 42, 31, 0.4)" : "var(--bg-card)",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold-light)", marginBottom: "0.4rem" }}>
                    {pkg.tag[currentLang] || pkg.tag.en}
                  </div>
                  <h3 style={{ fontSize: "1.75rem", color: "#ffffff", marginBottom: "0.4rem" }}>
                    {pkg.name[currentLang] || pkg.name.en}
                  </h3>
                  <div style={{ fontSize: "0.85rem", color: "var(--gold-light)", marginBottom: "1rem" }}>
                    {pkg.propertyChoice[currentLang] || pkg.propertyChoice.en}
                  </div>

                  <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: "1.7", marginBottom: "1.5rem" }}>
                    {pkg.summary[currentLang] || pkg.summary.en}
                  </p>

                  {/* Included list */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <div style={{ fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--gold-light)", marginBottom: "0.6rem" }}>
                      {t.packages.includes}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                      {(pkg.included[currentLang] || pkg.included.en).map((inc, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.86rem", color: "#d2ccc0" }}>
                          <Check size={14} style={{ color: "var(--gold-primary)", flexShrink: 0, marginTop: "3px" }} />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className={isFeatured ? "btn-gold-clean" : "btn-outline-clean"}
                  onClick={() =>
                    onSelectPackageForBooking(
                      `${pkg.name[currentLang] || pkg.name.en} (${targetAudience === "couple" ? "Couple" : "Family"})`
                    )
                  }
                  style={{ width: "100%", marginTop: "1rem" }}
                >
                  <span>{t.packages.inquirePrice}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
