import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, Handshake, Scaling } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full py-24 md:py-32 lg:py-48">
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
              Axion Ventures is an AI-native venture studio consolidating
              intellectual property for multiple startups. We build scalable, ethical, and
              technically sophisticated companies from the ground up.
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

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-muted rounded-full mb-4">
                  <Scaling className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold font-headline mb-2">What We Build</h2>
              <p className="text-muted-foreground">
                We focus on high-impact software ventures that are scalable, ethical, and built with technical sophistication. Our primary project, Nexus, is a testament to our commitment to solving real-world problems through elegant design.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-muted rounded-full mb-4">
                  <Cpu className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold font-headline mb-2">SPARC Engine</h2>
              <p className="text-muted-foreground">
                Our proprietary AI-native development engine, SPARC, acts as a force multiplier. It allows us to rapidly prototype, build, and scale ventures, embedding intelligence and efficiency from day one.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-muted rounded-full mb-4">
                  <Handshake className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold font-headline mb-2">Our Approach</h2>
              <p className="text-muted-foreground">
                We hire talent directly into the studio, build dedicated project teams, and spin out ventures when they're ready to scale. This model ensures IP consolidation and gives founders meaningful equity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
