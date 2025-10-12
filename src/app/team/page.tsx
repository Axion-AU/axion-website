import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin, Twitter, UserPlus } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

export default function TeamPage() {
  const founderImage = PlaceHolderImages.find((p) => p.id === 'team-founder');

  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-16 md:py-24">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
          Our Team
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          A lean, focused team dedicated to building the future.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Founder Card */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-1">
          <CardContent className="p-6 text-center flex flex-col items-center">
            {founderImage && (
              <Avatar className="w-32 h-32 mb-4 border-4 border-accent">
                <AvatarImage
                  src={founderImage.imageUrl}
                  alt="Founder of Axion Ventures"
                  data-ai-hint={founderImage.imageHint}
                />
                <AvatarFallback>AV</AvatarFallback>
              </Avatar>
            )}
            <h3 className="text-xl font-semibold font-headline">The Founder</h3>
            <p className="text-sm text-accent">Visionary & Chief Architect</p>
            <p className="mt-4 text-sm text-muted-foreground">
              With a background in engineering and a drive for ethical
              innovation, the founder leads Axion's strategic and technical
              direction.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-accent">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent">
                <Linkedin size={20} />
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Placeholder Cards */}
        <Card className="flex flex-col justify-center items-center p-6 text-center bg-card/50 border-dashed">
          <Avatar className="w-32 h-32 mb-4">
            <Skeleton className="w-full h-full rounded-full" />
          </Avatar>
          <h3 className="text-xl font-semibold font-headline text-muted-foreground">
            Co-Founder
          </h3>
          <p className="text-sm text-muted-foreground">Marketing & Growth</p>
          <p className="mt-4 text-sm text-muted-foreground">
            Seeking a partner to lead go-to-market strategy and drive user
            adoption.
          </p>
        </Card>

        <Card className="flex flex-col justify-center items-center p-6 text-center bg-card/50 border-dashed">
          <div className="w-32 h-32 mb-4 rounded-full bg-muted flex items-center justify-center">
            <UserPlus className="w-16 h-16 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold font-headline">
            This could be you!
          </h3>
          <p className="mt-4 text-sm text-muted-foreground">
            We're looking for talented individuals to join our team.
          </p>
          <Button asChild variant="link" className="mt-2 text-accent">
            <Link href="/collaborate">Join Us</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
}
