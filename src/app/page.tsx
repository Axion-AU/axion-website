import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full py-24 md:py-32 lg:py-48">
        {/* Subtle background element */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="container mx-auto max-w-screen-xl px-4 text-center">
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Building ventures that scale.
            </h1>
            <p className="text-2xl font-bold font-headline text-accent">
              Ethically. Intelligently. Together.
            </p>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Axion Ventures is a venture studio consolidating intellectual
              property for multiple startups. We build scalable, ethical, and
              technically sophisticated companies like Nexus from the
              ground up.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/ventures">
                  Explore Ventures <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/collaborate">Collaborate with Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
