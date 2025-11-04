import { motion } from "framer-motion";
import { Users, Target, Zap, Award, TrendingUp, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const features = [
  {
    icon: Target,
    title: 'Precision Targeting',
    description: 'AI-powered product matching ensures every recommendation is perfectly relevant'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: '< 100ms response time with zero impact on your page load speed'
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Average 23% increase in AOV with 89% customer satisfaction'
  },
  {
    icon: Shield,
    title: 'Brand Safe',
    description: 'Full control over partner selection and brand alignment'
  },
  {
    icon: Award,
    title: 'Quality Partners',
    description: 'Rigorously vetted service providers and premium brands only'
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Designed to enhance, not disrupt, the customer experience'
  }
];

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-surface-50 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              <span className="gradient-text">{t('about.title')}</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-surface-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="p-6 hover-lift transition-all duration-200 hover:shadow-lg h-full">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {t('about.mission.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.mission.text')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story & Technology Section */}
      <section className="py-16 bg-surface-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 h-full">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {t('about.story.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t('about.story.text')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">2024: Company founded</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">2024: Beta phase launched</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">2025: Growing merchant network</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="p-8 h-full">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {t('about.technology.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t('about.technology.text')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Machine Learning Accuracy</span>
                    <span className="text-sm font-bold text-primary">94.7%</span>
                  </div>
                  <div className="w-full bg-surface-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '94.7%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Response Time</span>
                    <span className="text-sm font-bold text-primary">&lt; 100ms</span>
                  </div>
                  <div className="w-full bg-surface-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Customer Satisfaction</span>
                    <span className="text-sm font-bold text-primary">89%</span>
                  </div>
                  <div className="w-full bg-surface-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '89%' }}></div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {t('about.team.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              {t('about.team.text')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">Bèta</div>
                <div className="text-sm text-muted-foreground">Nu in actieve beta fase</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">Groeiend</div>
                <div className="text-sm text-muted-foreground">Uitbreidend netwerk van partners</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">Innovatief</div>
                <div className="text-sm text-muted-foreground">AI-gedreven matching technologie</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}