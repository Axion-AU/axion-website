import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { BrainCircuit, Goal, Wrench } from 'lucide-react';

export default function AboutPage() {
  const founderImage = PlaceHolderImages.find((p) => p.id === 'team-founder');

  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-16 md:py-24">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
          About Axion
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Every venture starts with something broken. A product that patronizes its users. A system
          that punishes the people it should serve. A market that confuses complexity for value.
          Axion builds the fix.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-24 text-center">
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-6">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-muted rounded-full">
                <Goal className="h-8 w-8 text-accent" />
              </div>
            </div>
            <h3 className="text-xl font-semibold font-headline mb-2">
              The Mission
            </h3>
            <p className="text-muted-foreground">
              Build products that ship, scale, and actually solve the problem they claim to. One
              founder, one methodology, one venture at a time.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-6">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-muted rounded-full">
                <BrainCircuit className="h-8 w-8 text-accent" />
              </div>
            </div>
            <h3 className="text-xl font-semibold font-headline mb-2">
              The Studio
            </h3>
            <p className="text-muted-foreground">
              Axion Ventures is a solo-founder venture studio powered by SPARC. The studio model
              exists because good ideas don&apos;t need large teams to prove themselves &mdash; they need the
              right tools and one person who can think, build, and ship.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-6">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-muted rounded-full">
                <Wrench className="h-8 w-8 text-accent" />
              </div>
            </div>
            <h3 className="text-xl font-semibold font-headline mb-2">
              The Ventures
            </h3>
            <p className="text-muted-foreground">
              Nexus is rebuilding how couples manage money. Zetto is rebuilding how people learn
              Japanese. The common thread: products that respect the people who use them.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-bold font-headline mb-4">
            The Founder
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I&apos;m Ethan. I&apos;ve spent 13 years building systems &mdash; from retail operations to AI
              pipelines to political campaign infrastructure.
            </p>
            <p>
              I created SPARC because I wanted to build products at the speed and quality of a full
              team, without needing one. Axion is the vehicle. The ventures are the point.
            </p>
          </div>
        </div>
        {founderImage && (
          <div className="lg:col-span-2 rounded-lg overflow-hidden shadow-2xl shadow-primary/10">
            <Image
              src={founderImage.imageUrl}
              alt={founderImage.description}
              width={600}
              height={600}
              className="w-full h-auto object-cover"
              data-ai-hint={founderImage.imageHint}
            />
          </div>
        )}
      </div>
    </div>
  );
}
