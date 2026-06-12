export function Footer() {
  return (
    <footer className="py-12 border-t border-border-subtle mt-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs font-mono text-muted-foreground">
          &copy; {new Date().getFullYear()} ALI OKU // BIOINFORMATICS &amp; COMPUTATIONAL BIOLOGY
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/ali-eastman-oku/"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-muted-foreground hover:text-brand transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="https://scholar.google.com/scholar?q=Ali+Oku"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-muted-foreground hover:text-brand transition-colors"
          >
            SCHOLAR
          </a>
          <a
            href="mailto:ali.eastman.oku@gmail.com"
            className="text-xs font-mono text-muted-foreground hover:text-brand transition-colors"
          >
            EMAIL
          </a>
        </div>
      </div>
    </footer>
  );
}
