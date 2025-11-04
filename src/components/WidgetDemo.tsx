import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Check, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PaymentModal } from "./PaymentModal";
import { PartnerDetailsModal, type Offer as PartnerOffer, type Partner as PartnerEntity } from "./PartnerDetailsModal";
import { useLanguage } from "@/contexts/LanguageContext";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  benefit: string;
  category: "webshop" | "partner";
  provider?: string;
  partner?: PartnerEntity;
}

interface PurchasedItem {
  id: string;
  name: string;
  price: string;
  image: string;
}

// Mock data for purchased items and their corresponding offers
const getPurchasedItems = (language: 'en' | 'nl'): PurchasedItem[] => [
  { id: "tv", name: language === 'nl' ? "4K Smart TV" : "4K Smart TV", price: language === 'nl' ? "€899" : "$899", image: "📺" },
  { id: "espresso", name: language === 'nl' ? "Espresso Machine" : "Espresso Machine", price: language === 'nl' ? "€449" : "$449", image: "☕" },
  { id: "bike", name: language === 'nl' ? "Racefiets" : "Road Bike", price: language === 'nl' ? "€1.299" : "$1,299", image: "🚴" },
  { id: "camera", name: language === 'nl' ? "Systeemcamera" : "Mirrorless Camera", price: language === 'nl' ? "€1.199" : "$1,199", image: "📸" },
  { id: "vacuum", name: language === 'nl' ? "Robotstofzuiger" : "Robot Vacuum", price: language === 'nl' ? "€399" : "$399", image: "🤖" },
];

