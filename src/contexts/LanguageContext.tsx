import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: 'en' | 'nl';
  setLanguage: (lang: 'en' | 'nl') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.howItWorks': 'How It Works',
    'nav.examples': 'Examples',
    'nav.merchants': 'For Merchants',
    'nav.partners': 'For Partners',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.joinBeta': 'Join Beta',
    
    // Home Page
    'home.hero.title': 'Turn your Thank-You Page into Instant Revenue.',
    'home.hero.subtitle': 'AmplifAI shows highly relevant add-ons from your catalog and trusted partners—right after purchase.',
    'home.hero.joinBeta': 'Join the Beta',
    'home.hero.seeExamples': 'See Examples',
    
    // Widget Demo
    'widget.title': 'Perfect additions for you',
    'widget.subtitle': 'Curated based on your purchase',
    'widget.orderConfirmed': 'Order Confirmed!',
    'widget.thankYou': 'Thank you for your purchase of the',
    'widget.yourStore': 'Your Store',
    'widget.partners': 'Partners',
    'widget.addInOneClick': 'Add in 1 click',
    'widget.added': 'Added!',
    'widget.byAmplif': 'by AmplifAI',
    
    // Examples Page
    'examples.title': 'Perfect Pairing Examples',
    'examples.subtitle': 'See how AmplifAI creates perfect product pairings across different categories. Each pairing is intelligently matched to maximize value for your customers.',
    'examples.categories.title': 'Offer Categories',
    'examples.categories.subtitle': 'AmplifAI supports multiple types of complementary offers to maximize your revenue potential',
    'examples.tryInDemo': 'Try in Demo',
    
    // How It Works
    'howItWorks.title': 'How AmplifAI Works',
    'howItWorks.subtitle': 'Transform your checkout completion into a revenue opportunity with just 3 simple steps',
    'howItWorks.step1.title': 'Install',
    'howItWorks.step1.desc': 'Add our lightweight snippet to your thank-you page in under 5 minutes',
    'howItWorks.step2.title': 'Match', 
    'howItWorks.step2.desc': 'Our AI analyzes the purchase and shows 3 perfect complementary offers',
    'howItWorks.step3.title': 'Convert',
    'howItWorks.step3.desc': 'Customers add relevant items with 1-2 clicks, boosting your AOV instantly',
    
    // About Page
    'about.title': 'About AmplifAI',
    'about.subtitle': 'We\'re revolutionizing post-purchase experiences with intelligent product recommendations',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'AmplifAI transforms the often-overlooked thank-you page into a powerful revenue generator. We believe that the moment after purchase is when customers are most receptive to complementary offers—and we\'ve built the technology to capitalize on that opportunity.',
    'about.story.title': 'Our Story',
    'about.story.text': 'Founded by e-commerce veterans who experienced the frustration of missed revenue opportunities firsthand, AmplifAI was born from a simple observation: customers who just made a purchase are in a buying mindset, but most retailers completely waste this golden moment.',
    'about.technology.title': 'Our Technology',
    'about.technology.text': 'Our proprietary AI analyzes purchase patterns, customer behavior, and product relationships to surface the most relevant add-on offers. We don\'t just show random products—we show the perfect complement to what was just purchased.',
    'about.team.title': 'Built by E-commerce Experts',
    'about.team.text': 'Our team combines deep e-commerce experience with cutting-edge AI expertise. We\'ve helped scale multiple online retailers and understand exactly what merchants need to succeed.',
    
    // Contact
    'contact.title': 'Join the Beta',
    'contact.subtitle': 'Ready to transform your thank-you page or join our partner network? Tell us about your business and let\'s get started.',
    'contact.merchant': 'I\'m a Webshop',
    'contact.partner': 'I\'m a Partner',
    'contact.name': 'Name',
    'contact.email': 'Work Email',
    'contact.company': 'Company',
    'contact.website': 'Website',
    'contact.platform': 'Platform',
    'contact.category': 'Category',
    'contact.submit': 'Count me in',
    'contact.success': 'Thanks! We\'ll reach out within 2 business days.',
    
    // Payment Modal
    'payment.title': 'Complete Your Purchase',
    'payment.subtitle': 'Choose your preferred payment method',
    'payment.card': 'Credit/Debit Card',
    'payment.paypal': 'PayPal',
    'payment.applepay': 'Apple Pay',
    'payment.googlepay': 'Google Pay',
    'payment.total': 'Total',
    'payment.confirm': 'Confirm Payment',
    'payment.processing': 'Processing...',
    'payment.success': 'Payment Successful!',
    'payment.successMsg': 'Your order has been confirmed. You will receive a confirmation email shortly.',
    'payment.cancel': 'Cancel',
    
    // Partner Modal
    'partner.bookAppointment': 'Book Your Appointment',
    'partner.availableTimes': 'Available times for',
    'partner.bookingBtn': 'Book Appointment',
    'partner.selectDateTime': 'Select Date & Time',
    'partner.addToCart': 'Add to Cart',
    'partner.appointmentBooked': 'Appointment Booked!',
    'partner.addedToCart': 'Added to Cart!',
    'partner.soldBy': 'Sold by Your Store',
    'partner.partnerBy': 'Partner:',
    'partner.reviews': 'reviews',
    
    // Footer
    'footer.company': 'Company',
    'footer.blog': 'Blog',
    'footer.careers': 'Careers',
    'footer.support': 'Support',
    'footer.help': 'Help Center',
    'footer.status': 'Status',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.tagline': 'Turn your thank-you page into instant revenue with intelligent product recommendations.',
  },
  nl: {
    // Navigation
    'nav.home': 'Home',
    'nav.howItWorks': 'Hoe Het Werkt',
    'nav.examples': 'Voorbeelden',
    'nav.merchants': 'Voor Merchants',
    'nav.partners': 'Voor Partners',
    'nav.about': 'Over Ons',
    'nav.contact': 'Contact',
    'nav.joinBeta': 'Meld Je Aan',
    
    // Home Page
    'home.hero.title': 'Maak van je Bedankpagina Direct Omzet.',
    'home.hero.subtitle': 'AmplifAI toont zeer relevante add-ons uit je catalogus en vertrouwde partners—direct na de aankoop.',
    'home.hero.joinBeta': 'Meld Je Aan voor Beta',
    'home.hero.seeExamples': 'Bekijk Voorbeelden',
    
    // Widget Demo
    'widget.title': 'Perfecte toevoegingen voor jou',
    'widget.subtitle': 'Geselecteerd op basis van je aankoop',
    'widget.orderConfirmed': 'Bestelling Bevestigd!',
    'widget.thankYou': 'Bedankt voor je aankoop van de',
    'widget.yourStore': 'Jouw Winkel',
    'widget.partners': 'Partners',
    'widget.addInOneClick': 'Toevoegen met 1 klik',
    'widget.added': 'Toegevoegd!',
    'widget.byAmplif': 'door AmplifAI',
    
    // Examples Page
    'examples.title': 'Perfecte Combinatie Voorbeelden',
    'examples.subtitle': 'Zie hoe AmplifAI perfecte productcombinaties creëert in verschillende categorieën. Elke combinatie is intelligent gekozen om de waarde voor je klanten te maximaliseren.',
    'examples.categories.title': 'Aanbod Categorieën',
    'examples.categories.subtitle': 'AmplifAI ondersteunt meerdere soorten complementaire aanbiedingen om je omzet potentiaal te maximaliseren',
    'examples.tryInDemo': 'Probeer in Demo',
    
    // How It Works
    'howItWorks.title': 'Hoe AmplifAI Werkt',
    'howItWorks.subtitle': 'Transformeer je checkout completion in een omzet mogelijkheid met slechts 3 eenvoudige stappen',
    'howItWorks.step1.title': 'Installeren',
    'howItWorks.step1.desc': 'Voeg onze lichtgewicht snippet toe aan je bedankpagina in minder dan 5 minuten',
    'howItWorks.step2.title': 'Matchen',
    'howItWorks.step2.desc': 'Onze AI analyseert de aankoop en toont 3 perfecte complementaire aanbiedingen',
    'howItWorks.step3.title': 'Converteren',
    'howItWorks.step3.desc': 'Klanten voegen relevante items toe met 1-2 kliks, wat je AOV direct verhoogt',
    
    // About Page
    'about.title': 'Over AmplifAI',
    'about.subtitle': 'We revolutioneren post-purchase ervaringen met intelligente productaanbevelingen',
    'about.mission.title': 'Onze Missie',
    'about.mission.text': 'AmplifAI transformeert de vaak over het hoofd geziene bedankpagina in een krachtige omzetgenerator. Wij geloven dat het moment na de aankoop is wanneer klanten het meest ontvankelijk zijn voor complementaire aanbiedingen—en we hebben de technologie gebouwd om van die kans gebruik te maken.',
    'about.story.title': 'Ons Verhaal',
    'about.story.text': 'Opgericht door e-commerce veteranen die de frustratie van gemiste omzetkansen uit eerste hand hebben ervaren, werd AmplifAI geboren uit een eenvoudige observatie: klanten die net een aankoop hebben gedaan hebben een koop mindset, maar de meeste retailers verspillen dit gouden moment volledig.',
    'about.technology.title': 'Onze Technologie',
    'about.technology.text': 'Onze propriëtaire AI analyseert aankooppatronen, klantgedrag en productrelaties om de meest relevante add-on aanbiedingen te tonen. We tonen niet gewoon willekeurige producten—we tonen de perfecte aanvulling op wat net is gekocht.',
    'about.team.title': 'Gebouwd door E-commerce Experts',
    'about.team.text': 'Ons team combineert diepe e-commerce ervaring met cutting-edge AI expertise. We hebben meerdere online retailers helpen schalen en begrijpen precies wat merchants nodig hebben om te slagen.',
    
    // Contact
    'contact.title': 'Meld Je Aan voor Beta',
    'contact.subtitle': 'Klaar om je bedankpagina te transformeren of deel te nemen aan ons partnernetwerk? Vertel ons over je bedrijf en laten we beginnen.',
    'contact.merchant': 'Ik ben een Webshop',
    'contact.partner': 'Ik ben een Partner',
    'contact.name': 'Naam',
    'contact.email': 'Werk E-mail',
    'contact.company': 'Bedrijf',
    'contact.website': 'Website',
    'contact.platform': 'Platform',
    'contact.category': 'Categorie',
    'contact.submit': 'Schrijf me in',
    'contact.success': 'Bedankt! We nemen binnen 2 werkdagen contact met je op.',
    
    // Payment Modal
    'payment.title': 'Voltooi Je Aankoop',
    'payment.subtitle': 'Kies je voorkeursbetalingsmethode',
    'payment.card': 'Credit/Debet Kaart',
    'payment.paypal': 'PayPal',
    'payment.applepay': 'Apple Pay',
    'payment.googlepay': 'Google Pay',
    'payment.total': 'Totaal',
    'payment.confirm': 'Bevestig Betaling',
    'payment.processing': 'Verwerken...',
    'payment.success': 'Betaling Succesvol!',
    'payment.successMsg': 'Je bestelling is bevestigd. Je ontvangt binnenkort een bevestigingsmail.',
    'payment.cancel': 'Annuleren',
    
    // Partner Modal
    'partner.bookAppointment': 'Boek Je Afspraak',
    'partner.availableTimes': 'Beschikbare tijden voor',
    'partner.bookingBtn': 'Boek Afspraak',
    'partner.selectDateTime': 'Selecteer Datum & Tijd',
    'partner.addToCart': 'Toevoegen aan Winkelwagen',
    'partner.appointmentBooked': 'Afspraak Geboekt!',
    'partner.addedToCart': 'Toegevoegd aan Winkelwagen!',
    'partner.soldBy': 'Verkocht door Jouw Winkel',
    'partner.partnerBy': 'Partner:',
    'partner.reviews': 'recensies',
    
    // Footer
    'footer.company': 'Bedrijf',
    'footer.blog': 'Blog',
    'footer.careers': 'Carrières',
    'footer.support': 'Ondersteuning',
    'footer.help': 'Help Center',
    'footer.status': 'Status',
    'footer.legal': 'Juridisch',
    'footer.privacy': 'Privacy Beleid',
    'footer.terms': 'Algemene Voorwaarden',
    'footer.tagline': 'Maak van je bedankpagina direct omzet met intelligente productaanbevelingen.',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'nl'>(() => {
    const saved = localStorage.getItem('amplif-language');
    return (saved as 'en' | 'nl') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('amplif-language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};