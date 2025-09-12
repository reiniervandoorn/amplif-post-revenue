import { motion } from "framer-motion";
import { ArrowRight, Target, DollarSign, Users, TrendingUp, Clock, Star, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MetricStat } from "@/components/MetricStat";
import { useLanguage } from "@/contexts/LanguageContext";

const valueProps = [
  {
    icon: Target,
    title: "Zero-CAC, High-Intent Moment",
    description: "Reach customers at the perfect moment - right after they've made a purchase and are in a buying mindset. No acquisition costs."
  },
  {
    icon: TrendingUp,
    title: "Fair Distribution Algorithm",
    description: "Our AI considers customer satisfaction scores and performance metrics to ensure quality partners get more visibility."
  },
  {
    icon: DollarSign,
    title: "Weekly Payouts",
    description: "Get paid weekly for all completed services. No waiting months for your earnings. Transparent reporting and fast payments."
  },
  {
    icon: Users,
    title: "Qualified Customer Base",
    description: "Access customers from premium merchants who value quality and are willing to invest in complementary services."
  },
  {
    icon: Shield,
    title: "Brand Protection",
    description: "We maintain high standards and provide clear 'offered by Partner' labeling. Your reputation is protected by our vetting process."
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "You control your capacity and availability. Our system matches customers to your schedule automatically."
  },
];

const partnerCategories = [
  {
    title: "Installation Services",
    icon: "🔧",
    description: "Professional setup and installation for electronics, appliances, and equipment",
    examples: ["TV mounting", "Appliance installation", "Smart home setup", "Furniture assembly"],
    demand: "High",
    earning: "€80-€200 per job"
  },
  {
    title: "Extended Warranties", 
    icon: "🛡️",
    description: "Protection plans and extended warranty coverage for purchased items",
    examples: ["Electronics protection", "Appliance warranties", "Equipment coverage", "Damage protection"],
    demand: "Very High",
    earning: "€25-€150 per policy"
  },
  {
    title: "Subscription Services",
    icon: "📱",
    description: "Recurring services and subscriptions that complement purchased products",
    examples: ["Software subscriptions", "Content streaming", "Maintenance plans", "Supply delivery"],
    demand: "High",
    earning: "€10-€50 monthly"
  },
  {
    title: "Training & Courses",
    icon: "🎓", 
    description: "Educational content and training programs related to purchased items",
    examples: ["Photography workshops", "Barista training", "Fitness coaching", "Tech tutorials"],
    demand: "Medium",
    earning: "€50-€300 per course"
  },
  {
    title: "Accessories & Add-ons",
    icon: "📦",
    description: "Complementary physical products that enhance the main purchase",
    examples: ["Camera accessories", "Kitchen tools", "Bike equipment", "Gaming peripherals"],
    demand: "Very High", 
    earning: "€15-€100 per item"
  },
  {
    title: "Maintenance & Support",
    icon: "⚙️",
    description: "Ongoing maintenance, support, and repair services",
    examples: ["Device maintenance", "Cleaning services", "Tune-ups", "Technical support"],
    demand: "Medium",
    earning: "€40-€120 per service"
  },
];

const requirements = [
  "Valid business license and insurance",
  "Minimum 4.5-star customer rating",
  "Proven track record in your category",
  "Professional service delivery",
  "Clear pricing and service descriptions",
  "Commitment to AmplifAI quality standards"
];

const successStory = {
  name: "InstallPro Services",
  category: "Installation",
  results: [
    { metric: "240%", label: "Revenue Growth" },
    { metric: "890", label: "Jobs Completed" },
    { metric: "4.9★", label: "Avg Rating" },
    { metric: "€89k", label: "Annual Earnings" }
  ],
  quote: "AmplifAI transformed our business. We went from hunting for customers to having a steady stream of high-quality jobs. The customers are already sold on the value - we just deliver great service.",
  author: "Marcus Chen, Founder"
};

export default function Partners() {
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
              Why Partners Choose AmplifAI
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join a marketplace that values quality and rewards great service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
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
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 bg-surface-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Partner Success Story
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real results from partners on our platform
            </p>
          </motion.div>

          <div className="bg-background rounded-3xl p-8 lg:p-12 border border-border shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl mb-6">🔧</div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {successStory.name}
                </h3>
                <div className="inline-flex px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                  {successStory.category} Partner
                </div>
                <blockquote className="text-muted-foreground italic text-lg leading-relaxed mb-6">
                  "{successStory.quote}"
                </blockquote>
                <cite className="text-sm font-medium text-foreground">
                  - {successStory.author}
                </cite>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {successStory.results.map((result, index) => (
                  <motion.div
                    key={result.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {result.metric}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {result.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
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
              Partner Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to earn by providing value to customers
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
                      <h4 className="font-medium text-foreground mb-2">Examples:</h4>
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
                        <span className="text-muted-foreground">Demand: </span>
                        <span className={`font-medium ${
                          category.demand === 'Very High' ? 'text-success' : 
                          category.demand === 'High' ? 'text-primary' : 'text-warning'
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
              Platform Metrics
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join a growing network of successful partners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <MetricStat
              value={850}
              suffix="+"
              label="Active Partners"
              description="Across all categories"
            />
            <MetricStat
              value={92}
              suffix="%"
              label="Partner Satisfaction"
              description="Would recommend us"
            />
            <MetricStat
              value={4.7}
              label="Avg Partner Rating"
              description="Customer satisfaction"
            />
            <MetricStat
              value={18}
              suffix="k"
              label="Jobs Completed"
              description="This month"
            />
          </div>
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
              Partner Requirements
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We maintain high standards to ensure the best experience for merchants and customers
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
                  Ready to grow your business?
                </h2>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                  Join AmplifAI's partner network and start accessing premium customers 
                  who are ready to purchase your services. No upfront costs, just results.
                </p>
                <Link to="/contact">
                  <Button 
                    size="lg"
                    variant="secondary"
                    className="bg-white text-primary font-semibold px-8 py-4 text-lg hover:bg-white/90 hover-lift"
                  >
                    Apply Now
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