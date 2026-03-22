import type { FeaturedStoryItem } from "@/lib/site-content";
import { HomeProjectStoryPanel } from "@/components/site/home-project-story-panel";

type HomeProjectStoryRailProps = {
  items: FeaturedStoryItem[];
};

export function HomeProjectStoryRail({ items }: HomeProjectStoryRailProps) {
  return (
    <div>
      {items.map((item) => (
        <HomeProjectStoryPanel key={`${item.category}-${item.title}`} item={item} />
      ))}
    </div>
  );
}
