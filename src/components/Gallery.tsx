"use client";

import React, { useState } from "react";
import { Language, translations } from "@/data/translations";
import { galleryPhotos, GalleryPhoto } from "@/data/gallery";

interface GalleryProps {
  currentLang: Language;
  onOpenPhoto: (photo: GalleryPhoto) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ currentLang, onOpenPhoto }) => {
  const [filter, setFilter] = useState<string>("all");
  const t = translations[currentLang];

  const categories = [
    { key: "all", label: t.gallery.all },
    { key: "stays", label: t.gallery.stays },
    { key: "elephants", label: t.gallery.elephants },
    { key: "ayurveda", label: t.gallery.ayurveda },
    { key: "dining", label: t.gallery.dining },
    { key: "surroundings", label: t.gallery.surroundings },
  ];

  const filteredPhotos =
    filter === "all"
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === filter);

  return (
    <section className="section-padding" id="gallery" style={{ background: "var(--bg-deep)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-kicker">{t.gallery.kicker}</span>
          <h2 className="section-title">{t.gallery.title}</h2>
          <p className="section-subtitle">{t.gallery.subtitle}</p>
        </div>

        {/* Clean Filter Pills */}
        <div className="stay-tabs-clean">
          {categories.map((c) => (
            <button
              key={c.key}
              type="button"
              className={`stay-tab-btn-clean ${filter === c.key ? "active" : ""}`}
              onClick={() => setFilter(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Calm Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onOpenPhoto(photo)}
              style={{
                borderRadius: "14px",
                overflow: "hidden",
                cursor: "pointer",
                aspectRatio: "4 / 3",
                border: "1px solid var(--border-clean)",
                background: "#08120d",
                position: "relative",
              }}
              role="button"
              tabIndex={0}
              aria-label={`View photo ${photo.title[currentLang] || photo.title.en}`}
            >
              <img
                src={photo.src}
                alt={photo.title[currentLang] || photo.title.en}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(0deg, rgba(8, 18, 13, 0.85) 0%, transparent 50%)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "1rem",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.95rem", color: "#ffffff", fontWeight: 500 }}>
                    {photo.title[currentLang] || photo.title.en}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--gold-light)", marginTop: "2px" }}>
                    {photo.caption[currentLang] || photo.caption.en}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
