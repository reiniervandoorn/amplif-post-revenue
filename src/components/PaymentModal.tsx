import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CreditCard, CheckCircle, Smartphone } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    price: string;
    image: string;
  } | null;
}

const paymentMethods = [
  { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, color: 'bg-blue-100 text-blue-700' },
  { id: 'paypal', name: 'PayPal', icon: '🅿️', color: 'bg-blue-100 text-blue-700' },
  { id: 'applepay', name: 'Apple Pay', icon: '🍎', color: 'bg-black text-white' },
  { id: 'googlepay', name: 'Google Pay', icon: '🎯', color: 'bg-green-100 text-green-700' },
];

export const PaymentModal = ({ isOpen, onClose, product }: PaymentModalProps) => {
  const { t } = useLanguage();
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!product) return null;

  const handlePayment = () => {
    if (!selectedMethod) return;
    
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
        setSelectedMethod('');
        onClose();
      }, 2500);
    }, 2000);
  };

  const canPay = selectedMethod && !isProcessing;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="payment"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold text-foreground">{t('payment.title')}</h2>
                  <p className="text-sm text-muted-foreground">{t('payment.subtitle')}</p>
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

              {/* Product Summary */}
              <div className="flex items-center space-x-3 p-4 bg-surface-50 rounded-xl border border-border">
                <div className="text-2xl">{product.image}</div>
                <div className="flex-1">
                  <p className="font-medium text-sm text-foreground">{product.name}</p>
                  <p className="text-lg font-bold gradient-text">{product.price}</p>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-foreground">{t('payment.subtitle')}</h3>
                <div className="space-y-2">
                  {paymentMethods.map((method) => (
                    <Card
                      key={method.id}
                      className={`p-4 cursor-pointer transition-all duration-200 border ${
                        selectedMethod === method.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-muted-foreground'
                      }`}
                      onClick={() => setSelectedMethod(method.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${method.color}`}>
                          {typeof method.icon === 'string' ? (
                            <span className="text-sm">{method.icon}</span>
                          ) : (
                            <method.icon className="w-4 h-4" />
                          )}
                        </div>
                        <span className="font-medium text-sm">{t(`payment.${method.id}` as any) || method.name}</span>
                        {selectedMethod === method.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-auto w-4 h-4 bg-primary rounded-full flex items-center justify-center"
                          >
                            <CheckCircle className="w-3 h-3 text-white" />
                          </motion.div>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Payment Button */}
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{t('payment.total')}</span>
                  <span className="font-bold text-foreground">{product.price}</span>
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline" onClick={onClose} className="flex-1">
                    {t('payment.cancel')}
                  </Button>
                  <Button
                    onClick={handlePayment}
                    disabled={!canPay}
                    className="flex-1 gradient-primary text-white"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-4 h-4 mr-2 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        {t('payment.processing')}
                      </>
                    ) : (
                      t('payment.confirm')
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="text-center py-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle className="h-8 w-8 text-green-600" />
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t('payment.success')}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('payment.successMsg')}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};