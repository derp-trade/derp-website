import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarField } from "@/components/star-field";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-pixel relative">
      <StarField />

      {/* Header */}
      <header className="border-b border-dashed border-[#ff00ff50] px-4 py-2 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/images/derps-logo.png" alt="Derps Logo" width={48} height={48} className="pixelated" />
            <span className="text-xl font-bold text-[#00ffff]">DERPS</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="#about" className="text-[#ffff00] hover:text-[#ff00ff] transition-colors">
              About
            </Link>
            <Link href="#features" className="text-[#ffff00] hover:text-[#ff00ff] transition-colors">
              Features
            </Link>
          </nav>
          <Button className="bg-[#ff00ff] hover:bg-[#cc00cc] text-white border border-white px-4 py-2 font-pixel z-10">
            Launch App (soon)
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-dashed border-[#ff00ff50] bg-gradient-to-b from-black to-[#220033] z-10">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-[#ff00ff]/80 px-3 py-1 text-white/80 font-bold border border-white">
              NEW ASSET CLASS
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed text-[#00ffff] mb-6">
              LEVERAGE <span className="text-[#ff00ff]">ANY TOKEN</span> WITH DERPS
            </h1>
            <p className="text-lg text-[#ffff00] mb-6">
              The first perps trading protocol designed for tokens without high volume and liquidity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-[#ff00ff] hover:bg-[#cc00cc] text-white border border-white px-6 py-3 btn-pixel text-sm">
                Start Trading (soon)
              </Button>
              <Link href="/#about">
                <Button
                  variant="outline"
                  className="bg-transparent hover:bg-[#220033] text-[#00ffff] border border-[#00ffff] px-6 py-3 btn-pixel text-sm"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] pixel-box">
            <div className="absolute inset-0 bg-[url('/images/derps-hero.png')] bg-contain bg-center bg-no-repeat pixelated flex flex-col items-center justify-center">
              <Image alt="Derps logo" src="/images/derps-logo.png" width={256} height={256} className="rounded-full pixelated opacity-50" />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16 flex justify-center">
          <Link href="/#about" className="flex items-center gap-2 text-[#00ffff] hover:text-[#ff00ff] transition-colors">
            Scroll to learn more <ChevronDown className="h-5 w-5 animate-bounce" />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 border-b border-dashed border-[#ff00ff50] z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#00ffff]">WHAT ARE DERPS?</h2>
            <p className="text-xl text-[#ffff00]">
              Derps are a new asset class designed to bring perps trading to tokens without exceptionally high volume
              and liquidity.
            </p>
          </div>

          <div className="grid gap-8 items-center">
            <div className="pixel-box p-6 space-y-4">
              <p className="text-lg">
                Instead of relying on traditional market-makers, each Derps contract pairs traders directly with an
                automated market maker that can never be liquidated.
              </p>
              <p className="text-lg">
                When prices swing hard and open interest is lopsided, Derps use targeted financial incentives to keep
                markets open and solvent.
              </p>
            </div>
            {/* <div className="pixel-box p-6 h-[250px] relative">
              <div className="absolute inset-0 bg-[url('/images/derps-amm.png')] bg-contain bg-center bg-no-repeat pixelated"></div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 md:py-24 border-b border-dashed border-[#ff00ff50] bg-gradient-to-b from-black to-[#220033] z-10"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#00ffff]">DERPS FEATURES</h2>
            <p className="text-xl text-[#ffff00]">
              By unlocking leveraged trading on any token, Derps give more possibilities to everyone in the long-tail of
              crypto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="pixel-box p-6 hover:bg-[#220033] transition-colors">
              <h3 className="text-lg font-bold mb-4 text-[#00ffff]">LEVERAGE TRADING</h3>
              <p>Short tokens you don&apos;t believe in, and amplify your bets with leverage</p>
            </div>
            <div className="pixel-box p-6 hover:bg-[#220033] transition-colors">
              <h3 className="text-lg font-bold mb-4 text-[#00ffff]">HEDGING</h3>
              <p>Crypto funds become able to hedge their bets on all tokens</p>
            </div>
            <div className="pixel-box p-6 hover:bg-[#220033] transition-colors">
              <h3 className="text-lg font-bold mb-4 text-[#00ffff]">CREATOR BENEFITS</h3>
              <p>Memecoin creators can hold longs on their tokens rather than dumping team tokens for cash</p>
            </div>
            <div className="pixel-box p-6 hover:bg-[#220033] transition-colors">
              <h3 className="text-lg font-bold mb-4 text-[#00ffff]">CONTRIBUTOR REWARDS</h3>
              <p>Projects can reward contributors, advisors, or KOLs with longs without adding sell pressure</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto pixel-box p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#00ffff]">READY TO TRADE?</h2>
            <p className="text-xl text-[#ffff00] mb-8">
              Derps turn every token into a fully featured, risk-managed trading venue.
            </p>
            <Button className="bg-[#ff00ff] hover:bg-[#cc00cc] text-white border border-white px-8 py-4 font-pixel text-xl">
              Launch App (soon)
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-dashed border-[#ff00ff50] py-6 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image src="/images/derps-logo.png" alt="Derps Logo" width={32} height={32} className="pixelated" />
              <span className="text-base font-bold text-[#00ffff]">DERPS</span>
            </div>
            <div className="flex gap-6">
              {/* <Link href="#" className="text-[#ffff00] hover:text-[#ff00ff]">
                Twitter
              </Link>
              <Link href="#" className="text-[#ffff00] hover:text-[#ff00ff]">
                Discord
              </Link>
              <Link href="#" className="text-[#ffff00] hover:text-[#ff00ff]">
                Docs
              </Link> */}
              <a
                href="https://github.com/derp-trade"
                target="_blank"
                rel="noreferrer noopener"
                className="text-[#ffff00] hover:text-[#ff00ff]"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="text-center mt-6 text-sm text-gray-400">
            © {new Date().getFullYear()} Derps Protocol. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
