import { Link } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { techPosts } from "@/lib/posts";
import { formatDateShort } from "@/lib/date";
import profileImg from "@/assets/profile.jpg";
import { ArrowUpRight, Mail, Download } from "lucide-react";

const skills = {
  Languages: ["R", "Python", "SQL", "Java", "Swift", "Bash", "HTML/CSS", "Git"],
  "Single-cell & Multi-omics": [
    "scRNA-seq",
    "ATAC-seq",
    "Spatial transcriptomics",
    "CITE-seq",
    "Bulk RNA-seq",
    "WGCNA",
  ],
  "ML & Foundation Models": [
    "scVI",
    "Geneformer",
    "scGPT",
    "cell2sentence",
    "XGBoost",
    "Random Forest",
    "SVM",
    "VAE / MMD",
    "PCA / kNN",
  ],
  "Pipelines & Infra": ["HPC clusters", "Cloud (AWS)", "Reproducible workflows", "QC frameworks"],
  Applications: ["R Shiny", "D3.js", "iOS (Swift)"],
};

const experience = [
  {
    period: "Aug 2023 — Present",
    role: "Bioinformatics Analyst, Computational Biology",
    org: "New York Genome Center",
    detail:
      "Lead QC and analysis of bulk and single-cell RNA-seq across cancer, neurodegenerative, and autoimmune projects. Designed scalable NGS workflows for cloud and HPC environments. Built ML-based cellular deconvolution tools leveraging foundation-model embeddings (scVI, Geneformer, scGPT, cell2sentence). Developed Shiny / D3.js dashboards for cross-functional communication.",
  },
  {
    period: "Feb 2023 — Jul 2023",
    role: "Bioinformatics Intern — Machine Learning",
    org: "EMD Serono (Merck KGaA)",
    detail:
      "Built an integrative multi-omics ML framework combining expression, methylation, somatic mutations, and CNV to classify the tumor microenvironment into clinically relevant subtypes for colorectal cancer.",
  },
  {
    period: "May 2022 — Aug 2022",
    role: "Bioinformatics Intern — Computational Oncology",
    org: "Takeda Pharmaceuticals",
    detail:
      "Identified gene sets associated with CRC subtypes using WGCNA. Analyzed scRNA-seq and CITE-seq data to map drug-treatment effects at single-cell resolution.",
  },
  {
    period: "May 2021 — Aug 2021",
    role: "Machine Learning Intern",
    org: "Max Delbrück Center for Molecular Medicine",
    detail:
      "Designed and optimized a Variational Autoencoder with MMD loss for dimensionality reduction of multi-omic colorectal cancer datasets, evaluating embedding quality for survival and drug-response prediction.",
  },
  {
    period: "Aug 2020 — May 2023",
    role: "Research Assistant",
    org: "Northern Illinois University",
    detail:
      "Led an end-to-end Python/R pipeline for 16S rRNA microbiome analysis. Mentored undergraduate and graduate researchers on Qiime workflows for prairie soil microbiome data.",
  },
];

const education = [
  {
    period: "2023",
    degree: "M.Sc. Biological Sciences & Bioinformatics",
    school: "Northern Illinois University",
  },
  { period: "2022", degree: "M.Sc. Computer Science", school: "Northern Illinois University" },
  {
    period: "2017",
    degree: "B.Sc. Biological & Biomedical Sciences",
    school: "Minnesota State University, Mankato",
  },
];

const publications = [
  {
    title: "Enhancing Bulk RNA-Seq Deconvolution Using Atlas-Level Deep Learning Embeddings",
    venue: "Machine Learning in Computational Biology (MLCB), 2025",
    role: "First author",
  },
  {
    title: "Gene Expression Analysis Across Multiple Brain and Spinal Cord Regions in ALS Patients",
    venue: "RNA Symposium, 2025",
    role: "First author",
  },
  {
    title:
      "A complex phylogeny of lineage plasticity in metastatic castration-resistant prostate cancer",
    venue: "npj Precision Oncology 9, 91 (2025)",
    role: "Co-author",
    href: "https://doi.org/10.1038/s41698-025-00854-4",
  },
  {
    title:
      "Comprehensive Molecular Characterization of High-Grade Endometrial Cancer in an Ancestrally Diverse Cohort",
    venue: "American Association for Cancer Research, 2025",
    role: "Co-author",
  },
  {
    title:
      "Polyethnic-1000: Advancing cancer genomics in ethnically diverse, underserved patient populations in New York",
    venue: "American Association for Cancer Research, 2024",
    role: "Co-author",
  },
  {
    title:
      "The Role of Machine Learning and Network Analyses in Understanding Microbial Composition in an Experimental Prairie",
    venue: "M.Sc. Thesis, Northern Illinois University, 2023",
    role: "Author",
  },
];

