import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { techPosts } from "@/lib/posts";
import { formatDateShort } from "@/lib/date";
import { Search, Pin } from "lucide-react";

export default function Technical() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => Array.from(new Set(techPosts.flatMap((p) => p.tags))).sort(), []);

  const filtered = useMemo(() => {
    return techPosts.filter((p) => {
      const matchesQ =
        !query ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase());
      const matchesTag = !activeTag || p.tags.includes(activeTag);
      return matchesQ && matchesTag;
    });
  }, [query, activeTag]);

  const pinned = filtered.filter((p) => p.pinned);
  const rest = filtered.filter((p) => !p.pinned);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="max-w-5xl mx-auto px-6 py-20">
        <header className="mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand mb-4">
            01 // Technical Documentation
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Technical writing &amp; tool reviews.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
            Process notes, pipeline patterns, and reviews of bioinformatics tools — mostly things I
            wished someone had written down before I had to figure them out.
          </p>
        </header>

        {/* Filters */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div className="relative md:w-80">
            <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search posts..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-surface border border-border rounded-sm font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:border-brand"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={`px-3 py-1.5 font-mono text-xs uppercase tracking-widest border rounded-sm transition-colors ${
                !activeTag
                  ? "border-brand text-brand"
                  : "border-border-subtle text-muted-foreground hover:border-brand hover:text-brand"
              }`}
            >
              All
            </button>
            {allTags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t === activeTag ? null : t)}
                className={`px-3 py-1.5 font-mono text-xs uppercase tracking-widest border rounded-sm transition-colors ${
                  activeTag === t
                    ? "border-brand text-brand"
                    : "border-border-subtle text-muted-foreground hover:border-brand hover:text-brand"
                }`}
              >
                #{t}
              </button>
            ))}
          </div>
        </div>

        {/* Posts */}
        <div className="divide-y divide-border-subtle">
          {pinned.map((p) => (
            <PostRow key={p.slug} post={p} pinned />
          ))}
          {rest.map((p) => (
            <PostRow key={p.slug} post={p} />
          ))}
          {filtered.length === 0 && (
            <p className="py-12 text-center text-muted-foreground font-mono text-sm">
              No posts match those filters.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function PostRow({ post, pinned }: { post: (typeof techPosts)[number]; pinned?: boolean }) {
  return (
    <Link to={`/technical/${post.slug}`} className="block py-8 group">
      <article className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-3">
          <time className="text-xs font-mono text-muted-foreground block">
            {formatDateShort(post.date)}
          </time>
          <p className="text-xs font-mono text-muted-foreground mt-1">
            {post.readingTime} min read
          </p>
          {pinned && (
            <p className="mt-3 inline-flex items-center gap-1 text-xs font-mono text-brand">
              <Pin className="size-3" /> Pinned
            </p>
          )}
        </div>
        <div className="md:col-span-9">
          <h2 className="text-2xl font-light leading-snug group-hover:text-brand transition-colors text-pretty">
            {post.title}
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed text-pretty">{post.excerpt}</p>
          <div className="flex flex-wrap gap-3 mt-4">
            {post.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
