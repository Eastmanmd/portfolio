export type TechPost = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  readingTime: number;
  pinned?: boolean;
  content: string;
};

export type NotePost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  content: string;
};

import notesCoffee from "@/assets/notes-coffee.jpg";
import notesCascades from "@/assets/notes-cascades.jpg";
import notesBooks from "@/assets/notes-books.jpg";

export const techPosts: TechPost[] = [
  {
    slug: "scrnaseq-seurat-v5-pipeline",
    title: "A reproducible scRNA-seq pipeline with Seurat v5 and Nextflow",
    date: "2024-05-14",
    tags: ["scRNA-seq", "R", "Nextflow"],
    excerpt:
      "Building an end-to-end pipeline from Cell Ranger outputs to annotated UMAPs, with reproducibility baked into every step.",
    readingTime: 9,
    pinned: true,
    content: `## Why pipelines, not notebooks

Notebooks are great for exploration, terrible for reproducibility. The moment a collaborator asks "can you re-run sample 14 with the new filtering thresholds?" you discover that the cell ordering matters and \`set.seed()\` only goes so far.

We treat every analysis as a **pipeline** — declared inputs, deterministic outputs, container-pinned dependencies.

## The stack

- **Nextflow DSL2** for orchestration
- **Singularity/Apptainer** containers per process
- **Seurat v5** with the BPCells on-disk matrix backend
- **DoubletFinder** for doublet calling, **SoupX** for ambient RNA

## Loading sparse matrices the v5 way

\`\`\`r
library(Seurat)
library(BPCells)

# Convert 10x output to on-disk format once, query forever
mat <- open_matrix_10x_hdf5("sample01/filtered_feature_bc_matrix.h5")
write_matrix_dir(mat, dir = "bpcells/sample01")

obj <- CreateSeuratObject(
  counts = open_matrix_dir("bpcells/sample01"),
  project = "sample01",
  min.cells = 3,
  min.features = 200
)
\`\`\`

The on-disk backend means a 100k-cell object uses ~200MB of RAM instead of 8GB. Worth the migration.

## QC thresholds as configuration, not magic numbers

\`\`\`r
qc <- subset(
  obj,
  subset = nFeature_RNA > params$min_features &
           nFeature_RNA < params$max_features &
           percent.mt < params$max_mito
)
\`\`\`

Every threshold lives in \`params.yaml\` so the pipeline produces a paper trail.

## What we get

Drop a samplesheet in, get back annotated UMAPs, marker tables, and an HTML QC report — bit-identical across runs. The Bayesian normalization step is the only thing left that requires human judgment, and that's by design.`,
  },
  {
    slug: "nextflow-aws-batch-spot",
    title: "Cutting Nextflow costs 60% on AWS Batch spot instances",
    date: "2024-03-12",
    tags: ["Nextflow", "NGS", "cloud"],
    excerpt:
      "Spot instances are cheap until your 14-hour alignment job dies at hour 13. Here's how we made it robust.",
    readingTime: 6,
    content: `## The problem

Spot prices are ~70% off on-demand, but AWS reclaims them with two minutes' notice. For an NGS pipeline that's pure pain.

## The fix: granular retries

\`\`\`groovy
process {
  executor = 'awsbatch'
  queue    = 'spot-queue'
  errorStrategy = { task.exitStatus in [137, 143, 247] ? 'retry' : 'finish' }
  maxRetries    = 3

  withLabel: long_running {
    queue = 'ondemand-queue'   // checkpoint-unfriendly steps
  }
}
\`\`\`

Exit codes \`137\` (SIGKILL), \`143\` (SIGTERM), and \`247\` are the spot-reclaim signals. We retry those; we don't retry real failures.

## Checkpoint where you can

\`bwa-mem2\` and \`STAR\` don't checkpoint. \`samtools sort\` does, via \`-T\`. Pin the checkpoint-hostile steps to on-demand and let the rest live on spot.

## Results

Across three months and ~1200 samples: 61% cost reduction, no failed deliverables.`,
  },
  {
    slug: "bayesian-normalization-sparse",
    title: "Bayesian normalization for sparse single-cell matrices",
    date: "2024-02-28",
    tags: ["scRNA-seq", "statistics", "Python"],
    excerpt:
      "A hierarchical model to handle dropout in low-depth datasets, without throwing away the cells that matter.",
    readingTime: 11,
    content: `## The dropout problem

Low-depth scRNA-seq is mostly zeros. The standard fix — log-normalize, ignore — assumes those zeros are missing-at-random. They aren't.

## A hierarchical prior

\`\`\`python
import pymc as pm
import numpy as np

with pm.Model() as model:
    # Cell-level size factor
    s = pm.LogNormal("s", mu=0, sigma=0.5, shape=n_cells)
    # Gene-level mean expression
    mu_g = pm.Gamma("mu_g", alpha=2, beta=1, shape=n_genes)
    # Dropout probability per gene
    p_drop = pm.Beta("p_drop", alpha=1, beta=4, shape=n_genes)

    rate = s[:, None] * mu_g[None, :]
    obs = pm.ZeroInflatedNegativeBinomial(
        "obs", psi=1 - p_drop, mu=rate, alpha=2.0, observed=counts
    )

    trace = pm.sample(1000, tune=1500, target_accept=0.95)
\`\`\`

We treat dropout as gene-specific, with a weakly informative prior pulling toward "most genes drop sometimes."

## Why it matters

On a benchmark dataset of paired full-depth and downsampled libraries, the Bayesian-normalized matrices preserved 92% of the original cluster structure at 10% depth, versus 71% for SCTransform.`,
  },
];

