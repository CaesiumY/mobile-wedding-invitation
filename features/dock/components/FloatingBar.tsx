import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";
import ScrollTopButton from "./ScrollTopButton";

const FloatingBar = () => {
  return (
    <section className="fixed bottom-8 left-0 right-0 z-20 flex flex-row items-center justify-center gap-1">
      <LikeButton />
      <ShareButton />
      <ScrollTopButton />
    </section>
  );
};

export default FloatingBar;
