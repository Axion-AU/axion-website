import { CollaborateForm } from "@/components/collaborate-form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BrainCircuit, Handshake, Lightbulb, Info } from "lucide-react";

export default function CollaboratePage() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
              Become a Founding Partner
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Zetto is in active development. Nexus is on hold pending funding. SPARC is the engine behind both. If you want to build something in this orbit, keep reading.
            </p>
          </div>
          
          <Card className="bg-card/50 border-accent">
            <CardHeader className="flex-row items-center gap-4">
              <Info className="w-8 h-8 text-accent"/>
              <div className="flex flex-col">
                <CardTitle>A Ground-Floor Opportunity</CardTitle>
                <CardDescription>Note: Axion is a pre-startup, pre-funding solo venture.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">This is your chance to get in at the very beginning. As a founding collaborator, you will play a critical role in shaping the company, its culture, and its ventures from the ground up, with a meaningful stake in its success.</p>
            </CardContent>
          </Card>

          <div>
             <h2 className="text-2xl font-semibold font-headline text-foreground mb-6">
              How You Can Get Involved
            </h2>
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-muted rounded-md mt-1">
                        <Lightbulb className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-foreground">Bring Your Venture Idea</h3>
                        <p className="text-muted-foreground">Have a concept for a high-impact startup? We can provide the technical architecture, strategic framework, and operational support to build it with you.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-muted rounded-md mt-1">
                        <Handshake className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-foreground">Help Build Nexus</h3>
                        <p className="text-muted-foreground">Our flagship project, Nexus, is redefining financial wellness for couples. We need collaborators to help us with strategy, marketing, and user growth.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="p-3 bg-muted rounded-md mt-1">
                        <BrainCircuit className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-foreground">Join as a Strategic Partner</h3>
                        <p className="text-muted-foreground">Every venture needs more than just code. We're seeking partners with expertise in funding, go-to-market strategy, and network building. Programming experience is not required.</p>
                    </div>
                </div>
            </div>
          </div>
          
          <p className="text-lg text-foreground pt-4 border-t border-border/40">
            If any of this resonates, get in touch.
          </p>
        </div>
        <div>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">
                Get in Touch
              </CardTitle>
              <CardDescription>
                Fill out the form below to start a conversation about becoming a foundational partner.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CollaborateForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
