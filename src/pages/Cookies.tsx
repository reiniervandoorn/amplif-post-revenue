import { motion } from "framer-motion";
import { Cookie } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const cookieTypes = [
  { 
    titleKey: "cookies.essential.title",
    descKey: "cookies.essential.desc",
    examples: "Session ID, Authentication"
  },
  { 
    titleKey: "cookies.analytics.title",
    descKey: "cookies.analytics.desc",
    examples: "Google Analytics, Mixpanel"
  },
  { 
    titleKey: "cookies.functional.title",
    descKey: "cookies.functional.desc",
    examples: "Language preference, Theme"
  }
];

export default function Cookies() {
  const { t } = useLanguage();
  
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
              <Cookie className="w-10 h-10 text-primary" />
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {t('cookies.title')}
              </h1>
            </div>
            <p className="text-center text-muted-foreground">
              {t('cookies.lastUpdated')}: 15 januari 2025
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-muted-foreground mb-12">
              {t('cookies.intro')}
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-6">
              {t('cookies.typesTitle')}
            </h2>

            <div className="space-y-6 mb-12">
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={type.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="p-6 border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {t(type.titleKey as any)}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {t(type.descKey as any)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">{t('cookies.examples')}:</span> {type.examples}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {t('cookies.manage.title')}
              </h2>
              <p className="text-muted-foreground whitespace-pre-line">
                {t('cookies.manage.content')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="p-6 bg-surface-50 rounded-lg border border-border"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t('cookies.contact.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('cookies.contact.text')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
