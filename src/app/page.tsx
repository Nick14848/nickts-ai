import { AudiencePaths } from "@/components/AudiencePaths";
import { BuildStack } from "@/components/BuildStack";
import { CommandPalette } from "@/components/CommandPalette";
import { Community } from "@/components/Community";
import { Elsewhere } from "@/components/Elsewhere";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { PageSignal } from "@/components/PageSignal";
import { SelectedWork } from "@/components/SelectedWork";
import { Story } from "@/components/Story";

export default function Home() {
  return (
    <div className="relative">
      <PageSignal />
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <AudiencePaths />
          <Story />
          <Experience />
          <SelectedWork />
          <Community />
          <Elsewhere />
          <BuildStack />
        </main>
        <Footer />
        <CommandPalette />
      </div>
    </div>
  );
}
