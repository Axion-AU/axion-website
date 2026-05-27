import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Users, Briefcase, Rocket, Milestone } from 'lucide-react';

export default function ApproachPage() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-16 md:py-24">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
          How it works
        </h1>
      </div>

      <div className="relative">
        {/* Dotted line connecting the cards */}
        <div className="absolute left-1/2 -translate-x-1/2 top-12 h-[calc(100%-6rem)] w-px border-l-2 border-dashed border-border/70 md:left-8 md:top-1/2 md:h-px md:w-[calc(100%-16rem)] md:-translate-y-1/2 md:border-t-2"></div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Step 1 */}
          <Card className="bg-card/50 border-border/50 text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-muted rounded-full relative">
                  <Users className="h-8 w-8 text-accent" />
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                </div>
              </div>
              <CardTitle className="text-2xl font-headline">
                Hire into Axion First
              </CardTitle>
              <CardDescription>
                Build a versatile, studio-aligned team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                All collaborators are Axion employees or contractors first. They
                contribute across multiple initiatives, ensuring IP is
                centralized and efforts are aligned with the studio’s core
                vision.
              </p>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="bg-card/50 border-border/50 text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-muted rounded-full relative">
                  <Briefcase className="h-8 w-8 text-accent" />
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                </div>
              </div>
              <CardTitle className="text-2xl font-headline">
                Project-Specific Teams
              </CardTitle>
              <CardDescription>
                Focused execution with studio flexibility.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Each venture has a dedicated team, but employment contracts
                remain with Axion. This structure allows us to define clear
                roles while retaining the flexibility to reallocate talent as
                priorities evolve.
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="bg-card/50 border-border/50 text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-muted rounded-full relative">
                  <Rocket className="h-8 w-8 text-accent" />
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                </div>
              </div>
              <CardTitle className="text-2xl font-headline">
                Venture Spin-Off
              </CardTitle>
              <CardDescription>
                Launch and scale with shared ownership.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                When a project is ready, it incorporates as a new company. Team
                members can become founders with equity, while Axion retains a
                controlling stake, ensuring a mutually beneficial partnership for
                long-term growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
