import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Cpu, Wand, FileCode, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const results = [
  {
    title: 'PoliCRM',
    description:
      'A political campaign CRM built in 48 hours. End-to-end: spec, architecture, implementation, and deployment. It also shipped with three auth bugs that didn\'t surface until a staffer tried to log in from an iPad the night before launch. Fixed at 1am. SPARC builds fast — you still debug like a human.',
  },
  {
    title: 'Zetto Spec Suite',
    description:
      "Zetto's entire specification — system prompt, onboarding flow, writing systems, branding, unit economics — was designed and documented in days, not months.",
  },
  {
    title: 'Axion Ventures Website',
    description:
      'This website was architected and built using SPARC, demonstrating its capability to produce clean, modern, production-ready web applications.',
  },
  {
    title: 'PokerBo Refactor',
    description:
      'A complete architectural refactor of a complex existing project, orchestrated by SPARC. Greenfield and legacy codebases both.',
    link: 'https://github.com/finneh4240/pokerbo',
  },
];

export default function SparcVenturePage() {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-16 md:py-24">
      <Button asChild variant="outline" className="mb-8">
        <Link href="/ventures">
          <ArrowLeft className="mr-2" />
          Back to Ventures
        </Link>
      </Button>

      <div className="space-y-16">
        <header className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-accent">
            SPARC
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            (Specification, Planning, Auto-Coding, Refinement, Completion)
          </p>
          <div className="flex justify-center flex-wrap gap-2">
            <Badge variant="outline">AI-Native</Badge>
            <Badge variant="outline">TDD-First</Badge>
            <Badge variant="outline">Internal Methodology</Badge>
          </div>
        </header>

        <section className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground max-w-none">
          <p className="lead">
            SPARC is a TDD-first AI development methodology using a multi-agent architecture.
            It turns a solo founder into a small team. Not a polished team — a fast, sometimes
            scrappy team that ships real things while others are still writing specs. The
            methodology is the competitive advantage.
          </p>
        </section>

        <section>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="bg-card/50">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-muted rounded-full">
                    <Wand className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <CardTitle>Multi-Agent Architecture</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Specialised agents handle specification, planning, coding, refinement, and
                  completion. Each agent has a narrow, well-defined role.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-muted rounded-full">
                    <Cpu className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <CardTitle>TDD-First</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Tests are written before implementation. Quality is built in from the first line
                  of code, not bolted on at the end.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-muted rounded-full">
                    <FileCode className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <CardTitle>Model Agnostic</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Supports Gemini, OpenAI, Anthropic, and others. Dynamic model switching for
                  planning and execution based on the task.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <div className="grid md:grid-cols-2 gap-8">
            {results.map((result) => (
              <Card key={result.title} className="bg-card/50 flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {result.title}
                    {result.link && (
                      <a
                        href={result.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-muted-foreground">
                  <p>{result.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="text-center pt-8">
          <p className="text-lg text-muted-foreground mb-6">
            SPARC is not a product. It is the methodology behind every Axion venture.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
