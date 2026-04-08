import { HomeHeroVideo } from "@/components/site/home-hero-video";
import { HomeAssetCta } from "@/components/site/home-asset-cta";
import { HomeFullscreenGrid } from "@/components/site/home-fullscreen-grid";
import { HomeIntegrationDiagram } from "@/components/site/home-integration-diagram";
import { siteContent } from "@/lib/site-content";

export default function Page() {
  return (
    <div className="-mt-24 flex min-h-screen flex-col">
      <HomeHeroVideo content={siteContent.homeHeroMedia} />
      <HomeFullscreenGrid />
      <HomeIntegrationDiagram />
      <HomeAssetCta />
    </div>
  );
}
