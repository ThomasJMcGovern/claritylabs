import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { BuyBox } from "@/components/buy-box";
import { WhyWorks } from "@/components/why-works";
import { FactsCard } from "@/components/facts-card";
import { Guarantee } from "@/components/guarantee";
import { FAQ } from "@/components/faq";
import { EmailCapture } from "@/components/email-capture";
import { Footer } from "@/components/footer";
import { StickyMobileCart } from "@/components/sticky-mobile-cart";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <div className="grid lg:grid-cols-4 gap-8 container mx-auto px-4 py-8">
          <div className="lg:col-span-3">
            <Hero />
          </div>
          <div className="lg:col-span-1">
            <BuyBox />
          </div>
        </div>

        <WhyWorks />
        <FactsCard />
        <Guarantee />
        <FAQ />
        <EmailCapture />
      </main>

      <Footer />
      <StickyMobileCart />
    </div>
  );
}
