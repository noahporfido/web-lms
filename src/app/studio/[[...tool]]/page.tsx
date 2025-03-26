import config from "../../../../sanity.config";
import type { Metadata, Viewport } from "next";
import {
  NextStudio,
  metadata as studioMetadata,
  viewport as studioViewport,
} from "next-sanity/studio";

export const metadata: Metadata = {
  ...studioMetadata,
  title: "Loading Studio...",
};

export const viewport: Viewport = {
  ...studioViewport,

  interactiveWidget: "resizes-content",
};

export default function StudioPage() {
  return <NextStudio config={config} />;
}
