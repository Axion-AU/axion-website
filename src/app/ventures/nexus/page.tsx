
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
          <p className="text-2xl font-semibold text-foreground/80">
            Your bank is built for One. Your life is built for Two.
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A financial wellness platform for couples that replaces guilt-driven budgeting with
            collaborative money management.
          </p>
          <div className="flex justify-center flex-wrap gap-2">
            <Badge variant="secondary">On Hold</Badge>
            <Badge variant="outline">FinTech</Badge>
            <Badge variant="outline">Wellness</Badge>
            <Badge variant="outline">B2C</Badge>
          </div>
        </header>

        <section className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground max-w-none">
            <p className="lead">
                Most couples fight about money. Not because they&apos;re bad at it — because
                the tools weren&apos;t built for two people. Banks are built for individuals.
                Budgeting apps are built for individuals. Every shared financial decision
                involves workarounds, screenshots, and arguments about whose version of the
                spreadsheet is right. Nexus is built for two.
            </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-10">
            The Constitution
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
            Four Engines
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
            The Budget Split
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">50/25/15/10. Essentials, growth, stability, guilt-free spending. In that order.</p>
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
            Crawl, Walk, Run, Fly
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
            <p className="text-lg text-muted-foreground mb-6">Nexus is on hold pending funding. The proof of concept is complete. If you&apos;re interested in backing it, get in touch.</p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
