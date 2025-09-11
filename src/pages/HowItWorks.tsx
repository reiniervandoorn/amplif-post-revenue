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
    question: "How does checkout integration work?",
    answer: "AmplifAI integrates seamlessly with your existing checkout flow. We support all major e-commerce platforms including Shopify, WooCommerce, Magento, and BigCommerce through lightweight snippets or native apps."
  },
  {
    question: "What happens with refunds?",
    answer: "Refunds are handled automatically through our coupling system. If the original item is refunded, any add-on purchases are also refunded proportionally. We maintain complete transaction integrity."
  },
  {
    question: "How are partners vetted?",
    answer: "All partners go through our KYC verification process. We check business licenses, insurance, customer reviews, and financial standing. You have full control over which partners can offer services to your customers."
  },
  {
    question: "Can I control what's offered?",
    answer: "Absolutely. You have granular control through allow/deny lists, category restrictions, and brand guidelines. Partners must follow your brand standards, and all offers show clear 'offered by Partner Name' labeling."
  },
  {
    question: "What analytics do I get?",
    answer: "Comprehensive dashboard showing attach rates, revenue per offer, partner performance, and customer satisfaction scores. Real-time data helps you optimize your offering strategy."
  },
];

const features = [
  {
    icon: Settings,
    title: "Full Brand Control",
    description: "Allow/deny lists, category controls, and brand safety measures ensure only appropriate offers reach your customers."
  },
  {
    icon: Shield,
    title: "Risk-Free Integration",
    description: "No upfront costs, no minimum commitments. Only pay when you generate additional revenue."
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track performance, optimize offerings, and measure ROI with comprehensive reporting dashboard."
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
                key={step.title}
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
              suffix="%"
              label="Attach Rate"
              description="Average customer adoption"
            />
            <MetricStat
              value={320}
              prefix="€"
              label="Extra Revenue"
              description="Per 1,000 orders processed"
            />
            <MetricStat
              value={7}
              label="Days to ROI"
              description="Typical break-even timeline"
            />
            <MetricStat
              value={94}
              suffix="%"
              label="Customer Satisfaction"
              description="Happy with recommendations"
            />
          </div>
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
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center hover-lift transition-all duration-200 hover:shadow-lg border border-border">
                  <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-2xl mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
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
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {item.answer}
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