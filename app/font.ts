import localFont from "next/font/local";

const hSSanTokki20 = localFont({
  src: "../public/fonts/HSSanTokki20-Regular.woff2",
  display: "swap",
  variable: "--font-hssantokki20",
});

const suiteRegular = localFont({
  src: "../public/fonts/SUITE-Regular.woff2",
  display: "swap",
  variable: "--font-suite",
});

export { hSSanTokki20, suiteRegular };
