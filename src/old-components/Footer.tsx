// components/Footer.tsx

import { Instagram, Linkedin, Facebook, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto text-center space-y-10">

        {/* Disclaimer */}
        <p className="text-sm text-gray-500 leading-relaxed max-w-3xl mx-auto">
          We respect your privacy. Any information you provide will only be used to respond to your inquiry. Results mentioned on this page are examples and may vary depending on your audience, engagement, and effort. This page is for informational purposes and does not guarantee income.
        </p>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2026 Zubaa Limited. All rights reserved.
        </p>

        {/* Social Section */}
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Follow us on
          </p>

          <div className="flex justify-center gap-8">

            <a
              href="https://www.instagram.com/zubaamedia/"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              <Instagram size={22} />
            </a>

            <a
              href="https://www.linkedin.com/company/zubaamedia"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="https://web.facebook.com/israelakhuetie1"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              <Facebook size={22} />
            </a>

          </div>
        </div>

        {/* Email */}
        <div className="flex justify-center items-center gap-2 text-gray-400">
          <Mail size={16} />
          <a
            href="mailto:hello@zubaamedia.com"
            className="hover:text-white transition"
          >
            hello@zubaamedia.com
          </a>
        </div>

      </div>
    </footer>
  )
}