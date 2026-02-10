import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { ProjectDashboard } from "./pages/ProjectDashboard";
import { ProjectInsights } from "./pages/ProjectInsights";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "projects", Component: Projects },
      { path: "projects/:projectId/dashboard", Component: ProjectDashboard },
      { path: "projects/:projectId/insights", Component: ProjectInsights },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);
