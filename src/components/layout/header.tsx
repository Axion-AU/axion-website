"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/ventures", label: "Ventures" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-[#F8F6F3]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8F6F3]/80"
      style={{ borderColor: "rgba(28, 25, 23, 0.08)" }}
    >
      <div className="container flex h-14 max-w-screen-xl items-center px-4">
        {/* Wordmark */}
        <Link href="/" className="mr-8 flex items-center gap-3">
          <Logo className="h-6 w-6 flex-shrink-0" />
          <span
            className="hidden sm:inline-block font-mono text-xs uppercase tracking-[0.08em] text-[#1C1917]"
            style={{ fontFamily: '"DM Mono", monospace' }}
          >
            Axion Ventures
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm md:flex flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors duration-200 text-sm",
                pathname === link.href
                  ? "text-[#1C1917]"
                  : "text-[#78716C] hover:text-[#2563EB]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu */}
        <div className="flex flex-1 items-center justify-end gap-2 md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#1C1917] hover:bg-[#EFECE8]"
                aria-label="Toggle Menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] bg-[#F8F6F3] border-l"
              style={{ borderColor: "rgba(28, 25, 23, 0.08)" }}
            >
              <div className="mt-6 flex flex-col gap-y-6">
                <Link
                  href="/"
                  className="flex items-center gap-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Logo className="h-6 w-6" />
                  <span
                    className="font-mono text-xs uppercase tracking-[0.08em] text-[#1C1917]"
                    style={{ fontFamily: '"DM Mono", monospace' }}
                  >
                    Axion Ventures
                  </span>
                </Link>
                <nav className="flex flex-col gap-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "py-2 text-base transition-colors duration-200",
                        pathname === link.href
                          ? "text-[#1C1917]"
                          : "text-[#78716C] hover:text-[#2563EB]"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
