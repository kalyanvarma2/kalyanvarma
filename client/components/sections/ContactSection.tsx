import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">
                      varmakalyan2@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+49 15510924124</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">
                      Schwerzstrasse 1, H no: 1602
                      <br />
                      70599 Stuttgart, Baden-Württemberg, Germany
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
              <h4 className="font-semibold text-foreground mb-2">
                Free Consultation
              </h4>
              <p className="text-sm text-muted-foreground">
                Offering free farmer consultation to support sustainable
                agriculture and honor those who feed the world.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">{t.contact.form.name}</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="mt-1"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">{t.contact.form.phone}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-1"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">{t.contact.form.email}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="message">{t.contact.form.message}</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="mt-1"
                  placeholder="Tell me about your agricultural needs and how I can help..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    {t.contact.form.submit}
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
