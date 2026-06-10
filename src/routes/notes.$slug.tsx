import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { notePosts } from "@/lib/posts";
import { Markdown } from "@/components/Markdown";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/notes/$slug")({
  loader: ({ params }) => {
    const post = notePosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — Notes` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:image", content: loaderData.post.image },
          { property: "og:type", content: "article" },
        ]
      : [],
  }),
  component: NotePost,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h1 className="text-3xl font-light mb-4">Note not found</h1>
        <Link to="/notes" className="font-mono text-sm text-brand hover:underline">← Back to notes</Link>
      </div>
    </div>
  ),
});

function NotePost() {
  const { post } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="max-w-2xl mx-auto px-6 py-20">
        <Link to="/notes" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-brand transition-colors mb-12">
          <ArrowLeft className="size-3.5" /> All notes
        </Link>

        <header className="mb-12">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-6">
            {post.category} · <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
          </p>
          <h1 className="text-3xl md:text-5xl font-normal tracking-tight leading-[1.15] text-balance mb-8" style={{ fontFamily: "'Lora', serif" }}>
            {post.title}
          </h1>
          <img
            src={post.image}
            alt={post.title}
            width={768}
            height={512}
            className="w-full aspect-[3/2] object-cover rounded-lg border border-border-subtle"
          />
        </header>

        <Markdown variant="notes">{post.content}</Markdown>
      </main>
      <Footer />
    </div>
  );
}
