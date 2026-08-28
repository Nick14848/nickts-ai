import { BuildStack } from "@/components/BuildStack";
import { CommandPalette } from "@/components/CommandPalette";
import { Community } from "@/components/Community";
import { Elsewhere } from "@/components/Elsewhere";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LensSelector } from "@/components/LensSelector";
import { Navigation } from "@/components/Navigation";
import { SelectedWork } from "@/components/SelectedWork";
import { Story } from "@/components/Story";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <LensSelector />
        <Story />
        <Experience />
        <SelectedWork />
        <Community />
        <Elsewhere />
        <BuildStack />
      </main>
      <Footer />
      <CommandPalette />
    </>
  );
}
