import { Images } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import PhotoGallery from "../PhotoGallery";

const GallerySection = () => {
  return (
    <section className="flex flex-col items-center gap-8">
      <SectionTitle title="Gallery" icon={<Images strokeWidth={3} />} />
      <PhotoGallery />
    </section>
  );
};

export default GallerySection;
