'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-purple-500/20 bg-gradient-to-b from-gray-950/50 to-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4"><span className="text-purple-400 font-semibold animate-pulse">
              YARLabs
            </span>{" "}</h3>
            <p className="text-gray-400 text-sm">
              Building transparent, tamper-proof reputation systems.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Demo</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">API Docs</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Docs</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Guides</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-500/10 mb-8" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <div>© {currentYear} YARLabs. All rights reserved.</div>

          {/* Social links */}
          <div className="flex gap-6">
            <a href="#" className="hover:text-purple-400 transition-colors" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s-4-1-6-4.5" />
              </svg>
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.824 0-9.747h3.554v1.381c.43-.664 1.202-1.61 2.929-1.61 2.139 0 3.744 1.398 3.744 4.402v5.574zM5.337 9.432c-1.144 0-1.915-.758-1.915-1.71 0-.955.77-1.71 1.954-1.71 1.185 0 1.915.755 1.94 1.71 0 .952-.755 1.71-1.979 1.71zm1.581 11.02H3.756V9.685h3.162v10.767zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>

          {/* Legal links */}
          <div className="flex gap-6">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
