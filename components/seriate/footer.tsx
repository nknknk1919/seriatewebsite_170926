export function Footer() {
  return (
    <footer className="bg-slate-900 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-bold text-white">Platform</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><a href="/" className="hover:text-white transition-colors">The Autoformulator</a></li>
              <li><a href="/#offerings" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="/#advantages" className="hover:text-white transition-colors">Core Advantages</a></li>
              <li><a href="/#applications" className="hover:text-white transition-colors">Applications</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><a href="/#team" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/publications" className="hover:text-white transition-colors">Research & Publications</a></li>
              <li><a href="/#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="lg:col-span-2 lg:text-right">
            <img src="/logo-white.png" alt="Seriate Innovations" className="h-10 w-auto inline-block mb-2" />
            <p className="mt-4 text-sm text-slate-400 lg:ml-auto lg:max-w-xs">
              Continuous plug-flow formulation systems. An IIT Bombay spin-out accelerating the future of multi-phase processing.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Seriate Innovations. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}