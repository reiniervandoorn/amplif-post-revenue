import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";

interface FormData {
  name: string;
  email: string;
  company: string;
  website: string;
  userType: "merchant" | "partner" | "";
  platform: string;
  category: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    website: "",
    userType: "",
    platform: "",
    category: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to Supabase
      const { error } = await supabase
        .from('signups')
        .insert({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          website: formData.website || null,
          user_type: formData.userType,
          platform: formData.platform || null,
          category: formData.category || null,
        });

      if (error) {
        console.error('Error saving signup:', error);
        throw error;
      }
      
      setIsSubmitted(true);
      toast({
        title: t('contact.successTitle'),
        description: t('contact.success'),
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: t('common.error'),
        description: t('contact.errorMsg'),
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.company && formData.userType;

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-md"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 gradient-primary rounded-full mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4, type: "spring" }}
            >
              <Check className="w-10 h-10 text-white" />
            </motion.div>
          </div>
          
          <h1 className="text-3xl font-bold text-foreground mb-4">
            {t('contact.successTitle')}
          </h1>
          <p className="text-muted-foreground mb-8">
            {t('contact.success')}
          </p>
          
          <div className="space-y-4 text-left bg-surface-50 rounded-2xl p-6 border border-border">
            <h3 className="font-semibold text-foreground">What happens next?</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 gradient-primary rounded-full mt-2"></div>
                <p className="text-sm text-muted-foreground">Review of your application</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 gradient-primary rounded-full mt-2"></div>
                <p className="text-sm text-muted-foreground">15-minute discovery call</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 gradient-primary rounded-full mt-2"></div>
                <p className="text-sm text-muted-foreground">Custom integration plan</p>
              </div>
            </div>
          </div>
          
          {/* Confetti effect for reduced motion safe */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="hidden">✨🎉✨</div>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
              <span className="gradient-text">{t('contact.title')}</span>
            </h1>
            <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 lg:p-12 max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Type Toggle */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold text-foreground">{t('contact.iam')}</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => handleInputChange("userType", "merchant")}
                      className={`p-4 rounded-2xl border-2 transition-all duration-200 ${
                        formData.userType === "merchant"
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border hover:border-muted-foreground text-muted-foreground"
                      }`}
                    >
                      <div className="text-2xl mb-2">🏪</div>
                      <div className="font-semibold">{t('contact.merchant')}</div>
                      <div className="text-xs">{t('contact.merchantDesc')}</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInputChange("userType", "partner")}
                      className={`p-4 rounded-2xl border-2 transition-all duration-200 ${
                        formData.userType === "partner"
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border hover:border-muted-foreground text-muted-foreground"
                      }`}
                    >
                      <div className="text-2xl mb-2">🤝</div>
                      <div className="font-semibold">{t('contact.partner')}</div>
                      <div className="text-xs">{t('contact.partnerDesc')}</div>
                    </button>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">{t('contact.name')} *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder={t('contact.name')}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">{t('contact.email')} *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="you@company.com"
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground">{t('contact.company')} *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder={t('contact.company')}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-foreground">{t('contact.website')}</Label>
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                      placeholder="https://yourwebsite.com"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                {/* Conditional Fields */}
                {formData.userType && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    {formData.userType === "merchant" ? (
                      <div className="space-y-2">
                        <Label className="text-foreground">{t('contact.platform')}</Label>
                        <Select onValueChange={(value) => handleInputChange("platform", value)}>
                          <SelectTrigger className="bg-background border-border focus:border-primary">
                            <SelectValue placeholder={t('contact.selectPlatform')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="shopify">Shopify</SelectItem>
                            <SelectItem value="woocommerce">WooCommerce</SelectItem>
                            <SelectItem value="magento">Magento</SelectItem>
                            <SelectItem value="bigcommerce">BigCommerce</SelectItem>
                            <SelectItem value="salesforce">Salesforce Commerce Cloud</SelectItem>
                            <SelectItem value="custom">Custom Solution</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Label className="text-foreground">{t('contact.category')}</Label>
                        <Select onValueChange={(value) => handleInputChange("category", value)}>
                          <SelectTrigger className="bg-background border-border focus:border-primary">
                            <SelectValue placeholder={t('contact.selectCategory')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="installer">Installation Services</SelectItem>
                            <SelectItem value="warranty">Extended Warranties</SelectItem>
                            <SelectItem value="subscription">Subscription Services</SelectItem>
                            <SelectItem value="course">Training & Courses</SelectItem>
                            <SelectItem value="accessory">Accessories & Add-ons</SelectItem>
                            <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full gradient-primary text-white font-semibold py-4 text-lg hover:shadow-lg hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"
                      />
                      {t('common.submitting')}
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      {t('contact.submit')}
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our{" "}
                  <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>{" "}
                  and{" "}
                  <a href="/terms" className="text-primary hover:underline">Terms of Service</a>.
                </p>
              </form>
            </Card>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-2xl mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Quick Setup</h3>
              <p className="text-sm text-muted-foreground">Integration in under 30 minutes</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-2xl mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">No Risk</h3>
              <p className="text-sm text-muted-foreground">No upfront costs or commitments</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-2xl mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Fast Results</h3>
              <p className="text-sm text-muted-foreground">See revenue within 7 days</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}