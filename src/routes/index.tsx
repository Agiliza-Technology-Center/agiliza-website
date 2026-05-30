import { AboutSection } from "#/components/sections/about-section";
import { HeroSection } from "#/components/sections/hero-section";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
    </main>
  );
}