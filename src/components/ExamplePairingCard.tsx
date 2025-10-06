import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PartnerDetailsModal } from "./PartnerDetailsModal";
import { useLanguage } from "@/contexts/LanguageContext";

interface Partner {
  name: string;
  rating: number;
  reviews: number;
  description: string;
  availability: string;
}

interface Offer {
  name: string;
  image: string;
  price: string;
  category: "accessory" | "service" | "warranty" | "subscription";
  partner: Partner;
}

interface ExamplePairing {
  id: string;
  purchased: {
    name: string;
    image: string;
    price: string;
  };
  offers: Array<Offer>;
}

interface ExamplePairingCardProps {
  pairing: ExamplePairing;
  onTryDemo?: (itemId: string) => void;
}

export const ExamplePairingCard = ({ pairing, onTryDemo }: ExamplePairingCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const { t } = useLanguage();

  const categoryColors = {
    accessory: "bg-blue-100 text-blue-700",
    service: "bg-green-100 text-green-700",
    warranty: "bg-purple-100 text-purple-700",
    subscription: "bg-orange-100 text-orange-700",
  };

  const handleOfferClick = (offer: Offer, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedOffer(offer);
  };

  return (
    <div className="relative h-80 perspective-1000">
      <motion.div
        className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Side - Purchased Item */}
        <Card className="absolute inset-0 backface-hidden bg-card border border-border hover:shadow-lg transition-all duration-200">
          <div className="p-6 h-full flex flex-col justify-between">
            <div className="text-center">
              <div className="text-6xl mb-4">{pairing.purchased.image}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {pairing.purchased.name}
              </h3>
              <p className="text-2xl font-bold gradient-text mb-4">
                {pairing.purchased.price}
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full mb-3">
                <RotateCcw className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">{t('examples.clickToSee')}</p>
            </div>
          </div>
        </Card>

        {/* Back Side - Offers */}
        <Card className="absolute inset-0 backface-hidden bg-card border border-border hover:shadow-lg transition-all duration-200 transform-rotate-y-180">
          <div className="p-6 h-full flex flex-col">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t('examples.perfectAddons')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('examples.for')} {pairing.purchased.name}
                </p>
              </div>
            
            <div className="flex-1 space-y-3">
              {pairing.offers.map((offer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: isFlipped ? index * 0.1 : 0 }}
                  onClick={(e) => handleOfferClick(offer, e)}
                  className="flex items-center space-x-3 p-3 bg-surface-50 rounded-xl border border-border cursor-pointer hover:bg-surface-100 hover:shadow-md transition-all duration-200 hover-lift"
                >
                  <div className="text-2xl">{offer.image}</div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-foreground truncate">
                      {offer.name}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs font-semibold text-primary">
                        {offer.price}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${categoryColors[offer.category]}`}>
                          {t(`category.${offer.category}`)}
                        </span>
                        {offer.partner.name !== t('common.yourStore') && (
                          <span className="text-xs text-muted-foreground">
                            {t('common.by')} {offer.partner.name}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-border">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  onTryDemo?.(pairing.id);
                }}
                variant="outline"
                className="w-full text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                {t('examples.tryInDemo')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Partner Details Modal */}
      <PartnerDetailsModal
        isOpen={!!selectedOffer}
        onClose={() => setSelectedOffer(null)}
        offer={selectedOffer}
      />
    </div>
  );
};