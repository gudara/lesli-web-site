"use client";

import React from "react";
import { Language, translations } from "@/data/translations";
import { Phone, MessageCircle, MapPin } from "lucide-react";

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <footer className="footer-clean" id="footer">
      <div className="container">
        <div className="footer-grid-clean">
          {/* Brand Col */}
          <div>
            <div style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.1em", color: "#ffffff", marginBottom: "0.25rem", textTransform: "uppercase" }}>
              PINNAWALA ELEPHANT TOUR
            </div>
            <div style={{ fontSize: "0.8rem", color: "var(--gold-light)", marginBottom: "1rem" }}>
              Luck Uyana Cabana & Pinnawala Reach • Accommodations & Restaurant
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: "1.75", maxWidth: "380px" }}>
              {t.footer.desc}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--gold-light)", marginBottom: "1rem" }}>
              {t.footer.quickLinks}
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
              <li>
                <a href="#elephants">{t.nav.experiences}</a>
              </li>
              <li>
                <a href="#stays">{t.nav.stays}</a>
              </li>
              <li>
                <a href="#dining">{t.nav.dining}</a>
              </li>
              <li>
                <a href="#itineraries">{t.nav.itineraries}</a>
              </li>
              <li>
                <a href="#gallery">{t.nav.gallery}</a>
              </li>
              <li>
                <a href="#booking">{t.nav.contact}</a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <div style={{ fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--gold-light)", marginBottom: "1rem" }}>
              {t.footer.contactInfo}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                <MapPin size={16} style={{ color: "var(--gold-light)", marginTop: "3px", flexShrink: 0 }} />
                <span>{t.footer.address}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <Phone size={16} style={{ color: "var(--gold-light)", flexShrink: 0 }} />
                <a href="tel:+94771908272" style={{ color: "#ffffff" }}>
                  +94 77 190 8272
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <MessageCircle size={16} style={{ color: "#25d366", flexShrink: 0 }} />
                <a
                  href="https://wa.me/94771908272"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#ffffff" }}
                >
                  WhatsApp: +94 77 190 8272
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid var(--border-clean)", paddingTop: "1.75rem", textAlign: "center", fontSize: "0.8rem", color: "var(--text-dim)" }}>
          <p style={{ maxWidth: "700px", margin: "0 auto 0.75rem auto", lineHeight: "1.6" }}>
            {t.footer.disclaimer}
          </p>
          <div>
            © {new Date().getFullYear()} PINNAWALA ELEPHANT TOUR. {t.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  );
};
