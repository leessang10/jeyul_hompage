export type ProjectType = "residential" | "commercial";

export type ProjectCategory =
  | "corporate"
  | "model-house"
  | "residential"
  | "education"
  | "retail";

export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type ProjectAssetSet = {
  thumbnail: ProjectImage;
  gallery: ProjectImage[];
};

export type ProjectMetadata = {
  slug: string;
  sourceFolder: string;
  title: string;
  client?: string;
  type: ProjectType;
  category: ProjectCategory;
  location?: string;
  year?: string;
  completedAt?: string;
  spaces: string[];
  coverIndex: number;
  featuredOrder?: number;
};

export type Project = ProjectMetadata & {
  summary: string;
  assets: ProjectAssetSet;
};

export type HomeAssetMap = {
  hero: ProjectImage[];
  services: Record<"design" | "construction" | "development" | "interior", ProjectImage>;
  sectionBackgrounds: [ProjectImage, ProjectImage];
};
