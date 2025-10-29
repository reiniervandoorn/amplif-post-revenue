import { motion } from "framer-motion";
import { ArrowRight, Target, DollarSign, Users, TrendingUp, Clock, Star, Shield, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MetricStat } from "@/components/MetricStat";
import { useLanguage } from "@/contexts/LanguageContext";





export default function Partners() {
  const { t } = useLanguage();

  const valueProps = [
    {
      icon: Target,
      title: t('partners.valueProp.zeroCac.title'),
      description: t('partners.valueProp.zeroCac.desc')
    },
    {
      icon: TrendingUp,
      title: t('partners.valueProp.fairDistribution.title'),
      description: t('partners.valueProp.fairDistribution.desc')
    },
    {
      icon: DollarSign,
      title: t('partners.valueProp.weeklyPayouts.title'),
      description: t('partners.valueProp.weeklyPayouts.desc')
    },
    {
      icon: Users,
      title: t('partners.valueProp.qualifiedCustomers.title'),
      description: t('partners.valueProp.qualifiedCustomers.desc')
    },
    {
      icon: Shield,
      title: t('partners.valueProp.brandProtection.title'),
      description: t('partners.valueProp.brandProtection.desc')
    },
    {
      icon: Clock,
      title: t('partners.valueProp.flexibleScheduling.title'),
      description: t('partners.valueProp.flexibleScheduling.desc')
    },
    {
      icon: LayoutDashboard,
      title: t('partners.valueProp.dashboard.title'),
      description: t('partners.valueProp.dashboard.desc')
    },
  ];

  const partnerCategories = [
    {
      title: t('partners.categories.installation.title'),
      icon: "🔧",
      description: t('partners.categories.installation.desc'),
      examples: [
        t('partners.categories.installation.example1'),
        t('partners.categories.installation.example2'),
        t('partners.categories.installation.example3'),
        t('partners.categories.installation.example4')
      ],
      demand: t('partners.categories.installation.demand'),
      earning: t('partners.categories.installation.earning')
    },
    {
      title: t('partners.categories.warranties.title'), 
      icon: "🛡️",
      description: t('partners.categories.warranties.desc'),
      examples: [
        t('partners.categories.warranties.example1'),
        t('partners.categories.warranties.example2'),
        t('partners.categories.warranties.example3'),
        t('partners.categories.warranties.example4')
      ],
      demand: t('partners.categories.warranties.demand'),
      earning: t('partners.categories.warranties.earning')
    },
    {
      title: t('partners.categories.subscriptions.title'),
      icon: "📱",
      description: t('partners.categories.subscriptions.desc'),
      examples: [
        t('partners.categories.subscriptions.example1'),
        t('partners.categories.subscriptions.example2'),
        t('partners.categories.subscriptions.example3'),
        t('partners.categories.subscriptions.example4')
      ],
      demand: t('partners.categories.subscriptions.demand'),
      earning: t('partners.categories.subscriptions.earning')
    },
    {
      title: t('partners.categories.training.title'),
      icon: "🎓", 
      description: t('partners.categories.training.desc'),
      examples: [
        t('partners.categories.training.example1'),
        t('partners.categories.training.example2'),
        t('partners.categories.training.example3'),
        t('partners.categories.training.example4')
      ],
      demand: t('partners.categories.training.demand'),
      earning: t('partners.categories.training.earning')
    },
    {
      title: t('partners.categories.accessories.title'),
      icon: "📦",
      description: t('partners.categories.accessories.desc'),
      examples: [
        t('partners.categories.accessories.example1'),
        t('partners.categories.accessories.example2'),
        t('partners.categories.accessories.example3'),
        t('partners.categories.accessories.example4')
      ],
      demand: t('partners.categories.accessories.demand'), 
      earning: t('partners.categories.accessories.earning')
    },
    {
      title: t('partners.categories.maintenance.title'),
      icon: "⚙️",
      description: t('partners.categories.maintenance.desc'),
      examples: [
        t('partners.categories.maintenance.example1'),
        t('partners.categories.maintenance.example2'),
        t('partners.categories.maintenance.example3'),
        t('partners.categories.maintenance.example4')
      ],
      demand: t('partners.categories.maintenance.demand'),
      earning: t('partners.categories.maintenance.earning')
    },
  ];

  const requirements = [
    t('partners.requirements.1'),
    t('partners.requirements.2'),
    t('partners.requirements.3'),
    t('partners.requirements.4'),
    t('partners.requirements.5'),
    t('partners.requirements.6')
  ];

  const successStory = {
    name: t('partners.successStory.name'),
    category: t('partners.successStory.category'),
    results: [
      { metric: "240%", label: t('partners.successStory.revenueGrowth') },
      { metric: "890", label: t('partners.successStory.jobsCompleted') },
      { metric: "4.9★", label: t('partners.successStory.avgRating') },
      { metric: "€89k", label: t('partners.successStory.annualEarnings') }
    ],
    quote: t('partners.successStory.quote'),
    author: t('partners.successStory.author')
  };

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
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl" dangerouslySetInnerHTML={{ __html: t('partners.hero.title') }}>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              {t('partners.hero.subtitle')}
            </p>
            <div className="mt-10">
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="gradient-primary text-white font-semibold px-8 py-4 text-lg hover:shadow-xl hover-lift"
                >
                  {t('partners.hero.joinNetwork')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('partners.whyChoose.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('partners.whyChoose.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.slice(0, -1).map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover-lift transition-all duration-200 hover:shadow-lg border border-border">
                  <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-2xl mb-6">
                    <prop.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {prop.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {prop.description}
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
                    {valueProps[valueProps.length - 1].title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {valueProps[valueProps.length - 1].description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">{t('partners.dashboard.feature1')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">{t('partners.dashboard.feature2')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">{t('partners.dashboard.feature3')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">{t('partners.dashboard.feature4')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">{t('partners.dashboard.feature5')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">{t('partners.dashboard.feature6')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('partners.categories.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('partners.categories.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover-lift transition-all duration-200 hover:shadow-lg border border-border">
                  <div className="text-5xl mb-6">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {category.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">{t('partners.categories.examples')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.examples.map((example, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-surface-100 text-muted-foreground rounded-full">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <span className="text-muted-foreground">{t('partners.categories.demand')} </span>
                        <span className={`font-medium ${
                          category.demand === t('partners.categories.warranties.demand') || category.demand === t('partners.categories.accessories.demand') ? 'text-success' : 
                          category.demand === t('partners.categories.installation.demand') || category.demand === t('partners.categories.subscriptions.demand') ? 'text-primary' : 'text-warning'
                        }`}>
                          {category.demand}
                        </span>
                      </div>
                      <div className="font-semibold text-foreground">
                        {category.earning}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Metrics */}
      <section className="py-16 bg-surface-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('partners.metrics.title')}<span className="text-[0.65rem] align-super">*</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('partners.metrics.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <MetricStat
              value={850}
              suffix="+"
              label={t('partners.metrics.activePartners')}
              description={t('partners.metrics.acrossCategories')}
            />
            <MetricStat
              value={92}
              suffix="%"
              label={t('partners.metrics.partnerSatisfaction')}
              description={t('partners.metrics.wouldRecommend')}
            />
            <MetricStat
              value={4.7}
              label={t('partners.metrics.avgRating')}
              description={t('partners.metrics.customerSatisfaction')}
            />
            <MetricStat
              value={18}
              suffix="k"
              label={t('partners.metrics.jobsCompleted')}
              description={t('partners.metrics.thisMonth')}
            />
          </div>
          <p className="text-xs text-muted-foreground text-center mt-8">
            * {t('partners.metrics.disclaimer')}
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('partners.requirements.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('partners.requirements.subtitle')}
            </p>
          </motion.div>

          <Card className="p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="inline-flex items-center justify-center w-6 h-6 gradient-primary rounded-full flex-shrink-0 mt-0.5">
                    <Star className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-muted-foreground">
                    {requirement}
                  </p>
                </motion.div>
              ))}
            </div>
          </Card>
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
                  {t('partners.cta.title')}
                </h2>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                  {t('partners.cta.subtitle')}
                </p>
                <Link to="/contact">
                  <Button 
                    size="lg"
                    variant="secondary"
                    className="bg-white text-primary font-semibold px-8 py-4 text-lg hover:bg-white/90 hover-lift"
                  >
                    {t('partners.cta.button')}
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