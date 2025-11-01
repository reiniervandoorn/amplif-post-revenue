import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, TrendingUp, DollarSign, Settings, Clock, Shield, BarChart, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MetricStat } from "@/components/MetricStat";
import { useLanguage } from "@/contexts/LanguageContext";

const getValueProps = (t: (key: string) => string) => [
  {
    icon: DollarSign,
    titleKey: "merchants.valueProps.foundMargin.title",
    descriptionKey: "merchants.valueProps.foundMargin.desc"
  },
  {
    icon: Shield,
    titleKey: "merchants.valueProps.brandSafe.title", 
    descriptionKey: "merchants.valueProps.brandSafe.desc"
  },
  {
    icon: Clock,
    titleKey: "merchants.valueProps.fastGoLive.title",
    descriptionKey: "merchants.valueProps.fastGoLive.desc"
  },
  {
    icon: TrendingUp,
    titleKey: "merchants.valueProps.aiPowered.title",
    descriptionKey: "merchants.valueProps.aiPowered.desc"
  },
  {
    icon: BarChart,
    titleKey: "merchants.valueProps.analytics.title",
    descriptionKey: "merchants.valueProps.analytics.desc"
  },
  {
    icon: Settings,
    titleKey: "merchants.valueProps.integration.title",
    descriptionKey: "merchants.valueProps.integration.desc"
  },
  {
    icon: LayoutDashboard,
    titleKey: "merchants.valueProps.dashboard.title",
    descriptionKey: "merchants.valueProps.dashboard.desc"
  },
];

const getIntegrationSteps = (t: (key: string) => string) => [
  {
    titleKey: "merchants.integration.step1.title",
    descriptionKey: "merchants.integration.step1.desc",
    timelineKey: "merchants.integration.step1.timeline"
  },
  {
    titleKey: "merchants.integration.step2.title",
    descriptionKey: "merchants.integration.step2.desc", 
    timelineKey: "merchants.integration.step2.timeline"
  },
  {
    titleKey: "merchants.integration.step3.title",
    descriptionKey: "merchants.integration.step3.desc",
    timelineKey: "merchants.integration.step3.timeline"
  },
  {
    titleKey: "merchants.integration.step4.title",
    descriptionKey: "merchants.integration.step4.desc",
    timelineKey: "merchants.integration.step4.timeline"
  },
];

const getFaqItems = (t: (key: string) => string) => [
  {
    questionKey: "merchants.faq.platforms.q",
    answerKey: "merchants.faq.platforms.a"
  },
  {
    questionKey: "merchants.faq.refunds.q",
    answerKey: "merchants.faq.refunds.a"
  },
  {
    questionKey: "merchants.faq.control.q",
    answerKey: "merchants.faq.control.a"
  },
  {
    questionKey: "merchants.faq.vetting.q",
    answerKey: "merchants.faq.vetting.a"
  },
  {
    questionKey: "merchants.faq.revenue.q",
    answerKey: "merchants.faq.revenue.a"
  },
  {
    questionKey: "merchants.faq.design.q",
    answerKey: "merchants.faq.design.a"
  },
];

const platforms = [
  { name: "Shopify", logo: "🛒" },
  { name: "WooCommerce", logo: "📦" },
  { name: "Magento", logo: "🏪" },
  { name: "BigCommerce", logo: "🏬" },
  { name: "Salesforce", logo: "☁️" },
  { name: "Custom", logo: "⚡" },
];

