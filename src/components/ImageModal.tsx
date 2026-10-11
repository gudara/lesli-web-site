"use client";

import React from "react";
import { GalleryPhoto } from "@/data/gallery";
import { Language } from "@/data/translations";
import { X } from "lucide-react";

interface ImageModalProps {
  photo: GalleryPhoto | null;
  currentLang: Language;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  photo,
  currentLang,
  onClose,
}) => {
  if (!photo) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close photo preview"
        >
          <X size={20} />
        </button>

        <img
          src={photo.src}
          alt={photo.title[currentLang] || photo.title.en}
          style={{ width: "100%", maxHeight: "68vh", objectFit: "cover" }}
        />

        <div style={{ padding: "1.75rem 2rem", background: "#0c1d16" }}>
          <h3 style={{ fontSize: "1.5rem", color: "#ffffff", marginBottom: "0.4rem" }}>
            {photo.title[currentLang] || photo.title.en}
          </h3>
          <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", margin: 0 }}>
            {photo.caption[currentLang] || photo.caption.en}
          </p>
        </div>
      </div>
    </div>
  );
};
