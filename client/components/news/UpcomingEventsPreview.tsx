import { EventItem } from "@/lib/news";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface UpcomingEventsPreviewProps {
  events: EventItem[];
}

export function UpcomingEventsPreview({ events }: UpcomingEventsPreviewProps) {
  return (
    <section className="mt-16">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Upcoming Conferences and Symposia
          </h2>
          <p className="text-muted-foreground mt-2">
            Curated conferences, workshops, and summits shaping crop protection decisions.
          </p>
        </div>
        <Button asChild variant="outline">
          <Link to="/events">View all events</Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {events.map((event) => (
          <article
            key={event.id}
            className="rounded-xl border border-border bg-card p-5 shadow-sm"
          >
            <h3 className="font-semibold text-foreground mb-2">{event.name}</h3>
            <div className="space-y-1 text-sm text-muted-foreground mb-3">
              <p className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
              </p>
              <p className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {event.location}
              </p>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{event.topic}</p>
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary text-sm font-medium"
            >
              Official event page <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
