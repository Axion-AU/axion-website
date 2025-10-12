import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, BrainCircuit, Goal } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const founderImage = PlaceHolderImages.find((p) => p.id === 'team-founder');

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

      <div className="grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-bold font-headline mb-4">
            About the Founder
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <Link href="/team" className="text-accent font-semibold hover:underline">
                Ethan Cornwill
              </Link>{" "}
              is a systems thinker, technologist, and entrepreneur dedicated to
              building scalable, ethical, and technically sophisticated
              startups. He is the founder of Axion Ventures, a venture studio
              designed to consolidate intellectual property and incubate
              high-impact ventures from the ground up.
            </p>
            <p>
              Ethan’s career spans over a decade of strategic problem-solving,
              from operational leadership in high-volume retail to pioneering
              AI-driven technology solutions. He is the creator of SPARC, a
              proprietary AI-native development engine that amplifies the
              capabilities of solo founders and small teams, and the founder of
              Nexus, a financial wellness platform built for couples.
            </p>
            <p>
              A lifelong advocate for evidence-based innovation, Ethan applies a
              rigorous, data-driven approach to entrepreneurship and product
              development. His ventures are characterized by elegant technical
              design, ethical frameworks, and a focus on adoption and
              real-world impact.
            </p>
            <p>
              At Axion Ventures, he fosters a collaborative environment where
              talented partners can co-create the next generation of
              transformative startups.
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