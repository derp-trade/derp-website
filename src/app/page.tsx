import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  Lock,
  BarChart3,
  Zap,
  Calendar,
  Users,
  PlayCircle,
  Code,
  CheckCircle2,
  Award,
  TrendingUpIcon,
  Trophy,
  FileText,
  ExternalLink,
  Youtube,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0B100F] text-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image src="/images/logo_dark.jpg" alt="derp.trade logo" width={48} height={48} className="rounded-lg" />
          <span className="font-spline text-xl font-bold">derp.trade</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="hover:text-[#AAFF00] transition-colors">
            How it Works
          </Link>
          <Link href="#features" className="hover:text-[#AAFF00] transition-colors">
            Features
          </Link>
          <Link href="#roadmap" className="hover:text-[#AAFF00] transition-colors">
            Roadmap
          </Link>
          <Link href="#recognition" className="hover:text-[#AAFF00] transition-colors">
            Recognition
          </Link>
          <Link
            href="https://docs.derp.trade"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#AAFF00] transition-colors flex items-center gap-1"
          >
            <FileText size={16} />
            Docs
            <ExternalLink size={12} className="opacity-70" />
          </Link>
        </nav>
        <Link
          href="#"
          className="bg-[#9C27FF] hover:bg-[#8622d8] text-white px-6 py-2 rounded-md transition-colors font-medium flex items-center gap-2"
        >
          <PlayCircle size={18} />
          Try Demo
        </Link>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-black/30 px-3 py-1 rounded-full text-sm mb-4">
            <span className="text-[#AAFF00]">COMING SOON - Q3 2025</span>
          </div>
          <h1 className="font-spline text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[#AAFF00]">LEVERAGE</span> ANY ASSET <br />
            WITH <span className="text-[#9C27FF]">DERPS</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            The first perpetual trading protocol designed for any on-chain asset, enabling leveraged long and short
            positions without requiring high volume or liquidity.
          </p>
          <div className="bg-[#AAFF00]/10 border border-[#AAFF00]/30 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
            <p className="text-white">
              <span className="font-bold">Development in Progress:</span> We&apos;re building the future of on-chain
              derivatives. Join our beta testing community and help shape the future of DERPs!
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="#"
              className="bg-[#AAFF00] hover:bg-[#99e600] text-black px-6 py-3 rounded-md transition-colors font-medium flex items-center gap-2"
            >
              <PlayCircle size={18} />
              Try Demo App
            </Link>
            <Link
              href="#pitch-video"
              className="border border-white/20 hover:border-white/40 px-6 py-3 rounded-md transition-colors font-medium flex items-center gap-2"
            >
              <Youtube size={18} />
              Watch Pitch
            </Link>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto mt-12">
          <div className="absolute inset-0 bg-gradient-to-r from-[#AAFF00]/10 to-[#9C27FF]/10 rounded-xl blur-xl"></div>
          <div className="relative bg-black/40 border border-white/10 p-6 rounded-xl">
            <div className="flex justify-center mb-6">
              <Image src="/images/logo_light.jpg" alt="derp.trade logo" width={120} height={120} className="rounded-lg" />
            </div>
            <div className="bg-[#0B100F] p-6 rounded-lg border border-white/10">
              <h3 className="font-spline text-xl text-center mb-4">
                Trade with <span className="text-[#AAFF00]">confidence</span>, powered by AMM technology
              </h3>
              <p className="text-gray-300 text-center">
                Instant liquidity and order execution for any asset, regardless of trading volume.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pitch Video Section */}
      <section id="pitch-video" className="container mx-auto px-4 py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-spline text-3xl md:text-4xl font-bold mb-6">
              <span className="text-[#9C27FF]">WATCH OUR PITCH</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              Learn about derp.trade, the problem we&apos;re solving, and our platform&apos;s potential in just 3 minutes
            </p>
          </div>

          <div className="relative bg-black/40 border border-white/10 p-6 rounded-xl overflow-hidden">
            <div className="aspect-video relative">
              {/* Replace the iframe src with your actual YouTube or Vimeo embed URL */}
              {/* <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/your-video-id"
                title="derp.trade Pitch Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}
              <iframe
                src="https://pitch.com/embed-link/uk75cn"
                allow="fullscreen; clipboard-write"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-lg border-none outline-none ring-0"
              ></iframe>
            </div>

            <div className="mt-6 flex justify-between items-center flex-wrap">
              <p className="text-gray-300">
                <span className="text-[#AAFF00] font-medium">3-minute overview</span> of our revolutionary approach to
                derivatives
              </p>
              <Link
                href="https://docs.derp.trade"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#AAFF00] hover:text-[#99e600] transition-colors"
              >
                <FileText size={16} />
                Read the docs
                <ExternalLink size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Development Status Banner */}
      <section className="bg-[#9C27FF]/20 py-8 border-y border-[#9C27FF]/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center items-start justify-between gap-6">
            <div className="flex items-center gap-3">
              <Code className="text-[#AAFF00]" size={24} />
              <span className="text-lg font-medium">Development in Progress</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-[#AAFF00]" size={24} />
              <span>Concept Validated with Monte Carlo Simulations</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="text-[#AAFF00]" size={24} />
              <span>Mainnet Launch: Q3 2025</span>
            </div>
            <Link
              href="https://t.me/derpsbeta"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#9C27FF] hover:bg-[#8622d8] text-white px-4 py-2 rounded-md transition-colors font-medium flex items-center gap-2 whitespace-nowrap"
            >
              <Users size={18} />
              Join Beta
            </Link>
          </div>
        </div>
      </section>

      {/* What are DERPs Section */}
      <section id="how-it-works" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="font-spline text-3xl md:text-4xl font-bold mb-6">
            <span className="text-[#AAFF00]">WHAT ARE DERPS?</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            DERPs are synthetic, digital assets that enable leveraged trading on any financial asset, from stocks to
            real-estate funds to memecoins — all fully on-chain.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#AAFF00]/20 blur-xl rounded-full"></div>
            <Image
              src="/images/logo_light.jpg"
              alt="derp.trade logo"
              width={120}
              height={120}
              className="rounded-lg relative"
            />
          </div>
        </div>

        <div className="bg-black/30 p-8 rounded-xl border border-white/10 max-w-3xl mx-auto mb-16">
          <h3 className="font-spline text-2xl font-bold mb-6 text-center">How DERPs Work</h3>
          <ul className="space-y-6">
            <li className="flex gap-4 items-center">
              <div className="bg-[#AAFF00] text-black rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <p className="text-lg">
                  Unlike traditional perpetual futures that use order books, DERPs use{" "}
                  <span className="text-[#AAFF00] font-medium">Automated Market Makers (AMM)</span>
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-center">
              <div className="bg-[#AAFF00] text-black rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <p className="text-lg">
                  This enables <span className="text-[#AAFF00] font-medium">instant order filling</span>, even for
                  assets with low liquidity
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-center">
              <div className="bg-[#AAFF00] text-black rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <p className="text-lg">
                  Trade with <span className="text-[#9C27FF] font-medium">leverage</span> to amplify your gains
                  based on your conviction
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-center">
              <div className="bg-[#AAFF00] text-black rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                4
              </div>
              <div>
                <p className="text-lg">
                  All you need is a <span className="text-[#AAFF00] font-medium">Solana wallet</span> to start trading
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-8 text-center">
            <Link
              href="https://docs.derp.trade"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs md:text-base gap-2 text-[#AAFF00] hover:text-[#99e600] transition-colors"
            >
              <FileText size={16} />
              Read the full protocol documentation
              <ExternalLink size={12} />
            </Link>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="font-spline text-2xl font-bold mb-6 text-center">What Makes DERPs Different</h3>
          <div className="space-y-6">
            <div className="bg-black/30 p-6 rounded-xl border border-white/10">
              <h4 className="font-spline text-xl font-medium mb-2 text-[#AAFF00]">No Order Book Required</h4>
              <p className="text-gray-300">
                Traditional perpetual futures need deep liquidity and active market makers. DERPs use AMM technology to
                provide instant liquidity for any asset.
              </p>
            </div>
            <div className="bg-black/30 p-6 rounded-xl border border-white/10">
              <h4 className="font-spline text-xl font-medium mb-2 text-[#AAFF00]">Fully On-Chain</h4>
              <p className="text-gray-300">
                Every trade is executed on the Solana blockchain, ensuring transparency, security, and eliminating
                counterparty risk.
              </p>
            </div>
            <div className="bg-black/30 p-6 rounded-xl border border-white/10">
              <h4 className="font-spline text-xl font-medium mb-2 text-[#AAFF00]">Universal Asset Coverage</h4>
              <p className="text-gray-300">
                If there&apos;s an on-chain price feed available, it can be traded as a DERP — from memecoins to traditional
                stocks and ETFs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-black/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-spline text-3xl md:text-4xl font-bold mb-6">
              <span className="text-[#AAFF00]">KEY FEATURES</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              derp.trade brings sophisticated trading tools to any on-chain asset, revolutionizing how you interact with
              the crypto market.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-[#0B100F] p-8 rounded-xl border border-white/10 hover:border-[#AAFF00]/50 transition-colors">
              <div className="bg-[#AAFF00]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="text-[#AAFF00]" size={24} />
              </div>
              <h3 className="font-spline text-xl font-bold mb-3">Long & Short Any Asset</h3>
              <p className="text-gray-300">
                Amplify your convictions with leverage or bet against overvalued assets. DERPs give you the flexibility
                to profit in any market direction.
              </p>
            </div>
            <div className="bg-[#0B100F] p-8 rounded-xl border border-white/10 hover:border-[#9C27FF]/50 transition-colors">
              <div className="bg-[#9C27FF]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Lock className="text-[#9C27FF]" size={24} />
              </div>
              <h3 className="font-spline text-xl font-bold mb-3">TradFi On-Chain</h3>
              <p className="text-gray-300">
                Access traditional financial assets like stocks, commodities, and ETFs directly on-chain in a fully
                decentralized way, without intermediaries.
              </p>
            </div>
            <div className="bg-[#0B100F] p-8 rounded-xl border border-white/10 hover:border-[#AAFF00]/50 transition-colors">
              <div className="bg-[#AAFF00]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="text-[#AAFF00]" size={24} />
              </div>
              <h3 className="font-spline text-xl font-bold mb-3">Rug-Pull Prevention</h3>
              <p className="text-gray-300">
                Token creators can hold longs instead of team tokens they would otherwise have to sell to the community,
                reducing sell pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Traction Section */}
      <section id="recognition" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="font-spline text-3xl md:text-4xl font-bold mb-6">
            <span className="text-[#AAFF00]">RECOGNITION & TRACTION</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            derp.trade is already gaining significant recognition and interest from the community
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-black/30 p-8 rounded-xl border border-white/10 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="text-[#AAFF00]" size={28} />
                <h3 className="font-spline text-2xl font-bold">Award-Winning Project</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#AAFF00]/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="text-[#AAFF00]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-spline text-lg font-medium mb-1">$10,000 Media Grant from Cointelegraph</h4>
                    <p className="text-gray-300">
                      Winner of the 1st Place Award at Superteam Poland&apos;s Demo Day at Solana Build Station Warsaw
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#9C27FF]/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUpIcon className="text-[#9C27FF]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-spline text-lg font-medium mb-1">Growing Industry Interest</h4>
                    <p className="text-gray-300">
                      Significant interest from professional traders and market makers who recognize the potential of
                      our approach to derivatives trading
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#AAFF00]/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="text-[#AAFF00]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-spline text-lg font-medium mb-1">Beta Testing Community</h4>
                    <p className="text-gray-300">
                      We&apos;ve begun onboarding experienced traders and market makers into our beta testing program to
                      refine our platform before launch
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="https://t.me/derpsbeta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#9C27FF] hover:bg-[#8622d8] text-white px-6 py-3 rounded-md transition-colors font-medium flex items-center gap-2 w-fit"
                >
                  <Users size={18} />
                  Join Our Beta Community
                </Link>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#AAFF00]/20 to-[#9C27FF]/20 rounded-xl blur-xl"></div>
              <div className="relative bg-black/40 border border-white/10 p-4 rounded-xl">
                <Image
                  src="/images/hackathon_award.jpg"
                  alt="derp.trade team receiving $10,000 media grant from Cointelegraph at Superteam Poland's Demo Day"
                  width={600}
                  height={400}
                  className="rounded-lg w-full"
                />
                <p className="text-sm text-gray-400 mt-3 text-center">
                  derp.trade team receiving the $10,000 media grant from Cointelegraph
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-20">
          <div className="bg-gradient-to-r from-[#AAFF00]/10 to-[#9C27FF]/10 p-6 rounded-xl border border-white/10">
            <h3 className="font-spline text-xl font-medium mb-4 text-center">What Industry Professionals Are Saying</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/50 p-5 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  &quot;The AMM approach to perpetual futures is exactly what the industry needs. This could be a
                  game-changer for trading low-liquidity assets.&quot;
                </p>
                <p className="font-medium">— Senior Trader at a Leading Crypto Fund</p>
              </div>

              <div className="bg-black/50 p-5 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  &quot;I&apos;ve been looking for a solution to efficiently trade leveraged positions on smaller tokens.
                  DERPs are very promising.&quot;
                </p>
                <p className="font-medium">— Market Maker & DeFi Strategist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo App Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#AAFF00]/10 to-[#9C27FF]/10 p-8 rounded-xl border border-white/10">
          <div className="text-center mb-8">
            <h2 className="font-spline text-3xl font-bold mb-4">
              <span className="text-[#AAFF00]">TRY THE DEMO APP</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of derivatives trading with our interactive demo
            </p>
          </div>

          <div className="bg-black/50 p-6 rounded-lg mb-8">
            <h3 className="font-spline text-xl font-medium mb-4 text-center">What&apos;s available in the demo:</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="bg-[#AAFF00] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <p className="text-gray-200">
                  Trade with <span className="text-[#AAFF00] font-medium">play money</span> using the real DERP
                  mechanisms
                </p>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-[#AAFF00] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <p className="text-gray-200">
                  Access to <span className="text-[#AAFF00] font-medium">several test markets</span> including crypto,
                  stocks, and commodities
                </p>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-[#AAFF00] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <p className="text-gray-200">
                  Experience <span className="text-[#AAFF00] font-medium">leveraged trading</span> with up to 10x
                  multiplier
                </p>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-[#AAFF00] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <p className="text-gray-200">
                  Fully <span className="text-[#AAFF00] font-medium">off-chain implementation</span> for testing
                  purposes
                </p>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link
              href="#"
              className="bg-[#AAFF00] hover:bg-[#99e600] text-black px-8 py-3 rounded-md transition-colors font-medium text-lg inline-flex items-center gap-2"
            >
              <PlayCircle size={20} />
              Launch Demo App
            </Link>
            <p className="text-sm text-gray-400 mt-4">
              No wallet connection required for the demo. Just open the app to get started.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="bg-black/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-spline text-3xl md:text-4xl font-bold mb-6">
              <span className="text-[#AAFF00]">ROADMAP</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              Our journey to revolutionize on-chain derivatives trading
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#AAFF00] to-[#9C27FF]"></div>

              <div className="relative flex flex-col md:flex-row md:justify-between items-start mb-16">
                <div className="flex flex-col items-start md:items-end md:w-[45%] md:text-right order-1 md:order-1 ml-12 md:ml-0">
                  <div className="bg-[#AAFF00]/20 text-[#AAFF00] px-3 py-1 rounded-full text-sm mb-2">COMPLETED</div>
                  <h3 className="font-spline text-2xl font-bold mb-2">May 2025</h3>
                  <div className="bg-[#0B100F] p-4 rounded-lg border border-white/10 w-full">
                    <h4 className="font-spline text-lg font-medium mb-2 text-[#AAFF00]">Concept Validation</h4>
                    <p className="text-gray-300">
                      Validated the DERP concept with extensive Monte Carlo simulations and mathematical modeling to
                      ensure market stability and efficiency.
                    </p>
                  </div>
                </div>
                <div className="absolute -left-[14px] md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#AAFF00] border-4 border-[#0B100F] z-10"></div>
                <div className="md:w-[45%] order-2 md:order-2"></div>
              </div>

              <div className="relative flex flex-col md:flex-row md:justify-between items-start mb-16">
                <div className="md:w-[45%] order-2 md:order-1"></div>
                <div className="absolute -left-[14px] md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#AAFF00] border-4 border-[#0B100F] z-10"></div>
                <div className="flex flex-col items-start md:w-[45%] order-1 md:order-2 ml-12 md:ml-0">
                  <div className="bg-[#AAFF00]/20 text-[#AAFF00] px-3 py-1 rounded-full text-sm mb-2">
                    CURRENT PHASE
                  </div>
                  <h3 className="font-spline text-2xl font-bold mb-2">May 2025</h3>
                  <div className="bg-[#0B100F] p-4 rounded-lg border border-white/10 w-full">
                    <h4 className="font-spline text-lg font-medium mb-2 text-[#AAFF00]">Demo & Community Building</h4>
                    <p className="text-gray-300">
                      Launching our interactive demo app with play money and building a community of beta testers to
                      gather feedback and refine the product.
                    </p>
                    <div className="mt-4 flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#AAFF00] flex-shrink-0"></div>
                        <p className="text-gray-300">Demo app with test markets</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#AAFF00] flex-shrink-0"></div>
                        <p className="text-gray-300">Beta testing program</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#9C27FF] flex-shrink-0"></div>
                        <p className="text-gray-300">Smart contract development</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row md:justify-between items-start mb-16">
                <div className="flex flex-col items-start md:items-end md:w-[45%] md:text-right order-1 md:order-1 ml-12 md:ml-0">
                  <div className="bg-[#9C27FF]/20 text-[#9C27FF] px-3 py-1 rounded-full text-sm mb-2">UPCOMING</div>
                  <h3 className="font-spline text-2xl font-bold mb-2">Q3 2025</h3>
                  <div className="bg-[#0B100F] p-4 rounded-lg border border-white/10 w-full">
                    <h4 className="font-spline text-lg font-medium mb-2 text-[#9C27FF]">Mainnet Launch</h4>
                    <p className="text-gray-300">
                      Full deployment of DERP contracts on Solana mainnet with initial markets and complete on-chain
                      functionality.
                    </p>
                    <div className="mt-4 flex flex-col gap-2">
                      <div className="flex items-center gap-2 justify-end flex-row-reverse md:flex-row">
                        <p className="text-gray-300">Smart contract audits</p>
                        <div className="w-4 h-4 rounded-full bg-[#9C27FF] flex-shrink-0"></div>
                      </div>
                      <div className="flex items-center gap-2 justify-end flex-row-reverse md:flex-row">
                        <p className="text-gray-300">Mainnet deployment</p>
                        <div className="w-4 h-4 rounded-full bg-[#9C27FF] flex-shrink-0"></div>
                      </div>
                      <div className="flex items-center gap-2 justify-end flex-row-reverse md:flex-row">
                        <p className="text-gray-300">Initial market listings</p>
                        <div className="w-4 h-4 rounded-full bg-[#9C27FF] flex-shrink-0"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -left-[14px] md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#9C27FF] border-4 border-[#0B100F] z-10"></div>
                <div className="md:w-[45%] order-2 md:order-2"></div>
              </div>

              <div className="relative flex flex-col md:flex-row md:justify-between items-start">
                <div className="md:w-[45%] order-2 md:order-1"></div>
                <div className="absolute -left-[14px] md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#9C27FF] border-4 border-[#0B100F] z-10"></div>
                <div className="flex flex-col items-start md:w-[45%] order-1 md:order-2 ml-12 md:ml-0">
                  <div className="bg-[#9C27FF]/20 text-[#9C27FF] px-3 py-1 rounded-full text-sm mb-2">FUTURE</div>
                  <h3 className="font-spline text-2xl font-bold mb-2">Q4 2025</h3>
                  <div className="bg-[#0B100F] p-4 rounded-lg border border-white/10 w-full">
                    <h4 className="font-spline text-lg font-medium mb-2 text-[#9C27FF]">Expansion & Partnerships</h4>
                    <p className="text-gray-300">
                      Expanding market offerings, integrating with major DeFi protocols, and establishing partnerships
                      with traditional finance data providers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="font-spline text-3xl md:text-4xl font-bold mb-6">
            <span className="text-[#AAFF00]">WHY USE DERPS?</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            DERPs transform how you interact with on-chain assets, providing tools previously unavailable in
            decentralized finance.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          <div className="bg-black/30 p-8 rounded-xl border border-white/10">
            <div className="flex gap-4 items-start mb-4">
              <div className="bg-[#AAFF00]/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="text-[#AAFF00]" size={24} />
              </div>
              <div>
                <h3 className="font-spline text-xl font-bold mb-2">For Traders</h3>
                <p className="text-gray-300">
                  Access leveraged positions on any asset, hedge your portfolio against downside risk, and capitalize on
                  market inefficiencies with sophisticated trading strategies.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-[#0B100F] p-4 rounded-lg border border-white/10">
                <p className="font-medium">
                  ✓ <span className="text-[#AAFF00]">Leverage</span> your positions
                </p>
              </div>
              <div className="bg-[#0B100F] p-4 rounded-lg border border-white/10">
                <p className="font-medium">
                  ✓ <span className="text-[#AAFF00]">Short</span> overvalued assets
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black/30 p-8 rounded-xl border border-white/10">
            <div className="flex gap-4 items-start mb-4">
              <div className="bg-[#9C27FF]/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="text-[#9C27FF]" size={24} />
              </div>
              <div>
                <h3 className="font-spline text-xl font-bold mb-2">For Investors</h3>
                <p className="text-gray-300">
                  Diversify your portfolio with exposure to traditional financial assets on-chain, and protect your
                  investments with hedging strategies previously unavailable in DeFi.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-[#0B100F] p-4 rounded-lg border border-white/10">
                <p className="font-medium">
                  ✓ <span className="text-[#AAFF00]">Access</span> TradFi on-chain
                </p>
              </div>
              <div className="bg-[#0B100F] p-4 rounded-lg border border-white/10">
                <p className="font-medium">
                  ✓ <span className="text-[#AAFF00]">Hedge</span> your portfolio
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black/30 p-8 rounded-xl border border-white/10">
            <div className="flex gap-4 items-start mb-4">
              <div className="bg-[#AAFF00]/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="text-[#AAFF00]" size={24} />
              </div>
              <div>
                <h3 className="font-spline text-xl font-bold mb-2">For Projects</h3>
                <p className="text-gray-300">
                  Create more sustainable tokenomics by using DERPs instead of team tokens, reducing sell pressure while
                  maintaining upside exposure for your team.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-[#0B100F] p-4 rounded-lg border border-white/10">
                <p className="font-medium">
                  ✓ <span className="text-[#AAFF00]">Reduce</span> sell pressure
                </p>
              </div>
              <div className="bg-[#0B100F] p-4 rounded-lg border border-white/10">
                <p className="font-medium">
                  ✓ <span className="text-[#AAFF00]">Maintain</span> upside exposure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The DERP Advantage */}
      <section className="bg-black/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-spline text-3xl md:text-4xl font-bold mb-6">
              <span className="text-[#AAFF00]">THE DERP ADVANTAGE</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              What makes DERPs the future of on-chain derivatives trading
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-[#0B100F] p-6 rounded-xl border border-white/10">
              <p className="font-medium text-lg">
                ✓ <span className="text-[#AAFF00]">Trade any asset</span> with leverage, regardless of liquidity
              </p>
            </div>
            <div className="bg-[#0B100F] p-6 rounded-xl border border-white/10">
              <p className="font-medium text-lg">
                ✓ <span className="text-[#AAFF00]">Instant order execution</span> through AMM technology
              </p>
            </div>
            <div className="bg-[#0B100F] p-6 rounded-xl border border-white/10">
              <p className="font-medium text-lg">
                ✓ <span className="text-[#AAFF00]">Short overvalued assets</span> or hedge your portfolio
              </p>
            </div>
            <div className="bg-[#0B100F] p-6 rounded-xl border border-white/10">
              <p className="font-medium text-lg">
                ✓ <span className="text-[#AAFF00]">Access traditional markets</span> directly from Solana
              </p>
            </div>
            <div className="bg-[#0B100F] p-6 rounded-xl border border-white/10">
              <p className="font-medium text-lg">
                ✓ <span className="text-[#AAFF00]">Full on-chain transparency</span> and security
              </p>
            </div>
            <div className="bg-[#0B100F] p-6 rounded-xl border border-white/10">
              <p className="font-medium text-lg">
                ✓ <span className="text-[#AAFF00]">No intermediaries</span> or centralized control
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Beta Testing CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#9C27FF]/20 to-[#AAFF00]/20 p-8 rounded-xl border border-white/10">
          <div className="text-center mb-8">
            <h2 className="font-spline text-3xl font-bold mb-4">
              <span className="text-[#9C27FF]">JOIN OUR BETA TESTING COMMUNITY</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Help shape the future of on-chain derivatives trading
            </p>
          </div>

          <div className="bg-black/50 p-6 rounded-lg mb-8">
            <h3 className="font-spline text-xl font-medium mb-4 text-center">Beta tester benefits:</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="bg-[#9C27FF] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <p className="text-gray-200">Early access to new features and markets</p>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-[#9C27FF] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <p className="text-gray-200">Direct influence on product development</p>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-[#9C27FF] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <p className="text-gray-200">Exclusive community events and discussions</p>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-[#9C27FF] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <p className="text-gray-200">Priority access to mainnet launch</p>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link
              href="https://t.me/derpsbeta"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#9C27FF] hover:bg-[#8622d8] text-white px-8 py-3 rounded-md transition-colors font-medium text-lg inline-flex items-center gap-2"
            >
              <Users size={20} />
              Get Beta Access
            </Link>
            <p className="text-sm text-gray-400 mt-4">
              Limited spots available.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="font-spline text-3xl md:text-4xl font-bold mb-6">
            <span className="text-[#AAFF00]">FREQUENTLY ASKED QUESTIONS</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Everything you need to know about DERPs and derp.trade
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-black/30 p-6 rounded-xl border border-white/10">
            <h3 className="font-spline text-xl font-bold mb-3">What exactly is a DERP?</h3>
            <p className="text-gray-300">
              A DERP (decentralized perpetual) is a synthetic asset that allows traders to take
              leveraged long or short positions on any asset with an on-chain price feed, without requiring the
              traditional market infrastructure of order books and high liquidity.
            </p>
          </div>
          <div className="bg-black/30 p-6 rounded-xl border border-white/10">
            <h3 className="font-spline text-xl font-bold mb-3">
              How is this different from regular perpetual futures?
            </h3>
            <p className="text-gray-300">
              Unlike traditional perpetual futures that rely on order books and require deep liquidity, DERPs use
              Automated Market Makers (AMM) to provide instant liquidity and order execution, making them viable for any
              asset regardless of trading volume.
            </p>
          </div>
          <div className="bg-black/30 p-6 rounded-xl border border-white/10">
            <h3 className="font-spline text-xl font-bold mb-3">When will the full platform launch?</h3>
            <p className="text-gray-300">
              We&apos;re targeting a Q3 2025 mainnet launch. Currently, we have a demo app available where you can try the
              DERP trading experience with play money. Join our beta testing community to stay updated on our progress.
            </p>
          </div>
          <div className="bg-black/30 p-6 rounded-xl border border-white/10">
            <h3 className="font-spline text-xl font-bold mb-3">What can I do with the demo app?</h3>
            <p className="text-gray-300">
              The demo app allows you to trade with play money on several test markets using the real DERP mechanisms,
              but fully off-chain. It&apos;s a great way to experience the platform and provide feedback before our mainnet
              launch.
            </p>
          </div>
          <div className="bg-black/30 p-6 rounded-xl border border-white/10">
            <h3 className="font-spline text-xl font-bold mb-3">Where can I learn more about the technical details?</h3>
            <p className="text-gray-300">
              We have comprehensive documentation available at{" "}
              <Link
                href="https://docs.derp.trade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#AAFF00] hover:text-[#99e600] transition-colors"
              >
                docs.derp.trade
              </Link>{" "}
              that explains how the protocol works, including the AMM mechanism, funding rates, and more.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#AAFF00]/20 to-[#9C27FF]/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-spline text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the <span className="text-[#AAFF00]">Future</span> of Trading?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-300">
            Try our demo app today and join our community of beta testers to help shape the future of on-chain
            derivatives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#"
              className="bg-[#AAFF00] hover:bg-[#99e600] text-black px-8 py-3 rounded-md transition-colors font-medium text-lg flex items-center gap-2"
            >
              <PlayCircle size={20} />
              Try Demo App
            </Link>
            <Link
              href="https://t.me/derpsbeta"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#9C27FF] hover:bg-[#8622d8] text-white px-8 py-3 rounded-md transition-colors font-medium text-lg flex items-center gap-2"
            >
              <Users size={20} />
              Join Beta
            </Link>
            <Link
              href="https://docs.derp.trade"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 hover:border-white/40 bg-black/20 px-8 py-3 rounded-md transition-colors font-medium text-lg flex items-center gap-2"
            >
              <FileText size={20} />
              Read the Docs
              <ExternalLink size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/images/logo_dark.jpg" alt="derp.trade logo" width={40} height={40} className="rounded-lg" />
                <span className="font-spline text-lg font-bold">derp.trade</span>
              </div>
              <p className="text-gray-400 mb-4">The next generation of on-chain derivatives trading.</p>
              <div className="flex gap-4">
                <Link target="_blank" rel="noreferrer noopener" href="https://x.com/derp_trade" className="text-gray-400 hover:text-[#AAFF00]">
                  Twitter
                </Link>
                <Link target="_blank" rel="noreferrer noopener" href="https://t.me/derpsbeta" className="text-gray-400 hover:text-[#AAFF00]">
                  Telegram
                </Link>
                <Link target="_blank" rel="noreferrer noopener" href="https://github.com/derp-trade" className="text-gray-400 hover:text-[#AAFF00]">
                  GitHub
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-spline text-lg font-bold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#AAFF00]">
                    Demo App
                  </Link>
                </li>
                <li>
                  <Link href="#roadmap" className="text-gray-400 hover:text-[#AAFF00]">
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://t.me/derpsbeta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#AAFF00]"
                  >
                    Beta Program
                  </Link>
                </li>
                <li>
                  <Link href="#pitch-video" className="text-gray-400 hover:text-[#AAFF00]">
                    Pitch Video
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-spline text-lg font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://docs.derp.trade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#AAFF00] flex items-center gap-1"
                  >
                    Documentation
                    <ExternalLink size={12} className="opacity-70" />
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-gray-400 hover:text-[#AAFF00]">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-spline text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy.html" target="_blank" rel="noreferrer noopener" className="text-gray-400 hover:text-[#AAFF00]">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@derp.trade" className="text-gray-400 hover:text-[#AAFF00]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 max-w-5xl mx-auto">
            <p>© {new Date().getFullYear()} derp.trade. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Trading derivatives involves significant risk. Only trade with funds you can afford to lose.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
