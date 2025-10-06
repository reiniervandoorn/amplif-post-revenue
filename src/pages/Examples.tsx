import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExamplePairingCard } from "@/components/ExamplePairingCard";
import { useLanguage } from "@/contexts/LanguageContext";

// Helper function to build example pairings from translations
const getExamplePairings = (t: (key: string) => string) => [
  {
    id: "tv",
    purchased: {
      name: t('products.tv'),
      image: "📺",
      price: "$899"
    },
    offers: [
      { 
        name: t('offers.professionalInstallation'),
        image: "👨‍🔧", 
        price: "$149", 
        category: "service" as const,
        partner: {
          name: t('partners.techInstallPro'),
          rating: 4.8,
          reviews: 2847,
          description: t('partnerDesc.techInstallPro'),
          availability: t('partnerAvail.sameDayInstall')
        }
      },
      { 
        name: t('offers.premiumHdmi'),
        image: "🔌", 
        price: "$29", 
        category: "accessory" as const,
        partner: {
          name: t('common.yourStore'),
          rating: 4.9,
          reviews: 12453,
          description: t('partnerDesc.yourStore'),
          availability: t('partnerAvail.inStock')
        }
      },
      { 
        name: t('offers.extendedWarranty'),
        image: "🛡️", 
        price: "$199", 
        category: "warranty" as const,
        partner: {
          name: t('partners.secureGuard'),
          rating: 4.6,
          reviews: 8934,
          description: t('partnerDesc.secureGuard'),
          availability: t('partnerAvail.instantActivation')
        }
      }
    ]
  },
  {
    id: "espresso",
    purchased: {
      name: t('products.espresso'),
      image: "☕",
      price: "$449"
    },
    offers: [
      { 
        name: t('offers.descalerKit'),
        image: "🧴", 
        price: "$19", 
        category: "accessory" as const,
        partner: {
          name: t('common.yourStore'),
          rating: 4.7,
          reviews: 1234,
          description: t('partnerDesc.yourStore'),
          availability: t('partnerAvail.inStock')
        }
      },
      { 
        name: t('offers.baristaCourse'),
        image: "🎓", 
        price: "$79", 
        category: "service" as const,
        partner: {
          name: t('partners.coffeeMasters'),
          rating: 4.9,
          reviews: 456,
          description: t('partnerDesc.coffeeMasters'),
          availability: t('partnerAvail.weekendSlots')
        }
      },
      { 
        name: t('offers.beanSubscription'),
        image: "🌱", 
        price: "$29/mo", 
        category: "subscription" as const,
        partner: {
          name: t('partners.roastCo'),
          rating: 4.8,
          reviews: 3421,
          description: t('partnerDesc.roastCo'),
          availability: t('partnerAvail.startAnytime')
        }
      }
    ]
  },
  {
    id: "bike",
    purchased: {
      name: t('products.bike'),
      image: "🚴",
      price: "$1,299"
    },
    offers: [
      { 
        name: t('offers.bikeFitting'),
        image: "📐", 
        price: "$199", 
        category: "service" as const,
        partner: {
          name: t('partners.bikefitSpecialists'),
          rating: 4.9,
          reviews: 789,
          description: t('partnerDesc.bikefitSpecialists'),
          availability: t('partnerAvail.book90min')
        }
      },
      { 
        name: t('offers.gpsApp'),
        image: "📱", 
        price: "$9.99/mo", 
        category: "subscription" as const,
        partner: {
          name: t('partners.cycleTracker'),
          rating: 4.6,
          reviews: 15632,
          description: t('partnerDesc.cycleTracker'),
          availability: t('partnerAvail.freeTrial7')
        }
      },
      { 
        name: t('offers.tuneup'),
        image: "🔧", 
        price: "$89", 
        category: "service" as const,
        partner: {
          name: t('partners.precisionCycling'),
          rating: 4.8,
          reviews: 2156,
          description: t('partnerDesc.precisionCycling'),
          availability: t('partnerAvail.nextDay')
        }
      }
    ]
  },
  {
    id: "washer",
    purchased: {
      name: t('products.washer'),
      image: "🧺",
      price: "$1,599"
    },
    offers: [
      { 
        name: t('offers.washerInstall'),
        image: "🔧", 
        price: "$199", 
        category: "service" as const,
        partner: {
          name: t('partners.homeInstallExpress'),
          rating: 4.7,
          reviews: 5643,
          description: t('partnerDesc.homeInstallExpress'),
          availability: t('partnerAvail.within3days')
        }
      },
      { 
        name: t('offers.stackingKit'),
        image: "📦", 
        price: "$79", 
        category: "accessory" as const,
        partner: {
          name: t('common.yourStore'),
          rating: 4.8,
          reviews: 892,
          description: t('partnerDesc.yourStore'),
          availability: t('partnerAvail.inStock')
        }
      },
      { 
        name: t('offers.washerWarranty'),
        image: "🛡️", 
        price: "$299", 
        category: "warranty" as const,
        partner: {
          name: t('partners.applianceCare'),
          rating: 4.5,
          reviews: 4321,
          description: t('partnerDesc.applianceCare'),
          availability: t('partnerAvail.instantActivation')
        }
      }
    ]
  },
  {
    id: "camera",
    purchased: {
      name: t('products.camera'),
      image: "📸",
      price: "$1,199"
    },
    offers: [
      { 
        name: t('offers.adobeSuite'),
        image: "🎨", 
        price: "$20.99/mo", 
        category: "subscription" as const,
        partner: {
          name: t('partners.adobe'),
          rating: 4.4,
          reviews: 125843,
          description: t('partnerDesc.adobe'),
          availability: t('partnerAvail.instantAccess')
        }
      },
      { 
        name: t('offers.memoryCard'),
        image: "💾", 
        price: "$89", 
        category: "accessory" as const,
        partner: {
          name: t('common.yourStore'),
          rating: 4.9,
          reviews: 3456,
          description: t('partnerDesc.yourStore'),
          availability: t('partnerAvail.inStock')
        }
      },
      { 
        name: t('offers.photoWorkshop'),
        image: "🎓", 
        price: "$149", 
        category: "service" as const,
        partner: {
          name: t('partners.photoSkills'),
          rating: 4.9,
          reviews: 234,
          description: t('partnerDesc.photoSkills'),
          availability: t('partnerAvail.weekendWorkshops')
        }
      }
    ]
  },
  {
    id: "vacuum",
    purchased: {
      name: t('products.vacuum'),
      image: "🤖",
      price: "$399"
    },
    offers: [
      { 
        name: t('offers.vacuumWarranty'),
        image: "🛡️", 
        price: "$79", 
        category: "warranty" as const,
        partner: {
          name: t('partners.roboGuard'),
          rating: 4.6,
          reviews: 1543,
          description: t('partnerDesc.roboGuard'),
          availability: t('partnerAvail.instantActivation')
        }
      },
      { 
        name: t('offers.filterPack'),
        image: "🌪️", 
        price: "$29", 
        category: "accessory" as const,
        partner: {
          name: t('common.yourStore'),
          rating: 4.8,
          reviews: 2134,
          description: t('partnerDesc.yourStore'),
          availability: t('partnerAvail.inStock')
        }
      },
      { 
        name: t('offers.cleaningService'),
        image: "✨", 
        price: "$149/mo", 
        category: "subscription" as const,
        partner: {
          name: t('partners.cleanPro'),
          rating: 4.7,
          reviews: 8765,
          description: t('partnerDesc.cleanPro'),
          availability: t('partnerAvail.bookRecurring')
        }
      }
    ]
  },
  {
    id: "laptop",
    purchased: {
      name: t('products.laptop'),
      image: "💻",
      price: "$1,899"
    },
    offers: [
      { 
        name: t('offers.gamingMouse'),
        image: "🖱️", 
        price: "$79", 
        category: "accessory" as const,
        partner: {
          name: t('common.yourStore'),
          rating: 4.8,
          reviews: 5432,
          description: t('partnerDesc.yourStore'),
          availability: t('partnerAvail.inStock')
        }
      },
      { 
        name: t('offers.cloudGaming'),
        image: "☁️", 
        price: "$14.99/mo", 
        category: "subscription" as const,
        partner: {
          name: t('partners.gameStream'),
          rating: 4.5,
          reviews: 23456,
          description: t('partnerDesc.gameStream'),
          availability: t('partnerAvail.startImmediately')
        }
      },
      { 
        name: t('offers.pcSetup'),
        image: "⚙️", 
        price: "$99", 
        category: "service" as const,
        partner: {
          name: t('partners.pcPerformance'),
          rating: 4.9,
          reviews: 1876,
          description: t('partnerDesc.pcPerformance'),
          availability: t('partnerAvail.remoteSetup')
        }
      }
    ]
  },
  {
    id: "mattress",
    purchased: {
      name: t('products.mattress'),
      image: "🛏️",
      price: "$1,299"
    },
    offers: [
      { 
        name: t('offers.whiteGlove'),
        image: "🚚", 
        price: "$149", 
        category: "service" as const,
        partner: {
          name: t('partners.comfortDelivery'),
          rating: 4.8,
          reviews: 3421,
          description: t('partnerDesc.comfortDelivery'),
          availability: t('partnerAvail.schedule2to4')
        }
      },
      { 
        name: t('offers.pillowSet'),
        image: "🛋️", 
        price: "$89", 
        category: "accessory" as const,
        partner: {
          name: t('common.yourStore'),
          rating: 4.7,
          reviews: 2156,
          description: t('partnerDesc.yourStore'),
          availability: t('partnerAvail.inStock')
        }
      },
      { 
        name: t('offers.sleepTracker'),
        image: "📊", 
        price: "$199", 
        category: "accessory" as const,
        partner: {
          name: t('partners.sleepTech'),
          rating: 4.6,
          reviews: 987,
          description: t('partnerDesc.sleepTech'),
          availability: t('partnerAvail.ships1to2')
        }
      }
    ]
  },
  {
    id: "grill",
    purchased: {
      name: t('products.grill'),
      image: "🔥",
      price: "$899"
    },
    offers: [
      { 
        name: t('offers.grillAssembly'),
        image: "🔧", 
        price: "$129", 
        category: "service" as const,
        partner: {
          name: t('partners.grillMasters'),
          rating: 4.9,
          reviews: 1234,
          description: t('partnerDesc.grillMasters'),
          availability: t('partnerAvail.bookWithin48')
        }
      },
      { 
        name: t('offers.grillAccessories'),
        image: "🍖", 
        price: "$59", 
        category: "accessory" as const,
        partner: {
          name: t('common.yourStore'),
          rating: 4.8,
          reviews: 3456,
          description: t('partnerDesc.yourStore'),
          availability: t('partnerAvail.inStock')
        }
      },
      { 
        name: t('offers.bbqClass'),
        image: "👨‍🍳", 
        price: "$89", 
        category: "service" as const,
        partner: {
          name: t('partners.pitmaster'),
          rating: 4.9,
          reviews: 567,
          description: t('partnerDesc.pitmaster'),
          availability: t('partnerAvail.weekendClasses')
        }
      }
    ]
  },
  {
    id: "headphones",
    purchased: {
      name: t('products.headphones'),
      image: "🎧",
      price: "$299"
    },
    offers: [
      { 
        name: t('offers.carryingCase'),
        image: "💼", 
        price: "$49", 
        category: "accessory" as const,
        partner: {
          name: t('common.yourStore'),
          rating: 4.7,
          reviews: 1987,
          description: t('partnerDesc.yourStore'),
          availability: t('partnerAvail.inStock')
        }
      },
      { 
        name: t('offers.headphoneWarranty'),
        image: "🛡️", 
        price: "$89", 
        category: "warranty" as const,
        partner: {
          name: t('partners.audioGuard'),
          rating: 4.6,
          reviews: 5432,
          description: t('partnerDesc.audioGuard'),
          availability: t('partnerAvail.instantActivation')
        }
      },
      { 
        name: t('offers.audioCalibration'),
        image: "🎵", 
        price: "$79", 
        category: "service" as const,
        partner: {
          name: t('partners.soundTech'),
          rating: 4.9,
          reviews: 234,
          description: t('partnerDesc.soundTech'),
          availability: t('partnerAvail.remoteSession')
        }
      }
    ]
  },
  {
    id: "smartwatch",
    purchased: {
      name: t('products.smartwatch'),
      image: "⌚",
      price: "$399"
    },
    offers: [
      { 
        name: t('offers.sportBands'),
        image: "🏃", 
        price: "$39", 
        category: "accessory" as const,
        partner: {
          name: t('common.yourStore'),
          rating: 4.8,
          reviews: 3456,
          description: t('partnerDesc.yourStore'),
          availability: t('partnerAvail.inStock')
        }
      },
      { 
        name: t('offers.healthCoach'),
        image: "📱", 
        price: "$12.99/mo", 
        category: "subscription" as const,
        partner: {
          name: t('partners.fitLife'),
          rating: 4.7,
          reviews: 12389,
          description: t('partnerDesc.fitLife'),
          availability: t('partnerAvail.freeTrial30')
        }
      },
      { 
        name: t('offers.personalTraining'),
        image: "💪", 
        price: "$129", 
        category: "service" as const,
        partner: {
          name: t('partners.eliteFitness'),
          rating: 4.9,
          reviews: 567,
          description: t('partnerDesc.eliteFitness'),
          availability: t('partnerAvail.bookOnlineOrPerson')
        }
      }
    ]
  },
  {
    id: "airpurifier",
    purchased: {
      name: t('products.airpurifier'),
      image: "🌪️",
      price: "$249"
    },
    offers: [
      { 
        name: t('offers.filterReplacement'),
        image: "🔄", 
        price: "$79", 
        category: "accessory" as const,
        partner: {
          name: t('common.yourStore'),
          rating: 4.8,
          reviews: 2341,
          description: t('partnerDesc.yourStore'),
          availability: t('partnerAvail.inStock')
        }
      },
      { 
        name: t('offers.airQualityMonitor'),
        image: "📊", 
        price: "$149", 
        category: "accessory" as const,
        partner: {
          name: t('partners.cleanAir'),
          rating: 4.6,
          reviews: 1234,
          description: t('partnerDesc.cleanAir'),
          availability: t('partnerAvail.ships2to3')
        }
      },
      { 
        name: t('offers.airAssessment'),
        image: "🏠", 
        price: "$199", 
        category: "service" as const,
        partner: {
          name: t('partners.indoorEnv'),
          rating: 4.9,
          reviews: 456,
          description: t('partnerDesc.indoorEnv'),
          availability: t('partnerAvail.within5days')
        }
      }
    ]
  },
  {
    id: "standingdesk",
    purchased: {
      name: t('products.standingdesk'),
      image: "🪑",
      price: "$699"
    },
    offers: [
      { 
        name: t('offers.ergoKit'),
        image: "⌨️", 
        price: "$99", 
        category: "accessory" as const,
        partner: {
          name: t('common.yourStore'),
          rating: 4.7,
          reviews: 1876,
          description: t('partnerDesc.yourStore'),
          availability: t('partnerAvail.inStock')
        }
      },
      { 
        name: t('offers.deskAssembly'),
        image: "🔧", 
        price: "$149", 
        category: "service" as const,
        partner: {
          name: t('partners.officeSetup'),
          rating: 4.8,
          reviews: 3421,
          description: t('partnerDesc.officeSetup'),
          availability: t('partnerAvail.sameDayService')
        }
      },
      { 
        name: t('offers.postureCoaching'),
        image: "🧘", 
        price: "$89", 
        category: "service" as const,
        partner: {
          name: t('partners.ergoHealth'),
          rating: 4.9,
          reviews: 234,
          description: t('partnerDesc.ergoHealth'),
          availability: t('partnerAvail.bookOnline')
        }
      }
    ]
  },
  {
    id: "projector",
    purchased: {
      name: t('products.projector'),
      image: "📽️",
      price: "$1,499"
    },
    offers: [
      { 
        name: t('offers.projectorScreen'),
        image: "🖼️", 
        price: "$299", 
        category: "accessory" as const,
        partner: {
          name: t('common.yourStore'),
          rating: 4.8,
          reviews: 987,
          description: t('partnerDesc.yourStore'),
          availability: t('partnerAvail.inStock')
        }
      },
      { 
        name: t('offers.theaterInstall'),
        image: "🏠", 
        price: "$399", 
        category: "service" as const,
        partner: {
          name: t('partners.cinemaInstall'),
          rating: 4.9,
          reviews: 1234,
          description: t('partnerDesc.cinemaInstall'),
          availability: t('partnerAvail.book3to7')
        }
      },
      { 
        name: t('offers.streamingBundle'),
        image: "📺", 
        price: "$24.99/mo", 
        category: "subscription" as const,
        partner: {
          name: t('partners.streamMax'),
          rating: 4.6,
          reviews: 45678,
          description: t('partnerDesc.streamMax'),
          availability: t('partnerAvail.startImmediately')
        }
      }
    ]
  }
];

