'use client'

export default function Architecture() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Scalable Architecture
          </h2>
          <p className="text-xl text-gray-400">
            Built for transparency and security at scale
          </p>
        </div>

        {/* Isometric Architecture Diagram */}
        <div className="flex justify-center">
          <svg viewBox="0 0 800 600" className="w-full max-w-4xl h-auto">
            {/* Background layers */}
            <defs>
              <linearGradient id="topGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(168, 85, 247, 0.3)" />
                <stop offset="100%" stopColor="rgba(168, 85, 247, 0.1)" />
              </linearGradient>
              <linearGradient id="middleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.25)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0.08)" />
              </linearGradient>
              <linearGradient id="bottomGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(109, 40, 217, 0.2)" />
                <stop offset="100%" stopColor="rgba(109, 40, 217, 0.05)" />
              </linearGradient>
            </defs>

            {/* Bottom Layer - Blockchain */}
            <g>
              <polygon
                points="150,450 400,550 650,450 400,350"
                fill="url(#bottomGradient)"
                stroke="rgba(109, 40, 217, 0.5)"
                strokeWidth="2"
              />

              {/* Main Title */}
              <text
                x="400"
                y="440"
                textAnchor="middle"
                className="fill-purple-300 text-lg font-semibold"
                dy="0.3em"
                transform="rotate(0 400 440)"
              >
                Blockchain Layer
              </text>

              {/* Subtitle */}
              <text
                x="400"
                y="470"
                textAnchor="middle"
                className="fill-purple-200 text-sm opacity-75"
                dy="0.3em"
                transform="rotate(0 400 470)"
              >
                Ethereum, Polygon, Arbitrum
              </text>
            </g>

            {/* Connecting lines (Middle → Top) */}
            <line x1="175" y1="200" x2="100" y2="80" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="375" y1="200" x2="350" y2="80" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="575" y1="200" x2="600" y2="80" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="2" strokeDasharray="5,5" />

            {/* Middle Layer - APIs & Smart Contracts */}
            <g>
              {/* Left box */}
              <polygon points="100,250 250,300 250,200 100,150" fill="url(#middleGradient)" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2" />
              <text x="175" y="225" textAnchor="middle" className="fill-purple-200 text-sm font-semibold" dy="0.3em" transform="rotate(20 175 225)">
                APIs
              </text>

              {/* Center box */}
              <polygon points="300,250 450,300 450,200 300,150" fill="url(#middleGradient)" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2" />
              <text x="375" y="225" textAnchor="middle" className="fill-purple-200 text-sm font-semibold" dy="0.3em" transform="rotate(20 375 225)">
                Smart Contracts
              </text>

              {/* Right box */}
              <polygon points="500,250 650,300 650,200 500,150" fill="url(#middleGradient)" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2" />
              <text x="575" y="225" textAnchor="middle" className="fill-purple-200 text-sm font-semibold" dy="0.3em" transform="rotate(20 575 225)">
                Validators
              </text>
            </g>

            {/* Connecting lines (Bottom → Middle) */}
            <line x1="250" y1="450" x2="175" y2="250" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="400" y1="450" x2="375" y2="250" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="550" y1="450" x2="575" y2="250" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="2" strokeDasharray="5,5" />

            {/* Top Layer - Applications */}
            <g>
              {/* Left app box */}
              <polygon points="50,80 150,120 150,40 50,0" fill="url(#topGradient)" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="2" />
              <text x="100" y="60" textAnchor="middle" className="fill-purple-100 text-xs font-semibold" dy="0.3em" transform="rotate(20 100 60)">
                Dashboard
              </text>

              {/* Center app box */}
              <polygon points="300,80 400,120 400,40 300,0" fill="url(#topGradient)" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="2" />
              <text x="350" y="60" textAnchor="middle" className="fill-purple-100 text-xs font-semibold" dy="0.3em" transform="rotate(20 350 60)">
                Bidding
              </text>

              {/* Right app box */}
              <polygon points="550,80 650,120 650,40 550,0" fill="url(#topGradient)" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="2" />
              <text x="600" y="60" textAnchor="middle" className="fill-purple-100 text-xs font-semibold" dy="0.3em" transform="rotate(20 600 60)">
                Reputation
              </text>
            </g>

            {/* Glow effect */}
            <circle cx="400" cy="300" r="350" fill="none" stroke="rgba(168, 85, 247, 0.05)" strokeWidth="1" />
          </svg>
        </div>

        {/* Feature points */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <div className="text-3xl mb-3">🔐</div>
            <h3 className="text-xl font-semibold text-white mb-2">Secure Smart Contracts</h3>
            <p className="text-gray-400">Battle-tested contracts on Ethereum ecosystem</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-2">Scalable Architecture</h3>
            <p className="text-gray-400">Deploy on L2 networks for high throughput</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <div className="text-3xl mb-3">🌍</div>
            <h3 className="text-xl font-semibold text-white mb-2">Multi-Chain</h3>
            <p className="text-gray-400">Deploy across Ethereum, Polygon, and more</p>
          </div>
        </div>
      </div>
    </section>
  )
}
