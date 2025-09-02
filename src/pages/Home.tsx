import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star, TrendingUp, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WidgetDemo } from "@/components/WidgetDemo";
import { MetricStat } from "@/components/MetricStat";

const socialProofLogos = [
  { name: "TechCorp", logo: "🏢" },
  { name: "EliteStore", logo: "🛒" },
  { name: "ProCommerce", logo: "💎" },
  { name: "MegaRetail", logo: "🏪" },
  { name: "SmartShop", logo: "📱" },
];

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Shows up instantly after purchase. No delays, no friction."
  },
  {
    icon: TrendingUp,
    title: "AI-Powered Matching", 
    description: "Smart algorithms find the perfect complementary products."
  },
  {
    icon: Shield,
    title: "Brand Safe",
    description: "Full control over what partners can offer your customers."
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/5 via-brand-violet/5 to-brand-fuchsia/5"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Turn your{" "}
              <span className="gradient-text">Thank-You Page</span>
              <br />
              into Instant Revenue
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              AmplifAI shows highly relevant add-ons from your catalog and trusted partners—right after purchase. 
              Increase AOV by 15-40% with zero operational overhead.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap">
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="gradient-primary text-white font-semibold px-8 py-4 text-lg hover:shadow-xl hover-lift"
                >
                  Join the Beta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/examples">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-4 text-lg hover:bg-muted transition-colors"
                >
                  See Examples
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Live Demo Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                See it in action
              </h2>
              <p className="text-muted-foreground">
                This is how your thank-you page transforms with AmplifAI
              </p>
            </div>
            
            <WidgetDemo />
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Results that speak for themselves
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our beta merchants are already seeing incredible results with AmplifAI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <MetricStat
                value={28}
                suffix="%"
                label="Average AOV Increase"
                description="Typical lift in average order value within 30 days"
              />
              <MetricStat
                value={3.2}
                label="Extra Revenue"
                prefix="€"
                suffix="/order"
                description="Additional revenue per completed order"
              />
              <MetricStat
                value={18}
                suffix="%"
                label="Attach Rate"
                description="Customers who add at least one offer"
              />
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-24"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
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
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-24"
          >
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground mb-8">
                Trusted by leading e-commerce brands
              </p>
              <div className="flex items-center justify-center space-x-12 opacity-60">
                {socialProofLogos.map((company, index) => (
                  <motion.div
                    key={company.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-2xl">{company.logo}</span>
                    <span className="font-semibold text-muted-foreground">{company.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-24"
          >
            <Card className="relative overflow-hidden gradient-primary text-white p-12 text-center">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to transform your thank-you page?
                </h2>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                  Join hundreds of merchants already boosting their revenue with AmplifAI. 
                  Setup takes less than 5 minutes.
                </p>
                <Link to="/contact">
                  <Button 
                    size="lg"
                    variant="secondary"
                    className="bg-white text-primary font-semibold px-8 py-4 text-lg hover:bg-white/90 hover-lift"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}