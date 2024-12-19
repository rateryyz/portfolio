import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";

export function Hero() {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-screen-lg mx-auto text-center"
      >
        <motion.h2
          variants={item}
          className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6"
        >
          Frontend Developer
        </motion.h2>

        <motion.h1
          variants={item}
          className="text-4xl md:text-7xl font-bold tracking-tight mb-8"
        >
          {t("hero.title")}
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          variants={item}
          className="flex items-center justify-center space-x-6 mb-16"
        >
          {[
            { Icon: Github, href: "https://github.com/rateryyz" },
            {
              Icon: Linkedin,
              href: "https://www.linkedin.com/in/marcus-vinicius-moreira-front-end/",
            },
            { Icon: Mail, href: "https://mail.google.com/mail/?view=cm&to=sucrammoreira@gmail.com" }




          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Icon className="h-6 w-6" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="flex items-center justify-center space-x-6 mb-16"
        >
          <a
            href="https://drive.google.com/uc?id=1FgKGjpodd29c3IElyrFmsH5R_fbQT4r9&export=download"
            download="portuguese-resume.pdf"
            className="flex items-center space-x-2 border border-black text-black hover:bg-black hover:text-white px-4 py-2 rounded-lg"
          >
            <FileText className="h-5 w-5" />
            <span>{t("Portuguese Resume")}</span>
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1Ns5QlDLhnaZx5uIN-xQyOPHt-CNePHRt"
            download="english-resume.pdf"
            className="flex items-center space-x-2 border border-black text-black hover:bg-black hover:text-white px-4 py-2 rounded-lg"
          >
            <FileText className="h-5 w-5" />
            <span>{t("English Resume")}</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
