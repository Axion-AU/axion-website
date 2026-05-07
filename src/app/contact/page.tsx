import { ContactForm } from '@/components/contact-form';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-16 md:py-24">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
          Say hello.
        </h1>
      </div>
      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-semibold font-headline text-foreground">
            Where to find me
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-muted rounded-md">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">General Inquiries</p>
                <a
                  href="mailto:hello@axionventures.com.au"
                  className="text-accent hover:underline"
                >
                  hello@axionventures.com.au
                </a>
              </div>
            </div>
            {/* <div className="flex items-start gap-4">
              <div className="p-3 bg-muted rounded-md">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">Phone (Optional)</h3>
                <p className="text-muted-foreground">Mon-Fri, 9am-5pm</p>
                <a
                  href="tel:+1234567890"
                  className="text-accent hover:underline"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div> */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-muted rounded-md">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-muted-foreground">Remote First</p>
                <p className="text-accent">Global</p>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-border/40">
            <h3 className="font-semibold mb-4 text-foreground">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Twitter"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-headline">
                Send us a message
              </CardTitle>
              <CardDescription>I&apos;ll get back to you.</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
