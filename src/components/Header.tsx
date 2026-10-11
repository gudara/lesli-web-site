"use client";

import React, { useState, useEffect } from "react";
import { Language, translations } from "@/data/translations";
import { Menu, X, Compass } from "lucide-react";

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onBookClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  onBookClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.experiences, href: "#elephants" },
    { label: t.nav.stays, href: "#stays" },
    { label: t.nav.dining, href: "#dining" },
    { label: t.nav.itineraries, href: "#itineraries" },
    { label: t.nav.gallery, href: "#gallery" },
  ];

  return (
    <>
      <header
        className={`header-root ${isScrolled ? "header-scrolled" : ""}`}
        id="site-header"
      >
        <div className="container header-container">
          {/* Minimalist Emblem / Home Link */}
          <a href="#hero" className="brand-logo-wrap" aria-label="Home" style={{ display: "flex", alignItems: "center" }}>
            <Compass size={22} style={{ color: "var(--gold-light)" }} />
          </a>

          {/* Clean, Spacious Navigation */}
          <nav aria-label="Main Navigation">
            <ul className="nav-links-desktop">
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="nav-link-item">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Calm Header Actions */}
          <div className="header-actions">
            {/* Minimalist Language Switcher */}
            <div className="lang-selector" aria-label="Language">
              <button
                type="button"
                className={`lang-btn ${currentLang === "en" ? "active" : ""}`}
                onClick={() => onLanguageChange("en")}
              >
                EN
              </button>
              <button
                type="button"
                className={`lang-btn ${currentLang === "ru" ? "active" : ""}`}
                onClick={() => onLanguageChange("ru")}
              >
                RU
              </button>
              <button
                type="button"
                className={`lang-btn ${currentLang === "de" ? "active" : ""}`}
                onClick={() => onLanguageChange("de")}
              >
                DE
              </button>
            </div>

            {/* Clean Book CTA */}
            <button
              type="button"
              className="btn-gold-clean"
              onClick={onBookClick}
              id="header-book-btn"
            >
              {t.nav.bookNow}
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} aria-label="Home" style={{ display: "flex", alignItems: "center" }}>
              <Compass size={22} style={{ color: "var(--gold-light)" }} />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: "#ffffff", padding: "0.4rem" }}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <div className="lang-selector" style={{ justifyContent: "center", width: "100%" }}>
              <button
                type="button"
                className={`lang-btn ${currentLang === "en" ? "active" : ""}`}
                onClick={() => onLanguageChange("en")}
              >
                English
              </button>
              <button
                type="button"
                className={`lang-btn ${currentLang === "ru" ? "active" : ""}`}
                onClick={() => onLanguageChange("ru")}
              >
                Русский
              </button>
              <button
                type="button"
                className={`lang-btn ${currentLang === "de" ? "active" : ""}`}
                onClick={() => onLanguageChange("de")}
              >
                Deutsch
              </button>
            </div>
          </div>

          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {navLinks.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 500,
                    color: "var(--text-main)",
                    display: "block",
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginTop: "2rem" }}>
          <button
            type="button"
            className="btn-gold-clean"
            onClick={() => {
              setMobileMenuOpen(false);
              onBookClick();
            }}
            style={{ width: "100%", textAlign: "center", padding: "0.85rem" }}
          >
            {t.nav.bookNow}
          </button>
          <a
            href="https://wa.me/94771908272"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-clean"
            style={{ width: "100%", textAlign: "center", padding: "0.85rem" }}
          >
            WhatsApp (+94 77 190 8272)
          </a>
        </div>
      </div>
    </>
  );
};
