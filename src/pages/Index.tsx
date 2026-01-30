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
    <div className="min-h-screen md:h-screen md:overflow-hidden bg-background flex flex-col">
      {/* Hero Section */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 text-center">
          <img
            src={logo}
            alt="Jaipur Traffic"
            className="mx-auto mb-4 sm:mb-6 h-16 w-16 sm:h-20 sm:w-20 rounded-full"
          />
          <h1 className="mb-2 sm:mb-3 font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Jaipur Traffic <span className="text-primary">Hub</span>
          </h1>
          <p className="mx-auto max-w-md text-sm sm:text-base text-muted-foreground">
            Open-source tools for traffic analysis and navigation in Jaipur
          </p>
        </div>
      </header>

      {/* Projects Section */}
      <main className="container mx-auto px-4 py-8 sm:py-12 md:py-16 flex-1">
        <h2 className="mb-6 sm:mb-8 text-center font-display text-xl sm:text-2xl font-semibold text-foreground">
          Projects
        </h2>
        <div className="mx-auto grid max-w-3xl gap-4 sm:gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 sm:py-8 text-center text-xs sm:text-sm text-muted-foreground mt-auto">
        <p>© {new Date().getFullYear()} Jaipur Traffic. Open source.</p>
      </footer>
    </div>
  );
};

export default Index;
