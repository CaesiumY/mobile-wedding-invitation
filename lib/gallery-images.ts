import img01 from "@images/gallery/01.jpg";
import img02 from "@images/gallery/02.jpg";
import img03 from "@images/gallery/03.jpg";
import img04 from "@images/gallery/04.jpg";
import img05 from "@images/gallery/05.jpg";
import img06 from "@images/gallery/06.jpg";
import img07 from "@images/gallery/07.jpg";
import img08 from "@images/gallery/08.jpg";
import img09 from "@images/gallery/09.jpg";
import img10 from "@images/gallery/10.jpg";
import img11 from "@images/gallery/11.jpg";
import img12 from "@images/gallery/12.jpg";

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
] as const;

export type GalleryImage = (typeof galleryImages)[number];
