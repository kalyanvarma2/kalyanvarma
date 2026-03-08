import { Layout } from "@/components/Layout";
import { CalendarDays, MapPin } from "lucide-react";

const events = [
  {
    title: "Global Crop Protection Summit",
    date: "2026-04-18",
    location: "Berlin, Germany",
    summary:
      "Focused on resistance management frameworks, digital agronomy, and regulatory transitions.",
  },
  {
    title: "Integrated Pest Management Conference",
    date: "2026-05-07",
    location: "Hyderabad, India",
    summary:
      "Brings together researchers and field advisors around practical IPM case studies.",
  },
  {
    title: "Biologicals and RNAi Forum",
    date: "2026-05-22",
    location: "Virtual",
    summary:
      "Explores biological crop protection innovations, pipelines, and stewardship strategy.",
  },
];

export default function Events() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Events / Conferences</h1>
        <p className="text-muted-foreground mb-8">
          Upcoming events relevant to crop protection research and advisory.
        </p>

        <div className="space-y-5">
          {events.map((event) => (
            <article key={event.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h2 className="text-xl font-semibold mb-3">{event.title}</h2>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4" />{new Date(event.date).toLocaleDateString()}</span>
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" />{event.location}</span>
              </div>
              <p className="text-muted-foreground">{event.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
}
