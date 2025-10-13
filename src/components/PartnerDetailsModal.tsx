import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Calendar as CalendarIcon, Clock, MapPin, CheckCircle } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

export interface Partner {
  name: string;
  rating: number;
  reviews: number;
  description: string;
  availability: string;
}

export interface Offer {
  name: string;
  image: string;
  price: string;
  category: "accessory" | "service" | "warranty" | "subscription";
  partner: Partner;
}

interface PartnerDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  offer: Offer | null;
  onBookingComplete?: () => void;
}

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", 
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

export const PartnerDetailsModal = ({ isOpen, onClose, offer, onBookingComplete }: PartnerDetailsModalProps) => {
  const { t } = useLanguage();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isBooked, setIsBooked] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!offer) return null;

  const isService = offer.category === "service";
  const categoryColors = {
    accessory: "bg-blue-100 text-blue-700",
    service: "bg-green-100 text-green-700",
    warranty: "bg-purple-100 text-purple-700",
    subscription: "bg-orange-100 text-orange-700",
  };

  const handleBooking = () => {
    setIsBooked(true);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setIsBooked(false);
      setSelectedDate(undefined);
      setSelectedTime("");
      if (onBookingComplete) {
        onBookingComplete();
      } else {
        onClose();
      }
    }, 2000);
  };

  const canBook = isService && selectedDate && selectedTime;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <AnimatePresence mode="wait">
          {!isBooked ? (
            <motion.div
              key="booking"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{offer.image}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{offer.name}</h2>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge className={categoryColors[offer.category]}>
                        {t(`category.${offer.category}`)}
                      </Badge>
                      <span className="text-2xl font-bold gradient-text">{offer.price}</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="hover:bg-muted rounded-full p-2"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Partner Info */}
              <div className="bg-surface-50 rounded-xl p-6 border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {offer.partner.name === "Your Store" ? t('partner.soldBy') : `${t('partner.partnerBy')} ${offer.partner.name}`}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{offer.partner.rating}</span>
                    <span className="text-muted-foreground">({offer.partner.reviews.toLocaleString()} {t('partner.reviews')})</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3">{offer.partner.description}</p>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="flex items-center space-x-1 text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span>{offer.partner.availability}</span>
                  </div>
                </div>
              </div>

              {/* Service Booking */}
              {isService && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <CalendarIcon className="h-5 w-5 mr-2" />
                      {t('partner.bookAppointment')}
                    </h3>
                    
                    {/* Calendar */}
                    <div className="bg-background border border-border rounded-xl p-4 mb-4">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => 
                          date < new Date() || 
                          date.getDay() === 0 || // Disable Sundays
                          date > new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // Max 30 days ahead
                        }
                        className="pointer-events-auto"
                      />
                    </div>

                    {/* Time Slots */}
                    {selectedDate && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="space-y-3"
                      >
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{t('partner.availableTimes')} {selectedDate.toDateString()}</span>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                          {timeSlots.map((time) => (
                            <Button
                              key={time}
                              variant={selectedTime === time ? "default" : "outline"}
                              size="sm"
                              onClick={() => setSelectedTime(time)}
                              className="text-xs"
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 pt-6 border-t border-border">
                <Button variant="outline" onClick={onClose}>
                  {t('payment.cancel')}
                </Button>
                {isService ? (
                  <Button
                    onClick={handleBooking}
                    disabled={!canBook}
                    className="gradient-primary text-white"
                  >
                    {canBook ? t('partner.bookingBtn') : t('partner.selectDateTime')}
                  </Button>
                ) : (
                  <Button
                    onClick={handleBooking}
                    className="gradient-primary text-white"
                  >
                    {t('partner.addToCart')}
                  </Button>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle className="h-8 w-8 text-green-600" />
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {isService ? t('partner.appointmentBooked') : t('partner.addedToCart')}
              </h3>
              <p className="text-muted-foreground">
{isService ? (
                  <>
                    {t('partner.your')} {offer.name.toLowerCase()} {t('partner.scheduledOn')} {selectedDate?.toDateString()} {t('partner.at')} {selectedTime}
                  </>
                ) : (
                  <>
                    {offer.name} {t('partner.addedPrefix')}
                  </>
                )}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};