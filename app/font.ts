import localFont from "next/font/local";

const gangwonEduFont = localFont({
  src: "../public/fonts/GangwonEdu_OTFBoldA.woff",
  display: "swap",
  variable: "--font-gangwon-edu",
});

const gowunDodumFont = localFont({
  src: "../public/fonts/GowunDodum-Regular.woff",
  display: "swap",
  variable: "--font-gowun-dodum",
});

export { gangwonEduFont, gowunDodumFont };
