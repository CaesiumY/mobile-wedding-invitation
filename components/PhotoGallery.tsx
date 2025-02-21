"use client";

import { galleryImages } from "@/lib/gallery-images";
import Image from "next/image";
import PhotoSwipe from "photoswipe";
import "photoswipe/style.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import PreventContext from "./layout/PreventContext";

const REACT_PHOTO_SWIPE_GALLERY_CLASS = "pswp";

const PhotoGallery = () => {
  const onOpen = (pswpInstance: PhotoSwipe) => {
    const preventContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    const pswpElement = document.querySelector(
      `.${REACT_PHOTO_SWIPE_GALLERY_CLASS}`,
    ) as HTMLElement;
    pswpElement?.addEventListener("contextmenu", preventContextMenu);

    pswpInstance.on("close", () => {
      pswpElement?.removeEventListener("contextmenu", preventContextMenu);
    });
  };

  return (
    <Gallery onOpen={onOpen}>
      <PreventContext className="mx-auto grid max-w-96 grid-cols-2 gap-1 sm:grid-cols-3">
        {galleryImages.map((image, index) => (
          <Item
            key={image.alt + index}
            cropped
            original={image.source.src}
            thumbnail={image.source.blurDataURL}
            width={image.source.width}
            height={image.source.height}
            caption="Photo by John Doe"
          >
            {({ ref, open }) => (
              <Image
                className="cursor-pointer object-cover"
                src={image.source}
                alt={image.alt}
                ref={ref}
                onClick={open}
                placeholder="blur"
                loading="eager"
              />
            )}
          </Item>
        ))}
      </PreventContext>
    </Gallery>
  );
};

export default PhotoGallery;
