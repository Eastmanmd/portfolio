import { Link } from "@tanstack/react-router";
import { useTheme } from "@/lib/theme";
import { Moon, Sun } from "lucide-react";

export function Nav() {
  const { theme, toggle } = useTheme();
  return (
    <nav className="sticky top-0 z-50 border-b border-border-subtle bg-background/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="size-2.5 rounded-full bg-brand animate-pulse" />
          <span className="font-mono text-sm tracking-tighter uppercase font-medium">
            Ali.Oku<span className="text-muted-foreground">/Bio</span>
          </span>
        </Link>
        <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-foreground" }}
            className="hover:text-brand transition-colors hidden sm:block"
          >
            Portfolio
          </Link>
          <Link
            to="/technical"
            activeProps={{ className: "text-foreground" }}
            className="hover:text-brand transition-colors"
          >
            Technical
          </Link>
          <Link
            to="/notes"
            activeProps={{ className: "text-foreground" }}
            className="hover:text-brand transition-colors"
          >
            Notes
          </Link>
          <div className="w-px h-4 bg-border self-center hidden sm:block" />
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            {theme === "dark" ? <Moon className="size-3.5" /> : <Sun className="size-3.5" />}
            <span className="hidden sm:inline">{theme}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
