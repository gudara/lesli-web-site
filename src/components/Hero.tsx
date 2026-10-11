"use client";

import React from "react";
import { Language, translations } from "@/data/translations";
import { ArrowRight, MessageCircle } from "lucide-react";

interface HeroProps {
  currentLang: Language;
  onPlanTripClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onPlanTripClick }) => {
  const t = translations[currentLang];

  return (
    <section className="hero-root" id="hero">
      <div className="hero-bg-layer">
        <img
          src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=2000&q=85"
          alt="Elephants bathing in Maha Oya River, Pinnawala, Sri Lanka"
          className="hero-bg-image"
        />
        <div className="hero-gradient-overlay" />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div className="hero-content">
          {/* Subtle Location Kicker */}
          <div className="section-kicker">
            {t.hero.kicker}
          </div>

          {/* Prominent Website Title requested by user */}
          <h1 className="hero-title">
            {t.hero.mainTitle}
          </h1>

          {/* Accommodations & Restaurant Subtitle */}
          <div className="hero-subtitle-bar">
            {t.hero.subtitle}
          </div>

          {/* Calm, readable narrative */}
          <p className="hero-description">
            {t.hero.description}
          </p>

          {/* Clean, spacious CTAs */}
          <div className="hero-cta-group">
            <button
              type="button"
              className="btn-gold-clean"
              onClick={onPlanTripClick}
              id="hero-plan-trip-btn"
            >
              <span>{t.hero.planTrip}</span>
              <ArrowRight size={15} />
            </button>

            <a
              href="https://wa.me/94771908272?text=Hello%20Pinnawala%20Elephant%20Tour,%20I%20would%20like%20to%20enquire%20about%20visiting."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-clean"
              id="hero-whatsapp-btn"
            >
              <MessageCircle size={15} />
              <span>{t.hero.whatsappUs}</span>
            </a>
          </div>

          {/* Clean feature list */}
          <div className="hero-features-bar">
            <div className="hero-feature-item">
              <span className="hero-feature-dot" />
              <span>{t.hero.featureCabanas}</span>
            </div>
            <div className="hero-feature-item">
              <span className="hero-feature-dot" />
              <span>{t.hero.featureRooms}</span>
            </div>
            <div className="hero-feature-item">
              <span className="hero-feature-dot" />
              <span>{t.hero.featureRestaurant}</span>
            </div>
            <div className="hero-feature-item">
              <span className="hero-feature-dot" />
              <span>{t.hero.featureMahaOya}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