export const notePosts: NotePost[] = [
  {
    slug: "espresso-extraction",
    title: "The chemistry of the perfect espresso extraction",
    date: "2024-04-02",
    category: "Curiosities",
    excerpt: "Applying laboratory precision to my morning caffeine routine. It's all about total dissolved solids.",
    image: notesCoffee,
    content: `There is a strange comfort in discovering that the ritual you perform half-asleep every morning is, in fact, a controlled chemistry experiment.

Espresso extraction is governed by three variables — temperature, pressure, contact time — and one outcome: **total dissolved solids**. The sweet spot lives somewhere between 18% and 22% extraction yield. Below that, sourness. Above, the bitter compounds win.

I bought a refractometer last month. My partner thinks I have lost the plot. My espresso, for the first time in my life, is consistent.`,
  },
  {
    slug: "cascades-solitude",
    title: "Solitude and the Cascades",
    date: "2024-03-18",
    category: "Field notes",
    excerpt: "Three days of hiking without a screen. Why bioinformaticians need to stare at trees more often.",
    image: notesCascades,
    content: `Three days in the North Cascades, no phone, no laptop, no JIRA tickets. By the second afternoon my brain stopped trying to optimize the route and started just walking it.

There is a thing that happens to people who stare at screens for a living, and I do not think it has a name. It is the gradual narrowing of your field of attention until everything becomes a kind of grid. Spreadsheets all the way down.

The forest is a useful corrective. Nothing in a forest is on a grid.`,
  },
  {
    slug: "reading-list-winter",
    title: "Reading list: Winter 2024",
    date: "2024-01-08",
    category: "Bookshelf",
    excerpt: "From 19th-century biology to modern science fiction. What I'm reading this season.",
    image: notesBooks,
    content: `A short list, mostly to remind myself:

- **The Gene** — Siddhartha Mukherjee. Re-reading because the historical chapters get richer the more you know about the modern field.
- **Ways of Being** — James Bridle. Not strictly about biology but more about biology than most biology books.
- **A Memory Called Empire** — Arkady Martine. For the train.
- **The Eighth Day of Creation** — Horace Freeland Judson. The molecular biology origin story. Worth every page.

If you have read something this season that moved you, I would like to know.`,
  },
];
