import BackgroundContainer from "@/components/layout/BackgroundContainer";
import AccountSection from "@/components/section/AccountSection";
import GallerySection from "@/components/section/GallerySection";
import InvitationSection from "@/components/section/InvitationSection";
import LocationSection from "@/components/section/LocationSection";
import MainSection from "@/components/section/MainSection";
import React from "react";

const HomePage = () => {
  return (
    <BackgroundContainer>
      <MainSection />
      <InvitationSection />
      <GallerySection />
      <AccountSection />
      <LocationSection />

      <div className="font-santokki">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
    </BackgroundContainer>
  );
};

export default HomePage;
