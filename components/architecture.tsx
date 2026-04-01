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

        <div className="flex justify-center">
          <svg viewBox="0 0 800 600" className="w-full max-w-4xl h-auto">

            {/* Gradients */}
            <defs>
              <linearGradient id="topGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(168, 85, 247, 0.35)" />
                <stop offset="100%" stopColor="rgba(168, 85, 247, 0.1)" />
              </linearGradient>
              <linearGradient id="midGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0.08)" />
              </linearGradient>
              <linearGradient id="bottomGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(109, 40, 217, 0.25)" />
                <stop offset="100%" stopColor="rgba(109, 40, 217, 0.05)" />
              </linearGradient>
            </defs>

            {/* ================= BOTTOM LAYER ================= */}
            <g>
              <polygon
                points="200,420 400,500 600,420 400,340"
                fill="url(#bottomGradient)"
                stroke="rgba(109, 40, 217, 0.6)"
                strokeWidth="2"
              />
              <text
                x="400"
                y="420"
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-purple-200 text-lg font-semibold"
              >
                Blockchain Layer
              </text>
              <text
                x="400"
                y="450"
                textAnchor="middle"
                className="fill-purple-300 text-sm opacity-80"
              >
                Ethereum · Polygon · Arbitrum
              </text>
            </g>

            {/* ================= CONNECTORS ================= */}
            <line x1="300" y1="340" x2="300" y2="260" stroke="rgba(168,85,247,0.3)" strokeDasharray="6,6" />
            <line x1="400" y1="340" x2="400" y2="260" stroke="rgba(168,85,247,0.3)" strokeDasharray="6,6" />
            <line x1="500" y1="340" x2="500" y2="260" stroke="rgba(168,85,247,0.3)" strokeDasharray="6,6" />

            {/* ================= MIDDLE LAYER ================= */}
            <g>
              {/* APIs */}
              <polygon
                points="240,260 340,300 340,220 240,180"
                fill="url(#midGradient)"
                stroke="rgba(139,92,246,0.6)"
                strokeWidth="2"
              />
              <text
                x="290"
                y="240"
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-purple-200 text-sm font-semibold"
              >
                APIs
              </text>

              {/* Smart Contracts */}
              <polygon
                points="350,260 450,300 450,220 350,180"
                fill="url(#midGradient)"
                stroke="rgba(139,92,246,0.6)"
                strokeWidth="2"
              />
              <text
                x="400"
                y="240"
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-purple-200 text-sm font-semibold"
              >
                Smart Contracts
              </text>

              {/* Validators */}
              <polygon
                points="460,260 560,300 560,220 460,180"
                fill="url(#midGradient)"
                stroke="rgba(139,92,246,0.6)"
                strokeWidth="2"
              />
              <text
                x="510"
                y="240"
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-purple-200 text-sm font-semibold"
              >
                Validators
              </text>
            </g>

            {/* ================= CONNECTORS TO TOP ================= */}
            <line x1="290" y1="180" x2="290" y2="120" stroke="rgba(168,85,247,0.3)" strokeDasharray="6,6" />
            <line x1="400" y1="180" x2="400" y2="120" stroke="rgba(168,85,247,0.3)" strokeDasharray="6,6" />
            <line x1="510" y1="180" x2="510" y2="120" stroke="rgba(168,85,247,0.3)" strokeDasharray="6,6" />

            {/* ================= TOP LAYER ================= */}
            <g>
              {/* Dashboard */}
              <polygon
                points="240,120 320,150 320,90 240,60"
                fill="url(#topGradient)"
                stroke="rgba(168,85,247,0.7)"
                strokeWidth="2"
              />
              <text
                x="280"
                y="115"
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-purple-100 text-xs font-semibold"
              >
                Dashboard
              </text>

              {/* Bidding */}
              <polygon
                points="360,120 440,150 440,90 360,60"
                fill="url(#topGradient)"
                stroke="rgba(168,85,247,0.7)"
                strokeWidth="2"
              />
              <text
                x="400"
                y="115"
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-purple-100 text-xs font-semibold"
              >
                Bidding
              </text>

              {/* Reputation */}
              <polygon
                points="480,120 560,150 560,90 480,60"
                fill="url(#topGradient)"
                stroke="rgba(168,85,247,0.7)"
                strokeWidth="2"
              />
              <text
                x="520"
                y="115"
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-purple-100 text-xs font-semibold"
              >
                Reputation
              </text>
            </g>

            {/* Glow */}
            <circle cx="400" cy="300" r="300" fill="none" stroke="rgba(168,85,247,0.05)" />
          </svg>
        </div>

        {/* Features (unchanged but slightly improved hover) */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 hover:border-purple-400 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-3">🔐</div>
            <h3 className="text-xl font-semibold text-white mb-2">Secure Smart Contracts</h3>
            <p className="text-gray-400">Battle-tested contracts on Ethereum ecosystem</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 hover:border-purple-400 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-2">Scalable Architecture</h3>
            <p className="text-gray-400">Deploy on L2 networks for high throughput</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 hover:border-purple-400 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-3">🌍</div>
            <h3 className="text-xl font-semibold text-white mb-2">Multi-Chain</h3>
            <p className="text-gray-400">Deploy across Ethereum, Polygon, and more</p>
          </div>
        </div>
      </div>
    </section>
  )
}