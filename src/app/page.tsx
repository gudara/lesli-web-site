"use client";

import React, { useState } from "react";
import { Language } from "@/data/translations";
import { GalleryPhoto } from "@/data/gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ElephantExperiences } from "@/components/ElephantExperiences";
import { Accommodations } from "@/components/Accommodations";
import { Dining } from "@/components/Dining";
import { AyurvedaGarden } from "@/components/AyurvedaGarden";
import { TravelPlans } from "@/components/TravelPlans";
import { Gallery } from "@/components/Gallery";
import { Packages } from "@/components/Packages";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ImageModal } from "@/components/ImageModal";

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState<Language>("en");
  const [preselectedProperty, setPreselectedProperty] = useState<string>("");
  const [preselectedPackage, setPreselectedPackage] = useState<string>("");
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectPropertyForBooking = (propertyName: string) => {
    setPreselectedProperty(propertyName);
    scrollToBooking();
  };

  const handleSelectPackageForBooking = (packageName: string) => {
    setPreselectedPackage(packageName);
    scrollToBooking();
  };

  return (
    <main>
      {/* Calm, Minimal Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onBookClick={scrollToBooking}
      />

      {/* Serene Hero Section */}
      <Hero
        currentLang={currentLang}
        onPlanTripClick={scrollToBooking}
      />

      {/* Ethical Elephant Daily Routine */}
      <ElephantExperiences currentLang={currentLang} />

      {/* Main Accommodations: Luck Uyana Cabana & Pinnawala Reach */}
      <Accommodations
        currentLang={currentLang}
        onSelectPropertyForBooking={handleSelectPropertyForBooking}
      />

      {/* Restaurant & Authentic Dining */}
      <Dining currentLang={currentLang} />

      {/* Ayurveda Herbal Medicine Garden */}
      <AyurvedaGarden currentLang={currentLang} />

      {/* Travel Plans & Itineraries */}
      <TravelPlans
        currentLang={currentLang}
        onSelectPlanForBooking={handleSelectPackageForBooking}
      />

      {/* Photo Gallery */}
      <Gallery
        currentLang={currentLang}
        onOpenPhoto={setActivePhoto}
      />

      {/* Packages */}
      <Packages
        currentLang={currentLang}
        onSelectPackageForBooking={handleSelectPackageForBooking}
      />

      {/* Direct Booking & WhatsApp Enquiry */}
      <EnquiryForm
        currentLang={currentLang}
        preselectedProperty={preselectedProperty}
        preselectedPackage={preselectedPackage}
      />

      {/* Clean Footer */}
      <Footer currentLang={currentLang} />

      {/* Subtle Floating WhatsApp */}
      <FloatingWhatsApp currentLang={currentLang} />

      {/* Photo Modal */}
      <ImageModal
        photo={activePhoto}
        currentLang={currentLang}
        onClose={() => setActivePhoto(null)}
      />
    </main>
  );
}
