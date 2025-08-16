export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-serif font-bold text-xl text-white mb-4">ClarityLabs™</div>
            <p className="text-sm leading-relaxed mb-4">
              Science-backed supplements designed for optimal bioavailability and effectiveness.
            </p>
            <div className="space-y-1 text-sm">
              <p>support@getclaritylabs.com</p>
              <p>Pasadena, CA 91101</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Products</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-teal transition-colors">
                Methyl•15™ (15mg)
              </a>
              <a href="#" className="block hover:text-teal transition-colors">
                NeuroStack™ (5mg + B12 + P-5-P)
              </a>
              <a href="#" className="block hover:text-teal transition-colors">
                StartLow™ (1mg)
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <div className="space-y-2 text-sm">
              <p>Customer Service Hours:</p>
              <p>Mon-Fri: 9AM-6PM PST</p>
              <p>Sat: 10AM-4PM PST</p>
              <div className="pt-2 space-y-1">
                <a href="#" className="block hover:text-teal transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="block hover:text-teal transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block hover:text-teal transition-colors">
                  Refund Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700 pt-8">
          <div className="text-xs text-stone-400 leading-relaxed">
            <p className="mb-2">
              * These statements have not been evaluated by the Food and Drug Administration. This product is not
              intended to diagnose, treat, cure, or prevent any disease.
            </p>
            <p>© 2024 ClarityLabs™. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