export default function Examples() {
  const { t } = useLanguage();
  const examplePairings = getExamplePairings(t);
  
  const categories = [
    { name: t('category.accessories'), count: 14, color: "bg-blue-100 text-blue-700" },
    { name: t('category.services'), count: 18, color: "bg-green-100 text-green-700" },
    { name: t('category.warranties'), count: 8, color: "bg-purple-100 text-purple-700" },
    { name: t('category.subscriptions'), count: 12, color: "bg-orange-100 text-orange-700" }
  ];
  
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
              {t('examples.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              {t('examples.subtitle')}
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
              {t('examples.categories.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('examples.categories.subtitle')}
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
                  <p className="text-sm text-muted-foreground">{t('examples.activePairings')}</p>
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
              {t('examples.examplePairingsTitle')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('examples.grid.subtitle')}
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
                {t('examples.successStories.title')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('examples.successStories.subtitle')}
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
                  {t('success.electronicsStore')}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t('success.electronicsQuote')}
                </p>
                <div className="text-2xl font-bold gradient-text">+€89k</div>
                <p className="text-sm text-muted-foreground">{t('success.electronicsMetric')}</p>
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
                  {t('success.kitchenSpecialists')}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t('success.kitchenQuote')}
                </p>
                <div className="text-2xl font-bold gradient-text">+34%</div>
                <p className="text-sm text-muted-foreground">{t('success.kitchenMetric')}</p>
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
                  {t('success.sportsRetailer')}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t('success.sportsQuote')}
                </p>
                <div className="text-2xl font-bold gradient-text">28%</div>
                <p className="text-sm text-muted-foreground">{t('success.sportsMetric')}</p>
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
                  {t('examples.cta.title')}
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {t('examples.cta.subtitle')}
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <Link to="/contact">
                    <Button 
                      size="lg"
                      className="gradient-primary text-white font-semibold px-8 py-4 text-lg hover:shadow-xl hover-lift"
                    >
                      {t('examples.cta.startBeta')}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="px-8 py-4 text-lg hover:bg-muted transition-colors"
                    >
                      {t('examples.cta.tryDemo')}
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
