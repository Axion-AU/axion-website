import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Github, Linkedin, Twitter } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/ventures', label: 'Ventures' },
  { href: '/approach', label: 'Approach' },
  { href: '/collaborate', label: 'Collaborate' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-screen-2xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-8 w-8 text-accent" />
              <span className="font-bold text-xl font-headline">
                Axion Ventures
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Building ventures that scale. Ethically. Intelligently. Together.
            </p>
          </div>

          <div className="md:col-start-3 flex flex-col gap-4">
            <h3 className="font-semibold font-headline text-lg">Navigate</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold font-headline text-lg">Connect</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://x.com/axionventuresau"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/axion-ventures-au"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/axionventures"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="py-6 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Axion Ventures. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
