import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { techPosts } from "@/lib/posts";
import profileImg from "@/assets/profile.jpg";
import { ArrowUpRight, Mail } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Chen — Bioinformatician" },
      { name: "description", content: "Lead bioinformatician working on single-cell genomics, NGS pipelines, and scalable computational biology." },
      { property: "og:title", content: "Alex Chen — Bioinformatician" },
      { property: "og:description", content: "Lead bioinformatician working on single-cell genomics, NGS pipelines, and scalable computational biology." },
    ],
  }),
  component: Index,
});

const skills = {
  Languages: ["Python", "R", "Rust", "Bash"],
  "Single-cell": ["Seurat v5", "Scanpy", "Bioconductor", "Cell Ranger", "scVI"],
  "NGS & Pipelines": ["Nextflow DSL2", "Snakemake", "nf-core", "BWA", "STAR", "GATK"],
  "ML & Stats": ["PyTorch", "scikit-learn", "PyMC", "Bayesian inference"],
  Infrastructure: ["AWS Batch", "Docker", "Apptainer", "Slurm", "Git/GitHub Actions"],
};

const experience = [
  {
    period: "2023 — present",
    role: "Lead Bioinformatician",
    org: "HelixVast Labs",
    detail:
      "Lead a team of four on single-cell and spatial transcriptomics platforms. Architected the production NF-core pipeline running on AWS Batch (~3000 samples/quarter).",
  },
  {
    period: "2022 — 2023",
    role: "Bioinformatics Scientist",
    org: "Genentech",
    detail:
      "Multi-omic integration for oncology biomarker discovery. Built reproducible analysis frameworks adopted by three sister teams.",
  },
  {
    period: "2018 — 2022",
    role: "Graduate Researcher",
    org: "Stanford University",
    detail:
      "PhD on chromatin dynamics in neuronal differentiation. Co-authored five peer-reviewed papers in Nature Communications, Cell Reports, and Genome Biology.",
  },
];

const publications = [
  {
    title: "Temporal dynamics of chromatin accessibility in neuronal differentiation",
    venue: "Nature Communications (2023)",
    role: "First author",
    doi: "10.1038/s41467-023-40120-x",
  },
  {
    title: "Scalable pipeline for multi-omic integration at single-cell resolution",
    venue: "Cell Reports Methods (2022)",
    role: "Co-author",
    doi: "10.1016/j.crmeth.2022.100231",
  },
  {
    title: "Benchmarking ambient-RNA correction methods in droplet scRNA-seq",
    venue: "Genome Biology (2022)",
    role: "Co-author",
    doi: "10.1186/s13059-022-02714-x",
  },
];