// Helper function to get translated product catalog
const getProductCatalog = (language: 'en' | 'nl'): Record<string, { webshop: Product[]; partner: Product[] }> => ({
  tv: {
    webshop: [
      { id: "hdmi", name: language === 'nl' ? "Premium HDMI 2.1 Kabel" : "Premium HDMI 2.1 Cable", price: language === 'nl' ? "€29" : "$29", image: "🔌", benefit: "Perfect 4K signal", category: "webshop" },
      { id: "mount", name: language === 'nl' ? "Verstelbare Muurbeugel" : "Adjustable Wall Mount", price: language === 'nl' ? "€79" : "$79", image: "🔧", benefit: "Save space & style", category: "webshop" },
      { id: "soundbar", name: language === 'nl' ? "Draadloze Soundbar" : "Wireless Soundbar", price: language === 'nl' ? "€199" : "$199", image: "🔊", benefit: "Cinema-quality audio", category: "webshop" },
    ],
    partner: [
      { 
        id: "install", 
        name: language === 'nl' ? "Professionele Installatie" : "Professional Installation", 
        price: language === 'nl' ? "€149" : "$149", 
        image: "👨‍🔧", 
        benefit: "Same-day setup", 
        category: "partner", 
        provider: "TechInstall Pro",
        partner: {
          name: "TechInstall Pro",
          rating: 4.9,
          reviews: 324,
          description: language === 'nl' ? "Professionele TV-montage en setup service met 2 jaar garantie" : "Professional TV mounting and setup service with 2-year warranty",
          availability: language === 'nl' ? "Vandaag beschikbaar" : "Available today"
        }
      },
      { 
        id: "warranty", 
        name: language === 'nl' ? "Verlengde Garantie 3jr" : "Extended Warranty 3yr", 
        price: language === 'nl' ? "€199" : "$199", 
        image: "🛡️", 
        benefit: "Total peace of mind", 
        category: "partner", 
        provider: "SecureGuard",
        partner: {
          name: "SecureGuard",
          rating: 4.8,
          reviews: 892,
          description: language === 'nl' ? "3-jarige allesdekkende garantie inclusief schade" : "3-year comprehensive coverage including accidental damage",
          availability: language === 'nl' ? "Direct activeren" : "Instant activation"
        }
      },
      { 
        id: "calibration", 
        name: language === 'nl' ? "Professionele Kalibratie" : "Professional Calibration", 
        price: language === 'nl' ? "€99" : "$99", 
        image: "🎨", 
        benefit: "Perfect picture quality", 
        category: "partner", 
        provider: "PixelPerfect",
        partner: {
          name: "PixelPerfect",
          rating: 5.0,
          reviews: 156,
          description: language === 'nl' ? "Expert kleurkalibratie voor cinema-kwaliteit" : "Expert color calibration for cinema-quality viewing",
          availability: language === 'nl' ? "Deze week beschikbaar" : "Available this week"
        }
      },
    ],
  },
  espresso: {
    webshop: [
      { id: "grinder", name: language === 'nl' ? "Koffiemolen" : "Burr Coffee Grinder", price: language === 'nl' ? "€89" : "$89", image: "⚙️", benefit: "Perfect grind every time", category: "webshop" },
      { id: "descaler", name: language === 'nl' ? "Ontkalkingsmiddel" : "Descaling Solution", price: language === 'nl' ? "€19" : "$19", image: "🧴", benefit: "Keep it running smooth", category: "webshop" },
      { id: "cups", name: language === 'nl' ? "Espresso Kopjes Set" : "Espresso Cup Set", price: language === 'nl' ? "€39" : "$39", image: "☕", benefit: "Professional presentation", category: "webshop" },
    ],
    partner: [
      { 
        id: "course", 
        name: language === 'nl' ? "Barista Masterclass" : "Barista Masterclass", 
        price: language === 'nl' ? "€79" : "$79", 
        image: "🎓", 
        benefit: "Learn like a pro", 
        category: "partner", 
        provider: "Coffee Academy",
        partner: {
          name: "Coffee Academy",
          rating: 4.9,
          reviews: 267,
          description: language === 'nl' ? "Leer professionele espresso-technieken in 2 uur hands-on sessie" : "Learn professional espresso techniques in 2-hour hands-on session",
          availability: language === 'nl' ? "Wekelijkse lessen" : "Weekly classes"
        }
      },
      { 
        id: "beans", 
        name: language === 'nl' ? "Premium Bonen Abonnement" : "Premium Bean Subscription", 
        price: language === 'nl' ? "€29/mnd" : "$29/mo", 
        image: "🌱", 
        benefit: "Fresh roasted monthly", 
        category: "partner", 
        provider: "Origin Roasters",
        partner: {
          name: "Origin Roasters",
          rating: 4.8,
          reviews: 543,
          description: language === 'nl' ? "Premium single-origin bonen maandelijks geleverd" : "Premium single-origin beans delivered monthly",
          availability: language === 'nl' ? "Volgende levering over 2 dagen" : "Next delivery in 2 days"
        }
      },
      { 
        id: "maintenance", 
        name: language === 'nl' ? "Jaarlijks Onderhoud" : "Annual Maintenance", 
        price: language === 'nl' ? "€119" : "$119", 
        image: "🔧", 
        benefit: "Keep it perfect", 
        category: "partner", 
        provider: "CoffeeTech Services",
        partner: {
          name: "CoffeeTech Services",
          rating: 4.7,
          reviews: 189,
          description: language === 'nl' ? "Professioneel onderhoud om je machine perfect te houden" : "Professional maintenance to keep your machine running perfectly",
          availability: language === 'nl' ? "Deze maand beschikbaar" : "Available this month"
        }
      },
    ],
  },
  bike: {
    webshop: [
      { id: "helmet", name: language === 'nl' ? "Aero Racehelm" : "Aero Racing Helmet", price: language === 'nl' ? "€159" : "$159", image: "⛑️", benefit: "Safety meets speed", category: "webshop" },
      { id: "lights", name: language === 'nl' ? "LED Verlichting Set" : "LED Light Set", price: language === 'nl' ? "€49" : "$49", image: "💡", benefit: "Ride safely at night", category: "webshop" },
      { id: "pump", name: language === 'nl' ? "Draagbare CO2 Pomp" : "Portable CO2 Pump", price: language === 'nl' ? "€34" : "$34", image: "🔧", benefit: "Never get stranded", category: "webshop" },
    ],
    partner: [
      { 
        id: "fitting", 
        name: language === 'nl' ? "Professionele Bike Fitting" : "Professional Bike Fitting", 
        price: language === 'nl' ? "€199" : "$199", 
        image: "📐", 
        benefit: "Perfect comfort & power", 
        category: "partner", 
        provider: "FitCycle Pro",
        partner: {
          name: "FitCycle Pro",
          rating: 5.0,
          reviews: 412,
          description: language === 'nl' ? "Complete fitsessie voor optimaal comfort en prestaties" : "Comprehensive fitting session to optimize comfort and performance",
          availability: language === 'nl' ? "Volgende week beschikbaar" : "Available next week"
        }
      },
      { 
        id: "gps", 
        name: language === 'nl' ? "GPS Training App Pro" : "GPS Training App Pro", 
        price: language === 'nl' ? "€9,99/mnd" : "$9.99/mo", 
        image: "📱", 
        benefit: "Track every ride", 
        category: "partner", 
        provider: "CycleTracker",
        partner: {
          name: "CycleTracker",
          rating: 4.6,
          reviews: 1823,
          description: language === 'nl' ? "Geavanceerde trainingsplannen en prestatie-analyses" : "Advanced training plans and performance analytics",
          availability: language === 'nl' ? "Direct toegang" : "Instant access"
        }
      },
      { 
        id: "tuneup", 
        name: language === 'nl' ? "Complete Onderhoudsbeurt" : "Complete Tune-up", 
        price: language === 'nl' ? "€89" : "$89", 
        image: "🔧", 
        benefit: "Keep it running smooth", 
        category: "partner", 
        provider: "Local Bike Shop",
        partner: {
          name: "Local Bike Shop",
          rating: 4.8,
          reviews: 328,
          description: language === 'nl' ? "Volledige inspectie, afstelling en onderhoudsservice" : "Full inspection, adjustment, and maintenance service",
          availability: language === 'nl' ? "Morgen beschikbaar" : "Available tomorrow"
        }
      },
    ],
  },
  camera: {
    webshop: [
      { id: "lens", name: language === 'nl' ? "85mm Portret Lens" : "85mm Portrait Lens", price: language === 'nl' ? "€399" : "$399", image: "🔍", benefit: "Professional portraits", category: "webshop" },
      { id: "tripod", name: language === 'nl' ? "Carbon Statief" : "Carbon Fiber Tripod", price: language === 'nl' ? "€199" : "$199", image: "🦵", benefit: "Rock-solid stability", category: "webshop" },
      { id: "bag", name: language === 'nl' ? "Weerbestendige Cameratas" : "Weather-proof Camera Bag", price: language === 'nl' ? "€89" : "$89", image: "🎒", benefit: "Protect your investment", category: "webshop" },
    ],
    partner: [
      { 
        id: "workshop", 
        name: language === 'nl' ? "Fotografie Workshop" : "Photography Workshop", 
        price: language === 'nl' ? "€149" : "$149", 
        image: "🎓", 
        benefit: "Master your craft", 
        category: "partner", 
        provider: "Photo Academy",
        partner: {
          name: "Photo Academy",
          rating: 4.9,
          reviews: 234,
          description: language === 'nl' ? "4-uurs intensieve workshop over compositie en belichting" : "4-hour intensive workshop covering composition and lighting",
          availability: language === 'nl' ? "Weekend sessies" : "Weekend sessions"
        }
      },
      { 
        id: "lightroom", 
        name: language === 'nl' ? "Adobe Creative Suite" : "Adobe Creative Suite", 
        price: language === 'nl' ? "€20,99/mnd" : "$20.99/mo", 
        image: "🎨", 
        benefit: "Professional editing", 
        category: "partner", 
        provider: "Adobe",
        partner: {
          name: "Adobe",
          rating: 4.7,
          reviews: 15234,
          description: language === 'nl' ? "Professionele foto- en video-editing software suite" : "Professional photo and video editing software suite",
          availability: language === 'nl' ? "Direct toegang" : "Instant access"
        }
      },
      { 
        id: "insurance", 
        name: language === 'nl' ? "Uitrusting Verzekering" : "Equipment Insurance", 
        price: language === 'nl' ? "€19/mnd" : "$19/mo", 
        image: "🛡️", 
        benefit: "Full coverage protection", 
        category: "partner", 
        provider: "GearGuard",
        partner: {
          name: "GearGuard",
          rating: 4.8,
          reviews: 987,
          description: language === 'nl' ? "Allesdekkende dekking voor al je camera-uitrusting" : "Comprehensive coverage for all your camera equipment",
          availability: language === 'nl' ? "Direct activeren" : "Instant activation"
        }
      },
    ],
  },
  vacuum: {
    webshop: [
      { id: "filters", name: language === 'nl' ? "HEPA Filter 3-Pack" : "HEPA Filter 3-Pack", price: language === 'nl' ? "€29" : "$29", image: "🌪️", benefit: "Cleaner air & performance", category: "webshop" },
      { id: "brushes", name: language === 'nl' ? "Vervangborstel Set" : "Replacement Brush Set", price: language === 'nl' ? "€39" : "$39", image: "🧽", benefit: "Keep it cleaning perfect", category: "webshop" },
      { id: "dock", name: language === 'nl' ? "Premium Oplaadstation" : "Premium Charging Dock", price: language === 'nl' ? "€79" : "$79", image: "🔋", benefit: "Always ready to clean", category: "webshop" },
    ],
    partner: [
      { 
        id: "setup", 
        name: language === 'nl' ? "Smart Home Installatie" : "Smart Home Setup", 
        price: language === 'nl' ? "€99" : "$99", 
        image: "🏠", 
        benefit: "Complete automation", 
        category: "partner", 
        provider: "SmartHome Pro",
        partner: {
          name: "SmartHome Pro",
          rating: 4.9,
          reviews: 456,
          description: language === 'nl' ? "Volledige integratie met je domotica systeem" : "Full integration with your home automation system",
          availability: language === 'nl' ? "Deze week beschikbaar" : "Available this week"
        }
      },
      { 
        id: "cleaning", 
        name: language === 'nl' ? "Maandelijkse Grote Schoonmaak" : "Monthly Deep Clean", 
        price: language === 'nl' ? "€149" : "$149", 
        image: "✨", 
        benefit: "Professional results", 
        category: "partner", 
        provider: "CleanCo Services",
        partner: {
          name: "CleanCo Services",
          rating: 4.7,
          reviews: 723,
          description: language === 'nl' ? "Professionele schoonmaakservice als aanvulling op je robotstofzuiger" : "Professional house cleaning service complementing your robot vacuum",
          availability: language === 'nl' ? "Morgen beschikbaar" : "Next available slot tomorrow"
        }
      },
      { 
        id: "warranty", 
        name: language === 'nl' ? "Verlengde Garantie 2jr" : "Extended Warranty 2yr", 
        price: language === 'nl' ? "€79" : "$79", 
        image: "🛡️", 
        benefit: "Worry-free cleaning", 
        category: "partner", 
        provider: "RoboGuard",
        partner: {
          name: "RoboGuard",
          rating: 4.8,
          reviews: 634,
          description: language === 'nl' ? "2-jarige verlengde garantie voor alle onderdelen" : "2-year extended warranty covering all components",
          availability: language === 'nl' ? "Direct activeren" : "Instant activation"
        }
      },
    ],
  },
});

