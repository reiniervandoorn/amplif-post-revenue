import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star, TrendingUp, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WidgetDemo } from "@/components/WidgetDemo";
import { MetricStat } from "@/components/MetricStat";
import { useLanguage } from "@/contexts/LanguageContext";
const socialProofLogos = [{
  name: "TechCorp",
  logo: "🏢"
}, {
  name: "EliteStore",
  logo: "🛒"
}, {
  name: "ProCommerce",
  logo: "💎"
}, {
  name: "MegaRetail",
  logo: "🏪"
}, {
  name: "SmartShop",
  logo: "📱"
}];
const features = [{
  icon: Zap,
  key: "lightning"
}, {
  icon: TrendingUp,
  key: "ai"
}, {
  icon: Shield,
  key: "brand"
}];
export default function Home() {
  const { t } = useLanguage();
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/5 via-brand-violet/5 to-brand-fuchsia/5"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {t('home.hero.title')}
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">{t('home.hero.subtitle')}</p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="gradient-primary text-white font-semibold px-8 py-4 text-lg hover:shadow-xl hover-lift">
                  {t('home.hero.joinBeta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/examples">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg hover:bg-muted transition-colors">
                  {t('home.hero.seeExamples')}
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Live Demo Section */}
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('home.seeInAction')}
              </h2>
              <p className="text-muted-foreground">
{t('home.demo.subtitle')}
              </p>
              <p className="text-xs text-muted-foreground">{t('home.demo.hint')}</p>
            </div>
            
            <WidgetDemo />
          </motion.div>

          {/* Key Metrics */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.5
        }} className="mt-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('home.results.title')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('home.results.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <MetricStat value={28} suffix="%*" label={t('home.metrics.aov.label')} description={t('home.metrics.aov.desc')} />
              <MetricStat value={3.2} label={t('home.metrics.extraRevenue.label')} prefix="€" suffix="/order*" description={t('home.metrics.extraRevenue.desc')} />
              <MetricStat value={18} suffix="%*" label={t('home.metrics.attachRate.label')} description={t('home.metrics.attachRate.desc')} />
            </div>
            <p className="text-xs text-muted-foreground text-center mt-6">
              * {t('home.metrics.disclaimer')}
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.7
        }} className="mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => <motion.div key={feature.key} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.8 + index * 0.1
            }}>
                  <Card className="p-8 text-center hover-lift transition-all duration-200 hover:shadow-lg border border-border">
                    <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-2xl mb-6">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {t(`home.features.${(feature as any).key}.title`)}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(`home.features.${(feature as any).key}.desc`)}
                    </p>
                  </Card>
                </motion.div>)}
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.9
        }} className="mt-24">
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground mb-8">
                {t('home.socialProof.title')}
              </p>
              <div className="flex items-center justify-center space-x-12 opacity-60">
{socialProofLogos.map((company, index) => <motion.div key={company.name} initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                duration: 0.5,
                delay: 1 + index * 0.1
              }} className="flex items-center space-x-2">
                    <span className="text-2xl" aria-hidden> {company.logo}</span>
                    <span className="sr-only">{company.name}</span>
                  </motion.div>)}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 1.1
        }} className="mt-24">
            <Card className="relative overflow-hidden gradient-primary text-white p-12 text-center">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">
                  {t('home.cta.title')}
                </h2>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                  {t('home.cta.subtitle')}
                </p>
                <Link to="/contact">
                  <Button size="lg" variant="secondary" className="bg-white text-primary font-semibold px-8 py-4 text-lg hover:bg-white/90 hover-lift">
                    {t('home.cta.button')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>;
}