"use client";

import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import Image from "next/image";
import { galleryImages } from "@/lib/gallery-images";

const PhotoGallery = () => {
  return (
    <Gallery>
      <div className="grid max-w-[300px] grid-cols-2 gap-1 sm:grid-cols-3">
        {galleryImages.map((image, index) => (
          <Item
            key={index}
            cropped
            original={image.source.src}
            thumbnail={image.source.src}
            width={image.source.width}
            height={image.source.height}
          >
            {({ ref, open }) => (
              <Image
                className="cursor-pointer object-cover"
                src={image.source}
                alt={image.alt}
                // width={100}
                // height={150}
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
        ))}
      </div>
    </Gallery>
  );
};

export default PhotoGallery;
