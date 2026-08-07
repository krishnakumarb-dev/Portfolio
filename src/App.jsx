import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import ProjectDetails from "./components/pages/ProjectDetails";
import Experience from "./components/sections/Experience";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Layout />}
      />

      <Route
        path="/projects/:slug"
        element={<ProjectDetails />}
      />

    </Routes>
  );
}

export default App;