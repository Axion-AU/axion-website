
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
import { Separator } from '@/components/ui/separator';

const ventures = [
  {
    name: 'Nexus',
    category: 'Current Incubating Ventures',
    slug: 'nexus',
    description:
      'A financial wellness application designed for couples. Nexus aims to simplify shared finances, promote transparency, and help partners achieve their financial goals together.',
    status: 'Active',
    tags: ['FinTech', 'Wellness', 'B2C'],
  },
  {
    name: 'SPARC',
    category: 'Internal Tools',
    slug: 'sparc',
    description:
      'An internal AI-native development engine and force multiplier. SPARC is the proprietary platform we use to rapidly prototype, build, and scale our ventures, embedding intelligence from day one.',
    status: 'Internal Tool',
    tags: ['AI', 'Development', 'Internal Tool'],
  },
  {
    name: 'MunchRun',
    category: 'Previous Ventures',
    slug: 'munchrun',
    description:
      "A food delivery logistics platform. The lessons learned from MunchRun's operational challenges informed our current focus on scalable, software-centric ventures.",
    status: 'Archived',
    tags: ['Logistics', 'FoodTech', 'Lessons Learned'],
  },
  {
    name: 'MagnetLab',
    category: 'Previous Ventures',
    slug: 'magnetlab',
    description:
      "A previous AI automation venture co-founded by Axion's founder. MagnetLab served as the incubator for the SPARC engine and provided a critical lesson: a cohesive vision must exist before bringing on co-founders.",
    status: 'Previous Venture',
    tags: ['SaaS', 'AI', 'Lessons Learned'],
  },
];

const ventureCategories = [
  "Current Incubating Ventures",
  "Internal Tools",
  "Previous Ventures"
]

export default function VenturesPage() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-16 md:py-24">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
          Our Ventures
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          A portfolio of current projects, internal tools, and past explorations that shape our
          strategic evolution.
        </p>
      </div>
      
      <div className="space-y-16">
        {ventureCategories.map(category => {
          const categoryVentures = ventures.filter(v => v.category === category);
          if (categoryVentures.length === 0) return null;

          return (
            <div key={category}>
              <h2 className="text-3xl font-bold font-headline mb-8 text-center">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categoryVentures.map((venture) => (
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
          )
        })}
      </div>
    </div>
  );
}
