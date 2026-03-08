import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, User } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

const ventures = [
  {
    name: 'Zetto',
    tagline: 'The gym for your Japanese.',
    description:
      'A voice-first Japanese training app that measures spoken production in real time and progressively increases difficulty based on performance.',
    status: 'In Development',
    statusVariant: 'default' as const,
    tags: ['EdTech', 'Language Learning', 'Mobile'],
    href: '/ventures/zetto',
  },
  {
    name: 'Nexus',
    tagline: 'Your bank is built for One. Your life is built for Two.',
    description:
      'A financial wellness platform for couples that replaces guilt-driven budgeting with collaborative money management.',
    status: 'On Hold',
    statusVariant: 'secondary' as const,
    tags: ['FinTech', 'Wellness', 'B2C'],
    href: '/ventures/nexus',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full py-24 md:py-32 lg:py-48">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="container mx-auto max-w-screen-xl px-4 text-center">
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Build products that ship.
            </h1>
            <p className="text-2xl font-bold font-headline text-accent">
              One founder. One methodology. One venture at a time.
            </p>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Axion Ventures is a solo-founder venture studio powered by SPARC, a proprietary AI
              development methodology. Each venture targets a market where the existing solutions
              are lazy, extractive, or just bad.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/ventures">
                  Explore Ventures <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h2 className="text-3xl font-bold font-headline text-center mb-12">The Ventures</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ventures.map((venture) => (
              <Card key={venture.name} className="flex flex-col bg-card/50">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl font-headline">{venture.name}</CardTitle>
                    <Badge
                      variant={venture.statusVariant}
                      className={venture.status === 'In Development' ? 'bg-accent text-accent-foreground' : ''}
                    >
                      {venture.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-base italic text-foreground/70">
                    {venture.tagline}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {venture.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{venture.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={venture.href}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div className="flex flex-col items-start">
              <div className="p-4 bg-muted rounded-full mb-4">
                <Cpu className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold font-headline mb-4">SPARC</h2>
              <p className="text-muted-foreground">
                SPARC is a TDD-first AI development methodology using a multi-agent architecture.
                It turns a solo founder into a small team. PoliCRM was built in 48 hours with it.
                Zetto&apos;s entire spec suite — system prompt, onboarding flow, writing systems, branding,
                unit economics — was designed and documented in days, not months. The methodology is
                the competitive advantage.
              </p>
              <Button asChild variant="link" className="mt-4 px-0 text-accent">
                <Link href="/ventures/sparc">Learn about SPARC →</Link>
              </Button>
            </div>
            <div className="flex flex-col items-start">
              <div className="p-4 bg-muted rounded-full mb-4">
                <User className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold font-headline mb-4">The Founder</h2>
              <p className="text-muted-foreground">
                I&apos;m Ethan. I&apos;ve spent 13 years building systems — from retail operations to AI
                pipelines to political campaign infrastructure. I created SPARC because I wanted to
                build products at the speed and quality of a full team, without needing one. Axion
                is the vehicle. The ventures are the point.
              </p>
              <Button asChild variant="link" className="mt-4 px-0 text-accent">
                <Link href="/about">About Axion →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
