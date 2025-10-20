import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Briefcase, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const openPositions = [
  {
    titleKey: "careers.job1.title",
    departmentKey: "careers.job1.department",
    location: "Remote",
    type: "Full-time",
    descKey: "careers.job1.desc"
  },
  {
    titleKey: "careers.job2.title",
    departmentKey: "careers.job2.department",
    location: "Amsterdam, NL",
    type: "Full-time",
    descKey: "careers.job2.desc"
  },
  {
    titleKey: "careers.job3.title",
    departmentKey: "careers.job3.department",
    location: "Remote",
    type: "Full-time",
    descKey: "careers.job3.desc"
  }
];

const benefits = [
  { iconKey: "💰", titleKey: "careers.benefit1.title", descKey: "careers.benefit1.desc" },
  { iconKey: "🏖️", titleKey: "careers.benefit2.title", descKey: "careers.benefit2.desc" },
  { iconKey: "🚀", titleKey: "careers.benefit3.title", descKey: "careers.benefit3.desc" },
  { iconKey: "🌍", titleKey: "careers.benefit4.title", descKey: "careers.benefit4.desc" }
];

export default function Careers() {
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
              {t('careers.title')}
            </h1>
            <p className="text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              {t('careers.subtitle')}
            </p>
          </motion.div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.titleKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center border border-border">
                  <div className="text-4xl mb-4">{benefit.iconKey}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {t(benefit.titleKey as any)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(benefit.descKey as any)}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Open Positions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-8">
              {t('careers.openPositions')}
            </h2>
            
            <div className="space-y-6">
              {openPositions.map((job, index) => (
                <motion.div
                  key={job.titleKey}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="p-6 hover-lift transition-all duration-200 hover:shadow-lg border border-border">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {t(job.titleKey as any)}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{t(job.departmentKey as any)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          {t(job.descKey as any)}
                        </p>
                      </div>
                      <Link to="/contact">
                        <Button className="gradient-primary text-white">
                          {t('careers.apply')}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 text-center bg-surface-50 rounded-3xl p-12 border border-border"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('careers.dontSeeRole')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('careers.dontSeeRoleDesc')}
            </p>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                {t('careers.getInTouch')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
