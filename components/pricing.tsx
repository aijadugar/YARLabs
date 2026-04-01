'use client'

export default function PricingSection() {
  const plans = [
    {
      name: 'Testnet Plan',
      price: '₹999',
      period: '/ year',
      description: 'Perfect for testing and development',
      features: [
        'Runs on Sepolia Testnet',
        'Full system access',
        'Ideal for testing',
      ],
      highlight: '₹1000 can power lakhs of transactions',
      cta: 'Get Started',
      featured: false,
    },
    {
      name: 'Growth Plan',
      price: '₹14,999',
      period: '/ year',
      description: 'For production organizations',
      features: [
        'Runs on Polygon / Arbitrum',
        'Real blockchain usage',
        'Scalable system',
      ],
      highlight: 'Run your entire organization at negligible cost',
      cta: 'Start Free Trial',
      featured: true,
      badge: 'Most Popular',
    },
    {
      name: 'Enterprise Plan',
      price: '₹49,999+',
      period: '/ year',
      description: 'For mission-critical systems',
      features: [
        'Runs on Ethereum Mainnet',
        'Custom infrastructure',
        'Maximum trust',
      ],
      highlight: 'Built for millions to billions of transactions',
      cta: 'Contact Sales',
      featured: false,
    },
  ]

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400">
            Choose the plan that scales with your organization
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group rounded-2xl transition-all duration-300 ${plan.featured
                ? 'md:scale-105 ring-2 ring-purple-500/50'
                : ''
                }`}
            >
              {/* Card background */}
              <div
                className={`relative p-8 rounded-2xl h-full flex flex-col ${plan.featured
                  ? 'bg-gradient-to-br from-purple-500/20 via-purple-900/30 to-gray-900/20 border border-purple-400/40'
                  : 'bg-gradient-to-br from-purple-500/10 via-gray-900/40 to-purple-900/10 border border-purple-500/20 hover:border-purple-400/40'
                  }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-8 px-4 py-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

                {/* Highlight */}
                <div className="mb-6 p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <p className="text-sm text-purple-300 font-medium text-center">
                    {plan.highlight}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8 flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-purple-400 font-bold mt-1">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 font-semibold rounded-lg transition-all duration-300 ${plan.featured
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white hover:shadow-lg hover:shadow-purple-500/50'
                    : 'border-2 border-purple-500/30 text-purple-300 hover:border-purple-400/60 hover:bg-purple-500/10'
                    }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust section
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl mb-3">🔐</div>
            <h4 className="text-white font-semibold mb-2">Built on Ethereum Ecosystem</h4>
            <p className="text-gray-400">Deployed on the most secure and trusted blockchain network</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-3">✅</div>
            <h4 className="text-white font-semibold mb-2">Secure Smart Contracts</h4>
            <p className="text-gray-400">Battle-tested contracts audited by leading security firms</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-3">📈</div>
            <h4 className="text-white font-semibold mb-2">Scalable Architecture</h4>
            <p className="text-gray-400">Engineered to handle millions of transactions</p>
          </div>
        </div> */}
      </div>
    </section>
  )
}
