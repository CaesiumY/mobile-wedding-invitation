import img01 from "@images/gallery/001.webp";
import img02 from "@images/gallery/002.webp";
import img03 from "@images/gallery/003.webp";
import img04 from "@images/gallery/004.webp";
import img05 from "@images/gallery/005.webp";
import img06 from "@images/gallery/006.webp";
import img07 from "@images/gallery/007.webp";
import img08 from "@images/gallery/008.webp";
import img09 from "@images/gallery/009.webp";
import img10 from "@images/gallery/010.webp";
import img11 from "@images/gallery/011.webp";
import img12 from "@images/gallery/012.webp";
import img13 from "@images/gallery/013.webp";
import img14 from "@images/gallery/014.webp";
import img15 from "@images/gallery/015.webp";
import img16 from "@images/gallery/016.webp";
import img17 from "@images/gallery/017.webp";
import img18 from "@images/gallery/018.webp";
import img19 from "@images/gallery/019.webp";
import img20 from "@images/gallery/020.webp";

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
  {
    alt: "gallery-image-17",
    source: img17,
    width: 640,
    height: 960,
  },
  {
    alt: "gallery-image-18",
    source: img18,
    width: 640,
    height: 960,
  },
  {
    alt: "gallery-image-19",
    source: img19,
    width: 640,
    height: 960,
  },
  {
    alt: "gallery-image-20",
    source: img20,
    width: 640,
    height: 960,
  },
] as const;

export type GalleryImage = (typeof galleryImages)[number];