interface WidgetDemoProps {
  purchasedItem?: string;
  mode?: "webshop" | "partner";
}

export const WidgetDemo = ({ purchasedItem = "tv", mode = "partner" }: WidgetDemoProps) => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"webshop" | "partner">(mode);
  const [selectedItem, setSelectedItem] = useState(purchasedItem);
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());
  const [paymentProduct, setPaymentProduct] = useState<{ name: string; price: string; image: string } | null>(null);
  const [serviceOffer, setServiceOffer] = useState<PartnerOffer | null>(null);

  useEffect(() => {
    setActiveTab(mode);
  }, [mode]);

  const purchasedItems = getPurchasedItems(language);
  const currentPurchase = purchasedItems.find(item => item.id === selectedItem) || purchasedItems[0];
  const productCatalog = getProductCatalog(language);
  const currentOffers = productCatalog[selectedItem] || productCatalog.tv;

  const serviceIds = new Set(["install", "maintenance", "fitting", "tuneup", "setup", "assembly", "workshop", "course"]);
  const isServiceProduct = (p: Product) => p.category === "partner" && (serviceIds.has(p.id) || /install|setup|fit|maintenance|tune|class|workshop|course/i.test(p.name));

  const partnerDefaults: Record<string, PartnerEntity> = {
    "TechInstall Pro": { name: "TechInstall Pro", rating: 4.8, reviews: 2847, description: "Trusted installation professionals in your area", availability: "Same-day installation available" },
    "SecureGuard": { name: "SecureGuard", rating: 4.6, reviews: 8934, description: "Trusted warranty provider with comprehensive coverage", availability: "Instant activation" },
    "PixelPerfect": { name: "PixelPerfect", rating: 4.7, reviews: 1204, description: "Professional calibration for stunning picture quality", availability: "Appointments this week" },
    "Coffee Academy": { name: "Coffee Academy", rating: 4.9, reviews: 456, description: "Hands-on barista training by experts", availability: "Weekend slots available" },
    "Origin Roasters": { name: "Origin Roasters", rating: 4.8, reviews: 2091, description: "Fresh beans delivered monthly", availability: "Start anytime" },
    "FitCycle Pro": { name: "FitCycle Pro", rating: 4.9, reviews: 789, description: "Get the perfect bike fit for comfort & power", availability: "Book your 90-minute session" },
    "CycleTracker": { name: "CycleTracker", rating: 4.6, reviews: 15632, description: "Track every ride with pro analytics", availability: "Start today" },
    "Local Bike Shop": { name: "Local Bike Shop", rating: 4.8, reviews: 2156, description: "Keep your bike running smooth", availability: "Next-day service available" },
    "Photo Academy": { name: "Photo Academy", rating: 4.9, reviews: 234, description: "Master your craft with expert guidance", availability: "Weekend workshops" },
    "Adobe": { name: "Adobe", rating: 4.4, reviews: 125843, description: "Professional editing suite", availability: "Instant access" },
    "GearGuard": { name: "GearGuard", rating: 4.7, reviews: 5432, description: "Full coverage for your gear", availability: "Activate now" },
    "SmartHome Pro": { name: "SmartHome Pro", rating: 4.7, reviews: 3421, description: "Complete home automation setup", availability: "Same-week setup" },
    "CleanCo Services": { name: "CleanCo Services", rating: 4.7, reviews: 8765, description: "Professional cleaning services", availability: "Book recurring service" },
    "RoboGuard": { name: "RoboGuard", rating: 4.6, reviews: 1543, description: "Extended protection for your robot vac", availability: "Instant activation" },
  };

  const toPartnerOffer = (p: Product): PartnerOffer => ({
    name: p.name,
    image: p.image,
    price: p.price,
    category: "service",
    partner: p.partner || partnerDefaults[p.provider || "TechInstall Pro"] || { name: p.provider || "Trusted Partner", rating: 4.7, reviews: 500, description: "Trusted service provider", availability: "Available this week" }
  });

  const handleAddItem = (product: Product) => {
    if (isServiceProduct(product)) {
      setServiceOffer(toPartnerOffer(product));
      return;
    }
    // Show payment modal for non-service items
    setPaymentProduct({
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  const handleServiceBookingComplete = () => {
    setServiceOffer(null);
    // Show payment modal for the service after booking
    if (serviceOffer) {
      setPaymentProduct({
        name: serviceOffer.name,
        price: serviceOffer.price,
        image: serviceOffer.image
      });
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Device Frame */}
      <div className="relative bg-surface-100 rounded-3xl p-4 sm:p-8 shadow-2xl border border-border">
        {/* Mock Browser/App Header */}
        <div className="flex items-center space-x-2 mb-4 sm:mb-6">
          <div className="hidden sm:flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
<div className="flex-1 bg-surface-200 rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-muted-foreground sm:ml-4">
            {t('widget.sampleUrl')}
          </div>
        </div>

        {/* Thank You Page Content */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-success/10 rounded-full mb-3 sm:mb-4">
            <Check className="w-6 h-6 sm:w-8 sm:h-8 text-success" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{t('widget.orderConfirmed')}</h2>
          <p className="text-sm sm:text-base text-muted-foreground px-4">{t('widget.thankYou')} {currentPurchase.name}</p>
          
          {/* Purchase Item Selector for Demo */}
          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-card rounded-2xl border border-border max-w-md mx-auto">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                <span className="text-xl sm:text-2xl flex-shrink-0">{currentPurchase.image}</span>
                <div className="text-left min-w-0">
                  <p className="font-semibold text-xs sm:text-sm truncate">{currentPurchase.name}</p>
                  <p className="text-muted-foreground text-xs">{currentPurchase.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 flex-shrink-0">
                <select
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.target.value)}
                  className="text-xs bg-transparent border-none focus:ring-0 cursor-pointer"
                >
                  {purchasedItems.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* AmplifAI Widget */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative bg-card rounded-3xl border border-border shadow-xl overflow-hidden"
        >
          {/* Widget Header */}
          <div className="p-4 sm:p-6 border-b border-border">
            <div className="flex items-center justify-between mb-4 gap-2">
              <div className="flex items-center space-x-2 min-w-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm sm:text-base text-foreground truncate">{t('widget.title')}</h3>
                  <p className="text-xs text-muted-foreground hidden sm:block">{t('widget.subtitle')}</p>
                </div>
              </div>
              <div className="text-xs text-muted-foreground flex items-center space-x-1 flex-shrink-0">
                <Clock className="w-3 h-3" />
                <span className="hidden sm:inline">{t('widget.byAmplif')}</span>
              </div>
            </div>

            {/* Tab Switcher */}
            <div className="relative bg-surface-100 rounded-2xl p-1 grid grid-cols-2">
              <motion.div
                className="absolute inset-y-1 bg-background rounded-xl shadow-sm border border-border"
                initial={false}
                animate={{
                  x: activeTab === "webshop" ? 0 : "100%",
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              />
              <button
                onClick={() => setActiveTab("webshop")}
                className={`relative z-10 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium rounded-xl transition-colors ${
                  activeTab === "webshop" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t('widget.yourStore')}
              </button>
              <button
                onClick={() => setActiveTab("partner")}
                className={`relative z-10 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium rounded-xl transition-colors ${
                  activeTab === "partner" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t('widget.partners')}
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="p-4 sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
              >
                {currentOffers[activeTab].map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <Card className="p-3 sm:p-4 hover-lift transition-all duration-200 hover:shadow-lg border border-border">
                      <div className="text-center mb-3">
                        <div className="text-2xl sm:text-3xl leading-none mb-2">{product.image}</div>
                        <h4 className="font-semibold text-xs sm:text-sm text-foreground mb-1 min-h-[2rem] flex items-center justify-center">{product.name}</h4>
{product.provider && (
  <p className="text-xs text-brand-violet truncate">{t('common.by')} {product.provider}</p>
)}
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm sm:text-base text-foreground">{product.price}</span>
                          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                            <Star className="w-3 h-3 fill-current text-yellow-400" />
                            <span>4.8</span>
                          </div>
                        </div>
                        <Button
                          onClick={() => handleAddItem(product)}
                          variant="default"
                          className="w-full text-xs py-2 transition-all duration-200 gradient-primary text-white hover:shadow-md"
                        >
                          {t('widget.addInOneClick')}
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={!!paymentProduct}
        onClose={() => setPaymentProduct(null)}
        product={paymentProduct}
      />

      {/* Service Booking Modal */}
      <PartnerDetailsModal
        isOpen={!!serviceOffer}
        onClose={() => setServiceOffer(null)}
        offer={serviceOffer}
        onBookingComplete={handleServiceBookingComplete}
      />
    </div>
  );
};