export default function Merchants() {
  const { t } = useLanguage();
  const valueProps = getValueProps(t);
  const integrationSteps = getIntegrationSteps(t);
  const faqItems = getFaqItems(t);

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
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl" dangerouslySetInnerHTML={{ __html: t('merchants.hero.title') }}>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              {t('merchants.hero.subtitle')}
            </p>
            <div className="mt-10">
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="gradient-primary text-white font-semibold px-8 py-4 text-lg hover:shadow-xl hover-lift"
                >
                  {t('merchants.hero.startTrial')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Props Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('merchants.valueProps.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('merchants.valueProps.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.slice(0, -1).map((prop, index) => (
              <motion.div
                key={prop.titleKey}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover-lift transition-all duration-200 hover:shadow-lg border border-border">
                  <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-2xl mb-6">
                    <prop.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {t(prop.titleKey)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(prop.descriptionKey)}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Dashboard Section - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8"
          >
            <Card className="p-8 hover-lift transition-all duration-200 hover:shadow-lg border border-border">
              <div className="flex items-start gap-6">
                <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-2xl flex-shrink-0">
                  <LayoutDashboard className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {t(valueProps[valueProps.length - 1].titleKey)}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {t(valueProps[valueProps.length - 1].descriptionKey)}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">{t('merchants.dashboard.feature1')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">{t('merchants.dashboard.feature2')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">{t('merchants.dashboard.feature3')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">{t('merchants.dashboard.feature4')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">{t('merchants.dashboard.feature5')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">{t('merchants.dashboard.feature6')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-surface-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('merchants.results.title')}<span className="text-[0.65rem] align-super">*</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('merchants.results.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <MetricStat
              value={32}
              suffix="%"
              label={t('merchants.results.aovIncrease')}
              description={t('merchants.results.aovDesc')}
            />
            <MetricStat
              value={18}
              suffix="%"
              label={t('merchants.results.attachRate')}
              description={t('merchants.results.attachDesc')}
            />
            <MetricStat
              value={89}
              prefix="€"
              label={t('merchants.results.revenuePerOrder')}
              description={t('merchants.results.revenueDesc')}
            />
            <MetricStat
              value={7}
              label={t('merchants.results.daysToROI')}
              description={t('merchants.results.roiDesc')}
            />
          </div>
          <p className="text-xs text-muted-foreground text-center mt-8">
            * {t('merchants.results.disclaimer')}
          </p>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('merchants.integration.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('merchants.integration.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationSteps.map((step, index) => (
              <motion.div
                key={step.titleKey}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-full text-white font-bold text-xl mb-6">
                    {index + 1}
                    {index < integrationSteps.length - 1 && (
                      <div className="hidden lg:block absolute left-full top-1/2 w-full h-0.5 bg-border transform -translate-y-1/2 ml-8"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t(step.descriptionKey)}
                  </p>
                  <div className="inline-flex px-3 py-1 bg-success/10 text-success rounded-full text-sm font-medium">
                    {t(step.timelineKey)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Support */}
      <section className="py-16 bg-surface-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('merchants.platforms.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('merchants.platforms.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="p-6 hover-lift transition-all duration-200 hover:shadow-lg border border-border">
                  <div className="text-3xl mb-3">{platform.logo}</div>
                  <h3 className="font-semibold text-foreground">
                    {platform.name}
                  </h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simulator Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('merchants.simulator.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('merchants.simulator.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Left side - Dashboard preview */}
                <div className="bg-surface-50 p-8 border-r border-border">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-4 border-b border-border">
                      <h3 className="font-semibold text-foreground">{t('merchants.simulator.dashboard')}</h3>
                      <span className="text-xs px-2 py-1 bg-success/10 text-success rounded-full">{t('merchants.simulator.live')}</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-background p-4 rounded-lg">
                        <div className="text-sm text-muted-foreground mb-1">{t('merchants.simulator.todayRevenue')}</div>
                        <div className="text-2xl font-bold text-foreground">€842</div>
                        <div className="text-xs text-success">+18% {t('merchants.simulator.vsYesterday')}</div>
                      </div>
                      
                      <div className="bg-background p-4 rounded-lg">
                        <div className="text-sm text-muted-foreground mb-1">{t('merchants.simulator.ordersWithOffers')}</div>
                        <div className="text-2xl font-bold text-foreground">24/67</div>
                        <div className="text-xs text-muted-foreground">36% {t('merchants.simulator.attachRate')}</div>
                      </div>
                      
                      <div className="bg-background p-4 rounded-lg">
                        <div className="text-sm text-muted-foreground mb-2">{t('merchants.simulator.topPartners')}</div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-foreground">InstallPro</span>
                            <span className="text-success font-medium">€320</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-foreground">WarrantyPlus</span>
                            <span className="text-success font-medium">€289</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-foreground">TechCare</span>
                            <span className="text-success font-medium">€233</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Controls */}
                <div className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">{t('merchants.simulator.controls')}</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-surface-50 rounded-lg">
                          <span className="text-sm text-foreground">{t('merchants.simulator.approvePartners')}</span>
                          <div className="w-10 h-6 bg-primary rounded-full relative">
                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-surface-50 rounded-lg">
                          <span className="text-sm text-foreground">{t('merchants.simulator.autoMatch')}</span>
                          <div className="w-10 h-6 bg-primary rounded-full relative">
                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-surface-50 rounded-lg">
                          <span className="text-sm text-foreground">{t('merchants.simulator.showWarranties')}</span>
                          <div className="w-10 h-6 bg-primary rounded-full relative">
                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <h4 className="font-semibold text-foreground mb-3">{t('merchants.simulator.recentActivity')}</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-success mt-1.5"></div>
                          <div>
                            <div className="text-foreground">{t('merchants.simulator.activity1')}</div>
                            <div className="text-xs text-muted-foreground">2 min {t('merchants.simulator.ago')}</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                          <div>
                            <div className="text-foreground">{t('merchants.simulator.activity2')}</div>
                            <div className="text-xs text-muted-foreground">8 min {t('merchants.simulator.ago')}</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-success mt-1.5"></div>
                          <div>
                            <div className="text-foreground">{t('merchants.simulator.activity3')}</div>
                            <div className="text-xs text-muted-foreground">15 min {t('merchants.simulator.ago')}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('merchants.faq.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('merchants.faq.subtitle')}
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
                  className="bg-surface-50 border border-border rounded-2xl px-6"
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
      <section className="py-16 bg-surface-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="relative overflow-hidden gradient-primary text-white p-12 text-center">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">
                  {t('merchants.cta.title')}
                </h2>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                  {t('merchants.cta.subtitle')}
                </p>
                <Link to="/contact">
                  <Button 
                    size="lg"
                    variant="secondary"
                    className="bg-white text-primary font-semibold px-8 py-4 text-lg hover:bg-white/90 hover-lift"
                  >
                    {t('merchants.cta.button')}
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