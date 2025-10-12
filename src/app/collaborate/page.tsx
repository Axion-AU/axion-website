import { CollaborateForm } from "@/components/collaborate-form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function CollaboratePage() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
            Collaborate With Us
          </h1>
          <p className="text-lg text-muted-foreground">
            Axion Ventures is an early-stage venture studio, currently
            developing its flagship project, Nexus, and building a portfolio of
            high-impact startups.
          </p>
          <div className="space-y-4 text-muted-foreground">
            <p>
              As a founding collaborator, you have the opportunity to help
              define the future of our ventures and take a meaningful stake in
              their success. Our projects are intentionally incubated within
              Axion, allowing us to consolidate intellectual property, refine
              our products, and maximize impact before scaling commercially.
            </p>
            <h2 className="text-2xl font-semibold font-headline text-foreground pt-4">
              We're looking for a Capital and Network Co-founder
            </h2>
            <p>
              While we have deep technical expertise in-house, we are
              particularly interested in a partner who can:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-semibold text-foreground">
                  Access or provide funding:
                </span>{" "}
                To launch Axion and its ventures.
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  Market ideas effectively:
                </span>{" "}
                To secure adoption and drive user growth.
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  Partner strategically:
                </span>{" "}
                To scale our vision and build a powerful network.
              </li>
            </ul>
            <p>
              If you thrive on high-leverage opportunities, want to work in a studio environment where your contributions are amplified by smart systems, and believe in building ventures the right way, we would love to hear from you.
            </p>
          </div>
        </div>
        <div>
          <Card>
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
