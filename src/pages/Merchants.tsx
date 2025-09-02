import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, TrendingUp, DollarSign, Settings, Clock, Shield, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MetricStat } from "@/components/MetricStat";

const valueProps = [
  {
    icon: DollarSign,
    title: "Found Margin, Zero Extra Ops",
    description: "Generate additional revenue without inventory, shipping, or customer service overhead. Pure margin on every add-on sale."
  },
  {
    icon: Shield,
    title: "Brand-Safe Controls",
    description: "Full control over partner offers with allow/deny lists, category restrictions, and brand guidelines. Maintain your reputation."
  },
  {
    icon: Clock,
    title: "1-Day Go-Live, 7-Day ROI",
    description: "Quick integration with immediate results. Most merchants see positive ROI within their first week of going live."
  },
  {
    icon: TrendingUp,
    title: "AI-Powered Optimization",
    description: "Our machine learning continuously improves offer relevance and timing to maximize conversion rates."
  },
  {
    icon: BarChart,
    title: "Comprehensive Analytics",
    description: "Real-time dashboard showing performance metrics, revenue attribution, and optimization opportunities."
  },
  {
    icon: Settings,
    title: "Seamless Integration",
    description: "Works with all major e-commerce platforms. No disruption to your existing checkout flow or customer experience."
  },
];

const integrationSteps = [
  {
    title: "Connect Your Store",
    description: "Install our lightweight snippet or platform-specific app",
    timeline: "5 minutes"
  },
  {
    title: "Configure Preferences", 
    description: "Set your brand guidelines and partner preferences",
    timeline: "10 minutes"
  },
  {
    title: "Go Live",
    description: "Start showing relevant offers to your customers",
    timeline: "Instant"
  },
  {
    title: "See Results",
    description: "Monitor performance and optimize your strategy",
    timeline: "7 days"
  },
];

const faqItems = [
  {
    question: "What e-commerce platforms do you support?",
    answer: "AmplifAI works with all major platforms including Shopify, WooCommerce, Magento, BigCommerce, Salesforce Commerce Cloud, and custom builds. We provide native integrations and universal JavaScript snippets."
  },
  {
    question: "How do refunds work?",
    answer: "Our refund coupling system automatically handles add-on refunds when the original item is returned. If customers return the main product, any related add-ons are refunded proportionally, maintaining complete transaction integrity."
  },
  {
    question: "What control do I have over partner offers?",
    answer: "Complete control. You can set category restrictions, maintain allow/deny lists for specific partners, require approval for new offers, and ensure all partner communications follow your brand guidelines."
  },
  {
    question: "How are partners vetted?",
    answer: "All partners go through our comprehensive KYC process including business license verification, insurance checks, customer review analysis, and financial standing assessment. Only high-quality, reliable partners are approved."
  },
  {
    question: "What's the revenue split?",
    answer: "You earn a commission on all partner sales generated through your customers, typically 10-25% depending on the service category. There are no upfront costs or monthly fees - you only pay when you earn."
  },
  {
    question: "Can I customize the widget design?",
    answer: "Yes, the widget is fully customizable to match your brand colors, fonts, and styling. We also offer A/B testing tools to optimize the design for maximum conversion."
  },
];

const platforms = [
  { name: "Shopify", logo: "🛒", users: "2M+" },
  { name: "WooCommerce", logo: "📦", users: "5M+" },
  { name: "Magento", logo: "🏪", users: "300K+" },
  { name: "BigCommerce", logo: "🏬", users: "60K+" },
  { name: "Salesforce", logo: "☁️", users: "150K+" },
  { name: "Custom", logo: "⚡", users: "Any size" },
];

export default function Merchants() {
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
              For <span className="gradient-text">Merchants</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              Turn your thank-you page into a revenue powerhouse. Add 15-40% to your average order value 
              with zero operational overhead and complete brand control.
            </p>
            <div className="mt-10">
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="gradient-primary text-white font-semibold px-8 py-4 text-lg hover:shadow-xl hover-lift"
                >
                  Start Your Free Trial
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
              Why Merchants Love AmplifAI
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to generate additional revenue without additional work
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
              Merchant Results
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real results from merchants using AmplifAI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <MetricStat
              value={32}
              suffix="%"
              label="Avg AOV Increase"
              description="Typical lift after 30 days"
            />
            <MetricStat
              value={18}
              suffix="%"
              label="Attach Rate"
              description="Customers adding offers"
            />
            <MetricStat
              value={89}
              prefix="€"
              label="Revenue Per Order"
              description="Additional earnings"
            />
            <MetricStat
              value={7}
              label="Days to ROI"
              description="Break-even timeline"
            />
          </div>
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
              Getting Started Is Simple
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From setup to first sale in under 30 minutes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationSteps.map((step, index) => (
              <motion.div
                key={step.title}
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
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {step.description}
                  </p>
                  <div className="inline-flex px-3 py-1 bg-success/10 text-success rounded-full text-sm font-medium">
                    {step.timeline}
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
              Works With Your Platform
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Native integrations and universal compatibility
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
                  <h3 className="font-semibold text-foreground mb-1">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {platform.users} merchants
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Everything merchants need to know about AmplifAI
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
                  Ready to boost your revenue?
                </h2>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                  Join hundreds of merchants already generating additional revenue with AmplifAI. 
                  No setup costs, no risk, pure upside.
                </p>
                <Link to="/contact">
                  <Button 
                    size="lg"
                    variant="secondary"
                    className="bg-white text-primary font-semibold px-8 py-4 text-lg hover:bg-white/90 hover-lift"
                  >
                    Talk to Us
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