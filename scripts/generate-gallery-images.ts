import fs from "node:fs";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const writeFilePromise = promisify(fs.writeFile);
const readDirPromise = promisify(fs.readdir);
const statPromise = promisify(fs.stat);

// ES 모듈에서 __dirname 구현하기
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 프로젝트 루트 디렉토리 경로 설정
const PROJECT_ROOT = path.resolve(__dirname, "..");

const GALLERY_DIR = path.join(PROJECT_ROOT, "public", "images", "gallery");
const OUTPUT_FILE = path.join(PROJECT_ROOT, "lib", "gallery-images.ts");

// 이미지 파일 확장자 필터
const IMAGE_EXTENSIONS: string[] = [
  ".webp",
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".avif",
];

interface ImageDimensions {
  width: number;
  height: number;
}

async function getImageDimensions(imagePath: string): Promise<ImageDimensions> {
  try {
    // 기본값 설정
    return { width: 640, height: 960 };

    // 참고: 실제 이미지 크기를 알아내려면 sharp 등의 라이브러리를 설치해서 사용할 수 있습니다
    // 아래는 예시 코드입니다
    /*
    const sharp = (await import('sharp')).default;
    const metadata = await sharp(imagePath).metadata();
    return { width: metadata.width, height: metadata.height };
    */
  } catch (error) {
    console.error(`Error getting dimensions for ${imagePath}:`, error);
    return { width: 640, height: 960 }; // 기본값 반환
  }
}

async function generateGalleryImages(): Promise<void> {
  try {
    console.log("갤러리 이미지 파일 스캔 시작...");

    // 갤러리 디렉토리가 있는지 확인
    try {
      await statPromise(GALLERY_DIR);
    } catch (err) {
      console.error(err);

      console.error(`갤러리 디렉토리가 존재하지 않습니다: ${GALLERY_DIR}`);
      console.error("디렉토리 public/images/gallery를 생성해주세요.");
      process.exit(1);
    }

    // 갤러리 디렉토리 내 파일 목록 읽기
    const files = await readDirPromise(GALLERY_DIR);

    // 이미지 파일만 필터링
    const imageFiles = files
      .filter((file) =>
        IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase()),
      )
      .sort((a, b) => {
        // 숫자 기반 정렬 (001.webp, 002.webp 등의 순서를 보장)
        const numA = Number.parseInt(a.replace(/\D/g, "")) || 0;
        const numB = Number.parseInt(b.replace(/\D/g, "")) || 0;
        return numA - numB;
      });

    if (imageFiles.length === 0) {
      console.error("갤러리 디렉토리에 이미지 파일이 없습니다.");
      process.exit(1);
    }

    console.log(`${imageFiles.length}개의 이미지 파일을 찾았습니다.`);

    // 이미지 임포트 코드와 배열 항목 생성
    const importLines: string[] = [];
    const galleryItems: string[] = [];

    for (let i = 0; i < imageFiles.length; i++) {
      const file = imageFiles[i];
      const varName = `img${String(i + 1).padStart(2, "0")}`;
      const importPath = `@images/gallery/${file}`;

      importLines.push(`import ${varName} from "${importPath}";`);

      const dimensions = await getImageDimensions(path.join(GALLERY_DIR, file));

      galleryItems.push(`
  {
    alt: "gallery-image-${String(i + 1).padStart(2, "0")}",
    source: ${varName},
    width: ${dimensions.width},
    height: ${dimensions.height},
  }`);
    }

    // TypeScript 파일 내용 생성
    const fileContent = `// 이 파일은 자동으로 생성되었습니다. 직접 수정하지 마세요.
${importLines.join("\n")}

export const galleryImages = [${galleryItems.join(",")}
] as const;

export type GalleryImage = (typeof galleryImages)[number];
`;

    // 파일 쓰기
    await writeFilePromise(OUTPUT_FILE, fileContent);
    console.log(
      `갤러리 이미지 정의가 성공적으로 생성되었습니다: ${OUTPUT_FILE}`,
    );
  } catch (error) {
    console.error("갤러리 이미지 생성 중 오류가 발생했습니다:", error);
    process.exit(1);
  }
}

// 메인 함수 실행
generateGalleryImages();

// 이 부분은 CommonJS 방식의 require 문법이라 ES 모듈에서는 사용할 수 없습니다.
// TypeScript에서는 아래와 같이 import 방식으로 변경해야 합니다.
// import { galleryImages } from "../features/gallery/utils/gallery-images";
