"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";

const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/ventures", label: "Ventures" },
];

const companyNavLinks = [
  { href: "/about", label: "About Us" },
  { href: "/approach", label: "Approach" },
  { href: "/culture", label: "Culture" },
  { href: "/team", label: "Team" },
];

const contactLink = { href: "/contact", label: "Contact" };

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const allNavLinks = [...mainNavLinks, ...companyNavLinks, contactLink];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-6 w-6 text-accent" />
          <span className="hidden font-bold sm:inline-block font-headline">
            Axion Ventures
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-accent",
                pathname === link.href
                  ? "text-accent font-semibold"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "flex items-center gap-1 transition-colors hover:text-accent px-0",
                  companyNavLinks.some((link) => pathname.startsWith(link.href))
                    ? "text-accent font-semibold"
                    : "text-muted-foreground",
                  "hover:bg-transparent"
                )}
              >
                Company <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {companyNavLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      pathname === link.href ? "font-semibold text-accent" : ""
                    )}
                  >
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            key={contactLink.href}
            href={contactLink.href}
            className={cn(
              "transition-colors hover:text-accent",
              pathname === contactLink.href
                ? "text-accent font-semibold"
                : "text-muted-foreground"
            )}
          >
            {contactLink.label}
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button asChild className="hidden md:inline-flex" variant="outline">
            <Link href="/collaborate">Collaborate</Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="mt-6 flex flex-col gap-y-4">
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Logo className="h-6 w-6 text-accent" />
                  <span className="font-bold font-headline">Axion Ventures</span>
                </Link>
                <nav className="flex flex-col gap-y-2">
                  {allNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "py-2 text-lg font-medium transition-colors hover:text-accent",
                        pathname === link.href
                          ? "text-accent"
                          : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild variant="outline" className="mt-4">
                    <Link href="/collaborate" onClick={() => setIsMobileMenuOpen(false)}>Collaborate</Link>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
