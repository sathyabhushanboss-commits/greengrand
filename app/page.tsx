import { Header } from "@/components/Header";
import { Hero, About } from "@/components/Hero";
import { Craft } from "@/components/Craft";
import { Collection } from "@/components/Collection";
import { FitGuide } from "@/components/FitGuide";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { StitchDivider } from "@/components/StitchDivider";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <StitchDivider label="Materials" />
      <Craft />
      <StitchDivider label="Collection" />
      <Collection />
      <StitchDivider label="Fit" />
      <FitGuide />
      <StitchDivider label="Wearers" />
      <Testimonials />
      <Footer />
    </main>
  );
}