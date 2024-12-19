import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Github, Linkedin, Mail, Twitter, } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const { t } = useTranslation();
  useForm<FormData>();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/rateryyz', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/marcus-vinicius-moreira-front-end/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/rateryzz', label: 'X' },
    { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&to=sucrammoreira@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("contact.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-6">{t("contact.contactInfo")}</h3>
          <div className="flex justify-center gap-8 mb-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ x: 4 }}
              >
                <link.icon className="h-8 w-8" />
                <span>{link.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
