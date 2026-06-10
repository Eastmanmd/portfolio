import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { notePosts } from "@/lib/posts";
import { formatMonthYear } from "@/lib/date";

export const Route = createFileRoute("/notes")({
  head: () => ({
    meta: [
      { title: "Notes — Alex Chen" },
      { name: "description", content: "Field notes, reflections, book recommendations, and the occasional personal essay." },
      { property: "og:title", content: "Notes — Alex Chen" },
      { property: "og:description", content: "Field notes, reflections, and personal essays." },
    ],
  }),
  component: NotesIndex,
});

function NotesIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="max-w-5xl mx-auto px-6 py-20">
        <header className="mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">02 // Off-Duty Musings</p>
          <h1 className="font-[Lora] italic text-4xl md:text-6xl font-normal tracking-tight mb-6 leading-[1.1]" style={{ fontFamily: "'Lora', serif" }}>
            Field notes, slowly.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-pretty" style={{ fontFamily: "'Lora', serif", fontStyle: "italic" }}>
            Reflections, observations from the edges of science, the occasional book recommendation. Written without a deadline.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {notePosts.map((p) => (
            <Link
              key={p.slug}
              to="/notes/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col gap-4"
            >
              <div className="overflow-hidden rounded-lg border border-border-subtle">
                <img
                  src={p.image}
                  alt={p.title}
                  width={768}
                  height={512}
                  loading="lazy"
                  className="w-full aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {p.category} · {formatMonthYear(p.date)}
              </p>
              <h2 className="text-xl leading-snug group-hover:text-brand transition-colors text-pretty" style={{ fontFamily: "'Lora', serif" }}>
                {p.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty" style={{ fontFamily: "'Lora', serif" }}>
                {p.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
