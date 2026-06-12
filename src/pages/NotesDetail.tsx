import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { notePosts } from "@/lib/posts";
import { formatDateLong } from "@/lib/date";
import { Markdown } from "@/components/Markdown";
import { ArrowLeft } from "lucide-react";

export default function NotesDetail() {
  const { slug } = useParams();
  const post = notePosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} — Notes`;
    } else {
      document.title = "Note Not Found — Ali Oku";
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
        <div className="max-w-3xl mx-auto px-6 py-32 text-center">
          <h1 className="text-3xl font-light mb-4">Note not found</h1>
          <Link to="/notes" className="font-mono text-sm text-brand hover:underline">
            ← Back to notes
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="max-w-2xl mx-auto px-6 py-20">
        <Link
          to="/notes"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-brand transition-colors mb-12"
        >
          <ArrowLeft className="size-3.5" /> All notes
        </Link>

        <header className="mb-12">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-6">
            {post.category} · <time>{formatDateLong(post.date)}</time>
          </p>
          <h1
            className="text-3xl md:text-5xl font-normal tracking-tight leading-[1.15] text-balance mb-8"
            style={{ fontFamily: "'Lora', serif" }}
          >
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
