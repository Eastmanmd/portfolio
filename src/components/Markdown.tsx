import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

export function Markdown({
  children,
  variant = "bio",
}: {
  children: string;
  variant?: "bio" | "notes";
}) {
  return (
    <div className={variant === "notes" ? "prose-notes" : "prose-bio"}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
