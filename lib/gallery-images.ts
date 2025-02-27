import img01 from "@images/gallery/01.webp";
import img02 from "@images/gallery/02.webp";
import img03 from "@images/gallery/03.webp";
import img04 from "@images/gallery/04.webp";
import img05 from "@images/gallery/05.webp";
import img06 from "@images/gallery/06.webp";
import img07 from "@images/gallery/07.webp";
import img08 from "@images/gallery/08.webp";
import img09 from "@images/gallery/09.webp";
import img10 from "@images/gallery/10.webp";
import img11 from "@images/gallery/11.webp";
import img12 from "@images/gallery/12.webp";
import img13 from "@images/gallery/13.webp";
import img14 from "@images/gallery/14.webp";
import img15 from "@images/gallery/15.webp";
import img16 from "@images/gallery/16.webp";

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
  {
    alt: "gallery-image-10",
    source: img10,
    width: 640,
    height: 960,
  },
  {
    alt: "gallery-image-11",
    source: img11,
    width: 640,
    height: 960,
  },
  {
    alt: "gallery-image-12",
    source: img12,
    width: 640,
    height: 960,
  },
  {
    alt: "gallery-image-13",
    source: img13,
    width: 640,
    height: 960,
  },
  {
    alt: "gallery-image-14",
    source: img14,
    width: 640,
    height: 960,
  },
  {
    alt: "gallery-image-15",
    source: img15,
    width: 640,
    height: 960,
  },
  {
    alt: "gallery-image-16",
    source: img16,
    width: 640,
    height: 960,
  },
] as const;

export type GalleryImage = (typeof galleryImages)[number];
