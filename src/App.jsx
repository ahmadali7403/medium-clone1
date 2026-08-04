import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import Library from "./pages/Library";
import Profile from "./pages/Profile";
import Stories from "./pages/Stories";
import Stats from "./pages/Stats";
import ImportStory from "./component/ImportStory";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/import-story" element={<ImportStory />} />

          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/library" element={<Library />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stats" element={<Stats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
