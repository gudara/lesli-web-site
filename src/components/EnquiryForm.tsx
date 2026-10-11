"use client";

import React, { useState } from "react";
import { Language, translations } from "@/data/translations";
import { Send, MessageCircle, CheckCircle2, X } from "lucide-react";

interface EnquiryFormProps {
  currentLang: Language;
  preselectedProperty?: string;
  preselectedPackage?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  currentLang,
  preselectedProperty = "",
  preselectedPackage = "",
}) => {
  const t = translations[currentLang];

  const [formData, setFormData] = useState({
    fullName: "",
    contactMethod: "",
    country: "",
    arrivalDate: "",
    departureDate: "",
    guests: "2",
    preferredProperty: preselectedProperty,
    interestedPackage: preselectedPackage,
    message: "",
    consent: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionReference, setSubmissionReference] = useState("");

  React.useEffect(() => {
    if (preselectedProperty) {
      setFormData((prev) => ({ ...prev, preferredProperty: preselectedProperty }));
    }
  }, [preselectedProperty]);

  React.useEffect(() => {
    if (preselectedPackage) {
      setFormData((prev) => ({ ...prev, interestedPackage: preselectedPackage }));
    }
  }, [preselectedPackage]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const generateWhatsAppMessage = () => {
    const lines = [
      `*New Travel Enquiry - PINNAWALA ELEPHANT TOUR*`,
      `👤 *Name:* ${formData.fullName || "Guest"}`,
      `📧 *Contact:* ${formData.contactMethod || "Not specified"}`,
      `🌍 *Country:* ${formData.country || "Not specified"}`,
      `📅 *Dates:* ${formData.arrivalDate || "Flexible"} to ${formData.departureDate || "Flexible"}`,
      `👥 *Guests:* ${formData.guests}`,
      `🏡 *Property:* ${formData.preferredProperty || "Luck Uyana / Pinnawala Reach"}`,
      `🐘 *Tour / Package:* ${formData.interestedPackage || "Elephant Tour"}`,
      `💬 *Notes:* ${formData.message || "None"}`,
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  const handleWhatsAppDirect = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = generateWhatsAppMessage();
    window.open(`https://wa.me/94771908272?text=${encoded}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.contactMethod) {
      alert("Please provide your name and contact details.");
      return;
    }
    if (!formData.consent) {
      alert("Please agree to the consent checkbox.");
      return;
    }

    const ref = "PET-" + Math.floor(100000 + Math.random() * 900000);
    setSubmissionReference(ref);
    setIsSubmitted(true);
  };

  return (
    <section className="section-padding" id="booking" style={{ background: "var(--bg-deep)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-kicker">{t.booking.kicker}</span>
          <h2 className="section-title">{t.booking.title}</h2>
          <p className="section-subtitle">{t.booking.subtitle}</p>
        </div>

        {/* Clean Form Card */}
        <div className="booking-form-clean">
          <form onSubmit={handleSubmit}>
            <div className="form-grid-2">
              <div className="form-field">
                <label className="form-label" htmlFor="fullName">
                  {t.booking.nameLabel} *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder={t.booking.namePlaceholder}
                  value={formData.fullName}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="contactMethod">
                  {t.booking.emailLabel} *
                </label>
                <input
                  type="text"
                  id="contactMethod"
                  name="contactMethod"
                  required
                  placeholder={t.booking.emailPlaceholder}
                  value={formData.contactMethod}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-field">
                <label className="form-label" htmlFor="country">
                  {t.booking.countryLabel}
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder={t.booking.countryPlaceholder}
                  value={formData.country}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="guests">
                  {t.booking.guestsLabel}
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests (Couple / Pair)</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests (Family / Group)</option>
                </select>
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-field">
                <label className="form-label" htmlFor="arrivalDate">
                  {t.booking.checkInLabel}
                </label>
                <input
                  type="date"
                  id="arrivalDate"
                  name="arrivalDate"
                  value={formData.arrivalDate}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="departureDate">
                  {t.booking.checkOutLabel}
                </label>
                <input
                  type="date"
                  id="departureDate"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-field">
                <label className="form-label" htmlFor="preferredProperty">
                  {t.booking.propertyLabel}
                </label>
                <select
                  id="preferredProperty"
                  name="preferredProperty"
                  value={formData.preferredProperty}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">{t.booking.propertySelectOption}</option>
                  <option value="Luck Uyana Cabana">{t.booking.propertyCabanas}</option>
                  <option value="Pinnawala Reach">{t.booking.propertyRooms}</option>
                  <option value="Not sure / Please advise">{t.booking.propertyUndecided}</option>
                </select>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="interestedPackage">
                  {t.booking.experienceLabel}
                </label>
                <select
                  id="interestedPackage"
                  name="interestedPackage"
                  value={formData.interestedPackage}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">{t.booking.experienceSelectOption}</option>
                  <option value="Elephant River Routine Experience">Elephant River Routine Experience</option>
                  <option value="1-Day Pinnawala Day Tour">1-Day Pinnawala Day Tour</option>
                  <option value="2 Days / 1 Night Cabana Stay">2 Days / 1 Night Cabana Stay</option>
                  <option value="3 Days Kandy & Pinnawala">3 Days Kandy & Pinnawala</option>
                  <option value="4 Days Sigiriya & Cultural Triangle">4 Days Sigiriya & Cultural Triangle</option>
                  <option value="5-7 Days Grand Sri Lanka Odyssey">5–7 Days Grand Sri Lanka Odyssey</option>
                  <option value="Ayurveda Herbal Garden Tour">Ayurveda Herbal Garden Tour</option>
                  <option value="Comfort Package">Comfort Package</option>
                  <option value="Premium Package">Premium Package</option>
                  <option value="Luxury Bespoke Package">Luxury Bespoke Package</option>
                </select>
              </div>
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="message">
                {t.booking.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={t.booking.messagePlaceholder}
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
              />
            </div>

            <label className="consent-check-wrap">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
              />
              <span>{t.booking.consentText}</span>
            </label>

            <div className="form-actions-clean">
              <button
                type="submit"
                className="btn-gold-clean"
                id="submit-enquiry-form-btn"
                style={{ flex: 1, minWidth: "200px" }}
              >
                <Send size={15} />
                <span>{t.booking.submitForm}</span>
              </button>

              <button
                type="button"
                className="btn-whatsapp-clean"
                onClick={handleWhatsAppDirect}
                id="submit-whatsapp-direct-btn"
                style={{ flex: 1, minWidth: "200px" }}
              >
                <MessageCircle size={15} />
                <span>{t.booking.sendWhatsapp}</span>
              </button>
            </div>

            <div style={{ textAlign: "center", marginTop: "1.25rem", fontSize: "0.82rem", color: "var(--text-dim)" }}>
              {t.booking.whatsappDirectTip}
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isSubmitted && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(8px)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
          onClick={() => setIsSubmitted(false)}
        >
          <div
            style={{
              maxWidth: "540px",
              width: "100%",
              background: "#0c1812",
              border: "1px solid var(--gold-border)",
              borderRadius: "20px",
              padding: "2.5rem",
              textAlign: "center",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              style={{ position: "absolute", top: "1.25rem", right: "1.25rem", color: "#ffffff", padding: "0.4rem" }}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <CheckCircle2 size={42} style={{ color: "var(--gold-primary)", margin: "0 auto 1rem auto" }} />

            <div style={{ fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold-light)", marginBottom: "0.4rem" }}>
              Reference: {submissionReference}
            </div>

            <h3 style={{ fontSize: "1.75rem", color: "#ffffff", marginBottom: "0.75rem" }}>
              {t.booking.successTitle}
            </h3>

            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.7", marginBottom: "1.75rem" }}>
              {t.booking.successMessage}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <button
                type="button"
                className="btn-whatsapp-clean"
                onClick={handleWhatsAppDirect}
                style={{ width: "100%" }}
              >
                <MessageCircle size={16} />
                <span>Confirm on WhatsApp (+94 77 190 8272)</span>
              </button>

              <button
                type="button"
                className="btn-outline-clean"
                onClick={() => setIsSubmitted(false)}
                style={{ width: "100%" }}
              >
                {t.booking.closeModal}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
