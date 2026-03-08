import { useMemo, useState } from "react";
import { Layout } from "@/components/Layout";
import { CalendarDays, ExternalLink, MapPin } from "lucide-react";
import { getUpcomingEvents } from "@/lib/services/newsService";

export default function Events() {
  const [region, setRegion] = useState<string>("all");
  const [topic, setTopic] = useState<string>("all");
  const events = getUpcomingEvents();

  const regions = useMemo(
    () => ["all", ...new Set(events.map((event) => event.region))],
    [events],
  );
  const topics = useMemo(
    () => ["all", ...new Set(events.map((event) => event.topic))],
    [events],
  );

  const filteredEvents = events.filter((event) => {
    const regionMatch = region === "all" || event.region === region;
    const topicMatch = topic === "all" || event.topic === topic;
    return regionMatch && topicMatch;
  });

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Events / Conferences</h1>
        <p className="text-muted-foreground mb-8">
          Conferences, symposia, workshops, and summits relevant to crop protection. Filters are included and ready for future expansion.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <label className="text-sm text-muted-foreground">
            Region
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="mt-1 w-full rounded-md border border-border bg-background p-2 text-foreground"
            >
              {regions.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm text-muted-foreground">
            Topic
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="mt-1 w-full rounded-md border border-border bg-background p-2 text-foreground"
            >
              {topics.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="space-y-5">
          {filteredEvents.map((event) => (
            <article key={event.id} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
              <p className="text-sm text-muted-foreground mb-2">{event.organizer}</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4" />{new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}</span>
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" />{event.location}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
              <p className="text-sm text-foreground mb-3"><span className="font-medium">Topic:</span> {event.topic}</p>
              <a href={event.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                Official link <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
}
