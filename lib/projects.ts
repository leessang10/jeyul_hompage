import { projectAssetMap } from "@/lib/generated/project-assets";
import { projectMetadata } from "@/lib/project-metadata";
import type { Project, ProjectCategory } from "@/lib/project-types";

const categoryCopy: Record<ProjectCategory, string> = {
  corporate: "기업의 운영 목적과 업무 흐름을 반영한 공간 프로젝트입니다.",
  "model-house": "공용부와 세대 공간의 경험을 구성한 모델하우스 프로젝트입니다.",
  residential: "생활 동선과 공간의 완성도를 고려한 주거 프로젝트입니다.",
  education: "이용자의 안전과 학습 환경을 함께 고려한 교육·보육 프로젝트입니다.",
  retail: "방문 경험과 운영 동선을 함께 설계한 상업 공간 프로젝트입니다.",
};

function sortByDateAndTitle(a: Project, b: Project) {
  const dateOrder = (b.completedAt ?? "").localeCompare(a.completedAt ?? "");
  return dateOrder || a.title.localeCompare(b.title, "ko");
}

export const projects: Project[] = projectMetadata
  .map((metadata) => {
    const assets = projectAssetMap[metadata.slug];
    if (!assets) {
      throw new Error(`Missing project assets: ${metadata.slug}`);
    }

    return {
      ...metadata,
      summary: categoryCopy[metadata.category],
      assets: {
        thumbnail: {
          ...assets.thumbnail,
          alt: `${metadata.title} 대표 이미지`,
        },
        gallery: assets.gallery.map((image, index) => ({
          ...image,
          alt: `${metadata.title} 공간 이미지 ${index + 1}`,
        })),
      },
    };
  })
  .sort(sortByDateAndTitle);
