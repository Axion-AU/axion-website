import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, BrainCircuit, Goal } from 'lucide-react';

export default function AboutPage() {
  const abstractImage = PlaceHolderImages.find(
    (p) => p.id === 'about-abstract-1'
  );

  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-16 md:py-24">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
          Our Philosophy
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          We exist to build systems and ventures that eliminate inefficiency and
          unnecessary suffering.
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
              Our Mission
            </h3>
            <p className="text-muted-foreground">
              To launch scalable, ethical, and technically sophisticated
              startups that create meaningful value and drive progress.
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
              Iterative Learning
            </h3>
            <p className="text-muted-foreground">
              We embrace a cycle of building, measuring, and learning. Our
              strategy evolves with each venture, incorporating lessons learned
              to refine our approach.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-6">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-muted rounded-full">
                <BarChart className="h-8 w-8 text-accent" />
              </div>
            </div>
            <h3 className="text-xl font-semibold font-headline mb-2">
              Strategic Evolution
            </h3>
            <p className="text-muted-foreground">
              Our vision is long-term. We consolidate intellectual property and
              build foundational technologies that serve multiple ventures,
              creating a compounding effect.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold font-headline mb-4">
            The Founder's Vision
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              With extensive experience in building complex systems and a passion
              for ethical innovation, Axion's founder established the studio to
              create a more efficient and impactful way to launch startups.
            </p>
            <p>
              The vision is to move beyond the traditional "one-shot" startup
              model and instead build a portfolio of interconnected ventures
              that leverage a shared technological backbone. This approach
              de-risks individual projects and accelerates growth across the
              ecosystem.
            </p>
          </div>
        </div>
        {abstractImage && (
          <div className="rounded-lg overflow-hidden shadow-2xl shadow-primary/10">
            <Image
              src={abstractImage.imageUrl}
              alt={abstractImage.description}
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              data-ai-hint={abstractImage.imageHint}
            />
          </div>
        )}
      </div>
    </div>
  );
}
