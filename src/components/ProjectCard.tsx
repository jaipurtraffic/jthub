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
    <div className="group relative rounded-lg border border-border bg-card p-4 sm:p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-secondary text-primary">
        {icon}
      </div>
      
      <h3 className="mb-2 font-display text-lg sm:text-xl font-semibold text-foreground">
        {title}
      </h3>
      
      <p className="mb-4 sm:mb-6 text-xs sm:text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 sm:gap-3">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 sm:gap-2 rounded-md bg-primary px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          Visit
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 sm:gap-2 rounded-md border border-border bg-secondary px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted"
        >
          <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
