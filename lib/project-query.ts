import { projects } from "@/lib/projects";
import type { Project, ProjectCategory, ProjectType } from "@/lib/project-types";

export { projects };

const projectTypes: ProjectType[] = ["residential", "commercial"];
const projectCategories: ProjectCategory[] = ["corporate", "model-house", "residential", "education", "retail"];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function filterProjects(input: { type?: string; category?: string }): Project[] {
  const type = projectTypes.includes(input.type as ProjectType) ? input.type : undefined;
  const category = projectCategories.includes(input.category as ProjectCategory) ? input.category : undefined;

  return projects.filter((project) =>
    (!type || project.type === type) && (!category || project.category === category)
  );
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((project) => project.featuredOrder !== undefined)
    .sort((a, b) => a.featuredOrder! - b.featuredOrder!);
}

export function getRelatedProjects(project: Project, limit = 3): Project[] {
  return projects
    .filter(
      (candidate) =>
        candidate.slug !== project.slug &&
        (candidate.category === project.category || candidate.type === project.type)
    )
    .sort((a, b) => Number(b.category === project.category) - Number(a.category === project.category))
    .slice(0, limit);
}

export function getProjectCounts(): { all: number; residential: number; commercial: number } {
  return {
    all: projects.length,
    residential: projects.filter((project) => project.type === "residential").length,
    commercial: projects.filter((project) => project.type === "commercial").length,
  };
}
