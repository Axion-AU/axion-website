import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NexusVenturePage() {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-16 md:py-24">
      <Button asChild variant="outline" className="mb-8">
        <Link href="/ventures">
          <ArrowLeft className="mr-2" />
          Back to Ventures
        </Link>
      </Button>

      <div className="space-y-8">
        <header className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-accent">
            Nexus
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A partnership-first financial operating system designed for couples.
          </p>
          <div className="flex justify-center flex-wrap gap-2">
            <Badge variant="outline">FinTech</Badge>
            <Badge variant="outline">Wellness</Badge>
            <Badge variant="outline">B2C</Badge>
          </div>
        </header>

        <div className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground max-w-none">
          <p className="lead">
            Nexus solves a real, persistent problem: managing money together
            shouldn’t be a source of anxiety or friction. Couples today rely
            on tools that are either siloed, confusing, or punitive. Nexus
            flips that model.
          </p>

          <div className="grid md:grid-cols-3 gap-8 my-12">
            <div className="p-6 rounded-lg bg-card/50 border border-border/50">
              <h3 className="text-lg font-semibold font-headline text-foreground mb-2">
                Collaborative by Design
              </h3>
              <p>
                A gamified “Co-op System” makes progress, savings, and rewards a
                shared, motivating experience.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card/50 border border-border/50">
              <h3 className="text-lg font-semibold font-headline text-foreground mb-2">
                Clarity & Autonomy
              </h3>
              <p>
                Personal accounts remain fully sovereign, while shared finances
                operate under dual-consent governance (“Our Accords”),
                eliminating guesswork.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card/50 border border-border/50">
              <h3 className="text-lg font-semibold font-headline text-foreground mb-2">
                Adaptive Guidance
              </h3>
              <p>
                Progressive stages and personalized recommendations help couples
                grow financially without shame or rigidity.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold font-headline text-foreground text-center">The Opportunity</h2>
          <p>
            We’ve designed Nexus to build trust, reduce friction, and enable
            thriving financial lives — all while positioning the venture for
            sustainable growth and strong market differentiation. We are
            currently seeking a capital and network co-founder to help us launch
            and scale this vision.
          </p>
        </div>
        <div className="text-center pt-8">
            <Button asChild size="lg">
                <Link href="/collaborate">Partner with Us</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
