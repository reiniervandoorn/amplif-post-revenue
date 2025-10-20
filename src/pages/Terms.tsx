import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Terms() {
  const { t } = useLanguage();
  
  const sections = [
    { titleKey: "terms.section1.title", contentKey: "terms.section1.content" },
    { titleKey: "terms.section2.title", contentKey: "terms.section2.content" },
    { titleKey: "terms.section3.title", contentKey: "terms.section3.content" },
    { titleKey: "terms.section4.title", contentKey: "terms.section4.content" },
    { titleKey: "terms.section5.title", contentKey: "terms.section5.content" },
    { titleKey: "terms.section6.title", contentKey: "terms.section6.content" }
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <FileText className="w-10 h-10 text-primary" />
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {t('terms.title')}
              </h1>
            </div>
            <p className="text-center text-muted-foreground">
              {t('terms.lastUpdated')}: 15 januari 2025
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-muted-foreground mb-12">
              {t('terms.intro')}
            </p>

            {sections.map((section, index) => (
              <motion.div
                key={section.titleKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t(section.titleKey as any)}
                </h2>
                <div className="text-muted-foreground whitespace-pre-line">
                  {t(section.contentKey as any)}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-12 p-6 bg-surface-50 rounded-lg border border-border"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t('terms.contact.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('terms.contact.text')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
