"use client";

import PreventContext from "@/components/layout/PreventContext";
import { galleryImages } from "@/features/gallery/utils/gallery-images";
import Image from "next/image";
import type PhotoSwipe from "photoswipe";
import "photoswipe/style.css";
import { Gallery, Item } from "react-photoswipe-gallery";

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
      <PreventContext className="mx-auto max-w-96 columns-2 gap-2 sm:columns-3">
        {galleryImages.map((image, index) => (
          <Item
            key={image.alt}
            cropped
            original={image.source.src}
            thumbnail={image.source.blurDataURL}
            width={image.source.width}
            height={image.source.height}
            caption="Photo by John Doe"
          >
            {({ ref, open }) => (
              <Image
                className="mb-2 cursor-pointer rounded-sm object-cover"
                src={image.source}
                alt={image.alt}
                ref={ref}
                onClick={open}
                placeholder="blur"
              />
            )}
          </Item>
        ))}
      </PreventContext>
    </Gallery>
  );
};

export default PhotoGallery;
