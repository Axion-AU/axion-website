
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
            Zero commission for restaurants. 100% of tips to drivers. Transparent
            pricing for customers. The ethics were genuine. The economics were also
            genuinely unworkable — the fair-pay constraints and a viable business
            model turned out to be incompatible. That was that.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-10">
            The model
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
            Why it stopped
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
                The planning was solid. The technical design was solid. The
                problem was that the core ethical constraint — genuinely fair pay
                for drivers — and a viable margin structure couldn&apos;t coexist. Not
                a fixable problem. An irresolvable one.
              </p>
              <p>
                The discipline to walk away from that, rather than quietly
                compromise the thing that made it worth building, is something
                worth keeping.
              </p>
            </CardContent>
          </Card>
        </section>

        <div className="text-center pt-8">
          <Button asChild size="lg">
            <Link href="/collaborate">Partner with Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
