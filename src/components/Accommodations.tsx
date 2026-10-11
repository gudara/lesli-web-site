"use client";

import React, { useState } from "react";
import { Language, translations } from "@/data/translations";
import { accommodationsData } from "@/data/accommodations";
import { Check, ArrowRight, Utensils } from "lucide-react";

interface AccommodationsProps {
  currentLang: Language;
  onSelectPropertyForBooking: (propertyId: string) => void;
}

export const Accommodations: React.FC<AccommodationsProps> = ({
  currentLang,
  onSelectPropertyForBooking,
}) => {
  const [selectedId, setSelectedId] = useState<string>("luck-uyana-cabana");
  const t = translations[currentLang];

  const currentItem =
    accommodationsData.find((item) => item.id === selectedId) ||
    accommodationsData[0];

  return (
    <section className="section-padding" id="stays">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-kicker">{t.stays.kicker}</span>
          <h2 className="section-title">{t.stays.title}</h2>
          <p className="section-subtitle">{t.stays.subtitle}</p>
        </div>

        {/* Clean Property Switcher Tabs */}
        <div className="stay-tabs-clean">
          <button
            type="button"
            className={`stay-tab-btn-clean ${selectedId === "luck-uyana-cabana" ? "active" : ""}`}
            onClick={() => setSelectedId("luck-uyana-cabana")}
            id="tab-luck-uyana"
          >
            {t.stays.cabanaTab}
          </button>
          <button
            type="button"
            className={`stay-tab-btn-clean ${selectedId === "pinnawala-reach-room" ? "active" : ""}`}
            onClick={() => setSelectedId("pinnawala-reach-room")}
            id="tab-pinnawala-reach"
          >
            {t.stays.roomTab}
          </button>
        </div>

        {/* Calm Detail Card */}
        <div className="stay-card-clean">
          <div className="stay-img-frame">
            <img
              src={currentItem.image}
              alt={currentItem.name}
            />
          </div>

          <div>
            <div style={{ fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold-light)", marginBottom: "0.5rem" }}>
              {currentItem.inventory}
            </div>

            <h3 style={{ fontSize: "2.1rem", color: "#ffffff", marginBottom: "1rem", lineHeight: 1.25 }}>
              {currentItem.headline[currentLang] || currentItem.headline.en}
            </h3>

            <p style={{ color: "var(--text-muted)", fontSize: "0.98rem", lineHeight: "1.75", marginBottom: "1.5rem" }}>
              {currentItem.description[currentLang] || currentItem.description.en}
            </p>

            {/* Highlights */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem" }}>
              {(currentItem.highlights[currentLang] || currentItem.highlights.en).slice(0, 4).map((h, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.92rem", color: "#e6e0d5" }}>
                  <Check size={15} style={{ color: "var(--gold-primary)", flexShrink: 0 }} />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Restaurant on-site note */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.65rem",
                padding: "0.85rem 1rem",
                background: "rgba(197, 155, 76, 0.08)",
                border: "1px solid var(--gold-border)",
                borderRadius: "10px",
                marginBottom: "2rem",
                fontSize: "0.88rem",
                color: "var(--gold-light)",
              }}
            >
              <Utensils size={16} style={{ flexShrink: 0 }} />
              <span>On-site Authentic Sri Lankan Restaurant & Breakfast Included</span>
            </div>

            {/* Action Buttons */}
            <div className="stay-card-actions" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button
                type="button"
                className="btn-gold-clean"
                onClick={() => onSelectPropertyForBooking(currentItem.propertyName)}
              >
                <span>
                  {currentItem.category === "cabana"
                    ? t.stays.bookCabana
                    : t.stays.bookRoom}
                </span>
                <ArrowRight size={15} />
              </button>

              <a
                href={`https://wa.me/94771908272?text=Hello,%20I%20would%20like%20to%20enquire%20about%20booking%20${encodeURIComponent(
                  currentItem.propertyName
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-clean"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
