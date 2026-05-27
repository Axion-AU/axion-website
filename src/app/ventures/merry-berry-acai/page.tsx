
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Lightbulb,
  Users,
  Target,
  FileCheck,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

export default function MerryBerryAcaiPage() {
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
            Case Study: Merry Berry Açaí
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From student project to a study in motivation and remote
            collaboration.
          </p>
          <div className="flex justify-center flex-wrap gap-2">
            <Badge variant="secondary">Case Study</Badge>
            <Badge variant="outline">Teamwork</Badge>
            <Badge variant="outline">Motivation</Badge>
            <Badge variant="outline">Lessons Learned</Badge>
          </div>
        </header>

        <section className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground max-w-none">
          <p className="lead">
            A uni project. Everyone was busy. Nobody was getting paid. The app got built
            but the team fell apart in the middle. Classic.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-10">
            What happened
          </h2>
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="text-accent" />
                A Test of Intrinsic Motivation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                The team was fully remote, with members balancing coursework,
                part-time jobs, and personal commitments. With no external
                funding and no formal manager, the project depended entirely on
                intrinsic motivation and peer accountability.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-10">
            What it taught
          </h2>
          <Card className="bg-card/50 border-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Lightbulb className="text-accent" />
                The Need for Structure and Incentives
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                The project highlighted a universal truth: when working in
                remote or volunteer environments, clear structure and aligned
                incentives are as important as technical skill. Even talented
                contributors lose momentum without shared ownership, measurable
                progress, and a strong feedback loop.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-10">
            What changed
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="bg-card/50">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-muted rounded-full">
                    <Target className="w-7 h-7 text-accent" />
                  </div>
                </div>
                <CardTitle>Aligned Motivation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Every contributor, from designer to data engineer, understands
                  their stake and outcome.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-muted rounded-full">
                    <FileCheck className="w-7 h-7 text-accent" />
                  </div>
                </div>
                <CardTitle>Accountability by Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Lightweight systems for tracking progress and recognition
                  ensure follow-through without micromanagement.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-muted rounded-full">
                    <Zap className="w-7 h-7 text-accent" />
                  </div>
                </div>
                <CardTitle>Autonomy within Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Contributors have freedom to build, but within a transparent
                  framework that keeps momentum steady.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="text-center pt-8">
          <Button asChild size="lg">
            <Link href="/approach">Explore Our Approach</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
