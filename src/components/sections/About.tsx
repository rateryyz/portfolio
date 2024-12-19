import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Code2, Palette, Rocket } from "lucide-react";

const skills = [
  {
    icon: Code2,
    titleKey: "skills.frontend",
    items: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Palette,
    titleKey: "skills.uiux",
    items: ["Responsive Design", "User Experience", "Animations"],
  },
  {
    icon: Rocket,
    titleKey: "skills.tools",
    items: ["Git", "Figma", "Next.js"],
  },
];

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("about.title")}
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              {t("about.description")}
            </p>
            <p className="text-muted-foreground text-lg">
              {t("about.description2")}
            </p>
          </div>
          <div className="flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-[300px] h-[300px] rounded-full overflow-hidden bg-secondary"
            >
              <img
                src="https://i.imgur.com/oUZQrXA.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 border border-border rounded-none"
            >
              <skill.icon className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-semibold mb-4">
                {t(skill.titleKey)}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
