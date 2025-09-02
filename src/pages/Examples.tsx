import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExamplePairingCard } from "@/components/ExamplePairingCard";

const examplePairings = [
  {
    id: "tv",
    purchased: {
      name: "4K Smart TV",
      image: "📺",
      price: "$899"
    },
    offers: [
      { name: "Professional Installation", image: "👨‍🔧", price: "$149", category: "service" as const },
      { name: "Premium HDMI Cable", image: "🔌", price: "$29", category: "accessory" as const },
      { name: "Extended Warranty", image: "🛡️", price: "$199", category: "warranty" as const }
    ]
  },
  {
    id: "espresso",
    purchased: {
      name: "Espresso Machine",
      image: "☕",
      price: "$449"
    },
    offers: [
      { name: "Descaler Kit", image: "🧴", price: "$19", category: "accessory" as const },
      { name: "Barista Course", image: "🎓", price: "$79", category: "service" as const },
      { name: "Bean Subscription", image: "🌱", price: "$29/mo", category: "subscription" as const }
    ]
  },
  {
    id: "bike",
    purchased: {
      name: "Road Bike",
      image: "🚴",
      price: "$1,299"
    },
    offers: [
      { name: "Professional Bike Fitting", image: "📐", price: "$199", category: "service" as const },
      { name: "GPS Training App", image: "📱", price: "$9.99/mo", category: "subscription" as const },
      { name: "Complete Tune-up", image: "🔧", price: "$89", category: "service" as const }
    ]
  },
  {
    id: "washer",
    purchased: {
      name: "Washer & Dryer Set",
      image: "🧺",
      price: "$1,599"
    },
    offers: [
      { name: "Professional Installation", image: "🔧", price: "$199", category: "service" as const },
      { name: "Stacking Kit", image: "📦", price: "$79", category: "accessory" as const },
      { name: "Extended Warranty", image: "🛡️", price: "$299", category: "warranty" as const }
    ]
  },
  {
    id: "camera",
    purchased: {
      name: "Mirrorless Camera",
      image: "📸",
      price: "$1,199"
    },
    offers: [
      { name: "Adobe Creative Suite", image: "🎨", price: "$20.99/mo", category: "subscription" as const },
      { name: "Memory Card Pro", image: "💾", price: "$89", category: "accessory" as const },
      { name: "Photography Workshop", image: "🎓", price: "$149", category: "service" as const }
    ]
  },
  {
    id: "vacuum",
    purchased: {
      name: "Robot Vacuum",
      image: "🤖",
      price: "$399"
    },
    offers: [
      { name: "Extended Warranty", image: "🛡️", price: "$79", category: "warranty" as const },
      { name: "Filter 3-Pack", image: "🌪️", price: "$29", category: "accessory" as const },
      { name: "Monthly Cleaning Service", image: "✨", price: "$149/mo", category: "subscription" as const }
    ]
  }
];

const categories = [
  { name: "Accessories", count: 8, color: "bg-blue-100 text-blue-700" },
  { name: "Services", count: 12, color: "bg-green-100 text-green-700" },
  { name: "Warranties", count: 6, color: "bg-purple-100 text-purple-700" },
  { name: "Subscriptions", count: 9, color: "bg-orange-100 text-orange-700" }
];

export default function Examples() {
  const handleTryDemo = (itemId: string) => {
    // Navigate to home with the selected item
    window.location.href = `/#demo?item=${itemId}`;
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
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Perfect <span className="gradient-text">Pairing Examples</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              See how AmplifAI creates perfect product pairings across different categories. 
              Each pairing is intelligently matched to maximize value for your customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 bg-surface-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Offer Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AmplifAI supports multiple types of complementary offers to maximize your revenue potential
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-200">
                  <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium mb-3 ${category.color}`}>
                    {category.name}
                  </div>
                  <p className="text-2xl font-bold text-foreground">{category.count}</p>
                  <p className="text-sm text-muted-foreground">Active Pairings</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Example Pairings
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Click any card to see the perfect complementary offers. Each pairing is designed to add genuine value to your customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examplePairings.map((pairing, index) => (
              <motion.div
                key={pairing.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ExamplePairingCard 
                  pairing={pairing} 
                  onTryDemo={handleTryDemo}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-surface-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real results from merchants using these exact pairings
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background rounded-2xl p-8 border border-border"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">📺</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Electronics Store
                </h3>
                <p className="text-muted-foreground mb-4">
                  "Installation services have a 45% attach rate. Pure profit with zero inventory."
                </p>
                <div className="text-2xl font-bold gradient-text">+€89k</div>
                <p className="text-sm text-muted-foreground">Additional monthly revenue</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background rounded-2xl p-8 border border-border"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">☕</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Kitchen Specialists
                </h3>
                <p className="text-muted-foreground mb-4">
                  "Barista courses create loyal customers who buy more accessories."
                </p>
                <div className="text-2xl font-bold gradient-text">+34%</div>
                <p className="text-sm text-muted-foreground">Average order value increase</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-background rounded-2xl p-8 border border-border"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">🚴</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Sports Retailer
                </h3>
                <p className="text-muted-foreground mb-4">
                  "Professional fitting services became our highest margin offering."
                </p>
                <div className="text-2xl font-bold gradient-text">28%</div>
                <p className="text-sm text-muted-foreground">Attach rate for services</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-brand-indigo/10 via-brand-violet/10 to-brand-fuchsia/10 rounded-3xl p-12 border border-border">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to create your own perfect pairings?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start with our proven pairing templates and customize them for your store. 
                Our team will help you identify the best opportunities.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="gradient-primary text-white font-semibold px-8 py-4 text-lg hover:shadow-xl hover-lift"
                  >
                    Start Your Beta
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="px-8 py-4 text-lg hover:bg-muted transition-colors"
                  >
                    Try the Demo
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}