import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Cpu,
  Layers,
  Users,
  Route,
  Orbit,
  ShieldCheck,
  RefreshCw,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const METHODOLOGY_URL = 'https://transportscore.fusionparty.org.au/methodology';
const LIVE_URL = 'https://transportscore.fusionparty.org.au';

const engineering = [
  {
    icon: Cpu,
    title: 'Full-Corpus GTFS Processing',
    description:
      'A Rust pipeline ingests the complete PTV GTFS feed and scores every stop in the network, train, tram, and bus alike, on a single 0 to 100 scale. Nothing is sampled or estimated from a subset of routes.',
  },
  {
    icon: Layers,
    title: 'Suburb-Level Aggregation',
    description:
      'Averaging every stop score in a suburb sounds reasonable and produces misleading numbers: a handful of well-served stops near a station can flatten a suburb that is otherwise poorly served. TIE weights aggregation by where stops actually sit relative to where people live, so a suburb score reflects lived accessibility rather than stop density.',
  },
  {
    icon: Users,
    title: 'Dasymetric Population Modelling',
    description:
      'Suburb boundaries include parks, industrial land, and reserves that no one lives on. TIE applies dasymetric modelling to redistribute population within a suburb according to residential land use, then weights transit scores toward where residents concentrate.',
  },
  {
    icon: Route,
    title: 'Route-Level Scoring',
    description:
      'Beyond area scores, TIE scores individual routes. That makes it possible to diagnose why a suburb underperforms: a specific bus route running infrequently, a tram line with poor weekend coverage, rather than a single opaque number.',
  },
  {
    icon: Orbit,
    title: 'Orbital Accessibility',
    description:
      'Most transit accessibility models assume every trip radiates toward the CBD. TIE also measures orbital accessibility, suburb-to-suburb connections that skip the city centre, which is how most short trips actually work.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy Architecture',
    description:
      'Address lookups happen entirely in the browser via OpenStreetMap Nominatim. No address is ever transmitted to or stored on a server. The backend only sees an aggregate count of lookups per suburb.',
  },
  {
    icon: RefreshCw,
    title: 'Reproducibility',
    description:
      'Every score is computed from a versioned, timestamped GTFS snapshot, and the full scoring methodology is published so any number on the site can be independently checked and reproduced.',
    link: METHODOLOGY_URL,
    linkLabel: 'Read the methodology',
  },
];

export default function TieVenturePage() {
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
            Transport Inequality Engine
          </h1>
          <p className="text-2xl font-semibold text-foreground/80">
            Every stop scored. Every suburb measured.
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A full-corpus scoring engine for Melbourne public transport, built on the complete
            PTV GTFS dataset and deployed publicly as a live accessibility tool.
          </p>
          <div className="flex justify-center flex-wrap gap-2">
            <Badge variant="default" className="bg-accent text-accent-foreground">
              Live — in production
            </Badge>
            <Badge variant="outline">Civic Tech</Badge>
            <Badge variant="outline">Open Data</Badge>
            <Badge variant="outline">GIS</Badge>
          </div>
        </header>

        <section>
          <Card className="bg-card/50 border-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                Live deployment
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                TIE is live as{' '}
                <a
                  href={LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline inline-flex items-center gap-1"
                >
                  Fusion Transport Score
                  <ExternalLink size={14} />
                </a>. TIE is licensed to Fusion Party Australia and deployed under their branding
                as a public transport advocacy tool. Axion retains the underlying IP and
                methodology.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground max-w-none">
          <p className="lead">
            Every Melbourne public transport stop scored 0 to 100 from the full PTV GTFS corpus,
            with a fully reproducible{' '}
            <a
              href={METHODOLOGY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              published methodology
            </a>{' '}
            and client-side geocoding, so no address ever touches a server.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-10">
            How it works
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {engineering.map((item) => (
              <Card key={item.title} className="bg-card/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <item.icon className="w-6 h-6 text-accent" />
                    <span className="text-xl font-headline">{item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-3">
                  <p>{item.description}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline text-sm inline-flex items-center gap-1"
                    >
                      {item.linkLabel}
                      <ExternalLink size={14} />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="text-center pt-8 space-y-4">
          <p className="text-muted-foreground">
            Source available at{' '}
            <a
              href="https://github.com/axion-au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              github.com/axion-au
            </a>.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
