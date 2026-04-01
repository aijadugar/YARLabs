'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-20" />
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="40" y="40" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1.5" fill="rgba(168, 85, 247, 0.2)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Build Trust.{' '}
          <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 bg-clip-text text-transparent">
            Scale Reputation.
          </span>{' '}
          Power Collaboration.
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
          <span className="text-purple-400 font-semibold animate-pulse">
            YARLabs
          </span>{" "}
          enables organizations to run transparent, tamper-proof reputation and bidding systems on blockchain.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button onClick={() => window.open("https://yarcoin.vercel.app/", "_blank")} className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105">
            Book a Demo
          </button>
          <button onClick={() => window.open("https://yarcoin.vercel.app/", "_blank")} className="px-8 py-4 border-2 border-purple-500 text-purple-300 hover:text-purple-200 font-semibold rounded-xl transition-all duration-300 hover:bg-purple-500/10">
            Explore Platform
          </button>
        </div>
      </div>
    </section>
  )
}
