import Link from 'next/link';
import { Logo } from '@/components/logo';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/ventures', label: 'Ventures' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://x.com/axionventuresau', label: 'X (Twitter)', symbol: '𝕏' },
  { href: 'https://www.linkedin.com/company/axion-ventures-au', label: 'LinkedIn', symbol: 'in' },
  { href: 'https://github.com/axion-au', label: 'GitHub', symbol: 'gh' },
];

export function Footer() {
  return (
    <footer
      className="border-t bg-[#EFECE8]"
      style={{ borderColor: 'rgba(28, 25, 23, 0.08)' }}
    >
      <div className="container mx-auto max-w-screen-xl px-4">

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-14">

          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <Logo className="h-6 w-6 flex-shrink-0" />
              <span
                className="text-xs uppercase tracking-[0.08em] text-[#1C1917]"
                style={{ fontFamily: '"DM Mono", monospace' }}
              >
                Axion Ventures
              </span>
            </Link>
            <p
              className="text-base text-[#1C1917] leading-relaxed max-w-[220px]"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif', fontStyle: 'italic' }}
            >
              Every venture starts with something broken.
            </p>
          </div>

          {/* Navigate column */}
          <div className="flex flex-col gap-4">
            <span
              className="text-[10px] uppercase tracking-[0.10em] text-[#78716C]"
              style={{ fontFamily: '"DM Mono", monospace' }}
            >
              Navigate
            </span>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#44403C] transition-colors duration-200 hover:text-[#2563EB]"
                  style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontWeight: 300 }}
                >
                  {link.label} →
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect column */}
          <div className="flex flex-col gap-4">
            <span
              className="text-[10px] uppercase tracking-[0.10em] text-[#78716C]"
              style={{ fontFamily: '"DM Mono", monospace' }}
            >
              Connect
            </span>
            <div className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-sm text-[#44403C] transition-colors duration-200 hover:text-[#2563EB]"
                  style={{ fontFamily: '"DM Mono", monospace' }}
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="py-5 border-t flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderColor: 'rgba(28, 25, 23, 0.08)' }}
        >
          <p
            className="text-[11px] text-[#A8A29E]"
            style={{ fontFamily: '"DM Mono", monospace' }}
          >
            © {new Date().getFullYear()} Axion Ventures. All rights reserved. · ABN: 31 279 957 127
          </p>
        </div>
      </div>
    </footer>
  );
}
