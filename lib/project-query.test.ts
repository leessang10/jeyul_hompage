import { describe, expect, it } from "vitest";
import {
  filterProjects,
  getFeaturedProjects,
  getProjectBySlug,
  getProjectCounts,
  getRelatedProjects,
  projects,
} from "@/lib/project-query";

describe("project registry", () => {
  it("contains 40 unique projects and 228 gallery images", () => {
    expect(projects).toHaveLength(40);
    expect(new Set(projects.map((project) => project.slug)).size).toBe(40);
    expect(projects.reduce((sum, project) => sum + project.assets.gallery.length, 0)).toBe(228);
  });

  it("contains exactly eight ordered featured projects", () => {
    expect(getFeaturedProjects().map((project) => project.featuredOrder)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8,
    ]);
  });

  it("filters by type and category and ignores invalid values", () => {
    expect(filterProjects({ type: "residential" }).every((project) => project.type === "residential")).toBe(true);
    expect(filterProjects({ category: "education" }).every((project) => project.category === "education")).toBe(true);
    expect(filterProjects({ type: "invalid", category: "invalid" })).toEqual(projects);
  });

  it("finds projects and excludes the current project from related results", () => {
    const project = getProjectBySlug("tkg-taekwang-gimhae");
    expect(project).toBeDefined();
    expect(getRelatedProjects(project!, 3)).toHaveLength(3);
    expect(getRelatedProjects(project!, 3).some((item) => item.slug === project!.slug)).toBe(false);
  });

  it("returns stable top-level counts", () => {
    const counts = getProjectCounts();
    expect(counts.all).toBe(40);
    expect(counts.residential + counts.commercial).toBe(40);
  });
});
