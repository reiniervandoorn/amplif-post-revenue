import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function IntroducingAmplifAI() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Introducing AmplifAI: Transform Your Thank You Page",
      date: "January 15, 2025",
      readTime: "5 min read",
      intro: "Your thank you page is one of the most underutilized parts of your e-commerce site. After a customer completes their purchase, they're at their most engaged—and that's exactly when you should be showing them relevant, valuable offers.",
      sections: [
        {
          title: "The Problem with Traditional Thank You Pages",
          content: "Most thank you pages are just... boring. They confirm the order and maybe show a tracking number. But think about it: your customer just demonstrated ultimate buying intent. They pulled out their credit card and trusted you with their money. Why let that momentum die?"
        },
        {
          title: "Enter AmplifAI",
          content: "AmplifAI transforms your thank you page into a revenue-generating machine. Using AI-powered matching, we show customers 3 highly relevant offers right after they complete their purchase. These aren't random upsells—they're intelligently selected based on what they just bought."
        },
        {
          title: "How It Works",
          content: "Installation takes less than 5 minutes. Add our lightweight snippet to your thank you page, and we handle the rest. Our AI analyzes the purchase and instantly displays relevant partner offers—from installation services to warranties to complementary products. You approve which partners can appear on your site, and you earn commission on every sale. It's that simple."
        },
        {
          title: "Real Results",
          content: "Our beta merchants are seeing impressive results. On average, they're adding 15-30% to their average order value within the first 30 days. The attach rate—customers who add at least one offer—averages around 28%. And because these are all commission-based partnerships, there's zero risk."
        },
        {
          title: "Join the Beta",
          content: "We're currently in beta and onboarding select merchants. If you're running an e-commerce store and want to unlock hidden revenue from every order, we'd love to talk. Setup is free, there are no monthly fees, and you only pay when you earn."
        }
      ]
    },
    nl: {
      title: "Introductie van AmplifAI: Transformeer Je Bedankpagina",
      date: "15 januari 2025",
      readTime: "5 min leestijd",
      intro: "Je bedankpagina is een van de meest onderbenuttegedeeltes van je e-commerce site. Nadat een klant hun aankoop heeft voltooid, zijn ze op hun meest betrokken—en dat is precies wanneer je relevante, waardevolle aanbiedingen moet tonen.",
      sections: [
        {
          title: "Het Probleem met Traditionele Bedankpagina's",
          content: "De meeste bedankpagina's zijn gewoon... saai. Ze bevestigen de bestelling en tonen misschien een trackingnummer. Maar denk er eens over na: je klant heeft zojuist ultieme koopintentie getoond. Ze hebben hun creditcard gepakt en jou vertrouwd met hun geld. Waarom dat momentum laten sterven?"
        },
        {
          title: "Maak Kennis met AmplifAI",
          content: "AmplifAI transformeert je bedankpagina in een omzetgenererende machine. Met AI-gedreven matching tonen we klanten 3 zeer relevante aanbiedingen direct nadat ze hun aankoop voltooien. Dit zijn geen willekeurige upsells—ze zijn intelligent geselecteerd op basis van wat ze zojuist hebben gekocht."
        },
        {
          title: "Hoe Het Werkt",
          content: "Installatie duurt minder dan 5 minuten. Voeg ons lichtgewicht snippet toe aan je bedankpagina en wij regelen de rest. Onze AI analyseert de aankoop en toont direct relevante partneraanbiedingen—van installatiediensten tot garanties tot complementaire producten. Jij keurt goed welke partners op je site kunnen verschijnen, en je verdient commissie op elke verkoop. Zo simpel is het."
        },
        {
          title: "Echte Resultaten",
          content: "Onze beta webshops zien indrukwekkende resultaten. Gemiddeld voegen ze 15-30% toe aan hun gemiddelde bestelwaarde binnen de eerste 30 dagen. Het bijkooppercentage—klanten die minstens één aanbieding toevoegen—ligt gemiddeld rond de 28%. En omdat dit allemaal commissie-gebaseerde partnerschappen zijn, is er nul risico."
        },
        {
          title: "Doe Mee met de Bèta",
          content: "We zitten momenteel in bèta en nemen geselecteerde webshops aan. Als je een e-commerce winkel runt en verborgen omzet wilt ontsluiten uit elke bestelling, praten we graag met je. Setup is gratis, er zijn geen maandelijkse kosten, en je betaalt alleen wanneer je verdient."
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === 'en' ? 'Back to Blog' : 'Terug naar Blog'}
            </Link>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{currentContent.date}</span>
              </div>
              <span>•</span>
              <span>{currentContent.readTime}</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              {currentContent.title}
            </h1>

            <p className="text-lg leading-8 text-muted-foreground mb-12">
              {currentContent.intro}
            </p>

            <div className="prose prose-lg max-w-none">
              {currentContent.sections.map((section, index) => (
                <div key={index} className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-surface-50 rounded-3xl border border-border text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {language === 'en' ? 'Ready to get started?' : 'Klaar om te beginnen?'}
              </h3>
              <p className="text-muted-foreground mb-6">
                {language === 'en' 
                  ? 'Join our beta program and start generating additional revenue from your thank you page.'
                  : 'Doe mee met ons beta programma en begin extra omzet te genereren vanaf je bedankpagina.'}
              </p>
              <Link to="/contact">
                <Button size="lg" className="gradient-primary text-white">
                  {language === 'en' ? 'Join Beta' : 'Meld Je Aan'}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
