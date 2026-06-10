export function Footer() {
  return (
    <footer className="py-12 border-t border-border-subtle mt-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs font-mono text-muted-foreground">
          &copy; {new Date().getFullYear()} ALEX.BIO // BUILT AT THE INTERSECTION OF BIOLOGY AND COMPUTATION
        </p>
        <div className="flex gap-6">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-xs font-mono text-muted-foreground hover:text-brand transition-colors">GITHUB</a>
          <a href="https://orcid.org" target="_blank" rel="noreferrer" className="text-xs font-mono text-muted-foreground hover:text-brand transition-colors">ORCID</a>
          <a href="https://scholar.google.com" target="_blank" rel="noreferrer" className="text-xs font-mono text-muted-foreground hover:text-brand transition-colors">SCHOLAR</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-xs font-mono text-muted-foreground hover:text-brand transition-colors">LINKEDIN</a>
        </div>
      </div>
    </footer>
  );
}