function Index() {
  const featured = techPosts.find((p) => p.pinned) ?? techPosts[0];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main className="max-w-5xl mx-auto px-6 py-20">
        {/* Hero */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Alex Chen / Lead Bioinformatician
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8 leading-[1.1] text-balance">
                Bridging <span className="text-brand italic">genomics</span> and distributed systems to unlock human longevity.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl text-pretty">
                I build pipelines for large-scale sequencing and research the intersection of single-cell biology and machine learning. Currently Lead Bioinformatician at HelixVast Labs.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-surface border border-border rounded-sm font-mono text-xs text-muted-foreground">Python / R / Rust</span>
                <span className="px-4 py-2 bg-surface border border-border rounded-sm font-mono text-xs text-muted-foreground">Nextflow Pipelines</span>
                <span className="px-4 py-2 bg-surface border border-border rounded-sm font-mono text-xs text-muted-foreground">Single-cell genomics</span>
              </div>
            </div>
            <div className="md:col-span-4">
              <img
                src={profileImg}
                alt="Portrait of Alex Chen"
                width={800}
                height={1024}
                className="w-full aspect-[4/5] object-cover rounded-2xl border border-border-subtle"
              />
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-32">
          <div className="flex items-baseline justify-between mb-12 border-b border-border pb-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-brand">01 // Experience</h2>
            <span className="text-xs font-mono text-muted-foreground">curriculum vitae</span>
          </div>
          <div className="space-y-10">
            {experience.map((e) => (
              <div key={e.role} className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4">
                  <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
                </div>
                <div className="md:col-span-8">
                  <h3 className="text-xl font-medium">{e.role}</h3>
                  <p className="text-sm text-brand font-mono mt-1">{e.org}</p>
                  <p className="text-muted-foreground mt-3 leading-relaxed text-pretty">{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-32">
          <div className="flex items-baseline justify-between mb-12 border-b border-border pb-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-brand">02 // Technical Stack</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-6">
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <p className="md:col-span-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">{cat}</p>
                <div className="md:col-span-8 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 bg-surface border border-border-subtle rounded-sm font-mono text-xs hover:border-brand hover:text-brand transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section className="mb-32">
          <div className="flex items-baseline justify-between mb-12 border-b border-border pb-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-brand">03 // Selected Publications</h2>
            <a href="https://scholar.google.com" target="_blank" rel="noreferrer" className="text-xs font-mono text-muted-foreground hover:text-foreground">Google Scholar →</a>
          </div>
          <div className="divide-y divide-border-subtle">
            {publications.map((p) => (
              <div key={p.doi} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 first:pt-0">
                <div className="md:col-span-9">
                  <h3 className="font-medium leading-snug">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.venue} · {p.role}</p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <a
                    href={`https://doi.org/${p.doi}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-brand hover:underline inline-flex items-center gap-1"
                  >
                    DOI <ArrowUpRight className="size-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured tech post */}
        <section className="mb-32">
          <div className="flex items-baseline justify-between mb-12 border-b border-border pb-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-brand">04 // Latest Writing</h2>
            <Link to="/technical" className="text-xs font-mono text-muted-foreground hover:text-foreground">All posts →</Link>
          </div>
          <Link
            to="/technical/$slug"
            params={{ slug: featured.slug }}
            className="block group"
          >
            <article className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <time className="text-xs font-mono text-muted-foreground block mb-2">
                  {new Date(featured.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }).toUpperCase()}
                </time>
                <h3 className="text-2xl font-light leading-snug group-hover:text-brand transition-colors text-pretty">
                  {featured.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {featured.tags.map((t) => (
                    <span key={t} className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">#{t}</span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-8">
                <div className="bg-surface/50 p-6 rounded-lg border border-border-subtle">
                  <p className="text-muted-foreground leading-relaxed text-pretty">{featured.excerpt}</p>
                  <p className="mt-4 text-xs font-mono text-brand">Read post →</p>
                </div>
              </div>
            </article>
          </Link>
        </section>

        {/* Contact */}
        <section>
          <div className="flex items-baseline justify-between mb-12 border-b border-border pb-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-brand">05 // Contact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
            <p className="md:col-span-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">Get in touch</p>
            <div className="md:col-span-8">
              <p className="text-lg text-pretty mb-6">
                Open to collaborations on single-cell methods, pipeline engineering, and computational biology research.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:alex@example.com" className="inline-flex items-center gap-2 px-4 py-2 bg-brand text-brand-foreground rounded-sm font-mono text-xs uppercase tracking-widest hover:opacity-90 transition-opacity">
                  <Mail className="size-3.5" /> Email
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-sm font-mono text-xs uppercase tracking-widest hover:border-brand hover:text-brand transition-colors">
                  GitHub <ArrowUpRight className="size-3" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-sm font-mono text-xs uppercase tracking-widest hover:border-brand hover:text-brand transition-colors">
                  LinkedIn <ArrowUpRight className="size-3" />
                </a>
                <a href="https://scholar.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-sm font-mono text-xs uppercase tracking-widest hover:border-brand hover:text-brand transition-colors">
                  Scholar <ArrowUpRight className="size-3" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
