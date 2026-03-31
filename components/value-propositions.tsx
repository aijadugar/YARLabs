'use client'

export default function ValuePropositions() {
  const values = [
    {
      icon: '📊',
      title: 'Transparent Reputation',
      description: 'Build verifiable reputation systems that stakeholders can trust. Every transaction is immutable and auditable.',
    },
    {
      icon: '🤝',
      title: 'Fair Bidding System',
      description: 'Run transparent auctions and bidding processes where all participants have equal access to information.',
    },
    {
      icon: '🔒',
      title: 'Tamper-Proof Records',
      description: 'Store critical records on blockchain ensuring they cannot be altered, deleted, or manipulated.',
    },
  ]

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Why YARLabs?
          </h2>
          <p className="text-xl text-gray-400">
            Unlock the power of blockchain-based trust systems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 via-gray-900/50 to-purple-900/10 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur" />

              <div className="relative z-10">
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
