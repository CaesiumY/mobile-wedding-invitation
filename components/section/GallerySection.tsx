import { Images } from "lucide-react";
import SectionTitle from "@/components/primitives/SectionTitle";
import OverlayHiddenBox from "../layout/OverlayHiddenBox";
import PhotoGallery from "@/features/gallery/components/PhotoGallery";

const GallerySection = () => {
  return (
    <section className="flex flex-col items-center gap-8">
      <SectionTitle title="Gallery" icon={<Images strokeWidth={3} />} />
      <OverlayHiddenBox>
        <PhotoGallery />
      </OverlayHiddenBox>
    </section>
  );
};

export default GallerySection;
