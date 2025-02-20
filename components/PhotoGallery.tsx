"use client";

import { galleryImages } from "@/lib/gallery-images";
import Image from "next/image";
import "photoswipe/style.css";
import { Gallery, Item } from "react-photoswipe-gallery";

const PhotoGallery = () => {
  return (
    <Gallery>
      <div className="mx-auto grid max-w-96 grid-cols-2 gap-1 sm:grid-cols-3">
        {galleryImages.map((image, index) => (
          <Item
            key={index}
            cropped
            original={image.source.src}
            thumbnail={image.source.blurDataURL}
            width={image.source.width}
            height={image.source.height}
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
      </div>
    </Gallery>
  );
};

export default PhotoGallery;
