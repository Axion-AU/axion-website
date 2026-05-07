
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  GitMerge,
  ShieldCheck,
  Users,
  Cpu,
  BookOpen,
  Scale,
  Hourglass,
  CheckCircle,
} from 'lucide-react';

const lessons = [
  {
    icon: GitMerge,
    title: ‘The MagnetLab Lesson’,
    content:
      ‘Bring people on before you have a clear vision and you don’t get a team. You get a committee. Alignment precedes acceleration.’,
  },
  {
    icon: ShieldCheck,
    title: 'The Nexus Lesson: Design for Trust, Not Just Engagement',
    content:
      'Financial technology, like human relationships, lives or dies on perceived safety. Every product decision must start with the question: “Could this feature ever harm trust?” Axion ventures follow a Constitutional Design framework—every system must protect user sovereignty, informed consent, and data dignity. We don’t just build intelligent products; we build trustworthy systems.',
  },
  {
    icon: Users,
    title: ‘The Merry Berry Lesson: Motivation and Accountability’,
    content:
      ‘In distributed teams, motivation can evaporate fast. The fix isn’t more check-ins — it’s being ruthless about who owns what. Every project has a Directly Responsible Individual. One person. Not a committee. Structure is what gives autonomy its power.’,
  },
  {
    icon: Cpu,
    title: ‘The QSR & Retail Lesson: Systems Build Resilience’,
    content:
      ‘I’ve opened stores at 5am with a team of two people where six were rostered. I’ve run a lunch rush where the POS went down, the supplier delivered the wrong order, and a staff member called in sick — all before 11am. What gets you through that isn’t grit, it’s the system you built on a slow Tuesday three weeks ago. Every repeatable process deserves a clear owner, a fallback plan, and measurable standards. Culture isn’t slogans. It’s the habit you run on autopilot when everything is on fire.’,
  },
];

const principles = [
    "Clarity is kindness. Every person deserves to know the why behind the work.",
    "Documentation by default. If it isn’t written down, it doesn’t exist.",
    "Transparency over perfection. We share process, not just polish.",
]

export default function CulturePage() {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-16 md:py-24">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
          Foundational Learnings
        </h1>
      </div>

      <div className="space-y-12">
        <section>
          <div className="grid md:grid-cols-2 gap-8">
            {lessons.map((lesson) => (
              <Card key={lesson.title} className="bg-card/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <lesson.icon className="w-6 h-6 text-accent" />
                    <span className="text-xl font-headline">{lesson.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{lesson.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center">
            <h2 className="text-3xl font-bold font-headline mb-8">What stuck.</h2>
             <Card className="bg-card/50 border-accent">
                <CardHeader>
                    <CardTitle className="text-2xl font-headline">Core Principles</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4 text-muted-foreground text-left max-w-2xl mx-auto">
                        {principles.map((principle, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                <span>{principle}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
             </Card>
        </section>

        <section className="text-center space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-card/50 text-left">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-xl font-headline"><Scale className="w-6 h-6 text-accent" />The Meta Lesson</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p>Every previous venture mistook speed for progress. Moving fast is only valuable if you're moving in the right direction. We learned that the hard way.</p>
                        <p>Ethical, intelligent, scalable — in that order.</p>
                    </CardContent>
                </Card>
                 <Card className="bg-card/50 text-left">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-xl font-headline"><Hourglass className="w-6 h-6 text-accent" />The Patience Principle</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p>We believe in earning conviction before acceleration. Speed creates motion; patience creates momentum.</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Build the system first, the team second.</li>
                            <li>Prove clarity before chasing capital.</li>
                            <li>Choose the right partners, not the first available ones.</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </section>
      </div>
    </div>
  );
}
