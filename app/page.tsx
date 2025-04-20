import BackgroundContainer from "@/components/layout/BackgroundContainer";
import LocationSection from "@/features/location/components/LocationSection";
import MainSection from "@/features/main/components/MainSection";
import AccountSection from "@/features/account/components/AccountSection";
import FloatingBar from "@/features/dock/components/FloatingBar";
import GallerySection from "@/features/gallery/components/GallerySection";
import GuestBookSection from "@/features/guestBook/components/GuestBookSection";
import InvitationSection from "@/features/invitation/components/InvitationSection";

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
