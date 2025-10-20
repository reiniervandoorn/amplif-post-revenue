import { motion } from "framer-motion";
import { Code, Brain, CreditCard, CheckCircle, ArrowRight, Settings, Shield, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MetricStat } from "@/components/MetricStat";
import { useLanguage } from "@/contexts/LanguageContext";

const steps = [
  {
    icon: Code,
    titleKey: 'howItWorks.step1.title',
    descriptionKey: 'howItWorks.step1.desc',
    detailsKey: 'howItWorks.step1.details'
  },
  {
    icon: Brain,
    titleKey: 'howItWorks.step2.title',
    descriptionKey: 'howItWorks.step2.desc',
    detailsKey: 'howItWorks.step2.details'
  },
  {
    icon: CreditCard,
    titleKey: 'howItWorks.step3.title',
    descriptionKey: 'howItWorks.step3.desc',
    detailsKey: 'howItWorks.step3.details'
  },
];

const faqItems = [
  {
    questionKey: "howItWorks.faq.items.0.q",
    answerKey: "howItWorks.faq.items.0.a"
  },
  {
    questionKey: "howItWorks.faq.items.1.q",
    answerKey: "howItWorks.faq.items.1.a"
  },
  {
    questionKey: "howItWorks.faq.items.2.q",
    answerKey: "howItWorks.faq.items.2.a"
  },
  {
    questionKey: "howItWorks.faq.items.3.q",
    answerKey: "howItWorks.faq.items.3.a"
  },
  {
    questionKey: "howItWorks.faq.items.4.q",
    answerKey: "howItWorks.faq.items.4.a"
  },
];

const features = [
  {
    icon: Settings,
    titleKey: "howItWorks.features.fullBrand.title",
    descriptionKey: "howItWorks.features.fullBrand.desc"
  },
  {
    icon: Shield,
    titleKey: "howItWorks.features.riskFree.title",
    descriptionKey: "howItWorks.features.riskFree.desc"
  },
  {
    icon: BarChart3,
    titleKey: "howItWorks.features.realTime.title",
    descriptionKey: "howItWorks.features.realTime.desc"
  },
];

export default function HowItWorks() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              {t('howItWorks.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              {t('howItWorks.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.titleKey}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <Card className="p-8 h-full hover-lift transition-all duration-200 hover:shadow-lg border border-border">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {t(step.titleKey as any)}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      {t(step.descriptionKey as any)}
                    </p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {t(step.detailsKey as any)}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="py-16 bg-surface-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('howItWorks.metrics.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('howItWorks.metrics.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <MetricStat
              value={25}
              suffix="%*"
              label={t('howItWorks.metrics.stats.attachRate.label')}
              description={t('howItWorks.metrics.stats.attachRate.desc')}
            />
            <MetricStat
              value={320}
              prefix="€"
              suffix="*"
              label={t('howItWorks.metrics.stats.extraRevenue.label')}
              description={t('howItWorks.metrics.stats.extraRevenue.desc')}
            />
            <MetricStat
              value={7}
              suffix="*"
              label={t('howItWorks.metrics.stats.daysToROI.label')}
              description={t('howItWorks.metrics.stats.daysToROI.desc')}
            />
            <MetricStat
              value={94}
              suffix="%*"
              label={t('howItWorks.metrics.stats.satisfaction.label')}
              description={t('howItWorks.metrics.stats.satisfaction.desc')}
            />
          </div>
          <p className="text-xs text-muted-foreground text-center mt-6">
            * {t('howItWorks.metrics.disclaimer')}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('howItWorks.why.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center hover-lift transition-all duration-200 hover:shadow-lg border border-border">
                  <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-2xl mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
{t((feature as any).titleKey)}
                  </h3>
                  <p className="text-muted-foreground">
{t((feature as any).descriptionKey)}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-surface-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('howItWorks.faq.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('howItWorks.faq.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-background border border-border rounded-2xl px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
{t(item.questionKey)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
{t(item.answerKey)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="relative overflow-hidden gradient-primary text-white p-12 text-center">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">
                  {t('howItWorks.cta.title')}
                </h2>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                  {t('howItWorks.cta.subtitle')}
                </p>
                <Link to="/contact">
                  <Button 
                    size="lg"
                    variant="secondary"
                    className="bg-white text-primary font-semibold px-8 py-4 text-lg hover:bg-white/90 hover-lift"
                  >
                    {t('howItWorks.cta.button')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}