import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mic, TrendingUp, BookOpen, Layers } from 'lucide-react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const differentiators = [
  {
    icon: Mic,
    title: 'Voice-First',
    description:
      'Production over recognition. Zetto trains you to speak Japanese, not just recognise it. Acoustic telemetry provides millisecond response latency as the primary learning signal.',
  },
  {
    icon: TrendingUp,
    title: 'CWRF Progressive Overload',
    description:
      'Crawl → Walk → Run → Fly. Difficulty increases progressively based on real performance, not arbitrary streaks or time-in-app.',
  },
  {
    icon: BookOpen,
    title: 'Radical-First Kanji',
    description:
      "A Chinese pedagogical approach to kanji: learn radicals first, build characters from components. Faster retention, less rote memorisation.",
  },
  {
    icon: Layers,
    title: 'No Paywall. Ever.',
    description:
      'Same features at every tier. Paid plans unlock higher limits, not locked features. Everyone gets the full product.',
  },
];

export default function ZettoVenturePage() {
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
            Zetto
          </h1>
          <p className="text-2xl font-semibold text-foreground/80">
            The gym for your Japanese.
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A voice-first Japanese training app that measures spoken production in real time and
            progressively increases difficulty based on performance.
          </p>
          <div className="flex justify-center flex-wrap gap-2">
            <Badge variant="default" className="bg-accent text-accent-foreground">
              In Development
            </Badge>
            <Badge variant="outline">EdTech</Badge>
            <Badge variant="outline">Language Learning</Badge>
            <Badge variant="outline">Mobile</Badge>
          </div>
        </header>

        <section className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground max-w-none">
          <p className="lead">
            Your language app is lying to you. Streaks don&apos;t mean fluency. Recognition
            doesn&apos;t mean production. Zetto measures what actually matters: can you speak
            Japanese, right now, under pressure?
          </p>
          <p>
            Zetto is built for adults who want to actually speak Japanese &mdash; not collect badges.
            Android + PWA first, iOS later. Bootstrapping toward launch.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-10">
            How it works
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item) => (
              <Card key={item.title} className="bg-card/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <item.icon className="w-6 h-6 text-accent" />
                    <span className="text-xl font-headline">{item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center">
          <div className="max-w-2xl mx-auto space-y-4 text-muted-foreground">
            <p>
              In active development. Full spec — system prompt, onboarding flow, writing systems,
              branding, unit economics — designed and documented using SPARC in days, not months.
            </p>
            <p>
              No launch date until it&apos;s ready.
            </p>
          </div>
        </section>

        <div className="text-center pt-8">
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
