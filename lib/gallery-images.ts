import img01 from "@images/gallery/01.webp";
import img02 from "@images/gallery/02.webp";
import img03 from "@images/gallery/03.webp";
import img04 from "@images/gallery/04.webp";
import img05 from "@images/gallery/05.webp";
import img06 from "@images/gallery/06.webp";
import img07 from "@images/gallery/07.webp";
import img08 from "@images/gallery/08.webp";
import img09 from "@images/gallery/09.webp";

export const galleryImages = [
  {
    alt: "gallery-image-01",
    source: img01,
    width: 640,
    height: 960,
  },
  {
    alt: "gallery-image-02",
    source: img02,
    width: 640,
    height: 960,
  },
  {
    alt: "gallery-image-03",
    source: img03,
    width: 640,
    height: 960,
  },
  {
    alt: "gallery-image-04",
    source: img04,
    width: 640,
    height: 960,
  },
  {
    alt: "gallery-image-05",
    source: img05,
    width: 640,
    height: 960,
  },
  {
    alt: "gallery-image-06",
    source: img06,
    width: 640,
    height: 960,
  },
  {
    alt: "gallery-image-07",
    source: img07,
    width: 640,
    height: 960,
  },
  {
    alt: "gallery-image-08",
    source: img08,
    width: 640,
    height: 960,
  },
  {
    alt: "gallery-image-09",
    source: img09,
    width: 640,
    height: 960,
  },
] as const;

export type GalleryImage = (typeof galleryImages)[number];