export default function Home() {
  const featured = techPosts.find((p) => p.pinned) ?? techPosts[0];
  const cvUrl = `${import.meta.env.BASE_URL}Ali_Oku_CV.pdf`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main className="max-w-5xl mx-auto px-6 py-20">
        {/* Hero */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Ali Oku · Bioinformatics Analyst · New York
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8 leading-[1.1] text-balance">
                Building computational tools at the edge of{" "}
                <span className="text-brand italic">single-cell</span> biology and machine learning.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl text-pretty">
                Bioinformatics Analyst in Computational Biology at the New York Genome Center. I
                build scalable NGS pipelines and benchmark foundation-model methods (scVI,
                Geneformer, scGPT) for single-cell analysis across cancer, neurodegenerative, and
                autoimmune disease projects.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={cvUrl}
                  download="Ali_Oku_CV.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-brand text-brand-foreground rounded-sm font-mono text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
                >
                  <Download className="size-3.5" /> Download CV
                </a>
                <a
                  href="mailto:ali.eastman.oku@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-sm font-mono text-xs uppercase tracking-widest hover:border-brand hover:text-brand transition-colors"
                >
                  <Mail className="size-3.5" /> Get in touch
                </a>
              </div>
            </div>
            <div className="md:col-span-4">
              <img
                src={profileImg}
                alt="Portrait of Ali Oku"
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
            <h2 className="text-sm font-mono uppercase tracking-widest text-brand">
              01 // Experience
            </h2>
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
                  <p className="text-muted-foreground mt-3 leading-relaxed text-pretty">
                    {e.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-32">
          <div className="flex items-baseline justify-between mb-12 border-b border-border pb-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-brand">
              02 // Education
            </h2>
          </div>
          <div className="space-y-6">
            {education.map((e) => (
              <div key={e.degree} className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <p className="md:col-span-4 font-mono text-xs text-muted-foreground">{e.period}</p>
                <div className="md:col-span-8">
                  <p className="font-medium">{e.degree}</p>
                  <p className="text-sm text-muted-foreground mt-1">{e.school}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-32">
          <div className="flex items-baseline justify-between mb-12 border-b border-border pb-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-brand">
              03 // Technical Stack
            </h2>
          </div>
          <div className="space-y-8">
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <p className="md:col-span-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {cat}
                </p>
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
            <h2 className="text-sm font-mono uppercase tracking-widest text-brand">
              04 // Selected Publications
            </h2>
            <a
              href="https://scholar.google.com/scholar?q=Ali+Oku"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-muted-foreground hover:text-foreground"
            >
              Google Scholar →
            </a>
          </div>
          <div className="divide-y divide-border-subtle">
            {publications.map((p) => (
              <div key={p.title} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 first:pt-0">
                <div className="md:col-span-9">
                  <h3 className="font-medium leading-snug text-pretty">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {p.venue} · {p.role}
                  </p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs text-brand hover:underline inline-flex items-center gap-1"
                    >
                      DOI <ArrowUpRight className="size-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured tech post */}
        <section className="mb-32">
          <div className="flex items-baseline justify-between mb-12 border-b border-border pb-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-brand">
              05 // Latest Writing
            </h2>
            <Link
              to="/technical"
              className="text-xs font-mono text-muted-foreground hover:text-foreground"
            >
              All posts →
            </Link>
          </div>
          <Link to={`/technical/${featured.slug}`} className="block group">
            <article className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <time className="text-xs font-mono text-muted-foreground block mb-2">
                  {formatDateShort(featured.date)}
                </time>
                <h3 className="text-2xl font-light leading-snug group-hover:text-brand transition-colors text-pretty">
                  {featured.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {featured.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-8">
                <div className="bg-surface/50 p-6 rounded-lg border border-border-subtle">
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    {featured.excerpt}
                  </p>
                  <p className="mt-4 text-xs font-mono text-brand">Read post →</p>
                </div>
              </div>
            </article>
          </Link>
        </section>

        {/* Contact */}
        <section>
          <div className="flex items-baseline justify-between mb-12 border-b border-border pb-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-brand">
              06 // Contact
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
            <p className="md:col-span-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Get in touch
            </p>
            <div className="md:col-span-8">
              <p className="text-lg text-pretty mb-6">
                Open to collaborations on single-cell methods, multi-omics integration, and ML for
                translational research.
              </p>
              <p className="text-sm font-mono text-muted-foreground mb-6">
                New York, NY · (507) 304-0984 · ali.eastman.oku@gmail.com
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:ali.eastman.oku@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-brand text-brand-foreground rounded-sm font-mono text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
                >
                  <Mail className="size-3.5" /> Email
                </a>
                <a
                  href={cvUrl}
                  download="Ali_Oku_CV.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-sm font-mono text-xs uppercase tracking-widest hover:border-brand hover:text-brand transition-colors"
                >
                  <Download className="size-3.5" /> CV (PDF)
                </a>
                <a
                  href="https://www.linkedin.com/in/ali-eastman-oku/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-sm font-mono text-xs uppercase tracking-widest hover:border-brand hover:text-brand transition-colors"
                >
                  LinkedIn <ArrowUpRight className="size-3" />
                </a>
                <a
                  href="https://scholar.google.com/scholar?q=Ali+Oku"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-sm font-mono text-xs uppercase tracking-widest hover:border-brand hover:text-brand transition-colors"
                >
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
