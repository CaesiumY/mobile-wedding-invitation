import FloatingBar from "@/components/FloatingBar";
import BackgroundContainer from "@/components/layout/BackgroundContainer";
import AccountSection from "@/features/account/components/AccountSection";
import GallerySection from "@/components/section/GallerySection";
import GuestBookSection from "@/components/section/GuestBookSection";
import InvitationSection from "@/features/invitation/components/InvitationSection";
import LocationSection from "@/components/section/LocationSection";
import MainSection from "@/components/section/MainSection";

const HomePage = () => {
  return (
    <BackgroundContainer>
      <MainSection />
      <InvitationSection />
      <GallerySection />
      <AccountSection />
      <LocationSection />
      <GuestBookSection />
      <FloatingBar />
    </BackgroundContainer>
  );
};

export default HomePage;
