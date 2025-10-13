
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, HandCoins, User, Utensils } from 'lucide-react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const differentiators = [
  {
    stakeholder: 'Restaurants',
    icon: Utensils,
    feature:
      'Zero Commission Fees. Instead, MunchRun charges a small markup (2-3%) on menu items that is visible to customers. A tiered advertising package and a one-off $200 onboarding fee for training and hardware were also planned revenue streams.',
    advantage:
      'Capitalizing on the high commission fee dissatisfaction (which can reach 30% on existing platforms). Empowers restaurants to retain a larger share of earnings.',
  },
  {
    stakeholder: 'Drivers',
    icon: HandCoins,
    feature:
      'Fair Compensation Model: Dynamic pricing algorithm (base fee + distance + time/demand multipliers). 100% of tips go to the driver. Also included a Tiered Minimum Earnings Guarantee (MEG) and Excessive Wait Time Compensation.',
    advantage:
      'Attracts drivers seeking transparent pay structures and addresses gig economy concerns about fair treatment by providing a stable income floor and compensating for wait times.',
  },
  {
    stakeholder: 'Customers',
    icon: User,
    feature:
      'Transparent Pricing: Clear breakdown of delivery fees and the small markup.',
    advantage:
      'Builds trust with customers who value convenience and appreciate supporting local businesses and ethical platforms.',
  },
];

export default function MunchRunVenturePage() {
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
            MunchRun
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Ethical Food Delivery Platform
          </p>
          <div className="flex justify-center flex-wrap gap-2">
            <Badge variant="secondary">Archived</Badge>
            <Badge variant="outline">Logistics</Badge>
            <Badge variant="outline">FoodTech</Badge>
            <Badge variant="outline">Lessons Learned</Badge>
          </div>
        </header>

        <section className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground max-w-none">
          <p className="lead">
            MunchRun was conceptualized as an ethical delivery service aiming to
            disrupt the market by creating a fairer, more transparent, and
            sustainable ecosystem for drivers, restaurants, and customers.
          </p>
          <p>
            The mission was to be equitable for everyone involved, holding the
            vision of becoming a leading platform known for its fair practices
            and exceptional service. The core values underpinning MunchRun were
            Fairness, Transparency, Sustainability, and Innovation.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-10">
            Strategic Differentiators
          </h2>
          <Card className="bg-card/50">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Stakeholder</TableHead>
                  <TableHead>Key Feature / Model</TableHead>
                  <TableHead>Strategic Advantage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {differentiators.map((item) => (
                  <TableRow key={item.stakeholder}>
                    <TableCell className="font-medium font-headline">
                      <div className="flex items-center gap-2">
                        <item.icon className="h-5 w-5 text-accent" />
                        {item.stakeholder}
                      </div>
                    </TableCell>
                    <TableCell>{item.feature}</TableCell>
                    <TableCell>{item.advantage}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-10">
            The Reason for Stalling (A Key Learning)
          </h2>
          <Card className="bg-card/50 border-accent">
            <CardHeader>
              <CardTitle>Calibrated Effort in Action</CardTitle>
              <CardDescription>
                Knowing when to pivot is as important as knowing when to
                persevere.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                While MunchRun was a successful exercise in planning and
                technical design, the project stalled due to an "irresolvable
                conflict between a core ethical principle and a viable business
                model."
              </p>
              <p>
                This outcome highlights a core principle of Axion Ventures:
                **Calibrated Effort**. It's the discipline to know when to
                abandon a project where fundamental objectives (like ethical
                fairness) conflict too severely with operational reality. This
                experience was instrumental in shifting our focus toward proving
                capability through the SPARC engine, rather than relying solely
                on early venture success.
              </p>
            </CardContent>
          </Card>
        </section>

        <div className="text-center pt-8">
          <p className="text-lg text-muted-foreground mb-6">
            The lessons from MunchRun directly inform our robust,
            software-first approach at Axion Ventures today.
          </p>
          <Button asChild size="lg">
            <Link href="/collaborate">Partner with Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
