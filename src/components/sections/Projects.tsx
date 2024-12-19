import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "GymApp (in progress)",
    descriptionKey: "projects.gymAppDescription",
    image: "https://i.imgur.com/Cy2LmWH.png",
    tags: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/rateryyz/gymapp",
  },
  {
    title: "Weather-Dashboard",
    descriptionKey: "projects.weatherDashboardDescription",
    image: "https://i.imgur.com/1Rc3wWr.png",
    tags: ["React", "Tailwind", "API"],
    github: "https://github.com/rateryyz/weather-dashboard",
    demo: "https://weather-dashboard-beta-two.vercel.app/",
  },
  {
    title: "Landscape - Stranger Things",
    descriptionKey: "projects.strangerThingsDescription",
    image: "https://i.imgur.com/t65dE3n.png",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/rateryyz/landscape-strangerthings",
    demo: "https://landscape-strangerthings.vercel.app/",
  },
];

export function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 px-4 bg-secondary">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("projects.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-background border border-border overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {t(project.descriptionKey)}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      {t("projects.viewCode")}
                    </a>
                  </Button>
                  {project.demo && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {t("projects.viewDemo")}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
