import CtaBand from "@/components/CtaBand";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import HowItWorksIntro from "@/components/HowItWorksIntro";
import AgentConsole from "@/components/AgentConsole";
import DealFlow from "@/components/DealFlow";
import { APP_SELLER_SIGNUP, SITE_ADVISORY_INQUIRY } from "@/lib/appUrls";

export const metadata = {
  title: "How It Works. The Boring Bank.",
  description:
    "A boring, honest, guided, digital, tracked transaction — five agents, four documents, one wire.",
};

export default function HowItWorksPage() {
  return (
    <>
      <ScrollRevealInit />

      <HowItWorksIntro />

      <AgentConsole />

      <DealFlow />

      <CtaBand
        wide
        title="Ready to see what your position is worth?"
        primaryLabel="List Your Asset"
        primaryHref={APP_SELLER_SIGNUP}
        ghostLabel="Speak with a Banker"
        ghostHref={SITE_ADVISORY_INQUIRY}
      />
    </>
  );
}
