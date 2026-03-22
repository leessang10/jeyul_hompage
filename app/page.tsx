import { HomeFinalCta } from "@/components/site/home-final-cta";
import { HomeHeroVideo } from "@/components/site/home-hero-video";
import { HomeProcessHighlight } from "@/components/site/home-process-highlight";
import { HomeProjectStoryRail } from "@/components/site/home-project-story-rail";
import { HomeSplitEntry } from "@/components/site/home-split-entry";
import { HomeTrustStrip } from "@/components/site/home-trust-strip";
import { siteContent } from "@/lib/site-content";

export default function Page() {
  return (
    <div className="-mt-24 flex min-h-screen flex-col">
      <HomeHeroVideo content={siteContent.homeHeroMedia} />
      <HomeProjectStoryRail items={siteContent.featuredStories} />
      <HomeProcessHighlight steps={siteContent.processSteps} />
      <HomeSplitEntry />
      <HomeTrustStrip brand={siteContent.brand} points={siteContent.trustPoints} />
      <HomeFinalCta content={siteContent.homeFinalCta} />
    </div>
  );
}
