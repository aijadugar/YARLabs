'use client'

export default function DemoEmbed() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-gray-400">
            Experience the <span className="text-purple-400 font-semibold animate-pulse">
              YARLabs
            </span>{" "}
            platform with our live demo
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20">
          {/* Gradient border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 rounded-2xl opacity-20 blur" />

          {/* Demo container */}
          <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/60 backdrop-blur-sm p-1 rounded-2xl">
            <div className="relative bg-gray-950 rounded-xl overflow-hidden">
              {/* Demo header */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-purple-500/20 bg-gray-900/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-gray-400 ml-2">yarcoin.vercel.app</span>
              </div>

              {/* Embedded demo */}
              <div className="relative w-full h-[600px] overflow-hidden bg-gray-950">
                <div
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    transform: "scale(0.87)",
                    transformOrigin: "top left",
                    width: "117.6%",
                    height: "117.6%",
                  }}
                >
                  <iframe
                    src="https://yarcoin.vercel.app/"
                    className="w-full h-full border-none"
                    title="YARLabs Demo"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        {/* CTA below demo */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Ready to explore more? Start with your own instance or connect with our team to discuss your specific use case.
          </p>
          <button onClick={() => window.open("https://yarcoin.vercel.app/", "_blank")} className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105">
            Launch Your Demo
          </button>
        </div>
      </div>
    </section>
  )
}
