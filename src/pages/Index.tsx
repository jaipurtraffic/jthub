import { BarChart3, Route } from "lucide-react";
import logo from "@/assets/logo.png";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Jaipur Traffic Dashboard",
    description: "Real-time traffic monitoring and analytics dashboard for Jaipur city. Visualize congestion patterns, traffic flow, and key metrics.",
    liveUrl: "https://dash.jaipurtraffic.com",
    githubUrl: "https://github.com/jaipurtraffic/dash/",
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    title: "Route Planner",
    description: "Smart route planning tool for navigating Jaipur's roads efficiently. Find optimal paths and avoid congested areas.",
    liveUrl: "https://routes.jaipurtraffic.com/",
    githubUrl: "https://github.com/jaipurtraffic/routes",
    icon: <Route className="h-6 w-6" />,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-16 text-center">
          <img
            src={logo}
            alt="Jaipur Traffic"
            className="mx-auto mb-6 h-20 w-20 rounded-full"
          />
          <h1 className="mb-3 font-display text-4xl font-bold tracking-tight text-foreground">
            Jaipur Traffic <span className="text-primary">Hub</span>
          </h1>
          <p className="mx-auto max-w-md text-muted-foreground">
            Open-source tools for traffic analysis and navigation in Jaipur
          </p>
        </div>
      </header>

      {/* Projects Section */}
      <main className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center font-display text-2xl font-semibold text-foreground">
          Projects
        </h2>
        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Jaipur Traffic. Open source.</p>
      </footer>
    </div>
  );
};

export default Index;
