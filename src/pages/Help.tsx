import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Book, MessageCircle, Video, FileText, HelpCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const categories = [
  { icon: Book, titleKey: "help.gettingStarted.title", descKey: "help.gettingStarted.desc" },
  { icon: FileText, titleKey: "help.integration.title", descKey: "help.integration.desc" },
  { icon: HelpCircle, titleKey: "help.troubleshooting.title", descKey: "help.troubleshooting.desc" },
  { icon: Video, titleKey: "help.tutorials.title", descKey: "help.tutorials.desc" }
];

const faqs = [
  { qKey: "help.faq1.q", aKey: "help.faq1.a" },
  { qKey: "help.faq2.q", aKey: "help.faq2.a" },
  { qKey: "help.faq3.q", aKey: "help.faq3.a" },
  { qKey: "help.faq4.q", aKey: "help.faq4.a" },
  { qKey: "help.faq5.q", aKey: "help.faq5.a" }
];

export default function Help() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
              {t('help.title')}
            </h1>
            <p className="text-lg leading-8 text-muted-foreground max-w-3xl mx-auto mb-8">
              {t('help.subtitle')}
            </p>
            
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder={t('help.searchPlaceholder')}
                className="pl-12 py-6 text-lg"
              />
            </div>
          </motion.div>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {categories.map((category, index) => (
              <motion.div
                key={category.titleKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover-lift transition-all duration-200 hover:shadow-lg border border-border cursor-pointer h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-2xl mb-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {t(category.titleKey as any)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(category.descKey as any)}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              {t('help.faqTitle')}
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.qKey} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {t(faq.qKey as any)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {t(faq.aKey as any)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Contact Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 text-center bg-surface-50 rounded-3xl p-12 border border-border"
          >
            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('help.stillNeedHelp')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('help.stillNeedHelpDesc')}
            </p>
            <Link to="/contact">
              <Button size="lg" className="gradient-primary text-white">
                {t('help.contactSupport')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
