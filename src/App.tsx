import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/lib/theme";
import Home from "@/pages/Home";
import Technical from "@/pages/Technical";
import TechnicalDetail from "@/pages/TechnicalDetail";
import Notes from "@/pages/Notes";
import NotesDetail from "@/pages/NotesDetail";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technical" element={<Technical />} />
          <Route path="/technical/:slug" element={<TechnicalDetail />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/:slug" element={<NotesDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
