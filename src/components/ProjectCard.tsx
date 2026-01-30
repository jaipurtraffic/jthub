import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  icon: React.ReactNode;
}

const ProjectCard = ({ title, description, liveUrl, githubUrl, icon }: ProjectCardProps) => {
  return (
    <div className="group relative rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
        {icon}
      </div>
      
      <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
        {title}
      </h3>
      
      <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      
      <div className="flex gap-3">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <ExternalLink className="h-4 w-4" />
          Visit
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted"
        >
          <Github className="h-4 w-4" />
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
