import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const ventures = [
  {
    name: 'Nexus',
    slug: 'nexus',
    description:
      'A financial wellness application designed for couples. Nexus aims to simplify shared finances, promote transparency, and help partners achieve their financial goals together.',
    status: 'Active',
    tags: ['FinTech', 'Wellness', 'B2C'],
  },
  {
    name: 'SPARC',
    slug: null,
    description:
      'An internal AI-native development engine and force multiplier. SPARC is the proprietary platform we use to rapidly prototype, build, and scale our ventures, embedding intelligence from day one.',
    status: 'Internal Tool',
    tags: ['AI', 'Development', 'Internal Tool'],
  },
  {
    name: 'MunchRun',
    slug: null,
    description:
      "A food delivery logistics platform. The lessons learned from MunchRun's operational challenges informed our current focus on scalable, software-centric ventures.",
    status: 'Archived',
    tags: ['Logistics', 'FoodTech', 'Lessons Learned'],
  },
  {
    name: 'MagnetLab',
    slug: null,
    description:
      "A B2B marketing automation tool from a previous venture of the founder. MagnetLab's journey taught us valuable insights into go-to-market strategies and the importance of deep customer integration.",
    status: 'Previous Venture',
    tags: ['SaaS', 'Marketing', 'Lessons Learned'],
  },
];

export default function VenturesPage() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-16 md:py-24">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
          Our Ventures
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          A portfolio of current projects and past explorations that shape our
          strategic evolution.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ventures.map((venture) => (
          <Card key={venture.name} className="flex flex-col bg-card/50">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl font-headline">
                  {venture.name}
                </CardTitle>
                <Badge
                  variant={
                    venture.status === 'Active' ? 'default' : 'secondary'
                  }
                  className={
                    venture.status === 'Active'
                      ? 'bg-accent text-accent-foreground'
                      : ''
                  }
                >
                  {venture.status}
                </Badge>
              </div>
              <CardDescription>
                <div className="flex flex-wrap gap-2 mt-2">
                  {venture.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{venture.description}</p>
            </CardContent>
            <CardFooter>
              {venture.slug ? (
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/ventures/${venture.slug}`}>Learn More</Link>
                </Button>
              ) : (
                <Button variant="outline" className="w-full" disabled>
                  Learn More
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
