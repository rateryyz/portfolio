import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-background/80 backdrop-blur-md z-50 px-4 py-4 border-b border-border"
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <motion.a
          href="#"
          className="text-lg font-bold tracking-tight"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          MARCUS MOREIRA
        </motion.a>

        <div className="hidden md:flex items-center space-x-8">
          {['home', 'about', 'projects', 'contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className="text-sm uppercase tracking-widest hover:text-primary/80 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {t(`nav.${item}`)}
            </motion.a>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="ml-4 text-xs tracking-widest"
          >
            {i18n.language === 'en' ? 'PT' : 'EN'}
          </Button>
        </div>

        {}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
        <div className="flex flex-col items-center space-y-4">
          {['home', 'about', 'projects', 'contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className="text-sm uppercase tracking-widest hover:text-primary/80 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {t(`nav.${item}`)}
            </motion.a>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="text-xs tracking-widest"
          >
            {i18n.language === 'en' ? 'PT' : 'EN'}
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
