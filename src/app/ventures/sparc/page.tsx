
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Cpu, Wand, Scaling, FileCode, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

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
            SPARC Engine
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            (Specification, Planning, Auto-Coding, Refinement, Completion)
          </p>
          <div className="flex justify-center flex-wrap gap-2">
            <Badge variant="outline">AI-Native</Badge>
            <Badge variant="outline">Development Engine</Badge>
            <Badge variant="outline">Internal Tool</Badge>
          </div>
        </header>

        <section className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground max-w-none">
            <p className="lead">
                SPARC is the proprietary AI-native development engine that serves as the technological core of the Axion venture studio. It is designed to maximize development velocity and provides crucial proof of competence in systems architecture, adhering strictly to the external strategy of showcasing clear results.
            </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-10">
            Definition and Impact
          </h2>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-muted-foreground mb-8">
                SPARC is an orchestrated system that utilizes specialized AI agents to automate the end-to-end software development lifecycle. Its primary function is as a successful internal force multiplier, enabling a solo developer to achieve the leverage and output of a small development team. This system is reported to reduce development time by over 70%.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-10">
            Proprietary Architecture and Rigor
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <Card className="bg-card/50">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-muted rounded-full">
                    <Wand className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <CardTitle>Advanced Prompt Engineering</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>A major refactor implemented advanced frameworks like COSTAR, CRISPE, Chain-of-Thought (CoT), and ReAct (Reason + Act) to ensure high performance.</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-muted rounded-full">
                    <Cpu className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <CardTitle>Model Agnostic Framework</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Supports providers like Gemini, OpenAI, and Anthropic, allowing for dynamic model switching for planning and execution.</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                 <div className="flex justify-center mb-4">
                  <div className="p-4 bg-muted rounded-full">
                    <FileCode className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <CardTitle>Systems Excellence</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Capable of architecting and generating the complete, logically structured file structure for complex, full-stack applications.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
            <h2 className="text-3xl font-bold font-headline text-center mb-10">
                Proven Results
            </h2>
            <Card className="bg-card/50">
                <CardContent className="p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <p className="text-lg text-muted-foreground">
                        SPARC has been successfully utilized to generate and deploy two complete full-stack websites from the ground up: the MagnetLab corporate site and the personal portfolio, `finneh.xyz`. This demonstrates that the technology is effective, ready for production use, and a direct output of expertise in systems thinking.
                    </p>
                </CardContent>
            </Card>
        </section>

        <div className="text-center pt-8">
            <p className="text-lg text-muted-foreground mb-6">SPARC is a core asset that amplifies our ability to build and scale ventures efficiently.</p>
          <Button asChild size="lg">
            <Link href="/collaborate">Partner with Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
