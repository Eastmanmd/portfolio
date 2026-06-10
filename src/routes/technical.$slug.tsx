import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { techPosts } from "@/lib/posts";
import { Markdown } from "@/components/Markdown";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/technical/$slug")({
  loader: ({ params }) => {
    const post = techPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — Alex Chen` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:type", content: "article" },
        ]
      : [],
  }),
  component: TechPost,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h1 className="text-3xl font-light mb-4">Post not found</h1>
        <Link to="/technical" className="font-mono text-sm text-brand hover:underline">← Back to technical</Link>
      </div>
    </div>
  ),
});

function TechPost() {
  const { post } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <Link to="/technical" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-brand transition-colors mb-12">
          <ArrowLeft className="size-3.5" /> All technical posts
        </Link>

        <header className="mb-12 pb-12 border-b border-border-subtle">
          <div className="flex flex-wrap gap-3 mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
            <span>·</span>
            <span>{post.readingTime} min read</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light tracking-tight leading-[1.1] text-balance mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((t: string) => (
              <span key={t} className="px-3 py-1 bg-surface border border-border-subtle rounded-sm font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                #{t}
              </span>
            ))}
          </div>
        </header>

        <Markdown variant="bio">{post.content}</Markdown>
      </main>
      <Footer />
    </div>
  );
}
