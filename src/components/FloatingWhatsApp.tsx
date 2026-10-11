"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { Language, translations } from "@/data/translations";

interface FloatingWhatsAppProps {
  currentLang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <a
      href="https://wa.me/94771908272?text=Hello%20Pinnawala%20Elephant%20Tour,%20I%20am%20interested%20in%20visiting."
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-calm"
      id="floating-whatsapp-btn"
      aria-label="Direct WhatsApp Chat: +94 77 190 8272"
    >
      <MessageCircle size={20} />
      <span>{t.nav.whatsapp}</span>
    </a>
  );
};
