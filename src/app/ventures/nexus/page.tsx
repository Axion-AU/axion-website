
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Gamepad2, ShieldCheck, HeartHandshake, Home, Scale, GitBranch, Target, BrainCircuit, Rocket } from 'lucide-react';
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const progression = [
  {
    stage: 'Crawl 🐛',
    goal: 'Establish foundational habits and learn money tracking basics.',
    features: 'Essentials Tracking, First Safety Net Sprint ($500–$1,000).',
  },
  {
    stage: 'Walk 🚶',
    goal: 'Build consistency, financial buffers, and find financial rhythm.',
    features: 'Full Program Buckets Engine, Automated Bill Decomposition.',
  },
  {
    stage: 'Run 🏃',
    goal: 'Accelerate wealth-building progress and handle complex decisions.',
    features: 'Pay Smoothing, Pledge Protocol, First Accords.',
  },
  {
    stage: 'Fly 🚀',
    goal: 'Achieve financial mastery and freedom, where money is a tool for strategy.',
    features: 'Long-Term Planning Tools, Scenario Simulator.',
  },
];

const budgetSplit = [
    { category: "Essentials", percentage: "50%", description: "Fixed and variable necessities (rent, bills, groceries)." },
    { category: "Growth", percentage: "25%", description: "Long-term wealth building, investments, and debt reduction." },
    { category: "Stability", percentage: "15%", description: "Emergency funds, bill buffers, and resilience reserves." },
    { category: "Rewards", percentage: "10%", description: "Guilt-free spending, date nights, and personal treats." }
]


export default function NexusVenturePage() {
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
            Nexus
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A personal-first, consent-driven financial operating system
            designed specifically for couples and partnerships.
          </p>
          <div className="flex justify-center flex-wrap gap-2">
            <Badge variant="outline">FinTech</Badge>
            <Badge variant="outline">Wellness</Badge>
            <Badge variant="outline">B2C</Badge>
          </div>
        </header>

        <section className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground max-w-none">
            <p className="lead">
                Nexus solves a real, persistent problem: managing money together
                shouldn’t be a source of anxiety or friction. It's built to be the central link where an individual's financial sovereignty connects with shared financial goals, helping couples grow wealth together while protecting what belongs to the individual.
            </p>
            <p>
                The core mission is to replace traditional banking systems, which are typically designed for individuals and often create friction, with a system built on clarity, collaboration, and resilience. The goal is to remove the ambiguity of money so couples can focus on life together.
            </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-10">
            The Nexus Constitution
          </h2>
          <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-semibold">
                <ShieldCheck className="mr-3 text-accent" /> Personal Sovereignty
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pl-10 text-base">
                A user's salary flows into a personal account first, treated as a cryptographically protected sanctuary. It is impossible for one partner to view the contents, balances, or transactions of the other's Personal Account. Money only moves to shared systems through explicit consent.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-semibold">
                <Target className="mr-3 text-accent" /> Clarity First
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pl-10 text-base">
                Nexus wages a "relentless war against ambiguity". It rejects vague "available balances", instead presenting the user with their true "Guilt-Free Spendable" balance—the calculated surplus after all known and budgeted obligations have been accounted for.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-semibold">
                <HeartHandshake className="mr-3 text-accent" /> Dual Consent Systems
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pl-10 text-base">
                All shared financial rules and major changes require explicit authorization from both partners. This collaborative rule-making is codified in the Digital Accords system.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl font-semibold">
                <Scale className="mr-3 text-accent" /> Anti-Coercion Framework
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pl-10 text-base">
                Safety is foundational, not optional. Features are designed to be hostile to financial abuse and difficult to weaponize. Protections include Silent Duress Signals, Time-Delayed Accords, and Staged Severance Protocols.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-10">
            The Four Engines of Nexus
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3"><GitBranch className="text-accent"/>The Resilience Engine</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Focused on building financial stability and breaking the paycheck-to-paycheck cycle. It creates buffers of time, cash flow, and safety.</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li>Automated Bill Decomposition</li>
                    <li>Pay Smoothing for irregular income</li>
                    <li>Automated Safety Net Journey</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3"><Gamepad2 className="text-accent"/>The Co-op System</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Turns financial management into a collaborative game. All progress is owned by the couple as a single unit, fostering teamwork.</p>
                 <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li>Shared XP & Couple Level</li>
                    <li>Budget Boss Challenge</li>
                    <li>Co-op Savings Sprints & GoalDrive</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3"><HeartHandshake className="text-accent"/>The Accords Hub</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Serves as the couple's digital constitution for money, providing a centralized system to automate shared agreements and prevent conflict.</p>
                 <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li>Formalized rules with triggers and actions</li>
                    <li>Surplus and Shortfall Accords</li>
                    <li>Emergency/Pledge Accords</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3"><Home className="text-accent"/>The Life Hub</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Provides command centers and interactive workflows (The Nexus Playbook) to help couples navigate major life events without regulated advice.</p>
                 <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li>Nexus HomeDrive for deposit tracking</li>
                    <li>CreditView for joint creditworthiness</li>
                    <li>Playbooks for major life milestones</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

         <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-10">
            The Nexus Way Budgeting Model
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">The system utilizes a budget framework known as The Nexus Way, which allocates funds into four strategic buckets following an optimal 50/25/15/10% split.</p>
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {budgetSplit.map((item) => (
                <Card key={item.category} className="bg-card/50 border-border/50">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold text-accent">{item.percentage}</CardTitle>
                        <CardDescription className="text-lg font-headline text-foreground">{item.category}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                        {item.description}
                    </CardContent>
                </Card>
            ))}
           </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-10">
            Progression Framework: Crawl, Walk, Run, Fly
          </h2>
          <Card className="bg-card/50">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Stage</TableHead>
                  <TableHead>Primary Goal</TableHead>
                  <TableHead>Key Features Unlocked</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {progression.map((item) => (
                  <TableRow key={item.stage}>
                    <TableCell className="font-medium font-headline">{item.stage}</TableCell>
                    <TableCell>{item.goal}</TableCell>
                    <TableCell>{item.features}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </section>

        <div className="text-center pt-8">
            <p className="text-lg text-muted-foreground mb-6">Nexus is poised for sustainable growth and strong market differentiation. We are seeking a capital and network co-founder to help us launch and scale this vision.</p>
          <Button asChild size="lg">
            <Link href="/collaborate">Partner with Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
