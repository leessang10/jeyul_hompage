import data from "./project-assets.json";
import type { HomeAssetMap, ProjectAssetSet } from "@/lib/project-types";

export const projectAssetMap = data.projectAssetMap as Record<string, ProjectAssetSet>;
export const homeAssetMap = data.homeAssetMap as HomeAssetMap;
