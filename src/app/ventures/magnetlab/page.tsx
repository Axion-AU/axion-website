
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, GitBranch, Lightbulb, User, Users } from 'lucide-react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

export default function MagnetLabVenturePage() {
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
            MagnetLab
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            An early-stage AI automation startup that served as the incubator for the SPARC engine.
          </p>
          <div className="flex justify-center flex-wrap gap-2">
            <Badge variant="secondary">Previous Venture</Badge>
            <Badge variant="outline">SaaS</Badge>
            <Badge variant="outline">AI</Badge>
            <Badge variant="outline">Lessons Learned</Badge>
          </div>
        </header>

        <section className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground max-w-none">
          <p className="lead">
            MagnetLab was an entrepreneurial venture co-founded by Axion's founder, Ethan Cornwill. Although it did not achieve commercial viability, it was a critical step in the journey, providing foundational lessons in team-building, strategy, and technology that directly inform Axion's current model.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-10">
            Mission & Structure
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3"><Users className="text-accent"/>Dual Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>The venture had two primary goals: to build a sustainable business and to serve as a critical portfolio piece to help its early-career team members break into the technology industry.</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3"><GitBranch className="text-accent"/>Technology &amp; Strategy</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>As Co-Founder & Lead Engineer, Ethan architected the company's core proprietary asset: the SPARC development engine. The business strategy was to use SPARC as an internal tool to rapidly build software products for clients.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-10">
            Outcome and Strategic Learnings
          </h2>
          <Card className="bg-card/50 border-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-3"><Lightbulb className="text-accent"/>The Importance of a Cohesive Vision</CardTitle>
              <CardDescription>
                The most critical lesson from MagnetLab was the danger of foundational fractures in a founding team.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                The venture eventually stalled due to an irreconcilable misalignment in strategic vision between the co-founders. One path favored pivoting toward building proprietary AI solutions, while the other focused on a digital agency model.
              </p>
              <p>
                This experience solidified a core principle of Axion Ventures: **a cohesive vision and a defined business plan must exist *before* bringing on partners.** This prevents wasted effort and ensures everyone is rowing in the same direction from day one.
              </p>
               <p className="font-semibold text-foreground">
                The SPARC framework, having been developed independently, was retained by the founder as a personal asset and became a cornerstone of the Axion Ventures studio model.
              </p>
            </CardContent>
          </Card>
        </section>

        <div className="text-center pt-8">
          <p className="text-lg text-muted-foreground mb-6">
            The lessons from MagnetLab are not a footnote; they are embedded in the DNA of how we build companies today.
          </p>
          <Button asChild size="lg">
            <Link href="/approach">Explore Our Approach</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
