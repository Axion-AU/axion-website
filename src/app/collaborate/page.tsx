import { CollaborateForm } from "@/components/collaborate-form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BrainCircuit, Handshake, Lightbulb } from "lucide-react";

export default function CollaboratePage() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
              Collaborate With Us
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Axion Ventures is a venture studio building scalable, ethical, and technically sophisticated companies. We're looking for partners with a builder mentality to join us.
            </p>
          </div>
          
          <div className="space-y-4 text-muted-foreground">
            <p>
              As a founding collaborator, you have the opportunity to help
              define the future of our ventures and take a meaningful stake in
              their success. Our projects are intentionally incubated within
              Axion, allowing us to consolidate intellectual property, refine
              our products, and maximize impact before scaling commercially.
            </p>
          </div>

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
            If you thrive on high-leverage opportunities and believe in building ventures the right way, we would love to hear from you.
          </p>
        </div>
        <div>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">
                Get in Touch
              </CardTitle>
              <CardDescription>
                Fill out the form below to start a conversation.
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
